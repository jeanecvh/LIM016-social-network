import { loginWithGoogle } from '../firebase/auth.js';

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
          <input class ='login-input' type="text" id="email-login" class="data-login" placeholder="Usuario" required>
        </div>
        <div class= 'div-form-login div-form-login-input'>
              <input class ='login-input' type="password" id="password" class="data-login" placeholder="Contraseña" required>
            </div>
      
            <div class= 'forget-password'>
              <a class='text-color' href='/#'>Olvidé contraseña</a>
            </div>
            <div class= 'forget-password'>
              <input type="checkbox" name="remember" id="remember" class="form-check-input"/>
              <label class='text-color' for="remember-me">Recordarme</label>
            </div>
        </div>
        <div class = "div-form-login">
          <button type="submit" id="btn_login" class="btn_login">INGRESAR</button>
        </div>
        <div class = "div-form-login">
          <p class = 'text-color'>O inicie la sesión con</p>
        </div>
        <div class="logos-login div-form-login">
            <img id="imgGoogle" src="./images/icons/logo_google.png">
        </div>
   
      </form>`;

    const divFormLogin = document.createElement('section');
    divFormLogin.setAttribute('id', 'login');
    divFormLogin.classList.add('login');
    divFormLogin.innerHTML = formLogin;
    
    /*const iconEye = divFormLogin.querySelector('.icon-eye');
      iconEye.addEventListener('click', async () => {
      console.log('aaaaaaa','CLICKED');
      .then(res => res(console.log(this));
      });
      <span class="icon-eye" >
                <i class="fas fa-eye-slash"></i>
              </span>
      */
  return divFormLogin;
};

export const loginGoogle = () => {
  const googleId = document.getElementById('imgGoogle');
  googleId.addEventListener('click' , async (e)=>{
    try{
      await loginWithGoogle();  
    }catch (error){}
  });
};

