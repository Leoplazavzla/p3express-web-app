import React, {useContext, useState, useEffect} from "react";
import {auth} from "../firebase/firebaseConfig";
//import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth/dist/auth/index";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'
const AuthContext = React.createContext(1)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const register = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const logIn = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)

            setLoading(false)

        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        register,
        logOut,
        logIn
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}