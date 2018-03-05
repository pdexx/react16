import React from 'react';
const person =(props)=>{
    return(
        <div>
            <h2>I am a person</h2>
            <p>{`my name is ${props.name} and ${props.age} old`}</p>
        </div>
    )
};

export default person;