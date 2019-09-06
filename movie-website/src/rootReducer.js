import { combineReducers } from 'redux';
//all reducers coming from various files
import moviereducer from './Movies/moviereducer';

export default combineReducers({
  moviereducer
})