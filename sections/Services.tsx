
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <SectionWrapper id="services">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How I Can <br /><span className="text-cyan-400">Help You</span></h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            From initial concept to final deployment, I offer end-to-end digital services that focus on performance, aesthetics, and business goals.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold">01</div>
              <span>Discovery & Strategy</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold">02</div>
              <span>Design & Prototyping</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 font-bold">03</div>
              <span>Development & QA</span>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.03 }}
              className="p-10 bg-[#0f172a] border border-white/5 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                {service.icon}
              </div>
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
