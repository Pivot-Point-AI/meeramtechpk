import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Careers — MeeramTech",
  description:
    "Work at the heart of change. Explore open roles at MeeramTech and discover a community where everyone belongs.",
};

const careerStages = ["Students", "Apprenticeships", "Early career professionals", "Experienced professionals", "Executive leaders"];

type BelongCard = {
  title: string;
  description: string;
  image: string;
  left: number;
  top: number;
  width: number;
  height: number;
  textTop: number;
};

// Absolute coordinates taken from the Figma "You belong here" mosaic (1440px frame).
const belongCards: BelongCard[] = [
  {
    title: "Emotional & mental",
    description: "Access our comprehensive collection of reports,",
    image: "/images/careers/emotional-mental.png",
    left: 110,
    top: 0,
    width: 438,
    height: 551,
    textTop: 571,
  },
  {
    title: "Relational",
    description: "Ensuring a sense of belonging and connection for all",
    image: "/images/careers/relational.png",
    left: 581,
    top: 0,
    width: 384,
    height: 294,
    textTop: 314,
  },
  {
    title: "Physical",
    description: "Supporting physical well-being",
    image: "/images/careers/physical.png",
    left: 729,
    top: 571,
    width: 594,
    height: 385,
    textTop: 975,
  },
  {
    title: "Purposeful",
    description: "Evolving our purpose to meet an enlightened workforce, customers and community",
    image: "/images/careers/purposeful.png",
    left: 122,
    top: 1158,
    width: 438,
    height: 551,
    textTop: 1729,
  },
  {
    title: "Employable",
    description: "Helping you get the right skills to advance to higher paying roles",
    image: "/images/careers/employable.png",
    left: 593,
    top: 1158,
    width: 384,
    height: 294,
    textTop: 1472,
  },
  {
    title: "Financial",
    description: "Offering rewards and benefits packages to meet your needs",
    image: "/images/careers/financial.png",
    left: 729,
    top: 1729,
    width: 594,
    height: 385,
    textTop: 2133,
  },
];

const BELONG_GRID_HEIGHT = 2260;

