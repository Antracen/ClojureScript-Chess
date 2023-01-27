(ns client.chess
  (:require [clojure.test :refer [deftest is testing]]))

(defn place-pieces
  "Pieces, as common in chess circles, do not include pawns"
  [board row color]
  (assoc board ["a" row] {:piece :rook
                          :color color}
         ["b" row] {:piece :knight
                    :color color}
         ["c" row] {:piece :bishop
                    :color color}
         ["d" row] {:piece :queen
                    :color color}
         ["e" row] {:piece :king
                    :color color}
         ["f" row] {:piece :bishop
                    :color color}
         ["g" row] {:piece :knight
                    :color color}
         ["h" row] {:piece :rook
                    :color color}))

(defn place-pawns
  [board row color]
  (assoc board ["a" row] {:piece :pawn
                          :color color}
         ["b" row] {:piece :pawn
                    :color color}
         ["c" row] {:piece :pawn
                    :color color}
         ["d" row] {:piece :pawn
                    :color color}
         ["e" row] {:piece :pawn
                    :color color}
         ["f" row] {:piece :pawn
                    :color color}
         ["g" row] {:piece :pawn
                    :color color}
         ["h" row] {:piece :pawn
                    :color color}))

(defn init-board
  "The initial state of a chess board"
  []
  (-> {:current-turn :white} (place-pieces 1 :white) (place-pawns 2 :white) (place-pieces 8 :black) (place-pawns 7 :black)))

(defn number-to-letter
  [num]
  (char (+ 96 num)))

(defn letter-to-number
  [letter]
  (cond (= letter "a") 1
        (= letter "b") 2
        (= letter "c") 3
        (= letter "d") 4
        (= letter "e") 5
        (= letter "f") 6
        (= letter "g") 7
        (= letter "h") 8))

(defn difference
  [a b]
  (Math/abs (- a b)))

(defn file-distance
  [file1 file2]
  (let [file1-num (letter-to-number file1)
        file2-num (letter-to-number file2)]
    (difference file1-num file2-num)))

(defn rank-direction
  [rank1 rank2]
  (if (< rank1 rank2)
     1
     -1))

(defn file-direction
  [file1 file2]
  (let [file1-num (letter-to-number file1)
        file2-num (letter-to-number file2)]
    (rank-direction file1-num file2-num)))

(defn rank-distance
  [rank1 rank2]
  (difference rank1 rank2))

(defn valid-pawn-move?
  [board [from-file from-rank] [to-file to-rank] color]
  (let [to-piece (get board [to-file to-rank])
        direction (if (= color :white)
                    1
                    -1)
        pawn-starting-rank (if (= color :white)
                             2
                             7)
        at-starting-rank? (= from-rank pawn-starting-rank)
        is-capture? (not (nil? to-piece))]
    (if is-capture?
      (and (= to-rank (+ direction from-rank))
           (= (file-distance from-file to-file) 1))
      (and (= from-file to-file)
           (if at-starting-rank?
             (or (= (+ from-rank direction) to-rank)
                 (and (= (+ from-rank (* 2 direction)) to-rank)
                      (nil? (get board [from-file (+ from-rank direction)]))))
             (= (+ from-rank direction) to-rank))))))

(defn valid-knight-move?
  [[from-file from-rank] [to-file to-rank]]
  (let [rank-distance (rank-distance from-rank to-rank)
        file-distance (file-distance from-file to-file)]
    (and (= (+ rank-distance file-distance) 3)
         (= (* rank-distance file-distance) 2))))

(defn rank-range
  "[1 4] => (2 3)
   [4 1] => (3 2)"
  [from to]
  (if (< from to)
    (range (+ from 1) to)
    (range (- from 1) to -1)))

(defn file-range
  "[a e] => (b d)
   [e a] => (d b)"
  [from to]
  (let [from-num (letter-to-number from)
        to-num (letter-to-number to)
        num-range (rank-range from-num to-num)]
    (map number-to-letter num-range)))

(defn squares-empty?
  [board squares]
  (reduce (fn
            [final-value square]
            (and final-value (let [piece-on-square (get board square)]
                               (nil? piece-on-square)))) true squares))

