import React from 'react'
import WhiteButton from './WhiteButton'
import SimgOne from '@/public/images/servece-img-one.jpg'
import SimgTwo from '@/public/images/servece-img-two.jpg'
import Image from 'next/image'

function ServicesHero() {
  return (
    <div className='max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg min-h-screen pb-4 flex flex-col md:flex-row gap-8 justify-center items-center m-auto px-4'>
        <div className='md:w-[70%] flex flex-col gap-4'>
          <h2 className='font-karla text-3xl md:text-5xl'>We are providing  various high quality 
            services including braces</h2>
            <p className='font-actor-regular text-lg'>At max-martel, we offer a comprehensive range of dental services to meet your unique needs. From routine check-ups and cleanings to complex procedures like implants and cosmetic dentistry, our experienced team is here to provide you with the highest quality care.</p>
            <div><WhiteButton>Apointment &#8594;</WhiteButton></div>
        </div>
        <div className='md:w-[30%] md:h-[24rem] flex flex-col sm:flex-row md:relative gap-4'>
            <div className='w-36 sm:w-64  md:absolute md:right-0 md:top-0 md:w-[12rem] drop-shadow-xl'><Image className='rounded-md hover:scale-110 ease-out duration-300' src={SimgOne} alt="Service Image One" /></div>
            <div className='w-36 sm:w-64 md:absolute md:right-[40%] md:top-48 md:w-[8rem] drop-shadow-xl'><Image className='rounded-md hover:scale-110 ease-out duration-300' src={SimgTwo} alt="Service Image One" /></div> 
        </div>
    </div>
  )
}

export default ServicesHero