"use client";

import { useState } from "react";
import type { CaseStudy } from "@/lib/case-studies";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyModal from "./CaseStudyModal";

type CaseStudyGridProps = {
  caseStudies: CaseStudy[];
};

export default function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <>
      <div className="grid gap-10 min-[809px]:grid-cols-2 min-[809px]:gap-12">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.slug}
            study={study}
            onClick={() => setSelectedStudy(study)}
          />
        ))}
      </div>

      <CaseStudyModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />
    </>
  );
}
