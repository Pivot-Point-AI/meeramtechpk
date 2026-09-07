"use server";

import { headers } from "next/headers";
import { getTransport, buildEnquiry } from "@/lib/mailer";
import { checkRateLimit } from "@/lib/rate-limit";
import { CONTACT_LIMITS as LIMITS, type ContactState } from "@/lib/contact";

/** Deliberately loose - the only real test of an address is sending to it. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** CR/LF in a header value is the classic injection vector. */
const stripNewlines = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

async function clientKey() {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = stripNewlines(String(formData.get("name") ?? ""));
  const email = stripNewlines(String(formData.get("email") ?? ""));
  const subject = stripNewlines(String(formData.get("subject") ?? ""));
  const message = String(formData.get("message") ?? "").trim();
  const values = { name, email, subject, message };

  // Honeypot. Real people never fill a field they cannot see, so a value here
  // is a bot. Return the success shape rather than an error: telling a bot it
  // was caught just teaches whoever wrote it to stop filling the field.
  if (String(formData.get("company") ?? "").trim()) {
    return { status: "success" };
  }

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) errors.name = "That name is too long.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL.test(email) || email.length > LIMITS.email)
    errors.email = "That email address does not look right.";

  if (subject.length > LIMITS.subject) errors.subject = "That subject is too long.";

  if (!message) errors.message = "Please enter a message.";
  else if (message.length > LIMITS.message)
    errors.message = `Please keep the message under ${LIMITS.message} characters.`;

  if (Object.keys(errors).length) {
    return { status: "error", errors, values };
  }

  const limit = checkRateLimit(await clientKey());
  if (!limit.allowed) {
    return {
      status: "error",
      message: "You have sent several messages already. Please try again a little later.",
      values,
    };
  }

  const mailer = getTransport();
  if (!mailer.ok) {
    // Never leak which variables are unset to the browser; log for the operator.
    console.error("[contact] SMTP is not configured. Missing:", mailer.missing.join(", "));
    return {
      status: "error",
      message: "We could not send your message right now. Please email info@meeramtech.com directly.",
      values,
    };
  }

  try {
    await mailer.transport.sendMail(
      buildEnquiry({ name, email, subject, message, from: mailer.user })
    );
    return { status: "success" };
  } catch (error) {
    console.error("[contact] sendMail failed:", error);
    return {
      status: "error",
      message: "We could not send your message right now. Please email info@meeramtech.com directly.",
      values,
    };
  }
}