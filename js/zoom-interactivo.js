document.addEventListener("DOMContentLoaded", function() {
    
    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('carousel-album-img')) {
            const img = e.target;

            if (img.classList.contains('zoomed')) {
                // 🔴 SALIR DEL ZOOM
                img.style.transition = 'transform 0.3s ease, transform-origin 0.3s ease';
                img.classList.remove('zoomed');
                img.style.transformOrigin = 'center center';

                setTimeout(() => {
                    img.style.transition = '';
                }, 300);

            } else {
                // 🟢 ENTRAR AL ZOOM (SUAVE + SIN SALTO)

                const rect = img.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;

                // 1. Aplicar origin
                img.style.transformOrigin = `${xPercent}% ${yPercent}%`;

                // 2. ACTIVAR transición (🔥 clave)
                img.style.transition = 'transform 0.3s ease';

                // 3. Esperar un mini tiempo
                setTimeout(() => {
                    img.classList.add('zoomed');
                }, 10);
            }
        }
    });

    document.body.addEventListener('mousemove', function(e) {
        if (
            e.target.classList.contains('carousel-album-img') &&
            e.target.classList.contains('zoomed')
        ) {
            moveImage(e, e.target);
        }
    });

    function moveImage(e, img) {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    }

    document.body.addEventListener('slide.bs.carousel', function (e) {
        const images = e.target.querySelectorAll('.carousel-album-img');
        images.forEach(img => {
            img.classList.remove('zoomed');
            img.style.transformOrigin = 'center center';
            img.style.transition = '';
        });
    });

});