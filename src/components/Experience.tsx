"use client";

import { motion } from "framer-motion";
import { experienceData, educationData } from "@/data/portfolio";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                <Briefcase size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="relative border-l border-white/10 ml-6 space-y-12 pb-8">
              {experienceData.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute w-4 h-4 rounded-full bg-cyan-500 -left-[9px] top-2 shadow-[0_0_10px_#00E5FF]"></div>
                  <div className="glass-card p-6 rounded-2xl">
                    <span className="text-sm font-semibold text-cyan-400 block mb-1">{exp.year}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                    <p className="text-gray-400 font-medium text-sm mb-4">{exp.company}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            
            <div className="relative border-l border-white/10 ml-6 space-y-12 pb-8">
              {educationData.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute w-4 h-4 rounded-full bg-blue-500 -left-[9px] top-2 shadow-[0_0_10px_#3B82F6]"></div>
                  <div className="glass-card p-6 rounded-2xl">
                    <span className="text-sm font-semibold text-blue-400 block mb-1">{edu.year}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-gray-400 font-medium text-sm mb-4">{edu.institution}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{edu.details}</p>
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
