import React from 'react'
import { FaUsers } from "react-icons/fa";
import { assets } from '../assets/assets';
import Title from '../components/Title'


const About = () => {
  return (
    <div className='min-h-[20vh]'>
      <div className='--bg-gradient-2 min-h-[10vw] flex items-center justify-center gap-3 rounded-br-3xl rounded-bl-3xl'>
        <FaUsers className='text-gray-500 text-2xl md:text-5xl'/>
        <h1 className='text-gray-200 text-3xl md:text-4xl font-medium'>About Us</h1>
      </div>
      
      <div className='flex flex-col sm:flex-row items-center justify-between gap-10 my-10 px-4 sm:px-[5vw]'>
        <img className='w-96 shadow-3xl rounded-3xl' src={assets.about_image} alt="about us image"/>
        <div className=' flex-1'>
          <div className=' text-gray-700'>
            <Title text1={"Who we"} text2={"are"}/>
            <p className='mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nesciunt illo quibusdam nemo fugiat repellat aspernatur laudantium unde?</p>
            <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi ratione quibusdam consectetur, repellendus non recusandae aliquid a numquam suscipit maxime voluptas ducimus praesentium?</p>
            <p className='mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nostrum voluptates beatae. Assumenda, officia! Architecto asperiores quam ex quibusdam harum.</p>
          </div>
          <div className=' text-gray-700'>
            <Title text1={"What we"} text2={"do"}/>
            <p className='mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nesciunt illo quibusdam nemo fugiat repellat aspernatur laudantium unde?</p>
            <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi ratione quibusdam consectetur, repellendus non recusandae aliquid a numquam suscipit maxime voluptas ducimus praesentium?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About