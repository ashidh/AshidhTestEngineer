'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white pt-20">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Senior QA Engineer
            </div>

            <h1 className="text-4xl md:text-8xl font-bold text-slate-900 tracking-tight mb-6">
              Ashidh P C
            </h1>

            <p className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium">
              Senior Quality Assurance Engineer | Manual, API & Automation Testing | Selenium, Java, Postman | SDLC, STLC, Agile | Delivering High-Quality Software Solutions
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Ashidh_P_C_Resume.pdf"
                download="Ashidh_P_C_Resume.pdf"
                className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-600/20 active:scale-95 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>

              <a href="#projects" className="px-6 py-3 bg-white text-slate-900 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-300 active:scale-95 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                View Projects
              </a>
            </div>

            <div className="mt-16 flex flex-col md:flex-row md:items-center gap-8 text-slate-400">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">3+</span>
                <span className="text-sm font-medium">Years Experience</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">100%</span>
                <span className="text-sm font-medium">API Test Coverage</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">Fintech</span>
                <span className="text-sm font-medium">Domain Expert</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
