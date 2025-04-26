// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApuJR1G9-3Ql-CxYSZPUUDu5XMiz4WOSU",
  authDomain: "simple-firebase-auth-b7736.firebaseapp.com",
  projectId: "simple-firebase-auth-b7736",
  storageBucket: "simple-firebase-auth-b7736.firebasestorage.app",
  messagingSenderId: "339092140761",
  appId: "1:339092140761:web:c52242587c97f8d22404c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);