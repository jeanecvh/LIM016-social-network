import { app } from "./config.js";

import {
    signInWithPopup,
    getAuth,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    sendEmailVerification,
  } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';


  // Inicializar authentication
export const auth = getAuth(app);

//correo de verificacion
export const emailVerificate = () => sendEmailVerification(auth.currentUser)
// crear usuario con correo y contraseña
export const userCreate = (email, password) =>createUserWithEmailAndPassword(auth, email, password)
//inicializamos el proveedor de auth de Google 
const providerGoogle = new GoogleAuthProvider();

auth.languageCode = 'es';// configuramos el lenguaje de nestro proveedor a español

export const loginWithGoogle = async () => {

    try {

        const response = await signInWithPopup(auth, providerGoogle);/*incia una ventana emergente  y en la funcion
         mostramos en proveedor con el que vamos a iniciar sesion*/
        console.log(response);
        return response.user;
    } catch (error) {
        console.log('prueba : ', error );
        throw new Error(error);
    }
};

// cierre de sesion
/*
export const logut = () => {
    signOut(auth);
}*/

