goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34038){
var map__34039 = p__34038;
var map__34039__$1 = cljs.core.__destructure_map(map__34039);
var m = map__34039__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34039__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34039__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34045_34332 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34046_34333 = null;
var count__34047_34334 = (0);
var i__34048_34335 = (0);
while(true){
if((i__34048_34335 < count__34047_34334)){
var f_34338 = chunk__34046_34333.cljs$core$IIndexed$_nth$arity$2(null,i__34048_34335);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34338], 0));


var G__34341 = seq__34045_34332;
var G__34342 = chunk__34046_34333;
var G__34343 = count__34047_34334;
var G__34344 = (i__34048_34335 + (1));
seq__34045_34332 = G__34341;
chunk__34046_34333 = G__34342;
count__34047_34334 = G__34343;
i__34048_34335 = G__34344;
continue;
} else {
var temp__5753__auto___34345 = cljs.core.seq(seq__34045_34332);
if(temp__5753__auto___34345){
var seq__34045_34346__$1 = temp__5753__auto___34345;
if(cljs.core.chunked_seq_QMARK_(seq__34045_34346__$1)){
var c__4638__auto___34347 = cljs.core.chunk_first(seq__34045_34346__$1);
var G__34348 = cljs.core.chunk_rest(seq__34045_34346__$1);
var G__34349 = c__4638__auto___34347;
var G__34350 = cljs.core.count(c__4638__auto___34347);
var G__34351 = (0);
seq__34045_34332 = G__34348;
chunk__34046_34333 = G__34349;
count__34047_34334 = G__34350;
i__34048_34335 = G__34351;
continue;
} else {
var f_34352 = cljs.core.first(seq__34045_34346__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34352], 0));


var G__34353 = cljs.core.next(seq__34045_34346__$1);
var G__34354 = null;
var G__34355 = (0);
var G__34356 = (0);
seq__34045_34332 = G__34353;
chunk__34046_34333 = G__34354;
count__34047_34334 = G__34355;
i__34048_34335 = G__34356;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34357 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34357], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34357)))?cljs.core.second(arglists_34357):arglists_34357)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34074_34364 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34075_34365 = null;
var count__34076_34366 = (0);
var i__34077_34367 = (0);
while(true){
if((i__34077_34367 < count__34076_34366)){
var vec__34098_34368 = chunk__34075_34365.cljs$core$IIndexed$_nth$arity$2(null,i__34077_34367);
var name_34369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34098_34368,(0),null);
var map__34101_34370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34098_34368,(1),null);
var map__34101_34371__$1 = cljs.core.__destructure_map(map__34101_34370);
var doc_34372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34101_34371__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34101_34371__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34369], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34373], 0));

if(cljs.core.truth_(doc_34372)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34372], 0));
} else {
}


var G__34374 = seq__34074_34364;
var G__34375 = chunk__34075_34365;
var G__34376 = count__34076_34366;
var G__34377 = (i__34077_34367 + (1));
seq__34074_34364 = G__34374;
chunk__34075_34365 = G__34375;
count__34076_34366 = G__34376;
i__34077_34367 = G__34377;
continue;
} else {
var temp__5753__auto___34382 = cljs.core.seq(seq__34074_34364);
if(temp__5753__auto___34382){
var seq__34074_34383__$1 = temp__5753__auto___34382;
if(cljs.core.chunked_seq_QMARK_(seq__34074_34383__$1)){
var c__4638__auto___34384 = cljs.core.chunk_first(seq__34074_34383__$1);
var G__34385 = cljs.core.chunk_rest(seq__34074_34383__$1);
var G__34386 = c__4638__auto___34384;
var G__34387 = cljs.core.count(c__4638__auto___34384);
var G__34388 = (0);
seq__34074_34364 = G__34385;
chunk__34075_34365 = G__34386;
count__34076_34366 = G__34387;
i__34077_34367 = G__34388;
continue;
} else {
var vec__34103_34389 = cljs.core.first(seq__34074_34383__$1);
var name_34390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34103_34389,(0),null);
var map__34106_34391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34103_34389,(1),null);
var map__34106_34392__$1 = cljs.core.__destructure_map(map__34106_34391);
var doc_34393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34106_34392__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34106_34392__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34390], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34394], 0));

if(cljs.core.truth_(doc_34393)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34393], 0));
} else {
}


var G__34396 = cljs.core.next(seq__34074_34383__$1);
var G__34397 = null;
var G__34398 = (0);
var G__34399 = (0);
seq__34074_34364 = G__34396;
chunk__34075_34365 = G__34397;
count__34076_34366 = G__34398;
i__34077_34367 = G__34399;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34107 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34108 = null;
var count__34109 = (0);
var i__34110 = (0);
while(true){
if((i__34110 < count__34109)){
var role = chunk__34108.cljs$core$IIndexed$_nth$arity$2(null,i__34110);
var temp__5753__auto___34400__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34400__$1)){
var spec_34401 = temp__5753__auto___34400__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34401)], 0));
} else {
}


