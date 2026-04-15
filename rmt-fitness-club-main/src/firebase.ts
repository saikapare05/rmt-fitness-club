// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbejWTJB9HkehKUf21OQuv1ExgLLDQXKY",
  authDomain: "rmt-gym.firebaseapp.com",
  projectId: "rmt-gym",
  storageBucket: "rmt-gym.firebasestorage.app",
  messagingSenderId: "141720313661",
  appId: "1:141720313661:web:2aa7cc4eac97cd6aca2f54",
  measurementId: "G-HNFV5RVXFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);