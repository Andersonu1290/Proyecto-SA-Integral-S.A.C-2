/* ARCHIVO: js/main.js
   FUNCIÓN: Preloader Inteligente y Animaciones de Entrada
*/

// 1. Definimos la función que quita el preloader (AHORA SERÁ CONTROLADA POR LA API)
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