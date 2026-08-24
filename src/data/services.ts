import type { ServiceCardData } from "@/components/ServiceCard";

const colors = {
  orange: "#E8622C",
  grey: "#F0F0F0",
  black: "#060608",
  navy: "#0A0E2A",
  purple: "linear-gradient(135deg, #7B2FF7 0%, #F107A3 100%)",
};

export const digitalTechnologicalServices: ServiceCardData[] = [
  {
    title: "Application Modernization",
    description: "Modernize legacy systems with next-gen computing.",
    image: "/images/services/app-modernization.png",
    background: colors.orange,
  },
  {
    title: "Mobile Banking Solution",
    description: "Allow consumers to receive payments directly to phone numbers from anywhere.",
    image: "/images/services/mobile-banking.png",
    background: colors.grey,
    light: true,
  },
  {
    title: "Software Development",
    description: "Streamline workflows and enhance operations from concept to deployment.",
    image: "/images/services/software-development.png",
    background: colors.black,
  },
  {
    title: "UI / UX Design",
    description: "Create a design that elevates your brand and sets you apart from the crowd.",
    image: "/images/services/ui-ux-design.png",
    background: colors.grey,
    light: true,
  },
  {
    title: "Digital Ecommerce",
    description: "Transform your digital assets and strategies to deliver impactful results.",
    image: "/images/services/Digital-ecommerce.png",
    background: colors.grey,
    light: true,
    split: true,
  },
  {
    title: "Application Integration",
    description: "Adopt cost-effective and efficient methodologies for diverse IT landscapes.",
    image: "/images/services/application-integration.png",
    background: colors.black,
  },
  {
    title: "Customized ERP Solutions",
    description: "Let us automate processes for less duplication, better scheduling, and reduced downtime.",
    image: "/images/services/erp-solution.png",
    background: colors.grey,
    light: true,
    split: true,
  },
  {
    title: "Web & Full Stack",
    description: "Experience turnkey, end-to-end application software development services.",
    image: "/images/services/web-fullstack.png",
    background: colors.black,
  },
  {
    title: "Health Solution",
    description: "Improve patient service, protect data, and enable real-time care monitoring.",
    image: "/images/services/health-solution.png",
    background: "transparent",
  },
  {
    title: "Academia Solutions",
    description: "Specializing in educational platform development for personalized learning experiences.",
    image: "/images/services/Academia-sol.png",
    background: colors.grey,
    light: true,
    split: true,
  },
];

export const digitalInfrastructureServices: ServiceCardData[] = [
  {
    title: "Datacenter Services",
    description: "Leverage modern data centers from onsite to edge for evolving industry needs.",
    image: "/images/services/datacenter-services.png",
    background: colors.black,
  },
  {
    title: "Enterprise Application",
    description: "Deliver exceptional digital experiences to attract talent and boost operational efficiency.",
    image: "/images/services/enterprise-application.png",
    background: colors.purple,
  },
  {
    title: "Database Services",
    description: "Complete managed database solutions with reliable uptime and strong security.",
    image: "/images/services/database-service.png",
    background: colors.grey,
    light: true,
    split: true,
  },
  {
    title: "Security Services",
    description: "Minimize the risk of data breaches and cyberattacks across IT platforms.",
    image: "/images/services/security-services-v2.png",
    background: "#0C0F22",
  },
  {
    title: "Network Services",
    description: "Connect office, branch, and remote users to applications and data across the network.",
    image: "/images/services/network-service.png",
    background: colors.navy,
  },
  {
    title: "Virtualization",
    description: "Boost network productivity while reducing infrastructure costs through transformation.",
    image: "/images/services/virtualziation.png",
    background: colors.navy,
  },
  {
    title: "Server & Storage Services",
    description: "Access, secure and manage digital data, files and services from anywhere around the world.",
    image: "/images/services/service-storage.png",
    background: colors.grey,
    light: true,
    split: true,
  },
  {
    title: "Public & Private Cloud Services",
    description: "Alleviate the management of infrastructure & get virtual unlimited network capacity.",
    image: "/images/services/private-cloud-storage.png",
    background: "#041330",
  },
  {
    title: "Professional & Managed Services",
    description: "Ongoing IT services for daily operations, maintenance, and support.",
    image: "/images/services/professional-managed-service.png",
    background: colors.navy,
  },
  {
    title: "NOC/SOC",
    description: "Detect, investigate, and neutralize threats to protect organizational assets.",
    image: "/images/services/nocsoc.png",
    background: colors.grey,
    light: true,
    split: true,
  },
  {
    title: "Backup / Disaster Recovery",
    description: "A system of policies and tools to recover critical technology infrastructure.",
    image: "/images/services/backup-recovery.png",
    background: colors.navy,
  },
];
