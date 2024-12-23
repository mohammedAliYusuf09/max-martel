import Image from 'next/image'
import React from 'react'

function TeamMember({name, image}) {
  return (
    <div className='flex flex-col gap-10 drop-shadow-2xl h-[11rem] w-[4rem] sm:h-[16rem] sm:w-[6rem] md:h-[23rem] md:w-[9rem] lg:h-[28rem] lg:w-[12rem] overflow-clip gbg-blue rounded-full text-white items-center justify-between hover:scale-125 ease-in duration-300'>
      <h4 className='mt-10 font-julius-sans-one-regular sm:text-lg text-xs'>{name}</h4>
      <div className='md:w-40 md:h-56 sm:w-32 sm:h-48 w-full h-52'>
        <Image  src={image} alt={name}/>
      </div>
    </div>
  )
}

export default TeamMember