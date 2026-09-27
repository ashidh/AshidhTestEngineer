'use client';

import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-white pt-24 pb-16">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Senior QA Engineer
            </div>

            <h1 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tight mb-6">
              Ashidh P C
            </h1>

            <p className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium max-w-3xl">
              Senior Quality Assurance Engineer | Manual &amp; Automation Testing | Playwright (TypeScript) | Postman API | SDLC, STLC &amp; Agile | Delivering High-Quality Software Solutions
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/Ashidh_P_C_Resume.pdf"
                download="Ashidh_P_C_Resume.pdf"
                className="px-6 py-3.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-600/20 active:scale-95 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 bg-white text-slate-900 border border-slate-200 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 active:scale-95 flex items-center gap-2 shadow-sm"
              >
                <Eye className="w-5 h-5" />
                View Projects
              </a>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14 text-slate-400">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-slate-900">4</span>
                <span className="text-sm font-medium text-slate-500">Years Experience</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-slate-900">Playwright</span>
                <span className="text-sm font-medium text-slate-500">Automation Framework</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-slate-900">Fintech | Healthcare</span>
                <span className="text-sm font-medium text-slate-500">Domain Expert</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
