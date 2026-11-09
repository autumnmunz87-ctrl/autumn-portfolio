import { Suspense } from "react";
import HomeTabs from "../components/HomeTabs";
import Hero from "../components/Hero";
import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute -top-1/2 -right-1/4 h-[80vh] w-[80vh] rounded-full opacity-40 blur-[100px]"
          style={{
            background: "radial-gradient(circle, var(--accent-orange) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 h-[60vh] w-[60vh] rounded-full opacity-30 blur-[80px]"
          style={{
            background: "radial-gradient(circle, var(--accent-orange) 0%, transparent 70%)",
          }}
        />
      </div>

      <PageLayout>
        <div className="flex flex-col pb-20">
          <Hero />
          <Suspense fallback={null}>
            <HomeTabs />
          </Suspense>
        </div>
      </PageLayout>
    </div>
  );
}
