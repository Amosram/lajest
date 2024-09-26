import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div>
        <div className='flex items-center gap-2 text-xl font-semibold'>
          <h2 className='text-gray-700'>{text1} <span className='text-gray-950'>{text2}</span></h2>
          <p className='w-6 h-[2px] bg-gray-950'></p>
        </div>
    </div>
  )
}

export default Title