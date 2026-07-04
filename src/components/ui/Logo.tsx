import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10 group", className)}
    >
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        {/* The 'P' shape */}
        <path
          d="M25 80 V20 H55 C68 20 75 28 75 40 C75 52 68 60 55 60 H25"
          className="group-hover:stroke-brand-blue transition-colors duration-500"
        />
        {/* The 'R' leg starting from the intersection */}
        <path
          d="M45 60 L75 80"
          className="group-hover:stroke-brand-green transition-colors duration-500"
        />
        
        {/* Geometric Tech Accent */}
        <circle cx="25" cy="20" r="4" fill="currentColor" stroke="none" className="group-hover:fill-brand-blue transition-colors duration-500"/>
        <circle cx="75" cy="80" r="4" fill="currentColor" stroke="none" className="group-hover:fill-brand-green transition-colors duration-500"/>
        <circle cx="55" cy="60" r="4" fill="currentColor" stroke="none" className="group-hover:fill-brand-blue transition-colors duration-500"/>
      </g>
    </svg>
  );
}
