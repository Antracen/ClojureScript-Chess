goog.provide('reframe.core');
reframe.core.socket_id = new cljs.core.Keyword(null,"default","default",-1987822328);
reframe.core.initialize_app_state = (function reframe$core$initialize_app_state(){
var board = reframe.chess.init_board();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"pov","pov",796718351),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"history","history",-247395220),(new cljs.core.List(null,board,null,(1),null))], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),reframe.core.initialize_app_state);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"square-clicked","square-clicked",707081567),(function (db,p__27005){
var vec__27006 = p__27005;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(0),null);
var vec__27009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(1),null);
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27009,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27009,(1),null);
var square_from = new cljs.core.Keyword(null,"square-from","square-from",503910693).cljs$core$IFn$_invoke$arity$1(db);
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(db);
var square = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe.chess.number_to_letter(file),rank], null);
if((square_from == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"square-from","square-from",503910693),square);
} else {
var new_board = reframe.chess.move_piece(board,square_from,square);
var new_history = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(history,new_board);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(board,new_board)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","push","websocket-fx.core/push",1604923786),reframe.core.socket_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"client-state","client-state",-885057982),new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"history","history",-247395220),new_history], null)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"board","board",-1907017633),new_board,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"square-from","square-from",503910693),null,new cljs.core.Keyword(null,"history","history",-247395220),new_history], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"square-from","square-from",503910693),null);
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-pov","change-pov",-756618748),(function (coeffects,_){
var db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(coeffects);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pov","pov",796718351),reframe.chess.opposite_color(new cljs.core.Keyword(null,"pov","pov",796718351).cljs$core$IFn$_invoke$arity$1(db)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo-move","undo-move",1142570576),(function (coeffects,_){
var db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(coeffects);
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(history),(1))){
return null;
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","push","websocket-fx.core/push",1604923786),reframe.core.socket_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"client-state","client-state",-885057982),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(1)),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.rest(history)], null)], null));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(1))),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.rest(history))], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe.core","websocket-connected","reframe.core/websocket-connected",-648968167),(function (coeffects,_){
var db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(coeffects);
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(db);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","push","websocket-fx.core/push",1604923786),reframe.core.socket_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"client-state","client-state",-885057982),new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"history","history",-247395220),history], null)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","subscribe","websocket-fx.core/subscribe",-927248639),reframe.core.socket_id,new cljs.core.Keyword(null,"game-subscription","game-subscription",-1464171413),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"subscribe-to-game","subscribe-to-game",-717929969)], null),new cljs.core.Keyword(null,"on-message","on-message",1662987808),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe.core","game-updated","reframe.core/game-updated",-2016325830)], null)], null)], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe.core","websocket-disconnected","reframe.core/websocket-disconnected",-110409947),(function (_,___$1){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["disconnected"], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe.core","game-updated","reframe.core/game-updated",-2016325830),(function (coeffects,p__27012){
var vec__27013 = p__27012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27013,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27013,(1),null);
var db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(coeffects);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(data)], 0))], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"chess-query-id","chess-query-id",-495887498),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"pov-query-id","pov-query-id",-488128472),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"pov","pov",796718351).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
reframe.core.piece_img = (function reframe$core$piece_img(p__27016){
var map__27017 = p__27016;
var map__27017__$1 = cljs.core.__destructure_map(map__27017);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27017__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27017__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),["imgs/",cljs.core.name(color),cljs.core.name(piece),".svg"].join('')], null)], null);
});
reframe.core.square_clicked = (function reframe$core$square_clicked(rank,file){
return (function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"square-clicked","square-clicked",707081567),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rank,file], null)], null));
});
});
/**
 * Component giving GUI of the board
 */
