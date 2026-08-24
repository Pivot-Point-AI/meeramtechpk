const stats = [
  { value: "100", label: "Project Completed" },
  { value: "60", label: "Satisfied Clients" },
  { value: "250", label: "Experienced Staff" },
  { value: "5", label: "Awards Received" },
];

export function StatsBand() {
  return (
    <section className="bg-black py-16 text-white lg:py-[130px]">
      <div className="mx-auto flex max-w-[1440px] flex-wrap gap-x-16 gap-y-14 px-6 sm:flex-nowrap sm:justify-between lg:px-[121px]">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="h-[7px] w-[34px] bg-gradient-to-r from-[#0015FF] to-[#BF00FF]" />
            <p className="mt-6 text-[56px] font-normal leading-[0.7] uppercase sm:text-[76px] lg:mt-[52px] lg:text-[100px]">
              {stat.value}
            </p>
            <p className="mt-4 text-[18px] leading-[1] text-white lg:mt-[48px] lg:text-[22px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
