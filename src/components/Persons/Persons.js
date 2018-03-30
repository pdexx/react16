import React, { Component } from 'react';
import Person from './Person/Person.js';



const Persons = (props) => (
    props.persons.map((man, index) => {
        return (
            <Person
                name={man.name}
                age={man.age}
                key={man.id}
                change={(event) => props.changed(event, man.id)}
                // event是輸入的值,man.id是陣列給予的id
                delete={() => props.deleted(index)}
            />)
    })
);

export default Persons;