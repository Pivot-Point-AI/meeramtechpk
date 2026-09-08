"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SearchOverlay } from "@/components/Searchoverlay";
import { RegionSelector } from "@/components/Regionselector";

const navLinks = [
  { label: "What we do", href: "/what-we-do" },
  { label: "How We Solve", href: "/how-we-solve" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "Our Products", href: "/our-products" },
  { label: "Contact us", href: "/contact-us" },
];

/** The label that owns the mega menu. Kept as a constant so the trigger and the
    menu can never drift apart. */
const MENU_LABEL = "What we do";

const menuCards = [
  {
    title: "Digital Ecommerce",
    description: "Drive result through digital transformation.",
    icon: "/images/misc/megamenu/1.png",
    href: "/what-we-do",
    highlight: false,
  },
  {
    title: "Customized ERP Solution",
    description: "Boost efficiency through automation.",
    icon: "/images/misc/megamenu/2.png",
    href: "/what-we-do",
    highlight: false,
  },
  {
    title: "Application Modernization",
    description: "Upgrade legacy systems to modern platforms.",
    icon: "/images/misc/megamenu/3.png",
    href: "/what-we-do",
    highlight: true,
  },
  {
    title: "Datacenter Services",
    description: "Access modern data center solutions.",
    icon: "/images/misc/megamenu/4.png",
    href: "/what-we-do",
    highlight: false,
  },
  {
    title: "Application Integration",
    description: "Streamline IT cost-effectively.",
    icon: "/images/misc/megamenu/5.png",
    href: "/what-we-do",
    highlight: false,
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 8"
      width={11}
      height={7}
      aria-hidden
      className={`ml-1.5 inline-block transition-transform duration-200 ease-out motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M1 1.5 6 6.5l5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 18 18" width={size} height={size} aria-hidden>
      <circle cx="7.75" cy="7.75" r="5.75" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12.15 12.15 16.2 16.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ServicesMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    // top-full rather than a hand-computed offset, so changing the header's
    // padding can't detach the menu from it.
    <div
      className="absolute left-1/2 top-full hidden w-[1440px] max-w-[95vw] -translate-x-1/2 rounded-[11px] border border-[#F3F2F7] bg-white shadow-[0px_14px_49px_rgba(70,70,70,0.09)] xl:block"
      style={{ minHeight: 402 }}
    >
      <p
        className="absolute text-[16px] font-semibold leading-6 text-[#3B3B3B]"
        style={{ left: 160, top: 28 }}
      >
        Digital Technological Services
      </p>
      <p
        className="absolute text-[16px] font-semibold leading-6 text-[#3B3B3B]"
        style={{ left: 555, top: 28 }}
      >
        Digital Infrastructure Services
      </p>

      <div
        className="absolute flex flex-row flex-wrap content-start items-start"
        style={{ left: 152, top: 80, width: 726, rowGap: 16, columnGap: 64 }}
      >
        {menuCards.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={onNavigate}
            className="group flex flex-row items-start gap-2 px-2 py-4"
            style={{ width: 331 }}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                item.highlight ? "bg-[#1813FF]" : ""
              }`}
            >
              <Image
                src={item.icon}
                alt=""
                width={item.highlight ? 24 : 40}
                height={item.highlight ? 24 : 40}
              />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-[16px] font-medium leading-6 text-[#2F2F2F] group-hover:text-brand-blue">
                {item.title}
              </span>
              <span className="text-[12px] font-light leading-[18px] text-[#4F4F4F]">
                {item.description}
              </span>
            </span>
          </Link>
        ))}
      </div>

      <span
        aria-hidden
        className="absolute bg-[#F2F2F2]/55"
        style={{ left: 519, top: 42, width: 1, height: 234 }}
      />

      <div className="absolute flex flex-col gap-4" style={{ left: 972, top: 38, width: 320 }}>
        <p className="text-[16px] font-semibold uppercase leading-6 text-[#3B3B3B]">Services</p>
        <div className="flex flex-col gap-2" style={{ width: 298 }}>
          <div className="relative overflow-hidden bg-[#D9D9D9]" style={{ width: 298, height: 200 }}>
            <Image
              src="/images/services/about-2.png"
              alt="Why data standards matter"
              fill
              sizes="298px"
              className="object-cover"
            />
          </div>
          <p className="text-[13px] font-normal leading-5 text-[#4F4F4F]" style={{ width: 297 }}>
            Why data standards matter &amp; why they&rsquo;re important
          </p>
          <Link
            href="/what-we-do"
            onClick={onNavigate}
            className="flex items-center text-[14px] font-medium leading-[17px] text-[#4C55FF] underline"
          >
            Learn More
            <svg viewBox="0 0 20 20" width={20} height={20} className="rotate-[-90deg]">
              <path
                d="M6 7.5l4 4 4-4"
                fill="none"
                stroke="#4C55FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setRegionOpen(false);
        setOpen(false);
      }
      // Cmd/Ctrl+K is the convention people already have in their fingers.
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Any navigation closes everything — otherwise the menu hangs open over the
  // page you just moved to.
  useEffect(() => {
    setServicesOpen(false);
    setRegionOpen(false);
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <header ref={navRef} className="relative inset-x-0 top-0 z-30 bg-white">
        {/* No justify-between: the gap between the menu and the icon cluster is
            a fixed 71px, and the slack falls between the logo and the menu. */}
        <nav className="mx-auto flex max-w-[1440px] items-center px-6 py-9 lg:px-[120px]">
          <Link href="/" aria-label="MeeramTech home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/logo-mark.svg" alt="MeeramTech" width={53} height={37} />
          </Link>

          <div className="ml-auto flex items-center gap-6 xl:gap-[71px]">
<ul className="hidden items-center justify-between xl:flex xl:w-[686px]">              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                // No display utility here — each branch sets its own, so the
                // two can't fight over which one Tailwind emits last.
            const base =
  "relative text-center text-[18px] font-semibold transition-colors duration-200 " +
  "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand-blue " +
  "after:transition-[width] after:duration-300 motion-reduce:transition-none motion-reduce:after:transition-none";

return link.label === MENU_LABEL ? (
  <li key={link.label}>
    <button
      type="button"
      aria-expanded={servicesOpen}
      aria-haspopup="true"
      onClick={() => {
        setRegionOpen(false);
        setServicesOpen((v) => !v);
      }}
 className={`flex items-center ${base} ${
  isActive
    ? "text-brand-blue after:w-full"
    : "text-[#070707] hover:text-brand-blue"
}`}
    >
      {link.label}
      <Chevron open={servicesOpen} />
    </button>
  </li>
) : (
  <li key={link.label}>
    <Link
      href={link.href}
      aria-current={isActive ? "page" : undefined}
      className={`block ${base} ${
        isActive ? "text-brand-blue after:w-full" : "text-[#070707] hover:text-brand-blue"
      }`}
    >
      {link.label}
    </Link>
  </li>
);
              })}
            </ul>

            <div className="flex items-center gap-5">
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="hidden text-[#262626] hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2212FF] xl:block"
              >
                <SearchIcon />
              </button>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/misc/nav-globe.svg"
                alt=""
                width={22}
                height={22}
                className="hidden xl:block"
              />

              <div className="hidden xl:block">
                <RegionSelector open={regionOpen} setOpen={setRegionOpen} />
              </div>

              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="text-[#262626] xl:hidden"
              >
                <SearchIcon size={22} />
              </button>

              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 xl:hidden"
              >
                <span
                  className={`h-0.5 w-6 bg-black transition ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span className={`h-0.5 w-6 bg-black transition ${open ? "opacity-0" : ""}`} />
                <span
                  className={`h-0.5 w-6 bg-black transition ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>

        {servicesOpen && <ServicesMegaMenu onNavigate={() => setServicesOpen(false)} />}

        {open && (
          <div className="border-t border-[#e9e9e9] bg-white px-6 py-6 xl:hidden">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-[18px] font-semibold ${
                        isActive ? "text-brand-blue underline underline-offset-4" : "text-[#070707]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* The mega menu is xl-only, so its links would otherwise be
                unreachable on mobile. */}
            <ul className="mt-5 flex flex-col gap-3 border-t border-[#e9e9e9] pt-5">
              {menuCards.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-[16px] font-medium text-[#2F2F2F]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-4 border-t border-[#e9e9e9] pt-6">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setSearchOpen(true);
                }}
                className="flex items-center gap-2 text-[16px] font-semibold text-[#262626]"
              >
                <SearchIcon size={18} />
                Search
              </button>

              <div className="ml-auto">
                <RegionSelector open={regionOpen} setOpen={setRegionOpen} compact />
              </div>
            </div>
          </div>
        )}
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}