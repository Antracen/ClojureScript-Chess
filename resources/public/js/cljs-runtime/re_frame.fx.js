goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__27669 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__27670 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__27670);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___27795 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___27795)){
var new_db_27796 = temp__5753__auto___27795;
var fexpr__27672_27797 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__27672_27797.cljs$core$IFn$_invoke$arity$1 ? fexpr__27672_27797.cljs$core$IFn$_invoke$arity$1(new_db_27796) : fexpr__27672_27797.call(null,new_db_27796));
} else {
}

var seq__27673 = cljs.core.seq(effects_without_db);
var chunk__27674 = null;
var count__27675 = (0);
var i__27676 = (0);
while(true){
if((i__27676 < count__27675)){
var vec__27683 = chunk__27674.cljs$core$IIndexed$_nth$arity$2(null,i__27676);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27683,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27683,(1),null);
var temp__5751__auto___27798 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___27798)){
var effect_fn_27799 = temp__5751__auto___27798;
(effect_fn_27799.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27799.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27799.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27800 = seq__27673;
var G__27801 = chunk__27674;
var G__27802 = count__27675;
var G__27803 = (i__27676 + (1));
seq__27673 = G__27800;
chunk__27674 = G__27801;
count__27675 = G__27802;
i__27676 = G__27803;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__27673);
if(temp__5753__auto__){
var seq__27673__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27673__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__27673__$1);
var G__27804 = cljs.core.chunk_rest(seq__27673__$1);
var G__27805 = c__4638__auto__;
var G__27806 = cljs.core.count(c__4638__auto__);
var G__27807 = (0);
seq__27673 = G__27804;
chunk__27674 = G__27805;
count__27675 = G__27806;
i__27676 = G__27807;
continue;
} else {
var vec__27687 = cljs.core.first(seq__27673__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27687,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27687,(1),null);
var temp__5751__auto___27808 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___27808)){
var effect_fn_27809 = temp__5751__auto___27808;
(effect_fn_27809.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27809.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27809.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27810 = cljs.core.next(seq__27673__$1);
var G__27811 = null;
var G__27812 = (0);
var G__27813 = (0);
seq__27673 = G__27810;
chunk__27674 = G__27811;
count__27675 = G__27812;
i__27676 = G__27813;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__27148__auto___27814 = re_frame.interop.now();
var duration__27149__auto___27815 = (end__27148__auto___27814 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27149__auto___27815,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__27148__auto___27814);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__27669);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___27816 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___27816)){
var new_db_27817 = temp__5753__auto___27816;
var fexpr__27695_27818 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__27695_27818.cljs$core$IFn$_invoke$arity$1 ? fexpr__27695_27818.cljs$core$IFn$_invoke$arity$1(new_db_27817) : fexpr__27695_27818.call(null,new_db_27817));
} else {
}

