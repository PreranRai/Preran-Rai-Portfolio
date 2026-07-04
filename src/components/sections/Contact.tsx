"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    
    // Reset status after 5 seconds
    setTimeout(() => {
      if (status !== "idle") setStatus("idle");
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Let&apos;s Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-green">
              Amazing Together.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Currently open for new opportunities and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <MagneticButton variant="primary" className="w-full sm:w-auto px-8">
                  {status === "loading" ? "Sending..." : "Send Message"} <Send size={18} className="ml-2" />
                </MagneticButton>
                <MagneticButton 
                  variant="secondary" 
                  className="w-full sm:w-auto px-8 border border-border bg-secondary hover:bg-secondary/80 transition-colors"
                  onClick={() => {
                    window.open("/documents/Preran_Rai_Resume.pdf", "_blank");
                  }}
                >
                  Download Resume
                </MagneticButton>
              </div>

              {status === "success" && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center text-brand-green gap-2">
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">Message sent successfully!</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center text-destructive gap-2">
                  <AlertCircle size={20} />
                  <span className="text-sm font-medium">Failed to send message. Please try again.</span>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
