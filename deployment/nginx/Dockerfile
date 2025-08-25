FROM nginx:stable-alpine
ARG ssl_dir=deployment/nginx/ssl
ARG config_dir=deployment/nginx/conf.dev
RUN rm -rf /etc/nginx/conf.d/*
COPY deployment/nginx/nginx.conf /etc/nginx/nginx.conf
COPY $ssl_dir /etc/nginx/ssl
COPY $config_dir /etc/nginx/conf.d
