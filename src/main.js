import { componentsViews } from './view-controller/router.js';

<<<<<<< HEAD

 
window.addEventListener('load', componentsViews);
window.addEventListener('hashchange', componentsViews);
console.log('hola');
=======
const init = () => {
    componentsViews(window.location.hash) 
    window.addEventListener('hashchange', () => 
    componentsViews(window.location.hash)); 
}
window.addEventListener('load', init);
>>>>>>> upstream/main
