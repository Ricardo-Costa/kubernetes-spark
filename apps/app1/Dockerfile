FROM node:14.18.0-alpine3.14

USER root

WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm i --production

COPY . ./

CMD [ "node", "./index.js" ]