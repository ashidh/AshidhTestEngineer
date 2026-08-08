'use client';

import { motion } from 'framer-motion';
import { Landmark, Terminal, Users2, ShieldCheck, Mail, Linkedin, Github, TrendingUp } from 'lucide-react';

const cards = [
  {
    title: 'Financial Systems',
    description: 'Specialized testing for international money transfer, forex, and AML screening systems with fraud detection rules.',
    icon: <Landmark className="w-8 h-8 text-emerald-600" />,
    features: ['Forex & Remittance', 'Fraud Detection Rules', 'AML Analytic Screening']
  },
  {
    title: 'API Mastery',
    description: 'Expertise in manual and automated API testing using Postman & Newman collections for complex financial workflows.',
    icon: <Terminal className="w-8 h-8 text-emerald-600" />,
    features: ['Postman Automation', 'SoapUI Testing', 'Dynamic Test Data']
  },
  {
    title: 'Process Leadership',
    description: 'Agile/Scrum expert managing defect lifecycles in JIRA and mentoring junior QA engineers through Knowledge Transfer (KT).',
    icon: <Users2 className="w-8 h-8 text-emerald-600" />,
    features: ['SDLC & STLC Expert', 'Junior QA Mentorship', 'Knowledge Transfer (KT)']
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 -skew-x-12 transform translate-x-1/2" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Professional Synopsis</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Passionate QA Engineer <br />
              <span className="text-emerald-600">Delivering Quality.</span>
            </h3>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                🚀 Passionate QA Engineer with 3 years of experience in manual testing of web and mobile applications, along with hands-on exposure to API testing using Postman and SoapUI, and automation using Java & Selenium.
              </p>
              <p>
                🔍 Skilled in writing detailed test cases, bug reports, and executing test plans to ensure quality and performance. Experienced in automating API flows and handling dynamic test data across multiple chained requests.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Currently at Distinct Infotech
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden mt-10 md:mt-16 group"
          >
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-2xl font-bold text-white tracking-tight">Technical Roadmap</h4>
              </div>
              
              <p className="text-slate-300 mb-10 leading-relaxed font-medium">
                Pioneering growth in advanced automation frameworks to deliver zero-defect financial ecosystems.
              </p>
              
              <div className="space-y-5">
                {[
                  { title: 'TestNG Automation', color: 'bg-emerald-500' },
                  { title: 'RestAssured API', color: 'bg-emerald-400' },
                  { title: 'Cypress E2E', color: 'bg-emerald-600' }
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover/item:border-emerald-500/50 transition-all duration-300">
                      <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-white tracking-wide">{item.title}</span>
                      <div className="w-32 h-1.5 bg-white/5 rounded-full mt-2 overflow-hidden">
                        <motion.div 
                          className={`h-full ${item.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: '60%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-16">
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
                  <p className="text-slate-600 mb-8 leading-relaxed text-sm">
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

function ShieldCheckIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
