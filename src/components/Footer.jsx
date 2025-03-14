import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='footer min-h-[20vh] px-4 text-gray-300'>
       <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-4 py-8 justify-between w-full'>
            <div>
                <h1 className='text-gradient mb-2 text-4xl'>lajest.</h1>
                <p className='text-gray-400 text-sm max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente pariatur rem?</p>
            </div>

            <div>
                <h3 className='mb-3'>Company</h3>
                <div className='text-gray-400 text-sm flex flex-col gap-1'>
                    <NavLink to='/' className='w-fit'>
                        <p className='hover:text-orange-400 duration-100'>Home</p>
                    </NavLink>
                    <NavLink to='/about' className='w-fit'>
                        <p className='hover:text-orange-400 duration-100'>About Us</p>
                    </NavLink>
                    <NavLink to='/contact ' className='w-fit'>
                        <p className='hover:text-orange-400 duration-100'>Contact Us</p>
                    </NavLink>
                    <NavLink to='#' className='w-fit'>
                        <p className='hover:text-orange-400 duration-100'>Privacy Policy</p>
                    </NavLink>
                </div>
            </div>

            <div>
                <h3 className='mb-3'>Newsletter</h3>
                <p className='text-gray-400 text-sm mb-2'>Subscribe to our newsletter</p>
                <form className='flex items-center'>
                    <input className='outline-none px-2 py-1 text-black bg-gray-200 rounded-l-2xl' type='email' placeholder='Enter your email...' required/>
                    <button className='px-2 bg-orange-400 py-1 text-black rounded- font-medium rounded-r-2xl' type='submit'>Submit</button>
                </form>
            </div>
       </div>
       <hr className='border-none h-[0.6px] bg-gray-700 w-full m-auto mb-4'/>
       <div className='text-gray-400 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm pb-2'>
            <div className='flex gap-1'>
                <p>&copy;{date} <span> lajest.com</span></p>
                <p>All Rights Reserved</p>
            </div>
            <div>
                <p>Designed and Developed By
                    <Link to='https://amosram.github.io/amosram-dev/' target='_blank' className='pl-1 underline'>
                        Amosram
                    </Link>
                </p>
            </div>
       </div>
     
    </div>
  )
}

export default Footer