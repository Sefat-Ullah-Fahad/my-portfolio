
// import React from 'react';
// import { motion } from 'framer-motion';
// import SectionWrapper from '../components/SectionWrapper';
// import { CheckCircle2 } from 'lucide-react';

// const About: React.FC = () => {
//   return (
//     <SectionWrapper id="about">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         <div className="relative">
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
//           >
//             <img 
//               src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1767073481/WhatsApp_Image_2025-12-06_at_09.47.05_ebc0dbd8_lvnggx.jpg" 
//               alt="Creative Space"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//           <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#0f172a] p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block">
//             <div className="text-4xl font-bold text-cyan-400 mb-2">1+</div>
//             <div className="text-sm text-slate-400 leading-tight">Years of professional experience in  <span className="text-[#1ecdec]">full stack & WardPress Development</span> </div>
//           </div>
//         </div>

//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//             Crafting Digital <br />
//             <span className="text-cyan-400">Experiences</span> with Purpose
//           </h2>
//           <p className="text-lg text-slate-400 mb-8 leading-relaxed">
//             I am a software engineer based in Bangladesh, specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at the intersection of technology and creativity.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[
//               "Performance Optimization",
//               "Scalable Architecture",
//               "Interactive UI Design",
//               "Fullstack Integration",
//               "Strategic Consultation",
//               "Agile Methodology"
//             ].map((item, idx) => (
//               <motion.div 
//                 key={item}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="flex items-center gap-3"
//               >
//                 <CheckCircle2 className="w-5 h-5 text-cyan-400" />
//                 <span className="text-slate-300 font-medium">{item}</span>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div 
//             className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl border border-white/5"
//           >
//             <p className="italic text-slate-300">
//               "Alex doesn't just write code; he builds solutions that consider the user, the business, and the future scalability of the product. A true professional."
//             </p>
//             <div className="mt-4 flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-slate-700" />
//               <div>
//                 <div className="text-sm font-bold text-white">Sarah Jenkins</div>
//                 <div className="text-xs text-slate-500">CTO at InnovateX</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* Image Animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <motion.img 
              src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1767073481/WhatsApp_Image_2025-12-06_at_09.47.05_ebc0dbd8_lvnggx.jpg" 
              alt="Creative Space"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          {/* Badge Animation */}
          <motion.div 
            className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#0f172a] p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="text-4xl font-bold text-cyan-400 mb-2">1+</div>
            <div className="text-sm text-slate-400 leading-tight">
              Years of professional experience in <span className="text-[#1ecdec]">full stack & WordPress Development</span>
            </div>
          </motion.div>
        </div>

        {/* Text and Skills Section */}
        <div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Crafting Digital <br />
            <span className="text-cyan-400">Experiences</span> with Purpose
          </motion.h2>

          <motion.p
            className="text-lg text-slate-400 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            I am a software engineer based in Bangladesh, specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at the intersection of technology and creativity.
          </motion.p>

          {/* Skills List with Framer Motion */}
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

          {/* Testimonial Section */}
          <motion.div 
            className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl border border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
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
