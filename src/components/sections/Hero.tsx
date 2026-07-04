"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { USER } from "@/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NeuralSphere } from "@/components/canvas/NeuralSphere";
import { useEffect, useState } from "react";
import Image from "next/image";

const ROLES = [
  "AI Researcher",
  "Full-Stack Developer",
  "Computer Vision Enthusiast",
  "Machine Learning Engineer",
  "Open Source Contributor"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background on Right */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-40 lg:opacity-100 pointer-events-none lg:pointer-events-auto z-0">
        <NeuralSphere />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-3/5 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-brand-blue font-mono text-lg md:text-xl mb-4 tracking-tight">
                Hello, I am
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter mb-6 text-foreground drop-shadow-xl">
                {USER.name.toUpperCase()}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-12 md:h-16 mb-6"
            >
              <p className="text-2xl md:text-4xl font-light text-muted-foreground">
                I am a{" "}
                <span className="font-semibold text-brand-purple inline-block min-w-[280px]">
                  {ROLES[roleIndex]}
                </span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              {USER.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <MagneticButton variant="primary">
                Explore My Work <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton variant="secondary" onClick={() => window.open("/documents/Preran_Rai_Resume.pdf", "_blank")}>
                Download Resume <FileText size={18} />
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center gap-6"
            >
              <a href={USER.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300">
                <FaGithub size={24} />
              </a>
              <a href={USER.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-brand-blue transition-colors hover:scale-110 transform duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href={`mailto:${USER.email}`} className="text-muted-foreground hover:text-brand-purple transition-colors hover:scale-110 transform duration-300">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* Profile Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end z-30"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative group perspective-[1000px]"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/30 via-brand-purple/30 to-brand-green/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              
              {/* Glassmorphism Container */}
              <div className="relative glass p-2 md:p-3 rounded-3xl border border-white/20 shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-x-2 group-hover:-rotate-y-2">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden bg-background/50 border border-border/50">
                  <Image
                    src="/images/profile/Preran_Rai_Image.png"
                    alt="Preran Rai"
                    fill
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    // Fallback to neutral transparent bg if image is missing
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none'; // Gracefully hide broken image icon
                    }}
                  />
                  {/* Subtle overlay to blend image better with dark mode */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
