// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9662c.firebaseapp.com",
  projectId: "mern-estate-9662c",
  storageBucket: "mern-estate-9662c.appspot.com",
  messagingSenderId: "599400443663",
  appId: "1:599400443663:web:4d21a1a93f6c536957587a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
