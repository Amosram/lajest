import React, { useContext, useEffect, useState } from 'react'
import TitleTwo from './TitleTwo'
import {LajestContext} from '../context/LajestContext'
import { assets } from '../assets/assets'
import DeviceItems from './DeviceItems'

const TopDevices = () => {
    const [popularDevices, setPopularDevices] = useState([]);
    const {devices} = useContext(LajestContext);

    useEffect(()=>{
        setPopularDevices(devices.slice(0, 10));
    }, [])

  return (
    <div className='min-h-[80vh] flex flex-col items-center gap-5 px-4 sm:px-[5vw] mb-12' id='topDevices'>
        <div>
            <TitleTwo text1={"POPULAR"} text2={"DEVICES"}/>
            <p>Popularly recognized devices</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-between gap-4 gap-y-6'>
            {
              popularDevices.map((item, index)=> (
                <DeviceItems key={index} id={item._id} image={item.image} model_name={item.model_name} price={item.price} category={item.category} />
              ))
            }
        </div>
    </div>
  )
}

export default TopDevices