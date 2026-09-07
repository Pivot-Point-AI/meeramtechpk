"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "What we do", href: "/what-we-do" },
  { label: "How We Solve", href: "/how-we-solve" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "Our Products", href: "/our-products" },
  { label: "Contact us", href: "/contact-us" },
];

const menuCards = [
  {
    title: "Digital Ecommerce",
    description: "Drive result through digital transformation.",
    icon: "/images/misc/megamenu/1.png",
    highlight: false,
  },
  {
    title: "Customized ERP Solution",
    description: "Boost efficiency through automation.",
    icon: "/images/misc/megamenu/2.png",
    highlight: false,
  },
  {
    title: "Application Modernization",
    description: "Upgrade legacy systems to modern platforms.",
    icon: "/images/misc/megamenu/3.png",
    highlight: true,
  },
  {
    title: "Datacenter Services",
    description: "Access modern data center solutions.",
    icon: "/images/misc/megamenu/4.png",
    highlight: false,
  },
  {
    title: "Application Integration",
    description: "Streamline IT cost-effectively.",
    icon: "/images/misc/megamenu/5.png",
    highlight: false,
  },
];

function ProductsMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div
      className="absolute left-1/2 top-[105px] hidden w-[1440px] max-w-[95vw] -translate-x-1/2 rounded-[11px] border border-[#F3F2F7] bg-white shadow-[0px_14px_49px_rgba(70,70,70,0.09)] xl:block"
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
            href="/our-products"
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
            href="/our-products"
            onClick={onNavigate}
            className="flex items-center text-[14px] font-medium leading-[17px] text-[#4C55FF] underline"
          >
            Learn More
            <svg viewBox="0 0 20 20" width={20} height={20} className="rotate-[-90deg]">
              <path d="M6 7.5l4 4 4-4" fill="none" stroke="#4C55FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setProductsOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <header ref={navRef} className="relative inset-x-0 top-0 z-30 bg-white">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-9 lg:px-[121px]">
        <Link href="/" aria-label="MeeramTech home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/brand/logo-mark.svg" alt="MeeramTech" width={53} height={37} />
        </Link>

        <ul className="hidden items-center gap-9 xl:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return link.label === "Our Products" ? (
              <li key={link.label}>
                <button
                  type="button"
                  aria-expanded={productsOpen}
                  onClick={() => setProductsOpen((v) => !v)}
                  className={`relative block text-center after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand-blue after:transition-[width] after:duration-300 hover:after:w-full motion-reduce:after:transition-none text-[18px] font-semibold hover:text-brand-blue ${
                    productsOpen || isActive ? "text-brand-blue after:w-full" : "text-[#070707]"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative block text-center after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand-blue after:transition-[width] after:duration-300 hover:after:w-full motion-reduce:after:transition-none text-[18px] font-semibold hover:text-brand-blue ${
                    isActive ? "text-brand-blue after:w-full" : "text-[#070707]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-5">
          <button type="button" aria-label="Search" className="hidden text-[#262626] xl:block">
                     <img src="/images/misc/nav-flag.svg" alt="Pakistan" width={18} height={18} />

          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/misc/nav-globe.svg" alt="" width={22} height={22} className="hidden xl:block" />
          <button type="button" className="hidden items-center gap-1 text-[18px] font-semibold uppercase text-[#262626] xl:flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            Pak
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/misc/chevron.svg" alt="" width={8} height={4} />
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 xl:hidden"
          >
            <span className={`h-0.5 w-6 bg-black transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-black transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-black transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {productsOpen && <ProductsMegaMenu onNavigate={() => setProductsOpen(false)} />}

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

          <div className="mt-6 flex items-center gap-4 border-t border-[#e9e9e9] pt-6">
            <button type="button" aria-label="Search" className="flex items-center gap-2 text-[16px] font-semibold text-[#262626]">
                          <img src="/images/misc/nav-flag.svg" alt="Pakistan" width={18} height={18} />

              Search
            </button>
            <button type="button" className="ml-auto flex items-center gap-1 text-[16px] font-semibold uppercase text-[#262626]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              Pak
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/misc/chevron.svg" alt="" width={8} height={4} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}