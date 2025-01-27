import React , {useEffect} from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Prompt from '@/app/_data/Prompt'
import axios from 'axios'

function LogoIdea({formData}) {

  useEffect(()=>{
    generateLogoDesignIdea();
  },[])

  const generateLogoDesignIdea=async()=>{
   
    const PROMPT=Prompt.DESIGN_IDEA_PROMPT
    .replace('{logoType}',formData?.designs.title)
    .replace('{logoTitle}',formData.title)
    .replace('{logoDesc}',formData.desc)
    .replace('{logoPrompt}',formData.designs.prompt)

    // console.log(PROMPT);
    const result=await axios.post('/api/ai-design-ideas',{
      prompt:PROMPT
    })

    console.log(result.data)

  }



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