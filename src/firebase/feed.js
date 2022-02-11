import { app } from "./config.js";
import{db} from "./config.js";
import {collection, doc, getDoc, setDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"
//inserto un new post en firestorage
//quiero hacer una funcion para acceder al id de los usuarios creados y jalar nombre y foto y agregarlo al post
export const insertData = async (post) => {
    let ref = collection (db,"usuario");
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
export const dataDocument = async () => {
    let ref = collection (db,"usuario");
    const  docSnap = await getDoc(ref);
    if(docSnap.exists()){
        console.log(docSnap)
    }
    else{
        console.log("no funciono")
    }
}