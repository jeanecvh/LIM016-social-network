import { insertData,onDataDocument,deletePost,} from "../firebase/feed.js";
import { userDataLocally } from "./sessionStorage.js"
import { findingUser, collectionPost, updatePost } from "../firebase/firestore.js"

let user = userDataLocally();

export const timeline = (sectionMenuBar, sectionUtils) => {
    user = userDataLocally();
    const wallTemplate = `
    <div id="menu" class="menu">
        ${sectionMenuBar}
    </div>
    <div id="publication-area" class ="publication-area">
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
const functionBtnEdit = () => {
    let btnEdit = document.getElementById("post-edit");
    btnEdit.addEventListener("click", async (e) => {
        e.preventDefault();
    })
}*/
const obj = {
    a: "b",
    c: "b"
};

Object.keys(obj).forEach((key) =>{
    console.log(obj[key]);
});

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


function showDeleteButtonOnlyIfOwnerUser(postUserId, postDocumentId) {    
    if (user.id === postUserId) {
        return `
            <div class="delete-area">
                <span class="cta"><i class="fa-solid fa-trash-can delete-btn" data-id="${postDocumentId}"></i></span> 
            </div>
            <div class="edit-area">
                <span><i class="fa-solid fa-pen-to-square edit edit-btn" data-id="${postDocumentId}"></i></span> 
            </div>
     
            `;
    }
    else return '';
}

const modalDeletePost =  (idPost) => {
    const modalContainer = document.getElementById("modal-container");
    //aqui inseeto mi html
    const htmlModal = `
    <div id="modal" class="modal modal-close">
        <p id="close-modal" class ="close">X</p>
         <p class="text-confirmation">¿Estás seguro o segura que quieres eliminar el comentario?</p>
         <img src="../images/ramdom_pictures/img-modal.png" alt="">
          <button class="delete" id="btn-modal-delete" data-id="${idPost}">Eliminar</button>
    </div>`;
    

    modalContainer.innerHTML = htmlModal;
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    
    //aqui defino comportamiento del modal y del boton close, del modal.
    const closeModal = document.getElementById("close-modal");
    const modal = document.getElementById("modal");
    const btnDelete =document.getElementById("btn-modal-delete");
    modal.classList.toggle("modal-close");
    
    closeModal.addEventListener("click", () => {
        modal.classList.toggle("modal-close");
        modalContainer.style.opacity = "0";
        modalContainer.style.visibility = "hidden";
    });

    btnDelete.addEventListener("click", (e) => {
        deletePost(e.target.dataset.id);
    });   

};

const modalEditPost = (idPost) => {
    const modalContainerEdit = document.getElementById("modal-container-edit");
    const modalEditHtml = `
    <div id="div-modal-edit" class ="div-modal-edit modal-close-edit">
        <p id="close-edit" class ="close-edit">X</p>
        <textarea name="edit-text-area" id="edit-text-area" class="edit-text-area" cols="30" rows="10"></textarea>
        <button class="edit save-post" id="save-post" data-id="${idPost}">Guardar</button>
    </div>`
    
    modalContainerEdit.innerHTML = modalEditHtml;
    modalContainerEdit.style.opacity = "1";
    modalContainerEdit.style.visibility = "visible";

    const closeModalEdit = document.getElementById("close-edit");
    const modalEdit = document.getElementById("div-modal-edit");
    const btnEdit =document.getElementById("save-post");
    const textArea = document.getElementById("edit-text-area")
    modalEdit.classList.toggle("modal-close-edit");
    
    closeModalEdit.addEventListener("click", () => {
        modalEdit.classList.toggle("modal-close-edit");
        modalContainerEdit.style.opacity = "0";
        modalContainerEdit.style.visibility = "hidden";
    });
    btnEdit.addEventListener("click",async (e) => {
        const docPost = await findingUser(idPost, collectionPost);
    const dataPost = docPost.data();
    console.log('dataPost: {}', dataPost);
        updatePost(idPost, collectionPost, {
            newPost: textArea.value
    });
})
}

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
                html += `<div id="instant-post" class="instant-post">
                        <div class="contact-data">
                            <div id = "user-photo-wall" class = "user-photo-wall">
                            <img class= "user-photo" id="user-photo" src="${dataPost.photo}"></img>
                            </div>
                            <p class="data-name">${dataPost.name}</p>
                        </div>
    
                        <p class="data-post">${dataPost.newPost}</p>
                        <div id = "btns-posts" class = "btns-posts">
                        <div class="area-likes">
                            <p class="like" >${dataPost.like?.length}</p>
                            <i class="like-post fa-solid fa-heart" data-id=${doc.id} id="like"></i>
                        </div>
                            
                            ${showDeleteButtonOnlyIfOwnerUser(dataPost.id, doc.id)}                            
                        </div>
                        <div id="modal-container" class = "modal-container">    
                        </div>
                        <div id="modal-container-edit" class = "modal-container-edit">    
                        </div>      
                    </div>`
                postsContainer.innerHTML = html


            const btnDelete = document.querySelectorAll(".delete-btn");
            btnDelete.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    modalDeletePost(e.target.dataset.id);
                    console.log(e.target.dataset.id)
                });
            });

            const btnLike = document.querySelectorAll(".like-post");
                btnLike.forEach(btnL => {
                    btnL.addEventListener('click', (event) => {
                        likeThePost(event.target.dataset.id)
                    });
                });
            
            let btnEdit = document.querySelectorAll(".edit-btn");
            btnEdit.forEach( btn => {
                btn.addEventListener('click', async (e) =>{
                    e.preventDefault();
                    console.log("works")
                    modalEditPost(e.target.dataset.id)
                    
                });
                
            });
        
        
        });
        });
        

    };
   
};

