// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDqNsRPEhRkaP0ZyXm0Y6eyj5LQVbUTdY",
  authDomain: "recape-auth-integration.firebaseapp.com",
  projectId: "recape-auth-integration",
  storageBucket: "recape-auth-integration.firebasestorage.app",
  messagingSenderId: "137389615044",
  appId: "1:137389615044:web:2bab2dbefd9a34889d6691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
