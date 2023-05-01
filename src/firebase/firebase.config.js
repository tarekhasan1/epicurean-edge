// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeRakTRRjRe_OfTzwWxOiDOvYPBE8SMlE",
  authDomain: "epicurean-edge.firebaseapp.com",
  projectId: "epicurean-edge",
  storageBucket: "epicurean-edge.appspot.com",
  messagingSenderId: "770315768652",
  appId: "1:770315768652:web:2a2dcf15a5a0df5c8735e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;