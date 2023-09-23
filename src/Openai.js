
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
   // This is also the default, can be omitted
});


export async function sendMsgToOpenAiI(message){
    const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": message}],
        max_tokens: 100,
      });
      return res.choices[0].message
}