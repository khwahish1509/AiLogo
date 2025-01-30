// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ailogo-76470.firebaseapp.com",
  databaseURL: "https://ailogo-76470-default-rtdb.firebaseio.com",
  projectId: "ailogo-76470",
  storageBucket: "ailogo-76470.firebasestorage.app",
  messagingSenderId: "678763426635",
  appId: "1:678763426635:web:edb2e9bab530738287eece",
  measurementId: "G-2QCQB9S8ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)