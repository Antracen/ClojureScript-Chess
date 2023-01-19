
shadow.cljs.devtools.client.env.module_loaded('client');

try { reframe.core.run(); } catch (e) { console.error("An error occurred when calling (reframe.core/run)"); throw(e); }