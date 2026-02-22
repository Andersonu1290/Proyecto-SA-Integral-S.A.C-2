        document.addEventListener("DOMContentLoaded", function() {
            const images = document.querySelectorAll('.carousel-album-img');
            const carouselElement = document.querySelector('#carouselCapacitacion');

            images.forEach(img => {
                // 1. Activar/Desactivar Zoom al hacer clic
                img.addEventListener('click', function(e) {
                    if (this.classList.contains('zoomed')) {
                        this.classList.remove('zoomed');
                        this.style.transformOrigin = 'center center';
                    } else {
                        this.classList.add('zoomed');
                        moveImage(e, this); // Posicionar inmediatamente
                    }
                });

                // 2. Mover la imagen con el mouse cuando está en zoom
                img.addEventListener('mousemove', function(e) {
                    if (this.classList.contains('zoomed')) {
                        moveImage(e, this);
                    }
                });
            });

            // Función para calcular la posición del mouse sobre la imagen
            function moveImage(e, img) {
                const rect = img.getBoundingClientRect();
                const x = e.clientX - rect.left; // Posición X dentro de la imagen
                const y = e.clientY - rect.top;  // Posición Y dentro de la imagen
                
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;

                // Movemos el punto de origen del zoom hacia donde está el mouse
                img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
            }

            // 3. Resetear el zoom si el usuario cambia de foto (Slide)
            carouselElement.addEventListener('slide.bs.carousel', function () {
                images.forEach(img => {
                    img.classList.remove('zoomed');
                    img.style.transformOrigin = 'center center';
                });
            });
        });