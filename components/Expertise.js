'use client';

import { motion } from 'framer-motion';
import { Landmark, Terminal, Users2 } from 'lucide-react';

const cards = [
  {
    title: 'Financial & Remittance',
    description: 'Specialized testing for international money transfer, forex, AML screening, and payment processing systems.',
    icon: <Landmark className="w-8 h-8 text-emerald-600" />,
    features: ['Forex & Remittance', 'AML Screening Rules', 'Payment Processing']
  },
  {
    title: 'Automation & API Testing',
    description: 'Playwright (TypeScript) suites, Postman API automation, data-driven testing, and SQL database validation.',
    icon: <Terminal className="w-8 h-8 text-emerald-600" />,
    features: ['Playwright (TypeScript)', 'Postman API Automation', 'SQL Database Validation']
  },
  {
    title: 'Process & AI Innovation',
    description: 'Agile/Scrum practitioner leveraging Generative AI for test design, JIRA defect management with RCA, and mentoring.',
    icon: <Users2 className="w-8 h-8 text-emerald-600" />,
    features: ['AI-Assisted Test Design', 'Agile & JIRA Defect Lifecycle', 'Junior QA Mentorship']
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 -skew-x-12 transform translate-x-1/2" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Professional Synopsis */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col items-center"
          >
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Professional Synopsis</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Senior Quality Assurance Engineer <br />
              <span className="text-emerald-600">Driving Precision & Delivering Quality.</span>
            </h3>
            <div className="space-y-4 text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-3xl">
              <p>
                Senior Quality Assurance Engineer with <span className="font-semibold text-slate-800">4 years of experience</span> across manual and automated testing for business-critical applications. Specialized in <span className="font-semibold text-slate-800">Playwright (TypeScript)</span> automation, API testing, SQL database validation, and mobile application testing (Android & iOS), with hands-on use of <span className="font-semibold text-slate-800">Generative AI</span> to accelerate test case generation and edge-case discovery.
              </p>
              <p className="text-base md:text-lg text-slate-600">
                Skilled in functional, regression, integration, system, UAT, exploratory, smoke, sanity, and end-to-end testing across International Remittance, Forex, AML Screening, Customer Onboarding, Payment Processing, and Healthcare domains.
              </p>
              <div className="pt-4 flex justify-center items-center flex-wrap gap-4">
                <div className="inline-flex items-center gap-2.5 text-slate-900 font-bold px-5 py-2.5 bg-white rounded-full shadow-sm border border-slate-200 text-sm">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                  Currently Senior QA Engineer at Distinct Infotech Solutions
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Core Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Expertise <span className="text-emerald-600">Dashboard</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col hover:shadow-xl transition-all duration-300 group h-full"
            >
              <div className="p-6 md:p-10 flex flex-col flex-grow">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                  {card.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{card.title}</h4>
                <div className="flex-grow">
                  <p className="text-slate-600 mb-8 leading-relaxed text-sm font-medium">
                    {card.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-100">
                  {card.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
