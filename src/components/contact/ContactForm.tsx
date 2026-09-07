"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "@/app/contact-us/actions";
import { initialContactState, CONTACT_LIMITS } from "@/lib/contact";

const FIELD =
  "border-b border-[#7E7E7E] bg-transparent pb-2 transition-colors duration-300 ease-out hover:border-[#292929] motion-reduce:transition-none text-[16px] text-black placeholder:text-[#7E7E7E] focus:border-brand-blue focus:outline-none";

/** Only ever rendered when a field failed, so the resting layout is untouched. */
function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-2 text-[14px] leading-[1.4] text-[#C4162B]">
      {children}
    </p>
  );
}

/**
 * The label never changes, because the button is `w-fit` - swapping in
 * "Sending…" would resize it and shift the layout. Pending state is carried by
 * opacity and the disabled cursor instead.
 */
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="mt-6 w-fit cursor-pointer rounded-full bg-[#2212FF] px-10 py-4 text-[20px] font-medium text-white transition-[opacity,scale] duration-300 ease-out hover:opacity-90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2212FF] disabled:cursor-wait disabled:opacity-60 motion-reduce:transition-none motion-reduce:active:scale-100 sm:mt-[70px]"
    >
      Send message
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialContactState);
  const values = state.values;

  return (
    <div className="bg-[#F3F2F7] p-8 sm:px-[60px] sm:py-[75px]">
      <h2 className="text-[20px] font-semibold uppercase text-[#1C1A1A] sm:text-[26px]">
        Get in touch
      </h2>
      <p className="mt-3 max-w-[420px] text-[16px] leading-[1.5] text-[#1C1A1A] sm:mt-[15px] sm:text-[20px] sm:leading-[30px]">
        Reach out for service inquiries, solution guidance, or partnership opportunities
      </p>

      {state.status === "success" ? (
        <p role="status" aria-live="polite" className="mt-9 text-[16px] font-medium text-brand-blue">
          Thanks &mdash; your message has been sent. We&rsquo;ll be in touch shortly.
        </p>
      ) : (
        /* `action` rather than `onSubmit`: the form posts and sends even if the
           JavaScript never loads or fails to hydrate. */
        <form action={formAction} className="mt-9 flex flex-col">
          {/* Honeypot. Off-screen and out of flow, so it costs no layout and is
              skipped by keyboard and screen readers - only bots fill it. */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px opacity-0"
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="name"
            required
            maxLength={CONTACT_LIMITS.name}
            defaultValue={values?.name}
            aria-invalid={state.errors?.name ? true : undefined}
            aria-describedby={state.errors?.name ? "contact-name-error" : undefined}
            className={FIELD}
          />
          <FieldError id="contact-name-error">{state.errors?.name}</FieldError>

          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required
            maxLength={CONTACT_LIMITS.email}
            defaultValue={values?.email}
            aria-invalid={state.errors?.email ? true : undefined}
            aria-describedby={state.errors?.email ? "contact-email-error" : undefined}
            className={`mt-6 ${FIELD} sm:mt-[67px]`}
          />
          <FieldError id="contact-email-error">{state.errors?.email}</FieldError>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            maxLength={CONTACT_LIMITS.subject}
            defaultValue={values?.subject}
            aria-invalid={state.errors?.subject ? true : undefined}
            aria-describedby={state.errors?.subject ? "contact-subject-error" : undefined}
            className={`mt-6 ${FIELD} sm:mt-[67px]`}
          />
          <FieldError id="contact-subject-error">{state.errors?.subject}</FieldError>

          <textarea
            name="message"
            placeholder="Message"
            rows={2}
            required
            maxLength={CONTACT_LIMITS.message}
            defaultValue={values?.message}
            aria-invalid={state.errors?.message ? true : undefined}
            aria-describedby={state.errors?.message ? "contact-message-error" : undefined}
            className={`mt-8 resize-none ${FIELD} sm:mt-[96px]`}
          />
          <FieldError id="contact-message-error">{state.errors?.message}</FieldError>

          {state.message && (
            <p role="alert" className="mt-6 text-[15px] leading-[1.5] text-[#C4162B]">
              {state.message}
            </p>
          )}

          <SubmitButton />
        </form>
      )}
    </div>
  );
}