"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import AboutTabContent from "./AboutTabContent";
import CaseStudyGrid from "./CaseStudyGrid";
import { caseStudies } from "@/lib/case-studies";

const tabs = [
  { key: "work", href: "/?tab=work", label: "Work" },
  { key: "about", href: "/?tab=about", label: "About" },
  { key: "resume", href: "/autumn-munz-resume.pdf", label: "Resume" },
] as const;

export default function HomeTabs() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") === "about" ? "about" : "work";

  return (
    <>
      <div className="w-full">
        <div className="flex gap-3 border-b border-primary-black/10 pb-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            const tabClasses = isActive
              ? "rounded-full bg-[rgba(48,47,43,0.06)] px-4 py-2 text-sm text-primary-black"
              : "rounded-full px-4 py-2 text-sm text-foreground-muted transition-colors hover:text-primary-black";

            if (tab.key === "resume") {
              return (
                <a
                  key={tab.key}
                  href={tab.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tabClasses}
                >
                  {tab.label}
                </a>
              );
            }

            return (
              <Link
                key={tab.key}
                href={tab.href}
                scroll={false}
                className={tabClasses}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-8 w-full pb-24">
        {activeTab === "about" ? (
          <AboutTabContent />
        ) : (
          <section id="work" className="selected-work w-full">
            <CaseStudyGrid caseStudies={caseStudies} />
          </section>
        )}
      </div>
    </>
  );
}
