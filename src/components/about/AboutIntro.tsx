import Image from "next/image";

export function AboutIntro() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[105px]">
          <div className="relative aspect-[599/305] w-full shrink-0 overflow-hidden rounded-sm bg-[#d9d9d9] lg:h-[305px] lg:w-[599px]">
            <Image
              src="/images/about/office-meeting.png"
              alt="MeeramTech team meeting"
              fill
              sizes="(min-width: 1024px) 599px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="lg:max-w-[472px]">
            <h1 className="text-[32px] font-bold leading-[1.08] text-black">
              Best IT-Solutions company
              <br />
              in your reach
            </h1>
            <p className="mt-6 max-w-[509px] text-[16px] leading-[1.55] text-[#171717] text-justify lg:text-[17.8px] lg:leading-[1.57]">
              MeeramTech delivers customized and ready-made software solutions for SMEs and
              corporates, enabling growth across industries like Fintech, Healthcare, Transportation,
              and Retail. We leverage global partnerships and a multicultural team to build efficient
              platforms for real-time applications.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-[757px] lg:mt-[78px]">
          <h2 className="text-[24px] font-bold leading-none text-black sm:text-[32px]">
            Creating positive change
          </h2>
          <p className="mt-6 text-[16px] leading-[1.55] text-[#171717] lg:text-[17.8px] lg:leading-[1.685]">
            We&rsquo;re committed to creating positive change around the world and ensuring we act
            as responsible business leaders for our people, our clients, and the communities we call
            home.
          </p>
        </div>
      </div>
    </section>
  );
}
