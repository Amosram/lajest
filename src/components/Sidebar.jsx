import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = ({sidebarOpen}) => {
  return (
    <div className={`${sidebarOpen && "translate-x-full"} duration-150 absolute  top-full left-0 w-full h-screen  md:hidden `}>
      <div className='bg-gray-100 shadow-md'>

        <div className='flex flex-col gap-3 px-4 pb-4 pt-2 text-xs sm:px-[5vw]'>
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

          <NavLink to='/login' className='flex items-center gap-1 justify-center bg-gray-900 text-white px-3 py-1 rounded-2xl'>
            <FaUserCircle/>
            <p className=''>Sign in</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar