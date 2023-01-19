goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__26490 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26491 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26491);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__26496 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26497 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26497);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26496);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26490);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__26516 = arguments.length;
switch (G__26516) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__26527 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26527,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26527,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__26536_26557 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__26537_26558 = null;
var count__26538_26559 = (0);
var i__26539_26560 = (0);
while(true){
if((i__26539_26560 < count__26538_26559)){
var vec__26547_26561 = chunk__26537_26558.cljs$core$IIndexed$_nth$arity$2(null,i__26539_26560);
var container_26562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26547_26561,(0),null);
var comp_26563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26547_26561,(1),null);
reagent.dom.re_render_component(comp_26563,container_26562);


var G__26565 = seq__26536_26557;
var G__26566 = chunk__26537_26558;
var G__26567 = count__26538_26559;
var G__26568 = (i__26539_26560 + (1));
seq__26536_26557 = G__26565;
chunk__26537_26558 = G__26566;
count__26538_26559 = G__26567;
i__26539_26560 = G__26568;
continue;
} else {
var temp__5753__auto___26569 = cljs.core.seq(seq__26536_26557);
if(temp__5753__auto___26569){
var seq__26536_26570__$1 = temp__5753__auto___26569;
if(cljs.core.chunked_seq_QMARK_(seq__26536_26570__$1)){
var c__4638__auto___26572 = cljs.core.chunk_first(seq__26536_26570__$1);
var G__26573 = cljs.core.chunk_rest(seq__26536_26570__$1);
var G__26574 = c__4638__auto___26572;
var G__26575 = cljs.core.count(c__4638__auto___26572);
var G__26576 = (0);
seq__26536_26557 = G__26573;
chunk__26537_26558 = G__26574;
count__26538_26559 = G__26575;
i__26539_26560 = G__26576;
continue;
} else {
var vec__26551_26577 = cljs.core.first(seq__26536_26570__$1);
var container_26578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26551_26577,(0),null);
var comp_26579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26551_26577,(1),null);
reagent.dom.re_render_component(comp_26579,container_26578);


var G__26580 = cljs.core.next(seq__26536_26570__$1);
var G__26581 = null;
var G__26582 = (0);
var G__26583 = (0);
seq__26536_26557 = G__26580;
chunk__26537_26558 = G__26581;
count__26538_26559 = G__26582;
i__26539_26560 = G__26583;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
