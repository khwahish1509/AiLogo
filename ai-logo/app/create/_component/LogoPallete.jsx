import React from 'react'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'


function LogoPallete() {
  return (
    <div className='my-10'>
        <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}/>

        <div className='grid grid-cols-3 gap-4'>

          {Colors.map((palette, index)=>(
            
          ))}
        </div>
    </div>
  )
}

export default LogoPallete