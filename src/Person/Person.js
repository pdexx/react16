import React from 'react';
const person =(props)=>{
    return(
        <div>
            <h2>I am a person</h2>
            <p onClick={props.click}>{`my name is ${props.name} and ${props.age} old`}</p>
            <input type='text' onChange={props.change} value={props.name}/>      
        </div>
    )
};

export default person;