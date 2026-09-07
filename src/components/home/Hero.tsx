import Link from "next/link";

export function Hero() {
  return (
    <div className="relative bg-white pt-10 pb-16 lg:pt-16">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 lg:px-[121px] xl:grid-cols-[1fr_455px] xl:gap-[24px]">
        <h1 className="font-sans uppercase text-black">
          <span className="block text-[44px] font-bold leading-[0.74] sm:text-[56px] lg:text-[69px]">
            Together we
          </span>
          <span className="mt-4 flex items-center gap-2 text-[32px] font-bold leading-none sm:ml-[3.5em] sm:gap-3 sm:text-[56px] lg:text-[69px]">
            rei
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/hero-mark.svg"
              alt=""
              className="inline-block h-[0.65em] w-auto translate-y-1"
            />
            agine
          </span>
        </h1>

        <div className="flex max-w-[455px] flex-col gap-[17px] xl:justify-self-end">
          <div
            className="h-1 w-[34px]"
            style={{
              backgroundImage:
                "linear-gradient(92deg, rgb(0, 21, 255) 0%, rgb(191, 0, 255) 100%)",
            }}
          />
          <h2 className="text-[26px] font-bold text-black">Scaling Digital Transformation</h2>
          <p className="text-[17.8px] font-medium leading-[30px] text-[#171717]">
            We help businesses modernize operations, enhance customer experiences, and unlock
            growth with in the intelligent solutions powered by data, cloud, and AI.
          </p>
          <Link href="#services" className="group flex items-center gap-2 text-[20px] font-bold text-black">
            See what we do
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/arrow-right.svg"
              alt=""
              width={21}
              height={21}
              className="transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}