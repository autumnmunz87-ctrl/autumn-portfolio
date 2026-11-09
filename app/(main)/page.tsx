import Link from "next/link";
import CaseStudyGrid from "../components/CaseStudyGrid";
import Hero from "../components/Hero";
import PageLayout from "../components/PageLayout";
import { caseStudies } from "@/lib/case-studies";

const tabs = [
  { href: "/#work", label: "Work", active: true },
  { href: "/about", label: "About", active: false },
  { href: "/resume", label: "Resume", active: false },
];

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col pb-20">
        <Hero />

        <div className="w-full">
          <div className="flex gap-3 border-b border-primary-black/10 pb-3">
            {tabs.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                className={
                  tab.active
                    ? "rounded-full bg-[rgba(48,47,43,0.06)] px-4 py-2 text-sm text-primary-black"
                    : "rounded-full px-4 py-2 text-sm text-foreground-muted transition-colors hover:text-primary-black"
                }
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>

        <section id="work" className="selected-work mt-8 w-full pb-24">
          <CaseStudyGrid caseStudies={caseStudies} />
        </section>
      </div>
    </PageLayout>
  );
}
