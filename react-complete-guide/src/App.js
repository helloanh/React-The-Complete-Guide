// useState most important react hook,
// allows us to manage states in functional component
import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';


// converting class App to cont for functional component
const app = (props) => {
  // returns array with exacct two elements
  // first element back is always the current state
  // the second element is always the function that allow
  // us to update the state and allow react to render/update

  // array destructuring as way to save variable
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some otherState value',
    showPersons: false
  });

  const myStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

  const [otherState, setOtherState] = useState('some other value');

  //console.log(personsState, otherState);

  const togglePersonHandler = () => {
    const doesShow = personsState.showPersons;
    this.setState({show: !doesShow });
  }

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        { this.state.persons.map(person, index) => (
            return <Person>
        )}
      )
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App </h1>
      <p> This is really working! </p>
      <button onClick={togglePersonHandler} style={myStyle}> Toggle</button>
      { 
        personsState.showPersons === true ?
          <div>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} ></Person>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age} > My Hobbies: Racing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[0].age} />
          </div> : null 
      }
    </div>
  );
  
}

export default app;

