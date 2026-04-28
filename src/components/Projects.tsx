"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/portfolio";
import { ExternalLink, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="h-full w-full relative flex flex-col justify-center items-center bg-black/50 overflow-hidden">
      <div className="w-full px-6 md:px-12 xl:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            High-impact solutions engineered for scalability, performance, and real-world business value.
          </p>
        </motion.div>

        {/* Horizontal Scroll Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar"
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[85vw] md:min-w-[400px] max-w-[450px] snap-center shrink-0 group glass-card rounded-3xl overflow-hidden flex flex-col h-[500px] relative"
            >
              {/* Premium Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10 transition-all duration-500 z-0" />
              
              <div className="h-40 w-full shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 relative border-b border-white/10 z-10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700">
                   <Activity size={60} className="text-cyan-500" />
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Impact Statement */}
                <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-3 mb-4 shrink-0">
                  <p className="text-[11px] font-semibold text-purple-300">
                    <span className="block text-[9px] text-gray-500 uppercase tracking-wider mb-1">Business Impact</span>
                    <span className="line-clamp-2">{project.impact}</span>
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4 shrink-0">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="px-2 py-1 text-[10px] font-medium bg-white/5 text-gray-300 rounded-full border border-white/10">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-[10px] font-medium bg-white/5 text-gray-500 rounded-full border border-white/10">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-3 border-t border-white/10 shrink-0">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                    <FaGithub size={16} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ml-auto">
                    <ExternalLink size={16} /> Live Demo
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
