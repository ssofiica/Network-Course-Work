import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userData } from '../../store/slices/userSlice'
import { Messages, addMessageAction } from '../../store/slices/messageSlice'
import './style.css'
import buttonImage from '../../assets/arrow-up.svg'

type Props = {
  socket?: WebSocket
}

const Input: React.FC<Props> = ({ socket }) => {
  const [message, setMessage] = useState('');
  const userName = userData()
  const messages = Messages()
  const dispatch = useDispatch()
  
  const handleSend = () =>{
    if (socket && message) {
        const d = new Date()
        const da = d.toISOString()
        const messageData = {
          login: userName,
          date: da,
          message: message,
        };
       
        dispatch(addMessageAction({ login: userName, message: message, date: da, my: true, error: false }))
        socket.send(JSON.stringify(messageData));
        setMessage('');
      }
  }  

  return (
    <div className="input">
        <input type="text" placeholder='Напишите сообщение...' value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={handleSend}>
            <img src={buttonImage} className="image"/>
        </button>
      </div>
  )
}

export default Input
