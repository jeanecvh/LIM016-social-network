import { components } from '../components/components.js';
import {loginGoogle, loginBotton} from '../components/login.js';
import {register} from "../components/registerForm.js"
import {functionBtnReset} from '../components/reset_password.js';
import { btnPostShare, windowsTimeline,  } from '../components/timeline.js';


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
        case '#/register':
            main.appendChild(components.Header());
            main.appendChild(components.Registro());
            register();
            break;
        case '#/resetPassword':
            main.appendChild(components.Header());
            main.appendChild(components.ResetPassword());
            functionBtnReset()
            break;
        case '#/verification':
            main.appendChild(components.Message());
            main.appendChild(components.Header());
            break;
        case '#/timeline':
            main.appendChild(components.Timeline(components.MenuBar()));
            windowsTimeline()
            btnPostShare()
            break;
        default:
            main.innerHTML = 'Página No Encontrada';
            main.innerHTML = 'Página No Encontrada';
            break;
    }
}