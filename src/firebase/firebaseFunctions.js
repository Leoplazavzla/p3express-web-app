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

export const createRoles = async (id, email, role, company) => {
    const usersRef = doc(db, `users/${id}`)
    await setDoc(usersRef, {email: email, role: role, company: company.companyName})
}

export const getUserData = async (id) => {
    const userRef = doc(db, `users/${id}`)
    const userData =  await getDoc(userRef)
    return userData.data();
}

export const getUserRoles = async (id) => {
    const rolesRef = doc(db, `users/${id}`)
    const roleData =  await getDoc(rolesRef)
    return await roleData.data().role
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
