
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { ROLES } from '../constants';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Text */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6"
          >
            Available for New Projects
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            Hi, I'm <span className="text-cyan-400">Fahad</span><br />
            <div className="h-[1.8em] relative overflow-hidden inline-block w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[roleIndex]}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="absolute left-0 right-0 bg-gradient-to-r text-4xl pt-10 from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 mb-10 max-w-xl"
          >
            I architect high-performance digital solutions with a focus on visual excellence and seamless interactions. Transforming complex problems into elegant code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-cyan-500 text-slate-900 rounded-xl font-bold hover:bg-cyan-400 transition-all flex items-center gap-2 group shadow-xl shadow-cyan-500/20"
            >
              View My Work
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>

        {/* Right Side: Animated Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Infinite Rotating Border */}
            <motion.div
              animate={{ 
                rotate: 360,
                borderColor: ["#1F4A65", "#FFDF20", "#a855f7", "#ec4899", "#22d3ee"] 
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                borderColor: { duration: 10, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -inset-4 border-4 border-dashed rounded-full"
            />
            
            {/* Glowing Ring */}
            <motion.div 
               animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-8 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur-2xl -z-10"
            />

            {/* Profile Image Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-full overflow-hidden border-8 border-[#0f172a] shadow-2xl relative z-10"
            >
              <img 
                src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1766916009/WhatsApp_Image_2025-12-20_at_7.57.33_PM_xmhmnc.jpg" 
                alt="Alex Riviera"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hidden md:block"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
