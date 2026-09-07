/**
 * Content sourced from the live site (meeramtech.com/solutions, /services and
 * the home page industries block). Copy is kept close to the original so the
 * rebuild reads as the same company.
 */

export type ApproachStep = {
  step: string;
  title: string;
  description: string;
  icon: string;
};

/** Method framing, built on the site's own language ("evaluation and research"). */
export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "Evaluate",
    description:
      "We start with evaluation and research — mapping the systems, data and constraints you already live with before anyone proposes a build.",
    icon: "/images/solutions/icon-evaluate.svg",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "We redefine the technological landscape around the problem, choosing the shortest viable route through it rather than the largest programme of work.",
    icon: "/images/solutions/icon-architect.svg",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Custom and off-the-shelf software, delivered by engineers who work in your stack — from concept to code, development to deployment.",
    icon: "/images/solutions/icon-build.svg",
  },
  {
    step: "04",
    title: "Operate",
    description:
      "Managed services, resident engineers and SLA-backed support keep the platform available long after go-live.",
    icon: "/images/solutions/icon-operate.svg",
  },
];

export type Industry = {
  key: string;
  label: string;
  description: string;
  image: string;
  /** Fills the panel behind a card whose art is shorter than the frame. */
  background: string;
  light?: boolean;
  /** What we actually build in this vertical - drawn from /services + /what-we-create. */
  capabilities: string[];
};

/** The filter set on meeramtech.com/solutions, with copy from /services + home. */
export const industries: Industry[] = [
  {
    key: "fintech",
    label: "Fintech",
    description:
      "Harness our financial services to bring business resilience and growth. With Fintech expertise and technology proficiency, we help businesses get ahead.",
    image: "/images/services/mobile-banking.png",
    background: "#0C0F22",
    capabilities: [
      "Mobile banking solutions",
      "Digital wallets",
      "Cash management systems",
      "Sales force supervision",
    ],
  },
  {
    key: "healthcare",
    label: "Healthcare",
    description:
      "We help healthcare organizations foster innovation and digital transformation to cater to health challenges and revolutionize medical treatments.",
    image: "/images/services/health-solution.png",
    background: "#0D0D0D",
    capabilities: [
      "Patient service platforms",
      "Real-time monitoring",
      "Sensitive data protection",
    ],
  },
  {
    key: "ecommerce",
    label: "E-Commerce",
    description:
      "Custom e-commerce software development with an outside-in approach that delivers diversified growth strategies.",
    image: "/images/services/Digital-ecommerce.png",
    background: "#E8622C",
    capabilities: [
      "Digital commerce platforms",
      "Application integration",
      "Outside-in growth strategy",
    ],
  },
  {
    key: "erp",
    label: "Customised ERP",
    description:
      "We automate processes for less duplication, better scheduling and reduced downtime.",
    image: "/images/services/erp-solution.png",
    background: "#F0F0F0",
    light: true,
    capabilities: [
      "Process automation",
      "Housing society ERP",
      "Microsoft Dynamics NAV",
      "Scheduling and downtime reduction",
    ],
  },
  {
    key: "academia",
    label: "Academia",
    description:
      "We specialize in developing educational platforms that personalize the learning experience for students and institutions.",
    image: "/images/services/Academia-sol.png",
    background: "linear-gradient(135deg, #7B2FF7 0%, #F107A3 100%)",
    capabilities: [
      "Educational platform development",
      "Personalized learning experiences",
    ],
  },
  {
    key: "geofencing",
    label: "GeoFencing",
    description:
      "Location-aware tracking for warehouse, stock control, transportation and fleet management operations.",
    image: "/images/services/network-service.png",
    background: "#0A0E2A",
    capabilities: [
      "Warehouse and stock control",
      "Transportation and fleet management",
    ],
  },
];

export type EngagementTag = "oracle" | "network" | "erp";

export type Engagement = {
  client: string;
  location: string;
  tags: EngagementTag[];
  /** Vendors and platforms named in the engagement, shown as chips. */
  stack: string[];
  /** Rendered as a partner mark when we hold the logo in /public. */
  logo?: string;
  logoAlt?: string;
  scope: string[];
};

