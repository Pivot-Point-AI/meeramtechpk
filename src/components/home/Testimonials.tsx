"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "This fintech solution has helped us streamline payments and manage cash flow effortlessly.",
    name: "Alex Acker",
    title: "Senior Manager",
    avatar: "/images/people/testimonial-1.png",
  },
  {
    quote:
      "I love how smooth and transparent the experience is. Payments are instant, the app is intuitive, and I always feel in control of my money.",
    name: "David",
    title: "Project Manager",
    avatar: "/images/people/testimonial-2.png",
  },
  {
    quote:
      "Security was my biggest concern, but this platform exceeded expectations. Knowing my transactions and data are protected gives me complete peace of mind.",
    name: "Spencer",
    title: "VP of Growth",
    avatar: "/images/people/testimonial-3.png",
  },
  {
    quote:
      "Onboarding took minutes, not weeks. Their team understood our workflow and tailored the platform without slowing us down.",
    name: "Farah Hassan",
    title: "Head of Operations",
    avatar: "/images/people/quote-portrait.png",
  },
  {
    quote:
      "The reporting dashboards give us real-time visibility we never had before. Decisions that used to take days now take minutes.",
    name: "Marcus Lee",
    title: "Finance Director",
    avatar: "/images/people/quote-portrait3.png",
  },
  {
    quote:
      "Reliable, scalable, and genuinely easy to use. Our support tickets dropped significantly after switching over.",
    name: "Priya Nair",
    title: "Head of Customer Success",
    avatar: "/images/people/quote-portrait4.png",
  },
];

const groupSize = 3;

export function Testimonials() {
  const groups: (typeof testimonials)[] = [];
  for (let i = 0; i < testimonials.length; i += groupSize) {
    groups.push(testimonials.slice(i, i + groupSize));
  }

  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % groups.length);
    }, 5000);
    return () => clearInterval(id);
  }, [groups.length]);

  useEffect(() => {
    const id = setInterval(() => {
      setMobileActive((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
        <h2 className="text-center text-[32px] font-bold capitalize sm:text-[40px] lg:text-[47px]">
          Customer Testimonials
        </h2>

        {/* Mobile: one testimonial at a time */}
        <div className="mt-10 grid sm:hidden [&>*]:col-start-1 [&>*]:row-start-1">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              aria-hidden={i !== mobileActive}
              className={`flex w-full flex-col rounded-2xl bg-white p-8 shadow-[0_0_10px_0_rgba(0,0,0,0.05)] transition-opacity duration-700 ${
                i === mobileActive
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <span className="text-[52px] leading-none text-brand-blue">&ldquo;</span>
              <p className="mt-2 text-[16px] leading-[1.35] text-[#8d8d8d]">
                {t.quote}
              </p>
              <div className="mt-auto flex items-center gap-3 pt-8">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={49}
                  height={49}
                  className="size-[49px] shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-[18px] font-semibold uppercase">{t.name}</p>
                  <p className="text-[14px]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setMobileActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === mobileActive ? "w-6 bg-brand-blue" : "w-2 bg-black/20"
              }`}
            />
          ))}
        </div>

        {/* sm and up: grouped carousel */}
        <div className="mt-16 hidden sm:grid [&>*]:col-start-1 [&>*]:row-start-1">
          {groups.map((group, i) => (
            <div
              key={i}
              aria-hidden={i !== active}
              className={`flex items-stretch justify-center gap-8 pb-4 transition-opacity duration-700 ${
                i === active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {group.map((t) => (
                <div
                  key={t.name}
                  className="flex max-w-[360px] grow-0 basis-[calc(33.333%-1.334rem)] flex-col rounded-2xl bg-white p-8 shadow-[0_0_10px_0_rgba(0,0,0,0.05)] transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="text-[52px] leading-none text-brand-blue">&ldquo;</span>
                  <p className="mt-2 text-[16px] leading-[1.35] text-[#8d8d8d]">
                    {t.quote}
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-8">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={49}
                      height={49}
                      className="size-[49px] shrink-0 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[18px] font-semibold uppercase">{t.name}</p>
                      <p className="text-[14px]">{t.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 hidden justify-center gap-2 sm:flex">
          {groups.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonials slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-brand-blue" : "w-2 bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}