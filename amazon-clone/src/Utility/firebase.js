import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyARCYHD9J_EXWv-NGVNgTqq6mAFhX0NO6w",
    authDomain: "clone-1bcb9.firebaseapp.com",
    projectId: "clone-1bcb9",
    storageBucket: "clone-1bcb9.appspot.com",
    messagingSenderId: "133878654943",
    appId: "1:133878654943:web:f440161b795c0d7a9c066a",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
