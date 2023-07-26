// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaEMW1bcqqWJswMi_1KUJdVG8QExtyexg",
  authDomain: "blog-project-7f614.firebaseapp.com",
  projectId: "blog-project-7f614",
  storageBucket: "blog-project-7f614.appspot.com",
  messagingSenderId: "68830355935",
  appId: "1:68830355935:web:730cb3f893234c4610a46a",
  measurementId: "G-5TF79T4YQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();