"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll-triggered entrance wrapper.
 *
 * Only `opacity` and `transform` are animated, so nothing here can move,
 * resize or reflow the layout it wraps - the composited transform is
 * discarded once the element has settled.
 *
 * The CSS ships inline. React 19 dedupes it by `href`, so all instances
 * share one hoisted <style> and the component stays self-contained.
 */
const REVEAL_CSS = `
.reveal { opacity: 1; }

@media (prefers-reduced-motion: no-preference) {
  .reveal {
    transition:
      opacity 700ms cubic-bezier(0.22, 0.61, 0.36, 1),
      transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1);
    transition-delay: var(--reveal-delay, 0ms);
  }
  .reveal[data-reveal="out"] {
    opacity: 0;
    transform: translateY(24px);
    will-change: opacity, transform;
  }
  .reveal[data-reveal="in"] {
    opacity: 1;
    transform: none;
  }

  /* Stagger mode: the wrapper holds still and its direct children cascade. */
  .reveal[data-stagger][data-reveal="out"] {
    opacity: 1;
    transform: none;
    will-change: auto;
  }
  .reveal[data-stagger] > * {
    transition:
      opacity 600ms cubic-bezier(0.22, 0.61, 0.36, 1),
      transform 600ms cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  .reveal[data-stagger][data-reveal="out"] > * {
    opacity: 0;
    transform: translateY(20px);
  }
  .reveal[data-stagger][data-reveal="in"] > * {
    opacity: 1;
    transform: none;
  }
  .reveal[data-stagger] > *:nth-child(1) { transition-delay: 0ms; }
  .reveal[data-stagger] > *:nth-child(2) { transition-delay: 70ms; }
  .reveal[data-stagger] > *:nth-child(3) { transition-delay: 140ms; }
  .reveal[data-stagger] > *:nth-child(4) { transition-delay: 210ms; }
  .reveal[data-stagger] > *:nth-child(5) { transition-delay: 280ms; }
  .reveal[data-stagger] > *:nth-child(6) { transition-delay: 350ms; }
  .reveal[data-stagger] > *:nth-child(7) { transition-delay: 420ms; }
  .reveal[data-stagger] > *:nth-child(8) { transition-delay: 490ms; }
}
`;

export function Reveal({
  children,
  delay = 0,
  className,
  stagger = false,
}: {
  children: ReactNode;
  delay?: number;
  /**
   * Merged onto the wrapper so Reveal can *become* an existing container
   * (a grid, a flex row) instead of adding a node around it.
   */
  className?: string;
  /** Cascade the direct children in instead of the wrapper as a whole. */
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No observer: leave it revealed rather than risk hiding content.
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      data-reveal={shown ? "in" : "out"}
      data-stagger={stagger ? "" : undefined}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      <style href="reveal" precedence="default">
        {REVEAL_CSS}
      </style>
      {/* Without JS the attribute rules never win, so content stays visible. */}
      <noscript>
        <style>{`.reveal,.reveal>*{opacity:1 !important;transform:none !important}`}</style>
      </noscript>
      {children}
    </div>
  );
}