export const sectionUtils = () => {
    const templateMenuBar = `
        <div id="box-search" class="box-search">
            <span class="fafasearch">
                <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="search" class="search input-data" id="searchFilm" autocomplete="off">
        </div>
        <div id="box-workers" class="box-workers">
            <div class="services-text">
                <h3>SERVICIOS &nbsp</h3><i class="fa-solid fa-paw"></i>
            </div>
            <div class="service-list">
                <ul>
                    <li>Paseadores de perros</li>
                    <li>Grommers</li>
                    <li>Veterinarias</li>
                    <li>Farmacias </li>
                    <li>Entrenadores</li>
                    <li>Entrenadores</li>
                </ul>
            </div>    
        </div>
        <div id="box-friends" class="box-friends">
            <div class="services-text">
                <h3>AMIGOS &nbsp</h3><i class="fa-solid fa-paw"></i>
            </div>  
            <div id="friends-container" class="friends-container">
            </div>
        </div>
        `;
    return templateMenuBar;
}