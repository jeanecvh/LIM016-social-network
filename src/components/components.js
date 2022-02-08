import { login } from './login.js';
import { formTemplateRegister } from './registerForm.js';
import { resetPassword } from './reset_password.js';

export const components = {
    Login: login,
    Registro: formTemplateRegister,
    ResetPassword: resetPassword,
}

