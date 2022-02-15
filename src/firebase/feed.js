
import { app } from "./config.js";
import{db} from "./config.js";
import {collection, doc, getDoc, setDoc, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"
//inserto un new post en firestorage
//quiero hacer una funcion para acceder al id de los usuarios creados y jalar nombre y foto y agregarlo al post
export const insertData = async (post) => {
    let ref = collection (db,"post_user");
     try {
         const docRef = await addDoc(
             ref, {
                 newPost: post.value
             })
             console.log('Funciona');
             return docRef
            } catch (error) {
                throw new Error(error);
            }
};
// queria jalar los datos del usuario en firestorage no me funciono

// queria jalar los datos del usuario en firestorage no me funciono
/*export const dataDocument = async () => {
    let ref = collection(db, "usuario");
    const docSnap = await getDocs(ref);
    if (docSnap.exists()) {
        console.log(docSnap)
    }
    else {
        console.log("no funciono")
    }
}*/

export const dataDocument = () => getDocs(collection(db, "post_user"))
export const itemsProfie = () => getDocs(collection(db, "usuario"))