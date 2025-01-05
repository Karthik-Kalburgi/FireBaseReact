

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgxNHkWsT2RD--TrlnjLK1P8aGX8pWStY",
  authDomain: "vite-contact-c1ffe.firebaseapp.com",
  projectId: "vite-contact-c1ffe",
  storageBucket: "vite-contact-c1ffe.firebasestorage.app",
  messagingSenderId: "1062455409344",
  appId: "1:1062455409344:web:b2e5a3a66e32e009b30b25"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);