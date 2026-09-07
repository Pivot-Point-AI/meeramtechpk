"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePrefersReducedMotion } from "@/hooks/Useinview";

/**
 * The glow follows the pointer through CSS custom properties written straight
 * to the node - no state, so moving the mouse never re-renders the tree.
 */
export function SolutionsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const el = sectionRef.current;
      if (!el || reducedMotion || event.pointerType !== "mouse") return;

      const rect = el.getBoundingClientRect();
      el.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
      el.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
      el.style.setProperty("--glow-opacity", "1");
    },
    [reducedMotion]
  );

  const handlePointerLeave = useCallback(() => {
    sectionRef.current?.style.setProperty("--glow-opacity", "0");
  }, []);

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group/hero relative overflow-hidden bg-black text-white"
      style={
        {
          "--glow-x": "20%",
          "--glow-y": "50%",
          "--glow-opacity": "0",
        } as React.CSSProperties
      }
    >
      {/* Blueprint texture - decorative, sits behind everything. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/images/solutions/blueprint-grid.svg')] bg-[length:160px_160px]"
      />

      {/* Resting glow, always on. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-brand-blue/25 blur-[140px]"
      />

      {/* Pointer glow, fades in only for a real mouse. */}
      <div
        aria-hidden
        className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-brand-purple/20 blur-[120px] transition-opacity duration-500"
        style={{
          left: "var(--glow-x)",
          top: "var(--glow-y)",
          opacity: "var(--glow-opacity)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-[121px] lg:py-28">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-purple">
            Evaluation and research
          </p>
          <h1 className="mt-6 max-w-[640px] text-[38px] font-semibold leading-[1.05] tracking-[-1px] sm:text-[48px] lg:text-[58px]">
            We solve complex problems by redefining technological landscapes
          </h1>
          <p className="mt-7 max-w-[560px] text-[18px] leading-[1.6] text-white/75">
            Every engagement starts with the problem, not the product. We map the landscape, take
            the shortest route through it, and build platforms that make it easy to develop and
            operate real-time applications — across Fintech, Healthcare, Transportation, Retail and
            beyond.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-md bg-brand-blue px-7 py-3.5 text-[16px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:hover:translate-y-0"
            >
              Start a conversation
            </Link>
            <Link
              href="/what-we-do"
              className="group inline-flex items-center gap-2 text-[16px] font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              See the full service set
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
        </div>

        <div className="group/panel relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#1c1f24] lg:aspect-[4/4.6]">
          <Image
            src="/images/industries/ecommerce.png"
            alt="MeeramTech engineers working through a client's systems"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover/panel:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover/panel:scale-100"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-white/60">
              Since 2015
            </p>
            <p className="mt-2 max-w-[320px] text-[19px] font-medium leading-[1.35]">
              Eight years of delivery for SMEs and corporates across the Gulf and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}