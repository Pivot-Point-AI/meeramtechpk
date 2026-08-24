import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
        <Hero />
        <ServicesGrid />
        <ClientLogos />
        <QuoteSection />
        <ValueBanner />
        <IndustriesSplit />
        <div className="pt-20"></div>
        <StoryTimeline />
        <CareersSection />
        <NewsTicker />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
