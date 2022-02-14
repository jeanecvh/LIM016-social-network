import { components } from '../components/components.js';
import {loginGoogle, loginBotton} from '../components/login.js';
import {register} from "../components/registerForm.js"
import {functionBtnReset} from '../components/reset_password.js';
import { btnPostShare } from '../components/timeline.js';

export const componentsViews = (hash) => {
    const main = document.getElementById('main');
    const muro =  document.getElementById('muro');
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
            main.appendChild(components.Header());
            main.appendChild(components.Registro());
            register();
            break;
        case '#/resetPassword':
            main.appendChild(components.ResetPassword());
            functionBtnReset()
            break;
        case '#/verification':
            main.appendChild(components.Message());
            main.appendChild(components.Header());
            break;
        case '#/timeline':
<<<<<<< HEAD
            main.appendChild(components.Timeline());
            btnPostShare()
=======
            muro.appendChild(components.Timeline(components.MenuBar()));
>>>>>>> b71f9ea17b697331644c9656b01d293bdb583577
            break;
        default:
            main.innerHTML = 'Página No Encontrada';
            muro.innerHTML = 'Página No Encontrada';
            break;
    }
}