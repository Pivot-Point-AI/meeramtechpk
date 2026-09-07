import "server-only";

import nodemailer, { type Transporter } from "nodemailer";

/**
 * SMTP transport for outbound mail.
 *
 * Nothing here is hard-coded to a provider: host, port and credentials all come
 * from the environment, so the same build works against Google Workspace,
 * Microsoft 365 or cPanel without a code change.
 *
 * The transport is created once and reused. Nodemailer keeps a connection pool,
 * so a warm server does not re-handshake TLS on every enquiry.
 */

const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

export type MailerConfigError = { missing: string[] };

function readConfig() {
  const missing = required.filter((key) => !process.env[key]?.trim());
  if (missing.length) return { ok: false as const, missing };

  const port = Number(process.env.SMTP_PORT);
  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    return { ok: false as const, missing: ["SMTP_PORT (not a valid port number)"] };
  }

  return {
    ok: true as const,
    host: process.env.SMTP_HOST!.trim(),
    port,
    // 465 is implicit TLS. 587 and 25 start plaintext and upgrade via STARTTLS,
    // which nodemailer does automatically when `secure` is false.
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    user: process.env.SMTP_USER!.trim(),
    pass: process.env.SMTP_PASS!,
  };
}

let cached: Transporter | null = null;

export function getTransport() {
  const config = readConfig();
  if (!config.ok) return { ok: false as const, missing: config.missing };

  if (!cached) {
    cached = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: { user: config.user, pass: config.pass },
      pool: true,
      maxConnections: 2,
      // Fail fast rather than holding a request open until the platform kills it.
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
  }

  return { ok: true as const, transport: cached, user: config.user };
}

/** Where enquiries land. Defaults to the shared inbox. */
export const CONTACT_TO = process.env.CONTACT_TO?.trim() || "info@meeramtech.com";

/**
 * The visitor's address must NOT go in `From`. The message is sent from
 * MeeramTech's own server, so a `From` of gmail.com (or whatever the visitor
 * uses) fails that domain's SPF/DKIM and gets the mail spam-foldered or
 * rejected outright. The authenticated mailbox sends; `Reply-To` carries the
 * visitor, so hitting reply in the inbox still reaches them.
 */
export function buildEnquiry(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
  from: string;
}) {
  const subject = input.subject
    ? `Website enquiry: ${input.subject}`
    : `Website enquiry from ${input.name}`;

  const text = [
    `Name:    ${input.name}`,
    `Email:   ${input.email}`,
    `Subject: ${input.subject || "(none given)"}`,
    "",
    input.message,
    "",
    "---",
    "Sent from the contact form on meeramtech.com",
  ].join("\n");

  return {
    from: `"MeeramTech Website" <${input.from}>`,
    to: CONTACT_TO,
    replyTo: `"${input.name.replace(/"/g, "")}" <${input.email}>`,
    subject,
    text,
  };
}