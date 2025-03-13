import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiMenuKebab } from "react-icons/ci";
import Sidebar from './Sidebar';
import { IoMdClose } from "react-icons/io";
import { SlUser } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa";




const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleNavbar = (e)=> {
    e.preventDefault();
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <div className='header relative flex items-center justify-between w-full px-4 py-2 sm:px-[5vw] shadow-md'>
      <div>
        <NavLink to='/'>
          <h1 className='cursor-default font-semibold text-lg'>lajest.</h1>
        </NavLink>
      </div>

      <div className='hidden md:flex gap-4 text-sm font-medium'>
        <NavLink to='/'>
          <p>Home</p>
        </NavLink>
      
        <NavLink to='/devices'>
          <p>Computer Devices</p>
        </NavLink>
       
        <NavLink to='/about'>
          <p>About</p>
        </NavLink>

        <NavLink to='/contact'>
          <p>Contact</p>
        </NavLink>
        
      </div>
      
      <div className='hidden md:flex'>
        <NavLink to='/login' className='flex items-center gap-2 hover:shadow-md duration-150 text-slate-900 px-3 py-[6px] rounded-2xl border-[1px] border-slate-500'>
          <SlUser/>
          <FaAngleRight/>
        </NavLink>
      </div>
      <div className='md:hidden '>
        {
          sidebarOpen? <CiMenuKebab onClick={handleNavbar} className='font-extrabold cursor-pointer'/>
          :
          <IoMdClose onClick={handleNavbar} className='font-extrabold cursor-pointer text-lg'/>
        }
       
      </div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    </div>
  )
}

export default Navbar