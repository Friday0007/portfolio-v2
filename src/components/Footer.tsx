"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./animations";
import { Heart, Github, Linkedin, ArrowUpRight, Mail } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub", icon: <Github size={18} />, href: "https://github.com/Friday0007" },
  { name: "LinkedIn", icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/vaibhav-mistry-26506a227/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border/50 px-4 pt-16 pb-8 sm:px-6">
      {/* Top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Main footer grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <Reveal className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 dark:bg-emerald-500 shadow-lg shadow-emerald-500/20">
                <span className="text-sm font-bold text-white">V</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Vaibhav<span className="text-emerald-600 dark:text-emerald-400">.Labs</span>
              </span>
            </a>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Crafting purposeful digital experiences with clean code and beautiful design. Let&apos;s build something extraordinary.
            </p>
            <a
              href="mailto:vaimistry24@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <Mail size={14} />
              vaimistry24@gmail.com
            </a>
          </Reveal>

          {/* Quick links */}
          <Reveal delay={0.1}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Socials */}
          <Reveal delay={0.2}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <StaggerContainer className="flex flex-col gap-2.5" staggerDelay={0.05}>
              {socials.map((s) => (
                <StaggerItem key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg glass-card transition-all group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30">
                      {s.icon}
                    </span>
                    {s.name}
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="mt-12 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            &copy; {currentYear} Vaibhav.Labs · Built with
            <Heart size={12} className="text-emerald-500" fill="currentColor" />
            using Next.js
          </p>
          <p className="text-[11px] text-muted-foreground/60">
            Designed & Developed by Vaibhav
          </p>
        </div>
      </div>
    </footer>
  );
}
