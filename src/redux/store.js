import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import dialogs from '../reduxMessage/reducers/dialogs'
import messages from '../reduxMessage/reducers/messages'

export const store = configureStore({
  reducer: {
    userReducer,
    dialogs,
    messages
  },
})