reframe.core.chess_board = (function reframe$core$chess_board(board,pov){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chess-board","div#chess-board",98097851),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"width","width",-384071477),"min(50vh, 50vw)",new cljs.core.Keyword(null,"height","height",1025178622),"min(50vh, 50vw)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid grey"], null)], null),(function (){var rank_range = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pov,new cljs.core.Keyword(null,"black","black",1294279647)))?cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)):cljs.core.range.cljs$core$IFn$_invoke$arity$3((8),(0),(-1)));
var file_range = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pov,new cljs.core.Keyword(null,"black","black",1294279647)))?cljs.core.range.cljs$core$IFn$_invoke$arity$3((8),(0),(-1)):cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
var iter__4611__auto__ = (function reframe$core$chess_board_$_iter__27018(s__27019){
return (new cljs.core.LazySeq(null,(function (){
var s__27019__$1 = s__27019;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27019__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var rank = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__27019__$1,rank,xs__6308__auto__,temp__5753__auto__,rank_range,file_range){
return (function reframe$core$chess_board_$_iter__27018_$_iter__27020(s__27021){
return (new cljs.core.LazySeq(null,((function (s__27019__$1,rank,xs__6308__auto__,temp__5753__auto__,rank_range,file_range){
return (function (){
var s__27021__$1 = s__27021;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__27021__$1);
if(temp__5753__auto____$1){
var s__27021__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27021__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__27021__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__27023 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__27022 = (0);
while(true){
if((i__27022 < size__4610__auto__)){
var file = cljs.core._nth(c__4609__auto__,i__27022);
cljs.core.chunk_append(b__27023,(function (){var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe.chess.number_to_letter(file),rank], null));
if(cljs.core.even_QMARK_((file + rank))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#light-square","div#light-square",-976166719),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#dee3e6",new cljs.core.Keyword(null,"width","width",-384071477),"12.5%",new cljs.core.Keyword(null,"height","height",1025178622),"12.5%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),reframe.core.square_clicked(rank,file),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rank),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')], null),(((piece == null))?null:reframe.core.piece_img(piece))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#dark-square","div#dark-square",-349750008),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#8ca2ad",new cljs.core.Keyword(null,"width","width",-384071477),"12.5%",new cljs.core.Keyword(null,"height","height",1025178622),"12.5%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),reframe.core.square_clicked(rank,file),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rank),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')], null),(((piece == null))?null:reframe.core.piece_img(piece))], null);
}
})());

var G__27024 = (i__27022 + (1));
i__27022 = G__27024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27023),reframe$core$chess_board_$_iter__27018_$_iter__27020(cljs.core.chunk_rest(s__27021__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27023),null);
}
} else {
var file = cljs.core.first(s__27021__$2);
return cljs.core.cons((function (){var piece = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe.chess.number_to_letter(file),rank], null));
if(cljs.core.even_QMARK_((file + rank))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#light-square","div#light-square",-976166719),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#dee3e6",new cljs.core.Keyword(null,"width","width",-384071477),"12.5%",new cljs.core.Keyword(null,"height","height",1025178622),"12.5%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),reframe.core.square_clicked(rank,file),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rank),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')], null),(((piece == null))?null:reframe.core.piece_img(piece))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#dark-square","div#dark-square",-349750008),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#8ca2ad",new cljs.core.Keyword(null,"width","width",-384071477),"12.5%",new cljs.core.Keyword(null,"height","height",1025178622),"12.5%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),reframe.core.square_clicked(rank,file),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rank),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')], null),(((piece == null))?null:reframe.core.piece_img(piece))], null);
}
})(),reframe$core$chess_board_$_iter__27018_$_iter__27020(cljs.core.rest(s__27021__$2)));
}
} else {
return null;
}
break;
}
});})(s__27019__$1,rank,xs__6308__auto__,temp__5753__auto__,rank_range,file_range))
,null,null));
});})(s__27019__$1,rank,xs__6308__auto__,temp__5753__auto__,rank_range,file_range))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(file_range));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,reframe$core$chess_board_$_iter__27018(cljs.core.rest(s__27019__$1)));
} else {
var G__27025 = cljs.core.rest(s__27019__$1);
s__27019__$1 = G__27025;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(rank_range);
})()], null);
});
reframe.core.ui = (function reframe$core$ui(){
var board = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chess-query-id","chess-query-id",-495887498)], null));
var pov = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pov-query-id","pov-query-id",-488128472)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"ClojureScript chess!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe.core.chess_board,cljs.core.deref(board),cljs.core.deref(pov)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-pov","change-pov",-756618748)], null));
})], null),"Rotate board"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-move","undo-move",1142570576)], null));
})], null),"Undo move"], null)], null);
});
reframe.core.render = (function reframe$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe.core.ui], null),document.getElementById("app"));
});
reframe.core.clear_cache_and_render_BANG_ = (function reframe$core$clear_cache_and_render_BANG_(){
re_frame.core.clear_subscription_cache_BANG_();

return reframe.core.render();
});
reframe.core.run = (function reframe$core$run(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reframe.core.render();
});
reframe.core.options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),"wss:chess-server.herokuapp.com:5000/ws",new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe.core","websocket-connected","reframe.core/websocket-connected",-648968167)], null),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe.core","websocket-disconnected","reframe.core/websocket-disconnected",-110409947)], null)], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","connect","websocket-fx.core/connect",-1719352170),reframe.core.socket_id,reframe.core.options], null));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","disconnect","websocket-fx.core/disconnect",1210384580),reframe.core.socket_id], null));

//# sourceMappingURL=reframe.core.js.map
