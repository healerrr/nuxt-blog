FROM node:16.13.2

RUN mkdir -p /app/src/frontend-blog
COPY ./ /app/src/frontend-blog
WORKDIR /app/src/frontend-blog

ENV HOST "0.0.0.0"


RUN yarn install
RUN yarn build
RUN yarn cache clean


EXPOSE 3000
CMD ["yarn", "start"]