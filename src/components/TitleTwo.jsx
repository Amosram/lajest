import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div>
        <div className='flex items-center gap-2 text-xl font-semibold'>
          <p className='w-6 h-[2px] bg-gray-700'></p>
          <h2 className='text-gray-700'>{text1} <span className='text-gray-950'>{text2}</span></h2>
        </div>
    </div>
  )
}

export default Title