# BUILD
FROM urbanslug/shadow-cljs:latest AS BUILD_IMAGE

WORKDIR /usr/src/app
COPY src src
COPY package.json package.json
COPY resources resources
COPY index.js index.js

RUN npm install
RUN npm run release

# DEPLOY
FROM nginx:alpine-slim
COPY --from=BUILD_IMAGE /usr/src/app/resources/public /usr/share/nginx/html