"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/portfolio";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="h-full w-full relative flex flex-col justify-center items-center py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col h-full justify-between">
        
        <div className="grid md:grid-cols-2 gap-10 items-center flex-grow mt-10">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-md">
              I am currently available for internships, full-time roles, and freelance collaborations. Let&apos;s build the future.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email</p>
                  <a href={`mailto:${personalData.email}`} className="text-base font-semibold text-white hover:text-cyan-400 transition-colors">
                    {personalData.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-base font-semibold text-white">{personalData.location || "Remote / Worldwide"}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href={personalData.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all">
                <FaGithub size={18} />
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all">
                <FaLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 md:p-8 rounded-3xl relative"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>
            
            <form className="relative z-10 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm" placeholder="john@company.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Subject</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm" placeholder="Opportunity" />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Message</label>
                <textarea rows={3} className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none text-sm" placeholder="We would love to discuss..."></textarea>
              </div>

              <button type="submit" className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(0,229,255,0.2)] text-sm mt-2">
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Integrated Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 shrink-0 mb-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Built with <span className="text-white font-semibold">Next.js & Tailwind</span> <ArrowUpRight size={12} className="text-cyan-500" />
          </p>
        </div>

      </div>
    </section>
  );
}
