import { useState } from "react"

import { useSelector, useDispatch } from 'react-redux'
import ChatInput from '../components/ChatInput'
import ChatWindow from '../components/ChatWindow'
import ChatRooms from '../components/ChatRooms'

export default function ChatWindowPage() {

  const selector = useSelector(state => state)
  return (
    <div className='chat-page-container'>
      <ChatRooms />
      <div className='chat-message-container'>
        <ChatWindow />
        <ChatInput />
      </div>

    </div>
  )
}