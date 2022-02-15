export const emailConfirm = () => {
    const emailConfirm = `
    <section class="message">
    <i class="msn fas fa-check-circle"></i>
    <p class="messageEmail">Hemos enviado un mensaje de verificación a tu correo</p>
    <div class="imageMail">
    <img class ='emailGif'src="./images/background/message.gif" alt="email gif"></img>
    </div>
    <p class="redirect">Si ingresaste un correo al que no tienes acceso.</p><a class="redirect" href='#/registro'> Haz click aqui</a>
    </section>
    `
    const divMessage = document.createElement('div');
    divMessage.innerHTML = emailConfirm;
    //window.location.hash = '#/timeline';
    
    return divMessage}