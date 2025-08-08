FROM nginx:stable-alpine
ARG config_dir=deployment/nginx/conf.dev
RUN rm -rf /etc/nginx/conf.d/*
COPY deployment/nginx/nginx.conf /etc/nginx/nginx.conf
COPY $config_dir /etc/nginx/conf.d
