import React, { useState } from 'react';
import logo from '../assets/hr_souk_logo_2.png';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Applying Calibri with strictly normal weight
  const calibriStyle = { 
    fontFamily: 'Calibri, "Candara", "Segoe UI", sans-serif',
    fontWeight: '400' 
  };

  return (
    <footer id="footer" className="bg-slate-900 text-white py-8 scroll-mt-10" style={calibriStyle}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* BRAND SECTION */}
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center">
              {/* CLEAN LOGO ENHANCEMENT: Maintained visibility settings */}
              <img 
                src={logo} 
                alt="HR Souk" 
                className="h-20 md:h-24 w-auto object-contain brightness-125 contrast-110 drop-shadow-sm"
              />
            </div>
            {/* Non-bold description */}
            <p className="text-slate-400 leading-relaxed text-[15px] font-normal">
              Empowering organizations with smart, ethical, and technology-driven HR solutions across the GCC and beyond.
            </p>
          </div>

          {/* CONTACT SECTION */}
          <div className="space-y-6">
            <h4 className="font-normal uppercase text-[11px] tracking-[0.4em] text-aurora-teal opacity-90">Contact Us</h4>
            <div className="space-y-4 text-[15px] font-normal">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-white/30 tracking-[0.2em]">Headquarters</span>
                <span className="text-slate-300">Kolkata, India</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-white/30 tracking-[0.2em]">Inquiries</span>
                <a href="mailto:advisory@hrsouk.in" className="text-slate-300 hover:text-aurora-teal transition-all duration-300">
                  advisory@hrsouk.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT & LEGAL - Reduced margin for height optimization */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-white/20 tracking-widest uppercase font-normal">
            © 2026 HR Souk. All rights reserved.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-aurora-teal transition-all duration-500 flex items-center gap-3 group"
          >
            <span className="w-6 h-[1px] bg-white/10 group-hover:bg-aurora-teal transition-all duration-500"></span>
            Privacy Policy
          </button>
        </div>
      </div>

      {/* PRIVACY POLICY MODAL - Logic and content preserved */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-500"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col border border-white/50 animate-in zoom-in-95 duration-500" style={calibriStyle}>
            <div className="h-2 w-full bg-aurora-teal"></div>
            
            <div className="px-12 py-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-3xl font-serif text-slate-900 font-light">
                Privacy <span className="text-aurora-teal italic">Policy</span>
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-900"
              >
                ✕
              </button>
            </div>

            <div className="px-12 py-8 overflow-y-auto text-slate-700 leading-relaxed text-[16px] space-y-6 font-normal">
              <p>Last Updated: January 15, 2026</p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-aurora-teal">✦</span>
                  <p>HR Souk respects your privacy and handles all information responsibly and confidentially.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-aurora-teal">✦</span>
                  <p>We collect only necessary business, professional, and contact data to deliver HR consulting and talent services.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-aurora-teal">✦</span>
                  <p>Information is accessed solely by authorized professionals and protected through reasonable security measures.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-aurora-teal">✦</span>
                  <p>We do not sell or misuse personal data.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-aurora-teal">✦</span>
                  <p>Data may be shared only with trusted partners, with consent, or where required by law.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-aurora-teal">✦</span>
                  <p>Information is retained only as long as necessary for service or compliance purposes.</p>
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-100">
                <p className="text-slate-700">
                  For privacy queries, contact <a href="mailto:advisory@hrsouk.in" className="text-aurora-teal hover:underline transition-all">advisory@hrsouk.in</a>
                </p>
                <p className="mt-4 text-sm opacity-60 italic">© 2026 HR Souk Legal Affairs.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;