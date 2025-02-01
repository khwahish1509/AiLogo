import { AILogoPrompt } from "@/configs/AiModel";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    
    const { prompt,email,title,desc,type,userCredits } = await req.json();

    try {
        const AiPromptResult = await AILogoPrompt.sendMessage(prompt);
        console.log(JSON.parse(AiPromptResult.response.text()).prompt);
        const AIPrompt = JSON.parse(AiPromptResult.response.text()).prompt;
        
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA',
            AIPrompt, // <-- Make sure this is properly structured
            {
                headers: {
                    Authorization: "Bearer "+process.env.HUGGING_FACE_API_KEY,
                    "Content-Type": "application/json",
                },
                responseType: "arraybuffer"
            }
        );
        
        const buffer=Buffer.from(response.data,"binary");
        const base64Image=buffer.toString("base64");
        // const base64ImageWithMine=`data:image/png:base64,${base64Image}`;
        // console.log(base64ImageWithMine)
        const base64ImageWithMime = `data:image/png;base64,${base64Image}`;
        console.log(base64ImageWithMime);
        return NextResponse.json({ image: base64ImageWithMime });

        //save to Firebase Databse
        
        // try{
        //     await setDoc(doc(db,"users",email,"logos",Date.now().toString()),{
        //         image:base64ImageWithMime,
        //         title:title,
        //         desc:desc,
        //         id:Date.now()
        //     })
        // }
        // catch(e)
        // {
        //     console.log(e)
        // }
        // return NextResponse.json({image:base64ImageWithMime})
        
        
    } catch (e) {
        return NextResponse.json({error:e});
        
    }

}