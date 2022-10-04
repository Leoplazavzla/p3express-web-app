import {createSlice} from "@reduxjs/toolkit";
import { doc, addDoc, updateDoc, collection, getDocs, deleteDoc} from "firebase/firestore";
import db from '../firebase/firebaseConfig'




const initialState = []

export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: async (state, action) => {
            console.log(state, action)
            try {
                const colRef = await collection(db, 'projects')
                await addDoc(colRef, action.payload)

            }catch (e) {
                console.log(e)
            }
            return [...state, action.payload]
        },
        getProjects: async (state, action) => {
            return [...state, action.payload.value]
            /*try {
                const projectDocRef = await collection(db, 'projects')
                const docSnap = await getDocs(projectDocRef)
                const doc = docSnap.docs.map((doc) => {
                    return {
                        id: doc.id,
                        title: doc.data().title,
                        description: doc.data().description
                    }
                })
                console.log(state)
                return [...state, doc]


            }catch (e) {
                console.log(e)
            }*/
        }
    }
})

export const {getProjectName, getProjectDescription, addProject, getProjects} = projectSlice.actions;
export const projectDetails = (state) => state.projectTitle.projectTitle;

export default projectSlice.reducer;