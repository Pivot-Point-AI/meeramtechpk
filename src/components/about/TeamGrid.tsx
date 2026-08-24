import Image from "next/image";

const team = [
  { name: "Jocelyn Schleifer", role: "Managing Director", image: "/images/about/team/team-1.png" },
  { name: "Jocelyn Schleifer", role: "Managing Director", image: "/images/about/team/team-2.png" },
  { name: "Jocelyn Schleifer", role: "Managing Director", image: "/images/about/team/team-3.png" },
  { name: "Jocelyn Schleifer", role: "Managing Director", image: "/images/about/team/team-4.png" },
  { name: "Jocelyn Schleifer", role: "Managing Director", image: "/images/about/team/team-5.png" },
  { name: "Jocelyn Schleifer", role: "Managing Director", image: "/images/about/team/team-6.png" },
];

function TeamCard({ member }: { member: (typeof team)[number] }) {
  return (
    <div className="w-[calc(50%-8px)] shrink-0 overflow-hidden rounded-[24px] border-2 border-[#282828] bg-black sm:w-[calc(33.333%-11px)] lg:w-[296px]">
      <div className="relative aspect-[296/282] w-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 296px, 45vw"
          className="object-cover mix-blend-luminosity"
        />
      </div>
      <div className="flex flex-col gap-1 px-4 pt-4 pb-6">
        <p className="text-[18px] font-medium leading-[1.67] text-white">{member.name}</p>
        <p className="text-[16px] leading-[1.625] text-[#9D9FA2]">{member.role}</p>
      </div>
    </div>
  );
}

export function TeamGrid() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-6 lg:px-[121px]">
        <p className="w-full text-[18px] font-semibold text-black lg:text-[22px]">Our Team</p>

        <div className="flex w-full flex-col gap-8 lg:gap-8">
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="max-w-[560px] text-[30px] font-medium leading-[1.15] tracking-[-1px] text-black sm:text-[36px] lg:text-[42px] lg:tracking-[-2px]">
              We are passionate about creating visually stunning and functional solutions that
              communicate effectively.
            </h2>
            <div className="flex w-full flex-wrap justify-center gap-4 lg:w-auto lg:flex-nowrap lg:justify-end lg:gap-8">
              {team.slice(0, 2).map((member, i) => (
                <TeamCard key={i} member={member} />
              ))}
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-center gap-4 lg:flex-nowrap lg:gap-8">
            {team.slice(2).map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
