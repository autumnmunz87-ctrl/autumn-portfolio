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
  /* TODO: re-enable onClick when Fintech case study is complete */
  // const cardClickHandler = onClick;
  const cardClickHandler = isComingSoon ? undefined : onClick;

  /* COMING SOON: edit or remove this overlay when the case study is ready */
  const comingSoonBadgeClasses =
    "absolute right-3 top-3 z-20 rounded-md bg-primary-black/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-white";

  /* COMING SOON: toggle these classes off when card is interactive */
  const comingSoonCardStateClasses = isComingSoon
    ? "cursor-not-allowed opacity-90"
    : "cursor-pointer";

  const imageContainerClasses = isComingSoon
    ? "relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-primary-black/5 shadow-none"
    : "relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-primary-black/5 shadow-none transition-all duration-300 ease-out group-hover:scale-[1.01] group-hover:shadow-sm";

  return (
    <button
      type="button"
      onClick={cardClickHandler}
      disabled={isComingSoon}
      aria-disabled={isComingSoon}
      className={`group flex flex-col text-left ${comingSoonCardStateClasses}`}
    >
      <div className={imageContainerClasses}>
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover"
        />
        {isComingSoon && (
          <>
            <div className="absolute inset-0 z-10 bg-primary-black/20" aria-hidden />
            <span className={comingSoonBadgeClasses}>{COMING_SOON_LABEL}</span>
          </>
        )}
      </div>
      <h3 className="card-title">{study.title}</h3>
      <p className="card-description mt-3">{study.description}</p>
    </button>
  );
}
