import { mindScribeModalData, type MindScribeModalData } from "./mind-scribe-modal";

export type CaseStudySectionNavItem = {
  id: string;
  label: string;
};

export type CaseStudyModalData = {
  coverImage: string;
  coverAlt: string;
  summary: { heading: string; body: string };
  metaGrid: { role: string; skills: string; team: string; timeline: string };
  featureCards: { heading: string; body: string }[];
  research: {
    heading: string;
    body: string;
    image?: string;
    images?: string[];
  };
  userFeedback?: { heading: string; body: string; image?: string };
  objective?: {
    heading: string;
    body: string;
    painPointCards?: { title: string; quote: string }[];
    image?: string;
  };
  process: {
    heading: string;
    body: string;
    featureCards?: { title: string; description: string }[];
    ideationImage?: string;
    designProcessImage?: string;
    image?: string;
    postBodyImages?: string[];
  };
  finalDesigns: {
    heading: string;
    body: string;
    image1: string;
    additionalImages?: string[];
  };
  reflections: {
    heading: string;
    body: string;
    cards?: { title: string; description: string }[];
    finalDesign2Image?: string;
    userReflectionsImage?: string;
  };
  projectedImpact: {
    heading: string;
    bodyParagraph1: string;
    bodyParagraph2?: string;
  };
};

export const SECTION_NAV: CaseStudySectionNavItem[] = [
  { id: "summary", label: "Summary" },
  { id: "research", label: "Research" },
  { id: "process", label: "Process" },
  { id: "final-designs", label: "Final Designs" },
  { id: "reflections", label: "Reflections" },
  { id: "projected-impact", label: "Projected Impact" },
];

function mapMindScribeModalData(data: MindScribeModalData): CaseStudyModalData {
  return {
    coverImage: data.coverImage,
    coverAlt: "Mind Scribe project cover",
    summary: data.summary,
    metaGrid: data.metaGrid,
    featureCards: data.featureCards,
    research: {
      heading: data.marketResearch.heading,
      body: data.marketResearch.body,
      image: data.marketResearch.image,
    },
    userFeedback: data.userFeedback,
    objective: data.objective,
    process: {
      heading: data.ideationProcess.heading,
      body: data.ideationProcess.body,
      featureCards: data.ideationProcess.featureCards,
    },
    finalDesigns: {
      heading: data.finalDesigns.heading,
      body: data.finalDesigns.body,
      image1: data.finalDesigns.image1,
    },
    reflections: data.reflections,
    projectedImpact: {
      heading: data.projectedImpact.heading,
      bodyParagraph1: data.projectedImpact.bodyParagraph1,
      bodyParagraph2: data.projectedImpact.bodyParagraph2,
    },
  };
}

const gl = (file: string) =>
  "/" + ["images game library", file].map(encodeURIComponent).join("/");
