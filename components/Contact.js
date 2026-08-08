'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Link as Linkedin, Send, Github, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const linkedinUrl = "https://www.linkedin.com/in/ashidhpc/";

  // State for form submission
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [scriptUrl, setScriptUrl] = useState('PLACE_YOUR_GOOGLE_SCRIPT_URL_HERE'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      // Use URLSearchParams for Google Apps Script compatibility
      const params = new URLSearchParams();
      formData.forEach((value, key) => params.append(key, value));

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Essential for Google Script Web Apps
        body: params
      });
      
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.2) 2px, transparent 2px), linear-gradient(90deg, rgba(16, 185, 129, 0.2) 2px, transparent 2px)', backgroundSize: '100px 100px' }} />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let&apos;s Build Better <span className="text-emerald-400">Financial Experiences</span></h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
              Ready to elevate your software quality? Whether you&apos;re looking for specialized testing expertise or technical leadership, I&apos;m open to discussing how we can achieve precision at scale.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-400 border border-slate-700 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">Email Strategy</span>
                  <a href="mailto:ashidhchandran@gmail.com" className="text-xl font-bold hover:text-emerald-400 transition-colors">ashidhchandran@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-400 border border-slate-700 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">Professional Network</span>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-emerald-400 transition-colors tracking-tight">linkedin.com/in/ashidhpc/</a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl text-center space-y-6 flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 tracking-tight">Message Sent!</h4>
                  <p className="text-slate-600 font-medium">Thank you for reaching out. I&apos;ll get back to you shortly regarding your inquiry.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all active:scale-95"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  onSubmit={handleSubmit}
                  className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Corporate Email</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Project Inquiry</label>
                    <textarea
                      required
                      name="message"
                      rows="4"
                      placeholder="How can I assist your QA goals?"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm font-bold animate-shake">
                      <AlertCircle className="w-4 h-4" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <button
                    disabled={status === 'submitting'}
                    type="submit"
                    className="w-full py-5 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/10 active:scale-[0.98] uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Dispatch Message'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <footer className="mt-16 md:mt-24 pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white text-[10px] font-black">A</div>
            <span>© {new Date().getFullYear()} Ashidh P C. Precision Built.</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-emerald-400 transition-colors">Resume</a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Github</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
