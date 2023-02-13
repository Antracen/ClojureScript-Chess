(ns client.ui
  (:require [reagent.dom]
            [re-frame.core :as rf]
            [client.chess :as chess]
            [websocket-fx.core :as wfx]))

; ========== STATE ==========
(def socket-id :default)

(defn initialize-app-state
  []
  (println "Initializing app state")
  (let [board (chess/init-board)]
    {:board board
     :pov :white
     :history (list board)
     :preferred-promotion :queen}))

; ========== EVENT HANDLING / STATE UPDATING ==========

(def options
  {:url "wss://chess-server.herokuapp.com/ws"
   :format :edn
   :on-connect [::websocket-connected]
   :on-disconnect [::websocket-disconnected]})

(rf/reg-event-fx 
 :initialize
 (fn [_ _]
   {:db (initialize-app-state)
    :fx [[:dispatch [::wfx/connect socket-id options]]
         [:dispatch [::wfx/disconnect socket-id]]]}))

(defn push-to-server
  [board history]
  (rf/dispatch [::wfx/push socket-id {:kind :client-state
                                      :board board
                                      :history history}]))

(rf/reg-event-db
 :square-clicked
 (fn [db [_ [rank file]]]
   (let [square-from (:square-from db)
         board (:board db)
         history (:history db)
         preferred-promotion (:preferred-promotion db)
         square [(chess/number-to-letter file) rank]]
     (if (nil? square-from)
       (assoc db :square-from square)
       (let [new-board (chess/move-piece board square-from square preferred-promotion)
             new-history (conj history new-board)]
         (if-not (= board new-board)
           (do
             (push-to-server new-board new-history)
             (assoc db :board new-board
                    :square-from nil
                    :history new-history))
           (assoc db :square-from nil)))))))

(rf/reg-event-fx
 :change-pov
 (fn [coeffects _]
   (let [db (:db coeffects)]
     {:db (assoc db :pov (chess/opposite-color (:pov db)))})))

(rf/reg-event-fx
 :undo-move
 (fn [coeffects _]
   (let [db (:db coeffects)
         history (:history db)]
     (when-not (= (count history) 1)
       (rf/dispatch [::wfx/push socket-id {:kind :client-state
                                               :board (nth history 1)
                                               :history (rest history)}])
       {:db (-> db 
                (assoc :board (nth history 1)) 
                (assoc :history (rest history)))}))))

(rf/reg-event-fx
 :change-promotion
 (fn [coeffects [_ piece]]
   (let [db (:db coeffects)]
     {:db (assoc db :preferred-promotion piece)})))

(rf/reg-event-fx
 ::websocket-connected
 (fn [_ _]
   (println "Connected to websocket!")
   (rf/dispatch [::wfx/subscribe socket-id :game-subscription {:message {:kind :subscribe-to-game}
                                                               :on-message [::game-updated]}])))

(rf/reg-event-fx
 ::websocket-disconnected
 (fn [_ _]
   (println "disconnected")))

(rf/reg-event-fx
 ::game-updated 
 (fn [coeffects [_ data]]
   (println "Got state from server")
   (let [db (:db coeffects)]
     {:db (assoc db :board (:board data) :history (:history data))})))

; ========== X ==========

(rf/reg-sub
 :chess-query-id
 (fn [db _]
   (:board db)))

(rf/reg-sub
 :pov-query-id
 (fn [db _]
   (:pov db)))

(rf/reg-sub
 :preferred-promotion-query-id
 (fn [db _]
   (:preferred-promotion db)))

(rf/reg-sub
 :from-square-query-id
 (fn [db _]
   (:square-from db)))

; ========== VIEW RENDERING ==========

(defn piece-img
  [{:keys [color piece]}]
  [:img {:src (str "imgs/" (name color) (name piece) ".svg")}])

(defn square-clicked
  [rank file]
  (fn [_] (rf/dispatch [:square-clicked [rank file]])))

(defn render-square
  [board file rank from-square]
  (let [square [(chess/number-to-letter file) rank]
        piece (get board square)
        is-from-square? (= square from-square)
        is-dark-square? (even? (+ file rank))
        last-move (:last-move board)
        is-last-move-square? (or (= square (:from last-move))
                                 (= square (:to last-move)))]
    [(keyword (str "div#" (if is-dark-square? "dark-square" "light-square") (if is-from-square? "-selected" (if is-last-move-square? "-move" "")))) {:on-click (square-clicked rank file)
                                                                                                                   :key (str rank file)}
     (when-not (nil? piece)
       (piece-img piece))]))

(defn chess-board
  "Component giving GUI of the board"
  [board pov from-square]
  [:div#chess-board {:style {:display "flex"
                             :flex-wrap "wrap"
                             :width "min(50vh, 50vw)"
                             :height "min(50vh, 50vw)"
                             :border "1px solid grey"}}
   (let [rank-range (if (= pov :black)
                      (range 1 9)
                      (range 8 0 -1))
         file-range (if (= pov :black)
                      (range 8 0 -1)
                      (range 1 9))]
     (for [rank rank-range
           file file-range]
       (render-square board file rank from-square)))])

(defn ui
  []
  (let [board (rf/subscribe [:chess-query-id])
        pov (rf/subscribe [:pov-query-id])
        preferred-promotion (rf/subscribe [:preferred-promotion-query-id])
        from-square (rf/subscribe [:from-square-query-id])]
    [:div
     [:h1 "ClojureScript chess!"]
     [chess-board @board @pov @from-square]
     [:br]
     [:button {:on-click #(rf/dispatch [:change-pov])} "Rotate board"]
     [:button {:on-click #(rf/dispatch [:undo-move])} "Undo move"]
     [:select {:value @preferred-promotion
               :on-change #(rf/dispatch [:change-promotion (-> % .-target .-value)])}
      (map (fn [piece] [:option {:value piece :key piece} (str "Promote to: " piece)]) ["queen" "rook" "bishop" "knight"])]]))

; ========== RE-FRAME MAGIC ==========

(defn render
  []
  (reagent.dom/render [ui]
                      (js/document.getElementById "app")))

(defn ^:dev/after-load clear-cache-and-render!
  []
  (rf/clear-subscription-cache!)
  (render))

(defn run
  []
  (rf/dispatch-sync [:initialize])
  (render))