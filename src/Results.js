
const Results = (props) => {
    return (
        <div>
            <h2>Response</h2>
            <div>{props.resultsList.map( (e,index) =>
                <div  className="p-3 mb-2 bg-light text-dark" key={index} id={"reesponse_" + index}>
                    Prompt: {e[0]} <br/> 
                    Response: {e[1]}
                </div>
            )}
            </div>
        </div>
    );
}

export default Results;

