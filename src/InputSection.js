import React, { useState } from "react";
import Results from "./Results";


const InputSection = () => {
    
    const [input, setInput] = useState('');
    const [resultsList, setResultsList] = useState([])

    const performAPICall = async (data) => {
        let json = "";
        try {
            const response = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer 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`,
                },
                body: JSON.stringify(data),
            });
            json = await response.json();
            console.log(json);
        } catch (error) {
            console.log(error);
        }
        return json;
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        const data = {
            prompt: input,
            temperature: 0.8,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };

        let jsonResponse = await performAPICall(data);
        console.log (jsonResponse);

        try 
        {
            let output = jsonResponse.choices[0].text;
            console.log (output);
            setResultsList(resultsList => [...resultsList, [input, output]]);
        } catch (error) {
            console.log("here");
            console.log(error);
        }

        
    }
    
    return (
        <div>
            <div>
                <h1>Input</h1>
                <form onSubmit={handleSubmit}>
                    <label>Enter prompt</label>
                    <br/>
                    <textarea
                        type="text"
                        required
                        value={input}
                        onChange={ (e) => {setInput(e.target.value)} }
                    />
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                <h1>Responses</h1>
                <Results resultsList={resultsList} />
            </div>
        </div>


    );
}

export default InputSection;

