// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnG1-MzFzCPo_gHiWIF1Cd9bW1hNvobgI",
  authDomain: "portfolio-abf77.firebaseapp.com",
  projectId: "portfolio-abf77",
  storageBucket: "portfolio-abf77.appspot.com",
  messagingSenderId: "81965112097",
  appId: "1:81965112097:web:6ce88e8ca6642000fb7c60",
  measurementId: "G-57V1N4QYYE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
