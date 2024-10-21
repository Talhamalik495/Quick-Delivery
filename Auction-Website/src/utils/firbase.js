import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeK0I8UZsljXgS-d9h-MWJqH-wUEN7AfU",
  authDomain: "react-project-ecc52.firebaseapp.com",
  projectId: "react-project-ecc52",
  storageBucket: "react-project-ecc52.appspot.com",
  messagingSenderId: "81254565438",
  appId: "1:81254565438:web:6298c8c73c0c5a59c7336f",
};
let app = initializeApp(firebaseConfig);
let auth = getAuth(app);
let db = getFirestore(app);
let storage = getStorage(app);
export { auth, db, storage };
