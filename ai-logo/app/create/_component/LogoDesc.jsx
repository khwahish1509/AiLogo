import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

function LogoDesc() {
  return (
    <div className='my-10'>
        <HeadingDescription
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDesc}/>
    </div>
  )
}

export default LogoDesc