import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6SsUexHv3CsfA-xI_3e4sQiHtVDbTtDc",
  authDomain: "anto-shop.firebaseapp.com",
  projectId: "anto-shop",
  storageBucket: "anto-shop.appspot.com",
  messagingSenderId: "699570393232",
  appId: "1:699570393232:web:b60cbbdc18fe559d1a0815"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

