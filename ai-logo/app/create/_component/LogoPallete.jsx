import React from 'react'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'
import HeadingDescription from './HeadingDescription'


function LogoPallete() {
  return (
    <div className='my-10'>
        <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}/>

        <div>

          {Colors.map((palette, index)=>(
            <div>
              {palette?.colors.map((color,index)=>(
                <div className='h-24 w-full'
                key={index}
                style={{
                  backgroundColor: color
                }}
                >

                </div>
              ))}
            </div>
          ))}
        </div>
    </div>
  )
}

export default LogoPallete