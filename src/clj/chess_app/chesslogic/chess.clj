(ns chess_app.chesslogic.chess
  (:require [clojure.test :refer [deftest is testing]]))

(defn place-pieces
  "Pieces, as common in chess circles, does not include pawns"
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
  (-> {} (place-pieces 1 :white) (place-pawns 2 :white) (place-pieces 8 :black) (place-pawns 7 :black)))

(defn move-piece
  "Move a piece from one square to another.
   Will not validate the move.
   If starting square is empty, nothing happens."
  [board from to]
  (let [old-piece (get board from)]
    (if-not (nil? old-piece)
      (-> board (assoc to old-piece) (dissoc from))
      board)))


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
        unchanged-board (move-piece board ["e" 3] ["e" 4])]
    (testing "Moving a pawn"
      (is (= new-board {["e" 4] {:piece :pawn
                               :color :white}
                      ["e" 7] {:piece :pawn
                               :color :black}})))
    (testing "Trying to move when there is no piece"
      (is (= board unchanged-board)))))