"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="sticky top-0 z-[1000] w-full bg-transparent pt-4">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1880px] min-[393px]:w-[calc(100%-40px)] min-[809px]:w-[calc(100%-56px)] min-[1201px]:w-[calc(100%-60px)]">
        <div className="flex items-center justify-start">
          <Link href="/" className="group block shrink-0" aria-label="Autumn Munz - Home">
            <Logo className="h-[58px] w-[59px]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
