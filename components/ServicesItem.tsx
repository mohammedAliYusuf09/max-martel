import React from 'react'
import { Krub } from 'next/font/google'

const krub = Krub({ 
    weight: '400',
    subsets: ['latin']});

function ServicesItem({title, description}) {
  return (
    <div className=''>
        <h4 className={`${krub.className} text-xl sm:text-lg`}>{title}</h4>
        <p className={`${krub.className} mt-2 sm:text-base`}>{description}</p>
    </div>
  )
}

export default ServicesItem