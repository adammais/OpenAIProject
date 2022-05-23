
const Results = (props) => {
    return (
        <div>
            {props.resultsList.length != 0 ? <h2>Response</h2> : null}
            <div>{props.resultsList.map( (e,index) =>
                <div  className="p-3 mb-2 bg-light text-dark" key={index} id={"response_" + index}>
                    <strong>Prompt:</strong> {e[0]} <br/> 
                    <strong>Response:</strong> {e[1]}
                </div>
            )}
            </div>
        </div>
    );
}

export default Results;

