import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notifications: localStorage.getItem('notifications') || 
    [{
        name: 'Левый Чувак',
        
    }],

};

const notificationsSlice = createSlice({
    name: 'notificatons',
    initialState,
    reducers: {
        getNotifications(state, action) {
            state.notifications = action.payload;
        },
    },
});

export const { getNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;