function BelongCardMobile({ card }: { card: BelongCard }) {
  return (
    <article>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: `${card.width}/${card.height}` }}>
        <Image src={card.image} alt={card.title} fill sizes="100vw" className="object-cover" />
      </div>
      <h3 className="mt-5 text-[24px] font-semibold leading-[104%] text-black sm:text-[28px]">
        {card.title}
      </h3>
      <p className="mt-2 max-w-[380px] text-[16px] leading-[1.4] text-[#171717] sm:text-[18px]">
        {card.description}
      </p>
    </article>
  );
}

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <PageHeader label="Careers" />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-[110px]">
          <div className="mx-auto grid max-w-[560px] grid-cols-2 gap-4 px-6 lg:hidden">
            <div className="relative aspect-[360/590] w-full">
              <Image
                src="/images/careers/hero-writing.png"
                alt="Woman writing in a notebook"
                fill
                sizes="50vw"
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[332/590] w-full">
              <Image
                src="/images/careers/hero-laptop.png"
                alt="Woman smiling while working on a laptop"
                fill
                sizes="50vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[300px] items-center xl:flex">
            <Image
              src="/images/careers/hero-writing.png"
              alt="Woman writing in a notebook"
              width={360}
              height={590}
              sizes="300px"
              className="h-auto w-full"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[280px] items-center xl:flex">
            <Image
              src="/images/careers/hero-laptop.png"
              alt="Woman smiling while working on a laptop"
              width={332}
              height={590}
              sizes="280px"
              className="h-auto w-full"
            />
          </div>

          <div className="relative z-10 mx-auto mt-10 max-w-[620px] px-6 text-center lg:mt-0">
            <h1 className="text-[36px] font-bold leading-[1.05] text-black sm:text-[50px] lg:text-[65px]">
              Work at the heart of change
            </h1>
            <p className="mx-auto mt-6 max-w-[561px] text-[16px] leading-[1.6] text-black sm:text-[18px] sm:leading-[30px]">
              This is a place to grow, learn, and truly connect. We welcome every idea, every
              background, and every strength you bring. Here, you&rsquo;re encouraged to explore,
              evolve, and discover your full potential. Everything that makes you unique is
              valued, supported, and celebrated. Together, we build a community where everyone
              belongs.
            </p>
          </div>
        </section>

        {/* Wherever you are in your career */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
            <h2 className="max-w-[700px] text-[32px] font-bold leading-[1.1] text-black sm:text-[44px] lg:text-[60px]">
              Wherever you are in your career
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-16">
              <ul className="flex flex-col gap-2">
                {careerStages.map((stage, i) => (
                  <li key={stage} className="flex items-center gap-3">
                    {i === 0 && (
                      <span aria-hidden className="h-[11px] w-[11px] shrink-0 rounded-full bg-[#B601FF]" />
                    )}
                    <span
                      className={`text-[24px] font-semibold leading-[1.15] sm:text-[30px] lg:text-[34px] ${
                        i === 0 ? "text-black" : "ml-[26px] text-[#908F93]"
                      }`}
                    >
                      {stage}
                    </span>
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-[16px] leading-[25px] text-black sm:text-[18px]">
                  A great place to build skills, grow, and launch your career.
                </p>
                <div className="relative mt-4 aspect-[445/255] w-full overflow-hidden">
                  <Image
                    src="/images/careers/wherever-thumbnail.png"
                    alt="Young professional carrying a backpack in a modern office"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* You belong here */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
            <h2 className="text-[40px] font-bold leading-[1.05] text-black sm:text-[56px] lg:text-[72px]">
              You belong here
            </h2>
            <p className="mt-6 max-w-[850px] text-[18px] leading-[1.5] text-[#171717] sm:text-[22px] sm:leading-[30px]">
              No two people are the same. By prioritizing six areas of well-being, we foster an
              inclusive environment where we all feel valued, seen and heard&mdash;we call this Net
              Better Off.
            </p>
          </div>

          {/* Mobile / tablet: simple stacked fallback (the mosaic below is fixed-pixel to the 1440 design) */}
          <div className="mx-auto mt-14 flex max-w-[1440px] flex-col gap-12 px-6 lg:hidden">
            {belongCards.map((card) => (
              <BelongCardMobile key={card.title} card={card} />
            ))}
          </div>

          {/* Desktop: pixel-exact mosaic matching the Figma frame */}
          <div className="mt-14 hidden overflow-x-auto lg:block">
            <div
              className="relative mx-auto w-[1440px]"
              style={{ height: BELONG_GRID_HEIGHT }}
            >
              {belongCards.map((card) => (
                <div key={card.title}>
                  <div
                    className="absolute overflow-hidden"
                    style={{ left: card.left, top: card.top, width: card.width, height: card.height }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="600px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute" style={{ left: card.left, top: card.textTop, width: card.width }}>
                    <h3 className="text-[29px] font-semibold leading-[104%] text-black">{card.title}</h3>
                    <p className="mt-2 max-w-[400px] text-[18px] leading-[25px] text-[#171717]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stay Connected */}
        <section className="flex min-h-[420px] items-center bg-black py-16 text-white lg:min-h-[560px]">
          <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[121px]">
            <h2 className="text-[36px] font-semibold capitalize leading-[1.1] sm:text-[48px] lg:text-[59px]">
              Stay Connected
            </h2>

            <div className="mt-10 lg:mt-[75px]">
              <h3 className="text-[24px] font-semibold leading-[1.05] sm:text-[29px]">Join Us</h3>
              <p className="mt-2 max-w-[400px] text-[16px] leading-[1.4] text-white/90 sm:text-[18px]">
                Explore open roles that match your interests and skills.
              </p>

              <Link
                href="/#careers"
                className="mt-8 inline-flex h-[58px] w-[186px] items-center justify-center bg-[#2212FF] text-[16px] font-semibold capitalize text-white hover:opacity-90 sm:mt-[38px] sm:text-[19px]"
              >
                Let&rsquo;s Connect
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
