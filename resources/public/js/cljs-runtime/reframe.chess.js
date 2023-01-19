goog.provide('reframe.chess');
/**
 * Pieces, as common in chess circles, does not include pawns
 */
reframe.chess.place_pieces = (function reframe$chess$place_pieces(board,row,color){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"rook","rook",-351034693),new cljs.core.Keyword(null,"color","color",1011675173),color], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"knight","knight",-1883332680),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"bishop","bishop",230448704),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"queen","queen",-209486329),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"bishop","bishop",230448704),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"knight","knight",-1883332680),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["h",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"rook","rook",-351034693),new cljs.core.Keyword(null,"color","color",1011675173),color], null)], 0));
});
reframe.chess.place_pawns = (function reframe$chess$place_pawns(board,row,color){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["h",row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),color], null)], 0));
});
/**
 * The initial state of a chess board
 */
reframe.chess.init_board = (function reframe$chess$init_board(){
return reframe.chess.place_pawns(reframe.chess.place_pieces(reframe.chess.place_pawns(reframe.chess.place_pieces(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),new cljs.core.Keyword(null,"white","white",-483998618)], null),(1),new cljs.core.Keyword(null,"white","white",-483998618)),(2),new cljs.core.Keyword(null,"white","white",-483998618)),(8),new cljs.core.Keyword(null,"black","black",1294279647)),(7),new cljs.core.Keyword(null,"black","black",1294279647));
});
reframe.chess.number_to_letter = (function reframe$chess$number_to_letter(num){
return cljs.core.char$(((96) + num));
});
reframe.chess.letter_to_number = (function reframe$chess$letter_to_number(letter){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(letter,"a")){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(letter,"b")){
return (2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(letter,"c")){
return (3);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(letter,"d")){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(letter,"e")){
return (5);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(letter,"f")){
return (6);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(letter,"g")){
return (7);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(letter,"h")){
return (8);
} else {
return null;
}
}
}
}
}
}
}
}
});
reframe.chess.difference = (function reframe$chess$difference(a,b){
return Math.abs((a - b));
});
reframe.chess.file_distance = (function reframe$chess$file_distance(file1,file2){
var file1_num = reframe.chess.letter_to_number(file1);
var file2_num = reframe.chess.letter_to_number(file2);
return reframe.chess.difference(file1_num,file2_num);
});
reframe.chess.rank_direction = (function reframe$chess$rank_direction(rank1,rank2){
if((rank1 < rank2)){
return (1);
} else {
return (-1);
}
});
reframe.chess.file_direction = (function reframe$chess$file_direction(file1,file2){
var file1_num = reframe.chess.letter_to_number(file1);
var file2_num = reframe.chess.letter_to_number(file2);
return reframe.chess.rank_direction(file1_num,file2_num);
});
reframe.chess.rank_distance = (function reframe$chess$rank_distance(rank1,rank2){
return reframe.chess.difference(rank1,rank2);
});
reframe.chess.valid_pawn_move_QMARK_ = (function reframe$chess$valid_pawn_move_QMARK_(board,p__28357,p__28358,color){
var vec__28359 = p__28357;
var from_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28359,(0),null);
var from_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28359,(1),null);
var vec__28362 = p__28358;
var to_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28362,(0),null);
var to_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28362,(1),null);
var to_piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_file,to_rank], null));
var direction = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"white","white",-483998618)))?(1):(-1));
var pawn_starting_rank = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"white","white",-483998618)))?(2):(7));
var at_starting_rank_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from_rank,pawn_starting_rank);
var is_capture_QMARK_ = (!((to_piece == null)));
if(is_capture_QMARK_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to_rank,(direction + from_rank))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reframe.chess.file_distance(from_file,to_file),(1))));
} else {
var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from_file,to_file);
if(and__4210__auto__){
if(at_starting_rank_QMARK_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((from_rank + direction),to_rank)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((from_rank + ((2) * direction)),to_rank)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,(from_rank + direction)], null)) == null)))));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((from_rank + direction),to_rank);
}
} else {
return and__4210__auto__;
}
}
});
reframe.chess.valid_knight_move_QMARK_ = (function reframe$chess$valid_knight_move_QMARK_(p__28365,p__28366){
var vec__28367 = p__28365;
var from_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28367,(0),null);
var from_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28367,(1),null);
var vec__28370 = p__28366;
var to_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28370,(0),null);
var to_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28370,(1),null);
var rank_distance = reframe.chess.rank_distance(from_rank,to_rank);
var file_distance = reframe.chess.file_distance(from_file,to_file);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rank_distance + file_distance),(3))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rank_distance * file_distance),(2))));
});
/**
 * [1 4] => (2 3)
 * [4 1] => (3 2)
 */
