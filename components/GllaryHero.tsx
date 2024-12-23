import HeroImageGlaryOne from '@/public/images/servece-img-three.jpg'
import HeroImageGlaryTwo from '@/public/images/hero-glary-tow.jpg'
import HeroImageGlaryThree from '@/public/images/about-image.jpg'
import HeroImageGlaryFoure from '@/public/images/servece-img-one.jpg'
import Image from 'next/image'

function GllaryHero() {
  return (
    <div className='sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-4 mx-auto mb-16'>
        <h2 className='font-julius-sans-one-regular text-4xl text-center'>experienced team members</h2>
        <p className='text-center font-actor-regular mt-4'>Our dedicated team is committed to providing you with the highest quality dental care. We pride ourselves on creating a warm and welcoming environment where you can feel comfortable and relaxed. Our experienced hygienists are skilled in providing thorough cleanings, removing plaque and tartar, and educating patients on proper oral hygiene techniques. Our dental assistants are trained to assist the dentist during procedures, ensuring a smooth and efficient experience.</p>
        <div className='flex gap-2 sm:gap-4 md:gap-8  mt-12 '>
            <div><Image className='rounded-md mt-16 hover:scale-110 ease-out duration-300' width={240} src={HeroImageGlaryOne} alt='Gllary One'/> </div>
            <div><Image className='rounded-md hover:scale-110 ease-out duration-300' width={240} src={HeroImageGlaryTwo} alt='Gllary Two'/></div>
            <div><Image className='rounded-md mt-16 hover:scale-110 ease-out duration-300' width={240} src={HeroImageGlaryThree} alt='Gllaey Three'/></div>
            <div><Image className='rounded-md hover:scale-110 ease-out duration-300' width={240} src={HeroImageGlaryFoure} alt='Gllaey Foure'/></div>
        </div>
    </div>
  )
}

export default GllaryHero