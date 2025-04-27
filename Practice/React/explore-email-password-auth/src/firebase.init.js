// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcKgS92rtzW70FlxKV1L0hNOkNNtdgTJw",
  authDomain: "explore-email-password-a-44ea0.firebaseapp.com",
  projectId: "explore-email-password-a-44ea0",
  storageBucket: "explore-email-password-a-44ea0.firebasestorage.app",
  messagingSenderId: "793898715856",
  appId: "1:793898715856:web:4b19b11739e49f61d12cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);