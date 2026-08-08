'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Senior QA Engineer',
    company: 'Distinct Infotech Solutions Pvt Ltd',
    period: '2024 - Present',
    location: 'Current Role',
    description: 'Contributing to real-time projects with a focus on web application testing and API automation.',
    highlights: [
      'Performed manual testing of web applications across multiple browsers and devices.',
      'Designed and executed test cases for functional and regression testing.',
      'Automated 20+ APIs in Postman including chained requests using environment variables and dynamic scripts.',
      'Validated API responses and status codes for authentication, customer validation, and transaction flows.',
      'Used JIRA for bug tracking and TestLink for test case documentation.',
      'Collaborated closely with developers and product teams in Agile sprints.'
    ]
  },
  {
    role: 'Test and Implementation Engineer',
    company: 'Smart HMS Solutions Pvt Ltd',
    period: '2022 - 2023',
    location: 'Previous Role',
    description: 'Directed end-to-end regression testing and defect management for Hospital Management Information Systems.',
    highlights: [
      'Conducted comprehensive manual testing for web and Android applications, identifying and documenting 150+ critical bugs, which led to a 40% reduction in post-release issues.',
      'Designed and executed robust test scenarios and test cases for HMIS, improving testing efficiency by 20%.',
      'Led the defect management process, resulting in a 35% reduction in defect turnaround time.',
      'Actively participated in Agile ceremonies such as daily stand-ups and sprint planning.',
      'Prepared and delivered detailed daily and weekly QA status reports for stakeholders.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Professional Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Experience <span className="text-emerald-600">Timeline</span></h3>
        </div>

        <div className="max-w-4xl space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 border-l-2 border-slate-100 pb-4 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-sm ring-4 ring-emerald-50" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">{exp.role}</h4>
                  <div className="flex items-center gap-4 mt-2 text-sm font-semibold text-emerald-600">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-slate-500 text-xs font-bold uppercase tracking-wider">
                  {exp.location}
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed max-w-3xl font-medium">
                {exp.description}
              </p>
              
              <div className="grid gap-4">
                {exp.highlights.map(highlight => (
                  <div key={highlight} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    {highlight}
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
