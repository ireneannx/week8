import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom'
import CreateTodo from './components/create-todo.component'
import EditTodo from './components/edit-todo.component'
import TodosList from './components/todos-list.component'
import Navbar from './components/Navbar'
//import Switch from './theme/Switch'
import { ThemeProvider } from './theme/theme'

class App extends Component {
  state = {
    theme: "light",

    changeTheme: () => { //function inside state must follow render props
      this.setState(({ theme }) => {
        return (
          { theme: theme == "light" ? "dark" : "light" })
      })
    }
  }
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="container">
          <Navbar />
          <button onClick={this.state.changeTheme}> Change Theme </button>
          <Route exact path="/" component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;