reframe.chess.rank_range = (function reframe$chess$rank_range(from,to){
if((from < to)){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((from + (1)),to);
} else {
return cljs.core.range.cljs$core$IFn$_invoke$arity$3((from - (1)),to,(-1));
}
});
/**
 * [a e] => (b d)
 * [e a] => (d b)
 */
reframe.chess.file_range = (function reframe$chess$file_range(from,to){
var from_num = reframe.chess.letter_to_number(from);
var to_num = reframe.chess.letter_to_number(to);
var num_range = reframe.chess.rank_range(from_num,to_num);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(reframe.chess.number_to_letter,num_range);
});
reframe.chess.squares_empty_QMARK_ = (function reframe$chess$squares_empty_QMARK_(board,squares){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (final_value,square){
var and__4210__auto__ = final_value;
if(cljs.core.truth_(and__4210__auto__)){
var piece_on_square = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,square);
return (piece_on_square == null);
} else {
return and__4210__auto__;
}
}),true,squares);
});
reframe.chess.valid_bishop_move_QMARK_ = (function reframe$chess$valid_bishop_move_QMARK_(board,p__28373,p__28374){
var vec__28375 = p__28373;
var from_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28375,(0),null);
var from_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28375,(1),null);
var vec__28378 = p__28374;
var to_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28378,(0),null);
var to_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28378,(1),null);
var rank_range = reframe.chess.rank_range(from_rank,to_rank);
var file_range = reframe.chess.file_range(from_file,to_file);
var rank_distance = reframe.chess.rank_distance(from_rank,to_rank);
var file_distance = reframe.chess.file_distance(from_file,to_file);
var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rank_distance,file_distance);
if(and__4210__auto__){
var squares = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,file_range,rank_range);
return reframe.chess.squares_empty_QMARK_(board,squares);
} else {
return and__4210__auto__;
}
});
reframe.chess.valid_rook_move_QMARK_ = (function reframe$chess$valid_rook_move_QMARK_(board,p__28381,p__28382){
var vec__28383 = p__28381;
var from_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28383,(0),null);
var from_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28383,(1),null);
var vec__28386 = p__28382;
var to_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28386,(0),null);
var to_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28386,(1),null);
var rank_range = reframe.chess.rank_range(from_rank,to_rank);
var file_range = reframe.chess.file_range(from_file,to_file);
var rank_distance = reframe.chess.rank_distance(from_rank,to_rank);
var file_distance = reframe.chess.file_distance(from_file,to_file);
var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rank_distance * file_distance),(0));
if(and__4210__auto__){
var squares = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rank_distance,(0)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[file,from_rank],null));
}),file_range):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (rank){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[from_file,rank],null));
}),rank_range));
return reframe.chess.squares_empty_QMARK_(board,squares);
} else {
return and__4210__auto__;
}
});
reframe.chess.valid_queen_move_QMARK_ = (function reframe$chess$valid_queen_move_QMARK_(board,from,to){
var or__4212__auto__ = reframe.chess.valid_rook_move_QMARK_(board,from,to);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reframe.chess.valid_bishop_move_QMARK_(board,from,to);
}
});
reframe.chess.valid_king_move_QMARK_ = (function reframe$chess$valid_king_move_QMARK_(p__28389,p__28390){
var vec__28391 = p__28389;
var from_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28391,(0),null);
var from_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28391,(1),null);
var vec__28394 = p__28390;
var to_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28394,(0),null);
var to_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28394,(1),null);
var rank_distance = reframe.chess.rank_distance(from_rank,to_rank);
var file_distance = reframe.chess.file_distance(from_file,to_file);
return (((rank_distance < (2))) && ((file_distance < (2))));
});
reframe.chess.opposite_color = (function reframe$chess$opposite_color(color){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"white","white",-483998618))){
return new cljs.core.Keyword(null,"black","black",1294279647);
} else {
return new cljs.core.Keyword(null,"white","white",-483998618);
}
});
reframe.chess.execute_move = (function reframe$chess$execute_move(board,from,to){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,new cljs.core.Keyword(null,"last-move","last-move",2069214404),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"castle","castle",300824063),false,new cljs.core.Keyword(null,"piece","piece",1396691784),cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,from),new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null)),to,cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,from)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to,new cljs.core.Keyword(null,"has-moved","has-moved",379213257)], null),true),from),new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),reframe.chess.opposite_color(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.Keyword(null,"current-turn","current-turn",-593026573))));
});
reframe.chess.valid_move_QMARK_ = (function reframe$chess$valid_move_QMARK_(board,from,to){
var from_piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,from);
var to_piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,to);
var and__4210__auto__ = (!((from_piece == null)));
if(and__4210__auto__){
var and__4210__auto____$1 = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)));
if(and__4210__auto____$1){
var and__4210__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.Keyword(null,"current-turn","current-turn",-593026573)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(from_piece,new cljs.core.Keyword(null,"color","color",1011675173)));
if(and__4210__auto____$2){
var and__4210__auto____$3 = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(from_piece),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(to_piece))));
if(and__4210__auto____$3){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(from_piece),new cljs.core.Keyword(null,"pawn","pawn",1463425662))){
return reframe.chess.valid_pawn_move_QMARK_(board,from,to,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(from_piece));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(from_piece),new cljs.core.Keyword(null,"knight","knight",-1883332680))){
return reframe.chess.valid_knight_move_QMARK_(from,to);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(from_piece),new cljs.core.Keyword(null,"bishop","bishop",230448704))){
return reframe.chess.valid_bishop_move_QMARK_(board,from,to);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(from_piece),new cljs.core.Keyword(null,"rook","rook",-351034693))){
return reframe.chess.valid_rook_move_QMARK_(board,from,to);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(from_piece),new cljs.core.Keyword(null,"queen","queen",-209486329))){
return reframe.chess.valid_queen_move_QMARK_(board,from,to);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(from_piece),new cljs.core.Keyword(null,"king","king",-919970205))){
return reframe.chess.valid_king_move_QMARK_(from,to);
} else {
return false;

}
}
}
}
}
}
} else {
return and__4210__auto____$3;
}
} else {
return and__4210__auto____$2;
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
});
/**
 * Check if there is a valid move to the king square, which means king can be captured
 */
