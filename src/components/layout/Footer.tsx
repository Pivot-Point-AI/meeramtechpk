const companyLinks = [
  { label: "Preference Center", href: "#", bold: true },
  { label: "Careers", href: "/#careers" },
  { label: "About Us", href: "/who-we-are" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Locations", href: "/who-we-are#locations" },
];
const legalLinks = [
  "Privacy Statement",
  "Terms & Conditions",
  "Cookie Policy / Settings",
  "Accessibility Statement",
  "Do Not Sell/ Share My Personal Information",
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[121px]">
        <h2 className="text-[30px] font-semibold capitalize leading-tight sm:text-[36px] sm:leading-[0.7]">
          Let there be change
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Company">
            <ul className="flex flex-col gap-1">
              {companyLinks.map((link) => (
                <li
                  key={link.label}
                  className={`py-2 text-[17px] text-black ${link.bold ? "font-semibold" : "font-normal"}`}
                >
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Legal">
            <ul className="flex flex-col gap-1">
              {legalLinks.map((link) => (
                <li key={link} className="py-2 text-[17px] font-normal text-black">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-6 w-6 items-center justify-center rounded bg-[#8d8d8d] text-white"
          >
            <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-6 w-6 items-center justify-center rounded bg-[#8d8d8d] text-white"
          >
            <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
            </svg>
          </a>
        </div>

        <div className="mt-8 border-t border-[#e9e9e9] pt-8">
          <p className="text-[17px] text-black">
            © 2026 All rights reserved — MeeramTech
          </p>
        </div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-0 hidden select-none text-[100px] font-bold uppercase leading-none text-[#ededed] lg:right-10 lg:block lg:text-[112px]"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Innovate
      </span>
    </footer>
  );
}
