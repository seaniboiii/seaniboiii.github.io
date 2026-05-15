const { GoogleGenAI } = require("@google/genai");

exports.handler = async function(event){

    try{

        const body = JSON.parse(event.body);

        const question = body.question;
        const answer = body.answer;

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });

        const response =
        await ai.models.generateContent({

            model:"gemini-2.5-flash",

            contents: `
            You are grading a middle school
            connotation/denotation game.

            Question:
            ${question}

            Student Answer:
            ${answer}

            Decide whether the answer is:

            CORRECT
            or
            INCORRECT

            Then provide a short explanation.
            `

        });

        return{

            statusCode:200,

            body:JSON.stringify({

                result:
                response.text

            })

        };

    }

    catch(error){

        console.log(error);

        return{

            statusCode:500,

            body:JSON.stringify({

                result:"Error grading answer"

            })

        };

    }

};