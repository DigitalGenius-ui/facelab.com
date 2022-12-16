// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEttHGTp65DohQp5g0Q9CvYSs411I4Piw",
  authDomain: "facelab-3c3dc.firebaseapp.com",
  projectId: "facelab-3c3dc",
  storageBucket: "facelab-3c3dc.appspot.com",
  messagingSenderId: "648723186220",
  appId: "1:648723186220:web:8d7d9640910a4661d30789",
  measurementId: "G-D53KDKZT5N"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);


export default auth