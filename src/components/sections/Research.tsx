"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RESEARCH_INTERESTS, RESEARCH_METRICS, PUBLICATIONS } from "@/data";
import { ExternalLink, BookOpen, Clock, CheckCircle, FileText, Beaker, Code2 } from "lucide-react";

// Counter Component for Metrics
function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{count}</span>;
}

// Helper to get status badge styling
function getStatusBadgeConfig(status: string) {
  switch (status) {
    case "SSRN Preprint":
    case "Published":
    case "Accepted":
      return { bg: "bg-brand-blue/10", text: "text-brand-blue", border: "border-brand-blue/20", icon: <CheckCircle size={14} /> };
    case "Manuscript":
    case "Under Review":
      return { bg: "bg-brand-purple/10", text: "text-brand-purple", border: "border-brand-purple/20", icon: <FileText size={14} /> };
    case "In Progress":
    case "Coming Soon":
      return { bg: "bg-brand-green/10", text: "text-brand-green", border: "border-brand-green/20", icon: <Clock size={14} /> };
    default:
      return { bg: "bg-white/5", text: "text-foreground", border: "border-white/10", icon: <BookOpen size={14} /> };
  }
}

export function Research() {
  return (
    <section id="research" className="py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Publications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Research</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Exploring Artificial Intelligence, Computer Vision, Multimodal Learning, Deep Learning, Language Technologies, and Intelligent Systems through academic research and real-world applications.
          </p>
        </motion.div>

        {/* Animated Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
          {RESEARCH_METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center hover:border-brand-blue/30 transition-colors"
            >
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                <Counter from={0} to={metric.value} />
                {metric.suffix || ""}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Research Interests Chips */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-24"
        >
          {RESEARCH_INTERESTS.map((interest) => (
            <span 
              key={interest} 
              className="px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:bg-brand-blue/10 hover:border-brand-blue/30 hover:text-brand-blue transition-all duration-300"
            >
              {interest}
            </span>
          ))}
        </motion.div>

        {/* Publications List */}
        <div className="flex flex-col gap-16">
          {PUBLICATIONS.map((pub, index) => {
            const badgeConfig = getStatusBadgeConfig(pub.status);
            const isInProgress = pub.status === "In Progress";
            
            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`glass rounded-3xl p-8 md:p-12 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isInProgress ? "border-brand-green/20 hover:border-brand-green/40 opacity-90" : "border-border hover:border-brand-blue/30"
                }`}
              >
                {/* Header: Badges & Year */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider bg-white/5 px-3 py-1 rounded-md">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${badgeConfig.bg} ${badgeConfig.text} ${badgeConfig.border}`}>
                    {badgeConfig.icon}
                    <span>{pub.status}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border">
                    <BookOpen size={14} />
                    <span>{pub.type}</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground ml-auto">{pub.year}</span>
                </div>

                {/* Title & Authors */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 leading-tight">
                  {pub.title}
                </h3>
                <p className="text-base text-brand-purple font-medium mb-8">
                  {pub.authors}
                </p>

                {/* Abstract */}
                <div className="mb-10">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Abstract</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>

                {/* Grid Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Key Contributions</h4>
                    <ul className="space-y-3">
                      {pub.contributions.map((contribution, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className={`mt-1 ${isInProgress ? "text-brand-green" : "text-brand-blue"}`}>•</span> 
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Research Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {pub.areas.map((area) => (
                          <span key={area} className="px-3 py-1 text-xs font-medium rounded-md bg-secondary border border-border text-foreground">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {pub.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-8 border-t border-border flex flex-wrap items-center gap-4">
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 font-medium"
                    >
                      <FileText size={18} />
                      {pub.actionText}
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-muted-foreground cursor-not-allowed font-medium"
                    >
                      {isInProgress ? <Beaker size={18} /> : <Clock size={18} />}
                      {pub.actionText}
                    </button>
                  )}
                  
                  {pub.relatedProject && (
                    <a
                      href={pub.relatedProject}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-purple/10 hover:bg-brand-purple/20 border border-brand-purple/30 text-brand-purple transition-all duration-300 font-medium"
                    >
                      <Code2 size={18} />
                      View Related Project
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
