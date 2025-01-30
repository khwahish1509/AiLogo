import { AILogoPrompt } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {prompt} = await req.json();
    try {
        const AiPromptResult = await AILogoPrompt.sendMessage(prompt);
        console.log(JSON.parse(AiPromptResult.response.text()))
        const AIPrompt = JSON.parse(AiPromptResult.response.text()).prompt;
        
        const response = await axios.post('https://api-inference.huggingface.co/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA',
            AIPrompt,
            {
                headers: {
                    Authorization: "Bearer "+process.env.HUGGING_FACE_API_KEY,
                    "Content-Type": "application/json",
                },
                responseType:"arraybuffer"
            }
        )
            
        
        return NextResponse.json(AIPrompt);
    } catch (e) {
        
    }
}