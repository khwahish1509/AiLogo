import { AIDesignIdea } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is missing in the request" });
    }

    const result = await AIDesignIdea.sendMessage(prompt);

    return NextResponse.json({ data: JSON.parse(result.response.text()) });
  } catch (e) {
    console.error("Error in AI Design API:", e);
    return NextResponse.json({ error: e.message || "Unknown error" });
  }
}
