
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyD5dzQxHnJwCjsVL4eXoZyk7zPwKJhrccQ",
  authDomain: "ganduglia-entregafinal.firebaseapp.com",
  projectId: "ganduglia-entregafinal",
  storageBucket: "ganduglia-entregafinal.appspot.com",
  messagingSenderId: "1020832203723",
  appId: "1:1020832203723:web:78c3b9b6d075771c04ec4e",
  measurementId: "G-6VB474PR5T"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
