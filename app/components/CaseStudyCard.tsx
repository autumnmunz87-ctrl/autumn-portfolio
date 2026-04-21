"use client";

import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyCardProps = {
  study: CaseStudy;
  onClick: () => void;
};

export default function CaseStudyCard({ study, onClick }: CaseStudyCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex cursor-pointer flex-col text-left"
    >
      <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-primary-black/5 shadow-none transition-all duration-300 ease-out group-hover:scale-[1.01] group-hover:shadow-sm">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="card-title">{study.title}</h3>
      <p className="card-description mt-3">{study.description}</p>
    </button>
  );
}
