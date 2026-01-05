import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router';
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#7A0F2A] text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <h5 className="text-sm text-blueGray-600">
              hr-souk@gmail.com
            </h5>
            <h5 className="text-sm mb-2 text-blueGray-600">
              Contact No. : +91 - 000000000
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <Link target="_blank" to='https://www.linkedin.com/company/hr-souk/'> <FaLinkedin className='text-black text-xl m-auto' /></Link></button>
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaInstagram className='text-black text-xl m-auto' />
              </button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaFacebook className='text-black text-xl m-auto' /></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaWhatsapp className='text-black text-xl m-auto' />
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
      </div>
    </footer>
  )
}

export default Footer