# BUILD
FROM alpine:latest AS BUILD_IMAGE

WORKDIR /usr/src/app
# Source code
COPY src src
COPY package.json package.json
COPY shadow-cljs.edn shadow-cljs.edn
COPY index.js index.js
# Necessary static HTML
COPY resources/public/index.html resources/public/index.html
COPY resources/public/style.css resources/public/style.css
COPY resources/public/imgs resources/public/imgs

RUN apk add --update nodejs npm openjdk11

RUN npm install
RUN npm run release

# DEPLOY
FROM nginx:alpine-slim
COPY --from=BUILD_IMAGE /usr/src/app/resources/public /usr/share/nginx/html