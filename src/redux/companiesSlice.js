import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    companyName: ''
}

export const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        getCompanyName: (state, action) => {
            return {companyName: action.payload}
        },
    }
})

export const {getCompanyName} = companiesSlice.actions
export const companiesState = (state) => state.companyName

export default companiesSlice.reducer;