import Link from "next/link";
import { ServiceCard, type ServiceCardData } from "@/components/ServiceCard";

const services: ServiceCardData[] = [
  {
    title: "Application Modernization",
    description: "Modernize legacy systems with next-gen computing.",
    image: "/images/services/app-modernization.png",
    background: "#E8622C",
  },
  {
    title: "Mobile Banking Solution",
    description: "Allow consumers to receive payments directly to phone numbers from anywhere.",
    image: "/images/services/mobile-banking.png",
    background: "#F0F0F0",
    light: true,
  },
  {
    title: "Software Development",
    description: "Streamline workflows and enhance operations from concept to deployment.",
    image: "/images/services/software-development.png",
    background: "#0D0D0D",
  },
  {
    title: "UI / UX Design",
    description: "Create a design that elevates your brand and sets you apart from the crowd.",
    image: "/images/services/ui-ux-design.png",
    background: "#F0F0F0",
    light: true,
  },
  {
    title: "Datacenter Services",
    description: "Leverage modern data centers from onsite to edge for evolving industry needs.",
    image: "/images/services/datacenter-services.png",
    background: "#0D0D0D",
  },
  {
    title: "Enterprise Application",
    description: "Deliver exceptional digital experiences to attract talent and boost operational efficiency.",
    image: "/images/services/enterprise-application.png",
    background: "linear-gradient(135deg, #7B2FF7 0%, #F107A3 100%)",
  },
  {
    title: "Business Process Outsourcing",
    description: "Our BPO experts focus on boosting your market share and expanding your client base.",
    image: "/images/services/business-process-outsourcing.png",
    background: "#F0F0F0",
    light: true,
  },
  {
    title: "Security Services",
    description: "Minimize the risk of data breaches and cyberattacks across IT platforms.",
    image: "/images/services/security-services-v2.png",
    background: "#0C0F22",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white pb-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-[26px]">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/what-we-do" className="flex items-center gap-2 text-[20px] font-bold text-black">
            See all
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/arrow-right.svg" alt="" width={21} height={21} />
          </Link>
        </div>
      </div>
    </section>
  );
}
