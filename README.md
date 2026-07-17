<div align="center">

# 🏪 SA Integral S.A.C.
### Sistema de Gestión de Ventas e Inventario

Sistema web desarrollado para optimizar la administración de ventas, productos e inventario mediante **Cockpit CMS**, utilizando **PHP, SQLite, Docker y tecnologías web**.

![HTML](https://img.shields.io/badge/Frontend-HTML5-orange?logo=html5)
![CSS](https://img.shields.io/badge/CSS3-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript)
![PHP](https://img.shields.io/badge/Cockpit%20CMS-PHP-777BB4?logo=php)
![SQLite](https://img.shields.io/badge/Database-SQLite-003B57?logo=sqlite)
![Docker](https://img.shields.io/badge/Container-Docker-2496ED?logo=docker)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

# 📖 Descripción

**SA Integral S.A.C.** es un sistema web diseñado para optimizar la gestión administrativa de pequeñas y medianas bodegas.

Permite administrar productos, inventario y ventas mediante una interfaz intuitiva construida sobre **Cockpit CMS**, facilitando el control de la información, reduciendo procesos manuales y mejorando la organización operativa.

Este proyecto fue desarrollado con fines académicos como aplicación práctica de metodologías de análisis y diseño de sistemas.

---

# ✨ Características

- 📦 Gestión de productos
- 📊 Control de inventario
- 💰 Registro de ventas
- 🔍 Consulta de información
- ⚡ Interfaz web ligera e intuitiva
- 🗄️ Base de datos SQLite
- 🐳 Despliegue mediante Docker
- ☁️ Compatible con Render

---

# 🛠 Tecnologías

| Tecnología | Descripción |
|------------|-------------|
| HTML5 | Estructura de la interfaz |
| CSS3 | Diseño y estilos |
| JavaScript | Funcionalidad del cliente |
| PHP | Backend del sistema |
| Cockpit CMS | Gestión del contenido |
| SQLite | Base de datos |
| Docker | Contenerización y despliegue |

---

# 📂 Estructura del Proyecto

```text
admin/
│
├── assets/             # Recursos estáticos
├── config/             # Configuración del sistema
├── modules/            # Módulos de Cockpit CMS
├── storage/            # Base de datos y archivos persistentes
│
├── Dockerfile
├── .htaccess
├── .gitignore
├── CHANGELOG.md
├── LICENSE
└── SECURITY.md
```

---

# 🚀 Instalación

### Clonar el repositorio

```bash
git clone https://github.com/usuario/repositorio.git
```

### Ingresar al proyecto

```bash
cd admin
```

---

# 🐳 Ejecución con Docker

### Construir la imagen

```bash
docker build -t sa-integral .
```

### Ejecutar el contenedor

```bash
docker run -p 80:80 sa-integral
```

### Abrir en el navegador

```
http://localhost
```

---

# ☁️ Despliegue en Render

El proyecto está preparado para ejecutarse como un **Web Service** utilizando Docker.

## Pasos

1. Crear un nuevo **Web Service** en Render.
2. Conectar este repositorio.
3. Render detectará automáticamente el archivo `Dockerfile`.
4. Crear un **Persistent Disk**.
5. Configurar el punto de montaje:

```text
/var/www/html/admin/storage
```

Esto permitirá conservar la base de datos SQLite y los archivos del sistema incluso después de reiniciar el servicio.

---

# ⚙️ Archivos Principales

| Archivo | Función |
|----------|---------|
| Dockerfile | Construcción del contenedor Docker |
| .htaccess | Configuración del servidor Apache |
| .gitignore | Exclusión de archivos para Git |
| CHANGELOG.md | Historial de versiones |
| SECURITY.md | Políticas de seguridad |
| LICENSE | Licencia del proyecto |

---

# 📁 Persistencia de Datos

El sistema utiliza **SQLite** como motor de base de datos, por lo que la carpeta:

```text
storage/
```

debe almacenarse en un disco persistente para evitar la pérdida de información durante reinicios o nuevos despliegues.

---

# 👥 Equipo de Desarrollo

Proyecto desarrollado por:

- **Anderson Benonits Urrutia Moreyra**
- **Equipo colaborador**

**Universidad Tecnológica del Perú**

---

# 📄 Licencia

Este proyecto se distribuye bajo la licencia especificada en el archivo **LICENSE**.

---

# 📌 Estado del Proyecto

🟢 **Activo y en mantenimiento**