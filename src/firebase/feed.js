import { db } from "./config.js";
import { collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"
import { userDataLocally } from "../components/sessionStorage.js";
//inserto un new post en firestorage
export const insertData = async (post) => {
    let ref = collection(db, "post_user");
    let user = userDataLocally()
    try {
        const docRef = await addDoc(
            ref, {
            newPost: post.value,
            id: user.id,
            photo: user.foto,
            name: user.nombre,
            like: [],
            //timestamp: serverTimestamp() no borrar!
        })
        console.log('Funciona');
        return docRef
    } catch (error) {
        throw new Error(error);
    }
};


export const dataDocument = () => getDocs(collection(db, "post_user"))
export const itemsProfie = (callback) => onSnapshot(collection(db, "usuario"), callback)
//export const orderByPost = () => query(collection(db, "post_user"), orderBy('timestamp')); necesito saber donde insertarlo (recuerda que lo dejaste de importar)
export const onDataDocument = (callback) => onSnapshot(collection(db, "post_user"), callback)
export const deletePost = (id) => deleteDoc(doc(db, "post_user", id))
