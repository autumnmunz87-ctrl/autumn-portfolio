import { Suspense } from "react";
import HomeTabs from "../components/HomeTabs";
import Hero from "../components/Hero";
import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col pb-20">
        <Hero />
        <Suspense fallback={null}>
          <HomeTabs />
        </Suspense>
      </div>
    </PageLayout>
  );
}
