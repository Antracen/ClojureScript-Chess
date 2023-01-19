goog.provide('haslett.client');
/**
 * Close a stream opened by connect.
 */
haslett.client.close = (function haslett$client$close(stream){
new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(stream).close((1000),"Closed by creator");

return new cljs.core.Keyword(null,"close-status","close-status",-239776180).cljs$core$IFn$_invoke$arity$1(stream);
});
/**
 * Create a WebSocket to the specified URL, and returns a 'stream' map of four
 *   keys:
 * 
 *  :socket       - contains the WebSocket object
 *  :close-status - a promise channel that contains the final close status
 *  :source       - a core.async channel to read from
 *  :sink         - a core.async channel to write to
 * 
 *   Takes the following options:
 * 
 *  :format      - a formatter from haslett.format
 *  :source      - a custom channel to use as the source
 *  :sink        - a custom channel to use as the sink
 *  :protocols   - passed to the WebSocket, a vector of protocol strings
 *  :binary-type - passed to the WebSocket, may be :blob or :arraybuffer
 *  :close-chan? - true if channels should be closed if WebSocket is closed
 *                 (defaults to true)
 * 
 *   The WebSocket may either be closed directly, or by closing the
 *   stream's :sink channel.
 */
haslett.client.connect = (function haslett$client$connect(var_args){
var G__27668 = arguments.length;
switch (G__27668) {
case 1:
return haslett.client.connect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return haslett.client.connect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(haslett.client.connect.cljs$core$IFn$_invoke$arity$1 = (function (url){
return haslett.client.connect.cljs$core$IFn$_invoke$arity$2(url,cljs.core.PersistentArrayMap.EMPTY);
}));

(haslett.client.connect.cljs$core$IFn$_invoke$arity$2 = (function (url,options){
var protocols = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY));
var socket = (new WebSocket(url,protocols));
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$2(options,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var sink = new cljs.core.Keyword(null,"sink","sink",186835933).cljs$core$IFn$_invoke$arity$2(options,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var format = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$2(options,haslett.format.identity);
var status = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var return$ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var close_QMARK_ = new cljs.core.Keyword(null,"close-chan?","close-chan?",-1940681973).cljs$core$IFn$_invoke$arity$2(options,true);
var stream = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"sink","sink",186835933),sink,new cljs.core.Keyword(null,"close-status","close-status",-239776180),status], null);
(socket.binaryType = cljs.core.name(new cljs.core.Keyword(null,"binary-type","binary-type",1096940609).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"arraybuffer","arraybuffer",1394959763))));

(socket.onopen = (function (_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(return$,stream);
}));

(socket.onmessage = (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(source,haslett.format.read(format,e.data));
}));

(socket.onclose = (function (e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason,new cljs.core.Keyword(null,"code","code",1586293142),e.code], null));

if(cljs.core.truth_(close_QMARK_)){
cljs.core.async.close_BANG_(source);
} else {
}

if(cljs.core.truth_(close_QMARK_)){
cljs.core.async.close_BANG_(sink);
} else {
}

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(return$,stream);
}));

var c__26215__auto___27774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26036__auto__ = (function (state_27718){
var state_val_27719 = (state_27718[(1)]);
if((state_val_27719 === (1))){
var state_27718__$1 = state_27718;
var statearr_27738_27775 = state_27718__$1;
(statearr_27738_27775[(2)] = null);

(statearr_27738_27775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (2))){
var state_27718__$1 = state_27718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27718__$1,(4),sink);
} else {
if((state_val_27719 === (3))){
var inst_27713 = (state_27718[(2)]);
var state_27718__$1 = state_27718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27718__$1,inst_27713);
} else {
if((state_val_27719 === (4))){
var inst_27694 = (state_27718[(7)]);
var inst_27694__$1 = (state_27718[(2)]);
var state_27718__$1 = (function (){var statearr_27741 = state_27718;
(statearr_27741[(7)] = inst_27694__$1);

return statearr_27741;
})();
if(cljs.core.truth_(inst_27694__$1)){
var statearr_27742_27779 = state_27718__$1;
(statearr_27742_27779[(1)] = (5));

} else {
var statearr_27743_27780 = state_27718__$1;
(statearr_27743_27780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (5))){
var inst_27694 = (state_27718[(7)]);
var inst_27704 = haslett.format.write(format,inst_27694);
var inst_27705 = socket.send(inst_27704);
var state_27718__$1 = (function (){var statearr_27748 = state_27718;
(statearr_27748[(8)] = inst_27705);

return statearr_27748;
})();
var statearr_27749_27781 = state_27718__$1;
(statearr_27749_27781[(2)] = null);

(statearr_27749_27781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (6))){
var state_27718__$1 = state_27718;
var statearr_27750_27782 = state_27718__$1;
(statearr_27750_27782[(2)] = null);

(statearr_27750_27782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (7))){
var inst_27710 = (state_27718[(2)]);
var inst_27711 = haslett.client.close(stream);
var state_27718__$1 = (function (){var statearr_27751 = state_27718;
(statearr_27751[(9)] = inst_27710);

return statearr_27751;
})();
var statearr_27752_27783 = state_27718__$1;
(statearr_27752_27783[(2)] = inst_27711);

(statearr_27752_27783[(1)] = (3));


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
});
return (function() {
var haslett$client$state_machine__26037__auto__ = null;
var haslett$client$state_machine__26037__auto____0 = (function (){
var statearr_27753 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27753[(0)] = haslett$client$state_machine__26037__auto__);

(statearr_27753[(1)] = (1));

return statearr_27753;
});
var haslett$client$state_machine__26037__auto____1 = (function (state_27718){
while(true){
var ret_value__26038__auto__ = (function (){try{while(true){
var result__26039__auto__ = switch__26036__auto__(state_27718);
if(cljs.core.keyword_identical_QMARK_(result__26039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26039__auto__;
}
break;
}
}catch (e27754){var ex__26040__auto__ = e27754;
var statearr_27755_27788 = state_27718;
(statearr_27755_27788[(2)] = ex__26040__auto__);


if(cljs.core.seq((state_27718[(4)]))){
var statearr_27756_27789 = state_27718;
(statearr_27756_27789[(1)] = cljs.core.first((state_27718[(4)])));

} else {
throw ex__26040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27790 = state_27718;
state_27718 = G__27790;
continue;
} else {
return ret_value__26038__auto__;
}
break;
}
});
haslett$client$state_machine__26037__auto__ = function(state_27718){
switch(arguments.length){
case 0:
return haslett$client$state_machine__26037__auto____0.call(this);
case 1:
return haslett$client$state_machine__26037__auto____1.call(this,state_27718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
haslett$client$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$0 = haslett$client$state_machine__26037__auto____0;
haslett$client$state_machine__26037__auto__.cljs$core$IFn$_invoke$arity$1 = haslett$client$state_machine__26037__auto____1;
return haslett$client$state_machine__26037__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_27757 = f__26216__auto__();
(statearr_27757[(6)] = c__26215__auto___27774);

return statearr_27757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return return$;
}));

(haslett.client.connect.cljs$lang$maxFixedArity = 2);

/**
 * Return true if the stream is currently connected.
 */
haslett.client.connected_QMARK_ = (function haslett$client$connected_QMARK_(p__27765){
var map__27766 = p__27765;
var map__27766__$1 = cljs.core.__destructure_map(map__27766);
var close_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766__$1,new cljs.core.Keyword(null,"close-status","close-status",-239776180));
return (cljs.core.async.poll_BANG_(close_status) == null);
});

//# sourceMappingURL=haslett.client.js.map
