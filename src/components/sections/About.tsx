"use client";

import { motion } from "framer-motion";
import { USER } from "@/data";
import { GraduationCap, MapPin, User, Cpu } from "lucide-react";

export function About() {
  const cards = [
    {
      title: "Education",
      icon: <GraduationCap className="text-brand-purple" />,
      content: (
        <div className="space-y-2 text-sm text-muted-foreground mt-2">
          <p className="font-medium text-foreground">{USER.education.degree}</p>
          <p>{USER.education.college}</p>
          <p>{USER.education.year}</p>
        </div>
      ),
    },
    {
      title: "Location",
      icon: <MapPin className="text-brand-green" />,
      content: (
        <p className="text-sm text-muted-foreground mt-2 font-medium">
          {USER.location}
        </p>
      ),
    },
    {
      title: "Interests",
      icon: <Cpu className="text-brand-blue" />,
      content: (
        <div className="flex flex-wrap gap-2 mt-3">
          {["Computer Vision", "Multimodal Learning", "Explainable AI", "Deep Learning"].map((interest) => (
            <span key={interest} className="px-3 py-1 text-xs rounded-full bg-secondary border border-border text-foreground">
              {interest}
            </span>
          ))}
        </div>
      ),
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Professional Summary */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass rounded-3xl p-8 md:p-10 border border-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary rounded-2xl border border-border">
                <User className="text-brand-blue" size={28} />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">Professional Summary</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a {USER.education.year.toLowerCase()} Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. My interests lie at the intersection of AI research and scalable software engineering.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With a strong focus on Computer Vision, Multimodal Learning, and Explainable AI, I am passionate about building intelligent systems that solve real-world problems—bridging the gap between cutting-edge research and production-grade applications.
            </p>
          </motion.div>

          {/* Info Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass rounded-3xl p-6 hover:bg-secondary/50 transition-colors duration-300 border border-border"
              >
                <div className="flex items-center gap-4 mb-2">
                  {card.icon}
                  <h4 className="text-lg font-heading font-semibold text-foreground">{card.title}</h4>
                </div>
                {card.content}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
