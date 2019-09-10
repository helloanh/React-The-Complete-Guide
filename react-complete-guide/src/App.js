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
    ]
  });

  const myStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  // function inside a function, normal in hooks
  const switchNameHandler = () => {
    // console.log('Was clicked!')
    // DON't DO THIS: personsState.persons[0].name = 'React Guru';
    setPersonsState({
        persons: [
        { name: 'Ann', age: 30 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 99 }
      ],
      // hooks does not automatically merge the the otherState into new personsState
      // need to manually set it
      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App </h1>
      <p> This is really working! </p>
      <button onClick={switchNameHandler} style={myStyle}> Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} ></Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} > My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[0].age} />
    </div>
  );
  
}

export default app;

