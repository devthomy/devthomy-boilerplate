import OpenAI from 'openai'

const openAIKey = process.env.OPENAI_API_KEY

if (!openAIKey){throw new Error("OPEN_AI_KEY not define")}

export const openai = new OpenAI({
    apiKey:openAIKey
})