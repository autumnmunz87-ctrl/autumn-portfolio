import Image from "next/image";
import Link from "next/link";
import SocialButtons from "./SocialButtons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(48,47,43,0.15)] bg-[var(--background)] pt-12 pb-8">
      <div className="page-shell">
        <div className="grid grid-cols-1 items-center gap-8 text-center md:grid-cols-[1fr_auto_1fr] md:text-left">
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="group block shrink-0" aria-label="Autumn - Home">
              <Logo className="h-[58px] w-[59px]" />
            </Link>
          </div>

          <div className="text-center">
            <h2 className="text-[22px] font-normal leading-tight text-primary-black">
              Thanks for stopping by
            </h2>
            <p className="mt-1 text-[16px] leading-normal text-primary-black/60">
              Come again soon
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex items-center gap-3">
              <Link
                href="#top"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(48,47,43,0.2)] bg-transparent px-4 py-2 text-[16px] leading-none text-primary-black transition-opacity hover:opacity-80"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-orange text-primary-white">
                  <Image
                    src="/icons/arrow-up.svg"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                    className="h-4 w-4"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </span>
              </Link>
              <SocialButtons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
