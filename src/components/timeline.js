
import { insertData, onDataDocument, deletePost, orderByPost } from "../firebase/feed.js";
import { userDataLocally } from "./sessionStorage.js"
import { findingUser, collectionPost, updatePost } from "../firebase/firestore.js"

let user = userDataLocally();
export const timeline = (sectionMenuBar, sectionUtils) => {
    user = userDataLocally();
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
/*
const functionBtnEdit = () => {
    let btnEdit = document.getElementById("post-edit");
    btnEdit.addEventListener("click", async (e) => {
        e.preventDefault();
    })
}*/
const likeThePost = async (idPost) => {

    const docPost = await findingUser(idPost, collectionPost);
    const dataPost = docPost.data();
    console.log('dataPost: {}', dataPost);
    if (dataPost.like?.includes(user.id)) {
        updatePost(idPost, collectionPost, {
            like: dataPost.like.filter(userLike => userLike !== user.id)
        });
    } else {
        updatePost(idPost, collectionPost, {
            like: [...dataPost.like, user.id]
        });
    };


};

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
                html += `<div>
                    <div id = "user-photo-wall" class = "user-photo-wall">
                    <img class= "user-photo" id="user-photo" src="${dataPost.photo}"></img>
                    </div>
                        <p>${dataPost.name}</p>
                        <p>${dataPost.newPost}</p>
                        <div id = "btns-posts" class = "btns-posts">
                            <i class="like-post fa-solid fa-thumbs-up" data-id=${doc.id} id="like"></i>
                            <p class="like" >${dataPost.like?.length}</p>
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
                    });
                });

                const btnLike = document.querySelectorAll(".like-post");
                btnLike.forEach(btnL => {
                    btnL.addEventListener('click', (event) => {

                        likeThePost(event.target.dataset.id)



                    });
                });

            });


        });
    };
};

