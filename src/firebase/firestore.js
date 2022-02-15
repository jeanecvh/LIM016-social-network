import { db } from "./config.js";
import { collection, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";//SDK base de datos


export const collectionUser = collection(db, 'usuario');

// Obtén un documento:se muestra cómo recuperar el contenido de un solo documento  preguntando a firebase si el usuario existe-
export const findingUser = async (userId) => {
    try {
        const documentUserRef = await doc(collectionUser, userId);
        const userDocument = await getDoc(documentUserRef);
        return userDocument;
    } catch (error) {
        throw new Error(error);
    }
};

export const userDataBase = async (user) => {
    try {

        const userDocument = await findingUser(user.id);
        if (userDocument.exists()) {
            console.log(`Usuario con Id: ${user.id} ya se encuentra registrado`);
            return;
        }
        console.log('usuario no existe, vamos a guardarlo : ', user);

        const documentToSave = doc(collectionUser, user.id);//documento para guardar

         await setDoc(documentToSave, user);
        console.log('usuario guardado: exitosamente');
        return user;
    } catch (error) {
        throw new Error(error);

    }
};

//export const  getUserForTimeLine = (user ) => collection(db, 'usuario').get();




