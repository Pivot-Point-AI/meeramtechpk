import { Reveal } from "@/components/Reveal";
import { databaseCapabilities } from "@/data/solutions";

/**
 * Deliberately not interactive. These eight items are the whole content - there
 * is nothing behind them to reveal, so a click target here would open an empty
 * drawer and cost a click to learn nothing. Hover states only.
 */
export function DatabaseCapabilities() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue">
              Always on
            </p>
            <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-[-1px] text-[#25262D] sm:text-[40px]">
              Managed database services
            </h2>
            <p className="mt-6 max-w-[440px] text-[17px] leading-[1.6] text-[#4a4a52]">
              The standing scope we run for banking and enterprise clients — high availability and
              security, held to an SLA rather than a ticket queue.
            </p>
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {databaseCapabilities.map((capability, index) => (
              <div
                key={capability}
                className="group relative flex items-baseline gap-5 border-b border-[#ededed] py-5"
              >
                {/* Hairline that draws itself in from the left on hover. */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-[-1px] h-[1px] origin-left scale-x-0 bg-brand-blue transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                />
                <span className="text-[13px] font-bold tabular-nums text-brand-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[17px] font-medium leading-[1.4] text-[#25262D] transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
                  {capability}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}