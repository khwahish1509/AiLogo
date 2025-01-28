// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHfUqwvUlB6OGK9Pv1Ll7blu7RJdnpcqw",
  authDomain: "ailogo-76470.firebaseapp.com",
  projectId: "ailogo-76470",
  storageBucket: "ailogo-76470.firebasestorage.app",
  messagingSenderId: "678763426635",
  appId: "1:678763426635:web:edb2e9bab530738287eece",
  measurementId: "G-2QCQB9S8ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)