# CORREGIDO: Subir a PHP 8.3 (Requisito mínimo del sistema)
FROM php:8.3-apache

# Habilitamos mod_rewrite de Apache
RUN a2enmod rewrite

# 🔥 CRUCIAL: Habilitar AllowOverride para que Apache lea tu .htaccess y el de la carpeta /admin
RUN echo "<Directory /var/www/html>\n\tAllowOverride All\n</Directory>" > /etc/apache2/conf-available/allow-override.conf \
    && a2enconf allow-override

# Instalamos extensiones (SQLite, GD, ZIP) y limpiamos caché
RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_sqlite zip \
    && rm -rf /var/lib/apt/lists/*

# Copiamos los archivos de tu proyecto
COPY . /var/www/html/

# CORREGIDO: Asegurar permisos en TODA la raíz para evitar bloqueos en storage y config
RUN chown -R www-data:www-data /var/www/html/