import react from "react";

function Joke(props) {
    const question = props.question;
    const punchLine = props.punchLine;

    return (
        <div>
            <h3>Question: {question}</h3> 
            <h3>Punch: {punchLine}</h3>
        </div>
    )

}


export default Joke