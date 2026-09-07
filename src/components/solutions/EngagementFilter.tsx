"use client";

import { useState } from "react";
import { engagements, engagementFilters, type EngagementTag } from "@/data/solutions";

const FILTER_CSS = `
@media (prefers-reduced-motion: no-preference) {
  @keyframes engagement-in {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: none; }
  }
  .engagement-card {
    animation: engagement-in 420ms cubic-bezier(0.22, 0.61, 0.36, 1) both;
    animation-delay: var(--card-delay, 0ms);
  }
}
`;

const countFor = (key: "all" | EngagementTag) =>
  key === "all" ? engagements.length : engagements.filter((e) => e.tags.includes(key)).length;

export function EngagementFilter() {
  const [active, setActive] = useState<"all" | EngagementTag>("all");

  const visible =
    active === "all" ? engagements : engagements.filter((item) => item.tags.includes(active));

  return (
    <div>
      <style href="engagement-filter" precedence="default">
        {FILTER_CSS}
      </style>

      <div role="tablist" aria-label="Filter engagements" className="flex flex-wrap gap-x-8 gap-y-2 border-b border-[#e9e9e9]">
        {engagementFilters.map((filter) => {
          const isActive = active === filter.key;

          return (
            <button
              key={filter.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(filter.key)}
              className={`group flex cursor-pointer items-center gap-2 border-b-2 pb-4 text-[16px] font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue ${
                isActive
                  ? "border-brand-blue text-black"
                  : "border-transparent text-[#8d8d8d] hover:text-black"
              }`}
            >
              {filter.label}
              <span
                className={`rounded-full px-2 py-0.5 text-[12px] tabular-nums transition-colors duration-300 ${
                  isActive ? "bg-brand-blue text-white" : "bg-[#F2F2F7] text-[#8d8d8d]"
                }`}
              >
                {countFor(filter.key)}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-6 text-[14px] text-[#8d8d8d]">
        Showing {visible.length} of {engagements.length} engagements
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {visible.map((item, index) => (
          <article
            /* Keying on the filter as well as the client restarts the entrance
               animation on every switch instead of leaving cards frozen. */
            key={`${active}-${item.client}`}
            style={{ "--card-delay": `${index * 55}ms` } as React.CSSProperties}
            className="engagement-card group flex flex-col rounded-xl border border-[#e9e9e9] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_40px_-24px_rgba(16,16,20,0.45)] motion-reduce:hover:translate-y-0"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#8d8d8d]">
                  {item.location}
                </span>
                <h3 className="mt-3 text-[21px] font-semibold leading-[1.25] tracking-[-0.3px] text-[#25262D]">
                  {item.client}
                </h3>
              </div>
              {item.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.logo}
                  alt={item.logoAlt ?? ""}
                  width={96}
                  height={22}
                  className="h-[20px] w-auto shrink-0 opacity-25 invert transition duration-300 group-hover:opacity-60 motion-reduce:transition-none"
                />
              )}
            </div>

            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {item.scope.map((line) => (
                <li key={line} className="flex gap-3 text-[15px] leading-[1.55] text-[#4a4a52]">
                  <span
                    aria-hidden
                    className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-brand-blue"
                  />
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2 border-t border-[#f0f0f0] pt-5">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#F2F2F7] px-3 py-1 text-[12px] font-semibold text-[#4a4a52] transition-colors duration-300 group-hover:bg-brand-blue/8 group-hover:text-brand-blue"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}