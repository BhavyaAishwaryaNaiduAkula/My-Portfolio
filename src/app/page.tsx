"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SlideNavigation from "@/components/SlideNavigation";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const sections = ["hero", "about", "skills", "projects", "experience", "contact"];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const height = window.innerHeight;
      
      if (e.key === "ArrowDown") {
        e.preventDefault();
        containerRef.current.scrollBy({ top: height, behavior: "smooth" });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        containerRef.current.scrollBy({ top: -height, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const index = Math.round(e.currentTarget.scrollTop / window.innerHeight);
    if (index !== activeSlide) setActiveSlide(index);
  };

  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <main 
      ref={containerRef}
      onScroll={handleScroll}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-[#030014] selection:bg-purple-500/30 hide-scrollbar scroll-smooth relative"
    >
      <SlideNavigation total={sections.length} active={activeSlide} onSelect={scrollToSlide} />
      
      <div className="h-screen w-full snap-start snap-always"><Hero /></div>
      <div className="h-screen w-full snap-start snap-always"><About /></div>
      <div className="h-screen w-full snap-start snap-always"><Skills /></div>
      <div className="h-screen w-full snap-start snap-always"><Projects /></div>
      <div className="h-screen w-full snap-start snap-always"><Experience /></div>
      <div className="h-screen w-full snap-start snap-always"><Contact /></div>
    </main>
  );
}
