import React from 'react'
import Lachlan from '@/public/images/team-one.png'
import Jackson from '@/public/images/team-two.png'
import Ethan  from '@/public/images/team-threee.png'
import Harrison  from '@/public/images/team-foure.png'
import TeamMember from './TeamMember'

function MyTeam() {
  return (
    <div className='max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-4 m-auto text-center'>
        <h2 className='font-julius-sans-one-regular text-4xl'>experienced team members</h2>
        <p className='font-actor-regular text-lg mt-[2rem]'>Our dedicated team is committed to providing you with the highest quality dental care. We pride ourselves on creating a warm and welcoming environment where you can feel comfortable and relaxed. Our experienced hygienists are skilled in providing thorough cleanings, removing plaque and tartar, and educating patients on proper oral hygiene techniques. Our dental assistants are trained to assist the dentist during procedures, ensuring a smooth and efficient experience.</p>
        <div className='flex gap-6 items-center justify-center mt-10'>
        <TeamMember name={'Lachlan'} image={Lachlan}/>
        <TeamMember name={'Jackson'} image={Jackson}/>
        <TeamMember name={'Ethan'} image={Ethan}/>
        <TeamMember name={'Harrison'} image={Harrison}/>
        </div>
    </div>
  )
}

export default MyTeam