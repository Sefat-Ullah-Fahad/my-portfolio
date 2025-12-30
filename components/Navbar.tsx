
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { NAV_LINKS } from '../constants';

// const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav 
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
//         <motion.a 
//           href="#hero"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
//         >
//           Fahad
//         </motion.a>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex gap-8 items-center">
//           {NAV_LINKS.map((link, idx) => (
//             <motion.a
//               key={link.name}
//               href={link.href}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
//             >
//               {link.name}
//             </motion.a>
//           ))}
//           <motion.a
//             href="#contact"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="px-6 py-2.5 bg-cyan-500 text-slate-900 rounded-full text-sm font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
//           >
//             Hire Me
//           </motion.a>
//         </div>

//         {/* Mobile Toggle */}
//         <button 
//           className="md:hidden text-slate-200"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-[#0f172a] border-b border-white/10 overflow-hidden"
//           >
//             <div className="flex flex-col p-6 gap-4">
//               {NAV_LINKS.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="text-lg font-medium text-slate-300 hover:text-cyan-400"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { NAV_LINKS } from '../constants';

// const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav 
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
//         <motion.a 
//           href="#hero"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
//         >
//           Fahad
//         </motion.a>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex gap-8 items-center">
//           {NAV_LINKS.map((link, idx) => (
//             <motion.a
//               key={link.name}
//               href={link.href}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
//             >
//               {link.name}
//             </motion.a>
//           ))}
//           <motion.a
//             href="#contact"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="px-6 py-2.5 bg-cyan-500 text-slate-900 rounded-full text-sm font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
//           >
//             Hire Me
//           </motion.a>
//         </div>

//         {/* Mobile Toggle */}
//         <button 
//           className="md:hidden text-slate-200"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-[#0f172a] border-b border-white/10 overflow-hidden"
//           >
//             <div className="flex flex-col p-6 gap-4">
//               {NAV_LINKS.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="text-lg font-medium text-slate-300 hover:text-cyan-400"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 py-3 md:py-4' 
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Fahad
        </motion.a>

        {/* Desktop & Tablet Nav (Large Devices) */}
        <div className="hidden lg:flex gap-8 items-center">
          {NAV_LINKS.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2.5 bg-cyan-500 text-slate-900 rounded-full text-sm font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile & Tablet Toggle (md and below) */}
        <div className="lg:hidden flex items-center gap-4">
           {/* Tablet e 'Hire Me' button dekhate chaile niche deya holo, na chaile bad dite paren */}
          <a
            href="#contact"
            className="hidden sm:block px-5 py-2 bg-cyan-500 text-slate-900 rounded-full text-xs font-bold"
          >
            Hire Me
          </a>
          
          <button 
            className="p-2 text-slate-200 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#020617]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-5 items-center text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-cyan-400 w-full py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-cyan-500 text-slate-900 rounded-xl font-bold mt-2"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;