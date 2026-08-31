import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ClientLogos } from "@/components/home/ClientLogos";
import { QuoteSection } from "@/components/home/QuoteSection";
import { ValueBanner } from "@/components/home/ValueBanner";
import { IndustriesSplit } from "@/components/home/IndustriesSplit";
import { StoryTimeline } from "@/components/home/StoryTimeline";
import { CareersSection } from "@/components/home/CareersSection";
import { NewsTicker } from "@/components/home/NewsTicker";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero is left unwrapped so the LCP text is never painted at opacity 0. */}
        <Hero />
        <Reveal>
          <ServicesGrid />
        </Reveal>
        <Reveal>
          <ClientLogos />
        </Reveal>
        <Reveal>
          <QuoteSection />
        </Reveal>
        <Reveal>
          <ValueBanner />
        </Reveal>
        <Reveal>
          <IndustriesSplit />
        </Reveal>
        <div className="pt-20"></div>
        <Reveal>
          <StoryTimeline />
        </Reveal>
        <Reveal>
          <CareersSection />
        </Reveal>
        <Reveal>
          <NewsTicker />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}