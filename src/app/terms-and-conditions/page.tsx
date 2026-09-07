import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Section, P, List, DraftNotice } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — MeeramTech",
  description: "The terms on which you may use the MeeramTech website.",
};

/**
 * NO SOURCE EXISTED FOR THIS PAGE. meeramtech.com publishes a privacy policy
 * and an anti-corruption policy only - there are no terms of use anywhere on
 * the live site, so nothing here was ported.
 *
 * What follows is ordinary website terms-of-use scaffolding written against
 * facts that are known to be true (Dubai-based company, informational site, the
 * published contact address). It is a starting point for counsel to mark up,
 * NOT legal advice and NOT ready to publish. The governing-law clause in
 * particular is a guess and must be confirmed.
 *
 * Remove <DraftNotice> once a lawyer has signed this off.
 */
export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      label="Terms & Conditions"
      title="Terms & Conditions"
      intro={
        <>
          <p>
            These terms govern your use of the MeeramTech website. By using the site, you accept
            them. If you do not accept them, please do not use the site.
          </p>
          <DraftNotice>
            This page has not been reviewed by a lawyer. MeeramTech has never published terms of
            use, so unlike our other policy pages there was no approved wording to work from. Treat
            everything below as a draft for counsel to revise, especially the governing law and
            liability sections.
          </DraftNotice>
        </>
      }
    >
      <Section heading="1. About this site">
        <P>
          This website is operated by MeeramTech, 912, 9th Floor, YES Business Tower, Al Barsha
          Road, Al Barsha 1, Dubai. It is provided for general information about our services. It
          is not an offer, and nothing on it forms a contract between us.
        </P>
      </Section>

      <Section heading="2. Acceptable use">
        <P>You agree not to:</P>
        <List
          items={[
            "Use the site for any unlawful purpose, or in any way that could damage or impair it",
            "Attempt to gain unauthorised access to the site, its servers or any connected system",
            "Introduce malicious code, or run automated scraping that places unreasonable load on the site",
            "Misuse the contact form, including for bulk, automated or unsolicited messages",
          ]}
        />
      </Section>

      <Section heading="3. Intellectual property">
        <P>
          All content on this site — including text, graphics, logos, images, and the underlying
          software — belongs to MeeramTech or its licensors and is protected by intellectual
          property law. You may view and print pages for your own reference. You may not reproduce,
          republish or exploit any part of the site commercially without our written permission.
        </P>
      </Section>

      <Section heading="4. Accuracy of information">
        <P>
          We take care to keep the site accurate and current, but we make no warranty that it is
          complete, accurate or up to date. Descriptions of services, capabilities and past
          engagements are indicative, and the scope of any actual engagement is governed by a
          separate signed agreement.
        </P>
      </Section>

      <Section heading="5. Third-party links">
        <P>
          The site may link to third-party websites. We do not control them and are not responsible
          for their content, availability or practices. A link is not an endorsement.
        </P>
      </Section>

      <Section heading="6. Availability">
        <P>
          We do not guarantee that the site will be available without interruption. We may suspend,
          withdraw or change any part of it without notice.
        </P>
      </Section>

      <Section heading="7. Liability">
        <P>
          To the fullest extent permitted by law, MeeramTech is not liable for any indirect or
          consequential loss, or for any loss of profit, revenue, data or goodwill, arising from
          your use of, or inability to use, this site. Nothing in these terms excludes liability
          that cannot lawfully be excluded.
        </P>
      </Section>

      <Section heading="8. Privacy">
        <P>
          Our handling of personal information is set out in our{" "}
          <Link href="/privacy-statement" className="font-medium text-brand-blue hover:underline">
            Privacy Statement
          </Link>{" "}
          and{" "}
          <Link href="/cookie-policy" className="font-medium text-brand-blue hover:underline">
            Cookie Policy
          </Link>
          .
        </P>
      </Section>

      <Section heading="9. Changes to these terms">
        <P>
          We may revise these terms at any time. The version published on this page at the time you
          use the site is the one that applies.
        </P>
      </Section>

      <Section heading="10. Governing law">
        <P>
          These terms are governed by the laws of the United Arab Emirates, and the courts of Dubai
          have exclusive jurisdiction over any dispute arising from them.
        </P>
        <P>
          <em>
            To be confirmed by counsel. MeeramTech operates across multiple jurisdictions, and the
            right choice of law and forum depends on where the group contracts from.
          </em>
        </P>
      </Section>
    </LegalPage>
  );
}