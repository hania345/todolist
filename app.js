import React from 'react';
import './App.css'; // Correct the import path

import Todolist from './Todolist'; // Correct the import path

function App() {
  return ( // Correct the placement of the opening parenthesis
    <div className='todo-app'>
      <h1>Todo app</h1>
      <Todolist />
    </div>
  );
}

export default App;
