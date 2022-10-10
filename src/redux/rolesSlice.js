import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    role: ''
}

export const rolesSlice = createSlice({
    name: 'roles',
    initialState,
    reducers: {
        getRole: (state, action) => {
            return {role: action.payload}
        },
    }
})

export const {getRole} = rolesSlice.actions
export const rolesState = (state) => state.role

export default rolesSlice.reducer;