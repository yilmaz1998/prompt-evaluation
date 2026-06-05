import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runGPT(prompt: string) {
  try {
    const response = await openai.responses.create({
      model: 'gpt-4.1-mini',
      input: prompt,
      temperature: 0,
    });
    
    return response.output_text;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}