FROM node:17-alpine
WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app && chown node.node /usr/src/app

USER node

COPY package.json yarn.lock ./
RUN yarn

ADD ./ ./