import React, {useContext, useState, useEffect} from "react";
import {auth} from "../firebase/firebaseConfig";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    sendSignInLinkToEmail
} from 'firebase/auth'
import {getUserRoles} from "../firebase/firebaseFunctions";

const AuthContext = React.createContext(1)

export function useAuth() {
    return useContext(AuthContext)
}

const actionCodeSettings = {
    url: 'localhost',
    handleCodeInApp: true,
    iOS: {
        bundleId: 'com.example.ios'
    },
    android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const register = async (auth, email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password).then(() => {
        })
    }

    const logIn = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const createUserByPortfolioManager = async (email) => {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
    }

    const getUserRole = async (id) => {
        return await getUserRoles(id)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            if(user) {
                user.getIdTokenResult().then((result) => {
                    //console.log(result)
                })
            }
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        getUserRole,
        register,
        logOut,
        logIn,
        createUserByPortfolioManager,
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}