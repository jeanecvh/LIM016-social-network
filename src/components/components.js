import { login } from './login.js';
import { formTemplateRegister } from './registerForm.js';
import { resetPassword } from './reset_password.js';
import { headerTemplate } from './header.js';
import { emailConfirm } from './confirmEmail.js';
import { timeline } from './timeline.js';
import { menuBar } from './menuBar.js';
import { sectionUtils } from './sectionUtils-timeline.js';

export const components = {
  Login: login,
  Registro: formTemplateRegister,
  ResetPassword: resetPassword,
  Header: headerTemplate,
  Message: emailConfirm,
  Timeline: timeline,
  MenuBar: menuBar,
  SectionUtils: sectionUtils,
};
