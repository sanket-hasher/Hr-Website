import React from 'react'
import heroImg from '../assets/hero_image.jpg'

const Hero = () => {
  return (
    <div
      className="relative h-[70vh] flex justify-center items-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <p className="relative text-base md:text-7xl font-bold leading-tight text-center">
        <span className="block">Enabling</span>
        <span className="block">Seamless Talent</span>
        <span className="block">Excellence</span>
      </p>
    </div>
  )
}

export default Hero
