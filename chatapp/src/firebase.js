import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2cg5rsKCXQ57eqjip8yey-LwS7yn4BTo",
  authDomain: "simple-chat-app-b4f12.firebaseapp.com",
  projectId: "simple-chat-app-b4f12",
  storageBucket: "simple-chat-app-b4f12.appspot.com",
  messagingSenderId: "1010620579524",
  appId: "1:1010620579524:web:68c3b51f530a51f0e5d391",
  measurementId: "G-9QSXFVZC5V"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
