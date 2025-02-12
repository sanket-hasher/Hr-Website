import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <nav className=' flex justify-between items-center p-4 px-40 bg-gradient-to-r from-slate-200 to-zinc-500 text-white'>
      <img className='h-20' src={logo} alt='logo'/>
      <div className='flex gap-8 text-[20px] '>
        <span className='cursor-pointer'>Home</span>
        
        <div className='relative'>
          <span 
            className='cursor-pointer' 
            onClick={toggleDropdown} // Toggle dropdown visibility on click
          >
            Services
          </span>
          {isDropdownOpen && (
            <div 
              className='absolute left-0 mt-2 w-40 bg-gray-700 rounded-lg shadow-lg'
            >
              <ul className='py-2'>
                <li className='px-4 py-2 hover:bg-gray-600 cursor-pointer'>Design Studio</li>
                <li className='px-4 py-2 hover:bg-gray-600 cursor-pointer'>Advertising agency</li>
                <li className='px-4 py-2 hover:bg-gray-600 cursor-pointer'>Martech</li>
                <li className='px-4 py-2 hover:bg-gray-600 cursor-pointer'>HR Advisory</li>
              </ul>
            </div>
          )}
        </div>
        
        <span className='cursor-pointer'>Career</span>
        <span className='cursor-pointer'>Team</span>
      </div>
    </nav>
  );
};

export default Navbar;
