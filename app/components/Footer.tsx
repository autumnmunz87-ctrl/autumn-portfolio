import Image from "next/image";
import Link from "next/link";
import SocialButtons from "./SocialButtons";
import Logo from "./Logo";

const email = "autumn.munz87@gmail.com";

export default function Footer() {
  return (
    <footer className="footer-full-bleed mt-[80px] w-full bg-[#FF9F74] py-10 text-white md:mt-[120px] md:py-12">
      <div className="page-shell">
        <div className="border-t border-white/30 pt-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <Link
                href="/"
                className="footer-logo group inline-flex items-center gap-3"
                aria-label="Autumn - Home"
              >
                <Logo className="h-[48px] w-[49px]" />
                <span
                  className="text-[24px] leading-tight text-white"
                  style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                >
                  Autumn Munz
                </span>
              </Link>
              <p className="mt-3 text-[14px] text-white/70">
                UX/UI designer &amp; data analytics student
              </p>
            </div>

            <div className="flex flex-col items-center text-center md:items-end md:text-right">
              <p className="text-[16px] text-white/70">Let&apos;s chat!</p>
              <a
                href={`mailto:${email}`}
                className="mt-1 text-[16px] text-white underline-offset-4 hover:underline"
              >
                {email}
              </a>
              <div className="footer-social-buttons mt-4">
                <SocialButtons />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-[18px] leading-tight text-white">
              Thanks for stopping by. Come again soon.
            </p>
            <Link
              href="#top"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[16px] leading-none text-[#FF8851] transition-opacity hover:opacity-80"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <Image
                src="/icons/arrow-up.svg"
                alt=""
                width={18}
                height={18}
                aria-hidden="true"
                className="h-4 w-4"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(65%) sepia(69%) saturate(1547%) hue-rotate(326deg) brightness(102%) contrast(101%)",
                }}
              />
            </Link>
            <p className="text-[12px] text-white/70">
              Built with Next.js &amp; maple cinnamon lattes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
