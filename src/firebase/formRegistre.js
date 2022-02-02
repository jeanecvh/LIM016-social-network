import {createUserWithEmailAndPassword } from "firebase/auth.js";


const auth = getAuth();
/*
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  */

const userCreate = (email, password) =>{
   const userCreate = createUserWithEmailAndPassword(auth, email, password);
    const user = {
      Email : email,
      password : password,
    }
    
  }
  export default userCreate