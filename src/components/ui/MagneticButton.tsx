"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef, ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({ children, className, onClick, variant = "primary" }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const controls = useAnimation();

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    controls.start({
      x: x * 0.3,
      y: y * 0.3,
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
    });
  };

  const baseStyles = "relative px-6 py-3 rounded-full font-medium transition-colors duration-300 overflow-hidden group flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-foreground text-background hover:bg-brand-blue hover:text-white",
    secondary: "bg-white/10 text-foreground hover:bg-white/20 border border-white/5",
    outline: "border border-white/20 text-foreground hover:border-brand-blue hover:text-brand-blue"
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={controls}
      className={cn(baseStyles, variants[variant], className)}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
}
