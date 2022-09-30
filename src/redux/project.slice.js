import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    projectTitle: null,
    projectDescription: null
}


export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getProjectName: (state, action) => {
            state.projectTitle = action.payload

        },
        getProjectDescription: (state, action) => {
            state.projectDescription = action.payload

        }
    }
})

export const {getProjectName, getProjectDescription} = projectSlice.actions;
export const projectDetails = (state) => state.projectTitle.projectTitle;

export default projectSlice.reducer;