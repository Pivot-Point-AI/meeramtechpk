import type { Metadata } from "next";
import { LegalPage, Section, P, List } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Anti-Corruption Policy — MeeramTech",
  description:
    "MeeramTech's commitment to compliance with anti-corruption and anti-bribery laws in every country where we operate.",
};

/**
 * Ported from meeramtech.com/anti-corruption. Same caveat as the privacy page:
 * this is a faithful rendering, not a byte copy - replace with the approved
 * wording before launch.
 *
 * Not linked from the footer, because adding a seventh item would change the
 * pixel-perfect layout. Link it whenever you are ready.
 */
export default function AntiCorruptionPage() {
  return (
    <LegalPage
      label="Anti-Corruption"
      title="Anti-Corruption Policy"
      intro={
        <p>
          Meeram Technologies complies with the anti-corruption laws of every country in which we
          operate, demonstrating our commitment to eliminating unethical business practices such as
          corruption and bribery. We treat fairness and honesty as fundamental to building
          long-term business relationships, and this policy applies to all directors, officers,
          employees and third parties who represent the company.
        </p>
      }
    >
      <Section heading="Purpose">
        <P>This policy is designed to:</P>
        <List
          items={[
            "Set out the commitment of Meeram Technologies to conduct business ethically",
            "Ensure compliance with anti-corruption and anti-bribery laws",
            "Guide employees and business partners on handling potential corruption and bribery",
          ]}
        />
      </Section>

      <Section heading="Scope">
        <P>The policy applies to:</P>
        <List
          items={[
            "All representatives of Meeram Technologies worldwide, including board members and employees",
            "Joint ventures, contractors, suppliers, consultants, agents and other business partners",
            "Any entity or individual conducting business on behalf of Meeram Technologies",
          ]}
        />
      </Section>

      <Section heading="Prohibited actions">
        <P>Meeram Technologies prohibits:</P>
        <List
          items={[
            "Bribery, kickbacks, facilitation payments and corrupt hiring practices",
            "Soliciting, receiving, giving or offering anything of value to influence a decision or gain unfair advantage",
            "Offering or accepting gifts, hospitality or entertainment intended to influence business decisions or relationships",
          ]}
        />
      </Section>

      <Section heading="Gifts and hospitality">
        <P>
          We recognise that modest hospitality and reasonable gifts can be a normal part of
          building business relationships. Where they occur, they must follow these guidelines:
        </P>
        <List
          items={[
            <>
              <strong className="font-semibold text-[#25262D]">Gifts and hospitality</strong> —
              reasonable in both value and frequency, and never such that they could influence a
              business decision. Cash and cash equivalents, including gift cards, are strictly
              prohibited.
            </>,
            <>
              <strong className="font-semibold text-[#25262D]">Entertainment</strong> — in line
              with industry norms, never lavish or inappropriate. Extra caution applies when
              dealing with government officials.
            </>,
            <>
              <strong className="font-semibold text-[#25262D]">Sponsored travel</strong> — only
              for legitimate business purposes, and only with senior management approval.
            </>,
          ]}
        />
      </Section>

      <Section heading="Facilitation payments">
        <P>
          Facilitation payments, typically made to expedite government action, are strictly
          prohibited even in countries where the practice is common. An exception applies only
          where an employee&rsquo;s safety or security is at risk.
        </P>
      </Section>

      <Section heading="Responsibilities">
        <P>
          Every employee and third party representing the company is responsible for complying with
          this policy, and is obliged to:
        </P>
        <List
          items={[
            "Keep accurate records of all transactions and maintain formal documentation",
            "Report any incident or suspicion of corruption or bribery promptly, through the appropriate channels",
            "Stay familiar with this policy and any changes to it",
          ]}
        />
      </Section>

      <Section heading="Reporting violations">
        <P>
          Employees and business partners are encouraged to report suspected violations through our
          &ldquo;Speak Up&rdquo; programme, which allows concerns to be raised in confidence. No
          retaliatory action will be taken against anyone who raises a concern.
        </P>
      </Section>

      <Section heading="Consequences for non-compliance">
        <P>
          Non-compliance will result in disciplinary action, up to and including termination of
          employment. Individuals involved in criminal conduct may also face fines or imprisonment
          under local law.
        </P>
      </Section>

      <Section heading="Policy review and updates">
        <P>
          Meeram Technologies reviews and updates this policy periodically to keep pace with
          evolving law and best practice. Changes are communicated to employees promptly.
        </P>
      </Section>
    </LegalPage>
  );
}