reframe.chess.king_under_attack_QMARK_ = (function reframe$chess$king_under_attack_QMARK_(board,color){
var vec__28397 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(cljs.core.val(piece)),new cljs.core.Keyword(null,"king","king",-919970205))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.val(piece)),color)));
}),board));
var king_coordinates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28397,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28397,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (final_value,piece){
var or__4212__auto__ = final_value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reframe.chess.valid_move_QMARK_(board,cljs.core.first(piece),king_coordinates);
}
}),false,board);
});
reframe.chess.add_to_file = (function reframe$chess$add_to_file(file,amount){
return reframe.chess.number_to_letter((reframe.chess.letter_to_number(file) + amount));
});
reframe.chess.valid_castle_QMARK_ = (function reframe$chess$valid_castle_QMARK_(board,p__28400,p__28401){
var vec__28402 = p__28400;
var from_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28402,(0),null);
var from_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28402,(1),null);
var vec__28405 = p__28401;
var to_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28405,(0),null);
var to_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28405,(1),null);
var king = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,from_rank], null));
var is_king = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(king),new cljs.core.Keyword(null,"king","king",-919970205));
var king_unmoved_QMARK_ = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(king,new cljs.core.Keyword(null,"has-moved","has-moved",379213257)) == null);
var direction = reframe.chess.file_direction(from_file,to_file);
var intermediate_square = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe.chess.add_to_file(from_file,direction),from_rank], null);
var file_range = reframe.chess.file_range(from_file,to_file);
var file_distance = reframe.chess.file_distance(from_file,to_file);
var rook_file = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,(1)))?"h":"a");
var rook = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rook_file,from_rank], null));
var rook_unmoved_QMARK_ = (((!((rook == null)))) && (((rook.cljs$core$IFn$_invoke$arity$1 ? rook.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"has-moved","has-moved",379213257)) : rook.call(null,new cljs.core.Keyword(null,"has-moved","has-moved",379213257))) == null)));
var and__4210__auto__ = is_king;
if(and__4210__auto__){
var and__4210__auto____$1 = king_unmoved_QMARK_;
if(and__4210__auto____$1){
var and__4210__auto____$2 = rook_unmoved_QMARK_;
if(and__4210__auto____$2){
var and__4210__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_distance,(2));
if(and__4210__auto____$3){
var and__4210__auto____$4 = cljs.core.not(reframe.chess.king_under_attack_QMARK_(board,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(king)));
if(and__4210__auto____$4){
var and__4210__auto____$5 = reframe.chess.squares_empty_QMARK_(board,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,from_rank], null);
}),file_range));
if(cljs.core.truth_(and__4210__auto____$5)){
return ((cljs.core.not(reframe.chess.king_under_attack_QMARK_(reframe.chess.execute_move(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,from_rank], null),intermediate_square),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(king)))) && (cljs.core.not(reframe.chess.king_under_attack_QMARK_(reframe.chess.execute_move(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,from_rank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_file,to_rank], null)),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(king)))));
} else {
return and__4210__auto____$5;
}
} else {
return and__4210__auto____$4;
}
} else {
return and__4210__auto____$3;
}
} else {
return and__4210__auto____$2;
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
});
reframe.chess.execute_castle = (function reframe$chess$execute_castle(board,p__28408,p__28409){
var vec__28410 = p__28408;
var from_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28410,(0),null);
var from_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28410,(1),null);
var vec__28413 = p__28409;
var to_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28413,(0),null);
var to_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28413,(1),null);
var king = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,from_rank], null));
var direction = reframe.chess.file_direction(from_file,to_file);
var intermediate_square = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe.chess.add_to_file(from_file,direction),from_rank], null);
var rook_file = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,(1)))?"h":"a");
var rook_square = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rook_file,from_rank], null);
var rook = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,rook_square);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,new cljs.core.Keyword(null,"last-move","last-move",2069214404),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"castle","castle",300824063),true,new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,from_rank], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_file,to_rank], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_file,to_rank], null),king),intermediate_square,rook),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,from_rank], null),null),rook_square,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_file,to_rank], null),new cljs.core.Keyword(null,"has-moved","has-moved",379213257)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [intermediate_square,new cljs.core.Keyword(null,"has-moved","has-moved",379213257)], null),true),new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),reframe.chess.opposite_color(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.Keyword(null,"current-turn","current-turn",-593026573))));
});
reframe.chess.execute_en_passant = (function reframe$chess$execute_en_passant(board,p__28416,p__28417){
var vec__28418 = p__28416;
var from_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28418,(0),null);
var from_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28418,(1),null);
var vec__28421 = p__28417;
var to_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(0),null);
var to_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(1),null);
var pawn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,from_rank], null));
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(pawn);
var direction = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"white","white",-483998618)))?(1):(-1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,new cljs.core.Keyword(null,"last-move","last-move",2069214404),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"castle","castle",300824063),false,new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,from_rank], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_file,to_rank], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_file,to_rank], null),pawn),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,from_rank], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_file,(to_rank - direction)], null),null),new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),reframe.chess.opposite_color(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.Keyword(null,"current-turn","current-turn",-593026573))));
});
reframe.chess.valid_en_passant_QMARK_ = (function reframe$chess$valid_en_passant_QMARK_(board,p__28424,p__28425){
var vec__28426 = p__28424;
var from_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28426,(0),null);
var from_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28426,(1),null);
var vec__28429 = p__28425;
var to_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28429,(0),null);
var to_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28429,(1),null);
var pawn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,from_rank], null));
var is_pawn_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(pawn),new cljs.core.Keyword(null,"pawn","pawn",1463425662));
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(pawn);
var direction = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"white","white",-483998618)))?(1):(-1));
var en_passant_rank = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"white","white",-483998618)))?(5):(4));
var enemy_pawn_starting_rank = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"white","white",-483998618)))?(7):(2));
var file_distance = reframe.chess.file_distance(from_file,to_file);
var last_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.Keyword(null,"last-move","last-move",2069214404));
return ((is_pawn_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(en_passant_rank,from_rank)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((from_rank + direction),to_rank)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_distance,(1))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(last_move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"piece","piece",1396691784)], null)),new cljs.core.Keyword(null,"pawn","pawn",1463425662))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(last_move),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_file,enemy_pawn_starting_rank], null))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(last_move),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_file,en_passant_rank], null))) && (cljs.core.not(reframe.chess.king_under_attack_QMARK_(reframe.chess.execute_en_passant(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_file,from_rank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_file,to_rank], null)),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(pawn)))))))))))))))));
});
/**
 * Move a piece from one square to another.
 * Will not validate the move.
 * If starting square is empty, nothing happens.
 */
