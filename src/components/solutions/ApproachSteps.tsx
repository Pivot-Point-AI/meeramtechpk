"use client";

import { useEffect, useState } from "react";
import { approachSteps } from "@/data/solutions";
import { useInView, usePrefersReducedMotion } from "@/hooks/Useinview";

const DWELL_MS = 6000;

/**
 * Auto-advancing stepper, following the StoryTimeline pattern already used on
 * the home page. Advancing stops for good the moment the visitor picks a step,
 * so the thing they chose to read never slides away underneath them.
 */
export function ApproachSteps() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.3 });
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [userPicked, setUserPicked] = useState(false);

  useEffect(() => {
    if (!inView || userPicked || reducedMotion) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % approachSteps.length);
    }, DWELL_MS);

    return () => clearInterval(id);
  }, [inView, userPicked, reducedMotion]);

  const select = (index: number) => {
    setActive(index);
    setUserPicked(true);
  };

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
        <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue">
          The method
        </p>
        <h2 className="mt-4 max-w-[862px] text-[32px] font-semibold leading-[1.1] tracking-[-1px] text-[#25262D] sm:text-[40px] lg:text-[49px]">
          Four moves, in the same order, on every engagement
        </h2>

<div className="mt-14 grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">          {approachSteps.map((step, index) => {
            const isActive = index === active;

            return (
          <div
  key={step.step}
  role="button"
  tabIndex={0}
  onClick={() => select(index)}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      select(index);
    }
  }}
  onMouseEnter={() => setActive(index)}
  onFocus={() => select(index)}
  aria-pressed={isActive}
  className="group relative block cursor-pointer self-start text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
>
        {/* Progress rail: fills while this step holds the floor. */}
                <span aria-hidden className="block h-[2px] w-full bg-[#e9e9e9]">
                  <span
                    className={`block h-full bg-brand-blue transition-[width] ease-linear ${
                      isActive ? "w-full" : "w-0"
                    }`}
                    style={{
                      transitionDuration:
                        isActive && !userPicked && !reducedMotion ? `${DWELL_MS}ms` : "350ms",
                    }}
                  />
                </span>

                <div className="mt-7 flex items-center justify-between">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.icon}
                    alt=""
                    width={40}
                    height={40}
                    className={`h-10 w-10 transition-transform duration-500 ease-out motion-reduce:transition-none ${
                      isActive ? "-translate-y-1 scale-110" : "group-hover:-translate-y-1"
                    } motion-reduce:translate-y-0 motion-reduce:scale-100`}
                  />
                  <span
                    className={`font-serif text-[34px] italic leading-none transition-colors duration-300 ${
                      isActive ? "text-brand-blue" : "text-[#e2e2e2]"
                    }`}
                  >
                    {step.step}
                  </span>
                </div>

                <h3
                  className={`mt-6 text-[22px] font-semibold tracking-[-0.3px] transition-colors duration-300 ${
                    isActive ? "text-brand-blue" : "text-[#25262D]"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-3 text-[16px] leading-[1.6] transition-colors duration-300 ${
                    isActive ? "text-[#25262D]" : "text-[#8b8b93]"
                  }`}
                >
                  {step.description}
                </p>
</div>            );
          })}
        </div>
      </div>
    </section>
  );
}