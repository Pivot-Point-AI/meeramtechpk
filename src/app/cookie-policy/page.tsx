import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Section, P, List } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — MeeramTech",
  description: "What this website stores on your device, and why there are no cookie settings to configure.",
};

/**
 * Unlike the other policy pages, this one is derived from an audit of the
 * codebase rather than from copy: at the time of writing the app sets no
 * cookies, loads no third-party scripts and uses no analytics, so there is
 * nothing to consent to and no settings panel to offer.
 *
 * RE-CHECK THIS PAGE the moment any of the following lands, because each one
 * makes the statement below untrue and most trigger a consent requirement:
 *   - Google Tag Manager (the current meeramtech.com carries GTM-WRJV9KJ2)
 *   - any analytics, pixel, chat widget or embedded video
 *   - authentication, or anything calling cookies() in a server component
 */
export default function CookiePolicyPage() {
  return (
    <LegalPage
      label="Cookie Policy"
      title="Cookie Policy"
      intro={
        <p>
          Most websites ask you to accept cookies. This one does not, because it does not set any.
          This page explains what that means and what would change it.
        </p>
      }
    >
      <Section heading="What this site stores on your device">
        <P>
          Nothing. This website sets no cookies, and it does not use local storage or session
          storage to identify or track you. There is no consent banner and no settings panel to
          configure, because there is nothing to switch off.
        </P>
      </Section>

      <Section heading="No analytics or third-party tracking">
        <P>
          We do not run analytics, advertising pixels, session recording or social media tracking
          on this site. No third-party scripts are loaded into the pages you view.
        </P>
      </Section>

      <Section heading="What we do receive">
        <P>
          Our hosting provider records standard server request information, such as IP address,
          browser type and the pages requested. This is a normal part of serving a website
          securely and is not linked to a profile of you.
        </P>
        <P>
          If you submit the contact form, we receive the details you type into it. That is covered
          by our{" "}
          <Link href="/privacy-statement" className="font-medium text-brand-blue hover:underline">
            Privacy Statement
          </Link>
          , not by this page.
        </P>
      </Section>

      <Section heading="If this changes">
        <P>
          If we later add analytics, embedded media or any other technology that stores data on
          your device, we will update this page and, where the law requires it, ask for your
          consent first. Things that would trigger that include:
        </P>
        <List
          items={[
            "Analytics or tag management, such as Google Analytics or Google Tag Manager",
            "Advertising or conversion pixels",
            "Embedded video, maps or chat widgets served by a third party",
            "Accounts or logins, which require a session cookie",
          ]}
        />
      </Section>
    </LegalPage>
  );
}