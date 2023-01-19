goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36225 = arguments.length;
var i__4819__auto___36226 = (0);
while(true){
if((i__4819__auto___36226 < len__4818__auto___36225)){
args__4824__auto__.push((arguments[i__4819__auto___36226]));

var G__36228 = (i__4819__auto___36226 + (1));
i__4819__auto___36226 = G__36228;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35967){
var G__35968 = cljs.core.first(seq35967);
var seq35967__$1 = cljs.core.next(seq35967);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35968,seq35967__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35972 = cljs.core.seq(sources);
var chunk__35973 = null;
var count__35974 = (0);
var i__35975 = (0);
while(true){
if((i__35975 < count__35974)){
var map__35982 = chunk__35973.cljs$core$IIndexed$_nth$arity$2(null,i__35975);
var map__35982__$1 = cljs.core.__destructure_map(map__35982);
var src = map__35982__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35982__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35982__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35982__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35982__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35983){var e_36229 = e35983;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36229);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36229.message)].join('')));
}

var G__36230 = seq__35972;
var G__36231 = chunk__35973;
var G__36232 = count__35974;
var G__36233 = (i__35975 + (1));
seq__35972 = G__36230;
chunk__35973 = G__36231;
count__35974 = G__36232;
i__35975 = G__36233;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35972);
if(temp__5753__auto__){
var seq__35972__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35972__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35972__$1);
var G__36234 = cljs.core.chunk_rest(seq__35972__$1);
var G__36235 = c__4638__auto__;
var G__36236 = cljs.core.count(c__4638__auto__);
var G__36237 = (0);
seq__35972 = G__36234;
chunk__35973 = G__36235;
count__35974 = G__36236;
i__35975 = G__36237;
continue;
} else {
var map__35984 = cljs.core.first(seq__35972__$1);
var map__35984__$1 = cljs.core.__destructure_map(map__35984);
var src = map__35984__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35984__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35984__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35984__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35984__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35985){var e_36238 = e35985;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36238);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36238.message)].join('')));
}

var G__36239 = cljs.core.next(seq__35972__$1);
var G__36240 = null;
var G__36241 = (0);
var G__36242 = (0);
seq__35972 = G__36239;
chunk__35973 = G__36240;
count__35974 = G__36241;
i__35975 = G__36242;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35994 = cljs.core.seq(js_requires);
var chunk__35995 = null;
var count__35996 = (0);
var i__35997 = (0);
while(true){
if((i__35997 < count__35996)){
var js_ns = chunk__35995.cljs$core$IIndexed$_nth$arity$2(null,i__35997);
var require_str_36243 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36243);


var G__36244 = seq__35994;
var G__36245 = chunk__35995;
var G__36246 = count__35996;
var G__36247 = (i__35997 + (1));
seq__35994 = G__36244;
chunk__35995 = G__36245;
count__35996 = G__36246;
i__35997 = G__36247;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35994);
if(temp__5753__auto__){
var seq__35994__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35994__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35994__$1);
var G__36249 = cljs.core.chunk_rest(seq__35994__$1);
var G__36250 = c__4638__auto__;
var G__36251 = cljs.core.count(c__4638__auto__);
var G__36252 = (0);
seq__35994 = G__36249;
chunk__35995 = G__36250;
count__35996 = G__36251;
i__35997 = G__36252;
continue;
} else {
var js_ns = cljs.core.first(seq__35994__$1);
var require_str_36255 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36255);


