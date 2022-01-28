export const formTemplateRegister = () => {
  const viewForm =
    `
    <h1 id="h1Form">Formulario de registro</h1>
    <form class="form" id="form">
      <!-- Grupo: Nombre -->
      <div class="form-group" id="group-name">
        <label for="name" class="form-label">Nombre y Apellido</label>
        <div class="form-group-input">
          <input type="text" class="form-input" name="name" id="name" placeholder="Barry Whithe" autocomplete="off">
          <i class="form-validate fas fa-times-circle"></i>
        </div>
        <p class="form-input-err">El usuario solo puede contener letras.</p>
      </div>
      <!-- Grupo: Correo Electronico -->
      <div class="form-group" id="group-email">
        <label for="email" class="form-label">Correo Electrónico</label>
        <div class="form-group-input ">
          <input type="email" class="form-input" name="email" id="email" placeholder="correo@correo.com"
            autocomplete="off">
          <i class="form-validate fas fa-times-circle"></i>
        </div>
        <p class="form-input-err">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
      </div>
      <!-- Grupo: Contraseña -->
      <div class="form-group" id="group-password">
        <label for="password" class="form-label">Contraseña</label>
        <div class="form-group-input">
          <input type="password" class="form-input" name="password" id="password" autocomplete="on">
          <i class="form-validate fas fa-times-circle"></i>
        </div>
        <p class="form-input-err">La contraseña tiene que ser de 8 a 15 dígitos.</p>
      </div>

      <!-- Grupo: Contraseña 2 -->
      <div class="form-group" id="group-password2">
        <label for="password2" class="form-label">Repetir Contraseña</label>
        <div class="form-group-input">
          <input type="password" class="form-input" name="password2" id="password2" autocomplete="on">
          <i class="form-validate fas fa-times-circle"></i>
        </div>
        <p class="form-input-err">Ambas contraseñas deben ser iguales.</p>
      </div>
      <!-- imput-->
      <div class="form-alert" id="formAlert">
        <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
      </div>

      <div class="form-group-btn-send">
        <button type="submit" class="form-btn">Enviar</button>
        <p class="form-message-valid" id="messageFormValid">Formulario enviado exitosamente!</p>
      </div>
    </form>`;

    const divFormRegister = document.createElement('section');
    divFormRegister.setAttribute('class', 'contain-form');
    divFormRegister.classList.add('contain-form');
    divFormRegister.innerHTML = viewForm;
    return divFormRegister;
  };


  /*
const formRegister = document.getElementById('form');
const inputs = document.querySelectorAll('#form-input'); // obtengo un arreglo de cada input

const reguex = { // corregir nombre de regex
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{8,15}$/, // 8 a 15 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const campos = {
  nombre: false,
  password: false,
  correo: false,
};
*/
//e es objeto que representa el evento, y uno de sus atributos es el target, que viene a ser el elemento que recibió el evento
/*const validarteForm = (e) => { 
  switch (e.target.name) {
    case 'name':
      if (reguex.name.test(e.target.value)) {
        document
          .getElementById('group-name')
          .classList.remove('form-group-fail');
        console.log('acepr');
        document.getElementById('group-name').classList.add('form-group-valid');
      } else {
        document.getElementById('group-name').classList.add('form-group-fail');
        console.log('nfknfnewk');
      }
      break;
    case 'password':
      break;
    case 'password2':
      break;
    case 'email':
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarteForm);
  input.addEventListener('blur', validarteForm);
});

formRegister.addEventListener('submit', (e) => {
  e.preventDefault(); // aca cambiar para mandar los datos a firebase
});*/
