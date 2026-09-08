"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/people/careers-team.png",
    heading: "Grow your career at the heart of change",
    text: "It's your moment to stand out — use your creativity and curiosity to make an impact. Bring bold ideas that inspire change and push boundaries forward.",
  },
  {
    image: "/images/people/careers-team2.png",
    heading: "Collaborate with industry-leading experts",
    text: "Join a team of seasoned professionals solving real business challenges. Sharpen your skills, take ownership of meaningful work, and grow alongside people who push you further.",
  },
];

export function CareersSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="careers" className="bg-white py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-6 min-[1350px]:flex-row min-[1350px]:gap-[52px] lg:px-[121px]">
        <div className="group relative h-[280px] w-full max-w-[656px] shrink-0 overflow-hidden min-[1350px]:h-[434px]">
          {slides.map((slide, i) => (
            <Image
              key={slide.image}
              src={slide.image}
              alt="MeeramTech team brainstorming"
              fill
              sizes="(min-width: 1350px) 656px, 100vw"
              className={`object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 hover:bg-white ${
                  i === active ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-[557px]">
          <p className="text-[22px] font-semibold uppercase">Careers</p>
          <div className="relative">
            {slides.map((slide, i) => (
              <div
                key={slide.image}
                className={`transition-opacity duration-700 ${
                  i === active ? "relative opacity-100" : "absolute inset-0 opacity-0"
                }`}
              >
                <h2 className="mt-4 text-[26px] font-bold leading-[1.25] text-black sm:text-[34px]">
                  {slide.heading}
                </h2>
                <p className="mt-4 text-justify text-[16px] leading-[1.35] text-black sm:text-[20px]">
                  {slide.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}