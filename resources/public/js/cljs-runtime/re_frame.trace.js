goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__27171){
var map__27173 = p__27171;
var map__27173__$1 = cljs.core.__destructure_map(map__27173);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27173__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27173__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27173__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27173__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__27176_27212 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__27177_27213 = null;
var count__27178_27214 = (0);
var i__27179_27215 = (0);
while(true){
if((i__27179_27215 < count__27178_27214)){
var vec__27197_27216 = chunk__27177_27213.cljs$core$IIndexed$_nth$arity$2(null,i__27179_27215);
var k_27217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27197_27216,(0),null);
var cb_27218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27197_27216,(1),null);
try{var G__27201_27219 = cljs.core.deref(re_frame.trace.traces);
(cb_27218.cljs$core$IFn$_invoke$arity$1 ? cb_27218.cljs$core$IFn$_invoke$arity$1(G__27201_27219) : cb_27218.call(null,G__27201_27219));
}catch (e27200){var e_27220 = e27200;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_27217,"while storing",cljs.core.deref(re_frame.trace.traces),e_27220], 0));
}

var G__27221 = seq__27176_27212;
var G__27222 = chunk__27177_27213;
var G__27223 = count__27178_27214;
var G__27224 = (i__27179_27215 + (1));
seq__27176_27212 = G__27221;
chunk__27177_27213 = G__27222;
count__27178_27214 = G__27223;
i__27179_27215 = G__27224;
continue;
} else {
var temp__5753__auto___27225 = cljs.core.seq(seq__27176_27212);
if(temp__5753__auto___27225){
var seq__27176_27226__$1 = temp__5753__auto___27225;
if(cljs.core.chunked_seq_QMARK_(seq__27176_27226__$1)){
var c__4638__auto___27227 = cljs.core.chunk_first(seq__27176_27226__$1);
var G__27228 = cljs.core.chunk_rest(seq__27176_27226__$1);
var G__27229 = c__4638__auto___27227;
var G__27230 = cljs.core.count(c__4638__auto___27227);
var G__27231 = (0);
seq__27176_27212 = G__27228;
chunk__27177_27213 = G__27229;
count__27178_27214 = G__27230;
i__27179_27215 = G__27231;
continue;
} else {
var vec__27202_27232 = cljs.core.first(seq__27176_27226__$1);
var k_27233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27202_27232,(0),null);
var cb_27234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27202_27232,(1),null);
try{var G__27208_27235 = cljs.core.deref(re_frame.trace.traces);
(cb_27234.cljs$core$IFn$_invoke$arity$1 ? cb_27234.cljs$core$IFn$_invoke$arity$1(G__27208_27235) : cb_27234.call(null,G__27208_27235));
}catch (e27206){var e_27236 = e27206;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_27233,"while storing",cljs.core.deref(re_frame.trace.traces),e_27236], 0));
}

var G__27237 = cljs.core.next(seq__27176_27226__$1);
var G__27238 = null;
var G__27239 = (0);
var G__27240 = (0);
seq__27176_27212 = G__27237;
chunk__27177_27213 = G__27238;
count__27178_27214 = G__27239;
i__27179_27215 = G__27240;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
