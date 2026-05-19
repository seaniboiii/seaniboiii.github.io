const { GoogleGenAI } = require("@google/genai"); 

exports.handler = async function(event) {
  try {
    const body = JSON.parse(event.body);
    const question = body.question;
    const answer = body.answer;
    
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); 
    
    // Changing the model identifier connects directly to Gemma 4 MoE
    const response = await ai.models.generateContent({ 
      model: "gemma-4-26b-a4b-it", 
      contents: `
        You are grading a middle school connotation/denotation game.
        Question: ${question}
        Student Answer: ${answer}
        Decide whether the answer is: CORRECT or INCORRECT
        Then provide a short explanation.
        Don't use any markdown language.
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ result: response.text })
    };
    
  } catch(error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ result: "Error grading answer" })
    };
  }
};
