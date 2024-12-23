import Image from 'next/image';
import React from 'react'
import tstOne from '@/public/images/tst-img-one.jpg'
import { FaStar } from "react-icons/fa";

function TestimonialCard({testimoni, name, image}) {
  return (
    <div className='flex flex-col w-[20rem] rounded-md bg-white p-3 justify-center items-center gap-3 drop-shadow-sm hover:drop-shadow-sm border-2 ease-in duration-300 hover:border-yellow-300'>
       <span className='text-yellow-500 text-6xl'>&#8220;</span>
       <p className='text-center font-karla'>{testimoni}</p>
        <Image className='w-[65px] rounded-full border border-gray-500'  src={image} alt='Profile testiminial'/>
       <p className='font-actor-regular'>{name}</p>
    </div>
  )
}

export default TestimonialCard