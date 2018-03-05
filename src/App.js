import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    person:[
      {name:"John", age:33},
      {name:"Bob", age:15},
      {name:"Mary", age:22},
    ],
    count:0
  }
  handleName=(newName)=>{this.setState({
    person:[
      {name:newName, age:33},
      {name:"Bob", age:15},
      {name:"Mary", age:2},
    ]
  })}
  handleInputName=(inputName)=>{this.setState({
    person:[
      {name:"Joe", age:33},
      {name:inputName.target.value, age:15},
      {name:"Mary", age:2},
    ]
  })}
  handleCount=()=>{this.setState({
    count:this.state.count+1,
  })}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>hihihih</h1>
        <button onClick={this.handleName.bind(this, '!!!!')}>btn</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {/* ==== */}
          <Person 
          click={this.handleName.bind(this, 'hihihi')} 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}/>
          <Person name={this.state.person[1].name} age={this.state.person[1].age}
          change={this.handleInputName}
          />

          <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
          <button onClick={this.handleCount}>+1</button>
          <div>{this.state.count}</div>
           {/* ==== */}
           
        </p>
      </div>
    );
  }
}

export default App;
