// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByJsmVfiZQenziehMI1i9eIG0eY1UoJvc",
  authDomain: "fir-practice-d90a2.firebaseapp.com",
  projectId: "fir-practice-d90a2",
  storageBucket: "fir-practice-d90a2.firebasestorage.app",
  messagingSenderId: "1081393966936",
  appId: "1:1081393966936:web:b81652095aed65b0af7f2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();