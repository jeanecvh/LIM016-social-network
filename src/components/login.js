import { loginWithGoogle } from '../firebase/auth.js';

export const login = () => {
  const form = `
      <div id ='logo-scoobygram' class='logo-scoobygram'>
        <img src="./images/logos/Logo_ScoobyGram.png" alt="ScoobyGramInit">
      </div>
      <form id='form-login'>
        <div class="login-input">
          <input type="text" id="email-login" class="data-login" placeholder="ingresa@correo.com" required>
      </div>
      <div class="login-input">
          <input type="password" id="password-login" class="data-login" placeholder="Ingrese contraseña" required>
      </div>
      <div class = "login-input">
        <a>Olvidé contraseña</a>
      </div>
      <button type="submit" id="btn-login" class="btn-login">INGRESAR</button>
      <p>O inicie la sesión</p>
      <div class="logos-login">
          <img id="imgGoogle" src="./images/icons/logo_google.png">
          <img id="imgFacebook" src="./images/icons/logo_facebook.png"
      </div>     

      </form>
          `;


  const divFormLogin = document.createElement('section');
  divFormLogin.setAttribute('id', 'login');
  divFormLogin.classList.add('login');
  divFormLogin.innerHTML = form;
  
  

  return divFormLogin;
};

export const loginGoogle = () => {
  const googleId = document.getElementById('imgGoogle');
  
  googleId.addEventListener('click' , async (e)=>{
    try{
      await loginWithGoogle();
    }catch (error){}
  })
}
