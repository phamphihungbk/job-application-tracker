FROM nginx:1.19.6-alpine

RUN adduser -u 1000 -D -S -G www-data www-data \
    && chown -R www-data:www-data /var/log/nginx

COPY ./config/conf.d/. /etc/nginx/conf.d
