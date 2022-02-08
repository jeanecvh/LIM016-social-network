import { components } from '../components/components.js';
import {loginGoogle, loginBotton} from '../components/login.js';
import {register} from "../components/registerForm.js"
import {functionBtnReset} from '../components/reset_password.js'

export const componentsViews = (hash) => {
    const main = document.getElementById('main');
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
            register();
            break;
        case '#/resetPassword':
            main.appendChild(components.ResetPassword());
            functionBtnReset()
            break;
        default:
            main.innerHTML = 'Página No Encontrada';
            break;
    }
}