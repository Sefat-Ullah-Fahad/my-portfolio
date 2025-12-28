
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { EXPERIENCES } from '../constants';
import { Calendar, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Professional <br /><span className="text-cyan-400">Journey</span></h2>
          
          <div className="relative border-l-2 border-white/5 ml-4 pl-10 space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.company + idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[51px] top-1 w-5 h-5 rounded-full border-4 border-[#020617] bg-cyan-500 shadow-lg shadow-cyan-500/50" />
                
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="p-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[3rem] border border-white/5 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-6xl font-serif text-cyan-500 mb-8">“</div>
              <p className="text-2xl font-medium text-slate-200 leading-snug mb-10">
                Working with Alex was a game-changer for our platform. His attention to detail and ability to translate complex logic into a beautiful UI is unmatched. He is highly communicative and delivers beyond expectations.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-700 overflow-hidden">
                  <img src="https://picsum.photos/seed/face1/100/100" alt="Client" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">James McAvoy</div>
                  <div className="text-slate-500">CEO, Digital Horizon</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-8 bg-[#0f172a] rounded-3xl border border-white/5 text-center">
              <div className="text-3xl font-bold text-white mb-1">120+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Projects Done</div>
            </div>
            <div className="p-8 bg-[#0f172a] rounded-3xl border border-white/5 text-center">
              <div className="text-3xl font-bold text-white mb-1">45+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
