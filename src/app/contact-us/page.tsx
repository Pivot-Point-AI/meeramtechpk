import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — MeeramTech",
  description: "Have questions about our services or need help getting started? Our team is ready to assist you.",
};


export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <PageHeader label="Contact Us" />
      <main>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[657px_533px] lg:gap-x-[50px]">
              <div>
                <h1 className="text-[32px] font-bold capitalize leading-[1.2] text-[#292929] sm:text-[50px] sm:leading-[60px]">
                  We&rsquo;re Here To
                  <br />
                  Connect And
                  <br />
                  Assist You
                </h1>
                <p className="mt-6 max-w-[516px] text-[16px] leading-[1.6] text-[#292929] sm:mt-10 sm:text-[20px] sm:leading-[30px]">
                  Have questions about the summit? Need help with
                  <br />
                  registration or travel? Our team is ready to assist
                  <br />
                  you.
                </p>

                <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-16 sm:gap-y-[48px] lg:mt-[129px]">
                  <div>
                    <p className="text-[18px] font-semibold uppercase text-[#292929] sm:text-[25px]">
                      Contact Us
                    </p>
                    <a
                      href="tel:+97145297769"
                      className="mt-2 block w-fit bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-[position:0_100%] bg-no-repeat transition-[background-size,color] duration-300 ease-out hover:bg-[length:100%_1px] hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue motion-reduce:transition-none text-[16px] leading-[30px] text-[#292929] sm:mt-[15px] sm:text-[18px]"
                    >
                      +9714 5297769
                    </a>
                  </div>
                  <div>
                    <p className="text-[18px] font-semibold uppercase text-[#292929] sm:text-[25px]">
                      Location
                    </p>
                    <p className="mt-2 w-max max-w-full whitespace-pre-line text-[16px] font-normal leading-[1.5] text-[#292929] sm:mt-[15px] sm:text-[18px] sm:leading-[30px] lg:max-w-none">
                      {"912, 9th floor, YES Business Tower,\nAl Barsha Road, Al Barsha 1, Dubai."}
                    </p>
                  </div>
                  <div>
                    <p className="text-[18px] font-semibold uppercase text-[#292929] sm:text-[25px]">
                      Email
                    </p>
                    <a
                      href="mailto:info@meeramtech.com"
                      className="mt-2 block w-fit bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-[position:0_100%] bg-no-repeat transition-[background-size,color] duration-300 ease-out hover:bg-[length:100%_1px] hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue motion-reduce:transition-none text-[16px] leading-[30px] text-[#292929] sm:mt-[15px] sm:text-[18px]"
                    >
                      info@meeramtech.com
                    </a>
                  </div>
                  <div>
                    <p className="text-[18px] font-semibold uppercase text-[#292929] sm:text-[25px]">
                      Follow Us
                    </p>
                    <div className="mt-3 flex gap-3 text-[#292929] sm:mt-[15px]">
                      <a href="#" aria-label="Facebook" className="transition-[color,transform] duration-300 ease-out hover:text-brand-blue hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue motion-reduce:transition-none motion-reduce:hover:scale-100">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                        </svg>
                      </a>
                      <a href="#" aria-label="LinkedIn" className="transition-[color,transform] duration-300 ease-out hover:text-brand-blue hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue motion-reduce:transition-none motion-reduce:hover:scale-100">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.6h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-[100px]">
          <div className="group relative h-[300px] w-full overflow-hidden sm:h-[604px]">
            <Image
              src="/images/contact/2980199%201.png"
              alt="Map showing MeeramTech's Dubai office location"
              fill
              sizes="(min-width: 1024px) 1209px, 100vw"
              className="object-cover"
            />
            <span
              aria-hidden
              className="absolute left-[44%] top-[42.5%] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0147FF] transition-[scale,box-shadow] duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0_0_0_10px_rgba(1,71,255,0.15)] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-[50px] sm:w-[50px]"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}