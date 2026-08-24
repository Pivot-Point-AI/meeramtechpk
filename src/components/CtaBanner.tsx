export function CtaBanner({
  heading,
  description,
  buttonLabel,
  buttonHref = "#",
}: {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
}) {
  return (
    <section className="flex min-h-[528px] items-center bg-black text-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[121px]">
        <h2 className="text-[32px] font-bold leading-[1.15] sm:text-[42px]">{heading}</h2>
        <p className="mt-6 max-w-[700px] text-[18px] leading-[1.5] text-white/85">{description}</p>
        <a
          href={buttonHref}
          className="mt-8 inline-flex items-center rounded-md bg-brand-blue px-6 py-3 text-[16px] font-semibold text-white hover:opacity-90"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
