"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const TARGET = 360;
const COUNT_MS = 1600;

/** Ease-out cubic - quick off the mark, gentle settle on the final number. */
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function ValueBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Leave `run` false for reduced motion or a missing observer: the heading
    // then renders its final value and never animates.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!run) return;

    let frame = 0;
    let startedAt: number | undefined;

    const tick = (now: number) => {
      startedAt ??= now;
      const t = Math.min(1, (now - startedAt) / COUNT_MS);
      setCount(Math.round(easeOut(t) * TARGET));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run]);

  // Zero-padded so the glyph count never changes mid-count and the centred
  // heading holds still. Lands on exactly "360", as before.
  const value = run ? String(count).padStart(3, "0") : String(TARGET);

  return (
    <section ref={sectionRef} className="bg-black py-24 text-center text-white">
      <div className="mx-auto max-w-[900px] px-6">
        <h2 className="text-[36px] font-bold uppercase leading-none sm:text-[72px] lg:text-[99px]">
          {value}
          <span className="align-top text-[0.45em]">°</span> Value
        </h2>
        <p className="mx-auto mt-8 max-w-[560px] text-[20px] leading-[1.4]">
          Every day, we embrace change and create value for all our stakeholders around the world.
        </p>
        <Link
          href="/360-value-report"
          className="group mt-8 inline-flex items-center gap-2 text-[18px] font-bold"
        >
          See the report
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/arrow-right.svg"
            alt=""
            width={18}
            height={18}
            className="transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          />
        </Link>
      </div>
    </section>
  );
}