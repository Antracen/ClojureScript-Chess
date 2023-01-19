goog.provide('haslett.format');

/**
 * The format protocol.
 * @interface
 */
haslett.format.Format = function(){};

var haslett$format$Format$read$dyn_27658 = (function (formatter,string){
var x__4509__auto__ = (((formatter == null))?null:formatter);
var m__4510__auto__ = (haslett.format.read[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__4510__auto__.call(null,formatter,string));
} else {
var m__4508__auto__ = (haslett.format.read["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__4508__auto__.call(null,formatter,string));
} else {
throw cljs.core.missing_protocol("Format.read",formatter);
}
}
});
haslett.format.read = (function haslett$format$read(formatter,string){
if((((!((formatter == null)))) && ((!((formatter.haslett$format$Format$read$arity$2 == null)))))){
return formatter.haslett$format$Format$read$arity$2(formatter,string);
} else {
return haslett$format$Format$read$dyn_27658(formatter,string);
}
});

var haslett$format$Format$write$dyn_27661 = (function (formatter,value){
var x__4509__auto__ = (((formatter == null))?null:formatter);
var m__4510__auto__ = (haslett.format.write[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__4510__auto__.call(null,formatter,value));
} else {
var m__4508__auto__ = (haslett.format.write["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__4508__auto__.call(null,formatter,value));
} else {
throw cljs.core.missing_protocol("Format.write",formatter);
}
}
});
haslett.format.write = (function haslett$format$write(formatter,value){
if((((!((formatter == null)))) && ((!((formatter.haslett$format$Format$write$arity$2 == null)))))){
return formatter.haslett$format$Format$write$arity$2(formatter,value);
} else {
return haslett$format$Format$write$dyn_27661(formatter,value);
}
});

/**
 * The identity formatter. Does nothing to the input or output.
 */
haslett.format.identity = (function (){
if((typeof haslett !== 'undefined') && (typeof haslett.format !== 'undefined') && (typeof haslett.format.t_haslett$format27632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {haslett.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
haslett.format.t_haslett$format27632 = (function (meta27633){
this.meta27633 = meta27633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(haslett.format.t_haslett$format27632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27634,meta27633__$1){
var self__ = this;
var _27634__$1 = this;
return (new haslett.format.t_haslett$format27632(meta27633__$1));
}));

(haslett.format.t_haslett$format27632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27634){
var self__ = this;
var _27634__$1 = this;
return self__.meta27633;
}));

(haslett.format.t_haslett$format27632.prototype.haslett$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(haslett.format.t_haslett$format27632.prototype.haslett$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return s;
}));

(haslett.format.t_haslett$format27632.prototype.haslett$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return v;
}));

(haslett.format.t_haslett$format27632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27633","meta27633",-910408642,null)], null);
}));

(haslett.format.t_haslett$format27632.cljs$lang$type = true);

(haslett.format.t_haslett$format27632.cljs$lang$ctorStr = "haslett.format/t_haslett$format27632");

(haslett.format.t_haslett$format27632.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"haslett.format/t_haslett$format27632");
}));

/**
 * Positional factory function for haslett.format/t_haslett$format27632.
 */
haslett.format.__GT_t_haslett$format27632 = (function haslett$format$__GT_t_haslett$format27632(meta27633){
return (new haslett.format.t_haslett$format27632(meta27633));
});

}

return (new haslett.format.t_haslett$format27632(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data encoded in transit+json.
 */
haslett.format.transit = (function (){
if((typeof haslett !== 'undefined') && (typeof haslett.format !== 'undefined') && (typeof haslett.format.t_haslett$format27643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {haslett.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
haslett.format.t_haslett$format27643 = (function (meta27644){
this.meta27644 = meta27644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(haslett.format.t_haslett$format27643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27645,meta27644__$1){
var self__ = this;
var _27645__$1 = this;
return (new haslett.format.t_haslett$format27643(meta27644__$1));
}));

(haslett.format.t_haslett$format27643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27645){
var self__ = this;
var _27645__$1 = this;
return self__.meta27644;
}));

(haslett.format.t_haslett$format27643.prototype.haslett$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(haslett.format.t_haslett$format27643.prototype.haslett$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),s);
}));

(haslett.format.t_haslett$format27643.prototype.haslett$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),v);
}));

