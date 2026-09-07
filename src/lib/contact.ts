/**
 * Shared shape for the contact form.
 *
 * This lives outside the "use server" module on purpose: such a module may only
 * export async functions, so a plain object exported from there does not get
 * bundled by value - the client receives a server reference instead, and
 * useActionState starts with a broken initial state.
 */

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  /** Per-field problems, keyed by input name. */
  errors?: Partial<Record<"name" | "email" | "subject" | "message", string>>;
  /** Echoed back so a failed submit does not wipe what they typed. */
  values?: { name: string; email: string; subject: string; message: string };
};

export const initialContactState: ContactState = { status: "idle" };

export const CONTACT_LIMITS = { name: 100, email: 254, subject: 150, message: 5000 } as const;