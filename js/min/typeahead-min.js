!function($){var t=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},isBlankString:function(t){return!t||/^\s*$/.test(t)},escapeRegExChars:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isArray:$.isArray,isFunction:$.isFunction,isObject:$.isPlainObject,isUndefined:function(t){return"undefined"==typeof t},toStr:function e(n){return t.isUndefined(n)||null===n?"":n+""},bind:$.proxy,each:function(t,e){function n(t,n){return e(n,t)}$.each(t,n)},map:$.map,filter:$.grep,every:function(t,e){var n=!0;return t?($.each(t,function(i,r){return(n=e.call(null,r,i,t))?void 0:!1}),!!n):n},some:function(t,e){var n=!1;return t?($.each(t,function(i,r){return(n=e.call(null,r,i,t))?!1:void 0}),!!n):n},mixin:$.extend,getUniqueId:function(){var t=0;return function(){return t++}}(),templatify:function n(t){function e(){return String(t)}return $.isFunction(t)?t:e},defer:function(t){setTimeout(t,0)},debounce:function(t,e,n){var i,r;return function(){var s=this,o=arguments,u,a;return u=function(){i=null,n||(r=t.apply(s,o))},a=n&&!i,clearTimeout(i),i=setTimeout(u,e),a&&(r=t.apply(s,o)),r}},throttle:function(t,e){var n,i,r,s,o,u;return o=0,u=function(){o=new Date,r=null,s=t.apply(n,i)},function(){var a=new Date,c=e-(a-o);return n=this,i=arguments,0>=c?(clearTimeout(r),r=null,o=a,s=t.apply(n,i)):r||(r=setTimeout(u,c)),s}},noop:function(){}}}(),e="0.10.5",n=function(){"use strict";function e(e){return e=t.toStr(e),e?e.split(/\s+/):[]}function n(e){return e=t.toStr(e),e?e.split(/\W+/):[]}function i(e){return function n(){var n=[].slice.call(arguments,0);return function i(r){var s=[];return t.each(n,function(n){s=s.concat(e(t.toStr(r[n])))}),s}}}return{nonword:n,whitespace:e,obj:{nonword:i(n),whitespace:i(e)}}}(),i=function(){"use strict";function e(e){this.maxSize=t.isNumber(e)?e:100,this.reset(),this.maxSize<=0&&(this.set=this.get=$.noop)}function n(){this.head=this.tail=null}function i(t,e){this.key=t,this.val=e,this.prev=this.next=null}return t.mixin(e.prototype,{set:function r(t,e){var n=this.list.tail,r;this.size>=this.maxSize&&(this.list.remove(n),delete this.hash[n.key]),(r=this.hash[t])?(r.val=e,this.list.moveToFront(r)):(r=new i(t,e),this.list.add(r),this.hash[t]=r,this.size++)},get:function s(t){var e=this.hash[t];return e?(this.list.moveToFront(e),e.val):void 0},reset:function o(){this.size=0,this.hash={},this.list=new n}}),t.mixin(n.prototype,{add:function u(t){this.head&&(t.next=this.head,this.head.prev=t),this.head=t,this.tail=this.tail||t},remove:function a(t){t.prev?t.prev.next=t.next:this.head=t.next,t.next?t.next.prev=t.prev:this.tail=t.prev},moveToFront:function(t){this.remove(t),this.add(t)}}),e}(),r=function(){"use strict";function e(e){this.prefix=["__",e,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+t.escapeRegExChars(this.prefix))}function n(){return(new Date).getTime()}function i(e){return JSON.stringify(t.isUndefined(e)?null:e)}function r(t){return JSON.parse(t)}var s,o;try{s=window.localStorage,s.setItem("~~~","!"),s.removeItem("~~~")}catch(u){s=null}return o=s&&window.JSON?{_prefix:function(t){return this.prefix+t},_ttlKey:function(t){return this._prefix(t)+this.ttlKey},get:function(t){return this.isExpired(t)&&this.remove(t),r(s.getItem(this._prefix(t)))},set:function(e,r,o){return t.isNumber(o)?s.setItem(this._ttlKey(e),i(n()+o)):s.removeItem(this._ttlKey(e)),s.setItem(this._prefix(e),i(r))},remove:function(t){return s.removeItem(this._ttlKey(t)),s.removeItem(this._prefix(t)),this},clear:function(){var t,e,n=[],i=s.length;for(t=0;i>t;t++)(e=s.key(t)).match(this.keyMatcher)&&n.push(e.replace(this.keyMatcher,""));for(t=n.length;t--;)this.remove(n[t]);return this},isExpired:function(e){var i=r(s.getItem(this._ttlKey(e)));return t.isNumber(i)&&n()>i?!0:!1}}:{get:t.noop,set:t.noop,remove:t.noop,clear:t.noop,isExpired:t.noop},t.mixin(e.prototype,o),e}(),s=function(){"use strict";function e(t){t=t||{},this.cancelled=!1,this.lastUrl=null,this._send=t.transport?n(t.transport):$.ajax,this._get=t.rateLimiter?t.rateLimiter(this._get):this._get,this._cache=t.cache===!1?new i(0):u}function n(e){return function n(i,r){function s(e){t.defer(function(){u.resolve(e)})}function o(e){t.defer(function(){u.reject(e)})}var u=$.Deferred();return e(i,r,s,o),u}}var r=0,s={},o=6,u=new i(10);return e.setMaxPendingRequests=function a(t){o=t},e.resetCache=function c(){u.reset()},t.mixin(e.prototype,{_get:function(t,e,n){function i(e){n&&n(null,e),c._cache.set(t,e)}function u(){n&&n(!0)}function a(){r--,delete s[t],c.onDeckRequestArgs&&(c._get.apply(c,c.onDeckRequestArgs),c.onDeckRequestArgs=null)}var c=this,h;this.cancelled||t!==this.lastUrl||((h=s[t])?h.done(i).fail(u):o>r?(r++,s[t]=this._send(t,e).done(i).fail(u).always(a)):this.onDeckRequestArgs=[].slice.call(arguments,0))},get:function(e,n,i){var r;return t.isFunction(n)&&(i=n,n={}),this.cancelled=!1,this.lastUrl=e,(r=this._cache.get(e))?t.defer(function(){i&&i(null,r)}):this._get(e,n,i),!!r},cancel:function(){this.cancelled=!0}}),e}(),o=function(){"use strict";function e(t){t=t||{},t.datumTokenizer&&t.queryTokenizer||$.error("datumTokenizer and queryTokenizer are both required"),this.datumTokenizer=t.datumTokenizer,this.queryTokenizer=t.queryTokenizer,this.reset()}function n(e){return e=t.filter(e,function(t){return!!t}),e=t.map(e,function(t){return t.toLowerCase()})}function i(){return{ids:[],children:{}}}function r(t){for(var e={},n=[],i=0,r=t.length;r>i;i++)e[t[i]]||(e[t[i]]=!0,n.push(t[i]));return n}function s(t,e){function n(t,e){return t-e}var i=0,r=0,s=[];t=t.sort(n),e=e.sort(n);for(var o=t.length,u=e.length;o>i&&u>r;)t[i]<e[r]?i++:t[i]>e[r]?r++:(s.push(t[i]),i++,r++);return s}return t.mixin(e.prototype,{bootstrap:function o(t){this.datums=t.datums,this.trie=t.trie},add:function(e){var r=this;e=t.isArray(e)?e:[e],t.each(e,function(e){var s,o;s=r.datums.push(e)-1,o=n(r.datumTokenizer(e)),t.each(o,function(t){var e,n,o;for(e=r.trie,n=t.split("");o=n.shift();)e=e.children[o]||(e.children[o]=i()),e.ids.push(s)})})},get:function u(e){var i=this,o,u;return o=n(this.queryTokenizer(e)),t.each(o,function(t){var e,n,r,o;if(u&&0===u.length)return!1;for(e=i.trie,n=t.split("");e&&(r=n.shift());)e=e.children[r];return e&&0===n.length?(o=e.ids.slice(0),void(u=u?s(u,o):o)):(u=[],!1)}),u?t.map(r(u),function(t){return i.datums[t]}):[]},reset:function a(){this.datums=[],this.trie=i()},serialize:function c(){return{datums:this.datums,trie:this.trie}}}),e}(),u=function(){"use strict";function n(t){return t.local||null}function i(n){var i,r;return r={url:null,thumbprint:"",ttl:864e5,filter:null,ajax:{}},(i=n.prefetch||null)&&(i=t.isString(i)?{url:i}:i,i=t.mixin(r,i),i.thumbprint=e+i.thumbprint,i.ajax.type=i.ajax.type||"GET",i.ajax.dataType=i.ajax.dataType||"json",!i.url&&$.error("prefetch requires url to be set")),i}function r(e){function n(e){return function(n){return t.debounce(n,e)}}function i(e){return function(n){return t.throttle(n,e)}}var r,s;return s={url:null,cache:!0,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}},(r=e.remote||null)&&(r=t.isString(r)?{url:r}:r,r=t.mixin(s,r),r.rateLimiter=/^throttle$/i.test(r.rateLimitBy)?i(r.rateLimitWait):n(r.rateLimitWait),r.ajax.type=r.ajax.type||"GET",r.ajax.dataType=r.ajax.dataType||"json",delete r.rateLimitBy,delete r.rateLimitWait,!r.url&&$.error("remote requires url to be set")),r}return{local:n,prefetch:i,remote:r}}();!function(e){"use strict";function i(t){t&&(t.local||t.prefetch||t.remote)||$.error("one of local, prefetch, or remote is required"),this.limit=t.limit||5,this.sorter=a(t.sorter),this.dupDetector=t.dupDetector||c,this.local=u.local(t),this.prefetch=u.prefetch(t),this.remote=u.remote(t),this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null,this.index=new o({datumTokenizer:t.datumTokenizer,queryTokenizer:t.queryTokenizer}),this.storage=this.cacheKey?new r(this.cacheKey):null}function a(e){function n(t){return t.sort(e)}function i(t){return t}return t.isFunction(e)?n:i}function c(){return!1}var h,l;return h=e.Bloodhound,l={data:"data",protocol:"protocol",thumbprint:"thumbprint"},e.Bloodhound=i,i.noConflict=function d(){return e.Bloodhound=h,i},i.tokenizers=n,t.mixin(i.prototype,{_loadPrefetch:function p(t){function e(e){n.clear(),n.add(t.filter?t.filter(e):e),n._saveToStorage(n.index.serialize(),t.thumbprint,t.ttl)}var n=this,i,r;return(i=this._readFromStorage(t.thumbprint))?(this.index.bootstrap(i),r=$.Deferred().resolve()):r=$.ajax(t.url,t.ajax).done(e),r},_getFromRemote:function f(t,e){function n(t,n){e(t?[]:i.remote.filter?i.remote.filter(n):n)}var i=this,r,s;if(this.transport)return t=t||"",s=encodeURIComponent(t),r=this.remote.replace?this.remote.replace(this.remote.url,t):this.remote.url.replace(this.remote.wildcard,s),this.transport.get(r,this.remote.ajax,n)},_cancelLastRemoteRequest:function g(){this.transport&&this.transport.cancel()},_saveToStorage:function m(t,e,n){this.storage&&(this.storage.set(l.data,t,n),this.storage.set(l.protocol,location.protocol,n),this.storage.set(l.thumbprint,e,n))},_readFromStorage:function y(t){var e={},n;return this.storage&&(e.data=this.storage.get(l.data),e.protocol=this.storage.get(l.protocol),e.thumbprint=this.storage.get(l.thumbprint)),n=e.thumbprint!==t||e.protocol!==location.protocol,e.data&&!n?e.data:null},_initialize:function v(){function e(){n.add(t.isFunction(i)?i():i)}var n=this,i=this.local,r;return r=this.prefetch?this._loadPrefetch(this.prefetch):$.Deferred().resolve(),i&&r.done(e),this.transport=this.remote?new s(this.remote):null,this.initPromise=r.promise()},initialize:function _(t){return!this.initPromise||t?this._initialize():this.initPromise},add:function w(t){this.index.add(t)},get:function b(e,n){function i(e){var i=s.slice(0);t.each(e,function(e){var n;return n=t.some(i,function(t){return r.dupDetector(e,t)}),!n&&i.push(e),i.length<r.limit}),n&&n(r.sorter(i))}var r=this,s=[],o=!1;s=this.index.get(e),s=this.sorter(s).slice(0,this.limit),s.length<this.limit?o=this._getFromRemote(e,i):this._cancelLastRemoteRequest(),o||(s.length>0||!this.transport)&&n&&n(s)},clear:function x(){this.index.reset()},clearPrefetchCache:function k(){this.storage&&this.storage.clear()},clearRemoteCache:function C(){this.transport&&s.resetCache()},ttAdapter:function S(){return t.bind(this.get,this)}}),i}(this);var a=function(){return{wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',dataset:'<div class="tt-dataset-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion"></div>'}}(),c=function(){"use strict";var e={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return t.isMsie()&&t.mixin(e.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),t.isMsie()&&t.isMsie()<=7&&t.mixin(e.input,{marginTop:"-1px"}),e}(),h=function(){"use strict";function e(t){t&&t.el||$.error("EventBus initialized without el"),this.$el=$(t.el)}var n="typeahead:";return t.mixin(e.prototype,{trigger:function(t){var e=[].slice.call(arguments,1);this.$el.trigger(n+t,e)}}),e}(),l=function(){"use strict";function t(t,e,n,i){var r;if(!n)return this;for(e=e.split(a),n=i?u(n,i):n,this._callbacks=this._callbacks||{};r=e.shift();)this._callbacks[r]=this._callbacks[r]||{sync:[],async:[]},this._callbacks[r][t].push(n);return this}function e(e,n,i){return t.call(this,"async",e,n,i)}function n(e,n,i){return t.call(this,"sync",e,n,i)}function i(t){var e;if(!this._callbacks)return this;for(t=t.split(a);e=t.shift();)delete this._callbacks[e];return this}function r(t){var e,n,i,r,o;if(!this._callbacks)return this;for(t=t.split(a),i=[].slice.call(arguments,1);(e=t.shift())&&(n=this._callbacks[e]);)r=s(n.sync,this,[e].concat(i)),o=s(n.async,this,[e].concat(i)),r()&&c(o);return this}function s(t,e,n){function i(){for(var i,r=0,s=t.length;!i&&s>r;r+=1)i=t[r].apply(e,n)===!1;return!i}return i}function o(){var t;return t=window.setImmediate?function e(t){setImmediate(function(){t()})}:function n(t){setTimeout(function(){t()},0)}}function u(t,e){return t.bind?t.bind(e):function(){t.apply(e,[].slice.call(arguments,0))}}var a=/\s+/,c=o();return{onSync:n,onAsync:e,off:i,trigger:r}}(),d=function(e){"use strict";function n(e,n,i){for(var r=[],s,o=0,u=e.length;u>o;o++)r.push(t.escapeRegExChars(e[o]));return s=i?"\\b("+r.join("|")+")\\b":"("+r.join("|")+")",n?new RegExp(s):new RegExp(s,"i")}var i={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function r(s){function o(t){var n,i,r;return(n=a.exec(t.data))&&(r=e.createElement(s.tagName),s.className&&(r.className=s.className),i=t.splitText(n.index),i.splitText(n[0].length),r.appendChild(i.cloneNode(!0)),t.parentNode.replaceChild(r,i)),!!n}function u(t,e){for(var n,i=3,r=0;r<t.childNodes.length;r++)n=t.childNodes[r],n.nodeType===i?r+=e(n)?1:0:u(n,e)}var a;s=t.mixin({},i,s),s.node&&s.pattern&&(s.pattern=t.isArray(s.pattern)?s.pattern:[s.pattern],a=n(s.pattern,s.caseSensitive,s.wordsOnly),u(s.node,o))}}(window.document),p=function(){"use strict";function e(e){var i=this,r,o,u,a;e=e||{},e.input||$.error("input is missing"),r=t.bind(this._onBlur,this),o=t.bind(this._onFocus,this),u=t.bind(this._onKeydown,this),a=t.bind(this._onInput,this),this.$hint=$(e.hint),this.$input=$(e.input).on("blur.tt",r).on("focus.tt",o).on("keydown.tt",u),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=t.noop),t.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(e){s[e.which||e.keyCode]||t.defer(t.bind(i._onInput,i,e))}):this.$input.on("input.tt",a),this.query=this.$input.val(),this.$overflowHelper=n(this.$input)}function n(t){return $('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:t.css("font-family"),fontSize:t.css("font-size"),fontStyle:t.css("font-style"),fontVariant:t.css("font-variant"),fontWeight:t.css("font-weight"),wordSpacing:t.css("word-spacing"),letterSpacing:t.css("letter-spacing"),textIndent:t.css("text-indent"),textRendering:t.css("text-rendering"),textTransform:t.css("text-transform")}).insertAfter(t)}function i(t,n){return e.normalizeQuery(t)===e.normalizeQuery(n)}function r(t){return t.altKey||t.ctrlKey||t.metaKey||t.shiftKey}var s;return s={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},e.normalizeQuery=function(t){return(t||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")},t.mixin(e.prototype,l,{_onBlur:function o(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function u(){this.trigger("focused")},_onKeydown:function a(t){var e=s[t.which||t.keyCode];this._managePreventDefault(e,t),e&&this._shouldTrigger(e,t)&&this.trigger(e+"Keyed",t)},_onInput:function c(){this._checkInputValue()},_managePreventDefault:function h(t,e){var n,i,s;switch(t){case"tab":i=this.getHint(),s=this.getInputValue(),n=i&&i!==s&&!r(e);break;case"up":case"down":n=!r(e);break;default:n=!1}n&&e.preventDefault()},_shouldTrigger:function d(t,e){var n;switch(t){case"tab":n=!r(e);break;default:n=!0}return n},_checkInputValue:function p(){var t,e,n;t=this.getInputValue(),e=i(t,this.query),n=e?this.query.length!==t.length:!1,this.query=t,e?n&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},focus:function f(){this.$input.focus()},blur:function g(){this.$input.blur()},getQuery:function m(){return this.query},setQuery:function y(t){this.query=t},getInputValue:function v(){return this.$input.val()},setInputValue:function _(t,e){this.$input.val(t),e?this.clearHint():this._checkInputValue()},resetInputValue:function w(){this.setInputValue(this.query,!0)},getHint:function b(){return this.$hint.val()},setHint:function x(t){this.$hint.val(t)},clearHint:function k(){this.setHint("")},clearHintIfInvalid:function C(){var t,e,n,i;t=this.getInputValue(),e=this.getHint(),n=t!==e&&0===e.indexOf(t),i=""!==t&&n&&!this.hasOverflow(),!i&&this.clearHint()},getLanguageDirection:function S(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function A(){var t=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=t},isCursorAtEnd:function(){var e,n,i;return e=this.$input.val().length,n=this.$input[0].selectionStart,t.isNumber(n)?n===e:document.selection?(i=document.selection.createRange(),i.moveStart("character",-e),e===i.text.length):!0},destroy:function D(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null}}),e}(),f=function(){"use strict";function e(e){e=e||{},e.templates=e.templates||{},e.source||$.error("missing source"),e.name&&!r(e.name)&&$.error("invalid dataset name: "+e.name),this.query=null,this.highlight=!!e.highlight,this.name=e.name||t.getUniqueId(),this.source=e.source,this.displayFn=n(e.display||e.displayKey),this.templates=i(e.templates,this.displayFn),this.$el=$(a.dataset.replace("%CLASS%",this.name))}function n(e){function n(t){return t[e]}return e=e||"value",t.isFunction(e)?e:n}function i(e,n){function i(t){return"<p>"+n(t)+"</p>"}return{empty:e.empty&&t.templatify(e.empty),header:e.header&&t.templatify(e.header),footer:e.footer&&t.templatify(e.footer),suggestion:e.suggestion||i}}function r(t){return/^[_a-zA-Z0-9-]+$/.test(t)}var s="ttDataset",o="ttValue",u="ttDatum";return e.extractDatasetName=function h(t){return $(t).data(s)},e.extractValue=function p(t){return $(t).data(o)},e.extractDatum=function f(t){return $(t).data(u)},t.mixin(e.prototype,l,{_render:function g(e,n){function i(){return p.templates.empty({query:e,isEmpty:!0})}function r(){function i(t){var e;return e=$(a.suggestion).append(p.templates.suggestion(t)).data(s,p.name).data(o,p.displayFn(t)).data(u,t),e.children().each(function(){$(this).css(c.suggestionChild)}),e}var r,h;return r=$(a.suggestions).css(c.suggestions),h=t.map(n,i),r.append.apply(r,h),p.highlight&&d({className:"tt-highlight",node:r[0],pattern:e}),r}function h(){return p.templates.header({query:e,isEmpty:!f})}function l(){return p.templates.footer({query:e,isEmpty:!f})}if(this.$el){var p=this,f;this.$el.empty(),f=n&&n.length,!f&&this.templates.empty?this.$el.html(i()).prepend(p.templates.header?h():null).append(p.templates.footer?l():null):f&&this.$el.html(r()).prepend(p.templates.header?h():null).append(p.templates.footer?l():null),this.trigger("rendered")}},getRoot:function m(){return this.$el},update:function y(t){function e(e){n.canceled||t!==n.query||n._render(t,e)}var n=this;this.query=t,this.canceled=!1,this.source(t,e)},cancel:function v(){this.canceled=!0},clear:function _(){this.cancel(),this.$el.empty(),this.trigger("rendered")},isEmpty:function w(){return this.$el.is(":empty")},destroy:function b(){this.$el=null}}),e}(),g=function(){"use strict";function e(e){var i=this,r,s,o;e=e||{},e.menu||$.error("menu is required"),this.isOpen=!1,this.isEmpty=!0,this.datasets=t.map(e.datasets,n),r=t.bind(this._onSuggestionClick,this),s=t.bind(this._onSuggestionMouseEnter,this),o=t.bind(this._onSuggestionMouseLeave,this),this.$menu=$(e.menu).on("click.tt",".tt-suggestion",r).on("mouseenter.tt",".tt-suggestion",s).on("mouseleave.tt",".tt-suggestion",o),t.each(this.datasets,function(t){i.$menu.append(t.getRoot()),t.onSync("rendered",i._onRendered,i)})}function n(t){return new f(t)}return t.mixin(e.prototype,l,{_onSuggestionClick:function i(t){this.trigger("suggestionClicked",$(t.currentTarget))},_onSuggestionMouseEnter:function r(t){this._removeCursor(),this._setCursor($(t.currentTarget),!0)},_onSuggestionMouseLeave:function s(){this._removeCursor()},_onRendered:function o(){function e(t){return t.isEmpty()}this.isEmpty=t.every(this.datasets,e),this.isEmpty?this._hide():this.isOpen&&this._show(),this.trigger("datasetRendered")},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block")},_getSuggestions:function u(){return this.$menu.find(".tt-suggestion")},_getCursor:function a(){return this.$menu.find(".tt-cursor").first()},_setCursor:function h(t,e){t.first().addClass("tt-cursor"),!e&&this.trigger("cursorMoved")},_removeCursor:function d(){this._getCursor().removeClass("tt-cursor")},_moveCursor:function p(t){var e,n,i,r;if(this.isOpen){if(n=this._getCursor(),e=this._getSuggestions(),this._removeCursor(),i=e.index(n)+t,i=(i+1)%(e.length+1)-1,-1===i)return void this.trigger("cursorRemoved");-1>i&&(i=e.length-1),this._setCursor(r=e.eq(i)),this._ensureVisible(r)}},_ensureVisible:function g(t){var e,n,i,r;e=t.position().top,n=e+t.outerHeight(!0),i=this.$menu.scrollTop(),r=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),0>e?this.$menu.scrollTop(i+e):n>r&&this.$menu.scrollTop(i+(n-r))},close:function m(){this.isOpen&&(this.isOpen=!1,this._removeCursor(),this._hide(),this.trigger("closed"))},open:function y(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))},setLanguageDirection:function v(t){this.$menu.css("ltr"===t?c.ltr:c.rtl)},moveCursorUp:function _(){this._moveCursor(-1)},moveCursorDown:function w(){this._moveCursor(1)},getDatumForSuggestion:function b(t){var e=null;return t.length&&(e={raw:f.extractDatum(t),value:f.extractValue(t),datasetName:f.extractDatasetName(t)}),e},getDatumForCursor:function x(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function k(){return this.getDatumForSuggestion(this._getSuggestions().first())},update:function C(e){function n(t){t.update(e)}t.each(this.datasets,n)},empty:function S(){function e(t){t.clear()}t.each(this.datasets,e),this.isEmpty=!0},isVisible:function A(){return this.isOpen&&!this.isEmpty},destroy:function D(){function e(t){t.destroy()}this.$menu.off(".tt"),this.$menu=null,t.each(this.datasets,e)}}),e}(),m=function(){"use strict";function e(e){var i,r,s;e=e||{},e.input||$.error("missing input"),this.isActivated=!1,this.autoselect=!!e.autoselect,this.minLength=t.isNumber(e.minLength)?e.minLength:1,this.$node=n(e.input,e.withHint),i=this.$node.find(".tt-dropdown-menu"),r=this.$node.find(".tt-input"),s=this.$node.find(".tt-hint"),r.on("blur.tt",function(e){var n,s,o;n=document.activeElement,s=i.is(n),o=i.has(n).length>0,t.isMsie()&&(s||o)&&(e.preventDefault(),e.stopImmediatePropagation(),t.defer(function(){r.focus()}))}),i.on("mousedown.tt",function(t){t.preventDefault()}),this.eventBus=e.eventBus||new h({el:r}),this.dropdown=new g({menu:i,datasets:e.datasets}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onAsync("datasetRendered",this._onDatasetRendered,this),this.input=new p({input:r,hint:s}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this),this._setLanguageDirection()}function n(t,e){var n,r,o,u;n=$(t),r=$(a.wrapper).css(c.wrapper),o=$(a.dropdown).css(c.dropdown),u=n.clone().css(c.hint).css(i(n)),u.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly",!0).attr({autocomplete:"off",spellcheck:"false",tabindex:-1}),n.data(s,{dir:n.attr("dir"),autocomplete:n.attr("autocomplete"),spellcheck:n.attr("spellcheck"),style:n.attr("style")}),n.addClass("tt-input").attr({autocomplete:"off",spellcheck:!1}).css(e?c.input:c.inputWithNoHint);try{!n.attr("dir")&&n.attr("dir","auto")}catch(h){}return n.wrap(r).parent().prepend(e?u:null).append(o)}function i(t){return{backgroundAttachment:t.css("background-attachment"),backgroundClip:t.css("background-clip"),backgroundColor:t.css("background-color"),backgroundImage:t.css("background-image"),backgroundOrigin:t.css("background-origin"),backgroundPosition:t.css("background-position"),backgroundRepeat:t.css("background-repeat"),backgroundSize:t.css("background-size")}}function r(e){var n=e.find(".tt-input");t.each(n.data(s),function(e,i){t.isUndefined(e)?n.removeAttr(i):n.attr(i,e)}),n.detach().removeData(s).removeClass("tt-input").insertAfter(e),e.remove()}var s="ttAttrs";return t.mixin(e.prototype,{_onSuggestionClicked:function o(t,e){var n;(n=this.dropdown.getDatumForSuggestion(e))&&this._select(n)},_onCursorMoved:function u(){var t=this.dropdown.getDatumForCursor();this.input.setInputValue(t.value,!0),this.eventBus.trigger("cursorchanged",t.raw,t.datasetName)},_onCursorRemoved:function l(){this.input.resetInputValue(),this._updateHint()},_onDatasetRendered:function d(){this._updateHint()},_onOpened:function f(){this._updateHint(),this.eventBus.trigger("opened")},_onClosed:function m(){this.input.clearHint(),this.eventBus.trigger("closed")},_onFocused:function y(){this.isActivated=!0,this.dropdown.open()},_onBlurred:function v(){this.isActivated=!1,this.dropdown.empty(),this.dropdown.close()},_onEnterKeyed:function _(t,e){var n,i;n=this.dropdown.getDatumForCursor(),i=this.dropdown.getDatumForTopSuggestion(),n?(this._select(n),e.preventDefault()):this.autoselect&&i&&(this._select(i),e.preventDefault())},_onTabKeyed:function w(t,e){var n;(n=this.dropdown.getDatumForCursor())?(this._select(n),e.preventDefault()):this._autocomplete(!0)},_onEscKeyed:function b(){this.dropdown.close(),this.input.resetInputValue()},_onUpKeyed:function x(){var t=this.input.getQuery();this.dropdown.isEmpty&&t.length>=this.minLength?this.dropdown.update(t):this.dropdown.moveCursorUp(),this.dropdown.open()},_onDownKeyed:function k(){var t=this.input.getQuery();this.dropdown.isEmpty&&t.length>=this.minLength?this.dropdown.update(t):this.dropdown.moveCursorDown(),this.dropdown.open()},_onLeftKeyed:function C(){"rtl"===this.dir&&this._autocomplete()},_onRightKeyed:function S(){"ltr"===this.dir&&this._autocomplete()},_onQueryChanged:function A(t,e){this.input.clearHintIfInvalid(),e.length>=this.minLength?this.dropdown.update(e):this.dropdown.empty(),this.dropdown.open(),this._setLanguageDirection()},_onWhitespaceChanged:function D(){this._updateHint(),this.dropdown.open()},_setLanguageDirection:function I(){var t;this.dir!==(t=this.input.getLanguageDirection())&&(this.dir=t,this.$node.css("direction",t),this.dropdown.setLanguageDirection(t))},_updateHint:function T(){var e,n,i,r,s,o;e=this.dropdown.getDatumForTopSuggestion(),e&&this.dropdown.isVisible()&&!this.input.hasOverflow()?(n=this.input.getInputValue(),i=p.normalizeQuery(n),r=t.escapeRegExChars(i),s=new RegExp("^(?:"+r+")(.+$)","i"),o=s.exec(e.value),o?this.input.setHint(n+o[1]):this.input.clearHint()):this.input.clearHint()},_autocomplete:function R(t){var e,n,i,r;e=this.input.getHint(),n=this.input.getQuery(),i=t||this.input.isCursorAtEnd(),e&&n!==e&&i&&(r=this.dropdown.getDatumForTopSuggestion(),r&&this.input.setInputValue(r.value),this.eventBus.trigger("autocompleted",r.raw,r.datasetName))},_select:function q(e){this.input.setQuery(e.value),this.input.setInputValue(e.value,!0),this._setLanguageDirection(),this.eventBus.trigger("selected",e.raw,e.datasetName),this.dropdown.close(),t.defer(t.bind(this.dropdown.empty,this.dropdown))},open:function z(){this.dropdown.open()},close:function E(){this.dropdown.close()},setVal:function K(e){e=t.toStr(e),this.isActivated?this.input.setInputValue(e):(this.input.setQuery(e),this.input.setInputValue(e,!0)),this._setLanguageDirection()},getVal:function L(){return this.input.getQuery()},destroy:function F(){this.input.destroy(),this.dropdown.destroy(),r(this.$node),this.$node=null}}),e}();!function(){"use strict";var e,n,i;e=$.fn.typeahead,n="ttTypeahead",i={initialize:function r(e,i){function r(){var r=$(this),s,o;t.each(i,function(t){t.highlight=!!e.highlight}),o=new m({input:r,eventBus:s=new h({el:r}),withHint:t.isUndefined(e.hint)?!0:!!e.hint,minLength:e.minLength,autoselect:e.autoselect,datasets:i}),r.data(n,o)}return i=t.isArray(i)?i:[].slice.call(arguments,1),e=e||{},this.each(r)},open:function s(){function t(){var t=$(this),e;(e=t.data(n))&&e.open()}return this.each(t)},close:function o(){function t(){var t=$(this),e;(e=t.data(n))&&e.close()}return this.each(t)},val:function u(t){function e(){var e=$(this),i;(i=e.data(n))&&i.setVal(t)}function i(t){var e,i;return(e=t.data(n))&&(i=e.getVal()),i}return arguments.length?this.each(e):i(this.first())},destroy:function a(){function t(){var t=$(this),e;(e=t.data(n))&&(e.destroy(),t.removeData(n))}return this.each(t)}},$.fn.typeahead=function(t){var e;return i[t]&&"initialize"!==t?(e=this.filter(function(){return!!$(this).data(n)}),i[t].apply(e,[].slice.call(arguments,1))):i.initialize.apply(this,arguments)},$.fn.typeahead.noConflict=function c(){return $.fn.typeahead=e,this}}()}(window.jQuery);