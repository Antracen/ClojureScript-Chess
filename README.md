# ClojureScript Chess
Chess game written in [ClojureScript](https://clojurescript.org/) and [re-frame](https://github.com/day8/re-frame).

# Server
https://github.com/Antracen/Clojure-ChessServer

# Build

## Configure
Modify server websocket URL in `src/client/ui.cljs`

## Docker build
`docker build -t chess-client .`

## Heroku build
* Download Heroku CLI
* Login with `heroku login`
* Start Docker
* Login to Docker/Container with `heroku container:login`
* Build and push image with `heroku container:push web -a chess-server`
* Release image with `heroku container:release web -a chess-server`