/**
 * Mind Scribe case study modal – full structure and content.
 * Used when rendering the Mind Scribe popup with the dedicated layout.
 */
export type MindScribeModalData = {
  coverImage: string;
  summary: {
    heading: string;
    body: string;
  };
  metaGrid: {
    role: string;
    skills: string;
    team: string;
    timeline: string;
  };
  featureCards: { heading: string; body: string }[];
  marketResearch: {
    heading: string;
    body: string;
    image: string;
  };
  userFeedback: {
    heading: string;
    body: string;
  };
  objective: {
    heading: string;
    body: string;
    painPointCards: { title: string; quote: string }[];
    image: string;
  };
  ideationProcess: {
    heading: string;
    body: string;
    featureCards: { title: string; description: string }[];
    ideationImage: string;
    designProcessImage: string;
  };
  finalDesigns: {
    heading: string;
    body: string;
    image1: string;
  };
  reflections: {
    heading: string;
    body: string;
    finalDesign2Image: string;
    userReflectionsImage: string;
  };
  projectedImpact: {
    heading: string;
    bodyParagraph1: string;
    bodyParagraph2: string;
  };
};

const MIND_SCRIBE_IMAGE_DIR = "images mind scribe";

function mindScribeImageFile(filename: string): string {
  return "/" + [MIND_SCRIBE_IMAGE_DIR, filename].map(encodeURIComponent).join("/");
}

export const mindScribeModalData: MindScribeModalData = {
  coverImage: "/mind-scribe-hero.png",
  summary: {
    heading:
      "Designing new features to integrate innovation and improve user engagement and accessibility.",
    body:
      "Journaling and wellness platform designed to inspire daily reflection and emotional well-being. This case study explores the design process from research to high-fidelity prototypes.",
  },
  metaGrid: {
    role: "UX Designer",
    skills: "Figma, Miro",
    team: "Solo",
    timeline: "3 weeks",
  },
  featureCards: [
    {
      heading: "Context",
      body: "A journaling platform designed to inspire daily reflection and emotional well-being.",
    },
    {
      heading: "Challenge",
      body: "Users faced cluttered interfaces and unclear flows that discouraged consistent use.",
    },
    {
      heading: "Solution",
      body: "Redesigned flows with clearer hierarchy, reduced cognitive load, and intuitive prompts.",
    },
  ],
  marketResearch: {
    heading: "How can I add value?",
    body:
      "I identified common pain points that were echoed across competitor apps. Users frequently voiced frustrations with unattractive, unresponsive user interfaces, lack of customization, and intrusive ads. Additionally, many apps required expensive subscriptions for features that should have been included by default. A key takeaway was the demand for a balance between a visually appealing interface and user-friendly features.",
    image: mindScribeImageFile("mind scribe user feedback.png.png"),
  },
  userFeedback: {
    heading:
      "I surveyed a concentrated group of users to better understand their journaling habits and preferences.",
    body:
      "While the majority of respondents preferred traditional pen-and-paper journaling, many expressed interest in an app that could provide them with thoughtful prompts, track their wellness journey, and store their entries securely. The most frequent complaints included a lack of dark mode, aesthetically unpleasing interfaces, excessive ads, and the risk of losing important data. Users also indicated dissatisfaction with subscription pricing models that did not justify the lack of compelling features.",
  },
  objective: {
    heading: "This created an opportunity for me to create a captivating and intuitive app.",
    body:
      "The objective was to design an app that offers a seamless user experience, with clear navigation and an appealing design. Mind Scribe is meant to guide users through their wellness journey by presenting thoughtful prompts, journaling features, and relevant resources. By focusing on user-centered design and thorough competitor analysis, I aimed to create a product that would stand out in a saturated market.",
    painPointCards: [
      { title: "Interface friction", quote: "Unattractive, unresponsive user interfaces" },
      { title: "Lack of customization", quote: "No dark mode, aesthetically unpleasing interfaces" },
      { title: "Monetization issues", quote: "Intrusive ads, expensive subscriptions for basic features" },
      { title: "Data security concerns", quote: "Risk of losing important journal entries" },
    ],
    image: mindScribeImageFile("mind scribe objective.png.png"),
  },
  ideationProcess: {
    heading:
      "Iteration and revisions to create a captivating app that resonates with users.",
    body:
      "When I presented the final design to users, they expressed genuine enthusiasm and indicated they would be willing to pay for a subscription for this app, with majority of users expressing their preference of Mind Scribe over competitor apps. Many participants encouraged me to develop the app into a fully functioning product rather than leaving it as a design concept. This positive response confirmed that the app effectively addressed users' needs and created a meaningful and successful design that resonates with users.",
    featureCards: [
      { title: "Research", description: "Competitor analysis and pain point identification" },
      { title: "Personas", description: "User flows and journey mapping" },
      { title: "Wireframes", description: "Low and high-fidelity prototypes" },
      { title: "Testing", description: "Usability testing and iteration" },
    ],
    ideationImage: mindScribeImageFile("mind scribe ideation+design process 1.png.png"),
    designProcessImage: mindScribeImageFile("mind scribe ideation+design process 2.png.png"),
  },
  finalDesigns: {
    heading:
      "Seamless interface, clear navigation, customizable themes, and thoughtful journaling prompts.",
    body:
      "When I presented the final design to users, they expressed genuine enthusiasm and indicated they would be willing to pay for a subscription for this app, with majority of users expressing their preference of Mind Scribe over competitor apps. Many participants encouraged me to develop the app into a fully functioning product rather than leaving it as a design concept. This positive response confirmed that the app effectively addressed users' needs and created a meaningful and successful design that resonates with users.",
    image1: mindScribeImageFile("mind scribe final design.png.png"),
  },
  reflections: {
    heading: "This experience strengthened my design and leadership abilities.",
    body:
      "Although the project spanned five months, it was a great learning experience and my first time designing an app. I learned how to interpret user feedback and design a solution with intention and clarity. Moving forward, I'd like to spend more time in the research phase, conducting additional surveys and interviews to further refine the app's features and ensure that it solves the issues I set out to address. Additionally, an overwhelming amount of users expressed their preference for pen-and-paper journaling. In revisiting this project, I would like to add a camera feature for scanning paper journals to store and keep track of physical entries. This project has equipped me with valuable skills and insights that I'm eager to apply to future designs. Ultimately, I hope to revisit Mind Scribe in the future, transforming it from a design concept into a fully developed product that can truly benefit users.",
    finalDesign2Image: mindScribeImageFile("mind scribe reflections 1.png.png"),
    userReflectionsImage: mindScribeImageFile("mind scribe reflections 2.png.png"),
  },
  projectedImpact: {
    heading: "Here's how it's projected to impact the market.",
    bodyParagraph1:
      "While Mind Scribe has not yet been released as a live product, its projected impact is strongly supported by user research and prototype testing. Survey results indicated that 67% of participants reported they would be willing to pay a subscription between $1–$5 per month after interacting with the prototype. Notably, many of these users also stated that they do not currently use a journaling app, citing dissatisfaction with existing options and a reluctance to pay for subscriptions in the current market.",
    bodyParagraph2:
      "These findings suggest that Mind Scribe successfully addresses key usability and experience gaps present in many journaling apps today. By prioritizing clarity, accessibility, and user-centered features, the design demonstrates strong potential to convert non-users into paying customers. If launched, Mind Scribe is expected to improve perceived value, increase adoption among previously disengaged users, and support sustainable subscription growth within a competitive market.",
  },
};
