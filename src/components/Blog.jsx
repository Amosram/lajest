import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const Blog = () => {
  return (
    <div className='blog flex flex-col px-4 sm:px-[5vw] min-h-[20px] pt-10 gap-10 pb-16'>
        <div className='flex flex-col items-center'>
          <Title text1={"OUR"} text2={"BLOG"}/>
          <p>What's happening?</p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between w-full gap-10'>
            {/* blog left */}
            <div>
                <img className='w-96 rounded-2xl shadow-2xl' src={assets.left_img_2} alt ='blog image'/>
            </div>

            {/* blog right */}
            <div className='flex-1 max-w-[600px]'>
              <h1 className='text-4xl mb-4 text-gradient font-medium'>The best setup</h1>
              <p className='pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora incidunt consectetur eum. Placeat ipsam veniam dignissimos!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nihil, amet possimus quasi voluptate porro veniam adipisci sit nemo molestiae nostrum praesentium quidem vitae laborum temporibus dolorum! Recusandae aspernatur, eius dolor nulla sit amet iure provident expedita est ut dignissimos!</p>
            </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between w-full gap-10'>
             {/* blog left */}
            <div className='flex-1 max-w-[600px]'>
              <h1 className='text-4xl mb-4 text-gradient font-medium'>Working with mackbook</h1>
              <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora incidunt consectetur eum. Placeat ipsam veniam dignissimos!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nihil, amet possimus quasi voluptate porro veniam adipisci sit nemo molestiae nostrum praesentium quidem vitae laborum temporibus dolorum! Recusandae aspernatur, eius dolor nulla sit amet iure provident expedita est ut dignissimos!</p>
            </div>

            {/* blog right */}
            <div>
              <img className='w-96 rounded-2xl shadow-2xl' src={assets.left_img} alt ='blog image'/>
            </div>
        </div>
    </div>
  )
}

export default Blog