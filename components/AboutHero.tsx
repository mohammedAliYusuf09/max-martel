import Image from 'next/image'
import AboutImage from '@/public/images/about-image.jpg'
import React from 'react'
import WhiteButton from './WhiteButton'



function AboutHero() {
  return (
    <div className='max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-4 m-auto flex flex-col items-center gap-10 lg:flex-row'>
        <div className='w-[15rem] lg:w-[30%]'>
            <Image className='rounded-lg' src={AboutImage} alt='About Image'/>
        </div>
        <div className='flex flex-col gap-6 items-center lg:items-start text-center lg:text-left lg:w-[70%]'>
            <h1 className="font-julius-sans-one-regular text-4xl">Dentist max-martal DDS 
            &#40;Doctor of Dental Surgery&#41;</h1>
            <p className='font-actor-regular'>With years of experience and advanced training, I&#39;m passionate about delivering state-of-the-art dental care. I take pride in staying up-to-date with the latest techniques and technologies to provide you with the best possible care.</p>
            <p className='font-karla text-lg'>364-366 Oxford St - Sydney -  
            New South Wales</p>
            <WhiteButton>Apointment &#8594;</WhiteButton>
        </div>
    </div>
  )
}

export default AboutHero