reframe.chess.move_piece = (function reframe$chess$move_piece(board,from,to){
if(cljs.core.truth_((function (){var and__4210__auto__ = reframe.chess.valid_move_QMARK_(board,from,to);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(reframe.chess.king_under_attack_QMARK_(reframe.chess.execute_move(board,from,to),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,from))));
} else {
return and__4210__auto__;
}
})())){
return reframe.chess.execute_move(board,from,to);
} else {
if(cljs.core.truth_(reframe.chess.valid_castle_QMARK_(board,from,to))){
return reframe.chess.execute_castle(board,from,to);
} else {
if(reframe.chess.valid_en_passant_QMARK_(board,from,to)){
return reframe.chess.execute_en_passant(board,from,to);
} else {
return board;
}
}
}
});
reframe.chess.init_board_test = (function reframe$chess$init_board_test(){
return cljs.test.test_var(reframe.chess.init_board_test.cljs$lang$var);
});
reframe.chess.init_board_test.cljs$lang$test = (function (){
var board = reframe.chess.init_board();
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Getting an existing piece"], 0));

try{try{var values__9153__auto___28452 = (new cljs.core.List(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(1)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),null,(1),null)),(2),null));
var result__9154__auto___28453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9153__auto___28452);
if(cljs.core.truth_(result__9154__auto___28453)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",50,new cljs.core.Keyword(null,"pass","pass",1574159993),11,331,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(1)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)),332,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___28452),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",50,new cljs.core.Keyword(null,"fail","fail",1706214930),11,331,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(1)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)),332,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___28452),null,(1),null)),(2),null)),null]));
}

}catch (e28432){var t__9190__auto___28454 = e28432;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",50,new cljs.core.Keyword(null,"error","error",-978969032),11,331,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(1)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)),332,t__9190__auto___28454,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Getting a square with no piece on it"], 0));

