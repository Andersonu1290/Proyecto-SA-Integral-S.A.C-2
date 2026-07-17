// =================================================================
// MOTOR DINÁMICO MAESTRO (CONEXIÓN A COCKPIT CMS)
// =================================================================

const apiKey = "API-bc88843a8a9f0c7258973169923702426d06620b";
const urlServer = "http://localhost:8000";

// -----------------------------------------
// 0. CONFIGURACIÓN GLOBAL (Navbar, Footer, Redes)
// -----------------------------------------
async function cargarConfiguracionGlobal() {
    try {
        const resGlobal = await fetch(`${urlServer}/api/content/item/configuracion`, { headers: { 'api-key': apiKey } });
        const global = await resGlobal.json();

        if (global) {
            if (global.logo_header && document.getElementById('dyn-logo-header')) document.getElementById('dyn-logo-header').src = urlServer + (global.logo_header.url || `/storage/uploads${global.logo_header.path}`);
            if (global.logo_footer && document.getElementById('dyn-logo-footer')) document.getElementById('dyn-logo-footer').src = urlServer + (global.logo_footer.url || `/storage/uploads${global.logo_footer.path}`);
            if (global.texto_copyright && document.getElementById('dyn-copyright')) document.getElementById('dyn-copyright').innerHTML = global.texto_copyright;
            if (global.direccion && document.getElementById('dyn-direccion')) document.getElementById('dyn-direccion').innerHTML = global.direccion;
            if (global.telefonos && document.getElementById('dyn-telefonos')) document.getElementById('dyn-telefonos').innerHTML = global.telefonos;
            if (global.correos && document.getElementById('dyn-correos')) document.getElementById('dyn-correos').innerHTML = global.correos;
            if (global.facebook && document.getElementById('dyn-fb')) document.getElementById('dyn-fb').href = global.facebook;
            if (global.linkedin && document.getElementById('dyn-in')) document.getElementById('dyn-in').href = global.linkedin;
            if (global.instagram && document.getElementById('dyn-ig')) document.getElementById('dyn-ig').href = global.instagram;
            if (global.whatsapp && document.getElementById('dyn-whatsapp')) document.getElementById('dyn-whatsapp').href = `https://wa.me/${global.whatsapp}?text=Hola,%20me%20interesa%20cotizar%20un%20servicio.`;
        }
    } catch (error) { console.error('Error cargando la configuración global:', error); }
}

