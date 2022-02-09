# FROM keymetrics/pm2:latest-alpine

# RUN mkdir -p /app/src/backend-blog

# WORKDIR /app/src/backend-blog

# COPY ./ /app/src/backend-blog

# RUN yarn install

# ENV NPM_CONFIG_LOGLEVEL warn

# EXPOSE 5000 

# CMD ["pm2-runtime", "start", "pm2.config.js", "--env", "production"]
FROM node:16.13.2

RUN mkdir -p /app/src/backend-blog
COPY ./ /app/src/backend-blog
WORKDIR /app/src/backend-blog

# ENV HOST "0.0.0.0"


RUN yarn install
EXPOSE 5000
CMD ["yarn", "dev"]