
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
      <button type="submit" id="btn_login" class="btn_login">INGRESAR</button>
      <p>O inicie la sesión</p>
      <div class="logos-login">
          <img id="imgFacebook" src="./images/icons/logo_google.png">
          <img id="imgGoogle" src="./images/icons/logo_facebook.png">
      </div>     
      </form>`;

    const divFormLogin = document.createElement('section');
    divFormLogin.setAttribute('id', 'login');
    divFormLogin.classList.add('login');
    divFormLogin.innerHTML = form;

  return divFormLogin;
};
