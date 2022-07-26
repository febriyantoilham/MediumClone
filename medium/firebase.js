// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzzT0MMTYIjLcsMPA4-PvXKafNFaU1kIY",
  authDomain: "meidum-clone.firebaseapp.com",
  projectId: "meidum-clone",
  storageBucket: "meidum-clone.appspot.com",
  messagingSenderId: "868380038019",
  appId: "1:868380038019:web:49682a015960dc1ac11cb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};