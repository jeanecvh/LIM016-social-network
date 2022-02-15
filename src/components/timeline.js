//import { userDataBase} from "../firebase/firestore.js"
import { insertData, dataDocument, itemsProfie } from "../firebase/feed.js"
export const timeline = (sectionMenuBar,sectionUtils) => {
    const wallTemplate = `<div id="menu" class="menu">
        ${sectionMenuBar}
    </div>
    <div>
        <form id = "wall-area" class = "wall-area" >
            <div id = "user-descript" class = "user-descript">
                <div id = "user-photo-wall" class = "user-photo-wall">
                    <img id= "user-photo"src="../images/background/bola.jpg" alt="">
                </div>
                <div id = "div-user-name-wall" class= "div-user-name-wall">
                    <p>Nombre de usuario</p>
                </div>
            </div>

            <div>
                <textarea id="text-area-publication" class="text-area-publication" name="comentarios" rows="10" cols="45" placeholder="¿Qué estás pensando?"></textarea>
            </div>
            <div id="btns-share" class="btns-share">
                <i class="fa-solid fa-image"></i>
                <button id ="btn-share-publication" class ="btn-share-publication">Compartir</button>
            </div>
        </form> 
        <div id="posts-container" class = "posts-container">
        <p>Aquí van los post</p>
        </div>
    </div> 
    ${sectionUtils}
    `
    
    const sectionWall = document.createElement("section");
    sectionWall.setAttribute("id", "wall");
    sectionWall.classList.add("wall");
    sectionWall.innerHTML = wallTemplate;
    return sectionWall;
}


/*
export const printUserinTimeLine = (user) => {
    const userToCreate = {
        nombre: user.displayName,
        correo: user.email,
        foto: user.photoURL,
        id: user.uid
      };
    const querySnapshot = await userDataBase(userToCreate);
    querySnapshot.forEach(doc => {
        console.log(querySnapshot)
    });
}*/


/*document.getElementById("btn-up").addEventListener("click", scrollUp);
function scrollUp(){
    let scroll = document.documentElement.scrollTop
    if( scroll >0 ){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, scroll -(scroll / 5)); //hasta donde sube, a que velocidad sube
    }
}*/
const feed = (post) => {
    const containPost= {
   userPost: "nombre de usuario",
   newPost: post,
   btnLike:` <p class="like" id="like"><i class="fa-solid fa-thumbs-up"></i></p> `,
   btnDelete: ` <p class="delete" id="delete"><i class="fa-solid fa-trash-can"></i></p> `,
   btnEdit: ` <p class="edit" id="post-edit"><i class="fa-solid fa-pen-to-square"></i></p> `,
    }    
    Object.values(containPost).forEach( val => {
    let div = document.createElement("div");
    div.setAttribute("id", "newPost");
    div.classList.add("post");
    div.innerHTML = val;
    console.log(val)
    const app = document.getElementById("posts-container")
   app.appendChild(div);
    })
};

const functionBtnDetele = ()  =>{
    btnDetele = document.getElementById("delete");
    btnDetele.addEventListener("click", async (e)=> {
        e.preventDefault();

    })
}
const functionBtnLike = ()  =>{
    let btnLike = document.getElementById("like");
    btnLike.addEventListener("click", async (e)=> {
        e.preventDefault();
        
    })
}
const functionBtnEdit = ()  =>{
    let btnEdit = document.getElementById("post-edit");
    btnEdit .addEventListener("click", async (e)=> {
        e.preventDefault();
        
    })
}

export const btnPostShare = () =>{ 
    const post = document.getElementById("text-area-publication");
    const btnPost = document.getElementById("btn-share-publication");
    const wallArea = document.getElementById("wall-area");
    btnPost.addEventListener("click", async (e)=> {
    e.preventDefault();
    await insertData(post),
    feed(post.value)
    wallArea.reset()    
  });
}

export const windowsTimeline = async () => {
    const postsContainer = document.getElementById("posts-container")
        if (window.location.hash = '#/timeline'){
            const querySnapshot = await dataDocument()
            let html = ""
            console.log('Tiene que cargar la publicación aquí', querySnapshot)
            querySnapshot.forEach(doc => {
                const dataPost = doc.data()
                html += `<div>
                    <h3>NombreDelUsuario</h3>
                    <h4>${dataPost.newPost}</h4>
                </div>`
                console.log('docs',doc.data())
                postsContainer.innerHTML = html
            })

        } 
}





