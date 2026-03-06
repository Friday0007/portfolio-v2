"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./animations";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Zap, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "3+", label: "Years of experience crafting digital products" },
  { value: "25+", label: "Projects delivered for clients worldwide" },
  { value: "15+", label: "Happy clients & long-term collaborations" },
  { value: "99%", label: "Client satisfaction & repeat business" },
];

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "MongoDB", "PostgreSQL", "AWS", "Docker", "Figma",
  "Shopify", "WordPress",
];

export default function About() {
  return (
    <section id="about" className="px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Badge variant="outline" className="mb-4 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/5">
            About Me
          </Badge>
        </Reveal>

        {/* Rectangular about card - horizontal layout */}
        <Reveal delay={0.1}>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image - left side */}
              <div className="md:col-span-2 bg-muted overflow-hidden">
                <img
                  src="/Profile.avif"
                  alt="Vaibhav"
                  loading="lazy"
                  className="h-full w-full object-cover min-h-[280px] md:min-h-full"
                />
              </div>
              {/* Content - right side */}
              <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  Developer crafting{" "}
                  <span className="text-gradient">purposeful</span> online presence
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  A full-stack developer with a passion for crafting digital
                  experiences that feel intuitive, beautiful, and meaningful.
                  I believe in the perfect balance of creativity and strategy
                  to deliver products that make an impact.
                </p>
                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs hover:border-emerald-500/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="mt-5 w-fit">
                  <a href="#contact">
                    Get in Touch
                    <ArrowUpRight size={14} />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </Reveal>

        {/* Stats row */}
        <StaggerContainer className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <Card className="p-5 sm:p-6 hover:border-emerald-500/30 hover:glow-green">
                <div className="font-display text-3xl font-bold text-emerald-600 dark:text-emerald-400 sm:text-4xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mini service cards */}
        <StaggerContainer className="mt-6 grid grid-cols-3 gap-3" staggerDelay={0.1}>
          {[
            { icon: <Code2 size={20} />, title: "Development" },
            { icon: <Palette size={20} />, title: "Design" },
            { icon: <Zap size={20} />, title: "Performance" },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <Card className="group p-4 text-center hover:border-emerald-500/30">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  {item.icon}
                </div>
                <p className="text-xs font-medium">{item.title}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
