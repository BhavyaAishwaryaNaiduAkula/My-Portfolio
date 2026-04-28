"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolio";

export default function Skills() {
  const categories = [
    { title: "Programming Languages", data: skillsData.programming },
    { title: "Software Development", data: skillsData.development },
    { title: "AI & Automation", data: skillsData.ai },
    { title: "Professional Tools", data: skillsData.tools },
  ];

  return (
    <section id="skills" className="h-full w-full relative flex flex-col justify-center items-center">
      <div className="container mx-auto px-6 max-w-6xl h-full flex flex-col justify-center py-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 shrink-0"
        >
          <h2 className="text-4xl font-bold mb-3">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 h-full max-h-[75vh] overflow-y-auto hide-scrollbar pb-4">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-3xl flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-3 shrink-0">
                {category.title}
              </h3>
              
              <div className="space-y-5 flex-grow overflow-y-auto hide-scrollbar pr-2">
                {category.data.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-cyan-400 text-xs font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 w-full animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