const gameLibraryModalData: CaseStudyModalData = {
  coverImage: gl("game-library-hero.png"),
  coverAlt: "Game Library project cover",
  summary: {
    heading: "Designing a nostalgic discovery flow that still feels modern and usable.",
    body:
      "Game Library is a retro-inspired gaming discovery site that blends early 2000s personality with clearer navigation, stronger hierarchy, and a more responsive browsing experience.",
  },
  metaGrid: {
    role: "UX Designer",
    skills: "Figma, Adobe CC",
    team: "Solo",
    timeline: "September 2024 - November 2024",
  },
  featureCards: [
    {
      heading: "Context",
      body: "A retro-inspired game discovery experience built around exploration, mood, and easy browsing.",
    },
    {
      heading: "Challenge",
      body: "Balancing nostalgic visual energy with modern usability and accessibility across devices.",
    },
    {
      heading: "Solution",
      body: "A playful visual system with cleaner content hierarchy, semantic structure, and responsive layouts.",
    },
  ],
  research: {
    heading: "Understanding the user need",
    body:
      "The concept was inspired by the discovery-heavy feel of early gaming portals: bold visual treatment, genre exploration, and a strong sense of personality. The main challenge was retaining that charm while making the experience clearer and easier to scan for modern users.",
    image: gl("game-library-research-1.png"),
    images: [
      gl("game-library-research-2.png"),
      gl("game-library-research-3.png"),
    ],
  },
  userFeedback: {
    heading: "User feedback",
    body:
      "Early feedback reinforced that the visual direction felt memorable and fun, but users wanted clearer hierarchy, stronger callouts for key titles, and more consistent presentation across screen sizes.",
  },
  objective: {
    heading: "Create a playful discovery experience without sacrificing usability",
    body:
      "The goal was to design a game browsing experience that felt like a nostalgic portal while still feeling clear, efficient, and accessible.",
    painPointCards: [
      {
        title: "Nostalgia overload",
        quote: "The vibe was exciting, but the content hierarchy could feel crowded.",
      },
      {
        title: "Modern accessibility",
        quote: "The interface needed stronger contrast and more consistent spacing and rhythm.",
      },
      {
        title: "Discovery friction",
        quote: "Users needed clearer paths to explore genres, ratings, and standout game picks.",
      },
      {
        title: "Responsive experience",
        quote: "The layout needed to stay readable and comfortable across desktop and mobile screens.",
      },
    ],
    image: gl("game-library-summary-2.png"),
  },
    process: {
    heading: "Refining the experience through iteration",
    body:
      "I moved from mood boards and style tiles into a more structured component system, then sharpened the layout through responsive breakpoints and visual accessibility checks.",
    postBodyImages: [gl("game-library-process-1.png")],
    featureCards: [
      { title: "Mood boarding", description: "Explored retro gaming aesthetics and nostalgic UI references." },
      { title: "Style tiles", description: "Defined the palette, typography, and visual system." },
      { title: "Component library", description: "Built reusable interactive patterns for browsing and discovery." },
      { title: "Responsive testing", description: "Adjusted for readability, touch comfort, and layout consistency." },
    ],
    image: gl("game-library-process-2.png"),
  },
  finalDesigns: {
    heading: "A polished retro-modern game discovery experience",
    body:
      "The final direction blends bold color, playful layout rhythm, and a structured browsing experience that still feels approachable and easy to use.",
    image1: gl("game-library-final-design.png"),
    additionalImages: [gl("game-library-summary-3.png")],
  },
    reflections: {
    heading: "Reflections",
    body: "Nostalgic design works best as a visual layer on top of a clear structure. The strongest decisions were the ones where the style supported navigation instead of competing with it.",
    cards: [
      {
        title: "Structure first",
        description: "The retro styling worked best when it sat on top of a clear hierarchy and consistent spacing.",
      },
      {
        title: "Style that supports navigation",
        description: "The strongest decisions helped users find games, instead of competing with the content.",
      },
      {
        title: "Usability testing",
        description: "With more time, I would test finding a game by genre and measure task success and time on task.",
      },
      {
        title: "Accessibility follow-up",
        description: "I would re-check color contrast and spacing against WCAG before calling the design finished.",
      },
    ],
  },
  projectedImpact: {
    heading: "Projected impact",
    bodyParagraph1:
      "The concept aims to create a more engaging discovery flow for retro and indie game audiences, helping users find titles quickly while preserving the playful personality of the brand.",
    bodyParagraph2:
      "By combining early web charm with modern UI clarity, the experience is designed to feel memorable, useful, and approachable across different device sizes.",
  },
};

const caseStudyModalDataMap: Record<string, CaseStudyModalData> = {
  "mind-scribe": mapMindScribeModalData(mindScribeModalData),
  "game-library": gameLibraryModalData,
};

export function getCaseStudyModalData(slug: string): CaseStudyModalData | null {
  return caseStudyModalDataMap[slug] ?? null;
}
