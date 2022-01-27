export const formTemplateRegister = () => {
  const viewForm =
    /*const viewForm = document.createElement('div');
    viewForm.classList.add('sectionLogin');
    viewForm.innerHTML = */
    `
    <section class="contain-form">
    <h1 id="h1Form">Formulario de registro</h1>
    <form class="form" id="form">
      <!-- Grupo: Nombre -->
      <div class="form_group" id="group_name">
        <label for="name" class="form_label">Nombre y Apellido</label>
        <div class="form_group_input">
          <input type="text" class="form_input" name="name" id="name" placeholder="Barry Whithe" autocomplete="off">
          <i class="form_validate fas fa-times-circle"></i>
        </div>
        <p class="form_input_err">El usuario solo puede contener letras.</p>
      </div>
      <!-- Grupo: Correo Electronico -->
      <div class="form_group" id="group_email">
        <label for="email" class="form_label">Correo Electrónico</label>
        <div class="form_group_input ">
          <input type="email" class="form_input" name="email" id="email" placeholder="correo@correo.com"
            autocomplete="off">
          <i class="form_validate fas fa-times-circle"></i>
        </div>
        <p class="form_input_err">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
      </div>
      <!-- Grupo: Contraseña -->
      <div class="form_group" id="group_password">
        <label for="password" class="form_label">Contraseña</label>
        <div class="form_group_input">
          <input type="password" class="form_input" name="password" id="password" autocomplete="on">
          <i class="form_validate fas fa-times-circle"></i>
        </div>
        <p class="form_input_err">La contraseña tiene que ser de 8 a 15 dígitos.</p>
      </div>

      <!-- Grupo: Contraseña 2 -->
      <div class="form_group" id="group_password2">
        <label for="password2" class="form_label">Repetir Contraseña</label>
        <div class="form_group_input">
          <input type="password" class="form_input" name="password2" id="password2" autocomplete="on">
          <i class="form_validate fas fa-times-circle"></i>
        </div>
        <p class="form_input_err">Ambas contraseñas deben ser iguales.</p>
      </div>
      <!-- imput-->
      <div class="form_alert" id="formAlert">
        <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
      </div>

      <div class="form_group_btn_send">
        <button type="submit" class="form_btn">Enviar</button>
        <p class="form_message_valid" id="messageFormValid">Formulario enviado exitosamente!</p>
      </div>
    </form>
  </section>
    `
    ;   
    return viewForm;
  };


  /*
const formRegister = document.getElementById('form');
const inputs = document.querySelectorAll('#form_input'); // obtengo un arreglo de cada input

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
          .getElementById('group_name')
          .classList.remove('form_group_fail');
        console.log('acepr');
        document.getElementById('group_name').classList.add('form_group_valid');
      } else {
        document.getElementById('group_name').classList.add('form_group_fail');
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
