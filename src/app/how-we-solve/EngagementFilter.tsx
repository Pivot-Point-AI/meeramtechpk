"use client";

import { useState } from "react";
import { engagements, engagementFilters, type EngagementTag } from "@/data/solutions";

export function EngagementFilter() {
  const [active, setActive] = useState<"all" | EngagementTag>("all");

  const visible =
    active === "all" ? engagements : engagements.filter((item) => item.tags.includes(active));

  return (
    <div>
      <div className="flex flex-wrap gap-8 border-b border-[#e9e9e9]">
        {engagementFilters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActive(filter.key)}
            aria-pressed={active === filter.key}
            className={`border-b-2 pb-4 text-[16px] font-semibold transition ${
              active === filter.key
                ? "border-brand-blue text-black"
                : "border-transparent text-[#8d8d8d] hover:text-black"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-[26px]">
        {visible.map((item) => (
          <article
            key={item.client}
            className="flex flex-col rounded-[4px] border border-[#e9e9e9] bg-white p-8 transition hover:border-brand-blue"
          >
            <span className="text-[12px] font-bold uppercase tracking-wide text-[#8d8d8d]">
              {item.location}
            </span>
            <h3 className="mt-3 text-[20px] font-bold leading-[1.25] text-black">{item.client}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {item.scope.map((line) => (
                <li key={line} className="flex gap-3 text-[15px] leading-[1.55] text-[#171717]">
                  <span aria-hidden className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-brand-blue" />
                  {line}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}