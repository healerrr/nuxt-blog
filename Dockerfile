FROM keymetrics/pm2

RUN mkdir -p /app/src

WORKDIR /app/src

COPY ./ /app/src/backend-blog

RUN yarn install

ENV NPM_CONFIG_LOGLEVEL warn

EXPOSE 5000 

CMD ["pm2-runtime", "start", "pm2.config.js", "--env", "production"]
