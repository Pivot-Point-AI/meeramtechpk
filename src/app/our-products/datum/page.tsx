import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductShowcase } from "@/components/products/ProductShowcase";

export const metadata: Metadata = {
  title: "Datum — MeeramTech",
  description:
    "A Spreadsheet solution to Collect, Visualize, Manipulate, Secure, Export and Manage Data & Documents. Excel & OpenXML Compatible Solution.",
};

export default function DatumProductPage() {
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
          </div>
        </section>

        <ProductShowcase />
      </main>
      <Footer />
    </>
  );
}
