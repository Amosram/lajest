import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiMenuKebab } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from './Sidebar';
import { IoMdClose } from "react-icons/io";



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
          <h1 className='cursor-default font-medium'>lajest.</h1>
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
        <NavLink to='/login' className='flex items-center gap-2 bg-gray-900 hover:bg-gray-800 hover:shadow-md duration-150 text-white px-3 py-1 rounded-2xl'>
          <FaUserCircle/>
          <p className=''>Sign in</p>
        </NavLink>
      </div>
      <div className='md:hidden '>
        {
          sidebarOpen? <CiMenuKebab onClick={handleNavbar} className='font-extrabold cursor-pointer'/>
          :
          <IoMdClose onClick={handleNavbar} className='font-extrabold cursor-pointer text-lg'/>
        }
       
      </div>
      <Sidebar sidebarOpen={sidebarOpen}/>
    </div>
  )
}

export default Navbar