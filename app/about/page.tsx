import AboutHero from '@/components/AboutHero'
import MyTeam from '@/components/MyTeam'
import React from 'react'

function AboutPage() {
  return (
    <>    
      <div className='pt-[6rem]'>
        <AboutHero/>
      </div>
      <div className='pt-[6rem] mb-10'>
        <MyTeam/>
      </div>
    </>

  )
}

export default AboutPage