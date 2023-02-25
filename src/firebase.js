// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDORFPnqwLaAUkKYbjWiBioc0pWdeTV_0",
  authDomain: "react-blogs-app-ec95f.firebaseapp.com",
  projectId: "react-blogs-app-ec95f",
  storageBucket: "react-blogs-app-ec95f.appspot.com",
  messagingSenderId: "524885802935",
  appId: "1:524885802935:web:df995babb0f0c0b106f232",
  measurementId: "G-QQFE9VXW3Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
