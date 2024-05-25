import React from 'react'
import './style.css'
//import { userData } from '../../store/slices/userSlice'
//import { useDispatch } from 'react-redux'
//import { setUserDataAction, userData } from '../../store/slices/userSlice'
//import ExitIcon from '../../icons/ExitIcon'
//import { clearChatHistoryAction, onlineCount } from '../../store/slices/chatSlice'

type Props = {
  login: string
  message: string
  date: string;
  my: boolean
  error: boolean
}

const Message: React.FC<Props> = ({ login, message, date, my, error }) => {
  const dateTime = new Date(date);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  
  return (
    <div className={my ? 'my-message' : 'message'}>
        {my ? (
        <div className="message-info">
            <span className="time">{formattedTime}</span>
            <span className="name">{login}</span>
        </div> ):(
          <div className="message-info">
            <span className="name">{login}</span>
            <span className="time">{formattedTime}</span>
        </div>
        )}
        {error ? ( my ? <p className="text error">Ошибка доставки</p> : null) 
          : (<p className="text">{message}</p>)}
    </div>
  )
}

export default Message