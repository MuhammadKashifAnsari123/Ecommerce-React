import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPbUx11ajbFPTSXeI7Oc4R-wXql5m-UWc",
  authDomain: "loginandsignup-52596.firebaseapp.com",
  databaseURL: "https://loginandsignup-52596-default-rtdb.firebaseio.com",
  projectId: "loginandsignup-52596",
  storageBucket: "loginandsignup-52596.appspot.com",
  messagingSenderId: "700044202976",
  appId: "1:700044202976:web:a8783b4977ceca0bc6d185",
  measurementId: "G-J2D52CDJZQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
export{db, auth};