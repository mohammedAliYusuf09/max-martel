import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-8 m-auto  pt-[3rem]'>
        <h3 className='font-marcellus-sc-regular text-2xl font-bold '><Link href={'/'}>{'[Max]'}</Link></h3>
        <h5 className='py-5 font-karla'>It is a personal website. It provide information about max-martel clinic services and informations.</h5>
        <p>© 2023 &#91;max&#93; . All rights reserved.</p>
        <div className='flex flex-col sm:flex-row pt-[4rem] sm:items-center gap-4'>
            <div className='sm:w-[50%] flex flex-col gap-2 font-karla mt-2'>
                <p>Martal Clinic</p>
                <p>364-366 Oxford St - Sydney -  
                New South Wales</p>
                <p>(02) 9361 0836</p>
                <p>max-martal@gmail.com</p>
                <p>It is a dummy website.</p>
            </div>
            <div className='sm:w-[50%]  list-none pb-5'>
                <li className='font-marcellus-sc-regular font-bold py-2 border-b-2 border-white hover:border-gray-500 text-2xl hover:text-gray-500 ease-in-out duration-200'><Link href={'/'}>{'[Max]'}</Link></li>
                <li className='py-2 border-b-2 border-white text-2xl hover:border-gray-500 hover:text-gray-500 ease-in-out duration-200'><Link href={'/about'}>About</Link></li>
                <li className='py-2 border-b-2 border-white text-2xl hover:border-gray-500 hover:text-gray-500 ease-in-out duration-200'><Link href={'/services'}>Services</Link></li>
                <li className='py-2 border-b-2 border-white text-2xl hover:border-gray-500 hover:text-gray-500 ease-in-out duration-200'><Link href={'/gallery'}>Gallery</Link></li>
                <li className='py-2 border-b-2 border-white text-2xl hover:border-gray-500 hover:text-gray-500 ease-in-out duration-200'><Link href={'/contact'}>Contact</Link></li>   
            </div>
        </div>
    </div>
  )
}
export default Footer