(ns reframe.core
  (:require [reagent.dom]
            [re-frame.core :as rf]
            [reframe.chess :as chess]))

; ========== STATE ==========

(defn initialize-app-state
  []
  (let [board (chess/init-board)]
    {:board board
     :pov :white
     :history (list board)}))

; ========== EVENT HANDLING / STATE UPDATING ==========

(rf/reg-event-db :initialize initialize-app-state)

(rf/reg-event-db 
 :square-clicked 
 (fn [db [_ [rank file]]]
   (let [square-from (:square-from db)
         board (:board db)
         history (:history db)
         square [(chess/number-to-letter file) rank]]
     (if (nil? square-from)
       (assoc db :square-from square)
       (let [new-board (chess/move-piece board square-from square)]
         (if-not (= board new-board)
           (assoc db :board new-board
                  :square-from nil
                  :history (conj history new-board))
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
       {:db (-> db (assoc :board (nth history 1)) (assoc :history (rest history)))}))))

; ========== X ==========

(rf/reg-sub
 :chess-query-id
 (fn [db _]
   (:board db)))

(rf/reg-sub
 :pov-query-id
 (fn [db _]
   (:pov db)))

; ========== VIEW RENDERING ==========

(defn piece-img
  [{:keys [color piece]}]
  [:img {:src (str "imgs/" (name color) (name piece) ".svg")}])

(defn square-clicked
  [rank file]
  (fn [_] (rf/dispatch [:square-clicked [rank file]])))

(defn chess-board
  "Component giving GUI of the board"
  [board pov]
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
       (let [piece (get board [(chess/number-to-letter file) rank])]
         (if (even? (+ file rank))
           [:div#light-square {:style {:background-color "#dee3e6"
                                       :width "12.5%"
                                       :height "12.5%"}
                               :on-click (square-clicked rank file)
                               :key (str rank file)}
            (when-not (nil? piece)
              (piece-img piece))]
           [:div#dark-square {:style {:background-color "#8ca2ad"
                                      :width "12.5%"
                                      :height "12.5%"}
                              :on-click (square-clicked rank file)
                              :key (str rank file)}
            (when-not (nil? piece)
              (piece-img piece))]))))])

(defn ui
  []
  (let [board (rf/subscribe [:chess-query-id])
        pov (rf/subscribe [:pov-query-id])]
    [:div
     [:h1 "ClojureScript chess!"]
     [chess-board @board @pov]
     [:br]
     [:button {:on-click #(rf/dispatch [:change-pov])} "Rotate board"]
     [:button {:on-click #(rf/dispatch [:undo-move])} "Undo move"]]))

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