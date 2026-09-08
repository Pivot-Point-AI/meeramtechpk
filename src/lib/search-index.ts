// lib/search-index.ts
// Hand-maintained index. Every page and service that should be findable needs
// an entry here — nothing is discovered automatically, so add to this file
// whenever you add a route.

export type SearchEntry = {
  title: string;
  href: string;
  /** Group heading in the results list. */
  section: string;
  description: string;
  /** Words users might search that don't appear in the title or description. */
  keywords?: string[];
};

export const SEARCH_INDEX: SearchEntry[] = [
  {
    title: "What we do",
    href: "/what-we-do",
    section: "Pages",
    description: "Our digital technology and infrastructure services.",
    keywords: ["services", "capabilities", "offerings", "expertise"],
  },
  {
    title: "How We Solve",
    href: "/how-we-solve",
    section: "Pages",
    description: "The way we approach and deliver a project.",
    keywords: ["process", "methodology", "approach", "delivery", "engagement"],
  },
  {
    title: "Who we are",
    href: "/who-we-are",
    section: "Pages",
    description: "About MeeramTech, our team and our story.",
    keywords: ["about", "company", "team", "history", "careers", "leadership"],
  },
  {
    title: "Our Products",
    href: "/our-products",
    section: "Pages",
    description: "Products built and supported by MeeramTech.",
    keywords: ["platform", "software", "solutions"],
  },
  {
    title: "Contact us",
    href: "/contact-us",
    section: "Pages",
    description: "Get in touch about services, guidance or partnerships.",
    keywords: ["email", "phone", "address", "enquiry", "inquiry", "support", "get in touch"],
  },

  {
    title: "Digital Ecommerce",
    href: "/what-we-do",
    section: "Services",
    description: "Drive result through digital transformation.",
    keywords: ["online store", "shop", "retail", "cart", "payments", "b2c", "b2b"],
  },
  {
    title: "Customized ERP Solution",
    href: "/what-we-do",
    section: "Services",
    description: "Boost efficiency through automation.",
    keywords: ["erp", "enterprise resource planning", "automation", "workflow", "inventory", "finance"],
  },
  {
    title: "Application Modernization",
    href: "/what-we-do",
    section: "Services",
    description: "Upgrade legacy systems to modern platforms.",
    keywords: ["legacy", "migration", "refactor", "replatform", "cloud", "rewrite"],
  },
  {
    title: "Datacenter Services",
    href: "/what-we-do",
    section: "Services",
    description: "Access modern data center solutions.",
    keywords: ["datacenter", "data centre", "hosting", "servers", "colocation", "infrastructure"],
  },
  {
    title: "Application Integration",
    href: "/what-we-do",
    section: "Services",
    description: "Streamline IT cost-effectively.",
    keywords: ["integration", "api", "middleware", "connect systems", "interoperability"],
  },
];

/** Lowercase, strip punctuation, collapse whitespace — so "e-commerce" matches "ecommerce". */
function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Every term must match somewhere (AND, not OR) — typing more words should
 * narrow the list, which is what people expect from a search box.
 * Title matches outrank body matches so exact page names surface first.
 */
export function searchSite(query: string, limit = 8): SearchEntry[] {
  const terms = normalize(query).split(" ").filter(Boolean);
  if (!terms.length) return [];

  const scored: { entry: SearchEntry; score: number }[] = [];

  for (const entry of SEARCH_INDEX) {
    const title = normalize(entry.title);
    const haystack = normalize(
      [entry.title, entry.section, entry.description, ...(entry.keywords ?? [])].join(" ")
    );

    let score = 0;
    let matchedEveryTerm = true;

    for (const term of terms) {
      if (title === term) score += 100;
      else if (title.startsWith(term)) score += 60;
      else if (title.includes(term)) score += 40;
      else if (haystack.includes(` ${term}`) || haystack.startsWith(term)) score += 20;
      else if (haystack.includes(term)) score += 10;
      else {
        matchedEveryTerm = false;
        break;
      }
    }

    if (matchedEveryTerm) scored.push({ entry, score });
  }

  return scored
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, limit)
    .map((r) => r.entry);
}