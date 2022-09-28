// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA70pJC3V-MQqc4-oJRIpFIk1yQqMOSml8",
    authDomain: "p3expresswebapp.firebaseapp.com",
    projectId: "p3expresswebapp",
    storageBucket: "p3expresswebapp.appspot.com",
    messagingSenderId: "528468141939",
    appId: "1:528468141939:web:df9e3931f11121e228c706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
export const auth = getAuth();
