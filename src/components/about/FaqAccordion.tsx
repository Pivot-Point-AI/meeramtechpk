"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What does Meeram Tech specialize in?",
    answer:
      "We specialize in digital transformation — application modernization, cloud and AI-powered solutions, cybersecurity, and enterprise software development.",
  },
  {
    question: "Do you offer customized IT solutions?",
    answer:
      "Yes. From ERP automation to bespoke enterprise applications, our solutions are tailored to each client's infrastructure and goals.",
  },
  {
    question: "Can you help modernize our legacy systems?",
    answer:
      "Absolutely — Application Modernization is one of our core services, helping you move legacy systems onto next-gen computing.",
  },
  {
    question: "What industries do you serve?",
    answer: "We work across fintech, ecommerce, healthcare, and enterprise sectors, among others.",
  },
  {
    question: "How do we start working with Meeram Tech?",
    answer:
      "Reach out through our Contact Us page and our team will schedule a consultation to understand your goals.",
  },
  // The three below are the FAQs published on meeramtech.com/about, kept close
  // to the original wording.
  {
    question: "Does MeeramTech have a global presence?",
    answer:
      "Yes. MeeramTech is present globally, with offices across Europe and the Middle East, and a footprint that continues to expand across Asia, Europe and Australia.",
  },
  {
    question: "How is diversity in MeeramTech?",
    answer:
      "MeeramTech supports diversity in terms of age, gender, ethnicity, religion, disability, sexual orientation, education and national origin.",
  },
  {
    question: "What is the environment like in MeeramTech?",
    answer:
      "MeeramTech offers a healthy learning and progressive environment, with the aim of continuously growing as an organization.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-20 text-white lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-[121px]">
        <h2 className="text-left text-[38px] font-medium leading-[1.19] sm:text-[54px]">
          Questions.
          <br />
          <span className="text-white/40">Answered.</span>
        </h2>

        <div className="mt-12 divide-y divide-[#d9d9d9]/30 border-t border-[#d9d9d9]/30 lg:mt-16">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-[19px] font-normal sm:text-[23.6px]"
                >
                  {faq.question}
                  <span className="ml-4 flex h-4 w-4 shrink-0 items-center justify-center text-[20px] leading-none">
                    {open ? "−" : "+"}
                  </span>
                </button>
                {/* Rendered and `hidden` rather than unmounted, so every answer
                    stays in the server HTML for crawlers and for anyone reading
                    without JS - and so aria-controls points at a real node. */}
                <p
                  id={`faq-answer-${index}`}
                  hidden={!open}
                  className="pb-6 text-[15px] leading-[1.6] text-white/75"
                >
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}