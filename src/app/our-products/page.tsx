import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Our Products — MeeramTech",
  description:
    "We build reliable, secure, and user-friendly software products designed around real business needs.",
};

const products = [
  {
    slug: "datum",
    name: "Datum",
    description:
      "A Spreadsheet solution to Collect, Visualize, Manipulate, Secure, Export and Manage Data & Documents. Excel & OpenXML Compatible Solution.",
    image: "/images/brand/a1ba7124-eb13-4303-af58-612ce61871ed.png",
  },
  {
    slug: "datum",
    name: "Datum",
    description:
      "A Spreadsheet solution to Collect, Visualize, Manipulate, Secure, Export and Manage Data & Documents. Excel & OpenXML Compatible Solution.",
    image: "/images/brand/37673989-bbbf-476f-b716-11be524ff3d8.png",
  },
];

export default function OurProductsPage() {
  return (
    <>
      <Navbar />
      <PageHeader label="Our Products" />
      <main>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <h1 className="max-w-[428px] text-[32px] font-bold leading-[115%] tracking-[-0.5px] text-[#292929] sm:text-[40px]">
                Innovative Products Built For Clients
              </h1>
              <p className="max-w-[636px] text-[16px] leading-[140%] text-black sm:text-[17px]">
                We always provide the best for our clients in any case so that all their wishes
                can be realized and have a decent, comfortable and aesthetically pleasing place to
                live. Pleasing environment for the people using the space.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {products.map((product, i) => (
                <article
                  key={`${product.name}-${i}`}
                  className="relative aspect-[588/500] overflow-hidden rounded-[12px]"
                >
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent" />

                  <a
                    href={`/our-products/${product.slug}`}
                    aria-label={`Learn more about ${product.name}`}
                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-black"
                  >
                    ↗
                  </a>

                  <div className="absolute left-[31px] top-10 max-w-[488px]">
                    <h2 className="text-[28px] font-medium leading-[122%] tracking-[-0.5px] text-black sm:text-[36px]">
                      {product.name}
                    </h2>
                    <p className="mt-3 text-[14px] font-light leading-[179%] text-black">
                      {product.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[37px] w-full bg-black" />
      </main>
      <Footer />
    </>
  );
}
