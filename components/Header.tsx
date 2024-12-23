'use client'
import Link from 'next/link'
import React from 'react'
import { TiThMenu } from "react-icons/ti";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

function Header() {

  const path = usePathname();
  const isAboutPage = path === '/about';
  const isServicesPage = path === '/services';
  const isGalleryPage = path === '/gallery';
  const isContactPage = path === '/contact';

  return (
    <>
    <div className='w-screen bg-white hidden md:block'>
      <div className='sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-8 mx-auto flex justify-between py-4'>
        <div>
          <li className='font-marcellus-sc-regular font-bold list-none'><Link href={'/'}>{'[Max]'}</Link></li>
        </div>
        <ul className='flex gap-6'>
          <li className={`hover:border-b hover:border-gray-600 ease-in-outout duration-200 ${isAboutPage? 'border-b border-gray-600' : ''}`}><Link href={'/about'}>About</Link></li>
          <li className={`hover:border-b hover:border-gray-600 ease-in-outout duration-200 ${isServicesPage? 'border-b border-gray-600' : ''}`}><Link href={'/services'}>Services</Link></li>
          <li className={`hover:border-b hover:border-gray-600 ease-in-outout duration-200 ${isGalleryPage? 'border-b border-gray-600' : ''}`}><Link href={'/gallery'}>Gallery</Link></li>
          <li className={`hover:border-b hover:border-gray-600 ease-in-outout duration-200 ${isContactPage? 'border-b border-gray-600' : ''}`}><Link href={'/contact'}>Contact</Link></li>   
        </ul>
      </div>
    </div>
    </>
    
  )
}

export default Header