'use client';

import { motion } from 'framer-motion';
import { Shield, Settings, Terminal, Layout, CheckCircle, Database } from 'lucide-react';

const skills = [
  {
    category: 'Management',
    icon: <Shield className="w-8 h-8 text-primary-cyan" />,
    items: ['Team Leadership', 'Agile/Scrum', 'Risk Assessment', 'Stakeholder Management']
  },
  {
    category: 'Testing',
    icon: <CheckCircle className="w-8 h-8 text-primary-cyan" />,
    items: ['Manual & Automation', 'API Testing', 'Regression', 'Security Testing', 'Performance']
  },
  {
    category: 'Tools',
    icon: <Settings className="w-8 h-8 text-primary-cyan" />,
    items: ['Jira', 'Postman', 'Selenium', 'SQL', 'Git', 'Jenkins']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Core <span className="neon-text">Expertise</span></h2>
          <p className="text-text-secondary max-w-xl mx-auto">Specialized in delivering high-quality software solutions through strategic leadership and technical precision.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 hover:border-primary-cyan/50 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">{skill.category}</h3>
              <ul className="space-y-4">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
