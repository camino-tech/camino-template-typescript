import React from 'react';
import '../styles/App.css';
import SecondComponent from '../components/SecondComponent';
import StarterComponent from '../components/StarterComponent';
import Person from '../components/person/Person';

function App() {

  return (
    <div className="App">
      <StarterComponent/>
      <SecondComponent/>
      <Person name='Billy' age={15} likes='idk'/>
    </div>
  );
}

export default App;
