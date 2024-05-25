import React, { useEffect } from 'react'
import './style.css'
import Input from '../Input/input'
import Message from '../Message/message'
import { useDispatch } from 'react-redux'
import { userData } from '../../store/slices/userSlice'
import { Messages } from '../../store/slices/messageSlice'
//import ExitIcon from '../../icons/ExitIcon'
//import { clearChatHistoryAction, onlineCount } from '../../store/slices/chatSlice'

type Props = {
  socket?: WebSocket
}

// const messages = [
//   { name: 'ssofiica', text: `Всем привет! Во сколько полетим? Я могу после 16` },
//   { name: 'n.mashaaa', text: 'После 17' },
//   { name: 'rozovaa', text: 'Я заканчиваю в 16, так что где-то в 18 готова выезжать', My: true },
//   { name: 'ssofiica', text: `Всем привет! Во сколько полетим? Я могу после 16` },
//   { name: 'n.mashaaa', text: 'После 17' },
//   { name: 'rozovaa', text: 'Я заканчиваю в 16, так что где-то в 18 готова выезжать', My: true },
//   { name: 'ssofiica', text: `Всем привет! Во сколько полетим? Я могу после 16` },
//   { name: 'n.mashaaa', text: 'После 17' },
//   { name: 'rozovaa', text: 'Я заканчиваю в 16, так что где-то в 18 готова выезжать', My: true },
// ];

const Container: React.FC<Props> = ({ socket }) => {
   const login = userData()
   const messages = Messages()
   const dispatch = useDispatch()

//   const exitHandle = () => {
//     dispatch(setUserDataAction({ name: '' }))
//     socket?.close()
//   }

//   const handleLogOut = () =>{
//     //     dispatch(clearChatHistoryAction())
//     socket?.close(); // Закрытие соединения с вебсокетом
//   }  

  return (
    <div className="container">
      {messages && messages.length > 0 ? (
      <div className="messages">
        {messages.map((msg, index) => (
        <Message key={index} login={msg.login} text={msg.text} date={msg.date} my={msg.my} error={msg.error}/>
          ))} 
      </div>
      ) : <div>Пока нет сообщений</div>
      }
      <Input socket={socket}/>
    </div>
  )
}

export default Container