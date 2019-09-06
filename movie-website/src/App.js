import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Movies/Movies'
import { Route, Switch } from 'react-router-dom'
import ShowMovie from './Movies/ShowMovie'

function App(props) {
  console.log("props from app:", props)
  return (
    <div className="App App-header">
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/:id" component={ShowMovie} />
      </Switch>
    </div>
  );
}

export default App;

//App App-header
