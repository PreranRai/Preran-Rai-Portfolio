"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data";
import { Brain, Layout, Server, Wrench } from "lucide-react";
import { ReactNode } from "react";

function SkillCard({ title, icon, skills, delay }: { title: string, icon: ReactNode, skills: string[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-3xl p-6 md:p-8 border border-border hover:border-brand-blue/50 transition-all duration-500 group relative overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-20 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-secondary rounded-2xl border border-border text-foreground group-hover:scale-110 group-hover:text-brand-blue transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-heading font-semibold">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:border-brand-blue/50 hover:text-foreground hover:bg-secondary transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <SkillCard 
            title="Artificial Intelligence" 
            icon={<Brain size={24} />} 
            skills={SKILLS.ai} 
            delay={0.1} 
          />
          <SkillCard 
            title="Frontend Engineering" 
            icon={<Layout size={24} />} 
            skills={SKILLS.frontend} 
            delay={0.2} 
          />
          <SkillCard 
            title="Backend Systems" 
            icon={<Server size={24} />} 
            skills={SKILLS.backend} 
            delay={0.3} 
          />
          <SkillCard 
            title="Developer Tools" 
            icon={<Wrench size={24} />} 
            skills={SKILLS.tools} 
            delay={0.4} 
          />
        </div>
      </div>
    </section>
  );
}
