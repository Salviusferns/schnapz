// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1gR_F5AvJs2ruTMd647ujII6SkUzKPD0",
    authDomain: "schnapz-5d12b.firebaseapp.com",
    projectId: "schnapz-5d12b",
    storageBucket: "schnapz-5d12b.appspot.com",
    messagingSenderId: "790715521706",
    appId: "1:790715521706:web:2ae2dfd4e4f7151574ced3",
    measurementId: "G-YBCWCQG7NP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
