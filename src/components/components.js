import { login } from './login.js'
import { formTemplateRegister } from './registerForm.js'
import{headerTemplate} from './header.js'
import { emailConfirm } from './confirmEmail.js'

export const components = {
    Login: login,
    Registro: formTemplateRegister,
    Header: headerTemplate,
    Message: emailConfirm
}

