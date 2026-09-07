import type { Metadata } from "next";
import { LegalPage, Section, P, List, DraftNotice } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility Statement — MeeramTech",
  description: "Our commitment to making the MeeramTech website usable by everyone.",
};

/**
 * NO SOURCE EXISTED FOR THIS PAGE, and an accessibility statement is different
 * in kind from the other policies: it makes testable claims about the site.
 * Publishing "we conform to WCAG 2.1 AA" without an audit behind it is a claim
 * the business cannot support, so no conformance level is asserted here.
 *
 * The measures listed below are limited to things actually implemented and
 * verified in this codebase. Do not extend that list without checking.
 * Once a real audit is done, state the conformance level, date it, and delete
 * the draft notice.
 */
export default function AccessibilityStatementPage() {
  return (
    <LegalPage
      label="Accessibility"
      title="Accessibility Statement"
      intro={
        <>
          <p>
            MeeramTech wants this website to be usable by as many people as possible, including
            people who navigate by keyboard, use a screen reader, or need reduced motion.
          </p>
          <DraftNotice>
            This site has not yet been through a formal accessibility audit, so this statement
            makes no conformance claim. Once an audit against WCAG 2.1 has been completed, replace
            this notice with the level achieved, the date tested and the method used — an
            unsupported conformance claim is itself a compliance risk.
          </DraftNotice>
        </>
      }
    >
      <Section heading="What we have built in">
        <P>
          The following are implemented across the site and have been checked during development:
        </P>
        <List
          items={[
            "Semantic HTML landmarks and headings, so screen readers can navigate page structure",
            "Keyboard operability for interactive components, including arrow-key navigation in tabbed sections",
            "Visible focus indicators on links, buttons and form fields",
            "Motion that respects the operating system's reduced-motion setting",
            "Form fields with programmatically associated error messages, and status changes announced to screen readers",
            "Content that remains in the page for assistive technology even when visually collapsed",
          ]}
        />
      </Section>

      <Section heading="Known gaps">
        <P>
          We would rather name these than imply the site is finished. As of now, the following have
          not been verified:
        </P>
        <List
          items={[
            "Colour contrast has not been measured across every text and background combination",
            "The site has not been tested end to end with screen readers such as NVDA, JAWS or VoiceOver",
            "Behaviour at 200% and 400% zoom has not been formally checked",
            "Images carry alt text, but the wording has not been reviewed for usefulness by an accessibility specialist",
          ]}
        />
      </Section>

      <Section heading="Tell us about a problem">
        <P>
          If you hit a barrier on this site, please tell us what page you were on and what went
          wrong. Email{" "}
          <a href="mailto:info@meeramtech.com" className="font-medium text-brand-blue hover:underline">
            info@meeramtech.com
          </a>
          . We will acknowledge your message and tell you what we can do about it.
        </P>
      </Section>

      <Section heading="Third-party content">
        <P>
          Some parts of the site link out to services we do not control. We cannot guarantee the
          accessibility of those, but we will look for alternatives where a barrier is reported.
        </P>
      </Section>
    </LegalPage>
  );
}