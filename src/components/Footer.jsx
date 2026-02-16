import React, { useState } from 'react';
import logo from '../assets/hr_souk_logo_2.png';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Applying Calibri with strictly normal weight for elite professional clarity
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
              <img 
                src={logo} 
                alt="HR Souk" 
                className="h-20 md:h-24 w-auto object-contain brightness-125 contrast-110 drop-shadow-sm"
              />
            </div>
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

        {/* COPYRIGHT & LEGAL */}
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

      {/* UPDATED PRIVACY POLICY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div 
            /* Increased transparency by changing bg-slate-900/80 to bg-slate-900/60 */
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-500"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div 
            /* Maintained professional rounded corners and shadow */
            className="relative bg-white/95 rounded-[2.5rem] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-white/50 animate-in zoom-in-95 duration-500" 
            style={calibriStyle}
          >
            <div className="h-2 w-full bg-aurora-teal"></div>
            
            <div className="px-12 pt-8 pb-2 flex justify-between items-center">
              <h3 className="text-2xl font-serif text-slate-900 font-light">
                Privacy <span className="text-aurora-teal">Policy</span>
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-900"
              >
                ✕
              </button>
            </div>

            {/* CONTENT AREA: Removed scrollbar with 'scrollbar-none' */}
            <div className="px-12 pt-2 pb-8 overflow-y-auto scrollbar-none text-slate-700 leading-relaxed text-[14px] md:text-[15px] space-y-4 font-normal">
              <p>
                At HRSouk, we are committed to protecting the privacy and confidentiality of our clients, candidates, and website visitors. This Privacy Policy outlines how we collect, use, store, and safeguard your personal information when you visit our website or engage with our recruitment services.
              </p>

              <div className="space-y-3">
                <p>
                  We may collect personal information such as your name, contact details, and other relevant information submitted through our website forms or communication channels. This information is used strictly for business communication, and service purposes.
                </p>

                <p>
                  HRSouk ensures that all personal data is handled securely and in compliance with applicable data protection laws. We do not sell, rent, or share your personal information with third parties.
                </p>

                <p>
                  Our website may use cookies to enhance user experience, analyse website traffic, and improve our services. Users can manage cookie preferences through their browser settings.
                </p>
              </div>

              <p>
                By using the HRSouk website, you consent to the terms outlined in this Privacy Policy. We reserve the right to update this policy periodically, and any changes will be reflected on this page.
              </p>

              <div className="pt-2 border-t border-slate-100">
                <p>
                  For any privacy-related concerns, users may contact us through: 
                  <a href="mailto:advisory@hrsouk.in" className="ml-2 text-aurora-teal hover:underline font-medium transition-all">
                    advisory@hrsouk.in
                  </a>
                </p>
                <p className="mt-4 text-xs opacity-50 italic">© 2026 HR Souk Legal Affairs.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;