# FROM node:14.16.0
# RUN mkdir -p /app/src/admin-blog
# WORKDIR /app/src/admin-blog
# COPY ./ /app/src/admin-blog
# RUN yarn install
# RUN yarn build:prod
FROM nginx
COPY ./dist/ /usr/share/nginx/html/
# 第一步nginx配置文件名称
  # COPY ./vhost.nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4000