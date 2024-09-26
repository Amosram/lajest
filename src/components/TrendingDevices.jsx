import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const TrendingDevices = () => {
  return (
    <div className='min-h-[10vh] --bg-gradient-1 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-[5vw]'>
        <div className='py-4 flex-1 '>
            <div className='mb-4'>
                <h1 className='text-gray-100 text-3xl sm:text-4xl mb-2'>Top Pick</h1>
                <p className='text-gray-400'>MacBook Pro.</p>
            </div>
            <p className='text-gray-200 pb-6'>
                MacBook Pro blasts forward with the M3, M3 Pro and M3 Max chips. Built on 3‑nanometre technology and featuring an all-new GPU architecture, they’re the most advanced chips ever built for a personal computer. And each one brings more pro performance and capability.
            </p>
            <NavLink to='https://www.apple.com/ke/macbook-pro/' target='_black'>
                <Button text={"Learn More"}/>
            </NavLink>
        </div>

        <div className='mb-4'>
            <img className='w-96' src={assets.mackbook_pro} alt='top pick image'/>
        </div>
    </div>
  )
}

export default TrendingDevices