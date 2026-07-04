"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Trophy, Star, BookOpen, GitCommit } from "lucide-react";

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
      
      // easeOutExpo
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

export function Achievements() {
  const achievements = [
    { label: "GitHub Repositories", value: 45, icon: <GitCommit className="text-brand-blue" size={32} /> },
    { label: "Projects Built", value: 20, icon: <Star className="text-brand-purple" size={32} /> },
    { label: "Research Papers", value: 3, icon: <BookOpen className="text-brand-green" size={32} /> },
    { label: "Hackathons Won", value: 5, icon: <Trophy className="text-brand-blue" size={32} /> },
  ];

  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 border border-white/10">
                {item.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                <Counter from={0} to={item.value} />+
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
