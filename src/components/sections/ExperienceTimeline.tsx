"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { EDUCATION, EXPERIENCE } from "@/data";
import { GraduationCap, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  data: {
    role?: string;
    degree?: string;
    company?: string;
    institution?: string;
    duration: string;
    description: string;
    status?: string;
    gpa?: string;
  };
  index: number;
};

const TimelineItem = ({ data, index }: TimelineItemProps) => {
  const isEducation = "degree" in data;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Mobile/Desktop Node */}
      <div className="absolute left-0 md:left-[-9px] top-2 md:top-2 w-4 h-4 rounded-full bg-background border-2 border-brand-blue z-10 group-hover:bg-brand-blue group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300" />
      
      <div className="glass rounded-2xl p-6 relative group border hover:border-brand-blue/50 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
          <h3 className="font-heading font-bold text-xl text-foreground">
            {isEducation ? data.degree : data.role}
          </h3>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary/50 text-brand-blue whitespace-nowrap">
            {data.duration}
          </span>
        </div>
        
        <h4 className="font-semibold text-muted-foreground mb-4">
          {isEducation ? data.institution : data.company}
        </h4>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {data.description}
        </p>

        {(data.status || data.gpa) && (
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
            {data.status && (
              <span className={cn(
                "text-xs font-semibold px-2 py-1 rounded-md",
                data.status === "COMPLETED" ? "bg-brand-green/10 text-brand-green" : "bg-brand-blue/10 text-brand-blue"
              )}>
                {data.status}
              </span>
            )}
            {data.gpa && (
              <span className="text-xs font-semibold px-2 py-1 rounded-md bg-secondary text-foreground">
                GPA: {data.gpa}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-green rounded-full mx-auto" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
          
          {/* Timeline Line Mobile */}
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-green/50 to-transparent md:hidden" />

          {/* Education Column */}
          <div className="relative">
            {/* Timeline Line Desktop */}
            <div className="absolute left-[-2px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-green/50 to-transparent hidden md:block" />
            
            <div className="flex items-center gap-3 mb-10 pl-8 md:pl-0">
              <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold font-heading">Education</h3>
            </div>
            
            <div className="flex flex-col gap-8 relative">
              {EDUCATION.map((item, index) => (
                <TimelineItem key={index} data={item} index={index} />
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="relative">
            {/* Timeline Line Desktop */}
            <div className="absolute left-[-2px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-green/50 to-transparent hidden md:block" />
            
            <div className="flex items-center gap-3 mb-10 pl-8 md:pl-0">
              <div className="p-3 rounded-xl bg-brand-green/10 text-brand-green">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold font-heading">Experience</h3>
            </div>
            
            <div className="flex flex-col gap-8 relative">
              {EXPERIENCE.map((item, index) => (
                <TimelineItem key={index} data={item} index={index} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
