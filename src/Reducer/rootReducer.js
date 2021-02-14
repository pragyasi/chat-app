import {combineReducers} from 'redux'
import UserLoginPageReducer from './UserLoginPageReducer'
import ChatWindowPageReducer from './ChatWindowPageReducer'


 const rootReducer = combineReducers({
  UserLoginPageReducer : UserLoginPageReducer,
  ChatWindowPage : ChatWindowPageReducer

})
export default rootReducer