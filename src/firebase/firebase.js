// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMAFFmVyVy9lECWghI26ovphNd6rt2rLk",
  authDomain: "fir-d3f6a.firebaseapp.com",
  projectId: "fir-d3f6a",
  storageBucket: "fir-d3f6a.firebasestorage.app",
  messagingSenderId: "596881169357",
  appId: "1:596881169357:web:eff771d794f6e2823a4284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
