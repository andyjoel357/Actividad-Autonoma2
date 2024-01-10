import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAqsylFzKKWiiG8zuLkB5GP87cNKhPX65U",
  authDomain: "ejercicio-de-practica-c2a5b.firebaseapp.com",
  databaseURL: "https://ejercicio-de-practica-c2a5b-default-rtdb.firebaseio.com",
  projectId: "ejercicio-de-practica-c2a5b",
  storageBucket: "ejercicio-de-practica-c2a5b.appspot.com",
  messagingSenderId: "858080245129",
  appId: "1:858080245129:web:3c05c1ebd7fd01e2631d58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db= getDatabase(app)
export const storage = getStorage(app)
