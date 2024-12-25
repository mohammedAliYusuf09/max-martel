import ServicesHero from '@/components/ServicesHero'
import Image from 'next/image'
import React from 'react'
import SimgThree from '@/public/images/servece-img-three.jpg'
import ServicesItem from '@/components/ServicesItem'


function ServicessPage() {
  const serviceOptionOne = {
    title: 'General Dentistry',
    description: 'This foundational service covers routine check-ups, cleanings, and preventive care. It also includes treatments for common dental issues like cavities, gum disease, and tooth decay.'
  }
  const serviceOptionTwo = {
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smiles aesthetics with our cosmetic dentistry services. We offer a range of treatments, including teeth whitening, dental veneers, and dental bonding, to improve the appearance of your teeth.'
  }
  const serviceOptionThree = {
    title: 'Restorative Dentistry',
    description: 'Restore your oral health and function with our restorative dentistry services. We specialize in dental implants, dental crowns, and bridges to replace missing teeth and restore your smile.' 
  }
  const serviceOptionFour = {
    title: 'Oral Surgery',
    description: 'Our experienced dentists perform a variety of oral surgeries, including tooth extractions, wisdom tooth removal, and bone grafting. We prioritize patient comfort and utilize advanced techniques to minimize discomfort.'
  }

  return (
    <>
    <div className=''>
      <ServicesHero/>
    </div>
    <div className="grid grid-rows-[1fr_1fr] sm:grid-rows-[1fr_1fr_1fr]  lg:grid-cols-[1fr_200px_1fr] lg:grid-rows-none max-w-full">
      <div className="bg-[#E5FCE2] p-4 ">
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-kode-mono mt-8 ml-2 sm:ml-4 md:mt-10 md:ml-10'>We are providing 
        various high quality services</h2>
        <div className='w-full relative sm:mt-8'>
          <div className='w-[220px] sm:w-[250px] md:w-[250px] overflow-clip text-right mt-4 absolute right-0 top-2 sm:right-2  md:right-4 md:top-10'>
            <ServicesItem 
              title={serviceOptionOne.title} description={serviceOptionOne.description}
            />
          </div>
        </div>
      </div>
      <div className='min-w-[14rem] hidden sm:block sm:max-w-[30rem] md:w-full md:bg-bg-[#E5FCE2] mx-auto'>
        <Image className='sm:h-[612px] sm:w-[30rem] h-[400px] w-[12rem]' src={SimgThree} alt='Hero image three'/>
      </div>
      <div className="bg-[#E5FCE2] p-4">
        <div className='w-full relative min-h-[200px]'>
            <div className='w-none sm:w-[300px]  md:max-w-none overflow-clip text-left sm:absolute right-8 top-2'>
              <ServicesItem 
                title={serviceOptionTwo.title} description={serviceOptionTwo.description}
              />
            </div>
        </div>

        <div className='w-full relative min-h-[180px]'>
            <div className='w-none sm:w-[300px]  md:max-w-none overflow-clip text-left sm:absolute left-4 top-2'>
              <ServicesItem 
            title={serviceOptionThree.title} description={serviceOptionThree.description}
          />
            </div>
        </div>

        <div className='w-full relative min-h-[200px]'>
            <div className='w-none sm:w-[300px] md:max-w-none overflow-clip text-left sm:absolute right-8 top-2'>
            <ServicesItem 
              title={serviceOptionFour.title} description={serviceOptionFour.description}
            />
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ServicessPage