(haslett.format.t_haslett$format27643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27644","meta27644",953176272,null)], null);
}));

(haslett.format.t_haslett$format27643.cljs$lang$type = true);

(haslett.format.t_haslett$format27643.cljs$lang$ctorStr = "haslett.format/t_haslett$format27643");

(haslett.format.t_haslett$format27643.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"haslett.format/t_haslett$format27643");
}));

/**
 * Positional factory function for haslett.format/t_haslett$format27643.
 */
haslett.format.__GT_t_haslett$format27643 = (function haslett$format$__GT_t_haslett$format27643(meta27644){
return (new haslett.format.t_haslett$format27643(meta27644));
});

}

return (new haslett.format.t_haslett$format27643(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data encoded in edn.
 */
haslett.format.edn = (function (){
if((typeof haslett !== 'undefined') && (typeof haslett.format !== 'undefined') && (typeof haslett.format.t_haslett$format27646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {haslett.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
haslett.format.t_haslett$format27646 = (function (meta27647){
this.meta27647 = meta27647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(haslett.format.t_haslett$format27646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27648,meta27647__$1){
var self__ = this;
var _27648__$1 = this;
return (new haslett.format.t_haslett$format27646(meta27647__$1));
}));

(haslett.format.t_haslett$format27646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27648){
var self__ = this;
var _27648__$1 = this;
return self__.meta27647;
}));

(haslett.format.t_haslett$format27646.prototype.haslett$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(haslett.format.t_haslett$format27646.prototype.haslett$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}));

(haslett.format.t_haslett$format27646.prototype.haslett$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}));

(haslett.format.t_haslett$format27646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27647","meta27647",1880390610,null)], null);
}));

(haslett.format.t_haslett$format27646.cljs$lang$type = true);

(haslett.format.t_haslett$format27646.cljs$lang$ctorStr = "haslett.format/t_haslett$format27646");

(haslett.format.t_haslett$format27646.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"haslett.format/t_haslett$format27646");
}));

/**
 * Positional factory function for haslett.format/t_haslett$format27646.
 */
haslett.format.__GT_t_haslett$format27646 = (function haslett$format$__GT_t_haslett$format27646(meta27647){
return (new haslett.format.t_haslett$format27646(meta27647));
});

}

return (new haslett.format.t_haslett$format27646(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data encoded in JSON.
 */
haslett.format.json = (function (){
if((typeof haslett !== 'undefined') && (typeof haslett.format !== 'undefined') && (typeof haslett.format.t_haslett$format27649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {haslett.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
haslett.format.t_haslett$format27649 = (function (meta27650){
this.meta27650 = meta27650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(haslett.format.t_haslett$format27649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27651,meta27650__$1){
var self__ = this;
var _27651__$1 = this;
return (new haslett.format.t_haslett$format27649(meta27650__$1));
}));

(haslett.format.t_haslett$format27649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27651){
var self__ = this;
var _27651__$1 = this;
return self__.meta27650;
}));

(haslett.format.t_haslett$format27649.prototype.haslett$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(haslett.format.t_haslett$format27649.prototype.haslett$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
}));

(haslett.format.t_haslett$format27649.prototype.haslett$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return JSON.stringify(cljs.core.clj__GT_js(v));
}));

(haslett.format.t_haslett$format27649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27650","meta27650",-1687261018,null)], null);
}));

(haslett.format.t_haslett$format27649.cljs$lang$type = true);

(haslett.format.t_haslett$format27649.cljs$lang$ctorStr = "haslett.format/t_haslett$format27649");

(haslett.format.t_haslett$format27649.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"haslett.format/t_haslett$format27649");
}));

/**
 * Positional factory function for haslett.format/t_haslett$format27649.
 */
haslett.format.__GT_t_haslett$format27649 = (function haslett$format$__GT_t_haslett$format27649(meta27650){
return (new haslett.format.t_haslett$format27649(meta27650));
});

}

return (new haslett.format.t_haslett$format27649(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=haslett.format.js.map
