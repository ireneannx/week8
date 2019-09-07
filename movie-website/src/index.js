import React from 'react';
import ReactDOM from 'react-dom'; //also for routing
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom' //for routing
import rootReducer from './rootReducer'
import logger from 'redux-logger'
//store part 
import { createStore, applyMiddleware } from 'redux';
import { save, load } from "redux-localstorage-simple"
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'
const middleware = [ReduxThunk, logger, save()]
//for local storage


const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware))
)


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
