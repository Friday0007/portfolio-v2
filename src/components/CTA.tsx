"use client";

import { Reveal } from "./animations";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-card to-card p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[250px] w-[500px] rounded-full bg-emerald-500/8 blur-[100px]" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready to start your
                <br />
                <span className="text-gradient">next project?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground sm:text-base">
                Let&apos;s collaborate and build something extraordinary together.
                I&apos;m just one message away.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-8 inline-block">
                <Button asChild variant="primary" size="lg">
                  <a href="#contact">
                    Start a Conversation
                    <ArrowUpRight size={16} />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
