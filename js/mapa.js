function cambiarMapa(id, boton) {
            var iframe = document.getElementById('mapa-frame');
            var url1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.32930823429!2d-77.01788357651292!3d-11.998107394793347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf1d644b55f5%3A0xd8eb3f906e6eab1b!2sSoluciones%20y%20Acabados%20Integral%20SAC!5e0!3m2!1ses-419!2spe!4v1769698334240!5m2!1ses-419!2spe";
            var url2 = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487.78461667444316!2d-77.00627965900254!3d-12.024445927022109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f6ee75de79%3A0xb1b6abcdfb399dda!2sJuan%20Pablo%20Vizcardo%20y%20Guzm%C3%A1n%2C%20San%20Juan%20de%20Lurigancho%2015401!5e0!3m2!1ses!2spe!4v1770770367278!5m2!1ses!2spe";

            // Cambiar URL del iframe
            if (id === 1) {
                iframe.src = url1;
            } else {
                iframe.src = url2;
            }

            // Actualizar estilo de los botones
            var botones = document.querySelectorAll('.btn-mapa');
            botones.forEach(function(b) {
                b.classList.remove('btn-cotizar');
                b.classList.add('btn-outline-secondary');
            });

            // Activar el botón presionado
            boton.classList.remove('btn-outline-secondary');
            boton.classList.add('btn-cotizar');
        }