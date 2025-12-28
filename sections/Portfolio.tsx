
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <SectionWrapper id="portfolio" className="bg-[#0f172a]/30">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-cyan-400">Projects</span></h2>
          <p className="text-slate-400 max-w-xl">
            A selection of my recent works across different industries. Each project is built with attention to detail and user experience.
          </p>
        </div>
        <motion.button 
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1"
        >
          See All Projects <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-slate-800 relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.link} className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-2">{project.category}</div>
              <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Portfolio;
