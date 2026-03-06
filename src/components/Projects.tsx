"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./animations";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
  status: "live" | "in-development";
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description:
      "Luxury jewellery e-commerce platform featuring product collections, category browsing, promotional banners, and a seamless shopping experience with cart, search, and responsive UI optimized for premium branding.",
    tags: ["Shopify", "APIs", "CSS", "HTML"],
    image: "https://i.ibb.co/Fkt2Vdbt/South-Temple-Jewellery.png",
    liveUrl: "https://southtemplejewellery.com/",
    status: "live",
  },
  {
    id: 2,
    title: "Vagnams Furniture",
    category: "Web App",
    description:
      "Luxury furniture brand website showcasing premium interior collections with an elegant hero section, smooth navigation, and visually rich layouts designed to highlight craftsmanship, lifestyle aesthetics, and custom furniture offerings.",
    tags: ["Tailwind", "Cloudinary", "TypeScript", "PostgreSQL"],
    image: "https://i.ibb.co/Nn2r2sK6/Vagnams-Furniture.png",
    liveUrl: "https://vagnams-development-private.vercel.app/",
    // githubUrl: "#",
    status: "in-development",
  },
  {
    id: 3,
    title: "Photosen - Photographer's Portfolio",
    category: "Web App",
    description:
      "Modern photography portfolio website designed to showcase image collections through a clean grid layout, category-based galleries, and immersive visuals focused on highlighting creative work.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://i.ibb.co/TqhLncLr/Photosen.png",
    liveUrl: "https://photosen-six.vercel.app/",
    status: "in-development",
  }
];

const categories = ["All", "Full Stack", "Web App"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Badge variant="outline" className="mb-4 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/5">
                Portfolio
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Selected <span className="italic text-gradient">Work</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm text-muted-foreground">
              Projects I&apos;m building at the moment — from concept to
              production-ready products.
            </p>
          </Reveal>
        </div>

        {/* filters */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white dark:bg-emerald-500"
                    : "border border-border text-muted-foreground hover:border-emerald-500/30 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <Card className="group h-full overflow-hidden hover:border-emerald-500/30 hover:glow-green transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                    {/* Overlay buttons */}
                    <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-emerald-600 p-2 text-white shadow-lg transition-transform hover:scale-110"
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink size={14} />
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-card p-2 text-foreground shadow-lg transition-transform hover:scale-110"
                          aria-label={`View ${project.title} source`}
                        >
                          <Github size={14} />
                        </a>
                      )}
                    </div>

                    <Badge className={`absolute left-3 top-3 border-0 text-[10px] text-white ${
                      project.status === "live"
                        ? "bg-emerald-600"
                        : "bg-amber-500"
                    }`}>
                      {project.status === "live" ? "Live" : "◐ In Development"}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        {project.category}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-muted-foreground transition-all group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <h3 className="mb-1.5 text-lg font-bold">{project.title}</h3>
                    <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
