import Link from "next/link";

export function Hero() {
  return (
    <div className="relative bg-white pt-10 pb-16 lg:pt-16">
      {/* 29px column gap, per the Figma measurement. */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 lg:px-[121px] xl:grid-cols-[1fr_455px] xl:gap-[29px]">
        {/* Fixed 695px block: line one sits on its left edge, line two on its
            right edge. Right alignment has to come from the block's width —
            a left margin only lands at one viewport size. */}
        <h1 className="w-full font-sans uppercase text-black xl:w-[695px]">
          <span className="block text-[44px] font-bold leading-[0.9] sm:text-[56px] lg:text-[69px]">
            Together we
          </span>
          <span className="mt-4 flex items-baseline justify-end gap-2 text-[32px] font-bold leading-[0.9] sm:gap-3 sm:text-[56px] lg:text-[69px]">
            rei
            {/* A flex item's baseline is its bottom edge, so items-baseline
                seats the mark on the text baseline with no nudge. Height is
                set in em to track the cap height as the type scales. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/hero-mark.svg" alt="" className="h-[0.72em] w-auto" />
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
          <Link
            href="#services"
            className="group flex items-center gap-2 text-[20px] font-bold text-black"
          >
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