import React, { useState,useEffect } from 'react';
import hr_souk_logo from '@/assets/hr_souk_logo.png';
import { Link } from 'react-router';
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";


const Navbar = ({ scrollToServices, hideServices = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  const navItem = (label, to, onClick) => (
    <div className="relative group cursor-pointer" onClick={onClick}>
      {to ? (
        <Link to={to} className="block">{label}</Link>
      ) : (
        <span className="block">{label}</span>
      )}
      <div className="h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 absolute bottom-0 left-0"></div>
    </div>
  );

  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollTrigger = window.innerHeight * 0.6;
    setIsScrolled(window.scrollY > scrollTrigger);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <nav className={`w-full flex justify-between items-center py-3 px-6 md:px-20 m-auto z-50 top-0 fixed transition-colors duration-300 
  ${isScrolled ? "text-black bg-white shadow-md" : "text-white bg-transparent"}`}>
      <img className="h-40" src={hr_souk_logo} alt="logo" />

      {/* Hamburger icon */}
      <div className="md:hidden text-3xl cursor-pointer z-50" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-[18px] items-center">
        {navItem("Home", "/")}
        {navItem("About", null)}

        {!hideServices && (
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1" onClick={toggleDropdown}>
              <span>Services</span>
              <MdKeyboardArrowDown className="relative top-0.5" />
            </div>
<div
  className={`h-[2px] w-0 group-hover:w-full transition-all duration-300 absolute bottom-0 left-0 
  ${isScrolled ? "bg-black" : "bg-white"}`}
></div>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-80 bg-[#7A0F2A] rounded-lg shadow-lg z-50 text-[#FFFFFF]">
                <ul>
                  <li className="px-6 py-2 hover:bg-[#D4AF37] cursor-pointer" onClick={() => scrollToServices(0)}>Talent Acquisition & Workforce Planning</li><hr />
                  <li className="px-6 py-2 hover:bg-[#D4AF37] cursor-pointer" onClick={() => scrollToServices(1)}>HR Technology & Digital Transformation</li><hr />
                  <li className="px-6 py-2 hover:bg-[#D4AF37] cursor-pointer" onClick={() => scrollToServices(2)}>HR Compliance, Policies & Best Practices</li><hr />
                  <li className="px-6 py-2 hover:bg-[#D4AF37] cursor-pointer" onClick={() => scrollToServices(3)}>Employee Engagement & Culture Building</li>
                </ul>
              </div>
            )}
          </div>
        )}
        
        {navItem("Career", null)}
        {navItem("Team", null)}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute mt-2 top-20 left-0 w-full bg-[#7A0F2A]  flex flex-col items-center gap-6 py-6 text-[18px] md:hidden shadow-lg">
          {navItem("Home", "/", () => setIsMobileMenuOpen(false))}

          {!hideServices && (
            <div className="relative group text-center">
              <div className="flex justify-center items-center gap-1" onClick={toggleDropdown}>
                <span className="cursor-pointer">Services</span>
                <MdKeyboardArrowDown />
              </div>
              {isDropdownOpen && (
                <div className="mt-2 bg-[#D4AF37] w-80 rounded-lg shadow-lg z-50 text-white">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => { scrollToServices(0); setIsMobileMenuOpen(false); }}>Talent Acquisition & Workforce Planning</li><hr />
                    <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => { scrollToServices(1); setIsMobileMenuOpen(false); }}>HR Technology & Digital Transformation</li><hr />
                    <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => { scrollToServices(2); setIsMobileMenuOpen(false); }}>HR Compliance, Policies & Best Practices</li><hr />
                    <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => { scrollToServices(3); setIsMobileMenuOpen(false); }}>Employee Engagement & Culture Building</li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {navItem("Career", "/career", () => setIsMobileMenuOpen(false))}
          {navItem("Team", null, () => setIsMobileMenuOpen(false))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
