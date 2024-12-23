import React from 'react'

function FormItem({lable, name, type}) {
  return (
    <div className='flex flex-col gap-0 sm:gap-2'>
        <label className='font-actor-regular text-lg' htmlFor="firstName">{lable}</label>
        <div className='border-b border-gray-500'>
            <input className='focus:outline-none bg-transparent py-2 sm:py-4 text-lg' type={type} id={name} name={name} placeholder="Type"/>
        </div>
    </div>
  )
}

export default FormItem