"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SocialButtons from "@/app/components/SocialButtons";

const sectionNavItems = [
  { id: "hi", label: "Hi!" },
  { id: "values", label: "Values" },
  { id: "enjoys", label: "Enjoys" },
  { id: "contact", label: "Contact" },
] as const;

const photoPaths = {
  hi: "/about-portrait.png",
  contact: "/about-outdoor.png",
} as const;

const valueCards = [
  { title: "Curiosity", body: "I love learning how things work, and I teach myself what I don't know yet." },
  { title: "Thoughtful craft", body: "I take the time to get the details right, so what I make is clear, accurate, and easy to use." },
  { title: "People first", body: "I put people first, whether I'm serving a client, welcoming a visitor, or designing for someone's needs." },
];

const enjoysColumns = [
  ["reading", "my cat"],
  ["cocteau twins", "poke bowls"],
  ["MMORPG games", "maple cinnamon lattes"],
  ["binging a good tv show"],
];

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
    <div className="relative min-h-screen text-foreground">
      <div className="page-shell">
        <div className="grid grid-cols-12 gap-x-[48px] gap-y-12 pb-12 pt-10 lg:pt-12">
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

          <div className="col-span-12 lg:col-span-10">
            <section id="hi" className="scroll-mt-28">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="relative w-full max-w-[280px] justify-self-start overflow-hidden rounded-[24px] bg-primary-black/10 min-[393px]:max-w-[400px] min-[809px]:max-w-[544px]" style={{ aspectRatio: "544/560" }}>
                  <Image
                    src={photoPaths.hi}
                    alt="Autumn Munz portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 392px) 280px, (max-width: 808px) 400px, 544px"
                  />
                </div>

                <div className="flex flex-col justify-center">
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

            <section id="values" className="mt-[48px] scroll-mt-28">
              <p className="mb-6 text-[14px] font-normal uppercase tracking-[0.04em] text-primary-black/60">
                MY CORE VALUES
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {valueCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[16px] bg-[var(--card-bg)] p-6"
                    aria-label={card.title}
                  >
                    <div className="mb-4 text-[20px] leading-none text-primary-black">✱</div>
                    <div className="text-primary-black">
                      <p className="mb-2 text-[20px] font-medium leading-7">{card.title}</p>
                      <p className="card-title text-[16px] leading-6 text-primary-black">{card.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="enjoys" className="mt-[48px] scroll-mt-28">
              <p className="mb-6 text-[14px] font-normal uppercase tracking-[0.04em] text-primary-black/60">
                ENJOYS
              </p>
              <div className="rounded-[16px] bg-[var(--card-bg)] p-6 md:p-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                  {enjoysColumns.map((group, index) => (
                    <div key={index} className="flex flex-col gap-2 text-[18px] leading-7 text-primary-black">
                      {group.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="contact" className="mt-[48px] scroll-mt-28">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="flex flex-col justify-center">
                  <h2 className="section-title mb-6">
                    Get to know me
                  </h2>
                  <p className="text-body-regular mb-8 leading-relaxed">
                    Have a project in mind? Or just want to chat about design, gaming, or good coffee? I&apos;d love to hear from you.
                  </p>
                  <SocialButtons />
                </div>

                <div className="relative w-full max-w-[280px] justify-self-end overflow-hidden rounded-[24px] bg-primary-black/10 min-[393px]:max-w-[400px] min-[809px]:max-w-[544px]" style={{ aspectRatio: "544/560" }}>
                  <Image
                    src={photoPaths.contact}
                    alt="Autumn Munz outdoors"
                    fill
                    className="object-cover"
                    sizes="(max-width: 392px) 280px, (max-width: 808px) 400px, 544px"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

