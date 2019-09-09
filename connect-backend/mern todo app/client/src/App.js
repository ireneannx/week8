import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom'
import CreateTodo from './components/create-todo.component'
import EditTodo from './components/edit-todo.component'
import TodosList from './components/todos-list.component'
import Navbar from './components/Navbar'


class App extends Component {

  render() {
    return (
      <div className="container">
        <Navbar />

        <Route exact path="/" component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    );
  }
}

export default App;


