import React, { useState } from 'react';
import logo from '@/assets/logo.png';
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
      <div className="h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300 absolute bottom-0 left-0"></div>
    </div>
  );

  return (
    <nav className="text-white w-full flex justify-between items-center py-3 px-6 md:px-20 m-auto z-50 top-0 fixed">
      <img className="h-14" src={logo} alt="logo" />

      {/* Hamburger icon */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-[18px] items-center">
        {navItem("Home", "/")}

        {!hideServices && (
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1" onClick={toggleDropdown}>
              <span>Services</span>
              <MdKeyboardArrowDown className="relative top-0.5" />
            </div>
            <div className="h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300 absolute bottom-0 left-0"></div>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-80 bg-gray-700 rounded-lg shadow-lg z-50 text-white">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => scrollToServices(0)}>Talent Acquisition & Workforce Planning</li><hr />
                  <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => scrollToServices(1)}>HR Technology & Digital Transformation</li><hr />
                  <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => scrollToServices(2)}>HR Compliance, Policies & Best Practices</li><hr />
                  <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => scrollToServices(3)}>Employee Engagement & Culture Building</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {navItem("Career", "/career")}
        {navItem("Team", null)}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute mt-2 top-20 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 text-[18px] md:hidden shadow-lg">
          {navItem("Home", "/", () => setIsMobileMenuOpen(false))}

          {!hideServices && (
            <div className="relative group text-center">
              <div className="flex justify-center items-center gap-1" onClick={toggleDropdown}>
                <span className="cursor-pointer">Services</span>
                <MdKeyboardArrowDown />
              </div>
              {isDropdownOpen && (
                <div className="mt-2 bg-gray-700 w-80 rounded-lg shadow-lg z-50 text-white">
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
