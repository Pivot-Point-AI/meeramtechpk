export function ValueBanner() {
  return (
    <section className="bg-black py-24 text-center text-white">
      <div className="mx-auto max-w-[900px] px-6">
        <h2 className="text-[36px] font-bold uppercase leading-none sm:text-[72px] lg:text-[99px]">
          360<span className="align-top text-[0.45em]">°</span> Value
        </h2>
        <p className="mx-auto mt-8 max-w-[560px] text-[20px] leading-[1.4]">
          Every day, we embrace change and create value for all our stakeholders around the world.
        </p>
        <a href="#" className="mt-8 inline-flex items-center gap-2 text-[18px] font-bold">
          See the report
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/brand/arrow-right.svg" alt="" width={18} height={18} />
        </a>
      </div>
    </section>
  );
}
