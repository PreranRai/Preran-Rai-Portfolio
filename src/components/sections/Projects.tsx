"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data";
import { ExternalLink, ArrowRight, ChevronDown, Rocket, Code2, AlertTriangle, Lightbulb, Target, Star, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Research & Work</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-green rounded-full" />
          </div>
          <a href="#github" className="group flex items-center gap-2 text-brand-blue hover:text-brand-purple transition-colors font-medium">
            View full portfolio on GitHub <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-16">
          {PROJECTS.map((project) => {
            const isExpanded = expandedId === project.id;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass rounded-3xl p-8 md:p-12 border border-border group relative overflow-hidden transition-colors hover:border-brand-blue/30"
              >
                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand-blue/10 transition-colors duration-700" />
                
                <div className="relative z-10 w-full flex flex-col space-y-6">
                  {/* Top Bar: Category */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                      {project.category}
                    </span>
                    {project.isTeamProject && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20 flex items-center gap-1">
                        <Star size={12} /> Collaborative Research & Development Project
                      </span>
                    )}
                  </div>

                  {/* Header: Title and Overview */}
                  <div>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-purple transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                      {project.overview}
                    </p>
                  </div>

                  {/* Badges: AI Models & Technologies */}
                  <div className="flex flex-col gap-3 pt-2">
                    {project.aiModels && project.aiModels.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.aiModels.map((model) => (
                          <span key={model} className="px-3 py-1.5 text-xs font-semibold rounded-md bg-brand-purple/10 text-brand-purple border border-brand-purple/20 flex items-center gap-2">
                            <Lightbulb size={14} /> {model}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                           <span key={tech} className="px-3 py-1.5 text-xs font-semibold rounded-md bg-secondary text-secondary-foreground border border-border flex items-center gap-2">
                             <Code2 size={14} className="text-brand-green" /> {tech}
                           </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-4 pb-2">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 border border-border text-foreground transition-all duration-300 hover:scale-105 font-medium"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <FaGithub size={18} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:bg-brand-blue hover:text-white transition-all duration-300 hover:scale-105 font-medium shadow-lg"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.relatedPublication && (
                      <a
                        href={project.relatedPublication}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-purple/10 hover:bg-brand-purple/20 border border-brand-purple/30 text-brand-purple transition-all duration-300 hover:scale-105 font-medium shadow-lg"
                      >
                        <FileText size={18} />
                        <span>Related Publication</span>
                      </a>
                    )}
                  </div>

                  {/* Expandable Case Study Toggle */}
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-brand-blue transition-colors self-start mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md px-1 py-2 group/btn"
                    aria-expanded={isExpanded}
                    aria-controls={`case-study-${project.id}`}
                  >
                    {isExpanded ? "Hide Research Details" : "Read Full Research Details"}
                    <ChevronDown size={18} className={`transition-transform duration-300 text-brand-blue ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  {/* Expandable Content: Full Case Study */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        id={`case-study-${project.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 border-t border-border mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                          
                          {/* Left Column */}
                          <div className="space-y-8">
                            {project.problemStatement && (
                              <div className="space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                                  <AlertTriangle size={16} className="text-brand-purple" /> Problem Statement
                                </h4>
                                <p className="text-base text-muted-foreground leading-relaxed">{project.problemStatement}</p>
                              </div>
                            )}

                            {project.myContributions && (
                              <div className="space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                                  <Star size={16} className="text-brand-purple" /> My Contributions
                                </h4>
                                <p className="text-base text-muted-foreground leading-relaxed">{project.myContributions}</p>
                              </div>
                            )}

                            {project.motivation && (
                              <div className="space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                                  <Star size={16} className="text-brand-blue" /> Motivation
                                </h4>
                                <p className="text-base text-muted-foreground leading-relaxed">{project.motivation}</p>
                              </div>
                            )}
                            
                            {project.solution && (
                              <div className="space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                                  <Lightbulb size={16} className="text-brand-green" /> Proposed Solution
                                </h4>
                                <p className="text-base text-muted-foreground leading-relaxed">{project.solution}</p>
                              </div>
                            )}

                            {project.architecture && (
                              <div className="space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                                  <Code2 size={16} className="text-brand-blue" /> System Architecture
                                </h4>
                                <p className="text-base text-muted-foreground leading-relaxed">{project.architecture}</p>
                              </div>
                            )}
                          </div>

                          {/* Right Column */}
                          <div className="space-y-8">
                            {project.keyFeatures && project.keyFeatures.length > 0 && (
                              <div className="space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                                  <Star size={16} className="text-brand-blue" /> Key Features
                                </h4>
                                <ul className="space-y-2">
                                  {project.keyFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-base text-muted-foreground leading-relaxed">
                                      <span className="text-brand-blue mt-1">•</span> {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {project.challenges && (
                              <div className="space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                                  <AlertTriangle size={16} className="text-brand-purple" /> Challenges Faced
                                </h4>
                                <p className="text-base text-muted-foreground leading-relaxed">{project.challenges}</p>
                              </div>
                            )}

                            {project.results && (
                              <div className="space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                                  <Rocket size={16} className="text-brand-green" /> Results & Impact
                                </h4>
                                <p className="text-base text-muted-foreground leading-relaxed">{project.results}</p>
                              </div>
                            )}
                            
                            {project.lessonsLearned && (
                              <div className="space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                                  <Lightbulb size={16} className="text-brand-blue" /> Lessons Learned
                                </h4>
                                <p className="text-base text-muted-foreground leading-relaxed">{project.lessonsLearned}</p>
                              </div>
                            )}
                            
                            {project.futureImprovements && (
                              <div className="space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                                  <Target size={16} className="text-brand-purple" /> Future Improvements
                                </h4>
                                <p className="text-base text-muted-foreground leading-relaxed">{project.futureImprovements}</p>
                              </div>
                            )}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