var G__36256 = cljs.core.next(seq__35994__$1);
var G__36257 = null;
var G__36258 = (0);
var G__36259 = (0);
seq__35994 = G__36256;
chunk__35995 = G__36257;
count__35996 = G__36258;
i__35997 = G__36259;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36003){
var map__36004 = p__36003;
var map__36004__$1 = cljs.core.__destructure_map(map__36004);
var msg = map__36004__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36004__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36004__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36005(s__36006){
return (new cljs.core.LazySeq(null,(function (){
var s__36006__$1 = s__36006;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36006__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36011 = cljs.core.first(xs__6308__auto__);
var map__36011__$1 = cljs.core.__destructure_map(map__36011);
var src = map__36011__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__36006__$1,map__36011,map__36011__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36004,map__36004__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36005_$_iter__36007(s__36008){
return (new cljs.core.LazySeq(null,((function (s__36006__$1,map__36011,map__36011__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36004,map__36004__$1,msg,info,reload_info){
return (function (){
var s__36008__$1 = s__36008;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36008__$1);
if(temp__5753__auto____$1){
var s__36008__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36008__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__36008__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__36010 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__36009 = (0);
while(true){
if((i__36009 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__36009);
cljs.core.chunk_append(b__36010,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36261 = (i__36009 + (1));
i__36009 = G__36261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36010),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36005_$_iter__36007(cljs.core.chunk_rest(s__36008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36010),null);
}
} else {
var warning = cljs.core.first(s__36008__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36005_$_iter__36007(cljs.core.rest(s__36008__$2)));
}
} else {
return null;
}
break;
}
});})(s__36006__$1,map__36011,map__36011__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36004,map__36004__$1,msg,info,reload_info))
,null,null));
});})(s__36006__$1,map__36011,map__36011__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36004,map__36004__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36005(cljs.core.rest(s__36006__$1)));
} else {
var G__36262 = cljs.core.rest(s__36006__$1);
s__36006__$1 = G__36262;
continue;
}
} else {
var G__36263 = cljs.core.rest(s__36006__$1);
s__36006__$1 = G__36263;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36013_36265 = cljs.core.seq(warnings);
var chunk__36014_36266 = null;
var count__36015_36267 = (0);
var i__36016_36268 = (0);
while(true){
if((i__36016_36268 < count__36015_36267)){
var map__36021_36270 = chunk__36014_36266.cljs$core$IIndexed$_nth$arity$2(null,i__36016_36268);
var map__36021_36271__$1 = cljs.core.__destructure_map(map__36021_36270);
var w_36272 = map__36021_36271__$1;
var msg_36273__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36021_36271__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36021_36271__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36021_36271__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36021_36271__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36276)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36274),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36275),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36273__$1)].join(''));


var G__36279 = seq__36013_36265;
var G__36280 = chunk__36014_36266;
var G__36281 = count__36015_36267;
var G__36282 = (i__36016_36268 + (1));
seq__36013_36265 = G__36279;
chunk__36014_36266 = G__36280;
count__36015_36267 = G__36281;
i__36016_36268 = G__36282;
continue;
} else {
var temp__5753__auto___36284 = cljs.core.seq(seq__36013_36265);
if(temp__5753__auto___36284){
var seq__36013_36286__$1 = temp__5753__auto___36284;
if(cljs.core.chunked_seq_QMARK_(seq__36013_36286__$1)){
var c__4638__auto___36287 = cljs.core.chunk_first(seq__36013_36286__$1);
var G__36288 = cljs.core.chunk_rest(seq__36013_36286__$1);
var G__36289 = c__4638__auto___36287;
var G__36290 = cljs.core.count(c__4638__auto___36287);
var G__36291 = (0);
seq__36013_36265 = G__36288;
chunk__36014_36266 = G__36289;
count__36015_36267 = G__36290;
i__36016_36268 = G__36291;
continue;
} else {
var map__36026_36293 = cljs.core.first(seq__36013_36286__$1);
var map__36026_36294__$1 = cljs.core.__destructure_map(map__36026_36293);
var w_36295 = map__36026_36294__$1;
var msg_36296__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36026_36294__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36026_36294__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36026_36294__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36026_36294__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36299)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36297),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36298),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36296__$1)].join(''));


