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
  authDomain: "logoai-5a578.firebaseapp.com",
  projectId: "logoai-5a578",
  storageBucket: "logoai-5a578.firebasestorage.app",
  messagingSenderId: "252517866346",
  appId: "1:252517866346:web:b53d651e91781f0f48a313",
  measurementId: "G-0KSED78R14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)