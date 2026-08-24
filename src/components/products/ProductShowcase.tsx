"use client";

import { useState } from "react";
import Image from "next/image";

type Slide = {
  name: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    name: "Datum",
    description:
      "A Spreadsheet solution to Collect, Visualize, Manipulate, Secure, Export and Manage Data & Documents. Excel & OpenXML Compatible Solution",
    image: "/images/brand/63581adbc83bda71478b94f5_LIT-5_1-p-800.png.png",
  },
  {
    name: "Datum",
    description:
      "A Spreadsheet solution to Collect, Visualize, Manipulate, Secure, Export and Manage Data & Documents. Excel & OpenXML Compatible Solution",
    image: "/images/brand/37673989-bbbf-476f-b716-11be524ff3d8.png",
  },
];

export function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  function goPrevious() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function goNext() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#08070E] py-20 sm:py-28">
      <Image
        src="/images/brand/63122c7c0d09395c8ecfd791_Asset.png.png"
        alt=""
        width={220}
        height={220}
        aria-hidden
        className="pointer-events-none absolute left-0 top-[80px] hidden w-[180px] opacity-60 sm:top-[110px] sm:w-[220px] lg:block"
      />
      <Image
        src="/images/brand/63122c774c17c17f583cfacb_Asset.png.png"
        alt=""
        width={220}
        height={220}
        aria-hidden
        className="pointer-events-none absolute right-0 top-[380px] hidden w-[180px] opacity-60 sm:top-[420px] sm:w-[220px] lg:block"
      />

      <div className="relative mx-auto flex max-w-[1190px] items-center justify-between px-6">
        <button
          type="button"
          onClick={goPrevious}
          className="z-10 font-[var(--font-playfair)] text-[22px] font-bold text-white sm:text-[30px]"
        >
          Previous
        </button>

        <div className="relative aspect-[649/462] w-full max-w-[649px] shrink">
          <div
            aria-hidden
            className="absolute inset-0 rounded-sm bg-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            style={{ transform: "rotate(-14deg)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 translate-x-[3%] translate-y-[12%] rounded-sm bg-[#2a2a2a] shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            style={{ transform: "rotate(-6.83deg)" }}
          />
          <div
            className="absolute inset-0 translate-x-[7%] translate-y-[24%] overflow-hidden rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            style={{ transform: "rotate(-0.67deg)" }}
          >
            <Image
              src={slide.image}
              alt={slide.name}
              fill
              sizes="(min-width: 1024px) 649px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          className="z-10 font-[var(--font-playfair)] text-[22px] font-bold text-white sm:text-[30px]"
        >
          Next
        </button>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-[750px] items-start justify-between px-6 sm:mt-28">
        <h2 className="font-[var(--font-poppins)] text-[28px] font-semibold tracking-[-0.02em] text-white sm:text-[30px]">
          {slide.name}
        </h2>
        <p className="max-w-[397px] font-[var(--font-poppins)] text-[14px] font-light leading-[179%] text-white">
          {slide.description}
        </p>
      </div>
    </section>
  );
}