var G__36300 = cljs.core.next(seq__36013_36286__$1);
var G__36301 = null;
var G__36302 = (0);
var G__36303 = (0);
seq__36013_36265 = G__36300;
chunk__36014_36266 = G__36301;
count__36015_36267 = G__36302;
i__36016_36268 = G__36303;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36002_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36002_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36031){
var map__36035 = p__36031;
var map__36035__$1 = cljs.core.__destructure_map(map__36035);
var msg = map__36035__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36035__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36036 = cljs.core.seq(updates);
var chunk__36038 = null;
var count__36039 = (0);
var i__36040 = (0);
while(true){
if((i__36040 < count__36039)){
var path = chunk__36038.cljs$core$IIndexed$_nth$arity$2(null,i__36040);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36079_36304 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36083_36305 = null;
var count__36084_36306 = (0);
var i__36085_36307 = (0);
while(true){
if((i__36085_36307 < count__36084_36306)){
var node_36308 = chunk__36083_36305.cljs$core$IIndexed$_nth$arity$2(null,i__36085_36307);
if(cljs.core.not(node_36308.shadow$old)){
var path_match_36309 = shadow.cljs.devtools.client.browser.match_paths(node_36308.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36309)){
var new_link_36310 = (function (){var G__36094 = node_36308.cloneNode(true);
G__36094.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36309),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36094;
})();
(node_36308.shadow$old = true);

(new_link_36310.onload = ((function (seq__36079_36304,chunk__36083_36305,count__36084_36306,i__36085_36307,seq__36036,chunk__36038,count__36039,i__36040,new_link_36310,path_match_36309,node_36308,path,map__36035,map__36035__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36308);
});})(seq__36079_36304,chunk__36083_36305,count__36084_36306,i__36085_36307,seq__36036,chunk__36038,count__36039,i__36040,new_link_36310,path_match_36309,node_36308,path,map__36035,map__36035__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36309], 0));

goog.dom.insertSiblingAfter(new_link_36310,node_36308);


var G__36312 = seq__36079_36304;
var G__36313 = chunk__36083_36305;
var G__36314 = count__36084_36306;
var G__36315 = (i__36085_36307 + (1));
seq__36079_36304 = G__36312;
chunk__36083_36305 = G__36313;
count__36084_36306 = G__36314;
i__36085_36307 = G__36315;
continue;
} else {
var G__36316 = seq__36079_36304;
var G__36317 = chunk__36083_36305;
var G__36318 = count__36084_36306;
var G__36319 = (i__36085_36307 + (1));
seq__36079_36304 = G__36316;
chunk__36083_36305 = G__36317;
count__36084_36306 = G__36318;
i__36085_36307 = G__36319;
continue;
}
} else {
var G__36320 = seq__36079_36304;
var G__36321 = chunk__36083_36305;
var G__36322 = count__36084_36306;
var G__36323 = (i__36085_36307 + (1));
seq__36079_36304 = G__36320;
chunk__36083_36305 = G__36321;
count__36084_36306 = G__36322;
i__36085_36307 = G__36323;
continue;
}
} else {
var temp__5753__auto___36324 = cljs.core.seq(seq__36079_36304);
if(temp__5753__auto___36324){
var seq__36079_36325__$1 = temp__5753__auto___36324;
if(cljs.core.chunked_seq_QMARK_(seq__36079_36325__$1)){
var c__4638__auto___36326 = cljs.core.chunk_first(seq__36079_36325__$1);
var G__36327 = cljs.core.chunk_rest(seq__36079_36325__$1);
var G__36328 = c__4638__auto___36326;
var G__36329 = cljs.core.count(c__4638__auto___36326);
var G__36330 = (0);
seq__36079_36304 = G__36327;
chunk__36083_36305 = G__36328;
count__36084_36306 = G__36329;
i__36085_36307 = G__36330;
continue;
} else {
var node_36331 = cljs.core.first(seq__36079_36325__$1);
if(cljs.core.not(node_36331.shadow$old)){
var path_match_36332 = shadow.cljs.devtools.client.browser.match_paths(node_36331.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36332)){
var new_link_36333 = (function (){var G__36095 = node_36331.cloneNode(true);
G__36095.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36332),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36095;
})();
(node_36331.shadow$old = true);

(new_link_36333.onload = ((function (seq__36079_36304,chunk__36083_36305,count__36084_36306,i__36085_36307,seq__36036,chunk__36038,count__36039,i__36040,new_link_36333,path_match_36332,node_36331,seq__36079_36325__$1,temp__5753__auto___36324,path,map__36035,map__36035__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36331);
});})(seq__36079_36304,chunk__36083_36305,count__36084_36306,i__36085_36307,seq__36036,chunk__36038,count__36039,i__36040,new_link_36333,path_match_36332,node_36331,seq__36079_36325__$1,temp__5753__auto___36324,path,map__36035,map__36035__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36332], 0));

goog.dom.insertSiblingAfter(new_link_36333,node_36331);


var G__36334 = cljs.core.next(seq__36079_36325__$1);
var G__36335 = null;
var G__36336 = (0);
var G__36337 = (0);
seq__36079_36304 = G__36334;
chunk__36083_36305 = G__36335;
count__36084_36306 = G__36336;
i__36085_36307 = G__36337;
continue;
} else {
var G__36338 = cljs.core.next(seq__36079_36325__$1);
var G__36339 = null;
var G__36340 = (0);
var G__36341 = (0);
seq__36079_36304 = G__36338;
chunk__36083_36305 = G__36339;
count__36084_36306 = G__36340;
i__36085_36307 = G__36341;
continue;
}
} else {
var G__36342 = cljs.core.next(seq__36079_36325__$1);
var G__36343 = null;
var G__36344 = (0);
var G__36345 = (0);
seq__36079_36304 = G__36342;
chunk__36083_36305 = G__36343;
count__36084_36306 = G__36344;
i__36085_36307 = G__36345;
continue;
}
}
} else {
}
}
break;
}


