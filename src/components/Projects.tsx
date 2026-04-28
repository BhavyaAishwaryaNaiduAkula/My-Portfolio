"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/portfolio";
import { ExternalLink, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            High-impact solutions engineered for scalability, performance, and real-world business value.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full relative"
            >
              {/* Premium Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10 transition-all duration-500 z-0" />
              
              <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 relative border-b border-white/10 z-10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700">
                   <Activity size={80} className="text-cyan-500" />
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Impact Statement */}
                <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4 mb-6">
                  <p className="text-xs font-semibold text-purple-300">
                    <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Business Impact</span>
                    {project.impact}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ml-auto">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
