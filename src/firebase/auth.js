import { app } from "./config.js";

import {
    signOut,
    signInWithPopup,
    getAuth,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    sendEmailVerification,
  } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';


  // Inicializar authentication
export const auth = getAuth(app);
export const lala = () => sendEmailVerification(auth.currentUser)
//correo de verificacion


// crear usuario con correo y contraseña
export const userCreate = (email, password) =>createUserWithEmailAndPassword(auth, email, password)

//inicializamos el proveedor de auth de Google
const provider = new GoogleAuthProvider();

auth.languageCode = 'es';// configuramos el lenguaje de nestro proveedor a español

export const loginWithGoogle = async () => {

    try {
        
        const response = await signInWithPopup(auth, provider);
        console.log(response);
        return response.user;
    } catch (error) {
        throw new Error(error);
    }
}
// cierre de sesion
export const logut = () => {
    signOut(auth);
}