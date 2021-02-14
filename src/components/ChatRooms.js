import {useEffect, useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {addChatRoomsInfo , currentChatRoom} from '../actions/ChatWindowActions'
export default function ChatRooms(){
 const dispatch = useDispatch();
 const selector = useSelector(state => state);
 const [rooms , setRooms] = useState([])

 
  useEffect(()=>{
    return async function fetchRooms(){
    let response = await fetch('http://localhost:8080/api/rooms' )
    let data = await response.json();
    console.log(data);
    setRooms(data);
    const payload = data;
    dispatch(payload);
  }
  fetchRooms();
}, [])
  return(
    <div>
      {
        rooms.map((room)=>(
          <li>{room.name}</li>
        ))
      }
      </div>
  )
}