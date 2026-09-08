// lib/contact.ts
// Imported by a "use client" component, so this file must stay free of any
// server-only code — types and constants only.

/** Caps are enforced twice: `maxLength` in the browser, `.slice()` on the server. */
export const CONTACT_LIMITS = {
  name: 100,
  email: 254, // RFC 5321 maximum
  subject: 150,
  message: 4000,
} as const;

export type ContactField = keyof typeof CONTACT_LIMITS;

export type ContactValues = Record<ContactField, string>;

export type ContactState = {
  status: "idle" | "error" | "success";
  /** Form-level failure (transport error, unexpected throw). Rendered above the button. */
  message?: string;
  /** Per-field messages, rendered inline under the offending input. */
  errors?: Partial<Record<ContactField, string>>;
  /**
   * Echoed back on failure. React resets an uncontrolled form once its action
   * settles, and the reset restores each input to its current `defaultValue` —
   * so without this the user loses everything they typed.
   */
  values?: ContactValues;
};

export const initialContactState: ContactState = { status: "idle" };