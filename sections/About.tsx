
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/office/800/800" 
              alt="Creative Space"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#0f172a] p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block">
            <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-sm text-slate-400 leading-tight">Years of professional experience in digital engineering</div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Crafting Digital <br />
            <span className="text-cyan-400">Experiences</span> with Purpose
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            I am a software engineer based in London, specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at the intersection of technology and creativity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Performance Optimization",
              "Scalable Architecture",
              "Interactive UI Design",
              "Fullstack Integration",
              "Strategic Consultation",
              "Agile Methodology"
            ].map((item, idx) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl border border-white/5"
          >
            <p className="italic text-slate-300">
              "Alex doesn't just write code; he builds solutions that consider the user, the business, and the future scalability of the product. A true professional."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-700" />
              <div>
                <div className="text-sm font-bold text-white">Sarah Jenkins</div>
                <div className="text-xs text-slate-500">CTO at InnovateX</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
