import { addMessageAction, loadMessageAction } from './store/slices/messageSlice'
import { Dispatch } from '@reduxjs/toolkit'

export const WS_HOST = 'ws://localhost:9000'

interface Message {
  login: string;
  text: string;
  date: string;
  my: boolean;
  error: boolean;
}

export const WSConnect = (dispatch: Dispatch, messages: Message[], socket?: WebSocket) => {
  if (!socket) return

  socket.onopen = () => {
    console.log('[open] Соединение установлено')
  }

  socket.onmessage = (event) => {
    console.log(event.source)
    const message = JSON.parse(
      event.data instanceof Blob ? event.data.text() : event.data
    )
    console.log(message)
    
    const index = messages.findIndex(
      (el) =>  (el.login === message.login)
    )
    console.log(index)
    if (index > -1 && message.error) {
      dispatch(loadMessageAction(index))
      return
    }

    message && dispatch(addMessageAction(message))
  }

  socket.onclose = function (event) {
    if (event.wasClean) {
      console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`)
    } else {
      console.log('[close] Соединение прервано')
    }
  }

  socket.onerror = (error) => {
    console.log(error)
  }
}