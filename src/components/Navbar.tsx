"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  MessageSquare,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home", icon: <Home size={22} /> },
  { name: "About", href: "#about", icon: <User size={22} /> },
  { name: "Services", href: "#services", icon: <Briefcase size={22} /> },
  { name: "Work", href: "#work", icon: <FolderOpen size={22} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={22} /> },
  { name: "Let's Talk", href: "#contact", icon: <MessageSquare size={22} /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass-border py-3" : "py-4 border-b border-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#home" className="flex items-center gap-1.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 dark:bg-emerald-500">
              <span className="text-sm font-bold text-white">V</span>
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              Vaibhav<span className="text-emerald-600 dark:text-emerald-400">.Labs</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.slice(0, 5).map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-lg"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            )}
            <a
              href="#contact"
              className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-flex"
            >
              Let&apos;s Talk
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Full-screen grid mobile menu with blur */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-xl md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed left-4 right-4 top-20 z-[70] rounded-2xl glass-card p-5 shadow-2xl md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-semibold">Navigation</h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-accent transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Grid layout */}
              <div className="grid grid-cols-3 gap-3 place-items-center">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-border/50 p-4 text-muted-foreground transition-all duration-200",
                      "hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-500",
                      "active:scale-95"
                    )}
                  >
                    <span className="text-current">{link.icon}</span>
                    <span className="text-[11px] font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Theme toggle row */}
              <div className="mt-4 flex items-center justify-between rounded-xl border border-border/50 px-4 py-3">
                <span className="text-xs text-muted-foreground">Theme</span>
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex items-center gap-2 rounded-lg bg-accent px-3 py-1.5 text-xs font-medium transition-colors hover:bg-emerald-500/10"
                  >
                    {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                    {theme === "dark" ? "Light" : "Dark"}
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
