import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

interface Message {
    login: string;
    message: string;
    date: string;
    my: boolean;
    error: boolean;
}

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        data: [] as Message[],
    },
    reducers: {
        addMessage(state, {payload}) {
            console.log(payload)
            state.data = [...state.data, payload];
        },
        loadMessage(state, { payload }) {
            if (payload) {
                
            }
            state.data[payload].message = ''
            state.data[payload].error = true
        },
        clearMessages(state) {
            state.data = [];
        },
    },
});

export const Messages = () => useSelector((state: RootState) => state.messages.data)

export const {
  addMessage: addMessageAction,
  clearMessages: clearMessagesAction,
  loadMessage: loadMessageAction,
} = messageSlice.actions

export default messageSlice.reducer