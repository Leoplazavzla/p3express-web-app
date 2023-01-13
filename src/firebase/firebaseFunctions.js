import {addDoc, collection, doc, getDoc, getDocs, setDoc, updateDoc,} from "firebase/firestore";
import db from '../firebase/firebaseConfig'
import {logout} from "../redux/userSlice";


//Projects functions
export const addProject = async(userEmail, projectData) => {
    const colRef = await collection(db, `${userEmail}.projects`)
    await addDoc(colRef, projectData)
}

export const getProjectDocs = async (userEmail) => {
    const projectDocRef = await collection(db, `${userEmail}.projects`)
    const docSnap = await getDocs(projectDocRef)
    return docSnap.docs.map(doc => ({...doc.data()}))
}

//Roles functions
export const createRoles = async (id, email, role, company) => {
    const usersRef = doc(db, `users/${id}`)
    await setDoc(usersRef, {id: id, email: email, role: role, company: company.companyName})
}

export const updateUserRole = async (id, role) => {
    const userRef = doc(db, `users/${id}`);
    await updateDoc(userRef, {role: role})
}

//Users functions
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

export const getUserNumberByCompany = async (company) => {
    const usersRef = await collection(db, 'users')
    const usersSnap = await getDocs(usersRef)
    const usersArray = usersSnap.docs.filter(doc => (company === doc.data().company ))
    return usersArray
}

export const getUsersByCompany = async (company) => {
    const usersRef = await collection(db, 'users')
    const usersSnap = await getDocs(usersRef)
    const usersArray = usersSnap.docs.filter(doc => (company === doc.data().company ))
    return usersArray.map(doc => (doc.data()))
}

//Companies functions
export const getCompanies = async () => {
    const companiesRef = await collection(db, 'Companies')
    const docSnap = await getDocs(companiesRef)
    return docSnap.docs.map(doc => ({...doc.data()}))
}

export const addCompanyName = async (companyName) => {
    const companiesRef = await collection(db, 'Companies')
    await addDoc(companiesRef, companyName)
}
