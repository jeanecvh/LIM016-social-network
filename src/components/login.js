import {loginWithGoogle} from "../firebase/auth.js"
import {userDataBase} from "../firebase/firestore.js"

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
    e.preventDefault();
    try{
      const user = await loginWithGoogle();
      const userToCreate = {
        nombre: user.displayName,
        correo: user.email,
        foto: user.photoURL,
        id: user.uid
      };
      await userDataBase(userToCreate);
     
     
      
    }catch (error){}
  });
};


