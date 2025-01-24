"use client"
import React, { useState } from 'react'
import LogoTitle from './_component/LogoTitle'
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import LogoDesc from './_component/LogoDesc';
import LogoPallete from './_component/LogoPallete';
import LogoDesigns from './_component/LogoDesigns';
import LogoIdea from './_component/LogoIdea';


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
        <LogoTitle onHandleInputChange={(v)=>onHandleInputChange('title',v)}/>:
        step==2?
        <LogoDesc onHandleInputChange={(v)=>onHandleInputChange('desc',v)}/>:
        step==3?
        <LogoPallete onHandleInputChange={(v)=>onHandleInputChange('palette',v)}/>:
        step==4?
        <LogoDesigns onHandleInputChange={(v)=>onHandleInputChange('designs',v)}/>:
        step==5?
        <LogoIdea onHandleInputChange={(v)=>onHandleInputChange('idea',v)}/>:
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