import React from 'react'
import TestimonialCard from './TestimonialCard'
import AyshaKhan from '@/public/images/tst-img-one.jpg'
import DavidLee from '@/public/images/tst-img-two.jpg'
import SarahMiller from '@/public/images/tst-img-foure.png'
import { CarouselSpacing } from './CarouselSpacing'
// import TestimonialCardMobile from './TestimonialCardMobile'

function Testimonial() {
    const testiList = [
        {
            testimoni: "The clinic is clean, modern, and relaxing. The staff is always friendly and helpful. I highly recommend [Clinic Name] to anyone looking for a great dental experience.",
            name: 'Aisha Khan',
            image: AyshaKhan
        },
        {
            testimoni: "The staff at [Clinic Name] is always so friendly and welcoming. They make going to the dentist a pleasant experience. I'm always impressed by their professionalism and expertise.",
            name: 'David Lee',
            image: DavidLee
        },
        {
            testimoni: "I was really nervous about my dental procedure, but Dr. [Max-Martel] and the staff made me feel so comfortable. The procedure was quick and painless, and the results are amazing. I'm so happy with my new smile!",
            name: 'Sarah Miller',
            image: SarahMiller
        }
    ]


  return (
    <div className='flex items-center justify-center flex-col sm:max-w-screen-sm m-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-8'>
        <h2 className='text-4xl font-aboreto-regular text-center'>your satisfaction is my success</h2>
        <h4 className='text-xl font-karla my-5'>Trusted by people</h4>
        <div className='flex flex-wrap justify-center gap-4 mt-6'>
            {testiList.map((testi, index) => 
            <TestimonialCard key={index} {...testi}/>
            )}
        </div>

       

    </div>
  )
}

export default Testimonial