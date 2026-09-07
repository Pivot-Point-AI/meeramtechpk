import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Section, P, List } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information — MeeramTech",
  description:
    "MeeramTech does not sell or share personal information, and how to exercise your rights over the data we hold.",
};

/**
 * A note on this page, for whoever picks the site up next.
 *
 * "Do Not Sell or Share My Personal Information" is a California (CCPA/CPRA)
 * construct. It carries a specific legal meaning and, for businesses in scope,
 * an obligation to provide a working opt-out mechanism. MeeramTech is a Dubai
 * business and the published privacy policy does not describe selling or
 * sharing data for advertising, so the link most likely arrived with the design
 * template rather than from a legal requirement.
 *
 * Rather than build a fake opt-out control that does nothing, this page states
 * the actual position and routes people to the rights they do have. Two options
 * worth discussing with counsel: keep this page, or drop the footer link.
 */
export default function DoNotSellPage() {
  return (
    <LegalPage
      label="Your Personal Information"
      title="Do Not Sell or Share My Personal Information"
      intro={
        <p>
          Some privacy laws give people the right to opt out of having their personal information
          sold or shared. This page explains our position and how to exercise the rights you have
          over the information we hold.
        </p>
      }
    >
      <Section heading="We do not sell your personal information">
        <P>
          MeeramTech does not sell personal information, and we do not share it with third parties
          for cross-context behavioural advertising. This site runs no advertising pixels and no
          third-party tracking, as set out in our{" "}
          <Link href="/cookie-policy" className="font-medium text-brand-blue hover:underline">
            Cookie Policy
          </Link>
          . There is therefore no opt-out to submit.
        </P>
      </Section>

      <Section heading="When we do share information">
        <P>
          As described in our{" "}
          <Link href="/privacy-statement" className="font-medium text-brand-blue hover:underline">
            Privacy Statement
          </Link>
          , we share personal information with third parties, with your consent, only where we need
          to comply with a legal obligation, protect and defend our rights and property, or in the
          event of a business transfer or acquisition. None of these is a sale.
        </P>
      </Section>

      <Section heading="Rights you can exercise">
        <P>Whatever your location, you may ask us to:</P>
        <List
          items={[
            "Access the personal information we hold about you",
            "Correct or update that information",
            "Delete it",
            "Stop sending you marketing communications",
          ]}
        />
        <P>
          Email{" "}
          <a href="mailto:info@meeramtech.com" className="font-medium text-brand-blue hover:underline">
            info@meeramtech.com
          </a>{" "}
          with your request and we will respond. We will not treat you differently for making one.
        </P>
      </Section>
    </LegalPage>
  );
}