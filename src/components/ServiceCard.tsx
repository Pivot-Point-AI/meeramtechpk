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
      className="relative aspect-[279/438] overflow-hidden rounded-[4px]"
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
            className="object-cover"
          />
          {!light && !split && (
            <div className="absolute inset-0" style={{ background, opacity: 0.4 }} />
          )}
        </div>
      )}

      <h3
        className={`absolute text-[12px] font-bold uppercase leading-none tracking-wide ${
          light ? "text-[#0e1013]" : "text-white"
        }`}
        style={{ left: "7.17%", top: `${(30 / 438) * 100}%`, width: "85%" }}
      >
        {title}
      </h3>
      <p
        className={`absolute text-[16px] leading-[1.4375] ${light ? "text-[#0e1013]" : "text-white"}`}
        style={{ left: "7.17%", top: `${(59 / 438) * 100}%`, width: "85%" }}
      >
        {description}
      </p>
    </article>
  );
}
