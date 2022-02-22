import { insertData,onDataDocument,deletePost, getDocument } from "../firebase/feed.js";
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



const modalDeletePost =  (idPost) => {
    const modalContainer = document.getElementById("modal-container");
    //aqui inseeto mi html
    const htmlModal = `<div id="modal" class="modal modal-close">
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
                            ${showDeleteButtonOnlyIfOwnerUser(dataPost.id, doc.id)}                            
                        </div>
                        <div id="modal-container" class = "modal-container">    

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
            
            let btnEdit = document.querySelectorAll(".edit");
            btnEdit.forEach( btn => {
                btn.addEventListener('click', async (e) =>{
                    e.preventDefault();
                    console.log('works')
                    const doc = await getDocument(e.target.dataset.id)
                    const dataPost = doc.data()
                });
                
            });

            // let closeModal = document.querySelectorAll(".close")[0]
            // let openModal = document.querySelectorAll(".cta")[0]
            // let modal = document.querySelectorAll(".modal")[0]
            // let modalConteiner = document.querySelectorAll(".modal-container")[0]

            // openModal.addEventListener("click", (e) => {
            //     e.preventDefault();
            //     modalConteiner.style.opacity = "1";
            //     modalConteiner.style.visibility = "visible";
            //     modal.classList.toggle("modal-close")

            // });

            // closeModal.addEventListener("click", () => {
            //     modal.classList.toggle("modal-close");
            //     modalConteiner.style.opacity = "0";
            //     modalConteiner.style.visibility = "hidden";
            
            // });

            // window.addEventListener("click", (e) => {
            //     console.log(e.target)
            //     if(e.target == modalConteiner){
            //         modal.classList.toggle("modal-close");
            //         modalConteiner.style.opacity = "0";
            //         modalConteiner.style.visibility = "hidden";
            //     }
            // });
                    
        
        });
        });
        

    };
};

function showDeleteButtonOnlyIfOwnerUser(postUserId, postDocumentId) {    
    if (user.id === postUserId) {
        return `<span class="cta""><i class="fa-solid fa-trash-can delete-btn" data-id="${postDocumentId}"></i></span> 
        <button class="edit" id="post-edit" data-id="${postDocumentId}">EDITAR</button>`;
    }
    else return '';
}


/*
export const functionbtnDelete = () => {
    
    btnDelete.addEventListener("click", async (e) => {
        e.preventDefault();
        console.log('BOTON BORRAR',viewTimelineHtml)
    })
}*/



//<i class="fa-solid fa-pen-to-square"></i>


/*
export const functionbtnDelete = () => {
    
    btnDelete.addEventListener("click", async (e) => {
        e.preventDefault();
        console.log('BOTON BORRAR',viewTimelineHtml)
    })
}*/



//<i class="fa-solid fa-pen-to-square"></i>
