import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Section, P, List } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Statement — MeeramTech",
  description:
    "How MeeramTech collects, uses, discloses and safeguards your personal information.",
};

/**
 * Ported from the policy published at meeramtech.com/privacy-policy, section
 * for section and in the same order.
 *
 * IMPORTANT: the wording below is a faithful rendering, not a byte copy. Legal
 * text should not be paraphrased by a developer - a reworded clause can mean
 * something different from the one the business approved. Before launch, paste
 * the exact approved wording over each section here.
 */
export default function PrivacyStatementPage() {
  return (
    <LegalPage
      label="Privacy Statement"
      title="Privacy Statement"
      intro={
        <>
          <p>
            We appreciate your trust, and we are committed to protecting your privacy. This
            statement sets out how MeeramTech collects, uses, discloses and safeguards your
            personal information when you interact with our website. By interacting with us, you
            agree to the terms set out here.
          </p>
        </>
      }
    >
      <Section heading="1. Information we collect">
        <P>
          We may collect personal information such as names, contact details and other relevant
          information when you contact us for support or submit an enquiry.
        </P>
      </Section>

      <Section heading="2. How we use your information">
        <P>We use the information we collect for purposes including:</P>
        <List
          items={[
            "Providing and maintaining our services",
            "Communicating with you",
            "Responding to your enquiries and requests",
            "Conducting research and analysis",
          ]}
        />
      </Section>

      <Section heading="3. Information sharing and disclosure">
        <P>
          We may share your personal information with third parties, with your consent, only in
          the following situations:
        </P>
        <List
          items={[
            "To comply with legal obligations",
            "To protect and defend our rights and property",
            "In the event of a business transfer or acquisition",
          ]}
        />
      </Section>

      <Section heading="4. Security">
        <P>
          We prioritise the security of your information and use industry-standard measures to
          protect it. No method of transmission over the internet or of electronic storage is
          completely secure, however, so we cannot guarantee absolute security.
        </P>
      </Section>

      <Section heading="5. Third-party links">
        <P>
          Our website may contain links to third-party websites. We are not responsible for the
          privacy practices of those sites, and we encourage you to review their policies.
        </P>
      </Section>

      <Section heading="6. Anti-corruption compliance">
        <P>
          No employee, agent or representative of our company is authorised to offer, give or
          receive any gift, payment or benefit that could be construed as an illegal or unethical
          attempt to influence business decisions.
        </P>
        <P>
          We expect all third parties, including clients, partners and vendors, to hold to
          comparable anti-corruption standards, and we reserve the right to end any business
          relationship or contract where there is evidence of corrupt practices. Our full{" "}
          <Link href="/anti-corruption" className="font-medium text-brand-blue hover:underline">
            Anti-Corruption Policy
          </Link>{" "}
          sets this out in detail.
        </P>
      </Section>

      <Section heading="7. Your choices and rights">
        <P>You have the right to:</P>
        <List
          items={[
            "Access and update your personal information",
            "Opt out of marketing communications",
            "Request the deletion of your data",
          ]}
        />
        <P>
          To exercise any of these, email{" "}
          <a href="mailto:info@meeramtech.com" className="font-medium text-brand-blue hover:underline">
            info@meeramtech.com
          </a>
          .
        </P>
      </Section>

      <Section heading="8. Children's privacy">
        <P>
          Our services are not intended for individuals under the age of 13, and we do not
          knowingly collect personal information from children.
        </P>
      </Section>

      <Section heading="9. Changes to this statement">
        <P>
          We may update this statement periodically. The updated version will be posted on this
          page.
        </P>
      </Section>

      <Section heading="10. Contact us">
        <P>
          If you have questions or concerns about this statement, contact us at{" "}
          <a href="mailto:info@meeramtech.com" className="font-medium text-brand-blue hover:underline">
            info@meeramtech.com
          </a>
          .
        </P>
      </Section>
    </LegalPage>
  );
}