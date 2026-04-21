import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import CaseStudyFullLayout from "@/app/components/CaseStudyFullLayout";
import PageLayout from "@/app/components/PageLayout";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <PageLayout>
        <div className="container flex flex-1 flex-col py-8 min-[809px]:py-10">
          <header className="mb-8 shrink-0 border-b border-primary-black-secondary pb-4">
            <Link
              href="/#work"
              className="text-body-regular inline-flex items-center gap-2 text-foreground-muted transition-colors hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to work
            </Link>
          </header>
          <main>
            <CaseStudyFullLayout slug={slug} />
          </main>
        </div>
      </PageLayout>
    </div>
  );
}
