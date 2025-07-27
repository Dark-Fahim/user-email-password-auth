// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbSKtQGH9iJb40lD0XR0hlhhTYRl0LbBc",
  authDomain: "user-email-password-auth-657a0.firebaseapp.com",
  projectId: "user-email-password-auth-657a0",
  storageBucket: "user-email-password-auth-657a0.firebasestorage.app",
  messagingSenderId: "471955440092",
  appId: "1:471955440092:web:fdcb11d07404bb0acb8f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
