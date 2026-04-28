"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/portfolio";
import { Brain, Code2, LineChart, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="h-full w-full relative flex items-center justify-center py-12">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-10"
        >
          <h2 className="text-4xl font-bold mb-3">
            Executive <span className="text-gradient">Summary</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Summary Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              {personalData.summary}
            </p>
            
            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-2xl flex flex-col justify-center items-center text-center">
                <h4 className="text-2xl font-bold text-white mb-1">3+</h4>
                <p className="text-xs text-gray-400 font-medium">Years Coding</p>
              </div>
              <div className="glass-card p-4 rounded-2xl flex flex-col justify-center items-center text-center">
                <h4 className="text-2xl font-bold text-white mb-1">10+</h4>
                <p className="text-xs text-gray-400 font-medium">Projects Built</p>
              </div>
            </div>
          </motion.div>

          {/* Core Competencies Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 h-full max-h-[50vh] overflow-y-auto hide-scrollbar pb-2"
          >
            {[
              { icon: Brain, title: "AI & ML", desc: "Building intelligent predictive models and LLM integrations." },
              { icon: Code2, title: "Full-Stack", desc: "Architecting scalable web apps with modern technologies." },
              { icon: LineChart, title: "Data Driven", desc: "Translating complex data into actionable insights." },
              { icon: Target, title: "Problem Solver", desc: "Executing solutions for real-world business challenges." },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl hover:-translate-y-1 transition-transform duration-300 border-t border-l border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3 text-purple-400">
                  <item.icon size={20} />
                </div>
                <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
