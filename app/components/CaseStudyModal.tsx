"use client";

import Image from "next/image";
import { useEffect, useCallback, useState } from "react";
import type { CaseStudy } from "@/lib/case-studies";
import CaseStudyFullLayout from "./CaseStudyFullLayout";

type CaseStudyModalProps = {
  study: CaseStudy | null;
  onClose: () => void;
};

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!study) return;

    const originalOverflow = window.document.body.style.overflow;
    const originalClass = window.document.body.classList.contains("case-study-open");
    window.document.body.style.overflow = "hidden";
    window.document.body.classList.add("case-study-open");
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.document.body.style.overflow = originalOverflow;
      if (!originalClass) {
        window.document.body.classList.remove("case-study-open");
      }
      window.removeEventListener("keydown", handleEscape);
    };
  }, [study, handleEscape]);

  useEffect(() => {
    if (!study) {
      setIsFullScreen(false);
    }
  }, [study]);

  if (!study) return null;

  const sheetClasses = isFullScreen
    ? "fixed inset-0 z-10 w-full h-full max-w-none max-h-none -translate-x-0 -translate-y-0 rounded-none"
    : "absolute left-1/2 top-1/2 z-10 w-[85vw] max-w-[1600px] max-h-[calc(100vh-3rem)] -translate-x-1/2 -translate-y-1/2 overflow-clip rounded-[24px]";

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
        className={`${sheetClasses} bg-primary-white shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute left-4 top-4 z-20 flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setIsFullScreen((prev) => !prev)}
            aria-label={isFullScreen ? "Return to popup view" : "Expand to full screen"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-black/10 bg-primary-white/95 text-foreground-muted shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-white hover:text-foreground"
          >
            <Image
              src={isFullScreen ? "/icons/reverse%20expand%20arrow.png" : "/icons/expand%20arrow.png"}
              alt={isFullScreen ? "Collapse view" : "Expand view"}
              width={18}
              height={18}
            />
          </button>
        </div>

        <div className="absolute right-4 top-4 z-20 flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-black/10 bg-primary-white/95 text-foreground-muted shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-white hover:text-foreground"
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

        <div className={`${isFullScreen ? "h-full case-study-fullscreen-scroll" : "max-h-[calc(100vh-3rem)]"} overflow-y-auto scroll-smooth`}>
          <CaseStudyFullLayout slug={study.slug} />
        </div>
      </div>
    </div>
  );
}
