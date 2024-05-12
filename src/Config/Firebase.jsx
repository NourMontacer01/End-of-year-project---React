// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnoV_8kboZIIS9eZqFaJNm13MPNPAKuvo",
  authDomain: "retailpro-96b3a.firebaseapp.com",
  projectId: "retailpro-96b3a",
  storageBucket: "retailpro-96b3a.appspot.com",
  messagingSenderId: "821677846951",
  appId: "1:821677846951:web:4c72716c4a2151c5d4c682",
  measurementId: "G-685QGVZHL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};