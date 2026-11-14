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
  coverImage: gl("game-library-hero.svg"),
  coverAlt: "Game Library project cover",
  summary: {
    heading: "Designing a nostalgic discovery flow that still feels modern and usable.",
    body:
      "Game Library is a retro-inspired gaming discovery site that blends early 2000s personality with clearer navigation, stronger hierarchy, and a more responsive browsing experience.",
  },
  metaGrid: {
    role: "UX/UI Designer",
    skills: "Figma, Adobe CC",
    team: "Solo",
    timeline: "August 2025 - October 2025",
  },
  featureCards: [
    {
      heading: "Context",
      body: "A retro-inspired game discovery site built around exploration, mood, and easy browsing.",
    },
    {
      heading: "Challenge",
      body: "Balancing nostalgic visuals with modern usability and accessibility across devices.",
    },
    {
      heading: "Solution",
      body: "A playful visual system built on a clear hierarchy, consistent spacing, semantic structure, and responsive layouts.",
    },
  ],
  research: {
    heading: "What makes discovery feel good?",
    body:
      "Early gaming portals were memorable because of their bold visuals, genre-driven exploration, and strong sense of personality. They were also dense, cluttered, and hard to scan. I reviewed that era’s browsing patterns alongside modern game storefronts to figure out which parts earned their charm and which ones got in the way. The takeaway was that users want the excitement of browsing without the noise.",
    image: gl("game-library-research-1.svg"),
    images: [
      gl("game-library-research-2.svg"),
      gl("game-library-research-3.png"),
    ],
  },
  userFeedback: {
    heading: "Users thoughts on early designs.",
    body:
      "I shared early designs with a small group of users to test the direction. Most found the visual style memorable and fun, but the same issues kept coming up: unclear hierarchy, weak emphasis on featured titles, and inconsistent presentation across screen sizes.",
  },
  objective: {
    heading: "Create a playful discovery experience without sacrificing usability.",
    body:
      "The goal was to design a game browsing experience that felt like a nostalgic portal while still feeling clear, efficient, and accessible. Nostalgia would shape the look, while structure would guide how people use it.",
    painPointCards: [
      {
        title: "Visual overload",
        quote: "The retro styling energized the page, but dense layouts buried the content.",
      },
      {
        title: "Accessibility gaps",
        quote: "Contrast, spacing, and rhythm needed to be more consistent so text stayed readable against the retro color palette.",
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
    image: gl("game-library-summary-2.svg"),
  },
    process: {
    heading: "Refining the experience through iteration.",
    body:
      "I started with mood boarding and style tiles to lock in the visual language, then moved into a reusable component library. From there I refined layouts across responsive breakpoints and checked them against accessibility standards.",
    postBodyImages: [gl("game-library-process-1.svg")],
    featureCards: [
      { title: "Mood boarding", description: "Collected retro gaming and early web UI references to define the tone." },
      { title: "Style tiles", description: "Established the color palette, typography, and overall visual system." },
      { title: "Component library", description: "Built reusable patterns for browsing, filtering, and featured content." },
      { title: "Responsive testing", description: "Adjusted breakpoints for readability, touch targets, and layout consistency." },
    ],
    image: gl("game-library-process-2.svg"),
  },
  finalDesigns: {
    heading: "Bold color, structured browsing, and a clear hierarchy.",
    body:
      "The final direction keeps the retro personality in color, type, and layout rhythm, while a consistent grid and component system keep browsing clear.",
    image1: gl("game-library-final-design.svg"),
    additionalImages: [gl("game-library-summary-3.svg")],
  },
    reflections: {
    heading: "This project taught me that nostalgia works best as a layer on top of structure.",
    body: "The strongest decisions were the ones where the style helped people find games instead of competing with the content.",
    cards: [
      {
        title: "Structure first",
        description: "The retro styling only worked once hierarchy and spacing were solid.",
      },
      {
        title: "Style that supports navigation",
        description: "Every visual choice had to help users find a game faster.",
      },
      {
        title: "Usability testing",
        description: "With more time, I’d run task-based tests on finding a game by genre, measuring task success and time on task.",
      },
      {
        title: "Accessibility follow-up",
        description: "I’d run contrast checks across the full palette and test the layouts with users on real phones and tablets before calling the design final.",
      },
    ],
  },
  projectedImpact: {
    heading: "Here’s how it’s projected to impact the experience.",
    bodyParagraph1:
      "Game Library has not been released as a live product, and I haven’t run formal testing yet, so its impact is based on early user feedback and design principles rather than measured results. The design aims to help retro and indie game audiences find titles faster while keeping the playful personality that makes browsing enjoyable.",
    bodyParagraph2:
      "By pairing early web charm with modern UI clarity, the experience is built to feel memorable, useful, and approachable across device sizes. The next step is usability testing to validate the browsing flow and accessibility improvements.",
  },
};

const caseStudyModalDataMap: Record<string, CaseStudyModalData> = {
  "mind-scribe": mapMindScribeModalData(mindScribeModalData),
  "game-library": gameLibraryModalData,
};

export function getCaseStudyModalData(slug: string): CaseStudyModalData | null {
  return caseStudyModalDataMap[slug] ?? null;
}
