import React from 'react';
import './person.css';

const person =(props)=>{
    return(
        <div className='person'>
            <h2 onClick={props.delete}>I am a person</h2>
            <p>{`my name is ${props.name} and ${props.age} old`}</p>
            <input type='text' onChange={props.change} value={props.name}/><br/>
            {/* <button onClick={props.delete}>delete</button>       */}
        </div>
    )
};

export default person;