'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Quality Assurance Engineer',
    company: 'Distinct Infotech Solutions',
    period: 'Feb 2024 – Present',
    location: 'Current Role',
    description: 'Spearheading Playwright automation suites and end-to-end quality validation across business-critical International Remittance, Forex, AML Screening, and Customer Onboarding applications.',
    highlights: [
      'Developed and maintain Playwright (TypeScript) regression and smoke automation suites covering the Login, Customer Profile, Remittance, and Forex pages, reducing regression testing time by 70–80%.',
      'Design and execute manual test cases for Remittance, Forex, AML Screening, and Customer Onboarding modules.',
      'Conduct manual testing of web, Android, and iOS applications across functional, regression, integration, system, UAT, exploratory, smoke, sanity, and end-to-end scenarios.',
      'Apply Generative AI to generate test scenarios, identify edge cases, and improve overall test coverage.',
      'Perform API testing of third-party Remittance APIs using Postman, SQL database validation, and end-to-end testing.',
      'Review business requirements and user stories to identify functional gaps, edge cases, and testability concerns.',
      'Manage the defect lifecycle in JIRA, perform root cause analysis (RCA), and verify defect fixes.',
      'Collaborate with developers, business analysts, and product teams throughout Agile sprints and release cycles.',
      'Support release validation and production deployment, and mentor junior QA engineers.'
    ]
  },
  {
    role: 'Automation Testing Intern',
    company: 'The Testing Academy',
    period: 'Sep 2023 – Jan 2024',
    location: 'Internship',
    description: 'Underwent structured training in automation testing fundamentals, framework architecture, and hands-on scripting.',
    highlights: [
      'Automated test cases for OrangeHRM and a sample e-commerce web application using Selenium WebDriver with Java as part of a structured training program.',
      'Applied the Page Object Model (POM) design pattern to build maintainable, reusable automation scripts.',
      'Gained exposure to TestNG, locator strategies, and test reporting fundamentals.'
    ]
  },
  {
    role: 'Test & Implementation Engineer',
    company: 'Smart HMS Solutions Pvt. Ltd.',
    period: 'Sep 2022 – Sep 2023',
    location: 'Previous Role',
    description: 'Directed end-to-end manual testing, quality assurance, and client implementation for Hospital Management Information Systems (HMIS).',
    highlights: [
      'Designed and executed functional, regression, sanity, exploratory, and end-to-end test cases based on healthcare business requirements.',
      'Tested healthcare modules covering Patient Onboarding & Care, Inventory Management, Pharmacy & Billing, Human Resource Management, Finance, and Mobility.',
      'Performed manual testing of web and mobile applications across multiple browsers, devices, and environments.',
      'Participated in Agile ceremonies, including sprint planning, backlog grooming, and daily stand-ups.',
      'Managed defect reporting, tracking, regression validation, and requirement traceability using JIRA.',
      'Prepared test data, verified environments, supported release validation, conducted client demonstrations, and led User Acceptance Testing (UAT).'
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
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 border-l-2 border-slate-100 pb-4 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-sm ring-4 ring-emerald-50" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">{exp.role}</h4>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2 text-sm font-semibold text-emerald-600">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <div className="self-start sm:self-auto px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-md text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  {exp.location}
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed max-w-3xl font-medium">
                {exp.description}
              </p>
              
              <div className="grid gap-3">
                {exp.highlights.map(highlight => (
                  <div key={highlight} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span>{highlight}</span>
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
