import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const Category = () => {
  return (
    <div className='flex flex-col gap-8 items-center py-10 px-4 sm:px-[5vw] mb-10'>
      <div className='flex flex-col items-center'>
        <Title text1={"TOP"} text2={"BRANDS"}/>
        <p>Companies with the best devices</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 text-cente items-centerr justify-center gap-3 lg:justify-between w-full font-medium'>
        <div className='bg-gray-50 py-2 shadow-sm flex justify-center items-center'>
          <img className='w-16' src={assets.brand_1} alt="brand image"/>
        </div>
        <div className='bg-gray-50 py-2 shadow-sm flex justify-center items-center'>
          <img className='w-16' src={assets.brand_2} alt="brand image"/>
        </div>
        <div className='bg-gray-50 py-2 shadow-sm flex justify-center items-center'>
          <img className='w-16 h-10' src={assets.brand_3} alt="brand image"/>
        </div>
        <div className='bg-gray-50 py-2 shadow-sm flex justify-center items-center'>
          <img className='w-16 h-10' src={assets.brand_4} alt="brand image"/>
        </div>
        <div className='bg-gray-50 py-2 shadow-sm flex justify-center items-center'>
          <img className='w-16' src={assets.brand_5} alt="brand image"/>
        </div>
        <div className='bg-gray-50 py-2 shadow-sm flex justify-center items-center'>
          <img className='w-16 h-10' src={assets.brand_6} alt="brand image"/>
        </div>
        <div className='bg-gray-50 py-2 shadow-sm flex justify-center items-center'>
          <img className='w-16 h-10' src={assets.brand_7} alt="brand image"/>
        </div>
        <div className='bg-gray-50 py-2 shadow-sm flex justify-center items-center'>
          <img className='w-16 ' src={assets.brand_8} alt="brand image"/>
        </div>
      </div>
    </div>
  )
}

export default Category