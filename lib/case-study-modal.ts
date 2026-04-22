/**
 * Unified case study modal data – supports Mind Scribe (rich) and other studies (mapped from CaseStudy).
 * Used for the two-column sticky layout in both modal and full page.
 */
import { mindScribeModalData } from "./mind-scribe-modal";
import { getCaseStudyBySlug, type CaseStudy } from "./case-studies";
import { sortPathsByImageFilenameNumber } from "./sort-case-study-images";

export type CaseStudyModalData = {
  coverImage: string;
  coverAlt: string;
  summary: { heading: string; body: string };
  metaGrid: { role: string; skills: string; team: string; timeline: string };
  featureCards: { heading: string; body: string }[];
  /** Research / Context section */
  research: { heading: string; body: string; image?: string };
  /** Optional user feedback block */
  userFeedback?: { heading: string; body: string };
  /** Objective / Challenge section */
  objective?: {
    heading: string;
    body: string;
    painPointCards?: { title: string; quote: string }[];
    image?: string;
  };
  /** Ideation / Process section */
  process: {
    heading: string;
    body: string;
    featureCards?: { title: string; description: string }[];
    ideationImage?: string;
    designProcessImage?: string;
    /** Single process image for simpler studies */
    image?: string;
    /** After process body, before other process images (e.g. Flying X) */
    postBodyImages?: string[];
  };
  /** Final Designs / Solution section */
  finalDesigns: {
    heading: string;
    body: string;
    image1: string;
    image2?: string;
    additionalImages?: string[];
  };
  /** Reflections section */
  reflections: { heading: string; body: string; finalDesign2Image?: string; userReflectionsImage?: string };
  /** Projected Impact */
  projectedImpact: { heading: string; bodyParagraph1: string; bodyParagraph2?: string };
};

function buildFromCaseStudy(study: CaseStudy): CaseStudyModalData {
  const skills = study.tools ?? "-";
  const team = study.team ?? "-";
  const timeline = study.duration ?? "-";
  const sortedArtifacts =
    study.designArtifacts && study.designArtifacts.length > 0
      ? sortPathsByImageFilenameNumber([...study.designArtifacts])
      : undefined;

  return {
    coverImage: study.image,
    coverAlt: `${study.title} Cover`,
    summary: {
      heading: study.subtitle ?? "Overview",
      body: study.intro ?? study.description,
    },
    metaGrid: {
      role: study.role ?? "-",
      skills,
      team,
      timeline,
    },
    featureCards: study.insights ?? [],
    research: {
      heading: study.contextHeading ?? "Context",
      body: study.context ?? "",
      image: study.contextImage,
    },
    process: {
      heading: study.processHeading ?? "Process",
      body: study.process ?? "",
      image: study.processImage,
      postBodyImages: study.processImages,
    },
    finalDesigns: {
      heading: study.solutionHeading ?? "Final Designs",
      body: study.solution ?? "",
      image1:
        study.solutionImage ??
        sortedArtifacts?.[0] ??
        study.designArtifacts?.[0] ??
        study.dataBlock?.uiImage ??
        study.image,
      additionalImages:
        sortedArtifacts && sortedArtifacts.length > 1
          ? sortedArtifacts.slice(1)
          : study.designArtifacts?.slice(1) ?? (study.dataBlock ? [study.dataBlock.chartImage] : []),
    },
    reflections: {
      heading: "Reflections",
      body:
        "This project provided valuable experience in UX design, from research through to final implementation. The process reinforced the importance of user-centered design and iterative refinement.",
    },
    projectedImpact: {
      heading: study.impactHeading ?? "Projected Impact",
      bodyParagraph1: study.impact ?? "",
    },
  };
}

function mindScribeToUnified(): CaseStudyModalData {
  const data = mindScribeModalData;
  return {
    coverImage: data.coverImage,
    coverAlt: "Mind Scribe Cover",
    summary: data.summary,
    metaGrid: data.metaGrid,
    featureCards: data.featureCards,
    research: data.marketResearch,
    userFeedback: data.userFeedback,
    objective: data.objective,
    process: {
      heading: data.ideationProcess.heading,
      body: data.ideationProcess.body,
      featureCards: data.ideationProcess.featureCards,
      ideationImage: data.ideationProcess.ideationImage,
      designProcessImage: data.ideationProcess.designProcessImage,
    },
    finalDesigns: data.finalDesigns,
    reflections: data.reflections,
    projectedImpact: data.projectedImpact,
  };
}

export function getCaseStudyModalData(slug: string): CaseStudyModalData | null {
  const study = getCaseStudyBySlug(slug);
  if (!study) return null;

  if (slug === "mind-scribe") {
    return mindScribeToUnified();
  }

  return buildFromCaseStudy(study);
}

export const SECTION_NAV = [
  { id: "summary", label: "Summary" },
  { id: "research", label: "Research" },
  { id: "process", label: "Process" },
  { id: "final-designs", label: "Final Designs" },
  { id: "reflections", label: "Reflections" },
  { id: "projected-impact", label: "Projected Impact" },
] as const;
