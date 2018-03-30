import React from 'react';
import './Cockpits.css';

const Cockpit =(props)=>{

    const style = {
      backgroundColor: '#4CAF50',
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
    };

    if (props.datas.open === false) {
      // props.show = null;
      } else {
  
        style.backgroundColor = 'red';
      }

      const classes = [];
      if (props.datas.person.length <= 2) {
        classes.push('red');
      } 
      if (props.datas.person.length <= 1) {
        classes.push('bold');
      }

      return(
        <div>
        <p className={classes.join(' ')}>hihihih</p>
        <p>{props.tested}</p>
        <button onClick={props.clicked} style={style}>toggle</button>
        </div>
      );
};

export default Cockpit;
