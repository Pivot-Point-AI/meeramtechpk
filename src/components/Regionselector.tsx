// components/Regionselector.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export type Region = {
  /** Shown in the bar. */
  code: string;
  /** Shown in the menu. */
  label: string;
  /** Where selecting it goes. With a real i18n setup this becomes the locale
      prefix — "/en-pk", "/ar-ae" — rather than a plain path. */
  href: string;
};

// Add the markets you actually serve here; the menu builds itself from this.
export const REGIONS: Region[] = [{ code: "PAK", label: "Pakistan", href: "/" }];

export function RegionSelector({
  open,
  setOpen,
  current = REGIONS[0],
  compact = false,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  current?: Region;
  compact?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  const textSize = compact ? "text-[16px]" : "text-[18px]";

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open, setOpen]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Region: ${current.label}. Change region`}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            // Focus lands after the menu has rendered.
            requestAnimationFrame(() => firstItemRef.current?.focus());
          }
        }}
        className={`flex items-center gap-1 ${textSize} font-semibold uppercase leading-none text-[#262626] hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2212FF]`}
      >
        {current.code}
        <svg
          viewBox="0 0 10 6"
          width={10}
          height={6}
          aria-hidden
          className={`transition-transform duration-200 ease-out motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M1 1.25 5 5l4-3.75"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Choose a region"
          className="absolute right-0 top-full z-40 mt-3 min-w-[180px] overflow-hidden rounded-[11px] border border-[#F3F2F7] bg-white py-1 shadow-[0px_14px_49px_rgba(70,70,70,0.14)]"
        >
          {REGIONS.map((region, i) => {
            const isCurrent = region.code === current.code;
            return (
              <Link
                key={region.code}
                ref={i === 0 ? firstItemRef : undefined}
                href={region.href}
                role="menuitem"
                aria-current={isCurrent ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between gap-3 px-4 py-2.5 text-[15px] leading-6 hover:bg-[#F5F5F9] focus-visible:bg-[#F5F5F9] focus-visible:outline-none ${
                  isCurrent ? "font-medium text-[#1C1A1A]" : "font-normal text-[#4F4F4F]"
                }`}
              >
                {region.label}
                {isCurrent && (
                  <svg viewBox="0 0 16 16" width={14} height={14} aria-hidden className="text-[#2212FF]">
                    <path
                      d="M3 8.5 6.5 12 13 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}