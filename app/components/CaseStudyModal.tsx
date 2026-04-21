"use client";

import Link from "next/link";
import { useEffect, useCallback } from "react";
import type { CaseStudy } from "@/lib/case-studies";
import CaseStudyFullLayout from "./CaseStudyFullLayout";

type CaseStudyModalProps = {
  study: CaseStudy | null;
  onClose: () => void;
};

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (study) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [study, handleEscape]);

  if (!study) return null;

  return (
    <div
      className="fixed left-0 top-0 z-50 overflow-y-auto"
      style={{ width: "100vw", height: "100vh" }}
      aria-modal
      role="dialog"
    >
      {/* Backdrop: fixed, covers viewport, click to close */}
      <div
        className="fixed inset-0 z-0 bg-primary-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal content wrapper – two-column sticky layout for all case studies */}
      <div
        className="relative z-10 mx-auto my-8 flex w-[90%] max-w-[1200px] min-[1201px]:max-w-[1440px] max-h-[calc(100vh-4rem)] flex-col rounded-lg bg-primary-white py-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-right buttons */}
        <div className="absolute right-4 top-4 z-20 flex shrink-0 items-center gap-2">
          <Link
            href={`/work/${study.slug}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-white/95 text-foreground-muted shadow-sm transition-colors hover:bg-primary-white hover:text-foreground"
            aria-label="Open full page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
              <path d="M3 16v3a2 2 0 0 0 2 2h3" />
              <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
            </svg>
          </Link>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-white/95 text-foreground-muted shadow-sm transition-colors hover:bg-primary-white hover:text-foreground"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto scroll-smooth pt-16">
          <CaseStudyFullLayout slug={study.slug} />
        </div>
      </div>
    </div>
  );
}
