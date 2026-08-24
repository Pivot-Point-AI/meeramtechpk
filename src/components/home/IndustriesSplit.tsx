import Image from "next/image";

export function IndustriesSplit() {
  return (
    <section className="bg-white pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="flex h-[280px] items-end bg-brand-blue p-8 lg:h-[473px]">
          <h2 className="text-[32px] font-medium text-white">Industries</h2>
        </div>

        <div className="relative flex h-[280px] items-end overflow-hidden bg-black p-8 lg:h-[473px]">
          <Image
            src="/images/industries/fintech.png"
            alt="Fintech"
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
          <h2 className="relative text-[25px] font-medium text-white">Fintech</h2>
        </div>

        <div className="relative flex h-[280px] items-end overflow-hidden bg-black p-8 lg:h-[473px]">
          <Image
            src="/images/industries/Rectangle 637.png"
            alt="Ecommerce"
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
          <h2 className="relative text-[25px] font-medium text-white">Ecommerce</h2>
        </div>
      </div>
    </section>
  );
}
