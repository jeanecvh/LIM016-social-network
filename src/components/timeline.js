
import { insertData, dataDocument,onDataDocument,deletePost, getDocument } from "../firebase/feed.js";
import { userDataLocally } from "./sessionStorage.js"

const user = userDataLocally();
export const timeline = (sectionMenuBar, sectionUtils) => {
    const wallTemplate = `
    <div id="menu" class="menu">
        ${sectionMenuBar}
    </div>
    <div id="publication-area" class="publication-area">
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
    <div id="utils" class="utils">
        ${sectionUtils}
    </div>
    `

    const sectionWall = document.createElement("section");
    sectionWall.setAttribute("id", "wall");
    sectionWall.classList.add("wall");
    sectionWall.innerHTML = wallTemplate;
    return sectionWall;
}

/*
const functionBtnLike = () => {
    let btnLike = document.getElementById("like");
    btnLike.addEventListener("click", async (e) => {
        e.preventDefault();


    })
}

const functionBtnEdit = () => {
    let btnEdit = document.getElementById("post-edit");
    btnEdit.addEventListener("click", async (e) => {
        e.preventDefault();
    })
}*/

export const btnPostShare = () => {
    const post = document.getElementById("text-area-publication");
    const btnPost = document.getElementById("btn-share-publication");
    const wallArea = document.getElementById("wall-area");
    btnPost.addEventListener("click", async (e) => {
        e.preventDefault();
        await insertData(post),
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
                html += `<div id="instant-post" class="instant-post" >
                    <div class="contact-data"">
                        <div id = "user-photo-wall" class = "user-photo-wall">
                            <img class= "user-photo" id="user-photo" src="${dataPost.photo}"></img>
                        </div>
                        <p class="data-name">${dataPost.name}</p>
                    </div>
                        <p class="data-post">${dataPost.newPost}</p>
                        <div id = "btns-posts" class = "btns-posts">
                            <p class="like" ><i class="fa-solid fa-thumbs-up" id="like"></i></p>
                            <span class="cta""><i class="fa-solid fa-trash-can"></i></span>
                            <button class="edit" id="post-edit" data-id="${doc.id}">EDITAR</button>
                        </div>
                        <div class = "modal-container">
                            <div class ="modal moda-close">
                                <p class ="close">X</p>
                                <p class="text-confirmation">¿Estás seguro o segura que quieres eliminar el comentario?</p>
                                <img src="../images/ramdom_pictures/img-modal.png" alt="">
                                <button class="delete" id="delete" data-id="${doc.id}">Eliminar</button>
                            </div>
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
            
            let btnEdit = document.querySelectorAll(".edit");
            btnEdit.forEach( btn => {
                btn.addEventListener('click', async (e) =>{
                    e.preventDefault();
                    console.log('works')
                    const doc = await getDocument(e.target.dataset.id)
                    const dataPost = doc.data()
                })
                
            })

            let closeModal = document.querySelectorAll(".close")[0]
            let openModal = document.querySelectorAll(".cta")[0]
            let modal = document.querySelectorAll(".modal")[0]
            let modalConteiner = document.querySelectorAll(".modal-container")[0]

            openModal.addEventListener("click", (e) => {
                e.preventDefault();
                modalConteiner.style.opacity = "1";
                modalConteiner.style.visibility = "visible";
                modal.classList.toggle("modal-close")

            })

            closeModal.addEventListener("click", () => {
                modal.classList.toggle("modal-close");
                modalConteiner.style.opacity = "0";
                modalConteiner.style.visibility = "hidden";
            
            })

            window.addEventListener("click", (e) => {
                console.log(e.target)
                if(e.target == modalConteiner){
                    modal.classList.toggle("modal-close");
                    modalConteiner.style.opacity = "0";
                    modalConteiner.style.visibility = "hidden";
                }
            })
                    
        
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



//<i class="fa-solid fa-pen-to-square"></i>