/** Digital Infrastructure Services client work listed on /solutions. */
export const engagements: Engagement[] = [
  {
    client: "Emaco Facility Management, Alpha Data Group",
    location: "UAE",
    tags: ["oracle"],
    stack: ["Oracle DB", "SQL"],
    scope: ["Oracle database and SQL configuration services"],
  },
  {
    client: "Alpha Data — Du Telecom",
    location: "UAE",
    tags: ["oracle"],
    stack: ["Oracle DB", "SLA"],
    scope: ["Resident engineer Oracle DB configuration under SLA"],
  },
  {
    client: "Bisha Mining",
    location: "Eritrea",
    tags: ["erp"],
    stack: ["Microsoft Dynamics NAV", "Navision"],
    scope: [
      "Deployment, customization and integration of Microsoft NAV ERP modules and database solutions",
      "Navision support services covering the support model, procedures and service restoration",
      "Root cause analysis of issues, resolution planning and Navision enhancements",
    ],
  },
  {
    client: "Al Nahla Technologies",
    location: "Oman",
    tags: ["network"],
    stack: ["Huawei iMaster NCE"],
    logo: "/images/logos/huawei.svg",
    logoAlt: "Huawei",
    scope: [
      "Deployment of Huawei iMaster NCE Campus",
      "Installation and configuration of 2 core switches",
      "Installation and configuration of 12 access switches",
      "Installation and configuration of 36 access points",
    ],
  },
  {
    client: "Concordia DMCC",
    location: "UAE",
    tags: ["network"],
    stack: ["Aruba", "Fortinet"],
    scope: [
      "Aruba AP configuration",
      "Network reachability across two branches",
      "Deployment of Fortinet firewalls",
      "Network switch configuration on both sides",
    ],
  },
  {
    client: "Convivo Technologies",
    location: "UAE",
    tags: ["network"],
    stack: ["Huawei iMaster NCE"],
    logo: "/images/logos/huawei.svg",
    logoAlt: "Huawei",
    scope: [
      "48-port switch configuration for Khalifa University, Abu Dhabi Ministry of Education",
      "Stack configuration and addition in iMaster NCE Campus",
    ],
  },
  {
    client: "Al Arabia for Safety & Security, Juma Al Majid Group",
    location: "UAE",
    tags: ["network"],
    stack: ["Huawei"],
    logo: "/images/logos/huawei.svg",
    logoAlt: "Huawei",
    scope: [
      "Switch configuration for the Emaar project",
      "Professional training on Huawei products",
    ],
  },
  {
    client: "Arabian Flexible Packaging",
    location: "UAE",
    tags: ["network"],
    stack: ["SMTP"],
    scope: ["SMTP configuration"],
  },
];

export const engagementFilters: { key: "all" | EngagementTag; label: string }[] = [
  { key: "all", label: "All" },
  { key: "oracle", label: "Oracle & Database" },
  { key: "network", label: "Network & Security" },
  { key: "erp", label: "ERP" },
];

/** Headline figures from the Du Telecom write-up on /solutions. */
export const duTelecomMetrics: { value: string; label: string }[] = [
  { value: "1,000", label: "Configurations delivered" },
  { value: "80–90%", label: "Of them Oracle SQL" },
  { value: "125–150", label: "Per quarter, on target" },
  { value: "L3", label: "Support depth on call" },
];

/** The Du Telecom engagement, written up in full on /solutions. */
export const duTelecomCaseStudy: { label: string; detail: string }[] = [
  {
    label: "Configuration management",
    detail:
      "Up to 1,000 configurations delivered, 80–90% of them Oracle SQL, against quarterly targets of 125–150.",
  },
  {
    label: "Security compliance",
    detail: "Regular scanning and patching to hold the estate to security standards.",
  },
  {
    label: "Database support",
    detail: "Full Oracle DB and MS SQL support, including handover and snag rectification.",
  },
  {
    label: "Advanced deployments",
    detail: "RAC and RMAN configurations implemented on both existing and new databases.",
  },
  {
    label: "Troubleshooting & change management",
    detail: "User connectivity issues resolved and approved change requests executed off-hours.",
  },
  {
    label: "Expert-level support",
    detail: "L3 support for undocumented Oracle DB activity.",
  },
  {
    label: "Policy & standards",
    detail:
      "Database standards, policies and method-of-procedure documentation created and maintained.",
  },
  {
    label: "Backup & recovery",
    detail: "Robust backup strategies and disaster recovery built on Oracle Data Guard and RAC.",
  },
  {
    label: "Security audits",
    detail: "Database security issues and audit trails identified and managed.",
  },
  {
    label: "Testing & upgrades",
    detail:
      "Failover testing, system migrations and database upgrades run in night-time windows to meet application cutovers.",
  },
];

/** Managed database scope shown against the banking logos on /solutions. */
export const databaseCapabilities: string[] = [
  "Database installation & configuration",
  "Monitoring & maintenance",
  "Backup & recovery management",
  "Performance tuning",
  "Disaster recovery using Data Guard",
  "Security & compliance",
  "Space & storage management",
  "Scripting & automation",
];