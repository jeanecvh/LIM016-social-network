import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
 https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEajTYXfRgqkLT_p34wSXFpBSf9o9lnSQ",
  authDomain: "scoobygram-1b462.firebaseapp.com",
  projectId: "scoobygram-1b462",
  storageBucket: "scoobygram-1b462.appspot.com",
  messagingSenderId: "404715742099",
  appId: "1:404715742099:web:ffdf3f9455717bb37ffe66",
  measurementId: "G-WZ97F5BQRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
  });
  
  const db = getFirestore(app);
  export default db