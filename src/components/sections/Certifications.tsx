"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/data";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-green rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-brand-blue/30 transition-all duration-300 group flex flex-col justify-between text-left h-full"
            >
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-brand-blue/80 mb-6">
                  {cert.organization}
                </p>
              </div>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-muted-foreground hover:text-brand-blue transition-colors mt-auto w-fit"
              >
                [View Certificate]
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
