import type { Metadata } from "next";
import { Poppins, Arapey, Playfair_Display } from "next/font/google";
import { SiteLoader } from "@/components/layout/SiteLoader";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const arapey = Arapey({
  variable: "--font-arapey",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "MeeramTech — Together We Reimagine",
  description:
    "MeeramTech helps businesses modernize operations, enhance customer experiences, and unlock growth with intelligent solutions powered by data, cloud, and AI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${arapey.variable} ${playfair.variable} antialiased`}
    >
      <body className="bg-white font-sans text-black">
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}