import GllaryHero from '@/components/GllaryHero'
import GllaryImages from '@/components/GllaryImages'
import React from 'react'

function GalleryPage() {
  return (
    <div>
      <div className='pt-[6rem] mb-10'>
        <GllaryHero/>
        <GllaryImages/>
      </div>
    </div>
  )
}

export default GalleryPage