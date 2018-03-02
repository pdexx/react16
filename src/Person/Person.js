import React from 'react';
const person =()=>{
    return(
        <div>
            <h2>I am a person</h2>
            <p>{Math.floor(Math.random()*30)} old</p>
        </div>
    )
};

export default person;