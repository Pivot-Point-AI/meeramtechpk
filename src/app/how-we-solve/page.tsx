import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "How We Solve — MeeramTech",
};

export default function HowWeSolvePage() {
  return (
    <>
      <Navbar />
      <PageHeader label="How We Solve" />
      <main>
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[640px] px-6 text-center lg:px-[121px]">
            <h1 className="text-[32px] font-bold text-black sm:text-[40px]">Coming soon</h1>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#171717]">
              This page hasn&rsquo;t been designed in Figma yet. In the meantime, take a look at{" "}
              <a href="/what-we-do" className="font-semibold text-brand-blue">
                what we do
              </a>{" "}
              or{" "}
              <a href="/contact-us" className="font-semibold text-brand-blue">
                get in touch
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
