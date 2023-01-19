goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28957 = arguments.length;
switch (G__28957) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28960 = (function (f,blockable,meta28961){
this.f = f;
this.blockable = blockable;
this.meta28961 = meta28961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28962,meta28961__$1){
var self__ = this;
var _28962__$1 = this;
return (new cljs.core.async.t_cljs$core$async28960(self__.f,self__.blockable,meta28961__$1));
}));

(cljs.core.async.t_cljs$core$async28960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28962){
var self__ = this;
var _28962__$1 = this;
return self__.meta28961;
}));

(cljs.core.async.t_cljs$core$async28960.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28960.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28961","meta28961",-999273549,null)], null);
}));

(cljs.core.async.t_cljs$core$async28960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28960");

(cljs.core.async.t_cljs$core$async28960.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async28960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28960.
 */
cljs.core.async.__GT_t_cljs$core$async28960 = (function cljs$core$async$__GT_t_cljs$core$async28960(f__$1,blockable__$1,meta28961){
return (new cljs.core.async.t_cljs$core$async28960(f__$1,blockable__$1,meta28961));
});

}

return (new cljs.core.async.t_cljs$core$async28960(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29022 = arguments.length;
switch (G__29022) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29055 = arguments.length;
switch (G__29055) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29066 = arguments.length;
switch (G__29066) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32775 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32775) : fn1.call(null,val_32775));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32775) : fn1.call(null,val_32775));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29097 = arguments.length;
switch (G__29097) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___32781 = n;
var x_32782 = (0);
while(true){
if((x_32782 < n__4695__auto___32781)){
(a[x_32782] = x_32782);

var G__32783 = (x_32782 + (1));
x_32782 = G__32783;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29131 = (function (flag,meta29132){
this.flag = flag;
this.meta29132 = meta29132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29133,meta29132__$1){
var self__ = this;
var _29133__$1 = this;
return (new cljs.core.async.t_cljs$core$async29131(self__.flag,meta29132__$1));
}));

(cljs.core.async.t_cljs$core$async29131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29133){
var self__ = this;
var _29133__$1 = this;
return self__.meta29132;
}));

(cljs.core.async.t_cljs$core$async29131.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29131.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29132","meta29132",-245975858,null)], null);
}));

(cljs.core.async.t_cljs$core$async29131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29131");

(cljs.core.async.t_cljs$core$async29131.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29131.
 */
cljs.core.async.__GT_t_cljs$core$async29131 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29131(flag__$1,meta29132){
return (new cljs.core.async.t_cljs$core$async29131(flag__$1,meta29132));
});

}

return (new cljs.core.async.t_cljs$core$async29131(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29149 = (function (flag,cb,meta29150){
this.flag = flag;
this.cb = cb;
this.meta29150 = meta29150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29151,meta29150__$1){
var self__ = this;
var _29151__$1 = this;
return (new cljs.core.async.t_cljs$core$async29149(self__.flag,self__.cb,meta29150__$1));
}));

(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29151){
var self__ = this;
var _29151__$1 = this;
return self__.meta29150;
}));

(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29150","meta29150",2061446072,null)], null);
}));

(cljs.core.async.t_cljs$core$async29149.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29149");

(cljs.core.async.t_cljs$core$async29149.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29149");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29149.
 */
cljs.core.async.__GT_t_cljs$core$async29149 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29149(flag__$1,cb__$1,meta29150){
return (new cljs.core.async.t_cljs$core$async29149(flag__$1,cb__$1,meta29150));
});

}

