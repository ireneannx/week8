import { combineReducers } from 'redux';
import Count from './reducer'

const rootReducer = combineReducers({
  Count: Count
})

export default rootReducer