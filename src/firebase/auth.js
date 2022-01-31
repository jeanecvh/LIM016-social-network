import { app } from "./config.js";

import {
    signInWithPopup,
    getAuth,
    GoogleAuthProvider
  } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';


  // Inicializar authentication
export const auth = getAuth(app);

//inicializamos el proveedor de auth de Google
const provider = new GoogleAuthProvider();

auth.languageCode = 'es';// configuramos el lenguaje de nestro proveedor a español

export const loginWithGoogle = async () => {

    try {
        
        const response = await signInWithPopup(auth, provider);/*incia una ventana emergente  y en la funcion
         mostramos en proveedor con el que vamos a iniciar sesion*/
        //console.log(response);
        return response.user;
    } catch (error) {
        throw new Error(error);
    }
}
// cierre de sesion
/*
export const logut = () => {
    signOut(auth);
}*/