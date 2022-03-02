import { componentsViews } from './view-controller/router.js';

const init = () => {
    console.log("Iniciando inicio");
    componentsViews(window.location.hash) 
    window.addEventListener('hashchange', () => 
    componentsViews(window.location.hash)); 
}
window.addEventListener('load', init);

