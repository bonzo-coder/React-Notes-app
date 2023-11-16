// import { initializeApp } from "firebase/app";
// import { getFirestore, collection } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyAETKGobg_EZO5IbA1x5y1CC-BEJfEEIBo",
//   authDomain: "react-notes-d45ca.firebaseapp.com",
//   projectId: "react-notes-d45ca",
//   storageBucket: "react-notes-d45ca.appspot.com",
//   messagingSenderId: "39778214829",
//   appId: "1:39778214829:web:e25b8a7b860a14a96cb724"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// export const notesCollection = collection(db, "notes")


import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAETKGobg_EZO5IbA1x5y1CC-BEJfEEIBo",
  authDomain: "react-notes-d45ca.firebaseapp.com",
  projectId: "react-notes-d45ca",
  storageBucket: "react-notes-d45ca.appspot.com",
  messagingSenderId: "39778214829",
  appId: "1:39778214829:web:e25b8a7b860a14a96cb724"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
