import BlackButton from '@/components/BlackButton'
import FormItem from '@/components/FormItem'
import WhiteButton from '@/components/WhiteButton'
import React from 'react'

function ContactPage() {
  return (
    <div className='pt-[6rem] mb-20'>
      <div className='sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-8'>
        <h2 className='font-julius-sans-one-regular text-3xl max-w-60'>Questions? Reach out</h2>
        <form className='grid grid-rows-[1fr_1fr] gap-10  sm:gap-16 md:gap-20  sm:grid-cols-[1fr_1fr]  lg:gap-32 mt-16' action="">
          <FormItem lable={'First Name'} name={'firstName'} type={'text'}/>
          <FormItem lable={'Last Name'} name={'lastName'} type={'text'}/>
          <FormItem lable={'Email'} name={'emain'} type={'email'}/>
          <FormItem lable={'Phone'} name={'phone'} type={'nunber'}/>
          <div className='flex flex-col gap-2'>
            <label className='font-actor-regular text-lg' htmlFor="message">Message</label>
            <div className='border border-gray-500'>
              <textarea className='focus:outline-none bg-transparent py-4 text-lg w-full' name="message" id="message" placeholder='Type'></textarea>
            </div>
          </div>
          <div className='mt-6 sm:mt-10'>
            <BlackButton>Submit</BlackButton>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default ContactPage