"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { duTelecomCaseStudy, duTelecomMetrics } from "@/data/solutions";

/**
 * The ten workstreams were a flat wall of text. Here they are a tablist: pick
 * one, read it, arrow-key between them. Roving tabindex keeps the whole list a
 * single tab stop, which is the expected behaviour for tabs.
 */
export function CaseStudy() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (next: number) => {
    const index = (next + duTelecomCaseStudy.length) % duTelecomCaseStudy.length;
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        move(active + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        move(active - 1);
        break;
      case "Home":
        event.preventDefault();
        move(0);
        break;
      case "End":
        event.preventDefault();
        move(duTelecomCaseStudy.length - 1);
        break;
    }
  };

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/images/solutions/blueprint-grid.svg')] bg-[length:160px_160px] opacity-70"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-[121px]">
        <Reveal>
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-purple">
            Case study — UAE
          </p>
          <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-[-1px] sm:text-[40px] lg:text-[46px]">
            Alpha Data — Du Telecom
          </h2>
          <p className="mt-6 max-w-[640px] text-[18px] leading-[1.6] text-white/75">
            MeeramTech completed the Oracle Database Support Services project for Du Telecom. Our
            engineer was deployed on site to deliver Oracle DB and SQL configuration services,
            keeping operations seamless and availability high across the database infrastructure.
          </p>
        </Reveal>

        <Reveal stagger className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
          {duTelecomMetrics.map((metric) => (
            <div
              key={metric.label}
              className="group border-t border-white/15 pt-5 transition-colors duration-300 hover:border-brand-purple"
            >
              <span className="block text-[30px] font-semibold leading-none tracking-[-0.5px] lg:text-[34px]">
                {metric.value}
              </span>
              <span className="mt-3 block text-[13px] leading-[1.4] text-white/55 transition-colors duration-300 group-hover:text-white/80">
                {metric.label}
              </span>
            </div>
          ))}
        </Reveal>

        {/* Workstream explorer */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Project workstreams"
            onKeyDown={onKeyDown}
            className="flex flex-col"
          >
            {duTelecomCaseStudy.map((item, index) => {
              const isActive = index === active;

              return (
                <button
                  key={item.label}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`workstream-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls={`workstream-panel-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(index)}
                  className={`group flex cursor-pointer items-center gap-4 border-l-2 py-3.5 pl-5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple ${
                    isActive
                      ? "border-brand-purple bg-white/[0.04]"
                      : "border-white/10 hover:border-white/40 hover:bg-white/[0.02]"
                  }`}
                >
                  <span
                    className={`text-[12px] font-bold tabular-nums transition-colors duration-300 ${
                      isActive ? "text-brand-purple" : "text-white/30"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[16px] font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/55 group-hover:text-white/85"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#0A0E2A]">
              <Image
                src="/images/services/datacenter-services.png"
                alt="Datacenter infrastructure supporting the Du Telecom database estate"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
              />

              {/* Every panel is rendered and only the inactive ones are `hidden`,
                  so all ten workstreams stay in the server HTML for crawlers and
                  for anyone reading without JS. */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                {duTelecomCaseStudy.map((item, index) => (
                  <div
                    key={item.label}
                    role="tabpanel"
                    id={`workstream-panel-${index}`}
                    aria-labelledby={`workstream-tab-${index}`}
                    hidden={index !== active}
                    className={index === active ? "workstream-copy" : undefined}
                  >
                    <h3 className="text-[22px] font-semibold tracking-[-0.3px] text-white">
                      {item.label}
                    </h3>
                    <p className="mt-3 max-w-[520px] text-[16px] leading-[1.6] text-white/75">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-[13px] text-white/40">
              Oracle RAC, RMAN and Data Guard, run under an availability SLA.
            </p>
          </div>
        </div>
      </div>

      <style href="workstream-copy" precedence="default">
        {`
@media (prefers-reduced-motion: no-preference) {
  @keyframes workstream-in {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: none; }
  }
  .workstream-copy { animation: workstream-in 380ms cubic-bezier(0.22, 0.61, 0.36, 1) both; }
}
`}
      </style>
    </section>
  );
}