
import Image from "next/image";

export type ServiceCardData = {
  title: string;
  description: string;
  image?: string;
  background: string;
  light?: boolean;
  split?: boolean;
};

export function ServiceCard({ title, description, image, background, light, split }: ServiceCardData) {
  return (
    <article
      className="group relative aspect-[279/438] overflow-hidden rounded-[4px]"
      style={{ background: split ? background : undefined }}
    >
      {image && (
        <div
          className="absolute inset-x-0 bottom-0"
          style={split ? { height: `${(249 / 438) * 100}%` } : { top: 0 }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          {!light && !split && (
            <div className="absolute inset-0" style={{ background, opacity: 0.4 }} />
          )}
          {light && !split && (
            <>
              <div
                className="absolute inset-x-0 top-0 lg:hidden"
                style={{
                  height: "32%",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%)",
                }}
              />
              <div
                className="absolute inset-x-0 top-0 hidden lg:block"
                style={{
                  height: "62%",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0) 100%)",
                }}
              />
            </>
          )}
        </div>
      )}

      <div
        className="absolute flex flex-col gap-[17px]"
        style={{ left: "7.17%", top: `${(30 / 438) * 100}%`, width: "85%" }}
      >
        <h3
          className={`text-[12px] font-bold uppercase leading-none tracking-wide ${
            light ? "text-[#0e1013]" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p
          className={`hidden lg:line-clamp-3 text-[16px] leading-[1.4375] ${
            light ? "text-[#0e1013]" : "text-white"
          }`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
