import { componentsViews } from './view-controller/router.js';

const init = () => {
    componentsViews(window.location.hash) 
    window.addEventListener('hashchange', () => 
    componentsViews(window.location.hash)); 
}
window.addEventListener('load', init);

