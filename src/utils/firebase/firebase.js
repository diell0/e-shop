import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAikL-_oiSeZTVE_N0Ro4EEV8L7wY1k_ZM",
  authDomain: "e-shop-9df63.firebaseapp.com",
  projectId: "e-shop-9df63",
  storageBucket: "e-shop-9df63.appspot.com",
  messagingSenderId: "18587348996",
  appId: "1:18587348996:web:9e8f239bd3d8a9e9bdc551",
  measurementId: "G-BENFCWBVSW",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
