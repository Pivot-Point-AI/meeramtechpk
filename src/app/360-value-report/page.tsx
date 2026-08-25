import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "360° Value Report — MeeramTech",
  description:
    "Explore the value MeeramTech delivers to our clients, people, shareholders, partners and communities across six dimensions of 360° value.",
};

const dimensions = [
  [
    { word: "Client", image: "/images/seereport/image%20805%20(9).png" },
    { word: "Experience", image: "/images/seereport/image%20805%20(8).png" },
  ],
  [
    { word: "Talent", image: "/images/seereport/pexels-zaksheuskaya-709412-1616403%201.png" },
    { word: "I&D", image: "/images/seereport/pexels-nguyen-tran-327588-932409%201.png" },
  ],
  [
    { word: "Sustainability", image: "/images/seereport/pexels-hinrich-oltmanns-53938-357135%201.png" },
    { word: "Financial", image: "/images/seereport/pexels-pixabay-128867%201.png" },
  ],
];

const reportColumns: {
  caption: string;
  card: { kind: "photo" | "overlay" | "solid"; image?: string; eyebrow?: string; title: string; height: string };
}[][] = [
  [
    {
      caption: "Bloomberg Gender Equality Index",
      card: {
        kind: "photo",
        image: "/images/seereport/pexels-pixabay-210598%201.png",
        title: "Bloomberg Gender Equality Index",
        height: "h-[220px] lg:h-[294px]",
      },
    },
    {
      caption: "Annual Report",
      card: {
        kind: "solid",
        image: "/images/seereport/acn-20241206_g124%201.png",
        title: "2025 Annual Report",
        height: "h-[340px] lg:h-[477px]",
      },
    },
  ],
  [
    {
      caption: "360° Value Report",
      card: {
        kind: "overlay",
        image: "/images/seereport/image%20859.png",
        eyebrow: "360° Value Report",
        title: "Delivering value from every angle",
        height: "h-[340px] lg:h-[477px]",
      },
    },
    {
      caption: "Environmental and I&D Metrics",
      card: {
        kind: "photo",
        image: "/images/seereport/pexels-tamchec-14441639%201.png",
        title: "Environmental and I&D Metrics",
        height: "h-[220px] lg:h-[294px]",
      },
    },
  ],
  [
    {
      caption: "Performance Data Table",
      card: {
        kind: "photo",
        image: "/images/seereport/pexels-expect-best-79873-323705%201.png",
        title: "Performance Data Table",
        height: "h-[220px] lg:h-[294px]",
      },
    },
    {
      caption: "Proxy Statement",
      card: {
        kind: "overlay",
        image: "/images/seereport/acn-20241206_g124%201%20(3).png",
        eyebrow: "Proxy Statement",
        title: "Proxy statement and notice of annual meeting",
        height: "h-[340px] lg:h-[477px]",
      },
    },
  ],
];

