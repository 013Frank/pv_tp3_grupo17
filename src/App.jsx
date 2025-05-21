import React, { useState } from 'react'
import './App.css'
import TaskInput from '../src/components/TaskInput'
import TaskList from '../src/components/TaskList'

function App() {
  const [list, setlist] = useState([]) ;

  return (
    <div>
      <TaskInput list={list} setlist={setlist} /> 
      {list.length > 0 ? (
        <TaskList list={list} setlist={setlist} />
      ) : (
        <p>No hay tareas</p>
      )}
    </div>
  );
}

export default App
