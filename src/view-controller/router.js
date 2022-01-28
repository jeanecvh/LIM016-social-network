import { components } from '../components/components.js';

export const componentsViews = () => {
    const main = document.getElementById('main')
    main.innerHTML = '';
    // devuelve la parte de anclaje de la URL(ruta)
    switch (window.location.hash.toLowerCase()) {
        case '': case '#/': case '#/login':
            main.appendChild(components.login());
            break;
        case '#/registro':
            main.appendChild(components.formTemplateRegister());
            break;
        default:
            main.innerHTML = 'Página No Encontrada';
            break;
    }
    return main
}