(defn valid-bishop-move?
  [board [from-file from-rank] [to-file to-rank]]
  (let [rank-range (rank-range from-rank to-rank)
        file-range (file-range from-file to-file)
        rank-distance (rank-distance from-rank to-rank)
        file-distance (file-distance from-file to-file)]
    (and (= rank-distance file-distance)
         (let [squares (map vector file-range rank-range)]
           (squares-empty? board squares)))))

(defn valid-rook-move?
  [board [from-file from-rank] [to-file to-rank]]
  (let [rank-range (rank-range from-rank to-rank)
        file-range (file-range from-file to-file)
        rank-distance (rank-distance from-rank to-rank)
        file-distance (file-distance from-file to-file)]
    (and (= (* rank-distance file-distance) 0)
         (let [squares (if (= rank-distance 0)
                         (map (fn [file] (vector file from-rank)) file-range)
                         (map (fn [rank] (vector from-file rank)) rank-range))]
           (squares-empty? board squares)))))

(defn valid-queen-move?
  [board from to]
  (or (valid-rook-move? board from to)
      (valid-bishop-move? board from to)))

(defn valid-king-move?
  [[from-file from-rank] [to-file to-rank]]
  (let [rank-distance (rank-distance from-rank to-rank)
        file-distance (file-distance from-file to-file)]
    (and (< rank-distance 2)
         (< file-distance 2))))

(defn opposite-color
  [color]
  (if (= color :white) ; comparison
    ; if true
    :black
    ; if false
    :white))

(defn execute-move
  [board from to]
  (-> board 
      (assoc :last-move {:castle false
                         :piece (get board from)
                         :from from
                         :to to})
      (assoc to (get board from)) 
      (assoc-in [to :has-moved] true) 
      (dissoc from) 
      (assoc :current-turn (opposite-color (get board :current-turn)))))

(defn valid-move?
  [board from to]
  (let [from-piece (get board from)
        to-piece (get board to)]
    (and (not (nil? from-piece))
         (not (= from to))
         (= (get board :current-turn) (get from-piece :color))
         (not (= (:color from-piece) (:color to-piece)))
         (cond (= (:piece from-piece) :pawn) (valid-pawn-move? board from to (:color from-piece))
               (= (:piece from-piece) :knight) (valid-knight-move? from to)
               (= (:piece from-piece) :bishop) (valid-bishop-move? board from to)
               (= (:piece from-piece) :rook) (valid-rook-move? board from to)
               (= (:piece from-piece) :queen) (valid-queen-move? board from to)
               (= (:piece from-piece) :king) (valid-king-move? from to)
               :else false))))

(defn king-under-attack?
  "Check if there is a valid move to the king square, which means king can be captured"
  [board color]
  (let [[king-coordinates _] (first (filter (fn [piece] (and (= (:piece (val piece)) :king)
                                                             (= (:color (val piece)) color))) board))]
    (reduce (fn [final-value piece]
              (or final-value (valid-move? board (first piece) king-coordinates))) false board)))

(defn add-to-file
  [file amount]
  (-> file letter-to-number (+ amount) number-to-letter))

(defn valid-castle?
  [board [from-file from-rank] [to-file to-rank]]
  (let [king (get board [from-file from-rank])
        is-king (= (:piece king) :king)
        king-unmoved? (nil? (get king :has-moved))
        direction (file-direction from-file to-file)
        intermediate-square [(add-to-file from-file direction) from-rank]
        file-range (file-range from-file to-file)
        file-distance (file-distance from-file to-file)
        rook-file (if (= direction 1)
                    "h"
                    "a")
        rook (get board [rook-file from-rank])
        rook-unmoved? (and (not (nil? rook))
                            (nil? (rook :has-moved)))]
    (and is-king
         king-unmoved?
         rook-unmoved?
         (= file-distance 2)
         (not (king-under-attack? board (:color king)))
         (squares-empty? board (map (fn [file] [file from-rank]) file-range))
         (not (king-under-attack? (execute-move board [from-file from-rank] intermediate-square) (:color king)))
         (not (king-under-attack? (execute-move board [from-file from-rank] [to-file to-rank]) (:color king))))))

