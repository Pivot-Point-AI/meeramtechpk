import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Reinvention — MeeramTech",
  description: "Stories of reinvention from the world's most iconic brands.",
};

const clientLogos = [
  { name: "Poste Italiane", active: true },
  { name: "AI Ethihad Payments", active: false },
  { name: "Vadafone", active: false },
  { name: "Best Buy", active: false },
  { name: "BBVA", active: false },
];

const stories = [
  {
    title: "Leverage custom IT expertise & get cross-platform solutions",
    image: "/images/clientstories/teenager-light-movie-projector%201%20(2).png",
  },
  {
    title: "Bringing intelligence into everyday operations",
    image: "/images/clientstories/Image_fx%20%2823%29%201.png",
  },
  {
    title: "Rahper hails a new era for advertising",
    image: "/images/clientstories/red-hat-banner-960x960%201.png",
  },
  {
    title: "Your pathway to innovative solutions for a smarter future",
    image: "/images/clientstories/hero-our-platform-1200x1350%201.png",
  },
];

function PlayButton() {
  return (
    <span className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <path d="M18 9.27a2 2 0 0 1 0 3.46L3.5 21.2A2 2 0 0 1 .5 19.47V2.53A2 2 0 0 1 3.5.8L18 9.27Z" fill="#011D0D" />
      </svg>
    </span>
  );
}

export default function ReinventionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white pb-16 pt-6 lg:pb-20 lg:pt-10">
          <div className="mx-auto flex max-w-[1440px] justify-center px-6 lg:px-[121px]">
            <h1 className="w-fit font-sans uppercase text-black">
              <span className="block text-[40px] font-bold leading-[0.74] sm:text-[56px] lg:text-[69px]">
                Together we
              </span>
              <span className="mt-2 flex items-center gap-2 text-[36px] font-bold leading-none sm:ml-[3.86em] sm:gap-3 sm:text-[56px] lg:text-[69px]">
                rei
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/brand/hero-mark.svg"
                  alt=""
                  className="inline-block h-[0.65em] w-auto translate-y-1"
                />
                agine
              </span>
            </h1>
          </div>
        </section>

        {/* Staying ahead of the game */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
            <h2 className="mt-10 text-[28px] font-bold leading-[1.1] text-black sm:text-[32px] lg:mt-[125px] lg:text-[40px] lg:leading-[97%]">
              Staying ahead of the game
            </h2>

            <div className="mt-6 flex flex-col gap-10 lg:mt-[38px] lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-col gap-4 text-[16px] font-medium leading-[1.6] text-[#171717] sm:text-[17.8px] sm:leading-[28px] lg:w-[574px] lg:text-justify">
                <p>
                  MeeramTech delivers customized and ready-made software solutions for SMEs and
                  corporates, enabling growth across industries like Fintech, Healthcare,
                  Transportation, and Retail. We leverage global partnerships and a
                  multicultural team to build efficient platforms for real-time applications.
                </p>
                <p>
                  Transportation, and Retail. We leverage global partnerships and a
                  multicultural team to build efficient platforms for real-time applications.
                </p>
              </div>

              <div className="lg:w-[448px]">
                <div className="relative aspect-[448/213] w-full overflow-hidden bg-[#D9D9D9]">
                  <Image
                    src="/images/clientstories/marble-product-backdrop-with-blank-space%201.png"
                    alt="A modern glass-walled building"
                    fill
                    sizes="448px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayButton />
                  </div>
                </div>
                <p className="mt-4 text-[16px] font-medium leading-[1.6] text-[#171717] sm:text-[17.8px] sm:leading-[28px] lg:mt-[14px]">
                  This is your time to create something remarkable. let your ideas spark progress
                  and your passion shape new possibilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Shaping tomorrow, today */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
            <h2 className="mt-16 text-[28px] font-bold leading-[1.1] text-black sm:text-[32px] lg:mt-[50px] lg:text-[40px] lg:leading-[97%]">
              Shaping tomorrow, today
            </h2>
            <p className="mt-6 max-w-[889px] text-[16px] font-medium leading-[1.6] text-[#171717] sm:text-[17.8px] sm:leading-[28px] lg:mt-[38px]">
              Across industries, CEOs are rewriting the rules of growth, innovation, and
              resilience. Hear directly from these leaders in our exclusive video series hosted by
              Accenture CEO Julie Sweet.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-4 lg:mt-[76px]">
              {clientLogos.map((logo) => (
                <span key={logo.name} className="flex items-center gap-2">
                  {logo.active && (
                    <span
                      className="h-[7px] w-[7px] shrink-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(92.24deg, #0015FF 1.89%, #BF00FF 136.12%)",
                      }}
                    />
                  )}
                  <span
                    className={`text-[18px] font-semibold leading-[1.6] sm:text-[22px] lg:text-[27px] ${
                      logo.active ? "text-[#090909]" : "text-[#B3B3B3]"
                    }`}
                  >
                    {logo.name}
                  </span>
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-10 lg:mt-[52px] lg:flex-row lg:items-start lg:justify-between">
              <div className="lg:w-[574px]">
                <div className="flex flex-col gap-4 text-[16px] font-medium leading-[1.6] text-[#171717] sm:text-[17.8px] sm:leading-[28px] lg:text-justify">
                  <p>
                    MeeramTech delivers customized and ready-made software solutions for SMEs and
                    corporates, enabling growth across industries like Fintech, Healthcare,
                    Transportation, and Retail. We leverage global partnerships and a
                    multicultural team to build efficient platforms for real-time applications.
                  </p>
                  <p>
                    Transportation, and Retail. We leverage global partnerships and a
                    multicultural team to build efficient platforms for real-time applications.
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-8 inline-flex items-center gap-[10px] border border-black px-[45px] py-[10px] text-[16px] font-medium leading-[28px] text-black sm:text-[17.8px] lg:mt-[38px]"
                >
                  Watch the full interview
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M1 1l6 6-6 6" stroke="#000" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              <div className="lg:w-[555px]">
                <div className="relative aspect-[555/312] w-full overflow-hidden bg-[#D9D9D9]">
                  <Image
                    src="/images/clientstories/preview.webp"
                    alt="Two colleagues in an interview conversation"
                    fill
                    sizes="555px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More stories of reinvention */}
        <section className="bg-white pb-16 lg:pb-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="mt-16 px-6 text-[28px] font-bold leading-[1.1] text-black sm:text-[32px] lg:mt-[108px] lg:px-[121px] lg:text-[40px] lg:leading-[97%]">
              More stories of reinvention
            </h2>

            <div className="mt-8 overflow-hidden pl-6 lg:mt-[81px] lg:pl-[121px]">
              <div className="animate-reinvention-scroll flex w-max">
                {[...stories, ...stories].map((story, index) => (
                  <article
                    key={`${story.title}-${index}`}
                    className="relative mr-6 h-[350px] w-[220px] shrink-0 overflow-hidden bg-black sm:h-[438px] lg:mr-[27px] lg:w-[279px]"
                  >
                    <Image src={story.image} alt="" fill sizes="279px" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/5 to-transparent" />
                    <div className="absolute left-6 right-6 top-[30px] flex flex-col gap-[11px]">
                      <span className="text-[12px] font-semibold uppercase leading-[18px] text-white">
                        Case Study
                      </span>
                      <p className="text-[16px] font-normal leading-[24px] text-white">{story.title}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
