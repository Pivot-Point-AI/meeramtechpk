"use client";

import { useState } from "react";
import Image from "next/image";

const quotes = [
  {
    image: "/images/people/quote-portrait.png",
    quote:
      "At MeeramTech, we believe technology alone isn't the transformation. The true shift happens when innovation meets people, purpose, and performance. We're not just adapting to change — we're defining it.",
    attribution: "Asim Munir, featured in TechVision, July 2025",
  },
  {
    image: "/images/people/portrait-good-looking.png",
    quote:
      "Great software isn't just about clean code — it's about understanding the problem well enough that the solution feels inevitable. That's the standard we hold every engagement to.",
    attribution: "Asim Jameel, featured in Digital Frontier, August 2025",
  },
  {
    image: "/images/people/quote-portrait3.png",
    quote:
      "Cloud adoption used to be a project with an end date. Now it's the operating model. We help clients build infrastructure that keeps evolving long after we've handed over the keys.",
    attribution: "Hamza Tariq, featured in CIO Outlook, September 2025",
  },
  {
    image: "/images/people/quote-portrait4.png",
    quote:
      "Data without context is just noise. The teams that win are the ones who turn dashboards into decisions — that's the gap we close for every client we work with.",
    attribution: "Bilal Anwar, featured in Enterprise Tech Today, October 2025",
  },
  {
    image: "/images/people/quote-portrait5.png",
    quote:
      "Security can't be an afterthought bolted on at launch. We design for trust from the first line of code, because that's what earns a customer's confidence long-term.",
    attribution: "Usman Farooq, featured in The Transformation Report, November 2025",
  },
  {
    image: "/images/people/quote-portrait6.png",
    quote:
      "AI is only as useful as the workflow it fits into. Our job isn't to chase the latest model — it's to make sure the right one quietly does its job inside a process people actually trust.",
    attribution: "Ayesha Malik, featured in Innovate Weekly, December 2025",
  },
];

export function QuoteSection() {
  const [index, setIndex] = useState(0);
  const active = quotes[index];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-6 min-[1440px]:flex-row min-[1440px]:gap-[52px] lg:px-[121px]">
        <div className="group relative h-[280px] w-full max-w-[570px] shrink-0 overflow-hidden border border-[#e9e9e9] bg-[#fbfbfb] min-[1440px]:h-[370px]">
          <Image
            src={active.image}
            alt={active.attribution}
            fill
            sizes="(min-width: 1440px) 570px, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>

        <div className="max-w-[576px]">
          <div className="relative">
            {quotes.map((q, i) => (
              <div
                key={q.attribution}
                className={`transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                  i === index ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
                }`}
                aria-hidden={i !== index}
              >
                <p className="text-[24px] font-medium leading-[1.5] text-black min-[1440px]:text-[20px]">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="mt-6 text-[16px] text-[#171717]">{q.attribution}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous quote"
              onClick={() => setIndex((i) => (i - 1 + quotes.length) % quotes.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e9e9e9] text-black transition duration-200 ease-out hover:border-brand-blue hover:text-brand-blue active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next quote"
              onClick={() => setIndex((i) => (i + 1) % quotes.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e9e9e9] text-black transition duration-200 ease-out hover:border-brand-blue hover:text-brand-blue active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="ml-2 flex items-center gap-2">
              {quotes.map((q, i) => (
                <button
                  key={q.attribution}
                  type="button"
                  aria-label={`Go to quote ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 hover:bg-brand-blue ${
                    i === index ? "w-6 bg-brand-blue" : "w-2 bg-[#e9e9e9]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}