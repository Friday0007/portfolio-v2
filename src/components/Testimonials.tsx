"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./animations";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Madur Shah",
    role: "Founder, Flavour Basket",
    text: "We needed a Shopify store that could handle 500+ products and Vaibhav nailed it. The site loads fast, looks clean, and our sales went up 40% in the first month after launch.",
    avatar: "RS",
  },
  {
    name: "Priya Nair",
    role: "Owner, Online Kitchen",
    text: "Vaibhav built my portfolio site exactly how I wanted it — minimal, image-focused, and super smooth on mobile. He understood the brief quickly and delivered before the deadline.",
    avatar: "PN",
  },
  {
    name: "Aman Verma",
    role: "Co-founder, UrbanNest Interiors",
    text: "Really solid work on our furniture website. The product pages look premium, the filters actually work well, and he was patient with all our revision requests. Would definitely hire again.",
    avatar: "AV",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <Badge variant="outline" className="mb-4 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/5">
              Testimonials
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Loved by <span className="text-gradient">Teams</span> Around the World
            </h2>
          </Reveal>
        </div>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="group h-full p-6 hover:border-emerald-500/30 hover:glow-green transition-all duration-300">
                <Quote
                  size={28}
                  className="mb-3 text-emerald-500/30 transition-colors group-hover:text-emerald-500/60"
                />
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