try{try{var values__9153__auto__ = (new cljs.core.List(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(3)], null)),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__9154__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9153__auto__);
if(cljs.core.truth_(result__9154__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),11,334,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(3)], null)),null),334,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),11,334,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(3)], null)),null),334,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto__),null,(1),null)),(2),null)),null]));
}

return result__9154__auto__;
}catch (e28433){var t__9190__auto__ = e28433;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),11,334,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(3)], null)),null),334,t__9190__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(reframe.chess.init_board_test.cljs$lang$var = new cljs.core.Var(function(){return reframe.chess.init_board_test;},new cljs.core.Symbol("reframe.chess","init-board-test","reframe.chess/init-board-test",-2134464074,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reframe.chess","reframe.chess",-25694726,null),new cljs.core.Symbol(null,"init-board-test","init-board-test",2077215970,null),"reframe/chess.cljs",25,1,328,328,cljs.core.List.EMPTY,null,(cljs.core.truth_(reframe.chess.init_board_test)?reframe.chess.init_board_test.cljs$lang$test:null)])));
reframe.chess.move_piece_test = (function reframe$chess$move_piece_test(){
return cljs.test.test_var(reframe.chess.move_piece_test.cljs$lang$var);
});
reframe.chess.move_piece_test.cljs$lang$test = (function (){
var board = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(7)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null)]);
var new_board = reframe.chess.move_piece(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(4)], null));
var board_after_illegal_move = reframe.chess.move_piece(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(4)], null));
var board_after_move_to_self = reframe.chess.move_piece(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(2)], null));
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Moving a pawn"], 0));

