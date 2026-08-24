"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#F3F2F7] p-8 sm:px-[60px] sm:py-[75px]">
      <h2 className="text-[20px] font-semibold uppercase text-[#1C1A1A] sm:text-[26px]">
        Get in touch
      </h2>
      <p className="mt-3 max-w-[420px] text-[16px] leading-[1.5] text-[#1C1A1A] sm:mt-[15px] sm:text-[20px] sm:leading-[30px]">
        Reach out for service inquiries, solution guidance, or partnership opportunities
      </p>

      {submitted ? (
        <p className="mt-9 text-[16px] font-medium text-brand-blue">
          Thanks — your message has been noted. We&rsquo;ll be in touch shortly.
        </p>
      ) : (
        <form
          className="mt-9 flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="border-b border-[#7E7E7E] bg-transparent pb-2 text-[16px] text-black placeholder:text-[#7E7E7E] focus:border-brand-blue focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="mt-6 border-b border-[#7E7E7E] bg-transparent pb-2 text-[16px] text-black placeholder:text-[#7E7E7E] focus:border-brand-blue focus:outline-none sm:mt-[67px]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="mt-6 border-b border-[#7E7E7E] bg-transparent pb-2 text-[16px] text-black placeholder:text-[#7E7E7E] focus:border-brand-blue focus:outline-none sm:mt-[67px]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={2}
            required
            className="mt-8 resize-none border-b border-[#7E7E7E] bg-transparent pb-2 text-[16px] text-black placeholder:text-[#7E7E7E] focus:border-brand-blue focus:outline-none sm:mt-[96px]"
          />
          <button
            type="submit"
            className="mt-6 w-fit rounded-full bg-[#2212FF] px-10 py-4 text-[20px] font-medium text-white hover:opacity-90 sm:mt-[70px]"
          >
            Send message
          </button>
        </form>
      )}
    </div>
  );
}
