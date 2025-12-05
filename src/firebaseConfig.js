import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdZKfSbLG-GAUsLSk--Y3BOhZTyN2qAhQ",
  authDomain: "tonotosprintecomerce.firebaseapp.com",
  projectId: "tonotosprintecomerce",
  storageBucket: "tonotosprintecomerce.firebasestorage.app",
  messagingSenderId: "61357597538",
  appId: "1:61357597538:web:2f5cee3f682ed025c7823b"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);