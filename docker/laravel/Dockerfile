FROM php:7.4-cli

WORKDIR /var/www

RUN apt update && \
    apt install git libzip-dev unzip -y && \
    docker-php-ext-install zip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');" && \
    mv composer.phar /usr/local/bin/composer

RUN composer create-project --prefer-dist laravel/laravel laravel

EXPOSE 8000
ENTRYPOINT [ "php", "laravel/artisan" ]

CMD [ "serve", "--host", "0.0.0.0" ]