import React, { useState } from "react";

const Results = (props) => {
    return (
        <div>{props.resultsList.map( e =>
            <div>Prompt: {e[0]} <br/> Response: {e[1]}</div>
        )}
        </div>
    );
}

export default Results;

