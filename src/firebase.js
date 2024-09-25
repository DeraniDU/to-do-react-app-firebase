// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_uUUaXHy3QycKJQNc6V--mcMMimIWmrc",
  authDomain: "to-do-app-2d948.firebaseapp.com",
  projectId: "to-do-app-2d948",
  storageBucket: "to-do-app-2d948.appspot.com",
  messagingSenderId: "701716751977",
  appId: "1:701716751977:web:ea5b74aa17cae8bdc724f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);