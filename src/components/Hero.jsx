import React from 'react'
import heroImg from '../assets/hero_image.jpg'

const Hero = () => {
  return (
    <div
      className="relative h-[70vh] flex justify-center items-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-red-700/40"></div>
      
      <p className="relative text-4xl md:text-7xl font-bold leading-tight text-center">
        <span className="block">Enabling Seamless</span>
        <span className="block text-[#D4AF37]">Talent Excellence</span>
      </p>
    </div>
  )
}

export default Hero
