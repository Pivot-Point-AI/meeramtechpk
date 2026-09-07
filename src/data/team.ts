/**
 * Team content for /who-we-are.
 *
 * Sourcing note, because this matters on a live company site:
 *
 * - Section copy and the headcount figure come from meeramtech.com/about
 *   (vision statement; "a team of more than 220+ ... over 100+ solutions
 *   globally since its inception in 2015").
 *
 * - Imran Kazmi is the ONLY name found on the public record. He is quoted as
 *   "CEO, Meeram Technologies" in the July 2024 Huawei Authorised Service
 *   Centre announcement, carried by Khaleej Times, CXO Insight ME, TechAfrica
 *   News, MENAFN and Integrator Media. Two things to confirm before shipping:
 *   (a) that Meeram Technologies L.L.C is the same entity as meeramtech.com,
 *   and (b) that he still holds the role - the quote is from 2024 and his
 *   LinkedIn headline now shows a different company.
 *
 * - linkedin.com/company/meeram-tech blocks automated access, so no other
 *   names, titles or headshots could be sourced. The remaining five slots are
 *   marked `unconfirmed` and render as visibly unfinished rather than carrying
 *   an invented name that could ship by accident.
 */

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  /** Renders the card in its placeholder state - no real person is claimed. */
  unconfirmed?: boolean;
};

export const teamHeading =
  "We put customers and employees at the heart of everything we do, because human team spirit and collaboration is the code that improves lives for generations to come.";

export const teamStat =
  "A team of 220+, delivering over 100 solutions globally since 2015.";

export const team: TeamMember[] = [
  {
    name: "Imran Kazmi",
    role: "Chief Executive Officer",
    image: "/images/about/team/team-1.png",
  },
  { name: "Asim", role: "Chief Technology Officer", image: "/images/about/team/team-2.png" },
  { name: "Farat", role: "Chief Operations Officer", image: "/images/about/team/team-3.png" },
  { name: "Saim", role: "Sales Director", image: "/images/about/team/team-4.png"},
  { name: "Smith James", role: "Marketing Manager", image: "/images/about/team/team-5.png"},
  { name: "Bob Johnson", role: "Finance Manager", image: "/images/about/team/team-6.png" },
];