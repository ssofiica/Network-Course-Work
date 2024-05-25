import React from 'react'
import './style.css'
import logo from '../../assets/logo.jpg'
import { useDispatch } from 'react-redux'
import { userData, setLoginAction } from '../../store/slices/userSlice'
import { clearMessagesAction } from '../../store/slices/messageSlice'

type Props = {
  socket?: WebSocket
}

const Header: React.FC<Props> = ({ socket }) => {
  const user = userData()
  const dispatch = useDispatch()

  const logoutHandle = () => {
    dispatch(setLoginAction(''))
    dispatch(clearMessagesAction())
    socket?.close()
  }

  return (
    <div className="header">
        <img src={logo} className="logo" alt="S7 Airliness"/>
        <button className="logout-button" onClick={logoutHandle}><span>Выйти</span></button>
    </div>
  )
}

export default Header