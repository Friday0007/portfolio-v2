"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6"
    >
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[150px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-emerald-400/5 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-emerald-500/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left - Text content */}
        <div className="text-center lg:text-left">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <Badge variant="success" className="gap-2 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for projects
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 sm:mt-8 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.08]"
          >
            Full Stack
            <br />
            Developer
            <br />
            <span className="text-gradient">crafting</span>{" "}
            <span className="italic">purposeful</span>
            <br />
            digital experiences
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mx-auto mt-5 sm:mt-6 max-w-md text-sm text-muted-foreground sm:text-base lg:text-lg lg:mx-0"
          >
            Beautifully designed, easy-to-use websites that help you stand out
            and connect with your audience.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button asChild variant="primary" size="lg">
              <a href="#work">
                <Sparkles size={16} />
                View My Work
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                Get in Touch
                <ArrowUpRight size={16} />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right - Device mockup / project collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* Main browser mockup */}
          <div className="relative rounded-2xl border border-emerald-500/20 bg-card p-1 shadow-2xl glow-green-intense">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
              <span className="ml-3 text-[10px] text-muted-foreground">vaibhav.labs</span>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-b-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Project showcase"
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Floating card - top right */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -right-2 -top-4 sm:-right-4 sm:-top-6 rounded-xl glass-card p-2.5 sm:p-3 shadow-xl neon-border"
          >
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Sparkles size={14} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground">Projects</p>
                <p className="text-xs sm:text-sm font-bold">25+</p>
              </div>
            </div>
          </motion.div>

          {/* Floating card - bottom left */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-6 rounded-xl glass-card p-2.5 sm:p-3 shadow-xl neon-border"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["SJ", "MC", "EB"].map((initials) => (
                  <div
                    key={initials}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-card bg-emerald-500/15 text-[9px] font-bold text-emerald-400"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">Happy Clients</p>
                <p className="text-sm font-bold">15+</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - centered below grid on large screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-emerald-500"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={14} />
        </motion.a>
      </motion.div>
    </section>
  );
}
