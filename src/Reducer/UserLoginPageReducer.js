import { act } from "react-dom/test-utils";

const initialState = [];
export default function UserLoginPageReducer(state, action ){
  state = initialState
  switch(action.type){
    case 'SET_USER_NAME' :
      return [...state , action.payload]
    default : 
      return state
  }

}