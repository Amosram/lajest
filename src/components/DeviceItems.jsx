import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { LajestContext } from '../context/LajestContext'

const DeviceItems = ({id, model_name, image, price, category}) => {
    const {currency} = useContext(LajestContext);

  return (
    <div className='shadow-sm pb-2'>
        <Link className='text-gray-700 cursor-pointer' to={`/device/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transistion ease-in-out duration-75' src={image[0]} alt='device img'/>
            </div>
            <div className='flex items-center justify-between pt-2 px-1'>
                <p className='text-xs font-medium'>{category}</p>
                <div className='text-[10px] flex'>
                    <FaStar className='text-orange-400'/>
                    <FaStar className='text-orange-400'/>
                    <FaStar className='text-orange-400'/>
                    <FaStar className='text-orange-400'/>
                    <FaStarHalfAlt className='text-orange-400'/>
                </div>
            </div>
            <p className='pt-3 pb-1 px-1 text-xs'>{model_name}</p>
            <p className='text-sm  px-1 font-medium'>{currency}{price}.00</p>
        </Link>
    </div>
  )
}

export default DeviceItems