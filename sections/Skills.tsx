
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="bg-[#0f172a]/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-cyan-400">Tech Stack</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          The tools and technologies I use to bring ideas to life. I stay updated with the latest industry standards to ensure high-quality delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={skill.name}
            whileHover={{ y: -5 }}
            className="p-8 bg-[#0f172a] rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-cyan-500/10 transition-colors">
                <img src={skill.icon} alt={skill.name} className="w-8 h-8 filter invert opacity-80 group-hover:opacity-100" />
              </div>
              <span className="text-2xl font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">{skill.level}%</span>
            </div>
            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: "circOut", delay: idx * 0.1 }}
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-10 bg-gradient-to-tr from-cyan-900/20 via-slate-900/40 to-purple-900/20 rounded-3xl border border-white/5 text-center">
        <h3 className="text-2xl font-bold mb-4 italic text-slate-300">"Learning never stops. Adapting always pays off."</h3>
        <p className="text-slate-400">I am constantly exploring new technologies like WebAssembly, Rust, and AI-assisted development workflows.</p>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
