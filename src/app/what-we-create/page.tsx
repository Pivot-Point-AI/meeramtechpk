import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "What We Create — MeeramTech",
  description:
    "With powerful capabilities, trusted partnerships, and proven expertise, we help your business grow into its strongest version yet.",
};

export default function WhatWeCreatePage() {
  return (
    <>
      <Navbar />
      <PageHeader label="What We Create" />
      <main>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
            <div className="mx-auto max-w-[972px] text-center">
              <h1 className="text-[28px] font-bold leading-[104%] text-black sm:text-[36px] lg:whitespace-nowrap lg:text-[46px]">
                Capabilities that enable your reinvention
              </h1>
              <p className="mx-auto mt-6 max-w-[729px] text-[18px] font-medium leading-[30px] text-[#171717]">
                With powerful capabilities, trusted partnerships, and proven expertise, we help
                your business grow into its strongest version yet.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {/* left column */}
              <div className="flex flex-col gap-8 lg:gap-[140px]">
                <article className="relative aspect-[600/700] overflow-hidden rounded-[30px] bg-[#061029]">
                  <Image
                    src="/images/what-we-create/banking-application.png"
                    alt="Banking Application — Smarter, faster, and secure banking, enhanced with intuitive design and automation to keep users confident and in control."
                    fill
                    sizes="(min-width: 640px) 40vw, 100vw"
                    className="object-cover"
                  />
                </article>

                <article className="relative aspect-[600/700] overflow-hidden rounded-[30px] bg-[#1a0f0a]">
                  <Image
                    src="/images/what-we-create/digital-wallet-zindigi.png"
                    alt="Digital Wallet – Zindigi — Smarter, faster, secure banking powered by intuitive design and automation to keep users confident and in control."
                    fill
                    sizes="(min-width: 640px) 40vw, 100vw"
                    className="object-cover"
                  />
                </article>
              </div>

              {/* right column */}
              <div className="flex flex-col gap-8 lg:mt-[124px] lg:gap-[156px]">
                <article className="relative aspect-[600/700] overflow-hidden rounded-[30px] bg-[#D0CDC4]">
                  <div className="relative z-10 p-8 pb-0">
                    <h3 className="text-[24px] font-semibold text-[#1A1A1A] sm:text-[26px]">
                      Sale Force Supervision Solutions
                    </h3>
                    <p className="mt-3 max-w-[420px] text-[14px] leading-[1.6] text-[#1A1A1A]/75">
                      Smarter, faster, and secure banking — designed with intelligent automation
                      to keep users confident and in control.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-[13%] top-[22.5%] w-[85%]">
                    <Image
                      src="/images/what-we-create/sale-force-supervision.png"
                      alt="Sale Force Supervision Solutions app on a phone showing an inventory dashboard"
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      className="object-contain object-bottom"
                    />
                  </div>
                </article>

                <article className="relative aspect-[600/700] overflow-hidden rounded-[30px] bg-black">
                  <div className="absolute inset-x-0 top-[21%] bottom-[-45%]">
                    <Image
                      src="/images/what-we-create/cash-management-system.png"
                      alt="Cash Management System phones showing balance and payment requests"
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent" />
                  <div className="relative z-10 p-8">
                    <h3 className="text-[24px] font-semibold text-white sm:text-[26px]">
                      Cash Management System
                    </h3>
                    <p className="mt-3 max-w-[420px] text-[14px] leading-[1.6] text-white/85">
                      Smarter, faster, and secure banking — enhanced with intuitive design and
                      automation to keep users confident and in control.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <a href="#" className="flex items-center gap-2 text-[20px] font-bold text-black">
                See All
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/brand/arrow-right.svg" alt="" width={21} height={21} />
              </a>
            </div>
          </div>
        </section>

        <CtaBanner
          heading="See Reinvention In Action"
          description="Every day, we help our clients reinvent their businesses to reach their full potential. Using technology, data, AI and new ways of working. We push boundaries and shape the future of industries."
          buttonLabel="View Client Stories"
          buttonHref="/reinvention"
        />
      </main>
      <Footer />
    </>
  );
}
