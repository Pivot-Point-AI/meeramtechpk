"use client";

import { useEffect, useState } from "react";

const years = ["2026", "2025", "2024", "2023", "2022", "2021"];
const stories = [
  "Today, MeeramTech powers digital transformation for clients across Fintech, Healthcare, Transportation and Retail — with 100+ projects delivered, 60 clients served, a 250-strong multicultural team, and 5 industry awards recognizing our work.",
  "We expanded our managed services and data science practice, deepening long-term partnerships with clients across the region as our team grew to support increasingly complex, always-on digital operations.",
  "Our UI/UX design and web development capabilities matured into a full end-to-end offering, and the quality of that work earned MeeramTech its first industry awards.",
  "Global partnerships took shape as we brought together a multicultural team spanning multiple markets, building the infrastructure to deliver real-time platforms at scale.",
  "We broadened beyond software development into digital infrastructure services, taking on our first projects in Healthcare and Transportation alongside our founding Fintech clients.",
  "Building on years of delivering technology-led BPO services since 2015, we sharpened our focus on custom software development for SMEs and corporates — the foundation MeeramTech still builds on today.",
];
const dotX = [17.2487, 249.385, 481.521, 713.657, 945.794, 1177.93];

export function StoryTimeline() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % years.length);
    }, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-black pt-6 text-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[128px]">
        <p className="text-[16px] font-bold uppercase">History</p>
        <h2 className="mt-2 text-[30px] font-medium">Our Story</h2>

        {/* Mobile: one year at a time with tap dots */}
        <div className="sm:hidden">
          <div className="mt-6 text-center font-serif text-[44px] uppercase italic text-brand-purple transition-colors">
            {years[active]}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {years.map((year, i) => (
              <button
                key={year}
                type="button"
                aria-label={`Show year ${year}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-brand-purple" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* sm and up: full timeline with connecting line */}
        <div className="hidden sm:block">
          <div className="mt-0 flex justify-between font-serif text-[36px] uppercase italic lg:text-[58px]">
            {years.map((year, i) => (
              <span
                key={year}
                className={i === active ? "text-brand-purple transition-colors" : "transition-colors"}
              >
                {year}
              </span>
            ))}
          </div>

          <svg
            className="mt-6 w-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 1182.86 34.4991"
            width="1182.86"
            height="34.4991"
            fill="none"
          >
            <path d="M34 17.0001L1173.28 17.2495" stroke="#D9D9D9" />
            {dotX.map((cx, i) => (
              <g key={cx}>
                {i === active && (
                  <circle
                    cx={cx}
                    cy={16.9285}
                    r={16.7495}
                    fill="none"
                    stroke="#B601FF"
                    className="transition-opacity duration-500"
                  />
                )}
                <circle
                  cx={cx}
                  cy={16.9285}
                  r={i === active ? 4.92843 : 4.42843}
                  fill={i === active ? "#B601FF" : "#D9D9D9"}
                  className="transition-all duration-500"
                />
              </g>
            ))}
          </svg>
        </div>

        <p className="mt-8 pb-6 max-w-[336px] text-[13px] leading-[1.7]">
          {stories[active]}
        </p>
      </div>
    </section>
  );
}
