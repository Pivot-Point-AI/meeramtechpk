"use client";

import { useEffect, useState } from "react";

const newsItems = [
  {
    date: "September 15, 2025",
    headline: "Meeram and Microsoft Expand Collaboration on Gen-AI Powered Cyber Solutions",
  },
  {
    date: "September 1, 2025",
    headline:
      "Bank of Dubai and Meeram Tech announce renewal of the Real-Time Gross Settlement service",
  },
  {
    date: "July 10, 2025",
    headline: "Meeram and Microsoft Expand Collaboration on Gen-AI Powered Cyber Solutions",
  },
  {
    date: "June 30, 2025",
    headline:
      "AIS Teams with Meeram Tech to Optimize Supply Chain with AI-Powered Robots and Digital Twins",
  },
];

const groupSize = 2;

export function NewsTicker() {
  const groups: (typeof newsItems)[] = [];
  for (let i = 0; i < newsItems.length; i += groupSize) {
    groups.push(newsItems.slice(i, i + groupSize));
  }

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % groups.length);
    }, 5000);
    return () => clearInterval(id);
  }, [groups.length]);

  return (
    <section className="bg-black py-16 text-white">
      <p className="px-6 text-[26px] font-semibold uppercase sm:text-[36px] lg:px-[121px]">MeeramTech News</p>

      <div className="relative mt-12 px-6 lg:px-[121px]">
        {groups.map((group, i) => {
          const [left, right] = group;
          return (
            <div
              key={i}
              className={`grid grid-cols-1 gap-10 transition-[opacity,transform] duration-700 ease-out sm:grid-cols-2 sm:gap-16 motion-reduce:transition-none ${
                i === active
                  ? "relative translate-y-0 opacity-100"
                  : "absolute inset-0 translate-y-2 opacity-0"
              }`}
            >
              {left && (
                <article className="max-w-[420px]">
                  <p className="text-[15px] text-white/70">{left.date}</p>
                  <h3 className="mt-4 text-[22px] font-medium leading-[1.35]">{left.headline}</h3>
                </article>
              )}
              {right && (
                <article className="max-w-[420px] sm:justify-self-end sm:border-l sm:border-white/20 sm:pl-10">
                  <p className="text-[15px] text-white/70">{right.date}</p>
                  <h3 className="mt-4 text-[22px] font-medium leading-[1.35]">{right.headline}</h3>
                </article>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center gap-2 px-6 lg:px-[121px]">
        {groups.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show news slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 hover:bg-white ${
              i === active ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}