import Image from "next/image";

const photoCards = [
  {
    key: "reinvention",
    caption: "We drive reinvention with innovation and human ingenuity",
    image: "/images/about/recognition-1.png",
  },
  {
    key: "excellence",
    caption: "We service our clients, customers and employees with excellence.",
    image: "/images/about/recognition-2.png",
  },
  {
    key: "experiences",
    caption: "We create exceptional experiences for our people",
    image: "/images/about/recognition-4.png",
  },
];

const worldRanked = {
  kicker: "World Ranked",
  body: "Ranked among the world's best workplaces and top consulting firms, based on global employee and industry recognition.",
};

export function RecognitionGrid() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
        <h2 className="max-w-[420px] text-[32px] font-semibold leading-[1.1] tracking-[-1px] text-[#25262D] sm:max-w-[600px] sm:text-[40px] lg:max-w-[862px] lg:text-[49px]">
          We&rsquo;re recognized for the value we create together
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-6">
          {photoCards.slice(0, 2).map((card) => (
            <div
              key={card.key}
              className="relative flex h-[280px] flex-col justify-end overflow-hidden rounded-xl bg-[#1c1f24] text-white lg:h-[300px]"
            >
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
              <div className="relative bg-gradient-to-t from-black/80 to-transparent p-4 pt-10 text-[15px] font-medium leading-[1.5]">
                {card.caption}
              </div>
            </div>
          ))}

          <div className="flex h-[280px] flex-col justify-between rounded-xl bg-brand-blue p-6 text-white lg:h-[400px]">
            <div>
              <p className="text-[32px] font-medium leading-[1.1] tracking-[-0.5px]">World</p>
              <p className="text-[32px] font-medium leading-[1.1] tracking-[-0.5px]">Ranked</p>
            </div>
            <p className="max-w-[241px] text-[16px] leading-[1.5] text-white/90">{worldRanked.body}</p>
          </div>

          {photoCards.slice(2).map((card) => (
            <div
              key={card.key}
              className="relative flex h-[280px] items-start justify-center overflow-hidden rounded-xl bg-[#1c1f24] text-white lg:h-[300px]"
            >
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
              <p className="relative mt-[55%] max-w-[210px] px-4 text-center text-[15px] font-medium leading-[1.6]">
                {card.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
