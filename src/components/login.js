import { userDataBase } from "../firebase/firestore.js"
import {
  loginWithGoogle,
  loginWithEmailAndPassword, auth
} from "../firebase/auth.js";
import { doc, getDoc }from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"
import { db } from "../firebase/config.js";
import { userDataLocally } from "./sessionStorage.js"
//import { itemsProfie } from "../firebase/feed.js";


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
          <a class = 'text-color' href="#/register">Crear cuenta nueva</a>
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
  googleId.addEventListener("click", async (e) => {
    try {
      const user = await loginWithGoogle();
      const userToCreate = {
        nombre: user.displayName,
        correo: user.email,
        foto: user.photoURL,
        id: user.uid
      };
      await userDataBase(userToCreate);
      const sesion = sessionStorage.setItem('user', JSON.stringify(userToCreate));
      console.log('datos locales: ', sesion);
      const datoGuardado = userDataLocally();
      console.log('usuario guardado: ', datoGuardado);
      window.location.hash = '#/timeline';
      return;

    } catch (error) { }
  });
};

async function loginUser() {
  const emailValue = document.getElementById("email-login").value;
  const passwordValue = document.getElementById("password").value;
  try {
      let ke = await loginWithEmailAndPassword(emailValue, passwordValue);
    console.log(emailValue, passwordValue, "Buenas");
    const docRef = doc(db, "usuario", ke.user.uid);
  const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let userCollection={
        id: docSnap.data().id,
        nombre: docSnap.data().nombre,
        correo: docSnap.data().correo,
        foto: docSnap.data().foto
      }
      sessionStorage.setItem('user', JSON.stringify(userCollection));
      const datoGuardado = userDataLocally();
      console.log('usuario guardado: ', datoGuardado);
      console.log("Document data:", userCollection);
  } else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  }
    await itemsProfie((querySnapshot)=>{
      querySnapshot.forEach(doc => { // meter la informacion de la coleccion pos_user
        const userData = doc.data()
        console.log(userData, "datos")
       if(userData.correo == emailValue){
       console.log("quiero ese email")}
    })
  })
    if(error = 'auth/wrong-password') {
      console.log('ta mal')
      document.querySelector('.div-wrongpassword').style.display = "block";
    } /*if else (emailValue.value == "" && passwordValue == ""){
      console.log("don't be here")
    }*/
  }catch{

  }
}

export const loginBotton =  () => {
  const bottonLogin = document.getElementById("btn_login");

  bottonLogin.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("funciona");     
    loginUser();
    window.location.hash = '#/timeline';
    return;
  });
};