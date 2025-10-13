// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOmrHwEj4LZrQ3mE8jLXVDOfbnAK3DpSM",
  authDomain: "coder-react-lore.firebaseapp.com",
  projectId: "coder-react-lore",
  storageBucket: "coder-react-lore.firebasestorage.app",
  messagingSenderId: "113524161887",
  appId: "1:113524161887:web:fa4ecfb80ef64f90a1caea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar la instancia de Firestore
export const db = getFirestore(app);