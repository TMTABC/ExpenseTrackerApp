// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeAuth,getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore} from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzUMLWr4Tf47bRA8-AqLIbliuaCUMAlF4",
    authDomain: "expenses-tracker-2b789.firebaseapp.com",
    projectId: "expenses-tracker-2b789",
    storageBucket: "expenses-tracker-2b789.firebasestorage.app",
    messagingSenderId: "227199535513",
    appId: "1:227199535513:web:cde4662d88f2850b1e6b08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
})

// db
export const firestore = getFirestore(app)