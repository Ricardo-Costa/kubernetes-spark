FROM node:14.18.0-alpine3.14

USER root

WORKDIR /home/node/app

COPY . .
RUN npm i --production
CMD [ "node", "./index.js" ]