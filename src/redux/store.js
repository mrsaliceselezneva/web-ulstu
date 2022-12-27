import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import notificationsReducer from './slices/notificationsSlice';
import dialogs from '../reduxMessage/reducers/dialogs';
import messages from '../reduxMessage/reducers/messages';
import users from '../reduxMessage/reducers/users';


export const store = configureStore({
  reducer: {
    userReducer,
    notificationsReducer,
    dialogs,
    messages,
    users

  },
})