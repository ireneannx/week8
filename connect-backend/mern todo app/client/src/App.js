import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Link } from 'react-router-dom'
import CreateTodo from './components/create-todo.component'
import EditTodo from './components/edit-todo.component'
import TodosList from './components/todos-list.component'


class App extends Component {

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="" target="_blank">
            <img src={logo} width="30" height="30" />
          </a>
          <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>

        <br />

        <Route exact path="/" component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    );
  }
}

export default App;


