goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__35323__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35327__i = 0, G__35327__a = new Array(arguments.length -  0);
while (G__35327__i < G__35327__a.length) {G__35327__a[G__35327__i] = arguments[G__35327__i + 0]; ++G__35327__i;}
  args = new cljs.core.IndexedSeq(G__35327__a,0,null);
} 
return G__35323__delegate.call(this,args);};
G__35323.cljs$lang$maxFixedArity = 0;
G__35323.cljs$lang$applyTo = (function (arglist__35329){
var args = cljs.core.seq(arglist__35329);
return G__35323__delegate(args);
});
G__35323.cljs$core$IFn$_invoke$arity$variadic = G__35323__delegate;
return G__35323;
})()
);

(o.error = (function() { 
var G__35330__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35335__i = 0, G__35335__a = new Array(arguments.length -  0);
while (G__35335__i < G__35335__a.length) {G__35335__a[G__35335__i] = arguments[G__35335__i + 0]; ++G__35335__i;}
  args = new cljs.core.IndexedSeq(G__35335__a,0,null);
} 
return G__35330__delegate.call(this,args);};
G__35330.cljs$lang$maxFixedArity = 0;
G__35330.cljs$lang$applyTo = (function (arglist__35336){
var args = cljs.core.seq(arglist__35336);
return G__35330__delegate(args);
});
G__35330.cljs$core$IFn$_invoke$arity$variadic = G__35330__delegate;
return G__35330;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
