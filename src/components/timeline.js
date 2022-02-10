export const timeline = () => {
    const wallTemplate = 
    `<div>
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
    </div>`

    const sectionWall = document.createElement("section");
    sectionWall.setAttribute("id", "wall");
    sectionWall.classList.add("wall");
    sectionWall.innerHTML = wallTemplate;

    return sectionWall;


}