var G__36346 = seq__36036;
var G__36347 = chunk__36038;
var G__36348 = count__36039;
var G__36349 = (i__36040 + (1));
seq__36036 = G__36346;
chunk__36038 = G__36347;
count__36039 = G__36348;
i__36040 = G__36349;
continue;
} else {
var G__36350 = seq__36036;
var G__36351 = chunk__36038;
var G__36352 = count__36039;
var G__36353 = (i__36040 + (1));
seq__36036 = G__36350;
chunk__36038 = G__36351;
count__36039 = G__36352;
i__36040 = G__36353;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36036);
if(temp__5753__auto__){
var seq__36036__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36036__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36036__$1);
var G__36354 = cljs.core.chunk_rest(seq__36036__$1);
var G__36355 = c__4638__auto__;
var G__36356 = cljs.core.count(c__4638__auto__);
var G__36357 = (0);
seq__36036 = G__36354;
chunk__36038 = G__36355;
count__36039 = G__36356;
i__36040 = G__36357;
continue;
} else {
var path = cljs.core.first(seq__36036__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36101_36358 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36105_36359 = null;
var count__36106_36360 = (0);
var i__36107_36361 = (0);
while(true){
if((i__36107_36361 < count__36106_36360)){
var node_36362 = chunk__36105_36359.cljs$core$IIndexed$_nth$arity$2(null,i__36107_36361);
if(cljs.core.not(node_36362.shadow$old)){
var path_match_36363 = shadow.cljs.devtools.client.browser.match_paths(node_36362.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36363)){
var new_link_36364 = (function (){var G__36120 = node_36362.cloneNode(true);
G__36120.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36363),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36120;
})();
(node_36362.shadow$old = true);

(new_link_36364.onload = ((function (seq__36101_36358,chunk__36105_36359,count__36106_36360,i__36107_36361,seq__36036,chunk__36038,count__36039,i__36040,new_link_36364,path_match_36363,node_36362,path,seq__36036__$1,temp__5753__auto__,map__36035,map__36035__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36362);
});})(seq__36101_36358,chunk__36105_36359,count__36106_36360,i__36107_36361,seq__36036,chunk__36038,count__36039,i__36040,new_link_36364,path_match_36363,node_36362,path,seq__36036__$1,temp__5753__auto__,map__36035,map__36035__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36363], 0));

goog.dom.insertSiblingAfter(new_link_36364,node_36362);


var G__36365 = seq__36101_36358;
var G__36366 = chunk__36105_36359;
var G__36367 = count__36106_36360;
var G__36368 = (i__36107_36361 + (1));
seq__36101_36358 = G__36365;
chunk__36105_36359 = G__36366;
count__36106_36360 = G__36367;
i__36107_36361 = G__36368;
continue;
} else {
var G__36369 = seq__36101_36358;
var G__36370 = chunk__36105_36359;
var G__36371 = count__36106_36360;
var G__36372 = (i__36107_36361 + (1));
seq__36101_36358 = G__36369;
chunk__36105_36359 = G__36370;
count__36106_36360 = G__36371;
i__36107_36361 = G__36372;
continue;
}
} else {
var G__36373 = seq__36101_36358;
var G__36374 = chunk__36105_36359;
var G__36375 = count__36106_36360;
var G__36376 = (i__36107_36361 + (1));
seq__36101_36358 = G__36373;
chunk__36105_36359 = G__36374;
count__36106_36360 = G__36375;
i__36107_36361 = G__36376;
continue;
}
} else {
var temp__5753__auto___36377__$1 = cljs.core.seq(seq__36101_36358);
if(temp__5753__auto___36377__$1){
var seq__36101_36378__$1 = temp__5753__auto___36377__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36101_36378__$1)){
var c__4638__auto___36379 = cljs.core.chunk_first(seq__36101_36378__$1);
var G__36380 = cljs.core.chunk_rest(seq__36101_36378__$1);
var G__36381 = c__4638__auto___36379;
var G__36382 = cljs.core.count(c__4638__auto___36379);
var G__36383 = (0);
seq__36101_36358 = G__36380;
chunk__36105_36359 = G__36381;
count__36106_36360 = G__36382;
i__36107_36361 = G__36383;
continue;
} else {
var node_36384 = cljs.core.first(seq__36101_36378__$1);
if(cljs.core.not(node_36384.shadow$old)){
var path_match_36385 = shadow.cljs.devtools.client.browser.match_paths(node_36384.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36385)){
var new_link_36386 = (function (){var G__36126 = node_36384.cloneNode(true);
G__36126.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36385),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36126;
})();
(node_36384.shadow$old = true);

(new_link_36386.onload = ((function (seq__36101_36358,chunk__36105_36359,count__36106_36360,i__36107_36361,seq__36036,chunk__36038,count__36039,i__36040,new_link_36386,path_match_36385,node_36384,seq__36101_36378__$1,temp__5753__auto___36377__$1,path,seq__36036__$1,temp__5753__auto__,map__36035,map__36035__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36384);
});})(seq__36101_36358,chunk__36105_36359,count__36106_36360,i__36107_36361,seq__36036,chunk__36038,count__36039,i__36040,new_link_36386,path_match_36385,node_36384,seq__36101_36378__$1,temp__5753__auto___36377__$1,path,seq__36036__$1,temp__5753__auto__,map__36035,map__36035__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36385], 0));

