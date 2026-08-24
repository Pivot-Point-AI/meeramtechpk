"use client";

import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { digitalTechnologicalServices, digitalInfrastructureServices } from "@/data/services";

const tabs = [
  { key: "dts" as const, label: "Digital Technological Services", items: digitalTechnologicalServices },
  { key: "dis" as const, label: "Digital Infrastructure Services", items: digitalInfrastructureServices },
];

export function WhatWeDoTabs() {
  const [active, setActive] = useState<"dts" | "dis">("dts");
  const current = tabs.find((tab) => tab.key === active)!;

  return (
    <div>
      <div className="flex gap-8 border-b border-[#e9e9e9]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={`border-b-2 pb-4 text-[16px] font-semibold transition ${
              active === tab.key
                ? "border-brand-blue text-black"
                : "border-transparent text-[#8d8d8d] hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-[26px]">
        {current.items.map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
