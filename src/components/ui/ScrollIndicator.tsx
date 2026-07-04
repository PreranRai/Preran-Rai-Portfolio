"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", name: "Hero" },
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Featured Work" },
  { id: "research", name: "Publications & Research" },
  { id: "github", name: "Open Source" },
  { id: "certifications", name: "Certifications" },
  { id: "contact", name: "Contact" },
];

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [percentValue, setPercentValue] = useState(0);
  const [activeSection, setActiveSection] = useState("Hero");

  useEffect(() => {
    return percentage.on("change", (latest) => {
      setPercentValue(Math.round(latest));
    });
  }, [percentage]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observers = new Map();
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = SECTIONS.find(s => s.id === entry.target.id);
          if (section) {
            setActiveSection(section.name);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", 
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Initial timeout to ensure DOM is fully painted before observing
    const timer = setTimeout(() => {
      SECTIONS.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
          observers.set(id, element);
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observers.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6 pointer-events-none">
      {/* Percentage */}
      <div className="text-[10px] font-mono font-medium text-muted-foreground tracking-widest w-8 text-center transition-all duration-300">
        {percentValue}%
      </div>

      {/* Track & Fill */}
      <div className="relative w-[2px] h-32 bg-border/50 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 w-full bg-brand-blue origin-top rounded-full"
          style={{ scaleY, height: "100%" }}
        />
      </div>

      {/* Active Section Text */}
      <div 
        className="text-[10px] font-mono font-medium text-muted-foreground tracking-widest uppercase transition-all duration-300"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
      >
        {activeSection}
      </div>
    </div>
  );
}
