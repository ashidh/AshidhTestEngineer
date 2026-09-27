'use client';

import { motion } from 'framer-motion';
import { Download, Eye, CheckCircle2, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50/30">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Light Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-36 left-1/2 -translate-x-1/2 w-[720px] h-[520px] bg-gradient-to-b from-emerald-300/35 via-teal-200/25 to-transparent rounded-full blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 -left-28 w-[450px] h-[450px] bg-emerald-400/20 rounded-full blur-[100px]"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/3 -right-28 w-[480px] h-[480px] bg-teal-300/20 rounded-full blur-[110px]"
        />

        {/* High-tech Engineering Grid with Radial Vignette */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 40%, black 25%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 40%, black 25%, transparent 80%)'
          }}
        />

        {/* Subtle Tech Dot Matrix */}
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse 60% 55% at 50% 40%, black 15%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 55% at 50% 40%, black 15%, transparent 75%)'
          }}
        />
      </div>

      {/* Floating QA Badges */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden lg:flex items-center gap-2.5 px-4 py-2.5 bg-white/85 backdrop-blur-md rounded-2xl shadow-xl shadow-emerald-950/5 border border-emerald-100 text-xs font-bold text-slate-700 absolute top-1/3 left-8 xl:left-20 pointer-events-none"
      >
        <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </div>
        <span>Playwright E2E &bull; 100% Passed</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden lg:flex items-center gap-2.5 px-4 py-2.5 bg-white/85 backdrop-blur-md rounded-2xl shadow-xl shadow-emerald-950/5 border border-emerald-100 text-xs font-bold text-slate-700 absolute top-2/5 right-8 xl:right-20 pointer-events-none"
      >
        <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
          <Zap className="w-3.5 h-3.5" />
        </div>
        <span>70-80% Faster Regression</span>
      </motion.div>

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Pulsing Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-200/90 text-emerald-800 text-sm font-semibold mb-6 shadow-sm shadow-emerald-100/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Senior QA Engineer &bull; Playwright Automation
            </div>

            {/* Name Heading with Backlight Glow */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-emerald-400/20 blur-2xl rounded-full -z-10 transform scale-110" />
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-none">
                Ashidh P C
              </h1>
            </div>

            <p className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium max-w-3xl">
              Senior Quality Assurance Engineer | Manual &amp; Automation Testing | Playwright (TypeScript) | Postman API | SDLC, STLC &amp; Agile | Delivering High-Quality Software Solutions
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/Ashidh_P_C_Resume.pdf"
                download="Ashidh_P_C_Resume.pdf"
                className="px-7 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-600/25 active:scale-95 flex items-center gap-2.5"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-7 py-4 bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 font-bold rounded-2xl hover:bg-white hover:border-emerald-200 transition-all duration-300 active:scale-95 flex items-center gap-2.5 shadow-sm"
              >
                <Eye className="w-5 h-5" />
                View Projects
              </a>
            </div>

            {/* Metrics Glass Bar */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14 bg-white/70 backdrop-blur-md px-8 md:px-12 py-6 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-900/5">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-black text-slate-900">4</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Years Experience</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200" />
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-black text-slate-900">Playwright</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Automation Framework</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200" />
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-black text-slate-900">Fintech | Healthcare</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Domain Expert</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
