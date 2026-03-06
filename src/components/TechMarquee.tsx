"use client";

import { motion } from "framer-motion";
import { Reveal } from "./animations";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "MongoDB", "PostgreSQL", "Docker", "AWS", "Figma",
  "Redis", "Shopify", "WordPress",
];

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-border py-8">
      <div className="mx-auto mb-8 max-w-6xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Technologies I Work With
          </p>
        </Reveal>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
          }}
          className="flex w-max gap-4"
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 transition-colors hover:border-emerald-500/30"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="whitespace-nowrap text-sm text-muted-foreground">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
