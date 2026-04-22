export type CaseStudy = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  href: string;
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
  challenge?: string;
  challengeHeading?: string;
  challengeImage?: string;
  solution?: string;
  solutionHeading?: string;
  solutionImage?: string;
  process?: string;
  processHeading?: string;
  processImage?: string;
  impact?: string;
  impactHeading?: string;
  impactImage?: string;
};

const FLYING_X_COFFEE_IMAGE_DIR = "images flying x coffee";

function flyingXCoffeeImageFile(n: number): string {
  return "/" + [FLYING_X_COFFEE_IMAGE_DIR, `flying x coffee image ${n}.png`].map(encodeURIComponent).join("/");
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "mind-scribe",
    title: "Mind Scribe",
    subtitle: "Journaling & wellness platform",
    description:
      "Journaling and wellness platform designed to inspire users and solve frequently experienced usability issues.",
    intro:
      "Journaling and wellness platform designed to inspire daily reflection and emotional well-being. This case study explores the design process from research to high-fidelity prototypes.",
    image: "/mind-scribe-hero.png",
    href: "/work/mind-scribe",
    tags: ["UI/UX", "Prototyping", "Research"],
    role: "UX Designer",
    team: "Solo",
    duration: "3 weeks",
    tools: "Figma, Miro",
    insights: [
      { heading: "Context", body: "A journaling platform designed to inspire daily reflection and emotional well-being." },
      { heading: "Challenge", body: "Users faced cluttered interfaces and unclear flows that discouraged consistent use." },
      { heading: "Solution", body: "Redesigned flows with clearer hierarchy, reduced cognitive load, and intuitive prompts." },
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
      "Mind Scribe is a journaling and wellness platform designed to inspire daily reflection and emotional well-being.",
    contextHeading: "Understanding the problem space",
    challenge:
      "Users experienced usability friction with existing journaling apps—cluttered interfaces and unclear flows discouraged consistent use.",
    challengeHeading: "Reducing friction for daily journaling",
    solution:
      "Redesigned core flows with clearer hierarchy, reduced cognitive load, and intuitive prompts that encourage reflection without overwhelm.",
    solutionHeading: "Clearer hierarchy and intuitive prompts",
    process:
      "Research → personas → wireframes → usability testing → high-fidelity design → iteration based on feedback.",
    processHeading: "From research to high-fidelity design",
    impact: "Improved task completion rates and user retention in follow-up studies.",
    impactHeading: "Measurable improvements in engagement",
  },
  {
    slug: "flying-x-coffee",
    title: "Flying X Coffee",
    subtitle: "Coffee shop website",
    description:
      "Coffee shop website that enhances customer engagement and maximizes usability of key features.",
    intro:
      "A coffee shop website designed to reflect the brand and make it easy for customers to discover menus, order, and sign up for events.",
    image: "/flying-x-coffee-hero.png",
    href: "/work/flying-x-coffee",
    tags: ["UI/UX", "Web Design"],
    role: "UX Designer",
    team: "Solo",
    duration: "2 weeks",
    tools: "Figma",
    insights: [
      { heading: "Context", body: "A digital presence to reflect the brand and help customers discover menus and events." },
      { heading: "Challenge", body: "The previous site was hard to navigate and didn't surface key actions like ordering." },
      { heading: "Solution", body: "Clean layout with prominent CTAs and simplified navigation structure." },
    ],
    dataBlock: {
      uiImage: "/placeholder-flyingx.svg",
      chartImage: "/placeholder-flyingx.svg",
    },
    designArtifacts: [2, 3, 4, 5, 6, 7, 8].map(flyingXCoffeeImageFile),
    context:
      "Flying X Coffee wanted a digital presence that reflected their brand and made it easy for customers to discover menus and events.",
    challenge:
      "The previous site was hard to navigate and did not clearly surface key actions like ordering and event sign-up.",
    solution:
      "Created a clean, focused layout with prominent CTAs and a simplified navigation structure.",
    process:
      "Stakeholder interviews → competitive audit → information architecture → visual design → user testing.",
    impact: "Increased engagement with menu pages and event registration.",
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
    duration: "3 weeks",
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
    designArtifacts: [
      "/placeholder-gamelibrary.svg",
      "/placeholder-gamelibrary.svg",
    ],
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
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}