// -----------------------------------------
// 1. PÁGINA INICIO
// -----------------------------------------
async function cargarPaginaInicio() {
    try {
        const [resInicio, resNoticias] = await Promise.all([
            fetch(`${urlServer}/api/content/item/paginainicio`, { headers: { 'api-key': apiKey } }),
            fetch(`${urlServer}/api/content/items/noticias?sort={"_created":-1}&limit=3`, { headers: { 'api-key': apiKey } })
        ]);

        const p = await resInicio.json();
        const dataNoticias = await resNoticias.json();
        const noticias = Array.isArray(dataNoticias) ? dataNoticias : (dataNoticias.items || []);

        if (p) {
            if(p.slide1_titulo) document.getElementById('dyn-s1-tit').innerHTML = p.slide1_titulo;
            if(p.slide1_subtitulo) document.getElementById('dyn-s1-sub').innerText = p.slide1_subtitulo;
            if(p.slide1_img) document.getElementById('dyn-s1-img').src = urlServer + (p.slide1_img.url || `/storage/uploads${p.slide1_img.path}`);
            
            if(p.slide2_titulo) document.getElementById('dyn-s2-tit').innerHTML = p.slide2_titulo;
            if(p.slide2_subtitulo) document.getElementById('dyn-s2-sub').innerText = p.slide2_subtitulo;
            if(p.slide2_img) document.getElementById('dyn-s2-img').src = urlServer + (p.slide2_img.url || `/storage/uploads${p.slide2_img.path}`);
            
            if(p.slide3_titulo) document.getElementById('dyn-s3-tit').innerHTML = p.slide3_titulo;
            if(p.slide3_subtitulo) document.getElementById('dyn-s3-sub').innerText = p.slide3_subtitulo;
            if(p.slide3_img) document.getElementById('dyn-s3-img').src = urlServer + (p.slide3_img.url || `/storage/uploads${p.slide3_img.path}`);

            if(p.info_horario_tit) document.getElementById('dyn-info-h-tit').innerText = p.info_horario_tit;
            if(p.info_horario_txt) document.getElementById('dyn-info-h-txt').innerHTML = p.info_horario_txt;
            if(p.info_ubi_tit) document.getElementById('dyn-info-u-tit').innerText = p.info_ubi_tit;
            if(p.info_ubi_txt) document.getElementById('dyn-info-u-txt').innerHTML = p.info_ubi_txt;
            if(p.info_tel_tit) document.getElementById('dyn-info-t-tit').innerText = p.info_tel_tit;
            if(p.info_tel_txt) document.getElementById('dyn-info-t-txt').innerHTML = p.info_tel_txt;
            if(p.info_mail_tit) document.getElementById('dyn-info-m-tit').innerText = p.info_mail_tit;
            if(p.info_mail_txt) document.getElementById('dyn-info-m-txt').innerHTML = p.info_mail_txt;

            if(p.sec1_subtitulo) document.getElementById('dyn-sec1-sub').innerText = p.sec1_subtitulo;
            if(p.sec1_titulo) document.getElementById('dyn-sec1-tit').innerText = p.sec1_titulo;
            if(p.sec1_desc) document.getElementById('dyn-sec1-desc').innerHTML = p.sec1_desc;
            
            if(p.sec1_box1_tit) document.getElementById('dyn-box1-tit').innerText = p.sec1_box1_tit;
            if(p.sec1_box1_txt) document.getElementById('dyn-box1-txt').innerText = p.sec1_box1_txt;
            if(p.sec1_box2_tit) document.getElementById('dyn-box2-tit').innerText = p.sec1_box2_tit;
            if(p.sec1_box2_txt) document.getElementById('dyn-box2-txt').innerText = p.sec1_box2_txt;
            if(p.sec1_box3_tit) document.getElementById('dyn-box3-tit').innerText = p.sec1_box3_tit;
            if(p.sec1_box3_txt) document.getElementById('dyn-box3-txt').innerText = p.sec1_box3_txt;
            if(p.sec1_imagen) document.getElementById('dyn-sec1-img').src = urlServer + (p.sec1_imagen.url || `/storage/uploads${p.sec1_imagen.path}`);

            if(p.soluciones_titulo) document.getElementById('dyn-sol-tit').innerText = p.soluciones_titulo;
            
            if(p.sol1_tit) document.getElementById('dyn-sol1-tit').innerText = p.sol1_tit;
            if(p.sol1_txt) document.getElementById('dyn-sol1-txt').innerText = p.sol1_txt;
            if(p.sol1_img) document.getElementById('dyn-sol1-img').src = urlServer + (p.sol1_img.url || `/storage/uploads${p.sol1_img.path}`);

            if(p.sol2_tit) document.getElementById('dyn-sol2-tit').innerText = p.sol2_tit;
            if(p.sol2_txt) document.getElementById('dyn-sol2-txt').innerText = p.sol2_txt;
            if(p.sol2_img) document.getElementById('dyn-sol2-img').src = urlServer + (p.sol2_img.url || `/storage/uploads${p.sol2_img.path}`);

            if(p.sol3_tit) document.getElementById('dyn-sol3-tit').innerText = p.sol3_tit;
            if(p.sol3_txt) document.getElementById('dyn-sol3-txt').innerText = p.sol3_txt;
            if(p.sol3_img) document.getElementById('dyn-sol3-img').src = urlServer + (p.sol3_img.url || `/storage/uploads${p.sol3_img.path}`);

            if(p.sol4_tit) document.getElementById('dyn-sol4-tit').innerText = p.sol4_tit;
            if(p.sol4_txt) document.getElementById('dyn-sol4-txt').innerText = p.sol4_txt;
            if(p.sol4_img) document.getElementById('dyn-sol4-img').src = urlServer + (p.sol4_img.url || `/storage/uploads${p.sol4_img.path}`);
            
            if(p.talento_subtitulo) document.getElementById('dyn-tal-sub').innerText = p.talento_subtitulo;
            if(p.talento_titulo) document.getElementById('dyn-tal-tit').innerText = p.talento_titulo;
            if(p.talento_desc) document.getElementById('dyn-tal-desc').innerText = p.talento_desc;
            if(p.talento_boton) document.getElementById('dyn-tal-btn').innerText = p.talento_boton;

            if(p.actualidad_titulo) document.getElementById('dyn-act-tit').innerText = p.actualidad_titulo;

            if(p.test_titulo) document.getElementById('dyn-test-tit').innerText = p.test_titulo;
            if(p.test_subtitulo) document.getElementById('dyn-test-sub').innerText = p.test_subtitulo;
            
            if(p.test1_txt) document.getElementById('dyn-t1-txt').innerText = p.test1_txt;
            if(p.test1_autor) document.getElementById('dyn-t1-aut').innerText = p.test1_autor;
            if(p.test1_cargo) document.getElementById('dyn-t1-car').innerText = p.test1_cargo;
            if(p.test1_empresa) document.getElementById('dyn-t1-emp').innerText = p.test1_empresa;
            
            if(p.test2_txt) document.getElementById('dyn-t2-txt').innerText = p.test2_txt;
            if(p.test2_autor) document.getElementById('dyn-t2-aut').innerText = p.test2_autor;
            if(p.test2_cargo) document.getElementById('dyn-t2-car').innerText = p.test2_cargo;
            if(p.test2_empresa) document.getElementById('dyn-t2-emp').innerText = p.test2_empresa;

            if(p.test3_txt) document.getElementById('dyn-t3-txt').innerText = p.test3_txt;
            if(p.test3_autor) document.getElementById('dyn-t3-aut').innerText = p.test3_autor;
            if(p.test3_cargo) document.getElementById('dyn-t3-car').innerText = p.test3_cargo;
            if(p.test3_empresa) document.getElementById('dyn-t3-emp').innerText = p.test3_empresa;

            if(p.contacto_titulo) document.getElementById('dyn-con-tit').innerText = p.contacto_titulo;
            if(p.contacto_subtitulo) document.getElementById('dyn-con-sub').innerText = p.contacto_subtitulo;
            if(p.contacto_boton) document.getElementById('btn-index-enviar').innerText = p.contacto_boton;
            if(p.contacto_gran_texto_1) document.getElementById('dyn-con-g1').innerHTML = p.contacto_gran_texto_1;
            if(p.contacto_gran_texto_2) document.getElementById('dyn-con-g2').innerText = p.contacto_gran_texto_2;
        }

        const contenedorNoticiasHome = document.getElementById('home-noticias-container');
        if(contenedorNoticiasHome) {
            contenedorNoticiasHome.innerHTML = '';
            noticias.forEach(noticia => {
                let urlFoto = "upload/info/logo.png";
                if (noticia.imagen) urlFoto = urlServer + (noticia.imagen.url || `/storage/uploads${noticia.imagen.path}`);
                contenedorNoticiasHome.innerHTML += `
                    <div class="col-md-6 col-lg-4">
                        <div class="card service-card h-100">
                            <div class="position-relative">
                                <div class="img-container">
                                    <img src="${urlFoto}" alt="${noticia.titulo}">
                                </div>
                                <span class="position-absolute news-date rounded">${noticia.fecha || ''}</span>
                            </div>
                            <div class="card-body">
                                <h6 class="news-title fw-bold"><a href="blog.html" class="text-decoration-none text-uppercase">${noticia.titulo}</a></h6>
                                <p class="card-text small text-muted mt-2">${noticia.resumen || ''}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    } catch (error) { console.error('Error cargando Inicio:', error); }
}

// -----------------------------------------
// 2. PÁGINA NOSOTROS
// -----------------------------------------
async function cargarPaginaNosotros() {
    try {
        const res = await fetch(`${urlServer}/api/content/item/paginanosotros`, { headers: { 'api-key': apiKey } });
        const p = await res.json();

        if (p) {
            if(p.titulo_cabecera) document.getElementById('pageTitle').innerText = p.titulo_cabecera;
            if(p.trayectoria_subtitulo) document.getElementById('dyn-tray-sub').innerText = p.trayectoria_subtitulo;
            if(p.trayectoria_titulo) document.getElementById('dyn-tray-tit').innerHTML = p.trayectoria_titulo;
            if(p.trayectoria_p1) document.getElementById('dyn-tray-p1').innerHTML = p.trayectoria_p1;
            if(p.trayectoria_p2) document.getElementById('dyn-tray-p2').innerHTML = p.trayectoria_p2;
            if(p.stat_1_num) document.getElementById('dyn-stat1-num').innerText = p.stat_1_num;
            if(p.stat_1_texto) document.getElementById('dyn-stat1-txt').innerText = p.stat_1_texto;
            if(p.stat_2_num) document.getElementById('dyn-stat2-num').innerText = p.stat_2_num;
            if(p.stat_2_texto) document.getElementById('dyn-stat2-txt').innerText = p.stat_2_texto;
            if(p.trayectoria_img) document.getElementById('dyn-tray-img').src = urlServer + (p.trayectoria_img.url || `/storage/uploads${p.trayectoria_img.path}`);
            if(p.identidad_titulo) document.getElementById('dyn-ide-tit').innerText = p.identidad_titulo;
            if(p.mision_titulo) document.getElementById('dyn-mis-tit').innerText = p.mision_titulo;
            if(p.mision_texto) document.getElementById('dyn-mis-txt').innerText = p.mision_texto;
            if(p.vision_titulo) document.getElementById('dyn-vis-tit').innerText = p.vision_titulo;
            if(p.vision_texto) document.getElementById('dyn-vis-txt').innerText = p.vision_texto;
            if(p.valores_subtitulo) document.getElementById('dyn-val-sub').innerText = p.valores_subtitulo;
            if(p.valores_titulo) document.getElementById('dyn-val-tit').innerHTML = p.valores_titulo;
            if(p.valores_lead) document.getElementById('dyn-val-lead').innerText = p.valores_lead;
            if(p.valores_img) document.getElementById('dyn-val-img').src = urlServer + (p.valores_img.url || `/storage/uploads${p.valores_img.path}`);
            
            for(let i=1; i<=5; i++) {
                if(p[`val${i}_tit`]) document.getElementById(`dyn-v${i}-tit`).innerText = p[`val${i}_tit`];
                if(p[`val${i}_txt`]) document.getElementById(`dyn-v${i}-txt`).innerText = p[`val${i}_txt`];
            }
        }
    } catch (error) { console.error('Error cargando Nosotros:', error); }
}

// -----------------------------------------
// 3. PÁGINA SERVICIOS
// -----------------------------------------
async function cargarPaginaServicios() {
    try {
        const [resServicios, resPagina] = await Promise.all([
            fetch(`${urlServer}/api/content/items/servicios?limit=130`, { headers: { 'api-key': apiKey } }),
            fetch(`${urlServer}/api/content/item/paginaservicios`, { headers: { 'api-key': apiKey } })
        ]);

        const dataServicios = await resServicios.json();
        const pagina = await resPagina.json();

        if (pagina) {
            if (pagina.titulo_cabecera && document.getElementById('pageTitle')) document.getElementById('pageTitle').innerText = pagina.titulo_cabecera;
            if (pagina.subtitulo_seccion && document.getElementById('dyn-subtitulo')) document.getElementById('dyn-subtitulo').innerText = pagina.subtitulo_seccion;
            if (pagina.titulo_principal && document.getElementById('dyn-titulo-principal')) document.getElementById('dyn-titulo-principal').innerText = pagina.titulo_principal;
            if (pagina.descripcion_texto && document.getElementById('dyn-descripcion')) document.getElementById('dyn-descripcion').innerHTML = pagina.descripcion_texto;
        }

        const servicios = Array.isArray(dataServicios) ? dataServicios : (dataServicios.items || []);
        const rowCarpinteria = document.querySelector('#pills-carpinteria .row');
        const rowGenerales = document.querySelector('#pills-generales .row');
        const rowIngenieria = document.querySelector('#pills-ingenieria .row');
        const rowRemodelaciones = document.querySelector('#pills-remodelaciones .row');

        servicios.forEach(servicio => {
            let urlFoto = "upload/info/logo.png";
            if (servicio.foto) urlFoto = urlServer + (servicio.foto.url || `/storage/uploads${servicio.foto.path}`);

            const tarjetaHTML = `
                <div class="col-md-6 col-lg-4">
                    <div class="card service-card">
                        <img src="${urlFoto}" class="card-img-bg" alt="${servicio.titulo}">
                        <div class="card-content">
                            <h5 class="card-title">${servicio.titulo}</h5>
                            <div class="card-hidden-info">
                                <p class="card-text">${servicio.descripcion}</p>
                                <a href="contacto.html" class="btn-service-outline">${servicio.texto_boton} <i class="fas fa-arrow-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>`;

            if (servicio.categoria === 'Carpintería y Mobiliario' && rowCarpinteria) rowCarpinteria.innerHTML += tarjetaHTML;
            else if (servicio.categoria === 'Servicios Generales' && rowGenerales) rowGenerales.innerHTML += tarjetaHTML;
            else if (servicio.categoria === 'Ingeniería y Construcción' && rowIngenieria) rowIngenieria.innerHTML += tarjetaHTML;
            else if (servicio.categoria === 'Diseño y Proyectos' && rowRemodelaciones) rowRemodelaciones.innerHTML += tarjetaHTML;
        });
    } catch (error) { console.error('Error cargando Servicios:', error); }
}

// -----------------------------------------
// 4. PÁGINA PROYECTOS
// -----------------------------------------
async function cargarPaginaProyectos() {
    try {
        const [resPagina, resProyectos] = await Promise.all([
            fetch(`${urlServer}/api/content/item/paginaproyectos`, { headers: { 'api-key': apiKey } }),
            fetch(`${urlServer}/api/content/items/listaproyectos?sort={"_created":1}`, { headers: { 'api-key': apiKey } })
        ]);

        const p = await resPagina.json();
        const dataProyectos = await resProyectos.json();
        const proyectos = Array.isArray(dataProyectos) ? dataProyectos : (dataProyectos.items || []);

        if (p) {
            if(p.titulo_cabecera) {
                document.getElementById('pageTitle').innerText = p.titulo_cabecera;
                document.getElementById('pageTitle').style.visibility = 'visible';
                if(document.getElementById('pageBreadcrumb')) document.getElementById('pageBreadcrumb').style.visibility = 'visible';
            }
            if(p.intro_subtitulo) document.getElementById('dyn-proy-sub').innerText = p.intro_subtitulo;
            if(p.intro_titulo) document.getElementById('dyn-proy-tit').innerText = p.intro_titulo;
            if(p.intro_descripcion) document.getElementById('dyn-proy-desc').innerText = p.intro_descripcion;
        }

        const contenedorTarjetas = document.getElementById('proyectos-cards-container');
        const contenedorModales = document.getElementById('proyectos-modals-container');
        contenedorTarjetas.innerHTML = ''; contenedorModales.innerHTML = '';

        proyectos.forEach((proy, index) => {
            let urlPortada = "upload/info/logo.png";
            if (proy.portada) urlPortada = urlServer + (proy.portada.url || `/storage/uploads${proy.portada.path}`);

            contenedorTarjetas.innerHTML += `
                <div class="col-md-6 col-lg-4 animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.1}s;">
                    <div class="project-card" data-bs-toggle="modal" data-bs-target="#modalProj-${proy._id}">
                        <div class="project-img-wrapper"><img src="${urlPortada}" alt="${proy.titulo}">
                            <div class="project-overlay"><span class="btn btn-cotizar btn-sm"><i class="fas fa-expand-arrows-alt me-1"></i> VER PROYECTO</span></div>
                        </div>
                        <div class="card-body text-center">
                            <span class="project-category">${proy.categoria || ''}</span>
                            <h5 class="project-title">${proy.titulo}</h5>
                        </div>
                    </div>
                </div>`;

            let fotosArray = proy.galeria || [];
            let itemsCarrusel = '';
            if (fotosArray.length > 0) {
                fotosArray.forEach((fotoMeta, i) => {
                    let fotoUrl = urlServer + (fotoMeta.url || `/storage/uploads${fotoMeta.path}`);
                    let activo = i === 0 ? 'active' : '';
                    itemsCarrusel += `<div class="carousel-item ${activo}"><img src="${fotoUrl}" alt="Img ${i+1}"></div>`;
                });
            } else { itemsCarrusel = `<div class="carousel-item active"><img src="${urlPortada}" alt="Portada"></div>`; }

            contenedorModales.innerHTML += `
                <div class="modal fade premium-modal" id="modalProj-${proy._id}" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header"><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
                            <div class="modal-body p-0">
                                <div class="row g-0">
                                    <div class="col-lg-8">
                                        <div id="carousel-${proy._id}" class="carousel slide premium-carousel premium-carousel-controls" data-bs-ride="carousel">
                                            <div class="carousel-inner">${itemsCarrusel}</div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${proy._id}" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span></button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carousel-${proy._id}" data-bs-slide="next"><span class="carousel-control-next-icon"></span></button>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="premium-modal-info">
                                            <div class="premium-client"><i class="fas ${proy.icono_cliente || 'fa-building'}"></i> ${proy.cliente || ''}</div>
                                            <h3 class="premium-title">${proy.titulo}</h3>
                                            <p class="premium-desc">${proy.descripcion || ''}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    } catch (error) { console.error('Error cargando Proyectos:', error); }
}

// -----------------------------------------
// 5. PÁGINA GALERÍA
// -----------------------------------------
async function cargarPaginaGaleria() {
    try {
        const [resPagina, resAlbumes] = await Promise.all([
            fetch(`${urlServer}/api/content/item/paginagaleria`, { headers: { 'api-key': apiKey } }),
            fetch(`${urlServer}/api/content/items/albumesgaleria?sort={"_created":-1}`, { headers: { 'api-key': apiKey } })
        ]);

        const p = await resPagina.json();
        const dataAlbumes = await resAlbumes.json();
        const albumes = Array.isArray(dataAlbumes) ? dataAlbumes : (dataAlbumes.items || []);

        if (p) {
            if(p.titulo_cabecera) {
                document.getElementById('pageTitle').innerText = p.titulo_cabecera;
                document.getElementById('pageTitle').style.visibility = 'visible';
                if(document.getElementById('pageBreadcrumb')) document.getElementById('pageBreadcrumb').style.visibility = 'visible';
            }
            if(p.intro_subtitulo) document.getElementById('dyn-gal-sub').innerText = p.intro_subtitulo;
            if(p.intro_titulo) document.getElementById('dyn-gal-tit').innerText = p.intro_titulo;
            if(p.intro_descripcion) document.getElementById('dyn-gal-desc').innerText = p.intro_descripcion;
        }

        const contenedorTarjetas = document.getElementById('galeria-cards-container');
        const contenedorModales = document.getElementById('galeria-modals-container');
        contenedorTarjetas.innerHTML = ''; contenedorModales.innerHTML = '';

        albumes.forEach((album, index) => {
            let urlPortada = "upload/info/logo.png";
            if (album.portada) urlPortada = urlServer + (album.portada.url || `/storage/uploads${album.portada.path}`);

            contenedorTarjetas.innerHTML += `
                <div class="col-md-6 col-lg-4">
                    <div class="card service-card h-100">
                        <div class="img-container">
                            <span class="gallery-date">${album.fecha || ''}</span>
                            <img src="${urlPortada}" alt="${album.titulo}">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${album.titulo}</h5>
                            <p class="card-text small text-muted mt-2">${album.descripcion || ''}</p>
                            <a href="#" class="btn-link-custom" data-bs-toggle="modal" data-bs-target="#modalAlbum-${album._id}">Ver Álbum <i class="fas fa-camera ms-2"></i></a>
                        </div>
                    </div>
                </div>`;

            let indicadores = ''; let itemsCarrusel = '';
            let fotosArray = album.fotos || [];
            if (fotosArray.length > 0) {
                fotosArray.forEach((fotoMeta, i) => {
                    let fotoUrl = urlServer + (fotoMeta.url || `/storage/uploads${fotoMeta.path}`);
                    let activo = i === 0 ? 'active' : '';
                    indicadores += `<button type="button" data-bs-target="#carousel-${album._id}" data-bs-slide-to="${i}" class="${activo}"></button>`;
                    itemsCarrusel += `<div class="carousel-item ${activo}"><img src="${fotoUrl}" class="d-block carousel-album-img" alt="Foto ${i+1}"></div>`;
                });
            } else { itemsCarrusel = `<div class="carousel-item active"><img src="${urlPortada}" class="d-block carousel-album-img" alt="Sin fotos"></div>`; }

            contenedorModales.innerHTML += `
                <div class="modal fade" id="modalAlbum-${album._id}" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg"> 
                        <div class="modal-content">
                            <div class="modal-header border-0"><h5 class="modal-title fw-bold text-dark">Galería: ${album.titulo}</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
                            <div class="modal-body p-0">
                                <div id="carousel-${album._id}" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">${indicadores}</div>
                                    <div class="carousel-inner">${itemsCarrusel}</div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${album._id}" data-bs-slide="prev"><span class="carousel-control-prev-icon" style="background-color: rgba(0,0,0,0.5); border-radius: 50%;"></span></button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-${album._id}" data-bs-slide="next"><span class="carousel-control-next-icon" style="background-color: rgba(0,0,0,0.5); border-radius: 50%;"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    } catch (error) { console.error('Error cargando Galería:', error); }
}

// -----------------------------------------
// 6. PÁGINA CLIENTES
// -----------------------------------------
async function cargarPaginaClientes() {
    try {
        const [resPagina, resClientes] = await Promise.all([
            fetch(`${urlServer}/api/content/item/paginaclientes`, { headers: { 'api-key': apiKey } }),
            fetch(`${urlServer}/api/content/items/listaclientes?limit=100`, { headers: { 'api-key': apiKey } })
        ]);

        const p = await resPagina.json();
        const dataClientes = await resClientes.json();
        const clientes = Array.isArray(dataClientes) ? dataClientes : (dataClientes.items || []);

        if (p) {
            if(p.titulo_cabecera) {
                document.getElementById('pageTitle').innerText = p.titulo_cabecera;
                document.getElementById('pageTitle').style.visibility = 'visible';
                if(document.getElementById('pageBreadcrumb')) document.getElementById('pageBreadcrumb').style.visibility = 'visible';
            }
            if(p.intro_subtitulo) document.getElementById('dyn-cli-sub').innerText = p.intro_subtitulo;
            if(p.intro_titulo) document.getElementById('dyn-cli-tit').innerText = p.intro_titulo;
            if(p.intro_descripcion) document.getElementById('dyn-cli-desc').innerText = p.intro_descripcion;
        }

        const contenedorListas = document.getElementById('clientes-list-container');
        contenedorListas.innerHTML = '';
        const categoriasUnicas = [...new Set(clientes.map(item => item.categoria))];

        categoriasUnicas.forEach(categoria => {
            const clientesDeCategoria = clientes.filter(c => c.categoria === categoria);
            let tarjetasHTML = '';
            clientesDeCategoria.forEach(cliente => {
                let urlLogo = "upload/info/logo.png";
                if (cliente.logo) urlLogo = urlServer + (cliente.logo.url || `/storage/uploads${cliente.logo.path}`);
                tarjetasHTML += `<div class="col animate__animated animate__zoomIn"><div class="client-card"><img src="${urlLogo}" alt="${cliente.nombre}"></div></div>`;
            });

            contenedorListas.innerHTML += `
                <div class="row mb-4 mt-5"><div class="col-12"><h3 class="sector-title">${categoria}</h3></div></div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">${tarjetasHTML}</div>`;
        });
    } catch (error) { console.error('Error cargando Clientes:', error); }
}

// -----------------------------------------
// 7. PÁGINA BLOG
// -----------------------------------------
async function cargarPaginaBlog() {
    try {
        const [resPagina, resNoticias] = await Promise.all([
            fetch(`${urlServer}/api/content/item/paginablog`, { headers: { 'api-key': apiKey } }),
            fetch(`${urlServer}/api/content/items/noticias?sort={"_created":-1}`, { headers: { 'api-key': apiKey } })
        ]);

        const p = await resPagina.json();
        const dataNoticias = await resNoticias.json();
        const noticias = Array.isArray(dataNoticias) ? dataNoticias : (dataNoticias.items || []);

        if (p) {
            if(p.titulo_cabecera) document.getElementById('pageTitle').innerText = p.titulo_cabecera;
            if(p.intro_subtitulo) document.getElementById('dyn-blog-sub').innerText = p.intro_subtitulo;
            if(p.intro_titulo) document.getElementById('dyn-blog-tit').innerText = p.intro_titulo;
            if(p.intro_descripcion) document.getElementById('dyn-blog-desc').innerText = p.intro_descripcion;
        }

        const contenedorTarjetas = document.getElementById('blog-cards-container');
        const contenedorModales = document.getElementById('blog-modals-container');
        contenedorTarjetas.innerHTML = ''; contenedorModales.innerHTML = '';

        noticias.forEach((noticia, index) => {
            let urlFoto = "upload/info/logo.png";
            if (noticia.imagen) urlFoto = urlServer + (noticia.imagen.url || `/storage/uploads${noticia.imagen.path}`);
        
            // --- NUEVA LÓGICA PARA LA ORIENTACIÓN ---
            // Si en Cockpit el campo 'orientacion' es 'vertical', aplicamos contain y fondo gris
            const estiloImg = noticia.orientacion === 'vertical' 
                ? 'style="object-fit: contain; background-color: #f8f9fa; height: 400px;"' 
                : 'style="object-fit: cover;"';
            // ----------------------------------------
        
            contenedorTarjetas.innerHTML += `
                <div class="col-md-6 col-lg-4">
                    <div class="card service-card h-100">
                        <div class="img-container"><span class="news-date-badge">${noticia.fecha || ''}</span><img src="${urlFoto}" alt="${noticia.titulo}"></div>
                        <div class="card-body">
                            <h5 class="card-title">${noticia.titulo}</h5><p class="card-text">${noticia.resumen || ''}</p>
                            <button class="btn btn-read-more border-0 bg-transparent p-0 fw-bold" style="color: var(--accent-color);" data-bs-toggle="modal" data-bs-target="#modal-${noticia._id}">Leer Más <i class="fas fa-arrow-right ms-2"></i></button>
                        </div>
                    </div>
                </div>`;
        
            contenedorModales.innerHTML += `
                <div class="modal fade" id="modal-${noticia._id}" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0 p-0 position-relative">
                                <!-- Usamos la variable estiloImg aquí -->
                                <img src="${urlFoto}" class="modal-top-img" ${estiloImg} alt="${noticia.titulo}">
                                <button type="button" class="btn-close position-absolute top-0 end-0 m-3 bg-white p-2 rounded-circle opacity-100 shadow-sm" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body p-4 p-lg-5">
                                <span class="badge bg-warning text-dark mb-3">${noticia.fecha || ''}</span>
                                <h2 class="modal-title-custom">${noticia.titulo}</h2>
                                <div class="modal-text-giant text-muted">${noticia.contenido || ''}</div>
                            </div>
                            <div class="modal-footer border-0 px-4 px-lg-5 pb-4 justify-content-start"><button type="button" class="btn btn-cotizar px-4 py-2 rounded-pill fw-bold" data-bs-dismiss="modal">Cerrar Artículo</button></div>
                        </div>
                    </div>
                </div>`;
        });

    } catch (error) { console.error('Error cargando Blog:', error); }
}

// -----------------------------------------
// 8. PÁGINA CONTACTO
// -----------------------------------------
async function cargarPaginaContacto() {
    try {
        const res = await fetch(`${urlServer}/api/content/item/paginacontacto`, { headers: { 'api-key': apiKey } });
        const p = await res.json();

        if (p) {
            if(p.titulo_cabecera) document.getElementById('pageTitle').innerText = p.titulo_cabecera;
            if(p.tarjeta_ubicacion) document.getElementById('dyn-tarjeta-ubi').innerHTML = p.tarjeta_ubicacion;
            if(p.tarjeta_telefonos) document.getElementById('dyn-tarjeta-tel').innerHTML = p.tarjeta_telefonos;
            if(p.tarjeta_correos) document.getElementById('dyn-tarjeta-cor').innerHTML = p.tarjeta_correos;
            if(p.faq_subtitulo) document.getElementById('dyn-faq-sub').innerText = p.faq_subtitulo;
            if(p.faq_titulo) document.getElementById('dyn-faq-tit').innerText = p.faq_titulo;
            
            for(let i=1; i<=3; i++){
                if(p[`faq_${i}_p`]) document.getElementById(`dyn-faq${i}-p`).innerText = p[`faq_${i}_p`];
                if(p[`faq_${i}_r`]) document.getElementById(`dyn-faq${i}-r`).innerText = p[`faq_${i}_r`];
            }
            if(p.faq_imagen) document.getElementById('dyn-faq-img').src = urlServer + (p.faq_imagen.url || `/storage/uploads${p.faq_imagen.path}`);
            if(p.form_titulo) document.getElementById('dyn-form-tit').innerText = p.form_titulo;
            if(p.form_subtitulo) document.getElementById('dyn-form-sub').innerText = p.form_subtitulo;
            if(p.mapa_titulo) document.getElementById('dyn-mapa-tit').innerHTML = `<i class="fas fa-map-marked-alt text-warning"></i> ${p.mapa_titulo}`;
            
            const btn1 = document.getElementById('dyn-mapa-btn1');
            const btn2 = document.getElementById('dyn-mapa-btn2');
            const iframeMapa = document.getElementById('mapa-frame');

            if(p.mapa_btn_1) btn1.innerText = p.mapa_btn_1;
            if(p.mapa_btn_2) btn2.innerText = p.mapa_btn_2;
            if(p.mapa_url_1) iframeMapa.src = p.mapa_url_1;

            btn1.addEventListener('click', () => {
                if(p.mapa_url_1) iframeMapa.src = p.mapa_url_1;
                btn1.classList.replace('btn-outline-secondary', 'btn-cotizar');
                btn2.classList.replace('btn-cotizar', 'btn-outline-secondary');
            });
            btn2.addEventListener('click', () => {
                if(p.mapa_url_2) iframeMapa.src = p.mapa_url_2;
                btn2.classList.replace('btn-outline-secondary', 'btn-cotizar');
                btn1.classList.replace('btn-cotizar', 'btn-outline-secondary');
            });
        }
    } catch (error) { console.error('Error cargando Contacto:', error); }
}

// -----------------------------------------
// 9. PÁGINA ÚNETE
// -----------------------------------------
async function cargarPaginaUnete() {
    try {
        const res = await fetch(`${urlServer}/api/content/item/paginaunete`, { headers: { 'api-key': apiKey } });
        const p = await res.json();

        if (p) {
            if(p.titulo_cabecera) document.getElementById('pageTitle').innerText = p.titulo_cabecera;
            if(p.intro_subtitulo) document.getElementById('dyn-unete-sub').innerText = p.intro_subtitulo;
            if(p.intro_titulo) document.getElementById('dyn-unete-tit').innerText = p.intro_titulo;
            if(p.intro_p1) document.getElementById('dyn-unete-p1').innerHTML = p.intro_p1;
            if(p.intro_p2) document.getElementById('dyn-unete-p2').innerHTML = p.intro_p2;
            
            for(let i=1; i<=4; i++) {
                if(p[`beneficio_${i}_tit`]) document.getElementById(`dyn-b${i}-tit`).innerText = p[`beneficio_${i}_tit`];
                if(p[`beneficio_${i}_txt`]) document.getElementById(`dyn-b${i}-txt`).innerText = p[`beneficio_${i}_txt`];
            }
            if(p.cv_titulo) document.getElementById('dyn-cv-tit').innerText = p.cv_titulo;
            if(p.cv_texto) document.getElementById('dyn-cv-txt').innerText = p.cv_texto;
            if(p.cv_email) {
                document.getElementById('dyn-cv-email').innerHTML = `<i class="fas fa-at me-2"></i> ${p.cv_email}`;
                document.getElementById('dyn-cv-btn').href = `mailto:${p.cv_email}?subject=Postulación%20Laboral%20-%20Soluciones%20y%20Acabados`;
            }
            if(p.cv_boton) document.getElementById('dyn-cv-btn-txt').innerText = p.cv_boton;
            if(p.cv_legal) document.getElementById('dyn-cv-legal').innerText = p.cv_legal;
        }
    } catch (error) { console.error('Error cargando Únete:', error); }
}

// =================================================================
// EL "CEREBRO" ROUTER: DETECTA EN QUÉ PÁGINA ESTAMOS Y EJECUTA TODO
// =================================================================
document.addEventListener('DOMContentLoaded', async () => {
    
    // 1. PRIMERO: Siempre cargar la configuración global (Header, Footer, Redes)
    await cargarConfiguracionGlobal();

    // 2. LUEGO: Cargar el contenido específico de la página actual
    if (document.getElementById('heroSlider')) {
        await cargarPaginaInicio();
    }
    else if (document.getElementById('dyn-tray-sub')) {
        await cargarPaginaNosotros();
    }
    else if (document.getElementById('pills-carpinteria')) {
        await cargarPaginaServicios();
    }
    else if (document.getElementById('proyectos-cards-container')) {
        await cargarPaginaProyectos();
    }
    else if (document.getElementById('galeria-cards-container')) {
        await cargarPaginaGaleria();
    }
    else if (document.getElementById('clientes-list-container')) {
        await cargarPaginaClientes();
    }
    else if (document.getElementById('blog-cards-container')) {
        await cargarPaginaBlog();
    }
    else if (document.getElementById('dyn-tarjeta-ubi')) {
        await cargarPaginaContacto();
    }
    else if (document.getElementById('dyn-unete-sub')) {
        await cargarPaginaUnete();
    }
    
    // 3. FINALMENTE: Cuando todos los datos estén descargados y listos en pantalla, 
    // llamamos a la función de tu main.js para quitar el preloader con estilo.
    if (typeof ocultarPreloader === 'function') {
        ocultarPreloader();
    }
});