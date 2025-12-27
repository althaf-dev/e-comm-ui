FROM node:22.16.0-slim

WORKDIR /ui-app

COPY dist dist

COPY server server

COPY package.json package.json

COPY package-lock.json package-lock.json

RUN npm install

EXPOSE 3001

CMD  npm run server:start