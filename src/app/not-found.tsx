import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

/**
 * 404. Kept as a server component - every interaction here is CSS, so a page
 * nobody wants to land on ships no JavaScript of its own.
 *
 * The oversized numeral follows the treatment already used for the years in
 * StoryTimeline and the figure in ValueBanner: serif italic, set large, in
 * brand purple against black.
 */

const destinations = [
  { label: "What we do", href: "/what-we-do", blurb: "Our full service set, across technology and infrastructure." },
  { label: "How we solve", href: "/how-we-solve", blurb: "The method, the verticals and the work we have delivered." },
  { label: "Who we are", href: "/who-we-are", blurb: "The company, the team and where we operate." },
  { label: "Contact us", href: "/contact-us", blurb: "Tell us what you need and we will come back to you." },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <PageHeader label="Page not found" />
      <main>
        <section className="relative overflow-hidden bg-black text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[url('/images/solutions/blueprint-grid.svg')] bg-[length:160px_160px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-brand-blue/25 blur-[140px]"
          />

          <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_auto] lg:px-[121px] lg:py-28">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-purple">
                Error 404
              </p>
              <h1 className="mt-6 max-w-[620px] text-[38px] font-semibold leading-[1.05] tracking-[-1px] sm:text-[48px] lg:text-[58px]">
                We could not find that page
              </h1>
              <p className="mt-7 max-w-[520px] text-[18px] leading-[1.6] text-white/75">
                The link may be out of date, or the page may have moved since it was last shared.
                Nothing is broken on your end.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-md bg-brand-blue px-7 py-3.5 text-[16px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:hover:translate-y-0"
                >
                  Back to home
                </Link>
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 text-[16px] font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Report a broken link
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/brand/arrow-right.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                  />
                </Link>
              </div>
            </div>

            <p
              aria-hidden
              className="select-none font-serif text-[140px] italic leading-[0.8] text-brand-purple/90 sm:text-[200px] lg:text-[260px]"
            >
              404
            </p>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue">
              Try one of these instead
            </h2>

            <ul className="mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {destinations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-start justify-between gap-6 border-b border-[#ededed] py-6 transition-colors duration-300 hover:border-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  >
                    <span>
                      <span className="block text-[20px] font-semibold tracking-[-0.3px] text-[#25262D] transition-colors duration-300 group-hover:text-brand-blue">
                        {item.label}
                      </span>
                      <span className="mt-2 block text-[16px] leading-[1.55] text-[#4a4a52]">
                        {item.blurb}
                      </span>
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/brand/arrow-right.svg"
                      alt=""
                      width={21}
                      height={21}
                      className="mt-1 shrink-0 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}