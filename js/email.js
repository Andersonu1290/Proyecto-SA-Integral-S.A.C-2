/* ARCHIVO: js/email.js
   FUNCIÓN: Enviar correos con EmailJS
*/

window.addEventListener('load', function() {
    
    // 1. Verificamos si la librería cargó
    if (typeof emailjs !== 'undefined') {
        
        // TUS DATOS DE EMAILJS
        emailjs.init("EvUj7-Yeop4MLh6MF"); // Tu Public Key
        const serviceID = 'service_222ght1';
        const templateID = 'template_b73gmpg';

        // 2. Lógica para el Formulario de CONTACTO (contacto.html)
        const contactForm = document.getElementById('form-contacto');
        const contactBtn = document.getElementById('btn-enviar');

        if (contactForm && contactBtn) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                contactBtn.innerText = 'ENVIANDO...';
                enviarCorreo(this, contactBtn, 'ENVIAR MENSAJE');
            });
        }

        // 3. Lógica para el Formulario de INICIO (index.html)
        const indexForm = document.getElementById('form-index');
        const indexBtn = document.getElementById('btn-index-enviar');

        if (indexForm && indexBtn) {
            indexForm.addEventListener('submit', function(event) {
                event.preventDefault();
                indexBtn.innerText = 'ENVIANDO...';
                enviarCorreo(this, indexBtn, 'ENVIAR CONSULTA');
            });
        }

        // 4. Función reutilizable para enviar
        function enviarCorreo(formulario, boton, textoOriginal) {
            emailjs.sendForm(serviceID, templateID, formulario)
            .then(() => {
                boton.innerText = '¡ENVIADO!';
                alert('¡Gracias! Hemos recibido tu mensaje. Nos pondremos en contacto contigo a la brevedad.');
                formulario.reset();
                setTimeout(() => { boton.innerText = textoOriginal; }, 3000);
            }, (err) => {
                boton.innerText = textoOriginal;
                alert('Hubo un error al enviar. Por favor verifica tu conexión.');
                console.log(JSON.stringify(err));
            });
        }

    } else {
        console.error("Error: La librería EmailJS no se ha cargado correctamente.");
    }
});