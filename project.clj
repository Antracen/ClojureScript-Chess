{:nrepl {:port 8777} 
 :source-paths ["src"]
 :dependencies [[re-frame "1.3.0"]
                [reagent "1.1.1"]
                [org.clojars.rutledgepaulv/websocket-fx "0.1.2"]]
 :min-lein-version "2.0.0"
 :build-defaults {:build-hooks [(shadow-git-inject.core/hook)]}
 :dev-http {8280 "resources/public"}
 :builds {:reframe {:target :browser
                    :output-dir "resources/public/js"
                    :modules {:ui {:init-fn client.ui/run}}}}}
