"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const sectionNavItems = [
  { id: "hi", label: "Hello" },
  { id: "values", label: "Values" },
  { id: "enjoys", label: "Enjoys" },
] as const;

const photoPaths = {
  hi: "/about-portrait.jpg",
} as const;

const valueCards = [
  { title: "Curiosity", body: "I love learning how things work, and I teach myself what I don't know yet.", icon: "/icons/question-icon.svg" },
  { title: "Thoughtful craft", body: "I take the time to get the details right, so what I make is clear, accurate, and easy to use.", icon: "/icons/bulb-icon.svg" },
  { title: "People first", body: "I put people first, whether I'm serving a client, welcoming a visitor, or designing for someone's needs.", icon: "/icons/face-icon.svg" },
];

const enjoysItems = [
  "reading",
  "my cat",
  "discovering new music",
  "poke bowls",
  "open-world games",
  "maple cinnamon lattes",
  "binging a good tv show",
];
const valueCardBackgrounds = [
  "rgba(255, 136, 81, 0.20)",
  "rgba(255, 136, 81, 0.30)",
  "rgba(255, 136, 81, 0.40)",
] as const;

export default function AboutTabContent() {
  const [activeSection, setActiveSection] = useState("hi");

  useEffect(() => {
    const elements = sectionNavItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "-20% 0px -35% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="about-page-content relative text-foreground">
      <div className="page-shell about-page-shell">
        <div className="about-layout-grid grid grid-cols-1 gap-y-12 pt-10 lg:grid-cols-12 lg:gap-x-[48px] lg:pt-12">
          <aside className="hidden lg:col-span-2 lg:block">
            <div className="sticky top-[120px] flex flex-col gap-2">
              {sectionNavItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-[16px] leading-6 transition-opacity duration-200 ${
                      isActive ? "text-primary-black opacity-100" : "text-primary-black opacity-60"
                    }`}
                    aria-label={`Jump to ${item.label}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-10">
            <section id="hi" className="scroll-mt-28">
              <div className="about-intro-grid grid min-w-0 gap-8 lg:grid-cols-2 lg:items-center">
                <div className="about-portrait relative w-full max-w-[280px] justify-self-start overflow-hidden rounded-[24px] bg-primary-black/10 min-[393px]:max-w-[400px] min-[809px]:max-w-[544px]" style={{ aspectRatio: "544/560" }}>
                  <Image
                    src={photoPaths.hi}
                    alt="Autumn Munz portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 392px) 280px, (max-width: 808px) 400px, 544px"
                  />
                </div>

                <div className="about-intro-copy flex min-w-0 flex-col justify-center">
                  <h1 className="hero-title mb-6 min-[809px]:text-[24px] min-[1201px]:text-[24px]">
                    I&apos;m Autumn, I like to design things that bring people closer.
                  </h1>
                  <p className="about-bio leading-relaxed">
                    Before design, I was on a Pre-Medical Biology path, where I built a foundation in research, analytical thinking, and data interpretation. I bring that same structure to user research today. I design surveys, analyze the results, and turn what people need into clear, usable designs. I&apos;m currently pursuing a Bachelor&apos;s degree in Data Analytics.
                  </p>
                  <p className="about-bio leading-relaxed mt-6">
                    When I&apos;m not designing, you&apos;ll probably find me reading with a cup of coffee in hand, or pouring endless hours into my newest gaming hyperfixation.
                  </p>
                </div>
              </div>
            </section>

            <section id="enjoys" className="mt-[48px] scroll-mt-28">
              <p className="mb-4 text-[14px] font-normal uppercase tracking-[0.04em] text-primary-black/60">
                ENJOYS
              </p>
              <div className="flex flex-wrap gap-3">
                {enjoysItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex cursor-default items-center gap-[10px] rounded-full border-[1.5px] border-[#FF8851] bg-[#FFFFFF] py-2 pl-4 pr-[18px] text-[18px] leading-7 text-[#302F2B]"
                  >
                    <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#FF8851]" />
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section id="values" className="mt-[48px] scroll-mt-28">
              <p className="mb-6 text-[14px] font-normal uppercase tracking-[0.04em] text-primary-black/60">
                MY CORE VALUES
              </p>
              <div className="about-value-grid grid grid-cols-1 gap-6 min-[769px]:grid-cols-3">
                {valueCards.map((card, index) => (
                  <article
                    key={card.title}
                    className="rounded-[16px] p-6"
                    style={{ backgroundColor: valueCardBackgrounds[index] }}
                    aria-label={card.title}
                  >
                    <div className="mb-4">
                      <span
                        aria-hidden="true"
                        className="block h-7 w-7 bg-[#D9561A]"
                        style={{
                          maskImage: `url('${card.icon}')`,
                          maskRepeat: "no-repeat",
                          maskPosition: "center",
                          maskSize: "contain",
                          WebkitMaskImage: `url('${card.icon}')`,
                          WebkitMaskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                          WebkitMaskSize: "contain",
                        }}
                      />
                    </div>
                    <div className="text-primary-black">
                      <p className="mb-2 text-[20px] font-medium leading-7">{card.title}</p>
                      <p className="card-title text-[16px] leading-6 text-primary-black">{card.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
