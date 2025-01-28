"use client"
import React, { useState } from 'react'
import LogoTitle from './_component/LogoTitle'
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import LogoDesc from './_component/LogoDesc';
import LogoPalette from './_component/LogoPalette';
import LogoDesigns from './_component/LogoDesigns';
import LogoIdea from './_component/LogoIdea';
import { PricingModel } from './_component/PricingModel';


function CreateLogo() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState();
    // create a new instance of the component with the specified parameters.
    const onHandleInputChange=(field, value)=>{
      setFormData(prev=>({
         ...prev,
          [field]:value
      }));

      console.log(formData);
    }
  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
        {step==1?
        <LogoTitle onHandleInputChange={(v)=>onHandleInputChange('title',v)}
        formData={formData}/>:
        step==2?
        <LogoDesc onHandleInputChange={(v)=>onHandleInputChange('desc',v)}
        formData={formData}/>:
        step==3?
        <LogoPalette onHandleInputChange={(v)=>onHandleInputChange('palette',v)}
        formData={formData}/>:
        step==4?
        <LogoDesigns onHandleInputChange={(v)=>onHandleInputChange('designs',v)}
        formData={formData}/>:
        step==5?
        <LogoIdea formData={formData} onHandleInputChange={(v)=>onHandleInputChange('idea',v)}
        />:
        step==6?
        <PricingModel formData={formData} onHandleInputChange={(v)=>onHandleInputChange('pricing',v)} />:
        null
        }

        <div className='flex items-center justify-between mt-10'>
            {step!=1 && <Button variant="outline" onClick={() =>setStep(step-1)}>
               <ArrowLeftIcon/> 
               Previous
               </Button>
            }
            <Button onClick={() =>setStep(step+1)}> <ArrowRightIcon/> Continue</Button>
        </div>
    </div>
  )
}

export default CreateLogo