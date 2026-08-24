import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { WhatWeDoTabs } from "./WhatWeDoTabs";

export const metadata: Metadata = {
  title: "What We Do — MeeramTech",
  description:
    "Our comprehensive services, trusted technology partnerships, and deep industry expertise empower your business to evolve, scale, and achieve its next bold milestone.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <PageHeader label="What we do" />
      <main>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
            <h1 className="text-[36px] font-bold text-black sm:text-[44px]">Services</h1>
            <p className="mt-4 max-w-[901px] text-[17.8125px] font-medium leading-[30px] text-[#171717]">
              Our comprehensive services, trusted technology partnerships, and deep industry
              expertise empower your business to evolve, scale, and achieve its next bold
              milestone
            </p>

            <div className="mt-14">
              <WhatWeDoTabs />
            </div>
          </div>
        </section>

        <CtaBanner
          heading="Together, We Reinvented"
          description="Asim Jameel meets with the CEOs of some of the world's most iconic brands to talk about their reinvention journey."
          buttonLabel="See Reinvention"
          buttonHref="/what-we-create"
        />
      </main>
      <Footer />
    </>
  );
}
