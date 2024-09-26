import React, { useContext, useState, useEffect } from 'react';
import { LajestContext } from '../context/LajestContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import DeviceItems from '../components/DeviceItems';

const Devices = () => {
  const {devices} = useContext(LajestContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const handleClick = () => {
    setShowFilter(!showFilter);
  }

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  } 

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  } 

    
  const applyFilter = () => {
    let deviceCopy = devices.slice();

    if (category.length > 0) {
      deviceCopy = deviceCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      deviceCopy = deviceCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(deviceCopy);
  }

  useEffect(()=> {
    applyFilter();
  }, [category, subCategory])


  return (
    <div className='min-h-screen px-4 sm:px-[5vw] flex flex-col lg:flex-row gap-1 sm:gap-10 pt-2 mb-20'>
      {/* left side */}
      {/* filter options */}
      <div className='min-w-60'>
          <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FiLTERS</p>

          {/* category filters */}
          <div className='border border-gray-300 pl-5 py-3 my-5'>
            <p className='mb-3 text-sm font-medium'>Manufacturers</p>
            <div className='flex flex-col gap-2 text-sm font-normal text-gray-800'>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleCategory} value={'HP'} />HP
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleCategory} value={"Apple"}/>Apple
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleCategory} value={"Samsung"}/>Samsung
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleCategory} value={"Microsft"}/>Microsoft
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleCategory} value={"Alienware"}/>Alienware
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleCategory} value={"Dell"}/>Dell
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleCategory} value={"Acer"}/>Acer
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleCategory} value={"Asus"}/>Asus
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleCategory} value={"Toshiba"}/>Toshiba
              </p>
            </div>
          </div>
          {/* sub category filter */}
          <div className='border border-gray-300 pl-5 py-3 my-5'>
            <p className='mb-3 text-sm font-medium'>Device Type</p>
            <div className='flex flex-col gap-2 text-sm font-normal text-gray-800'>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleSubCategory} value={'Laptop'}/>Laptop
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleSubCategory} value={'Desktop'}/>Desktop
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleSubCategory} value={'Tablet'}/>Tablet
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" onChange={toggleSubCategory} value={'Phone'}/>Phone
              </p>
            </div>
          </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div>
          <div className='border grid grid-cols-2 text-gray-200 overflow-hidden mb-8'>
            {/* Sub left side */}
            <div className='bg-gray-800 flex flex-col items-center justify-center px-6'>
              <h1 className='text-base font-medium text-gradient sm:text-3xl'>FIND DETAILS FOR DEVICE OF YOUR CHOICE</h1>
            </div>

            {/* Sub right side */}
            <div>
              <img src={assets.banner_img_2}/>
            </div>
          </div>
          {/* devices listings */}
          <div>
            <div className='flex justify-center mb-6'>
              <Title text1={"ALL"} text2={"DEVICES"}/>
            </div>
            {/* Mapping products */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {
                filterProducts.map((item, index)=> (
                  <DeviceItems key={index} id={item._id} model_name={item.model_name} price={item.price} image={item.image} category={item.category} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Devices;