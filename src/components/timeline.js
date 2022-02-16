import { insertData, onDataDocument, deletePost } from "../firebase/feed.js";
import { userDataLocally } from "./sessionStorage.js"
  const user = userDataLocally();
export const timeline = (sectionMenuBar, sectionUtils) => {
  
    const wallTemplate = `
    
    <div id="menu" class="menu">
        ${sectionMenuBar}
    </div>
    <div>
        <form id = "wall-area" class = "wall-area" >
            <div id = "user-descript" class = "user-descript">
                <div id = "user-photo-wall" class = "user-photo-wall">
                <img class= "user-photo" id="user-photo" src=" ${user.foto}"></img>
                </div> 
                <div id = "div-user-name-wall" class= "div-user-name-wall">
                    <p>${user.nombre}</p>
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

/*document.getElementById("btn-up").addEventListener("click", scrollUp);
function scrollUp(){
    let scroll = document.documentElement.scrollTop
    if( scroll >0 ){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, scroll -(scroll / 5)); //hasta donde sube, a que velocidad sube
    }
}*/


const functionBtnLike = () => {
    let btnLike = document.getElementById("like");
    btnLike.addEventListener("click", async (e) => {
        e.preventDefault();


    })
}



/*
const feed = (post) => {
    const containPost = {
        foto: `<div id = "user-photo-wall" class = "user-photo-wall">
        <img class= "user-photo" id="user-photo" src="${user.foto}"></img>
        </div>`,
        userPost: user.nombre,
        newPost: post,
        btn: `<div id = "btns-posts" class = "btns-posts">
        <p class="like" id="like"><i class="fa-solid fa-thumbs-up"></i></p>
        <p class="delete" id="delete"><i class="fa-solid fa-trash-can"></i></p>
        <p class="edit" id="post-edit"><i class="fa-solid fa-pen-to-square"></i></p>
        </div>  `

    }
    Object.values(containPost).forEach(val => {
        let div = document.createElement("div");
        div.setAttribute("id", "newPost");
        div.innerHTML = val;
        console.log(val)
        const app = document.getElementById("posts-container")
        app.appendChild(div);
    })
};
*/

export const btnPostShare = () => {
    const post = document.getElementById("text-area-publication");
    const btnPost = document.getElementById("btn-share-publication");
    const wallArea = document.getElementById("wall-area");
    btnPost.addEventListener("click", async (e) => {
        e.preventDefault();
        await insertData(post),
        //feed(post.value)
        wallArea.reset()
    });
}


export const windowsTimeline = async () => {
    const postsContainer = document.getElementById("posts-container")
    if (window.location.hash = '#/timeline') {
        onDataDocument((querySnapshot) => {
        let html = ""
        console.log('Tiene que cargar la publicación aquí')
        querySnapshot.forEach(doc => { // meter la informacion de la coleccion pos_user
            const dataPost = doc.data()
                html += `<div>
                    <div id = "user-photo-wall" class = "user-photo-wall">
                    <img class= "user-photo" id="user-photo" src="${dataPost.photo}"></img>
                    </div>
                        <p>${dataPost.name}</p>
                        <p>${dataPost.newPost}</p>
                        <div id = "btns-posts" class = "btns-posts">
                            <p class="like" ><i class="fa-solid fa-thumbs-up" id="like"></i></p>
                            <button class="delete" id="delete" data-id="${doc.id}"><i class="fa-solid fa-trash-can"></i></button>
                            <p class="edit" id="post-edit"><i class="fa-solid fa-pen-to-square"></i></p>
                        </div>   
                    </div>`
  
                postsContainer.innerHTML = html

            const btnDelete = document.querySelectorAll(".delete");
            btnDelete.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    deletePost(e.target.dataset.id)
                    console.log(e.target.dataset.id)
                })
            })
            /*
            let btnEdit = document.getElementById("post-edit");
            console.log('boton', btnEdit)
            btnEdit.forEach(btn => {
                console.log(btn)
            })*/
                
        
        })
        })
        

    }
}

/*
export const functionbtnDelete = () => {
    
    btnDelete.addEventListener("click", async (e) => {
        e.preventDefault();
        console.log('BOTON BORRAR',viewTimelineHtml)
    })
}*/



//<i class="fa-solid fa-trash-can">
