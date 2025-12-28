
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail as MailIcon } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" className="pb-32">
      <div className="bg-gradient-to-br from-slate-900 to-black rounded-[4rem] p-8 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to <br /><span className="text-cyan-400">Scale Up?</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Have a project in mind or just want to say hello? Drop me a message and let's create something extraordinary together.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Email Me</div>
                  <div className="text-xl font-bold">hello@alexriviera.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-400 group-hover:text-slate-900 transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Location</div>
                  <div className="text-xl font-bold">London, United Kingdom</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIALS.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 md:p-12 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 space-y-6 shadow-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-cyan-400 focus:outline-none transition-all text-white placeholder:text-slate-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-cyan-400 focus:outline-none transition-all text-white placeholder:text-slate-600"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-2">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry" 
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-cyan-400 focus:outline-none transition-all text-white placeholder:text-slate-600"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-2">Message</label>
              <textarea 
                rows={4}
                placeholder="How can I help you?" 
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-cyan-400 focus:outline-none transition-all text-white placeholder:text-slate-600 resize-none"
              />
            </div>
            <button className="w-full py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-900 font-black rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/20">
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
