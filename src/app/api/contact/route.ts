// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // nodemailer will not run on the Edge runtime
export const dynamic = "force-dynamic";

// ---- Inline SMTP config -----------------------------------------------
// Swap HOST/PORT/SECURE to match wherever info@meeramtech.com is hosted:
//   cPanel / shared hosting -> mail.meeramtech.com : 465 (secure: true)
//   Google Workspace        -> smtp.gmail.com      : 465 (secure: true)  [app password required]
//   Microsoft 365           -> smtp.office365.com  : 587 (secure: false) [STARTTLS]
const SMTP = {
  host: "mail.meeramtech.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@meeramtech.com",
    pass: "Login@786",
  },
} as const;

const TO_ADDRESS = "info@meeramtech.com";
// -----------------------------------------------------------------------

const transporter = nodemailer.createTransport({
  host: SMTP.host,
  port: SMTP.port,
  secure: SMTP.secure,
  auth: { user: SMTP.auth.user, pass: SMTP.auth.pass },
  tls: {
    // Shared hosts often present a certificate for the server hostname,
    // not for mail.<domain>. Drop this line once you confirm the cert matches.
    rejectUnauthorized: false,
  },
});

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Strip CR/LF so user input can never inject extra mail headers.
function sanitizeHeader(input: string) {
  return input.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = sanitizeHeader(String(body?.name ?? "")).slice(0, 120);
    const email = sanitizeHeader(String(body?.email ?? "")).slice(0, 200);
    const phone = sanitizeHeader(String(body?.phone ?? "")).slice(0, 60);
    const subject = sanitizeHeader(String(body?.subject ?? "")).slice(0, 200);
    const message = String(body?.message ?? "").slice(0, 5000);
    const honeypot = String(body?.company ?? ""); // hidden field, bots fill it

    if (honeypot) {
      // Pretend success so the bot does not retry.
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      // From must be the authenticated mailbox or the server will reject it.
      from: `"MeeramTech Website" <${SMTP.auth.user}>`,
      to: TO_ADDRESS,
      replyTo: `"${name}" <${email}>`,
      subject: subject ? `[Website] ${subject}` : `[Website] New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        subject ? `Subject: ${subject}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:15px;line-height:1.6;color:#111">
          <h2 style="margin:0 0 16px;font-size:18px">New website enquiry</h2>
          <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p style="margin:0 0 4px"><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
          ${subject ? `<p style="margin:0 0 4px"><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0" />
          <p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 500 }
    );
  }
}