import React , {useEffect} from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Prompt from '@/app/_data/Prompt'
import axios from 'axios'

function LogoIdea({formData}) {

  useEffect(()=>{
    generateLogoDesignIdea();
  },[])

  const generateLogoDesignIdea = async () => {
    if (!formData || !formData.designs) {
      console.error("formData or designs is missing");
      return;
    }
  
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT
      .replace('{logoType}', formData?.designs?.title || 'Unknown Type')
      .replace('{logoTitle}', formData?.title || 'Unknown Title')
      .replace('{logoDesc}', formData?.desc || 'No Description')
      .replace('{logoPrompt}', formData?.designs?.prompt || '');
  
    try {
      const result = await axios.post('/api/ai-design-ideas', {
        prompt: PROMPT,
      });
  
      console.log(result.data);
    } catch (error) {
      console.error("Error generating design ideas:", error);
    }
  };
  



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