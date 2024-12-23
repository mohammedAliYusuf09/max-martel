import React from 'react'
import Lachlan from '@/public/images/team-one.png'
import Jackson from '@/public/images/team-two.png'
import Ethan  from '@/public/images/team-threee.png'
import Harrison  from '@/public/images/team-foure.png'
import Image from 'next/image'

function MyTeam() {
  return (
    <div className='max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-4 m-auto text-center'>
        <h2 className='font-julius-sans-one-regular text-4xl'>experienced team members</h2>
        <p className='font-actor-regular text-lg mt-[2rem]'>Our dedicated team is committed to providing you with the highest quality dental care. We pride ourselves on creating a warm and welcoming environment where you can feel comfortable and relaxed. Our experienced hygienists are skilled in providing thorough cleanings, removing plaque and tartar, and educating patients on proper oral hygiene techniques. Our dental assistants are trained to assist the dentist during procedures, ensuring a smooth and efficient experience.</p>
        <div className='flex gap-6 items-center justify-center mt-10'>
        {/* <TeamMember name={'Lachlan'} image={Lachlan}/> */}
        <div className="flex flex-col gap-10 drop-shadow-2xl h-[11rem] w-[4rem] sm:h-[16rem] sm:w-[6rem] md:h-[23rem] md:w-[9rem] lg:h-[28rem] lg:w-[12rem] overflow-clip bg-blue rounded-full text-white items-center justify-between hover:scale-125 ease-in duration-300">
              <h4 className="mt-10 font-julius-sans-one-regular sm:text-lg text-xs">
                Lachlan
              </h4>
            <div className="md:w-40 md:h-56 sm:w-32 sm:h-48 w-full h-52">
              <Image src={Lachlan} alt={'Lachlan'} width={160} height={160} className="object-cover rounded-full" />
            </div>
        </div>
        {/* <TeamMember name={'Jackson'} image={Jackson}/>
         */}
        <div className="flex flex-col gap-10 drop-shadow-2xl h-[11rem] w-[4rem] sm:h-[16rem] sm:w-[6rem] md:h-[23rem] md:w-[9rem] lg:h-[28rem] lg:w-[12rem] overflow-clip bg-blue rounded-full text-white items-center justify-between hover:scale-125 ease-in duration-300">
              <h4 className="mt-10 font-julius-sans-one-regular sm:text-lg text-xs">
              Jackson
              </h4>
            <div className="md:w-40 md:h-56 sm:w-32 sm:h-48 w-full h-52">
              <Image src={Jackson} alt={'Jackson'} width={160} height={160} className="object-cover rounded-full" />
            </div>
        </div>
        {/* <TeamMember name={'Ethan'} image={Ethan}/>
         */}
         <div className="flex flex-col gap-10 drop-shadow-2xl h-[11rem] w-[4rem] sm:h-[16rem] sm:w-[6rem] md:h-[23rem] md:w-[9rem] lg:h-[28rem] lg:w-[12rem] overflow-clip bg-blue rounded-full text-white items-center justify-between hover:scale-125 ease-in duration-300">
              <h4 className="mt-10 font-julius-sans-one-regular sm:text-lg text-xs">
              Ethan
              </h4>
            <div className="md:w-40 md:h-56 sm:w-32 sm:h-48 w-full h-52">
              <Image src={Ethan} alt={'Ethan'} width={160} height={160} className="object-cover rounded-full" />
            </div>
        </div>
        {/* <TeamMember name={'Harrison'} image={Harrison}/> */}
        <div className="flex flex-col gap-10 drop-shadow-2xl h-[11rem] w-[4rem] sm:h-[16rem] sm:w-[6rem] md:h-[23rem] md:w-[9rem] lg:h-[28rem] lg:w-[12rem] overflow-clip bg-blue rounded-full text-white items-center justify-between hover:scale-125 ease-in duration-300">
              <h4 className="mt-10 font-julius-sans-one-regular sm:text-lg text-xs">
              Harrison
              </h4>
            <div className="md:w-40 md:h-56 sm:w-32 sm:h-48 w-full h-52">
              <Image src={Harrison} alt={'Harrison'} width={160} height={160} className="object-cover rounded-full" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default MyTeam