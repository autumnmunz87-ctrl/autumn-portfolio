import Link from "next/link";
import Logo from "./Logo";

const email = "autumn.munz87@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/autumn-munz/";
const behanceUrl = "https://www.behance.net/autumnmunz";

const footerLinkClassName =
  "text-[14px] uppercase tracking-[0.06em] text-white/80 transition-colors duration-200 hover:text-white hover:underline";

export default function Footer() {
  return (
    <footer className="footer-full-bleed mt-[80px] w-full bg-[#FF9F74] py-16 text-white md:mt-[120px]">
      <div className="page-shell">
        <div className="flex flex-col items-start gap-10 md:flex-row md:justify-between md:gap-16">
          <div className="flex max-w-[520px] flex-col items-start">
            <Link
              href="/"
              className="footer-logo group inline-flex shrink-0"
              aria-label="Home"
            >
              <Logo className="h-[52px] w-[53px] md:h-16 md:w-[66px]" />
            </Link>
            <h2 className="mt-6 text-[22px] leading-tight text-white md:text-[26px]">
              Thanks for stopping by.
            </h2>
            <p className="mt-3 text-[16px] text-white/80">
              There&apos;s always a fresh pour of ideas here. Come back anytime.
            </p>
            <p className="mt-6 text-[14px] text-white/70">© Autumn Munz, 2025</p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:gap-16">
            <nav aria-label="Contact" className="flex flex-col items-start gap-3">
              <h3 className="mb-1 text-[14px] font-medium uppercase tracking-[0.08em] text-white">
                Contact
              </h3>
              <a href={`mailto:${email}`} className={footerLinkClassName}>
                Email
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={footerLinkClassName}
              >
                LinkedIn
              </a>
              <a
                href={behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={footerLinkClassName}
              >
                Behance
              </a>
            </nav>

            <nav aria-label="Explore" className="flex flex-col items-start gap-3">
              <h3 className="mb-1 text-[14px] font-medium uppercase tracking-[0.08em] text-white">
                Explore
              </h3>
              <Link href="/?tab=work" className={footerLinkClassName}>
                Work
              </Link>
              <Link href="/?tab=about" className={footerLinkClassName}>
                About
              </Link>
              <a
                href="/autumn-munz-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={footerLinkClassName}
              >
                Resume
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
