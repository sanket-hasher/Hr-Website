import React, { useState } from 'react';
import logo from '../assets/hr_souk_logo_2.png';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calibriStyle = { fontFamily: 'Calibri, sans-serif' };

  return (
    <footer id="footer" className="bg-slate-900 text-white py-12 scroll-mt-10" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="space-y-6 max-w-sm">
            <img src={logo} alt="HR Souk" className="h-16 md:h-20 w-auto object-contain filter drop-shadow-[0_0_2px_rgba(255,255,255,1)]" />
            <p className="opacity-70 leading-relaxed text-[14px]">
              Empowering organizations with smart, ethical, and technology-driven HR solutions across the GCC and beyond.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-aurora-teal">Contact Us</h4>
            <div className="space-y-4 text-[14px]">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-black text-white/30 tracking-[0.2em] mb-1">Office</span>
                <span className="opacity-90">Kolkata, India</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-black text-white/30 tracking-[0.2em] mb-1">Direct</span>
                <span>0000000000</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-black text-white/30 tracking-[0.2em] mb-1">Email</span>
                <a href="mailto:advisory@hrsouk.in" className="hover:text-aurora-teal transition-all">advisory@hrsouk.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] opacity-30 tracking-widest uppercase font-bold">© 2026 HR Souk. All rights reserved.</p>
          <button onClick={() => setIsModalOpen(true)} className="text-[11px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-aurora-teal transition-all flex items-center gap-2 group">
            <span className="w-4 h-[1px] bg-white/20 group-hover:bg-aurora-teal transition-all"></span>
            Privacy Policy
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white/90 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col border border-white">
            <div className="h-1.5 w-full bg-aurora-teal"></div>
            <div className="px-10 py-8 border-b border-slate-200 flex justify-between items-center text-slate-900">
               <h3 className="text-2xl font-serif font-bold">Privacy <span className="text-aurora-teal italic font-light">Policy</span></h3>
               <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">✕</button>
            </div>
            <div className="px-10 py-10 overflow-y-auto text-slate-800 text-[15px] space-y-6">
              <p className="font-bold">Effective Date: January 15, 2026</p>
              <p>We securely store corporate identifiers strictly for advisory purposes. Information is utilized exclusively to architect tailored HR frameworks.</p>
              <p>Our systems employ industry-leading encryption protocols to safeguard your organizational data from unauthorized intrusion.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;