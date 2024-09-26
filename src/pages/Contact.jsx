import React from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/assets';
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Contact = () => {
  return (
    <div className='flex items-center justify-center min-h-[80vh]'>
      <div className=' flex flex-col sm:flex-row sm:items-center justify-center my-10 gap-6 p-4 bg-gray-100 border rounded-sm shadow-md'>
        <img className='rounded-sm' src={assets.contact_image} alt="contact image"/>

        <div className='flex flex-col gap-6 pr-10 pl-4 sm:pl-0'>
          <div>
            <h3 className='text-black mb-[2px] font-medium'>Contact info:</h3>
            <div>
              <div className='flex items-center gap-2'>
                <FaEnvelope className='text-gray-600'/>
                <p className='text-gray-700'>lajest@gmail.com</p>
              </div>
              <div className='flex items-center gap-2'>
                <FaPhoneSquareAlt className='text-gray-600'/>
                <p className='text-gray-700'>+254 752943240</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-black mb-[2px] font-medium'>Our location:</h3>
            <div>
              <div className='flex items-center gap-2'>
                <FaLocationDot className='text-gray-600'/>
                <p className='text-gray-700'>CBD, 0100</p>
              </div>
              <div className='flex items-center gap-2'>
                <FaLocationCrosshairs className='text-gray-600'/>
                <p className='text-gray-700'>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className='text-black mb-[3px] font-medium'>Follow Us:</h3>
            <div className='flex gap-4 text-gray-100'>
              <NavLink className='bg-gray-400 px-1 py-1 rounded-md hover:text-black duration-100' to='#'>
                <FaFacebookF/>
              </NavLink>
              <NavLink className='bg-gray-400 px-1 py-1 rounded-md hover:text-black duration-100' to='#'>
                <FaInstagram/>
              </NavLink>
              <NavLink className='bg-gray-400 px-1 py-1 rounded-md hover:text-black duration-100' to='#'>
                <FaLinkedinIn/>
              </NavLink>
              <NavLink className='bg-gray-400 px-1 py-1 rounded-md hover:text-black duration-100' to='#'>
                <FaXTwitter/>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact