import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            return {user: action.payload}
        },
    }
})

export const {login, logout} = userSlice.actions
export const userState = (state) => state.user

export default userSlice.reducer;