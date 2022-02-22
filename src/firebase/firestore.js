import { db } from "./config.js";
import { collection, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";//SDK base de datos


export const collectionUser = collection(db, 'usuario');
export const collectionPost = collection(db, 'post_user');

// Obtén un documento:se muestra cómo recuperar el contenido de un solo documento  preguntando a firebase si el usuario existe-
export const findingUser = async (userId, colllection) => {
    console.log("buscando al usuario: ", userId);
    try {
        const documentUserRef = await doc(colllection, userId);
        const userDocument = await getDoc(documentUserRef);
        console.log("documento obtenido: ", userDocument);
        return userDocument;
    } catch (error) {
        console.log('error buscado al user id:' , userId, error);
        throw new Error(error);
    }
};

export const updatePost = async (idPost, collection, data) => {
    try {
        const docId = await doc(collection, idPost);
        const updatingDocument = await updateDoc(docId, data);
        return updatingDocument;
    } catch (error) {
        throw new Error(error);
    }

};

export const userDataBase = async (user, collection) => {
    try {
        const userDocument = await findingUser(user.id, collection);

        console.log(' que esta devolviendo: ', userDocument);
        if (userDocument.exists()) {
            console.log(`Usuario con Id: ${user.id} ya se encuentra registrado`);
            return;
        }
        console.log('usuario no existe, vamos a guardarlo : ', user);

        const documentToSave = doc(collection, user.id);//documento para guardar

        await setDoc(documentToSave, user);
        console.log('usuario guardado: exitosamente');
        return user;
    } catch (error) {

        throw new Error(error);

    }
};//esta tambien ls puedo refactorizar para poder guardar al click de usuario dentro de la coleccion desada CREO

//export const  getUserForTimeLine = (user ) => collection(db, 'usuario').get();


