import { combineReducers } from 'redux';
import Count from './reducer'
import TodoReducer from './reducers/TodoReducer'

const rootReducer = combineReducers({
  Count: Count,
  TodoReducer: TodoReducer
})

export default rootReducer