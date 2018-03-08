import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: "John", age: 33 },
      { name: "Bob", age: 15 },
      { name: "Mary", age: 22 },
    ],
    count: 0,
    open: true,
  }
  handleInputName = (inputName) => {
    this.setState({
      person: [
        { name: "Joe", age: 33 },
        { name: inputName.target.value, age: 15 },
        { name: "Mary", age: 2 },
      ]
    })
  }
  handleDeleteName = (inputName) => {
    const persons =this.state.person;
    persons.splice(inputName,1);//將state中的person陣列從後面裁掉1個
    this.setState({
      person: persons,
    })
  }

  togglePersonHandle = () => {
    this.setState({
      open: !this.state.open,
    })
  }
  handleCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
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

    //將內容賦予一個變數person
    //用{}與map使資料驅動list
    //當在Jsx檔案中出現<Tag></Tag>時，Tag間必須依據JSX的語法，有程式的部份需{....}處理
    let person = (
      <div>{
        this.state.person.map((man, index) => {
          return (
            <Person
              name={man.name}
              age={man.age}
              change={this.handleInputName}
              delete={()=>this.handleDeleteName(index)}
            />)
        })}</div>);

    //利用邏輯控制內容是否顯示
    if (this.state.open === true) {

    } else {
      person = null;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>hihihih</h1>
        <button onClick={this.togglePersonHandle} style={style}>toggle</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {/* ==== */}
        </p>
        {person}
        <button onClick={this.handleCount}>+1</button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default App;
