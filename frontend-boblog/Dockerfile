FROM node:alpine

RUN mkdir -p /app/src
COPY ./frontend-boblog /app/src/frontend-blog
WORKDIR /app/src

ENV HOST "0.0.0.0"

RUN sed -i "s/dl-cdn.alpinelinux.org/${ALPINE_REPOSITORIES}/g" /etc/apk/repositories

RUN apk add --no-cache make gcc g++ python

RUN yarn install
RUN yarn build
RUN yarn cache clean

RUN apk del make gcc g++ python

EXPOSE 3000
CMD ["yarn", "start"]