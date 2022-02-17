import { recoverPasswordWithEmail } from "../firebase/auth.js";

export const resetPassword = () => {
  const formTemplateResetPassword = `
        <form id='form-forget-password' class ='form-forget-password'>
          <div class ='text-login'>
              <p>RECUPERAR CONTRASEÑA</p>
          </div>
          <div class='div-form-forget-password information-reset'>
              <p class = 'text-form-forget-password'>Ingresa tu correo electrónico asociado, y te enviaremos un enlace para poder recuperar tu cuenta</p>
          </div>
          <div class="container-email-button">
              <div class="div-form-forget-password div-form-forget-password-input">
                  <input class ='reset-input login-data' type="text" id="email-send" placeholder="Ingresa@correo.com" required>
              </div>
              <div class= div-emailwhitoutregister>
                <p> <i class="fas fa-exclamation-triangle"> </i>  Usuario no registrado</p>
              </div>
              <div class="div-form-forget-password div-form-forget-password-button">
                  <button type="submit" id="btn-recover-password" class="reset-button">Recuperar Contraseña</button>
              </div>
          </div>    
          <div class="div-form-forget-password div-form-forget-password-href">
              <a class = 'text-color href-create-account' href="/#/register">Crear cuenta nueva</a>
              <a class = 'text-color' href="/#/login">Volver al inicio de sesión</a>
          </div>
    </form>`;

  const divFormResetPassword = document.createElement("section");
  divFormResetPassword.setAttribute("id", "reset-password");
  divFormResetPassword.classList.add("reset-password'");
  divFormResetPassword.innerHTML = formTemplateResetPassword;

  return divFormResetPassword;
};

async function recoverPassword() {
  const email = document.getElementById("email-send");
  try {
    const reset = await recoverPasswordWithEmail(email.value);
    console.log("send-email", email);
    return reset;
  } catch (error) {
    console.log(error)
    console.log('Cuenta no registrada');
    if (error = 'error') {
      console.log('')
      document.querySelector('.div-emailwhitoutregister').style.display = "block";
    }
  }
};

export const functionBtnReset = () => {
  const btnForgetPassword = document.getElementById("btn-recover-password");
  btnForgetPassword.addEventListener("click", async (e) => {
    console.log("funciona boton de contraseña");
    await recoverPassword();
  });
};
