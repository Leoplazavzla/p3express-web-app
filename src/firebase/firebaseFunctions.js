import {addDoc, collection, doc, getDoc, getDocs, setDoc} from "firebase/firestore";
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

export const getUserRoles = async (id) => {
    const rolesRef = doc(db, `users/${id}`)
    const roleData =  await getDoc(rolesRef)
    const userRole =  roleData.data().role
    return userRole
}

export const getCompanies = async () => {
    const companiesRef = await collection(db, 'Companies')
    const docSnap = await getDocs(companiesRef)
    return docSnap.docs.map(doc => ({...doc.data()}))
}

export const addCompanyName = async (companyName) => {
    const companiesRef = await collection(db, 'Companies')
    await addDoc(companiesRef, companyName)
}
