"use client"
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContex } from '../_context/UserDetailContext';
import Prompt from '../_data/Prompt';
import axios from 'axios';


function GenerateLogo() {
  const {userDetail,setUserDetail}=useContext(UserDetailContex);
  const [formData,setFormData]=useState();
  const [loading,setLoading]=useState(false);
  const [logoImage,setLogoImage]=useState();



  useEffect(()=>{
    if(typeof window !=undefined && userDetail?.email)
    {
        const storage=localStorage.getItem('formData')
        if(storage)
        {
            setFormData(JSON.parse(storage));
            console.log(JSON.parse(storage))
        }
    }
  },[userDetail])

  useEffect(() => {
    if (formData?.title) {
      GenerateAILogo();
    }
  }, [formData])

  const GenerateAILogo=async()=>{

    // if(modelType!='Free'&&userDetail?.credits<=0)
    // {
    //     console.log("Not Enough Credits")
    //     toast('Not enought credits!!!')
    //     return ;
    // }

    setLoading(true);
    const PROMPT=Prompt.LOGO_PROMPT
    .replace('{logoTitle}',formData?.title)
    .replace('{logoDesc}',formData?.desc)
    .replace('{logoColor}',formData.palette)
    .replace('{logoIdea}',formData?.idea)
    .replace('{logoDesign}',formData?.designs?.title)
    .replace('{logoPrompt}',formData?.designs?.prompt);

    console.log(PROMPT);

    // try {
    //   const result = await axios.post('/api/ai-logo-model', {
    //     prompt: PROMPT
    //   });
    // console.log(result?.data);

    // } catch (error) {
    //   console.log('Error generating logo:', error.message);
    //   console.log('Response data:', error.response?.data);
    // }


    // // //Generate Logo Prompt from AI
    // // //Generate Logo Image
    const result=await axios.post('/api/ai-logo-model',{
      prompt:PROMPT,
      email:userDetail?.email,
      title:formData.title,
      desc:formData.desc,
      // type:modelType,
      // userCredits:userDetail?.credits
    });
   
    // // setLogoImage(result.data?.image)
    setLoading(false);
    // console.log(result?.data);
   
  }

  return (
    <div>GenerateLogo</div>
  )
}

export default GenerateLogo