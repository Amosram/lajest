import React, { useContext, useEffect, useState } from 'react'
import { LajestContext } from '../context/LajestContext'
import DeviceItems from '../components/DeviceItems'

const RelatedDevices = ({category, subCategory}) => {
    const {devices} = useContext(LajestContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (devices.length > 0) {
            let deviceCopy = devices.slice();
            deviceCopy = deviceCopy.filter((item) => category === item.category);
            deviceCopy = deviceCopy.filter((item) => subCategory === item.subCategory);

            setRelated(deviceCopy.slice(0, 5));
        }
    }, [devices])

  return (
    <div>
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item, index)=>(
                <DeviceItems key={index} id={item._id} model_name={item.model_name} price={item.price} image={item.image} category={item.category}/>
            ))}
        </div>
    </div>
  )
}

export default RelatedDevices