import React, {useState} from 'react'
import { assets } from '../assets/assets';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const BannerSlider = () => {
    const [currentSlide, setcurrentSlide] = useState(0);
    const data = [
      assets.banner_img_1,
      assets.banner_img_2,
      assets.banner_img_3,
      assets.banner_img_4,
      assets.banner_img_5,
    ]
  
    const prevSlide = () => {
      setcurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1); 
    };
  
    const nextSlide = () => {
        setcurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

  return (
    <div className='overflow-hidden relative'>
        <div  style={{transform:`translateX(-${currentSlide * 100}vw)`}} className='border overflow-hidden max-h-[50vh] shadow-xl'>
          <img className='border w-full object-cover' src={data[0]}/>
          <img className='border w-full object-cover' src={data[1]}/>
          <img className='border w-full object-cover' src={data[2]}/>
          <img className='border w-full object-cover' src={data[3]}/>
          <img className='border w-full object-cover' src={data[4]}/>
        </div>

        <div className='absolute left-0 right-0 bottom-[150px] m-auto flex items-center justify-between'>
            <FaAngleLeft className='cursor-pointer ml-2 text-3xl px-1 py-1 border bg-gray-100' onClick={prevSlide}/>
            <FaAngleRight className='cursor-pointer mr-2 text-3xl px-1 py-1 border bg-gray-100' onClick={nextSlide}/>  
        </div>
    </div>
  )
}

export default BannerSlider