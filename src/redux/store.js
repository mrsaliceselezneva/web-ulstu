import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import notificationsReducer from './slices/notificationsSlice';
import dialogs from '../reduxMessage/reducers/dialogs';
import messages from '../reduxMessage/reducers/messages';
import lastmess from '../reduxMessage/reducers/lastmess';

export const store = configureStore({
  reducer: {
    userReducer,
    notificationsReducer,
    dialogs,
    messages,
    lastmess
  },
})