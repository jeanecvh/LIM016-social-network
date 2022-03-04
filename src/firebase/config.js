
import { 
  initializeApp

 } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import {  
  getFirestore 

} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";//SDK base de datos



const firebaseConfig = {
  apiKey: "AIzaSyBEajTYXfRgqkLT_p34wSXFpBSf9o9lnSQ",
  authDomain: "scoobygram-1b462.firebaseapp.com",
  projectId: "scoobygram-1b462",
  storageBucket: "scoobygram-1b462.appspot.com",
  messagingSenderId: "404715742099",
  appId: "1:404715742099:web:8bf48dc1a6dbb76c7ffe66",
  measurementId: "G-09VF7PKESR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//inicializamos firestore
export const db = getFirestore(app);
  // iniciamos data base