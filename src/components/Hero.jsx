import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { Link as LinkNav } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero text-gray-100 min-h-[80vh] px-4 sm:px-[5vw] flex flex-col items-center lg:flex-row justify-center lg:justify-between gap-4'>
      {/* hero right */}
      <div className=' mt-8 lg:mt-0'>
        <h1 className='text-3xl md:text-5xl mb-5'>Welcome to <span className='text-gradient'>lajest.</span></h1> 
        <div className='text-sm sm:text-base flex flex-col gap-2'>
          <p>Do you face challenges in finding specs for a particular computing device?</p>
          <p>Well, look no further, lajest is here to help make your work much easier</p>
        </div>
        <div className='mt-5 flex gap-4'>
          <NavLink to="/about"><button  className='bg-orange-400 px-4 py-2 rounded-3xl duration-150 btn-hover-1 '>Learn More</button></NavLink>
          <LinkNav to="topDevices"><button  className='border border-orange-400 px-4 py-2 rounded-3xl duration-150 btn-hover-2'>Get Started</button></LinkNav>
        </div>
      </div>
      
      {/* her0 right */}
      <div className=''>
        <img className='w-64 md:w-96 lg:mr-8' src={assets.hero_img} alt='hero image'/>
      </div>
    </div>
  )
}

export default Hero