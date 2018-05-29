(function(){var t=this;(function(){(function(){this.Rails={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:{selector:"button[data-remote]:not([form]), button[data-confirm]:not([form])",exclude:"form button"},inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",formDisableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",formEnableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]"}}).call(this)}).call(t);var y=t.Rails;(function(){(function(){var o,n;n=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector,y.matches=function(t,e){return null!=e.exclude?n.call(t,e.selector)&&!n.call(t,e.exclude):n.call(t,e)},o="_ujsData",y.getData=function(t,e){var n;return null!=(n=t[o])?n[e]:void 0},y.setData=function(t,e,n){return null==t[o]&&(t[o]={}),t[o][e]=n},y.$=function(t){return Array.prototype.slice.call(document.querySelectorAll(t))}}).call(this),function(){var n,o,i;n=y.$,i=y.csrfToken=function(){var t;return(t=document.querySelector("meta[name=csrf-token]"))&&t.content},o=y.csrfParam=function(){var t;return(t=document.querySelector("meta[name=csrf-param]"))&&t.content},y.CSRFProtection=function(t){var e;if(null!=(e=i()))return t.setRequestHeader("X-CSRF-Token",e)},y.refreshCSRFTokens=function(){var t,e;if(e=i(),t=o(),null!=e&&null!=t)return n('form input[name="'+t+'"]').forEach(function(t){return t.value=e})}}.call(this),function(){var i,e,r;r=y.matches,"function"!=typeof(i=window.CustomEvent)&&((i=function(t,e){var n;return(n=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}).prototype=window.Event.prototype),e=y.fire=function(t,e,n){var o;return o=new i(e,{bubbles:!0,cancelable:!0,detail:n}),t.dispatchEvent(o),!o.defaultPrevented},y.stopEverything=function(t){return e(t.target,"ujs:everythingStopped"),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()},y.delegate=function(t,n,e,o){return t.addEventListener(e,function(t){var e;for(e=t.target;e instanceof Element&&!r(e,n);)e=e.parentNode;if(e instanceof Element&&!1===o.call(e,t))return t.preventDefault(),t.stopPropagation()})}}.call(this),function(){var e,o,t,i,r;o=y.CSRFProtection,y.fire,e={"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript",script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},y.ajax=function(e){var n;return e=i(e),n=t(e,function(){var t;return t=r(n.response,n.getResponseHeader("Content-Type")),2===Math.floor(n.status/100)?"function"==typeof e.success&&e.success(t,n.statusText,n):"function"==typeof e.error&&e.error(t,n.statusText,n),"function"==typeof e.complete?e.complete(n,n.statusText):void 0}),!("function"!=typeof e.beforeSend||!e.beforeSend(n,e))&&(n.readyState===XMLHttpRequest.OPENED?n.send(e.data):void 0)},i=function(t){return t.url=t.url||location.href,t.type=t.type.toUpperCase(),"GET"===t.type&&t.data&&(t.url.indexOf("?")<0?t.url+="?"+t.data:t.url+="&"+t.data),null==e[t.dataType]&&(t.dataType="*"),t.accept=e[t.dataType],"*"!==t.dataType&&(t.accept+=", */*; q=0.01"),t},t=function(t,e){var n;return(n=new XMLHttpRequest).open(t.type,t.url,!0),n.setRequestHeader("Accept",t.accept),"string"==typeof t.data&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.crossDomain||n.setRequestHeader("X-Requested-With","XMLHttpRequest"),o(n),n.withCredentials=!!t.withCredentials,n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE)return e(n)},n},r=function(t,e){var n,o;if("string"==typeof t&&"string"==typeof e)if(e.match(/\bjson\b/))try{t=JSON.parse(t)}catch(i){}else if(e.match(/\b(?:java|ecma)script\b/))(o=document.createElement("script")).text=t,document.head.appendChild(o).parentNode.removeChild(o);else if(e.match(/\b(xml|html|svg)\b/)){n=new DOMParser,e=e.replace(/;.+/,"");try{t=n.parseFromString(t,e)}catch(i){}}return t},y.href=function(t){return t.href},y.isCrossDomain=function(t){var e,n;(e=document.createElement("a")).href=location.href,n=document.createElement("a");try{return n.href=t,!((!n.protocol||":"===n.protocol)&&!n.host||e.protocol+"//"+e.host==n.protocol+"//"+n.host)}catch(o){return o,!0}}}.call(this),function(){var i,r;i=y.matches,r=function(t){return Array.prototype.slice.call(t)},y.serializeElement=function(t,e){var n,o;return n=[t],i(t,"form")&&(n=r(t.elements)),o=[],n.forEach(function(e){if(e.name&&!e.disabled)return i(e,"select")?r(e.options).forEach(function(t){if(t.selected)return o.push({name:e.name,value:t.value})}):e.checked||-1===["radio","checkbox","submit"].indexOf(e.type)?o.push({name:e.name,value:e.value}):void 0}),e&&o.push(e),o.map(function(t){return null!=t.name?encodeURIComponent(t.name)+"="+encodeURIComponent(t.value):t}).join("&")},y.formElements=function(t,e){return i(t,"form")?r(t.elements).filter(function(t){return i(t,e)}):r(t.querySelectorAll(e))}}.call(this),function(){var e,r,n;r=y.fire,n=y.stopEverything,y.handleConfirm=function(t){if(!e(this))return n(t)},e=function(t){var e,n,o;if(!(o=t.getAttribute("data-confirm")))return!0;if(e=!1,r(t,"confirm")){try{e=confirm(o)}catch(i){}n=r(t,"confirm:complete",[e])}return e&&n}}.call(this),function(){var n,o,i,r,s,a,e,l,c,u,d;c=y.matches,l=y.getData,u=y.setData,d=y.stopEverything,e=y.formElements,y.handleDisabledElement=function(t){if(this.disabled)return d(t)},y.enableElement=function(t){var e;return e=t instanceof Event?t.target:t,c(e,y.linkDisableSelector)?a(e):c(e,y.buttonDisableSelector)||c(e,y.formEnableSelector)?r(e):c(e,y.formSubmitSelector)?s(e):void 0},y.disableElement=function(t){var e;return e=t instanceof Event?t.target:t,c(e,y.linkDisableSelector)?i(e):c(e,y.buttonDisableSelector)||c(e,y.formDisableSelector)?n(e):c(e,y.formSubmitSelector)?o(e):void 0},i=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(u(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e),t.addEventListener("click",d),u(t,"ujs:disabled",!0)},a=function(t){var e;return null!=(e=l(t,"ujs:enable-with"))&&(t.innerHTML=e,u(t,"ujs:enable-with",null)),t.removeEventListener("click",d),u(t,"ujs:disabled",null)},o=function(t){return e(t,y.formDisableSelector).forEach(n)},n=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(c(t,"button")?(u(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e):(u(t,"ujs:enable-with",t.value),t.value=e)),t.disabled=!0,u(t,"ujs:disabled",!0)},s=function(t){return e(t,y.formEnableSelector).forEach(r)},r=function(t){var e;return null!=(e=l(t,"ujs:enable-with"))&&(c(t,"button")?t.innerHTML=e:t.value=e,u(t,"ujs:enable-with",null)),t.disabled=!1,u(t,"ujs:disabled",null)}}.call(this),function(){var l;l=y.stopEverything,y.handleMethod=function(t){var e,n,o,i,r,s,a;if(a=(s=this).getAttribute("data-method"))return r=y.href(s),n=y.csrfToken(),e=y.csrfParam(),o=document.createElement("form"),i="<input name='_method' value='"+a+"' type='hidden' />",null==e||null==n||y.isCrossDomain(r)||(i+="<input name='"+e+"' value='"+n+"' type='hidden' />"),i+='<input type="submit" />',o.method="post",o.action=r,o.target=s.target,o.innerHTML=i,o.style.display="none",document.body.appendChild(o),o.querySelector('[type="submit"]').click(),l(t)}}.call(this),function(){var l,c,u,d,h,p,f,m,b,v=[].slice;p=y.matches,u=y.getData,m=y.setData,c=y.fire,b=y.stopEverything,l=y.ajax,d=y.isCrossDomain,f=y.serializeElement,h=function(t){var e;return null!=(e=t.getAttribute("data-remote"))&&"false"!==e},y.handleRemote=function(t){var e,n,o,i,r,s,a;return!h(i=this)||(c(i,"ajax:before")?(a=i.getAttribute("data-with-credentials"),o=i.getAttribute("data-type")||"script",p(i,y.formSubmitSelector)?(e=u(i,"ujs:submit-button"),r=u(i,"ujs:submit-button-formmethod")||i.method,s=u(i,"ujs:submit-button-formaction")||i.getAttribute("action")||location.href,"GET"===r.toUpperCase()&&(s=s.replace(/\?.*$/,"")),"multipart/form-data"===i.enctype?(n=new FormData(i),null!=e&&n.append(e.name,e.value)):n=f(i,e),m(i,"ujs:submit-button",null),m(i,"ujs:submit-button-formmethod",null),m(i,"ujs:submit-button-formaction",null)):p(i,y.buttonClickSelector)||p(i,y.inputChangeSelector)?(r=i.getAttribute("data-method"),s=i.getAttribute("data-url"),n=f(i,i.getAttribute("data-params"))):(r=i.getAttribute("data-method"),s=y.href(i),n=i.getAttribute("data-params")),l({type:r||"GET",url:s,data:n,dataType:o,beforeSend:function(t,e){return c(i,"ajax:beforeSend",[t,e])?c(i,"ajax:send",[t]):(c(i,"ajax:stopped"),!1)},success:function(){var t;return t=1<=arguments.length?v.call(arguments,0):[],c(i,"ajax:success",t)},error:function(){var t;return t=1<=arguments.length?v.call(arguments,0):[],c(i,"ajax:error",t)},complete:function(){var t;return t=1<=arguments.length?v.call(arguments,0):[],c(i,"ajax:complete",t)},crossDomain:d(s),withCredentials:null!=a&&"false"!==a}),b(t)):(c(i,"ajax:stopped"),!1))},y.formSubmitButtonClick=function(){var t,e;if(e=(t=this).form)return t.name&&m(e,"ujs:submit-button",{name:t.name,value:t.value}),m(e,"ujs:formnovalidate-button",t.formNoValidate),m(e,"ujs:submit-button-formaction",t.getAttribute("formaction")),m(e,"ujs:submit-button-formmethod",t.getAttribute("formmethod"))},y.handleMetaClick=function(t){var e,n,o;if(o=((n=this).getAttribute("data-method")||"GET").toUpperCase(),e=n.getAttribute("data-params"),(t.metaKey||t.ctrlKey)&&"GET"===o&&!e)return t.stopImmediatePropagation()}}.call(this),function(){var t,o,e,n,i,r,s,a,l,c,u,d,h,p;r=y.fire,e=y.delegate,a=y.getData,t=y.$,p=y.refreshCSRFTokens,o=y.CSRFProtection,i=y.enableElement,n=y.disableElement,c=y.handleDisabledElement,l=y.handleConfirm,h=y.handleRemote,s=y.formSubmitButtonClick,u=y.handleMetaClick,d=y.handleMethod,"undefined"==typeof jQuery||null===jQuery||null==jQuery.ajax||jQuery.rails||(jQuery.rails=y,jQuery.ajaxPrefilter(function(t,e,n){if(!t.crossDomain)return o(n)})),y.start=function(){if(window._rails_loaded)throw new Error("rails-ujs has already been loaded!");return window.addEventListener("pageshow",function(){return t(y.formEnableSelector).forEach(function(t){if(a(t,"ujs:disabled"))return i(t)}),t(y.linkDisableSelector).forEach(function(t){if(a(t,"ujs:disabled"))return i(t)})}),e(document,y.linkDisableSelector,"ajax:complete",i),e(document,y.linkDisableSelector,"ajax:stopped",i),e(document,y.buttonDisableSelector,"ajax:complete",i),e(document,y.buttonDisableSelector,"ajax:stopped",i),e(document,y.linkClickSelector,"click",c),e(document,y.linkClickSelector,"click",l),e(document,y.linkClickSelector,"click",u),e(document,y.linkClickSelector,"click",n),e(document,y.linkClickSelector,"click",h),e(document,y.linkClickSelector,"click",d),e(document,y.buttonClickSelector,"click",c),e(document,y.buttonClickSelector,"click",l),e(document,y.buttonClickSelector,"click",n),e(document,y.buttonClickSelector,"click",h),e(document,y.inputChangeSelector,"change",c),e(document,y.inputChangeSelector,"change",l),e(document,y.inputChangeSelector,"change",h),e(document,y.formSubmitSelector,"submit",c),e(document,y.formSubmitSelector,"submit",l),e(document,y.formSubmitSelector,"submit",h),e(document,y.formSubmitSelector,"submit",function(t){return setTimeout(function(){return n(t)},13)}),e(document,y.formSubmitSelector,"ajax:send",n),e(document,y.formSubmitSelector,"ajax:complete",i),e(document,y.formInputClickSelector,"click",c),e(document,y.formInputClickSelector,"click",l),e(document,y.formInputClickSelector,"click",s),document.addEventListener("DOMContentLoaded",p),window._rails_loaded=!0},window.Rails===y&&r(document,"rails:attachBindings")&&y.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=y:"function"==typeof define&&define.amd&&define(y)}).call(this),function(){var t=this;(function(){(function(){var n=[].slice;this.ActionCable={INTERNAL:{message_types:{welcome:"welcome",ping:"ping",confirmation:"confirm_subscription",rejection:"reject_subscription"},default_mount_path:"/cable",protocols:["actioncable-v1-json","actioncable-unsupported"]},WebSocket:window.WebSocket,logger:window.console,createConsumer:function(t){var e;return null==t&&(t=null!=(e=this.getConfig("url"))?e:this.INTERNAL.default_mount_path),new l.Consumer(this.createWebSocketURL(t))},getConfig:function(t){var e;return null!=(e=document.head.querySelector("meta[name='action-cable-"+t+"']"))?e.getAttribute("content"):void 0},createWebSocketURL:function(t){var e;return t&&!/^wss?:/i.test(t)?((e=document.createElement("a")).href=t,e.href=e.href,e.protocol=e.protocol.replace("http","ws"),e.href):t},startDebugging:function(){return this.debugging=!0},stopDebugging:function(){return this.debugging=null},log:function(){var t,e;if(t=1<=arguments.length?n.call(arguments,0):[],this.debugging)return t.push(Date.now()),(e=this.logger).log.apply(e,["[ActionCable]"].concat(n.call(t)))}}}).call(this)}).call(t);var l=t.ActionCable;(function(){(function(){var o=function(t,e){return function(){return t.apply(e,arguments)}};l.ConnectionMonitor=function(){function t(t){this.connection=t,this.visibilityDidChange=o(this.visibilityDidChange,this),this.reconnectAttempts=0}var i,e,n;return t.pollInterval={min:3,max:30},t.staleThreshold=6,t.prototype.start=function(){if(!this.isRunning())return this.startedAt=e(),delete this.stoppedAt,this.startPolling(),document.addEventListener("visibilitychange",this.visibilityDidChange),l.log("ConnectionMonitor started. pollInterval = "+this.getPollInterval()+" ms")},t.prototype.stop=function(){if(this.isRunning())return this.stoppedAt=e(),this.stopPolling(),document.removeEventListener("visibilitychange",this.visibilityDidChange),l.log("ConnectionMonitor stopped")},t.prototype.isRunning=function(){return null!=this.startedAt&&null==this.stoppedAt},t.prototype.recordPing=function(){return this.pingedAt=e()},t.prototype.recordConnect=function(){return this.reconnectAttempts=0,this.recordPing(),delete this.disconnectedAt,l.log("ConnectionMonitor recorded connect")},t.prototype.recordDisconnect=function(){return this.disconnectedAt=e(),l.log("ConnectionMonitor recorded disconnect")},t.prototype.startPolling=function(){return this.stopPolling(),this.poll()},t.prototype.stopPolling=function(){return clearTimeout(this.pollTimeout)},t.prototype.poll=function(){return this.pollTimeout=setTimeout((t=this,function(){return t.reconnectIfStale(),t.poll()}),this.getPollInterval());var t},t.prototype.getPollInterval=function(){var t,e,n,o;return n=(o=this.constructor.pollInterval).min,e=o.max,t=5*Math.log(this.reconnectAttempts+1),Math.round(1e3*i(t,n,e))},t.prototype.reconnectIfStale=function(){if(this.connectionIsStale())return l.log("ConnectionMonitor detected stale connection. reconnectAttempts = "+this.reconnectAttempts+", pollInterval = "+this.getPollInterval()+" ms, time disconnected = "+n(this.disconnectedAt)+" s, stale threshold = "+this.constructor.staleThreshold+" s"),this.reconnectAttempts++,this.disconnectedRecently()?l.log("ConnectionMonitor skipping reopening recent disconnect"):(l.log("ConnectionMonitor reopening"),this.connection.reopen())},t.prototype.connectionIsStale=function(){var t;return n(null!=(t=this.pingedAt)?t:this.startedAt)>this.constructor.staleThreshold},t.prototype.disconnectedRecently=function(){return this.disconnectedAt&&n(this.disconnectedAt)<this.constructor.staleThreshold},t.prototype.visibilityDidChange=function(){if("visible"===document.visibilityState)return setTimeout((t=this,function(){if(t.connectionIsStale()||!t.connection.isOpen())return l.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = "+document.visibilityState),t.connection.reopen()}),200);var t},e=function(){return(new Date).getTime()},n=function(t){return(e()-t)/1e3},i=function(t,e,n){return Math.max(e,Math.min(n,t))},t}()}).call(this),function(){var t,i,e,n,o,r=[].slice,s=function(t,e){return function(){return t.apply(e,arguments)}},a=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};n=l.INTERNAL,i=n.message_types,e=n.protocols,o=2<=e.length?r.call(e,0,t=e.length-1):(t=0,[]),e[t++],l.Connection=function(){function t(t){this.consumer=t,this.open=s(this.open,this),this.subscriptions=this.consumer.subscriptions,this.monitor=new l.ConnectionMonitor(this),this.disconnected=!0}return t.reopenDelay=500,t.prototype.send=function(t){return!!this.isOpen()&&(this.webSocket.send(JSON.stringify(t)),!0)},t.prototype.open=function(){return this.isActive()?(l.log("Attempted to open WebSocket, but existing socket is "+this.getState()),!1):(l.log("Opening WebSocket, current state is "+this.getState()+", subprotocols: "+e),null!=this.webSocket&&this.uninstallEventHandlers(),this.webSocket=new l.WebSocket(this.consumer.url,e),this.installEventHandlers(),this.monitor.start(),!0)},t.prototype.close=function(t){var e;if((null!=t?t:{allowReconnect:!0}).allowReconnect||this.monitor.stop(),this.isActive())return null!=(e=this.webSocket)?e.close():void 0},t.prototype.reopen=function(){var t;if(l.log("Reopening WebSocket, current state is "+this.getState()),!this.isActive())return this.open();try{return this.close()}catch(e){return t=e,l.log("Failed to reopen WebSocket",t)}finally{l.log("Reopening WebSocket in "+this.constructor.reopenDelay+"ms"),setTimeout(this.open,this.constructor.reopenDelay)}},t.prototype.getProtocol=function(){var t;return null!=(t=this.webSocket)?t.protocol:void 0},t.prototype.isOpen=function(){return this.isState("open")},t.prototype.isActive=function(){return this.isState("open","connecting")},t.prototype.isProtocolSupported=function(){var t;return t=this.getProtocol(),0<=a.call(o,t)},t.prototype.isState=function(){var t,e;return e=1<=arguments.length?r.call(arguments,0):[],t=this.getState(),0<=a.call(e,t)},t.prototype.getState=function(){var t,e;for(e in WebSocket)if(WebSocket[e]===(null!=(t=this.webSocket)?t.readyState:void 0))return e.toLowerCase();return null},t.prototype.installEventHandlers=function(){var t,e;for(t in this.events)e=this.events[t].bind(this),this.webSocket["on"+t]=e},t.prototype.uninstallEventHandlers=function(){var t;for(t in this.events)this.webSocket["on"+t]=function(){}},t.prototype.events={message:function(t){var e,n,o;if(this.isProtocolSupported())switch(e=(o=JSON.parse(t.data)).identifier,n=o.message,o.type){case i.welcome:return this.monitor.recordConnect(),this.subscriptions.reload();case i.ping:return this.monitor.recordPing();case i.confirmation:return this.subscriptions.notify(e,"connected");case i.rejection:return this.subscriptions.reject(e);default:return this.subscriptions.notify(e,"received",n)}},open:function(){if(l.log("WebSocket onopen event, using '"+this.getProtocol()+"' subprotocol"),this.disconnected=!1,!this.isProtocolSupported())return l.log("Protocol is unsupported. Stopping monitor and disconnecting."),this.close({allowReconnect:!1})},close:function(){if(l.log("WebSocket onclose event"),!this.disconnected)return this.disconnected=!0,this.monitor.recordDisconnect(),this.subscriptions.notifyAll("disconnected",{willAttemptReconnect:this.monitor.isRunning()})},error:function(){return l.log("WebSocket onerror event")}},t}()}.call(this),function(){var c=[].slice;l.Subscriptions=function(){function t(t){this.consumer=t,this.subscriptions=[]}return t.prototype.create=function(t,e){var n,o,i;return o="object"==typeof(n=t)?n:{channel:n},i=new l.Subscription(this.consumer,o,e),this.add(i)},t.prototype.add=function(t){return this.subscriptions.push(t),this.consumer.ensureActiveConnection(),this.notify(t,"initialized"),this.sendCommand(t,"subscribe"),t},t.prototype.remove=function(t){return this.forget(t),this.findAll(t.identifier).length||this.sendCommand(t,"unsubscribe"),t},t.prototype.reject=function(t){var e,n,o,i,r;for(i=[],e=0,n=(o=this.findAll(t)).length;e<n;e++)r=o[e],this.forget(r),this.notify(r,"rejected"),i.push(r);return i},t.prototype.forget=function(i){var r;return this.subscriptions=function(){var t,e,n,o;for(o=[],t=0,e=(n=this.subscriptions).length;t<e;t++)(r=n[t])!==i&&o.push(r);return o}.call(this),i},t.prototype.findAll=function(t){var e,n,o,i,r;for(i=[],e=0,n=(o=this.subscriptions).length;e<n;e++)(r=o[e]).identifier===t&&i.push(r);return i},t.prototype.reload=function(){var t,e,n,o,i;for(o=[],t=0,e=(n=this.subscriptions).length;t<e;t++)i=n[t],o.push(this.sendCommand(i,"subscribe"));return o},t.prototype.notifyAll=function(t){var e,n,o,i,r,s,a;for(n=t,e=2<=arguments.length?c.call(arguments,1):[],s=[],o=0,i=(r=this.subscriptions).length;o<i;o++)a=r[o],s.push(this.notify.apply(this,[a,n].concat(c.call(e))));return s},t.prototype.notify=function(t,e){var n,o,i,r,s,a,l;for(a=t,o=e,n=3<=arguments.length?c.call(arguments,2):[],s=[],i=0,r=(l="string"==typeof a?this.findAll(a):[a]).length;i<r;i++)a=l[i],s.push("function"==typeof a[o]?a[o].apply(a,n):void 0);return s},t.prototype.sendCommand=function(t,e){var n;return n=t.identifier,this.consumer.send({command:e,identifier:n})},t}()}.call(this),function(){l.Subscription=function(){function t(t,e,n){this.consumer=t,null==e&&(e={}),this.identifier=JSON.stringify(e),o(this,n)}var o;return t.prototype.perform=function(t,e){return null==e&&(e={}),e.action=t,this.send(e)},t.prototype.send=function(t){return this.consumer.send({command:"message",identifier:this.identifier,data:JSON.stringify(t)})},t.prototype.unsubscribe=function(){return this.consumer.subscriptions.remove(this)},o=function(t,e){var n,o;if(null!=e)for(n in e)o=e[n],t[n]=o;return t},t}()}.call(this),function(){l.Consumer=function(){function t(t){this.url=t,this.subscriptions=new l.Subscriptions(this),this.connection=new l.Connection(this)}return t.prototype.send=function(t){return this.connection.send(t)},t.prototype.connect=function(){return this.connection.open()},t.prototype.disconnect=function(){return this.connection.close({allowReconnect:!1})},t.prototype.ensureActiveConnection=function(){if(!this.connection.isActive())return this.connection.open()},t}()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=l:"function"==typeof define&&define.amd&&define(l)}.call(this),function(){this.App||(this.App={}),App.cable=ActionCable.createConsumer()}.call(this),function(){var o,e,n,l,i,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,o;for(n in e)o=e[n],null==t[n]&&(t[n]=o);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,o){var i;return null==e&&(e=!1),null==n&&(n=!1),null==o&&(o=null),null!=document.createEvent?(i=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,o):null!=document.createEventObject?(i=document.createEventObject()).eventType=t:i.eventName=t,i},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,o,i;for(e=n=0,o=(i=this.keys).length;n<o;e=++n)if(i[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,o,i,r;for(n=o=0,i=(r=this.keys).length;o<i;n=++o)if(r[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),o=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(o=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),l=this.getComputedStyle||function(n){return this.getPropertyValue=function(t){var e;return"float"===t&&(t="styleFloat"),i.test(t)&&t.replace(i,function(t,e){return e.toUpperCase()}),(null!=(e=n.currentStyle)?e[t]:void 0)||null},this},i=/(\-([a-z]){1})/g,this.WOW=function(){function t(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return t.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},t.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},t.prototype.start=function(){var i,t,e,n,s;if(this.stopped=!1,this.boxes=function(){var t,e,n,o;for(o=[],t=0,e=(n=this.element.querySelectorAll("."+this.config.boxClass)).length;t<e;t++)i=n[t],o.push(i);return o}.call(this),this.all=function(){var t,e,n,o;for(o=[],t=0,e=(n=this.boxes).length;t<e;t++)i=n[t],o.push(i);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(t=0,e=(n=this.boxes).length;t<e;t++)i=n[t],this.applyStyle(i,!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new o((s=this,function(t){var e,n,i,r,o;for(o=[],e=0,n=t.length;e<n;e++)r=t[e],o.push(function(){var t,e,n,o;for(o=[],t=0,e=(n=r.addedNodes||[]).length;t<e;t++)i=n[t],o.push(this.doSync(i));return o}.call(s));return o})).observe(document.body,{childList:!0,subtree:!0})},t.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},t.prototype.sync=function(){if(o.notSupported)return this.doSync(this.element)},t.prototype.doSync=function(t){var e,n,o,i,r;if(null==t&&(t=this.element),1===t.nodeType){for(r=[],n=0,o=(i=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;n<o;n++)e=i[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},t.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},t.prototype.applyStyle=function(t,e){var n,o,i,r;return o=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),i=t.getAttribute("data-wow-iteration"),this.animate((r=this,function(){return r.customStyle(t,e,o,n,i)}))},t.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},t.prototype.resetStyle=function(){var t,e,n,o,i;for(i=[],e=0,n=(o=this.boxes).length;e<n;e++)t=o[e],i.push(t.style.visibility="visible");return i},t.prototype.resetAnimation=function(t){var e;if(0<=t.type.toLowerCase().indexOf("animationend"))return(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim()},t.prototype.customStyle=function(t,e,n,o,i){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),o&&this.vendorSet(t.style,{animationDelay:o}),i&&this.vendorSet(t.style,{animationIterationCount:i}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},t.prototype.vendors=["moz","webkit"],t.prototype.vendorSet=function(i,t){var r,e,s,a;for(r in e=[],t)s=t[r],i[""+r]=s,e.push(function(){var t,e,n,o;for(o=[],t=0,e=(n=this.vendors).length;t<e;t++)a=n[t],o.push(i[""+a+r.charAt(0).toUpperCase()+r.substr(1)]=s);return o}.call(this));return e},t.prototype.vendorCSS=function(t,e){var n,o,i,r,s,a;for(r=(s=l(t)).getPropertyCSSValue(e),n=0,o=(i=this.vendors).length;n<o;n++)a=i[n],r=r||s.getPropertyCSSValue("-"+a+"-"+e);return r},t.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=l(t).getPropertyValue("animation-name")}return"none"===e?"":e},t.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},t.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},t.prototype.scrollHandler=function(){return this.scrolled=!0},t.prototype.scrollCallback=function(){var i;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var t,e,n,o;for(o=[],t=0,e=(n=this.boxes).length;t<e;t++)(i=n[t])&&(this.isVisible(i)?this.show(i):o.push(i));return o}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},t.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},t.prototype.isVisible=function(t){var e,n,o,i,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,i=(r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(o=this.offsetTop(t))+t.clientHeight,o<=i&&r<=e},t.prototype.util=function(){return null!=this._util?this._util:this._util=new e},t.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},t}()}.call(this);var testVar="x";