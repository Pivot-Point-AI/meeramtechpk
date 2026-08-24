import Image from "next/image";

const rows: { name: string; slug: string }[][] = [
  [
    { name: "Dubai", slug: "dubai" },
    { name: "Dublin", slug: "dublin" },
  ],
  [
    { name: "USA", slug: "usa" },
    { name: "Qatar", slug: "qatar" },
  ],
  [
    { name: "Milan", slug: "milan" },
    { name: "Tokyo", slug: "tokyo" },
  ],
  [{ name: "Pakistan", slug: "pakistan" }],
];

export function LocationsList() {
  return (
    <section id="locations" className="bg-white py-20 text-center lg:py-24">
      <div className="mx-auto max-w-[1041px] px-6">
        <h2 className="mx-auto text-[22px] font-semibold leading-tight text-black sm:whitespace-nowrap sm:text-[32px] lg:text-[40px]">
          Office and operations in 7 countries and 5 cities
        </h2>

        <div className="mt-10 flex flex-col items-center gap-y-6 lg:mt-[85px] lg:gap-y-[54px]">
          {rows.map((row, i) => (
            <div
              key={i}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 lg:flex-nowrap lg:gap-x-[40px]"
            >
              {row.map((city) => (
                <span
                  key={city.slug}
                  className="inline-flex items-center gap-3 whitespace-nowrap text-[44px] font-semibold capitalize leading-[0.7] text-black sm:text-[56px] lg:gap-[22px] lg:text-[100px]"
                >
                  <span className="relative h-[62px] w-[90px] shrink-0 overflow-hidden rounded-[2px] bg-[#d9d9d9] sm:h-[80px] sm:w-[116px] lg:h-[99px] lg:w-[144px]">
                    <Image
                      src={`/images/about/locations/${city.slug}.png`}
                      alt={city.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </span>
                  {city.name}
                  {city.name !== "Pakistan" && <span className="text-[#8d8d8d]">,</span>}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
