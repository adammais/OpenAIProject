import React, { useState } from "react";
import Results from "./Results";
import Button from "react-bootstrap/Button";


const InputSection = () => {
  const [input, setInput] = useState("");
  const [resultsList, setResultsList] = useState([]);

  const performAPICall = async (data) => {

    let json = "";
    try {
      const response = await fetch(
        "https://api.openai.com/v1/engines/text-curie-001/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_SECRET}`,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.status == 200) {
        json = await response.json();
        console.log(json);
        return json;
      } else {
        json = await response.json();
        console.log(json);
        // Format Div Error Element with Bootstrap.
        alert("Call to OpenAI has failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    if (input === "") {
      // User has typed nothing in, so, show an alert.
      // TODO - Style
      alert("Please enter some text for the AI to act on");
    } else {
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

      try {
        let output = jsonResponse.choices[0].text;
        console.log(output);
        setResultsList((resultsList) => [...resultsList, [input, output]]);
      } catch (error) {
        console.log("ERROR encountered....");
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="mt-4">
        <form>
          <strong>Enter prompt</strong>
          <br />
          <textarea
            type="text"
            required
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="form-control"
            id="exampleFormControlTextarea3"
            rows="7"
            placeholder="e.g. Write happy birthday wishes"
          />
          <br />
          <Button onClick={handleSubmit}>Submit</Button>
        </form>
      </div>
      <div className="mt-4">
        <Results resultsList={resultsList} />
      </div>
    </div>
  );
};

export default InputSection;
