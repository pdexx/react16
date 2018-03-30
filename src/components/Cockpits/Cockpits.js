import React, { Component } from 'react';
import './Cockpits.css';

const Cockpit =(props)=>{
    if (props.open === false) {
        myPerson = null;
      } else {
  
        style.backgroundColor = 'red';
      }
  
      const classes = [];
      if (props.person.length <= 2) {
        classes.push('red');
      } 
      if (props.person.length <= 1) {
        classes.push('bold');
      }

      return(
        <div>
        <p className={classes.join(' ')}>hihihih</p>
        <button onClick={this.togglePersonHandle} style={style}>toggle</button>
        </div>
      )
}

export default Cockpit;
