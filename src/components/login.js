// Creacion de formulario de inicio de Sesión de forma dinámica
export const login = () => {
  const form = `
    <section>
      <div id ='logo-scoobygram' class='logo-scoobygram'>
        <img src="../src/images/logos/Logo_ScoobyGram.png" alt="ScoobyGramInit">
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
          <img id="imgFacebook" src="../src/images/icons/logo_google.png">
          <img id="imgGoogle" src="../src/images/icons/logo_facebook.png">
      </div>     
      </form>
    </section>
          `;
  return form;
};

login()