import { combineReducers } from 'redux'
import modesReducer from './modesReducer'
import workersReducer from './workersReducer'

const rootReducer = combineReducers({
  workersReducer,
  modesReducer
})

export default rootReducer
