import Image from 'next/image';
import React from 'react'

function TestimonialCard({testimoni, name, image}) {
  return (
    <div className='flex flex-col w-full md:w-[20rem] bg-white p-3 justify-center items-center gap-3 drop-shadow-lg'>
       <span className='text-yellow-500 text-6xl'>&#8220;</span>
       <p className='text-center font-karla'>{testimoni}</p>
        <Image className='w-[65px] rounded-full'  src={image} alt='Profile testiminial'/>
       <p className='font-actor-regular'>{name}</p>
    </div>
  )
}

export default TestimonialCard