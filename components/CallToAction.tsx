import React from 'react'
import WhiteButton from './WhiteButton'
import BlackButton from './BlackButton'
import Image from 'next/image'
import ctaOne from '@/public/images/image-one.jpg'
import ctaTwo from '@/public/images/image-two.jpg'
import ctaThree from '@/public/images/image-three.jpg'
import Link from 'next/link'
import AppointmentDilog from './AppointmentDilog'


function CallToAction() {
  return (
    <div className='flex flex-col overflow-hidden md:flex-row gap-6 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-8 m-auto '>
        <div className='md:w-[60%] flex flex-col gap-6'>
            <h2 className='text-3xl font-actor-regular'>Your Journey to a Brighter Smile 
            Starts Here.</h2>
            <p className='text-xl font-karla'>Improve your oral health, boost your confidence, 
                and achieve a stunning smile. Schedule your
                appointment now. Improve your oral health, boost your confidence, 
                and achieve a stunning smile. Schedule your
                appointment now.
            </p>
            <div className='flex gap-6'>
                    <WhiteButton><Link href={'/contact'} >Ask any quitions</Link></WhiteButton>
                    <AppointmentDilog/>
            </div>
        </div>

        <div className='md:w-[40%] cta-grid'>
            <div className='img-one '><Image quality={20} className='rounded-md ease-in duration-300 hover:scale-125' src={ctaOne} alt='Image One'/></div>
            <div className='img-two  md:w-[200px] '><Image quality={20} className='rounded-md ease-in duration-300 hover:scale-125' src={ctaTwo} alt='Image Two'/></div>
            <div className='img-three  '><Image quality={20} className='rounded-md ease-in duration-300 hover:scale-125' src={ctaThree} alt='Image Three'/></div>
        </div>

    </div>
  )
}

export default CallToAction