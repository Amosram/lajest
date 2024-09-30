import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LajestContext } from '../context/LajestContext';
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import RelatedDevices from '../components/RelatedDevices';



const SingleDevice = () => {
  const {deviceId} = useParams();
  const {devices, currency} = useContext(LajestContext);
  const [deviceData, setDeviceData] = useState(false);
  const [image, setImage] = useState("");

  const fetchDeviceData = async () => {
    devices.map((item) => {
      if(item._id === deviceId) {
        setDeviceData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchDeviceData();
  }, [deviceId]);

  return deviceData ? (
    <div className='min-h-[80vh] pt-10 transition-opacity ease-in duration-500 opacity-100 mb-20 px-4 sm:px-[5vw]'>
      {/* device data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* device image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row sticky'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              deviceData.image.map((item, index) => (
                <img className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' onClick={() => setImage(item)} src={item} key={index} alt='device image'/>
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="device image" className="w-full h-auto"/>
          </div>
        </div>

        {/* device infornmation */}
        <div className='flex-1 pr-16 min-h-[50vh]'>
          <h1 className="font-medium text-2xl my-2">{deviceData.model_name}</h1>
          <p>{deviceData.device_sub_info}</p>
          <div className='flex items-center gap-2 mt-3'>
            <p className='text-sm'>{deviceData.ratings}</p>
            <div className='text-[15px] flex'>
              <FaStar className='text-orange-400'/>
              <FaStar className='text-orange-400'/>
              <FaStar className='text-orange-400'/>
              <FaStar className='text-orange-400'/>
              <FaStarHalfAlt className='text-orange-400'/>
            </div>
            <p className='text-sm'>({deviceData.reviews}), ratings</p>
          </div>
          <hr className='border-none h-[0.5px] bg-gray-300 my-3'/>
          <p className='font-medium'>{currency} {deviceData.price}</p>
          {/*device specs  */}
          <div className='my-3'>
            <h5 className='text-base font-medium mb-2'>Device Specs</h5>
            <div >
              <div className='grid grid-cols-2'>
                <p className='text-[13px] mb-1 mr-5 font-medium'>Brand</p>
                <p className='text-[13px] mb-1'>{deviceData.brand}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p className='text-[13px] mb-1 mr-5 font-medium'>Model Name</p>
                <p className='text-[13px] mb-1'>{deviceData.model_name_2}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p className='text-[13px] mb-1 mr-5 font-medium'>Screen Size</p>
                <p className='text-[13px] mb-1'>{deviceData.screen_size}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p className='text-[13px] mb-1 mr-5 font-medium'>Hard Disk Size</p>
                <p className='text-[13px] mb-1'>{deviceData.hard_disk_size}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p className='text-[13px] mb-1 mr-5 font-medium'>CPU Model</p>
                <p className='text-[13px] mb-1'>{deviceData.cpu_model}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p className='text-[13px] mb-1 mr-5 font-medium'>Ram Memory</p>
                <p className='text-[13px] mb-1'>{deviceData.ram_memory}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p className='text-[13px] mb-1 mr-5 font-medium'>Operating System</p>
                <p className='text-[13px] mb-1'>{deviceData.os}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p className='text-[13px] mb-1 mr-5 font-medium'>Graphics Card</p>
                <p className='text-[13px] mb-1'>{deviceData.graphics_card}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p className='text-[13px] mb-1 mr-5 font-medium'>Graphics Coprocessor</p>
                <p className='text-[13px] mb-1'>{deviceData.graphics_coprocessor}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p className='text-[13px] mb-1 mr-5 font-medium'>CPU Speed</p>
                <p className='text-[13px] mb-1'>{deviceData.cpu_speed}</p>
              </div>
            </div>
          </div>
          <hr className='border-none h-[0.5px] bg-gray-300 my-3'/>
          {/* more info about the device */}
          <div>
            <h5 className='text-base font-medium mb-2'>More about this device</h5>
            <div className='flex flex-col gap-2'>
              <p className='text-sm flex items-start gap-2'>
                <GoDash className='text-2xl'/>
                <span>{deviceData.description_1}</span>
              </p>
              <p className='text-sm flex items-start gap-2'>
                <GoDash className='text-2xl'/>
                <span>{deviceData.description_2}</span>
              </p>
              <p className='text-sm flex items-start gap-2'>
                <GoDash className='text-2xl'/>
                <span>{deviceData.description_3}</span>
              </p>
            </div>
            <div className='flex gap-2'>
              <Link to={deviceData.site} target='_blank'>
                <p className='text-xs mt-4 bg-black w-fit px-2 py-1 text-orange-200 rounded-md hover:shadow-md'>More from official site</p>
              </Link>
              <Link to={deviceData.affiliate_link} target='_blank'>
                <p className='text-xs mt-4 bg-black w-fit px-2 py-1 text-orange-200 rounded-md hover:shadow-md'>Buy this device now</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className='border-none h-[0.5px] bg-gray-300 my-3'/>

      {/* Related Devices */}
      <div>
        <div className='mb-6'>
          <Title text1={"RELATED"} text2={"DEVICES"}/>
        </div>
        <RelatedDevices category={deviceData.category} subCategory={deviceData.subCategory}/>
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  )
}

export default SingleDevice