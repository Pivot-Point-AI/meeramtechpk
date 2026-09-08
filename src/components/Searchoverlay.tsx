// components/SearchOverlay.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SEARCH_INDEX, searchSite, type SearchEntry } from "@/lib/search-index";

/** Shown before anything is typed — an empty panel should offer somewhere to go. */
const QUICK_LINKS = SEARCH_INDEX.filter((e) => e.section === "Pages").slice(0, 4);

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-[22px] min-w-[22px] items-center justify-center rounded-[5px] border border-[#E4E3EA] bg-[#F7F7FA] px-1.5 font-sans text-[11px] font-medium leading-none text-[#7E7E7E]">
      {children}
    </kbd>
  );
}

function SearchGlyph() {
  return (
    <svg viewBox="0 0 24 24" width={19} height={19} aria-hidden className="shrink-0 text-[#9A9AA5]">
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Wraps matched terms so the reason a result appeared is visible at a glance. */
function Highlight({ text, query }: { text: string; query: string }) {
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return <>{text}</>;

  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const lookup = new Set(terms.map((t) => t.toLowerCase()));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "ig")).filter(Boolean);

  return (
    <>
      {parts.map((part, i) =>
        lookup.has(part.toLowerCase()) ? (
          <mark key={i} className="bg-[#2212FF]/[0.08] text-[#2212FF]">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(false);

  const results = useMemo(() => searchSite(query), [query]);
  const rows = query ? results : QUICK_LINKS;

  useEffect(() => setActive(0), [query]);

  // Keep the keyboard cursor inside the scroll viewport.
  useEffect(() => {
    itemRefs.current[active]?.scrollIntoView({ block: "nearest" });
  }, [active]);

  useEffect(() => {
    if (!open) {
      setShown(false);
      setQuery("");
      return;
    }

    // Remember what had focus so it can be handed back on close — otherwise
    // keyboard users land back at the top of the document.
    const previous = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    // One frame later, so the panel transitions in from its start state.
    const frame = requestAnimationFrame(() => setShown(true));

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  function goTo(href: string) {
    onClose();
    router.push(href);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (rows.length ? (i + 1) % rows.length : 0));
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (rows.length ? (i - 1 + rows.length) % rows.length : 0));
      return;
    }

    if (e.key === "Enter" && rows[active]) {
      e.preventDefault();
      goTo(rows[active].href);
      return;
    }

    // Keep Tab inside the dialog; without this it walks onto the page behind.
    if (e.key === "Tab") {
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>("input, button");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  let lastSection = "";
  let index = -1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search this site"
      onKeyDown={onKeyDown}
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20 sm:pt-[14vh]"
    >
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close search"
        onClick={onClose}
        className={`absolute inset-0 h-full w-full cursor-default bg-[#1C1A1A]/40 backdrop-blur-[2px] transition-opacity duration-200 ease-out motion-reduce:transition-none ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={panelRef}
        className={`relative w-full max-w-[620px] overflow-hidden rounded-[14px] border border-[#ECEBF1] bg-white shadow-[0_24px_64px_-12px_rgba(28,26,26,0.22)] transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
          shown ? "translate-y-0 scale-100 opacity-100" : "-translate-y-1 scale-[0.985] opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-[#F0EFF4] px-5">
          <SearchGlyph />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search pages and services"
            aria-label="Search pages and services"
            aria-controls="site-search-results"
            autoComplete="off"
            className="w-full bg-transparent py-4 text-[17px] leading-6 text-[#1C1A1A] placeholder:text-[#9A9AA5] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="shrink-0 rounded-[5px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2212FF]"
          >
            <Key>Esc</Key>
          </button>
        </div>

        <div
          id="site-search-results"
          role="listbox"
          className="max-h-[min(56vh,400px)] overflow-y-auto overscroll-contain pb-2"
        >
          {query && !results.length ? (
            <div className="px-5 py-8">
              <p className="text-[15px] leading-6 text-[#1C1A1A]">
                No matches for &ldquo;{query}&rdquo;.
              </p>
              <p className="mt-1 text-[14px] leading-6 text-[#7E7E7E]">
                Try a shorter word, or{" "}
                <button
                  type="button"
                  onClick={() => goTo("/contact-us")}
                  className="text-[#2212FF] underline underline-offset-2 hover:opacity-80"
                >
                  tell us what you&rsquo;re looking for
                </button>
                .
              </p>
            </div>
          ) : (
            rows.map((entry: SearchEntry) => {
              index += 1;
              const i = index;
              const heading = query ? entry.section : "Jump to";
              const newSection = heading !== lastSection;
              lastSection = heading;

              return (
                <div key={`${entry.section}-${entry.title}`}>
                  {newSection && (
                    <p className="px-5 pb-1.5 pt-4 text-[12px] font-medium leading-4 text-[#9A9AA5]">
                      {heading}
                    </p>
                  )}
                  <button
                    type="button"
                    role="option"
                    aria-selected={i === active}
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    onMouseMove={() => setActive(i)}
                    onClick={() => goTo(entry.href)}
                    className={`flex w-full items-center gap-3 px-5 py-2.5 text-left transition-colors duration-100 motion-reduce:transition-none ${
                      i === active ? "bg-[#F5F5F9]" : "bg-transparent"
                    }`}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-medium leading-6 text-[#1C1A1A]">
                        <Highlight text={entry.title} query={query} />
                      </span>
                      <span className="block truncate text-[13px] font-light leading-5 text-[#7E7E7E]">
                        <Highlight text={entry.description} query={query} />
                      </span>
                    </span>
                    <svg
                      viewBox="0 0 16 16"
                      width={15}
                      height={15}
                      aria-hidden
                      className={`shrink-0 text-[#2212FF] transition-opacity duration-100 motion-reduce:transition-none ${
                        i === active ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <path
                        d="M6 3.5 10.5 8 6 12.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              );
            })
          )}
        </div>

        <div className="hidden items-center gap-4 border-t border-[#F0EFF4] px-5 py-2.5 text-[12px] leading-5 text-[#9A9AA5] sm:flex">
          <span className="flex items-center gap-1.5">
            <Key>&uarr;</Key>
            <Key>&darr;</Key>
            to move
          </span>
          <span className="flex items-center gap-1.5">
            <Key>&crarr;</Key>
            to open
          </span>
          <span className="ml-auto flex items-center gap-1.5">
            <Key>&#8984;</Key>
            <Key>K</Key>
            to search
          </span>
        </div>
      </div>
    </div>
  );
}