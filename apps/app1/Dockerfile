#FROM node:14.18.0-alpine3.14 AS build
FROM node:14.18.0-alpine3.14

USER root AS 

WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm i --production

COPY . ./

# create group and user
# RUN groupadd -r node && useradd -g node node
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# set ownership and permissions
# RUN chown -R appuser:appgroup /home/node/app

# switch to user
# USER appuser
USER node

CMD [ "node", "./index.js" ]