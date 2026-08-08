'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PlaywrightIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path fill="#2EAD33" d="M19.143 12.001a7.143 7.143 0 11-14.286 0 7.143 7.143 0 0114.286 0zM12 4.286C7.739 4.286 4.286 7.739 4.286 12s3.453 7.714 7.714 7.714 7.714-3.453 7.714-7.714-3.453-7.714-7.714-7.714zm0 2.571a5.143 5.143 0 100 10.286 5.143 5.143 0 000-10.286z"/>
    <path fill="#45BA5A" d="M21.714 12c0 5.365-4.349 9.714-9.714 9.714S2.286 17.365 2.286 12 6.635 2.286 12 2.286 21.714 6.635 21.714 12zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const SoapUIIcon = () => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" className="w-full h-full">
    <path style={{fill:'#00A9E0'}} d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z"/>
    <path style={{fill:'#FFFFFF'}} d="M192.427,341.333c-35.346,0-64-28.654-64-64s28.654-64,64-64s64,28.654,64,64S227.773,341.333,192.427,341.333z M319.573,170.667c35.346,0,64,28.654,64,64s-28.654,64-64,64s-64-28.654-64-64S284.227,170.667,319.573,170.667z"/>
  </svg>
);

const techItems = [
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'SoapUI', customIcon: <SoapUIIcon /> },
  { name: 'JMeter', icon: 'https://cdn.worldvectorlogo.com/logos/jmeter.svg' },
  { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
  { name: 'Playwright', customIcon: <PlaywrightIcon /> },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'JIRA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

export default function TechStack() {
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <section id="stack" className="py-16 md:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Testing Engine</h2>
          <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Tools & <span className="text-emerald-600">Technologies</span></h3>
        </div>
      </div>

      <div className="relative flex">
        <motion.div
          className="flex whitespace-nowrap gap-12 py-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {duplicatedItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-8 py-4 rounded-2xl group hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                {tech.customIcon ? (
                  <div className="w-full h-full">{tech.customIcon}</div>
                ) : (
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                )}
              </div>
              <span className="text-lg font-bold text-slate-700 group-hover:text-emerald-700">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container max-w-6xl mx-auto px-6 mt-16">
        <div className="glass-card py-6 px-6 md:px-10 flex flex-col md:flex-row flex-wrap justify-center items-center gap-y-4 md:gap-x-12 gap-x-8 text-slate-500 font-bold uppercase tracking-widest text-[10px] bg-slate-50/50 border-slate-100">
          <span className="text-center">Postman Automation</span>
          <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
          <span className="text-center">SoapUI Integration</span>
          <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
          <span className="text-center">Playwright Mastery</span>
          <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
          <span className="text-center">TypeScript Migration</span>
        </div>
      </div>
    </section>
  );
}
