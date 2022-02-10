import { app } from "./config.js";
import{getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js"

const db= getDatabase(app)
//--------------ref------------//
const post = document.getElementById("text-area-publication");

const btnPost = document.getElementById("btn-share-publication");


//***********  function ************/

function insertData(){
    set(ref(db, "postUser/"+ post.value),{
        newPost: post.value,
    })
  
    .then((res) =>
    console.log("funciona", res)
    )
    .catch((err)=>
    console.log(err, "no funciona"))
}

btnPost.addEventListener("click", (e) => {
    e.preventDefault();
    insertData()
    document.getElementById("publicar").value = post.value
  });
