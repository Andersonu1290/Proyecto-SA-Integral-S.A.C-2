FROM php:8.3-apache

# Habilitar mod_rewrite
RUN a2enmod rewrite

# 🔥 SOLUCIÓN NUCLEAR: Modificar directamente el archivo principal de Apache
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

# Instalamos extensiones y limpiamos caché
RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_sqlite zip \
    && rm -rf /var/lib/apt/lists/*

# Copiamos los archivos
COPY . /var/www/html/

# Permisos
RUN chown -R www-data:www-data /var/www/html/