(defn execute-castle
  [board [from-file from-rank] [to-file to-rank]]
  (let [king (get board [from-file from-rank])
        direction (file-direction from-file to-file)
        intermediate-square [(add-to-file from-file direction) from-rank]
        rook-file (if (= direction 1)
                    "h"
                    "a")
        rook-square [rook-file from-rank]
        rook (get board rook-square)]
    (-> board 
        (assoc :last-move {:castle true
                           :piece :king
                           :from [from-file from-rank]
                           :to [to-file to-rank]})
        (assoc [to-file to-rank] king) 
        (assoc intermediate-square rook) 
        (assoc [from-file from-rank] nil) 
        (assoc rook-square nil) 
        (assoc-in [[to-file to-rank] :has-moved] true) 
        (assoc-in [intermediate-square :has-moved] true) 
        (assoc :current-turn (opposite-color (get board :current-turn))))))

(defn execute-en-passant
  [board [from-file from-rank] [to-file to-rank]]
  (let [pawn (get board [from-file from-rank])
        color (:color pawn)
        direction (if (= color :white)
                    1
                    -1)]
    (-> board 
        (assoc :last-move {:castle false
                           :piece :pawn
                           :from [from-file from-rank]
                           :to [to-file to-rank]})
        (assoc [to-file to-rank] pawn) 
        (assoc [from-file from-rank] nil) 
        (assoc [to-file (- to-rank direction)] nil) 
        (assoc :current-turn (opposite-color (get board :current-turn))))))

(defn valid-en-passant?
  [board [from-file from-rank] [to-file to-rank]]
  (let [pawn (get board [from-file from-rank])
        is-pawn? (= (:piece pawn) :pawn)
        color (:color pawn)
        direction (if (= color :white)
                    1
                    -1)
        en-passant-rank (if (= color :white)
                          5
                          4)
        enemy-pawn-starting-rank (if (= color :white)
                             7
                             2)
        file-distance (file-distance from-file to-file)
        last-move (get board :last-move)]
    (and is-pawn?
         (= en-passant-rank from-rank)
         (= (+ from-rank direction) to-rank)
         (= file-distance 1)
         (= (get-in last-move [:piece :piece]) :pawn)
         (= (:from last-move) [to-file enemy-pawn-starting-rank])
         (= (:to last-move) [to-file en-passant-rank])
         (not (king-under-attack? (execute-en-passant board [from-file from-rank] [to-file to-rank]) (:color pawn))))))

(defn move-piece
  "Move a piece from one square to another.
   Will not validate the move.
   If starting square is empty, nothing happens."
  [board from to]
  (if (and (valid-move? board from to)
           (not (king-under-attack? (execute-move board from to) (:color (get board from)))))
    (execute-move board from to)
    (if (valid-castle? board from to)
      (execute-castle board from to)
      (if (valid-en-passant? board from to)
        (execute-en-passant board from to)
        board))))

; ========================== TESTS ==========================

(deftest init-board-test
  (let [board (init-board)]
    (testing "Getting an existing piece"
      (is (= (get board ["e" 1]) {:piece :king
                                  :color :white})))
    (testing "Getting a square with no piece on it"
      (is (= (get board ["e" 3]) nil)))))

(deftest move-piece-test
  (let [board {["e" 2] {:piece :pawn
                        :color :white}
               ["e" 7] {:piece :pawn
                        :color :black}}
        new-board (move-piece board ["e" 2] ["e" 4])
        board-after-illegal-move (move-piece board ["e" 3] ["e" 4])
        board-after-move-to-self (move-piece board ["e" 2] ["e" 2])]
    (testing "Moving a pawn"
      (is (= new-board {["e" 4] {:piece :pawn
                                 :color :white}
                        ["e" 7] {:piece :pawn
                                 :color :black}})))
    (testing "Trying to move when there is no piece"
      (is (= board board-after-illegal-move)))
    (testing "Trying to move when there is no piece"
      (is (= board board-after-move-to-self)))))

; TODO
; Multiplayer:
;     Websockets
;     Dynamic creation of rooms. Going to <url>/<made-up-id> should create a game people can join