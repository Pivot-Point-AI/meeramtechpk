import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { AboutIntro } from "@/components/about/AboutIntro";
import { StatsBand } from "@/components/about/StatsBand";
import { LocationsList } from "@/components/about/LocationsList";
import { RecognitionGrid } from "@/components/about/RecognitionGrid";
import { TeamGrid } from "@/components/about/TeamGrid";
import { FaqAccordion } from "@/components/about/FaqAccordion";

export const metadata: Metadata = {
  title: "Who We Are — MeeramTech",
  description:
    "MeeramTech delivers customized and ready-made software solutions for SMEs and corporates, enabling growth across Fintech, Healthcare, Transportation, and Retail.",
};

export default function WhoWeArePage() {
  return (
    <>
      <Navbar />
      <PageHeader label="Who we are" />
      <main>
        <AboutIntro />
        <StatsBand />
        <LocationsList />
        <RecognitionGrid />
        <TeamGrid />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}
