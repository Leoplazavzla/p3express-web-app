import {createSlice} from "@reduxjs/toolkit";
import { doc, addDoc, updateDoc, collection, getDocs, deleteDoc} from "firebase/firestore";
import db from '../firebase/firebaseConfig'




const initialState = []

export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: async (state, action) => {
            return [...state, action.payload]
        },
        getProjects: async (state, action) => {
            return [...state, action.payload.value]
        }
    }
})

export const {getProjectName, getProjectDescription, addProject, getProjects} = projectSlice.actions;
export const projectDetails = (state) => state.projectTitle.projectTitle;

export default projectSlice.reducer;