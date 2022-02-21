// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6dKA1FpguXoGysYqRbnJHUKOwrDIf32M",
  authDomain: "instagram-clone-ef2d4.firebaseapp.com",
  projectId: "instagram-clone-ef2d4",
  storageBucket: "instagram-clone-ef2d4.appspot.com",
  messagingSenderId: "584439036736",
  appId: "1:584439036736:web:438377a21b9565bc2198a5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
