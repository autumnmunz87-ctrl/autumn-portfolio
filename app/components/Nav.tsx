"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="sticky top-0 z-[1000] w-full bg-transparent pt-4">
      <div className="page-shell">
        <div className="flex items-center justify-start">
          <Link href="/" className="group block shrink-0" aria-label="Autumn Munz - Home">
            <Logo className="h-[58px] w-[59px]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
