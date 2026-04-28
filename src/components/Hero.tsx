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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">{personalData.availability}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
            >
              Hi, I&apos;m {personalData.name.split(" ")[0]} <br />
              <span className="text-gradient leading-tight">{personalData.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10"
            >
              {personalData.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12"
            >
              <a href="#contact" className="glow-box w-full sm:w-auto">
                <button className="w-full relative px-8 py-4 bg-white text-black rounded-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                  Let&apos;s Connect <ChevronRight size={20} />
                </button>
              </a>
              <a href={personalData.resumeUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <button className="w-full px-8 py-4 rounded-lg font-semibold glass flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                  <Download size={20} /> Download Resume
                </button>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle size={16} className="text-cyan-400" />
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
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer glowing rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-cyan-500/30 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Core Avatar Placeholder */}
              <div className="absolute inset-8 rounded-full glass-card overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-white/20">
                 <span className="text-6xl font-bold text-white/50">B.A</span>
              </div>
            </div>

            {/* Floating Socials */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex flex-col gap-4 hidden lg:flex">
              <a href={personalData.github} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 hover:text-cyan-400 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 hover:text-blue-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
