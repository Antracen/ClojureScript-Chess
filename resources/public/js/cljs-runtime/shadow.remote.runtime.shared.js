goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31381,res){
var map__31382 = p__31381;
var map__31382__$1 = cljs.core.__destructure_map(map__31382);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31382__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31382__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31383 = res;
var G__31383__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31383,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31383);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31383__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31383__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31389 = arguments.length;
switch (G__31389) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31392,msg,handlers,timeout_after_ms){
var map__31393 = p__31392;
var map__31393__$1 = cljs.core.__destructure_map(map__31393);
var runtime = map__31393__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31393__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___31713 = arguments.length;
var i__4819__auto___31714 = (0);
while(true){
if((i__4819__auto___31714 < len__4818__auto___31713)){
args__4824__auto__.push((arguments[i__4819__auto___31714]));

var G__31715 = (i__4819__auto___31714 + (1));
i__4819__auto___31714 = G__31715;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31401,ev,args){
var map__31402 = p__31401;
var map__31402__$1 = cljs.core.__destructure_map(map__31402);
var runtime = map__31402__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31402__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31403 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31406 = null;
var count__31407 = (0);
var i__31408 = (0);
while(true){
if((i__31408 < count__31407)){
var ext = chunk__31406.cljs$core$IIndexed$_nth$arity$2(null,i__31408);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31718 = seq__31403;
var G__31719 = chunk__31406;
var G__31720 = count__31407;
var G__31721 = (i__31408 + (1));
seq__31403 = G__31718;
chunk__31406 = G__31719;
count__31407 = G__31720;
i__31408 = G__31721;
continue;
} else {
var G__31722 = seq__31403;
var G__31723 = chunk__31406;
var G__31724 = count__31407;
var G__31725 = (i__31408 + (1));
seq__31403 = G__31722;
chunk__31406 = G__31723;
count__31407 = G__31724;
i__31408 = G__31725;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31403);
if(temp__5753__auto__){
var seq__31403__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31403__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31403__$1);
var G__31731 = cljs.core.chunk_rest(seq__31403__$1);
var G__31732 = c__4638__auto__;
var G__31733 = cljs.core.count(c__4638__auto__);
var G__31734 = (0);
seq__31403 = G__31731;
chunk__31406 = G__31732;
count__31407 = G__31733;
i__31408 = G__31734;
continue;
} else {
var ext = cljs.core.first(seq__31403__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31739 = cljs.core.next(seq__31403__$1);
var G__31740 = null;
var G__31741 = (0);
var G__31742 = (0);
seq__31403 = G__31739;
chunk__31406 = G__31740;
count__31407 = G__31741;
i__31408 = G__31742;
continue;
} else {
var G__31743 = cljs.core.next(seq__31403__$1);
var G__31744 = null;
var G__31745 = (0);
var G__31746 = (0);
seq__31403 = G__31743;
chunk__31406 = G__31744;
count__31407 = G__31745;
i__31408 = G__31746;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31397){
var G__31398 = cljs.core.first(seq31397);
var seq31397__$1 = cljs.core.next(seq31397);
var G__31399 = cljs.core.first(seq31397__$1);
var seq31397__$2 = cljs.core.next(seq31397__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31398,G__31399,seq31397__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31457,p__31458){
var map__31460 = p__31457;
var map__31460__$1 = cljs.core.__destructure_map(map__31460);
var runtime = map__31460__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31461 = p__31458;
var map__31461__$1 = cljs.core.__destructure_map(map__31461);
var msg = map__31461__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31461__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31464 = cljs.core.deref(state_ref);
var map__31464__$1 = cljs.core.__destructure_map(map__31464);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31464__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31464__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31471){
var map__31472 = p__31471;
var map__31472__$1 = cljs.core.__destructure_map(map__31472);
var runtime = map__31472__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31472__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31477,msg){
var map__31480 = p__31477;
var map__31480__$1 = cljs.core.__destructure_map(map__31480);
var runtime = map__31480__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31480__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31509,key,p__31510){
var map__31513 = p__31509;
var map__31513__$1 = cljs.core.__destructure_map(map__31513);
var state = map__31513__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31513__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31514 = p__31510;
var map__31514__$1 = cljs.core.__destructure_map(map__31514);
var spec = map__31514__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31514__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31527,key,spec){
var map__31529 = p__31527;
var map__31529__$1 = cljs.core.__destructure_map(map__31529);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31529__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31533_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31533_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31534_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31534_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31535_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31535_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31536_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31536_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31537_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31537_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31559,key){
var map__31562 = p__31559;
var map__31562__$1 = cljs.core.__destructure_map(map__31562);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31562__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31572,msg){
var map__31574 = p__31572;
var map__31574__$1 = cljs.core.__destructure_map(map__31574);
var runtime = map__31574__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31574__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31606,p__31607){
var map__31610 = p__31606;
var map__31610__$1 = cljs.core.__destructure_map(map__31610);
var runtime = map__31610__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31610__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31613 = p__31607;
var map__31613__$1 = cljs.core.__destructure_map(map__31613);
var msg = map__31613__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31613__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31613__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31642 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31645 = null;
var count__31646 = (0);
var i__31647 = (0);
while(true){
if((i__31647 < count__31646)){
var map__31672 = chunk__31645.cljs$core$IIndexed$_nth$arity$2(null,i__31647);
var map__31672__$1 = cljs.core.__destructure_map(map__31672);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31672__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31833 = seq__31642;
var G__31834 = chunk__31645;
var G__31835 = count__31646;
var G__31836 = (i__31647 + (1));
seq__31642 = G__31833;
chunk__31645 = G__31834;
count__31646 = G__31835;
i__31647 = G__31836;
continue;
} else {
var G__31838 = seq__31642;
var G__31839 = chunk__31645;
var G__31840 = count__31646;
var G__31841 = (i__31647 + (1));
seq__31642 = G__31838;
chunk__31645 = G__31839;
count__31646 = G__31840;
i__31647 = G__31841;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31642);
if(temp__5753__auto__){
var seq__31642__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31642__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31642__$1);
var G__31842 = cljs.core.chunk_rest(seq__31642__$1);
var G__31843 = c__4638__auto__;
var G__31844 = cljs.core.count(c__4638__auto__);
var G__31845 = (0);
seq__31642 = G__31842;
chunk__31645 = G__31843;
count__31646 = G__31844;
i__31647 = G__31845;
continue;
} else {
var map__31677 = cljs.core.first(seq__31642__$1);
var map__31677__$1 = cljs.core.__destructure_map(map__31677);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31677__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31847 = cljs.core.next(seq__31642__$1);
var G__31848 = null;
var G__31849 = (0);
var G__31850 = (0);
seq__31642 = G__31847;
chunk__31645 = G__31848;
count__31646 = G__31849;
i__31647 = G__31850;
continue;
} else {
var G__31851 = cljs.core.next(seq__31642__$1);
var G__31852 = null;
var G__31853 = (0);
var G__31854 = (0);
seq__31642 = G__31851;
chunk__31645 = G__31852;
count__31646 = G__31853;
i__31647 = G__31854;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
