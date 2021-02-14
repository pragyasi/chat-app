const initialState = [];
export default function UserLoginPageReducer(state, action ){
  console.log('Hellod in here' )
  state = initialState
  console.log('Actioon and it' , action)
  switch(action.type){
    case 'ADD_CHAT_ROOMS' :
      return [...state , action.payload]
    default : 
      return state
  }

}