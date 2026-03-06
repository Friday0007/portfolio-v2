"use client";

import { useState } from "react";
import { Reveal } from "./animations";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, ArrowUpRight, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "vaimistry24@gmail.com",
    href: "mailto:vaimistry24@gmail.com",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "India",
    href: "#",
  },
];

const socials = [
  { name: "GitHub", url: "https://github.com/Friday0007" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/vaibhav-mistry-26506a227/" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <Badge variant="outline" className="mb-4 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/5">
              Contact
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Let&apos;s Work{" "}
              <span className="italic text-gradient">Together</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Have a project in mind? I&apos;m always open to new opportunities
              and interesting collaborations.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3" delay={0.2}>
            <Card className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === "sent" ? (
                    "Message Sent! ✓"
                  ) : status === "error" ? (
                    "Failed - try again"
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </Reveal>

          {/* Info sidebar */}
          <Reveal className="lg:col-span-2" delay={0.3}>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-start gap-3"
                >
                  <Card className="flex-1 flex items-start gap-3 p-4 hover:border-emerald-500/30 transition-colors">
                    <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </Card>
                </a>
              ))}

              {/* Socials */}
              <Card className="p-5">
                <p className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Follow Me
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-lg border border-border px-3 py-2.5 text-sm text-muted-foreground transition-all hover:border-emerald-500/30 hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                      {s.name}
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
