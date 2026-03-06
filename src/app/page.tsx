import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";

// Lazy load below-fold sections
const FloatingObjects = dynamic(() => import("@/components/FloatingObjects"));
const About = dynamic(() => import("@/components/About"));
const TechMarquee = dynamic(() => import("@/components/TechMarquee"));
const Services = dynamic(() => import("@/components/Services"));
const Projects = dynamic(() => import("@/components/Projects"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const CTA = dynamic(() => import("@/components/CTA"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Loader />
      <FloatingObjects />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechMarquee />
        <Services />
        <Projects />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
