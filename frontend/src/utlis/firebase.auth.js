import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "notes-app-7eb0c.firebaseapp.com",
  projectId: "notes-app-7eb0c",
  storageBucket: "notes-app-7eb0c.firebasestorage.app",
  messagingSenderId: "513576035070",
  appId: "1:513576035070:web:56ab22213ecb83d6f57baf",
  measurementId: "G-R9MRDXTV8T"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();