"use client";

import Image from "next/image";
import Link from "next/link";
import { getCaseStudyModalData, SECTION_NAV } from "@/lib/case-study-modal";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl mt-12 mb-12"
      style={{ aspectRatio: "728/496" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1200px) 90vw, 728px"
      />
    </div>
  );
}

type CaseStudyFullLayoutProps = {
  slug: string;
};

export default function CaseStudyFullLayout({ slug }: CaseStudyFullLayoutProps) {
  const data = getCaseStudyModalData(slug);
  const study = getCaseStudyBySlug(slug);
  const otherProjects = caseStudies.filter((s) => s.slug !== slug);

  if (!data || !study) return null;

  return (
    <div className="ms-modal-layout flex flex-col min-[809px]:flex-row min-[809px]:items-stretch min-[809px]:gap-12">
      {/* Left column: sticky sidebar – project-info, project-tags, section-navigation */}
      <aside className="ms-modal-sidebar flex flex-col shrink-0 min-[809px]:sticky min-[809px]:top-[100px] min-[809px]:w-64">
        <div className="ms-modal-container case-study-left flex flex-col">
          {/* GROUP 1: Project title and subtitle */}
          <div className="project-info">
            <h1 className="ms-modal-heading font-bold">{study.title}</h1>
            {study.subtitle && <p className="project-subtitle ms-modal-body text-sm">{study.subtitle}</p>}
          </div>
          {/* GROUP 2: Project tags */}
          {study.tags && study.tags.length > 0 && (
            <div className="project-tags flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="ms-modal-card-desc px-2 py-1 rounded-md"
                  style={{ backgroundColor: "rgba(48, 47, 43, 0.08)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {/* GROUP 3: Section navigation */}
          <div className="section-navigation">
            <nav aria-label="Section navigation" className="flex flex-col gap-2">
              {SECTION_NAV.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="ms-modal-card-desc text-left hover:text-primary-black transition-colors py-1"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      {/* Right column: scrollable content */}
      <div className="ms-modal-content flex-1 min-w-0">
        <div className="ms-modal-container">
          {/* 1. Cover Image */}
          <section className="ms-modal-section-gap">
            <div
              className="relative w-full overflow-hidden rounded-[24px]"
              style={{ aspectRatio: "1056/560" }}
            >
              <Image
                src={data.coverImage}
                alt={data.coverAlt}
                fill
                className="object-cover"
                sizes="(max-width: 392px) 90vw, (max-width: 808px) 90vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </section>

          {/* 2. Summary */}
          <section id="summary" className="ms-modal-section-gap flex flex-col scroll-mt-28">
            <p className="ms-modal-subheading">Summary</p>
            <h2 className="ms-modal-heading">{data.summary.heading}</h2>
            <p className="ms-modal-body">{data.summary.body}</p>
          </section>

          {/* 3. Meta Grid */}
          <section className="ms-modal-section-gap">
            <div className="grid grid-cols-1 min-[393px]:grid-cols-2 ms-modal-grid-gap-sm">
              <div className="flex flex-col">
                <p className="ms-modal-meta-label">Role</p>
                <p className="ms-modal-meta-value">{data.metaGrid.role}</p>
              </div>
              <div className="flex flex-col">
                <p className="ms-modal-meta-label">Skills</p>
                <p className="ms-modal-meta-value">{data.metaGrid.skills}</p>
              </div>
              <div className="flex flex-col">
                <p className="ms-modal-meta-label">Team</p>
                <p className="ms-modal-meta-value">{data.metaGrid.team}</p>
              </div>
              <div className="flex flex-col">
                <p className="ms-modal-meta-label">Timeline</p>
                <p className="ms-modal-meta-value">{data.metaGrid.timeline}</p>
              </div>
            </div>
          </section>

          {/* 4. Feature Cards */}
          {data.featureCards.length > 0 && (
            <section className="ms-modal-section-gap">
              <div className="grid grid-cols-1 min-[393px]:grid-cols-2 min-[809px]:grid-cols-3 ms-modal-grid-gap-sm">
                {data.featureCards.map((card, i) => (
                  <article
                    key={i}
                    className="flex flex-col rounded-xl p-6"
                    style={{ backgroundColor: "rgba(48, 47, 43, 0.06)" }}
                  >
                    <h3 className="ms-modal-card-title">{card.heading}</h3>
                    <p className="ms-modal-card-desc">{card.body}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* 5. Research */}
          {data.research.body && (
            <section id="research" className="ms-modal-section-gap flex flex-col scroll-mt-28">
              <p className="ms-modal-subheading">Research</p>
              <h2 className="ms-modal-heading">{data.research.heading}</h2>
              <p className="ms-modal-body">{data.research.body}</p>
              {data.research.image && (
                <SectionImage src={data.research.image} alt="Research" />
              )}
              {data.research.images?.map((src, i) => (
                <SectionImage key={i} src={src} alt={`Research ${i + 2}`} />
              ))}
            </section>
          )}

          {/* 6. User Feedback (optional) */}
          {data.userFeedback && (
            <section className="ms-modal-section-gap flex flex-col">
              <p className="ms-modal-subheading">User Feedback</p>
              <h2 className="ms-modal-heading">{data.userFeedback.heading}</h2>
              <p className="ms-modal-body">{data.userFeedback.body}</p>
            </section>
          )}

          {/* 7. Objective (optional) */}
          {data.objective && (
            <section className="ms-modal-section-gap flex flex-col">
              <p className="ms-modal-subheading">Objective</p>
              <h2 className="ms-modal-heading">{data.objective.heading}</h2>
              <p className="ms-modal-body">{data.objective.body}</p>
              {data.objective.painPointCards && data.objective.painPointCards.length > 0 && (
                <div className="grid grid-cols-1 min-[393px]:grid-cols-2 ms-modal-grid-gap-sm mt-6">
                  {data.objective.painPointCards.map((card, i) => (
                    <article
                      key={i}
                      className="flex flex-col rounded-xl p-6"
                      style={{ backgroundColor: "rgba(48, 47, 43, 0.06)" }}
                    >
                      <h3 className="ms-modal-card-title">{card.title}</h3>
                      <p className="ms-modal-card-desc">{card.quote}</p>
                    </article>
                  ))}
                </div>
              )}
              {data.objective.image && (
                <SectionImage src={data.objective.image} alt="Objective" />
              )}
            </section>
          )}

          {/* 8. Process */}
          <section id="process" className="ms-modal-section-gap flex flex-col scroll-mt-28">
            <p className="ms-modal-subheading">Process</p>
            <h2 className="ms-modal-heading">{data.process.heading}</h2>
            <p className="ms-modal-body">{data.process.body}</p>
            {data.process.postBodyImages?.map((src, i) => (
              <SectionImage key={i} src={src} alt={`Process ${i + 1}`} />
            ))}
            {data.process.featureCards && data.process.featureCards.length > 0 && (
              <div className="grid grid-cols-1 min-[393px]:grid-cols-2 min-[809px]:grid-cols-4 ms-modal-grid-gap-sm mt-6">
                {data.process.featureCards.map((card, i) => (
                  <article
                    key={i}
                    className="flex flex-col rounded-xl p-6"
                    style={{ backgroundColor: "rgba(48, 47, 43, 0.06)" }}
                  >
                    <h3 className="ms-modal-card-title">{card.title}</h3>
                    <p className="ms-modal-card-desc">{card.description}</p>
                  </article>
                ))}
              </div>
            )}
            {data.process.ideationImage && (
              <SectionImage src={data.process.ideationImage} alt="Ideation" />
            )}
            {data.process.designProcessImage && (
              <SectionImage src={data.process.designProcessImage} alt="Design Process" />
            )}
            {data.process.image && !data.process.ideationImage && (
              <SectionImage src={data.process.image} alt="Process" />
            )}
          </section>

          {/* 9. Final Designs */}
          <section id="final-designs" className="ms-modal-section-gap flex flex-col scroll-mt-28">
            <p className="ms-modal-subheading">Final Designs</p>
            <h2 className="ms-modal-heading">{data.finalDesigns.heading}</h2>
            <p className="ms-modal-body">{data.finalDesigns.body}</p>
            <SectionImage src={data.finalDesigns.image1} alt="Final Design" />
            {data.finalDesigns.additionalImages?.map((src, i) => (
              <SectionImage key={i} src={src} alt={`Design ${i + 2}`} />
            ))}
          </section>

          {/* 10. Reflections */}
          <section id="reflections" className="ms-modal-section-gap flex flex-col scroll-mt-28">
            <p className="ms-modal-subheading">Reflections</p>
            <h2 className="ms-modal-heading">{data.reflections.heading}</h2>
            <p className="ms-modal-body">{data.reflections.body}</p>
            {data.reflections.finalDesign2Image && (
              <SectionImage src={data.reflections.finalDesign2Image} alt="Design" />
            )}
            {data.reflections.userReflectionsImage && (
              <SectionImage src={data.reflections.userReflectionsImage} alt="Reflections" />
            )}
          </section>

          {/* 11. Projected Impact */}
          <section id="projected-impact" className="ms-modal-section-gap flex flex-col scroll-mt-28">
            <p className="ms-modal-subheading">Projected Impact</p>
            <h2 className="ms-modal-heading">{data.projectedImpact.heading}</h2>
            <p className="ms-modal-body mb-4">{data.projectedImpact.bodyParagraph1}</p>
            {data.projectedImpact.bodyParagraph2 && (
              <p className="ms-modal-body">{data.projectedImpact.bodyParagraph2}</p>
            )}
          </section>

          {/* 12. My Other Projects */}
          {otherProjects.length > 0 && (
            <section className="ms-modal-section-gap flex flex-col">
              <p className="ms-modal-subheading mb-6">My Other Projects</p>
              <div className="grid grid-cols-1 min-[809px]:grid-cols-2 ms-modal-grid-gap-sm">
                {otherProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={project.href}
                    className="flex flex-col gap-4 no-underline text-inherit transition-opacity hover:opacity-85"
                  >
                    <div
                      className="relative w-full overflow-hidden rounded-xl"
                      style={{
                        aspectRatio: "4/3",
                        backgroundColor: "rgba(48, 47, 43, 0.06)",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 808px) 90vw, 50vw"
                      />
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="ms-modal-card-title">{project.title}</span>
                      {project.duration && (
                        <span className="ms-modal-card-desc text-sm">
                          {project.duration}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="h-24" aria-hidden />
        </div>
      </div>
    </div>
  );
}
