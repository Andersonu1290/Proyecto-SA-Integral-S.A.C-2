# Usamos PHP 8.3 con Apache
FROM php:8.3-apache

# Habilitar mod_rewrite de forma definitiva
RUN a2enmod rewrite

# Ajustar la configuración global de Apache para permitir TODO en /var/www/html
RUN echo "<Directory /var/www/html>\n\tOptions Indexes FollowSymLinks\n\tAllowOverride All\n\tRequire all granted\n</Directory>" > /etc/apache2/conf-available/allow-override.conf \
    && a2enconf allow-override

# Instalar dependencias para Cockpit
RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_sqlite zip \
    && rm -rf /var/lib/apt/lists/*

# Copiar el proyecto
COPY . /var/www/html/

# Permisos para Apache
RUN chown -R www-data:www-data /var/www/html/
RUN chmod -R 775 /var/www/html/admin/storage