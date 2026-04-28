"use client";

import { motion } from "framer-motion";

interface SlideNavigationProps {
  total: number;
  active: number;
  onSelect: (index: number) => void;
}

export default function SlideNavigation({ total, active, onSelect }: SlideNavigationProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 hidden md:flex">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className="relative group flex items-center justify-center p-2"
        >
          {/* Active indicator */}
          <motion.div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              active === i ? "bg-cyan-400 scale-125 shadow-[0_0_15px_#00E5FF]" : "bg-white/20 hover:bg-white/50"
            }`}
          />
          {/* Tooltip (optional, just visual for now) */}
          <div className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold text-white/80 whitespace-nowrap bg-black/50 px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
            Slide {i + 1}
          </div>
        </button>
      ))}
    </div>
  );
}
