import React , {useEffect} from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Prompt from '@/app/_data/Prompt'

function LogoIdea({formData}) {

  useEffect(() => {
    generateLogoDesignIdea();
  }, [])
  
  // TODO: Fetch logo ideas from API or local storage
  const generateLogoDesignIdea=async () => {
    const PROMPT= Prompt.DESIGN_IDEA_PROMPT
    .replace('{logoType}',formData?.designs.title)
    .replace('{logoTitle}',formData.title)
    .replace('{logoDesc}',formData.desc)
    .replace('{logoPrompt}',formData.designs.prompt)
    console.log(PROMPT)

    // const result =await axios.post('/api/ai-design-ideas',{
    //   prompt:
    // })
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
