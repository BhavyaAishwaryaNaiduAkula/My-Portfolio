"use client";

import { personalData } from "@/data/portfolio";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-xl pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12">
          
          <div className="text-center md:text-left max-w-md">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              {personalData.name.split(" ")[0]}<span className="text-cyan-400">.</span>AI
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering the future through elegant code and intelligent systems. Always open to discussing new opportunities, ideas, and collaborations.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <h4 className="text-white font-semibold tracking-wide uppercase text-sm">Connect</h4>
            <div className="flex items-center gap-4">
              <a href={personalData.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all">
                <FaGithub size={20} />
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href={`mailto:${personalData.email}`} className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <span className="text-white font-semibold">Next.js & Tailwind</span> <ArrowUpRight size={14} className="text-cyan-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
