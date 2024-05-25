import React, { useState } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { setLoginAction, userData } from '../../store/slices/userSlice'
import pic from '../../assets/login.jpg'

type Props = {
  socket?: WebSocket
}

const Login = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleLogin = () =>{
        if (name) {
            dispatch(setLoginAction(name))
            setName('')
        }
    }  

  return (
    <div className="modal">
        <img src={pic} className="login-image"/>
        <div className="overlay-text"><p>Сделай общение ближе</p></div>
        <div className="login">
            <input type="text" placeholder="Логин" value={name} onChange={(e) => setName(e.target.value)}/>
            <button className="button" onClick={handleLogin}><span>Войти</span></button>
        </div>
    </div>
  )
}

export default Login