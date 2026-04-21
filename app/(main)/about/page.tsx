import Image from "next/image";
import PageLayout from "@/app/components/PageLayout";
import SocialButtons from "@/app/components/SocialButtons";

export const metadata = {
  title: "About | Autumn Munz",
  description: "Get to know Autumn — UX designer passionate about bringing people closer through design.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-primary-white text-foreground">
      {/* Background aura */}
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
      {/* Section 1: Text left, Picture right */}
      <section className="py-20 min-[809px]:py-28">
        <div className="grid gap-14 min-[809px]:grid-cols-2 min-[809px]:items-center min-[809px]:gap-20">
          <div>
            <h1 className="hero-title mb-6">
              I&apos;m Autumn, I like to design things that bring people closer.
            </h1>
            <p className="about-bio leading-relaxed">
              I&apos;m a self-taught designer with a passion for interface design and accessibility. I began my UX journey in 2024, and it quickly became a passion that I&apos;ve poured myself into. Prior to learning design, I was pursuing a career in Pre-Medical Biology with a fixation on anesthesiology. During that time, I gained a strong foundation in research, analytical thinking, and data interpretation. These are skills that now help me approach user research and design problems with structure and precision. As someone who has spent multiple years working as a barista in specialty coffee, I&apos;ve learned how to communicate effectively, collaborate as part of a team, and create positive experiences for clients. Working closely with both customers and team members has taught me the importance of empathy, adaptability, and collaboration, all of which I consider in my design process. When I&apos;m not designing, you&apos;ll probably find me reading with a cup of coffee in hand, or pouring endless hours into my newest gaming hyperfixation.
            </p>
          </div>
          <div className="relative w-full max-w-[280px] overflow-hidden rounded-[16px] bg-primary-black/10 min-[393px]:max-w-[400px] min-[809px]:max-w-[544px]" style={{ aspectRatio: "544/560" }}>
            <Image
              src="/about-portrait.png"
              alt="Autumn Munz portrait"
              fill
              className="object-cover"
              sizes="(max-width: 392px) 280px, (max-width: 808px) 400px, 544px"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Picture left, Text right */}
      <section className="pb-28">
        <div className="grid gap-14 min-[809px]:grid-cols-2 min-[809px]:items-center min-[809px]:gap-20">
          <div className="order-2 min-[809px]:order-1">
            <div className="relative w-full max-w-[280px] overflow-hidden rounded-[16px] bg-primary-black/10 min-[393px]:max-w-[400px] min-[809px]:max-w-[544px]" style={{ aspectRatio: "544/560" }}>
              <Image
                src="/about-outdoor.png"
                alt="Autumn Munz outdoors"
                fill
                className="object-cover"
                sizes="(max-width: 392px) 280px, (max-width: 808px) 400px, 544px"
              />
            </div>
          </div>
          <div className="order-1 min-[809px]:order-2">
            <h2 className="section-title mb-6">
              Get to know me
            </h2>
            <p className="text-body-regular mb-8 leading-relaxed">
              Have a project in mind? Or just want to chat about design, gaming, or good coffee? I&apos;d love to hear from you.
            </p>
            <SocialButtons />
          </div>
        </div>
      </section>
      </PageLayout>
    </div>
  );
}