try{try{var values__9153__auto___28455 = (new cljs.core.List(null,new_board,(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(7)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null)]),null,(1),null)),(2),null));
var result__9154__auto___28456 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9153__auto___28455);
if(cljs.core.truth_(result__9154__auto___28456)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",50,new cljs.core.Keyword(null,"pass","pass",1574159993),11,345,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-board","new-board",-1603870110,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(7)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null)),348,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___28455),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",50,new cljs.core.Keyword(null,"fail","fail",1706214930),11,345,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-board","new-board",-1603870110,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(7)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null)),348,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___28455),null,(1),null)),(2),null)),null]));
}

}catch (e28434){var t__9190__auto___28457 = e28434;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",50,new cljs.core.Keyword(null,"error","error",-978969032),11,345,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-board","new-board",-1603870110,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e",(7)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null)),348,t__9190__auto___28457,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Trying to move when there is no piece"], 0));

try{try{var values__9153__auto___28458 = (new cljs.core.List(null,board,(new cljs.core.List(null,board_after_illegal_move,null,(1),null)),(2),null));
var result__9154__auto___28459 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9153__auto___28458);
if(cljs.core.truth_(result__9154__auto___28459)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),11,350,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"board-after-illegal-move","board-after-illegal-move",-1879029540,null)),350,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___28458),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),11,350,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"board-after-illegal-move","board-after-illegal-move",-1879029540,null)),350,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___28458),null,(1),null)),(2),null)),null]));
}

}catch (e28435){var t__9190__auto___28461 = e28435;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),11,350,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"board-after-illegal-move","board-after-illegal-move",-1879029540,null)),350,t__9190__auto___28461,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Trying to move when there is no piece"], 0));

try{try{var values__9153__auto__ = (new cljs.core.List(null,board,(new cljs.core.List(null,board_after_move_to_self,null,(1),null)),(2),null));
var result__9154__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9153__auto__);
if(cljs.core.truth_(result__9154__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),11,352,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"board-after-move-to-self","board-after-move-to-self",1313167516,null)),352,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),11,352,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"board-after-move-to-self","board-after-move-to-self",1313167516,null)),352,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto__),null,(1),null)),(2),null)),null]));
}

return result__9154__auto__;
}catch (e28436){var t__9190__auto__ = e28436;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["reframe/chess.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),11,352,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"board-after-move-to-self","board-after-move-to-self",1313167516,null)),352,t__9190__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(reframe.chess.move_piece_test.cljs$lang$var = new cljs.core.Var(function(){return reframe.chess.move_piece_test;},new cljs.core.Symbol("reframe.chess","move-piece-test","reframe.chess/move-piece-test",1548864703,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reframe.chess","reframe.chess",-25694726,null),new cljs.core.Symbol(null,"move-piece-test","move-piece-test",1699402091,null),"reframe/chess.cljs",25,1,336,336,cljs.core.List.EMPTY,null,(cljs.core.truth_(reframe.chess.move_piece_test)?reframe.chess.move_piece_test.cljs$lang$test:null)])));

//# sourceMappingURL=reframe.chess.js.map
