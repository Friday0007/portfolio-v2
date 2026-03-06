"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./animations";
import { Card } from "@/components/ui/card";
import {
  Globe,
  Smartphone,
  Server,
  Paintbrush,
  Search,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: <Globe size={24} />,
    num: "01",
    title: "Web Development",
    desc: "Building fast, responsive, and scalable web applications with React, Next.js, and modern frameworks.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: <Smartphone size={24} />,
    num: "02",
    title: "UI/UX Design",
    desc: "Creating intuitive interfaces that users love. Wireframing, prototyping, and pixel-perfect design.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: <Server size={24} />,
    num: "03",
    title: "Backend & APIs",
    desc: "Architecting robust server-side solutions with Node.js. RESTful APIs, auth, and cloud deployment.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    icon: <Paintbrush size={24} />,
    num: "04",
    title: "Brand Identity",
    desc: "Crafting cohesive brand identities with logos, color palettes, and typography that make you memorable.",
    tags: ["Branding", "Logo", "Style Guide"],
  },
  {
    icon: <Search size={24} />,
    num: "05",
    title: "SEO & Performance",
    desc: "Optimizing for search engines and speed. Core Web Vitals, structured data, and technical SEO.",
    tags: ["SEO", "Analytics", "Performance"],
  },
  {
    icon: <Cloud size={24} />,
    num: "06",
    title: "DevOps & Cloud",
    desc: "CI/CD pipelines, Docker containerization, and cloud infrastructure on AWS/Vercel for reliable deploys.",
    tags: ["Docker", "AWS", "Vercel"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 py-14 sm:px-6 lg:py-20">
      <div className="pointer-events-none absolute right-0 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                Services
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                What I <span className="text-gradient">Offer</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm text-muted-foreground">
              End-to-end web design, development, and optimization services to
              help your business stand out.
            </p>
          </Reveal>
        </div>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {services.map((s) => (
            <StaggerItem key={s.num}>
              <Card className="group relative flex h-full min-h-[240px] flex-col overflow-hidden p-6 hover:border-emerald-500/30 hover:glow-green transition-all duration-300 cursor-default">
                {/* Watermark */}
                <span className="absolute -right-1 -top-3 font-display text-[64px] font-bold leading-none text-border/40 dark:text-border/60 transition-colors group-hover:text-emerald-500/10">
                  {s.num}
                </span>

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400 transition-all group-hover:bg-emerald-500 group-hover:text-white">
                    {s.icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold">{s.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {s.desc}
                  </p>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 transition-all group-hover:gap-2"
                  >
                    Learn More
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
