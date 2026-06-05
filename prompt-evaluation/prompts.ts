export const prompts = {
    v1: (text: string) => `
    What do you think about this text?    
    Text:
    ${text}
    
    Answer with one word.
    `,

    v2: (text: string) => `
    You are a sentiment classifier.
    
    Return ONLY one of:
    positive, negative, neutral
    
    No explanation.
    
    Text:
    ${text}
    `
}