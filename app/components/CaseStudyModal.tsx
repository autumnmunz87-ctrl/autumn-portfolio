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
    if (!study) return;

    const originalOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [study, handleEscape]);

  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      aria-modal
      role="dialog"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 z-0 bg-primary-black/60 backdrop-blur-sm"
        aria-hidden
      />

      <div
        className="absolute left-1/2 top-1/2 z-10 w-[85vw] max-w-[1600px] max-h-[calc(100vh-3rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[24px] bg-primary-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute left-4 top-4 z-20 flex shrink-0 items-center gap-2">
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
        </div>

        <div className="absolute right-4 top-4 z-20 flex shrink-0 items-center gap-2">
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

        <div className="max-h-[calc(100vh-3rem)] overflow-y-auto scroll-smooth pt-20">
          <CaseStudyFullLayout slug={study.slug} />
        </div>
      </div>
    </div>
  );
}
