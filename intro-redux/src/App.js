import React from 'react';
import './App.css';
import Counter from './Count'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Todo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
