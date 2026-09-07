"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, label: "Project Completed" },
  { value: 60, label: "Satisfied Clients" },
  { value: 250, label: "Experienced Staff" },
  { value: 5, label: "Awards Received" },
];

const COUNT_MS = 2000;

/** Ease-out cubic - quick off the mark, gentle settle on the final number. */
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function Counter({ value, run }: { value: number; run: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!run) return;

    let frame = 0;
    let startedAt: number | undefined;

    const tick = (now: number) => {
      startedAt ??= now;
      const t = Math.min(1, (now - startedAt) / COUNT_MS);
      setDisplay(Math.round(easeOut(t) * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);

  // Until the count is running, render the real figure. That keeps the true
  // number in the server HTML and makes every non-animating path - no JS,
  // reduced motion, no IntersectionObserver - degrade to the final value.
  return <>{run ? display : value}</>;
}

export function StatsBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Leave `run` false for reduced motion: the numbers stay at their final
    // value rather than animating.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-16 text-white lg:py-[130px]">
      <div className="mx-auto flex max-w-[1440px] flex-wrap gap-x-16 gap-y-14 px-6 sm:justify-between lg:px-[121px]">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="h-[7px] w-[34px] bg-gradient-to-r from-[#0015FF] to-[#BF00FF]" />
            <p className="mt-6 text-[56px] font-normal leading-[0.7] uppercase tabular-nums sm:text-[76px] lg:mt-[52px] lg:text-[100px]">
              <Counter value={stat.value} run={run} />
            </p>
            <p className="mt-4 text-[18px] leading-[1] text-white lg:mt-[48px] lg:text-[22px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}