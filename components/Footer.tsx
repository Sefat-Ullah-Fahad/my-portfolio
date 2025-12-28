
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#020617] text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          ALEX RIVIERA
        </div>
        <p className="text-slate-500 text-sm mb-8">
          © {new Date().getFullYear()} All rights reserved. Designed and engineered with passion.
        </p>
        <div className="flex justify-center gap-8 text-xs font-bold text-slate-600 uppercase tracking-widest">
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Newsletter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
