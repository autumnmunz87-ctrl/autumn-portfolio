import Image from "next/image";
import Link from "next/link";
import SocialButtons from "./SocialButtons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer-full-bleed w-full bg-[var(--accent-orange)] py-16 text-white">
      <div className="page-shell">
        <div className="flex flex-col items-center gap-8 text-center">
          <Link
            href="/"
            className="footer-logo group block shrink-0"
            aria-label="Autumn - Home"
          >
            <Logo className="h-[58px] w-[59px]" />
          </Link>

          <div>
            <h2 className="text-[22px] font-normal leading-tight text-white">
              Thanks for stopping by
            </h2>
            <p className="mt-1 text-[16px] leading-normal text-white">
              Come again soon
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#top"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[16px] leading-none text-accent-orange transition-opacity hover:opacity-80"
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
            <div className="footer-social-buttons">
              <SocialButtons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
