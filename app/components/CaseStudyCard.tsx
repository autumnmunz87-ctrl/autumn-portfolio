"use client";

import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyCardProps = {
  study: CaseStudy;
  onClick: () => void;
};

export default function CaseStudyCard({ study, onClick }: CaseStudyCardProps) {
  const isComingSoon = study.comingSoon === true;
  const COMING_SOON_LABEL = "Coming soon";
  const cardClickHandler = isComingSoon ? undefined : onClick;
  const year = study.slug === "fintech" ? "2025" : "2024";

  const comingSoonBadgeClasses =
    "absolute right-3 top-3 z-20 rounded-md bg-primary-black/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-white";

  const comingSoonCardStateClasses = isComingSoon
    ? "cursor-not-allowed opacity-90"
    : "cursor-pointer";

  return (
    <button
      type="button"
      onClick={cardClickHandler}
      disabled={isComingSoon}
      aria-disabled={isComingSoon}
      className={`group block w-full overflow-hidden text-left ${comingSoonCardStateClasses}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-primary-black/5 shadow-none">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/20 via-transparent to-transparent" aria-hidden />

        <span className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-2 rounded-full bg-primary-white/95 px-3 py-1.5 text-[11px] font-medium tracking-[0.02em] text-primary-black shadow-sm backdrop-blur-sm">
          <span>{study.title}</span>
          <span className="text-primary-black/60">•</span>
          <span>{year}</span>
        </span>

        {isComingSoon && (
          <>
            <div className="absolute inset-0 z-10 bg-primary-black/20" aria-hidden />
            <span className={comingSoonBadgeClasses}>{COMING_SOON_LABEL}</span>
          </>
        )}
      </div>
    </button>
  );
}
