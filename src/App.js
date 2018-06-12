import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 26},
      {name: 'John', age: 23}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // this.state.persons[0].name = 'Maxi';
    this.setState( {
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 26},
        {name: 'John', age: 34}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'max', age: 28},
        {name: event.target.value, age: 26},
        {name: 'john', age: 34}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };



    return (
      <div className="App">
        <h1>Hi I am a react app!</h1>
        <button 
        style= {style}
        onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
        <Person
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Maximil!')}
         changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person
         name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'},  'Hi, I am a React App'))
  }
}

export default App;
