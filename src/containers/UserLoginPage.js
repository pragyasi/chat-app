import {useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {setUserName} from '../actions/UserPageActions'
export default function UserLoginPage(props){
  const[user , setUser] = useState('');
  const[chatBuddies , setChatbuddies ] = useState([]);
  const dispatch = useDispatch();
  const userLogin = useSelector(state=>state)
  

  const userActions = ()=>{
    props.history.push('/chatwindow');
    const action =setUserName({userName : user});
    dispatch(action);
  }



  return (
    <div>
      <input type='text' value={user} onChange={(e)=>setUser(e.target.value)} placeholder='Type your username...'/>
      <button onClick={()=>userActions()} >Join the DoorDash Chat!</button>
      </div>
  )
}