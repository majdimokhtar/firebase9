import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC-y2YbAS-Bk7Yr9ganTKeJwEfJt8SUVQY",
    authDomain: "reading-list-13f86.firebaseapp.com",
    projectId: "reading-list-13f86",
    storageBucket: "reading-list-13f86.appspot.com",
    messagingSenderId: "982622198492",
    appId: "1:982622198492:web:8b37d1b2a7bba244d7f219"
  };

  // Initialize Firebase
initializeApp(firebaseConfig);
// init firestore
const db = getFirestore()
// init firebase auth
const auth = getAuth()
export {db,auth}