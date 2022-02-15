import { db } from "./config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"
//inserto un new post en firestorage
//quiero hacer una funcion para acceder al id de los usuarios creados y jalar nombre y foto y agregarlo al post
export const insertData = async (post) => {
    let ref = collection(db, "post_user");
    try {
        const docRef = await addDoc(
            ref, {
            newPost: post.value,


        })
        console.log('Funciona');
        return docRef
    } catch (error) {
        throw new Error(error);
    }
};

export const dataDocument = () => getDocs(collection(db, "post_user"))
export const itemsProfie = () => getDocs(collection(db, "usuario"))