import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    user: null, 
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialValue,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state, action) => {
            state.value = initialValue
            state.isAuthenticated = false;
        }
    }
})

export default authSlice.reducer
export const {  login, logout } = authSlice.actions