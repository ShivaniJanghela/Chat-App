import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKqFbwqvkpUd0NB0CVre38XVFNoc_ztqs",
  authDomain: "chitchat-5b1df.firebaseapp.com",
  projectId: "chitchat-5b1df",
  storageBucket: "chitchat-5b1df.appspot.com",
  messagingSenderId: "327306262189",
  appId: "1:327306262189:web:054d1cd7067fecf142f824"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
// Create a root reference
export const storage = getStorage();
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();
