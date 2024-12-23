import GiOne from '@/public/images/g-i-one.jpg'
import GiTwo from '@/public/images/g-i-tow.jpg'
import GiThree from '@/public/images/g-i-three.jpg'
import GiFour from '@/public/images/g-i-foure.jpg'
import GiFive from '@/public/images/g-i-five.jpg'
import GiSix from '@/public/images/g-i-six.jpg'
import Image from 'next/image'

function GllaryImages() {
  return (
    <div className='sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-4 mx-auto'>
        <div className='w-full flex justify-end'> 
            <h3 className='font-julius-sans-one-regular text-right text-2xl w-80'>Gentle, Caring, and Comprehensive Dental Care.</h3>
        </div>
        <div className='flex flex-wrap justify-center gap-2 mt-12'>
            <div><Image className='rounded-md border border-gray-600 hover:scale-105 ease-out duration-300' width={200} src={GiOne} alt='Glarry Image One'/> </div>
            <div><Image className='rounded-md border border-gray-600 hover:scale-105 ease-out duration-300' width={200} src={GiTwo} alt='Glarry Image Two'/></div>
            <div><Image className='rounded-md border border-gray-600 hover:scale-105 ease-out duration-300' width={200} src={GiThree} alt='Glarry Image Three'/></div>
            <div><Image className='rounded-md border border-gray-600 hover:scale-105 ease-out duration-300' width={200} src={GiFour} alt='Glarry Image Foure'/></div>
            <div><Image className='rounded-md border border-gray-600 hover:scale-105 ease-out duration-300' width={200} src={GiFive} alt='Glarry Image Five'/></div>
            <div><Image className='rounded-md border border-gray-600 hover:scale-105 ease-out duration-300' width={200} src={GiSix} alt='Glarry Image Six'/></div>
        </div>
    </div>
  )
}

export default GllaryImages