import { db } from "./config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";//SDK base de datos


const collectionUser = collection(db, 'Usuarios');

export const userDataBase = async (user) => {
    try {
        console.log('que tego aqui : ', user);
        const userData = await addDoc(collectionUser, user);
        console.log('creando coleccion: ', userData);
        return userData;
    } catch (error) {
        throw new Error(error);

    }
};









/*
      
*/
/*
try {

    const response = await signInWithPopup(auth, providerGoogle);
    console.log(response);
    return response.user;
} catch (error) {
    console.log('prueba : ', error );
    throw new Error(error);
}*/