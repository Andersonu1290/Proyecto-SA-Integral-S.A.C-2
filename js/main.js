/* ARCHIVO: js/main.js
   FUNCIÓN: Preloader Inteligente (Carga Real + Tiempo Límite de Seguridad)
*/

// 1. Definimos la función que quita el preloader
function ocultarPreloader() {
    const preloader = document.querySelector('.preloader');
    const pageTitle = document.getElementById('pageTitle');
    const pageBreadcrumb = document.getElementById('pageBreadcrumb');

    // Solo si el preloader sigue ahí (para no ejecutarlo dos veces)
    if (preloader && preloader.style.display !== 'none') {
        
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        
        // Descongelamos animaciones
        document.body.classList.remove('is-loading');

        // Animaciones de entrada (si existen)
        if(pageTitle) {
            pageTitle.style.visibility = 'visible';
            pageTitle.classList.add('animate__animated', 'animate__fadeInDown');
        }
        if(pageBreadcrumb) {
            pageBreadcrumb.style.visibility = 'visible';
            pageBreadcrumb.classList.add('animate__animated', 'animate__fadeInUp');
        }

        setTimeout(() => { preloader.style.display = 'none'; }, 400); 
    }
}

// 2. CASO IDEAL: Esperamos a que carguen todas las FOTOS y scripts (Carga Real)
window.addEventListener('load', function() {
    // Le damos un pequeño respiro de 0.5s para que sea suave
    setTimeout(ocultarPreloader, 500);
});

// 3. PLAN B (SEGURIDAD): Si pasaron 8 segundos y no ha cargado (internet lento), abrimos igual.
setTimeout(function() {
    ocultarPreloader();
}, 8000); // 8000 milisegundos = 8 segundos máximo de espera