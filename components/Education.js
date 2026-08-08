'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, ExternalLink } from 'lucide-react';

const certs = [
  { name: 'Automation Testing with Selenium with JAVA', issuer: 'The Testing Academy', url: 'https://www.linkedin.com/in/ashidhpc/details/certifications/' },
  { name: 'Certified in JPMorgan Chase & Co\'s Agile', issuer: 'Forage', url: 'https://www.linkedin.com/in/ashidhpc/details/certifications/' },
  { name: 'SQL Masterclass: Zero to Hero', issuer: 'The Testing Academy', url: 'https://www.linkedin.com/in/ashidhpc/details/certifications/' },
  { name: 'Basic to Advanced Microsoft Excel', issuer: 'Skill Nation', url: 'https://www.linkedin.com/in/ashidhpc/details/certifications/' },
  { name: 'Responsive Web Design', issuer: 'FreeCodeCamp', url: 'https://www.linkedin.com/in/ashidhpc/details/certifications/' }
];

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <div className="mb-10">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Academic Foundation</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Education</h3>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card bg-emerald-50/30 border-emerald-100 p-8"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-emerald-100 text-emerald-600">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Bachelor of Technology</h4>
                  <p className="text-emerald-700 font-bold mb-4">Government Engineering College Idukki</p>
                  <div className="text-sm text-slate-500 font-medium">Graduated Class of 2021</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <div className="mb-10">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Professional Validation</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certs.map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 hover:border-emerald-200 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <h5 className="text-sm font-bold text-slate-900 leading-tight">{cert.name}</h5>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">{cert.issuer}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
