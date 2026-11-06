export type CaseStudy = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  href: string;
  comingSoon?: boolean;
  tags?: string[];
  /** Hero intro paragraph (below title) */
  intro?: string;
  /** Project details metadata */
  role?: string;
  team?: string;
  duration?: string;
  tools?: string;
  /** Insight cards for Section 3 (heading + short body each) */
  insights?: { heading: string; body: string }[];
  /** Highlighted data block: UI image (left) + chart image (right) */
  dataBlock?: { uiImage: string; chartImage: string };
  /** Design artifacts grid - array of image URLs */
  designArtifacts?: string[];
  context?: string;
  contextHeading?: string;
  contextImage?: string;
  contextImages?: string[];
  challenge?: string;
  challengeHeading?: string;
  challengeImage?: string;
  solution?: string;
  solutionHeading?: string;
  solutionImage?: string;
  process?: string;
  processHeading?: string;
  processImage?: string;
  /** Shown in order after the process body for case studies with additional layout sections. */
  processImages?: string[];
  impact?: string;
  impactHeading?: string;
  impactImage?: string;
};

const GAME_LIBRARY_IMAGE_DIR = "images game library";

function GameLibraryImageFile(n: number): string {
  return "/" + [GAME_LIBRARY_IMAGE_DIR, `game library image ${n}.png`].map(encodeURIComponent).join("/");
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech",
    title: "Fintech",
    subtitle: "Coming soon",
    // TODO: Replace with final Fintech case study description when details are ready.
    description:
      "A fintech product that reimagines personal finance through intuitive design.",
    image: "/images%20fintech/fintech%20hero%20image.png",
    href: "/work/fintech",
    // TODO: Set to false and complete case study fields when Fintech case study is complete.
    comingSoon: true,
  },
  {
    slug: "game-library",
    title: "Game Library",
    subtitle: "Gaming discovery site",
    description:
      "Gaming website that balances early 2000s nostalgia with modern usability.",
    intro:
      "A discovery site for retro and indie games, evoking early 2000s web aesthetics while maintaining modern accessibility and responsiveness.",
    image: "/game-library-hero.png",
    href: "/work/game-library",
    tags: ["UI/UX", "Speculative", "Visual Design"],
    role: "UX Designer",
    team: "Solo",
    duration: "September 2024 - November 2024",
    tools: "Figma, Adobe CC",
    insights: [
      { heading: "Context", body: "A discovery site for retro and indie games with early 2000s web aesthetics." },
      { heading: "Challenge", body: "Balancing nostalgic visual style with modern accessibility and responsiveness." },
      { heading: "Solution", body: "Period-appropriate typography and color palettes with contemporary layout patterns." },
    ],
    dataBlock: {
      uiImage: "/placeholder-gamelibrary.svg",
      chartImage: "/placeholder-gamelibrary.svg",
    },
    contextImage: "/images%20game%20library/game%20library%20image%202%20replace.png",
    contextImages: [
      "/images%20game%20library/game%20library%20image%203%20replacement.png",
      "/images%20game%20library/game%20library%20image%204%20replacement.png",
    ],
    processImages: [
      GameLibraryImageFile(5),
      GameLibraryImageFile(6),
      "/images%20game%20library/game%20library%20image%207%20replacement.png",
      "/images%20game%20library/game%20library%20image%208%20replacement.png",
    ],
    designArtifacts: [],
    solutionImage: GameLibraryImageFile(9),
    impactImage: GameLibraryImageFile(10),
    context:
      "Game Library is a discovery site for retro and indie games, aiming to evoke early 2000s web aesthetics while staying usable.",
    challenge:
      "Balancing nostalgic visual style with modern accessibility and responsiveness without losing the intended feel.",
    solution:
      "Used period-appropriate typography and color palettes with contemporary layout patterns and semantic HTML.",
    process:
      "Mood boarding → style tiles → component library → responsive breakpoints → accessibility audit.",
    impact: "Positive feedback on both aesthetic appeal and ease of use.",
  },
    // Replace the existing { slug: "mind-scribe", ... } object inside the caseStudies array
// in case-studies.ts with this one. Image paths and tags are unchanged.
// TODO: set `duration` once you confirm the real project dates.
  {
    slug: "mind-scribe",
    title: "Mind Scribe",
    subtitle: "Journaling & wellness platform",
    description:
      "Journaling and wellness app concept built from a 12-person survey, competitor review, and published research.",
    intro:
      "A journaling and wellness app concept designed for people who want to reflect but have not stuck with an app. This case study covers the research, the design process, and what the data suggests about the market.",
    image: "/images%20mind%20scribe/mind%20scribe%20hero.png.png",
    href: "/work/mind-scribe",
    tags: ["UI/UX", "Prototyping", "Research"],
    role: "UX Designer & Researcher",
    team: "Solo",
    duration: "[Confirm dates]",
    tools: "Figma, Miro, Google Forms",
    insights: [
      { heading: "Context", body: "11 of 12 survey respondents journal on paper, and only 1 currently uses a journaling app." },
      { heading: "Challenge", body: "6 of 12 had stopped using a journaling app, citing crowded interfaces, ads and paywalls, and notifications." },
      { heading: "Solution", body: "A customizable, uncluttered app with themes and guided prompts that make starting an entry easy." },
    ],
    dataBlock: {
      uiImage: "/placeholder-mindscribe.svg",
      chartImage: "/placeholder-mindscribe.svg",
    },
    designArtifacts: [
      "/placeholder-mindscribe.svg",
      "/placeholder-mindscribe.svg",
    ],
    context:
      "Mind Scribe is a journaling and wellness app concept. A 12-person survey found that 11 of 12 respondents use pen and paper and only 1 uses a journaling app.",
    contextHeading: "Understanding the problem space",
    challenge:
      "Half of the people I surveyed had stopped using a journaling app. Their reasons included crowded or unattractive interfaces, ads and paywalls, and notifications, and published data shows mental health apps lose most users within a month (median 30-day retention of 3.3%).",
    challengeHeading: "Reducing friction for daily journaling",
    solution:
      "A customizable, uncluttered app with themes, mood check-ins, and guided prompts such as Morning Pages and Evening Reflection. 9 of 12 respondents listed customization among their top three features.",
    solutionHeading: "Customization and guided prompts",
    process:
      "Research → personas → wireframes → usability testing → high-fidelity design → iteration based on feedback.",
    processHeading: "From research to high-fidelity design",
    impact:
      "Concept stage, not launched. 8 of 12 survey respondents (67%) would pay for a journaling app, 5 of them in the $2 to $5 per month range. Industry benchmarks suggest real conversion would be far lower, so the next step is testing with a larger sample.",
    impactHeading: "What the data suggests about the market",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}
