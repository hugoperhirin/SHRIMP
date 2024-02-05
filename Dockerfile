FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

RUN echo 'server {\n\
    listen 80;\n\
    server_name localhost;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    location / {\n\
        try_files $uri $uri/ /html$uri /html$uri.html =404;\n\
    }\n\
    location ~ ^/([a-zA-Z0-9_-]+)$ {\n\
        try_files /html/$1.html =404;\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html

EXPOSE 80
