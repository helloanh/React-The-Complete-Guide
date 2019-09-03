import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p> This is really working. </p>
        <Person name="Ann" age="30" />
        <Person name="Manu" age="25" >My Hobbies: Racing</Person>
        <Person name="Steph" age="40" />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now?'));
  }
}

export default App;
