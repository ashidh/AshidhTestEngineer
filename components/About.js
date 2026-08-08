'use client';

import { motion } from 'framer-motion';
import { Target, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg-dark border-y border-glass-border/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">Strategizing <span className="neon-text">Excellence</span></h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              With over 3 years of hands-on experience in Quality Control, I specialize in bridging the gap between development and end-user satisfaction. My approach is rooted in precision, technological innovation, and a commitment to streamlining testing lifecycles.
            </p>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed font-medium">
              I don&apos;t just find bugs; I design workflows that prevent them. My leadership in QA involves implementing automation frameworks that scale and mentoring teams to achieve 100% excellence in every release.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-4xl font-black text-white block">3+</span>
                <span className="text-sm text-primary-cyan font-bold uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="text-4xl font-black text-white block">50+</span>
                <span className="text-sm text-primary-cyan font-bold uppercase tracking-wider">Projects Delivered</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            <div className="glass-card p-8 flex items-start gap-6 hover:bg-white/5 transition-all">
              <div className="p-3 bg-primary-cyan/10 rounded-lg text-primary-cyan">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Centric</h3>
                <p className="text-text-secondary text-sm">Focusing on long-term stability and user satisfaction through rigorous testing protocols.</p>
              </div>
            </div>

            <div className="glass-card p-8 flex items-start gap-6 hover:bg-white/5 transition-all">
              <div className="p-3 bg-primary-cyan/10 rounded-lg text-primary-cyan">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Team Leadership</h3>
                <p className="text-text-secondary text-sm">Empowering engineers through mentorship and modern Agile/Scrum practices.</p>
              </div>
            </div>

            <div className="glass-card p-8 flex items-start gap-6 hover:bg-white/5 transition-all">
              <div className="p-3 bg-primary-cyan/10 rounded-lg text-primary-cyan">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
                <p className="text-text-secondary text-sm">Constant optimization of testing frameworks to reduce time-to-market while increasing coverage.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