function Chevron() {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="shrink-0">
      <path d="M1 1l6 6-6 6" stroke="#000" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CaptionLink({ label }: { label: string }) {
  return (
    <Link
      href="#"
      className="mt-3 flex items-center gap-2 text-[15px] font-medium leading-[1.6] text-[#171717] sm:text-[16px] lg:mt-[20px] lg:leading-[30px]"
    >
      {label}
      <Chevron />
    </Link>
  );
}

function ReportCard({ card }: { card: (typeof reportColumns)[number][number]["card"] }) {
  if (card.kind === "solid") {
    return (
      <div className={`relative w-full overflow-hidden ${card.height}`}>
        {card.image && (
          <Image src={card.image} alt="" fill sizes="(min-width: 1024px) 384px, 100vw" className="object-cover" />
        )}
        <div className="absolute bottom-0 right-0 top-[12%] left-[18%] bg-[#2212FF]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/hero-mark.svg"
            alt=""
            className="absolute left-6 top-6 h-[18px] w-auto brightness-0 invert lg:left-[19px] lg:top-[19px] lg:h-[22px]"
          />
          <p className="absolute bottom-8 left-6 max-w-[230px] text-[24px] font-semibold leading-[1.15] text-white sm:text-[28px] lg:bottom-[174px] lg:left-[23px] lg:text-[32px] lg:leading-[36px]">
            {card.title}
          </p>
        </div>
      </div>
    );
  }

  if (card.kind === "overlay") {
    return (
      <div className={`relative w-full overflow-hidden bg-[#D9D9D9] ${card.height}`}>
        {card.image && (
          <Image src={card.image} alt={card.title} fill sizes="(min-width: 1024px) 384px, 100vw" className="object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 lg:bottom-[70px] lg:left-[26px] lg:right-6">
          <span className="text-[13px] font-bold uppercase leading-none tracking-wide text-white sm:text-[15px] lg:text-[17px]">
            {card.eyebrow}
          </span>
          <p className="max-w-[310px] text-[18px] font-semibold leading-[1.25] text-white sm:text-[21px] lg:text-[24px] lg:leading-[30px]">
            {card.title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden bg-[#D9D9D9] ${card.height}`}>
      {card.image && (
        <Image src={card.image} alt={card.title} fill sizes="(min-width: 1024px) 384px, 100vw" className="object-cover" />
      )}
    </div>
  );
}

export default function ValueReportPage() {
  return (
    <>
      <Navbar />
      <PageHeader label="Who we are" />
      <main>
        {/* Hero */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-10 lg:px-[121px] lg:pb-[61px] lg:pt-[48px]">
            <p className="text-[14px] font-semibold leading-[1.4] text-black sm:text-[18px] lg:text-[22px] lg:leading-[38px]">
              MeeramTech 360° Value Reporting Experience
            </p>
            <h1 className="mt-4 max-w-[657px] text-[36px] font-bold leading-[1.05] text-black sm:text-[42px] lg:mt-[8px] lg:text-[46px] lg:leading-[100%]">
              Every day, we create 360° value
            </h1>
            <p className="mt-5 max-w-[739px] text-[16px] font-medium leading-[1.6] text-[#171717] sm:text-[17px] lg:mt-[23px] lg:text-[18px] lg:leading-[30px]">
              Explore the value we deliver to our clients, people, shareholders, partners and
              communities.
            </p>
          </div>
        </section>

        {/* What is 360 value */}
        <section className="bg-black">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-16 pb-16 text-center lg:px-[121px] lg:pt-[119px] lg:pb-[116px]">
            <h2 className="whitespace-nowrap text-[28px] font-semibold capitalize leading-[1.1] text-white sm:text-[40px] lg:text-[59px] lg:leading-[70%]">
              What Is 360° Value?
            </h2>
            <p className="mt-6 max-w-[880px] text-[32px] font-light leading-[40px] text-white lg:mt-[20px]">
              We create 360° value by delivering measurable impact, supporting growth, and
              empowering clients through inclusion, skills, sustainability, and meaningful
              experiences.
            </p>
            <a
              href="#"
              className="mt-8 flex h-[52px] w-full max-w-[435px] items-center justify-center bg-[#2212FF] px-6 text-center text-[16px] font-semibold leading-[70%] text-white sm:text-[18px] lg:mt-[45px] lg:h-[58px] lg:text-[19px]"
            >
              Download full report as accessible PDF
            </a>
          </div>
        </section>

        {/* Six dimensions */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[121px] lg:pt-[125px] lg:pb-[100px]">
            <h2 className="whitespace-nowrap text-center text-[13px] font-semibold uppercase leading-[1.2] text-black sm:text-[20px] lg:text-[26px] min-[1150px]:text-[40px] min-[1150px]:leading-[100%]">
              Discover our six dimensions of 360° value
            </h2>

            <div className="mt-10 flex flex-col gap-8 lg:mt-[73px] lg:gap-[41px]">
              {dimensions.map((row) => (
                <div
                  key={row.map((d) => d.word).join("-")}
                  className="flex flex-col items-center gap-8 min-[1440px]:flex-row min-[1440px]:flex-nowrap min-[1440px]:justify-center min-[1440px]:gap-x-[35px]"
                >
                  {row.map((dimension) => (
                    <div key={dimension.word} className="flex items-center gap-4 lg:gap-5">
                      <div className="relative h-[62px] w-[90px] shrink-0 overflow-hidden rounded-[2px] bg-[#D9D9D9] sm:h-[76px] sm:w-[110px] lg:h-[85px] lg:w-[124px]">
                        <Image
                          src={dimension.image}
                          alt=""
                          fill
                          sizes="124px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-[40px] font-semibold capitalize leading-[0.9] text-black sm:text-[56px] lg:text-[78px] lg:leading-[70%]">
                        {dimension.word}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stories of 360 value in action */}
        <section className="bg-black">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-16 pb-16 text-center lg:px-[121px] lg:pt-[152px] lg:pb-[128px]">
            <h2 className="whitespace-nowrap text-[20px] font-semibold capitalize leading-[1.1] text-white sm:text-[32px] lg:text-[59px] lg:leading-[70%]">
              Stories Of 360° Value In Action
            </h2>
            <p className="mt-6 max-w-[972px] text-[32px] font-normal leading-[40px] text-white lg:mt-[31px]">
              See more examples of 360° value in action: Check out our additional case studies.
            </p>
            <Link
              href="/reinvention"
              className="mt-8 flex h-[52px] w-full max-w-[235px] items-center justify-center bg-[#2212FF] px-6 text-center text-[16px] font-semibold capitalize leading-[70%] text-white sm:text-[18px] lg:mt-[56px] lg:h-[58px] lg:text-[19px]"
            >
              View Client stories
            </Link>
          </div>
        </section>

        {/* Reports */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 pt-16 pb-20 lg:px-[121px] lg:pt-[71px] lg:pb-[109px]">
            <h2 className="text-[34px] font-bold leading-[1.1] text-black sm:text-[40px] lg:text-[46px] lg:leading-[104%]">
              Reports
            </h2>
            <p className="mt-4 max-w-[729px] text-[16px] font-medium leading-[1.6] text-[#171717] sm:text-[17px] lg:mt-[23px] lg:text-[18px] lg:leading-[30px]">
              Access our comprehensive collection of reports, offering insights into our
              performance, strategic initiatives and value creation.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-[99px] lg:gap-6">
              {reportColumns.map((column, i) => (
                <div key={i} className="flex flex-col gap-10 lg:gap-[65px]">
                  {column.map((item) => (
                    <div key={item.caption}>
                      <ReportCard card={item.card} />
                      <CaptionLink label={item.caption} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[37px] bg-black" />
      </main>
      <Footer />
    </>
  );
}
