"use client";

import { motion } from "framer-motion";
import { GitCommit, Star, Code, Award } from "lucide-react";

export default function Trust() {
  const stats = [
    { label: "Total Commits", value: "1,200+", icon: GitCommit, color: "text-purple-400" },
    { label: "GitHub Stars", value: "50+", icon: Star, color: "text-yellow-400" },
    { label: "Repositories", value: "35", icon: Code, color: "text-cyan-400" },
    { label: "Certifications", value: "4", icon: Award, color: "text-green-400" },
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
            >
              <stat.icon size={40} className={`${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
