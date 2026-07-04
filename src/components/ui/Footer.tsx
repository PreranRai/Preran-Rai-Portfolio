"use client";

import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

export function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    lenis?.scrollTo(0, { duration: 1.5 });
  };

  return (
    <footer className="border-t border-white/10 bg-background/50 py-12 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-foreground">
              Designed & Developed by Preran Rai
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all duration-300">
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
