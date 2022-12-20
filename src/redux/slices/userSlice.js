import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') || 'unauthorized',
    userId: localStorage.getItem('userId') || 'unauthorized',
    firstName: localStorage.getItem('firstName') || 'unauthorized',
    lastName: localStorage.getItem('lastName') || 'unauthorized',
    futherName: localStorage.getItem('futherName') || 'unauthorized',
    email: localStorage.getItem('email') || 'unauthorized',
    group: localStorage.getItem('group') || 'unauthorized',

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginToken(state, action) {
            state.token = action.payload;
        },
        loginUserId(state, action) {
            state.userId = action.payload;
        },
        loginFirstName(state, action) {
            state.firstName = action.payload;
        },
        loginLastName(state, action) {
            state.lastName = action.payload;
        },
        loginFutherName(state, action) {
            state.futherName = action.payload;
        },
        loginEmail(state, action) {
            state.email = action.payload;
        },
        loginGroup(state, action) {
            state.group = action.payload;
        },

    },
});

export const { loginToken, loginUserId, loginFirstName, loginLastName, loginFutherName, loginEmail, loginGroup, messagesSetItems } = userSlice.actions;

export default userSlice.reducer;