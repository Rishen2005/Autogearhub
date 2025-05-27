// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBhUjoLMHGVEZW5IFEZ9cfigW5T362EJ6c",
    authDomain: "autogearhub123.firebaseapp.com",
    projectId: "autogearhub123",
    storageBucket: "autogearhub123.firebasestorage.app",
    messagingSenderId: "276265834362",
    appId: "1:276265834362:web:f783d3ee91246f04ec68c3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export everything
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, collection, addDoc };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
