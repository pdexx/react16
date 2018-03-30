import React, { Component } from 'react';
import logo from './../assets/logo.svg';
import './App.css';
import Cockpits from './../components/Cockpits/Cockpits.js';
import Persons from './../components/Persons/Persons.js';

class App extends Component {
  state = {
    person: [
      { id: 'ddd2', name: "John", age: 33 },
      { id: 'fgrefr4', name: "Bob", age: 15 },
      { id: 'ffrfr4', name: "Mary", age: 22 },
    ],
    count: 0,
    open: false,
  }
  handleInputName = (event, id) => {
    console.log(event, id);
    //event為input事件的所有參數, id是所輸入的input的id(目前是自訂的key值)

    const personIndex = this.state.person.findIndex(p => { return p.id === id });
    console.log(personIndex);
    //先用p.id去找出被改動的資料在陣列中是第幾筆

    const person = { ...this.state.person[personIndex] };
    console.log(person);
    //把該筆資料取出(避免值接修改state.person)

    person.name = event.target.value;
    console.log(person.name);
    //將該筆資料的name變成表單輸入的值

    const persons = [...this.state.person];
    console.log(persons);
    //令state.person為一個新陣列(避免值接修改state.person)

    persons[personIndex] = person;
    console.log(persons[personIndex]);
    //使新陣列中被改變的數值被改變

    this.setState({
      person: persons,
    })
  }

  handleDeleteName = (index) => {
    //const persons =this.state.person;//將state指向新變數persons,但這個作法不好,因仍然指向原本的位置,最好使用ES6的解構重新做一個物件
    const persons = [...this.state.person];
    persons.splice(index, 1);//將state中的person陣列中選定與往後後裁掉1個
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


    //將內容賦予一個變數person
    //用{}與map使資料驅動list
    //當在Jsx檔案中出現<Tag></Tag>時，Tag間必須依據JSX的語法，有程式的部份需{....}處理
    let persons = null;
    if (this.state.open) {
      persons = (
        <div>{
          <Persons
            persons={this.state.person}
            changed={this.handleInputName}
            deleted={this.handleDeleteName}
          />
        }</div>);
    }

    let test = "999";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Cockpits
          datas={this.state}
          clicked={this.togglePersonHandle}
          tested={test}
        />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {/* ==== */}
        </p>
        {persons}
        <button onClick={this.handleCount}>+1</button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default App;
