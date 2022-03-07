import { userDataBase , findingUser, collectionUser } from "../firebase/firestore.js"
import {loginWithGoogle , loginWithEmailAndPassword} from "../firebase/auth.js";
import {userDataLocally} from "./sessionStorage.js"


export const login = () => {
  const formLogin = `
      <div class = 'view-desktop views'></div>
      <form id='form-login' class ='form-login view-phone'>
        <div id ='logo-scoobygram' class='logo-scoobygram'>
          <img class ='logo-img'src="./images/logos/Logo_ScoobyGram.png" alt="ScoobyGramInit">
        </div>
        <div id = "text-login" class = "text-login">
          <p>INICIAR SESIÓN </p>
        </div>
        <div class="div-form-login div-form-login-input">
          <input class ='login-input data-login' type="text" id="email-login" placeholder="Correo" required>
        </div>
        <div class= 'div-form-login div-form-login-input '>
          <input class ='login-input data-login' type="password" id="password" placeholder="Contraseña" required>
        </div>
        <div class= div-wrongpassword>
          <p> <i class="fas fa-exclamation-triangle"></i> Usuario o contraseña incorrecto</p>
        </div>
        <div class= 'forget-password'>
          <a class='text-color' id='forget-password-redirectioanary' href='/#/resetPassword'>Olvidé contraseña</a>
        </div>
        <div class = "div-form-login">
          <button type="submit" id="btn_login" class="btn_login">INGRESAR</button>
        </div>
        <div class = "div-form-login">
          <a class = 'text-color' href="/#/register">Crear cuenta nueva</a>
        </div>
        <div class = "div-form-login">
          <p class = 'text-color'>O inicie la sesión con</p>
        </div>
        <div class="logos-login div-form-login">
            <img id="imgGoogle" src="./images/icons/logo_google.png">
        </div>
   
      </form>`;

  const divFormLogin = document.createElement("section");
  divFormLogin.setAttribute("id", "login");
  divFormLogin.classList.add("login");
  divFormLogin.innerHTML = formLogin;

  return divFormLogin;
};


export const loginGoogle = () => {
  const googleId = document.getElementById("imgGoogle");
  googleId.addEventListener("click", async () => {
    try {
      const user = await loginWithGoogle();
      const userToCreate = {
        nombre: user.displayName,
        correo: user.email,
        foto: user.photoURL,
        id: user.uid
      };
       userDataBase(userToCreate,collectionUser);
      const sesion = sessionStorage.setItem('user', JSON.stringify(userToCreate));
      console.log('datos locales: ', sesion);
      const datoGuardado = userDataLocally();
      console.log('usuario guardado: ', datoGuardado);
      window.location.hash = '#/timeline';
      return;

    } catch (error) {
      throw new Error(error, "error manita");
     }
  });
};

async function loginUser() {
  const emailValue = document.getElementById("email-login").value;
  const passwordValue = document.getElementById("password").value;
  try {
    const login = await loginWithEmailAndPassword(emailValue, passwordValue);
    console.log('user : ', login.user);
    if (login.user.emailVerified === true) {

     const user = await findingUser(login.user.uid, collectionUser);
     console.log('que retorna ? : ', user);
     
       const userToCreate = {
        nombre: user.data().nombre,
        correo: user.data().correo,
        foto: user.data().foto,
        id: user.data().id
        
      }
      sessionStorage.clear();
      sessionStorage.setItem('user', JSON.stringify(userToCreate));
      window.location.hash = '#/timeline';

    } else { console.log("HAY ERROR"); }
    
    return login;
  } catch (error) {
    if (error = 'auth/wrong-password') {
      console.log('ta mal')
      document.querySelector('.div-wrongpassword').style.display = "block";
    } 
  }
};

export const loginBotton = () => {
  const bottonLogin = document.getElementById("btn_login");
  bottonLogin.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("funciona");
    loginUser();
    
    return;
  });
};