var seq__27697 = cljs.core.seq(effects_without_db);
var chunk__27698 = null;
var count__27699 = (0);
var i__27700 = (0);
while(true){
if((i__27700 < count__27699)){
var vec__27720 = chunk__27698.cljs$core$IIndexed$_nth$arity$2(null,i__27700);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27720,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27720,(1),null);
var temp__5751__auto___27819 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___27819)){
var effect_fn_27820 = temp__5751__auto___27819;
(effect_fn_27820.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27820.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27820.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27821 = seq__27697;
var G__27822 = chunk__27698;
var G__27823 = count__27699;
var G__27824 = (i__27700 + (1));
seq__27697 = G__27821;
chunk__27698 = G__27822;
count__27699 = G__27823;
i__27700 = G__27824;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__27697);
if(temp__5753__auto__){
var seq__27697__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27697__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__27697__$1);
var G__27825 = cljs.core.chunk_rest(seq__27697__$1);
var G__27826 = c__4638__auto__;
var G__27827 = cljs.core.count(c__4638__auto__);
var G__27828 = (0);
seq__27697 = G__27825;
chunk__27698 = G__27826;
count__27699 = G__27827;
i__27700 = G__27828;
continue;
} else {
var vec__27731 = cljs.core.first(seq__27697__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27731,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27731,(1),null);
var temp__5751__auto___27829 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___27829)){
var effect_fn_27830 = temp__5751__auto___27829;
(effect_fn_27830.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27830.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27830.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27831 = cljs.core.next(seq__27697__$1);
var G__27832 = null;
var G__27833 = (0);
var G__27834 = (0);
seq__27697 = G__27831;
chunk__27698 = G__27832;
count__27699 = G__27833;
i__27700 = G__27834;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__27739){
var map__27740 = p__27739;
var map__27740__$1 = cljs.core.__destructure_map(map__27740);
var effect = map__27740__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27740__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27740__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__27744 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27745 = null;
var count__27746 = (0);
var i__27747 = (0);
while(true){
if((i__27747 < count__27746)){
var effect = chunk__27745.cljs$core$IIndexed$_nth$arity$2(null,i__27747);
re_frame.fx.dispatch_later(effect);


var G__27835 = seq__27744;
var G__27836 = chunk__27745;
var G__27837 = count__27746;
var G__27838 = (i__27747 + (1));
seq__27744 = G__27835;
chunk__27745 = G__27836;
count__27746 = G__27837;
i__27747 = G__27838;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__27744);
if(temp__5753__auto__){
var seq__27744__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27744__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__27744__$1);
var G__27839 = cljs.core.chunk_rest(seq__27744__$1);
var G__27840 = c__4638__auto__;
var G__27841 = cljs.core.count(c__4638__auto__);
var G__27842 = (0);
seq__27744 = G__27839;
chunk__27745 = G__27840;
count__27746 = G__27841;
i__27747 = G__27842;
continue;
} else {
var effect = cljs.core.first(seq__27744__$1);
re_frame.fx.dispatch_later(effect);


var G__27843 = cljs.core.next(seq__27744__$1);
var G__27844 = null;
var G__27845 = (0);
var G__27846 = (0);
seq__27744 = G__27843;
chunk__27745 = G__27844;
count__27746 = G__27845;
i__27747 = G__27846;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__27758 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__27759 = null;
var count__27760 = (0);
var i__27761 = (0);
while(true){
if((i__27761 < count__27760)){
var vec__27771 = chunk__27759.cljs$core$IIndexed$_nth$arity$2(null,i__27761);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___27847 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___27847)){
var effect_fn_27848 = temp__5751__auto___27847;
(effect_fn_27848.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27848.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27848.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__27849 = seq__27758;
var G__27850 = chunk__27759;
var G__27851 = count__27760;
var G__27852 = (i__27761 + (1));
seq__27758 = G__27849;
chunk__27759 = G__27850;
count__27760 = G__27851;
i__27761 = G__27852;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__27758);
if(temp__5753__auto__){
var seq__27758__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27758__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__27758__$1);
var G__27853 = cljs.core.chunk_rest(seq__27758__$1);
var G__27854 = c__4638__auto__;
var G__27855 = cljs.core.count(c__4638__auto__);
var G__27856 = (0);
seq__27758 = G__27853;
chunk__27759 = G__27854;
count__27760 = G__27855;
i__27761 = G__27856;
continue;
} else {
var vec__27776 = cljs.core.first(seq__27758__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27776,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27776,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___27857 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___27857)){
var effect_fn_27858 = temp__5751__auto___27857;
(effect_fn_27858.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27858.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27858.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__27859 = cljs.core.next(seq__27758__$1);
var G__27860 = null;
var G__27861 = (0);
var G__27862 = (0);
seq__27758 = G__27859;
chunk__27759 = G__27860;
count__27760 = G__27861;
i__27761 = G__27862;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__27784 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27785 = null;
var count__27786 = (0);
var i__27787 = (0);
while(true){
if((i__27787 < count__27786)){
var event = chunk__27785.cljs$core$IIndexed$_nth$arity$2(null,i__27787);
re_frame.router.dispatch(event);


var G__27863 = seq__27784;
var G__27864 = chunk__27785;
var G__27865 = count__27786;
var G__27866 = (i__27787 + (1));
seq__27784 = G__27863;
chunk__27785 = G__27864;
count__27786 = G__27865;
i__27787 = G__27866;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__27784);
if(temp__5753__auto__){
var seq__27784__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27784__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__27784__$1);
var G__27867 = cljs.core.chunk_rest(seq__27784__$1);
var G__27868 = c__4638__auto__;
var G__27869 = cljs.core.count(c__4638__auto__);
var G__27870 = (0);
seq__27784 = G__27867;
chunk__27785 = G__27868;
count__27786 = G__27869;
i__27787 = G__27870;
continue;
} else {
var event = cljs.core.first(seq__27784__$1);
re_frame.router.dispatch(event);


var G__27871 = cljs.core.next(seq__27784__$1);
var G__27872 = null;
var G__27873 = (0);
var G__27874 = (0);
seq__27784 = G__27871;
chunk__27785 = G__27872;
count__27786 = G__27873;
i__27787 = G__27874;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__27791 = cljs.core.seq(value);
var chunk__27792 = null;
var count__27793 = (0);
var i__27794 = (0);
while(true){
if((i__27794 < count__27793)){
var event = chunk__27792.cljs$core$IIndexed$_nth$arity$2(null,i__27794);
clear_event(event);


var G__27875 = seq__27791;
var G__27876 = chunk__27792;
var G__27877 = count__27793;
var G__27878 = (i__27794 + (1));
seq__27791 = G__27875;
chunk__27792 = G__27876;
count__27793 = G__27877;
i__27794 = G__27878;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__27791);
if(temp__5753__auto__){
var seq__27791__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27791__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__27791__$1);
var G__27880 = cljs.core.chunk_rest(seq__27791__$1);
var G__27881 = c__4638__auto__;
var G__27882 = cljs.core.count(c__4638__auto__);
var G__27883 = (0);
seq__27791 = G__27880;
chunk__27792 = G__27881;
count__27793 = G__27882;
i__27794 = G__27883;
continue;
} else {
var event = cljs.core.first(seq__27791__$1);
clear_event(event);


var G__27884 = cljs.core.next(seq__27791__$1);
var G__27885 = null;
var G__27886 = (0);
var G__27887 = (0);
seq__27791 = G__27884;
chunk__27792 = G__27885;
count__27793 = G__27886;
i__27794 = G__27887;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
