import CaseStudyGrid from "../components/CaseStudyGrid";
import Hero from "../components/Hero";
import PageLayout from "../components/PageLayout";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col pb-20">
        <Hero />
        <section id="work" className="selected-work pb-24">
        <h2 className="section-title mb-12">
          Selected work
        </h2>
        <CaseStudyGrid caseStudies={caseStudies} />
      </section>
      </div>
    </PageLayout>
  );
}
