import { components } from '../components/components.js';
import {loginGoogle, loginBotton} from '../components/login.js';
import {register} from "../components/registerForm.js"
import {functionBtnReset} from '../components/reset_password.js';

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
        case '#/register':
            main.appendChild(components.Registro());
            register();
            main.appendChild(components.Header());
            break;
        case '#/resetPassword':
            main.appendChild(components.ResetPassword());
            functionBtnReset()
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