var G__34403 = seq__34107;
var G__34404 = chunk__34108;
var G__34405 = count__34109;
var G__34406 = (i__34110 + (1));
seq__34107 = G__34403;
chunk__34108 = G__34404;
count__34109 = G__34405;
i__34110 = G__34406;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34107);
if(temp__5753__auto____$1){
var seq__34107__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34107__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34107__$1);
var G__34408 = cljs.core.chunk_rest(seq__34107__$1);
var G__34409 = c__4638__auto__;
var G__34410 = cljs.core.count(c__4638__auto__);
var G__34411 = (0);
seq__34107 = G__34408;
chunk__34108 = G__34409;
count__34109 = G__34410;
i__34110 = G__34411;
continue;
} else {
var role = cljs.core.first(seq__34107__$1);
var temp__5753__auto___34412__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34412__$2)){
var spec_34414 = temp__5753__auto___34412__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34414)], 0));
} else {
}


var G__34415 = cljs.core.next(seq__34107__$1);
var G__34416 = null;
var G__34417 = (0);
var G__34418 = (0);
seq__34107 = G__34415;
chunk__34108 = G__34416;
count__34109 = G__34417;
i__34110 = G__34418;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34423 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34424 = cljs.core.ex_cause(t);
via = G__34423;
t = G__34424;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34155 = datafied_throwable;
var map__34155__$1 = cljs.core.__destructure_map(map__34155);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34155__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34155__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34155__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34156 = cljs.core.last(via);
var map__34156__$1 = cljs.core.__destructure_map(map__34156);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34156__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34156__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34156__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34157 = data;
var map__34157__$1 = cljs.core.__destructure_map(map__34157);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34157__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34157__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34157__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34158 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34158__$1 = cljs.core.__destructure_map(map__34158);
var top_data = map__34158__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34158__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34181 = phase;
var G__34181__$1 = (((G__34181 instanceof cljs.core.Keyword))?G__34181.fqn:null);
switch (G__34181__$1) {
case "read-source":
var map__34182 = data;
var map__34182__$1 = cljs.core.__destructure_map(map__34182);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34182__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34182__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34187 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34187__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34187,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34187);
var G__34187__$2 = (cljs.core.truth_((function (){var fexpr__34198 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34198.cljs$core$IFn$_invoke$arity$1 ? fexpr__34198.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34198.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34187__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34187__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34187__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34187__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34203 = top_data;
var G__34203__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34203,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34203);
var G__34203__$2 = (cljs.core.truth_((function (){var fexpr__34215 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34215.cljs$core$IFn$_invoke$arity$1 ? fexpr__34215.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34215.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34203__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34203__$1);
var G__34203__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34203__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34203__$2);
var G__34203__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34203__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34203__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34203__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34203__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34225 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34225,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34225,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34225,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34225,(3),null);
var G__34235 = top_data;
var G__34235__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34235,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34235);
var G__34235__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34235__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34235__$1);
var G__34235__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34235__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34235__$2);
var G__34235__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34235__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34235__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34235__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34235__$4;
}

break;
case "execution":
var vec__34256 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34256,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34256,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34256,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34256,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34137_SHARP_){
var or__4212__auto__ = (p1__34137_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__34267 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34267.cljs$core$IFn$_invoke$arity$1 ? fexpr__34267.cljs$core$IFn$_invoke$arity$1(p1__34137_SHARP_) : fexpr__34267.call(null,p1__34137_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__34272 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34272__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34272,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34272);
var G__34272__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34272__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34272__$1);
var G__34272__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34272__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34272__$2);
var G__34272__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34272__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34272__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34272__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34272__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34181__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34277){
var map__34278 = p__34277;
var map__34278__$1 = cljs.core.__destructure_map(map__34278);
var triage_data = map__34278__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34278__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34278__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34278__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34278__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34278__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34278__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34278__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34286 = phase;
var G__34286__$1 = (((G__34286 instanceof cljs.core.Keyword))?G__34286.fqn:null);
switch (G__34286__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34287 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34288 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34289 = loc;
var G__34290 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34292_34445 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34293_34446 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34294_34447 = true;
var _STAR_print_fn_STAR__temp_val__34295_34448 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34294_34447);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34295_34448);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34274_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34274_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34293_34446);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34292_34445);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34287,G__34288,G__34289,G__34290) : format.call(null,G__34287,G__34288,G__34289,G__34290));

break;
case "macroexpansion":
var G__34297 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34298 = cause_type;
var G__34299 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34300 = loc;
var G__34301 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34297,G__34298,G__34299,G__34300,G__34301) : format.call(null,G__34297,G__34298,G__34299,G__34300,G__34301));

break;
case "compile-syntax-check":
var G__34302 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34303 = cause_type;
var G__34304 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34305 = loc;
var G__34306 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34302,G__34303,G__34304,G__34305,G__34306) : format.call(null,G__34302,G__34303,G__34304,G__34305,G__34306));

break;
case "compilation":
var G__34307 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34308 = cause_type;
var G__34309 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34310 = loc;
var G__34311 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34307,G__34308,G__34309,G__34310,G__34311) : format.call(null,G__34307,G__34308,G__34309,G__34310,G__34311));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34318 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34319 = symbol;
var G__34320 = loc;
var G__34321 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34323_34452 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34324_34453 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34325_34454 = true;
var _STAR_print_fn_STAR__temp_val__34326_34455 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34325_34454);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34326_34455);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34276_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34276_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34324_34453);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34323_34452);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34318,G__34319,G__34320,G__34321) : format.call(null,G__34318,G__34319,G__34320,G__34321));
} else {
var G__34327 = "Execution error%s at %s(%s).\n%s\n";
var G__34328 = cause_type;
var G__34329 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34330 = loc;
var G__34331 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34327,G__34328,G__34329,G__34330,G__34331) : format.call(null,G__34327,G__34328,G__34329,G__34330,G__34331));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34286__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