return (new cljs.core.async.t_cljs$core$async29149(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29167_SHARP_){
var G__29175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29167_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29175) : fret.call(null,G__29175));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29168_SHARP_){
var G__29176 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29168_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29176) : fret.call(null,G__29176));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32804 = (i + (1));
i = G__32804;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32805 = arguments.length;
var i__4819__auto___32806 = (0);
while(true){
if((i__4819__auto___32806 < len__4818__auto___32805)){
args__4824__auto__.push((arguments[i__4819__auto___32806]));

var G__32807 = (i__4819__auto___32806 + (1));
i__4819__auto___32806 = G__32807;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29192){
var map__29193 = p__29192;
var map__29193__$1 = cljs.core.__destructure_map(map__29193);
var opts = map__29193__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29188){
var G__29189 = cljs.core.first(seq29188);
var seq29188__$1 = cljs.core.next(seq29188);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29189,seq29188__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29202 = arguments.length;
switch (G__29202) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28878__auto___32817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_29264){
var state_val_29265 = (state_29264[(1)]);
if((state_val_29265 === (7))){
var inst_29259 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29270_32823 = state_29264__$1;
(statearr_29270_32823[(2)] = inst_29259);

(statearr_29270_32823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (1))){
var state_29264__$1 = state_29264;
var statearr_29272_32824 = state_29264__$1;
(statearr_29272_32824[(2)] = null);

(statearr_29272_32824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (4))){
var inst_29229 = (state_29264[(7)]);
var inst_29229__$1 = (state_29264[(2)]);
var inst_29231 = (inst_29229__$1 == null);
var state_29264__$1 = (function (){var statearr_29276 = state_29264;
(statearr_29276[(7)] = inst_29229__$1);

return statearr_29276;
})();
if(cljs.core.truth_(inst_29231)){
var statearr_29280_32825 = state_29264__$1;
(statearr_29280_32825[(1)] = (5));

} else {
var statearr_29281_32826 = state_29264__$1;
(statearr_29281_32826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (13))){
var state_29264__$1 = state_29264;
var statearr_29287_32828 = state_29264__$1;
(statearr_29287_32828[(2)] = null);

(statearr_29287_32828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (6))){
var inst_29229 = (state_29264[(7)]);
var state_29264__$1 = state_29264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29264__$1,(11),to,inst_29229);
} else {
if((state_val_29265 === (3))){
var inst_29262 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29264__$1,inst_29262);
} else {
if((state_val_29265 === (12))){
var state_29264__$1 = state_29264;
var statearr_29296_32838 = state_29264__$1;
(statearr_29296_32838[(2)] = null);

(statearr_29296_32838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (2))){
var state_29264__$1 = state_29264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29264__$1,(4),from);
} else {
if((state_val_29265 === (11))){
var inst_29247 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
if(cljs.core.truth_(inst_29247)){
var statearr_29297_32840 = state_29264__$1;
(statearr_29297_32840[(1)] = (12));

} else {
var statearr_29298_32841 = state_29264__$1;
(statearr_29298_32841[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (9))){
var state_29264__$1 = state_29264;
var statearr_29299_32842 = state_29264__$1;
(statearr_29299_32842[(2)] = null);

(statearr_29299_32842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (5))){
var state_29264__$1 = state_29264;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29301_32843 = state_29264__$1;
(statearr_29301_32843[(1)] = (8));

} else {
var statearr_29303_32845 = state_29264__$1;
(statearr_29303_32845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (14))){
var inst_29257 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29306_32846 = state_29264__$1;
(statearr_29306_32846[(2)] = inst_29257);

(statearr_29306_32846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (10))){
var inst_29244 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29321_32849 = state_29264__$1;
(statearr_29321_32849[(2)] = inst_29244);

(statearr_29321_32849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (8))){
var inst_29241 = cljs.core.async.close_BANG_(to);
var state_29264__$1 = state_29264;
var statearr_29324_32853 = state_29264__$1;
(statearr_29324_32853[(2)] = inst_29241);

(statearr_29324_32853[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__28560__auto__ = null;
var cljs$core$async$state_machine__28560__auto____0 = (function (){
var statearr_29330 = [null,null,null,null,null,null,null,null];
(statearr_29330[(0)] = cljs$core$async$state_machine__28560__auto__);

(statearr_29330[(1)] = (1));

return statearr_29330;
});
var cljs$core$async$state_machine__28560__auto____1 = (function (state_29264){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_29264);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e29334){var ex__28563__auto__ = e29334;
var statearr_29335_32855 = state_29264;
(statearr_29335_32855[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_29264[(4)]))){
var statearr_29337_32856 = state_29264;
(statearr_29337_32856[(1)] = cljs.core.first((state_29264[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32859 = state_29264;
state_29264 = G__32859;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$state_machine__28560__auto__ = function(state_29264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28560__auto____1.call(this,state_29264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28560__auto____0;
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28560__auto____1;
return cljs$core$async$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_29344 = f__28879__auto__();
(statearr_29344[(6)] = c__28878__auto___32817);

return statearr_29344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29359){
var vec__29361 = p__29359;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29361,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29361,(1),null);
var job = vec__29361;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28878__auto___32867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_29372){
var state_val_29373 = (state_29372[(1)]);
if((state_val_29373 === (1))){
var state_29372__$1 = state_29372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29372__$1,(2),res,v);
} else {
if((state_val_29373 === (2))){
var inst_29368 = (state_29372[(2)]);
var inst_29369 = cljs.core.async.close_BANG_(res);
var state_29372__$1 = (function (){var statearr_29378 = state_29372;
(statearr_29378[(7)] = inst_29368);

return statearr_29378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29372__$1,inst_29369);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0 = (function (){
var statearr_29379 = [null,null,null,null,null,null,null,null];
(statearr_29379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__);

(statearr_29379[(1)] = (1));

return statearr_29379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1 = (function (state_29372){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_29372);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e29380){var ex__28563__auto__ = e29380;
var statearr_29381_32875 = state_29372;
(statearr_29381_32875[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_29372[(4)]))){
var statearr_29382_32876 = state_29372;
(statearr_29382_32876[(1)] = cljs.core.first((state_29372[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32877 = state_29372;
state_29372 = G__32877;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__ = function(state_29372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1.call(this,state_29372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_29385 = f__28879__auto__();
(statearr_29385[(6)] = c__28878__auto___32867);

return statearr_29385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29386){
var vec__29387 = p__29386;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(1),null);
var job = vec__29387;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___32878 = n;
var __32880 = (0);
while(true){
if((__32880 < n__4695__auto___32878)){
var G__29391_32881 = type;
var G__29391_32882__$1 = (((G__29391_32881 instanceof cljs.core.Keyword))?G__29391_32881.fqn:null);
switch (G__29391_32882__$1) {
case "compute":
var c__28878__auto___32884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32880,c__28878__auto___32884,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async){
return (function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = ((function (__32880,c__28878__auto___32884,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async){
return (function (state_29416){
var state_val_29417 = (state_29416[(1)]);
if((state_val_29417 === (1))){
var state_29416__$1 = state_29416;
var statearr_29418_32896 = state_29416__$1;
(statearr_29418_32896[(2)] = null);

(statearr_29418_32896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (2))){
var state_29416__$1 = state_29416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29416__$1,(4),jobs);
} else {
if((state_val_29417 === (3))){
var inst_29414 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29416__$1,inst_29414);
} else {
if((state_val_29417 === (4))){
var inst_29401 = (state_29416[(2)]);
var inst_29405 = process(inst_29401);
var state_29416__$1 = state_29416;
if(cljs.core.truth_(inst_29405)){
var statearr_29424_32899 = state_29416__$1;
(statearr_29424_32899[(1)] = (5));

} else {
var statearr_29425_32900 = state_29416__$1;
(statearr_29425_32900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (5))){
var state_29416__$1 = state_29416;
var statearr_29428_32901 = state_29416__$1;
(statearr_29428_32901[(2)] = null);

(statearr_29428_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (6))){
var state_29416__$1 = state_29416;
var statearr_29430_32903 = state_29416__$1;
(statearr_29430_32903[(2)] = null);

(statearr_29430_32903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (7))){
var inst_29412 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
var statearr_29433_32905 = state_29416__$1;
(statearr_29433_32905[(2)] = inst_29412);

(statearr_29433_32905[(1)] = (3));


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
});})(__32880,c__28878__auto___32884,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async))
;
return ((function (__32880,switch__28559__auto__,c__28878__auto___32884,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0 = (function (){
var statearr_29438 = [null,null,null,null,null,null,null];
(statearr_29438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__);

(statearr_29438[(1)] = (1));

return statearr_29438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1 = (function (state_29416){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_29416);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e29439){var ex__28563__auto__ = e29439;
var statearr_29440_32911 = state_29416;
(statearr_29440_32911[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_29416[(4)]))){
var statearr_29441_32912 = state_29416;
(statearr_29441_32912[(1)] = cljs.core.first((state_29416[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32914 = state_29416;
state_29416 = G__32914;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__ = function(state_29416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1.call(this,state_29416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__;
})()
;})(__32880,switch__28559__auto__,c__28878__auto___32884,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async))
})();
var state__28880__auto__ = (function (){var statearr_29449 = f__28879__auto__();
(statearr_29449[(6)] = c__28878__auto___32884);

return statearr_29449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
});})(__32880,c__28878__auto___32884,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async))
);


break;
case "async":
var c__28878__auto___32915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32880,c__28878__auto___32915,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async){
return (function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = ((function (__32880,c__28878__auto___32915,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async){
return (function (state_29466){
var state_val_29467 = (state_29466[(1)]);
if((state_val_29467 === (1))){
var state_29466__$1 = state_29466;
var statearr_29474_32916 = state_29466__$1;
(statearr_29474_32916[(2)] = null);

(statearr_29474_32916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (2))){
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29466__$1,(4),jobs);
} else {
if((state_val_29467 === (3))){
var inst_29464 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29466__$1,inst_29464);
} else {
if((state_val_29467 === (4))){
var inst_29455 = (state_29466[(2)]);
var inst_29456 = async(inst_29455);
var state_29466__$1 = state_29466;
if(cljs.core.truth_(inst_29456)){
var statearr_29479_32920 = state_29466__$1;
(statearr_29479_32920[(1)] = (5));

} else {
var statearr_29481_32921 = state_29466__$1;
(statearr_29481_32921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (5))){
var state_29466__$1 = state_29466;
var statearr_29484_32922 = state_29466__$1;
(statearr_29484_32922[(2)] = null);

(statearr_29484_32922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (6))){
var state_29466__$1 = state_29466;
var statearr_29488_32923 = state_29466__$1;
(statearr_29488_32923[(2)] = null);

(statearr_29488_32923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (7))){
var inst_29462 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
var statearr_29492_32926 = state_29466__$1;
(statearr_29492_32926[(2)] = inst_29462);

(statearr_29492_32926[(1)] = (3));


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
});})(__32880,c__28878__auto___32915,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async))
;
return ((function (__32880,switch__28559__auto__,c__28878__auto___32915,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0 = (function (){
var statearr_29498 = [null,null,null,null,null,null,null];
(statearr_29498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__);

(statearr_29498[(1)] = (1));

return statearr_29498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1 = (function (state_29466){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_29466);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e29499){var ex__28563__auto__ = e29499;
var statearr_29501_32930 = state_29466;
(statearr_29501_32930[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_29466[(4)]))){
var statearr_29502_32933 = state_29466;
(statearr_29502_32933[(1)] = cljs.core.first((state_29466[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32935 = state_29466;
state_29466 = G__32935;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__ = function(state_29466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1.call(this,state_29466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__;
})()
;})(__32880,switch__28559__auto__,c__28878__auto___32915,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async))
})();
var state__28880__auto__ = (function (){var statearr_29508 = f__28879__auto__();
(statearr_29508[(6)] = c__28878__auto___32915);

return statearr_29508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
});})(__32880,c__28878__auto___32915,G__29391_32881,G__29391_32882__$1,n__4695__auto___32878,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29391_32882__$1)].join('')));

}

var G__32936 = (__32880 + (1));
__32880 = G__32936;
continue;
} else {
}
break;
}

var c__28878__auto___32937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_29542){
var state_val_29543 = (state_29542[(1)]);
if((state_val_29543 === (7))){
var inst_29536 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29557_32943 = state_29542__$1;
(statearr_29557_32943[(2)] = inst_29536);

(statearr_29557_32943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (1))){
var state_29542__$1 = state_29542;
var statearr_29559_32944 = state_29542__$1;
(statearr_29559_32944[(2)] = null);

(statearr_29559_32944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (4))){
var inst_29516 = (state_29542[(7)]);
var inst_29516__$1 = (state_29542[(2)]);
var inst_29518 = (inst_29516__$1 == null);
var state_29542__$1 = (function (){var statearr_29564 = state_29542;
(statearr_29564[(7)] = inst_29516__$1);

return statearr_29564;
})();
if(cljs.core.truth_(inst_29518)){
var statearr_29567_32950 = state_29542__$1;
(statearr_29567_32950[(1)] = (5));

} else {
var statearr_29570_32951 = state_29542__$1;
(statearr_29570_32951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (6))){
var inst_29523 = (state_29542[(8)]);
var inst_29516 = (state_29542[(7)]);
var inst_29523__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29526 = [inst_29516,inst_29523__$1];
var inst_29527 = (new cljs.core.PersistentVector(null,2,(5),inst_29525,inst_29526,null));
var state_29542__$1 = (function (){var statearr_29576 = state_29542;
(statearr_29576[(8)] = inst_29523__$1);

return statearr_29576;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29542__$1,(8),jobs,inst_29527);
} else {
if((state_val_29543 === (3))){
var inst_29538 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29542__$1,inst_29538);
} else {
if((state_val_29543 === (2))){
var state_29542__$1 = state_29542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29542__$1,(4),from);
} else {
if((state_val_29543 === (9))){
var inst_29532 = (state_29542[(2)]);
var state_29542__$1 = (function (){var statearr_29584 = state_29542;
(statearr_29584[(9)] = inst_29532);

return statearr_29584;
})();
var statearr_29587_32959 = state_29542__$1;
(statearr_29587_32959[(2)] = null);

(statearr_29587_32959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (5))){
var inst_29520 = cljs.core.async.close_BANG_(jobs);
var state_29542__$1 = state_29542;
var statearr_29591_32964 = state_29542__$1;
(statearr_29591_32964[(2)] = inst_29520);

(statearr_29591_32964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (8))){
var inst_29523 = (state_29542[(8)]);
var inst_29529 = (state_29542[(2)]);
var state_29542__$1 = (function (){var statearr_29593 = state_29542;
(statearr_29593[(10)] = inst_29529);

return statearr_29593;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29542__$1,(9),results,inst_29523);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0 = (function (){
var statearr_29594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__);

(statearr_29594[(1)] = (1));

return statearr_29594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1 = (function (state_29542){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_29542);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e29599){var ex__28563__auto__ = e29599;
var statearr_29601_32973 = state_29542;
(statearr_29601_32973[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_29542[(4)]))){
var statearr_29606_32974 = state_29542;
(statearr_29606_32974[(1)] = cljs.core.first((state_29542[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32975 = state_29542;
state_29542 = G__32975;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__ = function(state_29542){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1.call(this,state_29542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_29609 = f__28879__auto__();
(statearr_29609[(6)] = c__28878__auto___32937);

return statearr_29609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


var c__28878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_29686){
var state_val_29687 = (state_29686[(1)]);
if((state_val_29687 === (7))){
var inst_29678 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29692_32976 = state_29686__$1;
(statearr_29692_32976[(2)] = inst_29678);

(statearr_29692_32976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (20))){
var state_29686__$1 = state_29686;
var statearr_29697_32977 = state_29686__$1;
(statearr_29697_32977[(2)] = null);

(statearr_29697_32977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (1))){
var state_29686__$1 = state_29686;
var statearr_29702_32981 = state_29686__$1;
(statearr_29702_32981[(2)] = null);

(statearr_29702_32981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (4))){
var inst_29616 = (state_29686[(7)]);
var inst_29616__$1 = (state_29686[(2)]);
var inst_29617 = (inst_29616__$1 == null);
var state_29686__$1 = (function (){var statearr_29704 = state_29686;
(statearr_29704[(7)] = inst_29616__$1);

return statearr_29704;
})();
if(cljs.core.truth_(inst_29617)){
var statearr_29705_32984 = state_29686__$1;
(statearr_29705_32984[(1)] = (5));

} else {
var statearr_29706_32985 = state_29686__$1;
(statearr_29706_32985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (15))){
var inst_29643 = (state_29686[(8)]);
var state_29686__$1 = state_29686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29686__$1,(18),to,inst_29643);
} else {
if((state_val_29687 === (21))){
var inst_29668 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29709_32986 = state_29686__$1;
(statearr_29709_32986[(2)] = inst_29668);

(statearr_29709_32986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (13))){
var inst_29673 = (state_29686[(2)]);
var state_29686__$1 = (function (){var statearr_29710 = state_29686;
(statearr_29710[(9)] = inst_29673);

return statearr_29710;
})();
var statearr_29713_32987 = state_29686__$1;
(statearr_29713_32987[(2)] = null);

(statearr_29713_32987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (6))){
var inst_29616 = (state_29686[(7)]);
var state_29686__$1 = state_29686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29686__$1,(11),inst_29616);
} else {
if((state_val_29687 === (17))){
var inst_29662 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
if(cljs.core.truth_(inst_29662)){
var statearr_29717_32988 = state_29686__$1;
(statearr_29717_32988[(1)] = (19));

} else {
var statearr_29718_32989 = state_29686__$1;
(statearr_29718_32989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (3))){
var inst_29680 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29686__$1,inst_29680);
} else {
if((state_val_29687 === (12))){
var inst_29633 = (state_29686[(10)]);
var state_29686__$1 = state_29686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29686__$1,(14),inst_29633);
} else {
if((state_val_29687 === (2))){
var state_29686__$1 = state_29686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29686__$1,(4),results);
} else {
if((state_val_29687 === (19))){
var state_29686__$1 = state_29686;
var statearr_29723_32990 = state_29686__$1;
(statearr_29723_32990[(2)] = null);

(statearr_29723_32990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (11))){
var inst_29633 = (state_29686[(2)]);
var state_29686__$1 = (function (){var statearr_29724 = state_29686;
(statearr_29724[(10)] = inst_29633);

return statearr_29724;
})();
var statearr_29725_32992 = state_29686__$1;
(statearr_29725_32992[(2)] = null);

(statearr_29725_32992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (9))){
var state_29686__$1 = state_29686;
var statearr_29728_32993 = state_29686__$1;
(statearr_29728_32993[(2)] = null);

(statearr_29728_32993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (5))){
var state_29686__$1 = state_29686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29731_32994 = state_29686__$1;
(statearr_29731_32994[(1)] = (8));

} else {
var statearr_29733_32996 = state_29686__$1;
(statearr_29733_32996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (14))){
var inst_29650 = (state_29686[(11)]);
var inst_29643 = (state_29686[(8)]);
var inst_29643__$1 = (state_29686[(2)]);
var inst_29649 = (inst_29643__$1 == null);
var inst_29650__$1 = cljs.core.not(inst_29649);
var state_29686__$1 = (function (){var statearr_29738 = state_29686;
(statearr_29738[(11)] = inst_29650__$1);

(statearr_29738[(8)] = inst_29643__$1);

return statearr_29738;
})();
if(inst_29650__$1){
var statearr_29739_32999 = state_29686__$1;
(statearr_29739_32999[(1)] = (15));

} else {
var statearr_29744_33000 = state_29686__$1;
(statearr_29744_33000[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (16))){
var inst_29650 = (state_29686[(11)]);
var state_29686__$1 = state_29686;
var statearr_29752_33001 = state_29686__$1;
(statearr_29752_33001[(2)] = inst_29650);

(statearr_29752_33001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (10))){
var inst_29629 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29764_33003 = state_29686__$1;
(statearr_29764_33003[(2)] = inst_29629);

(statearr_29764_33003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (18))){
var inst_29655 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29765_33004 = state_29686__$1;
(statearr_29765_33004[(2)] = inst_29655);

(statearr_29765_33004[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (8))){
var inst_29621 = cljs.core.async.close_BANG_(to);
var state_29686__$1 = state_29686;
var statearr_29766_33005 = state_29686__$1;
(statearr_29766_33005[(2)] = inst_29621);

(statearr_29766_33005[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0 = (function (){
var statearr_29780 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__);

(statearr_29780[(1)] = (1));

return statearr_29780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1 = (function (state_29686){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_29686);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e29789){var ex__28563__auto__ = e29789;
var statearr_29794_33006 = state_29686;
(statearr_29794_33006[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_29686[(4)]))){
var statearr_29795_33007 = state_29686;
(statearr_29795_33007[(1)] = cljs.core.first((state_29686[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33008 = state_29686;
state_29686 = G__33008;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__ = function(state_29686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1.call(this,state_29686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_29801 = f__28879__auto__();
(statearr_29801[(6)] = c__28878__auto__);

return statearr_29801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));

return c__28878__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29825 = arguments.length;
switch (G__29825) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29835 = arguments.length;
switch (G__29835) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29897 = arguments.length;
switch (G__29897) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28878__auto___33048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_29941){
var state_val_29942 = (state_29941[(1)]);
if((state_val_29942 === (7))){
var inst_29937 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
var statearr_29949_33062 = state_29941__$1;
(statearr_29949_33062[(2)] = inst_29937);

(statearr_29949_33062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (1))){
var state_29941__$1 = state_29941;
var statearr_29951_33065 = state_29941__$1;
(statearr_29951_33065[(2)] = null);

(statearr_29951_33065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (4))){
var inst_29917 = (state_29941[(7)]);
var inst_29917__$1 = (state_29941[(2)]);
var inst_29918 = (inst_29917__$1 == null);
var state_29941__$1 = (function (){var statearr_29952 = state_29941;
(statearr_29952[(7)] = inst_29917__$1);

return statearr_29952;
})();
if(cljs.core.truth_(inst_29918)){
var statearr_29953_33072 = state_29941__$1;
(statearr_29953_33072[(1)] = (5));

} else {
var statearr_29954_33073 = state_29941__$1;
(statearr_29954_33073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (13))){
var state_29941__$1 = state_29941;
var statearr_29955_33074 = state_29941__$1;
(statearr_29955_33074[(2)] = null);

(statearr_29955_33074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (6))){
var inst_29917 = (state_29941[(7)]);
var inst_29923 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29917) : p.call(null,inst_29917));
var state_29941__$1 = state_29941;
if(cljs.core.truth_(inst_29923)){
var statearr_29957_33081 = state_29941__$1;
(statearr_29957_33081[(1)] = (9));

} else {
var statearr_29960_33083 = state_29941__$1;
(statearr_29960_33083[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (3))){
var inst_29939 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29941__$1,inst_29939);
} else {
if((state_val_29942 === (12))){
var state_29941__$1 = state_29941;
var statearr_29963_33084 = state_29941__$1;
(statearr_29963_33084[(2)] = null);

(statearr_29963_33084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (2))){
var state_29941__$1 = state_29941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29941__$1,(4),ch);
} else {
if((state_val_29942 === (11))){
var inst_29917 = (state_29941[(7)]);
var inst_29927 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29941__$1,(8),inst_29927,inst_29917);
} else {
if((state_val_29942 === (9))){
var state_29941__$1 = state_29941;
var statearr_29968_33088 = state_29941__$1;
(statearr_29968_33088[(2)] = tc);

(statearr_29968_33088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (5))){
var inst_29920 = cljs.core.async.close_BANG_(tc);
var inst_29921 = cljs.core.async.close_BANG_(fc);
var state_29941__$1 = (function (){var statearr_29969 = state_29941;
(statearr_29969[(8)] = inst_29920);

return statearr_29969;
})();
var statearr_29971_33099 = state_29941__$1;
(statearr_29971_33099[(2)] = inst_29921);

(statearr_29971_33099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (14))){
var inst_29935 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
var statearr_29972_33100 = state_29941__$1;
(statearr_29972_33100[(2)] = inst_29935);

(statearr_29972_33100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (10))){
var state_29941__$1 = state_29941;
var statearr_29975_33102 = state_29941__$1;
(statearr_29975_33102[(2)] = fc);

(statearr_29975_33102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (8))){
var inst_29929 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
if(cljs.core.truth_(inst_29929)){
var statearr_29978_33109 = state_29941__$1;
(statearr_29978_33109[(1)] = (12));

} else {
var statearr_29980_33110 = state_29941__$1;
(statearr_29980_33110[(1)] = (13));

}

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
});
return (function() {
var cljs$core$async$state_machine__28560__auto__ = null;
var cljs$core$async$state_machine__28560__auto____0 = (function (){
var statearr_29984 = [null,null,null,null,null,null,null,null,null];
(statearr_29984[(0)] = cljs$core$async$state_machine__28560__auto__);

(statearr_29984[(1)] = (1));

return statearr_29984;
});
var cljs$core$async$state_machine__28560__auto____1 = (function (state_29941){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_29941);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e29986){var ex__28563__auto__ = e29986;
var statearr_29987_33115 = state_29941;
(statearr_29987_33115[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_29941[(4)]))){
var statearr_29988_33116 = state_29941;
(statearr_29988_33116[(1)] = cljs.core.first((state_29941[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33117 = state_29941;
state_29941 = G__33117;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$state_machine__28560__auto__ = function(state_29941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28560__auto____1.call(this,state_29941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28560__auto____0;
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28560__auto____1;
return cljs$core$async$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_29990 = f__28879__auto__();
(statearr_29990[(6)] = c__28878__auto___33048);

return statearr_29990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_30019){
var state_val_30021 = (state_30019[(1)]);
if((state_val_30021 === (7))){
var inst_30015 = (state_30019[(2)]);
var state_30019__$1 = state_30019;
var statearr_30028_33123 = state_30019__$1;
(statearr_30028_33123[(2)] = inst_30015);

(statearr_30028_33123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (1))){
var inst_29997 = init;
var inst_29998 = inst_29997;
var state_30019__$1 = (function (){var statearr_30034 = state_30019;
(statearr_30034[(7)] = inst_29998);

return statearr_30034;
})();
var statearr_30035_33127 = state_30019__$1;
(statearr_30035_33127[(2)] = null);

(statearr_30035_33127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (4))){
var inst_30001 = (state_30019[(8)]);
var inst_30001__$1 = (state_30019[(2)]);
var inst_30003 = (inst_30001__$1 == null);
var state_30019__$1 = (function (){var statearr_30042 = state_30019;
(statearr_30042[(8)] = inst_30001__$1);

return statearr_30042;
})();
if(cljs.core.truth_(inst_30003)){
var statearr_30043_33130 = state_30019__$1;
(statearr_30043_33130[(1)] = (5));

} else {
var statearr_30046_33131 = state_30019__$1;
(statearr_30046_33131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (6))){
var inst_30001 = (state_30019[(8)]);
var inst_30006 = (state_30019[(9)]);
var inst_29998 = (state_30019[(7)]);
var inst_30006__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29998,inst_30001) : f.call(null,inst_29998,inst_30001));
var inst_30007 = cljs.core.reduced_QMARK_(inst_30006__$1);
var state_30019__$1 = (function (){var statearr_30048 = state_30019;
(statearr_30048[(9)] = inst_30006__$1);

return statearr_30048;
})();
if(inst_30007){
var statearr_30049_33141 = state_30019__$1;
(statearr_30049_33141[(1)] = (8));

} else {
var statearr_30052_33142 = state_30019__$1;
(statearr_30052_33142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (3))){
var inst_30017 = (state_30019[(2)]);
var state_30019__$1 = state_30019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30019__$1,inst_30017);
} else {
if((state_val_30021 === (2))){
var state_30019__$1 = state_30019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30019__$1,(4),ch);
} else {
if((state_val_30021 === (9))){
var inst_30006 = (state_30019[(9)]);
var inst_29998 = inst_30006;
var state_30019__$1 = (function (){var statearr_30058 = state_30019;
(statearr_30058[(7)] = inst_29998);

return statearr_30058;
})();
var statearr_30059_33147 = state_30019__$1;
(statearr_30059_33147[(2)] = null);

(statearr_30059_33147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (5))){
var inst_29998 = (state_30019[(7)]);
var state_30019__$1 = state_30019;
var statearr_30060_33148 = state_30019__$1;
(statearr_30060_33148[(2)] = inst_29998);

(statearr_30060_33148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (10))){
var inst_30013 = (state_30019[(2)]);
var state_30019__$1 = state_30019;
var statearr_30061_33152 = state_30019__$1;
(statearr_30061_33152[(2)] = inst_30013);

(statearr_30061_33152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (8))){
var inst_30006 = (state_30019[(9)]);
var inst_30009 = cljs.core.deref(inst_30006);
var state_30019__$1 = state_30019;
var statearr_30063_33154 = state_30019__$1;
(statearr_30063_33154[(2)] = inst_30009);

(statearr_30063_33154[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28560__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28560__auto____0 = (function (){
var statearr_30066 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30066[(0)] = cljs$core$async$reduce_$_state_machine__28560__auto__);

(statearr_30066[(1)] = (1));

return statearr_30066;
});
var cljs$core$async$reduce_$_state_machine__28560__auto____1 = (function (state_30019){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_30019);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e30069){var ex__28563__auto__ = e30069;
var statearr_30070_33155 = state_30019;
(statearr_30070_33155[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_30019[(4)]))){
var statearr_30071_33156 = state_30019;
(statearr_30071_33156[(1)] = cljs.core.first((state_30019[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33160 = state_30019;
state_30019 = G__33160;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28560__auto__ = function(state_30019){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28560__auto____1.call(this,state_30019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28560__auto____0;
cljs$core$async$reduce_$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28560__auto____1;
return cljs$core$async$reduce_$_state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_30074 = f__28879__auto__();
(statearr_30074[(6)] = c__28878__auto__);

return statearr_30074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));

return c__28878__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_30085){
var state_val_30086 = (state_30085[(1)]);
if((state_val_30086 === (1))){
var inst_30080 = cljs.core.async.reduce(f__$1,init,ch);
var state_30085__$1 = state_30085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30085__$1,(2),inst_30080);
} else {
if((state_val_30086 === (2))){
var inst_30082 = (state_30085[(2)]);
var inst_30083 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30082) : f__$1.call(null,inst_30082));
var state_30085__$1 = state_30085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30085__$1,inst_30083);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28560__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28560__auto____0 = (function (){
var statearr_30095 = [null,null,null,null,null,null,null];
(statearr_30095[(0)] = cljs$core$async$transduce_$_state_machine__28560__auto__);

(statearr_30095[(1)] = (1));

return statearr_30095;
});
var cljs$core$async$transduce_$_state_machine__28560__auto____1 = (function (state_30085){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_30085);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e30097){var ex__28563__auto__ = e30097;
var statearr_30098_33163 = state_30085;
(statearr_30098_33163[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_30085[(4)]))){
var statearr_30099_33164 = state_30085;
(statearr_30099_33164[(1)] = cljs.core.first((state_30085[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33165 = state_30085;
state_30085 = G__33165;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28560__auto__ = function(state_30085){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28560__auto____1.call(this,state_30085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28560__auto____0;
cljs$core$async$transduce_$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28560__auto____1;
return cljs$core$async$transduce_$_state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_30103 = f__28879__auto__();
(statearr_30103[(6)] = c__28878__auto__);

return statearr_30103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));

return c__28878__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30108 = arguments.length;
switch (G__30108) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_30139){
var state_val_30140 = (state_30139[(1)]);
if((state_val_30140 === (7))){
var inst_30120 = (state_30139[(2)]);
var state_30139__$1 = state_30139;
var statearr_30150_33167 = state_30139__$1;
(statearr_30150_33167[(2)] = inst_30120);

(statearr_30150_33167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (1))){
var inst_30114 = cljs.core.seq(coll);
var inst_30115 = inst_30114;
var state_30139__$1 = (function (){var statearr_30152 = state_30139;
(statearr_30152[(7)] = inst_30115);

return statearr_30152;
})();
var statearr_30153_33168 = state_30139__$1;
(statearr_30153_33168[(2)] = null);

(statearr_30153_33168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (4))){
var inst_30115 = (state_30139[(7)]);
var inst_30118 = cljs.core.first(inst_30115);
var state_30139__$1 = state_30139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30139__$1,(7),ch,inst_30118);
} else {
if((state_val_30140 === (13))){
var inst_30133 = (state_30139[(2)]);
var state_30139__$1 = state_30139;
var statearr_30157_33169 = state_30139__$1;
(statearr_30157_33169[(2)] = inst_30133);

(statearr_30157_33169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (6))){
var inst_30123 = (state_30139[(2)]);
var state_30139__$1 = state_30139;
if(cljs.core.truth_(inst_30123)){
var statearr_30160_33170 = state_30139__$1;
(statearr_30160_33170[(1)] = (8));

} else {
var statearr_30161_33172 = state_30139__$1;
(statearr_30161_33172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (3))){
var inst_30137 = (state_30139[(2)]);
var state_30139__$1 = state_30139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30139__$1,inst_30137);
} else {
if((state_val_30140 === (12))){
var state_30139__$1 = state_30139;
var statearr_30167_33173 = state_30139__$1;
(statearr_30167_33173[(2)] = null);

(statearr_30167_33173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (2))){
var inst_30115 = (state_30139[(7)]);
var state_30139__$1 = state_30139;
if(cljs.core.truth_(inst_30115)){
var statearr_30170_33174 = state_30139__$1;
(statearr_30170_33174[(1)] = (4));

} else {
var statearr_30172_33175 = state_30139__$1;
(statearr_30172_33175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (11))){
var inst_30130 = cljs.core.async.close_BANG_(ch);
var state_30139__$1 = state_30139;
var statearr_30174_33176 = state_30139__$1;
(statearr_30174_33176[(2)] = inst_30130);

(statearr_30174_33176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (9))){
var state_30139__$1 = state_30139;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30176_33177 = state_30139__$1;
(statearr_30176_33177[(1)] = (11));

} else {
var statearr_30177_33178 = state_30139__$1;
(statearr_30177_33178[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (5))){
var inst_30115 = (state_30139[(7)]);
var state_30139__$1 = state_30139;
var statearr_30180_33186 = state_30139__$1;
(statearr_30180_33186[(2)] = inst_30115);

(statearr_30180_33186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (10))){
var inst_30135 = (state_30139[(2)]);
var state_30139__$1 = state_30139;
var statearr_30182_33187 = state_30139__$1;
(statearr_30182_33187[(2)] = inst_30135);

(statearr_30182_33187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (8))){
var inst_30115 = (state_30139[(7)]);
var inst_30125 = cljs.core.next(inst_30115);
var inst_30115__$1 = inst_30125;
var state_30139__$1 = (function (){var statearr_30185 = state_30139;
(statearr_30185[(7)] = inst_30115__$1);

return statearr_30185;
})();
var statearr_30189_33188 = state_30139__$1;
(statearr_30189_33188[(2)] = null);

(statearr_30189_33188[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28560__auto__ = null;
var cljs$core$async$state_machine__28560__auto____0 = (function (){
var statearr_30193 = [null,null,null,null,null,null,null,null];
(statearr_30193[(0)] = cljs$core$async$state_machine__28560__auto__);

(statearr_30193[(1)] = (1));

return statearr_30193;
});
var cljs$core$async$state_machine__28560__auto____1 = (function (state_30139){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_30139);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e30196){var ex__28563__auto__ = e30196;
var statearr_30197_33190 = state_30139;
(statearr_30197_33190[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_30139[(4)]))){
var statearr_30198_33191 = state_30139;
(statearr_30198_33191[(1)] = cljs.core.first((state_30139[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33192 = state_30139;
state_30139 = G__33192;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$state_machine__28560__auto__ = function(state_30139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28560__auto____1.call(this,state_30139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28560__auto____0;
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28560__auto____1;
return cljs$core$async$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_30199 = f__28879__auto__();
(statearr_30199[(6)] = c__28878__auto__);

return statearr_30199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));

return c__28878__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30209 = arguments.length;
switch (G__30209) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33196 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33196(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33201 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33201(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33204 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33204(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33210 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33210(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30264 = (function (ch,cs,meta30265){
this.ch = ch;
this.cs = cs;
this.meta30265 = meta30265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30266,meta30265__$1){
var self__ = this;
var _30266__$1 = this;
return (new cljs.core.async.t_cljs$core$async30264(self__.ch,self__.cs,meta30265__$1));
}));

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30266){
var self__ = this;
var _30266__$1 = this;
return self__.meta30265;
}));

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30265","meta30265",854146810,null)], null);
}));

(cljs.core.async.t_cljs$core$async30264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30264");

(cljs.core.async.t_cljs$core$async30264.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30264.
 */
cljs.core.async.__GT_t_cljs$core$async30264 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30264(ch__$1,cs__$1,meta30265){
return (new cljs.core.async.t_cljs$core$async30264(ch__$1,cs__$1,meta30265));
});

}

return (new cljs.core.async.t_cljs$core$async30264(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28878__auto___33230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_30434){
var state_val_30438 = (state_30434[(1)]);
if((state_val_30438 === (7))){
var inst_30429 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30442_33233 = state_30434__$1;
(statearr_30442_33233[(2)] = inst_30429);

(statearr_30442_33233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (20))){
var inst_30318 = (state_30434[(7)]);
var inst_30331 = cljs.core.first(inst_30318);
var inst_30333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30331,(0),null);
var inst_30334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30331,(1),null);
var state_30434__$1 = (function (){var statearr_30443 = state_30434;
(statearr_30443[(8)] = inst_30333);

return statearr_30443;
})();
if(cljs.core.truth_(inst_30334)){
var statearr_30444_33239 = state_30434__$1;
(statearr_30444_33239[(1)] = (22));

} else {
var statearr_30446_33240 = state_30434__$1;
(statearr_30446_33240[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (27))){
var inst_30368 = (state_30434[(9)]);
var inst_30370 = (state_30434[(10)]);
var inst_30381 = (state_30434[(11)]);
var inst_30284 = (state_30434[(12)]);
var inst_30381__$1 = cljs.core._nth(inst_30368,inst_30370);
var inst_30383 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30381__$1,inst_30284,done);
var state_30434__$1 = (function (){var statearr_30450 = state_30434;
(statearr_30450[(11)] = inst_30381__$1);

return statearr_30450;
})();
if(cljs.core.truth_(inst_30383)){
var statearr_30455_33241 = state_30434__$1;
(statearr_30455_33241[(1)] = (30));

} else {
var statearr_30456_33244 = state_30434__$1;
(statearr_30456_33244[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (1))){
var state_30434__$1 = state_30434;
var statearr_30457_33245 = state_30434__$1;
(statearr_30457_33245[(2)] = null);

(statearr_30457_33245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (24))){
var inst_30318 = (state_30434[(7)]);
var inst_30339 = (state_30434[(2)]);
var inst_30340 = cljs.core.next(inst_30318);
var inst_30294 = inst_30340;
var inst_30295 = null;
var inst_30296 = (0);
var inst_30297 = (0);
var state_30434__$1 = (function (){var statearr_30459 = state_30434;
(statearr_30459[(13)] = inst_30297);

(statearr_30459[(14)] = inst_30339);

(statearr_30459[(15)] = inst_30294);

(statearr_30459[(16)] = inst_30296);

(statearr_30459[(17)] = inst_30295);

return statearr_30459;
})();
var statearr_30460_33252 = state_30434__$1;
(statearr_30460_33252[(2)] = null);

(statearr_30460_33252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (39))){
var state_30434__$1 = state_30434;
var statearr_30469_33255 = state_30434__$1;
(statearr_30469_33255[(2)] = null);

(statearr_30469_33255[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (4))){
var inst_30284 = (state_30434[(12)]);
var inst_30284__$1 = (state_30434[(2)]);
var inst_30285 = (inst_30284__$1 == null);
var state_30434__$1 = (function (){var statearr_30471 = state_30434;
(statearr_30471[(12)] = inst_30284__$1);

return statearr_30471;
})();
if(cljs.core.truth_(inst_30285)){
var statearr_30475_33264 = state_30434__$1;
(statearr_30475_33264[(1)] = (5));

} else {
var statearr_30476_33265 = state_30434__$1;
(statearr_30476_33265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (15))){
var inst_30297 = (state_30434[(13)]);
var inst_30294 = (state_30434[(15)]);
var inst_30296 = (state_30434[(16)]);
var inst_30295 = (state_30434[(17)]);
var inst_30313 = (state_30434[(2)]);
var inst_30315 = (inst_30297 + (1));
var tmp30465 = inst_30294;
var tmp30466 = inst_30296;
var tmp30467 = inst_30295;
var inst_30294__$1 = tmp30465;
var inst_30295__$1 = tmp30467;
var inst_30296__$1 = tmp30466;
var inst_30297__$1 = inst_30315;
var state_30434__$1 = (function (){var statearr_30477 = state_30434;
(statearr_30477[(13)] = inst_30297__$1);

(statearr_30477[(15)] = inst_30294__$1);

(statearr_30477[(18)] = inst_30313);

(statearr_30477[(16)] = inst_30296__$1);

(statearr_30477[(17)] = inst_30295__$1);

return statearr_30477;
})();
var statearr_30480_33275 = state_30434__$1;
(statearr_30480_33275[(2)] = null);

(statearr_30480_33275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (21))){
var inst_30344 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30486_33276 = state_30434__$1;
(statearr_30486_33276[(2)] = inst_30344);

(statearr_30486_33276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (31))){
var inst_30381 = (state_30434[(11)]);
var inst_30386 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30381);
var state_30434__$1 = state_30434;
var statearr_30487_33284 = state_30434__$1;
(statearr_30487_33284[(2)] = inst_30386);

(statearr_30487_33284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (32))){
var inst_30368 = (state_30434[(9)]);
var inst_30370 = (state_30434[(10)]);
var inst_30369 = (state_30434[(19)]);
var inst_30367 = (state_30434[(20)]);
var inst_30388 = (state_30434[(2)]);
var inst_30389 = (inst_30370 + (1));
var tmp30483 = inst_30368;
var tmp30484 = inst_30369;
var tmp30485 = inst_30367;
var inst_30367__$1 = tmp30485;
var inst_30368__$1 = tmp30483;
var inst_30369__$1 = tmp30484;
var inst_30370__$1 = inst_30389;
var state_30434__$1 = (function (){var statearr_30490 = state_30434;
(statearr_30490[(9)] = inst_30368__$1);

(statearr_30490[(10)] = inst_30370__$1);

(statearr_30490[(21)] = inst_30388);

(statearr_30490[(19)] = inst_30369__$1);

(statearr_30490[(20)] = inst_30367__$1);

return statearr_30490;
})();
var statearr_30494_33288 = state_30434__$1;
(statearr_30494_33288[(2)] = null);

(statearr_30494_33288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (40))){
var inst_30402 = (state_30434[(22)]);
var inst_30406 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30402);
var state_30434__$1 = state_30434;
var statearr_30499_33289 = state_30434__$1;
(statearr_30499_33289[(2)] = inst_30406);

(statearr_30499_33289[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (33))){
var inst_30392 = (state_30434[(23)]);
var inst_30394 = cljs.core.chunked_seq_QMARK_(inst_30392);
var state_30434__$1 = state_30434;
if(inst_30394){
var statearr_30500_33290 = state_30434__$1;
(statearr_30500_33290[(1)] = (36));

} else {
var statearr_30501_33291 = state_30434__$1;
(statearr_30501_33291[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (13))){
var inst_30306 = (state_30434[(24)]);
var inst_30310 = cljs.core.async.close_BANG_(inst_30306);
var state_30434__$1 = state_30434;
var statearr_30508_33294 = state_30434__$1;
(statearr_30508_33294[(2)] = inst_30310);

(statearr_30508_33294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (22))){
var inst_30333 = (state_30434[(8)]);
var inst_30336 = cljs.core.async.close_BANG_(inst_30333);
var state_30434__$1 = state_30434;
var statearr_30509_33300 = state_30434__$1;
(statearr_30509_33300[(2)] = inst_30336);

(statearr_30509_33300[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (36))){
var inst_30392 = (state_30434[(23)]);
var inst_30397 = cljs.core.chunk_first(inst_30392);
var inst_30398 = cljs.core.chunk_rest(inst_30392);
var inst_30399 = cljs.core.count(inst_30397);
var inst_30367 = inst_30398;
var inst_30368 = inst_30397;
var inst_30369 = inst_30399;
var inst_30370 = (0);
var state_30434__$1 = (function (){var statearr_30511 = state_30434;
(statearr_30511[(9)] = inst_30368);

(statearr_30511[(10)] = inst_30370);

(statearr_30511[(19)] = inst_30369);

(statearr_30511[(20)] = inst_30367);

return statearr_30511;
})();
var statearr_30512_33307 = state_30434__$1;
(statearr_30512_33307[(2)] = null);

(statearr_30512_33307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (41))){
var inst_30392 = (state_30434[(23)]);
var inst_30408 = (state_30434[(2)]);
var inst_30409 = cljs.core.next(inst_30392);
var inst_30367 = inst_30409;
var inst_30368 = null;
var inst_30369 = (0);
var inst_30370 = (0);
var state_30434__$1 = (function (){var statearr_30513 = state_30434;
(statearr_30513[(9)] = inst_30368);

(statearr_30513[(10)] = inst_30370);

(statearr_30513[(25)] = inst_30408);

(statearr_30513[(19)] = inst_30369);

(statearr_30513[(20)] = inst_30367);

return statearr_30513;
})();
var statearr_30514_33308 = state_30434__$1;
(statearr_30514_33308[(2)] = null);

(statearr_30514_33308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (43))){
var state_30434__$1 = state_30434;
var statearr_30515_33312 = state_30434__$1;
(statearr_30515_33312[(2)] = null);

(statearr_30515_33312[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (29))){
var inst_30417 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30519_33314 = state_30434__$1;
(statearr_30519_33314[(2)] = inst_30417);

(statearr_30519_33314[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (44))){
var inst_30426 = (state_30434[(2)]);
var state_30434__$1 = (function (){var statearr_30520 = state_30434;
(statearr_30520[(26)] = inst_30426);

return statearr_30520;
})();
var statearr_30521_33316 = state_30434__$1;
(statearr_30521_33316[(2)] = null);

(statearr_30521_33316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (6))){
var inst_30354 = (state_30434[(27)]);
var inst_30353 = cljs.core.deref(cs);
var inst_30354__$1 = cljs.core.keys(inst_30353);
var inst_30356 = cljs.core.count(inst_30354__$1);
var inst_30357 = cljs.core.reset_BANG_(dctr,inst_30356);
var inst_30365 = cljs.core.seq(inst_30354__$1);
var inst_30367 = inst_30365;
var inst_30368 = null;
var inst_30369 = (0);
var inst_30370 = (0);
var state_30434__$1 = (function (){var statearr_30523 = state_30434;
(statearr_30523[(9)] = inst_30368);

(statearr_30523[(28)] = inst_30357);

(statearr_30523[(10)] = inst_30370);

(statearr_30523[(27)] = inst_30354__$1);

(statearr_30523[(19)] = inst_30369);

(statearr_30523[(20)] = inst_30367);

return statearr_30523;
})();
var statearr_30526_33320 = state_30434__$1;
(statearr_30526_33320[(2)] = null);

(statearr_30526_33320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (28))){
var inst_30392 = (state_30434[(23)]);
var inst_30367 = (state_30434[(20)]);
var inst_30392__$1 = cljs.core.seq(inst_30367);
var state_30434__$1 = (function (){var statearr_30533 = state_30434;
(statearr_30533[(23)] = inst_30392__$1);

return statearr_30533;
})();
if(inst_30392__$1){
var statearr_30534_33324 = state_30434__$1;
(statearr_30534_33324[(1)] = (33));

} else {
var statearr_30535_33325 = state_30434__$1;
(statearr_30535_33325[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (25))){
var inst_30370 = (state_30434[(10)]);
var inst_30369 = (state_30434[(19)]);
var inst_30378 = (inst_30370 < inst_30369);
var inst_30379 = inst_30378;
var state_30434__$1 = state_30434;
if(cljs.core.truth_(inst_30379)){
var statearr_30537_33326 = state_30434__$1;
(statearr_30537_33326[(1)] = (27));

} else {
var statearr_30538_33329 = state_30434__$1;
(statearr_30538_33329[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (34))){
var state_30434__$1 = state_30434;
var statearr_30539_33334 = state_30434__$1;
(statearr_30539_33334[(2)] = null);

(statearr_30539_33334[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (17))){
var state_30434__$1 = state_30434;
var statearr_30540_33335 = state_30434__$1;
(statearr_30540_33335[(2)] = null);

(statearr_30540_33335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (3))){
var inst_30431 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30434__$1,inst_30431);
} else {
if((state_val_30438 === (12))){
var inst_30349 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30541_33336 = state_30434__$1;
(statearr_30541_33336[(2)] = inst_30349);

(statearr_30541_33336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (2))){
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30434__$1,(4),ch);
} else {
if((state_val_30438 === (23))){
var state_30434__$1 = state_30434;
var statearr_30543_33343 = state_30434__$1;
(statearr_30543_33343[(2)] = null);

(statearr_30543_33343[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (35))){
var inst_30415 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30544_33348 = state_30434__$1;
(statearr_30544_33348[(2)] = inst_30415);

(statearr_30544_33348[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (19))){
var inst_30318 = (state_30434[(7)]);
var inst_30322 = cljs.core.chunk_first(inst_30318);
var inst_30323 = cljs.core.chunk_rest(inst_30318);
var inst_30324 = cljs.core.count(inst_30322);
var inst_30294 = inst_30323;
var inst_30295 = inst_30322;
var inst_30296 = inst_30324;
var inst_30297 = (0);
var state_30434__$1 = (function (){var statearr_30546 = state_30434;
(statearr_30546[(13)] = inst_30297);

(statearr_30546[(15)] = inst_30294);

(statearr_30546[(16)] = inst_30296);

(statearr_30546[(17)] = inst_30295);

return statearr_30546;
})();
var statearr_30547_33360 = state_30434__$1;
(statearr_30547_33360[(2)] = null);

(statearr_30547_33360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (11))){
var inst_30294 = (state_30434[(15)]);
var inst_30318 = (state_30434[(7)]);
var inst_30318__$1 = cljs.core.seq(inst_30294);
var state_30434__$1 = (function (){var statearr_30552 = state_30434;
(statearr_30552[(7)] = inst_30318__$1);

return statearr_30552;
})();
if(inst_30318__$1){
var statearr_30553_33369 = state_30434__$1;
(statearr_30553_33369[(1)] = (16));

} else {
var statearr_30554_33371 = state_30434__$1;
(statearr_30554_33371[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (9))){
var inst_30351 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30559_33376 = state_30434__$1;
(statearr_30559_33376[(2)] = inst_30351);

(statearr_30559_33376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (5))){
var inst_30292 = cljs.core.deref(cs);
var inst_30293 = cljs.core.seq(inst_30292);
var inst_30294 = inst_30293;
var inst_30295 = null;
var inst_30296 = (0);
var inst_30297 = (0);
var state_30434__$1 = (function (){var statearr_30560 = state_30434;
(statearr_30560[(13)] = inst_30297);

(statearr_30560[(15)] = inst_30294);

(statearr_30560[(16)] = inst_30296);

(statearr_30560[(17)] = inst_30295);

return statearr_30560;
})();
var statearr_30561_33384 = state_30434__$1;
(statearr_30561_33384[(2)] = null);

(statearr_30561_33384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (14))){
var state_30434__$1 = state_30434;
var statearr_30565_33386 = state_30434__$1;
(statearr_30565_33386[(2)] = null);

(statearr_30565_33386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (45))){
var inst_30423 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30566_33388 = state_30434__$1;
(statearr_30566_33388[(2)] = inst_30423);

(statearr_30566_33388[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (26))){
var inst_30354 = (state_30434[(27)]);
var inst_30419 = (state_30434[(2)]);
var inst_30420 = cljs.core.seq(inst_30354);
var state_30434__$1 = (function (){var statearr_30567 = state_30434;
(statearr_30567[(29)] = inst_30419);

return statearr_30567;
})();
if(inst_30420){
var statearr_30568_33391 = state_30434__$1;
(statearr_30568_33391[(1)] = (42));

} else {
var statearr_30571_33393 = state_30434__$1;
(statearr_30571_33393[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (16))){
var inst_30318 = (state_30434[(7)]);
var inst_30320 = cljs.core.chunked_seq_QMARK_(inst_30318);
var state_30434__$1 = state_30434;
if(inst_30320){
var statearr_30574_33404 = state_30434__$1;
(statearr_30574_33404[(1)] = (19));

} else {
var statearr_30579_33405 = state_30434__$1;
(statearr_30579_33405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (38))){
var inst_30412 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30581_33407 = state_30434__$1;
(statearr_30581_33407[(2)] = inst_30412);

(statearr_30581_33407[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (30))){
var state_30434__$1 = state_30434;
var statearr_30582_33409 = state_30434__$1;
(statearr_30582_33409[(2)] = null);

(statearr_30582_33409[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (10))){
var inst_30297 = (state_30434[(13)]);
var inst_30295 = (state_30434[(17)]);
var inst_30305 = cljs.core._nth(inst_30295,inst_30297);
var inst_30306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30305,(0),null);
var inst_30307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30305,(1),null);
var state_30434__$1 = (function (){var statearr_30583 = state_30434;
(statearr_30583[(24)] = inst_30306);

return statearr_30583;
})();
if(cljs.core.truth_(inst_30307)){
var statearr_30584_33414 = state_30434__$1;
(statearr_30584_33414[(1)] = (13));

} else {
var statearr_30585_33415 = state_30434__$1;
(statearr_30585_33415[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (18))){
var inst_30347 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30587_33419 = state_30434__$1;
(statearr_30587_33419[(2)] = inst_30347);

(statearr_30587_33419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (42))){
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30434__$1,(45),dchan);
} else {
if((state_val_30438 === (37))){
var inst_30392 = (state_30434[(23)]);
var inst_30402 = (state_30434[(22)]);
var inst_30284 = (state_30434[(12)]);
var inst_30402__$1 = cljs.core.first(inst_30392);
var inst_30403 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30402__$1,inst_30284,done);
var state_30434__$1 = (function (){var statearr_30590 = state_30434;
(statearr_30590[(22)] = inst_30402__$1);

return statearr_30590;
})();
if(cljs.core.truth_(inst_30403)){
var statearr_30591_33426 = state_30434__$1;
(statearr_30591_33426[(1)] = (39));

} else {
var statearr_30596_33433 = state_30434__$1;
(statearr_30596_33433[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (8))){
var inst_30297 = (state_30434[(13)]);
var inst_30296 = (state_30434[(16)]);
var inst_30299 = (inst_30297 < inst_30296);
var inst_30300 = inst_30299;
var state_30434__$1 = state_30434;
if(cljs.core.truth_(inst_30300)){
var statearr_30602_33434 = state_30434__$1;
(statearr_30602_33434[(1)] = (10));

} else {
var statearr_30603_33435 = state_30434__$1;
(statearr_30603_33435[(1)] = (11));

}

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
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28560__auto__ = null;
var cljs$core$async$mult_$_state_machine__28560__auto____0 = (function (){
var statearr_30610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30610[(0)] = cljs$core$async$mult_$_state_machine__28560__auto__);

(statearr_30610[(1)] = (1));

return statearr_30610;
});
var cljs$core$async$mult_$_state_machine__28560__auto____1 = (function (state_30434){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_30434);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e30612){var ex__28563__auto__ = e30612;
var statearr_30613_33443 = state_30434;
(statearr_30613_33443[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_30434[(4)]))){
var statearr_30614_33444 = state_30434;
(statearr_30614_33444[(1)] = cljs.core.first((state_30434[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33446 = state_30434;
state_30434 = G__33446;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28560__auto__ = function(state_30434){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28560__auto____1.call(this,state_30434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28560__auto____0;
cljs$core$async$mult_$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28560__auto____1;
return cljs$core$async$mult_$_state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_30616 = f__28879__auto__();
(statearr_30616[(6)] = c__28878__auto___33230);

return statearr_30616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30618 = arguments.length;
switch (G__30618) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33469 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33469(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33474 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33474(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33484 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33484(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33490 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33490(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33498 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33498(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33499 = arguments.length;
var i__4819__auto___33500 = (0);
while(true){
if((i__4819__auto___33500 < len__4818__auto___33499)){
args__4824__auto__.push((arguments[i__4819__auto___33500]));

var G__33505 = (i__4819__auto___33500 + (1));
i__4819__auto___33500 = G__33505;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30689){
var map__30691 = p__30689;
var map__30691__$1 = cljs.core.__destructure_map(map__30691);
var opts = map__30691__$1;
var statearr_30692_33519 = state;
(statearr_30692_33519[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30694_33526 = state;
(statearr_30694_33526[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30698_33534 = state;
(statearr_30698_33534[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30671){
var G__30672 = cljs.core.first(seq30671);
var seq30671__$1 = cljs.core.next(seq30671);
var G__30673 = cljs.core.first(seq30671__$1);
var seq30671__$2 = cljs.core.next(seq30671__$1);
var G__30674 = cljs.core.first(seq30671__$2);
var seq30671__$3 = cljs.core.next(seq30671__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30672,G__30673,G__30674,seq30671__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30723 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30723 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30724){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30724 = meta30724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30725,meta30724__$1){
var self__ = this;
var _30725__$1 = this;
return (new cljs.core.async.t_cljs$core$async30723(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30724__$1));
}));

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30725){
var self__ = this;
var _30725__$1 = this;
return self__.meta30724;
}));

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30724","meta30724",-74672895,null)], null);
}));

(cljs.core.async.t_cljs$core$async30723.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30723");

(cljs.core.async.t_cljs$core$async30723.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30723");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30723.
 */
cljs.core.async.__GT_t_cljs$core$async30723 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30723(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30724){
return (new cljs.core.async.t_cljs$core$async30723(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30724));
});

}

return (new cljs.core.async.t_cljs$core$async30723(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28878__auto___33627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_30853){
var state_val_30854 = (state_30853[(1)]);
if((state_val_30854 === (7))){
var inst_30808 = (state_30853[(2)]);
var state_30853__$1 = state_30853;
if(cljs.core.truth_(inst_30808)){
var statearr_30861_33630 = state_30853__$1;
(statearr_30861_33630[(1)] = (8));

} else {
var statearr_30863_33631 = state_30853__$1;
(statearr_30863_33631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (20))){
var inst_30798 = (state_30853[(7)]);
var state_30853__$1 = state_30853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30853__$1,(23),out,inst_30798);
} else {
if((state_val_30854 === (1))){
var inst_30776 = calc_state();
var inst_30777 = cljs.core.__destructure_map(inst_30776);
var inst_30778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30777,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30777,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30777,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30784 = inst_30776;
var state_30853__$1 = (function (){var statearr_30870 = state_30853;
(statearr_30870[(8)] = inst_30778);

(statearr_30870[(9)] = inst_30781);

(statearr_30870[(10)] = inst_30782);

(statearr_30870[(11)] = inst_30784);

return statearr_30870;
})();
var statearr_30875_33642 = state_30853__$1;
(statearr_30875_33642[(2)] = null);

(statearr_30875_33642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (24))){
var inst_30787 = (state_30853[(12)]);
var inst_30784 = inst_30787;
var state_30853__$1 = (function (){var statearr_30877 = state_30853;
(statearr_30877[(11)] = inst_30784);

return statearr_30877;
})();
var statearr_30880_33645 = state_30853__$1;
(statearr_30880_33645[(2)] = null);

(statearr_30880_33645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (4))){
var inst_30802 = (state_30853[(13)]);
var inst_30798 = (state_30853[(7)]);
var inst_30797 = (state_30853[(2)]);
var inst_30798__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30797,(0),null);
var inst_30799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30797,(1),null);
var inst_30802__$1 = (inst_30798__$1 == null);
var state_30853__$1 = (function (){var statearr_30883 = state_30853;
(statearr_30883[(14)] = inst_30799);

(statearr_30883[(13)] = inst_30802__$1);

(statearr_30883[(7)] = inst_30798__$1);

return statearr_30883;
})();
if(cljs.core.truth_(inst_30802__$1)){
var statearr_30886_33655 = state_30853__$1;
(statearr_30886_33655[(1)] = (5));

} else {
var statearr_30888_33656 = state_30853__$1;
(statearr_30888_33656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (15))){
var inst_30823 = (state_30853[(15)]);
var inst_30788 = (state_30853[(16)]);
var inst_30823__$1 = cljs.core.empty_QMARK_(inst_30788);
var state_30853__$1 = (function (){var statearr_30890 = state_30853;
(statearr_30890[(15)] = inst_30823__$1);

return statearr_30890;
})();
if(inst_30823__$1){
var statearr_30894_33657 = state_30853__$1;
(statearr_30894_33657[(1)] = (17));

} else {
var statearr_30896_33658 = state_30853__$1;
(statearr_30896_33658[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (21))){
var inst_30787 = (state_30853[(12)]);
var inst_30784 = inst_30787;
var state_30853__$1 = (function (){var statearr_30908 = state_30853;
(statearr_30908[(11)] = inst_30784);

return statearr_30908;
})();
var statearr_30909_33662 = state_30853__$1;
(statearr_30909_33662[(2)] = null);

(statearr_30909_33662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (13))){
var inst_30815 = (state_30853[(2)]);
var inst_30816 = calc_state();
var inst_30784 = inst_30816;
var state_30853__$1 = (function (){var statearr_30914 = state_30853;
(statearr_30914[(11)] = inst_30784);

(statearr_30914[(17)] = inst_30815);

return statearr_30914;
})();
var statearr_30916_33664 = state_30853__$1;
(statearr_30916_33664[(2)] = null);

(statearr_30916_33664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (22))){
var inst_30846 = (state_30853[(2)]);
var state_30853__$1 = state_30853;
var statearr_30924_33665 = state_30853__$1;
(statearr_30924_33665[(2)] = inst_30846);

(statearr_30924_33665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (6))){
var inst_30799 = (state_30853[(14)]);
var inst_30806 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30799,change);
var state_30853__$1 = state_30853;
var statearr_30926_33666 = state_30853__$1;
(statearr_30926_33666[(2)] = inst_30806);

(statearr_30926_33666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (25))){
var state_30853__$1 = state_30853;
var statearr_30930_33667 = state_30853__$1;
(statearr_30930_33667[(2)] = null);

(statearr_30930_33667[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (17))){
var inst_30799 = (state_30853[(14)]);
var inst_30789 = (state_30853[(18)]);
var inst_30827 = (inst_30789.cljs$core$IFn$_invoke$arity$1 ? inst_30789.cljs$core$IFn$_invoke$arity$1(inst_30799) : inst_30789.call(null,inst_30799));
var inst_30828 = cljs.core.not(inst_30827);
var state_30853__$1 = state_30853;
var statearr_30932_33671 = state_30853__$1;
(statearr_30932_33671[(2)] = inst_30828);

(statearr_30932_33671[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (3))){
var inst_30850 = (state_30853[(2)]);
var state_30853__$1 = state_30853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30853__$1,inst_30850);
} else {
if((state_val_30854 === (12))){
var state_30853__$1 = state_30853;
var statearr_30937_33679 = state_30853__$1;
(statearr_30937_33679[(2)] = null);

(statearr_30937_33679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (2))){
var inst_30787 = (state_30853[(12)]);
var inst_30784 = (state_30853[(11)]);
var inst_30787__$1 = cljs.core.__destructure_map(inst_30784);
var inst_30788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30787__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30787__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30787__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30853__$1 = (function (){var statearr_30942 = state_30853;
(statearr_30942[(12)] = inst_30787__$1);

(statearr_30942[(18)] = inst_30789);

(statearr_30942[(16)] = inst_30788);

return statearr_30942;
})();
return cljs.core.async.ioc_alts_BANG_(state_30853__$1,(4),inst_30791);
} else {
if((state_val_30854 === (23))){
var inst_30836 = (state_30853[(2)]);
var state_30853__$1 = state_30853;
if(cljs.core.truth_(inst_30836)){
var statearr_30948_33687 = state_30853__$1;
(statearr_30948_33687[(1)] = (24));

} else {
var statearr_30949_33688 = state_30853__$1;
(statearr_30949_33688[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (19))){
var inst_30831 = (state_30853[(2)]);
var state_30853__$1 = state_30853;
var statearr_30955_33689 = state_30853__$1;
(statearr_30955_33689[(2)] = inst_30831);

(statearr_30955_33689[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (11))){
var inst_30799 = (state_30853[(14)]);
var inst_30812 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30799);
var state_30853__$1 = state_30853;
var statearr_30964_33690 = state_30853__$1;
(statearr_30964_33690[(2)] = inst_30812);

(statearr_30964_33690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (9))){
var inst_30799 = (state_30853[(14)]);
var inst_30788 = (state_30853[(16)]);
var inst_30820 = (state_30853[(19)]);
var inst_30820__$1 = (inst_30788.cljs$core$IFn$_invoke$arity$1 ? inst_30788.cljs$core$IFn$_invoke$arity$1(inst_30799) : inst_30788.call(null,inst_30799));
var state_30853__$1 = (function (){var statearr_30970 = state_30853;
(statearr_30970[(19)] = inst_30820__$1);

return statearr_30970;
})();
if(cljs.core.truth_(inst_30820__$1)){
var statearr_30974_33692 = state_30853__$1;
(statearr_30974_33692[(1)] = (14));

} else {
var statearr_30977_33693 = state_30853__$1;
(statearr_30977_33693[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (5))){
var inst_30802 = (state_30853[(13)]);
var state_30853__$1 = state_30853;
var statearr_30980_33694 = state_30853__$1;
(statearr_30980_33694[(2)] = inst_30802);

(statearr_30980_33694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (14))){
var inst_30820 = (state_30853[(19)]);
var state_30853__$1 = state_30853;
var statearr_30985_33697 = state_30853__$1;
(statearr_30985_33697[(2)] = inst_30820);

(statearr_30985_33697[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (26))){
var inst_30842 = (state_30853[(2)]);
var state_30853__$1 = state_30853;
var statearr_30987_33699 = state_30853__$1;
(statearr_30987_33699[(2)] = inst_30842);

(statearr_30987_33699[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (16))){
var inst_30833 = (state_30853[(2)]);
var state_30853__$1 = state_30853;
if(cljs.core.truth_(inst_30833)){
var statearr_30992_33700 = state_30853__$1;
(statearr_30992_33700[(1)] = (20));

} else {
var statearr_30995_33701 = state_30853__$1;
(statearr_30995_33701[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (10))){
var inst_30848 = (state_30853[(2)]);
var state_30853__$1 = state_30853;
var statearr_30997_33702 = state_30853__$1;
(statearr_30997_33702[(2)] = inst_30848);

(statearr_30997_33702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (18))){
var inst_30823 = (state_30853[(15)]);
var state_30853__$1 = state_30853;
var statearr_30999_33704 = state_30853__$1;
(statearr_30999_33704[(2)] = inst_30823);

(statearr_30999_33704[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (8))){
var inst_30798 = (state_30853[(7)]);
var inst_30810 = (inst_30798 == null);
var state_30853__$1 = state_30853;
if(cljs.core.truth_(inst_30810)){
var statearr_31003_33705 = state_30853__$1;
(statearr_31003_33705[(1)] = (11));

} else {
var statearr_31005_33706 = state_30853__$1;
(statearr_31005_33706[(1)] = (12));

}

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28560__auto__ = null;
var cljs$core$async$mix_$_state_machine__28560__auto____0 = (function (){
var statearr_31010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31010[(0)] = cljs$core$async$mix_$_state_machine__28560__auto__);

(statearr_31010[(1)] = (1));

return statearr_31010;
});
var cljs$core$async$mix_$_state_machine__28560__auto____1 = (function (state_30853){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_30853);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e31014){var ex__28563__auto__ = e31014;
var statearr_31016_33708 = state_30853;
(statearr_31016_33708[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_30853[(4)]))){
var statearr_31019_33709 = state_30853;
(statearr_31019_33709[(1)] = cljs.core.first((state_30853[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33710 = state_30853;
state_30853 = G__33710;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28560__auto__ = function(state_30853){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28560__auto____1.call(this,state_30853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28560__auto____0;
cljs$core$async$mix_$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28560__auto____1;
return cljs$core$async$mix_$_state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_31028 = f__28879__auto__();
(statearr_31028[(6)] = c__28878__auto___33627);

return statearr_31028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33713 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33713(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33716 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33716(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33718 = (function() {
var G__33719 = null;
var G__33719__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33719__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33719 = function(p,v){
switch(arguments.length){
case 1:
return G__33719__1.call(this,p);
case 2:
return G__33719__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33719.cljs$core$IFn$_invoke$arity$1 = G__33719__1;
G__33719.cljs$core$IFn$_invoke$arity$2 = G__33719__2;
return G__33719;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31076 = arguments.length;
switch (G__31076) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33718(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33718(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31100 = arguments.length;
switch (G__31100) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31090_SHARP_){
if(cljs.core.truth_((p1__31090_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31090_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31090_SHARP_.call(null,topic)))){
return p1__31090_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31090_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31113 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31114){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31114 = meta31114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31115,meta31114__$1){
var self__ = this;
var _31115__$1 = this;
return (new cljs.core.async.t_cljs$core$async31113(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31114__$1));
}));

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31115){
var self__ = this;
var _31115__$1 = this;
return self__.meta31114;
}));

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31114","meta31114",802595479,null)], null);
}));

(cljs.core.async.t_cljs$core$async31113.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31113");

(cljs.core.async.t_cljs$core$async31113.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31113");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31113.
 */
cljs.core.async.__GT_t_cljs$core$async31113 = (function cljs$core$async$__GT_t_cljs$core$async31113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31114){
return (new cljs.core.async.t_cljs$core$async31113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31114));
});

}

return (new cljs.core.async.t_cljs$core$async31113(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28878__auto___33745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_31230){
var state_val_31231 = (state_31230[(1)]);
if((state_val_31231 === (7))){
var inst_31223 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31236_33746 = state_31230__$1;
(statearr_31236_33746[(2)] = inst_31223);

(statearr_31236_33746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (20))){
var state_31230__$1 = state_31230;
var statearr_31238_33747 = state_31230__$1;
(statearr_31238_33747[(2)] = null);

(statearr_31238_33747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (1))){
var state_31230__$1 = state_31230;
var statearr_31244_33748 = state_31230__$1;
(statearr_31244_33748[(2)] = null);

(statearr_31244_33748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (24))){
var inst_31206 = (state_31230[(7)]);
var inst_31215 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31206);
var state_31230__$1 = state_31230;
var statearr_31245_33753 = state_31230__$1;
(statearr_31245_33753[(2)] = inst_31215);

(statearr_31245_33753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (4))){
var inst_31143 = (state_31230[(8)]);
var inst_31143__$1 = (state_31230[(2)]);
var inst_31144 = (inst_31143__$1 == null);
var state_31230__$1 = (function (){var statearr_31246 = state_31230;
(statearr_31246[(8)] = inst_31143__$1);

return statearr_31246;
})();
if(cljs.core.truth_(inst_31144)){
var statearr_31247_33754 = state_31230__$1;
(statearr_31247_33754[(1)] = (5));

} else {
var statearr_31249_33755 = state_31230__$1;
(statearr_31249_33755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (15))){
var inst_31200 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31250_33756 = state_31230__$1;
(statearr_31250_33756[(2)] = inst_31200);

(statearr_31250_33756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (21))){
var inst_31220 = (state_31230[(2)]);
var state_31230__$1 = (function (){var statearr_31255 = state_31230;
(statearr_31255[(9)] = inst_31220);

return statearr_31255;
})();
var statearr_31256_33757 = state_31230__$1;
(statearr_31256_33757[(2)] = null);

(statearr_31256_33757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (13))){
var inst_31178 = (state_31230[(10)]);
var inst_31180 = cljs.core.chunked_seq_QMARK_(inst_31178);
var state_31230__$1 = state_31230;
if(inst_31180){
var statearr_31257_33758 = state_31230__$1;
(statearr_31257_33758[(1)] = (16));

} else {
var statearr_31262_33760 = state_31230__$1;
(statearr_31262_33760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (22))){
var inst_31212 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31212)){
var statearr_31274_33761 = state_31230__$1;
(statearr_31274_33761[(1)] = (23));

} else {
var statearr_31280_33762 = state_31230__$1;
(statearr_31280_33762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (6))){
var inst_31208 = (state_31230[(11)]);
var inst_31143 = (state_31230[(8)]);
var inst_31206 = (state_31230[(7)]);
var inst_31206__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31143) : topic_fn.call(null,inst_31143));
var inst_31207 = cljs.core.deref(mults);
var inst_31208__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31207,inst_31206__$1);
var state_31230__$1 = (function (){var statearr_31287 = state_31230;
(statearr_31287[(11)] = inst_31208__$1);

(statearr_31287[(7)] = inst_31206__$1);

return statearr_31287;
})();
if(cljs.core.truth_(inst_31208__$1)){
var statearr_31291_33763 = state_31230__$1;
(statearr_31291_33763[(1)] = (19));

} else {
var statearr_31295_33765 = state_31230__$1;
(statearr_31295_33765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (25))){
var inst_31217 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31296_33766 = state_31230__$1;
(statearr_31296_33766[(2)] = inst_31217);

(statearr_31296_33766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (17))){
var inst_31178 = (state_31230[(10)]);
var inst_31190 = cljs.core.first(inst_31178);
var inst_31191 = cljs.core.async.muxch_STAR_(inst_31190);
var inst_31192 = cljs.core.async.close_BANG_(inst_31191);
var inst_31194 = cljs.core.next(inst_31178);
var inst_31159 = inst_31194;
var inst_31160 = null;
var inst_31161 = (0);
var inst_31162 = (0);
var state_31230__$1 = (function (){var statearr_31305 = state_31230;
(statearr_31305[(12)] = inst_31162);

(statearr_31305[(13)] = inst_31159);

(statearr_31305[(14)] = inst_31160);

(statearr_31305[(15)] = inst_31192);

(statearr_31305[(16)] = inst_31161);

return statearr_31305;
})();
var statearr_31306_33769 = state_31230__$1;
(statearr_31306_33769[(2)] = null);

(statearr_31306_33769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (3))){
var inst_31225 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31230__$1,inst_31225);
} else {
if((state_val_31231 === (12))){
var inst_31202 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31308_33770 = state_31230__$1;
(statearr_31308_33770[(2)] = inst_31202);

(statearr_31308_33770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (2))){
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31230__$1,(4),ch);
} else {
if((state_val_31231 === (23))){
var state_31230__$1 = state_31230;
var statearr_31316_33771 = state_31230__$1;
(statearr_31316_33771[(2)] = null);

(statearr_31316_33771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (19))){
var inst_31208 = (state_31230[(11)]);
var inst_31143 = (state_31230[(8)]);
var inst_31210 = cljs.core.async.muxch_STAR_(inst_31208);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31230__$1,(22),inst_31210,inst_31143);
} else {
if((state_val_31231 === (11))){
var inst_31159 = (state_31230[(13)]);
var inst_31178 = (state_31230[(10)]);
var inst_31178__$1 = cljs.core.seq(inst_31159);
var state_31230__$1 = (function (){var statearr_31324 = state_31230;
(statearr_31324[(10)] = inst_31178__$1);

return statearr_31324;
})();
if(inst_31178__$1){
var statearr_31325_33780 = state_31230__$1;
(statearr_31325_33780[(1)] = (13));

} else {
var statearr_31326_33781 = state_31230__$1;
(statearr_31326_33781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (9))){
var inst_31204 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31327_33782 = state_31230__$1;
(statearr_31327_33782[(2)] = inst_31204);

(statearr_31327_33782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (5))){
var inst_31155 = cljs.core.deref(mults);
var inst_31156 = cljs.core.vals(inst_31155);
var inst_31158 = cljs.core.seq(inst_31156);
var inst_31159 = inst_31158;
var inst_31160 = null;
var inst_31161 = (0);
var inst_31162 = (0);
var state_31230__$1 = (function (){var statearr_31332 = state_31230;
(statearr_31332[(12)] = inst_31162);

(statearr_31332[(13)] = inst_31159);

(statearr_31332[(14)] = inst_31160);

(statearr_31332[(16)] = inst_31161);

return statearr_31332;
})();
var statearr_31333_33784 = state_31230__$1;
(statearr_31333_33784[(2)] = null);

(statearr_31333_33784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (14))){
var state_31230__$1 = state_31230;
var statearr_31337_33786 = state_31230__$1;
(statearr_31337_33786[(2)] = null);

(statearr_31337_33786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (16))){
var inst_31178 = (state_31230[(10)]);
var inst_31182 = cljs.core.chunk_first(inst_31178);
var inst_31183 = cljs.core.chunk_rest(inst_31178);
var inst_31184 = cljs.core.count(inst_31182);
var inst_31159 = inst_31183;
var inst_31160 = inst_31182;
var inst_31161 = inst_31184;
var inst_31162 = (0);
var state_31230__$1 = (function (){var statearr_31340 = state_31230;
(statearr_31340[(12)] = inst_31162);

(statearr_31340[(13)] = inst_31159);

(statearr_31340[(14)] = inst_31160);

(statearr_31340[(16)] = inst_31161);

return statearr_31340;
})();
var statearr_31342_33795 = state_31230__$1;
(statearr_31342_33795[(2)] = null);

(statearr_31342_33795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (10))){
var inst_31162 = (state_31230[(12)]);
var inst_31159 = (state_31230[(13)]);
var inst_31160 = (state_31230[(14)]);
var inst_31161 = (state_31230[(16)]);
var inst_31172 = cljs.core._nth(inst_31160,inst_31162);
var inst_31173 = cljs.core.async.muxch_STAR_(inst_31172);
var inst_31174 = cljs.core.async.close_BANG_(inst_31173);
var inst_31175 = (inst_31162 + (1));
var tmp31334 = inst_31159;
var tmp31335 = inst_31160;
var tmp31336 = inst_31161;
var inst_31159__$1 = tmp31334;
var inst_31160__$1 = tmp31335;
var inst_31161__$1 = tmp31336;
var inst_31162__$1 = inst_31175;
var state_31230__$1 = (function (){var statearr_31347 = state_31230;
(statearr_31347[(12)] = inst_31162__$1);

(statearr_31347[(13)] = inst_31159__$1);

(statearr_31347[(14)] = inst_31160__$1);

(statearr_31347[(17)] = inst_31174);

(statearr_31347[(16)] = inst_31161__$1);

return statearr_31347;
})();
var statearr_31348_33805 = state_31230__$1;
(statearr_31348_33805[(2)] = null);

(statearr_31348_33805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (18))){
var inst_31197 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31349_33809 = state_31230__$1;
(statearr_31349_33809[(2)] = inst_31197);

(statearr_31349_33809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (8))){
var inst_31162 = (state_31230[(12)]);
var inst_31161 = (state_31230[(16)]);
var inst_31167 = (inst_31162 < inst_31161);
var inst_31168 = inst_31167;
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31168)){
var statearr_31355_33811 = state_31230__$1;
(statearr_31355_33811[(1)] = (10));

} else {
var statearr_31357_33813 = state_31230__$1;
(statearr_31357_33813[(1)] = (11));

}

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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28560__auto__ = null;
var cljs$core$async$state_machine__28560__auto____0 = (function (){
var statearr_31364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31364[(0)] = cljs$core$async$state_machine__28560__auto__);

(statearr_31364[(1)] = (1));

return statearr_31364;
});
var cljs$core$async$state_machine__28560__auto____1 = (function (state_31230){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_31230);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e31369){var ex__28563__auto__ = e31369;
var statearr_31371_33817 = state_31230;
(statearr_31371_33817[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_31230[(4)]))){
var statearr_31373_33818 = state_31230;
(statearr_31373_33818[(1)] = cljs.core.first((state_31230[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33819 = state_31230;
state_31230 = G__33819;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$state_machine__28560__auto__ = function(state_31230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28560__auto____1.call(this,state_31230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28560__auto____0;
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28560__auto____1;
return cljs$core$async$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_31374 = f__28879__auto__();
(statearr_31374[(6)] = c__28878__auto___33745);

return statearr_31374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31376 = arguments.length;
switch (G__31376) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31386 = arguments.length;
switch (G__31386) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31395 = arguments.length;
switch (G__31395) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28878__auto___33827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_31455){
var state_val_31456 = (state_31455[(1)]);
if((state_val_31456 === (7))){
var state_31455__$1 = state_31455;
var statearr_31459_33828 = state_31455__$1;
(statearr_31459_33828[(2)] = null);

(statearr_31459_33828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (1))){
var state_31455__$1 = state_31455;
var statearr_31462_33829 = state_31455__$1;
(statearr_31462_33829[(2)] = null);

(statearr_31462_33829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (4))){
var inst_31416 = (state_31455[(7)]);
var inst_31415 = (state_31455[(8)]);
var inst_31418 = (inst_31416 < inst_31415);
var state_31455__$1 = state_31455;
if(cljs.core.truth_(inst_31418)){
var statearr_31465_33830 = state_31455__$1;
(statearr_31465_33830[(1)] = (6));

} else {
var statearr_31467_33831 = state_31455__$1;
(statearr_31467_33831[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (15))){
var inst_31441 = (state_31455[(9)]);
var inst_31446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31441);
var state_31455__$1 = state_31455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31455__$1,(17),out,inst_31446);
} else {
if((state_val_31456 === (13))){
var inst_31441 = (state_31455[(9)]);
var inst_31441__$1 = (state_31455[(2)]);
var inst_31442 = cljs.core.some(cljs.core.nil_QMARK_,inst_31441__$1);
var state_31455__$1 = (function (){var statearr_31468 = state_31455;
(statearr_31468[(9)] = inst_31441__$1);

return statearr_31468;
})();
if(cljs.core.truth_(inst_31442)){
var statearr_31469_33832 = state_31455__$1;
(statearr_31469_33832[(1)] = (14));

} else {
var statearr_31470_33833 = state_31455__$1;
(statearr_31470_33833[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (6))){
var state_31455__$1 = state_31455;
var statearr_31473_33834 = state_31455__$1;
(statearr_31473_33834[(2)] = null);

(statearr_31473_33834[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (17))){
var inst_31448 = (state_31455[(2)]);
var state_31455__$1 = (function (){var statearr_31486 = state_31455;
(statearr_31486[(10)] = inst_31448);

return statearr_31486;
})();
var statearr_31488_33835 = state_31455__$1;
(statearr_31488_33835[(2)] = null);

(statearr_31488_33835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (3))){
var inst_31453 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31455__$1,inst_31453);
} else {
if((state_val_31456 === (12))){
var _ = (function (){var statearr_31499 = state_31455;
(statearr_31499[(4)] = cljs.core.rest((state_31455[(4)])));

return statearr_31499;
})();
var state_31455__$1 = state_31455;
var ex31482 = (state_31455__$1[(2)]);
var statearr_31501_33836 = state_31455__$1;
(statearr_31501_33836[(5)] = ex31482);


if((ex31482 instanceof Object)){
var statearr_31507_33837 = state_31455__$1;
(statearr_31507_33837[(1)] = (11));

(statearr_31507_33837[(5)] = null);

} else {
throw ex31482;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (2))){
var inst_31414 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31415 = cnt;
var inst_31416 = (0);
var state_31455__$1 = (function (){var statearr_31515 = state_31455;
(statearr_31515[(11)] = inst_31414);

(statearr_31515[(7)] = inst_31416);

(statearr_31515[(8)] = inst_31415);

return statearr_31515;
})();
var statearr_31519_33838 = state_31455__$1;
(statearr_31519_33838[(2)] = null);

(statearr_31519_33838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (11))){
var inst_31420 = (state_31455[(2)]);
var inst_31421 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31455__$1 = (function (){var statearr_31523 = state_31455;
(statearr_31523[(12)] = inst_31420);

return statearr_31523;
})();
var statearr_31526_33839 = state_31455__$1;
(statearr_31526_33839[(2)] = inst_31421);

(statearr_31526_33839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (9))){
var inst_31416 = (state_31455[(7)]);
var _ = (function (){var statearr_31530 = state_31455;
(statearr_31530[(4)] = cljs.core.cons((12),(state_31455[(4)])));

return statearr_31530;
})();
var inst_31427 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31416) : chs__$1.call(null,inst_31416));
var inst_31428 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31416) : done.call(null,inst_31416));
var inst_31429 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31427,inst_31428);
var ___$1 = (function (){var statearr_31532 = state_31455;
(statearr_31532[(4)] = cljs.core.rest((state_31455[(4)])));

return statearr_31532;
})();
var state_31455__$1 = state_31455;
var statearr_31538_33840 = state_31455__$1;
(statearr_31538_33840[(2)] = inst_31429);

(statearr_31538_33840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (5))){
var inst_31439 = (state_31455[(2)]);
var state_31455__$1 = (function (){var statearr_31539 = state_31455;
(statearr_31539[(13)] = inst_31439);

return statearr_31539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31455__$1,(13),dchan);
} else {
if((state_val_31456 === (14))){
var inst_31444 = cljs.core.async.close_BANG_(out);
var state_31455__$1 = state_31455;
var statearr_31545_33841 = state_31455__$1;
(statearr_31545_33841[(2)] = inst_31444);

(statearr_31545_33841[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (16))){
var inst_31451 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
var statearr_31549_33842 = state_31455__$1;
(statearr_31549_33842[(2)] = inst_31451);

(statearr_31549_33842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (10))){
var inst_31416 = (state_31455[(7)]);
var inst_31432 = (state_31455[(2)]);
var inst_31433 = (inst_31416 + (1));
var inst_31416__$1 = inst_31433;
var state_31455__$1 = (function (){var statearr_31550 = state_31455;
(statearr_31550[(7)] = inst_31416__$1);

(statearr_31550[(14)] = inst_31432);

return statearr_31550;
})();
var statearr_31552_33843 = state_31455__$1;
(statearr_31552_33843[(2)] = null);

(statearr_31552_33843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (8))){
var inst_31437 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
var statearr_31555_33844 = state_31455__$1;
(statearr_31555_33844[(2)] = inst_31437);

(statearr_31555_33844[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__28560__auto__ = null;
var cljs$core$async$state_machine__28560__auto____0 = (function (){
var statearr_31558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31558[(0)] = cljs$core$async$state_machine__28560__auto__);

(statearr_31558[(1)] = (1));

return statearr_31558;
});
var cljs$core$async$state_machine__28560__auto____1 = (function (state_31455){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_31455);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e31560){var ex__28563__auto__ = e31560;
var statearr_31564_33845 = state_31455;
(statearr_31564_33845[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_31455[(4)]))){
var statearr_31565_33846 = state_31455;
(statearr_31565_33846[(1)] = cljs.core.first((state_31455[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33847 = state_31455;
state_31455 = G__33847;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$state_machine__28560__auto__ = function(state_31455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28560__auto____1.call(this,state_31455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28560__auto____0;
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28560__auto____1;
return cljs$core$async$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_31567 = f__28879__auto__();
(statearr_31567[(6)] = c__28878__auto___33827);

return statearr_31567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31577 = arguments.length;
switch (G__31577) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28878__auto___33853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_31633){
var state_val_31634 = (state_31633[(1)]);
if((state_val_31634 === (7))){
var inst_31601 = (state_31633[(7)]);
var inst_31602 = (state_31633[(8)]);
var inst_31601__$1 = (state_31633[(2)]);
var inst_31602__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31601__$1,(0),null);
var inst_31603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31601__$1,(1),null);
var inst_31604 = (inst_31602__$1 == null);
var state_31633__$1 = (function (){var statearr_31640 = state_31633;
(statearr_31640[(7)] = inst_31601__$1);

(statearr_31640[(8)] = inst_31602__$1);

(statearr_31640[(9)] = inst_31603);

return statearr_31640;
})();
if(cljs.core.truth_(inst_31604)){
var statearr_31648_33854 = state_31633__$1;
(statearr_31648_33854[(1)] = (8));

} else {
var statearr_31651_33855 = state_31633__$1;
(statearr_31651_33855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (1))){
var inst_31589 = cljs.core.vec(chs);
var inst_31590 = inst_31589;
var state_31633__$1 = (function (){var statearr_31654 = state_31633;
(statearr_31654[(10)] = inst_31590);

return statearr_31654;
})();
var statearr_31655_33856 = state_31633__$1;
(statearr_31655_33856[(2)] = null);

(statearr_31655_33856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (4))){
var inst_31590 = (state_31633[(10)]);
var state_31633__$1 = state_31633;
return cljs.core.async.ioc_alts_BANG_(state_31633__$1,(7),inst_31590);
} else {
if((state_val_31634 === (6))){
var inst_31625 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31659_33857 = state_31633__$1;
(statearr_31659_33857[(2)] = inst_31625);

(statearr_31659_33857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (3))){
var inst_31628 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31633__$1,inst_31628);
} else {
if((state_val_31634 === (2))){
var inst_31590 = (state_31633[(10)]);
var inst_31593 = cljs.core.count(inst_31590);
var inst_31594 = (inst_31593 > (0));
var state_31633__$1 = state_31633;
if(cljs.core.truth_(inst_31594)){
var statearr_31665_33862 = state_31633__$1;
(statearr_31665_33862[(1)] = (4));

} else {
var statearr_31670_33863 = state_31633__$1;
(statearr_31670_33863[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (11))){
var inst_31590 = (state_31633[(10)]);
var inst_31618 = (state_31633[(2)]);
var tmp31660 = inst_31590;
var inst_31590__$1 = tmp31660;
var state_31633__$1 = (function (){var statearr_31671 = state_31633;
(statearr_31671[(10)] = inst_31590__$1);

(statearr_31671[(11)] = inst_31618);

return statearr_31671;
})();
var statearr_31676_33864 = state_31633__$1;
(statearr_31676_33864[(2)] = null);

(statearr_31676_33864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (9))){
var inst_31602 = (state_31633[(8)]);
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31633__$1,(11),out,inst_31602);
} else {
if((state_val_31634 === (5))){
var inst_31623 = cljs.core.async.close_BANG_(out);
var state_31633__$1 = state_31633;
var statearr_31678_33866 = state_31633__$1;
(statearr_31678_33866[(2)] = inst_31623);

(statearr_31678_33866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (10))){
var inst_31621 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31679_33867 = state_31633__$1;
(statearr_31679_33867[(2)] = inst_31621);

(statearr_31679_33867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (8))){
var inst_31590 = (state_31633[(10)]);
var inst_31601 = (state_31633[(7)]);
var inst_31602 = (state_31633[(8)]);
var inst_31603 = (state_31633[(9)]);
var inst_31612 = (function (){var cs = inst_31590;
var vec__31597 = inst_31601;
var v = inst_31602;
var c = inst_31603;
return (function (p1__31569_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31569_SHARP_);
});
})();
var inst_31614 = cljs.core.filterv(inst_31612,inst_31590);
var inst_31590__$1 = inst_31614;
var state_31633__$1 = (function (){var statearr_31680 = state_31633;
(statearr_31680[(10)] = inst_31590__$1);

return statearr_31680;
})();
var statearr_31683_33868 = state_31633__$1;
(statearr_31683_33868[(2)] = null);

(statearr_31683_33868[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28560__auto__ = null;
var cljs$core$async$state_machine__28560__auto____0 = (function (){
var statearr_31684 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31684[(0)] = cljs$core$async$state_machine__28560__auto__);

(statearr_31684[(1)] = (1));

return statearr_31684;
});
var cljs$core$async$state_machine__28560__auto____1 = (function (state_31633){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_31633);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e31694){var ex__28563__auto__ = e31694;
var statearr_31701_33873 = state_31633;
(statearr_31701_33873[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_31633[(4)]))){
var statearr_31710_33874 = state_31633;
(statearr_31710_33874[(1)] = cljs.core.first((state_31633[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33876 = state_31633;
state_31633 = G__33876;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$state_machine__28560__auto__ = function(state_31633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28560__auto____1.call(this,state_31633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28560__auto____0;
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28560__auto____1;
return cljs$core$async$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_31716 = f__28879__auto__();
(statearr_31716[(6)] = c__28878__auto___33853);

return statearr_31716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31753 = arguments.length;
switch (G__31753) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28878__auto___33885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_31788){
var state_val_31789 = (state_31788[(1)]);
if((state_val_31789 === (7))){
var inst_31765 = (state_31788[(7)]);
var inst_31765__$1 = (state_31788[(2)]);
var inst_31766 = (inst_31765__$1 == null);
var inst_31767 = cljs.core.not(inst_31766);
var state_31788__$1 = (function (){var statearr_31797 = state_31788;
(statearr_31797[(7)] = inst_31765__$1);

return statearr_31797;
})();
if(inst_31767){
var statearr_31799_33886 = state_31788__$1;
(statearr_31799_33886[(1)] = (8));

} else {
var statearr_31801_33887 = state_31788__$1;
(statearr_31801_33887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (1))){
var inst_31759 = (0);
var state_31788__$1 = (function (){var statearr_31803 = state_31788;
(statearr_31803[(8)] = inst_31759);

return statearr_31803;
})();
var statearr_31807_33888 = state_31788__$1;
(statearr_31807_33888[(2)] = null);

(statearr_31807_33888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (4))){
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31788__$1,(7),ch);
} else {
if((state_val_31789 === (6))){
var inst_31779 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31808_33889 = state_31788__$1;
(statearr_31808_33889[(2)] = inst_31779);

(statearr_31808_33889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (3))){
var inst_31781 = (state_31788[(2)]);
var inst_31782 = cljs.core.async.close_BANG_(out);
var state_31788__$1 = (function (){var statearr_31813 = state_31788;
(statearr_31813[(9)] = inst_31781);

return statearr_31813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31788__$1,inst_31782);
} else {
if((state_val_31789 === (2))){
var inst_31759 = (state_31788[(8)]);
var inst_31761 = (inst_31759 < n);
var state_31788__$1 = state_31788;
if(cljs.core.truth_(inst_31761)){
var statearr_31817_33890 = state_31788__$1;
(statearr_31817_33890[(1)] = (4));

} else {
var statearr_31818_33891 = state_31788__$1;
(statearr_31818_33891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (11))){
var inst_31759 = (state_31788[(8)]);
var inst_31771 = (state_31788[(2)]);
var inst_31772 = (inst_31759 + (1));
var inst_31759__$1 = inst_31772;
var state_31788__$1 = (function (){var statearr_31825 = state_31788;
(statearr_31825[(8)] = inst_31759__$1);

(statearr_31825[(10)] = inst_31771);

return statearr_31825;
})();
var statearr_31826_33892 = state_31788__$1;
(statearr_31826_33892[(2)] = null);

(statearr_31826_33892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (9))){
var state_31788__$1 = state_31788;
var statearr_31828_33893 = state_31788__$1;
(statearr_31828_33893[(2)] = null);

(statearr_31828_33893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (5))){
var state_31788__$1 = state_31788;
var statearr_31829_33894 = state_31788__$1;
(statearr_31829_33894[(2)] = null);

(statearr_31829_33894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (10))){
var inst_31776 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31832_33895 = state_31788__$1;
(statearr_31832_33895[(2)] = inst_31776);

(statearr_31832_33895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (8))){
var inst_31765 = (state_31788[(7)]);
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31788__$1,(11),out,inst_31765);
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
});
return (function() {
var cljs$core$async$state_machine__28560__auto__ = null;
var cljs$core$async$state_machine__28560__auto____0 = (function (){
var statearr_31846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31846[(0)] = cljs$core$async$state_machine__28560__auto__);

(statearr_31846[(1)] = (1));

return statearr_31846;
});
var cljs$core$async$state_machine__28560__auto____1 = (function (state_31788){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_31788);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e31856){var ex__28563__auto__ = e31856;
var statearr_31857_33896 = state_31788;
(statearr_31857_33896[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_31788[(4)]))){
var statearr_31858_33897 = state_31788;
(statearr_31858_33897[(1)] = cljs.core.first((state_31788[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33898 = state_31788;
state_31788 = G__33898;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$state_machine__28560__auto__ = function(state_31788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28560__auto____1.call(this,state_31788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28560__auto____0;
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28560__auto____1;
return cljs$core$async$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_31859 = f__28879__auto__();
(statearr_31859[(6)] = c__28878__auto___33885);

return statearr_31859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31865 = (function (f,ch,meta31866){
this.f = f;
this.ch = ch;
this.meta31866 = meta31866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31867,meta31866__$1){
var self__ = this;
var _31867__$1 = this;
return (new cljs.core.async.t_cljs$core$async31865(self__.f,self__.ch,meta31866__$1));
}));

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31867){
var self__ = this;
var _31867__$1 = this;
return self__.meta31866;
}));

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31870 = (function (f,ch,meta31866,_,fn1,meta31871){
this.f = f;
this.ch = ch;
this.meta31866 = meta31866;
this._ = _;
this.fn1 = fn1;
this.meta31871 = meta31871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31872,meta31871__$1){
var self__ = this;
var _31872__$1 = this;
return (new cljs.core.async.t_cljs$core$async31870(self__.f,self__.ch,self__.meta31866,self__._,self__.fn1,meta31871__$1));
}));

(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31872){
var self__ = this;
var _31872__$1 = this;
return self__.meta31871;
}));

(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31861_SHARP_){
var G__31894 = (((p1__31861_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31861_SHARP_) : self__.f.call(null,p1__31861_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31894) : f1.call(null,G__31894));
});
}));

(cljs.core.async.t_cljs$core$async31870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31866","meta31866",85403450,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31865","cljs.core.async/t_cljs$core$async31865",-194169821,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31871","meta31871",1381261493,null)], null);
}));

(cljs.core.async.t_cljs$core$async31870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31870");

(cljs.core.async.t_cljs$core$async31870.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31870.
 */
cljs.core.async.__GT_t_cljs$core$async31870 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31870(f__$1,ch__$1,meta31866__$1,___$2,fn1__$1,meta31871){
return (new cljs.core.async.t_cljs$core$async31870(f__$1,ch__$1,meta31866__$1,___$2,fn1__$1,meta31871));
});

}

return (new cljs.core.async.t_cljs$core$async31870(self__.f,self__.ch,self__.meta31866,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31895 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31895) : self__.f.call(null,G__31895));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31866","meta31866",85403450,null)], null);
}));

(cljs.core.async.t_cljs$core$async31865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31865");

(cljs.core.async.t_cljs$core$async31865.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31865.
 */
cljs.core.async.__GT_t_cljs$core$async31865 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31865(f__$1,ch__$1,meta31866){
return (new cljs.core.async.t_cljs$core$async31865(f__$1,ch__$1,meta31866));
});

}

return (new cljs.core.async.t_cljs$core$async31865(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31905 = (function (f,ch,meta31906){
this.f = f;
this.ch = ch;
this.meta31906 = meta31906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31907,meta31906__$1){
var self__ = this;
var _31907__$1 = this;
return (new cljs.core.async.t_cljs$core$async31905(self__.f,self__.ch,meta31906__$1));
}));

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31907){
var self__ = this;
var _31907__$1 = this;
return self__.meta31906;
}));

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31906","meta31906",-1876277531,null)], null);
}));

(cljs.core.async.t_cljs$core$async31905.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31905");

(cljs.core.async.t_cljs$core$async31905.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31905");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31905.
 */
cljs.core.async.__GT_t_cljs$core$async31905 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31905(f__$1,ch__$1,meta31906){
return (new cljs.core.async.t_cljs$core$async31905(f__$1,ch__$1,meta31906));
});

}

return (new cljs.core.async.t_cljs$core$async31905(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31938 = (function (p,ch,meta31939){
this.p = p;
this.ch = ch;
this.meta31939 = meta31939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31940,meta31939__$1){
var self__ = this;
var _31940__$1 = this;
return (new cljs.core.async.t_cljs$core$async31938(self__.p,self__.ch,meta31939__$1));
}));

(cljs.core.async.t_cljs$core$async31938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31940){
var self__ = this;
var _31940__$1 = this;
return self__.meta31939;
}));

(cljs.core.async.t_cljs$core$async31938.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31938.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31938.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31938.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31939","meta31939",1230425474,null)], null);
}));

(cljs.core.async.t_cljs$core$async31938.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31938");

(cljs.core.async.t_cljs$core$async31938.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31938");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31938.
 */
cljs.core.async.__GT_t_cljs$core$async31938 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31938(p__$1,ch__$1,meta31939){
return (new cljs.core.async.t_cljs$core$async31938(p__$1,ch__$1,meta31939));
});

}

return (new cljs.core.async.t_cljs$core$async31938(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31958 = arguments.length;
switch (G__31958) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28878__auto___33909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_31984){
var state_val_31985 = (state_31984[(1)]);
if((state_val_31985 === (7))){
var inst_31980 = (state_31984[(2)]);
var state_31984__$1 = state_31984;
var statearr_31986_33910 = state_31984__$1;
(statearr_31986_33910[(2)] = inst_31980);

(statearr_31986_33910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (1))){
var state_31984__$1 = state_31984;
var statearr_31987_33911 = state_31984__$1;
(statearr_31987_33911[(2)] = null);

(statearr_31987_33911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (4))){
var inst_31966 = (state_31984[(7)]);
var inst_31966__$1 = (state_31984[(2)]);
var inst_31967 = (inst_31966__$1 == null);
var state_31984__$1 = (function (){var statearr_31988 = state_31984;
(statearr_31988[(7)] = inst_31966__$1);

return statearr_31988;
})();
if(cljs.core.truth_(inst_31967)){
var statearr_31989_33912 = state_31984__$1;
(statearr_31989_33912[(1)] = (5));

} else {
var statearr_31990_33913 = state_31984__$1;
(statearr_31990_33913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (6))){
var inst_31966 = (state_31984[(7)]);
var inst_31971 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31966) : p.call(null,inst_31966));
var state_31984__$1 = state_31984;
if(cljs.core.truth_(inst_31971)){
var statearr_31992_33914 = state_31984__$1;
(statearr_31992_33914[(1)] = (8));

} else {
var statearr_31994_33915 = state_31984__$1;
(statearr_31994_33915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (3))){
var inst_31982 = (state_31984[(2)]);
var state_31984__$1 = state_31984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31984__$1,inst_31982);
} else {
if((state_val_31985 === (2))){
var state_31984__$1 = state_31984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31984__$1,(4),ch);
} else {
if((state_val_31985 === (11))){
var inst_31974 = (state_31984[(2)]);
var state_31984__$1 = state_31984;
var statearr_31999_33917 = state_31984__$1;
(statearr_31999_33917[(2)] = inst_31974);

(statearr_31999_33917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (9))){
var state_31984__$1 = state_31984;
var statearr_32000_33918 = state_31984__$1;
(statearr_32000_33918[(2)] = null);

(statearr_32000_33918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (5))){
var inst_31969 = cljs.core.async.close_BANG_(out);
var state_31984__$1 = state_31984;
var statearr_32001_33919 = state_31984__$1;
(statearr_32001_33919[(2)] = inst_31969);

(statearr_32001_33919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (10))){
var inst_31977 = (state_31984[(2)]);
var state_31984__$1 = (function (){var statearr_32002 = state_31984;
(statearr_32002[(8)] = inst_31977);

return statearr_32002;
})();
var statearr_32006_33924 = state_31984__$1;
(statearr_32006_33924[(2)] = null);

(statearr_32006_33924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (8))){
var inst_31966 = (state_31984[(7)]);
var state_31984__$1 = state_31984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31984__$1,(11),out,inst_31966);
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
});
return (function() {
var cljs$core$async$state_machine__28560__auto__ = null;
var cljs$core$async$state_machine__28560__auto____0 = (function (){
var statearr_32007 = [null,null,null,null,null,null,null,null,null];
(statearr_32007[(0)] = cljs$core$async$state_machine__28560__auto__);

(statearr_32007[(1)] = (1));

return statearr_32007;
});
var cljs$core$async$state_machine__28560__auto____1 = (function (state_31984){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_31984);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e32008){var ex__28563__auto__ = e32008;
var statearr_32009_33926 = state_31984;
(statearr_32009_33926[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_31984[(4)]))){
var statearr_32010_33927 = state_31984;
(statearr_32010_33927[(1)] = cljs.core.first((state_31984[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33928 = state_31984;
state_31984 = G__33928;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$state_machine__28560__auto__ = function(state_31984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28560__auto____1.call(this,state_31984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28560__auto____0;
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28560__auto____1;
return cljs$core$async$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_32011 = f__28879__auto__();
(statearr_32011[(6)] = c__28878__auto___33909);

return statearr_32011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32020 = arguments.length;
switch (G__32020) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_32105){
var state_val_32106 = (state_32105[(1)]);
if((state_val_32106 === (7))){
var inst_32101 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32107_33930 = state_32105__$1;
(statearr_32107_33930[(2)] = inst_32101);

(statearr_32107_33930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (20))){
var inst_32066 = (state_32105[(7)]);
var inst_32082 = (state_32105[(2)]);
var inst_32083 = cljs.core.next(inst_32066);
var inst_32042 = inst_32083;
var inst_32043 = null;
var inst_32044 = (0);
var inst_32045 = (0);
var state_32105__$1 = (function (){var statearr_32108 = state_32105;
(statearr_32108[(8)] = inst_32043);

(statearr_32108[(9)] = inst_32082);

(statearr_32108[(10)] = inst_32044);

(statearr_32108[(11)] = inst_32042);

(statearr_32108[(12)] = inst_32045);

return statearr_32108;
})();
var statearr_32109_33933 = state_32105__$1;
(statearr_32109_33933[(2)] = null);

(statearr_32109_33933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (1))){
var state_32105__$1 = state_32105;
var statearr_32110_33934 = state_32105__$1;
(statearr_32110_33934[(2)] = null);

(statearr_32110_33934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (4))){
var inst_32029 = (state_32105[(13)]);
var inst_32029__$1 = (state_32105[(2)]);
var inst_32031 = (inst_32029__$1 == null);
var state_32105__$1 = (function (){var statearr_32111 = state_32105;
(statearr_32111[(13)] = inst_32029__$1);

return statearr_32111;
})();
if(cljs.core.truth_(inst_32031)){
var statearr_32112_33936 = state_32105__$1;
(statearr_32112_33936[(1)] = (5));

} else {
var statearr_32113_33938 = state_32105__$1;
(statearr_32113_33938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (15))){
var state_32105__$1 = state_32105;
var statearr_32119_33943 = state_32105__$1;
(statearr_32119_33943[(2)] = null);

(statearr_32119_33943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (21))){
var state_32105__$1 = state_32105;
var statearr_32120_33945 = state_32105__$1;
(statearr_32120_33945[(2)] = null);

(statearr_32120_33945[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (13))){
var inst_32043 = (state_32105[(8)]);
var inst_32044 = (state_32105[(10)]);
var inst_32042 = (state_32105[(11)]);
var inst_32045 = (state_32105[(12)]);
var inst_32060 = (state_32105[(2)]);
var inst_32062 = (inst_32045 + (1));
var tmp32114 = inst_32043;
var tmp32115 = inst_32044;
var tmp32116 = inst_32042;
var inst_32042__$1 = tmp32116;
var inst_32043__$1 = tmp32114;
var inst_32044__$1 = tmp32115;
var inst_32045__$1 = inst_32062;
var state_32105__$1 = (function (){var statearr_32122 = state_32105;
(statearr_32122[(8)] = inst_32043__$1);

(statearr_32122[(10)] = inst_32044__$1);

(statearr_32122[(11)] = inst_32042__$1);

(statearr_32122[(14)] = inst_32060);

(statearr_32122[(12)] = inst_32045__$1);

return statearr_32122;
})();
var statearr_32123_33946 = state_32105__$1;
(statearr_32123_33946[(2)] = null);

(statearr_32123_33946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (22))){
var state_32105__$1 = state_32105;
var statearr_32124_33947 = state_32105__$1;
(statearr_32124_33947[(2)] = null);

(statearr_32124_33947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (6))){
var inst_32029 = (state_32105[(13)]);
var inst_32040 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32029) : f.call(null,inst_32029));
var inst_32041 = cljs.core.seq(inst_32040);
var inst_32042 = inst_32041;
var inst_32043 = null;
var inst_32044 = (0);
var inst_32045 = (0);
var state_32105__$1 = (function (){var statearr_32125 = state_32105;
(statearr_32125[(8)] = inst_32043);

(statearr_32125[(10)] = inst_32044);

(statearr_32125[(11)] = inst_32042);

(statearr_32125[(12)] = inst_32045);

return statearr_32125;
})();
var statearr_32126_33950 = state_32105__$1;
(statearr_32126_33950[(2)] = null);

(statearr_32126_33950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (17))){
var inst_32066 = (state_32105[(7)]);
var inst_32071 = cljs.core.chunk_first(inst_32066);
var inst_32076 = cljs.core.chunk_rest(inst_32066);
var inst_32077 = cljs.core.count(inst_32071);
var inst_32042 = inst_32076;
var inst_32043 = inst_32071;
var inst_32044 = inst_32077;
var inst_32045 = (0);
var state_32105__$1 = (function (){var statearr_32129 = state_32105;
(statearr_32129[(8)] = inst_32043);

(statearr_32129[(10)] = inst_32044);

(statearr_32129[(11)] = inst_32042);

(statearr_32129[(12)] = inst_32045);

return statearr_32129;
})();
var statearr_32130_33955 = state_32105__$1;
(statearr_32130_33955[(2)] = null);

(statearr_32130_33955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (3))){
var inst_32103 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32105__$1,inst_32103);
} else {
if((state_val_32106 === (12))){
var inst_32091 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32133_33956 = state_32105__$1;
(statearr_32133_33956[(2)] = inst_32091);

(statearr_32133_33956[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (2))){
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32105__$1,(4),in$);
} else {
if((state_val_32106 === (23))){
var inst_32099 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32150_33957 = state_32105__$1;
(statearr_32150_33957[(2)] = inst_32099);

(statearr_32150_33957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (19))){
var inst_32086 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32156_33960 = state_32105__$1;
(statearr_32156_33960[(2)] = inst_32086);

(statearr_32156_33960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (11))){
var inst_32042 = (state_32105[(11)]);
var inst_32066 = (state_32105[(7)]);
var inst_32066__$1 = cljs.core.seq(inst_32042);
var state_32105__$1 = (function (){var statearr_32157 = state_32105;
(statearr_32157[(7)] = inst_32066__$1);

return statearr_32157;
})();
if(inst_32066__$1){
var statearr_32158_33961 = state_32105__$1;
(statearr_32158_33961[(1)] = (14));

} else {
var statearr_32159_33962 = state_32105__$1;
(statearr_32159_33962[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (9))){
var inst_32093 = (state_32105[(2)]);
var inst_32094 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32105__$1 = (function (){var statearr_32163 = state_32105;
(statearr_32163[(15)] = inst_32093);

return statearr_32163;
})();
if(cljs.core.truth_(inst_32094)){
var statearr_32164_33963 = state_32105__$1;
(statearr_32164_33963[(1)] = (21));

} else {
var statearr_32165_33964 = state_32105__$1;
(statearr_32165_33964[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (5))){
var inst_32033 = cljs.core.async.close_BANG_(out);
var state_32105__$1 = state_32105;
var statearr_32166_33965 = state_32105__$1;
(statearr_32166_33965[(2)] = inst_32033);

(statearr_32166_33965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (14))){
var inst_32066 = (state_32105[(7)]);
var inst_32069 = cljs.core.chunked_seq_QMARK_(inst_32066);
var state_32105__$1 = state_32105;
if(inst_32069){
var statearr_32167_33971 = state_32105__$1;
(statearr_32167_33971[(1)] = (17));

} else {
var statearr_32168_33972 = state_32105__$1;
(statearr_32168_33972[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (16))){
var inst_32089 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32173_33977 = state_32105__$1;
(statearr_32173_33977[(2)] = inst_32089);

(statearr_32173_33977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (10))){
var inst_32043 = (state_32105[(8)]);
var inst_32045 = (state_32105[(12)]);
var inst_32058 = cljs.core._nth(inst_32043,inst_32045);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32105__$1,(13),out,inst_32058);
} else {
if((state_val_32106 === (18))){
var inst_32066 = (state_32105[(7)]);
var inst_32080 = cljs.core.first(inst_32066);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32105__$1,(20),out,inst_32080);
} else {
if((state_val_32106 === (8))){
var inst_32044 = (state_32105[(10)]);
var inst_32045 = (state_32105[(12)]);
var inst_32051 = (inst_32045 < inst_32044);
var inst_32052 = inst_32051;
var state_32105__$1 = state_32105;
if(cljs.core.truth_(inst_32052)){
var statearr_32182_33983 = state_32105__$1;
(statearr_32182_33983[(1)] = (10));

} else {
var statearr_32183_33984 = state_32105__$1;
(statearr_32183_33984[(1)] = (11));

}

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
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28560__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28560__auto____0 = (function (){
var statearr_32190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32190[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28560__auto__);

(statearr_32190[(1)] = (1));

return statearr_32190;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28560__auto____1 = (function (state_32105){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_32105);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e32193){var ex__28563__auto__ = e32193;
var statearr_32194_33985 = state_32105;
(statearr_32194_33985[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_32105[(4)]))){
var statearr_32195_33986 = state_32105;
(statearr_32195_33986[(1)] = cljs.core.first((state_32105[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33987 = state_32105;
state_32105 = G__33987;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28560__auto__ = function(state_32105){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28560__auto____1.call(this,state_32105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28560__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28560__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_32200 = f__28879__auto__();
(statearr_32200[(6)] = c__28878__auto__);

return statearr_32200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));

return c__28878__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32202 = arguments.length;
switch (G__32202) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32207 = arguments.length;
switch (G__32207) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32240 = arguments.length;
switch (G__32240) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28878__auto___33998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_32299){
var state_val_32300 = (state_32299[(1)]);
if((state_val_32300 === (7))){
var inst_32294 = (state_32299[(2)]);
var state_32299__$1 = state_32299;
var statearr_32312_33999 = state_32299__$1;
(statearr_32312_33999[(2)] = inst_32294);

(statearr_32312_33999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32300 === (1))){
var inst_32266 = null;
var state_32299__$1 = (function (){var statearr_32315 = state_32299;
(statearr_32315[(7)] = inst_32266);

return statearr_32315;
})();
var statearr_32319_34004 = state_32299__$1;
(statearr_32319_34004[(2)] = null);

(statearr_32319_34004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32300 === (4))){
var inst_32271 = (state_32299[(8)]);
var inst_32271__$1 = (state_32299[(2)]);
var inst_32279 = (inst_32271__$1 == null);
var inst_32280 = cljs.core.not(inst_32279);
var state_32299__$1 = (function (){var statearr_32323 = state_32299;
(statearr_32323[(8)] = inst_32271__$1);

return statearr_32323;
})();
if(inst_32280){
var statearr_32324_34006 = state_32299__$1;
(statearr_32324_34006[(1)] = (5));

} else {
var statearr_32326_34007 = state_32299__$1;
(statearr_32326_34007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32300 === (6))){
var state_32299__$1 = state_32299;
var statearr_32331_34008 = state_32299__$1;
(statearr_32331_34008[(2)] = null);

(statearr_32331_34008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32300 === (3))){
var inst_32296 = (state_32299[(2)]);
var inst_32297 = cljs.core.async.close_BANG_(out);
var state_32299__$1 = (function (){var statearr_32332 = state_32299;
(statearr_32332[(9)] = inst_32296);

return statearr_32332;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32299__$1,inst_32297);
} else {
if((state_val_32300 === (2))){
var state_32299__$1 = state_32299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32299__$1,(4),ch);
} else {
if((state_val_32300 === (11))){
var inst_32271 = (state_32299[(8)]);
var inst_32288 = (state_32299[(2)]);
var inst_32266 = inst_32271;
var state_32299__$1 = (function (){var statearr_32336 = state_32299;
(statearr_32336[(7)] = inst_32266);

(statearr_32336[(10)] = inst_32288);

return statearr_32336;
})();
var statearr_32338_34013 = state_32299__$1;
(statearr_32338_34013[(2)] = null);

(statearr_32338_34013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32300 === (9))){
var inst_32271 = (state_32299[(8)]);
var state_32299__$1 = state_32299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32299__$1,(11),out,inst_32271);
} else {
if((state_val_32300 === (5))){
var inst_32266 = (state_32299[(7)]);
var inst_32271 = (state_32299[(8)]);
var inst_32282 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32271,inst_32266);
var state_32299__$1 = state_32299;
if(inst_32282){
var statearr_32340_34014 = state_32299__$1;
(statearr_32340_34014[(1)] = (8));

} else {
var statearr_32341_34015 = state_32299__$1;
(statearr_32341_34015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32300 === (10))){
var inst_32291 = (state_32299[(2)]);
var state_32299__$1 = state_32299;
var statearr_32342_34016 = state_32299__$1;
(statearr_32342_34016[(2)] = inst_32291);

(statearr_32342_34016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32300 === (8))){
var inst_32266 = (state_32299[(7)]);
var tmp32339 = inst_32266;
var inst_32266__$1 = tmp32339;
var state_32299__$1 = (function (){var statearr_32343 = state_32299;
(statearr_32343[(7)] = inst_32266__$1);

return statearr_32343;
})();
var statearr_32344_34017 = state_32299__$1;
(statearr_32344_34017[(2)] = null);

(statearr_32344_34017[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28560__auto__ = null;
var cljs$core$async$state_machine__28560__auto____0 = (function (){
var statearr_32347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32347[(0)] = cljs$core$async$state_machine__28560__auto__);

(statearr_32347[(1)] = (1));

return statearr_32347;
});
var cljs$core$async$state_machine__28560__auto____1 = (function (state_32299){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_32299);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e32349){var ex__28563__auto__ = e32349;
var statearr_32350_34018 = state_32299;
(statearr_32350_34018[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_32299[(4)]))){
var statearr_32351_34019 = state_32299;
(statearr_32351_34019[(1)] = cljs.core.first((state_32299[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34021 = state_32299;
state_32299 = G__34021;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$state_machine__28560__auto__ = function(state_32299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28560__auto____1.call(this,state_32299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28560__auto____0;
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28560__auto____1;
return cljs$core$async$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_32352 = f__28879__auto__();
(statearr_32352[(6)] = c__28878__auto___33998);

return statearr_32352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32354 = arguments.length;
switch (G__32354) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28878__auto___34023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_32401){
var state_val_32402 = (state_32401[(1)]);
if((state_val_32402 === (7))){
var inst_32397 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
var statearr_32403_34024 = state_32401__$1;
(statearr_32403_34024[(2)] = inst_32397);

(statearr_32403_34024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (1))){
var inst_32361 = (new Array(n));
var inst_32362 = inst_32361;
var inst_32363 = (0);
var state_32401__$1 = (function (){var statearr_32404 = state_32401;
(statearr_32404[(7)] = inst_32363);

(statearr_32404[(8)] = inst_32362);

return statearr_32404;
})();
var statearr_32405_34025 = state_32401__$1;
(statearr_32405_34025[(2)] = null);

(statearr_32405_34025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (4))){
var inst_32367 = (state_32401[(9)]);
var inst_32367__$1 = (state_32401[(2)]);
var inst_32368 = (inst_32367__$1 == null);
var inst_32369 = cljs.core.not(inst_32368);
var state_32401__$1 = (function (){var statearr_32407 = state_32401;
(statearr_32407[(9)] = inst_32367__$1);

return statearr_32407;
})();
if(inst_32369){
var statearr_32408_34026 = state_32401__$1;
(statearr_32408_34026[(1)] = (5));

} else {
var statearr_32409_34027 = state_32401__$1;
(statearr_32409_34027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (15))){
var inst_32391 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
var statearr_32410_34028 = state_32401__$1;
(statearr_32410_34028[(2)] = inst_32391);

(statearr_32410_34028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (13))){
var state_32401__$1 = state_32401;
var statearr_32415_34029 = state_32401__$1;
(statearr_32415_34029[(2)] = null);

(statearr_32415_34029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (6))){
var inst_32363 = (state_32401[(7)]);
var inst_32385 = (inst_32363 > (0));
var state_32401__$1 = state_32401;
if(cljs.core.truth_(inst_32385)){
var statearr_32424_34030 = state_32401__$1;
(statearr_32424_34030[(1)] = (12));

} else {
var statearr_32425_34031 = state_32401__$1;
(statearr_32425_34031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (3))){
var inst_32399 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32401__$1,inst_32399);
} else {
if((state_val_32402 === (12))){
var inst_32362 = (state_32401[(8)]);
var inst_32389 = cljs.core.vec(inst_32362);
var state_32401__$1 = state_32401;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32401__$1,(15),out,inst_32389);
} else {
if((state_val_32402 === (2))){
var state_32401__$1 = state_32401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32401__$1,(4),ch);
} else {
if((state_val_32402 === (11))){
var inst_32379 = (state_32401[(2)]);
var inst_32380 = (new Array(n));
var inst_32362 = inst_32380;
var inst_32363 = (0);
var state_32401__$1 = (function (){var statearr_32434 = state_32401;
(statearr_32434[(7)] = inst_32363);

(statearr_32434[(10)] = inst_32379);

(statearr_32434[(8)] = inst_32362);

return statearr_32434;
})();
var statearr_32435_34032 = state_32401__$1;
(statearr_32435_34032[(2)] = null);

(statearr_32435_34032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (9))){
var inst_32362 = (state_32401[(8)]);
var inst_32377 = cljs.core.vec(inst_32362);
var state_32401__$1 = state_32401;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32401__$1,(11),out,inst_32377);
} else {
if((state_val_32402 === (5))){
var inst_32363 = (state_32401[(7)]);
var inst_32367 = (state_32401[(9)]);
var inst_32362 = (state_32401[(8)]);
var inst_32372 = (state_32401[(11)]);
var inst_32371 = (inst_32362[inst_32363] = inst_32367);
var inst_32372__$1 = (inst_32363 + (1));
var inst_32373 = (inst_32372__$1 < n);
var state_32401__$1 = (function (){var statearr_32440 = state_32401;
(statearr_32440[(12)] = inst_32371);

(statearr_32440[(11)] = inst_32372__$1);

return statearr_32440;
})();
if(cljs.core.truth_(inst_32373)){
var statearr_32441_34033 = state_32401__$1;
(statearr_32441_34033[(1)] = (8));

} else {
var statearr_32442_34034 = state_32401__$1;
(statearr_32442_34034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (14))){
var inst_32394 = (state_32401[(2)]);
var inst_32395 = cljs.core.async.close_BANG_(out);
var state_32401__$1 = (function (){var statearr_32444 = state_32401;
(statearr_32444[(13)] = inst_32394);

return statearr_32444;
})();
var statearr_32445_34035 = state_32401__$1;
(statearr_32445_34035[(2)] = inst_32395);

(statearr_32445_34035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (10))){
var inst_32383 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
var statearr_32450_34036 = state_32401__$1;
(statearr_32450_34036[(2)] = inst_32383);

(statearr_32450_34036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (8))){
var inst_32362 = (state_32401[(8)]);
var inst_32372 = (state_32401[(11)]);
var tmp32443 = inst_32362;
var inst_32362__$1 = tmp32443;
var inst_32363 = inst_32372;
var state_32401__$1 = (function (){var statearr_32457 = state_32401;
(statearr_32457[(7)] = inst_32363);

(statearr_32457[(8)] = inst_32362__$1);

return statearr_32457;
})();
var statearr_32458_34037 = state_32401__$1;
(statearr_32458_34037[(2)] = null);

(statearr_32458_34037[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28560__auto__ = null;
var cljs$core$async$state_machine__28560__auto____0 = (function (){
var statearr_32465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32465[(0)] = cljs$core$async$state_machine__28560__auto__);

(statearr_32465[(1)] = (1));

return statearr_32465;
});
var cljs$core$async$state_machine__28560__auto____1 = (function (state_32401){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_32401);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e32467){var ex__28563__auto__ = e32467;
var statearr_32468_34040 = state_32401;
(statearr_32468_34040[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_32401[(4)]))){
var statearr_32469_34041 = state_32401;
(statearr_32469_34041[(1)] = cljs.core.first((state_32401[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34042 = state_32401;
state_32401 = G__34042;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$state_machine__28560__auto__ = function(state_32401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28560__auto____1.call(this,state_32401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28560__auto____0;
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28560__auto____1;
return cljs$core$async$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_32470 = f__28879__auto__();
(statearr_32470[(6)] = c__28878__auto___34023);

return statearr_32470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32480 = arguments.length;
switch (G__32480) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28878__auto___34052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28879__auto__ = (function (){var switch__28559__auto__ = (function (state_32547){
var state_val_32549 = (state_32547[(1)]);
if((state_val_32549 === (7))){
var inst_32543 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32562_34053 = state_32547__$1;
(statearr_32562_34053[(2)] = inst_32543);

(statearr_32562_34053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (1))){
var inst_32493 = [];
var inst_32494 = inst_32493;
var inst_32495 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32547__$1 = (function (){var statearr_32563 = state_32547;
(statearr_32563[(7)] = inst_32494);

(statearr_32563[(8)] = inst_32495);

return statearr_32563;
})();
var statearr_32566_34054 = state_32547__$1;
(statearr_32566_34054[(2)] = null);

(statearr_32566_34054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (4))){
var inst_32498 = (state_32547[(9)]);
var inst_32498__$1 = (state_32547[(2)]);
var inst_32499 = (inst_32498__$1 == null);
var inst_32500 = cljs.core.not(inst_32499);
var state_32547__$1 = (function (){var statearr_32571 = state_32547;
(statearr_32571[(9)] = inst_32498__$1);

return statearr_32571;
})();
if(inst_32500){
var statearr_32573_34059 = state_32547__$1;
(statearr_32573_34059[(1)] = (5));

} else {
var statearr_32577_34060 = state_32547__$1;
(statearr_32577_34060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (15))){
var inst_32494 = (state_32547[(7)]);
var inst_32535 = cljs.core.vec(inst_32494);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32547__$1,(18),out,inst_32535);
} else {
if((state_val_32549 === (13))){
var inst_32530 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32583_34061 = state_32547__$1;
(statearr_32583_34061[(2)] = inst_32530);

(statearr_32583_34061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (6))){
var inst_32494 = (state_32547[(7)]);
var inst_32532 = inst_32494.length;
var inst_32533 = (inst_32532 > (0));
var state_32547__$1 = state_32547;
if(cljs.core.truth_(inst_32533)){
var statearr_32587_34062 = state_32547__$1;
(statearr_32587_34062[(1)] = (15));

} else {
var statearr_32588_34063 = state_32547__$1;
(statearr_32588_34063[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (17))){
var inst_32540 = (state_32547[(2)]);
var inst_32541 = cljs.core.async.close_BANG_(out);
var state_32547__$1 = (function (){var statearr_32590 = state_32547;
(statearr_32590[(10)] = inst_32540);

return statearr_32590;
})();
var statearr_32591_34065 = state_32547__$1;
(statearr_32591_34065[(2)] = inst_32541);

(statearr_32591_34065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (3))){
var inst_32545 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32547__$1,inst_32545);
} else {
if((state_val_32549 === (12))){
var inst_32494 = (state_32547[(7)]);
var inst_32519 = cljs.core.vec(inst_32494);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32547__$1,(14),out,inst_32519);
} else {
if((state_val_32549 === (2))){
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32547__$1,(4),ch);
} else {
if((state_val_32549 === (11))){
var inst_32498 = (state_32547[(9)]);
var inst_32504 = (state_32547[(11)]);
var inst_32494 = (state_32547[(7)]);
var inst_32516 = inst_32494.push(inst_32498);
var tmp32592 = inst_32494;
var inst_32494__$1 = tmp32592;
var inst_32495 = inst_32504;
var state_32547__$1 = (function (){var statearr_32596 = state_32547;
(statearr_32596[(7)] = inst_32494__$1);

(statearr_32596[(12)] = inst_32516);

(statearr_32596[(8)] = inst_32495);

return statearr_32596;
})();
var statearr_32597_34069 = state_32547__$1;
(statearr_32597_34069[(2)] = null);

(statearr_32597_34069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (9))){
var inst_32495 = (state_32547[(8)]);
var inst_32511 = cljs.core.keyword_identical_QMARK_(inst_32495,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32547__$1 = state_32547;
var statearr_32602_34070 = state_32547__$1;
(statearr_32602_34070[(2)] = inst_32511);

(statearr_32602_34070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (5))){
var inst_32498 = (state_32547[(9)]);
var inst_32504 = (state_32547[(11)]);
var inst_32508 = (state_32547[(13)]);
var inst_32495 = (state_32547[(8)]);
var inst_32504__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32498) : f.call(null,inst_32498));
var inst_32508__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32504__$1,inst_32495);
var state_32547__$1 = (function (){var statearr_32606 = state_32547;
(statearr_32606[(11)] = inst_32504__$1);

(statearr_32606[(13)] = inst_32508__$1);

return statearr_32606;
})();
if(inst_32508__$1){
var statearr_32609_34071 = state_32547__$1;
(statearr_32609_34071[(1)] = (8));

} else {
var statearr_32611_34073 = state_32547__$1;
(statearr_32611_34073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (14))){
var inst_32498 = (state_32547[(9)]);
var inst_32504 = (state_32547[(11)]);
var inst_32521 = (state_32547[(2)]);
var inst_32523 = [];
var inst_32527 = inst_32523.push(inst_32498);
var inst_32494 = inst_32523;
var inst_32495 = inst_32504;
var state_32547__$1 = (function (){var statearr_32613 = state_32547;
(statearr_32613[(14)] = inst_32527);

(statearr_32613[(15)] = inst_32521);

(statearr_32613[(7)] = inst_32494);

(statearr_32613[(8)] = inst_32495);

return statearr_32613;
})();
var statearr_32614_34078 = state_32547__$1;
(statearr_32614_34078[(2)] = null);

(statearr_32614_34078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (16))){
var state_32547__$1 = state_32547;
var statearr_32615_34083 = state_32547__$1;
(statearr_32615_34083[(2)] = null);

(statearr_32615_34083[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (10))){
var inst_32513 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
if(cljs.core.truth_(inst_32513)){
var statearr_32616_34085 = state_32547__$1;
(statearr_32616_34085[(1)] = (11));

} else {
var statearr_32617_34086 = state_32547__$1;
(statearr_32617_34086[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (18))){
var inst_32537 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32624_34087 = state_32547__$1;
(statearr_32624_34087[(2)] = inst_32537);

(statearr_32624_34087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (8))){
var inst_32508 = (state_32547[(13)]);
var state_32547__$1 = state_32547;
var statearr_32626_34088 = state_32547__$1;
(statearr_32626_34088[(2)] = inst_32508);

(statearr_32626_34088[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__28560__auto__ = null;
var cljs$core$async$state_machine__28560__auto____0 = (function (){
var statearr_32627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32627[(0)] = cljs$core$async$state_machine__28560__auto__);

(statearr_32627[(1)] = (1));

return statearr_32627;
});
var cljs$core$async$state_machine__28560__auto____1 = (function (state_32547){
while(true){
var ret_value__28561__auto__ = (function (){try{while(true){
var result__28562__auto__ = switch__28559__auto__(state_32547);
if(cljs.core.keyword_identical_QMARK_(result__28562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28562__auto__;
}
break;
}
}catch (e32633){var ex__28563__auto__ = e32633;
var statearr_32635_34094 = state_32547;
(statearr_32635_34094[(2)] = ex__28563__auto__);


if(cljs.core.seq((state_32547[(4)]))){
var statearr_32636_34095 = state_32547;
(statearr_32636_34095[(1)] = cljs.core.first((state_32547[(4)])));

} else {
throw ex__28563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34097 = state_32547;
state_32547 = G__34097;
continue;
} else {
return ret_value__28561__auto__;
}
break;
}
});
cljs$core$async$state_machine__28560__auto__ = function(state_32547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28560__auto____1.call(this,state_32547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28560__auto____0;
cljs$core$async$state_machine__28560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28560__auto____1;
return cljs$core$async$state_machine__28560__auto__;
})()
})();
var state__28880__auto__ = (function (){var statearr_32666 = f__28879__auto__();
(statearr_32666[(6)] = c__28878__auto___34052);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28880__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
