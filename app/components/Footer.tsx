import Link from "next/link";
import SocialButtons from "./SocialButtons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer-full-bleed border-t border-primary-black-secondary pt-12 pb-8">
      <div className="footer-outer">
        <div className="container flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="group block" aria-label="Autumn - Home">
              <Logo className="h-[58px] w-[59px]" />
            </Link>
            <Link
              href="#top"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              aria-label="Back to top"
            >
              <span className="text-body-regular text-foreground-muted">Back to top</span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary-black-secondary bg-primary-white text-foreground-muted transition-colors hover:border-accent-orange hover:bg-accent-orange/10 hover:text-accent-orange">
                <svg className="h-6 w-6" viewBox="0 0 640 640" fill="currentColor" aria-hidden>
                  <path d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z" />
                </svg>
              </span>
            </Link>
          </div>
          <div className="text-center">
            <h2 className="footer-title mb-2">Thanks for stopping by</h2>
            <p className="text-subheading-1">Come again soon</p>
          </div>
          <div className="flex justify-end">
            <SocialButtons />
          </div>
        </div>
      </div>
    </footer>
  );
}
