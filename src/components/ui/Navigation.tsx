"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Logo } from "./Logo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav
          className={cn(
            "mx-auto max-w-6xl flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all duration-300",
            scrolled
              ? "glass bg-background/80 backdrop-blur-lg shadow-lg border-border"
              : "border border-transparent bg-transparent"
          )}
        >
          {/* Logo & Branding */}
          <a
            href="#home"
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <Logo className="w-8 h-8 md:w-10 md:h-10 text-foreground flex-shrink-0" />
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-heading font-bold tracking-tight text-foreground leading-tight whitespace-nowrap">
                PRERAN RAI
              </span>
              <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                AI Researcher • Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-blue transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Actions: Theme Toggle + Connect + Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-5 py-2 text-sm font-medium rounded-full bg-foreground text-background hover:bg-brand-blue hover:text-white transition-colors duration-300"
              >
                Let&apos;s Connect
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 lg:hidden"
          >
            <div className="glass rounded-2xl p-6 flex flex-col space-y-4 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-border" />
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-5 py-3 text-sm font-medium rounded-xl bg-foreground text-background hover:bg-brand-blue hover:text-white transition-colors"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
