import React from 'react'

function Joke(props){
    return(
        <div>
            <h4>Question: {props.question} </h4>
            <p>Answer: {props.answer} </p>
            <hr></hr>
        </div>
    
    )
}


export default Joke