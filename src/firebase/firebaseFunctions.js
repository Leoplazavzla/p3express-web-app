import { doc, addDoc, updateDoc, collection, getDocs, deleteDoc, setDoc} from "firebase/firestore";
import db from '../firebase/firebaseConfig'

export const addProject = async(userEmail, projectData) => {
    const colRef = await collection(db, `${userEmail}.projects`)
    await addDoc(colRef, projectData)
}

export const getProjectDocs = async (userEmail) => {
    const projectDocRef = await collection(db, `${userEmail}.projects`)
    const docSnap = await getDocs(projectDocRef)
    return docSnap.docs.map(doc => ({...doc.data()}))
}

export const createRoles = async (id, email, role) => {
    const usersRef = doc(db, `users/${id}`)
    await setDoc(usersRef, {email: email, role: role})
}

export const getUsers = async (id) => {


}
