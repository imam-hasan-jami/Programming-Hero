// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd_-7ClA1GTbySRXjZ_Mx2PkwaugCgdPk",
  authDomain: "auth-integration-981a2.firebaseapp.com",
  projectId: "auth-integration-981a2",
  storageBucket: "auth-integration-981a2.firebasestorage.app",
  messagingSenderId: "865702508902",
  appId: "1:865702508902:web:79f2e06365ff1b888830a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);