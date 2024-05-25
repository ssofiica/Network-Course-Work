import { combineReducers, configureStore } from '@reduxjs/toolkit'
//import userReducer from './slices/userSlice'
import messageReducer from './slices/messageSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: combineReducers({
        messages: messageReducer,
        user: userReducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch