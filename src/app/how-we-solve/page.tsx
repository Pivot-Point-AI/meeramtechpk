import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { ClientLogos } from "@/components/home/ClientLogos";
import { Reveal } from "@/components/Reveal";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { ApproachSteps } from "@/components/solutions/ApproachSteps";
import { IndustryGrid } from "@/components/solutions/IndustryGrid";
import { EngagementFilter } from "@/components/solutions/EngagementFilter";
import { CaseStudy } from "@/components/solutions/CaseStudy";
import { DatabaseCapabilities } from "@/components/solutions/Databasecapabilities";

export const metadata: Metadata = {
  title: "How We Solve — MeeramTech",
  description:
    "We solve complex problems by redefining technological landscapes — across Fintech, Healthcare, E-Commerce, ERP, Academia and GeoFencing, backed by delivery for operators and enterprises across the Gulf.",
};

export default function HowWeSolvePage() {
  return (
    <>
      <Navbar />
      <PageHeader label="How We Solve" />
      <main>
        {/* Hero is left unwrapped so the LCP text is never painted at opacity 0. */}
        <SolutionsHero />
        <ApproachSteps />
        <IndustryGrid />

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                Proof of delivery
              </p>
              <h2 className="mt-4 max-w-[862px] text-[32px] font-semibold leading-[1.1] tracking-[-1px] text-[#25262D] sm:text-[40px] lg:text-[49px]">
                A few of our completed engagements
              </h2>
              <p className="mt-6 max-w-[640px] text-[17px] leading-[1.6] text-[#4a4a52]">
                Infrastructure work delivered for operators, integrators and enterprises across the
                Gulf.
              </p>
            </Reveal>

            <div className="mt-12">
              <EngagementFilter />
            </div>
          </div>
        </section>

        <ClientLogos />
        <CaseStudy />
        <DatabaseCapabilities />

        <CtaBanner
          heading="Have a problem worth solving?"
          description="Tell us what is slowing the business down. We will map the landscape, scope the work and tell you honestly whether we are the right team for it."
          buttonLabel="Talk to us"
          buttonHref="/contact-us"
        />
      </main>
      <Footer />
    </>
  );
}