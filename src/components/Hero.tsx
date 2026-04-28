"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/portfolio";
import { Download, ChevronRight, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const badges = [
  "Problem Solver",
  "AI Builder",
  "Full-stack Developer",
  "Innovation Driven"
];

export default function Hero() {
  return (
    <section className="h-full w-full relative flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-gray-300">{personalData.availability}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
            >
              Hi, I&apos;m {personalData.name.split(" ")[0]} <br />
              <span className="text-gradient leading-tight block mt-2 text-3xl md:text-5xl lg:text-6xl">{personalData.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {personalData.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
            >
              <a href="#contact" className="glow-box w-full sm:w-auto">
                <button className="w-full relative px-6 py-3 bg-white text-black rounded-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform text-sm">
                  Let&apos;s Connect <ChevronRight size={18} />
                </button>
              </a>
              <a href={personalData.resumeUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <button className="w-full px-6 py-3 rounded-lg font-semibold glass flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm">
                  <Download size={18} /> Download Resume
                </button>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-400">
                  <CheckCircle size={14} className="text-cyan-400" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual (Avatar/Graphic) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-1 relative flex justify-center"
          >
            <div className="relative w-56 h-56 md:w-80 md:h-80">
              {/* Outer glowing rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-cyan-500/30 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Core Avatar */}
              <div className="absolute inset-8 rounded-full overflow-hidden flex items-center justify-center border border-white/20 bg-black/50">
                <Image
                  src="https://res.cloudinary.com/dvfbspv3p/image/upload/q_auto/f_auto/v1777356868/ChatGPT_Image_Apr_28_2026_11_35_34_AM_nehvj0.png"
                  alt="Bhavya Aishwarya"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Socials */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex flex-col gap-4 hidden lg:flex">
              <a href={personalData.github} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 hover:text-cyan-400 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
