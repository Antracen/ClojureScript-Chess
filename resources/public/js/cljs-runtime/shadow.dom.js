goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34449 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34449(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34451 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34451(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32754 = coll;
var G__32755 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32754,G__32755) : shadow.dom.lazy_native_coll_seq.call(null,G__32754,G__32755));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32787 = arguments.length;
switch (G__32787) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32801 = arguments.length;
switch (G__32801) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32810 = arguments.length;
switch (G__32810) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32832 = arguments.length;
switch (G__32832) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32866 = arguments.length;
switch (G__32866) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32906 = arguments.length;
switch (G__32906) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32925){if((e32925 instanceof Object)){
var e = e32925;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32925;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32952 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32953 = null;
var count__32954 = (0);
var i__32955 = (0);
while(true){
if((i__32955 < count__32954)){
var el = chunk__32953.cljs$core$IIndexed$_nth$arity$2(null,i__32955);
var handler_34471__$1 = ((function (seq__32952,chunk__32953,count__32954,i__32955,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32952,chunk__32953,count__32954,i__32955,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34471__$1);


var G__34472 = seq__32952;
var G__34473 = chunk__32953;
var G__34474 = count__32954;
var G__34475 = (i__32955 + (1));
seq__32952 = G__34472;
chunk__32953 = G__34473;
count__32954 = G__34474;
i__32955 = G__34475;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32952);
if(temp__5753__auto__){
var seq__32952__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32952__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32952__$1);
var G__34478 = cljs.core.chunk_rest(seq__32952__$1);
var G__34479 = c__4638__auto__;
var G__34480 = cljs.core.count(c__4638__auto__);
var G__34481 = (0);
seq__32952 = G__34478;
chunk__32953 = G__34479;
count__32954 = G__34480;
i__32955 = G__34481;
continue;
} else {
var el = cljs.core.first(seq__32952__$1);
var handler_34482__$1 = ((function (seq__32952,chunk__32953,count__32954,i__32955,el,seq__32952__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32952,chunk__32953,count__32954,i__32955,el,seq__32952__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34482__$1);


var G__34483 = cljs.core.next(seq__32952__$1);
var G__34484 = null;
var G__34485 = (0);
var G__34486 = (0);
seq__32952 = G__34483;
chunk__32953 = G__34484;
count__32954 = G__34485;
i__32955 = G__34486;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33002 = arguments.length;
switch (G__33002) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33033 = cljs.core.seq(events);
var chunk__33034 = null;
var count__33035 = (0);
var i__33036 = (0);
while(true){
if((i__33036 < count__33035)){
var vec__33069 = chunk__33034.cljs$core$IIndexed$_nth$arity$2(null,i__33036);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33069,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33069,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34491 = seq__33033;
var G__34492 = chunk__33034;
var G__34493 = count__33035;
var G__34494 = (i__33036 + (1));
seq__33033 = G__34491;
chunk__33034 = G__34492;
count__33035 = G__34493;
i__33036 = G__34494;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33033);
if(temp__5753__auto__){
var seq__33033__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33033__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33033__$1);
var G__34495 = cljs.core.chunk_rest(seq__33033__$1);
var G__34496 = c__4638__auto__;
var G__34497 = cljs.core.count(c__4638__auto__);
var G__34498 = (0);
seq__33033 = G__34495;
chunk__33034 = G__34496;
count__33035 = G__34497;
i__33036 = G__34498;
continue;
} else {
var vec__33085 = cljs.core.first(seq__33033__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33085,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34500 = cljs.core.next(seq__33033__$1);
var G__34501 = null;
var G__34502 = (0);
var G__34503 = (0);
seq__33033 = G__34500;
chunk__33034 = G__34501;
count__33035 = G__34502;
i__33036 = G__34503;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33103 = cljs.core.seq(styles);
var chunk__33104 = null;
var count__33105 = (0);
var i__33106 = (0);
while(true){
if((i__33106 < count__33105)){
var vec__33132 = chunk__33104.cljs$core$IIndexed$_nth$arity$2(null,i__33106);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34505 = seq__33103;
var G__34506 = chunk__33104;
var G__34507 = count__33105;
var G__34508 = (i__33106 + (1));
seq__33103 = G__34505;
chunk__33104 = G__34506;
count__33105 = G__34507;
i__33106 = G__34508;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33103);
if(temp__5753__auto__){
var seq__33103__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33103__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33103__$1);
var G__34509 = cljs.core.chunk_rest(seq__33103__$1);
var G__34510 = c__4638__auto__;
var G__34511 = cljs.core.count(c__4638__auto__);
var G__34512 = (0);
seq__33103 = G__34509;
chunk__33104 = G__34510;
count__33105 = G__34511;
i__33106 = G__34512;
continue;
} else {
var vec__33149 = cljs.core.first(seq__33103__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33149,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33149,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34513 = cljs.core.next(seq__33103__$1);
var G__34514 = null;
var G__34515 = (0);
var G__34516 = (0);
seq__33103 = G__34513;
chunk__33104 = G__34514;
count__33105 = G__34515;
i__33106 = G__34516;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33161_34517 = key;
var G__33161_34518__$1 = (((G__33161_34517 instanceof cljs.core.Keyword))?G__33161_34517.fqn:null);
switch (G__33161_34518__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34520 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_34520,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_34520,"aria-");
}
})())){
el.setAttribute(ks_34520,value);
} else {
(el[ks_34520] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33202){
var map__33203 = p__33202;
var map__33203__$1 = cljs.core.__destructure_map(map__33203);
var props = map__33203__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33203__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33205 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33205,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33205,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33205,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33209 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33209,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33209;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33213 = arguments.length;
switch (G__33213) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33232){
var vec__33236 = p__33232;
var seq__33237 = cljs.core.seq(vec__33236);
var first__33238 = cljs.core.first(seq__33237);
var seq__33237__$1 = cljs.core.next(seq__33237);
var nn = first__33238;
var first__33238__$1 = cljs.core.first(seq__33237__$1);
var seq__33237__$2 = cljs.core.next(seq__33237__$1);
var np = first__33238__$1;
var nc = seq__33237__$2;
var node = vec__33236;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33242 = nn;
var G__33243 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33242,G__33243) : create_fn.call(null,G__33242,G__33243));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33246 = nn;
var G__33247 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33246,G__33247) : create_fn.call(null,G__33246,G__33247));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33266 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33266,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33266,(1),null);
var seq__33269_34538 = cljs.core.seq(node_children);
var chunk__33270_34539 = null;
var count__33271_34540 = (0);
var i__33272_34541 = (0);
while(true){
if((i__33272_34541 < count__33271_34540)){
var child_struct_34542 = chunk__33270_34539.cljs$core$IIndexed$_nth$arity$2(null,i__33272_34541);
var children_34543 = shadow.dom.dom_node(child_struct_34542);
if(cljs.core.seq_QMARK_(children_34543)){
var seq__33397_34544 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34543));
var chunk__33399_34545 = null;
var count__33400_34546 = (0);
var i__33401_34547 = (0);
while(true){
if((i__33401_34547 < count__33400_34546)){
var child_34549 = chunk__33399_34545.cljs$core$IIndexed$_nth$arity$2(null,i__33401_34547);
if(cljs.core.truth_(child_34549)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34549);


var G__34551 = seq__33397_34544;
var G__34552 = chunk__33399_34545;
var G__34553 = count__33400_34546;
var G__34554 = (i__33401_34547 + (1));
seq__33397_34544 = G__34551;
chunk__33399_34545 = G__34552;
count__33400_34546 = G__34553;
i__33401_34547 = G__34554;
continue;
} else {
var G__34555 = seq__33397_34544;
var G__34556 = chunk__33399_34545;
var G__34557 = count__33400_34546;
var G__34558 = (i__33401_34547 + (1));
seq__33397_34544 = G__34555;
chunk__33399_34545 = G__34556;
count__33400_34546 = G__34557;
i__33401_34547 = G__34558;
continue;
}
} else {
var temp__5753__auto___34559 = cljs.core.seq(seq__33397_34544);
if(temp__5753__auto___34559){
var seq__33397_34560__$1 = temp__5753__auto___34559;
if(cljs.core.chunked_seq_QMARK_(seq__33397_34560__$1)){
var c__4638__auto___34561 = cljs.core.chunk_first(seq__33397_34560__$1);
var G__34562 = cljs.core.chunk_rest(seq__33397_34560__$1);
var G__34563 = c__4638__auto___34561;
var G__34564 = cljs.core.count(c__4638__auto___34561);
var G__34565 = (0);
seq__33397_34544 = G__34562;
chunk__33399_34545 = G__34563;
count__33400_34546 = G__34564;
i__33401_34547 = G__34565;
continue;
} else {
var child_34566 = cljs.core.first(seq__33397_34560__$1);
if(cljs.core.truth_(child_34566)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34566);


var G__34567 = cljs.core.next(seq__33397_34560__$1);
var G__34568 = null;
var G__34569 = (0);
var G__34571 = (0);
seq__33397_34544 = G__34567;
chunk__33399_34545 = G__34568;
count__33400_34546 = G__34569;
i__33401_34547 = G__34571;
continue;
} else {
var G__34572 = cljs.core.next(seq__33397_34560__$1);
var G__34574 = null;
var G__34575 = (0);
var G__34576 = (0);
seq__33397_34544 = G__34572;
chunk__33399_34545 = G__34574;
count__33400_34546 = G__34575;
i__33401_34547 = G__34576;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34543);
}


var G__34578 = seq__33269_34538;
var G__34579 = chunk__33270_34539;
var G__34580 = count__33271_34540;
var G__34581 = (i__33272_34541 + (1));
seq__33269_34538 = G__34578;
chunk__33270_34539 = G__34579;
count__33271_34540 = G__34580;
i__33272_34541 = G__34581;
continue;
} else {
var temp__5753__auto___34582 = cljs.core.seq(seq__33269_34538);
if(temp__5753__auto___34582){
var seq__33269_34583__$1 = temp__5753__auto___34582;
if(cljs.core.chunked_seq_QMARK_(seq__33269_34583__$1)){
var c__4638__auto___34584 = cljs.core.chunk_first(seq__33269_34583__$1);
var G__34585 = cljs.core.chunk_rest(seq__33269_34583__$1);
var G__34586 = c__4638__auto___34584;
var G__34587 = cljs.core.count(c__4638__auto___34584);
var G__34588 = (0);
seq__33269_34538 = G__34585;
chunk__33270_34539 = G__34586;
count__33271_34540 = G__34587;
i__33272_34541 = G__34588;
continue;
} else {
var child_struct_34589 = cljs.core.first(seq__33269_34583__$1);
var children_34590 = shadow.dom.dom_node(child_struct_34589);
if(cljs.core.seq_QMARK_(children_34590)){
var seq__33456_34591 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34590));
var chunk__33458_34592 = null;
var count__33459_34593 = (0);
var i__33460_34594 = (0);
while(true){
if((i__33460_34594 < count__33459_34593)){
var child_34595 = chunk__33458_34592.cljs$core$IIndexed$_nth$arity$2(null,i__33460_34594);
if(cljs.core.truth_(child_34595)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34595);


var G__34596 = seq__33456_34591;
var G__34597 = chunk__33458_34592;
var G__34598 = count__33459_34593;
var G__34599 = (i__33460_34594 + (1));
seq__33456_34591 = G__34596;
chunk__33458_34592 = G__34597;
count__33459_34593 = G__34598;
i__33460_34594 = G__34599;
continue;
} else {
var G__34600 = seq__33456_34591;
var G__34601 = chunk__33458_34592;
var G__34602 = count__33459_34593;
var G__34603 = (i__33460_34594 + (1));
seq__33456_34591 = G__34600;
chunk__33458_34592 = G__34601;
count__33459_34593 = G__34602;
i__33460_34594 = G__34603;
continue;
}
} else {
var temp__5753__auto___34605__$1 = cljs.core.seq(seq__33456_34591);
if(temp__5753__auto___34605__$1){
var seq__33456_34607__$1 = temp__5753__auto___34605__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33456_34607__$1)){
var c__4638__auto___34608 = cljs.core.chunk_first(seq__33456_34607__$1);
var G__34609 = cljs.core.chunk_rest(seq__33456_34607__$1);
var G__34610 = c__4638__auto___34608;
var G__34611 = cljs.core.count(c__4638__auto___34608);
var G__34612 = (0);
seq__33456_34591 = G__34609;
chunk__33458_34592 = G__34610;
count__33459_34593 = G__34611;
i__33460_34594 = G__34612;
continue;
} else {
var child_34614 = cljs.core.first(seq__33456_34607__$1);
if(cljs.core.truth_(child_34614)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34614);


var G__34615 = cljs.core.next(seq__33456_34607__$1);
var G__34616 = null;
var G__34617 = (0);
var G__34618 = (0);
seq__33456_34591 = G__34615;
chunk__33458_34592 = G__34616;
count__33459_34593 = G__34617;
i__33460_34594 = G__34618;
continue;
} else {
var G__34619 = cljs.core.next(seq__33456_34607__$1);
var G__34620 = null;
var G__34621 = (0);
var G__34622 = (0);
seq__33456_34591 = G__34619;
chunk__33458_34592 = G__34620;
count__33459_34593 = G__34621;
i__33460_34594 = G__34622;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34590);
}


var G__34623 = cljs.core.next(seq__33269_34583__$1);
var G__34624 = null;
var G__34625 = (0);
var G__34626 = (0);
seq__33269_34538 = G__34623;
chunk__33270_34539 = G__34624;
count__33271_34540 = G__34625;
i__33272_34541 = G__34626;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33603 = cljs.core.seq(node);
var chunk__33604 = null;
var count__33605 = (0);
var i__33606 = (0);
while(true){
if((i__33606 < count__33605)){
var n = chunk__33604.cljs$core$IIndexed$_nth$arity$2(null,i__33606);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34630 = seq__33603;
var G__34631 = chunk__33604;
var G__34632 = count__33605;
var G__34633 = (i__33606 + (1));
seq__33603 = G__34630;
chunk__33604 = G__34631;
count__33605 = G__34632;
i__33606 = G__34633;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33603);
if(temp__5753__auto__){
var seq__33603__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33603__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33603__$1);
var G__34635 = cljs.core.chunk_rest(seq__33603__$1);
var G__34636 = c__4638__auto__;
var G__34637 = cljs.core.count(c__4638__auto__);
var G__34638 = (0);
seq__33603 = G__34635;
chunk__33604 = G__34636;
count__33605 = G__34637;
i__33606 = G__34638;
continue;
} else {
var n = cljs.core.first(seq__33603__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34639 = cljs.core.next(seq__33603__$1);
var G__34640 = null;
var G__34641 = (0);
var G__34642 = (0);
seq__33603 = G__34639;
chunk__33604 = G__34640;
count__33605 = G__34641;
i__33606 = G__34642;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33663 = arguments.length;
switch (G__33663) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33685 = arguments.length;
switch (G__33685) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33715 = arguments.length;
switch (G__33715) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34652 = arguments.length;
var i__4819__auto___34653 = (0);
while(true){
if((i__4819__auto___34653 < len__4818__auto___34652)){
args__4824__auto__.push((arguments[i__4819__auto___34653]));

var G__34654 = (i__4819__auto___34653 + (1));
i__4819__auto___34653 = G__34654;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33749_34655 = cljs.core.seq(nodes);
var chunk__33750_34656 = null;
var count__33751_34657 = (0);
var i__33752_34658 = (0);
while(true){
if((i__33752_34658 < count__33751_34657)){
var node_34659 = chunk__33750_34656.cljs$core$IIndexed$_nth$arity$2(null,i__33752_34658);
fragment.appendChild(shadow.dom._to_dom(node_34659));


var G__34661 = seq__33749_34655;
var G__34662 = chunk__33750_34656;
var G__34663 = count__33751_34657;
var G__34664 = (i__33752_34658 + (1));
seq__33749_34655 = G__34661;
chunk__33750_34656 = G__34662;
count__33751_34657 = G__34663;
i__33752_34658 = G__34664;
continue;
} else {
var temp__5753__auto___34666 = cljs.core.seq(seq__33749_34655);
if(temp__5753__auto___34666){
var seq__33749_34667__$1 = temp__5753__auto___34666;
if(cljs.core.chunked_seq_QMARK_(seq__33749_34667__$1)){
var c__4638__auto___34668 = cljs.core.chunk_first(seq__33749_34667__$1);
var G__34669 = cljs.core.chunk_rest(seq__33749_34667__$1);
var G__34670 = c__4638__auto___34668;
var G__34671 = cljs.core.count(c__4638__auto___34668);
var G__34672 = (0);
seq__33749_34655 = G__34669;
chunk__33750_34656 = G__34670;
count__33751_34657 = G__34671;
i__33752_34658 = G__34672;
continue;
} else {
var node_34673 = cljs.core.first(seq__33749_34667__$1);
fragment.appendChild(shadow.dom._to_dom(node_34673));


var G__34677 = cljs.core.next(seq__33749_34667__$1);
var G__34678 = null;
var G__34679 = (0);
var G__34680 = (0);
seq__33749_34655 = G__34677;
chunk__33750_34656 = G__34678;
count__33751_34657 = G__34679;
i__33752_34658 = G__34680;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33742){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33742));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33773_34683 = cljs.core.seq(scripts);
var chunk__33774_34684 = null;
var count__33775_34685 = (0);
var i__33776_34686 = (0);
while(true){
if((i__33776_34686 < count__33775_34685)){
var vec__33796_34687 = chunk__33774_34684.cljs$core$IIndexed$_nth$arity$2(null,i__33776_34686);
var script_tag_34688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33796_34687,(0),null);
var script_body_34689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33796_34687,(1),null);
eval(script_body_34689);


var G__34690 = seq__33773_34683;
var G__34691 = chunk__33774_34684;
var G__34692 = count__33775_34685;
var G__34693 = (i__33776_34686 + (1));
seq__33773_34683 = G__34690;
chunk__33774_34684 = G__34691;
count__33775_34685 = G__34692;
i__33776_34686 = G__34693;
continue;
} else {
var temp__5753__auto___34694 = cljs.core.seq(seq__33773_34683);
if(temp__5753__auto___34694){
var seq__33773_34695__$1 = temp__5753__auto___34694;
if(cljs.core.chunked_seq_QMARK_(seq__33773_34695__$1)){
var c__4638__auto___34699 = cljs.core.chunk_first(seq__33773_34695__$1);
var G__34700 = cljs.core.chunk_rest(seq__33773_34695__$1);
var G__34701 = c__4638__auto___34699;
var G__34702 = cljs.core.count(c__4638__auto___34699);
var G__34703 = (0);
seq__33773_34683 = G__34700;
chunk__33774_34684 = G__34701;
count__33775_34685 = G__34702;
i__33776_34686 = G__34703;
continue;
} else {
var vec__33806_34704 = cljs.core.first(seq__33773_34695__$1);
var script_tag_34705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33806_34704,(0),null);
var script_body_34706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33806_34704,(1),null);
eval(script_body_34706);


var G__34708 = cljs.core.next(seq__33773_34695__$1);
var G__34709 = null;
var G__34710 = (0);
var G__34711 = (0);
seq__33773_34683 = G__34708;
chunk__33774_34684 = G__34709;
count__33775_34685 = G__34710;
i__33776_34686 = G__34711;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33812){
var vec__33814 = p__33812;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33814,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33814,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33824 = arguments.length;
switch (G__33824) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33848 = cljs.core.seq(style_keys);
var chunk__33849 = null;
var count__33850 = (0);
var i__33851 = (0);
while(true){
if((i__33851 < count__33850)){
var it = chunk__33849.cljs$core$IIndexed$_nth$arity$2(null,i__33851);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34724 = seq__33848;
var G__34725 = chunk__33849;
var G__34726 = count__33850;
var G__34727 = (i__33851 + (1));
seq__33848 = G__34724;
chunk__33849 = G__34725;
count__33850 = G__34726;
i__33851 = G__34727;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33848);
if(temp__5753__auto__){
var seq__33848__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33848__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33848__$1);
var G__34728 = cljs.core.chunk_rest(seq__33848__$1);
var G__34729 = c__4638__auto__;
var G__34730 = cljs.core.count(c__4638__auto__);
var G__34731 = (0);
seq__33848 = G__34728;
chunk__33849 = G__34729;
count__33850 = G__34730;
i__33851 = G__34731;
continue;
} else {
var it = cljs.core.first(seq__33848__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34733 = cljs.core.next(seq__33848__$1);
var G__34734 = null;
var G__34735 = (0);
var G__34736 = (0);
seq__33848 = G__34733;
chunk__33849 = G__34734;
count__33850 = G__34735;
i__33851 = G__34736;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33859,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33875 = k33859;
var G__33875__$1 = (((G__33875 instanceof cljs.core.Keyword))?G__33875.fqn:null);
switch (G__33875__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33859,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33881){
var vec__33882 = p__33881;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33882,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33882,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33858){
var self__ = this;
var G__33858__$1 = this;
return (new cljs.core.RecordIter((0),G__33858__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33860,other33861){
var self__ = this;
var this33860__$1 = this;
return (((!((other33861 == null)))) && ((((this33860__$1.constructor === other33861.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33860__$1.x,other33861.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33860__$1.y,other33861.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33860__$1.__extmap,other33861.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33859){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33900 = k33859;
var G__33900__$1 = (((G__33900 instanceof cljs.core.Keyword))?G__33900.fqn:null);
switch (G__33900__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33859);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33858){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33901 = cljs.core.keyword_identical_QMARK_;
var expr__33902 = k__4470__auto__;
if(cljs.core.truth_((pred__33901.cljs$core$IFn$_invoke$arity$2 ? pred__33901.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33902) : pred__33901.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33902)))){
return (new shadow.dom.Coordinate(G__33858,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33901.cljs$core$IFn$_invoke$arity$2 ? pred__33901.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33902) : pred__33901.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33902)))){
return (new shadow.dom.Coordinate(self__.x,G__33858,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33858),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33858){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33858,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33865){
var extmap__4501__auto__ = (function (){var G__33907 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33865,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33865)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33907);
} else {
return G__33907;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33865),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33865),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33921,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33932 = k33921;
var G__33932__$1 = (((G__33932 instanceof cljs.core.Keyword))?G__33932.fqn:null);
switch (G__33932__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33921,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33939){
var vec__33940 = p__33939;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33940,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33940,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33920){
var self__ = this;
var G__33920__$1 = this;
return (new cljs.core.RecordIter((0),G__33920__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33922,other33923){
var self__ = this;
var this33922__$1 = this;
return (((!((other33923 == null)))) && ((((this33922__$1.constructor === other33923.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33922__$1.w,other33923.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33922__$1.h,other33923.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33922__$1.__extmap,other33923.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33921){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33992 = k33921;
var G__33992__$1 = (((G__33992 instanceof cljs.core.Keyword))?G__33992.fqn:null);
switch (G__33992__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33921);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33920){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33994 = cljs.core.keyword_identical_QMARK_;
var expr__33995 = k__4470__auto__;
if(cljs.core.truth_((pred__33994.cljs$core$IFn$_invoke$arity$2 ? pred__33994.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33995) : pred__33994.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33995)))){
return (new shadow.dom.Size(G__33920,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33994.cljs$core$IFn$_invoke$arity$2 ? pred__33994.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33995) : pred__33994.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33995)))){
return (new shadow.dom.Size(self__.w,G__33920,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33920),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33920){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33920,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33925){
var extmap__4501__auto__ = (function (){var G__34020 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33925,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33925)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34020);
} else {
return G__34020;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33925),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33925),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__34772 = (i + (1));
var G__34773 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34772;
ret = G__34773;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34055){
var vec__34056 = p__34055;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34056,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34067 = arguments.length;
switch (G__34067) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34778 = ps;
var G__34779 = (i + (1));
el__$1 = G__34778;
i = G__34779;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34114 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34114,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34114,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34114,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34117_34782 = cljs.core.seq(props);
var chunk__34118_34783 = null;
var count__34119_34784 = (0);
var i__34120_34785 = (0);
while(true){
if((i__34120_34785 < count__34119_34784)){
var vec__34129_34790 = chunk__34118_34783.cljs$core$IIndexed$_nth$arity$2(null,i__34120_34785);
var k_34791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34129_34790,(0),null);
var v_34792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34129_34790,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34791);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34791),v_34792);


var G__34794 = seq__34117_34782;
var G__34795 = chunk__34118_34783;
var G__34796 = count__34119_34784;
var G__34797 = (i__34120_34785 + (1));
seq__34117_34782 = G__34794;
chunk__34118_34783 = G__34795;
count__34119_34784 = G__34796;
i__34120_34785 = G__34797;
continue;
} else {
var temp__5753__auto___34798 = cljs.core.seq(seq__34117_34782);
if(temp__5753__auto___34798){
var seq__34117_34799__$1 = temp__5753__auto___34798;
if(cljs.core.chunked_seq_QMARK_(seq__34117_34799__$1)){
var c__4638__auto___34800 = cljs.core.chunk_first(seq__34117_34799__$1);
var G__34801 = cljs.core.chunk_rest(seq__34117_34799__$1);
var G__34802 = c__4638__auto___34800;
var G__34803 = cljs.core.count(c__4638__auto___34800);
var G__34804 = (0);
seq__34117_34782 = G__34801;
chunk__34118_34783 = G__34802;
count__34119_34784 = G__34803;
i__34120_34785 = G__34804;
continue;
} else {
var vec__34132_34805 = cljs.core.first(seq__34117_34799__$1);
var k_34806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34132_34805,(0),null);
var v_34807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34132_34805,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34806);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34806),v_34807);


var G__34809 = cljs.core.next(seq__34117_34799__$1);
var G__34810 = null;
var G__34811 = (0);
var G__34812 = (0);
seq__34117_34782 = G__34809;
chunk__34118_34783 = G__34810;
count__34119_34784 = G__34811;
i__34120_34785 = G__34812;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34159 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34159,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34159,(1),null);
var seq__34162_34816 = cljs.core.seq(node_children);
var chunk__34164_34817 = null;
var count__34165_34818 = (0);
var i__34166_34819 = (0);
while(true){
if((i__34166_34819 < count__34165_34818)){
var child_struct_34820 = chunk__34164_34817.cljs$core$IIndexed$_nth$arity$2(null,i__34166_34819);
if((!((child_struct_34820 == null)))){
if(typeof child_struct_34820 === 'string'){
var text_34821 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34821),child_struct_34820].join(''));
} else {
var children_34822 = shadow.dom.svg_node(child_struct_34820);
if(cljs.core.seq_QMARK_(children_34822)){
var seq__34279_34823 = cljs.core.seq(children_34822);
var chunk__34281_34824 = null;
var count__34282_34825 = (0);
var i__34283_34826 = (0);
while(true){
if((i__34283_34826 < count__34282_34825)){
var child_34827 = chunk__34281_34824.cljs$core$IIndexed$_nth$arity$2(null,i__34283_34826);
if(cljs.core.truth_(child_34827)){
node.appendChild(child_34827);


var G__34828 = seq__34279_34823;
var G__34829 = chunk__34281_34824;
var G__34830 = count__34282_34825;
var G__34831 = (i__34283_34826 + (1));
seq__34279_34823 = G__34828;
chunk__34281_34824 = G__34829;
count__34282_34825 = G__34830;
i__34283_34826 = G__34831;
continue;
} else {
var G__34832 = seq__34279_34823;
var G__34833 = chunk__34281_34824;
var G__34834 = count__34282_34825;
var G__34835 = (i__34283_34826 + (1));
seq__34279_34823 = G__34832;
chunk__34281_34824 = G__34833;
count__34282_34825 = G__34834;
i__34283_34826 = G__34835;
continue;
}
} else {
var temp__5753__auto___34836 = cljs.core.seq(seq__34279_34823);
if(temp__5753__auto___34836){
var seq__34279_34837__$1 = temp__5753__auto___34836;
if(cljs.core.chunked_seq_QMARK_(seq__34279_34837__$1)){
var c__4638__auto___34838 = cljs.core.chunk_first(seq__34279_34837__$1);
var G__34839 = cljs.core.chunk_rest(seq__34279_34837__$1);
var G__34840 = c__4638__auto___34838;
var G__34841 = cljs.core.count(c__4638__auto___34838);
var G__34842 = (0);
seq__34279_34823 = G__34839;
chunk__34281_34824 = G__34840;
count__34282_34825 = G__34841;
i__34283_34826 = G__34842;
continue;
} else {
var child_34843 = cljs.core.first(seq__34279_34837__$1);
if(cljs.core.truth_(child_34843)){
node.appendChild(child_34843);


var G__34844 = cljs.core.next(seq__34279_34837__$1);
var G__34845 = null;
var G__34846 = (0);
var G__34847 = (0);
seq__34279_34823 = G__34844;
chunk__34281_34824 = G__34845;
count__34282_34825 = G__34846;
i__34283_34826 = G__34847;
continue;
} else {
var G__34848 = cljs.core.next(seq__34279_34837__$1);
var G__34849 = null;
var G__34850 = (0);
var G__34851 = (0);
seq__34279_34823 = G__34848;
chunk__34281_34824 = G__34849;
count__34282_34825 = G__34850;
i__34283_34826 = G__34851;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34822);
}
}


var G__34852 = seq__34162_34816;
var G__34853 = chunk__34164_34817;
var G__34854 = count__34165_34818;
var G__34855 = (i__34166_34819 + (1));
seq__34162_34816 = G__34852;
chunk__34164_34817 = G__34853;
count__34165_34818 = G__34854;
i__34166_34819 = G__34855;
continue;
} else {
var G__34857 = seq__34162_34816;
var G__34858 = chunk__34164_34817;
var G__34859 = count__34165_34818;
var G__34860 = (i__34166_34819 + (1));
seq__34162_34816 = G__34857;
chunk__34164_34817 = G__34858;
count__34165_34818 = G__34859;
i__34166_34819 = G__34860;
continue;
}
} else {
var temp__5753__auto___34862 = cljs.core.seq(seq__34162_34816);
if(temp__5753__auto___34862){
var seq__34162_34863__$1 = temp__5753__auto___34862;
if(cljs.core.chunked_seq_QMARK_(seq__34162_34863__$1)){
var c__4638__auto___34864 = cljs.core.chunk_first(seq__34162_34863__$1);
var G__34865 = cljs.core.chunk_rest(seq__34162_34863__$1);
var G__34866 = c__4638__auto___34864;
var G__34867 = cljs.core.count(c__4638__auto___34864);
var G__34868 = (0);
seq__34162_34816 = G__34865;
chunk__34164_34817 = G__34866;
count__34165_34818 = G__34867;
i__34166_34819 = G__34868;
continue;
} else {
var child_struct_34869 = cljs.core.first(seq__34162_34863__$1);
if((!((child_struct_34869 == null)))){
if(typeof child_struct_34869 === 'string'){
var text_34870 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34870),child_struct_34869].join(''));
} else {
var children_34871 = shadow.dom.svg_node(child_struct_34869);
if(cljs.core.seq_QMARK_(children_34871)){
var seq__34312_34872 = cljs.core.seq(children_34871);
var chunk__34314_34873 = null;
var count__34315_34874 = (0);
var i__34316_34875 = (0);
while(true){
if((i__34316_34875 < count__34315_34874)){
var child_34877 = chunk__34314_34873.cljs$core$IIndexed$_nth$arity$2(null,i__34316_34875);
if(cljs.core.truth_(child_34877)){
node.appendChild(child_34877);


var G__34879 = seq__34312_34872;
var G__34880 = chunk__34314_34873;
var G__34881 = count__34315_34874;
var G__34882 = (i__34316_34875 + (1));
seq__34312_34872 = G__34879;
chunk__34314_34873 = G__34880;
count__34315_34874 = G__34881;
i__34316_34875 = G__34882;
continue;
} else {
var G__34883 = seq__34312_34872;
var G__34884 = chunk__34314_34873;
var G__34885 = count__34315_34874;
var G__34886 = (i__34316_34875 + (1));
seq__34312_34872 = G__34883;
chunk__34314_34873 = G__34884;
count__34315_34874 = G__34885;
i__34316_34875 = G__34886;
continue;
}
} else {
var temp__5753__auto___34887__$1 = cljs.core.seq(seq__34312_34872);
if(temp__5753__auto___34887__$1){
var seq__34312_34888__$1 = temp__5753__auto___34887__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34312_34888__$1)){
var c__4638__auto___34889 = cljs.core.chunk_first(seq__34312_34888__$1);
var G__34892 = cljs.core.chunk_rest(seq__34312_34888__$1);
var G__34893 = c__4638__auto___34889;
var G__34894 = cljs.core.count(c__4638__auto___34889);
var G__34895 = (0);
seq__34312_34872 = G__34892;
chunk__34314_34873 = G__34893;
count__34315_34874 = G__34894;
i__34316_34875 = G__34895;
continue;
} else {
var child_34896 = cljs.core.first(seq__34312_34888__$1);
if(cljs.core.truth_(child_34896)){
node.appendChild(child_34896);


var G__34898 = cljs.core.next(seq__34312_34888__$1);
var G__34899 = null;
var G__34900 = (0);
var G__34901 = (0);
seq__34312_34872 = G__34898;
chunk__34314_34873 = G__34899;
count__34315_34874 = G__34900;
i__34316_34875 = G__34901;
continue;
} else {
var G__34903 = cljs.core.next(seq__34312_34888__$1);
var G__34904 = null;
var G__34905 = (0);
var G__34906 = (0);
seq__34312_34872 = G__34903;
chunk__34314_34873 = G__34904;
count__34315_34874 = G__34905;
i__34316_34875 = G__34906;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34871);
}
}


var G__34907 = cljs.core.next(seq__34162_34863__$1);
var G__34908 = null;
var G__34909 = (0);
var G__34910 = (0);
seq__34162_34816 = G__34907;
chunk__34164_34817 = G__34908;
count__34165_34818 = G__34909;
i__34166_34819 = G__34910;
continue;
} else {
var G__34911 = cljs.core.next(seq__34162_34863__$1);
var G__34912 = null;
var G__34913 = (0);
var G__34914 = (0);
seq__34162_34816 = G__34911;
chunk__34164_34817 = G__34912;
count__34165_34818 = G__34913;
i__34166_34819 = G__34914;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34916 = arguments.length;
var i__4819__auto___34917 = (0);
while(true){
if((i__4819__auto___34917 < len__4818__auto___34916)){
args__4824__auto__.push((arguments[i__4819__auto___34917]));

var G__34919 = (i__4819__auto___34917 + (1));
i__4819__auto___34917 = G__34919;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34358){
var G__34359 = cljs.core.first(seq34358);
var seq34358__$1 = cljs.core.next(seq34358);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34359,seq34358__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34407 = arguments.length;
switch (G__34407) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__28878__auto___34929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_34430){
var state_val_34431 = (state_34430[(1)]);
if((state_val_34431 === (1))){
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34430__$1,(2),once_or_cleanup);
} else {
if((state_val_34431 === (2))){
var inst_34427 = (state_34430[(2)]);
var inst_34428 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34430__$1 = (function (){var statearr_34433 = state_34430;
(statearr_34433[(7)] = inst_34427);

return statearr_34433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34430__$1,inst_34428);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28560__auto__ = null;
var shadow$dom$state_machine__28560__auto____0 = (function (){
var statearr_34434 = [null,null,null,null,null,null,null,null];
(statearr_34434[(0)] = shadow$dom$state_machine__28560__auto__);

(statearr_34434[(1)] = (1));

return statearr_34434;
});
var shadow$dom$state_machine__28560__auto____1 = (function (state_34430){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_34430);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e34435){var ex__28563__auto__ = e34435;
var statearr_34436_34934 = state_34430;
(statearr_34436_34934[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_34430[(4)]))){
var statearr_34437_34939 = state_34430;
(statearr_34437_34939[(1)] = cljs.core.first((state_34430[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34940 = state_34430;
state_34430 = G__34940;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
shadow$dom$state_machine__28560__auto__ = function(state_34430){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28560__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28560__auto____1.call(this,state_34430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28560__auto____0;
shadow$dom$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28560__auto____1;
return shadow$dom$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_34439 = f__28879__auto__();
(statearr_34439[(6)] = c__28878__auto___34929);

return statearr_34439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
