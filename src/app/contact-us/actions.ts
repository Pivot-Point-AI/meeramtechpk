// app/contact-us/actions.ts
"use server";

import nodemailer from "nodemailer";
import {
  CONTACT_LIMITS,
  type ContactField,
  type ContactState,
  type ContactValues,
} from "@/lib/contact";

// ---- Inline SMTP config -----------------------------------------------
// Swap host/port/secure to match wherever info@meeramtech.com actually lives:
//   cPanel / shared hosting -> mail.meeramtech.com : 465, secure: true
//   Google Workspace        -> smtp.gmail.com      : 465, secure: true   (app password)
//   Microsoft 365           -> smtp.office365.com  : 587, secure: false  (STARTTLS)
const SMTP_HOST = "smtp.office365.com";
const SMTP_PORT = 587;
const SMTP_SECURE = false;
const SMTP_USER = "info@meeramtech.com";
const SMTP_PASS = "Login@786";

const TO_ADDRESS = "info@meeramtech.com";
// -----------------------------------------------------------------------

/**
 * Module scope, so the connection pool survives between invocations on a warm
 * lambda instead of doing a fresh TLS handshake per submission.
 */
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
  pool: true,
  maxConnections: 2,
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 20_000,
  tls: {
    // Shared hosts often serve a certificate for the server's own hostname
    // rather than mail.<domain>. Delete this once you've confirmed the cert
    // matches — while it's here, the connection is not MITM-resistant.
    rejectUnauthorized: false,
  },
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function read(formData: FormData, field: ContactField): string {
  const raw = formData.get(field);
  return typeof raw === "string" ? raw.trim().slice(0, CONTACT_LIMITS[field]) : "";
}

/** Anything interpolated into a mail header must not carry CR/LF, or it can inject headers. */
function headerSafe(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(values: ContactValues): ContactState["errors"] {
  const errors: NonNullable<ContactState["errors"]> = {};

  if (!values.name) errors.name = "Please tell us your name.";
  if (!values.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = "That email address doesn't look right.";
  if (!values.message) errors.message = "Please write a short message.";
  else if (values.message.length < 10) errors.message = "Please add a little more detail.";

  return Object.keys(errors).length ? errors : undefined;
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const values: ContactValues = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    subject: read(formData, "subject"),
    message: read(formData, "message"),
  };

  // Honeypot. Report success so the bot marks the target as done and moves on.
  if (String(formData.get("company") ?? "").trim()) {
    return { status: "success" };
  }

  const errors = validate(values);
  if (errors) {
    return { status: "error", errors, values };
  }

  const name = headerSafe(values.name);
  const email = headerSafe(values.email);
  const subject = headerSafe(values.subject);

  try {
    await transporter.sendMail({
      // Must be the authenticated mailbox — most servers reject a mismatched
      // From outright, and SPF/DMARC would fail even where they don't.
      from: { name: "MeeramTech Website", address: SMTP_USER },
      to: TO_ADDRESS,
      // Puts the enquirer one click away in any mail client.
      replyTo: { name, address: email },
      subject: subject ? `[Website] ${subject}` : `[Website] New enquiry from ${name}`,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        values.subject ? `Subject: ${values.subject}` : null,
        "",
        values.message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;font-size:15px;line-height:1.6;color:#1C1A1A">
          <h2 style="margin:0 0 16px;font-size:18px">New website enquiry</h2>
          <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(values.name)}</p>
          <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(values.email)}</p>
          ${values.subject ? `<p style="margin:0 0 4px"><strong>Subject:</strong> ${escapeHtml(values.subject)}</p>` : ""}
          <hr style="border:none;border-top:1px solid #E5E5E5;margin:16px 0" />
          <p style="margin:0;white-space:pre-wrap">${escapeHtml(values.message)}</p>
        </div>
      `,
    });

    return { status: "success" };
  } catch (error) {
    // Server-side only — the user gets a generic line, never the SMTP detail.
    console.error("[contact] send failed:", error);
    return {
      status: "error",
      message: "We couldn't send your message just now. Please try again, or email info@meeramtech.com directly.",
      values,
    };
  }
}