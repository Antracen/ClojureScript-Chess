goog.provide('websocket_fx.core');
if((typeof websocket_fx !== 'undefined') && (typeof websocket_fx.core !== 'undefined') && (typeof websocket_fx.core.CONNECTIONS !== 'undefined')){
} else {
websocket_fx.core.CONNECTIONS = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
websocket_fx.core.get_websocket_port = (function websocket_fx$core$get_websocket_port(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((window["location"]["port"]));
});
websocket_fx.core.get_websocket_host = (function websocket_fx$core$get_websocket_host(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((window["location"]["hostname"]));
});
websocket_fx.core.get_websocket_proto = (function websocket_fx$core$get_websocket_proto(){
var proto = cljs.core.str.cljs$core$IFn$_invoke$arity$1((window["location"]["protocol"]));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, ["http:","ws","https:","wss"], null),proto);
});
websocket_fx.core.websocket_url = (function websocket_fx$core$websocket_url(){
var proto = websocket_fx.core.get_websocket_proto();
var host = websocket_fx.core.get_websocket_host();
var port = websocket_fx.core.get_websocket_port();
var path = "/ws";
if(clojure.string.blank_QMARK_(port)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto),"://",host,path].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto),"://",host,":",port,path].join('');
}
});
websocket_fx.core.dissoc_in = (function websocket_fx$core$dissoc_in(m,p__27950){
var vec__27951 = p__27950;
var seq__27952 = cljs.core.seq(vec__27951);
var first__27953 = cljs.core.first(seq__27952);
var seq__27952__$1 = cljs.core.next(seq__27952);
var k = first__27953;
var ks = seq__27952__$1;
if(ks){
if(cljs.core.map_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,k,(function (p1__27948_SHARP_){
return (websocket_fx.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? websocket_fx.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(p1__27948_SHARP_,ks) : websocket_fx.core.dissoc_in.call(null,p1__27948_SHARP_,ks));
}));
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
websocket_fx.core.concatv = (function websocket_fx$core$concatv(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28387 = arguments.length;
var i__4819__auto___28388 = (0);
while(true){
if((i__4819__auto___28388 < len__4818__auto___28387)){
args__4824__auto__.push((arguments[i__4819__auto___28388]));

var G__28389 = (i__4819__auto___28388 + (1));
i__4819__auto___28388 = G__28389;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return websocket_fx.core.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(websocket_fx.core.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,more));
}));

(websocket_fx.core.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(websocket_fx.core.concatv.cljs$lang$applyTo = (function (seq27957){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27957));
}));

websocket_fx.core.keyword__GT_format = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"edn","edn",1317840885),haslett.format.edn,new cljs.core.Keyword(null,"json","json",1279968570),haslett.format.json,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),haslett.format.transit,new cljs.core.Keyword(null,"transit-json-verbose","transit-json-verbose",2127200557),haslett.format.transit], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","connect","websocket-fx.core/connect",-1719352170),(function (p__27963,p__27964){
var map__27968 = p__27963;
var map__27968__$1 = cljs.core.__destructure_map(map__27968);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27968__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27972 = p__27964;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27972,(0),null);
var socket_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27972,(1),null);
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27972,(2),null);
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"options","options",99638489),command], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id], null),data),new cljs.core.Keyword("websocket-fx.core","connect","websocket-fx.core/connect",-1719352170),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket-id","socket-id",1022615280),socket_id,new cljs.core.Keyword(null,"options","options",99638489),command], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","disconnect","websocket-fx.core/disconnect",1210384580),(function (p__27992,p__27993){
var map__27994 = p__27992;
var map__27994__$1 = cljs.core.__destructure_map(map__27994);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27994__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27995 = p__27993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27995,(0),null);
var socket_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27995,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),websocket_fx.core.dissoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id], null)),new cljs.core.Keyword("websocket-fx.core","disconnect","websocket-fx.core/disconnect",1210384580),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"socket-id","socket-id",1022615280),socket_id], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","connected","websocket-fx.core/connected",-2070989576),(function (p__27999,p__28000){
var map__28003 = p__27999;
var map__28003__$1 = cljs.core.__destructure_map(map__28003);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28003__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28004 = p__28000;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28004,(0),null);
var socket_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28004,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"connected","connected",-169833045)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.vec((function (){var iter__4611__auto__ = (function websocket_fx$core$iter__28011(s__28012){
return (new cljs.core.LazySeq(null,(function (){
var s__28012__$1 = s__28012;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28012__$1);
if(temp__5753__auto__){
var s__28012__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28012__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28012__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28014 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28013 = (0);
while(true){
if((i__28013 < size__4610__auto__)){
var sub = cljs.core._nth(c__4609__auto__,i__28013);
cljs.core.chunk_append(b__28014,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","subscribe","websocket-fx.core/subscribe",-927248639),socket_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(sub,new cljs.core.Keyword(null,"id","id",-1388402092)),sub], null));

var G__28390 = (i__28013 + (1));
i__28013 = G__28390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28014),websocket_fx$core$iter__28011(cljs.core.chunk_rest(s__28012__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28014),null);
}
} else {
var sub = cljs.core.first(s__28012__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","subscribe","websocket-fx.core/subscribe",-927248639),socket_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(sub,new cljs.core.Keyword(null,"id","id",-1388402092)),sub], null),websocket_fx$core$iter__28011(cljs.core.rest(s__28012__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)], null),cljs.core.PersistentArrayMap.EMPTY)));
})())], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","disconnected","websocket-fx.core/disconnected",-1639781829),(function (p__28015,p__28016){
var map__28017 = p__28015;
var map__28017__$1 = cljs.core.__destructure_map(map__28017);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28017__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28018 = p__28016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(0),null);
var socket_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(1),null);
var cause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(2),null);
var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"options","options",99638489)], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"reconnecting","reconnecting",-172463711)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.vec((function (){var iter__4611__auto__ = (function websocket_fx$core$iter__28021(s__28022){
return (new cljs.core.LazySeq(null,(function (){
var s__28022__$1 = s__28022;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28022__$1);
if(temp__5753__auto__){
var s__28022__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28022__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28022__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28024 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28023 = (0);
while(true){
if((i__28023 < size__4610__auto__)){
var request_id = cljs.core._nth(c__4609__auto__,i__28023);
cljs.core.chunk_append(b__28024,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","request-timeout","websocket-fx.core/request-timeout",1441765950),socket_id,request_id,cause], null));

var G__28391 = (i__28023 + (1));
i__28023 = G__28391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28024),websocket_fx$core$iter__28021(cljs.core.chunk_rest(s__28022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28024),null);
}
} else {
var request_id = cljs.core.first(s__28022__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","request-timeout","websocket-fx.core/request-timeout",1441765950),socket_id,request_id,cause], null),websocket_fx$core$iter__28021(cljs.core.rest(s__28022__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"requests","requests",-733055638)], null),cljs.core.PersistentArrayMap.EMPTY)));
})()),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(2000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","connect","websocket-fx.core/connect",-1719352170),socket_id,options], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","request","websocket-fx.core/request",430619552),(function (p__28025,p__28026){
var map__28027 = p__28025;
var map__28027__$1 = cljs.core.__destructure_map(map__28027);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28027__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28028 = p__28026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28028,(0),null);
var socket_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28028,(1),null);
var map__28031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28028,(2),null);
var map__28031__$1 = cljs.core.__destructure_map(map__28031);
var command = map__28031__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28031__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28031__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var payload = (function (){var G__28032 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"proto","proto",811784976),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"data","data",-232669377),message], null);
if((!((timeout == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28032,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout);
} else {
return G__28032;
}
})();
var path = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"requests","requests",-733055638),cljs.core.get.cljs$core$IFn$_invoke$arity$2(payload,new cljs.core.Keyword(null,"id","id",-1388402092))], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,path,command),new cljs.core.Keyword("websocket-fx.core","ws-message","websocket-fx.core/ws-message",413406340),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket-id","socket-id",1022615280),socket_id,new cljs.core.Keyword(null,"message","message",-406056002),payload], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","request-response","websocket-fx.core/request-response",1132952098),(function (p__28033,p__28034){
var map__28035 = p__28033;
var map__28035__$1 = cljs.core.__destructure_map(map__28035);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28035__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28036 = p__28034;
var seq__28037 = cljs.core.seq(vec__28036);
var first__28038 = cljs.core.first(seq__28037);
var seq__28037__$1 = cljs.core.next(seq__28037);
var _ = first__28038;
var first__28038__$1 = cljs.core.first(seq__28037__$1);
var seq__28037__$2 = cljs.core.next(seq__28037__$1);
var socket_id = first__28038__$1;
var first__28038__$2 = cljs.core.first(seq__28037__$2);
var seq__28037__$3 = cljs.core.next(seq__28037__$2);
var request_id = first__28038__$2;
var more = seq__28037__$3;
var path = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"requests","requests",-733055638),request_id], null);
var request = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
var G__28039 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),websocket_fx.core.dissoc_in(db,path)], null);
if(cljs.core.contains_QMARK_(request,new cljs.core.Keyword(null,"on-response","on-response",-1635376834))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28039,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),websocket_fx.core.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-response","on-response",-1635376834).cljs$core$IFn$_invoke$arity$1(request),more], 0)));
} else {
return G__28039;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","request-timeout","websocket-fx.core/request-timeout",1441765950),(function (p__28040,p__28041){
var map__28042 = p__28040;
var map__28042__$1 = cljs.core.__destructure_map(map__28042);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28042__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28043 = p__28041;
var seq__28044 = cljs.core.seq(vec__28043);
var first__28045 = cljs.core.first(seq__28044);
var seq__28044__$1 = cljs.core.next(seq__28044);
var _ = first__28045;
var first__28045__$1 = cljs.core.first(seq__28044__$1);
var seq__28044__$2 = cljs.core.next(seq__28044__$1);
var socket_id = first__28045__$1;
var first__28045__$2 = cljs.core.first(seq__28044__$2);
var seq__28044__$3 = cljs.core.next(seq__28044__$2);
var request_id = first__28045__$2;
var more = seq__28044__$3;
var path = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"requests","requests",-733055638),request_id], null);
var request = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
var G__28046 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),websocket_fx.core.dissoc_in(db,path)], null);
if(cljs.core.contains_QMARK_(request,new cljs.core.Keyword(null,"on-timeout","on-timeout",-672710385))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28046,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),websocket_fx.core.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-timeout","on-timeout",-672710385).cljs$core$IFn$_invoke$arity$1(request),more], 0)));
} else {
return G__28046;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","subscribe","websocket-fx.core/subscribe",-927248639),(function (p__28047,p__28048){
var map__28049 = p__28047;
var map__28049__$1 = cljs.core.__destructure_map(map__28049);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28050 = p__28048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28050,(0),null);
var socket_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28050,(1),null);
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28050,(2),null);
var map__28053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28050,(3),null);
var map__28053__$1 = cljs.core.__destructure_map(map__28053);
var command = map__28053__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28053__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var path = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),topic], null);
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),topic,new cljs.core.Keyword(null,"proto","proto",811784976),new cljs.core.Keyword(null,"subscription","subscription",1949009182),new cljs.core.Keyword(null,"data","data",-232669377),message], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,path,command),new cljs.core.Keyword("websocket-fx.core","ws-message","websocket-fx.core/ws-message",413406340),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket-id","socket-id",1022615280),socket_id,new cljs.core.Keyword(null,"message","message",-406056002),payload], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","subscription-message","websocket-fx.core/subscription-message",-580707945),(function (p__28054,p__28055){
var map__28056 = p__28054;
var map__28056__$1 = cljs.core.__destructure_map(map__28056);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28056__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28057 = p__28055;
var seq__28058 = cljs.core.seq(vec__28057);
var first__28059 = cljs.core.first(seq__28058);
var seq__28058__$1 = cljs.core.next(seq__28058);
var _ = first__28059;
var first__28059__$1 = cljs.core.first(seq__28058__$1);
var seq__28058__$2 = cljs.core.next(seq__28058__$1);
var socket_id = first__28059__$1;
var first__28059__$2 = cljs.core.first(seq__28058__$2);
var seq__28058__$3 = cljs.core.next(seq__28058__$2);
var subscription_id = first__28059__$2;
var more = seq__28058__$3;
var path = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),subscription_id], null);
var subscription = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
var G__28060 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.contains_QMARK_(subscription,new cljs.core.Keyword(null,"on-message","on-message",1662987808))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28060,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),websocket_fx.core.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-message","on-message",1662987808).cljs$core$IFn$_invoke$arity$1(subscription),more], 0)));
} else {
return G__28060;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","unsubscribe","websocket-fx.core/unsubscribe",364040416),(function (p__28061,p__28062){
var map__28063 = p__28061;
var map__28063__$1 = cljs.core.__destructure_map(map__28063);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28063__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28064 = p__28062;
var seq__28065 = cljs.core.seq(vec__28064);
var first__28066 = cljs.core.first(seq__28065);
var seq__28065__$1 = cljs.core.next(seq__28065);
var _ = first__28066;
var first__28066__$1 = cljs.core.first(seq__28065__$1);
var seq__28065__$2 = cljs.core.next(seq__28065__$1);
var socket_id = first__28066__$1;
var first__28066__$2 = cljs.core.first(seq__28065__$2);
var seq__28065__$3 = cljs.core.next(seq__28065__$2);
var subscription_id = first__28066__$2;
var more = seq__28065__$3;
var path = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),subscription_id], null);
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),subscription_id,new cljs.core.Keyword(null,"proto","proto",811784976),new cljs.core.Keyword(null,"subscription","subscription",1949009182),new cljs.core.Keyword(null,"close","close",1835149582),true], null);
var subscription = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
var G__28067 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),websocket_fx.core.dissoc_in(db,path)], null);
var G__28067__$1 = (((!((subscription == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28067,new cljs.core.Keyword("websocket-fx.core","ws-message","websocket-fx.core/ws-message",413406340),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket-id","socket-id",1022615280),socket_id,new cljs.core.Keyword(null,"message","message",-406056002),payload], null)):G__28067);
if(cljs.core.contains_QMARK_(subscription,new cljs.core.Keyword(null,"on-close","on-close",-761178394))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28067__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),websocket_fx.core.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-close","on-close",-761178394).cljs$core$IFn$_invoke$arity$1(subscription),more], 0)));
} else {
return G__28067__$1;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","subscription-closed","websocket-fx.core/subscription-closed",-1831119820),(function (p__28068,p__28069){
var map__28070 = p__28068;
var map__28070__$1 = cljs.core.__destructure_map(map__28070);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28070__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28071 = p__28069;
var seq__28072 = cljs.core.seq(vec__28071);
var first__28073 = cljs.core.first(seq__28072);
var seq__28072__$1 = cljs.core.next(seq__28072);
var _ = first__28073;
var first__28073__$1 = cljs.core.first(seq__28072__$1);
var seq__28072__$2 = cljs.core.next(seq__28072__$1);
var socket_id = first__28073__$1;
var first__28073__$2 = cljs.core.first(seq__28072__$2);
var seq__28072__$3 = cljs.core.next(seq__28072__$2);
var subscription_id = first__28073__$2;
var more = seq__28072__$3;
var path = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),subscription_id], null);
var temp__5755__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
if((temp__5755__auto__ == null)){
return null;
} else {
var subscription = temp__5755__auto__;
var G__28074 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),websocket_fx.core.dissoc_in(db,path)], null);
if(cljs.core.contains_QMARK_(subscription,new cljs.core.Keyword(null,"on-close","on-close",-761178394))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28074,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),websocket_fx.core.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-close","on-close",-761178394).cljs$core$IFn$_invoke$arity$1(subscription),more], 0)));
} else {
return G__28074;
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket-fx.core","push","websocket-fx.core/push",1604923786),(function (_,p__28075){
var vec__28076 = p__28075;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28076,(0),null);
var socket_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28076,(1),null);
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28076,(2),null);
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"proto","proto",811784976),new cljs.core.Keyword(null,"push","push",799791267),new cljs.core.Keyword(null,"data","data",-232669377),command], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("websocket-fx.core","ws-message","websocket-fx.core/ws-message",413406340),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket-id","socket-id",1022615280),socket_id,new cljs.core.Keyword(null,"message","message",-406056002),payload], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("websocket-fx.core","connect","websocket-fx.core/connect",-1719352170),(function (p__28079){
var map__28080 = p__28079;
var map__28080__$1 = cljs.core.__destructure_map(map__28080);
var socket_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28080__$1,new cljs.core.Keyword(null,"socket-id","socket-id",1022615280));
var map__28081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28080__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__28081__$1 = cljs.core.__destructure_map(map__28081);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28081__$1,new cljs.core.Keyword(null,"url","url",276297046),websocket_fx.core.websocket_url());
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28081__$1,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885));
var on_connect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28081__$1,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056));
var on_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28081__$1,new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814));
var sink_proxy = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(websocket_fx.core.CONNECTIONS,cljs.core.assoc,socket_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sink","sink",186835933),sink_proxy], null));

var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26036__auto__ = (function (state_28276){
var state_val_28277 = (state_28276[(1)]);
if((state_val_28277 === (1))){
var inst_28083 = [new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_28084 = (websocket_fx.core.keyword__GT_format.cljs$core$IFn$_invoke$arity$1 ? websocket_fx.core.keyword__GT_format.cljs$core$IFn$_invoke$arity$1(format) : websocket_fx.core.keyword__GT_format.call(null,format));
var inst_28085 = [inst_28084];
var inst_28086 = cljs.core.PersistentHashMap.fromArrays(inst_28083,inst_28085);
var inst_28087 = haslett.client.connect.cljs$core$IFn$_invoke$arity$2(url,inst_28086);
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28276__$1,(2),inst_28087);
} else {
if((state_val_28277 === (2))){
var inst_28090 = (state_28276[(7)]);
var inst_28092 = (state_28276[(8)]);
var inst_28094 = (state_28276[(9)]);
var inst_28095 = (state_28276[(10)]);
var inst_28093 = (state_28276[(11)]);
var inst_28091 = (state_28276[(12)]);
var inst_28089 = (state_28276[(2)]);
var inst_28090__$1 = cljs.core.__destructure_map(inst_28089);
var inst_28091__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28090__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var inst_28092__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28090__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var inst_28093__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28090__$1,new cljs.core.Keyword(null,"sink","sink",186835933));
var inst_28094__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28090__$1,new cljs.core.Keyword(null,"close-status","close-status",-239776180));
var inst_28095__$1 = cljs.core.async.mult(inst_28092__$1);
var inst_28096 = [new cljs.core.Keyword(null,"sink","sink",186835933),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"socket","socket",59137063)];
var inst_28097 = [sink_proxy,inst_28092__$1,inst_28091__$1];
var inst_28098 = cljs.core.PersistentHashMap.fromArrays(inst_28096,inst_28097);
var inst_28099 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(websocket_fx.core.CONNECTIONS,cljs.core.assoc,socket_id,inst_28098);
var inst_28121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28122 = (function (){var map__28082 = inst_28090__$1;
var socket = inst_28091__$1;
var source = inst_28092__$1;
var sink = inst_28093__$1;
var close_status = inst_28094__$1;
var mult = inst_28095__$1;
var c__26215__auto____$1 = inst_28121;
return (function (){
var f__26216__auto__ = (function (){var switch__26036__auto__ = (function (state_28119){
var state_val_28120 = (state_28119[(1)]);
if((state_val_28120 === (1))){
var state_28119__$1 = state_28119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28119__$1,(2),close_status);
} else {
if((state_val_28120 === (2))){
var inst_28101 = (state_28119[(7)]);
var inst_28101__$1 = (state_28119[(2)]);
var inst_28102 = (inst_28101__$1 == null);
var state_28119__$1 = (function (){var statearr_28278 = state_28119;
(statearr_28278[(7)] = inst_28101__$1);

return statearr_28278;
})();
if(cljs.core.truth_(inst_28102)){
var statearr_28279_28401 = state_28119__$1;
(statearr_28279_28401[(1)] = (3));

} else {
var statearr_28280_28402 = state_28119__$1;
(statearr_28280_28402[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (3))){
var state_28119__$1 = state_28119;
var statearr_28281_28403 = state_28119__$1;
(statearr_28281_28403[(2)] = null);

(statearr_28281_28403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (4))){
var inst_28101 = (state_28119[(7)]);
var inst_28105 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28106 = [new cljs.core.Keyword("websocket-fx.core","disconnected","websocket-fx.core/disconnected",-1639781829),socket_id,inst_28101];
var inst_28107 = (new cljs.core.PersistentVector(null,3,(5),inst_28105,inst_28106,null));
var inst_28108 = re_frame.core.dispatch(inst_28107);
var inst_28109 = (on_disconnect == null);
var inst_28110 = cljs.core.not(inst_28109);
var state_28119__$1 = (function (){var statearr_28282 = state_28119;
(statearr_28282[(8)] = inst_28108);

return statearr_28282;
})();
if(inst_28110){
var statearr_28283_28410 = state_28119__$1;
(statearr_28283_28410[(1)] = (6));

} else {
var statearr_28284_28411 = state_28119__$1;
(statearr_28284_28411[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (5))){
var inst_28117 = (state_28119[(2)]);
var state_28119__$1 = state_28119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28119__$1,inst_28117);
} else {
if((state_val_28120 === (6))){
var inst_28112 = re_frame.core.dispatch(on_disconnect);
var state_28119__$1 = state_28119;
var statearr_28285_28412 = state_28119__$1;
(statearr_28285_28412[(2)] = inst_28112);

(statearr_28285_28412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (7))){
var state_28119__$1 = state_28119;
var statearr_28286_28413 = state_28119__$1;
(statearr_28286_28413[(2)] = null);

(statearr_28286_28413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (8))){
var inst_28115 = (state_28119[(2)]);
var state_28119__$1 = state_28119;
var statearr_28287_28414 = state_28119__$1;
(statearr_28287_28414[(2)] = inst_28115);

(statearr_28287_28414[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var websocket_fx$core$state_machine__26037__auto__ = null;
var websocket_fx$core$state_machine__26037__auto____0 = (function (){
var statearr_28288 = [null,null,null,null,null,null,null,null,null];
(statearr_28288[(0)] = websocket_fx$core$state_machine__26037__auto__);

(statearr_28288[(1)] = (1));

return statearr_28288;
});
var websocket_fx$core$state_machine__26037__auto____1 = (function (state_28119){
while(true){
var ret_value__26038__auto__ = (function (){try{while(true){
var result__26039__auto__ = switch__26036__auto__(state_28119);
if(cljs.core.keyword_identical_QMARK_(result__26039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26039__auto__;
}
break;
}
}catch (e28289){var ex__26040__auto__ = e28289;
var statearr_28290_28415 = state_28119;
(statearr_28290_28415[(2)] = ex__26040__auto__);


if(cljs.core.seq((state_28119[(4)]))){
var statearr_28291_28416 = state_28119;
(statearr_28291_28416[(1)] = cljs.core.first((state_28119[(4)])));

} else {
throw ex__26040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28417 = state_28119;
state_28119 = G__28417;
continue;
} else {
return ret_value__26038__auto__;
}
break;
}
});
websocket_fx$core$state_machine__26037__auto__ = function(state_28119){
switch(arguments.length){
case 0:
return websocket_fx$core$state_machine__26037__auto____0.call(this);
case 1:
return websocket_fx$core$state_machine__26037__auto____1.call(this,state_28119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
websocket_fx$core$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$0 = websocket_fx$core$state_machine__26037__auto____0;
websocket_fx$core$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$1 = websocket_fx$core$state_machine__26037__auto____1;
return websocket_fx$core$state_machine__26037__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_28292 = f__26216__auto__();
(statearr_28292[(6)] = c__26215__auto____$1);

return statearr_28292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
});
})();
var inst_28123 = cljs.core.async.impl.dispatch.run(inst_28122);
var inst_28124 = cljs.core.async.poll_BANG_(inst_28094__$1);
var state_28276__$1 = (function (){var statearr_28293 = state_28276;
(statearr_28293[(13)] = inst_28099);

(statearr_28293[(14)] = inst_28123);

(statearr_28293[(7)] = inst_28090__$1);

(statearr_28293[(8)] = inst_28092__$1);

(statearr_28293[(9)] = inst_28094__$1);

(statearr_28293[(10)] = inst_28095__$1);

(statearr_28293[(11)] = inst_28093__$1);

(statearr_28293[(12)] = inst_28091__$1);

return statearr_28293;
})();
if(cljs.core.truth_(inst_28124)){
var statearr_28294_28418 = state_28276__$1;
(statearr_28294_28418[(1)] = (3));

} else {
var statearr_28295_28419 = state_28276__$1;
(statearr_28295_28419[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (3))){
var state_28276__$1 = state_28276;
var statearr_28296_28420 = state_28276__$1;
(statearr_28296_28420[(2)] = null);

(statearr_28296_28420[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (4))){
var inst_28090 = (state_28276[(7)]);
var inst_28092 = (state_28276[(8)]);
var inst_28094 = (state_28276[(9)]);
var inst_28095 = (state_28276[(10)]);
var inst_28093 = (state_28276[(11)]);
var inst_28091 = (state_28276[(12)]);
var inst_28259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28260 = (function (){var map__28082 = inst_28090;
var socket = inst_28091;
var source = inst_28092;
var sink = inst_28093;
var close_status = inst_28094;
var mult = inst_28095;
var c__26215__auto____$1 = inst_28259;
return (function (){
var f__26216__auto__ = (function (){var switch__26036__auto__ = (function (state_28257){
var state_val_28258 = (state_28257[(1)]);
if((state_val_28258 === (7))){
var inst_28253 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28297_28421 = state_28257__$1;
(statearr_28297_28421[(2)] = inst_28253);

(statearr_28297_28421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (20))){
var state_28257__$1 = state_28257;
var statearr_28298_28422 = state_28257__$1;
(statearr_28298_28422[(2)] = null);

(statearr_28298_28422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (1))){
var state_28257__$1 = state_28257;
var statearr_28299_28423 = state_28257__$1;
(statearr_28299_28423[(2)] = null);

(statearr_28299_28423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (4))){
var inst_28129 = (state_28257[(7)]);
var inst_28129__$1 = (state_28257[(2)]);
var inst_28130 = (inst_28129__$1 == null);
var state_28257__$1 = (function (){var statearr_28300 = state_28257;
(statearr_28300[(7)] = inst_28129__$1);

return statearr_28300;
})();
if(cljs.core.truth_(inst_28130)){
var statearr_28301_28424 = state_28257__$1;
(statearr_28301_28424[(1)] = (5));

} else {
var statearr_28302_28425 = state_28257__$1;
(statearr_28302_28425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (15))){
var inst_28136 = (state_28257[(8)]);
var inst_28135 = (state_28257[(9)]);
var inst_28137 = (state_28257[(10)]);
var inst_28240 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"proto","proto",811784976),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_28241 = [inst_28135,inst_28136,inst_28137];
var inst_28242 = cljs.core.PersistentHashMap.fromArrays(inst_28240,inst_28241);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28257__$1,(18),sink,inst_28242);
} else {
if((state_val_28258 === (21))){
var inst_28251 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28303_28426 = state_28257__$1;
(statearr_28303_28426[(2)] = inst_28251);

(statearr_28303_28426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (13))){
var inst_28228 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28304_28427 = state_28257__$1;
(statearr_28304_28427[(2)] = inst_28228);

(statearr_28304_28427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (6))){
var inst_28136 = (state_28257[(8)]);
var inst_28134 = (state_28257[(11)]);
var inst_28129 = (state_28257[(7)]);
var inst_28134__$1 = cljs.core.__destructure_map(inst_28129);
var inst_28135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28134__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var inst_28136__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28134__$1,new cljs.core.Keyword(null,"proto","proto",811784976));
var inst_28137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28134__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_28138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28134__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var inst_28139 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_28134__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(10000));
var inst_28140 = [new cljs.core.Keyword(null,"request","request",1772954723),null];
var inst_28141 = (new cljs.core.PersistentArrayMap(null,1,inst_28140,null));
var inst_28142 = (new cljs.core.PersistentHashSet(null,inst_28141,null));
var inst_28143 = (inst_28142.cljs$core$IFn$_invoke$arity$1 ? inst_28142.cljs$core$IFn$_invoke$arity$1(inst_28136__$1) : inst_28142.call(null,inst_28136__$1));
var state_28257__$1 = (function (){var statearr_28305 = state_28257;
(statearr_28305[(8)] = inst_28136__$1);

(statearr_28305[(9)] = inst_28135);

(statearr_28305[(11)] = inst_28134__$1);

(statearr_28305[(12)] = inst_28139);

(statearr_28305[(13)] = inst_28138);

(statearr_28305[(10)] = inst_28137);

return statearr_28305;
})();
if(cljs.core.truth_(inst_28143)){
var statearr_28306_28428 = state_28257__$1;
(statearr_28306_28428[(1)] = (8));

} else {
var statearr_28307_28429 = state_28257__$1;
(statearr_28307_28429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (17))){
var inst_28238 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28308_28430 = state_28257__$1;
(statearr_28308_28430[(2)] = inst_28238);

(statearr_28308_28430[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (3))){
var inst_28255 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28257__$1,inst_28255);
} else {
if((state_val_28258 === (12))){
var state_28257__$1 = state_28257;
var statearr_28309_28431 = state_28257__$1;
(statearr_28309_28431[(2)] = null);

(statearr_28309_28431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (2))){
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28257__$1,(4),sink_proxy);
} else {
if((state_val_28258 === (19))){
var state_28257__$1 = state_28257;
var statearr_28310_28432 = state_28257__$1;
(statearr_28310_28432[(2)] = null);

(statearr_28310_28432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (11))){
var inst_28136 = (state_28257[(8)]);
var inst_28135 = (state_28257[(9)]);
var inst_28134 = (state_28257[(11)]);
var inst_28139 = (state_28257[(12)]);
var inst_28129 = (state_28257[(7)]);
var inst_28138 = (state_28257[(13)]);
var inst_28137 = (state_28257[(10)]);
var inst_28187 = (function (){var temp__5757__auto__ = inst_28129;
var map__28133 = inst_28134;
var id = inst_28135;
var proto = inst_28136;
var data = inst_28137;
var close = inst_28138;
var timeout = inst_28139;
return (function (msg){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(msg),id);
});
})();
var inst_28188 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_28187);
var inst_28189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),inst_28188);
var inst_28190 = cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(mult,inst_28189);
var inst_28223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28224 = (function (){var response_chan = inst_28190;
var timeout = inst_28139;
var data = inst_28137;
var xform = inst_28188;
var close = inst_28138;
var proto = inst_28136;
var temp__5757__auto__ = inst_28129;
var c__26215__auto____$2 = inst_28223;
var id = inst_28135;
var map__28133 = inst_28134;
return (function (){
var f__26216__auto__ = (function (){var switch__26036__auto__ = (function (state_28221){
var state_val_28222 = (state_28221[(1)]);
if((state_val_28222 === (7))){
var inst_28217 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28311_28433 = state_28221__$1;
(statearr_28311_28433[(2)] = inst_28217);

(statearr_28311_28433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (1))){
var state_28221__$1 = state_28221;
var statearr_28312_28434 = state_28221__$1;
(statearr_28312_28434[(2)] = null);

(statearr_28312_28434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (4))){
var inst_28193 = (state_28221[(7)]);
var inst_28193__$1 = (state_28221[(2)]);
var inst_28194 = (inst_28193__$1 == null);
var state_28221__$1 = (function (){var statearr_28313 = state_28221;
(statearr_28313[(7)] = inst_28193__$1);

return statearr_28313;
})();
if(cljs.core.truth_(inst_28194)){
var statearr_28314_28435 = state_28221__$1;
(statearr_28314_28435[(1)] = (5));

} else {
var statearr_28315_28436 = state_28221__$1;
(statearr_28315_28436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (6))){
var inst_28193 = (state_28221[(7)]);
var inst_28198 = cljs.core.__destructure_map(inst_28193);
var inst_28199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28198,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_28200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28198,new cljs.core.Keyword(null,"close","close",1835149582));
var inst_28201 = inst_28200 === true;
var state_28221__$1 = (function (){var statearr_28316 = state_28221;
(statearr_28316[(8)] = inst_28199);

return statearr_28316;
})();
if(cljs.core.truth_(inst_28201)){
var statearr_28317_28437 = state_28221__$1;
(statearr_28317_28437[(1)] = (8));

} else {
var statearr_28318_28438 = state_28221__$1;
(statearr_28318_28438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (3))){
var inst_28219 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28221__$1,inst_28219);
} else {
if((state_val_28222 === (2))){
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28221__$1,(4),response_chan);
} else {
if((state_val_28222 === (9))){
var inst_28199 = (state_28221[(8)]);
var inst_28209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28210 = [new cljs.core.Keyword("websocket-fx.core","subscription-message","websocket-fx.core/subscription-message",-580707945),socket_id,id,inst_28199];
var inst_28211 = (new cljs.core.PersistentVector(null,4,(5),inst_28209,inst_28210,null));
var inst_28212 = re_frame.core.dispatch(inst_28211);
var state_28221__$1 = (function (){var statearr_28319 = state_28221;
(statearr_28319[(9)] = inst_28212);

return statearr_28319;
})();
var statearr_28320_28439 = state_28221__$1;
(statearr_28320_28439[(2)] = null);

(statearr_28320_28439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (5))){
var state_28221__$1 = state_28221;
var statearr_28321_28440 = state_28221__$1;
(statearr_28321_28440[(2)] = null);

(statearr_28321_28440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (10))){
var inst_28215 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28322_28441 = state_28221__$1;
(statearr_28322_28441[(2)] = inst_28215);

(statearr_28322_28441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (8))){
var inst_28203 = cljs.core.async.close_BANG_(response_chan);
var inst_28204 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28205 = [new cljs.core.Keyword("websocket-fx.core","subscription-closed","websocket-fx.core/subscription-closed",-1831119820),socket_id,id];
var inst_28206 = (new cljs.core.PersistentVector(null,3,(5),inst_28204,inst_28205,null));
var inst_28207 = re_frame.core.dispatch(inst_28206);
var state_28221__$1 = (function (){var statearr_28323 = state_28221;
(statearr_28323[(10)] = inst_28203);

return statearr_28323;
})();
var statearr_28324_28442 = state_28221__$1;
(statearr_28324_28442[(2)] = inst_28207);

(statearr_28324_28442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var websocket_fx$core$state_machine__26037__auto__ = null;
var websocket_fx$core$state_machine__26037__auto____0 = (function (){
var statearr_28325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28325[(0)] = websocket_fx$core$state_machine__26037__auto__);

(statearr_28325[(1)] = (1));

return statearr_28325;
});
var websocket_fx$core$state_machine__26037__auto____1 = (function (state_28221){
while(true){
var ret_value__26038__auto__ = (function (){try{while(true){
var result__26039__auto__ = switch__26036__auto__(state_28221);
if(cljs.core.keyword_identical_QMARK_(result__26039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26039__auto__;
}
break;
}
}catch (e28326){var ex__26040__auto__ = e28326;
var statearr_28327_28443 = state_28221;
(statearr_28327_28443[(2)] = ex__26040__auto__);


if(cljs.core.seq((state_28221[(4)]))){
var statearr_28328_28444 = state_28221;
(statearr_28328_28444[(1)] = cljs.core.first((state_28221[(4)])));

} else {
throw ex__26040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28445 = state_28221;
state_28221 = G__28445;
continue;
} else {
return ret_value__26038__auto__;
}
break;
}
});
websocket_fx$core$state_machine__26037__auto__ = function(state_28221){
switch(arguments.length){
case 0:
return websocket_fx$core$state_machine__26037__auto____0.call(this);
case 1:
return websocket_fx$core$state_machine__26037__auto____1.call(this,state_28221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
websocket_fx$core$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$0 = websocket_fx$core$state_machine__26037__auto____0;
websocket_fx$core$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$1 = websocket_fx$core$state_machine__26037__auto____1;
return websocket_fx$core$state_machine__26037__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_28329 = f__26216__auto__();
(statearr_28329[(6)] = c__26215__auto____$2);

return statearr_28329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
});
})();
var inst_28225 = cljs.core.async.impl.dispatch.run(inst_28224);
var state_28257__$1 = (function (){var statearr_28330 = state_28257;
(statearr_28330[(14)] = inst_28225);

return statearr_28330;
})();
var statearr_28331_28446 = state_28257__$1;
(statearr_28331_28446[(2)] = inst_28223);

(statearr_28331_28446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (9))){
var inst_28136 = (state_28257[(8)]);
var inst_28182 = [new cljs.core.Keyword(null,"subscription","subscription",1949009182),null];
var inst_28183 = (new cljs.core.PersistentArrayMap(null,1,inst_28182,null));
var inst_28184 = (new cljs.core.PersistentHashSet(null,inst_28183,null));
var inst_28185 = (inst_28184.cljs$core$IFn$_invoke$arity$1 ? inst_28184.cljs$core$IFn$_invoke$arity$1(inst_28136) : inst_28184.call(null,inst_28136));
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28185)){
var statearr_28332_28447 = state_28257__$1;
(statearr_28332_28447[(1)] = (11));

} else {
var statearr_28333_28448 = state_28257__$1;
(statearr_28333_28448[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (5))){
var state_28257__$1 = state_28257;
var statearr_28334_28449 = state_28257__$1;
(statearr_28334_28449[(2)] = null);

(statearr_28334_28449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (14))){
var inst_28136 = (state_28257[(8)]);
var inst_28135 = (state_28257[(9)]);
var inst_28138 = (state_28257[(13)]);
var inst_28234 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"proto","proto",811784976),new cljs.core.Keyword(null,"close","close",1835149582)];
var inst_28235 = [inst_28135,inst_28136,inst_28138];
var inst_28236 = cljs.core.PersistentHashMap.fromArrays(inst_28234,inst_28235);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28257__$1,(17),sink,inst_28236);
} else {
if((state_val_28258 === (16))){
var inst_28246 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
if(cljs.core.truth_(inst_28246)){
var statearr_28335_28450 = state_28257__$1;
(statearr_28335_28450[(1)] = (19));

} else {
var statearr_28336_28451 = state_28257__$1;
(statearr_28336_28451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (10))){
var inst_28138 = (state_28257[(13)]);
var inst_28230 = (state_28257[(2)]);
var inst_28231 = (inst_28138 == null);
var inst_28232 = cljs.core.not(inst_28231);
var state_28257__$1 = (function (){var statearr_28337 = state_28257;
(statearr_28337[(15)] = inst_28230);

return statearr_28337;
})();
if(inst_28232){
var statearr_28338_28452 = state_28257__$1;
(statearr_28338_28452[(1)] = (14));

} else {
var statearr_28339_28453 = state_28257__$1;
(statearr_28339_28453[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (18))){
var inst_28244 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28340_28454 = state_28257__$1;
(statearr_28340_28454[(2)] = inst_28244);

(statearr_28340_28454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (8))){
var inst_28136 = (state_28257[(8)]);
var inst_28135 = (state_28257[(9)]);
var inst_28134 = (state_28257[(11)]);
var inst_28139 = (state_28257[(12)]);
var inst_28129 = (state_28257[(7)]);
var inst_28138 = (state_28257[(13)]);
var inst_28137 = (state_28257[(10)]);
var inst_28145 = (function (){var temp__5757__auto__ = inst_28129;
var map__28133 = inst_28134;
var id = inst_28135;
var proto = inst_28136;
var data = inst_28137;
var close = inst_28138;
var timeout = inst_28139;
return (function (msg){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(msg),id);
});
})();
var inst_28146 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_28145);
var inst_28147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),inst_28146);
var inst_28148 = cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(mult,inst_28147);
var inst_28149 = cljs.core.async.timeout(inst_28139);
var inst_28178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28179 = (function (){var response_chan = inst_28148;
var timeout = inst_28139;
var data = inst_28137;
var xform = inst_28146;
var close = inst_28138;
var proto = inst_28136;
var timeout_chan = inst_28149;
var temp__5757__auto__ = inst_28129;
var c__26215__auto____$2 = inst_28178;
var id = inst_28135;
var map__28133 = inst_28134;
return (function (){
var f__26216__auto__ = (function (){var switch__26036__auto__ = (function (state_28176){
var state_val_28177 = (state_28176[(1)]);
if((state_val_28177 === (1))){
var inst_28153 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28154 = [timeout_chan,response_chan];
var inst_28155 = (new cljs.core.PersistentVector(null,2,(5),inst_28153,inst_28154,null));
var state_28176__$1 = state_28176;
return cljs.core.async.ioc_alts_BANG_(state_28176__$1,(2),inst_28155);
} else {
if((state_val_28177 === (2))){
var inst_28158 = (state_28176[(7)]);
var inst_28157 = (state_28176[(2)]);
var inst_28158__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28157,(0),null);
var inst_28159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28157,(1),null);
var inst_28160 = (inst_28158__$1 == null);
var inst_28161 = cljs.core.not(inst_28160);
var state_28176__$1 = (function (){var statearr_28341 = state_28176;
(statearr_28341[(8)] = inst_28159);

(statearr_28341[(7)] = inst_28158__$1);

return statearr_28341;
})();
if(inst_28161){
var statearr_28342_28455 = state_28176__$1;
(statearr_28342_28455[(1)] = (3));

} else {
var statearr_28343_28456 = state_28176__$1;
(statearr_28343_28456[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (3))){
var inst_28158 = (state_28176[(7)]);
var inst_28163 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28164 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_28158);
var inst_28165 = [new cljs.core.Keyword("websocket-fx.core","request-response","websocket-fx.core/request-response",1132952098),socket_id,id,inst_28164];
var inst_28166 = (new cljs.core.PersistentVector(null,4,(5),inst_28163,inst_28165,null));
var inst_28167 = re_frame.core.dispatch(inst_28166);
var state_28176__$1 = state_28176;
var statearr_28344_28457 = state_28176__$1;
(statearr_28344_28457[(2)] = inst_28167);

(statearr_28344_28457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (4))){
var inst_28169 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28170 = [new cljs.core.Keyword("websocket-fx.core","request-timeout","websocket-fx.core/request-timeout",1441765950),socket_id,id,new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_28171 = (new cljs.core.PersistentVector(null,4,(5),inst_28169,inst_28170,null));
var inst_28172 = re_frame.core.dispatch(inst_28171);
var state_28176__$1 = state_28176;
var statearr_28345_28458 = state_28176__$1;
(statearr_28345_28458[(2)] = inst_28172);

(statearr_28345_28458[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (5))){
var inst_28174 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28176__$1,inst_28174);
} else {
return null;
}
}
}
}
}
});
return (function() {
var websocket_fx$core$state_machine__26037__auto__ = null;
var websocket_fx$core$state_machine__26037__auto____0 = (function (){
var statearr_28346 = [null,null,null,null,null,null,null,null,null];
(statearr_28346[(0)] = websocket_fx$core$state_machine__26037__auto__);

(statearr_28346[(1)] = (1));

return statearr_28346;
});
var websocket_fx$core$state_machine__26037__auto____1 = (function (state_28176){
while(true){
var ret_value__26038__auto__ = (function (){try{while(true){
var result__26039__auto__ = switch__26036__auto__(state_28176);
if(cljs.core.keyword_identical_QMARK_(result__26039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26039__auto__;
}
break;
}
}catch (e28347){var ex__26040__auto__ = e28347;
var statearr_28348_28459 = state_28176;
(statearr_28348_28459[(2)] = ex__26040__auto__);


if(cljs.core.seq((state_28176[(4)]))){
var statearr_28349_28460 = state_28176;
(statearr_28349_28460[(1)] = cljs.core.first((state_28176[(4)])));

} else {
throw ex__26040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28461 = state_28176;
state_28176 = G__28461;
continue;
} else {
return ret_value__26038__auto__;
}
break;
}
});
websocket_fx$core$state_machine__26037__auto__ = function(state_28176){
switch(arguments.length){
case 0:
return websocket_fx$core$state_machine__26037__auto____0.call(this);
case 1:
return websocket_fx$core$state_machine__26037__auto____1.call(this,state_28176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
websocket_fx$core$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$0 = websocket_fx$core$state_machine__26037__auto____0;
websocket_fx$core$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$1 = websocket_fx$core$state_machine__26037__auto____1;
return websocket_fx$core$state_machine__26037__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_28350 = f__26216__auto__();
(statearr_28350[(6)] = c__26215__auto____$2);

return statearr_28350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
});
})();
var inst_28180 = cljs.core.async.impl.dispatch.run(inst_28179);
var state_28257__$1 = (function (){var statearr_28351 = state_28257;
(statearr_28351[(16)] = inst_28180);

return statearr_28351;
})();
var statearr_28352_28462 = state_28257__$1;
(statearr_28352_28462[(2)] = inst_28178);

(statearr_28352_28462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var websocket_fx$core$state_machine__26037__auto__ = null;
var websocket_fx$core$state_machine__26037__auto____0 = (function (){
var statearr_28353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28353[(0)] = websocket_fx$core$state_machine__26037__auto__);

(statearr_28353[(1)] = (1));

return statearr_28353;
});
var websocket_fx$core$state_machine__26037__auto____1 = (function (state_28257){
while(true){
var ret_value__26038__auto__ = (function (){try{while(true){
var result__26039__auto__ = switch__26036__auto__(state_28257);
if(cljs.core.keyword_identical_QMARK_(result__26039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26039__auto__;
}
break;
}
}catch (e28354){var ex__26040__auto__ = e28354;
var statearr_28355_28463 = state_28257;
(statearr_28355_28463[(2)] = ex__26040__auto__);


if(cljs.core.seq((state_28257[(4)]))){
var statearr_28356_28464 = state_28257;
(statearr_28356_28464[(1)] = cljs.core.first((state_28257[(4)])));

} else {
throw ex__26040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28465 = state_28257;
state_28257 = G__28465;
continue;
} else {
return ret_value__26038__auto__;
}
break;
}
});
websocket_fx$core$state_machine__26037__auto__ = function(state_28257){
switch(arguments.length){
case 0:
return websocket_fx$core$state_machine__26037__auto____0.call(this);
case 1:
return websocket_fx$core$state_machine__26037__auto____1.call(this,state_28257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
websocket_fx$core$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$0 = websocket_fx$core$state_machine__26037__auto____0;
websocket_fx$core$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$1 = websocket_fx$core$state_machine__26037__auto____1;
return websocket_fx$core$state_machine__26037__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_28357 = f__26216__auto__();
(statearr_28357[(6)] = c__26215__auto____$1);

return statearr_28357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
});
})();
var inst_28261 = cljs.core.async.impl.dispatch.run(inst_28260);
var inst_28262 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28263 = [new cljs.core.Keyword("websocket-fx.core","connected","websocket-fx.core/connected",-2070989576),socket_id];
var inst_28264 = (new cljs.core.PersistentVector(null,2,(5),inst_28262,inst_28263,null));
var inst_28265 = re_frame.core.dispatch(inst_28264);
var inst_28266 = (on_connect == null);
var inst_28267 = cljs.core.not(inst_28266);
var state_28276__$1 = (function (){var statearr_28358 = state_28276;
(statearr_28358[(15)] = inst_28261);

(statearr_28358[(16)] = inst_28265);

return statearr_28358;
})();
if(inst_28267){
var statearr_28359_28466 = state_28276__$1;
(statearr_28359_28466[(1)] = (6));

} else {
var statearr_28360_28467 = state_28276__$1;
(statearr_28360_28467[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (5))){
var inst_28274 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28276__$1,inst_28274);
} else {
if((state_val_28277 === (6))){
var inst_28269 = re_frame.core.dispatch(on_connect);
var state_28276__$1 = state_28276;
var statearr_28361_28468 = state_28276__$1;
(statearr_28361_28468[(2)] = inst_28269);

(statearr_28361_28468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (7))){
var state_28276__$1 = state_28276;
var statearr_28362_28469 = state_28276__$1;
(statearr_28362_28469[(2)] = null);

(statearr_28362_28469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (8))){
var inst_28272 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
var statearr_28363_28470 = state_28276__$1;
(statearr_28363_28470[(2)] = inst_28272);

(statearr_28363_28470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var websocket_fx$core$state_machine__26037__auto__ = null;
var websocket_fx$core$state_machine__26037__auto____0 = (function (){
var statearr_28364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28364[(0)] = websocket_fx$core$state_machine__26037__auto__);

(statearr_28364[(1)] = (1));

return statearr_28364;
});
var websocket_fx$core$state_machine__26037__auto____1 = (function (state_28276){
while(true){
var ret_value__26038__auto__ = (function (){try{while(true){
var result__26039__auto__ = switch__26036__auto__(state_28276);
if(cljs.core.keyword_identical_QMARK_(result__26039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26039__auto__;
}
break;
}
}catch (e28365){var ex__26040__auto__ = e28365;
var statearr_28366_28471 = state_28276;
(statearr_28366_28471[(2)] = ex__26040__auto__);


if(cljs.core.seq((state_28276[(4)]))){
var statearr_28367_28472 = state_28276;
(statearr_28367_28472[(1)] = cljs.core.first((state_28276[(4)])));

} else {
throw ex__26040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28473 = state_28276;
state_28276 = G__28473;
continue;
} else {
return ret_value__26038__auto__;
}
break;
}
});
websocket_fx$core$state_machine__26037__auto__ = function(state_28276){
switch(arguments.length){
case 0:
return websocket_fx$core$state_machine__26037__auto____0.call(this);
case 1:
return websocket_fx$core$state_machine__26037__auto____1.call(this,state_28276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
websocket_fx$core$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$0 = websocket_fx$core$state_machine__26037__auto____0;
websocket_fx$core$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$1 = websocket_fx$core$state_machine__26037__auto____1;
return websocket_fx$core$state_machine__26037__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_28368 = f__26216__auto__();
(statearr_28368[(6)] = c__26215__auto__);

return statearr_28368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword("websocket-fx.core","disconnect","websocket-fx.core/disconnect",1210384580),(function (p__28369){
var map__28370 = p__28369;
var map__28370__$1 = cljs.core.__destructure_map(map__28370);
var socket_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28370__$1,new cljs.core.Keyword(null,"socket-id","socket-id",1022615280));
var map__28371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$3(websocket_fx.core.CONNECTIONS,cljs.core.dissoc,socket_id)),socket_id);
var map__28371__$1 = cljs.core.__destructure_map(map__28371);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28371__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
if((!((socket == null)))){
return socket.close();
} else {
return null;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("websocket-fx.core","ws-message","websocket-fx.core/ws-message",413406340),(function (p__28372){
var map__28373 = p__28372;
var map__28373__$1 = cljs.core.__destructure_map(map__28373);
var socket_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28373__$1,new cljs.core.Keyword(null,"socket-id","socket-id",1022615280));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28373__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var temp__5755__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(websocket_fx.core.CONNECTIONS),socket_id);
if((temp__5755__auto__ == null)){
return console.error("Socket with id ",socket_id," does not exist.");
} else {
var map__28374 = temp__5755__auto__;
var map__28374__$1 = cljs.core.__destructure_map(map__28374);
var sink = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28374__$1,new cljs.core.Keyword(null,"sink","sink",186835933));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(sink,message);
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("websocket-fx.core","pending-requests","websocket-fx.core/pending-requests",-563577824),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__28375){
var vec__28376 = p__28375;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28376,(0),null);
var socket_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28376,(1),null);
return cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"requests","requests",-733055638)], null)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("websocket-fx.core","open-subscriptions","websocket-fx.core/open-subscriptions",1589463562),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__28379){
var vec__28380 = p__28379;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28380,(0),null);
var socket_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28380,(1),null);
return cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)], null)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("websocket-fx.core","status","websocket-fx.core/status",1401081242),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__28383){
var vec__28384 = p__28383;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28384,(0),null);
var socket_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28384,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket-fx.core","sockets","websocket-fx.core/sockets",879219385),socket_id,new cljs.core.Keyword(null,"status","status",-1997798413)], null));
})], 0));

//# sourceMappingURL=websocket_fx.core.js.map
