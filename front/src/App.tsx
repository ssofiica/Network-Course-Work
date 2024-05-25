import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Container from './components/Container/Container'
import Login from './components/Login/login'
import { userData } from './store/slices/userSlice'
import { WSConnect, WS_HOST } from './websocket'
import { useDispatch } from 'react-redux'
import { Messages } from './store/slices/messageSlice'
//import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const login = userData()
  const messages = Messages()

  const [socket, setSocket] = useState<WebSocket>()

  useEffect(() => {
    login && setSocket(new WebSocket(WS_HOST))
  }, [login])

  WSConnect(dispatch, messages, socket)

  return (
    <div className="app">
      {login !== ''? ( 
      <>
        <Header socket={socket}/>
        <Container socket={socket}/>
      </>
      ) : (<Login />)
      }
    </div>
  )
}

export default App
