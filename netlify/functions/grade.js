const { GoogleGenAI } = require("@google/genai");

exports.handler = async function(event) {
  try {
    const body = JSON.parse(event.body);
    const quote = body.quote;
    const question = body.question;
    const answer = body.answer;

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `
        You are grading a middle school connotation/denotation game.
        Quote (if any): ${quote}
        Question: ${question}
        Student Answer: ${answer}
        
        First line must be exactly CORRECT or INCORRECT and nothing else.
        Second line onwards: a short explanation. No markdown. Address the student directly.
      `
    });

    const text = response.text.trim();
    const firstLine = text.split("\n")[0].trim().toUpperCase();
    const explanation = text.split("\n").slice(1).join(" ").trim();
    const correct = firstLine === "CORRECT";

    return {
      statusCode: 200,
      body: JSON.stringify({ correct, result: explanation })
    };

  } catch(error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ correct: false, result: "Error grading answer." })
    };
  }
};