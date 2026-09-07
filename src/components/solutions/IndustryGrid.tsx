"use client";

import { useState } from "react";
import Image from "next/image";
import { industries } from "@/data/solutions";

/**
 * Cards expand to show what we actually build in the vertical. The panel uses a
 * 0fr -> 1fr grid row rather than a measured pixel height, so nothing has to be
 * read back from the DOM and the copy can be any length.
 */
export function IndustryGrid() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="bg-[#F7F7F8] py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
        <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue">
          Where we solve
        </p>
        <h2 className="mt-4 max-w-[862px] text-[32px] font-semibold leading-[1.1] tracking-[-1px] text-[#25262D] sm:text-[40px] lg:text-[49px]">
          Six verticals, one delivery model
        </h2>

        <div className="mt-14 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const isOpen = open === industry.key;
            const panelId = `industry-panel-${industry.key}`;

            return (
              <article
                key={industry.key}
                className={`group flex flex-col overflow-hidden rounded-xl bg-white transition duration-300 ${
                  isOpen
                    ? "shadow-[0_18px_40px_-24px_rgba(16,16,20,0.5)]"
                    : "shadow-[0_1px_2px_rgba(16,16,20,0.06)] hover:shadow-[0_18px_40px_-24px_rgba(16,16,20,0.45)]"
                }`}
              >
                <div
                  className="relative h-[220px] overflow-hidden"
                  style={{ background: industry.background }}
                >
                  <Image
                    src={industry.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-700 ease-out motion-reduce:transition-none motion-reduce:scale-100 ${
                      isOpen ? "scale-[1.05]" : "group-hover:scale-[1.05]"
                    }`}
                  />
                  {!industry.light && (
                    <div
                      aria-hidden
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{ background: industry.background, opacity: isOpen ? 0.2 : 0.35 }}
                    />
                  )}
                  <span
                    className={`absolute left-6 top-6 text-[12px] font-bold uppercase tracking-[0.16em] ${
                      industry.light ? "text-[#0e1013]" : "text-white"
                    }`}
                  >
                    {industry.label}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-[22px] font-semibold tracking-[-0.3px] text-[#25262D]">
                    {industry.label}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.6] text-[#4a4a52]">
                    {industry.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : industry.key)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="mt-6 inline-flex cursor-pointer items-center gap-2 self-start text-[15px] font-semibold text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                  >
                    {isOpen ? "Hide capabilities" : "What we build"}
                    <span
                      aria-hidden
                      className={`transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/misc/chevron.svg" alt="" width={10} height={6} />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-label={`${industry.label} capabilities`}
                    className={`grid transition-[grid-template-rows] duration-400 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="mt-5 flex flex-col gap-2.5 border-t border-[#ededed] pt-5">
                        {industry.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="flex gap-3 text-[15px] leading-[1.5] text-[#4a4a52]"
                          >
                            <span
                              aria-hidden
                              className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-brand-blue"
                            />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}