const formRegister= document.getElementById('form');
const inputs = document.querySelectorAll('#form_input'); // obtengo un arreglo de cada input

const reguex = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,15}$/, // 8 a 15 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
	password: false,
	correo: false,
}

const validarteForm = (e) => {
	switch (e.target.name) { //e es objeto que representa el evento, y uno de sus atributos es el target, que viene a ser el elemento que recibió el evento
			case "name":
			if(e.target.value.replace(reguex.name)){
                
                 document.getElementById('group_name').classList.remove('form_group_fail');
                 console.log('acepr')
             document.getElementById('group_name').classList.add('form_group_valid');               
            }else{
                document.getElementById('group_name').classList.add('form_group_fail');
                console.log('nfknfnewk')
            }
		break;
		case "password":
			
		break;
		case "password2":
			
		break;
		case "email":
			
		break;
	}
}




inputs.forEach((input) => {
	input.addEventListener('keyup', validarteForm);
 //input.addEventListener('blur', validarteForm);
});

formRegister.addEventListener('submit', (e) => {
	e.preventDefault(); // aca cambiar para mandar los datos a firebase
});
