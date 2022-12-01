import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') || 'unauthorized',
    firstName: 'unauthorized',
    lastName: 'unauthorized',
    futherName: 'unauthorized',
    group: 'unauthorized',

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginToken(state, action) {
            state.token = action.payload;
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
        loginGroup(state, action) {
            state.group = action.payload;
        },

    },
});

export const { loginToken, loginFirstName, loginLastName, loginFutherName, loginGroup, messagesSetItems } = userSlice.actions;

export default userSlice.reducer;