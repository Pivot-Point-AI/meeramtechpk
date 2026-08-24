const logos = [
  { src: "/images/logos/huawei.svg", alt: "Huawei", width: 152 },
  { src: "/images/logos/dell-emc.svg", alt: "Dell EMC", width: 151 },
  { src: "/images/logos/veeam.svg", alt: "Veeam", width: 151 },
  { src: "/images/logos/polycom.svg", alt: "Polycom", width: 152 },
  { src: "/images/logos/kaspersky.svg", alt: "Kaspersky", width: 151 },
];

export function ClientLogos() {
  return (
    <section aria-label="Technology partners" className="bg-black py-12">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-6 px-6 sm:gap-x-16 sm:gap-y-8 lg:flex-nowrap lg:px-[121px]">
        {logos.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={logo.alt} src={logo.src} alt={logo.alt} width={logo.width} height={55} className="h-[36px] w-auto opacity-90" />
        ))}

        <div className="flex items-center gap-3">
          <div className="grid grid-cols-2 gap-0.5">
            <span className="h-3.5 w-3.5 bg-[#F25022]" />
            <span className="h-3.5 w-3.5 bg-[#7FBA00]" />
            <span className="h-3.5 w-3.5 bg-[#00A4EF]" />
            <span className="h-3.5 w-3.5 bg-[#FFB900]" />
          </div>
          <div className="leading-tight text-white">
            <p className="text-[18px] font-semibold">Microsoft</p>
            <p className="text-[12px] font-semibold">Gold Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
}
