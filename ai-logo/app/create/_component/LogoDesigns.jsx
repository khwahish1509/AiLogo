import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import LogoDesig from '@/app/_data/LogoDesig'
import Image from 'next/image'

function LogoDesigns() {
  return (
    <div className='my-10'>
      <HeadingDescription
      title={Lookup.LogoDesignTitle}
      description={Lookup.LogoDesignDesc}
      />

      <div>
        {LogoDesig.map((design, index)=>
         <div key={index}>
            <Image src={design.image} alt={design.title} width={300}
             height={200}>

            </Image>
         </div>
        )}
      </div>
    </div>
  )
}

export default LogoDesigns