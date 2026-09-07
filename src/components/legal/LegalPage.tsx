import type { ReactNode } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

/**
 * Shared shell for the policy pages. Measure is capped near 70 characters so
 * long-form legal prose stays readable, rather than running the full 1440px
 * grid used by the marketing pages.
 */
export function LegalPage({
  label,
  title,
  intro,
  updated,
  children,
}: {
  label: string;
  title: string;
  intro?: ReactNode;
  /** Shown verbatim. Legal pages should carry a date the business can stand behind. */
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <PageHeader label={label} />
      <main>
        <article className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[820px] px-6">
            <h1 className="text-[32px] font-semibold leading-[1.1] tracking-[-1px] text-[#25262D] sm:text-[42px]">
              {title}
            </h1>

            {updated && (
              <p className="mt-4 text-[14px] font-medium uppercase tracking-[0.14em] text-[#8d8d8d]">
                Last updated {updated}
              </p>
            )}

            {intro && (
              <div className="mt-8 text-[17px] leading-[1.7] text-[#4a4a52]">{intro}</div>
            )}

            <div className="mt-12">{children}</div>

            <p className="mt-16 border-t border-[#e9e9e9] pt-8 text-[16px] leading-[1.7] text-[#4a4a52]">
              Questions about this page? Email{" "}
              <a
                href="mailto:info@meeramtech.com"
                className="font-medium text-brand-blue hover:underline"
              >
                info@meeramtech.com
              </a>{" "}
              or use our{" "}
              <Link href="/contact-us" className="font-medium text-brand-blue hover:underline">
                contact form
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-[22px] font-semibold tracking-[-0.3px] text-[#25262D] sm:text-[25px]">
        {heading}
      </h2>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[17px] leading-[1.7] text-[#4a4a52]">{children}</p>;
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[17px] leading-[1.6] text-[#4a4a52]">
          <span aria-hidden className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-brand-blue" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Marks text that has NOT been through legal review. Deliberately visible: a
 * draft policy that looks finished is more dangerous than one that admits it.
 * Delete the banner once counsel has signed the page off.
 */
export function DraftNotice({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 border-l-2 border-[#C4162B] bg-[#FDF3F4] p-6">
      <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#C4162B]">
        Draft — not yet reviewed
      </p>
      <p className="mt-3 text-[16px] leading-[1.6] text-[#4a4a52]">{children}</p>
    </div>
  );
}