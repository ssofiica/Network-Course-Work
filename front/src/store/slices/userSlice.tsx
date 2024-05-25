import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: '',
    },
    reducers: {
        setLogin(state, {payload}) {
            state.login = payload;
        },
    },
});

export const userData = () => useSelector((state: RootState) => state.user.login)

export const { setLogin: setLoginAction } = userSlice.actions

export default userSlice.reducer