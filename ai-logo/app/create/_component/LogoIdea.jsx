import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

function LogoIdea() {
  return (
    <div className='my-10'>
      <HeadingDescription
      title={Lookup. LogoIdeaTitle}
      description={Lookup.LogoIdeaDesc}
      />
    </div>
  )
}

export default LogoIdea
