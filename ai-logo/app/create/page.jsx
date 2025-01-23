import React, { useState } from 'react'
import LogoTitle from './_component/LogoTitle'
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';


function CreateLogo() {
    const [step, setStep] = useState(1);
    const onHandleInputChange=()=>{

    }
  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
        {step==1?
        <LogoTitle onHandleInputChange={(v)=>onHandleInputChange('title',v)}/>:
        null
        }

        <div className='flex items-center justify-between mt-10'>
            <Button variant="outline"> <ArrowLeftIcon/> Previous</Button>
            <Button> <ArrowRightIcon/> Continue</Button>
        </div>
    </div>
  )
}

export default CreateLogo