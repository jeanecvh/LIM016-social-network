import { componentsViews } from './view-controller/router.js';

const init = () => {
    console.log("Starting init");
    componentsViews(window.location.hash) 
    window.addEventListener('hashchange', () => 
    componentsViews(window.location.hash)); 
}
window.addEventListener('load', init);

