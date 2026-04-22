"use client";

import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { caseStudies } from "@/lib/case-studies";
import { sortPathsByImageFilenameNumber } from "@/lib/sort-case-study-images";

const SECTION_SUBTITLE_FALLBACK =
  "Designing new features to integrate innovation and improve user engagement and accessibility.";

/* Sections in order: Context, Challenge, Solution, Process */
const SECTIONS = [
  { id: "context", label: "Context", contentKey: "context" as const, headingKey: "contextHeading" as const },
  { id: "challenge", label: "Challenge", contentKey: "challenge" as const, headingKey: "challengeHeading" as const },
  { id: "solution", label: "Solution", contentKey: "solution" as const, headingKey: "solutionHeading" as const },
  { id: "process", label: "Process", contentKey: "process" as const, headingKey: "processHeading" as const },
] as const;

function Paragraphs({ content }: { content: string }) {
  const paragraphs = content.split(/\n\n+/).filter(Boolean);
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-4 last:mb-0">
          {p}
        </p>
      ))}
    </>
  );
}

const META_ITEMS = [
  { key: "role" as const, label: "Role" },
  { key: "duration" as const, label: "Timeline" },
  { key: "tools" as const, label: "Tools" },
] as const;

type CaseStudyLayoutProps = {
  study: CaseStudy;
  /** When true, enables scrolling for modal context */
  scrollable?: boolean;
  /** Optional id for the main title (e.g. modal-title for accessibility) */
  titleId?: string;
};

export default function CaseStudyLayout({ study, scrollable = false, titleId }: CaseStudyLayoutProps) {
  const otherProjects = caseStudies.filter((s) => s.slug !== study.slug);

  return (
    <div className={`case-study-page ${scrollable ? "min-h-0 flex-1 overflow-y-auto" : ""}`}>
      {/* Section 1: Hero Image Block */}
      <section className="case-study-hero-image-block">
        <div className="case-study-hero-image-block__image">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
            sizes="(max-width: 392px) 352px, (max-width: 808px) 728px, (max-width: 1200px) 1024px, 1600px"
          />
        </div>
        <div className="case-study-hero-image-block__spacer" aria-hidden />
      </section>

      {/* Section 2: Project Introduction Grid */}
      <section className="case-study-intro-grid">
        <div className="case-study-intro-grid__meta">
          <div>
            <h1 id={titleId} className="hero-title">
              {study.title}
            </h1>
          </div>
          {META_ITEMS.map(({ key, label }) => {
            const value = study[key];
            if (!value) return null;
            return (
              <div key={key} className="case-study-intro-grid__meta-item">
                <p className="case-study-intro-grid__meta-item-label">{label}</p>
                <p className="case-study-intro-grid__meta-item-value">{value}</p>
              </div>
            );
          })}
        </div>
        <div className="case-study-intro-grid__description">
          <h2 className="case-study-intro-grid__description-heading">
            {study.subtitle ?? "Overview"}
          </h2>
          {(study.intro ?? study.description) && (
            <p className="text-body-regular leading-relaxed text-foreground-muted">
              {study.intro ?? study.description}
            </p>
          )}
        </div>
      </section>

      {/* Design Artifacts Grid */}
      {study.designArtifacts && study.designArtifacts.length > 0 && (
        <section className="case-study-artifacts-grid">
          {sortPathsByImageFilenameNumber([...study.designArtifacts]).map((src, i) => (
            <div key={i} className="case-study-artifacts-grid__item">
              <Image
                src={src}
                alt={`${study.title} - Design artifact ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 808px) 100vw, 50vw"
              />
            </div>
          ))}
        </section>
      )}

      {/* Highlighted Data Block */}
      {study.dataBlock && (
        <section className="case-study-data-block">
          <div className="case-study-data-block__grid">
            <div className="case-study-data-block__cell">
              <Image
                src={study.dataBlock.uiImage}
                alt={`${study.title} - UI preview`}
                fill
                className="object-cover"
                sizes="(max-width: 808px) 100vw, 50vw"
              />
            </div>
            <div className="case-study-data-block__cell">
              <Image
                src={study.dataBlock.chartImage}
                alt={`${study.title} - Chart`}
                fill
                className="object-cover"
                sizes="(max-width: 808px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      )}

      {/* Context, Challenge, Solution, Process */}
      <div className="case-study-content">
        {SECTIONS.map((section) => {
          const content = study[section.contentKey];
          if (typeof content !== "string" || !content) return null;

          const subtitle =
            (study[section.headingKey] as string | undefined) || SECTION_SUBTITLE_FALLBACK;

          return (
            <section key={section.id} id={section.id} className="case-study-section">
              <h3 className="case-study-section__label case-study-section-label">
                {section.label}
              </h3>
              <p className="case-study-section__subtitle text-body-regular text-foreground-muted">
                {subtitle}
              </p>
              <div className="case-study-section__body text-body-regular leading-relaxed text-foreground-muted text-left">
                <Paragraphs content={content} />
              </div>
            </section>
          );
        })}
      </div>

      {!study.context && !study.challenge && !study.solution && !study.process && !study.impact && (
        <p className="text-body-regular text-left text-foreground-muted">
          Case study content goes here.
        </p>
      )}

      {/* Projected Impact */}
      {study.impact && (
        <section className="case-study-final-impact case-study-section">
          <h3 className="case-study-section__label case-study-section-label">
            Projected Impact
          </h3>
          <p className="case-study-section__subtitle text-body-regular text-foreground-muted">
            {study.impactHeading ?? SECTION_SUBTITLE_FALLBACK}
          </p>
          <div className="case-study-final-impact__body case-study-section__body text-body-regular leading-relaxed text-foreground-muted text-left">
            <Paragraphs content={study.impact} />
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="case-study-other-projects">
          <h3 className="case-study-other-projects__heading case-study-section-label">
            My Other Projects
          </h3>
          <div className="case-study-other-projects__grid">
            {otherProjects.map((project) => (
              <Link
                key={project.slug}
                href={project.href}
                className="case-study-other-projects__item"
              >
                <div className="case-study-other-projects__block">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 808px) 100vw, 50vw"
                  />
                </div>
                <p className="case-study-other-projects__title-text">{project.title}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
