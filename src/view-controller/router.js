import { components } from '../components/components.js';
import {loginGoogle, loginBotton} from '../components/login.js';
import {register} from "../components/registerForm.js"

export const componentsViews = (hash) => {
    const main = document.getElementById('main');
    const header = document.getElementById('header');
    main.innerHTML = ''
    // devuelve la parte de anclaje de la URL(ruta)
    switch (hash) {
        case '': 
        case '#/': 
        case '#/login':
            main.appendChild(components.Login());
            loginGoogle();
            loginBotton();
            break;
        case '#/registro':
            main.appendChild(components.Registro());
            header.appendChild(components.Header())
            register()
            break;
            case '#/verificacion':
                main.appendChild(components.Message());
                header.appendChild(components.Header());
                break;
        default:
            main.innerHTML = 'Página No Encontrada';
            break;
    }
}