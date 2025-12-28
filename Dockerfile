FROM node:22.16.0-slim

WORKDIR /ui-app

COPY server server

COPY package.json package.json

COPY tsconfig.json tsconfig.json

COPY tsconfig.app.json tsconfig.app.json

COPY vite.config.ts vite.config.ts

COPY eslint.config.js  eslint.config.js

COPY package-lock.json package-lock.json

RUN npm install

RUN npm run build

EXPOSE 3001

CMD  npm run server:start