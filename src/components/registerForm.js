import {userCreate,emailVerificate} from "../firebase/auth.js"
import {userDataBase,collectionUser} from "../firebase/firestore.js"
import { userDataLocally } from "./sessionStorage.js"

export const formTemplateRegister = () => {
  const viewForm =
    `<div class="fondGif">
     <div class="formFond">
    <form class="form" id="form" name ="form">
    <h1 id="h1Form" class="h1Form">Formulario de registro</h1>
      <!-- Grupo: Nombre -->
      <div class="form-group" id="group-name">
        <label for="name" class="form-label">Nombre y Apellido</label>
        <div class="form-group-input">
          <input type="text" class="form-input" name="name" id="name" autocomplete="off">
          <i class="form-validate fas fa-times-circle"></i>
        </div>
        <p class="form-input-err" id="errName">No puede contener numeros, ni caracteres especiales.</p>
      </div>
      <!-- Grupo: Correo Electronico -->
      <div class="form-group" id="group-email">
        <label for="email" class="form-label">Correo Electrónico</label>
        <div class="form-group-input ">
          <input type="email" class="form-input" name="email" id="email"
            autocomplete="off">
          <i class="form-validate fas fa-times-circle"></i>
        </div>
        <p class="form-input-err" id="errEmail">Ingresa un formato de correo valido.</p>
      </div>
      <!-- Grupo: Contraseña -->
      <div class="form-group" id="group-password">
        <label for="password" class="form-label">Contraseña</label>
        <div class="form-group-input">
          <input type="password" class="form-input" name="password" id="password" autocomplete="on">
          <i class="form-validate fas fa-times-circle"></i>
        </div>
        <p class="form-input-err" id="errPassword">La contraseña tiene que ser de 8 a 15 dígitos.</p>
      </div>

      <!-- Grupo: Contraseña 2 -->
      <div class="form-group" id="group-password2">
        <label for="password2" class="form-label">Repetir Contraseña</label>
        <div class="form-group-input">
          <input type="password" class="form-input" name="password2" id="password2" autocomplete="on">
          <i class="form-validate fas fa-times-circle"></i>
        </div>
        <p class="form-input-err" id="errPass2">Ambas contraseñas deben ser iguales.</p>
      </div>
      <!-- imput-->
      <div class="form-alert" id="formAlert">
        <p class="submitErr"><i class="fas fa-exclamation-triangle"></i><b>* Error: </b>Por favor rellena el formulario correctamente. </p>
      </div>

      <div class="form-group-btn-send">
        <button type="submit" class="form-btn" id ="form-btn">Enviar</button>
        <p class="form-message-valid" id="messageFormValid">Se ha enviado un correo de verificacion!</p>
      </div>
    </form>
    </div>
    </div>
    `
    ;   
    const divFormRegister = document.createElement('section');
    divFormRegister.setAttribute('class', 'contain-form');
    divFormRegister.classList.add('contain-form');
    divFormRegister.innerHTML = viewForm;
    return divFormRegister;
  };

 export  async function loginSubmit(){        
    const userName =document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;
    try {
    const login = await  userCreate(userEmail, userPassword);
      console.log(login.user ,'que tal')
      emailVerificate();
      const userToCreateForm = {
        nombre: userName,
        correo: userEmail,
        foto: "./images/ramdom_pictures/img-modal.png",
        id: login.user.uid
      };
      await userDataBase(userToCreateForm,collectionUser);
      sessionStorage.setItem('user', JSON.stringify(userToCreateForm));
      const datoGuardado = userDataLocally();
      console.log('usuario guardado en formulario: ', datoGuardado);
      
      return login.user
    }
    catch(err){
    console.log(err)}      
}

  export const register= () => {
    validateInputs()
    const form = document.getElementById('form')
      const formBtn = document.getElementById('form-btn');
      formBtn.addEventListener('click', (e) => {
        e.preventDefault()
        loginSubmit()
      
        if (valid.name && valid.email && valid.password == true){
          document.getElementById('messageFormValid').style.display = "block"
          document.getElementById('formAlert').style.display ='none'
          
          //form.reset();
          window.location.hash = '#/verification';
        }else{
          document.getElementById('formAlert').style.display ='block'
          console.log('campos invalidos')
        }

  });
  };
 
 /////////////// Funcion validacion de inputs //////////////////
 const valid = {
  name : false,
  email : false,
  password : false,
};

 const validateInputs = ()=> {
   const inputName = document.getElementById('name')
   const inputEmail = document.getElementById('email')
   const inputPassword = document.getElementById('password')
   const inputPassword2 = document.getElementById('password2')
   const msnErrorName = document.getElementById('errName')
   const msnErrorEmail = document.getElementById('errEmail')
   const msnErrorPassword = document.getElementById("errPassword")
   const msnErrorPass2 = document.getElementById("errPass2")
   const reguex = { // corregir nombre de regex
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{8,15}$/, // 8 a 15 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  
  inputName.addEventListener('keyup', (e) => {
   if(reguex.name.test(e.target.value)){
    document.getElementById('group-name').classList.remove('form-group-fail');
    document.getElementById('group-name').classList.add('form-group-valid');
    document.querySelector('#group-name i').classList.remove('fa-times-circle');
     document.querySelector('#group-name i').classList.add('fa-check-circle');
    msnErrorName.style.display = "none"
    valid.name = true
  }else{
    document.getElementById('group-name').classList.add('form-group-fail');
    msnErrorName.style.display = "block"
    document.querySelector('#group-name i').classList.remove('fa-check-circle');
    document.querySelector('#group-name i').classList.add('fa-times-circle');
    valid.name = false
  }
  })
  inputEmail.addEventListener('keyup', (e) => {
    if(reguex.email.test(e.target.value)){
     document.getElementById('group-email').classList.remove('form-group-fail');
     document.getElementById('group-email').classList.add('form-group-valid');
     document.querySelector('#group-email i').classList.remove('fa-times-circle');
     document.querySelector('#group-email i').classList.add('fa-check-circle');
     msnErrorEmail.style.display = "none"
     valid.email = true
   }else{
     document.getElementById('group-email').classList.add('form-group-fail');
     msnErrorEmail.style.display = "block"
     document.querySelector('#group-email i').classList.remove('fa-check-circle');
     document.querySelector('#group-email i').classList.add('fa-times-circle');
   }
   })
   inputPassword.addEventListener('keyup', (e) => {
    if(reguex.password.test(e.target.value)){
     document.getElementById('group-password').classList.remove('form-group-fail');
     document.getElementById('group-password').classList.add('form-group-valid');
     document.querySelector('#group-password i').classList.remove('fa-times-circle');
     document.querySelector('#group-password i').classList.add('fa-check-circle');
     msnErrorPassword.style.display = "none"
     valid.password = true
   }else{
     document.getElementById('group-password').classList.add('form-group-fail');
     msnErrorPassword.style.display = "block"
     document.querySelector('#group-password i').classList.remove('fa-check-circle');
     document.querySelector('#group-password i').classList.add('fa-times-circle');
     valid.password = false
   }
   })
   inputPassword2.addEventListener('keyup', (e) => {
     if(inputPassword.value === inputPassword2.value){
       document.getElementById('group-password2').classList.remove('form-group-fail');
       document.getElementById('group-password2').classList.add('form-group-valid');
       document.querySelector('#group-password2 i').classList.remove('fa-times-circle');
     document.querySelector('#group-password2 i').classList.add('fa-check-circle');
       msnErrorPass2.style.display = "none"
     }else{
       document.getElementById('group-password2').classList.add('form-group-fail');
       document.querySelector('#group-password2 i').classList.remove('fa-check-circle');
       document.querySelector('#group-password2 i').classList.add('fa-times-circle');
       msnErrorPass2.style.display = "block"
     }
   })
 }

