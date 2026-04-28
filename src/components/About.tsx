"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/portfolio";
import { Brain, Code2, LineChart, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Executive <span className="text-gradient">Summary</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Summary Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              {personalData.summary}
            </p>
            
            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-3xl font-bold text-white mb-2">3+</h4>
                <p className="text-sm text-gray-400 font-medium">Years Coding</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-3xl font-bold text-white mb-2">10+</h4>
                <p className="text-sm text-gray-400 font-medium">Projects Built</p>
              </div>
            </div>
          </motion.div>

          {/* Core Competencies Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Brain, title: "AI & ML", desc: "Building intelligent predictive models and LLM integrations." },
              { icon: Code2, title: "Full-Stack", desc: "Architecting scalable web apps with modern technologies." },
              { icon: LineChart, title: "Data Driven", desc: "Translating complex data into actionable insights." },
              { icon: Target, title: "Problem Solver", desc: "Executing solutions for real-world business challenges." },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border-t border-l border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                  <item.icon size={24} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
