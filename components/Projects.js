'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code2 as Github, Database, FileSearch } from 'lucide-react';

const projects = [
  {
    title: 'API Automation',
    subtitle: 'Remittance API Automation',
    description: [
      'Automated REST APIs for inward/outward remittance workflows using Postman',
      'Developed test scripts (JavaScript) for response validation, auth tokens, and business rules',
      'Performed data-driven testing using environments & collection runner',
      'Validated transaction flow, forex conversion, and status tracking',
      'Tools: Postman, REST APIs, JavaScript, JSON, JIRA',
      'Impact: Reduced manual effort and improved reliability of financial transactions'
    ],
    icon: <Database className="w-10 h-10 text-emerald-600" />,
    metrics: ['Postman', 'JavaScript', 'REST APIs'],
  },
  {
    title: 'Web & Mobile Application Testing',
    subtitle: 'Remittance & AML Screening Systems',
    description: [
      'Executed functional, regression, and sanity testing for financial applications',
      'Validated end-to-end transaction flows & AML screening rules',
      'Logged and tracked defects using JIRA with proper severity and priority',
      'Performed database validation using MySQL queries',
      'Tools: JIRA, MySQL, Postman, Agile',
      'Impact: Improved release quality and prevented critical production issues'
    ],
    icon: <FileSearch className="w-10 h-10 text-emerald-600" />,
    metrics: ['JIRA', 'MySQL', 'AML Screening'],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Featured Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Technical <span className="text-emerald-600">Showcase</span></h3>
          </div>
          <p className="text-slate-600 max-w-md font-medium">Focused on delivering high-integrity automation and precision testing for the financial sector.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-emerald-50 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                  {project.icon}
                </div>
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">{project.title}</h4>
              <p className="text-emerald-600 font-bold mb-6 text-sm uppercase tracking-wide">{project.subtitle}</p>

              <ul className="space-y-3 mb-10 flex-grow">
                {project.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                {project.metrics.map(metric => (
                  <span key={metric} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-black rounded-full border border-slate-100 uppercase tracking-widest">
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
