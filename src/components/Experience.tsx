"use client";

import { motion } from "framer-motion";
import { experienceData, educationData } from "@/data/portfolio";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="h-full w-full relative flex flex-col justify-center items-center py-12">
      <div className="container mx-auto px-6 max-w-5xl h-full flex flex-col justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 shrink-0"
        >
          <h2 className="text-4xl font-bold mb-3">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 h-full max-h-[70vh] overflow-hidden">
          
          {/* Experience Column */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 shrink-0">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="relative border-l border-white/10 ml-4 space-y-6 pb-4 overflow-y-auto hide-scrollbar pr-4 flex-grow">
              {experienceData.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-6"
                >
                  <div className="absolute w-3 h-3 rounded-full bg-cyan-500 -left-[6.5px] top-2 shadow-[0_0_8px_#00E5FF]"></div>
                  <div className="glass-card p-4 rounded-xl">
                    <span className="text-xs font-semibold text-cyan-400 block mb-1">{exp.year}</span>
                    <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
                    <p className="text-gray-400 font-medium text-xs mb-2">{exp.company}</p>
                    <p className="text-gray-300 text-xs leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 shrink-0">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="relative border-l border-white/10 ml-4 space-y-6 pb-4 overflow-y-auto hide-scrollbar pr-4 flex-grow">
              {educationData.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-6"
                >
                  <div className="absolute w-3 h-3 rounded-full bg-blue-500 -left-[6.5px] top-2 shadow-[0_0_8px_#3B82F6]"></div>
                  <div className="glass-card p-4 rounded-xl">
                    <span className="text-xs font-semibold text-blue-400 block mb-1">{edu.year}</span>
                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-gray-400 font-medium text-xs mb-2">{edu.institution}</p>
                    <p className="text-gray-300 text-xs leading-relaxed">{edu.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