goog.dom.insertSiblingAfter(new_link_36386,node_36384);


var G__36387 = cljs.core.next(seq__36101_36378__$1);
var G__36388 = null;
var G__36389 = (0);
var G__36390 = (0);
seq__36101_36358 = G__36387;
chunk__36105_36359 = G__36388;
count__36106_36360 = G__36389;
i__36107_36361 = G__36390;
continue;
} else {
var G__36391 = cljs.core.next(seq__36101_36378__$1);
var G__36392 = null;
var G__36393 = (0);
var G__36394 = (0);
seq__36101_36358 = G__36391;
chunk__36105_36359 = G__36392;
count__36106_36360 = G__36393;
i__36107_36361 = G__36394;
continue;
}
} else {
var G__36395 = cljs.core.next(seq__36101_36378__$1);
var G__36396 = null;
var G__36397 = (0);
var G__36398 = (0);
seq__36101_36358 = G__36395;
chunk__36105_36359 = G__36396;
count__36106_36360 = G__36397;
i__36107_36361 = G__36398;
continue;
}
}
} else {
}
}
break;
}


var G__36399 = cljs.core.next(seq__36036__$1);
var G__36400 = null;
var G__36401 = (0);
var G__36402 = (0);
seq__36036 = G__36399;
chunk__36038 = G__36400;
count__36039 = G__36401;
i__36040 = G__36402;
continue;
} else {
var G__36403 = cljs.core.next(seq__36036__$1);
var G__36404 = null;
var G__36405 = (0);
var G__36406 = (0);
seq__36036 = G__36403;
chunk__36038 = G__36404;
count__36039 = G__36405;
i__36040 = G__36406;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36131){
var map__36132 = p__36131;
var map__36132__$1 = cljs.core.__destructure_map(map__36132);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36132__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36140){
var map__36141 = p__36140;
var map__36141__$1 = cljs.core.__destructure_map(map__36141);
var _ = map__36141__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36141__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36144,done,error){
var map__36145 = p__36144;
var map__36145__$1 = cljs.core.__destructure_map(map__36145);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36148,done,error){
var map__36149 = p__36148;
var map__36149__$1 = cljs.core.__destructure_map(map__36149);
var msg = map__36149__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36150){
var map__36151 = p__36150;
var map__36151__$1 = cljs.core.__destructure_map(map__36151);
var src = map__36151__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36152 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36152) : done.call(null,G__36152));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36155){
var map__36156 = p__36155;
var map__36156__$1 = cljs.core.__destructure_map(map__36156);
var msg__$1 = map__36156__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36157){var ex = e36157;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36159){
var map__36161 = p__36159;
var map__36161__$1 = cljs.core.__destructure_map(map__36161);
var env = map__36161__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36161__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36184){
var map__36185 = p__36184;
var map__36185__$1 = cljs.core.__destructure_map(map__36185);
var msg = map__36185__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36185__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36198){
var map__36199 = p__36198;
var map__36199__$1 = cljs.core.__destructure_map(map__36199);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36199__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36199__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36201){
var map__36202 = p__36201;
var map__36202__$1 = cljs.core.__destructure_map(map__36202);
var svc = map__36202__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36202__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
