import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    role: ''
}

export const rolesSlice = createSlice({
    name: 'roles',
    initialState,
    reducers: {
        getRole: (state, action) => {
            state.role = action.payload
        },
    }
})

export const {getRole} = rolesSlice.actions
export const rolesState = (state) => state.roles.role

export default rolesSlice.reducer;