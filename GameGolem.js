/**
 * GameGolem v31.6.1150
 * http://rycochet.com/
 * http://code.google.com/p/game-golem/
 *
 * Copyright 2010-2011, Robin Cloutman
 * Licensed under the LGPL Version 3 license.
 * http://www.gnu.org/licenses/lgpl.html
 *
 * Includes jQuery JavaScript Library & jQuery UI
 * http://jquery.com/
 */
/*!
 * jQuery JavaScript Library v1.6.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu May 12 15:04:36 2011 -0400
 */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!cj[a]){var b=f("<"+a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),c.body.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write("<!doctype><html><body></body></html>");b=cl.createElement(a),cl.body.appendChild(b),d=f.css(b,"display"),c.body.removeChild(ck)}cj[a]=d}return cj[a]}function cu(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function ct(){cq=b}function cs(){setTimeout(ct,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bF.test(a)?d(a,e):b_(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bU,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bQ),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bD(a,b,c){var d=b==="width"?bx:by,e=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return e;f.each(d,function(){c||(e-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?e+=parseFloat(f.css(a,"margin"+this))||0:e-=parseFloat(f.css(a,"border"+this+"Width"))||0});return e}function bn(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bm(a){f.nodeName(a,"input")?bl(a):a.getElementsByTagName&&f.grep(a.getElementsByTagName("input"),bl)}function bl(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bk(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bj(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bi(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bh(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function X(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(S.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function W(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function O(a,b){return(a&&a!=="*"?a+".":"")+b.replace(A,"`").replace(B,"&")}function N(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(y,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function L(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function F(){return!0}function E(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function H(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(H,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=d.userAgent,x,y,z,A=Object.prototype.toString,B=Object.prototype.hasOwnProperty,C=Array.prototype.push,D=Array.prototype.slice,E=String.prototype.trim,F=Array.prototype.indexOf,G={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.1",length:0,size:function(){return this.length},toArray:function(){return D.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?C.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:C,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;y.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!y){y=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",z,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",z),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&H()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):G[A.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;if(a.constructor&&!B.call(a,"constructor")&&!B.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a);return c===b||B.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(b,c,d){a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),d=c.documentElement,(!d||!d.nodeName||d.nodeName==="parsererror")&&e.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:E?function(a){return a==null?"":E.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?C.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(F)return F.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=D.call(arguments,2),g=function(){return a.apply(c,f.concat(D.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){G["[object "+b+"]"]=b.toLowerCase()}),x=e.uaMatch(w),x.browser&&(e.browser[x.browser]=!0,e.browser.version=x.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?z=function(){c.removeEventListener("DOMContentLoaded",z,!1),e.ready()}:c.attachEvent&&(z=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",z),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g](h)}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};f=c.createElement("select"),g=f.appendChild(c.createElement("option")),h=a.getElementsByTagName("input")[0],j={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},h.checked=!0,j.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,j.optDisabled=!g.disabled;try{delete a.test}catch(s){j.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function b(){j.noCloneEvent=!1,a.detachEvent("onclick",b)}),a.cloneNode(!0).fireEvent("onclick")),h=c.createElement("input"),h.value="t",h.setAttribute("type","radio"),j.radioValue=h.value==="t",h.setAttribute("checked","checked"),a.appendChild(h),k=c.createDocumentFragment(),k.appendChild(a.firstChild),j.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",l=c.createElement("body"),m={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(q in m)l.style[q]=m[q];l.appendChild(a),b.insertBefore(l,b.firstChild),j.appendChecked=h.checked,j.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,j.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",j.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",n=a.getElementsByTagName("td"),r=n[0].offsetHeight===0,n[0].style.display="",n[1].style.display="none",j.reliableHiddenOffsets=r&&n[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(i=c.createElement("div"),i.style.width="0",i.style.marginRight="0",a.appendChild(i),j.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(i,null)||{marginRight:0}).marginRight,10)||0)===0),l.innerHTML="",b.removeChild(l);if(a.attachEvent)for(q in{submit:1,change:1,focusin:1})p="on"+q,r=p in a,r||(a.setAttribute(p,"return;"),r=typeof a[p]=="function"),j[q+"Bubbles"]=r;return j}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g=f.expando,h=typeof c=="string",i,j=a.nodeType,k=j?f.cache:a,l=j?a[f.expando]:a[f.expando]&&f.expando;if((!l||e&&l&&!k[l][g])&&h&&d===b)return;l||(j?a[f.expando]=l=++f.uuid:l=f.expando),k[l]||(k[l]={},j||(k[l].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?k[l][g]=f.extend(k[l][g],c):k[l]=f.extend(k[l],c);i=k[l],e&&(i[g]||(i[g]={}),i=i[g]),d!==b&&(i[f.camelCase(c)]=d);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[f.camelCase(c)]:i}},removeData:function(b,c,d){if(!!f.acceptData(b)){var e=f.expando,g=b.nodeType,h=g?f.cache:b,i=g?b[f.expando]:f.expando;if(!h[i])return;if(c){var j=d?h[i][e]:h[i];if(j){delete j[c];if(!l(j))return}}if(d){delete h[i][e];if(!l(h[i]))return}var k=h[i][e];f.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=k):g&&(f.support.deleteExpando?delete b[f.expando]:b.removeAttribute?b.removeAttribute(f.expando):b[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/\:/,v,w;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.addClass(a.call(this,b,c.attr("class")||""))});if(a&&typeof a=="string"){var b=(a||"").split(o);for(var c=0,d=this.length;c<d;c++){var e=this[c];if(e.nodeType===1)if(!e.className)e.className=a;else{var g=" "+e.className+" ",h=e.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);e.className=f.trim(h)}}}return this},removeClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a=="string"||a===b){var c=(a||"").split(o);for(var d=0,e=this.length;d<e;d++){var g=this[d];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(n," ");for(var i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){var d=f(this);d.toggleClass(a.call(this,c,d.attr("class"),b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;return(e.value||"").replace(p,"")}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);c=j&&f.attrFix[c]||c,i=f.attrHooks[c],i||(!t.test(c)||typeof d!="boolean"&&d!==b&&d.toLowerCase()!==c.toLowerCase()?v&&(f.nodeName(a,"form")||u.test(c))&&(i=v):i=w);if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j)return i.get(a,c);h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.support.getSetAttribute?a.removeAttribute(b):(f.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},tabIndex:{get:function(a){var c=a.getAttributeNode("tabIndex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);c=i&&f.propFix[c]||c,h=f.propHooks[c];return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==b?g:a[c]},propHooks:{}}),w={get:function(a,c){return a[f.propFix[c]||c]?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=b),a.setAttribute(c,c.toLowerCase()));return c}},f.attrHooks.value={get:function(a,b){if(v&&f.nodeName(a,"button"))return v.get(a,b);return a.value},set:function(a,b,c){if(v&&f.nodeName(a,"button"))return v.set(a,b,c);a.value=b}},f.support.getSetAttribute||(f.attrFix=f.propFix,v=f.attrHooks.name=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);if(d){d.nodeValue=b;return b}}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var x=Object.prototype.hasOwnProperty,y=/\.(.*)$/,z=/^(?:textarea|input|select)$/i,A=/\./g,B=/ /g,C=/[^\w\s.|`]/g,D=function(a){return a.replace(C,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=E;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=E);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),D).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem
)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,O(a.origType,a.selector),f.extend({},a,{handler:N,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,O(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?F:E):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=F;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=F;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=F,this.stopPropagation()},isDefaultPrevented:E,isPropagationStopped:E,isImmediatePropagationStopped:E};var G=function(a){var b=a.relatedTarget;a.type=a.data;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&f.event.handle.apply(this,arguments)}catch(d){}},H=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?H:G,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?H:G)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&f(b).closest("form").length&&L("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&L("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var I,J=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},K=function(c){var d=c.target,e,g;if(!!z.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=J(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:K,beforedeactivate:K,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&K.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&K.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",J(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in I)f.event.add(this,c+".specialChange",I[c]);return z.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return z.test(this.nodeName)}},I=f.event.special.change.filters,I.focus=I.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var M={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||E,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=y.exec(h),k="",j&&(k=j[0],h=h.replace(y,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,M[h]?(a.push(M[h]+k),h=h+k):h=(M[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+O(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+O(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var P=/Until$/,Q=/^(?:parents|prevUntil|prevAll)/,R=/,/,S=/^.[^:#\[\.,]*$/,T=Array.prototype.slice,U=f.expr.match.POS,V={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(X(this,a,!1),"not",a)},filter:function(a){return this.pushStack(X(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=U.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=U.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a=="string")return f.inArray(this[0],a?f(a):this.parent().children());return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(W(c[0])||W(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=T.call(arguments);P.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!V[a]?f.unique(e):e,(this.length>1||R.test(d))&&Q.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y=/ jQuery\d+="(?:\d+|null)"/g,Z=/^\s+/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,_=/<([\w:]+)/,ba=/<tbody/i,bb=/<|&#?\w+;/,bc=/<(?:script|object|embed|option|style)/i,bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Y,""):null;if(typeof a=="string"&&!bc.test(a)&&(f.support.leadingWhitespace||!Z.test(a))&&!bg[(_.exec(a)||["",""])[1].toLowerCase()]){a=a.replace($,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bh(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bn)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!bc.test(a[0])&&(f.support.checkClone||!bd.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bj(a,d),e=bk(a),g=bk(d);for(h=0;e[h];++h)bj(e[h],g[h])}if(b){bi(a,d);if(c){e=bk(a),g=bk(d);for(h=0;e[h];++h)bi(e[h],g[h])}}return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||
b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!bb.test(k))k=b.createTextNode(k);else{k=k.replace($,"<$1></$2>");var l=(_.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=ba.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&Z.test(k)&&o.insertBefore(b.createTextNode(Z.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bm(k[i]);else bm(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bo=/alpha\([^)]*\)/i,bp=/opacity=([^)]*)/,bq=/-([a-z])/ig,br=/([A-Z]|^ms)/g,bs=/^-?\d+(?:px)?$/i,bt=/^-?\d/,bu=/^[+\-]=/,bv=/[^+\-\.\de]+/g,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB,bC=function(a,b){return b.toUpperCase()};f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,widows:!0,orphans:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d;if(h==="number"&&isNaN(d)||d==null)return;h==="string"&&bu.test(d)&&(d=+d.replace(bv,"")+parseFloat(f.css(a,c))),h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bq,bC)}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){a.offsetWidth!==0?e=bD(a,b,d):f.swap(a,bw,function(){e=bD(a,b,d)});if(e<=0){e=bz(a,b,b),e==="0px"&&bB&&(e=bB(a,b,b));if(e!=null)return e===""||e==="auto"?"0px":e}if(e<0||e==null){e=a.style[b];return e===""||e==="auto"?"0px":e}return typeof e=="string"?e:e+"px"}},set:function(a,b){if(!bs.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bp.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle;c.zoom=1;var e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.filter=bo.test(g)?g.replace(bo,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,c){var d,e,g;c=c.replace(br,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bs.test(d)&&bt.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bE=/%20/g,bF=/\[\]$/,bG=/\r?\n/g,bH=/#.*$/,bI=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bJ=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bK=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bL=/^(?:GET|HEAD)$/,bM=/^\/\//,bN=/\?/,bO=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bP=/^(?:select|textarea)/i,bQ=/\s+/,bR=/([?&])_=[^&]*/,bS=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bT=f.fn.load,bU={},bV={},bW,bX;try{bW=e.href}catch(bY){bW=c.createElement("a"),bW.href="",bW=bW.href}bX=bS.exec(bW.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bT)return bT.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bO,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bP.test(this.nodeName)||bJ.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bG,"\r\n")}}):{name:b.name,value:c.replace(bG,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?f.extend(!0,a,f.ajaxSettings,b):(b=a,a=f.extend(!0,f.ajaxSettings,b));for(var c in{context:1,url:1})c in b?a[c]=b[c]:c in f.ajaxSettings&&(a[c]=f.ajaxSettings[c]);return a},ajaxSettings:{url:bW,isLocal:bK.test(bX[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML}},ajaxPrefilter:bZ(bU),ajaxTransport:bZ(bV),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a?4:0;var o,r,u,w=l?ca(d,v,l):b,x,y;if(a>=200&&a<300||a===304){if(d.ifModified){if(x=v.getResponseHeader("Last-Modified"))f.lastModified[k]=x;if(y=v.getResponseHeader("Etag"))f.etag[k]=y}if(a===304)c="notmodified",o=!0;else try{r=cb(d,w),c="success",o=!0}catch(z){c="parsererror",u=z}}else{u=c;if(!c||a)c="error",a<0&&(a=0)}v.status=a,v.statusText=c,o?h.resolveWith(e,[r,c,v]):h.rejectWith(e,[v,c,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,c]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bI.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bH,"").replace(bM,bX[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bQ),d.crossDomain==null&&(r=bS.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bX[1]&&r[2]==bX[2]&&(r[3]||(r[1]==="http:"?80:443))==(bX[3]||(bX[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bU,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bL.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bN.test(d.url)?"&":"?")+d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bR,"$1_="+x);d.url=y+(y===d.url?(bN.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", */*; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bV,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){status<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bE,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq,cr=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cv(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cm.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=cn.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this),f.isFunction(d.old)&&d.old.call(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function h(a){return d.step(a)}var d=this,e=f.fx,g;this.startTime=cq||cs(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,h.elem=this.elem,h()&&f.timers.push(h)&&!co&&(cr?(co=1,g=function(){co&&(cr(g),e.tick())},cr(g)):co=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cq||cs(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){return this[0]?parseFloat(f.css(this[0],d,"padding")):null},f.fn["outer"+c]=function(a){return this[0]?parseFloat(f.css(this[0],d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c];return e.document.compatMode==="CSS1Compat"&&g||e.document.body["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var h=f.css(e,d),i=parseFloat(h);return f.isNaN(i)?h:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);/*!
 * jQuery UI 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(a,d){function c(g,e){var i=g.nodeName.toLowerCase();if("area"===i){e=g.parentNode;i=e.name;if(!g.href||!i||e.nodeName.toLowerCase()!=="map")return false;g=a("img[usemap=#"+i+"]")[0];return!!g&&f(g)}return(/input|select|textarea|button|object/.test(i)?!g.disabled:"a"==i?g.href||e:e)&&f(g)}function f(g){return!a(g).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.13",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({_focus:a.fn.focus,focus:function(g,e){return typeof g==="number"?this.each(function(){var i=this;setTimeout(function(){a(i).focus();
e&&e.call(i)},g)}):this._focus.apply(this,arguments)},scrollParent:function(){var g;g=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,
"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!g.length?a(document):g},zIndex:function(g){if(g!==d)return this.css("zIndex",g);if(this.length){g=a(this[0]);for(var e;g.length&&g[0]!==document;){e=g.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){e=parseInt(g.css("zIndex"),10);if(!isNaN(e)&&e!==0)return e}g=g.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",
function(g){g.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});a.each(["Width","Height"],function(g,e){function i(l,o,n,k){a.each(b,function(){o-=parseFloat(a.curCSS(l,"padding"+this,true))||0;if(n)o-=parseFloat(a.curCSS(l,"border"+this+"Width",true))||0;if(k)o-=parseFloat(a.curCSS(l,"margin"+this,true))||0});return o}var b=e==="Width"?["Left","Right"]:["Top","Bottom"],h=e.toLowerCase(),j={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,
outerHeight:a.fn.outerHeight};a.fn["inner"+e]=function(l){if(l===d)return j["inner"+e].call(this);return this.each(function(){a(this).css(h,i(this,l)+"px")})};a.fn["outer"+e]=function(l,o){if(typeof l!=="number")return j["outer"+e].call(this,l);return this.each(function(){a(this).css(h,i(this,l,true,o)+"px")})}});a.extend(a.expr[":"],{data:function(g,e,i){return!!a.data(g,i[3])},focusable:function(g){return c(g,!isNaN(a.attr(g,"tabindex")))},tabbable:function(g){var e=a.attr(g,"tabindex"),i=isNaN(e);
return(i||e>=0)&&c(g,!i)}});a(function(){var g=document.body,e=g.appendChild(e=document.createElement("div"));a.extend(e.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=e.offsetHeight===100;a.support.selectstart="onselectstart"in e;g.removeChild(e).style.display="none"});a.extend(a.ui,{plugin:{add:function(g,e,i){g=a.ui[g].prototype;for(var b in i){g.plugins[b]=g.plugins[b]||[];g.plugins[b].push([e,i[b]])}},call:function(g,e,i){if((e=g.plugins[e])&&g.element[0].parentNode)for(var b=
0;b<e.length;b++)g.options[e[b][0]]&&e[b][1].apply(g.element,i)}},contains:function(g,e){return document.compareDocumentPosition?g.compareDocumentPosition(e)&16:g!==e&&g.contains(e)},hasScroll:function(g,e){if(a(g).css("overflow")==="hidden")return false;e=e&&e==="left"?"scrollLeft":"scrollTop";var i=false;if(g[e]>0)return true;g[e]=1;i=g[e]>0;g[e]=0;return i},isOverAxis:function(g,e,i){return g>e&&g<e+i},isOver:function(g,e,i,b,h,j){return a.ui.isOverAxis(g,i,h)&&a.ui.isOverAxis(e,b,j)}})}})(jQuery);
(function(a,d){if(a.cleanData){var c=a.cleanData;a.cleanData=function(g){for(var e=0,i;(i=g[e])!=null;e++)a(i).triggerHandler("remove");c(g)}}else{var f=a.fn.remove;a.fn.remove=function(g,e){return this.each(function(){if(!e)if(!g||a.filter(g,[this]).length)a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return f.call(a(this),g,e)})}}a.widget=function(g,e,i){var b=g.split(".")[0],h;g=g.split(".")[1];h=b+"-"+g;if(!i){i=e;e=a.Widget}a.expr[":"][h]=function(j){return!!a.data(j,
g)};a[b]=a[b]||{};a[b][g]=function(j,l){arguments.length&&this._createWidget(j,l)};e=new e;e.options=a.extend(true,{},e.options);a[b][g].prototype=a.extend(true,e,{namespace:b,widgetName:g,widgetEventPrefix:a[b][g].prototype.widgetEventPrefix||g,widgetBaseClass:h},i);a.widget.bridge(g,a[b][g])};a.widget.bridge=function(g,e){a.fn[g]=function(i){var b=typeof i==="string",h=Array.prototype.slice.call(arguments,1),j=this;i=!b&&h.length?a.extend.apply(null,[true,i].concat(h)):i;if(b&&i.charAt(0)==="_")return j;
b?this.each(function(){var l=a.data(this,g),o=l&&a.isFunction(l[i])?l[i].apply(l,h):l;if(o!==l&&o!==d){j=o;return false}}):this.each(function(){var l=a.data(this,g);l?l.option(i||{})._init():a.data(this,g,new e(i,this))});return j}};a.Widget=function(g,e){arguments.length&&this._createWidget(g,e)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(g,e){a.data(e,this.widgetName,this);this.element=a(e);this.options=a.extend(true,{},this.options,
this._getCreateOptions(),g);var i=this;this.element.bind("remove."+this.widgetName,function(){i.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(g,e){var i=g;if(arguments.length===0)return a.extend({},this.options);if(typeof g==="string"){if(e===d)return this.options[g];i={};i[g]=e}this._setOptions(i);return this},_setOptions:function(g){var e=this;a.each(g,function(i,b){e._setOption(i,b)});return this},_setOption:function(g,e){this.options[g]=e;if(g==="disabled")this.widget()[e?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",e);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(g,e,i){var b=this.options[g];e=a.Event(e);e.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase();i=i||{};if(e.originalEvent){g=a.event.props.length;for(var h;g;){h=a.event.props[--g];e[h]=e.originalEvent[h]}}this.element.trigger(e,i);return!(a.isFunction(b)&&b.call(this.element[0],e,i)===false||e.isDefaultPrevented())}}})(jQuery);
(function(a){var d=false;a(document).mousedown(function(){d=false});a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var c=this;this.element.bind("mousedown."+this.widgetName,function(f){return c._mouseDown(f)}).bind("click."+this.widgetName,function(f){if(true===a.data(f.target,c.widgetName+".preventClickEvent")){a.removeData(f.target,c.widgetName+".preventClickEvent");f.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(c){if(!d){this._mouseStarted&&this._mouseUp(c);this._mouseDownEvent=c;var f=this,g=c.which==1,e=typeof this.options.cancel=="string"?a(c.target).parents().add(c.target).filter(this.options.cancel).length:false;if(!g||e||!this._mouseCapture(c))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){f.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(c)&&this._mouseDelayMet(c)){this._mouseStarted=
this._mouseStart(c)!==false;if(!this._mouseStarted){c.preventDefault();return true}}true===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(i){return f._mouseMove(i)};this._mouseUpDelegate=function(i){return f._mouseUp(i)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);c.preventDefault();return d=true}},_mouseMove:function(c){if(a.browser.msie&&
!(document.documentMode>=9)&&!c.button)return this._mouseUp(c);if(this._mouseStarted){this._mouseDrag(c);return c.preventDefault()}if(this._mouseDistanceMet(c)&&this._mouseDelayMet(c))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,c)!==false)?this._mouseDrag(c):this._mouseUp(c);return!this._mouseStarted},_mouseUp:function(c){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;c.target==this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",true);this._mouseStop(c)}return false},_mouseDistanceMet:function(c){return Math.max(Math.abs(this._mouseDownEvent.pageX-c.pageX),Math.abs(this._mouseDownEvent.pageY-c.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(d){var c=
this.options;if(this.helper||c.disabled||a(d.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(d);if(!this.handle)return false;a(c.iframeFix===true?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(a(this).offset()).appendTo("body")});return true},_mouseStart:function(d){var c=this.options;this.helper=
this._createHelper(d);this._cacheHelperProportions();if(a.ui.ddmanager)a.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt);c.containment&&this._setContainment();if(this._trigger("start",d)===false){this._clear();return false}this._cacheHelperProportions();a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,d);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(d,true);return true},_mouseDrag:function(d,c){this.position=this._generatePosition(d);
this.positionAbs=this._convertPositionTo("absolute");if(!c){c=this._uiHash();if(this._trigger("drag",d,c)===false){this._mouseUp({});return false}this.position=c.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";a.ui.ddmanager&&a.ui.ddmanager.drag(this,d);return false},_mouseStop:function(d){var c=false;if(a.ui.ddmanager&&!this.options.dropBehaviour)c=
a.ui.ddmanager.drop(this,d);if(this.dropped){c=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===true||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",d)!==false&&f._clear()})}else this._trigger("stop",
d)!==false&&this._clear();return false},_mouseUp:function(d){this.options.iframeFix===true&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});return a.ui.mouse.prototype._mouseUp.call(this,d)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(d){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
d.target)c=true});return c},_createHelper:function(d){var c=this.options;d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[d])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo);d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(d){if(typeof d=="string")d=d.split(" ");if(a.isArray(d))d=
{left:+d[0],top:+d[1]||0};if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&
a.ui.contains(this.scrollParent[0],this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)d={top:0,left:0};return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var d=
this.element.position();return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions=
{width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[(d.containment=="document"?0:a(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(d.containment=="document"?0:a(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(d.containment=="document"?0:a(window).scrollLeft())+
a(d.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d.containment=="document"?0:a(window).scrollTop())+(a(d.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)&&d.containment.constructor!=Array){d=a(d.containment);var c=d[0];if(c){d.offset();var f=a(c).css("overflow")!="hidden";this.containment=[(parseInt(a(c).css("borderLeftWidth"),
10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0),(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0),(f?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-
this.margins.top-this.margins.bottom];this.relative_container=d}}else if(d.containment.constructor==Array)this.containment=d.containment},_convertPositionTo:function(d,c){if(!c)c=this.position;d=d=="absolute"?1:-1;var f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&
a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(d){var c=this.options,f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName),e=d.pageX,i=d.pageY;if(this.originalPosition){var b;if(this.containment){if(this.relative_container){b=this.relative_container.offset();b=[this.containment[0]+b.left,this.containment[1]+b.top,this.containment[2]+b.left,this.containment[3]+b.top]}else b=this.containment;if(d.pageX-this.offset.click.left<b[0])e=b[0]+this.offset.click.left;if(d.pageY-this.offset.click.top<b[1])i=b[1]+this.offset.click.top;
if(d.pageX-this.offset.click.left>b[2])e=b[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>b[3])i=b[3]+this.offset.click.top}if(c.grid){i=this.originalPageY+Math.round((i-this.originalPageY)/c.grid[1])*c.grid[1];i=b?!(i-this.offset.click.top<b[1]||i-this.offset.click.top>b[3])?i:!(i-this.offset.click.top<b[1])?i-c.grid[1]:i+c.grid[1]:i;e=this.originalPageX+Math.round((e-this.originalPageX)/c.grid[0])*c.grid[0];e=b?!(e-this.offset.click.left<b[0]||e-this.offset.click.left>b[2])?e:!(e-this.offset.click.left<
b[0])?e-c.grid[0]:e+c.grid[0]:e}}return{top:i-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(d,c,f){f=f||this._uiHash();a.ui.plugin.call(this,d,[c,f]);if(d=="drag")this.positionAbs=this._convertPositionTo("absolute");return a.Widget.prototype._trigger.call(this,d,c,f)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});a.extend(a.ui.draggable,{version:"1.8.13"});
a.ui.plugin.add("draggable","connectToSortable",{start:function(d,c){var f=a(this).data("draggable"),g=f.options,e=a.extend({},c,{item:f.element});f.sortables=[];a(g.connectToSortable).each(function(){var i=a.data(this,"sortable");if(i&&!i.options.disabled){f.sortables.push({instance:i,shouldRevert:i.options.revert});i.refreshPositions();i._trigger("activate",d,e)}})},stop:function(d,c){var f=a(this).data("draggable"),g=a.extend({},c,{item:f.element});a.each(f.sortables,function(){if(this.instance.isOver){this.instance.isOver=
0;f.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(d);this.instance.options.helper=this.instance.options._helper;f.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",d,g)}})},drag:function(d,c){var f=a(this).data("draggable"),g=this;a.each(f.sortables,function(){this.instance.positionAbs=
f.positionAbs;this.instance.helperProportions=f.helperProportions;this.instance.offset.click=f.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(g).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return c.helper[0]};d.target=this.instance.currentItem[0];this.instance._mouseCapture(d,
true);this.instance._mouseStart(d,true,true);this.instance.offset.click.top=f.offset.click.top;this.instance.offset.click.left=f.offset.click.left;this.instance.offset.parent.left-=f.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=f.offset.parent.top-this.instance.offset.parent.top;f._trigger("toSortable",d);f.dropped=this.instance.element;f.currentItem=f.element;this.instance.fromOutside=f}this.instance.currentItem&&this.instance._mouseDrag(d)}else if(this.instance.isOver){this.instance.isOver=
0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",d,this.instance._uiHash(this.instance));this.instance._mouseStop(d,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();f._trigger("fromSortable",d);f.dropped=false}})}});a.ui.plugin.add("draggable","cursor",{start:function(){var d=a("body"),c=a(this).data("draggable").options;if(d.css("cursor"))c._cursor=
d.css("cursor");d.css("cursor",c.cursor)},stop:function(){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}});a.ui.plugin.add("draggable","opacity",{start:function(d,c){d=a(c.helper);c=a(this).data("draggable").options;if(d.css("opacity"))c._opacity=d.css("opacity");d.css("opacity",c.opacity)},stop:function(d,c){d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}});a.ui.plugin.add("draggable","scroll",{start:function(){var d=a(this).data("draggable");
if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML")d.overflowOffset=d.scrollParent.offset()},drag:function(d){var c=a(this).data("draggable"),f=c.options,g=false;if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){if(!f.axis||f.axis!="x")if(c.overflowOffset.top+c.scrollParent[0].offsetHeight-d.pageY<f.scrollSensitivity)c.scrollParent[0].scrollTop=g=c.scrollParent[0].scrollTop+f.scrollSpeed;else if(d.pageY-c.overflowOffset.top<f.scrollSensitivity)c.scrollParent[0].scrollTop=
g=c.scrollParent[0].scrollTop-f.scrollSpeed;if(!f.axis||f.axis!="y")if(c.overflowOffset.left+c.scrollParent[0].offsetWidth-d.pageX<f.scrollSensitivity)c.scrollParent[0].scrollLeft=g=c.scrollParent[0].scrollLeft+f.scrollSpeed;else if(d.pageX-c.overflowOffset.left<f.scrollSensitivity)c.scrollParent[0].scrollLeft=g=c.scrollParent[0].scrollLeft-f.scrollSpeed}else{if(!f.axis||f.axis!="x")if(d.pageY-a(document).scrollTop()<f.scrollSensitivity)g=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed);
else if(a(window).height()-(d.pageY-a(document).scrollTop())<f.scrollSensitivity)g=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed);if(!f.axis||f.axis!="y")if(d.pageX-a(document).scrollLeft()<f.scrollSensitivity)g=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed);else if(a(window).width()-(d.pageX-a(document).scrollLeft())<f.scrollSensitivity)g=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)}g!==false&&a.ui.ddmanager&&!f.dropBehaviour&&a.ui.ddmanager.prepareOffsets(c,
d)}});a.ui.plugin.add("draggable","snap",{start:function(){var d=a(this).data("draggable"),c=d.options;d.snapElements=[];a(c.snap.constructor!=String?c.snap.items||":data(draggable)":c.snap).each(function(){var f=a(this),g=f.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:f.outerWidth(),height:f.outerHeight(),top:g.top,left:g.left})})},drag:function(d,c){for(var f=a(this).data("draggable"),g=f.options,e=g.snapTolerance,i=c.offset.left,b=i+f.helperProportions.width,h=c.offset.top,
j=h+f.helperProportions.height,l=f.snapElements.length-1;l>=0;l--){var o=f.snapElements[l].left,n=o+f.snapElements[l].width,k=f.snapElements[l].top,m=k+f.snapElements[l].height;if(o-e<i&&i<n+e&&k-e<h&&h<m+e||o-e<i&&i<n+e&&k-e<j&&j<m+e||o-e<b&&b<n+e&&k-e<h&&h<m+e||o-e<b&&b<n+e&&k-e<j&&j<m+e){if(g.snapMode!="inner"){var p=Math.abs(k-j)<=e,q=Math.abs(m-h)<=e,s=Math.abs(o-b)<=e,r=Math.abs(n-i)<=e;if(p)c.position.top=f._convertPositionTo("relative",{top:k-f.helperProportions.height,left:0}).top-f.margins.top;
if(q)c.position.top=f._convertPositionTo("relative",{top:m,left:0}).top-f.margins.top;if(s)c.position.left=f._convertPositionTo("relative",{top:0,left:o-f.helperProportions.width}).left-f.margins.left;if(r)c.position.left=f._convertPositionTo("relative",{top:0,left:n}).left-f.margins.left}var u=p||q||s||r;if(g.snapMode!="outer"){p=Math.abs(k-h)<=e;q=Math.abs(m-j)<=e;s=Math.abs(o-i)<=e;r=Math.abs(n-b)<=e;if(p)c.position.top=f._convertPositionTo("relative",{top:k,left:0}).top-f.margins.top;if(q)c.position.top=
f._convertPositionTo("relative",{top:m-f.helperProportions.height,left:0}).top-f.margins.top;if(s)c.position.left=f._convertPositionTo("relative",{top:0,left:o}).left-f.margins.left;if(r)c.position.left=f._convertPositionTo("relative",{top:0,left:n-f.helperProportions.width}).left-f.margins.left}if(!f.snapElements[l].snapping&&(p||q||s||r||u))f.options.snap.snap&&f.options.snap.snap.call(f.element,d,a.extend(f._uiHash(),{snapItem:f.snapElements[l].item}));f.snapElements[l].snapping=p||q||s||r||u}else{f.snapElements[l].snapping&&
f.options.snap.release&&f.options.snap.release.call(f.element,d,a.extend(f._uiHash(),{snapItem:f.snapElements[l].item}));f.snapElements[l].snapping=false}}}});a.ui.plugin.add("draggable","stack",{start:function(){var d=a(this).data("draggable").options;d=a.makeArray(a(d.stack)).sort(function(f,g){return(parseInt(a(f).css("zIndex"),10)||0)-(parseInt(a(g).css("zIndex"),10)||0)});if(d.length){var c=parseInt(d[0].style.zIndex)||0;a(d).each(function(f){this.style.zIndex=c+f});this[0].style.zIndex=c+d.length}}});
a.ui.plugin.add("draggable","zIndex",{start:function(d,c){d=a(c.helper);c=a(this).data("draggable").options;if(d.css("zIndex"))c._zIndex=d.css("zIndex");d.css("zIndex",c.zIndex)},stop:function(d,c){d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);
(function(a){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,c=d.accept;this.isover=0;this.isout=1;this.accept=a.isFunction(c)?c:function(f){return f.is(c)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[d.scope]=a.ui.ddmanager.droppables[d.scope]||[];a.ui.ddmanager.droppables[d.scope].push(this);
d.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var d=a.ui.ddmanager.droppables[this.options.scope],c=0;c<d.length;c++)d[c]==this&&d.splice(c,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(d,c){if(d=="accept")this.accept=a.isFunction(c)?c:function(f){return f.is(c)};a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(d){var c=a.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);c&&this._trigger("activate",d,this.ui(c))},_deactivate:function(d){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);c&&this._trigger("deactivate",d,this.ui(c))},_over:function(d){var c=a.ui.ddmanager.current;if(!(!c||(c.currentItem||c.element)[0]==this.element[0]))if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",d,this.ui(c))}},_out:function(d){var c=a.ui.ddmanager.current;if(!(!c||(c.currentItem||c.element)[0]==this.element[0]))if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",d,this.ui(c))}},_drop:function(d,c){var f=c||a.ui.ddmanager.current;if(!f||(f.currentItem||f.element)[0]==this.element[0])return false;var g=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var e=
a.data(this,"droppable");if(e.options.greedy&&!e.options.disabled&&e.options.scope==f.options.scope&&e.accept.call(e.element[0],f.currentItem||f.element)&&a.ui.intersect(f,a.extend(e,{offset:e.element.offset()}),e.options.tolerance)){g=true;return false}});if(g)return false;if(this.accept.call(this.element[0],f.currentItem||f.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
d,this.ui(f));return this.element}return false},ui:function(d){return{draggable:d.currentItem||d.element,helper:d.helper,position:d.position,offset:d.positionAbs}}});a.extend(a.ui.droppable,{version:"1.8.13"});a.ui.intersect=function(d,c,f){if(!c.offset)return false;var g=(d.positionAbs||d.position.absolute).left,e=g+d.helperProportions.width,i=(d.positionAbs||d.position.absolute).top,b=i+d.helperProportions.height,h=c.offset.left,j=h+c.proportions.width,l=c.offset.top,o=l+c.proportions.height;
switch(f){case "fit":return h<=g&&e<=j&&l<=i&&b<=o;case "intersect":return h<g+d.helperProportions.width/2&&e-d.helperProportions.width/2<j&&l<i+d.helperProportions.height/2&&b-d.helperProportions.height/2<o;case "pointer":return a.ui.isOver((d.positionAbs||d.position.absolute).top+(d.clickOffset||d.offset.click).top,(d.positionAbs||d.position.absolute).left+(d.clickOffset||d.offset.click).left,l,h,c.proportions.height,c.proportions.width);case "touch":return(i>=l&&i<=o||b>=l&&b<=o||i<l&&b>o)&&(g>=
h&&g<=j||e>=h&&e<=j||g<h&&e>j);default:return false}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(d,c){var f=a.ui.ddmanager.droppables[d.options.scope]||[],g=c?c.type:null,e=(d.currentItem||d.element).find(":data(droppable)").andSelf(),i=0;a:for(;i<f.length;i++)if(!(f[i].options.disabled||d&&!f[i].accept.call(f[i].element[0],d.currentItem||d.element))){for(var b=0;b<e.length;b++)if(e[b]==f[i].element[0]){f[i].proportions.height=0;continue a}f[i].visible=f[i].element.css("display")!=
"none";if(f[i].visible){g=="mousedown"&&f[i]._activate.call(f[i],c);f[i].offset=f[i].element.offset();f[i].proportions={width:f[i].element[0].offsetWidth,height:f[i].element[0].offsetHeight}}}},drop:function(d,c){var f=false;a.each(a.ui.ddmanager.droppables[d.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&a.ui.intersect(d,this,this.options.tolerance))f=f||this._drop.call(this,c);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],d.currentItem||
d.element)){this.isout=1;this.isover=0;this._deactivate.call(this,c)}}});return f},drag:function(d,c){d.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(d,c);a.each(a.ui.ddmanager.droppables[d.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var f=a.ui.intersect(d,this,this.options.tolerance);if(f=!f&&this.isover==1?"isout":f&&this.isover==0?"isover":null){var g;if(this.options.greedy){var e=this.element.parents(":data(droppable):eq(0)");if(e.length){g=
a.data(e[0],"droppable");g.greedyChild=f=="isover"?1:0}}if(g&&f=="isover"){g.isover=0;g.isout=1;g._out.call(g,c)}this[f]=1;this[f=="isout"?"isover":"isout"]=0;this[f=="isover"?"_over":"_out"].call(this,c);if(g&&f=="isout"){g.isout=0;g.isover=1;g._over.call(g,c)}}}})}}})(jQuery);
(function(a){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var f=this,g=this.options;this.element.addClass("ui-resizable");a.extend(this,{_aspectRatio:!!g.aspectRatio,aspectRatio:g.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:g.helper||g.ghost||g.animate?g.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&a.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=g.handles||(!a(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var e=this.handles.split(",");this.handles={};for(var i=0;i<e.length;i++){var b=a.trim(e[i]),h=a('<div class="ui-resizable-handle '+("ui-resizable-"+b)+'"></div>');/sw|se|ne|nw/.test(b)&&h.css({zIndex:++g.zIndex});"se"==b&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[b]=".ui-resizable-"+b;this.element.append(h)}}this._renderAxis=function(j){j=j||this.element;for(var l in this.handles){if(this.handles[l].constructor==
String)this.handles[l]=a(this.handles[l],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var o=a(this.handles[l],this.element),n=0;n=/sw|ne|nw|se|n|s/.test(l)?o.outerHeight():o.outerWidth();o=["padding",/ne|nw|n/.test(l)?"Top":/se|sw|s/.test(l)?"Bottom":/^e$/.test(l)?"Right":"Left"].join("");j.css(o,n);this._proportionallyResize()}a(this.handles[l])}};this._renderAxis(this.element);this._handles=a(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!f.resizing){if(this.className)var j=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);f.axis=j&&j[1]?j[1]:"se"}});if(g.autoHide){this._handles.hide();a(this.element).addClass("ui-resizable-autohide").hover(function(){if(!g.disabled){a(this).removeClass("ui-resizable-autohide");f._handles.show()}},function(){if(!g.disabled)if(!f.resizing){a(this).addClass("ui-resizable-autohide");f._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();
var f=function(e){a(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){f(this.element);var g=this.element;g.after(this.originalElement.css({position:g.css("position"),width:g.outerWidth(),height:g.outerHeight(),top:g.css("top"),left:g.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);f(this.originalElement);return this},_mouseCapture:function(f){var g=
false;for(var e in this.handles)if(a(this.handles[e])[0]==f.target)g=true;return!this.options.disabled&&g},_mouseStart:function(f){var g=this.options,e=this.element.position(),i=this.element;this.resizing=true;this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()};if(i.is(".ui-draggable")||/absolute/.test(i.css("position")))i.css({position:"absolute",top:e.top,left:e.left});a.browser.opera&&/relative/.test(i.css("position"))&&i.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();e=d(this.helper.css("left"));var b=d(this.helper.css("top"));if(g.containment){e+=a(g.containment).scrollLeft()||0;b+=a(g.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:e,top:b};this.size=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()};this.originalSize=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()};this.originalPosition={left:e,top:b};this.sizeDiff=
{width:i.outerWidth()-i.width(),height:i.outerHeight()-i.height()};this.originalMousePosition={left:f.pageX,top:f.pageY};this.aspectRatio=typeof g.aspectRatio=="number"?g.aspectRatio:this.originalSize.width/this.originalSize.height||1;g=a(".ui-resizable-"+this.axis).css("cursor");a("body").css("cursor",g=="auto"?this.axis+"-resize":g);i.addClass("ui-resizable-resizing");this._propagate("start",f);return true},_mouseDrag:function(f){var g=this.helper,e=this.originalMousePosition,i=this._change[this.axis];
if(!i)return false;e=i.apply(this,[f,f.pageX-e.left||0,f.pageY-e.top||0]);if(this._aspectRatio||f.shiftKey)e=this._updateRatio(e,f);e=this._respectSize(e,f);this._propagate("resize",f);g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(e);this._trigger("resize",f,this.ui());return false},_mouseStop:function(f){this.resizing=
false;var g=this.options,e=this;if(this._helper){var i=this._proportionallyResizeElements,b=i.length&&/textarea/i.test(i[0].nodeName);i=b&&a.ui.hasScroll(i[0],"left")?0:e.sizeDiff.height;b=b?0:e.sizeDiff.width;b={width:e.helper.width()-b,height:e.helper.height()-i};i=parseInt(e.element.css("left"),10)+(e.position.left-e.originalPosition.left)||null;var h=parseInt(e.element.css("top"),10)+(e.position.top-e.originalPosition.top)||null;g.animate||this.element.css(a.extend(b,{top:h,left:i}));e.helper.height(e.size.height);
e.helper.width(e.size.width);this._helper&&!g.animate&&this._proportionallyResize()}a("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",f);this._helper&&this.helper.remove();return false},_updateCache:function(f){this.offset=this.helper.offset();if(c(f.left))this.position.left=f.left;if(c(f.top))this.position.top=f.top;if(c(f.height))this.size.height=f.height;if(c(f.width))this.size.width=f.width},_updateRatio:function(f){var g=this.position,e=this.size,
i=this.axis;if(f.height)f.width=e.height*this.aspectRatio;else if(f.width)f.height=e.width/this.aspectRatio;if(i=="sw"){f.left=g.left+(e.width-f.width);f.top=null}if(i=="nw"){f.top=g.top+(e.height-f.height);f.left=g.left+(e.width-f.width)}return f},_respectSize:function(f){var g=this.options,e=this.axis,i=c(f.width)&&g.maxWidth&&g.maxWidth<f.width,b=c(f.height)&&g.maxHeight&&g.maxHeight<f.height,h=c(f.width)&&g.minWidth&&g.minWidth>f.width,j=c(f.height)&&g.minHeight&&g.minHeight>f.height;if(h)f.width=
g.minWidth;if(j)f.height=g.minHeight;if(i)f.width=g.maxWidth;if(b)f.height=g.maxHeight;var l=this.originalPosition.left+this.originalSize.width,o=this.position.top+this.size.height,n=/sw|nw|w/.test(e);e=/nw|ne|n/.test(e);if(h&&n)f.left=l-g.minWidth;if(i&&n)f.left=l-g.maxWidth;if(j&&e)f.top=o-g.minHeight;if(b&&e)f.top=o-g.maxHeight;if((g=!f.width&&!f.height)&&!f.left&&f.top)f.top=null;else if(g&&!f.top&&f.left)f.left=null;return f},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var f=
this.helper||this.element,g=0;g<this._proportionallyResizeElements.length;g++){var e=this._proportionallyResizeElements[g];if(!this.borderDif){var i=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],b=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(i,function(h,j){h=parseInt(h,10)||0;j=parseInt(b[j],10)||0;return h+j})}a.browser.msie&&(a(f).is(":hidden")||a(f).parents(":hidden").length)||
e.css({height:f.height()-this.borderDif[0]-this.borderDif[2]||0,width:f.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var f=this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var g=a.browser.msie&&a.browser.version<7,e=g?1:0;g=g?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-
e+"px",top:this.elementOffset.top-e+"px",zIndex:++f.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(f,g){return{width:this.originalSize.width+g}},w:function(f,g){return{left:this.originalPosition.left+g,width:this.originalSize.width-g}},n:function(f,g,e){return{top:this.originalPosition.top+e,height:this.originalSize.height-e}},s:function(f,g,e){return{height:this.originalSize.height+e}},se:function(f,g,e){return a.extend(this._change.s.apply(this,
arguments),this._change.e.apply(this,[f,g,e]))},sw:function(f,g,e){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,g,e]))},ne:function(f,g,e){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,g,e]))},nw:function(f,g,e){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,g,e]))}},_propagate:function(f,g){a.ui.plugin.call(this,f,[g,this.ui()]);f!="resize"&&this._trigger(f,g,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,
element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});a.extend(a.ui.resizable,{version:"1.8.13"});a.ui.plugin.add("resizable","alsoResize",{start:function(){var f=a(this).data("resizable").options,g=function(e){a(e).each(function(){var i=a(this);i.data("resizable-alsoresize",{width:parseInt(i.width(),10),height:parseInt(i.height(),10),left:parseInt(i.css("left"),10),top:parseInt(i.css("top"),10),position:i.css("position")})})};
if(typeof f.alsoResize=="object"&&!f.alsoResize.parentNode)if(f.alsoResize.length){f.alsoResize=f.alsoResize[0];g(f.alsoResize)}else a.each(f.alsoResize,function(e){g(e)});else g(f.alsoResize)},resize:function(f,g){var e=a(this).data("resizable");f=e.options;var i=e.originalSize,b=e.originalPosition,h={height:e.size.height-i.height||0,width:e.size.width-i.width||0,top:e.position.top-b.top||0,left:e.position.left-b.left||0},j=function(l,o){a(l).each(function(){var n=a(this),k=a(this).data("resizable-alsoresize"),
m={},p=o&&o.length?o:n.parents(g.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(p,function(q,s){if((q=(k[s]||0)+(h[s]||0))&&q>=0)m[s]=q||null});if(a.browser.opera&&/relative/.test(n.css("position"))){e._revertToRelativePosition=true;n.css({position:"absolute",top:"auto",left:"auto"})}n.css(m)})};typeof f.alsoResize=="object"&&!f.alsoResize.nodeType?a.each(f.alsoResize,function(l,o){j(l,o)}):j(f.alsoResize)},stop:function(){var f=a(this).data("resizable"),g=f.options,
e=function(i){a(i).each(function(){var b=a(this);b.css({position:b.data("resizable-alsoresize").position})})};if(f._revertToRelativePosition){f._revertToRelativePosition=false;typeof g.alsoResize=="object"&&!g.alsoResize.nodeType?a.each(g.alsoResize,function(i){e(i)}):e(g.alsoResize)}a(this).removeData("resizable-alsoresize")}});a.ui.plugin.add("resizable","animate",{stop:function(f){var g=a(this).data("resizable"),e=g.options,i=g._proportionallyResizeElements,b=i.length&&/textarea/i.test(i[0].nodeName),
h=b&&a.ui.hasScroll(i[0],"left")?0:g.sizeDiff.height;b={width:g.size.width-(b?0:g.sizeDiff.width),height:g.size.height-h};h=parseInt(g.element.css("left"),10)+(g.position.left-g.originalPosition.left)||null;var j=parseInt(g.element.css("top"),10)+(g.position.top-g.originalPosition.top)||null;g.element.animate(a.extend(b,j&&h?{top:j,left:h}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var l={width:parseInt(g.element.css("width"),10),height:parseInt(g.element.css("height"),
10),top:parseInt(g.element.css("top"),10),left:parseInt(g.element.css("left"),10)};i&&i.length&&a(i[0]).css({width:l.width,height:l.height});g._updateCache(l);g._propagate("resize",f)}})}});a.ui.plugin.add("resizable","containment",{start:function(){var f=a(this).data("resizable"),g=f.element,e=f.options.containment;if(g=e instanceof a?e.get(0):/parent/.test(e)?g.parent().get(0):e){f.containerElement=a(g);if(/document/.test(e)||e==document){f.containerOffset={left:0,top:0};f.containerPosition={left:0,
top:0};f.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}}else{var i=a(g),b=[];a(["Top","Right","Left","Bottom"]).each(function(l,o){b[l]=d(i.css("padding"+o))});f.containerOffset=i.offset();f.containerPosition=i.position();f.containerSize={height:i.innerHeight()-b[3],width:i.innerWidth()-b[1]};e=f.containerOffset;var h=f.containerSize.height,j=f.containerSize.width;j=a.ui.hasScroll(g,"left")?g.scrollWidth:j;
h=a.ui.hasScroll(g)?g.scrollHeight:h;f.parentData={element:g,left:e.left,top:e.top,width:j,height:h}}}},resize:function(f){var g=a(this).data("resizable"),e=g.options,i=g.containerOffset,b=g.position;f=g._aspectRatio||f.shiftKey;var h={top:0,left:0},j=g.containerElement;if(j[0]!=document&&/static/.test(j.css("position")))h=i;if(b.left<(g._helper?i.left:0)){g.size.width+=g._helper?g.position.left-i.left:g.position.left-h.left;if(f)g.size.height=g.size.width/e.aspectRatio;g.position.left=e.helper?i.left:
0}if(b.top<(g._helper?i.top:0)){g.size.height+=g._helper?g.position.top-i.top:g.position.top;if(f)g.size.width=g.size.height*e.aspectRatio;g.position.top=g._helper?i.top:0}g.offset.left=g.parentData.left+g.position.left;g.offset.top=g.parentData.top+g.position.top;e=Math.abs((g._helper?g.offset.left-h.left:g.offset.left-h.left)+g.sizeDiff.width);i=Math.abs((g._helper?g.offset.top-h.top:g.offset.top-i.top)+g.sizeDiff.height);b=g.containerElement.get(0)==g.element.parent().get(0);h=/relative|absolute/.test(g.containerElement.css("position"));
if(b&&h)e-=g.parentData.left;if(e+g.size.width>=g.parentData.width){g.size.width=g.parentData.width-e;if(f)g.size.height=g.size.width/g.aspectRatio}if(i+g.size.height>=g.parentData.height){g.size.height=g.parentData.height-i;if(f)g.size.width=g.size.height*g.aspectRatio}},stop:function(){var f=a(this).data("resizable"),g=f.options,e=f.containerOffset,i=f.containerPosition,b=f.containerElement,h=a(f.helper),j=h.offset(),l=h.outerWidth()-f.sizeDiff.width;h=h.outerHeight()-f.sizeDiff.height;f._helper&&
!g.animate&&/relative/.test(b.css("position"))&&a(this).css({left:j.left-i.left-e.left,width:l,height:h});f._helper&&!g.animate&&/static/.test(b.css("position"))&&a(this).css({left:j.left-i.left-e.left,width:l,height:h})}});a.ui.plugin.add("resizable","ghost",{start:function(){var f=a(this).data("resizable"),g=f.options,e=f.size;f.ghost=f.originalElement.clone();f.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof g.ghost==
"string"?g.ghost:"");f.ghost.appendTo(f.helper)},resize:function(){var f=a(this).data("resizable");f.ghost&&f.ghost.css({position:"relative",height:f.size.height,width:f.size.width})},stop:function(){var f=a(this).data("resizable");f.ghost&&f.helper&&f.helper.get(0).removeChild(f.ghost.get(0))}});a.ui.plugin.add("resizable","grid",{resize:function(){var f=a(this).data("resizable"),g=f.options,e=f.size,i=f.originalSize,b=f.originalPosition,h=f.axis;g.grid=typeof g.grid=="number"?[g.grid,g.grid]:g.grid;
var j=Math.round((e.width-i.width)/(g.grid[0]||1))*(g.grid[0]||1);g=Math.round((e.height-i.height)/(g.grid[1]||1))*(g.grid[1]||1);if(/^(se|s|e)$/.test(h)){f.size.width=i.width+j;f.size.height=i.height+g}else if(/^(ne)$/.test(h)){f.size.width=i.width+j;f.size.height=i.height+g;f.position.top=b.top-g}else{if(/^(sw)$/.test(h)){f.size.width=i.width+j;f.size.height=i.height+g}else{f.size.width=i.width+j;f.size.height=i.height+g;f.position.top=b.top-g}f.position.left=b.left-j}}});var d=function(f){return parseInt(f,
10)||0},c=function(f){return!isNaN(parseInt(f,10))}})(jQuery);
(function(a){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var d=this;this.element.addClass("ui-selectable");this.dragged=false;var c;this.refresh=function(){c=a(d.options.filter,d.element[0]);c.each(function(){var f=a(this),g=f.offset();a.data(this,"selectable-item",{element:this,$element:f,left:g.left,top:g.top,right:g.left+f.outerWidth(),bottom:g.top+f.outerHeight(),startselected:false,selected:f.hasClass("ui-selected"),
selecting:f.hasClass("ui-selecting"),unselecting:f.hasClass("ui-unselecting")})})};this.refresh();this.selectees=c.addClass("ui-selectee");this._mouseInit();this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(d){var c=this;this.opos=[d.pageX,
d.pageY];if(!this.options.disabled){var f=this.options;this.selectees=a(f.filter,this.element[0]);this._trigger("start",d);a(f.appendTo).append(this.helper);this.helper.css({left:d.clientX,top:d.clientY,width:0,height:0});f.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var g=a.data(this,"selectable-item");g.startselected=true;if(!d.metaKey){g.$element.removeClass("ui-selected");g.selected=false;g.$element.addClass("ui-unselecting");g.unselecting=true;c._trigger("unselecting",
d,{unselecting:g.element})}});a(d.target).parents().andSelf().each(function(){var g=a.data(this,"selectable-item");if(g){var e=!d.metaKey||!g.$element.hasClass("ui-selected");g.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting");g.unselecting=!e;g.selecting=e;(g.selected=e)?c._trigger("selecting",d,{selecting:g.element}):c._trigger("unselecting",d,{unselecting:g.element});return false}})}},_mouseDrag:function(d){var c=this;this.dragged=true;if(!this.options.disabled){var f=
this.options,g=this.opos[0],e=this.opos[1],i=d.pageX,b=d.pageY;if(g>i){var h=i;i=g;g=h}if(e>b){h=b;b=e;e=h}this.helper.css({left:g,top:e,width:i-g,height:b-e});this.selectees.each(function(){var j=a.data(this,"selectable-item");if(!(!j||j.element==c.element[0])){var l=false;if(f.tolerance=="touch")l=!(j.left>i||j.right<g||j.top>b||j.bottom<e);else if(f.tolerance=="fit")l=j.left>g&&j.right<i&&j.top>e&&j.bottom<b;if(l){if(j.selected){j.$element.removeClass("ui-selected");j.selected=false}if(j.unselecting){j.$element.removeClass("ui-unselecting");
j.unselecting=false}if(!j.selecting){j.$element.addClass("ui-selecting");j.selecting=true;c._trigger("selecting",d,{selecting:j.element})}}else{if(j.selecting)if(d.metaKey&&j.startselected){j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true}else{j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){j.$element.addClass("ui-unselecting");j.unselecting=true}c._trigger("unselecting",d,{unselecting:j.element})}if(j.selected)if(!d.metaKey&&
!j.startselected){j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;c._trigger("unselecting",d,{unselecting:j.element})}}}});return false}},_mouseStop:function(d){var c=this;this.dragged=false;a(".ui-unselecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");f.$element.removeClass("ui-unselecting");f.unselecting=false;f.startselected=false;c._trigger("unselected",d,{unselected:f.element})});a(".ui-selecting",this.element[0]).each(function(){var f=
a.data(this,"selectable-item");f.$element.removeClass("ui-selecting").addClass("ui-selected");f.selecting=false;f.selected=true;f.startselected=true;c._trigger("selected",d,{selected:f.element})});this._trigger("stop",d);this.helper.remove();return false}});a.extend(a.ui.selectable,{version:"1.8.13"})})(jQuery);
(function(a){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){var d=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?d.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var d=this.items.length-1;d>=0;d--)this.items[d].item.removeData("sortable-item");return this},_setOption:function(d,c){if(d===
"disabled"){this.options[d]=c;this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")}else a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(d,c){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(d);var f=null,g=this;a(d.target).parents().each(function(){if(a.data(this,"sortable-item")==g){f=a(this);return false}});if(a.data(d.target,"sortable-item")==g)f=a(d.target);if(!f)return false;if(this.options.handle&&
!c){var e=false;a(this.options.handle,f).find("*").andSelf().each(function(){if(this==d.target)e=true});if(!e)return false}this.currentItem=f;this._removeCurrentsFromItems();return true},_mouseStart:function(d,c,f){c=this.options;var g=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(d);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");a.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();c.containment&&this._setContainment();if(c.cursor){if(a("body").css("cursor"))this._storedCursor=a("body").css("cursor");a("body").css("cursor",c.cursor)}if(c.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",c.opacity)}if(c.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",c.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",d,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!f)for(f=this.containers.length-1;f>=0;f--)this.containers[f]._trigger("activate",d,g._uiHash(this));if(a.ui.ddmanager)a.ui.ddmanager.current=this;a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,d);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(d);
return true},_mouseDrag:function(d){this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var c=this.options,f=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-d.pageY<c.scrollSensitivity)this.scrollParent[0].scrollTop=f=this.scrollParent[0].scrollTop+c.scrollSpeed;else if(d.pageY-this.overflowOffset.top<
c.scrollSensitivity)this.scrollParent[0].scrollTop=f=this.scrollParent[0].scrollTop-c.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-d.pageX<c.scrollSensitivity)this.scrollParent[0].scrollLeft=f=this.scrollParent[0].scrollLeft+c.scrollSpeed;else if(d.pageX-this.overflowOffset.left<c.scrollSensitivity)this.scrollParent[0].scrollLeft=f=this.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(d.pageY-a(document).scrollTop()<c.scrollSensitivity)f=a(document).scrollTop(a(document).scrollTop()-
c.scrollSpeed);else if(a(window).height()-(d.pageY-a(document).scrollTop())<c.scrollSensitivity)f=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed);if(d.pageX-a(document).scrollLeft()<c.scrollSensitivity)f=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed);else if(a(window).width()-(d.pageX-a(document).scrollLeft())<c.scrollSensitivity)f=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed)}f!==false&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,
d)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(c=this.items.length-1;c>=0;c--){f=this.items[c];var g=f.item[0],e=this._intersectsWithPointer(f);if(e)if(g!=this.currentItem[0]&&this.placeholder[e==1?"next":"prev"]()[0]!=g&&!a.ui.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],
g):true)){this.direction=e==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(d,f);else break;this._trigger("change",d,this._uiHash());break}}this._contactContainers(d);a.ui.ddmanager&&a.ui.ddmanager.drag(this,d);this._trigger("sort",d,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(d,c){if(d){a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,d);if(this.options.revert){var f=this;c=f.placeholder.offset();
f.reverting=true;a(this.helper).animate({left:c.left-this.offset.parent.left-f.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:c.top-this.offset.parent.top-f.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){f._clear(d)})}else this._clear(d,c);return false}},cancel:function(){var d=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,d._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,d._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();a.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(d){var c=this._getItemsAsjQuery(d&&d.connected),f=[];d=d||{};a(c).each(function(){var g=(a(d.item||this).attr(d.attribute||"id")||"").match(d.expression||/(.+)[-=_](.+)/);if(g)f.push((d.key||g[1]+"[]")+"="+(d.key&&d.expression?g[1]:g[2]))});!f.length&&d.key&&f.push(d.key+"=");return f.join("&")},
toArray:function(d){var c=this._getItemsAsjQuery(d&&d.connected),f=[];d=d||{};c.each(function(){f.push(a(d.item||this).attr(d.attribute||"id")||"")});return f},_intersectsWith:function(d){var c=this.positionAbs.left,f=c+this.helperProportions.width,g=this.positionAbs.top,e=g+this.helperProportions.height,i=d.left,b=i+d.width,h=d.top,j=h+d.height,l=this.offset.click.top,o=this.offset.click.left;l=g+l>h&&g+l<j&&c+o>i&&c+o<b;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>d[this.floating?"width":"height"]?l:i<c+this.helperProportions.width/2&&f-this.helperProportions.width/2<b&&h<g+this.helperProportions.height/2&&e-this.helperProportions.height/2<j},_intersectsWithPointer:function(d){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height);d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width);c=c&&d;d=this._getDragVerticalDirection();
var f=this._getDragHorizontalDirection();if(!c)return false;return this.floating?f&&f=="right"||d=="down"?2:1:d&&(d=="down"?2:1)},_intersectsWithSides:function(d){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top+d.height/2,d.height);d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left+d.width/2,d.width);var f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return this.floating&&g?g=="right"&&d||g=="left"&&!d:f&&(f=="down"&&c||f=="up"&&!c)},
_getDragVerticalDirection:function(){var d=this.positionAbs.top-this.lastPositionAbs.top;return d!=0&&(d>0?"down":"up")},_getDragHorizontalDirection:function(){var d=this.positionAbs.left-this.lastPositionAbs.left;return d!=0&&(d>0?"right":"left")},refresh:function(d){this._refreshItems(d);this.refreshPositions();return this},_connectWith:function(){var d=this.options;return d.connectWith.constructor==String?[d.connectWith]:d.connectWith},_getItemsAsjQuery:function(d){var c=[],f=[],g=this._connectWith();
if(g&&d)for(d=g.length-1;d>=0;d--)for(var e=a(g[d]),i=e.length-1;i>=0;i--){var b=a.data(e[i],"sortable");if(b&&b!=this&&!b.options.disabled)f.push([a.isFunction(b.options.items)?b.options.items.call(b.element):a(b.options.items,b.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),b])}f.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(d=f.length-1;d>=0;d--)f[d][0].each(function(){c.push(this)});return a(c)},_removeCurrentsFromItems:function(){for(var d=this.currentItem.find(":data(sortable-item)"),c=0;c<this.items.length;c++)for(var f=0;f<d.length;f++)d[f]==this.items[c].item[0]&&this.items.splice(c,1)},_refreshItems:function(d){this.items=[];this.containers=[this];var c=this.items,f=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],d,{item:this.currentItem}):a(this.options.items,this.element),
this]],g=this._connectWith();if(g)for(var e=g.length-1;e>=0;e--)for(var i=a(g[e]),b=i.length-1;b>=0;b--){var h=a.data(i[b],"sortable");if(h&&h!=this&&!h.options.disabled){f.push([a.isFunction(h.options.items)?h.options.items.call(h.element[0],d,{item:this.currentItem}):a(h.options.items,h.element),h]);this.containers.push(h)}}for(e=f.length-1;e>=0;e--){d=f[e][1];g=f[e][0];b=0;for(i=g.length;b<i;b++){h=a(g[b]);h.data("sortable-item",d);c.push({item:h,instance:d,width:0,height:0,left:0,top:0})}}},refreshPositions:function(d){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var c=this.items.length-1;c>=0;c--){var f=this.items[c];if(!(f.instance!=this.currentContainer&&this.currentContainer&&f.item[0]!=this.currentItem[0])){var g=this.options.toleranceElement?a(this.options.toleranceElement,f.item):f.item;if(!d){f.width=g.outerWidth();f.height=g.outerHeight()}g=g.offset();f.left=g.left;f.top=g.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=
this.containers.length-1;c>=0;c--){g=this.containers[c].element.offset();this.containers[c].containerCache.left=g.left;this.containers[c].containerCache.top=g.top;this.containers[c].containerCache.width=this.containers[c].element.outerWidth();this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(d){var c=d||this,f=c.options;if(!f.placeholder||f.placeholder.constructor==String){var g=f.placeholder;f.placeholder={element:function(){var e=
a(document.createElement(c.currentItem[0].nodeName)).addClass(g||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!g)e.style.visibility="hidden";return e},update:function(e,i){if(!(g&&!f.forcePlaceholderSize)){i.height()||i.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10));i.width()||i.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||
0,10))}}}}c.placeholder=a(f.placeholder.element.call(c.element,c.currentItem));c.currentItem.after(c.placeholder);f.placeholder.update(c,c.placeholder)},_contactContainers:function(d){for(var c=null,f=null,g=this.containers.length-1;g>=0;g--)if(!a.ui.contains(this.currentItem[0],this.containers[g].element[0]))if(this._intersectsWith(this.containers[g].containerCache)){if(!(c&&a.ui.contains(this.containers[g].element[0],c.element[0]))){c=this.containers[g];f=g}}else if(this.containers[g].containerCache.over){this.containers[g]._trigger("out",
d,this._uiHash(this));this.containers[g].containerCache.over=0}if(c)if(this.containers.length===1){this.containers[f]._trigger("over",d,this._uiHash(this));this.containers[f].containerCache.over=1}else if(this.currentContainer!=this.containers[f]){c=1E4;g=null;for(var e=this.positionAbs[this.containers[f].floating?"left":"top"],i=this.items.length-1;i>=0;i--)if(a.ui.contains(this.containers[f].element[0],this.items[i].item[0])){var b=this.items[i][this.containers[f].floating?"left":"top"];if(Math.abs(b-
e)<c){c=Math.abs(b-e);g=this.items[i]}}if(g||this.options.dropOnEmpty){this.currentContainer=this.containers[f];g?this._rearrange(d,g,null,true):this._rearrange(d,null,this.containers[f].element,true);this._trigger("change",d,this._uiHash());this.containers[f]._trigger("change",d,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[f]._trigger("over",d,this._uiHash(this));this.containers[f].containerCache.over=1}}},_createHelper:function(d){var c=
this.options;d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[d,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]);if(d[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(d[0].style.width==
""||c.forceHelperSize)d.width(this.currentItem.width());if(d[0].style.height==""||c.forceHelperSize)d.height(this.currentItem.height());return d},_adjustOffsetFromHelper:function(d){if(typeof d=="string")d=d.split(" ");if(a.isArray(d))d={left:+d[0],top:+d[1]||0};if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=
this.helperProportions.height-d.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)d=
{top:0,left:0};return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var d=this.currentItem.position();return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(d.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(a(d.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)){var c=a(d.containment)[0];d=a(d.containment).offset();var f=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),
10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(f?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(f?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(d,c){if(!c)c=
this.position;d=d=="absolute"?1:-1;var f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(d){var c=this.options,f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var e=d.pageX,i=d.pageY;if(this.originalPosition){if(this.containment){if(d.pageX-this.offset.click.left<this.containment[0])e=this.containment[0]+this.offset.click.left;if(d.pageY-this.offset.click.top<this.containment[1])i=this.containment[1]+this.offset.click.top;if(d.pageX-this.offset.click.left>this.containment[2])e=this.containment[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>this.containment[3])i=this.containment[3]+this.offset.click.top}if(c.grid){i=this.originalPageY+Math.round((i-
this.originalPageY)/c.grid[1])*c.grid[1];i=this.containment?!(i-this.offset.click.top<this.containment[1]||i-this.offset.click.top>this.containment[3])?i:!(i-this.offset.click.top<this.containment[1])?i-c.grid[1]:i+c.grid[1]:i;e=this.originalPageX+Math.round((e-this.originalPageX)/c.grid[0])*c.grid[0];e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?e:!(e-this.offset.click.left<this.containment[0])?e-c.grid[0]:e+c.grid[0]:e}}return{top:i-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())}},_rearrange:function(d,c,f,g){f?f[0].appendChild(this.placeholder[0]):c.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?c.item[0]:c.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var e=this,i=this.counter;window.setTimeout(function(){i==e.counter&&e.refreshPositions(!g)},0)},_clear:function(d,c){this.reverting=false;var f=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var g in this._storedCSS)if(this._storedCSS[g]=="auto"||this._storedCSS[g]=="static")this._storedCSS[g]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&f.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c)f.push(function(e){this._trigger("update",e,this._uiHash())});if(!a.ui.contains(this.element[0],this.currentItem[0])){c||f.push(function(e){this._trigger("remove",
e,this._uiHash())});for(g=this.containers.length-1;g>=0;g--)if(a.ui.contains(this.containers[g].element[0],this.currentItem[0])&&!c){f.push(function(e){return function(i){e._trigger("receive",i,this._uiHash(this))}}.call(this,this.containers[g]));f.push(function(e){return function(i){e._trigger("update",i,this._uiHash(this))}}.call(this,this.containers[g]))}}for(g=this.containers.length-1;g>=0;g--){c||f.push(function(e){return function(i){e._trigger("deactivate",i,this._uiHash(this))}}.call(this,
this.containers[g]));if(this.containers[g].containerCache.over){f.push(function(e){return function(i){e._trigger("out",i,this._uiHash(this))}}.call(this,this.containers[g]));this.containers[g].containerCache.over=0}}this._storedCursor&&a("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",
d,this._uiHash());for(g=0;g<f.length;g++)f[g].call(this,d);this._trigger("stop",d,this._uiHash())}return false}c||this._trigger("beforeStop",d,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!c){for(g=0;g<f.length;g++)f[g].call(this,d);this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(d){var c=d||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:d?d.element:null}}});a.extend(a.ui.sortable,{version:"1.8.13"})})(jQuery);
jQuery.effects||function(a,d){function c(n){var k;if(n&&n.constructor==Array&&n.length==3)return n;if(k=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n))return[parseInt(k[1],10),parseInt(k[2],10),parseInt(k[3],10)];if(k=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n))return[parseFloat(k[1])*2.55,parseFloat(k[2])*2.55,parseFloat(k[3])*2.55];if(k=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n))return[parseInt(k[1],
16),parseInt(k[2],16),parseInt(k[3],16)];if(k=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n))return[parseInt(k[1]+k[1],16),parseInt(k[2]+k[2],16),parseInt(k[3]+k[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(n))return j.transparent;return j[a.trim(n).toLowerCase()]}function f(n,k){var m;do{m=a.curCSS(n,k);if(m!=""&&m!="transparent"||a.nodeName(n,"body"))break;k="backgroundColor"}while(n=n.parentNode);return c(m)}function g(){var n=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
k={},m,p;if(n&&n.length&&n[0]&&n[n[0]])for(var q=n.length;q--;){m=n[q];if(typeof n[m]=="string"){p=m.replace(/\-(\w)/g,function(s,r){return r.toUpperCase()});k[p]=n[m]}}else for(m in n)if(typeof n[m]==="string")k[m]=n[m];return k}function e(n){var k,m;for(k in n){m=n[k];if(m==null||a.isFunction(m)||k in o||/scrollbar/.test(k)||!/color/i.test(k)&&isNaN(parseFloat(m)))delete n[k]}return n}function i(n,k){var m={_:0},p;for(p in k)if(n[p]!=k[p])m[p]=k[p];return m}function b(n,k,m,p){if(typeof n=="object"){p=
k;m=null;k=n;n=k.effect}if(a.isFunction(k)){p=k;m=null;k={}}if(typeof k=="number"||a.fx.speeds[k]){p=m;m=k;k={}}if(a.isFunction(m)){p=m;m=null}k=k||{};m=m||k.duration;m=a.fx.off?0:typeof m=="number"?m:m in a.fx.speeds?a.fx.speeds[m]:a.fx.speeds._default;p=p||k.complete;return[n,k,m,p]}function h(n){if(!n||typeof n==="number"||a.fx.speeds[n])return true;if(typeof n==="string"&&!a.effects[n])return true;return false}a.effects={};a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(n,k){a.fx.step[k]=function(m){if(!m.colorInit){m.start=f(m.elem,k);m.end=c(m.end);m.colorInit=true}m.elem.style[k]="rgb("+Math.max(Math.min(parseInt(m.pos*(m.end[0]-m.start[0])+m.start[0],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[1]-m.start[1])+m.start[1],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[2]-m.start[2])+m.start[2],10),255),0)+")"}});var j={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},l=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(n,k,m,
p){if(a.isFunction(m)){p=m;m=null}return this.queue(function(){var q=a(this),s=q.attr("style")||" ",r=e(g.call(this)),u,v=q.attr("class");a.each(l,function(w,x){n[x]&&q[x+"Class"](n[x])});u=e(g.call(this));q.attr("class",v);q.animate(i(r,u),{queue:false,duration:k,easding:m,complete:function(){a.each(l,function(w,x){n[x]&&q[x+"Class"](n[x])});if(typeof q.attr("style")=="object"){q.attr("style").cssText="";q.attr("style").cssText=s}else q.attr("style",s);p&&p.apply(this,arguments);a.dequeue(this)}})})};
a.fn.extend({_addClass:a.fn.addClass,addClass:function(n,k,m,p){return k?a.effects.animateClass.apply(this,[{add:n},k,m,p]):this._addClass(n)},_removeClass:a.fn.removeClass,removeClass:function(n,k,m,p){return k?a.effects.animateClass.apply(this,[{remove:n},k,m,p]):this._removeClass(n)},_toggleClass:a.fn.toggleClass,toggleClass:function(n,k,m,p,q){return typeof k=="boolean"||k===d?m?a.effects.animateClass.apply(this,[k?{add:n}:{remove:n},m,p,q]):this._toggleClass(n,k):a.effects.animateClass.apply(this,
[{toggle:n},k,m,p])},switchClass:function(n,k,m,p,q){return a.effects.animateClass.apply(this,[{add:k,remove:n},m,p,q])}});a.extend(a.effects,{version:"1.8.13",save:function(n,k){for(var m=0;m<k.length;m++)k[m]!==null&&n.data("ec.storage."+k[m],n[0].style[k[m]])},restore:function(n,k){for(var m=0;m<k.length;m++)k[m]!==null&&n.css(k[m],n.data("ec.storage."+k[m]))},setMode:function(n,k){if(k=="toggle")k=n.is(":hidden")?"show":"hide";return k},getBaseline:function(n,k){var m;switch(n[0]){case "top":m=
0;break;case "middle":m=0.5;break;case "bottom":m=1;break;default:m=n[0]/k.height}switch(n[1]){case "left":n=0;break;case "center":n=0.5;break;case "right":n=1;break;default:n=n[1]/k.width}return{x:n,y:m}},createWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent();var k={width:n.outerWidth(true),height:n.outerHeight(true),"float":n.css("float")},m=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});
n.wrap(m);m=n.parent();if(n.css("position")=="static"){m.css({position:"relative"});n.css({position:"relative"})}else{a.extend(k,{position:n.css("position"),zIndex:n.css("z-index")});a.each(["top","left","bottom","right"],function(p,q){k[q]=n.css(q);if(isNaN(parseInt(k[q],10)))k[q]="auto"});n.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return m.css(k).show()},removeWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent().replaceWith(n);return n},setTransition:function(n,
k,m,p){p=p||{};a.each(k,function(q,s){unit=n.cssUnit(s);if(unit[0]>0)p[s]=unit[0]*m+unit[1]});return p}});a.fn.extend({effect:function(n){var k=b.apply(this,arguments),m={options:k[1],duration:k[2],callback:k[3]};k=m.options.mode;var p=a.effects[n];if(a.fx.off||!p)return k?this[k](m.duration,m.callback):this.each(function(){m.callback&&m.callback.call(this)});return p.call(this,m)},_show:a.fn.show,show:function(n){if(h(n))return this._show.apply(this,arguments);else{var k=b.apply(this,arguments);
k[1].mode="show";return this.effect.apply(this,k)}},_hide:a.fn.hide,hide:function(n){if(h(n))return this._hide.apply(this,arguments);else{var k=b.apply(this,arguments);k[1].mode="hide";return this.effect.apply(this,k)}},__toggle:a.fn.toggle,toggle:function(n){if(h(n)||typeof n==="boolean"||a.isFunction(n))return this.__toggle.apply(this,arguments);else{var k=b.apply(this,arguments);k[1].mode="toggle";return this.effect.apply(this,k)}},cssUnit:function(n){var k=this.css(n),m=[];a.each(["em","px","%",
"pt"],function(p,q){if(k.indexOf(q)>0)m=[parseFloat(k),q]});return m}});a.easing.jswing=a.easing.swing;a.extend(a.easing,{def:"easeOutQuad",swing:function(n,k,m,p,q){return a.easing[a.easing.def](n,k,m,p,q)},easeInQuad:function(n,k,m,p,q){return p*(k/=q)*k+m},easeOutQuad:function(n,k,m,p,q){return-p*(k/=q)*(k-2)+m},easeInOutQuad:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k+m;return-p/2*(--k*(k-2)-1)+m},easeInCubic:function(n,k,m,p,q){return p*(k/=q)*k*k+m},easeOutCubic:function(n,k,m,p,q){return p*
((k=k/q-1)*k*k+1)+m},easeInOutCubic:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k+m;return p/2*((k-=2)*k*k+2)+m},easeInQuart:function(n,k,m,p,q){return p*(k/=q)*k*k*k+m},easeOutQuart:function(n,k,m,p,q){return-p*((k=k/q-1)*k*k*k-1)+m},easeInOutQuart:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k*k+m;return-p/2*((k-=2)*k*k*k-2)+m},easeInQuint:function(n,k,m,p,q){return p*(k/=q)*k*k*k*k+m},easeOutQuint:function(n,k,m,p,q){return p*((k=k/q-1)*k*k*k*k+1)+m},easeInOutQuint:function(n,k,m,p,q){if((k/=
q/2)<1)return p/2*k*k*k*k*k+m;return p/2*((k-=2)*k*k*k*k+2)+m},easeInSine:function(n,k,m,p,q){return-p*Math.cos(k/q*(Math.PI/2))+p+m},easeOutSine:function(n,k,m,p,q){return p*Math.sin(k/q*(Math.PI/2))+m},easeInOutSine:function(n,k,m,p,q){return-p/2*(Math.cos(Math.PI*k/q)-1)+m},easeInExpo:function(n,k,m,p,q){return k==0?m:p*Math.pow(2,10*(k/q-1))+m},easeOutExpo:function(n,k,m,p,q){return k==q?m+p:p*(-Math.pow(2,-10*k/q)+1)+m},easeInOutExpo:function(n,k,m,p,q){if(k==0)return m;if(k==q)return m+p;if((k/=
q/2)<1)return p/2*Math.pow(2,10*(k-1))+m;return p/2*(-Math.pow(2,-10*--k)+2)+m},easeInCirc:function(n,k,m,p,q){return-p*(Math.sqrt(1-(k/=q)*k)-1)+m},easeOutCirc:function(n,k,m,p,q){return p*Math.sqrt(1-(k=k/q-1)*k)+m},easeInOutCirc:function(n,k,m,p,q){if((k/=q/2)<1)return-p/2*(Math.sqrt(1-k*k)-1)+m;return p/2*(Math.sqrt(1-(k-=2)*k)+1)+m},easeInElastic:function(n,k,m,p,q){n=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q)==1)return m+p;s||(s=q*0.3);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/
r);return-(r*Math.pow(2,10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s))+m},easeOutElastic:function(n,k,m,p,q){n=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q)==1)return m+p;s||(s=q*0.3);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/r);return r*Math.pow(2,-10*k)*Math.sin((k*q-n)*2*Math.PI/s)+p+m},easeInOutElastic:function(n,k,m,p,q){n=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q/2)==2)return m+p;s||(s=q*0.3*1.5);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/r);if(k<1)return-0.5*
r*Math.pow(2,10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s)+m;return r*Math.pow(2,-10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s)*0.5+p+m},easeInBack:function(n,k,m,p,q,s){if(s==d)s=1.70158;return p*(k/=q)*k*((s+1)*k-s)+m},easeOutBack:function(n,k,m,p,q,s){if(s==d)s=1.70158;return p*((k=k/q-1)*k*((s+1)*k+s)+1)+m},easeInOutBack:function(n,k,m,p,q,s){if(s==d)s=1.70158;if((k/=q/2)<1)return p/2*k*k*(((s*=1.525)+1)*k-s)+m;return p/2*((k-=2)*k*(((s*=1.525)+1)*k+s)+2)+m},easeInBounce:function(n,k,m,p,q){return p-a.easing.easeOutBounce(n,
q-k,0,p,q)+m},easeOutBounce:function(n,k,m,p,q){return(k/=q)<1/2.75?p*7.5625*k*k+m:k<2/2.75?p*(7.5625*(k-=1.5/2.75)*k+0.75)+m:k<2.5/2.75?p*(7.5625*(k-=2.25/2.75)*k+0.9375)+m:p*(7.5625*(k-=2.625/2.75)*k+0.984375)+m},easeInOutBounce:function(n,k,m,p,q){if(k<q/2)return a.easing.easeInBounce(n,k*2,0,p,q)*0.5+m;return a.easing.easeOutBounce(n,k*2-q,0,p,q)*0.5+p*0.5+m}})}(jQuery);
(function(a){a.effects.blind=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right"],g=a.effects.setMode(c,d.options.mode||"hide"),e=d.options.direction||"vertical";a.effects.save(c,f);c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"}),b=e=="vertical"?"height":"width";e=e=="vertical"?i.height():i.width();g=="show"&&i.css(b,0);var h={};h[b]=g=="show"?e:0;i.animate(h,d.duration,d.options.easing,function(){g=="hide"&&c.hide();a.effects.restore(c,
f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(c[0],arguments);c.dequeue()})})}})(jQuery);
(function(a){a.effects.bounce=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right"],g=a.effects.setMode(c,d.options.mode||"effect"),e=d.options.direction||"up",i=d.options.distance||20,b=d.options.times||5,h=d.duration||250;/show|hide/.test(g)&&f.push("opacity");a.effects.save(c,f);c.show();a.effects.createWrapper(c);var j=e=="up"||e=="down"?"top":"left";e=e=="up"||e=="left"?"pos":"neg";i=d.options.distance||(j=="top"?c.outerHeight({margin:true})/3:c.outerWidth({margin:true})/
3);if(g=="show")c.css("opacity",0).css(j,e=="pos"?-i:i);if(g=="hide")i/=b*2;g!="hide"&&b--;if(g=="show"){var l={opacity:1};l[j]=(e=="pos"?"+=":"-=")+i;c.animate(l,h/2,d.options.easing);i/=2;b--}for(l=0;l<b;l++){var o={},n={};o[j]=(e=="pos"?"-=":"+=")+i;n[j]=(e=="pos"?"+=":"-=")+i;c.animate(o,h/2,d.options.easing).animate(n,h/2,d.options.easing);i=g=="hide"?i*2:i/2}if(g=="hide"){l={opacity:0};l[j]=(e=="pos"?"-=":"+=")+i;c.animate(l,h/2,d.options.easing,function(){c.hide();a.effects.restore(c,f);a.effects.removeWrapper(c);
d.callback&&d.callback.apply(this,arguments)})}else{o={};n={};o[j]=(e=="pos"?"-=":"+=")+i;n[j]=(e=="pos"?"+=":"-=")+i;c.animate(o,h/2,d.options.easing).animate(n,h/2,d.options.easing,function(){a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments)})}c.queue("fx",function(){c.dequeue()});c.dequeue()})}})(jQuery);
(function(a){a.effects.clip=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right","height","width"],g=a.effects.setMode(c,d.options.mode||"hide"),e=d.options.direction||"vertical";a.effects.save(c,f);c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"});i=c[0].tagName=="IMG"?i:c;var b={size:e=="vertical"?"height":"width",position:e=="vertical"?"top":"left"};e=e=="vertical"?i.height():i.width();if(g=="show"){i.css(b.size,0);i.css(b.position,
e/2)}var h={};h[b.size]=g=="show"?e:0;h[b.position]=g=="show"?0:e/2;i.animate(h,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&c.hide();a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(c[0],arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.drop=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right","opacity"],g=a.effects.setMode(c,d.options.mode||"hide"),e=d.options.direction||"left";a.effects.save(c,f);c.show();a.effects.createWrapper(c);var i=e=="up"||e=="down"?"top":"left";e=e=="up"||e=="left"?"pos":"neg";var b=d.options.distance||(i=="top"?c.outerHeight({margin:true})/2:c.outerWidth({margin:true})/2);if(g=="show")c.css("opacity",0).css(i,e=="pos"?-b:b);var h={opacity:g==
"show"?1:0};h[i]=(g=="show"?e=="pos"?"+=":"-=":e=="pos"?"-=":"+=")+b;c.animate(h,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&c.hide();a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.explode=function(d){return this.queue(function(){var c=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3,f=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3;d.options.mode=d.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":d.options.mode;var g=a(this).show().css("visibility","hidden"),e=g.offset();e.top-=parseInt(g.css("marginTop"),10)||0;e.left-=parseInt(g.css("marginLeft"),10)||0;for(var i=g.outerWidth(true),b=g.outerHeight(true),h=0;h<c;h++)for(var j=
0;j<f;j++)g.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(i/f),top:-h*(b/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:i/f,height:b/c,left:e.left+j*(i/f)+(d.options.mode=="show"?(j-Math.floor(f/2))*(i/f):0),top:e.top+h*(b/c)+(d.options.mode=="show"?(h-Math.floor(c/2))*(b/c):0),opacity:d.options.mode=="show"?0:1}).animate({left:e.left+j*(i/f)+(d.options.mode=="show"?0:(j-Math.floor(f/2))*(i/f)),top:e.top+
h*(b/c)+(d.options.mode=="show"?0:(h-Math.floor(c/2))*(b/c)),opacity:d.options.mode=="show"?1:0},d.duration||500);setTimeout(function(){d.options.mode=="show"?g.css({visibility:"visible"}):g.css({visibility:"visible"}).hide();d.callback&&d.callback.apply(g[0]);g.dequeue();a("div.ui-effects-explode").remove()},d.duration||500)})}})(jQuery);
(function(a){a.effects.fade=function(d){return this.queue(function(){var c=a(this),f=a.effects.setMode(c,d.options.mode||"hide");c.animate({opacity:f},{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.fold=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right"],g=a.effects.setMode(c,d.options.mode||"hide"),e=d.options.size||15,i=!!d.options.horizFirst,b=d.duration?d.duration/2:a.fx.speeds._default/2;a.effects.save(c,f);c.show();var h=a.effects.createWrapper(c).css({overflow:"hidden"}),j=g=="show"!=i,l=j?["width","height"]:["height","width"];j=j?[h.width(),h.height()]:[h.height(),h.width()];var o=/([0-9]+)%/.exec(e);if(o)e=parseInt(o[1],
10)/100*j[g=="hide"?0:1];if(g=="show")h.css(i?{height:0,width:e}:{height:e,width:0});i={};o={};i[l[0]]=g=="show"?j[0]:e;o[l[1]]=g=="show"?j[1]:0;h.animate(i,b,d.options.easing).animate(o,b,d.options.easing,function(){g=="hide"&&c.hide();a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(c[0],arguments);c.dequeue()})})}})(jQuery);
(function(a){a.effects.highlight=function(d){return this.queue(function(){var c=a(this),f=["backgroundImage","backgroundColor","opacity"],g=a.effects.setMode(c,d.options.mode||"show"),e={backgroundColor:c.css("backgroundColor")};if(g=="hide")e.opacity=0;a.effects.save(c,f);c.show().css({backgroundImage:"none",backgroundColor:d.options.color||"#ffff99"}).animate(e,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&c.hide();a.effects.restore(c,f);g=="show"&&!a.support.opacity&&
this.style.removeAttribute("filter");d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.pulsate=function(d){return this.queue(function(){var c=a(this),f=a.effects.setMode(c,d.options.mode||"show");times=(d.options.times||5)*2-1;duration=d.duration?d.duration/2:a.fx.speeds._default/2;isVisible=c.is(":visible");animateTo=0;if(!isVisible){c.css("opacity",0).show();animateTo=1}if(f=="hide"&&isVisible||f=="show"&&!isVisible)times--;for(f=0;f<times;f++){c.animate({opacity:animateTo},duration,d.options.easing);animateTo=(animateTo+1)%2}c.animate({opacity:animateTo},duration,
d.options.easing,function(){animateTo==0&&c.hide();d.callback&&d.callback.apply(this,arguments)});c.queue("fx",function(){c.dequeue()}).dequeue()})}})(jQuery);
(function(a){a.effects.puff=function(d){return this.queue(function(){var c=a(this),f=a.effects.setMode(c,d.options.mode||"hide"),g=parseInt(d.options.percent,10)||150,e=g/100,i={height:c.height(),width:c.width()};a.extend(d.options,{fade:true,mode:f,percent:f=="hide"?g:100,from:f=="hide"?i:{height:i.height*e,width:i.width*e}});c.effect("scale",d.options,d.duration,d.callback);c.dequeue()})};a.effects.scale=function(d){return this.queue(function(){var c=a(this),f=a.extend(true,{},d.options),g=a.effects.setMode(c,
d.options.mode||"effect"),e=parseInt(d.options.percent,10)||(parseInt(d.options.percent,10)==0?0:g=="hide"?0:100),i=d.options.direction||"both",b=d.options.origin;if(g!="effect"){f.origin=b||["middle","center"];f.restore=true}b={height:c.height(),width:c.width()};c.from=d.options.from||(g=="show"?{height:0,width:0}:b);e={y:i!="horizontal"?e/100:1,x:i!="vertical"?e/100:1};c.to={height:b.height*e.y,width:b.width*e.x};if(d.options.fade){if(g=="show"){c.from.opacity=0;c.to.opacity=1}if(g=="hide"){c.from.opacity=
1;c.to.opacity=0}}f.from=c.from;f.to=c.to;f.mode=g;c.effect("size",f,d.duration,d.callback);c.dequeue()})};a.effects.size=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right","width","height","overflow","opacity"],g=["position","top","bottom","left","right","overflow","opacity"],e=["width","height","overflow"],i=["fontSize"],b=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
j=a.effects.setMode(c,d.options.mode||"effect"),l=d.options.restore||false,o=d.options.scale||"both",n=d.options.origin,k={height:c.height(),width:c.width()};c.from=d.options.from||k;c.to=d.options.to||k;if(n){n=a.effects.getBaseline(n,k);c.from.top=(k.height-c.from.height)*n.y;c.from.left=(k.width-c.from.width)*n.x;c.to.top=(k.height-c.to.height)*n.y;c.to.left=(k.width-c.to.width)*n.x}var m={from:{y:c.from.height/k.height,x:c.from.width/k.width},to:{y:c.to.height/k.height,x:c.to.width/k.width}};
if(o=="box"||o=="both"){if(m.from.y!=m.to.y){f=f.concat(b);c.from=a.effects.setTransition(c,b,m.from.y,c.from);c.to=a.effects.setTransition(c,b,m.to.y,c.to)}if(m.from.x!=m.to.x){f=f.concat(h);c.from=a.effects.setTransition(c,h,m.from.x,c.from);c.to=a.effects.setTransition(c,h,m.to.x,c.to)}}if(o=="content"||o=="both")if(m.from.y!=m.to.y){f=f.concat(i);c.from=a.effects.setTransition(c,i,m.from.y,c.from);c.to=a.effects.setTransition(c,i,m.to.y,c.to)}a.effects.save(c,l?f:g);c.show();a.effects.createWrapper(c);
c.css("overflow","hidden").css(c.from);if(o=="content"||o=="both"){b=b.concat(["marginTop","marginBottom"]).concat(i);h=h.concat(["marginLeft","marginRight"]);e=f.concat(b).concat(h);c.find("*[width]").each(function(){child=a(this);l&&a.effects.save(child,e);var p={height:child.height(),width:child.width()};child.from={height:p.height*m.from.y,width:p.width*m.from.x};child.to={height:p.height*m.to.y,width:p.width*m.to.x};if(m.from.y!=m.to.y){child.from=a.effects.setTransition(child,b,m.from.y,child.from);
child.to=a.effects.setTransition(child,b,m.to.y,child.to)}if(m.from.x!=m.to.x){child.from=a.effects.setTransition(child,h,m.from.x,child.from);child.to=a.effects.setTransition(child,h,m.to.x,child.to)}child.css(child.from);child.animate(child.to,d.duration,d.options.easing,function(){l&&a.effects.restore(child,e)})})}c.animate(c.to,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){c.to.opacity===0&&c.css("opacity",c.from.opacity);j=="hide"&&c.hide();a.effects.restore(c,
l?f:g);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.shake=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right"];a.effects.setMode(c,d.options.mode||"effect");var g=d.options.direction||"left",e=d.options.distance||20,i=d.options.times||3,b=d.duration||d.options.duration||140;a.effects.save(c,f);c.show();a.effects.createWrapper(c);var h=g=="up"||g=="down"?"top":"left",j=g=="up"||g=="left"?"pos":"neg";g={};var l={},o={};g[h]=(j=="pos"?"-=":"+=")+e;l[h]=(j=="pos"?"+=":"-=")+e*2;o[h]=
(j=="pos"?"-=":"+=")+e*2;c.animate(g,b,d.options.easing);for(e=1;e<i;e++)c.animate(l,b,d.options.easing).animate(o,b,d.options.easing);c.animate(l,b,d.options.easing).animate(g,b/2,d.options.easing,function(){a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments)});c.queue("fx",function(){c.dequeue()});c.dequeue()})}})(jQuery);
(function(a){a.effects.slide=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right"],g=a.effects.setMode(c,d.options.mode||"show"),e=d.options.direction||"left";a.effects.save(c,f);c.show();a.effects.createWrapper(c).css({overflow:"hidden"});var i=e=="up"||e=="down"?"top":"left";e=e=="up"||e=="left"?"pos":"neg";var b=d.options.distance||(i=="top"?c.outerHeight({margin:true}):c.outerWidth({margin:true}));if(g=="show")c.css(i,e=="pos"?isNaN(b)?"-"+b:-b:b);
var h={};h[i]=(g=="show"?e=="pos"?"+=":"-=":e=="pos"?"-=":"+=")+b;c.animate(h,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&c.hide();a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.transfer=function(d){return this.queue(function(){var c=a(this),f=a(d.options.to),g=f.offset();f={top:g.top,left:g.left,height:f.innerHeight(),width:f.innerWidth()};g=c.offset();var e=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(d.options.className).css({top:g.top,left:g.left,height:c.innerHeight(),width:c.innerWidth(),position:"absolute"}).animate(f,d.duration,d.options.easing,function(){e.remove();d.callback&&d.callback.apply(c[0],arguments);
c.dequeue()})})}})(jQuery);
(function(a){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var d=this,c=d.options;d.running=0;d.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");d.headers=
d.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){c.disabled||a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){c.disabled||a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){c.disabled||a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){c.disabled||a(this).removeClass("ui-state-focus")});d.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(c.navigation){var f=d.element.find("a").filter(c.navigationFilter).eq(0);if(f.length){var g=f.closest(".ui-accordion-header");d.active=g.length?g:f.closest(".ui-accordion-content").prev()}}d.active=d._findActive(d.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");d.active.next().addClass("ui-accordion-content-active");d._createIcons();d.resize();d.element.attr("role","tablist");d.headers.attr("role","tab").bind("keydown.accordion",
function(e){return d._keydown(e)}).next().attr("role","tabpanel");d.headers.not(d.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();d.active.length?d.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):d.headers.eq(0).attr("tabIndex",0);a.browser.safari||d.headers.find("a").attr("tabIndex",-1);c.event&&d.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(e){d._clickHandler.call(d,e,this);e.preventDefault()})},_createIcons:function(){var d=
this.options;if(d.icons){a("<span></span>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var d=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(d.autoHeight||d.fillHeight)c.css("height","");return a.Widget.prototype.destroy.call(this)},_setOption:function(d,c){a.Widget.prototype._setOption.apply(this,arguments);d=="active"&&this.activate(c);if(d=="icons"){this._destroyIcons();
c&&this._createIcons()}if(d=="disabled")this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(d){if(!(this.options.disabled||d.altKey||d.ctrlKey)){var c=a.ui.keyCode,f=this.headers.length,g=this.headers.index(d.target),e=false;switch(d.keyCode){case c.RIGHT:case c.DOWN:e=this.headers[(g+1)%f];break;case c.LEFT:case c.UP:e=this.headers[(g-1+f)%f];break;case c.SPACE:case c.ENTER:this._clickHandler({target:d.target},d.target);
d.preventDefault()}if(e){a(d.target).attr("tabIndex",-1);a(e).attr("tabIndex",0);e.focus();return false}return true}},resize:function(){var d=this.options,c;if(d.fillSpace){if(a.browser.msie){var f=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}c=this.element.parent().height();a.browser.msie&&this.element.parent().css("overflow",f);this.headers.each(function(){c-=a(this).outerHeight(true)});this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+
a(this).height()))}).css("overflow","auto")}else if(d.autoHeight){c=0;this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())}).height(c)}return this},activate:function(d){this.options.active=d;d=this._findActive(d)[0];this._clickHandler({target:d},d);return this},_findActive:function(d){return d?typeof d==="number"?this.headers.filter(":eq("+d+")"):this.headers.not(this.headers.not(d)):d===false?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(d,c){var f=this.options;
if(!f.disabled)if(d.target){d=a(d.currentTarget||c);c=d[0]===this.active[0];f.active=f.collapsible&&c?false:this.headers.index(d);if(!(this.running||!f.collapsible&&c)){var g=this.active;h=d.next();i=this.active.next();b={options:f,newHeader:c&&f.collapsible?a([]):d,oldHeader:this.active,newContent:c&&f.collapsible?a([]):h,oldContent:i};var e=this.headers.index(this.active[0])>this.headers.index(d[0]);this.active=c?a([]):d;this._toggle(h,i,b,c,e);g.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(f.icons.headerSelected).addClass(f.icons.header);
if(!c){d.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(f.icons.header).addClass(f.icons.headerSelected);d.next().addClass("ui-accordion-content-active")}}}else if(f.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(f.icons.headerSelected).addClass(f.icons.header);this.active.next().addClass("ui-accordion-content-active");var i=this.active.next(),
b={options:f,newHeader:a([]),oldHeader:f.active,newContent:a([]),oldContent:i},h=this.active=a([]);this._toggle(h,i,b)}},_toggle:function(d,c,f,g,e){var i=this,b=i.options;i.toShow=d;i.toHide=c;i.data=f;var h=function(){if(i)return i._completed.apply(i,arguments)};i._trigger("changestart",null,i.data);i.running=c.size()===0?d.size():c.size();if(b.animated){f={};f=b.collapsible&&g?{toShow:a([]),toHide:c,complete:h,down:e,autoHeight:b.autoHeight||b.fillSpace}:{toShow:d,toHide:c,complete:h,down:e,autoHeight:b.autoHeight||
b.fillSpace};if(!b.proxied)b.proxied=b.animated;if(!b.proxiedDuration)b.proxiedDuration=b.duration;b.animated=a.isFunction(b.proxied)?b.proxied(f):b.proxied;b.duration=a.isFunction(b.proxiedDuration)?b.proxiedDuration(f):b.proxiedDuration;g=a.ui.accordion.animations;var j=b.duration,l=b.animated;if(l&&!g[l]&&!a.easing[l])l="slide";g[l]||(g[l]=function(o){this.slide(o,{easing:l,duration:j||700})});g[l](f)}else{if(b.collapsible&&g)d.toggle();else{c.hide();d.show()}h(true)}c.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();d.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(d){this.running=d?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});a.extend(a.ui.accordion,{version:"1.8.13",
animations:{slide:function(d,c){d=a.extend({easing:"swing",duration:300},d,c);if(d.toHide.size())if(d.toShow.size()){var f=d.toShow.css("overflow"),g=0,e={},i={},b;c=d.toShow;b=c[0].style.width;c.width(parseInt(c.parent().width(),10)-parseInt(c.css("paddingLeft"),10)-parseInt(c.css("paddingRight"),10)-(parseInt(c.css("borderLeftWidth"),10)||0)-(parseInt(c.css("borderRightWidth"),10)||0));a.each(["height","paddingTop","paddingBottom"],function(h,j){i[j]="hide";h=(""+a.css(d.toShow[0],j)).match(/^([\d+-.]+)(.*)$/);
e[j]={value:h[1],unit:h[2]||"px"}});d.toShow.css({height:0,overflow:"hidden"}).show();d.toHide.filter(":hidden").each(d.complete).end().filter(":visible").animate(i,{step:function(h,j){if(j.prop=="height")g=j.end-j.start===0?0:(j.now-j.start)/(j.end-j.start);d.toShow[0].style[j.prop]=g*e[j.prop].value+e[j.prop].unit},duration:d.duration,easing:d.easing,complete:function(){d.autoHeight||d.toShow.css("height","");d.toShow.css({width:b,overflow:f});d.complete()}})}else d.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},d);else d.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},d)},bounceslide:function(d){this.slide(d,{easing:d.down?"easeOutBounce":"swing",duration:d.down?1E3:200})}}})})(jQuery);
(function(a){var d=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var c=this,f=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(e){if(!(c.options.disabled||c.element.attr("readonly"))){g=
false;var i=a.ui.keyCode;switch(e.keyCode){case i.PAGE_UP:c._move("previousPage",e);break;case i.PAGE_DOWN:c._move("nextPage",e);break;case i.UP:c._move("previous",e);e.preventDefault();break;case i.DOWN:c._move("next",e);e.preventDefault();break;case i.ENTER:case i.NUMPAD_ENTER:if(c.menu.active){g=true;e.preventDefault()}case i.TAB:if(!c.menu.active)return;c.menu.select(e);break;case i.ESCAPE:c.element.val(c.term);c.close(e);break;default:clearTimeout(c.searching);c.searching=setTimeout(function(){if(c.term!=
c.element.val()){c.selectedItem=null;c.search(null,e)}},c.options.delay);break}}}).bind("keypress.autocomplete",function(e){if(g){g=false;e.preventDefault()}}).bind("focus.autocomplete",function(){if(!c.options.disabled){c.selectedItem=null;c.previous=c.element.val()}}).bind("blur.autocomplete",function(e){if(!c.options.disabled){clearTimeout(c.searching);c.closing=setTimeout(function(){c.close(e);c._change(e)},150)}});this._initSource();this.response=function(){return c._response.apply(c,arguments)};
this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",f)[0]).mousedown(function(e){var i=c.menu.element[0];a(e.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(b){b.target!==c.element[0]&&b.target!==i&&!a.ui.contains(i,b.target)&&c.close()})},1);setTimeout(function(){clearTimeout(c.closing)},13)}).menu({focus:function(e,i){i=i.item.data("item.autocomplete");false!==c._trigger("focus",e,{item:i})&&/^key/.test(e.originalEvent.type)&&
c.element.val(i.value)},selected:function(e,i){var b=i.item.data("item.autocomplete"),h=c.previous;if(c.element[0]!==f.activeElement){c.element.focus();c.previous=h;setTimeout(function(){c.previous=h;c.selectedItem=b},1)}false!==c._trigger("select",e,{item:b})&&c.element.val(b.value);c.term=c.element.val();c.close(e);c.selectedItem=b},blur:function(){c.menu.element.is(":visible")&&c.element.val()!==c.term&&c.element.val(c.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
a.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();a.Widget.prototype.destroy.call(this)},_setOption:function(c,f){a.Widget.prototype._setOption.apply(this,arguments);c==="source"&&this._initSource();if(c==="appendTo")this.menu.element.appendTo(a(f||"body",this.element[0].ownerDocument)[0]);c==="disabled"&&
f&&this.xhr&&this.xhr.abort()},_initSource:function(){var c=this,f,g;if(a.isArray(this.options.source)){f=this.options.source;this.source=function(e,i){i(a.ui.autocomplete.filter(f,e.term))}}else if(typeof this.options.source==="string"){g=this.options.source;this.source=function(e,i){c.xhr&&c.xhr.abort();c.xhr=a.ajax({url:g,data:e,dataType:"json",autocompleteRequest:++d,success:function(b){this.autocompleteRequest===d&&i(b)},error:function(){this.autocompleteRequest===d&&i([])}})}}else this.source=
this.options.source},search:function(c,f){c=c!=null?c:this.element.val();this.term=this.element.val();if(c.length<this.options.minLength)return this.close(f);clearTimeout(this.closing);if(this._trigger("search",f)!==false)return this._search(c)},_search:function(c){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:c},this.response)},_response:function(c){if(!this.options.disabled&&c&&c.length){c=this._normalize(c);this._suggest(c);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(c){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",c)}},_change:function(c){this.previous!==this.element.val()&&this._trigger("change",c,{item:this.selectedItem})},_normalize:function(c){if(c.length&&c[0].label&&c[0].value)return c;return a.map(c,function(f){if(typeof f==="string")return{label:f,value:f};return a.extend({label:f.label||
f.value,value:f.value||f.label},f)})},_suggest:function(c){var f=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(f,c);this.menu.deactivate();this.menu.refresh();f.show();this._resizeMenu();f.position(a.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var c=this.menu.element;c.outerWidth(Math.max(c.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(c,f){var g=this;
a.each(f,function(e,i){g._renderItem(c,i)})},_renderItem:function(c,f){return a("<li></li>").data("item.autocomplete",f).append(a("<a></a>").text(f.label)).appendTo(c)},_move:function(c,f){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(c)||this.menu.last()&&/^next/.test(c)){this.element.val(this.term);this.menu.deactivate()}else this.menu[c](f);else this.search(null,f)},widget:function(){return this.menu.element}});a.extend(a.ui.autocomplete,{escapeRegex:function(c){return c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(c,f){var g=new RegExp(a.ui.autocomplete.escapeRegex(f),"i");return a.grep(c,function(e){return g.test(e.label||e.value||e)})}})})(jQuery);
(function(a){a.widget("ui.menu",{_create:function(){var d=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(a(c.target).closest(".ui-menu-item a").length){c.preventDefault();d.select(c)}});this.refresh()},refresh:function(){var d=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(c){d.activate(c,a(this).parent())}).mouseleave(function(){d.deactivate()})},activate:function(d,c){this.deactivate();if(this.hasScroll()){var f=c.offset().top-this.element.offset().top,g=this.element.scrollTop(),e=this.element.height();if(f<0)this.element.scrollTop(g+f);else f>=e&&this.element.scrollTop(g+f-e+c.height())}this.active=c.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",d,{item:c})},deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");this.active=null}},next:function(d){this.move("next",".ui-menu-item:first",d)},previous:function(d){this.move("prev",".ui-menu-item:last",d)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(d,c,f){if(this.active){d=this.active[d+"All"](".ui-menu-item").eq(0);d.length?this.activate(f,d):this.activate(f,this.element.children(c))}else this.activate(f,
this.element.children(c))},nextPage:function(d){if(this.hasScroll())if(!this.active||this.last())this.activate(d,this.element.children(".ui-menu-item:first"));else{var c=this.active.offset().top,f=this.element.height(),g=this.element.children(".ui-menu-item").filter(function(){var e=a(this).offset().top-c-f+a(this).height();return e<10&&e>-10});g.length||(g=this.element.children(".ui-menu-item:last"));this.activate(d,g)}else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||
this.last()?":first":":last"))},previousPage:function(d){if(this.hasScroll())if(!this.active||this.first())this.activate(d,this.element.children(".ui-menu-item:last"));else{var c=this.active.offset().top,f=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var g=a(this).offset().top-c+f-a(this).height();return g<10&&g>-10});result.length||(result=this.element.children(".ui-menu-item:first"));this.activate(d,result)}else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||
this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(d){this._trigger("selected",d,{item:this.active})}})})(jQuery);
(function(a){var d,c=function(g){a(":ui-button",g.target.form).each(function(){var e=a(this).data("button");setTimeout(function(){e.refresh()},1)})},f=function(g){var e=g.name,i=g.form,b=a([]);if(e)b=i?a(i).find("[name='"+e+"']"):a("[name='"+e+"']",g.ownerDocument).filter(function(){return!this.form});return b};a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",
c);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var g=this,e=this.options,i=this.type==="checkbox"||this.type==="radio",b="ui-state-hover"+(!i?" ui-state-active":"");if(e.label===null)e.label=this.buttonElement.html();if(this.element.is(":disabled"))e.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
function(){if(!e.disabled){a(this).addClass("ui-state-hover");this===d&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){e.disabled||a(this).removeClass(b)}).bind("focus.button",function(){a(this).addClass("ui-state-focus")}).bind("blur.button",function(){a(this).removeClass("ui-state-focus")}).bind("click.button",function(h){e.disabled&&h.stopImmediatePropagation()});i&&this.element.bind("change.button",function(){g.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",
function(){if(e.disabled)return false;a(this).toggleClass("ui-state-active");g.buttonElement.attr("aria-pressed",g.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(e.disabled)return false;a(this).addClass("ui-state-active");g.buttonElement.attr("aria-pressed",true);var h=g.element[0];f(h).not(h).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",
function(){if(e.disabled)return false;a(this).addClass("ui-state-active");d=this;a(document).one("mouseup",function(){d=null})}).bind("mouseup.button",function(){if(e.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(h){if(e.disabled)return false;if(h.keyCode==a.ui.keyCode.SPACE||h.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(h){h.keyCode===
a.ui.keyCode.SPACE&&a(this).click()})}this._setOption("disabled",e.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){var g=this.element.parents().filter(":last"),e="label[for="+this.element.attr("id")+"]";this.buttonElement=g.find(e);if(!this.buttonElement.length){g=g.length?g.siblings():this.element.siblings();this.buttonElement=g.filter(e);
if(!this.buttonElement.length)this.buttonElement=g.find(e)}this.element.addClass("ui-helper-hidden-accessible");(g=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",g)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");a.Widget.prototype.destroy.call(this)},_setOption:function(g,e){a.Widget.prototype._setOption.apply(this,arguments);if(g==="disabled")e?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var g=this.element.is(":disabled");g!==this.options.disabled&&this._setOption("disabled",g);if(this.type==="radio")f(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var g=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
e=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(g.empty()).text(),i=this.options.icons,b=i.primary&&i.secondary,h=[];if(i.primary||i.secondary){if(this.options.text)h.push("ui-button-text-icon"+(b?"s":i.primary?"-primary":"-secondary"));i.primary&&g.prepend("<span class='ui-button-icon-primary ui-icon "+i.primary+"'></span>");i.secondary&&g.append("<span class='ui-button-icon-secondary ui-icon "+i.secondary+"'></span>");if(!this.options.text){h.push(b?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||g.attr("title",e)}}else h.push("ui-button-text-only");g.addClass(h.join(" "))}}});a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(g,e){g==="disabled"&&this.buttons.button("option",g,e);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");a.Widget.prototype.destroy.call(this)}})})(jQuery);
(function(a,d){function c(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};a.extend(this._defaults,this.regional[""]);this.dpDiv=f(a('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function f(b){return b.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a",
"mouseout",function(){a(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&a(this).removeClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&a(this).removeClass("ui-datepicker-next-hover")}).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a","mouseover",function(){if(!a.datepicker._isDisabledDatepicker(i.inline?b.parent()[0]:i.input[0])){a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
a(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&a(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&a(this).addClass("ui-datepicker-next-hover")}})}function g(b,h){a.extend(b,h);for(var j in h)if(h[j]==null||h[j]==d)b[j]=h[j];return b}a.extend(a.ui,{datepicker:{version:"1.8.13"}});var e=(new Date).getTime(),i;a.extend(c.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},
_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(b){g(this._defaults,b||{});return this},_attachDatepicker:function(b,h){var j=null;for(var l in this._defaults){var o=b.getAttribute("date:"+l);if(o){j=j||{};try{j[l]=eval(o)}catch(n){j[l]=o}}}l=b.nodeName.toLowerCase();o=l=="div"||l=="span";if(!b.id){this.uuid+=1;b.id="dp"+this.uuid}var k=this._newInst(a(b),o);k.settings=a.extend({},h||{},j||{});if(l=="input")this._connectDatepicker(b,k);else o&&this._inlineDatepicker(b,k)},_newInst:function(b,
h){return{id:b[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:h,dpDiv:!h?this.dpDiv:f(a('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(b,h){var j=a(b);h.append=a([]);h.trigger=a([]);if(!j.hasClass(this.markerClassName)){this._attachments(j,h);j.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function(l,o,n){h.settings[o]=n}).bind("getData.datepicker",function(l,o){return this._get(h,o)});this._autoSize(h);a.data(b,"datepicker",h)}},_attachments:function(b,h){var j=this._get(h,"appendText"),l=this._get(h,"isRTL");h.append&&h.append.remove();if(j){h.append=a('<span class="'+this._appendClass+'">'+j+"</span>");b[l?"before":"after"](h.append)}b.unbind("focus",this._showDatepicker);h.trigger&&h.trigger.remove();j=this._get(h,"showOn");if(j=="focus"||j=="both")b.focus(this._showDatepicker);
if(j=="button"||j=="both"){j=this._get(h,"buttonText");var o=this._get(h,"buttonImage");h.trigger=a(this._get(h,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:o,alt:j,title:j}):a('<button type="button"></button>').addClass(this._triggerClass).html(o==""?j:a("<img/>").attr({src:o,alt:j,title:j})));b[l?"before":"after"](h.trigger);h.trigger.click(function(){a.datepicker._datepickerShowing&&a.datepicker._lastInput==b[0]?a.datepicker._hideDatepicker():a.datepicker._showDatepicker(b[0]);
return false})}},_autoSize:function(b){if(this._get(b,"autoSize")&&!b.inline){var h=new Date(2009,11,20),j=this._get(b,"dateFormat");if(j.match(/[DM]/)){var l=function(o){for(var n=0,k=0,m=0;m<o.length;m++)if(o[m].length>n){n=o[m].length;k=m}return k};h.setMonth(l(this._get(b,j.match(/MM/)?"monthNames":"monthNamesShort")));h.setDate(l(this._get(b,j.match(/DD/)?"dayNames":"dayNamesShort"))+20-h.getDay())}b.input.attr("size",this._formatDate(b,h).length)}},_inlineDatepicker:function(b,h){var j=a(b);
if(!j.hasClass(this.markerClassName)){j.addClass(this.markerClassName).append(h.dpDiv).bind("setData.datepicker",function(l,o,n){h.settings[o]=n}).bind("getData.datepicker",function(l,o){return this._get(h,o)});a.data(b,"datepicker",h);this._setDate(h,this._getDefaultDate(h),true);this._updateDatepicker(h);this._updateAlternate(h);h.dpDiv.show()}},_dialogDatepicker:function(b,h,j,l,o){b=this._dialogInst;if(!b){this.uuid+=1;this._dialogInput=a('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
this._dialogInput.keydown(this._doKeyDown);a("body").append(this._dialogInput);b=this._dialogInst=this._newInst(this._dialogInput,false);b.settings={};a.data(this._dialogInput[0],"datepicker",b)}g(b.settings,l||{});h=h&&h.constructor==Date?this._formatDate(b,h):h;this._dialogInput.val(h);this._pos=o?o.length?o:[o.pageX,o.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/
2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");b.settings.onSelect=j;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);a.blockUI&&a.blockUI(this.dpDiv);a.data(this._dialogInput[0],"datepicker",b);return this},_destroyDatepicker:function(b){var h=a(b),j=a.data(b,"datepicker");if(h.hasClass(this.markerClassName)){var l=b.nodeName.toLowerCase();a.removeData(b,
"datepicker");if(l=="input"){j.append.remove();j.trigger.remove();h.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(l=="div"||l=="span")h.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(b){var h=a(b),j=a.data(b,"datepicker");if(h.hasClass(this.markerClassName)){var l=b.nodeName.toLowerCase();if(l=="input"){b.disabled=false;j.trigger.filter("button").each(function(){this.disabled=
false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(l=="div"||l=="span"){h=h.children("."+this._inlineClass);h.children().removeClass("ui-state-disabled");h.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=a.map(this._disabledInputs,function(o){return o==b?null:o})}},_disableDatepicker:function(b){var h=a(b),j=a.data(b,"datepicker");if(h.hasClass(this.markerClassName)){var l=b.nodeName.toLowerCase();if(l=="input"){b.disabled=
true;j.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(l=="div"||l=="span"){h=h.children("."+this._inlineClass);h.children().addClass("ui-state-disabled");h.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=a.map(this._disabledInputs,function(o){return o==b?null:o});this._disabledInputs[this._disabledInputs.length]=b}},_isDisabledDatepicker:function(b){if(!b)return false;
for(var h=0;h<this._disabledInputs.length;h++)if(this._disabledInputs[h]==b)return true;return false},_getInst:function(b){try{return a.data(b,"datepicker")}catch(h){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(b,h,j){var l=this._getInst(b);if(arguments.length==2&&typeof h=="string")return h=="defaults"?a.extend({},a.datepicker._defaults):l?h=="all"?a.extend({},l.settings):this._get(l,h):null;var o=h||{};if(typeof h=="string"){o={};o[h]=j}if(l){this._curInst==l&&
this._hideDatepicker();var n=this._getDateDatepicker(b,true),k=this._getMinMaxDate(l,"min"),m=this._getMinMaxDate(l,"max");g(l.settings,o);if(k!==null&&o.dateFormat!==d&&o.minDate===d)l.settings.minDate=this._formatDate(l,k);if(m!==null&&o.dateFormat!==d&&o.maxDate===d)l.settings.maxDate=this._formatDate(l,m);this._attachments(a(b),l);this._autoSize(l);this._setDate(l,n);this._updateAlternate(l);this._updateDatepicker(l)}},_changeDatepicker:function(b,h,j){this._optionDatepicker(b,h,j)},_refreshDatepicker:function(b){(b=
this._getInst(b))&&this._updateDatepicker(b)},_setDateDatepicker:function(b,h){if(b=this._getInst(b)){this._setDate(b,h);this._updateDatepicker(b);this._updateAlternate(b)}},_getDateDatepicker:function(b,h){(b=this._getInst(b))&&!b.inline&&this._setDateFromField(b,h);return b?this._getDate(b):null},_doKeyDown:function(b){var h=a.datepicker._getInst(b.target),j=true,l=h.dpDiv.is(".ui-datepicker-rtl");h._keyEvent=true;if(a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker();
j=false;break;case 13:j=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",h.dpDiv);j[0]?a.datepicker._selectDay(b.target,h.selectedMonth,h.selectedYear,j[0]):a.datepicker._hideDatepicker();return false;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(h,"stepBigMonths"):-a.datepicker._get(h,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(h,"stepBigMonths"):+a.datepicker._get(h,
"stepMonths"),"M");break;case 35:if(b.ctrlKey||b.metaKey)a.datepicker._clearDate(b.target);j=b.ctrlKey||b.metaKey;break;case 36:if(b.ctrlKey||b.metaKey)a.datepicker._gotoToday(b.target);j=b.ctrlKey||b.metaKey;break;case 37:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,l?+1:-1,"D");j=b.ctrlKey||b.metaKey;if(b.originalEvent.altKey)a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(h,"stepBigMonths"):-a.datepicker._get(h,"stepMonths"),"M");break;case 38:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,
-7,"D");j=b.ctrlKey||b.metaKey;break;case 39:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,l?-1:+1,"D");j=b.ctrlKey||b.metaKey;if(b.originalEvent.altKey)a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(h,"stepBigMonths"):+a.datepicker._get(h,"stepMonths"),"M");break;case 40:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,+7,"D");j=b.ctrlKey||b.metaKey;break;default:j=false}else if(b.keyCode==36&&b.ctrlKey)a.datepicker._showDatepicker(this);else j=false;if(j){b.preventDefault();
b.stopPropagation()}},_doKeyPress:function(b){var h=a.datepicker._getInst(b.target);if(a.datepicker._get(h,"constrainInput")){h=a.datepicker._possibleChars(a.datepicker._get(h,"dateFormat"));var j=String.fromCharCode(b.charCode==d?b.keyCode:b.charCode);return b.ctrlKey||b.metaKey||j<" "||!h||h.indexOf(j)>-1}},_doKeyUp:function(b){b=a.datepicker._getInst(b.target);if(b.input.val()!=b.lastVal)try{if(a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,a.datepicker._getFormatConfig(b))){a.datepicker._setDateFromField(b);
a.datepicker._updateAlternate(b);a.datepicker._updateDatepicker(b)}}catch(h){a.datepicker.log(h)}return true},_showDatepicker:function(b){b=b.target||b;if(b.nodeName.toLowerCase()!="input")b=a("input",b.parentNode)[0];if(!(a.datepicker._isDisabledDatepicker(b)||a.datepicker._lastInput==b)){var h=a.datepicker._getInst(b);a.datepicker._curInst&&a.datepicker._curInst!=h&&a.datepicker._curInst.dpDiv.stop(true,true);var j=a.datepicker._get(h,"beforeShow");g(h.settings,j?j.apply(b,[b,h]):{});h.lastVal=
null;a.datepicker._lastInput=b;a.datepicker._setDateFromField(h);if(a.datepicker._inDialog)b.value="";if(!a.datepicker._pos){a.datepicker._pos=a.datepicker._findPos(b);a.datepicker._pos[1]+=b.offsetHeight}var l=false;a(b).parents().each(function(){l|=a(this).css("position")=="fixed";return!l});if(l&&a.browser.opera){a.datepicker._pos[0]-=document.documentElement.scrollLeft;a.datepicker._pos[1]-=document.documentElement.scrollTop}j={left:a.datepicker._pos[0],top:a.datepicker._pos[1]};a.datepicker._pos=
null;h.dpDiv.empty();h.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});a.datepicker._updateDatepicker(h);j=a.datepicker._checkOffset(h,j,l);h.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":l?"fixed":"absolute",display:"none",left:j.left+"px",top:j.top+"px"});if(!h.inline){j=a.datepicker._get(h,"showAnim");var o=a.datepicker._get(h,"duration"),n=function(){var k=h.dpDiv.find("iframe.ui-datepicker-cover");if(k.length){var m=a.datepicker._getBorders(h.dpDiv);k.css({left:-m[0],
top:-m[1],width:h.dpDiv.outerWidth(),height:h.dpDiv.outerHeight()})}};h.dpDiv.zIndex(a(b).zIndex()+1);a.datepicker._datepickerShowing=true;a.effects&&a.effects[j]?h.dpDiv.show(j,a.datepicker._get(h,"showOptions"),o,n):h.dpDiv[j||"show"](j?o:null,n);if(!j||!o)n();h.input.is(":visible")&&!h.input.is(":disabled")&&h.input.focus();a.datepicker._curInst=h}}},_updateDatepicker:function(b){var h=a.datepicker._getBorders(b.dpDiv);i=b;b.dpDiv.empty().append(this._generateHTML(b));var j=b.dpDiv.find("iframe.ui-datepicker-cover");
j.length&&j.css({left:-h[0],top:-h[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()});b.dpDiv.find("."+this._dayOverClass+" a").mouseover();h=this._getNumberOfMonths(b);j=h[1];b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");j>1&&b.dpDiv.addClass("ui-datepicker-multi-"+j).css("width",17*j+"em");b.dpDiv[(h[0]!=1||h[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
b==a.datepicker._curInst&&a.datepicker._datepickerShowing&&b.input&&b.input.is(":visible")&&!b.input.is(":disabled")&&b.input[0]!=document.activeElement&&b.input.focus();if(b.yearshtml){var l=b.yearshtml;setTimeout(function(){l===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml);l=b.yearshtml=null},0)}},_getBorders:function(b){var h=function(j){return{thin:1,medium:2,thick:3}[j]||j};return[parseFloat(h(b.css("border-left-width"))),parseFloat(h(b.css("border-top-width")))]},
_checkOffset:function(b,h,j){var l=b.dpDiv.outerWidth(),o=b.dpDiv.outerHeight(),n=b.input?b.input.outerWidth():0,k=b.input?b.input.outerHeight():0,m=document.documentElement.clientWidth+a(document).scrollLeft(),p=document.documentElement.clientHeight+a(document).scrollTop();h.left-=this._get(b,"isRTL")?l-n:0;h.left-=j&&h.left==b.input.offset().left?a(document).scrollLeft():0;h.top-=j&&h.top==b.input.offset().top+k?a(document).scrollTop():0;h.left-=Math.min(h.left,h.left+l>m&&m>l?Math.abs(h.left+l-
m):0);h.top-=Math.min(h.top,h.top+o>p&&p>o?Math.abs(o+k):0);return h},_findPos:function(b){for(var h=this._get(this._getInst(b),"isRTL");b&&(b.type=="hidden"||b.nodeType!=1||a.expr.filters.hidden(b));)b=b[h?"previousSibling":"nextSibling"];b=a(b).offset();return[b.left,b.top]},_hideDatepicker:function(b){var h=this._curInst;if(!(!h||b&&h!=a.data(b,"datepicker")))if(this._datepickerShowing){b=this._get(h,"showAnim");var j=this._get(h,"duration"),l=function(){a.datepicker._tidyDialog(h);this._curInst=
null};a.effects&&a.effects[b]?h.dpDiv.hide(b,a.datepicker._get(h,"showOptions"),j,l):h.dpDiv[b=="slideDown"?"slideUp":b=="fadeIn"?"fadeOut":"hide"](b?j:null,l);b||l();if(b=this._get(h,"onClose"))b.apply(h.input?h.input[0]:null,[h.input?h.input.val():"",h]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(a.blockUI){a.unblockUI();a("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(b){b.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(b){if(a.datepicker._curInst){b=a(b.target);b[0].id!=a.datepicker._mainDivId&&b.parents("#"+a.datepicker._mainDivId).length==0&&!b.hasClass(a.datepicker.markerClassName)&&!b.hasClass(a.datepicker._triggerClass)&&a.datepicker._datepickerShowing&&!(a.datepicker._inDialog&&a.blockUI)&&a.datepicker._hideDatepicker()}},_adjustDate:function(b,h,j){b=a(b);var l=this._getInst(b[0]);if(!this._isDisabledDatepicker(b[0])){this._adjustInstDate(l,h+(j=="M"?this._get(l,"showCurrentAtPos"):
0),j);this._updateDatepicker(l)}},_gotoToday:function(b){b=a(b);var h=this._getInst(b[0]);if(this._get(h,"gotoCurrent")&&h.currentDay){h.selectedDay=h.currentDay;h.drawMonth=h.selectedMonth=h.currentMonth;h.drawYear=h.selectedYear=h.currentYear}else{var j=new Date;h.selectedDay=j.getDate();h.drawMonth=h.selectedMonth=j.getMonth();h.drawYear=h.selectedYear=j.getFullYear()}this._notifyChange(h);this._adjustDate(b)},_selectMonthYear:function(b,h,j){b=a(b);var l=this._getInst(b[0]);l._selectingMonthYear=
false;l["selected"+(j=="M"?"Month":"Year")]=l["draw"+(j=="M"?"Month":"Year")]=parseInt(h.options[h.selectedIndex].value,10);this._notifyChange(l);this._adjustDate(b)},_clickMonthYear:function(b){var h=this._getInst(a(b)[0]);h.input&&h._selectingMonthYear&&setTimeout(function(){h.input.focus()},0);h._selectingMonthYear=!h._selectingMonthYear},_selectDay:function(b,h,j,l){var o=a(b);if(!(a(l).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0]))){o=this._getInst(o[0]);o.selectedDay=o.currentDay=
a("a",l).html();o.selectedMonth=o.currentMonth=h;o.selectedYear=o.currentYear=j;this._selectDate(b,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear))}},_clearDate:function(b){b=a(b);this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(b,h){b=this._getInst(a(b)[0]);h=h!=null?h:this._formatDate(b);b.input&&b.input.val(h);this._updateAlternate(b);var j=this._get(b,"onSelect");if(j)j.apply(b.input?b.input[0]:null,[h,b]);else b.input&&b.input.trigger("change");if(b.inline)this._updateDatepicker(b);
else{this._hideDatepicker();this._lastInput=b.input[0];typeof b.input[0]!="object"&&b.input.focus();this._lastInput=null}},_updateAlternate:function(b){var h=this._get(b,"altField");if(h){var j=this._get(b,"altFormat")||this._get(b,"dateFormat"),l=this._getDate(b),o=this.formatDate(j,l,this._getFormatConfig(b));a(h).each(function(){a(this).val(o)})}},noWeekends:function(b){b=b.getDay();return[b>0&&b<6,""]},iso8601Week:function(b){b=new Date(b.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var h=
b.getTime();b.setMonth(0);b.setDate(1);return Math.floor(Math.round((h-b)/864E5)/7)+1},parseDate:function(b,h,j){if(b==null||h==null)throw"Invalid arguments";h=typeof h=="object"?h.toString():h+"";if(h=="")return null;var l=(j?j.shortYearCutoff:null)||this._defaults.shortYearCutoff;l=typeof l!="string"?l:(new Date).getFullYear()%100+parseInt(l,10);for(var o=(j?j.dayNamesShort:null)||this._defaults.dayNamesShort,n=(j?j.dayNames:null)||this._defaults.dayNames,k=(j?j.monthNamesShort:null)||this._defaults.monthNamesShort,
m=(j?j.monthNames:null)||this._defaults.monthNames,p=j=-1,q=-1,s=-1,r=false,u=function(y){(y=G+1<b.length&&b.charAt(G+1)==y)&&G++;return y},v=function(y){var H=u(y);y=new RegExp("^\\d{1,"+(y=="@"?14:y=="!"?20:y=="y"&&H?4:y=="o"?3:2)+"}");y=h.substring(z).match(y);if(!y)throw"Missing number at position "+z;z+=y[0].length;return parseInt(y[0],10)},w=function(y,H,N){y=a.map(u(y)?N:H,function(D,E){return[[E,D]]}).sort(function(D,E){return-(D[1].length-E[1].length)});var J=-1;a.each(y,function(D,E){D=
E[1];if(h.substr(z,D.length).toLowerCase()==D.toLowerCase()){J=E[0];z+=D.length;return false}});if(J!=-1)return J+1;else throw"Unknown name at position "+z;},x=function(){if(h.charAt(z)!=b.charAt(G))throw"Unexpected literal at position "+z;z++},z=0,G=0;G<b.length;G++)if(r)if(b.charAt(G)=="'"&&!u("'"))r=false;else x();else switch(b.charAt(G)){case "d":q=v("d");break;case "D":w("D",o,n);break;case "o":s=v("o");break;case "m":p=v("m");break;case "M":p=w("M",k,m);break;case "y":j=v("y");break;case "@":var C=
new Date(v("@"));j=C.getFullYear();p=C.getMonth()+1;q=C.getDate();break;case "!":C=new Date((v("!")-this._ticksTo1970)/1E4);j=C.getFullYear();p=C.getMonth()+1;q=C.getDate();break;case "'":if(u("'"))x();else r=true;break;default:x()}if(j==-1)j=(new Date).getFullYear();else if(j<100)j+=(new Date).getFullYear()-(new Date).getFullYear()%100+(j<=l?0:-100);if(s>-1){p=1;q=s;do{l=this._getDaysInMonth(j,p-1);if(q<=l)break;p++;q-=l}while(1)}C=this._daylightSavingAdjust(new Date(j,p-1,q));if(C.getFullYear()!=
j||C.getMonth()+1!=p||C.getDate()!=q)throw"Invalid date";return C},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(b,h,j){if(!h)return"";var l=(j?j.dayNamesShort:null)||this._defaults.dayNamesShort,o=(j?j.dayNames:null)||this._defaults.dayNames,
n=(j?j.monthNamesShort:null)||this._defaults.monthNamesShort;j=(j?j.monthNames:null)||this._defaults.monthNames;var k=function(u){(u=r+1<b.length&&b.charAt(r+1)==u)&&r++;return u},m=function(u,v,w){v=""+v;if(k(u))for(;v.length<w;)v="0"+v;return v},p=function(u,v,w,x){return k(u)?x[v]:w[v]},q="",s=false;if(h)for(var r=0;r<b.length;r++)if(s)if(b.charAt(r)=="'"&&!k("'"))s=false;else q+=b.charAt(r);else switch(b.charAt(r)){case "d":q+=m("d",h.getDate(),2);break;case "D":q+=p("D",h.getDay(),l,o);break;
case "o":q+=m("o",(h.getTime()-(new Date(h.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":q+=m("m",h.getMonth()+1,2);break;case "M":q+=p("M",h.getMonth(),n,j);break;case "y":q+=k("y")?h.getFullYear():(h.getYear()%100<10?"0":"")+h.getYear()%100;break;case "@":q+=h.getTime();break;case "!":q+=h.getTime()*1E4+this._ticksTo1970;break;case "'":if(k("'"))q+="'";else s=true;break;default:q+=b.charAt(r)}return q},_possibleChars:function(b){for(var h="",j=false,l=function(n){(n=o+1<b.length&&b.charAt(o+
1)==n)&&o++;return n},o=0;o<b.length;o++)if(j)if(b.charAt(o)=="'"&&!l("'"))j=false;else h+=b.charAt(o);else switch(b.charAt(o)){case "d":case "m":case "y":case "@":h+="0123456789";break;case "D":case "M":return null;case "'":if(l("'"))h+="'";else j=true;break;default:h+=b.charAt(o)}return h},_get:function(b,h){return b.settings[h]!==d?b.settings[h]:this._defaults[h]},_setDateFromField:function(b,h){if(b.input.val()!=b.lastVal){var j=this._get(b,"dateFormat"),l=b.lastVal=b.input?b.input.val():null,
o,n;o=n=this._getDefaultDate(b);var k=this._getFormatConfig(b);try{o=this.parseDate(j,l,k)||n}catch(m){this.log(m);l=h?"":l}b.selectedDay=o.getDate();b.drawMonth=b.selectedMonth=o.getMonth();b.drawYear=b.selectedYear=o.getFullYear();b.currentDay=l?o.getDate():0;b.currentMonth=l?o.getMonth():0;b.currentYear=l?o.getFullYear():0;this._adjustInstDate(b)}},_getDefaultDate:function(b){return this._restrictMinMax(b,this._determineDate(b,this._get(b,"defaultDate"),new Date))},_determineDate:function(b,h,
j){var l=function(n){var k=new Date;k.setDate(k.getDate()+n);return k},o=function(n){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),n,a.datepicker._getFormatConfig(b))}catch(k){}var m=(n.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,p=m.getFullYear(),q=m.getMonth();m=m.getDate();for(var s=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,r=s.exec(n);r;){switch(r[2]||"d"){case "d":case "D":m+=parseInt(r[1],10);break;case "w":case "W":m+=parseInt(r[1],10)*7;break;case "m":case "M":q+=
parseInt(r[1],10);m=Math.min(m,a.datepicker._getDaysInMonth(p,q));break;case "y":case "Y":p+=parseInt(r[1],10);m=Math.min(m,a.datepicker._getDaysInMonth(p,q));break}r=s.exec(n)}return new Date(p,q,m)};if(h=(h=h==null||h===""?j:typeof h=="string"?o(h):typeof h=="number"?isNaN(h)?j:l(h):new Date(h.getTime()))&&h.toString()=="Invalid Date"?j:h){h.setHours(0);h.setMinutes(0);h.setSeconds(0);h.setMilliseconds(0)}return this._daylightSavingAdjust(h)},_daylightSavingAdjust:function(b){if(!b)return null;
b.setHours(b.getHours()>12?b.getHours()+2:0);return b},_setDate:function(b,h,j){var l=!h,o=b.selectedMonth,n=b.selectedYear;h=this._restrictMinMax(b,this._determineDate(b,h,new Date));b.selectedDay=b.currentDay=h.getDate();b.drawMonth=b.selectedMonth=b.currentMonth=h.getMonth();b.drawYear=b.selectedYear=b.currentYear=h.getFullYear();if((o!=b.selectedMonth||n!=b.selectedYear)&&!j)this._notifyChange(b);this._adjustInstDate(b);if(b.input)b.input.val(l?"":this._formatDate(b))},_getDate:function(b){return!b.currentYear||
b.input&&b.input.val()==""?null:this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay))},_generateHTML:function(b){var h=new Date;h=this._daylightSavingAdjust(new Date(h.getFullYear(),h.getMonth(),h.getDate()));var j=this._get(b,"isRTL"),l=this._get(b,"showButtonPanel"),o=this._get(b,"hideIfNoPrevNext"),n=this._get(b,"navigationAsDateFormat"),k=this._getNumberOfMonths(b),m=this._get(b,"showCurrentAtPos"),p=this._get(b,"stepMonths"),q=k[0]!=1||k[1]!=1,s=this._daylightSavingAdjust(!b.currentDay?
new Date(9999,9,9):new Date(b.currentYear,b.currentMonth,b.currentDay)),r=this._getMinMaxDate(b,"min"),u=this._getMinMaxDate(b,"max");m=b.drawMonth-m;var v=b.drawYear;if(m<0){m+=12;v--}if(u){var w=this._daylightSavingAdjust(new Date(u.getFullYear(),u.getMonth()-k[0]*k[1]+1,u.getDate()));for(w=r&&w<r?r:w;this._daylightSavingAdjust(new Date(v,m,1))>w;){m--;if(m<0){m=11;v--}}}b.drawMonth=m;b.drawYear=v;w=this._get(b,"prevText");w=!n?w:this.formatDate(w,this._daylightSavingAdjust(new Date(v,m-p,1)),this._getFormatConfig(b));
w=this._canAdjustMonth(b,-1,v,m)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+e+".datepicker._adjustDate('#"+b.id+"', -"+p+", 'M');\" title=\""+w+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"e":"w")+'">'+w+"</span></a>":o?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+w+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"e":"w")+'">'+w+"</span></a>";var x=this._get(b,"nextText");x=!n?x:this.formatDate(x,this._daylightSavingAdjust(new Date(v,
m+p,1)),this._getFormatConfig(b));o=this._canAdjustMonth(b,+1,v,m)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+e+".datepicker._adjustDate('#"+b.id+"', +"+p+", 'M');\" title=\""+x+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"w":"e")+'">'+x+"</span></a>":o?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+x+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"w":"e")+'">'+x+"</span></a>";p=this._get(b,"currentText");x=this._get(b,"gotoCurrent")&&
b.currentDay?s:h;p=!n?p:this.formatDate(p,x,this._getFormatConfig(b));n=!b.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+e+'.datepicker._hideDatepicker();">'+this._get(b,"closeText")+"</button>":"";l=l?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(j?n:"")+(this._isInRange(b,x)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+
e+".datepicker._gotoToday('#"+b.id+"');\">"+p+"</button>":"")+(j?"":n)+"</div>":"";n=parseInt(this._get(b,"firstDay"),10);n=isNaN(n)?0:n;p=this._get(b,"showWeek");x=this._get(b,"dayNames");this._get(b,"dayNamesShort");var z=this._get(b,"dayNamesMin"),G=this._get(b,"monthNames"),C=this._get(b,"monthNamesShort"),y=this._get(b,"beforeShowDay"),H=this._get(b,"showOtherMonths"),N=this._get(b,"selectOtherMonths");this._get(b,"calculateWeek");for(var J=this._getDefaultDate(b),D="",E=0;E<k[0];E++){for(var P=
"",L=0;L<k[1];L++){var Q=this._daylightSavingAdjust(new Date(v,m,b.selectedDay)),B=" ui-corner-all",F="";if(q){F+='<div class="ui-datepicker-group';if(k[1]>1)switch(L){case 0:F+=" ui-datepicker-group-first";B=" ui-corner-"+(j?"right":"left");break;case k[1]-1:F+=" ui-datepicker-group-last";B=" ui-corner-"+(j?"left":"right");break;default:F+=" ui-datepicker-group-middle";B="";break}F+='">'}F+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+B+'">'+(/all|left/.test(B)&&E==0?j?
o:w:"")+(/all|right/.test(B)&&E==0?j?w:o:"")+this._generateMonthYearHeader(b,m,v,r,u,E>0||L>0,G,C)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var I=p?'<th class="ui-datepicker-week-col">'+this._get(b,"weekHeader")+"</th>":"";for(B=0;B<7;B++){var A=(B+n)%7;I+="<th"+((B+n+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+x[A]+'">'+z[A]+"</span></th>"}F+=I+"</tr></thead><tbody>";I=this._getDaysInMonth(v,m);if(v==b.selectedYear&&m==b.selectedMonth)b.selectedDay=Math.min(b.selectedDay,
I);B=(this._getFirstDayOfMonth(v,m)-n+7)%7;I=q?6:Math.ceil((B+I)/7);A=this._daylightSavingAdjust(new Date(v,m,1-B));for(var R=0;R<I;R++){F+="<tr>";var S=!p?"":'<td class="ui-datepicker-week-col">'+this._get(b,"calculateWeek")(A)+"</td>";for(B=0;B<7;B++){var M=y?y.apply(b.input?b.input[0]:null,[A]):[true,""],K=A.getMonth()!=m,O=K&&!N||!M[0]||r&&A<r||u&&A>u;S+='<td class="'+((B+n+6)%7>=5?" ui-datepicker-week-end":"")+(K?" ui-datepicker-other-month":"")+(A.getTime()==Q.getTime()&&m==b.selectedMonth&&
b._keyEvent||J.getTime()==A.getTime()&&J.getTime()==Q.getTime()?" "+this._dayOverClass:"")+(O?" "+this._unselectableClass+" ui-state-disabled":"")+(K&&!H?"":" "+M[1]+(A.getTime()==s.getTime()?" "+this._currentClass:"")+(A.getTime()==h.getTime()?" ui-datepicker-today":""))+'"'+((!K||H)&&M[2]?' title="'+M[2]+'"':"")+(O?"":' onclick="DP_jQuery_'+e+".datepicker._selectDay('#"+b.id+"',"+A.getMonth()+","+A.getFullYear()+', this);return false;"')+">"+(K&&!H?"&#xa0;":O?'<span class="ui-state-default">'+A.getDate()+
"</span>":'<a class="ui-state-default'+(A.getTime()==h.getTime()?" ui-state-highlight":"")+(A.getTime()==s.getTime()?" ui-state-active":"")+(K?" ui-priority-secondary":"")+'" href="#">'+A.getDate()+"</a>")+"</td>";A.setDate(A.getDate()+1);A=this._daylightSavingAdjust(A)}F+=S+"</tr>"}m++;if(m>11){m=0;v++}F+="</tbody></table>"+(q?"</div>"+(k[0]>0&&L==k[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");P+=F}D+=P}D+=l+(a.browser.msie&&parseInt(a.browser.version,10)<7&&!b.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':
"");b._keyEvent=false;return D},_generateMonthYearHeader:function(b,h,j,l,o,n,k,m){var p=this._get(b,"changeMonth"),q=this._get(b,"changeYear"),s=this._get(b,"showMonthAfterYear"),r='<div class="ui-datepicker-title">',u="";if(n||!p)u+='<span class="ui-datepicker-month">'+k[h]+"</span>";else{k=l&&l.getFullYear()==j;var v=o&&o.getFullYear()==j;u+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+e+".datepicker._selectMonthYear('#"+b.id+"', this, 'M');\" onclick=\"DP_jQuery_"+e+".datepicker._clickMonthYear('#"+
b.id+"');\">";for(var w=0;w<12;w++)if((!k||w>=l.getMonth())&&(!v||w<=o.getMonth()))u+='<option value="'+w+'"'+(w==h?' selected="selected"':"")+">"+m[w]+"</option>";u+="</select>"}s||(r+=u+(n||!(p&&q)?"&#xa0;":""));if(!b.yearshtml){b.yearshtml="";if(n||!q)r+='<span class="ui-datepicker-year">'+j+"</span>";else{m=this._get(b,"yearRange").split(":");var x=(new Date).getFullYear();k=function(z){z=z.match(/c[+-].*/)?j+parseInt(z.substring(1),10):z.match(/[+-].*/)?x+parseInt(z,10):parseInt(z,10);return isNaN(z)?
x:z};h=k(m[0]);m=Math.max(h,k(m[1]||""));h=l?Math.max(h,l.getFullYear()):h;m=o?Math.min(m,o.getFullYear()):m;for(b.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+e+".datepicker._selectMonthYear('#"+b.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+e+".datepicker._clickMonthYear('#"+b.id+"');\">";h<=m;h++)b.yearshtml+='<option value="'+h+'"'+(h==j?' selected="selected"':"")+">"+h+"</option>";b.yearshtml+="</select>";r+=b.yearshtml;b.yearshtml=null}}r+=this._get(b,"yearSuffix");if(s)r+=
(n||!(p&&q)?"&#xa0;":"")+u;r+="</div>";return r},_adjustInstDate:function(b,h,j){var l=b.drawYear+(j=="Y"?h:0),o=b.drawMonth+(j=="M"?h:0);h=Math.min(b.selectedDay,this._getDaysInMonth(l,o))+(j=="D"?h:0);l=this._restrictMinMax(b,this._daylightSavingAdjust(new Date(l,o,h)));b.selectedDay=l.getDate();b.drawMonth=b.selectedMonth=l.getMonth();b.drawYear=b.selectedYear=l.getFullYear();if(j=="M"||j=="Y")this._notifyChange(b)},_restrictMinMax:function(b,h){var j=this._getMinMaxDate(b,"min");b=this._getMinMaxDate(b,
"max");h=j&&h<j?j:h;return h=b&&h>b?b:h},_notifyChange:function(b){var h=this._get(b,"onChangeMonthYear");if(h)h.apply(b.input?b.input[0]:null,[b.selectedYear,b.selectedMonth+1,b])},_getNumberOfMonths:function(b){b=this._get(b,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(b,h){return this._determineDate(b,this._get(b,h+"Date"),null)},_getDaysInMonth:function(b,h){return 32-this._daylightSavingAdjust(new Date(b,h,32)).getDate()},_getFirstDayOfMonth:function(b,
h){return(new Date(b,h,1)).getDay()},_canAdjustMonth:function(b,h,j,l){var o=this._getNumberOfMonths(b);j=this._daylightSavingAdjust(new Date(j,l+(h<0?h:o[0]*o[1]),1));h<0&&j.setDate(this._getDaysInMonth(j.getFullYear(),j.getMonth()));return this._isInRange(b,j)},_isInRange:function(b,h){var j=this._getMinMaxDate(b,"min");b=this._getMinMaxDate(b,"max");return(!j||h.getTime()>=j.getTime())&&(!b||h.getTime()<=b.getTime())},_getFormatConfig:function(b){var h=this._get(b,"shortYearCutoff");h=typeof h!=
"string"?h:(new Date).getFullYear()%100+parseInt(h,10);return{shortYearCutoff:h,dayNamesShort:this._get(b,"dayNamesShort"),dayNames:this._get(b,"dayNames"),monthNamesShort:this._get(b,"monthNamesShort"),monthNames:this._get(b,"monthNames")}},_formatDate:function(b,h,j,l){if(!h){b.currentDay=b.selectedDay;b.currentMonth=b.selectedMonth;b.currentYear=b.selectedYear}h=h?typeof h=="object"?h:this._daylightSavingAdjust(new Date(l,j,h)):this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay));
return this.formatDate(this._get(b,"dateFormat"),h,this._getFormatConfig(b))}});a.fn.datepicker=function(b){if(!this.length)return this;if(!a.datepicker.initialized){a(document).mousedown(a.datepicker._checkExternalClick).find("body").append(a.datepicker.dpDiv);a.datepicker.initialized=true}var h=Array.prototype.slice.call(arguments,1);if(typeof b=="string"&&(b=="isDisabled"||b=="getDate"||b=="widget"))return a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(h));if(b=="option"&&
arguments.length==2&&typeof arguments[1]=="string")return a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(h));return this.each(function(){typeof b=="string"?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(h)):a.datepicker._attachDatepicker(this,b)})};a.datepicker=new c;a.datepicker.initialized=false;a.datepicker.uuid=(new Date).getTime();a.datepicker.version="1.8.13";window["DP_jQuery_"+e]=a})(jQuery);
(function(a,d){var c={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},f={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},g=a.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};a.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,
position:{my:"center",at:"center",collision:"fit",using:function(e){var i=a(this).css(e).offset().top;i<0&&a(this).css("top",e.top-i)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var e=this,i=e.options,b=i.title||"&#160;",h=a.ui.dialog.getTitleId(e.element),j=(e.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+
i.dialogClass).css({zIndex:i.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(n){if(i.closeOnEscape&&n.keyCode&&n.keyCode===a.ui.keyCode.ESCAPE){e.close(n);n.preventDefault()}}).attr({role:"dialog","aria-labelledby":h}).mousedown(function(n){e.moveToTop(false,n)});e.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(j);var l=(e.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(j),
o=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){o.addClass("ui-state-hover")},function(){o.removeClass("ui-state-hover")}).focus(function(){o.addClass("ui-state-focus")}).blur(function(){o.removeClass("ui-state-focus")}).click(function(n){e.close(n);return false}).appendTo(l);(e.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(i.closeText).appendTo(o);a("<span></span>").addClass("ui-dialog-title").attr("id",
h).html(b).prependTo(l);if(a.isFunction(i.beforeclose)&&!a.isFunction(i.beforeClose))i.beforeClose=i.beforeclose;l.find("*").add(l).disableSelection();i.draggable&&a.fn.draggable&&e._makeDraggable();i.resizable&&a.fn.resizable&&e._makeResizable();e._createButtons(i.buttons);e._isOpen=false;a.fn.bgiframe&&j.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var e=this;e.overlay&&e.overlay.destroy();e.uiDialog.hide();e.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
e.uiDialog.remove();e.originalTitle&&e.element.attr("title",e.originalTitle);return e},widget:function(){return this.uiDialog},close:function(e){var i=this,b,h;if(false!==i._trigger("beforeClose",e)){i.overlay&&i.overlay.destroy();i.uiDialog.unbind("keypress.ui-dialog");i._isOpen=false;if(i.options.hide)i.uiDialog.hide(i.options.hide,function(){i._trigger("close",e)});else{i.uiDialog.hide();i._trigger("close",e)}a.ui.dialog.overlay.resize();if(i.options.modal){b=0;a(".ui-dialog").each(function(){if(this!==
i.uiDialog[0]){h=a(this).css("z-index");isNaN(h)||(b=Math.max(b,h))}});a.ui.dialog.maxZ=b}return i}},isOpen:function(){return this._isOpen},moveToTop:function(e,i){var b=this,h=b.options;if(h.modal&&!e||!h.stack&&!h.modal)return b._trigger("focus",i);if(h.zIndex>a.ui.dialog.maxZ)a.ui.dialog.maxZ=h.zIndex;if(b.overlay){a.ui.dialog.maxZ+=1;b.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)}e={scrollTop:b.element.attr("scrollTop"),scrollLeft:b.element.attr("scrollLeft")};a.ui.dialog.maxZ+=
1;b.uiDialog.css("z-index",a.ui.dialog.maxZ);b.element.attr(e);b._trigger("focus",i);return b},open:function(){if(!this._isOpen){var e=this,i=e.options,b=e.uiDialog;e.overlay=i.modal?new a.ui.dialog.overlay(e):null;e._size();e._position(i.position);b.show(i.show);e.moveToTop(true);i.modal&&b.bind("keypress.ui-dialog",function(h){if(h.keyCode===a.ui.keyCode.TAB){var j=a(":tabbable",this),l=j.filter(":first");j=j.filter(":last");if(h.target===j[0]&&!h.shiftKey){l.focus(1);return false}else if(h.target===
l[0]&&h.shiftKey){j.focus(1);return false}}});a(e.element.find(":tabbable").get().concat(b.find(".ui-dialog-buttonpane :tabbable").get().concat(b.get()))).eq(0).focus();e._isOpen=true;e._trigger("open");return e}},_createButtons:function(e){var i=this,b=false,h=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),j=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(h);i.uiDialog.find(".ui-dialog-buttonpane").remove();typeof e==="object"&&e!==null&&a.each(e,
function(){return!(b=true)});if(b){a.each(e,function(l,o){o=a.isFunction(o)?{click:o,text:l}:o;var n=a('<button type="button"></button>').click(function(){o.click.apply(i.element[0],arguments)}).appendTo(j);a.each(o,function(k,m){if(k!=="click")k in g?n[k](m):n.attr(k,m)});a.fn.button&&n.button()});h.appendTo(i.uiDialog)}},_makeDraggable:function(){function e(l){return{position:l.position,offset:l.offset}}var i=this,b=i.options,h=a(document),j;i.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(l,o){j=b.height==="auto"?"auto":a(this).height();a(this).height(a(this).height()).addClass("ui-dialog-dragging");i._trigger("dragStart",l,e(o))},drag:function(l,o){i._trigger("drag",l,e(o))},stop:function(l,o){b.position=[o.position.left-h.scrollLeft(),o.position.top-h.scrollTop()];a(this).removeClass("ui-dialog-dragging").height(j);i._trigger("dragStop",l,e(o));a.ui.dialog.overlay.resize()}})},_makeResizable:function(e){function i(l){return{originalPosition:l.originalPosition,
originalSize:l.originalSize,position:l.position,size:l.size}}e=e===d?this.options.resizable:e;var b=this,h=b.options,j=b.uiDialog.css("position");e=typeof e==="string"?e:"n,e,s,w,se,sw,ne,nw";b.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:b.element,maxWidth:h.maxWidth,maxHeight:h.maxHeight,minWidth:h.minWidth,minHeight:b._minHeight(),handles:e,start:function(l,o){a(this).addClass("ui-dialog-resizing");b._trigger("resizeStart",l,i(o))},resize:function(l,o){b._trigger("resize",
l,i(o))},stop:function(l,o){a(this).removeClass("ui-dialog-resizing");h.height=a(this).height();h.width=a(this).width();b._trigger("resizeStop",l,i(o));a.ui.dialog.overlay.resize()}}).css("position",j).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(e){var i=[],b=[0,0],h;if(e){if(typeof e==="string"||typeof e==="object"&&"0"in e){i=e.split?e.split(" "):
[e[0],e[1]];if(i.length===1)i[1]=i[0];a.each(["left","top"],function(j,l){if(+i[j]===i[j]){b[j]=i[j];i[j]=l}});e={my:i.join(" "),at:i.join(" "),offset:b.join(" ")}}e=a.extend({},a.ui.dialog.prototype.options.position,e)}else e=a.ui.dialog.prototype.options.position;(h=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},e));h||this.uiDialog.hide()},_setOptions:function(e){var i=this,b={},h=false;a.each(e,function(j,l){i._setOption(j,l);
if(j in c)h=true;if(j in f)b[j]=l});h&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",b)},_setOption:function(e,i){var b=this,h=b.uiDialog;switch(e){case "beforeclose":e="beforeClose";break;case "buttons":b._createButtons(i);break;case "closeText":b.uiDialogTitlebarCloseText.text(""+i);break;case "dialogClass":h.removeClass(b.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+i);break;case "disabled":i?h.addClass("ui-dialog-disabled"):
h.removeClass("ui-dialog-disabled");break;case "draggable":var j=h.is(":data(draggable)");j&&!i&&h.draggable("destroy");!j&&i&&b._makeDraggable();break;case "position":b._position(i);break;case "resizable":(j=h.is(":data(resizable)"))&&!i&&h.resizable("destroy");j&&typeof i==="string"&&h.resizable("option","handles",i);!j&&i!==false&&b._makeResizable(i);break;case "title":a(".ui-dialog-title",b.uiDialogTitlebar).html(""+(i||"&#160;"));break}a.Widget.prototype._setOption.apply(b,arguments)},_size:function(){var e=
this.options,i,b,h=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(e.minWidth>e.width)e.width=e.minWidth;i=this.uiDialog.css({height:"auto",width:e.width}).height();b=Math.max(0,e.minHeight-i);if(e.height==="auto")if(a.support.minHeight)this.element.css({minHeight:b,height:"auto"});else{this.uiDialog.show();e=this.element.css("height","auto").height();h||this.uiDialog.hide();this.element.height(Math.max(e,b))}else this.element.height(Math.max(e.height-
i,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});a.extend(a.ui.dialog,{version:"1.8.13",uuid:0,maxZ:0,getTitleId:function(e){e=e.attr("id");if(!e){this.uuid+=1;e=this.uuid}return"ui-dialog-title-"+e},overlay:function(e){this.$el=a.ui.dialog.overlay.create(e)}});a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(e){return e+".dialog-overlay"}).join(" "),
create:function(e){if(this.instances.length===0){setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return false})},1);a(document).bind("keydown.dialog-overlay",function(b){if(e.options.closeOnEscape&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE){e.close(b);b.preventDefault()}});a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize)}var i=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});a.fn.bgiframe&&i.bgiframe();this.instances.push(i);return i},destroy:function(e){var i=a.inArray(e,this.instances);i!=-1&&this.oldInstances.push(this.instances.splice(i,1)[0]);this.instances.length===0&&a([document,window]).unbind(".dialog-overlay");e.remove();var b=0;a.each(this.instances,function(){b=Math.max(b,this.css("z-index"))});this.maxZ=b},height:function(){var e,i;if(a.browser.msie&&a.browser.version<7){e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
i=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return e<i?a(window).height()+"px":e+"px"}else return a(document).height()+"px"},width:function(){var e,i;if(a.browser.msie&&a.browser.version<7){e=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);i=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return e<i?a(window).width()+"px":e+"px"}else return a(document).width()+"px"},resize:function(){var e=a([]);a.each(a.ui.dialog.overlay.instances,
function(){e=e.add(this)});e.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}});a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
(function(a){a.ui=a.ui||{};var d=/left|center|right/,c=/top|center|bottom/,f=a.fn.position,g=a.fn.offset;a.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=a.extend({},e);var i=a(e.of),b=i[0],h=(e.collision||"flip").split(" "),j=e.offset?e.offset.split(" "):[0,0],l,o,n;if(b.nodeType===9){l=i.width();o=i.height();n={top:0,left:0}}else if(b.setTimeout){l=i.width();o=i.height();n={top:i.scrollTop(),left:i.scrollLeft()}}else if(b.preventDefault){e.at="left top";l=o=0;n={top:e.of.pageY,
left:e.of.pageX}}else{l=i.outerWidth();o=i.outerHeight();n=i.offset()}a.each(["my","at"],function(){var k=(e[this]||"").split(" ");if(k.length===1)k=d.test(k[0])?k.concat(["center"]):c.test(k[0])?["center"].concat(k):["center","center"];k[0]=d.test(k[0])?k[0]:"center";k[1]=c.test(k[1])?k[1]:"center";e[this]=k});if(h.length===1)h[1]=h[0];j[0]=parseInt(j[0],10)||0;if(j.length===1)j[1]=j[0];j[1]=parseInt(j[1],10)||0;if(e.at[0]==="right")n.left+=l;else if(e.at[0]==="center")n.left+=l/2;if(e.at[1]==="bottom")n.top+=
o;else if(e.at[1]==="center")n.top+=o/2;n.left+=j[0];n.top+=j[1];return this.each(function(){var k=a(this),m=k.outerWidth(),p=k.outerHeight(),q=parseInt(a.curCSS(this,"marginLeft",true))||0,s=parseInt(a.curCSS(this,"marginTop",true))||0,r=m+q+(parseInt(a.curCSS(this,"marginRight",true))||0),u=p+s+(parseInt(a.curCSS(this,"marginBottom",true))||0),v=a.extend({},n),w;if(e.my[0]==="right")v.left-=m;else if(e.my[0]==="center")v.left-=m/2;if(e.my[1]==="bottom")v.top-=p;else if(e.my[1]==="center")v.top-=
p/2;v.left=Math.round(v.left);v.top=Math.round(v.top);w={left:v.left-q,top:v.top-s};a.each(["left","top"],function(x,z){a.ui.position[h[x]]&&a.ui.position[h[x]][z](v,{targetWidth:l,targetHeight:o,elemWidth:m,elemHeight:p,collisionPosition:w,collisionWidth:r,collisionHeight:u,offset:j,my:e.my,at:e.at})});a.fn.bgiframe&&k.bgiframe();k.offset(a.extend(v,{using:e.using}))})};a.ui.position={fit:{left:function(e,i){var b=a(window);b=i.collisionPosition.left+i.collisionWidth-b.width()-b.scrollLeft();e.left=
b>0?e.left-b:Math.max(e.left-i.collisionPosition.left,e.left)},top:function(e,i){var b=a(window);b=i.collisionPosition.top+i.collisionHeight-b.height()-b.scrollTop();e.top=b>0?e.top-b:Math.max(e.top-i.collisionPosition.top,e.top)}},flip:{left:function(e,i){if(i.at[0]!=="center"){var b=a(window);b=i.collisionPosition.left+i.collisionWidth-b.width()-b.scrollLeft();var h=i.my[0]==="left"?-i.elemWidth:i.my[0]==="right"?i.elemWidth:0,j=i.at[0]==="left"?i.targetWidth:-i.targetWidth,l=-2*i.offset[0];e.left+=
i.collisionPosition.left<0?h+j+l:b>0?h+j+l:0}},top:function(e,i){if(i.at[1]!=="center"){var b=a(window);b=i.collisionPosition.top+i.collisionHeight-b.height()-b.scrollTop();var h=i.my[1]==="top"?-i.elemHeight:i.my[1]==="bottom"?i.elemHeight:0,j=i.at[1]==="top"?i.targetHeight:-i.targetHeight,l=-2*i.offset[1];e.top+=i.collisionPosition.top<0?h+j+l:b>0?h+j+l:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(e,i){if(/static/.test(a.curCSS(e,"position")))e.style.position="relative";var b=a(e),
h=b.offset(),j=parseInt(a.curCSS(e,"top",true),10)||0,l=parseInt(a.curCSS(e,"left",true),10)||0;h={top:i.top-h.top+j,left:i.left-h.left+l};"using"in i?i.using.call(e,h):b.css(h)};a.fn.offset=function(e){var i=this[0];if(!i||!i.ownerDocument)return null;if(e)return this.each(function(){a.offset.setOffset(this,e)});return g.call(this)}}})(jQuery);
(function(a,d){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();a.Widget.prototype.destroy.apply(this,arguments)},value:function(c){if(c===d)return this._value();this._setOption("value",c);return this},_setOption:function(c,f){if(c==="value"){this.options.value=f;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var c=this.options.value;if(typeof c!=="number")c=0;return Math.min(this.options.max,Math.max(this.min,c))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var c=this.value(),f=this._percentage();if(this.oldValue!==c){this.oldValue=c;this._trigger("change")}this.valueDiv.toggle(c>this.min).toggleClass("ui-corner-right",c===this.options.max).width(f.toFixed(0)+"%");this.element.attr("aria-valuenow",c)}});a.extend(a.ui.progressbar,{version:"1.8.13"})})(jQuery);
(function(a){a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var d=this,c=this.options,f=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),g=c.values&&c.values.length||1,e=[];this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+
this.orientation+" ui-widget ui-widget-content ui-corner-all"+(c.disabled?" ui-slider-disabled ui-disabled":""));this.range=a([]);if(c.range){if(c.range===true){if(!c.values)c.values=[this._valueMin(),this._valueMin()];if(c.values.length&&c.values.length!==2)c.values=[c.values[0],c.values[0]]}this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(c.range==="min"||c.range==="max"?" ui-slider-range-"+c.range:""))}for(var i=f.length;i<g;i+=1)e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
this.handles=f.add(a(e.join("")).appendTo(d.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(b){b.preventDefault()}).hover(function(){c.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){if(c.disabled)a(this).blur();else{a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");a(this).addClass("ui-state-focus")}}).blur(function(){a(this).removeClass("ui-state-focus")});this.handles.each(function(b){a(this).data("index.ui-slider-handle",
b)});this.handles.keydown(function(b){var h=true,j=a(this).data("index.ui-slider-handle"),l,o,n;if(!d.options.disabled){switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:h=false;if(!d._keySliding){d._keySliding=true;a(this).addClass("ui-state-active");l=d._start(b,j);if(l===false)return}break}n=d.options.step;l=d.options.values&&d.options.values.length?
(o=d.values(j)):(o=d.value());switch(b.keyCode){case a.ui.keyCode.HOME:o=d._valueMin();break;case a.ui.keyCode.END:o=d._valueMax();break;case a.ui.keyCode.PAGE_UP:o=d._trimAlignValue(l+(d._valueMax()-d._valueMin())/5);break;case a.ui.keyCode.PAGE_DOWN:o=d._trimAlignValue(l-(d._valueMax()-d._valueMin())/5);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(l===d._valueMax())return;o=d._trimAlignValue(l+n);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(l===d._valueMin())return;o=d._trimAlignValue(l-
n);break}d._slide(b,j,o);return h}}).keyup(function(b){var h=a(this).data("index.ui-slider-handle");if(d._keySliding){d._keySliding=false;d._stop(b,h);d._change(b,h);a(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();
return this},_mouseCapture:function(d){var c=this.options,f,g,e,i,b;if(c.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();f=this._normValueFromMouse({x:d.pageX,y:d.pageY});g=this._valueMax()-this._valueMin()+1;i=this;this.handles.each(function(h){var j=Math.abs(f-i.values(h));if(g>j){g=j;e=a(this);b=h}});if(c.range===true&&this.values(1)===c.min){b+=1;e=a(this.handles[b])}if(this._start(d,b)===false)return false;
this._mouseSliding=true;i._handleIndex=b;e.addClass("ui-state-active").focus();c=e.offset();this._clickOffset=!a(d.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:d.pageX-c.left-e.width()/2,top:d.pageY-c.top-e.height()/2-(parseInt(e.css("borderTopWidth"),10)||0)-(parseInt(e.css("borderBottomWidth"),10)||0)+(parseInt(e.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(d,b,f);return this._animateOff=true},_mouseStart:function(){return true},_mouseDrag:function(d){var c=
this._normValueFromMouse({x:d.pageX,y:d.pageY});this._slide(d,this._handleIndex,c);return false},_mouseStop:function(d){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(d,this._handleIndex);this._change(d,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(d){var c;if(this.orientation==="horizontal"){c=
this.elementSize.width;d=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{c=this.elementSize.height;d=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}c=d/c;if(c>1)c=1;if(c<0)c=0;if(this.orientation==="vertical")c=1-c;d=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+c*d)},_start:function(d,c){var f={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){f.value=this.values(c);
f.values=this.values()}return this._trigger("start",d,f)},_slide:function(d,c,f){var g;if(this.options.values&&this.options.values.length){g=this.values(c?0:1);if(this.options.values.length===2&&this.options.range===true&&(c===0&&f>g||c===1&&f<g))f=g;if(f!==this.values(c)){g=this.values();g[c]=f;d=this._trigger("slide",d,{handle:this.handles[c],value:f,values:g});this.values(c?0:1);d!==false&&this.values(c,f,true)}}else if(f!==this.value()){d=this._trigger("slide",d,{handle:this.handles[c],value:f});
d!==false&&this.value(f)}},_stop:function(d,c){var f={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){f.value=this.values(c);f.values=this.values()}this._trigger("stop",d,f)},_change:function(d,c){if(!this._keySliding&&!this._mouseSliding){var f={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){f.value=this.values(c);f.values=this.values()}this._trigger("change",d,f)}},value:function(d){if(arguments.length){this.options.value=
this._trimAlignValue(d);this._refreshValue();this._change(null,0)}else return this._value()},values:function(d,c){var f,g,e;if(arguments.length>1){this.options.values[d]=this._trimAlignValue(c);this._refreshValue();this._change(null,d)}else if(arguments.length)if(a.isArray(arguments[0])){f=this.options.values;g=arguments[0];for(e=0;e<f.length;e+=1){f[e]=this._trimAlignValue(g[e]);this._change(null,e)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(d):
this.value();else return this._values()},_setOption:function(d,c){var f,g=0;if(a.isArray(this.options.values))g=this.options.values.length;a.Widget.prototype._setOption.apply(this,arguments);switch(d){case "disabled":if(c){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(f=0;f<g;f+=1)this._change(null,f);this._animateOff=false;break}},_value:function(){var d=this.options.value;return d=this._trimAlignValue(d)},_values:function(d){var c,f;if(arguments.length){c=this.options.values[d];
return c=this._trimAlignValue(c)}else{c=this.options.values.slice();for(f=0;f<c.length;f+=1)c[f]=this._trimAlignValue(c[f]);return c}},_trimAlignValue:function(d){if(d<=this._valueMin())return this._valueMin();if(d>=this._valueMax())return this._valueMax();var c=this.options.step>0?this.options.step:1,f=(d-this._valueMin())%c;alignValue=d-f;if(Math.abs(f)*2>=c)alignValue+=f>0?c:-c;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var d=this.options.range,c=this.options,f=this,g=!this._animateOff?c.animate:false,e,i={},b,h,j,l;if(this.options.values&&this.options.values.length)this.handles.each(function(o){e=(f.values(o)-f._valueMin())/(f._valueMax()-f._valueMin())*100;i[f.orientation==="horizontal"?"left":"bottom"]=e+"%";a(this).stop(1,1)[g?"animate":"css"](i,c.animate);if(f.options.range===true)if(f.orientation==="horizontal"){if(o===0)f.range.stop(1,1)[g?"animate":"css"]({left:e+"%"},c.animate);
if(o===1)f.range[g?"animate":"css"]({width:e-b+"%"},{queue:false,duration:c.animate})}else{if(o===0)f.range.stop(1,1)[g?"animate":"css"]({bottom:e+"%"},c.animate);if(o===1)f.range[g?"animate":"css"]({height:e-b+"%"},{queue:false,duration:c.animate})}b=e});else{h=this.value();j=this._valueMin();l=this._valueMax();e=l!==j?(h-j)/(l-j)*100:0;i[f.orientation==="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[g?"animate":"css"](i,c.animate);if(d==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[g?"animate":"css"]({width:e+"%"},c.animate);if(d==="max"&&this.orientation==="horizontal")this.range[g?"animate":"css"]({width:100-e+"%"},{queue:false,duration:c.animate});if(d==="min"&&this.orientation==="vertical")this.range.stop(1,1)[g?"animate":"css"]({height:e+"%"},c.animate);if(d==="max"&&this.orientation==="vertical")this.range[g?"animate":"css"]({height:100-e+"%"},{queue:false,duration:c.animate})}}});a.extend(a.ui.slider,{version:"1.8.13"})})(jQuery);
(function(a,d){function c(){return++g}function f(){return++e}var g=0,e=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(i,b){if(i=="selected")this.options.collapsible&&
b==this.options.selected||this.select(b);else{this.options[i]=b;this._tabify()}},_tabId:function(i){return i.title&&i.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+c()},_sanitizeSelector:function(i){return i.replace(/:/g,"\\:")},_cookie:function(){var i=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return a.cookie.apply(null,[i].concat(a.makeArray(arguments)))},_ui:function(i,b){return{tab:i,panel:b,index:this.anchors.index(i)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var i=
a(this);i.html(i.data("label.tabs")).removeData("label.tabs")})},_tabify:function(i){function b(r,u){r.css("display","");!a.support.opacity&&u.opacity&&r[0].style.removeAttribute("filter")}var h=this,j=this.options,l=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=a(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return a("a",this)[0]});this.panels=a([]);this.anchors.each(function(r,u){var v=a(u).attr("href"),w=v.split("#")[0],x;if(w&&(w===location.toString().split("#")[0]||
(x=a("base")[0])&&w===x.href)){v=u.hash;u.href=v}if(l.test(v))h.panels=h.panels.add(h.element.find(h._sanitizeSelector(v)));else if(v&&v!=="#"){a.data(u,"href.tabs",v);a.data(u,"load.tabs",v.replace(/#.*$/,""));v=h._tabId(u);u.href="#"+v;u=h.element.find("#"+v);if(!u.length){u=a(j.panelTemplate).attr("id",v).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(h.panels[r-1]||h.list);u.data("destroy.tabs",true)}h.panels=h.panels.add(u)}else j.disabled.push(r)});if(i){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(j.selected===d){location.hash&&this.anchors.each(function(r,u){if(u.hash==location.hash){j.selected=r;return false}});if(typeof j.selected!=="number"&&j.cookie)j.selected=parseInt(h._cookie(),10);if(typeof j.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)j.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));j.selected=j.selected||(this.lis.length?0:-1)}else if(j.selected===null)j.selected=-1;j.selected=j.selected>=0&&this.anchors[j.selected]||j.selected<0?j.selected:0;j.disabled=a.unique(j.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(r){return h.lis.index(r)}))).sort();a.inArray(j.selected,j.disabled)!=-1&&j.disabled.splice(a.inArray(j.selected,j.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(j.selected>=0&&this.anchors.length){h.element.find(h._sanitizeSelector(h.anchors[j.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active");h.element.queue("tabs",function(){h._trigger("show",null,h._ui(h.anchors[j.selected],h.element.find(h._sanitizeSelector(h.anchors[j.selected].hash))[0]))});this.load(j.selected)}a(window).bind("unload",function(){h.lis.add(h.anchors).unbind(".tabs");h.lis=h.anchors=h.panels=null})}else j.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[j.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");j.cookie&&this._cookie(j.selected,j.cookie);i=0;for(var o;o=this.lis[i];i++)a(o)[a.inArray(i,j.disabled)!=-1&&!a(o).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");j.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(j.event!=="mouseover"){var n=function(r,u){u.is(":not(.ui-state-disabled)")&&u.addClass("ui-state-"+r)},k=function(r,u){u.removeClass("ui-state-"+
r)};this.lis.bind("mouseover.tabs",function(){n("hover",a(this))});this.lis.bind("mouseout.tabs",function(){k("hover",a(this))});this.anchors.bind("focus.tabs",function(){n("focus",a(this).closest("li"))});this.anchors.bind("blur.tabs",function(){k("focus",a(this).closest("li"))})}var m,p;if(j.fx)if(a.isArray(j.fx)){m=j.fx[0];p=j.fx[1]}else m=p=j.fx;var q=p?function(r,u){a(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.hide().removeClass("ui-tabs-hide").animate(p,p.duration||"normal",
function(){b(u,p);h._trigger("show",null,h._ui(r,u[0]))})}:function(r,u){a(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.removeClass("ui-tabs-hide");h._trigger("show",null,h._ui(r,u[0]))},s=m?function(r,u){u.animate(m,m.duration||"normal",function(){h.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");b(u,m);h.element.dequeue("tabs")})}:function(r,u){h.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");h.element.dequeue("tabs")};
this.anchors.bind(j.event+".tabs",function(){var r=this,u=a(r).closest("li"),v=h.panels.filter(":not(.ui-tabs-hide)"),w=h.element.find(h._sanitizeSelector(r.hash));if(u.hasClass("ui-tabs-selected")&&!j.collapsible||u.hasClass("ui-state-disabled")||u.hasClass("ui-state-processing")||h.panels.filter(":animated").length||h._trigger("select",null,h._ui(this,w[0]))===false){this.blur();return false}j.selected=h.anchors.index(this);h.abort();if(j.collapsible)if(u.hasClass("ui-tabs-selected")){j.selected=
-1;j.cookie&&h._cookie(j.selected,j.cookie);h.element.queue("tabs",function(){s(r,v)}).dequeue("tabs");this.blur();return false}else if(!v.length){j.cookie&&h._cookie(j.selected,j.cookie);h.element.queue("tabs",function(){q(r,w)});h.load(h.anchors.index(this));this.blur();return false}j.cookie&&h._cookie(j.selected,j.cookie);if(w.length){v.length&&h.element.queue("tabs",function(){s(r,v)});h.element.queue("tabs",function(){q(r,w)});h.load(h.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
a.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(i){if(typeof i=="string")i=this.anchors.index(this.anchors.filter("[href$="+i+"]"));return i},destroy:function(){var i=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var b=
a.data(this,"href.tabs");if(b)this.href=b;var h=a(this).unbind(".tabs");a.each(["href","load","cache"],function(j,l){h.removeData(l+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});i.cookie&&this._cookie(null,i.cookie);return this},add:function(i,
b,h){if(h===d)h=this.anchors.length;var j=this,l=this.options;b=a(l.tabTemplate.replace(/#\{href\}/g,i).replace(/#\{label\}/g,b));i=!i.indexOf("#")?i.replace("#",""):this._tabId(a("a",b)[0]);b.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var o=j.element.find("#"+i);o.length||(o=a(l.panelTemplate).attr("id",i).data("destroy.tabs",true));o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(h>=this.lis.length){b.appendTo(this.list);o.appendTo(this.list[0].parentNode)}else{b.insertBefore(this.lis[h]);
o.insertBefore(this.panels[h])}l.disabled=a.map(l.disabled,function(n){return n>=h?++n:n});this._tabify();if(this.anchors.length==1){l.selected=0;b.addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){j._trigger("show",null,j._ui(j.anchors[0],j.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[h],this.panels[h]));return this},remove:function(i){i=this._getIndex(i);var b=this.options,h=this.lis.eq(i).remove(),j=this.panels.eq(i).remove();
if(h.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(i+(i+1<this.anchors.length?1:-1));b.disabled=a.map(a.grep(b.disabled,function(l){return l!=i}),function(l){return l>=i?--l:l});this._tabify();this._trigger("remove",null,this._ui(h.find("a")[0],j[0]));return this},enable:function(i){i=this._getIndex(i);var b=this.options;if(a.inArray(i,b.disabled)!=-1){this.lis.eq(i).removeClass("ui-state-disabled");b.disabled=a.grep(b.disabled,function(h){return h!=i});this._trigger("enable",null,
this._ui(this.anchors[i],this.panels[i]));return this}},disable:function(i){i=this._getIndex(i);var b=this.options;if(i!=b.selected){this.lis.eq(i).addClass("ui-state-disabled");b.disabled.push(i);b.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[i],this.panels[i]))}return this},select:function(i){i=this._getIndex(i);if(i==-1)if(this.options.collapsible&&this.options.selected!=-1)i=this.options.selected;else return this;this.anchors.eq(i).trigger(this.options.event+".tabs");return this},
load:function(i){i=this._getIndex(i);var b=this,h=this.options,j=this.anchors.eq(i)[0],l=a.data(j,"load.tabs");this.abort();if(!l||this.element.queue("tabs").length!==0&&a.data(j,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(i).addClass("ui-state-processing");if(h.spinner){var o=a("span",j);o.data("label.tabs",o.html()).html(h.spinner)}this.xhr=a.ajax(a.extend({},h.ajaxOptions,{url:l,success:function(n,k){b.element.find(b._sanitizeSelector(j.hash)).html(n);b._cleanup();h.cache&&a.data(j,
"cache.tabs",true);b._trigger("load",null,b._ui(b.anchors[i],b.panels[i]));try{h.ajaxOptions.success(n,k)}catch(m){}},error:function(n,k){b._cleanup();b._trigger("load",null,b._ui(b.anchors[i],b.panels[i]));try{h.ajaxOptions.error(n,k,i,j)}catch(m){}}}));b.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(i,b){this.anchors.eq(i).removeData("cache.tabs").data("load.tabs",b);return this},length:function(){return this.anchors.length}});a.extend(a.ui.tabs,{version:"1.8.13"});a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(i,b){var h=this,j=this.options,l=h._rotate||(h._rotate=function(o){clearTimeout(h.rotation);h.rotation=setTimeout(function(){var n=j.selected;h.select(++n<h.anchors.length?n:0)},i);o&&o.stopPropagation()});b=h._unrotate||(h._unrotate=!b?function(o){o.clientX&&
h.rotate(null)}:function(){t=j.selected;l()});if(i){this.element.bind("tabsshow",l);this.anchors.bind(j.event+".tabs",b);l()}else{clearTimeout(h.rotation);this.element.unbind("tabsshow",l);this.anchors.unbind(j.event+".tabs",b);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
/**
 * GameGolem v31.6.1150
 * http://rycochet.com/
 * http://code.google.com/p/game-golem/
 *
 * Copyright 2010-2011, Robin Cloutman
 * Licensed under the LGPL Version 3 license.
 * http://www.gnu.org/licenses/lgpl.html
 *
 * Includes jQuery JavaScript Library & jQuery UI
 * http://jquery.com/
 */
(function($){var jQuery=$;/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
// Global variables only
// Shouldn't touch
var isRelease = false;
var script_started = Date.now();
// Version of the script
var version = "31.6";
var revision = 1150;
// Automatically filled from Worker:Main
var userID, imagepath, APP, APPID, APPID_, APPNAME, PREFIX, isFacebook; // All set from Worker:Main
// Detect browser - this is rough detection, mainly for updates - may use jQuery detection at a later point
var browser = 'unknown';
if (navigator.userAgent.indexOf('Chrome') >= 0) {
	browser = 'chrome';
} else if (navigator.userAgent.indexOf('Safari') >= 0) {
	browser = 'safari';
} else if (navigator.userAgent.indexOf('Opera') >= 0) {
	browser = 'opera';
} else if (navigator.userAgent.indexOf('Mozilla') >= 0) {
	browser = 'firefox';
	if (typeof GM_log === 'function') {
		browser = 'greasemonkey'; // Treating separately as Firefox will get a "real" extension at some point.
	}
}
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	browser, window, localStorage, console, chrome
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	version, revision, isRelease
	APP, APPID, PREFIX, log:true, debug, userID, imagepath
	length:true
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH
	Workers, makeImage:true
*/
// Utility functions

// Functions to check type of variable - here for javascript optimisations and readability, makes a miniscule difference using them

/**
 * Check if a passed object is an Array (not an Object)
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isArray = function(obj) {
	return obj && obj.constructor === Array;
};

/**
 * Check if a passed object is an Object (not an Array)
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isObject = function(obj) {
	return obj && obj.constructor === Object;
};

/**
 * Check if a passed object is an Boolean
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isBoolean = function(obj) {
	return obj === true || obj === false;
};

/**
 * Check if a passed object is a Function
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isFunction = function(obj) {
	return obj && obj.constructor === Function;
};

/**
 * Check if a passed object is a RegExp
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isRegExp = function(obj) {
	return obj && obj.constructor === RegExp;
};

/**
 * Check if a passed object is a Worker
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isWorker = function(obj) {
	return obj && obj.constructor === Worker;
};

/**
 * Check if a passed object is a Script
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isScript = function(obj) {
	return obj && obj.constructor === Script;
};

/**
 * Check if a passed object is an Error
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isError = function(obj) {
	return !!(typeof obj === 'object' && obj.name && obj.message);
};

/**
 * Check if a passed object is a Number
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isNumber = function(obj) {
	return typeof obj === 'number';
};

/**
 * Check if a passed object is a String
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isString = function(obj) {
	return typeof obj === 'string';
};

/**
 * Check if a passed object is Undefined
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isUndefined = function(obj) {
	return typeof obj === 'undefined';
};

/**
 * Check if a passed object is Null
 * @param {*} obj The object we wish to check
 * @return {boolean} If it is or not
 */
var isNull = function(obj) {
	return obj === null;
};

/**
 * Log a message, can have various prefix parts
 * @param {(number|string)} level The level to use (or the txt if only one arg)
 * @param {string=} txt The message to log
 * NOTE: Will be replaced by Debug Worker if present!
 */
var LOG_INFO = 0;
var LOG_LOG = 1
var LOG_WARN = 2;
var LOG_ERROR = 3;
var LOG_DEBUG = 4;
var LOG_USER1 = 5;
var LOG_USER2 = 6;
var LOG_USER3 = 7;
var LOG_USER4 = 8;
var LOG_USER5 = 9;
var log = function(level, txt /*, obj, array etc*/){
	var level, args = Array.prototype.slice.call(arguments), prefix = [],
		date = [true, true, true, true, true, true, true, true, true, true],
		rev = [false, false, true, true, true, true, true, true, true, true],
		worker = [false, true, true, true, true, true, true, true, true, true];
	if (isNumber(args[0])) {
		level = Math.range(0, args.shift(), 9);
	} else if (isError(args[0])) {
		args.shift();
		level = LOG_ERROR;
	} else {
		level = LOG_LOG;
	}
	if (rev[level]) {
		prefix.push('[' + (isRelease ? 'v'+version : 'r'+revision) + ']');
	}
	if (date[level]) {
		prefix.push('[' + (new Date()).toLocaleTimeString() + ']');
	}
	if (worker[level]) {
		prefix.push(Worker.stack.length ? Worker.stack[0] : '');
	}
	args[0] = prefix.join(' ') + (prefix.length && args[0] ? ': ' : '') + (args[0] || '');
	try {
		console.log.apply(console.firebug ? window : console, args);
	} catch(e) { // FF4 fix - doesn't like .apply
		console.log(args);
	}
};

// Prototypes to ease functionality

String.prototype.trim = function(inside) {
	if (inside) {
		this.replace(/^\s+$/gm, ' ')
	}
	return this.replace(/^\s+|\s+$/gm, '');
};

String.prototype.filepart = function() {
	var x = this.lastIndexOf('/');
	if (x >= 0) {
		return this.substr(x+1);
	}
	return this;
};

String.prototype.pathpart = function() {
	var x = this.lastIndexOf('/');
	if (x >= 0) {
		return this.substr(0, x+1);
	}
	return this;
};

String.prototype.regex = function(r) {
	var a = this.match(r), i, rx;
	if (a) {
		if (r.global) {
			if (/(^|[^\\]|[^\\](\\\\)*)\([^?]/.test(r.source)) { // Try to match '(blah' but not '\(blah' or '(?:blah' - ignore invalid regexp
				rx = new RegExp(r.source, (r.ignoreCase ? 'i' : '') + (r.multiline ? 'm' : ''));
			}
		} else {
			a.shift();
		}
		i = a.length;
		while (i--) {
			if (a[i]) {
				if (rx) {
					a[i] = arguments.callee.call(a[i], rx);
				} else {
					if (a[i].search(/^[-+]?\d*\.?\d+(?:e[-+]?\d+)?$/i) >= 0) {
						a[i] = parseFloat(a[i]);
					}
				}
			}
		}
		if (!rx && a.length === 1) {
			return a[0];
		}
	}
	return a;
};

String.prototype.toNumber = function() {
	return parseFloat(this);
};

String.prototype.parseTimer = function() {
	var a = this.split(':'), b = 0, i;
	for (i=0; i<a.length; i++) {
		b = b * 60 + parseInt(a[i],10);
	}
	if (isNaN(b)) {
		b = 9999;
	}
	return b;
};

String.prototype.ucfirst = function() {
	return this.charAt(0).toUpperCase() + this.substr(1);
};

String.prototype.ucwords = function() {
	return this.replace(/^(.)|\s(.)/g, function($1){
		return $1.toUpperCase();
	});
};

String.prototype.html_escape = function() {
	return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

String.prototype.regexp_escape = function() {
	return this.replace(/([\\\^\$*+\[\]?{}.=!:(|)])/g, '\\$&');
//	return this.replace(/\\/g, '\\\\').replace(/\^/g, '\\^').replace(/\$/g, '\\$').replace(/\./g, '\\.').replace(/\+/g, '\\+').replace(/\*/g, '\\*').replace(/\?/g, '\\?').replace(/\{/g, '\\{').replace(/\}/g, '\\}').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\[/g, '\\[').replace(/\]/g, '\\]').replace(/\|/g, '\\|');
};

Number.prototype.round = function(dec) {
	return Math.round(this*Math.pow(10,(dec||0))) / Math.pow(10,(dec||0));
};

Number.prototype.SI = function(prec) {
	var a = Math.abs(this), u,
		p = Math.range(1, isNumber(prec) ? prec.round(0) : 3, 16);

	if (a >= 1e18) {
		return this.toExponential(Math.max(0, p - 1));
	}

	else if (a >= 1e17) {
		return (this / 1e15).round(Math.max(0, p - 3)) + 'q';
	} else if (a >= 1e16) {
		return (this / 1e15).round(Math.max(0, p - 2)) + 'q';
	} else if (a >= 1e15) {
		return (this / 1e15).round(Math.max(0, p - 1)) + 'q';
	}

	else if (a >= 1e14) {
		return (this / 1e12).round(Math.max(0, p - 3)) + 't';
	} else if (a >= 1e13) {
		return (this / 1e12).round(Math.max(0, p - 2)) + 't';
	} else if (a >= 1e12) {
		return (this / 1e12).round(Math.max(0, p - 1)) + 't';
	}

	else if (a >= 1e11) {
		return (this / 1e9).round(Math.max(0, p - 3)) + 'b';
	} else if (a >= 1e10) {
		return (this / 1e9).round(Math.max(0, p - 2)) + 'b';
	} else if (a >= 1e9) {
		return (this / 1e9).round(Math.max(0, p - 1)) + 'b';
	}

	else if (a >= 1e8) {
		return (this / 1e6).round(Math.max(0, p - 3)) + 'm';
	} else if (a >= 1e7) {
		return (this / 1e6).round(Math.max(0, p - 2)) + 'm';
	} else if (a >= 1e6) {
		return (this / 1e6).round(Math.max(0, p - 1)) + 'm';
	}

	else if (a >= 1e5) {
		return (this / 1e3).round(Math.max(0, p - 3)) + 'k';
	} else if (a >= 1e4) {
		return (this / 1e3).round(Math.max(0, p - 2)) + 'k';
	} else if (a >= 1e3) {
		return (this / 1e3).round(Math.max(0, p - 1)) + 'k';
	}

	else if (a >= 1e2) {
		return this.round(Math.max(0, p - 3));
	} else if (a >= 1e1) {
		return this.round(Math.max(0, p - 2));
	} else if (a >= 1) {
		return this.round(Math.max(0, p - 1));
	} else if (a === 0) {
		return this;
	}

	return this.toExponential(Math.max(0, p - 1));
};

Number.prototype.addCommas = function(digits) { // Add commas to a number, optionally converting to a Fixed point number
	var n = isNumber(digits) ? this.toFixed(digits) : this.toString(), rx = /^(.*\s)?(\d+)(\d{3}\b)/;
	return n === (n = n.replace(rx, '$1$2,$3')) ? n : arguments.callee.call(n);
};

Math.range = function(min, num, max) {
	return Math.max(min, Math.min(num, max));
};

Array.prototype.unique = function() { // Returns an array with only unique *values*, does not alter original array
	var o = {}, i, l = this.length, r = [];
	for (i = 0; i < l; i++) {
		o[this[i]] = this[i];
	}
	for (i in o) {
		r.push(o[i]);
	}
	return r;
};

Array.prototype.remove = function(value) { // Removes matching elements from an array, alters original
	var i = 0;
	while ((i = this.indexOf(value, i)) >= 0) {
		this.splice(i, 1);
	}
	return this;
};

Array.prototype.find = function(value) { // Returns if a value is found in an array
	return this.indexOf(value) >= 0;
};

Array.prototype.higher = function(value) { // return the lowest entry greater or equal to value, return -1 on failure
	var i = this.length, best = Number.POSITIVE_INFINITY;
	while (i--) {
		if (isNumber(this[i]) && this[i] >= value && this[i] < best) {
			best = this[i];
		}
	}
	return best === Number.POSITIVE_INFINITY ? -1 : best;
};

Array.prototype.lower = function(value) { // return the highest entry lower or equal to value, return -1 on failure
	var i = this.length, best = -1;
	while (i--) {
		if (isNumber(this[i]) && this[i] <= value && this[i] > best) {
			best = this[i];
		}
	}
	return best;
};

Array.prototype.trim = function() { // Remove empty entries
	var i = this.length, arr = [];
	while (i--) {
		if (this[i]) {
			arr.unshift(this[i]);
		}
	}
	return arr;
}

// Used for events in update(event, events)
var isEvent = function(event, worker, type, id) {
	if ((!worker || Worker.find(event.worker) === Worker.find(worker)) && (!type || event.type === type) && (!id || event.id === id)) {
		return true;
	}
	return false;
};
 
/**
 * Used for events in update(event, events)
 * This will leave the event on the events list for another search
 * @param {?string=} worker The worker name we're looking for
 * @param {?string=} type The event type we're looking for
 * @param {?string=} id The event id we're looking for
 * @return {?Object}
 */
Array.prototype.findEvent = function(worker, type, id) {
	if (worker || type || id) {
		this._worker = worker;
		this._type = type;
		this._id = id;
		this._index = -1;
	}
	var length = this.length;
	for (this._index++; this._index<length; this._index++) {
		if (isEvent(this[this._index], this._worker, this._type, this._id)) {
			return this[this._index];
		}
	}
	return null;
};

/**
 * Used for events in update(event, events)
 * This will remove the event from the events list
 * @param {?string=} worker The worker name we're looking for
 * @param {?string=} type The event type we're looking for
 * @param {?string=} id The event id we're looking for
 * @return {?Object}
 */
Array.prototype.getEvent = function(worker, type, id) {
	var event = this.findEvent(worker, type, id);
	if (this._index >= 0 && this._index < this.length) {
		this.splice(this._index--, 1);
	}
	return event;
};

//Array.prototype.inArray = function(value) {for (var i in this) if (this[i] === value) return true;return false;};

var makeTimer = function(sec) {
	var h = Math.floor(sec / 3600), m = Math.floor(sec / 60) % 60, s = Math.floor(sec % 60);
	return (h ? h+':'+(m>9 ? m : '0'+m) : m) + ':' + (s>9 ? s : '0'+s);
};

var Divisor = function(number) { // Find a "nice" value that goes into number up to 20 times
	var num = number, step = 1;
	if (num < 20) {
		return 1;
	}
	while (num > 100) {
		num /= 10;
		step *= 10;
	}
	num -= num % 5;
	if ((number / step) > 40) {
		step *= 5;
	} else if ((number / step) > 20) {
		step *= 2.5;
	}
	return step;
};

var length = function(obj) { // Find the number of entries in an object (also works on arrays)
	if (isArray(obj)) {
		return obj.length;
	} else if (isObject(obj)) {
		var l = 0, i;
		for(i in obj) {
			if (obj.hasOwnProperty(i)) {
				l++;
			}
		}
		return l;
	}
	return 0;
};

var empty = function(x) { // Tests whether an object is empty (also useable for other types)
	var i;
	if (x === undefined || !x) {
		return true;
	} else if (isObject(x)) {
		for (i in x) {
			if (x.hasOwnProperty(i)) {
				return false;
			}
		}
		return true;
	} else if (isArray(x)) {
		return x.length === 0;
	}
	return false;
};

var sum = function(a) { // Adds the values of all array entries together
	var i, t = 0, args = Array.prototype.slice.call(arguments);
	while ((a = args.shift())) {
		if (isArray(a)) {
			i = a.length;
			while(i--) {
				t += arguments.callee(a[i]);
			}
		} else if (isObject(a)) {
			for(i in a) {
				t += arguments.callee(a[i]);
			}
		} else if (isNumber(a)) {
			return a;
		} else if (isString(a) && a.search(/^[-+]?\d*\.?\d+(?:e[-+]?\d+)?$/i) >= 0) {
			return parseFloat(a);
		}
	}
	return t;
};

// Maximum numeric value in a tree of objects/arrays
var nmax = function(a) {
	var i, v = Number.NEGATIVE_INFINITY;
	if (arguments.length !== 1) {
		i = arguments.length;
		while (i--) {
			v = Math.max(v, arguments.callee(arguments[i]));
		}
	} else if (isArray(a)) {
		i = a.length;
		while (i--) {
			v = Math.max(v, arguments.callee(a[i]));
		}
	} else if (isObject(a)) {
		for(i in a) {
			v = Math.max(v, arguments.callee(a[i]));
		}
	} else if (isNumber(a)) {
		v = a;
	} else if (isString(a) && a.search(/^[-+]?\d*\.?\d+(?:e[-+]?\d+)?$/i) >= 0) {
		v = parseFloat(a);
	}
	return v;
};

// Minimum numeric value in a tree of objects/arrays
var nmin = function(a) {
	var i, v = Number.POSITIVE_INFINITY;
	if (arguments.length !== 1) {
		i = arguments.length;
		while (i--) {
			v = Math.min(v, arguments.callee(arguments[i]));
		}
	} else if (isArray(a)) {
		i = a.length;
		while (i--) {
			v = Math.min(v, arguments.callee(a[i]));
		}
	} else if (isObject(a)) {
		for(i in a) {
			v = Math.min(v, arguments.callee(a[i]));
		}
	} else if (isNumber(a)) {
		v = a;
	} else if (isString(a) && a.search(/^[-+]?\d*\.?\d+(?:e[-+]?\d+)?$/i) >= 0) {
		v = parseFloat(a);
	}
	return v;
};

/**
 * Compare two unknown variables, and return if they are functionally the same (ignoring order of object keys etc)
 * @param {*} left The left-hand variable
 * @param {*} right The right-hand variable
 * @return Boolean
 */
var compare = function(left, right) {
	var i;
	if (typeof left !== typeof right || isNull(left) !== isNull(right) || isObject(left) !== isObject(right)) {
		return false;
	}
	if (isObject(left)) {
		if (length(left) !== length(right)) {
			return false;
		}
		for (i in left) {
			if (left.hasOwnProperty(i)) {
				if (!right.hasOwnProperty(i) || !compare(left[i], right[i])) {
					return false;
				}
			}
		}
		for (i in right) {
			if (right.hasOwnProperty(i) && !left.hasOwnProperty(i)) {
				return false;
			}
		}
	} else if (isArray(left)) {
		i = left.length;
		if (i !== right.length) {
			return false;
		}
		while (i--) {
			if (!compare(left[i], right[i])) {
				return false;
			}
		}
	} else {
		return left === right;
	}
	return true;
};

var findInObject = function(obj, value, key) {
	var i;
	if (isObject(obj)) {
		if (isUndefined(key)) {
			for (i in obj) {
				if (obj[i] === value) {
					return i;
				}
			}
		} else {
			for (i in obj) {
				if (obj[i][key] === value) {
					return i;
				}
			}
		}
	}
	return null;
};

var objectIndex = function(obj, index) {
	var i;
	if (isObject(obj)) {
		for (i in obj) {
			if (index-- <= 0) {
				return i;
			}
		}
	}
	return null;
};

var getAttDefList = [];
var getAttDef = function(list, unitfunc, x, count, type, suffix) { // Find total att(ack) or def(ense) value from a list of objects (with .att and .def)
	var units = [], limit = 1e99, attack = 0, defend = 0, i, p, own, x2;
	if (type !== 'monster') {
		x2 = 'tot_' + x;
	}
	if (unitfunc) {
		for (i in list) {
			unitfunc(units, i, list);
		}
	} else {
		units = getAttDefList;
	}
	units.sort(function(a,b) {
		return (list[b][x2] || 0) - (list[a][x2] || 0)
			|| (list[a].upkeep || 0) - (list[b].upkeep || 0)
			|| (list[a].cost || 0) - (list[b].cost || 0);
	});
	if (!suffix) { suffix = ''; }
	// hack for limits of 3 on war equipment
	if (count < 0) {
		limit = 3;
		count = Math.abs(count);
	}
	for (i=0; i<units.length; i++) {
		p = list[units[i]];
		own = isNumber(p.own) ? p.own : 0;
		if (type) {
			Resources.set(['data', '_'+units[i], type+suffix+'_'+x], Math.min(count, limit) || undefined);
			if (Math.min(count, own) > 0) {
				//log(LOG_WARN, 'Utility','Using: '+Math.min(count, own)+' x '+units[i]+' = '+JSON.stringify(p));
				if (!p['use'+suffix]) {
					p['use'+suffix] = {};
				}
				p['use'+suffix][type+suffix+'_'+x] = Math.min(count, own, limit);
			} else if (length(p['use'+suffix])) {
				delete p['use'+suffix][type+suffix+'_'+x];
				if (!length(p['use'+suffix])) {
					delete p['use'+suffix];
				}
			}
		}
		//if (count <= 0) {break;}
		own = Math.min(count, own, limit);
		attack += own * ((p.att || 0) + ((p.stats && p.stats.att) || 0));
		defend += own * ((p.def || 0) + ((p.stats && p.stats.def) || 0));
		count -= own;
	}
	getAttDefList = units;
	return (x==='att'?attack:(0.7*attack)) + (x==='def'?defend:(0.7*defend));
};

var tr = function(list, html, attr) {
	list.push('<tr' + (attr ? ' ' + attr : '') + '>' + (html || '') + '</tr>');
};

var th = function(list, html, attr) {
	list.push('<th' + (attr ? ' ' + attr : '') + '>' + (html || '') + '</th>');
};

var td = function(list, html, attr) {
	list.push('<td' + (attr ? ' ' + attr : '') + '>' + (html || '') + '</td>');
};

var plural = function(i) {
	return (i === 1 ? '' : 's');
};

var makeTime = function(time, format) {
	var d = new Date(time);
	return d.format(format !== undefined && format ? format : 'l g:i a' );
};

// Simulates PHP's date function
Date.prototype.format = function(format) {
	var i, curChar, returnStr = '', replace = Date.replaceChars;
	for (i = 0; i < format.length; i++) {
		curChar = format.charAt(i);
		if (replace[curChar]) {
			returnStr += replace[curChar].call(this);
		} else {
			returnStr += curChar;
		}
	}
	return returnStr;
};

Date.replaceChars = {
	shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	longMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	longDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	// Day
	/** @this {Date} */	d: function() { return (this.getDate() < 10 ? '0' : '') + this.getDate(); },
	/** @this {Date} */	D: function() { return Date.replaceChars.shortDays[this.getDay()]; },
	/** @this {Date} */	j: function() { return this.getDate(); },
	/** @this {Date} */	l: function() { return Date.replaceChars.longDays[this.getDay()]; },
	/** @this {Date} */	N: function() { return this.getDay() + 1; },
	/** @this {Date} */	S: function() { return (this.getDate() % 10 === 1 && this.getDate() !== 11 ? 'st' : (this.getDate() % 10 === 2 && this.getDate() !== 12 ? 'nd' : (this.getDate() % 10 === 3 && this.getDate() !== 13 ? 'rd' : 'th'))); },
	/** @this {Date} */	w: function() { return this.getDay(); },
	/** @this {Date} */	z: function() { return "Not Yet Supported"; },
	/** @this {Date} */	R: function() {
		var i = (new Date() - this) / 1000;
		return (i < (24 * 60 * 60) ? 'Today' : i < (2 * 24 * 60 * 60) ? 'Yesterday' : i < (7 * 24 * 60 * 60) ? Math.floor(i / (24 * 60 * 60)) + ' Days Ago' : i < (31 * 24 * 60 * 60) ? Math.floor(i / (7 * 24 * 60 * 60)) + ' Weeks Ago' : i < (365 * 24 * 60 * 60) ? Math.floor(i / (31 * 24 * 60 * 60)) + ' Months Ago' : Math.floor(i / (365 * 24 * 60 * 60)) + ' Years Ago');
	},
	// Week
	/** @this {Date} */	W: function() { return "Not Yet Supported"; },
	// Month
	/** @this {Date} */	F: function() { return Date.replaceChars.longMonths[this.getMonth()]; },
	/** @this {Date} */	m: function() { return (this.getMonth() < 9 ? '0' : '') + (this.getMonth() + 1); },
	/** @this {Date} */	M: function() { return Date.replaceChars.shortMonths[this.getMonth()]; },
	/** @this {Date} */	n: function() { return this.getMonth() + 1; },
	/** @this {Date} */	t: function() { return "Not Yet Supported"; },
	// Year
	/** @this {Date} */	L: function() { return (((this.getFullYear()%4===0)&&(this.getFullYear()%100!==0)) || (this.getFullYear()%400===0)) ? '1' : '0'; },
	/** @this {Date} */	o: function() { return "Not Supported"; },
	/** @this {Date} */	Y: function() { return this.getFullYear(); },
	/** @this {Date} */	y: function() { return ('' + this.getFullYear()).substr(2); },
	// Time
	/** @this {Date} */	a: function() { return this.getHours() < 12 ? 'am' : 'pm'; },
	/** @this {Date} */	A: function() { return this.getHours() < 12 ? 'AM' : 'PM'; },
	/** @this {Date} */	B: function() { return "Not Yet Supported"; },
	/** @this {Date} */	g: function() { return this.getHours() % 12 || 12; },
	/** @this {Date} */	G: function() { return this.getHours(); },
	/** @this {Date} */	h: function() { return ((this.getHours() % 12 || 12) < 10 ? '0' : '') + (this.getHours() % 12 || 12); },
	/** @this {Date} */	H: function() { return (this.getHours() < 10 ? '0' : '') + this.getHours(); },
	/** @this {Date} */	i: function() { return (this.getMinutes() < 10 ? '0' : '') + this.getMinutes(); },
	/** @this {Date} */	s: function() { return (this.getSeconds() < 10 ? '0' : '') + this.getSeconds(); },
	/** @this {Date} */	u: function() { return (this.getMilliseconds() < 100 ? '0' : '') + (this.getMilliseconds() < 10 ? '0' : '') + this.getMilliseconds(); },
	// Timezone
	/** @this {Date} */	e: function() { return "Not Yet Supported"; },
	/** @this {Date} */	I: function() { return "Not Supported"; },
	/** @this {Date} */	O: function() { return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + '00'; },
	/** @this {Date} */	P: function() { return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + ':' + (Math.abs(this.getTimezoneOffset() % 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() % 60)); },
	/** @this {Date} */	T: function() { var m = this.getMonth(), result; this.setMonth(0); result = this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, '$1'); this.setMonth(m); return result;},
	/** @this {Date} */	Z: function() { return -this.getTimezoneOffset() * 60; },
	// Full Date/Time
	/** @this {Date} */	c: function() { return this.format("Y-m-d") + "T" + this.format("H:i:sP"); },
	/** @this {Date} */	r: function() { return this.toString(); },
	/** @this {Date} */	U: function() { return this.getTime() / 1000; }
};

var calc_rolling_weighted_average = function(object, y_label, y_val, x_label, x_val, limit) {
	var name, label_list, y_label_list, x_label_list;
	name = y_label + '_per_' + x_label;
	object.rwa = object.rwa || {};
	label_list = object.rwa[name] = object.rwa[name] || {};
	y_label_list = label_list[y_label] = label_list[y_label] || [];
	x_label_list = label_list[x_label] = label_list[x_label] || [];
	y_label_list.unshift(y_val);
	x_label_list.unshift(x_val);
	while (y_label_list.length > (limit || 100)) {
		y_label_list.pop();
	}
	while (x_label_list.length > (limit || 100)) {
		x_label_list.pop();
	}
	object['avg_' + name] = sum(y_label_list) / sum(x_label_list);
};

var bestObjValue = function(obj, callback, filter) {// pass an object and a function to create a value from obj[key] - return the best key
	var i, best = null, bestval, val;
	for (i in obj) {
		if (isFunction(filter) && !filter(obj[i])) {
			continue;
		}
		val = callback(obj[i]);
		if (isNumber(val) && (!best || val > bestval)) {
			bestval = val;
			best = i;
		}
	}
	return best;
};

JSON.shallow = function(obj, depth, replacer, space) {
	return JSON.stringify((function(o,d) {
		var i, out;
		if (o && typeof o === 'object') {
			if (isNumber(o.length) && !o.propertyIsEnumerable('length')) {
				if (d > 0) {
					out = [];
					for (i=0; i<o.length; i++) {
						out[i] = arguments.callee(o[i],d-1);
					}
				} else {
					out = '[object Array]';
				}
			} else {
				if (isWorker(o) || isScript(o)) {
					out = o.toString();
				} else if (d > 0) {
					out = {};
					for (i in o) {
						out[i] = arguments.callee(o[i],d-1);
					}
				} else {
					out = '[object Object]';
				}
			}
		} else {
			//out = o === undefined ? 'undefined' : o === null ? 'null' : o.toString();
			out = o;
		}
		return out;
	}(obj, depth || 1)), replacer, space);
};

JSON.encode = function(obj, replacer, space, metrics) {
	var i, keys = {}, count = {}, next = 0, nextKey = null, first = true, getKey = function() {
		var key, digits = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', length = digits.length;
		do {
			key = nextKey;
			nextKey = (next >= length ? digits[(Math.floor(next / length) - 1) % length] : '') + digits[next % length];
			next++;
		} while (count[nextKey]); // First time we're called we ignore "key", but already have count[] filled
		first = false;
		return key;
	}, check = function(obj) { // Count how many of each key - to decide if we replace them
		var i;
		if (isObject(obj)) {
			for (i in obj) {
				count[i] = (count[i] || 0) + 1;
				arguments.callee(obj[i]);
			}
		} else if (isArray(obj)) {
			for (i=0; i<obj.length; i++) {
				arguments.callee(obj[i]);
			}
		}
	}, encode = function(obj) { // Replace keys where the saved length is more than the used length
		var i, len, to;
		if (isObject(obj)) {
			to = {};
			for (i in obj) {
				len = i.length;
				if ((count[i] * len) > (((count[i] + 1) * nextKey.length) + len + (first ? 12 : 6))) { // total (length of key) > total (length of encoded key) + length of key translation
					if (!keys[i]) {
						keys[i] = getKey();
					}
					to[keys[i]] = arguments.callee(obj[i]);
				} else {
					to[i] = arguments.callee(obj[i]);
				}
			}
		} else if (isArray(obj)) {
			to = [];
			for (i=0; i<obj.length; i++) {
				to[i] = arguments.callee(obj[i]);
			}
		} else {
			to = obj;
		}
		return to;
	};
	if (isObject(obj) || isArray(obj)) {
		if (obj['$']) {
			log(LOG_ERROR, 'Trying to encode an object that already contains a "$" key!!!');
		}
		check(obj);
		getKey(); // Load up the first key, prevent key conflicts
		first = true; // For the "Should I?" check
		obj = encode(obj);
		if (!empty(keys)) {
			obj['$'] = {};
			for (i in keys) {
				obj['$'][keys[i]] = i;
			}
			if (isObject(metrics)) {
				metrics.oh = 6; // 7, -1 for first comma miscount
				metrics.mod = 0;
				metrics.num = length(keys);
				for (i in keys) {
					metrics.oh += i.length + keys[i].length + 6;
					metrics.mod += (keys[i].length - i.length) * count[i];
				}
			}
		}
	}
	return JSON.stringify(obj, replacer, space);
};

JSON.decode = function(str, metrics) {
	var obj = JSON.parse(str), keys = obj['$'], count = {}, decode = function(obj) {
		var i, to;
		if (isObject(obj)) {
			to = {};
			for (i in obj) {
				if (keys[i]) {
					to[keys[i].valueOf()] = arguments.callee(obj[i]);
					count[i] = (count[i] || 0) + 1;
				} else {
					to[i] = arguments.callee(obj[i]);
				}
			}
		} else if (isArray(obj)) {
			to = [];
			for (i=0; i<obj.length; i++) {
				to[i] = arguments.callee(obj[i]);
			}
		} else {
			to = obj;
		}
		return to;
	};
	if (keys) {
		delete obj['$'];
		obj = decode(obj);
		if (isObject(metrics) && !empty(keys)) {
			metrics.oh = 6; // 7, -1 for first comma miscount
			metrics.mod = 0;
			metrics.num = length(keys);
			for (i in keys) {
				metrics.oh += i.length + keys[i].length + 6;
				metrics.mod += (keys[i].length - i.length) * count[i];
			}
		}
	}
	return obj;
};

// Images - either on SVN, or via extension location

var getImage = function(name) {
	if (browser === 'chrome' && chrome && chrome.extension && chrome.extension.getURL) {
		return chrome.extension.getURL('images/'+name+'.png');
	}
	return 'http://game-golem.googlecode.com/svn/trunk/images/'+name+'.png';
};

var assert = function(test, msg, type) {
	if (!test) {
		throw {'name':type || 'Assert Error', 'message':msg};
	}
};
/*
 * Scripting withing Golem.
 * This is a scripting language built inside javascript.
 * It has a javascript like syntax, however all local variables must begin with a # (#test etc)
 */

// '!testing.blah=1234 & yet.another.path | !something & test.me > 5'
// [[false,"testing","blah"],"=",1234,"&",["yet","another","path"],"|",[false,"something"],"&",["test","me"],">",5]
// _operators - >,>=,=,==,<=,<,!=,!==,&,&&,|,||
// values = option, path.to.option, number, "string"
// components:
//	"[^"]*"								- string
//	'[^']*'								- string
//	\d*\.?\d+(?:[eE][-+]?\d+)?			- number
//	true|false							- boolean constants
//	[#A-Za-z_]\w*(?:\.\w+)*				- variable
//	[!=]==								- 3-char operators (comparators)
//	[-+*/%<>!=]=						- 2-char operators (comparators)
//	\|\|								- 2-char or operator
//	&&									- 2-char and operator
//	[-+*/%<>!=(){},;]					- 1-char operators

// '!testing.blah=1234 & yet.another.path | !something & test.me > 5'
// [["testing","blah"],"=",1234,"&",["yet","another","path"],"|",["something"],"&",["test","me"],">",5]

/**
 * Script class
 * @constructor
 * @param {string} source Source to the script
 * @param {Object} options Various options for compiling and running
 * - data:{} An object used for storing / retreiving variables from - only needed for persistance
 * - default:{} An object used for read-only access if not found in data:
 * - map:{} A translation map for shortcuts, must be fully qualified paths (ie, "energy":"Player.data.energy") - it will only be used so long as there isn't a "data:<map>" entry
 */
function Script(source, options) {
	options = isObject(options) ? options : isString(options) ? {'data':options} : {};
	this['map'] = options['map'] || {};
	this['data'] = options['data'] || {};
	this['default'] = options['default'] || {};
	this['source'] = source || '';
	this['script'] = source || [];
	this['result'] = undefined;

	this.parse();
};

Script.prototype.toString = Script.prototype.toJSON = function() {
	return '[script \'' + this.source + '\']';
};

Script.prototype._find = function(op, table) {
	var i = table.length;
	while (i--) {
		if (table[i][0] === op) {
			return i;
		}
	}
	return -1;
};

Script.prototype._operators = [ // Order of precidence, [name, expand_args, function]
	// Unary/Prefix
	['u++',	false,	function(l,r) {var v = parseInt(this._rvalue(r),10); this._lvalue(r, v + 1); return v;}],
	['u--',	false,	function(l,r) {var v = parseInt(this._rvalue(r),10); this._lvalue(r, v - 1); return v;}],
	['u+',	true,	function(l,r) {return parseInt(r,10);}],
	['u-',	true,	function(l,r) {return -parseInt(r,10);}],
	['u!',	true,	function(l,r) {return !r;}],
	// Postfix
	['p++',	false,	function(l,r) {var v = parseInt(this._rvalue(r),10) + 1; this._lvalue(r, v); return v;}],
	['p--',	false,	function(l,r) {var v = parseInt(this._rvalue(r),10) - 1; this._lvalue(r, v); return v;}],
	// Placeholders for Unary/Prefix/Postfix - only needed if there's not a normal one
	['!',	true,	false],	// placeholder
	['++',	true,	false],	// placeholder
	['--',	true,	false],	// placeholder
	// Maths
	['*',	true,	function(l,r) {return l * r;}],
	['/',	true,	function(l,r) {return l / r;}],
	['%',	true,	function(l,r) {return l % r;}],
	['+',	true,	function(l,r) {return l + r;}],
	['-',	true,	function(l,r) {return l - r;}],
	// Equality
	['>',	true,	function(l,r) {return l > r;}],
	['>=',	true,	function(l,r) {return l >= r;}],
	['<=',	true,	function(l,r) {return l <= r;}],
	['<',	true,	function(l,r) {return l < r;}],
	['===',	true,	function(l,r) {return l === r;}],
	['!==',	true,	function(l,r) {return l !== r;}],
/*jslint eqeqeq:false */
	['==',	true,	function(l,r) {return l == r;}],
	['!=',	true,	function(l,r) {return l != r;}],
/*jslint eqeqeq:true */
	// Logical
	['&&',	true,	function(l,r) {return l && r;}],
	['||',	true,	function(l,r) {return l || r;}],
	// Assignment
	['=',	false,	function(l,r) {return this._lvalue(l, this._rvalue(r));}],
	['*=',	false,	function(l,r) {return this._lvalue(l, l * this._rvalue(r));}],
	['/=',	false,	function(l,r) {return this._lvalue(l, l / this._rvalue(r));}],
	['%=',	false,	function(l,r) {return this._lvalue(l, l % this._rvalue(r));}],
	['+=',	false,	function(l,r) {return this._lvalue(l, l + this._rvalue(r));}],
	['-=',	false,	function(l,r) {return this._lvalue(l, l - this._rvalue(r));}]
];

Script.FN_rvalue = 0; // function(expand(args)), expanded variables -> values
Script.FN_RAW = 1; // function(args), unexpanded (so variable names are not changed to their values)
Script.FN_CUSTOM = 2; // function(script, value_list, op_list)

Script.prototype._functions = [ // [name, expand_args, function]
	['min',		Script.FN_rvalue,	function() {return Math.min.apply(Math, arguments);}],
	['max',		Script.FN_rvalue,	function() {return Math.max.apply(Math, arguments);}],
	['round',	Script.FN_rvalue,	function() {return Math.round.apply(Math, arguments);}],
	['floor',	Script.FN_rvalue,	function() {return Math.floor.apply(Math, arguments);}],
	['ceil',	Script.FN_rvalue,	function() {return Math.ceil.apply(Math, arguments);}],
	['if',		Script.FN_CUSTOM,	function(script, value_list, op_list) { // if (test) {func} [else if (test) {func}]* [else {func}]?
		var x, fn = 'if', test = false;
		while (fn) {
			x = fn === 'if' ? script.shift() : null; // Should probably report some sort of error if not an array...
			fn = script.shift(); // Should probably report some sort of error if not an array...
			if (!test && (!x || (test = this._interpret(x).pop()))) {
				value_list = value_list.concat(this._interpret(fn));
			}
			if (script[0] !== 'else') {
				break;
			}
			fn = script.shift(); // 'else'
			if (script[0] === 'if') {
				fn = script.shift();
			}
		}
	}],
	['for',	Script.FN_CUSTOM,	function(script, value_list, op_list) {
		var a, i = 0; x = [[],[],[]], tmp = script.shift(), fn = script.shift(), now = Date.now();
		while ((a = tmp.shift())) {
			if (a === ';') {
				x[++i] = [];
			} else {
				x[i].push(a);
			}
		}
		// Should probably report some sort of error if not an array...
		this._interpret(x[0]);
		while (this._interpret(x[1]).pop() && Date.now() - now < 3000) { // 3 second limit on loops
			this._interpret(fn);
			this._interpret(x[2]);
		}
	}],
	['while',	Script.FN_CUSTOM,	function(script, value_list, op_list) {
		var x = script.shift(), fn = script.shift(), now = Date.now();
		while (this._interpret(x).pop() && Date.now() - now < 3000) { // 3 second limit on loops
			this._interpret(fn);
		}
	}],
	['return',	Script.FN_CUSTOM,	function(script, value_list, op_list) {
		var x = script.shift();
		this.result = this._interpret(isArray(x) ? x : [x]);
	}]
];

/**
 * Find the value of a variable using const, default and data
 */
Script.prototype._rvalue = function(variable) { // Expand variables into values
	var i, x, worker;
	if (isArray(variable)) { // Special case - an array of variables
		i = variable.length;
		while (i--) {
			variable[i] = arguments.callee.call(this, variable[i]);
		}
	} else if (isString(variable)) {
		if (/^".*"$/.test(variable) || /^'.*'$/.test(variable)) {
			variable = variable.replace(/^"|^'|'$|"$/g, '');
			i = '';
			while (y = variable.match(/^(.*)\\(.)(.*)$/)) {
				i = y[1] + y[2];
				variable = y[3];
			}
			variable = i + variable;
		} else if (/^[A-Z]\w*(?:\.\w+)*$/.test(variable)) {
			x = variable.split('.');
			variable = Workers[x[0]]._get(x.slice(1), false);
		} else {
			if (isObject(this['data'])) {
				i = this['data'][variable];
			} else if (isString(this['data'])) {
				x = (this['data'] + '.' + variable).split('.');
				i = Workers[x[0]].get(x.slice(1))
			} else {
				i = undefined; // Error!!!
			}
			if (!isUndefined(i)) {
				variable = i;
			} else {
				if (this.map[variable]) {
					x = this.map[variable].split('.');
					variable = Workers[x[0]]._get(x.slice(1), false);
				} else {
					variable = this['default'][variable];
				}
			}
		}
	}
	return variable;
};

// Push value back into variable
Script.prototype._lvalue = function(variable, value) {
	if (isObject(this['data'])) {
		this['data'][variable] = value;
	} else if (isString(this['data'])) {
		var x = (this['data'] + '.' + variable).split('.');
		Workers[x[0]].set(x.slice(1), value);
	} else {
		// Error
	}
};

// Perform any operations of lower precedence than "op"
// Both op_list and value_list are altered
Script.prototype._operate = function(op, op_list, value_list) {
	var i, tmp, fn, args;
	while (op_list.length && op_list[0][0] <= op) {
		tmp = op_list.shift();
		fn = this._operators[tmp[0]][2];
		if ((i = fn.length)) { // function takes set args
			args = value_list.splice(-i, i);
			// pad out values to the left, if missing
			while (args.length < i) {
				args.unshift(null);
			}
		} else {
			args = value_list.splice(tmp[1], value_list.length - tmp[1]); // Args from the end
		}
		if (this._operators[tmp[0]][1]) {
			args = this._rvalue(args);
		}
//		log(LOG_LOG, 'Perform: '+this._operators[tmp[0]][0]+'('+args+')');
		value_list.push(fn.apply(this, args));
	}
	if (this._operators[op]) {
		op_list.unshift([op, value_list.length]);
	}
};

// Interpret our script, return a single value
Script.prototype._interpret = function(script) {
	var x, y, z, fn, value_list = [], op_list = [], test;
	script = script.slice(0); // Make sure we're a copy as we damage it
	while (!this.result && (x = script.shift()) !== null && !isUndefined(x)) {
		if (isArray(x)) {
			value_list = value_list.concat(arguments.callee.call(this, x));
		} else if (isString(x)) {
			if (x === ';') {
				this._operate.call(this, Number.MAX_VALUE, op_list, value_list);
				value_list = [];
				op_list = [];
			} else if ((fn = this._find(x, this._operators)) >= 0) {
				this._operate.call(this, fn, op_list, value_list);
			} else if ((fn = this._find(x, this._functions)) >= 0) {
				if (this._functions[fn][1] === Script.FN_CUSTOM) {
					value_list.push(this._functions[fn][2].call(this, script, value_list, op_list));
				} else {
					x = script.shift(); // Should probably report some sort of error if not an array...
					x = arguments.callee.call(this, x);
					if (this._functions[fn][1] === Script.FN_rvalue) {
						x = this._rvalue(x);
					}
					value_list.push(this._functions[fn][2].apply(this, x));
				}
			} else { // A "normal" variable of some type
				value_list.push(x);
			}
		} else { // number or boolean
			value_list.push(x);
		}
	}
	this._operate(Number.MAX_VALUE, op_list, value_list);
	return this.result || value_list;
};

/**
 * Run the parsed script, optionally resetting the data first
 * @param {Boolean} reset Should we clear data first?
 */
Script.prototype.run = function(reset) {
	if (reset) {
		this.reset();
	} else {
		this.result = undefined;
	}
	return this._rvalue((this._interpret(this.script)).pop());
};

Script.prototype.reset = function() {
	var x, i, data;
	if (isObject(this['data'])) {
		data = this['data'];
	} else if (isString(this['data'])) {
		x = this['data'].split('.');
		data = Workers[x[0]].get(x.slice(1), {});
	} else {
		data = {}; // Error
	}
	for (i in data) {
		delete data[i];
	}
	this.result = undefined;
};

Script.prototype.parse = function() {
	var atoms = (this['source'] + ';').regex(new RegExp('[\\t\\v\\f \\u00a0\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u200b\\u2028\\u2029\\u3000]*' + // "/s" without "/n/r"
	  '(' +
		'"(?:\\\\.|[^"])*"' +				// string quoted with "
		"|'(?:\\\\.|[^'])*'" +				// string quoted with '
		'|\\d*\\.?\\d+(?:[eE][-+]?\\d+)?' +	// number
		'|\\btrue\\b|\\bfalse\\b' +			// boolean
		'|[#A-Za-z_]\\w*(?:\\.\\w+)*\\b' +	// variable
		'|[!=]==' +							// 3-char operator
		'|[-+*/%<>!=]=' +					// 2-char operator
//		'|\\+\\+(?=\\s*[#A-Za-z_,;}])' +	// increment
//		'|--(?=\\s*[#A-Za-z_,;}])' +		// decrement
		'|\\+\\+' +							// increment
		'|--' +								// decrement
		'|&&' +								// boolean and
		'|\\|\\|' +							// boolean or
		'|[-+*/%<>!=]' +					// 1-char operator
		'|[(){}\\n\\r;]' +					// grouping, separator, terminator
		'|\\s+' +							// spaces
		'|[^#\\w\\.\\s"]+' +				// other ?
	  ')', 'gm'));
//	log('Atoms: ' + JSON.stringify(atoms));
	this['script'] = !atoms || !atoms.length ? [] : (function(map) {
		var atom, path, script = [], i;
		while ((atom = atoms.shift()) !== null && !isUndefined(atom)) {
			if (atom === '(' || atom === '{') {
				script.push(arguments.callee.call(this));
			} else if (atom === ')') {
				break;
			} else if (atom === '}') {
				if (!script.length || script[script.length-1] !== ';') {
					script.push(';');
				}
				break;
			} else if (atom === 'true') {
				script.push(true);
			} else if (atom === 'false') {
				script.push(false);
			} else if (atom === ';' || atom === '\n' || atom === '\r') { // newline
				if (script.length && script[script.length-1] !== ';') {
					script.push(';');
				}
			} else if ((i = this._find(atom, this._operators)) !== -1) { // operator
				// unary op
				if (!script.length || script[script.length-1] !== ';' || this._find(script[script.length-1], this._operators) !== -1) {
					if (this._find('u' + atom, this._operators) !== -1) {
						atom = 'u' + atom;
					}
				} else if (this._operators[i][2] === false) {
					if (this._find('p' + atom, this._operators) !== -1) {
						atom = 'p' + atom;
					}
				}
				script.push(atom);
			} else if (atom[0] === '#' // variable
				|| isNumber(atom) // number
				|| /^".*"$/.test(atom) // string
				|| /^'.*'$/.test(atom) // string
				//|| this._find(atom, this._operators) !== -1 // operator
				|| this._find(atom, this._functions) !== -1) { // function
				script.push(atom);
			} else if (atom !== ',') { // if it's not a comma, then worker.datatype.key or path.to.key
				script.push(atom);
			}
		}
//		log(LOG_DEBUG, 'Script section: '+JSON.stringify(script));
		if (script[script.length-1] === ';') {
			script.pop();
		}
		return script;
	}.call(this, this['map']));
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, browser, localStorage, window,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, isUndefined, isNull, plural, makeTime,
	empty, compare, error
*/
/* Worker Prototype
   ----------------
new Worker(name, pages, settings)

*** User data***
.id				- If we have a .display then this is the html #id of the worker
.name			- String, the same as our class name.
.pages			- String, list of pages that we want in the form "town.soldiers keep.stats"
.data			- Object, for public reading, automatically saved
.option			- Object, our options, changed from outide ourselves
.temp			- Object, temporary unsaved data for this instance only
.settings		- Object, various values for various sections, default is always false / blank
				system (true/false) - exists for all games
				unsortable (true/false) - stops a worker being sorted in the queue, prevents this.work(true)
				no_disable (true/false) - stops a worker getting disabled
				advanced (true/false) - only visible when "Advanced" is checked
				debug (true/false) - only visible when "Debug" is checked
				before (array of worker names) - never let these workers get before us when sorting
				after (array of worker names) - never let these workers get after us when sorting
				keep (true/false) - without this data is flushed when not used - only keep if other workers regularly access you
				important (true/false) - can interrupt stateful workers [false]
				stateful (true/false) - only interrupt when we return QUEUE_RELEASE from work(true)
				taint (true/false) - don't save unless data is marked as tainted - otherwise will perform a comparison between old and new data
				gm_only (true/false) - only enable worker if we're running under greasemonkey
.display		- Create the display object for the settings page.
.defaults		- Object filled with objects. Assuming in an APP called "castle_age" then myWorker.defaults['castle_age'].* gets copied to myWorker.*

*** User functions - should be in worker if needed ***
.init()			- After the script has loaded, but before anything else has run. Data has been filled, but nothing has been run.
				This is the bext place to put default actions etc...
				Cannot rely on other workers having their data filled out...
.page(page,change)  - This can read data from the current page and cannot perform any actions.
				page (string|'facebook') - the name of the page we're on, may be "facebook" for a popup, same as Page.temp.page
				change (true/false) - can we change the DOM (used to prevent one worker changing something another one needs)
				return true - We need to run again with change=1
.work(state)    - Do anything we need to do when it's our turn - this includes page changes. This is part the of Queue worker.
				state = false - It's not our turn, don't start anything if we can't finish in this one call, this.data is null
				state = true - It's our turn, do everything - Only true if not interrupted, this.data is useable
				return true or QUEUE_RELEASE if we *want* to continue working, but can be interrupted
				return QUEUE_CONTINUE if we *need* to continue working and don't want to be interrupted
				return false or QUEUE_FINISH when someone else can work
.update(type,worker)	- Called when the data, options or runtime have been changed
				type = "data", "option", "runtime", "reminder", "watch" or null (only for first call after init())
				worker = null (for worker = this), otherwise another worker (due to _watch())
.get(what)		- Calls this._get(what)
				Official way to get any information from another worker
				Overload for "special" data, and pass up to _get if basic data
.set(what,value)- Calls this._set(what,value)
				Official way to set any information for another worker
				Overload for "special" data, and pass up to _set if basic data

NOTE: If there is a work() but no display() then work(false) will be called before anything on the queue, but it will never be able to have focus (ie, read only)

*** Private data ***
._loaded		- true once ._init() has run
._watching		- List of other workers that want to have .update() after this.update()
._reminders		- List of reminders in 'i...':interval or 't...':timeout format

*** Private functions - only overload if you're sure exactly what you're doing ***
._get(what,def,type)	- Returns the data requested, auto-loads if needed, what is 'path.to.data', default if not found
._set(what,val,type)	- Sets this.data[what] to value, auto-loading if needed. Deletes "empty" data sets (if you don't pass a value)
._push(what,val,type)	- Pushes value onto this.data[what] (as an array), auto-loading if needed.
._pop(what,def,type)	- Pops the data requested (from an array), auto-loads if needed, what is 'path.to.data', default if not found. ** CHANGES DATA **
._shift(what,def,type)	- Shifts the data requested (from an array), auto-loads if needed, what is 'path.to.data', default if not found. ** CHANGES DATA **
._unshift(what,val,type)- Unshifts value onto this.data[what] (as an array), auto-loading if needed.
._transaction(commit)	- Starts a transaction (no args) to allow multilpe _set calls to effectively queue and only write (or clear) with a true (or false) call.

._setup()				- Only ever called once - might even remove us from the list of workers, otherwise loads the data...
._init()				- Calls .init(), loads then saves data (for default values), delete this.data if !nokeep and settings.nodata, then removes itself from use

._load(type)			- Loads data / option from storage, merges with current values, calls .update(type) on change
._save(type)			- Saves data / option to storage, calls .update(type) on change

._flush()				- Calls this._save() then deletes this.data if !this.settings.keep ** PRIVATE **
._unflush()				- Loads .data if it's not there already

._page(page,change)		- Calls this.page(page,change) inside a try / catch block
._work(state)			- Calls this.work(state) inside a try / catch block

._update(event)			- Calls this.update(event), loading and flushing .data if needed. event = {worker:this, type:'init|data|option|runtime|reminder', [self:true], [id:'reminder id']}

._watch(worker[,path])	- Add a watcher to worker (safe to call multiple times). If anything under "path" is changed will update the watcher
._unwatch(worker[,path])- Removes a watcher from worker (safe to call if not watching). Will remove exact matches or all
._notify(path)			- Updates any workers watching this path or below

._remind(secs,id)		- Calls this._update({worker:this, type:'reminder', id:(id || null)}) after a specified delay. Replaces old 'id' if passed (so only one _remind() per id active)
._revive(secs,id)		- Calls this._update({worker:this, type:'reminder', id:(id || null)}) regularly. Replaces old 'id' if passed (so only one _revive() per id active)
._forget(id)			- Forgets all _remind() and _revive() with the same id
._timer(id)				- Checks if we have an active timer with id

._overload(name,fn)		- Overloads the member function 'name'. this._parent() becomes available for running the original code (it automatically has the same arguments unless passed others)

._pushStack()				- Pushes us onto the "active worker" list for debug messages etc
._popStack()					- Pops us off the "active worker" list
*/

var Workers = {};// 'name':worker

/**
 * Worker class
 * @constructor
 * @param {!string} name Name of the worker
 */
function Worker(name) {
	Workers[name] = this;

	// User data
	this.id = 'golem_panel_'+name.toLowerCase().replace(/[^0-9a-z]/g,'-');
	this.name = name;

	this.defaults = {}; // {'APP':{data:{}, option:{}} - replaces with app-specific data, can be used for any this.* wanted...
	this.settings = {};

	// Data storage
	this['data'] = {};
	this['option'] = {};
	this['runtime'] = null;// {} - set to default runtime values in your worker!
	this['temp'] = {};// Temporary unsaved data for this instance only.
	// Datatypes - one key for each type above
	this._datatypes = {'data':true, 'option':true, 'runtime':true, 'temp':false}; // Used for set/get/save/load. If false then can't save/load.
	this._timestamps = {}; // timestamp of the last time each datatype has been saved
	this._storage = {}; // bytecount of storage, with compression = JSON.stringify(this[type]).length * 2
	this._rawsize = {}; // bytecount of storage, without compression = JSON.stringify(this[type]).length * 2
	this._numvars = {}; // number of keys compressed
	this._taint = {}; // Has anything changed that might need saving?
	this._saving = {}; // Prevent looping on save

	// Default functions - overload if needed, by default calls prototype function - these all affect storage
	this.add = this._add;
	this.get = this._get;
	this.set = this._set;
	this.toggle = this._toggle;
	this.push = this._push;
	this.pop = this._pop;
	this.shift = this._shift;
	this.unshift = this._unshift;

	// Private data
	this._rootpath = true; // Override save path, replaces userID + '.' with ''
	this._loaded = false;
	this._watching = {}; // Watching for changes, path:[workers]
	this._watching_ = {}; // Changes have happened, path:true
	this._reminders = {};
	this._transactions_ = null; // Will only be inside a transaction when this is an array of arrays - [[[path,to,data], value], ...]
	this._updates_ = []; // Pending update events, array of objects, key = .worker + .type
}

// Static Functions
/**
 * @param {(Worker|string)} name Name or ID of the worker. Can also accept a Worker for easier code use.
 * @return {Worker} The found worker
 */
Worker.find = function(name) {
	if (!name) {
		return null;
	}
	try {
		var i;
		if (isString(name)) {
			if (Workers[name]) {
				return Workers[name];
			}
			name = name.toLowerCase();
			for (i in Workers) {
				if (i.toLowerCase() === name || Workers[i].id === name) {
					return Workers[i];
				}
			}
		} else if (isWorker(name)) {
			return name;
		}
	} catch(e) {}
	return null;
};

/**
 * Automatically clear out any pending Update or Save actions.
 */
Worker.flush = function() {
	var i;
	for (i in Worker._updates_) {
//		log(LOG_DEBUG, 'Worker.flush(): '+i+'._update('+JSON.stringify(Workers[i]._updates_)+')');
		Workers[i]._update(null, 'run');
	}
	for (i in Workers) {
//		log(LOG_DEBUG, 'Worker.flush(): '+i+'._flush()');
		Workers[i]._flush();
	}
};
Worker.flush._timer = window.setInterval(Worker.flush, 250); // Kickstart everything running...

// Static Data
Worker.stack = ['unknown'];// array of active workers, last at the start
Worker._triggers_ = [];// Used for this._trigger
Worker._resize_ = [];// Used for this._resize
Worker._updates_ = {};// Used to reduce the workers we call _update() for

// Private functions - only override if you know exactly what you're doing
/**
 * For displaying in strings
 */
Worker.prototype.toString = Worker.prototype.toJSON = function() {
	return '[worker ' + this.name + ']';
};

/**
 * Save all changed datatypes then set a delay to delete this.data if possible
 * NOTE: You should never call this directly - let Worker.flush() handle it instead!
 * @protected
 */
Worker.prototype._flush = function() {
	if (this._loaded) {
		this._pushStack();
		this._save();
		if (this['data'] && !this.settings.keep) {
			delete this['data'];
		}
		this._popStack();
	}
};

/**
 * Adds a value to the current value of one of our _datatypes
 * @param {(string|array)} what The path.to.data / [path, to, data] we want
 * @param {*=} value The value we will add, undefined (not null!) will cause it to be deleted and any empty banches removed
 * @param {string=} type The typeof of data to be set (or return false and don't set anything)
 * @return {*} The value we passed in
 * NOTE: Numbers and strings are old+new, arrays and objects have their contents merged, boolean will toggle the value (and return the new value)
 */
Worker.prototype._add = function(what, value, type, quiet) {
	if (type && ((isFunction(type) && !type(value)) || (isString(type) && typeof value !== type))) {
//		log(LOG_DEBUG, 'Bad type in ' + this.name + '.setAdd('+JSON.shallow(arguments,2)+'): Seen ' + (typeof data));
		return false;
	}
	if (isUndefined(value)) {
		this._set(what);
	} else if (isBoolean(value)) {
		this._set(what, function(old){
			value = (old = old ? (value ? false : undefined) : true) || false;
			return old;
		}, null, quiet);
	} else if (isNumber(value)) {
		this._set(what, function(old){
			return (isNumber(old) ? old : 0) + value;
		}, null, quiet);
	} else if (isString(value)) {
		this._set(what, function(old){
			return (isString(old) ? old : '') + value;
		}, null, quiet);
	} else if (isArray(value)) {
		this._set(what, function(old){
			return (isArray(old) ? old : []).concat(value);
		}, null, quiet);
	} else if (isObject(value)) {
		this._set(what, function(old){
			return $.extend({}, isObject(old) ? old : {}, value);
		}, null, quiet);
	}
	return value;
};

/**
 * Forget a _remind or _revive timer with a specific id
 * @param {string} id The id to forget
 * @return {boolean}
 */
Worker.prototype._forget = function(id) {
	var forgot = false;
	if (id) {
		if (this._reminders['i' + id]) {
			window.clearInterval(this._reminders['i' + id]);
			delete this._reminders['i' + id];
			forgot = true;
		}
		if (this._reminders['t' + id]) {
			window.clearTimeout(this._reminders['t' + id]);
			delete this._reminders['t' + id];
			forgot = true;
		}
	}
	return forgot;
};

/**
 * Get a value from one of our _datatypes
 * @param {(string|array)} what The path.to.data / [path, to, data] we want - (optionally [Object DATA, subpath, to, data] relative to DATA)
 * @param {*} def The default value to return if the path we want doesn't exist
 * @param {string=} type The typeof of data required (or return def)
 * @return {*} The value we want, or the default we passed in
 */
Worker.prototype._get = function(what, def, type) {
	try {
		var i, data, x = isArray(what) ? what.slice(0) : (isString(what) ? what.split('.') : []);
		if (x.length && (isObject(x[0]) || isArray(x[0]))) { // Object or Array
			data = x.shift();
		} else { // String, Number or Undefined etc
			if (!x.length || !(x[0] in this._datatypes)) {
				x.unshift('data');
			}
			if (x[0] === 'data') {
				this._unflush();
			}
			data = this;
			if (isArray(this._transactions_)) {
				for (i=0; i<this._transactions_.length; i++) {
					if (compare(this._transactions_[i][0], x)) {
						break;
					}
				}
				if (i<this._transactions_.length) {
					data = this._transactions_[i][1];
					x = [];
				}
			}
		}
		while (x.length && !isUndefined(data)) {
			data = data[x.shift()];
		}
		if (!isUndefined(data) && (!type || (isFunction(type) && type(data)) || (isString(type) && typeof data === type))) {
			return isNull(data) ? null : data;
		}
//		if (!isUndefined(data)) { // NOTE: Without this expect spam on undefined data
//			log(LOG_WARN, 'Bad type in ' + this.name + '.get('+JSON.shallow(arguments,2)+'): Seen ' + (typeof data));
//		}
	} catch(e) {
		log(e, e.name + ' in ' + this.name + '.get('+JSON.shallow(arguments,2)+'): ' + e.message);
	}
	return def;
};

/**
 * This is called after _setup. All data exists and our worker is valid for this APP
 */
Worker.prototype._init = function(old_revision) {
	if (this._loaded) {
		return;
	}
	this._pushStack();
	this._loaded = true;
	if (this.init) {
		try {
			this.init(old_revision);
		}catch(e) {
			log(e, e.name + ' in ' + this.name + '.init(): ' + e.message);
		}
	}
	this._popStack();
};

/**
 * Load _datatypes from storage, optionally merging wih current data
 * Save the amount of storage space used
 * Clear the _taint[type] value
 * @param {string=} type The _datatype we wish to load. If null then load all _datatypes
 * @param {boolean=} merge If we wish to merge with current data - normally only used in _setup
 */
Worker.prototype._load = function(type, merge) {
	var i, path, raw, data, metrics = {};
	if (!this._datatypes[type]) {
		if (!type) {
			for (i in this._datatypes) {
				if (this._datatypes.hasOwnProperty(i) && this._datatypes[i]) {
					this._load(i);
				}
			}
		}
		return;
	}
	this._pushStack();
	path = (this._rootpath ? userID + '.' : '') + type + '.' + this.name;
	raw = localStorage['golem.' + APP + '.' + path];
	if (isString(raw)) { // JSON encoded string
		try {
			this._storage[type] = (path.length + raw.length) * 2; // x2 for unicode
			data = JSON.decode(raw, metrics);
			this._rawsize[type] = this._storage[type] + ((metrics.mod || 0) - (metrics.oh || 0)) * 2; // x2 for unicode
			this._numvars[type] = metrics.num || 0;
			if (merge) {
				this[type] = $.extend(true, {}, this[type], data || {});
				if (!compare(data, this[type])) {
					this._taint[type] = true; // Taint if we've changed from the default data
				}
			} else {
				this[type] = data;
				this._taint[type] = false;
			}
		} catch(e) {
			log(e, this.name + '._load(' + type + '): Not JSON data, should only appear once for each type...');
		}
	} else if (merge && this[type]) {
		this._taint[type] = true; // Taint if we've changed from the default data
	}
	this._popStack();
};

/**
 * Notify on a _watched path change. This can be called explicitely to force a notification, or automatically from _set
 * @param {(array|string)} path The path we want to notify on
 */
Worker.prototype._notify = function(path) {
	var i, j, txt = '';
	path = isArray(path) ? path : path.split('.');
	for (i=0; i<path.length; i++) {
		txt += (i ? '.' : '') + path[i];
		if (isArray(this._watching[txt])) {
			j = this._watching[txt].length;
			while (j--) {
				Workers[this._watching[txt][j]]._update({worker:this, type:'watch', id:txt, path:path.join('.')});
			}
		}
	}
};

/**
 * Overload a function allowing the original function to still exist as this._parent() within the new function.
 * @param {string} app The APP we will work on, otherwise will be for any
 * @param {string} name The function name that we are overloading
 * @param {function()} fn The new function
 */
Worker.prototype._overload = function(app, name, fn) {
	var newfn = function() {
		var a = arguments, r, x = this._parent;
		this._parent = function() {
			return arguments.callee._old.apply(this, arguments.length ? arguments : a);
		};
		this._parent._old = arguments.callee._old;
		r = arguments.callee._new.apply(this, a);
		this._parent = x;
		return r;
	};
	newfn._old = (app && this.defaults && this.defaults[app] && this.defaults[app][name] ? this.defaults[app][name] : null) || this[name] || function(){};
	newfn._old = newfn._old._orig || newfn._old; // Support Debug worker
	newfn._new = fn;
	if (app) {
		this.defaults[app] = this.defaults[app] || {};
		if (this.defaults[app][name] && this.defaults[app][name]._orig) { // Support Debug worker
			this.defaults[app][name]._orig = newfn;
		} else {
			this.defaults[app][name] = newfn;
		}
	}
	if (!app || this.defaults[app][name] === this[name]) { // If we've already run _setup
		if (this[name] && this[name]._orig) { // Support Debug worker
			this[name]._orig = newfn;
		} else {
			this[name] = newfn;
		}
	}
};

/**
 * Wrapper for a worker's .page() function from Page
 * @param {string} page The page name that we're on
 * @param {boolean} change Whether the worker is allowed to make changes to the html on the page
 * return {boolean} If the worker wants to change the page
 */
Worker.prototype._page = function(page,change) {
	this._pushStack();
	var result = false;
	if (this.page) {
		try {
			this._unflush();
			result = this.page(page,change);
		}catch(e) {
			log(e, e.name + ' in ' + this.name + '.page(' + page + ', ' + change + '): ' + e.message);
		}
	}
	this._popStack();
	return result;
};

/**
 * Pops a value from an Array in one of our _datatypes
 * @param {(string|array)} what The path.to.data / [path, to, data] we want
 * @param {*} def The default value to return if the path we want doesn't exist
 * @param {string=} type The typeof of data required (or return def)
 * @return {*} The value we passed in
 * NOTE: This will change the data stored
 */
Worker.prototype._pop = function(what, def, type, quiet) {
	var data;
	this._set(what, function(old){
		old = isArray(old) ? old.slice(0) : [];
		data = old.pop();
		return old;
	}, null, quiet);
	if (!isUndefined(data) && (!type || (isFunction(type) && type(data)) || (isString(type) && typeof data === type))) {
		return isNull(data) ? null : data;
	}
	return def;
};

/**
 * Pushes a value to an Array in one of our _datatypes
 * @param {(string|array)} what The path.to.data / [path, to, data] we want
 * @param {*=} value The value we will push, undefined (not null!) will cause it to be deleted and any empty banches removed
 * @param {string=} type The typeof of data to be set (or return false and don't set anything)
 * @return {*} The value we passed in
 * NOTE: Unlike _add() this will force the new value to be pushed onto the end of the old value (as an array)
 */
Worker.prototype._push = function(what, value, type, quiet) {
	if (type && ((isFunction(type) && !type(value)) || (isString(type) && typeof value !== type))) {
//		log(LOG_WARN, 'Bad type in ' + this.name + '.push('+JSON.shallow(arguments,2)+'): Seen ' + (typeof data));
		return false;
	}
	this._set(what, isUndefined(value) ? undefined : function(old){
		old = isArray(old) ? old : [];
		old.push(value);
		return old;
	}, null, quiet);
	return value;
};

/**
 * Removes the current worker from the stack of "Active" workers
 */
Worker.prototype._popStack = function() {
	Worker.stack.shift();
};

/**
 * Adds the current worker to the stack of "Active" workers
 */
Worker.prototype._pushStack = function() {
	Worker.stack.unshift(this.name);
};

/**
 * Starts a window.setInterval reminder event, optionally using an id to prevent multiple intervals with the same id
 * @param {number} seconds How long between events
 * @param {string=} id A unique identifier - trying to set the same id more than once will result in only the most recent timer running
 * @param {(function()|object)=} callback A function to call, or an event object to pass to _update
 * @return {number} The window.setInterval result
 */
Worker.prototype._revive = function(seconds, id, callback) {
	var name = this.name, fn;
	if (isFunction(callback)) {
		fn = function(){callback.apply(Workers[name]);};
	} else if (isObject(callback)) {
		fn = function(){Workers[name]._update(callback, 'run');};
	} else {
		fn = function(){Workers[name]._update({type:'reminder', id:(id || null)}, 'run');};
	}
	if (id && this._reminders['i' + id]) {
		window.clearInterval(this._reminders['i' + id]);
	}
	return (this._reminders['i' + (id || '')] = window.setInterval(fn, Math.max(0, seconds) * 1000));
};

/**
 * Starts a window.setTimeout reminder event, optionally using an id to prevent multiple intervals with the same id
 * @param {number} seconds How long before reminding us
 * @param {string=} id A unique identifier - trying to set the same id more than once will result in only the most recent reminder running
 * @param {(function()|object)=} callback A function to call, or an event object to pass to _update
 * @return {number} The window.setTimeout result
 */
Worker.prototype._remind = function(seconds, id, callback) {
	var name = this.name, fn;
	if (isFunction(callback)) {
		fn = function(){delete Workers[name]._reminders['t' + id];callback.apply(Workers[name]);};
	} else if (isObject(callback)) {
		fn = function(){delete Workers[name]._reminders['t' + id];Workers[name]._update(callback, 'run');};
	} else {
		fn = function(){delete Workers[name]._reminders['t' + id];Workers[name]._update({type:'reminder', id:(id || null)}, 'run');};
	}
	if (id && this._reminders['t' + id]) {
		window.clearTimeout(this._reminders['t' + id]);
	}
	return (this._reminders['t' + (id || '')] = window.setTimeout(fn, Math.max(0, seconds) * 1000));
};

/**
 * Replace _datatype with a completely new object, make sure any _watch notifications fire if the data changes
 * @param {string} type The _datatype to replace
 * @param {object} data The data to replace it with
 */
Worker.prototype._replace = function(type, data) {
	if (type === 'data') {
		this._unflush();
	}
	var i, x, val, old = this[type];
	this[type] = data;
	for (i in this._watching) {
		x = i.split('.');
		if (x[0] === type && this._get(x, 123) !== this._get([old].concat(x), 456)) {
			this._notify(i);
		}
	}
	this._taint[type] = true;
	this._save(type);
};

/**
 * Set up a notification on the window size changing.
 * @param {?Function} fn The function to call on a resize event, otherwise calls _update with type:'resize'
 */
Worker.prototype._resize = function(fn) {
	if (!Worker._resize_.length) {
		$(window).resize(function(){
			var i, w, l=Worker._resize_.length;
			for (i=0; i<l; i++) {
				w = Worker._resize_[i];
				if (isFunction(w)) {
					w();
				} else {
					Worker.find(w)._update('resize', 'run');
				}
			}
		});
	}
	if (isFunction(fn)) {
		Worker._resize_.unshift(fn); // Make sure that functions run before updates
	} else {
		Worker._resize_.push(this.name);
	}
};

/**
 * Save _datatypes to storage
 * Save the amount of storage space used
 * Clear the _taint[type] value
 * Make sure we _update() if we are going to save
 * @param {string=} type The _datatype we wish to save. If null then save all _datatypes
 * @return {boolean} Did we save or not
 */
Worker.prototype._save = function(type) {
	var i, n, v, metrics = {};
	if (this._loaded) {
		if (!type) {
			n = false;
			for (i in this._datatypes) {
				if (this._datatypes.hasOwnProperty(i) && this._datatypes[i]) {
					n = arguments.callee.call(this,i) || n; // Stop Debug noting it as multiple calls
				}
			}
			return n;
		}
		if (!this._datatypes[type] || this._saving[type] || this[type] === undefined || this[type] === null || (this.settings.taint && !this._taint[type])) {
			return false;
		}
		this._saving[type] = true;
		this._update(null, 'run'); // Make sure we flush any pending updates
		this._saving[type] = false;
		try {
			v = JSON.encode(this[type], metrics);
		} catch (e) {
			log(e, e.name + ' in ' + this.name + '.save(' + type + '): ' + e.message);
			return false; // exit so we don't try to save mangled data over good data
		}
		n = (this._rootpath ? userID + '.' : '') + type + '.' + this.name;
		if (this._taint[type] || localStorage['golem.' + APP + '.' + n] !== v) { // First two are to save the extra localStorage access
			this._pushStack();
			this._taint[type] = false;
			this._timestamps[type] = Date.now();
			try {
				localStorage['golem.' + APP + '.' + n] = v;
				this._storage[type] = (n.length + v.length) * 2; // x2 for unicode
				this._rawsize[type] = this._storage[type] + ((metrics.mod || 0) - (metrics.oh || 0)) * 2; // x2 for unicode
				this._numvars[type] = metrics.num || 0;
			} catch (e2) {
				log(e2, e2.name + ' in ' + this.name + '.save(' + type + '): Saving: ' + e2.message);
			}
			this._popStack();
			return true;
		}
	}
	return false;
};

/**
 * Set a value in one of our _datatypes
 * @param {(string|array)} what The path.to.data / [path, to, data] we want
 * @param {*=} value The value we will set it to, undefined (not null!) will cause it to be deleted and any empty banches removed
 * @param {string=} type The typeof of data to be set (or return false and don't set anything)
 * @param {?Boolean} quiet Don't _notify on changes (use sparingly)
 * @return {*} The value we passed in
 */
Worker.prototype._set = function(what, value, type, quiet) {
	if (type && ((isFunction(type) && !type(value)) || (isString(type) && typeof value !== type))) {
//		log(LOG_WARN, 'Bad type in ' + this.name + '.set('+JSON.shallow(arguments,2)+'): Seen ' + (typeof data));
		return false;
	}
	var i, x = isArray(what) ? what.slice(0) : (isString(what) ? what.split('.') : []), fn = function(data, path, value, depth){
		var i = path[depth];
		if ((path.length - depth) > 1) { // Can we go deeper?
			if (!isObject(data[i])) {
				data[i] = {};
			}
			if (!arguments.callee.call(this, data[i], path, value, depth+1) && depth >= 1 && empty(data[i])) {// Can clear out empty trees completely...
				delete data[i];
				return false;
			}
		} else if (!compare(value, data[i])) {
			if (!quiet) {
				this._notify(path);// Notify the watchers...
			}
			this._taint[path[0]] = true;
			this._update(path[0]);
			if (isUndefined(value)) {
				delete data[i];
				return false;
			} else {
				data[i] = value;
			}
		}
		return true;
	};
	if (!x.length || !(x[0] in this._datatypes)) {
		x.unshift('data');
	}
	try {
		if (isFunction(value)) { // Transactions need to store the intermediate values in case a future _set within it changes the value again
			value = value.call(this, this._get(x));
		}
		if (isArray(this._transactions_)) { // *Cannot* set data directly while in a transaction
			for (i=0; i<this._transactions_.length; i++) {
				if (compare(this._transactions_[i][0], x)) {
					break;
				}
			}
			this._transactions_[i] = [x, value];
		} else {
			if (x[0] === 'data') {
				this._unflush();
			}
			fn.call(this, this, x, value, 0);
		}
	} catch(e) {
		log(e, e.name + ' in ' + this.name + '.set('+JSON.stringify(arguments,2)+'): ' + e.message);
	}
	return value;
};

/**
 * First function called in our worker. This is where we decide if we are to become an active worker, or should be deleted.
 * Calls .setup() for worker-specific setup.
 */
Worker.prototype._setup = function(old_revision) {
	this._pushStack();
	if (this.settings.system || empty(this.defaults) || this.defaults[APP]) {
		var i;
		if (this.defaults[APP]) {
			for (i in this.defaults[APP]) {
				if (isObject(this.defaults[APP][i]) && isObject(this[i])) {
					this[i] = $.extend(true, {}, this[i], this.defaults[APP][i]);
				} else {
					this[i] = this.defaults[APP][i];
				}
			}
		}
		// NOTE: Really need to move this into .init, and defer .init until when it's actually needed
		for (i in this._datatypes) {// Delete non-existant datatypes
			if (!this[i]) {
				delete this._datatypes[i];
				delete this[i]; // Make sure it's undefined and not null
			} else {
				this._load(i, true); // Merge with default data, first time only
			}
		}
		if (this.setup) {
			try {
				this.setup(old_revision);
			}catch(e) {
				log(e, e.name + ' in ' + this.name + '.setup(): ' + e.message);
			}
		}
	} else { // Get us out of the list!!!
		delete Workers[this.name];
	}
	this._popStack();
};

/**
 * Shifts a value from an Array in one of our _datatypes
 * @param {(string|array)} what The path.to.data / [path, to, data] we want
 * @param {*} def The default value to return if the path we want doesn't exist
 * @param {string=} type The typeof of data required (or return def)
 * @return {*} The value we passed in
 * NOTE: This will change the data stored
 */
Worker.prototype._shift = function(what, def, type, quiet) {
	var data;
	this._set(what, function(old){
		old = isArray(old) ? old.slice(0) : [];
		data = old.shift();
		return old;
	}, null, quiet);
	if (!isUndefined(data) && (!type || (isFunction(type) && type(data)) || (isString(type) && typeof data === type))) {
		return isNull(data) ? null : data;
	}
	return def;
};

/**
 * Toggles a boolean value in of one of our _datatypes
 * This is an readability alias
 * @param {(string|array)} what The path.to.data / [path, to, data] we want
 * @param {?Boolean} keep Do we want to keep false values?
 * @return {*} The current state
 */
Worker.prototype._toggle = function(what, keep, type, quiet) {
	return this._add(what, keep ? true : false, null, quiet);
};

/**
 * Is there an active timer for a specific id?
 * @param {string} id The timer id to check.
 * @return {boolean} True if there is an active timer, false otherwise.
 */
Worker.prototype._timer = function(id) {
	if (id && (this._reminders['i' + id] || this._reminders['t' + id])) {
		return true;
	}
	return false;
};

/**
 * Defer _set changes to allow them to be flushed. While inside a transaction all _set and _get works as normal, however direct access returns pre-transaction data until committed.
 * this._transaction() - BEGIN
 * this._transaction(true) - COMMIT
 * this._transaction(false) - ROLLBACK
 * @param {boolean=} commit Whether to commit changes or not - undefined to begin
 */
Worker.prototype._transaction = function(commit) {
	if (isUndefined(commit)) { // Begin transaction
//		log(LOG_DEBUG, 'Begin Transaction:');
		this._transactions_ = [];
	} else {
		var i, list = this._transactions_;
		this._transactions_ = null; // Both rollback and commit clear current status
		if (commit && isArray(list)) { // Commit transaction
//			log(LOG_DEBUG, 'Commit Transaction:');
			for (i=0; i<list.length; i++) {
//				log(LOG_DEBUG, '...'+JSON.shallow(list[i],2));
				this._set(list[i][0], list[i][1]);
			}
		}
//		else log(LOG_DEBUG, 'Rollback Transaction:');
	}
};

/**
 * Set up a notification on the content of a DOM node changing.
 * Calls _update with the triggered event after short delay to prevent double-notifications
 * @param {(jQuery|string)} selector The selector to notify on
 * @param {string=} id The id we pass to _update, it will pass selector if not set
 */
Worker.prototype._trigger = function(selector, id) {
	if (!Worker._triggers_.length) {
		$('body').bind('DOMNodeInserted DOMSubtreeModified', function(event){
			var trigger = Worker._triggers_, i = trigger.length, $target = $(event.target);
			while (i--) {
				if ($target.is(trigger[i][1])) {
					Workers[trigger[i][0]]._remind(0.5, '_trigger_'+trigger[i][1], {worker:trigger[i][0], type:'trigger', id:trigger[i][2], selector:trigger[i][1]});
				}
			}
		});
	}
	Worker._triggers_.push([this.name, selector, id || selector]);
};

/**
 * Make sure we have this.data in memory if needed
 */
Worker.prototype._unflush = function() {
	this._pushStack();
	if (!this._loaded) {
		this._init();
	}
	if (!this.settings.keep && !this.data && this._datatypes.data) {
		this._load('data');
	}
	this._popStack();
};

/**
 * Pushes a value to an Array in one of our _datatypes
 * @param {(string|array)} what The path.to.data / [path, to, data] we want
 * @param {*=} value The value we will push, undefined (not null!) will cause it to be deleted and any empty banches removed
 * @param {string=} type The typeof of data to be set (or return false and don't set anything)
 * @return {*} The value we passed in
 * NOTE: Unlike _add() this will force the new value to be pushed onto the end of the old value (as an array)
 */
Worker.prototype._unshift = function(what, value, type, quiet) {
	if (type && ((isFunction(type) && !type(value)) || (isString(type) && typeof value !== type))) {
//		log(LOG_DEBUG, 'Bad type in ' + this.name + '.unshift('+JSON.shallow(arguments,2)+'): Seen ' + (typeof data));
		return false;
	}
	this._set(what, isUndefined(value) ? undefined : function(old){
		old = isArray(old) ? old : [];
		old.unshift(value);
		return old;
	}, null, quiet);
	return value;
};

/**
 * Remove a _watch notification from a specific path
 * @param {(Worker|string)} worker The worker we wish to remove the notification from
 * @param {string=} path The path we wish to stop watching, or null for all from this
 */
Worker.prototype._unwatch = function(worker, path) {
	if (typeof worker === 'string') {
		worker = Worker.find(worker);
	}
	if (isWorker(worker)) {
		var i;
		if (isString(path)) {
			if (path in worker._watching) {
				worker._watching[path].remove(this.name);
			}
		} else {
			for (i in worker._watching) {
				worker._watching[i].remove(this.name);
			}
		}
		for (i in worker._watching) {
			if (!worker._watching[i].length) {
				delete worker._watching[i];
			}
		}
	}
};

/**
 * Wrapper function for .update()
 * Make sure the event passed is "clean", and be aware that event.worker is stored as a string, but passed to .update() as a Worker
 * If .update() returns true then delete all pending update events
 * @param {(object|string)} event The event that we will copy and pass on to .update(). If it is a string then parse out to event.type
 * @param {string=} action The type of update - "add" (default) will add to the update queue, "delete" will deleting matching events, "purge" will purge the queue completely (use with care), "run" will run through the queue and act on every one (automatically happens every 250ms)
 */
Worker.prototype._update = function(event, action) {
	if (this._loaded) {
		this._pushStack();
		var i, done = false, events, old;
		if (event) {
			if (isString(event)) {
				event = {type:event};
			} else if (!isObject(event)) {
				event = {};
			}
			action = action || 'add';
			if (event.type && isFunction(this.update)) {
				event.worker = isWorker(event.worker) ? event.worker.name : event.worker || this.name;
				if (action === 'add' || action === 'run' || action === 'delete') { // Delete from update queue
					this._updates_.getEvent(event.worker, event.type, event.id);
				}
				if (action === 'add' || action === 'run') { // Add to update queue, old key already deleted
					this._updates_.unshift($.extend({}, event));
				}
				if (action === 'purge') { // Purge the update queue immediately - don't do anything with the entries
					this._updates_ = [];
				}
				if (this._updates_.length) {
					Worker._updates_[this.name] = true;
				} else {
					delete Worker._updates_[this.name];
				}
			}
		}
		if (action === 'run' && Worker._updates_[this.name]) { // Go through the event list and process each one
			this._unflush();
			old = this._updates_;
			this._updates_ = [];
			events = [];
			for (i=0; i<old.length; i++) {
				event = $.extend({}, old[i]);
				event.worker = Worker.find(event.worker || this);
				events.push(event);
			}
			while (!done && events.length) {
				try {
					done = this.update(events[0], events);
				}catch(e) {
					log(e, e.name + ' in ' + this.name + '.update(' + JSON.shallow(events[0], 2) + '): ' + e.message);
				}
				if (done) {
					events = []; // Purely in case we need to add new events below
				} else {
					events.shift();
				}
				while (event = this._updates_.shift()) { // Prevent endless loops, while keeping anything we added
					if (!(event.type in this._datatypes) && !old.findEvent(event.worker, event.type, event.id)) {
						done = false;
						old.push($.extend({}, event));
						event.worker = Worker.find(event.worker || this);
						events.push(event);
					}
				}
			}
			delete Worker._updates_[this.name];
		}
		this._popStack();
	}
};

/**
 * Add a _watch notification to a specific path
 * @param {(Worker|string)} worker The worker we wish to add the notification to
 * @param {string=} path The path we wish to watch, or null for 'data'
 */
Worker.prototype._watch = function(worker, path) {
	worker = Worker.find(worker);
	if (isWorker(worker)) {
		var i, x = isArray(path) ? path.join('.') : (isString(path) ? path : 'data');
		for (i in worker._datatypes) {
			if (x.indexOf(i) === 0) {
				worker._watching[x] = worker._watching[x] || [];
				if (worker._watching[x].indexOf(this.name) === -1) {
					worker._watching[x].push(this.name);
				}
				return true;
			}
		}
	}
	return false;
};

/**
 * Wrapper for a worker's .work() function from Queue
 * @param {boolean} state Whether the worker is allowed to work or should just return if it wants to
 * return {boolean} If the worker wants to work
 */
Worker.prototype._work = function(state) {
	this._pushStack();
	var result = false;
	try {
		result = this.work && this.work(state);
	}catch(e) {
		log(e, e.name + ' in ' + this.name + '.work(' + state + '): ' + e.message);
	}
	this._popStack();
	return result;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army:true, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Army **********
* Stores data by facebook userid for any worker that wants to use it.
* Data is stored as -
* Army.data.section.uid[...] = value
* section == 'Army' for general use of any workers with data useful for many
*/
var Army = new Worker('Army');
Army.data = {};

Army.settings = {
	system:true,
	taint:true
};

Army.option = {
	forget:14// Number of days to remember any userid
};

Army.runtime = {
	// Dashboard defaults:
	sort:0,rev:false,show:'Name',info:'uid'
};
/*
Army.display = [
	{
		id:'forget',
		label:'Forget after',
		select:[1,2,3,4,5,6,7,14,21,28],
		after:'days',
		help:'This will delete any userID that\'s not been seen for a length of time'
	}
];
*/

/** @this {Worker} */
Army.setup = function(old_revision) {
	// BEGIN Change of storage from "data.uid.section.xyz" to "data.section.uid.xyz"
	if (old_revision <= 1113) {
		log('Updating Army...');
		var i, j;
		for (i in this.data) { // First change the layout
			if (isNumber(i) || !/[^\d]/.test(i)) {
				for (j in this.data[i]) {
					this._set(['data',j,i], this.data[i][j]);
					this._set(['data',i,j]);
				}
				this._set(['data',i]);
			}
		}
		this.data.Army = this.data.Army || {};
		for (i in this.data.Army) { // Second change the uid.Army bool to be Army.uid.member
			if (this.data.Army[i] === true) {
				this._set(['data','Army',i], this._get(['data','_info',i],{}));
				this._set(['data','_info',i])
				this._set(['data','Army',i,'member'], true);
			}
		}
		this.data._info = this.data._info || {};
		for (i in this.data._info) { // Finally remove _info into Army
			this._set(['data','Army',i], this._get(['data','_info',i],{}));
			this._set(['data','_info',i])
		}
		this._set(['data','_info'])
	}
	// END
};

/** @this {Worker} */
Army.set = function(what) {
	var x = arguments[0] = isArray(what) ? what.slice(0) : (isString(what) ? what.split('.') : []);
	if (!x.length || isNumber(x[0]) || !/[^\d]/.test(x[0])) {
		x.unshift(Worker.stack[0]); // Section first - if it's not a valid section then use the current worker
	}
	return this._set.apply(this, arguments);
};

/** @this {Worker} */
Army.get = function(what) {
	var x = arguments[0] = isArray(what) ? what.slice(0) : (isString(what) ? what.split('.') : []);
	if (!x.length || isNumber(x[0]) || !/[^\d]/.test(x[0])) {
		x.unshift(Worker.stack[0]); // Section first - if it's not a valid section then use the current worker
	}
	return this._get.apply(this, arguments);
};

/** @this {Worker} */
Army.army_name = function(action, uid) {
	switch(action) {
	case 'title':
		return 'Name';
	case 'show':
		return Army._get(['Army',uid,'name'],'-').html_escape();
	case 'sort':
		return Army._get(['Army',uid,'name']);
	case 'click':
		if (uid) {
			Army._unflush();
			var i, obj = {};
			for (i in Army.data) {
				if (Army.data[i][uid]) {
					obj[i] = Army.data[i][uid];
				}
			}
			Config.makeTooltip(Army._get(['Army',uid,'name']) || uid, Page.makeLink('keep.php', 'user=' + uid, 'Visit Keep') + '<hr><b>userID: </b>' + uid + '<br><hr><b>Raw Data:</b><pre>' + JSON.stringify(obj, null, '   ') + '</pre>');
		}
		return true;
	}
};

/** @this {Worker} */
Army.army = function(action, uid) {
	var i, tmp, value, list = [], info = 'UserID', infolist = {
		'UserID':'uid',
		'Level':'level',
		'FBName':'fbname',
		'Seen':'seen',
		'Changed':'changed',
		'Army Size':'army_size'
	};
	switch(action) {
	case 'title':
		return 'Info (' + this.get(['runtime','info'],'UserID') + ')';
	case 'info':
		if ($('#golem-army-info').length) {
			info = $('#golem-army-info').val();
		}
		this.set(['runtime','info'], info)
		for (i in infolist) {
			list.push('<option value="' + i + '"' + (i === info ? ' selected' : '') + '>' + i + '</option>');
		}
		return 'Info: <select id="golem-army-info">' + list.join('') + '</select>';
	case 'show':
		tmp = infolist[this.get(['runtime','info'],'UserID')];
		if (tmp === 'uid') {
			value = uid;
		} else {
			value = this.get(['Army',uid,tmp],'-');
			if (isNumber(value) && Math.abs(value - Date.now()) < (365 * 24 * 60 * 60 * 1000)) { // If it's probably a date
				value = makeTime(value, 'R');
			}
		}
		return value;
	case 'sort':
		return this.runtime.info === 'UserID' ? parseInt(uid,10) : this.get(['Army',uid,infolist[this.runtime.info]]);
	}
};

Army.order = [];
/** @this {Worker} */
Army.dashboard = function(sort, rev) {
	var i, j, k, label, show = this.get(['runtime','show'],'*'), list = [], output = [], section = [], title = [], showinfo = [], army_fn = [];
	sort = isUndefined(sort) ? this.get(['runtime','sort'],0) : sort;
	rev = isUndefined(rev) ? this.get(['runtime','rev'],false) : rev;
	if ($('#golem-army-show').length) {
		show = $('#golem-army-show').val();
	}
	section.push('<option value="*"' + ('*' === show ? ' selected' : '') + '>All</option>');
	for (i in this.data) {
		section.push('<option value="' + i + '"' + (i === show ? ' selected' : '') + '>' + i + '</option>');
	}
	army_fn.push('*');
	showinfo.push(Army.army_name('info'));
	th(title, Army.army_name('title'));
	for (i in Workers) {
		if (Workers[i].army) {
			army_fn.push(i);
			showinfo.push(Workers[i].army('info'));
			th(title, Workers[i].army('title'));
		}
	}
	list.push('Limit entries to <select id="golem-army-show">' + section.join('') + '</select>, ' + showinfo.trim().join(', '));
	if (!this.order.length || this.runtime.show !== show || !arguments.length) {
		this.set(['runtime','show'], show);
		this.order = [];
		if (show === '*') {
			for (i in this.data) {
				for (j in this.data[i]) {
					this.order.push(j);
				}
			}
			this.order = this.order.unique();
		} else {
			for (i in this.data[show]) {
				this.order.push(i);
			}
		}
	}
	if (sort !== this.runtime.sort || rev !== this.runtime.rev || !arguments.length) {
		this.set(['runtime','sort'], sort);
		this.set(['runtime','rev'], rev);
		this.order.sort(function(a,b) {
			var aa = 0, bb = 0;
//			try {
				if (army_fn[sort] === '*') {
					aa = Army.army_name('sort', a);
					bb = Army.army_name('sort', b);
				} else {
					aa = Workers[army_fn[sort]].army('sort', a);
					bb = Workers[army_fn[sort]].army('sort', b);
				}
//			} catch(e) {}
			if (typeof aa === 'string' || typeof bb === 'string') {
				return (rev ? (''+bb).localeCompare(aa) : (''+aa).localeCompare(bb));
			}
			return (rev ? (aa || 0) - (bb || 0) : (bb || 0) - (aa || 0));
		});
	}

	list.push('<table cellspacing="0" style="width:100%"><thead><tr>' + title.join('') + '</tr></thead><tbody>');
	for (j=0; j<this.order.length; j++) {
		output = [];
		td(output, '<a>' + this.army_name('show', this.order[j]) + '</a>', 'id="golem_army_*_' + this.order[j] + '" style="cursor:pointer;"');
		for (i in Workers) {
			if (Workers[i].army) {
				try {
					k = Workers[i].army('show', this.order[j]) || '-';
					if (Workers[i].army('click')) {
						td(output, '<a>' + k + '</a>', 'id="golem_army_' + i + '_' + this.order[j] + '" style="cursor:pointer;"');
					} else {
						td(output, k);
					}
				} catch(e) {
					td(output, '-');
				}
			}
		}
		tr(list, output.join(''));//, 'style="height:25px;"');
	}
	list.push('</tbody></table>');
	$('#golem-dashboard-Army').html(list.join(''));
	$('#golem-dashboard-Army td:first-child,#golem-dashboard-Army th:first-child').css('text-align', 'left');
	$('#golem-dashboard-Army select').change(function() {Army._notify('data');});// Force a redraw
	$('#golem-dashboard-Army thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	$('#golem-dashboard-Army td').click(function(e){
		var tmp = $(this).attr('id').regex(/^golem_army_(.*)_(\d+)$/i);
		if (tmp.length) {
			if (tmp[0] === '*') {
				Army.army_name('click', tmp[1])
			} else {
				Workers[tmp[0]]('click', tmp[1])
			}
		}
		e.stopImmediatePropagation();
		return false;
	});
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources, Coding:true,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH, APPNAME,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime, makeImage,
	GM_listValues, GM_deleteValue, localStorage
*/
/********** Worker.Coding **********
* Just some coding nifo about current workers - nothing special
*/
var Coding = new Worker('Coding');
Coding.data = Coding.option = Coding.runtime = Coding.temp = null;

Coding.settings = {
	system:true,
	debug:true,
	taint:true
};

Coding.dashboard = function() {
	var i, j, html, list = [], types = ['system', 'advanced', 'debug', 'taint', 'keep'], data = ['display', 'dashboard', 'data', 'option', 'runtime', 'temp'];

	for (i in Workers) {
		html = '';
		for (j=0; j<types.length; j++) {
			if (Workers[i].settings[types[j]]) {
				html += '<td class="green">true</td>';
			} else {
				html += '<td class="red">false</td>';
			}
		}
		if (isBoolean(Workers[i]._get(['option','_sleep']))) {
			html += '<td class="green">true</td>';
		} else {
			html += '<td class="red">false</td>';
		}
		for (j=0; j<data.length; j++) {
			if (Workers[i][data[j]]) {
				html += '<td class="green">true</td>';
			} else {
				html += '<td class="red">false</td>';
			}
		}
		list.push('<tr><th>' + i + '</th>' + html + '</tr>');
	}
	list.sort();
	html = '';
	for (j=0; j<types.length; j++) {
		html += '<th>' + types[j].ucfirst() + '</td>';
	}
	html += '<th>Sleep</th>';
	for (j=0; j<data.length; j++) {
		html += '<th>' + data[j].ucfirst() + '</td>';
	}
	$('#golem-dashboard-Coding').html('<table><thead><tr><th></th>' + html + '</tr></thead><tbody>' + list.join('') + '</tbody></table>');
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Dashboard, History, Page, Queue, Resources, Script,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	getImage, log, warn, error, isUndefined
*/
/********** Worker.Config **********
* Has everything to do with the config
*/
var Config = new Worker('Config');

Config.settings = {
	system:true,
	keep:true,
	taint:true
};

Config.option = {
	display:true,
	fixed:false,
	advanced:false,
	debug:false,
	exploit:false
};

Config.temp = {
	require:[],
	menu:null
};

/** @this {Worker} */
Config.init = function(old_revision) {
	var i, j, k, tmp, worker, multi_change_fn;
	// BEGIN: Changing this.option.display to a bool
	if (old_revision <= 1110) {
		this.option.display = (this.option.display === true || this.option.display === 'block');
	}
	// END
	// START: Only safe place to put this - temporary for deleting old queue enabled code...
	if (old_revision <= 1106) { // Not sure real revision
		for (i in Workers) {
			if (Workers[i].option && ('_enabled' in Workers[i].option)) {
				if (!Workers[i].option._enabled) {
					Workers[i].set(['option','_disabled'], true);
				}
				Workers[i].set(['option','_enabled']);
			}
		}
	}
	// END
	// START: Move active (unfolded) workers into individual worker.option._config._show
	if (old_revision <= 1106) { // Not sure real revision
		if (this.option.active) {
			for (i=0; i<this.option.active.length; i++) {
				worker = Worker.find(this.option.active[i]);
				if (worker) {
					worker.set(['option','_config','_show'], true);
				}
			}
			this.set(['option','active']);
		}
	}
	// END
	this.makeWindow(); // Creates all UI stuff
	multi_change_fn = function(el) {
		var $this = $(el), tmp, worker, val;
		if ($this.attr('id') && (tmp = $this.attr('id').slice(PREFIX.length).regex(/([^_]*)_(.*)/i)) && (worker = Worker.find(tmp[0]))) {
			val = [];
			$this.children().each(function(a,el){ val.push($(el).text()); });
			worker.set(['option', tmp[1]], val);
		}
	};

	$('input.golem_addselect').live('click.golem', function(){
		var i, value, values = $(this).prev().val().split(','), $multiple = $(this).parent().children().first();
		for (i=0; i<values.length; i++) {
			value = values[i].trim();
			if (value) {
				$multiple.append('<option>' + value + '</option>').change();
			}
		}
		multi_change_fn($multiple[0]);
//		Worker.flush();
	});
	$('input.golem_delselect').live('click.golem', function(){
		var $multiple = $(this).parent().children().first();
		$multiple.children().selected().remove();
		multi_change_fn($multiple[0]);
//		Worker.flush();
	});
	$('#golem_config input,textarea,select').live('change.golem', function(){
		var $this = $(this), tmp, worker, val, handled = false;
		if ($this.is('#golem_config :input:not(:button)') && $this.attr('id') && (tmp = $this.attr('id').slice(PREFIX.length).regex(/([^_]*)_(.*)/i)) && (worker = Worker.find(tmp[0]))) {
			if ($this.attr('type') === 'checkbox') {
				val = $this.prop('checked');
			} else if ($this.attr('multiple')) {
				multi_change_fn($this[0]);
				handled = true;
			} else {
				val = $this.prop('value') || $this.val() || null;
				if (val && val.search(/^[-+]?\d*\.?\d+$/) >= 0) {
					val = parseFloat(val);
				}
			}
			if (!handled) {
				worker.set('option.'+tmp[1], val, null);
//				Worker.flush();
			}
		}
	});
	$('#golem').append('<div id="golem-menu" class="golem-menu golem-shadow"></div>');
	$('.golem-menu > div').live('click.golem', function(event) {
		var i, $this = $(this.wrappedJSObject || this), key = $this.attr('name').regex(/^([^.]*)\.([^.]*)\.(.*)/), worker = Worker.find(key[0]);
//		log(key[0] + '.menu(' + key[1] + ', ' + key[2] + ')');
		worker._unflush();
		worker.menu(Worker.find(key[1]), key[2]);
//		Worker.flush();
	});
	$('.ui-accordion-header').live('click', function(){
		$(this).blur();
	});
	$('body').live('click.golem', function(event){ // Any click hides it, relevant handling done above
		Config.set(['temp','menu']);
		$('.golem-icon-menu-active').removeClass('golem-icon-menu-active');
		$('#golem-menu').hide();
//		Worker.flush();
	});
	this._watch(this, 'data');
	this._watch(this, 'option.advanced');
	this._watch(this, 'option.debug');
	this._watch(this, 'option.exploit');
};

/** @this {Worker} */
Config.update = function(event, events) {
	var i, $el, $el2, worker, id, value, list, options = [];
	if (events.findEvent(this, 'show') || events.findEvent(this, 'init')) {
		if (this.option.display) {
			$('#golem_config').show();
		}
		$('#golem_config_frame').removeClass('ui-helper-hidden');// make sure everything is created before showing (css sometimes takes another second to load though)
	}
	for (event=events.getEvent(this, 'watch', 'data'); event; event=events.getEvent()) { // Changing one of our dropdown lists
		list = [];
		value = this.get(event.path);
		if (isArray(value)) {
			for (i=0; i<value.length; i++) {
				list.push('<option value="' + value[i] + '">' + value[i] + '</option>');
			}
		} else if (isObject(value)) {
			for (i in value) {
				list.push('<option value="' + i + '">' + value[i] + '</option>');
			}
		}
		list = list.join('');
		$('select.golem_' + event.path.slice('data.'.length)).each(function(a,el){
			var worker = Worker.find($(el).closest('div.golem-panel').attr('id')), val = worker ? worker.get(['option', $(el).attr('id').regex(/_([^_]*)$/i)]) : null;
			$(el).html(list).val(val);
		});
	}
	if (events.getEvent(this, 'watch', 'option.advanced')
	 || events.getEvent(this, 'watch', 'option.debug')
	 || events.getEvent(this, 'watch', 'option.exploit')) {
		for (i in Workers) {
			if (Workers[i].settings.advanced || Workers[i].settings.debug || Workers[i].settings.exploit) {
				$('#'+Workers[i].id).css('display', ((!Workers[i].settings.advanced || this.option.advanced) && (!Workers[i].settings.debug || this.option.debug) && (!Workers[i].settings.exploit || this.option.exploit)) ? '' : 'none');
			}
		}
	}
	for (event=events.findEvent(null, 'watch'); event; event=events.findEvent()) {
		worker = event.worker;
		if (event.id === 'option._config') {
			if (event.path === 'option._config._show') { // Fold / unfold a config panel
				i = worker.get(event.path, false) && 0;
				id = worker.id;
			} else { // Fold / unfold a group panel
				i = worker.get(event.path, false) || 0;
				id = worker.id + '_' + event.path.slice('option._config.'.length);
			}
			if (i !== $('#' + id).accordion('option','active')) {
				$('#' + id).accordion('activate', i);
			}
		} else if (event.id === 'option._sleep') { // Show the ZZZ icon
//			log(LOG_LOG, worker.name + ' going to sleep...');
			$('#golem_sleep_' + worker.name).toggleClass('ui-helper-hidden');
		} else if (event.id) { // Some option changed, so make sure we show that
			id = event.id.slice('option.'.length);
			if (id && id.length && ($el = $('#'+this.makeID(worker, id))).length === 1) {
				if ($el.attr('type') === 'checkbox') {
					$el.prop('checked', worker.get(event.id, false));
				} else if ($el.attr('multiple')) {
					$el.empty();
					worker.get(event.id, [], isArray).forEach(function(val){
						$el.append('<option>'+val+'</option>');
					});
				} else if ($el.attr('value')) {
					$el.prop('value', worker.get(event.id));
				} else {
					$el.val(worker.get(event.id));
				}
			}
		}
	}
	this.checkRequire();
	return true;
};

/** @this {Worker} */
Config.menu = function(worker, key) {
	if (!worker) {
		if (!key) {
			return [
				'fixed:' + (this.option.fixed ? '<img src="' + getImage('pin_down') + '">Fixed' : '<img src="' + getImage('pin_left') + '">Normal') + '&nbsp;Position',
				'advanced:' + (this.option.advanced ? '+' : '-') + 'Advanced&nbsp;Options',
				'debug:' + (this.option.debug ? '+' : '-') + 'Debug&nbsp;Options'
			];
		} else if (key) {
			switch (key) {
				case 'fixed':
					$('#golem_config_frame').toggleClass('ui-helper-fixed', this.toggle(['option','fixed']));
					break;
				case 'advanced':
					this.toggle(['option','advanced']);
					this.checkRequire();
					break;
				case 'debug':
					this.toggle(['option','debug']);
					this.checkRequire();
					break;
			}
		}
	}
};

/** @this {Worker} */
Config.makeImage = function(name, options) {
	options = isObject(options) ? options : isString(options) ? {title:options} : {};
	return '<span' + (options.id ? ' id="' + options.id + '"' : '') + (options.title ? ' title="' + options.title + '"' : '') + ' style="margin-bottom:-4px;' + (options.style ? options.style : '') + '"' + ' class="ui-icon golem-icon golem-icon-' + name + (options.className ? ' ' + options.className : '') + '"></span>';
};

/** @this {Worker} */
Config.addButton = function(options) {
	if (options.advanced >= 0 && !Config.get(['option','advanced'],false)) {
		options.hide = true;
	}
	var html = $('<img class="golem-theme-button golem-button' + (options.active ? '-active' : '') + (options.advanced ? ' golem-advanced' : '') + (options.className ? ' '+options.className : '') + '" ' + (options.id ? 'id="'+options.id+'" ' : '') + (options.title ? 'title="'+options.title+'" ' : '') + (options.hide ? 'style="display:none;" ' : '') + 'src="' + getImage(options.image) + '">');
	if (options.prepend) {
		$('#golem_buttons').prepend(html);
	} else if (options.after) {
		$('#'+options.after).after(html);
	} else {
		$('#golem_buttons').append(html);
	}
	if (options.click) {
		html.click(options.click);
	}
}

/** @this {Worker} */
Config.makeTooltip = function(title, content) {
	var el = $('<div class="ui-widget ui-widget-shadow ui-helper-fixed" style="left:100px;top:100px;z-index:999;">' + // High z-index due to Facebook search bar
		'<h3 class="ui-widget-header" style="padding:2px;cursor:move;">' + title +
			'<span class="ui-icon ui-icon-close" style="float:right;cursor:pointer;"></span>' +
		'</h3>' +
		'<div class="ui-widget-content" style="padding:4px;"><div></div></div>' +
	'</div>')
	.draggable({
		handle:'> h3',
		containment:'window',
		stack:'.tooltips'
	})
//	.resizable({ // Doesn't resize the widget-content properly
//		autoHide: true,
//		handles: 'se',
//		minHeight: 100,
//		minWidth: 100
//	})
	.appendTo('#golem');
	$('.ui-widget-header span', el).click(function(){el.remove();});
	$('.ui-widget-content > div', el).append(content);
	el.show();
};

/** @this {Worker} */
Config.makeWindow = function() {  // Make use of the Facebook CSS for width etc - UIStandardFrame_SidebarAds
	var i, j, k, tmp, stop = false;
	$('#golem').prepend(tmp = $('<div id="golem_config_frame" class="ui-widget ui-helper-hidden' + (this.option.fixed?' ui-helper-fixed':'') + '" style="width:' + $('#golem').width() + 'px;">' +
		'<h3 class="ui-widget-header">' +
			'GameGolem ' + version + (!isRelease ? '.' + revision : '') +
		'</h3>' +
		'<div class="ui-widget-content" style="margin-top:-1px;padding:0 4px 4px 4px;">' +
			'<div id="golem_info" style="margin:0 -4px;">' +
				// Extra info goes in here
			'</div>' +
			'<div id="golem_buttons" style="padding-top:4px;">' +
				// All buttons go in here
			'</div>' +
			'<div id="golem_config" style="display:none;padding-top:4px;">' +
				// All config panels go in here
			'</div>' +
		'</div>' +
	'</div>'));
	this.addButton({
		id:'golem_options',
		image:'options',
		title:'Show Options',
		active:this.option.display,
		className:this.option.display ? 'green' : '',
		click:function(){
			$(this).toggleClass('golem-button golem-button-active green');
			Config.toggle(['option','display'], true);
			$('#golem_config').toggle('blind'); //Config.option.fixed?null:
		}
	});
	for (i in Workers) { // Propagate all before and after settings
		if (Workers[i].settings.before) {
			for (j=0; j<Workers[i].settings.before.length; j++) {
				k = Worker.find(Workers[i].settings.before[j]);
				if (k) {
					k.settings.after = k.settings.after || [];
					k.settings.after.push(Workers[i].name);
					k.settings.after = k.settings.after.unique();
//					log(LOG_WARN, 'Pushing '+k.name+' after '+Workers[i].name+' = '+k.settings.after);
				}
			}
		}
		if (Workers[i].settings.after) {
			for (j=0; j<Workers[i].settings.after.length; j++) {
				k = Worker.find(Workers[i].settings.after[j]);
				if (k) {
					k.settings.before = k.settings.before || [];
					k.settings.before.push(Workers[i].name);
					k.settings.before = k.settings.before.unique();
//					log(LOG_WARN, 'Pushing '+k.name+' before '+Workers[i].name+' = '+k.settings.before);
				}
			}
		}
	}
	for (i in Workers) {
		this.makePanel(Workers[i]);
	}
	$('#golem_config')
		.sortable({
			axis: 'y',
			containment: 'parent',
			distance: 15,
			handle: '> h3',
			items: '> div:not(.golem-unsortable)',
			tolerance: 'pointer',
			start: function(event) {
				$('#golem_config').data('stop', true);
			},
			stop: function(event) {
				var i, el, order = [];
				el = $('#golem_config > div');
				for (i=0; i<el.length; i++) {
					order.push($(el[i]).attr('name'));
				}
				Queue.set(['option','queue'], order.unique());
			}
		});
	$( "#golem_config > div > h3 > a" ).click(function(event) {
		if ($('#golem_config').data('stop')) {
			event.stopImmediatePropagation();
			event.preventDefault();
			$('#golem_config').data('stop', false);
		}
	});
	this._update('show');
};

/** @this {Worker} */
Config.makePanel = function(worker, args) {
	if (!isWorker(worker)) {
		if (Worker.stack.length <= 1) {
			return;
		}
		args = worker;
		worker = Worker.get(Worker.stack[0]);
	}
	if (!args) {
		if (!worker.display) {
			return;
		}
		args = worker.display;
	}
	if (!$('#'+worker.id).length) {
		var name = worker.name, tmp, display = (worker.settings.advanced && !this.option.advanced) || (worker.settings.debug && !this.option.debug) || (worker.settings.exploit && !this.option.exploit), sleep = worker.get(['option','_sleep'], false) ? '' : 'ui-helper-hidden';
		$('#golem_config').append(tmp = $(
			'<div id="' + worker.id + '" name="' + name + '" class="' + (worker.settings.unsortable ? 'golem-unsortable' : '') + '"' + (display ? ' style="display:none;"' : '') + '>' +
				'<h3>' +
					'<a href="#">' +
						(worker.settings.unsortable ? '<span class="ui-icon ui-icon-locked" style="float:left;margin-top:-2px;margin-left:-4px;"></span>' : '') +
						name +
						this.makeImage('zzz', {title:name + ' sleeping...', id:'golem_sleep_' + name, className:sleep}) +
					'</a>' +
				'</h3>' +
				'<div class="' + (worker.settings.advanced ? 'red' : '') + (worker.settings.debug ? ' blue' : '') + (worker.settings.exploit ? ' purple' : '') + '" style="font-size:smaller;"></div>' +
			'</div>'
		));
		name = worker.name;
		$('#'+worker.id).accordion({
			collapsible: true,
			autoHeight: false,
			clearStyle: true,
			animated: 'blind',
			header: '> h3',
			active: worker.get(['option','_config','_show'], false) && 0,
			change: function(event, ui){
				Workers[name].set(['option','_config','_show'], ui.newHeader.length ? true : undefined, null, true); // Only set when *showing* panel
			}
		});
		this._watch(worker, 'option._config');
		this._watch(worker, 'option._sleep');
	} else {
		$('#'+worker.id+' > div').empty();
	}
	this.addOption(worker, args);
};

/** @this {Worker} */
Config.makeID = function(worker, id) {
	return PREFIX + worker.name.toLowerCase().replace(/[^0-9a-z]/g,'-') + '_' + id;
};

/** @this {Worker} */
Config.clearPanel = function(selector) {
	this._init(); // Make sure we're properly loaded first!
	if (isWorker(selector)) {
		selector = '#'+selector.id+' > div';
	} else if (typeof selector === 'undefined' || !selector) {
		if (Worker.stack.length <= 1) {
			return;
		}
		selector = '#'+Workers[Worker.stack[0]].id+' > div';
	}
	$(selector).empty();
};

/** @this {Worker} */
Config.addOption = function(selector, args) {
	this._init(); // Make sure we're properly loaded first!
	var worker;
	if (isWorker(selector)) {
		worker = selector;
		selector = '#'+selector.id+' > div';
	} else if (typeof args === 'undefined' || !args) {
		if (Worker.stack.length <= 1) {
			return;
		}
		worker = Workers[Worker.stack[0]];
		args = selector;
		selector = '#'+worker.id+' > div';
	}
	$(selector).append(this.makeOptions(worker, args));
};

/** @this {Worker} */
Config.makeOptions = function(worker, args) {
	this._init(); // Make sure we're properly loaded first!
	if (isArray(args)) {
		var i, $output = $('<div></div>');
		for (i=0; i<args.length; i++) {
			$output = $output.append(this.makeOptions(worker, args[i]));
		}
		return $output;
	} else if (isObject(args)) {
		return this.makeOption(worker, args);
	} else if (isString(args)) {
		return this.makeOption(worker, {title:args});
	} else if (isFunction(args)) {
		try {
			return this.makeOptions(worker, args.call(worker));
		} catch(e) {
			log(LOG_WARN, e.name + ' in Config.makeOptions(' + worker.name + '.display()): ' + e.message);
		}
	} else {
		log(LOG_ERROR, worker.name+' is trying to add an unknown type of option: '+(typeof args));
	}
	return $([]);
};

/** @this {Worker} */
Config.makeOption = function(worker, args) {
	var i, j, o, r, step, $option, tmp, name, txt = [], list = [];
	o = $.extend({}, {
		before: '',
		after: '',
		suffix: '',
		className: '',
		between: 'to',
		size: 18,
		min: 0,
		max: 100,
		real_id: ''
	}, args);
	if (o.id) {
		if (!isArray(o.id)) {
			o.id = o.id.split('.');
		}
		if (o.id.length > 0 && Workers[o.id[0]]) {
			worker = Workers[o.id.shift()];
		}
		if (isUndefined(worker._datatypes[o.id[0]])) {
			o.id.unshift('option');
		}
		o.path = o.id;
		o.id = o.id.slice(1).join('.');
		this._watch(worker, o.path);
		o.real_id = ' id="' + this.makeID(worker, o.id) + '"';
		o.value = worker.get(o.path, null);
	}
	if (o.group) {
		if (o.title) {
			tmp = o.title.toLowerCase().replace(/[^a-z0-9]/g,'');
			name = worker.name;
			$option = $('<div class="' + (worker.settings.advanced ? 'red' : '') + (worker.settings.debug ? ' blue' : '') + (worker.settings.exploit ? ' purple' : '') + '" id="' + worker.id + '_' + tmp + '"><h3><a href="#">' + o.title + '</a></h3></div>').append(this.makeOptions(worker,o.group));
			$option.accordion({
				collapsible: true,
				autoHeight: false,
				clearStyle: true,
				animated: 'blind',
				active: worker.get(['option','_config',tmp], false) || 0,
				change: function(event, ui){
					Workers[name].set(['option','_config',tmp], ui.newHeader.length ? undefined : true, null, true); // Only set when *hiding* panel
				}
			});
		} else {
			$option = this.makeOptions(worker,o.group);
		}
	} else {
		o.alt = (o.alt ? ' alt="'+o.alt+'"' : '');
		if (o.hr) {
			txt.push('<br><hr style="clear:both;margin:0;">');
		}
		if (o.title) {
			txt.push('<h4 class="golem-group-title">' + o.title.replace(' ','&nbsp;') + '</h4>');
		}
		if (o.label && !o.button) {
			txt.push('<span style="float:left;margin-top:2px;">'+o.label.replace(' ','&nbsp;')+'</span>');
			if (o.text || o.checkbox || o.select || o.number) {
				txt.push('<span style="float:right;">');
			} else if (o.multiple) {
				txt.push('<br>');
			}
		}
		if (o.before) {
			txt.push(o.before+' ');
		}
		// our different types of input elements
		if (o.info) { // only useful for externally changed
			if (o.id) {
				txt.push('<span style="float:right"' + o.real_id + '>' + (o.value || o.info) + '</span>');
			} else {
				txt.push(o.info);
			}
		} else if (o.text) {
			txt.push('<input type="text"' + o.real_id + (o.label || o.before || o.after ? '' : ' style="width:100%;"') + ' size="' + o.size + '" value="' + (o.value || isNumber(o.value) ? o.value : '') + '">');
		} else if (o.number) {
			txt.push('<input type="number"' + o.real_id + (o.label || o.before || o.after ? '' : ' style="width:100%;"') + ' size="6"' + (o.step ? ' step="'+o.step+'"' : '') + ' min="' + o.min + '" max="' + o.max + '" value="' + (isNumber(o.value) ? o.value : o.min) + '">');
		} else if (o.textarea) {
			txt.push('<textarea' + o.real_id + ' cols="38" rows="5"' + (o.id ? '' : ' disabled') + ' style="margin-left:0;margin-right:0;" placeholder="Type here...">' + (o.value || '') + '</textarea>');
		} else if (o.checkbox) {
			txt.push('<input type="checkbox"' + o.real_id + (o.value ? ' checked' : '') + '>');
		} else if (o.button) {
			txt.push('<input type="button"' + o.real_id + ' value="' + o.label + '">');
		} else if (o.select) {
			if (typeof o.select === 'function') {
				o.select = o.select.call(worker, o.id);
			}
			switch (typeof o.select) {
				case 'number':
					step = Divisor(o.select);
					for (i=0; i<=o.select; i+=step) {
						list.push('<option' + (o.value==i ? ' selected' : '') + '>' + i + '</option>');
					}
					break;
				case 'string':
					o.className = ' class="golem_'+o.select+'"';
					if (this.data && this.data[o.select] && (typeof this.data[o.select] === 'array' || typeof this.data[o.select] === 'object')) {
						o.select = this.data[o.select];
					} else {
						break;
					} // deliberate fallthrough
				case 'array':
				case 'object':
					if (isArray(o.select)) {
						for (i=0; i<o.select.length; i++) {
							list.push('<option value="' + o.select[i] + '"' + (o.value==o.select[i] ? ' selected' : '') + '>' + o.select[i] + (o.suffix ? ' '+o.suffix : '') + '</option>');
						}
					} else {
						for (i in o.select) {
							list.push('<option value="' + i + '"' + (o.value==i ? ' selected' : '') + '>' + o.select[i] + (o.suffix ? ' '+o.suffix : '') + '</option>');
						}
					}
					break;
			}
			txt.push('<select' + o.real_id + o.className + o.alt + '>' + list.join('') + '</select>');
		} else if (o.multiple) {
			if (isArray(o.value)) {
				for (i = 0; i < o.value.length; i++) {
					list.push('<option>'+o.value[i]+'</option>');
				}
			} else if (isObject(o.value)) {
				for (i in o.value) {
					list.push('<option>'+o.value[i]+'</option>');
				}
			}
			txt.push('<select style="width:100%;clear:both;" class="golem_multiple" multiple' + o.real_id + '>' + list.join('') + '</select><br>');
			if (typeof o.multiple === 'string') {
				txt.push('<input class="golem_select" type="text" size="' + o.size + '">');
			} else {
				list = [];
				switch (typeof o.multiple) {
					case 'number':
						step = Divisor(o.select);
						for (i=0; i<=o.multiple; i+=step) {
							list.push('<option>' + i + '</option>');
						}
						break;
					case 'array':
					case 'object':
						if (isArray(o.multiple)) {
							for (i=0; i<o.multiple.length; i++) {
								list.push('<option value="' + o.multiple[i] + '">' + o.multiple[i] + (o.suffix ? ' '+o.suffix : '') + '</option>');
							}
						} else {
							for (i in o.multiple) {
								list.push('<option value="' + i + '">' + o.multiple[i] + (o.suffix ? ' '+o.suffix : '') + '</option>');
							}
						}
						break;
				}
				txt.push('<select class="golem_select">'+list.join('')+'</select>');
			}
			txt.push('<input type="button" class="golem_addselect" value="Add" /><input type="button" class="golem_delselect" value="Del" />');
		}
		if (o.after) {
			txt.push(' '+o.after);
		}
		if (o.label && (o.text || o.checkbox || o.select || o.multiple)) {
			txt.push('</span>');
		}
		$option = $('<div class="ui-helper-clearfix">' + txt.join('') + '</div>');
		$('textarea', $option).autoSize();
		if (o.require || o.advanced || o.debug || o.exploit) {
			try {
				r = {depth:0};
				r.require = {};
				if (o.advanced) {
					r.require.advanced = true;
					$option.addClass('red');
				}
				if (o.debug) {
					r.require.debug = true;
					$option.addClass('blue');
				}
				if (o.exploit) {
					r.require.exploit = true;
					$option.addClass('purple').css({border:'1px solid red'});
				}
				if (o.require) {
					r.require.x = new Script(o.require, {'default':worker.name + '.option'});
				}
				this.temp.require.push(r.require);
				$option.attr('id', 'golem_require_'+(this.temp.require.length-1)).css('display', this.checkRequire(this.temp.require.length - 1) ? '' : 'none');
			} catch(e) {
				log(LOG_ERROR, e.name + ' in createRequire(' + o.require + '): ' + e.message);
			}
		}
	}
	if (o.help) {
		$option.attr('title', o.help);
	}
	return $option;
};

/** @this {Worker} */
Config.checkRequire = function(id) {
	var i, show = true, require;
	if (!isNumber(id) || !(require = this.temp.require[id])) {
		for (i=0; i<this.temp.require.length; i++) {
			arguments.callee.call(this, i);
		}
		return;
	}
	if (require.advanced) {
		show = Config.option.advanced;
	}
	if (require.debug) {
		show = Config.option.debug;
	}
	if (show && require.exploit) {
		show = Config.option.exploit;
	}
	if (show && require.x) {
		show = require.x.run();
	}
	if (require.show !== show) {
		require.show = show;
		$('#golem_require_'+id).css('display', show ? '' : 'none');
	}
	return show;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Dashboard:true, History, Page:true, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Dashboard **********
* Displays statistics and other useful info
*/
var Dashboard = new Worker('Dashboard');
Dashboard.temp = null;

Dashboard.settings = {
	taint:true
};

Dashboard.option = {
	display:true,
	expand:false,
	active:'Dashboard',
	width:600,
	height:183
};

/** @this {Worker} */
Dashboard.init = function(old_revision) {
	// BEGIN: Changing this.option.display to a bool
	if (old_revision <= 1110) {
		this.option.display = (this.option.display === true || this.option.display === 'block');
	}
	// END
	var i, j, list = [], tabs = [], divs = [], active = this.option.active, hide, selected = 0;
	if (!Workers[active]) {
		this.set('option.active', active = this.name);
	}
	for (i in Workers) {
		if (i !== this.name && Workers[i].dashboard) {
			list.push(i);
		}
	}
	list.sort();
	list.unshift(this.name);
	for (j=0; j<list.length; j++) {
		i = list[j];
		hide = Workers[i]._get(['option','_hide_dashboard'], false) || (Workers[i].settings.advanced && !Config.option.advanced) || (Workers[i].settings.debug && !Config.option.debug);
		if (this.option.active === i) { // Make sure we can see the active worker
			if (hide) {
				this.set(['option','active'], this.name);
			} else {
				selected = j
			}
		}
		tabs.push('<li class="' + (hide ? 'ui-helper-hidden' : '') + (Workers[i].settings.advanced ? ' red' : Workers[i].settings.debug ? ' blue' : '') + '"><a href="#golem-dashboard-' + i + '">' + (i===this.name ? '&nbsp;*&nbsp;' : i) + '</a></li>');
		divs.push('<div id="golem-dashboard-' + i + '"></div>');
		this._watch(Workers[i], 'data');
		this._watch(Workers[i], 'option._hide_dashboard');
	}
	$('#golem').append('<div id="golem-dashboard" class="ui-corner-none" style="position:absolute;' + (this.option.display ? '' : 'display:none;') + '"><ul class="ui-corner-none">' + tabs.join('') + '</ul><div>' + divs.join('') + '</div></div>');
	$('<a style="position:absolute;top:3px;right:3px;" class="ui-icon ui-icon-circle-' + (this.option.expand ? 'minus' : 'plus') + '"></a>').click(function(event){
		$(this).toggleClass('ui-icon-circle-minus ui-icon-circle-plus');
		Dashboard.toggle(['option','expand']);
	}).appendTo('#golem-dashboard');
	$('#golem-dashboard')
		.tabs({
			fx: {opacity:'toggle', duration:100},
			selected: selected,
			show: function(event,ui) {
				Dashboard.set(['option','active'], Worker.find(ui.panel.id.slice('golem-dashboard-'.length)).name);
				Dashboard._update(null, 'run');
			}
		});
	Config.addButton({
		id:'golem_icon_dashboard',
		image:'dashboard',
		title:'Show Dashboard',
		active:this.option.display,
		className:this.option.display ? 'green' : '',
		click:function(){
			$(this).toggleClass('golem-button golem-button-active green');
			$('#golem-dashboard').stop()[Dashboard.toggle(['option','display'], true) ? 'fadeIn' : 'fadeOut']('fast');
		}
	});
	$('#golem-dashboard thead th').live('click', function(event){
		var $this = $(this), worker = Workers[Dashboard.option.active];
		worker._unflush();
		worker.dashboard($this.index(), $this.attr('name')==='sort');
	});
	this._resize();
	this._trigger('#'+APPID_+'app_body_container, #'+APPID_+'globalContainer', 'page_change');
	this._watch(this, 'option.active');
	this._watch(this, 'option.expand');
	this._watch(Config, 'option.advanced');
	this._watch(Config, 'option.debug');
};

/** @this {Worker} */
Dashboard.update = function(event, events) {
	var i, advanced, debug, show, $el, offset, width, height, margin = 0;
	if (events.findEvent(Config, 'watch', 'option.advanced') || events.findEvent(Config, 'watch', 'option.debug') || events.findEvent(null, 'watch', 'option._hide_dashboard')) {
		advanced = Config.get(['option','advanced'], false);
		debug = Config.get(['option','debug'], false);
		for (i in Workers) {
			show = (!Workers[i].settings.advanced || advanced) && (!Workers[i].settings.debug || debug) && !Workers[i]._get(['option','_hide_dashboard'], false);
			$('#golem-dashboard .ui-tabs-nav a[href*="'+i+'"]').parent().toggleClass('ui-helper-hidden', !show);
			if (!show && this.option.active === i) {
				this.set(['option','active'], this.name);
			}
		}
		return;
	}
	if (events.findEvent(this, 'watch', 'option.active')
	 || events.findEvent(this.option.active, 'watch', 'data')
	 || events.findEvent(this, 'init')) {
		try {
			Workers[this.option.active]._unflush();
			Workers[this.option.active].dashboard();
		}catch(e) {
			log(LOG_ERROR, e.name + ' in ' + this.option.active + '.dashboard(): ' + e.message);
		}
	}
	if (events.findEvent(this, 'watch', 'option.active')) {
		$('#golem-dashboard').tabs('option', 'selected', $('#golem-dashboard-'+this.option.active).index());
	}
	if ((event = events.findEvent(this, 'resize'))
	 || (event = events.findEvent(this, 'trigger'))
	 || (event = events.findEvent(this, 'init'))
	 || events.findEvent(this, 'watch', 'option.expand')) { // Make sure we're always in the right place
		if (this.get(['option','expand'], false)) {
			$el = $('#contentArea,#globalcss').eq(0);
			width = $el.width();
			height = $el.height();
			margin = 10;
		} else {
			$el = $('#'+APPID_+'app_body_container');
			width = this.get(['option','width'], 0);
			height = this.get(['option','height'], 0);
		}
		offset = $el.offset();
		$('#golem-dashboard')[event ? 'css' : 'animate']({'top':offset.top + margin, 'left':offset.left + margin, 'width':width - (2 * margin), 'height':height - (2 * margin)});
	}
	return true;
};

/** @this {Worker} */
Dashboard.dashboard = function() {
	var i, list = [];
	for (i in this.data) {
		if (!Workers[i]._get(['option','_hide_status'], false)) {
			list.push('<tr><th>' + i + ':</th><td id="golem-status-' + i + '">' + this.data[i] + '</td></tr>');
		}
	}
	list.sort(); // Ok with plain text as first thing that can change is name
	$('#golem-dashboard-Dashboard').html('<table cellspacing="0" cellpadding="0" class="golem-status">' + list.join('') + '</table>');
};

/** @this {Worker} */
Dashboard.status = function(worker, value) {
	var w = Worker.find(worker);
	if (w) {
		this.set(['data', w.name], value);
	}
};

/** @this {Worker} */
Dashboard.menu = function(worker, key) {
	if (worker) {
		this._unflush();
		if (!key) {
			var keys = [];
			if (this.data[worker.name]) {
				keys.push('status:' + (worker.get(['option','_hide_status'], false) ? '-' : '+') + 'Show&nbsp;Status');
			}
			if (worker.dashboard) {
				keys.push('dashboard:' + (worker.get(['option','_hide_dashboard'], false) ? '-' : '+') + 'Show&nbsp;Dashboard');
			}
			return keys;
		} else {
			switch (key) {
				case 'status':		worker.set(['option','_hide_status'], worker.option._hide_status ? undefined : true);	break;
				case 'dashboard':	worker.set(['option','_hide_dashboard'], worker.option._hide_dashboard ? undefined : true);	break;
			}
			this._notify('data');
		}
	}
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player, Config,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime, error:true, warn:true, log:true, getImage, isUndefined, script_started,
	makeImage
*/
/********** Worker.Debug **********
* Profiling information
*/
var Debug = new Worker('Debug');

Debug.settings = {
	system:true,
	unsortable:true,
	debug:true,
	taint:true
};

Debug.option = {
	timer:0,
	count:2,
	show:10,
	digits:1,
	total:false,
	prototypes:true,
	worker:'All',
	trace:4,
	logdef:LOG_LOG, // Default level when no LOG_* set...
	logexception:LOG_ERROR, // Default when it's an exception
	loglevel:LOG_INFO, // Maximum level to show (set by menu) - can turn off individual levels in Debug config
	logs:{
		0:{ /* LOG_INFO */	display:'info',	date:true,	revision:false,	worker:false,	stack:false,	prefix:''	},
		1:{ /* LOG_LOG */	display:'log',	date:true,	revision:false,	worker:true,	stack:false,	prefix:''	},
		2:{ /* LOG_WARN */	display:'warn',	date:true,	revision:true,	worker:true,	stack:false,	prefix:''	},
		3:{ /* LOG_ERROR */	display:'error',date:true,	revision:true,	worker:true,	stack:true,		prefix:''	},
		4:{ /* LOG_DEBUG */	display:'debug',date:true,	revision:true,	worker:true,	stack:true,		prefix:''	},
		5:{ /* LOG_USER1 */	display:'-',	date:true,	revision:false,	worker:true,	stack:false,	prefix:''	},
		6:{ /* LOG_USER2 */	display:'-',	date:true,	revision:false,	worker:true,	stack:false,	prefix:''	},
		7:{ /* LOG_USER3 */	display:'-',	date:true,	revision:false,	worker:true,	stack:false,	prefix:''	},
		8:{ /* LOG_USER4 */	display:'-',	date:true,	revision:false,	worker:true,	stack:false,	prefix:''	},
		9:{ /* LOG_USER5 */	display:'-',	date:true,	revision:false,	worker:true,	stack:false,	prefix:''	}
	}
};

Debug.runtime = {
	sort:2,
	rev:false,
	watch:false
};

Debug.display = [
	{
		title:'Function Profiling',
		group:[
			{
				id:'timer',
				label:'Refresh',
				select:{0:'Manual', 5:'5 seconds', 10:'10 seconds', 15:'15 seconds', 30:'30 seconds', 60:'1 minute'}
			},{
				id:'count',
				label:'Minimum Count',
				select:[0,1,2,3,4,5,10,15,20,25,50,100]
			},{
				id:'show',
				label:'Display Lines',
				select:{0:'All',10:10,20:20,30:30,40:40,50:50,60:60,70:70,80:80,90:90,100:100}
			},{
				id:'digits',
				label:'Time Digits',
				select:[1,2,3,4,5]
			},{
				id:'total',
				label:'Show Worker Totals',
				checkbox:true
			},{
				id:'prototypes',
				label:'Show Prototype Functions',
				checkbox:true
			},{
				id:'worker',
				label:'Worker',
				select:'worker_list'
			},{
				id:'trace',
				label:'Tracing',
				select:{0:'LOG_INFO', 1:'LOG_LOG', 2:'LOG_WARN', 3:'LOG_ERROR', 4:'LOG_DEBUG', 5:'LOG_USER1', 6:'LOG_USER2', 7:'LOG_USER3', 8:'LOG_USER4', 9:'LOG_USER5'}
			}
		]
	},{
		title:'Logging',
		group:[
			{
				id:'logdef',
				label:'Default log',
				select:{0:'LOG_INFO', 1:'LOG_LOG', 2:'LOG_WARN', 3:'LOG_ERROR', 4:'LOG_DEBUG', 5:'LOG_USER1', 6:'LOG_USER2', 7:'LOG_USER3', 8:'LOG_USER4', 9:'LOG_USER5'},
				help:'This is for log() lines that do not have an exception or LOG_* as the first argument'
			},{
				id:'logexception',
				label:'Default exception',
				select:{0:'LOG_INFO', 1:'LOG_LOG', 2:'LOG_WARN', 3:'LOG_ERROR', 4:'LOG_DEBUG', 5:'LOG_USER1', 6:'LOG_USER2', 7:'LOG_USER3', 8:'LOG_USER4', 9:'LOG_USER5'},
				help:'This is for log() lines that have an exception as the first argument'
			},{
				group:function() {
					var i, options = [], levels = ['Info', 'Log', 'Warn', 'Error', 'Debug', 'User1', 'User2', 'User3', 'User4', 'User5'];
					for (i=0; i<levels.length; i++) {
						options.push({
							title:i + ': ' + levels[i],
							group:[
								{
									id:'logs.'+i+'.display',
									label:'Display',
									select:{'-':'Disabled', 'info':'console.info()', 'log':'console.log()', 'warn':'console.warn()', 'error':'console.error()', 'debug':'console.debug()'}
								},{
									id:'logs.'+i+'.date',
									label:'Timestamp',
									select:{'-':'None', 'G:i':'13:24', 'G:i:s':'13:24:56', 'G:i:s.u':'13:24:56.001', 'D G:i':'Mon 13:24', 'D G:i:s':'Mon 13:24:56', 'D G:i:s.u':'Mon 13:24:56.001'}
								},{
									id:'logs.'+i+'.prefix',
									label:'Prefix',
									text:true
								},{
									id:'logs.'+i+'.revision',
									label:'Revision',
									checkbox:true
								},{
									id:'logs.'+i+'.worker',
									label:'Worker',
									checkbox:true
								},{
									id:'logs.'+i+'.stack',
									label:'Stack',
									checkbox:true
								}
							]
						});
					}
					return options;
				}
			}
		]
	}
];

Debug.stack = [];// Stack tracing = [[time, worker, function, args], ...]

/** @this {Worker} */
Debug.setup = function(old_revision) {
	var i, j, p, wkr, fn;
	// BEGIN Change of log options
	if (old_revision <= 1111 && this.option.log) {
		this.set(['option','logs','0','display'], this.get(['option','log','0'], 'info'));
		this.set(['option','logs','1','display'], this.get(['option','log','1'], 'log'));
		this.set(['option','logs','2','display'], this.get(['option','log','2'], 'warn'));
		this.set(['option','logs','3','display'], this.get(['option','log','3'], 'error'));
		this.set(['option','logs','4','display'], this.get(['option','log','4'], 'debug'));
		this.set(['option','log']);
	}
	if (old_revision <= 1112 && this.option.logs) {
		for (i in this.option.logs) {
			if (isBoolean(this.option.logs[i].date)) {
				this.set(['option','logs',i,'date'], this.option.logs[i].date ? 'G:i:s' : '-');
			}
		}
	}
	if (old_revision <= 1112 && isBoolean(this.option.trace)) {
		this.set(['option','trace'], this.option.trace ? LOG_DEBUG : LOG_LOG);
	}
	// END
	// Go through every worker and replace their functions with a stub function
	Workers['__fake__'] = null;// Add a fake worker for accessing Worker.prototype
	for (i in Workers) {
		for (p=0; p<=1; p++) {
			wkr = (i === '__fake__' ? (p ? Worker.prototype : null) : (p ? Workers[i] : Workers[i].defaults[APP])) || {};
			for (j in wkr) {
				if (isFunction(wkr[j]) && wkr.hasOwnProperty(j) && !/^_.*_$/.test(j)) {// Don't overload functions using _blah_ names - they're speed conscious
					fn = wkr[j];
					wkr[j] = function() {
						var i, t, r, ac = arguments.callee, w = (ac._worker || (this ? this.name : null)), l = [], s;
						Debug.stack.unshift([0, w || '', arguments]);
						try {
							if (Debug.option._disabled) {
								r = ac._orig.apply(this, arguments);
							} else {
								if (w) {
									l = [w+'.'+ac._name, w];
								}
								if (!ac._worker) {
									l.push('_worker.'+ac._name);
								}
								t = Date.now();
								r = ac._orig.apply(this, arguments);
								t = Date.now() - t;
								if (Debug.stack.length > 1) {
									Debug.stack[1][0] += t;
								}
								while ((i = l.shift())) {
									w = Debug.temp[i] = Debug.temp[i] || [0,0,0,false];
									w[0]++;
									w[1] += t - Debug.stack[0][0];
									w[2] += t;
									if (Debug.temp[i][3]) {
										log(Debug.option.trace, i + '(' + JSON.shallow(arguments, 3).replace(/^\[?|\]?$/g, '') + ') => ' + JSON.shallow(isUndefined(r) ? null : r, 2).replace(/^\[?|\]?$/g, ''));
									}
								}
							}
						} catch(e) {
							log(e, isString(e) ? e : e.name + ': ' + e.message);
						}
						Debug.stack.shift();
						return r;
					};
					wkr[j]._name = j;
					wkr[j]._orig = fn;
					if (i !== '__fake__') {
						wkr[j]._worker = i;
						Debug.temp[i+'.'+j] = Debug.temp[i+'.'+j] || [0,0,0,false];
					}
				}
			}
		}
	}
	delete Workers['__fake__']; // Remove the fake worker
	// Replace the global logging function for better log reporting
	log = function(level, txt /*, obj, array etc*/){
		var i, j, worker, name, line = '', level, tmp, stack, args = Array.prototype.slice.call(arguments), prefix = [], suffix = [], display = '-';
		if (isNumber(args[0])) {
			level = Math.range(0, args.shift(), 9);
		} else if (isError(args[0])) {
			tmp = args.shift();
			if (browser === 'chrome' && isString(tmp.stack)) {
				stack = tmp.stack.split("\n");
			}
			level = Debug.get(['option','logexception'], LOG_ERROR);
		} else {
			level = Debug.get(['option','logdef'], LOG_LOG);
		}
		if (isNumber(level)
		 && level <= Debug.get(['option','loglevel'], LOG_LOG)
		 && (display = Debug.get(['option','logs',level,'display'], '-')) !== '-') {
			if ((tmp = Debug.get(['option','logs',level,'prefix'], false))) {
				prefix.push(tmp);
			}
			if (Debug.get(['option','logs',level,'revision'], false)) {
				prefix.push('[' + (isRelease ? 'v'+version : 'r'+revision) + ']');
			}
			if ((tmp = Debug.get(['option','logs',level,'date'], '-')) !== 'tmp') {
				prefix.push('[' + (new Date()).format(tmp) + ']');
			}
			if (Debug.get(['option','logs',level,'worker'], false)) {
				tmp = [];
				for (i=0; i<Debug.stack.length; i++) {
					if (!tmp.length || Debug.stack[i][1] !== tmp[0]) {
						tmp.unshift(Debug.stack[i][1]);
					}
				}
				prefix.push(tmp.join('->'));
			}
/*
e.stack contents by browser:
CHROME:
ReferenceError: abc is not defined
    at Worker.<anonymous> (chrome-extension://pjopfpjfmcdkjjokkbijcehcjhmijhbm/worker_+debug.js:251:6)
    at Worker.init (chrome-extension://pjopfpjfmcdkjjokkbijcehcjhmijhbm/worker_+debug.js:152:22)
    at Worker.<anonymous> (chrome-extension://pjopfpjfmcdkjjokkbijcehcjhmijhbm/worker.js:345:9)
    at Worker._init (chrome-extension://pjopfpjfmcdkjjokkbijcehcjhmijhbm/worker_+debug.js:152:22)
    at Worker.<anonymous> (chrome-extension://pjopfpjfmcdkjjokkbijcehcjhmijhbm/worker_+main.js:58:15)
    at Worker.<anonymous> (chrome-extension://pjopfpjfmcdkjjokkbijcehcjhmijhbm/worker.js:931:19)
    at chrome-extension://pjopfpjfmcdkjjokkbijcehcjhmijhbm/worker.js:559:33

GREASEMONKEY:
@jar:file:///C:/Users/Robin/AppData/Roaming/Mozilla/Firefox/Profiles/0cxznhqg.default/extensions/%7Be4a8a97b-f2ed-450b-b12d-ee082ba24781%7D.xpi!/components/greasemonkey.js:4452,(1111)
@jar:file:///C:/Users/Robin/AppData/Roaming/Mozilla/Firefox/Profiles/0cxznhqg.default/extensions/%7Be4a8a97b-f2ed-450b-b12d-ee082ba24781%7D.xpi!/components/greasemonkey.js:4330,(1111)
@jar:file:///C:/Users/Robin/AppData/Roaming/Mozilla/Firefox/Profiles/0cxznhqg.default/extensions/%7Be4a8a97b-f2ed-450b-b12d-ee082ba24781%7D.xpi!/components/greasemonkey.js:2185,(1111)
@jar:file:///C:/Users/Robin/AppData/Roaming/Mozilla/Firefox/Profiles/0cxznhqg.default/extensions/%7Be4a8a97b-f2ed-450b-b12d-ee082ba24781%7D.xpi!/components/greasemonkey.js:4330,([object Object],[object Array])
@jar:file:///C:/Users/Robin/AppData/Roaming/Mozilla/Firefox/Profiles/0cxznhqg.default/extensions/%7Be4a8a97b-f2ed-450b-b12d-ee082ba24781%7D.xpi!/components/greasemonkey.js:4975,([object Object],"run")
@jar:file:///C:/Users/Robin/AppData/Roaming/Mozilla/Firefox/Profiles/0cxznhqg.default/extensions/%7Be4a8a97b-f2ed-450b-b12d-ee082ba24781%7D.xpi!/components/greasemonkey.js:2814,(215)
@jar:file:///C:/Users/Robin/AppData/Roaming/Mozilla/Firefox/Profiles/0cxznhqg.default/extensions/%7Be4a8a97b-f2ed-450b-b12d-ee082ba24781%7D.xpi!/components/greasemonkey.js:2401,@:0,
*/
			if (Debug.get(['option','logs',level,'stack'], false)) {
				for (i=0; i<Debug.stack.length; i++) {
					worker = Debug.stack[i][1];
					name = Debug.stack[i][2].callee._name;
					if (stack && browser === 'chrome') { // Chrome format stack trace
						while (tmp = stack.shift()) {
							if (tmp.indexOf('Worker.'+name+' ') >= 0 && tmp.indexOf(worker.toLowerCase()) >= 0) {
								break;
							}
							line = ' <' + tmp.regex(/\/([^\/]+:\d+:\d+)\)$/i) + '>'; // We're the anonymous function before the real call
						}
					}
					suffix.unshift('->' + worker + '.' + name + '(' + JSON.shallow(Debug.stack[i][2],2).replace(/^\[|\]$/g,'') + ')' + line);
					for (j=1; j<suffix.length; j++) {
						suffix[j] = '  ' + suffix[j];
					}
				}
				if (!suffix.length) { // Sometimes we're called from a handler
					suffix.push('-> unknown');
				}
				suffix.unshift(''); // Force an initial \n before the stack trace
				if (args.length > 1) {
					suffix.push(''); // Force an extra \n after the stack trace if there's more args
				}
			}
			if (!isString(args[0]) && !isNumber(args[0])) { // If we want to pass a single object for inspection
				args.unshift('');
			}
			args[0] = prefix.join(' ') + (prefix.length && args[0] ? ': ' : '') + (args[0] || '') + suffix.join("\n");
			try {
				console[display] ? console[display].apply(console.firebug ? window : console, args) : console.log.apply(console.firebug ? window : console, args);
			} catch(e) { // FF4 fix - doesn't like .apply
				console[display] ? console[display](args) : console.log(args);
			}
		}
	};
};

/** @this {Worker} */
Debug.init = function(old_revision) {
	var i, list = [];
	// BEGIN: Change log message type from on/off to debug level
	if (old_revision <= 1097) {
		var type = ['info', 'log', 'warn', 'error', 'debug'];
		for (i in this.option.log) {
			if (this.option.log[i] === true) {
				this.option.log[i] = type[i];
			} else if (this.option.log[i] === false) {
				this.option.log[i] = '-';
			}
		}
		delete this.option.console;
	}
	// END
	for (i in Workers) {
		list.push(i);
	}
	Config.set('worker_list', ['All', '_worker'].concat(list.unique().sort()));
	Config.addButton({
		image:'bug',
		advanced:true,
		className:'blue',
		title:'Bug Reporting',
		click:function(){
			window.open('http://code.google.com/p/game-golem/wiki/BugReporting', '_blank'); 
		}
	});
};

/** @this {Worker} */
Debug.update = function(event, events) {
	if (events.findEvent(this, 'init')
	 || events.findEvent(this, 'option')) {
		if (this.option.timer) {
			this._revive(this.option.timer, 'timer');
		} else {
			this._forget('timer');
		}
	}
	if (events.findEvent(this, 'init')
	 || events.findEvent(this, 'option')
	 || events.findEvent(this, 'reminder')) {
		this._notify('data'); // Any changes to options should force a dashboard update
	}
	return true;
};

Debug.work = function(){};// Stub so we can be disabled

/** @this {Worker} */
Debug.menu = function(worker, key) {
	if (!worker) {
		if (!isUndefined(key)) {
			this.set(['option','loglevel'], parseInt(key, 10));
		} else if (Config.option.advanced || Config.option.debug) {
			var levels = [
				':<img src="' + getImage('bug') + '"><b>Log Level</b>',
				'0:' + (this.option.loglevel === 0 ? '=' : '') + 'Info',
				'1:' + (this.option.loglevel === 1 ? '=' : '') + 'Log',
				'2:' + (this.option.loglevel === 2 ? '=' : '') + 'Warn',
				'3:' + (this.option.loglevel === 3 ? '=' : '') + 'Error',
				'4:' + (this.option.loglevel === 4 ? '=' : '') + 'Debug'
			];
			if (Config.option.debug) {
				levels = levels.concat(
					'5:' + (this.option.loglevel === 5 ? '=' : '') + 'User1',
					'6:' + (this.option.loglevel === 6 ? '=' : '') + 'User2',
					'7:' + (this.option.loglevel === 7 ? '=' : '') + 'User3',
					'8:' + (this.option.loglevel === 8 ? '=' : '') + 'User4',
					'9:' + (this.option.loglevel === 9 ? '=' : '') + 'User5'
				);
			}
			return levels;
		}
	}
};

/** @this {Worker} */
Debug.dashboard = function(sort, rev) {
	var i, o, list = [], order = [], output = [], data = this.temp, total = 0, rx = new RegExp('^'+this.option.worker);
	for (i in data) {
		if (data[i][0] >= this.option.count && (this.option.total || i.indexOf('.') !== -1) && (this.option.prototypes || !/^[^.]+\._/.test(i)) && (this.option.worker === 'All' || rx.test(i))) {
			order.push(i);
		}
		if (i.indexOf('.') === -1) {
			total += parseInt(data[i][1], 10);
		}
	}
	this.runtime.sort = sort = isUndefined(sort) ? (this.runtime.sort || 0) : sort;
	this.runtime.rev = rev = isUndefined(rev) ? (this.runtime.rev || false) : rev;
	order.sort(function(a,b) {
		switch (sort) {
			case 0:	return (a).localeCompare(b);
			case 1: return data[b][0] - data[a][0];
			case 2: return data[b][1] - data[a][1];
			case 3: return data[b][2] - data[a][2];
			case 4: return (data[b][1]/data[b][0]) - (data[a][1]/data[a][0]);
			case 5: return (data[b][2]/data[b][0]) - (data[a][2]/data[a][0]);
			case 6: return ((data[b][2]/data[b][0])-(data[a][1]/data[a][0])) - ((data[a][2]/data[a][0])-(data[b][1]/data[b][0]));
		}
	});
	if (rev) {
		order.reverse();
	}
	list.push('<b>Estimated CPU Time:</b> ' + total.addCommas() + 'ms, <b>Efficiency:</b> ' + (100 - (total / (Date.now() - script_started) * 100)).addCommas(2) + '% <span style="float:right;">' + (this.option.timer ? '' : '&nbsp;<a id="golem-profile-update">update</a>') + '&nbsp;<a id="golem-profile-reset" style="color:red;">reset</a>&nbsp;</span><br style="clear:both">');
	th(output, 'Function', 'style="text-align:left;"');
	th(output, 'Count', 'style="text-align:right;"');
	th(output, 'Time', 'style="text-align:right;"');
	th(output, '&Psi; Time', 'style="text-align:right;"');
	th(output, 'Average', 'style="text-align:right;"');
	th(output, '&Psi; Average', 'style="text-align:right;"');
	th(output, '&Psi; Diff', 'style="text-align:right;"');
	list.push('<table cellspacing="0" style="width:100%"><thead><tr>' + output.join('') + '</tr></thead><tbody>');
	for (i=0; i<Math.min(this.option.show || Number.POSITIVE_INFINITY,order.length); i++) {
		output = [];
		o = order[i];
		th(output, '<input style="margin:0;" type="checkbox" name="'+o+'"' + (data[o][3] ? ' checked' : '') + (o.indexOf('.') >= 0 ? '' : ' disabled') + '> ' + o, 'style="text-align:left;"');
		o = data[o];
		td(output, o[0].addCommas(), 'style="text-align:right;"');
		td(output, o[1].addCommas() + 'ms', 'style="text-align:right;"');
		td(output, o[2].addCommas() + 'ms', 'style="text-align:right;"');
		td(output, (o[1]/o[0] || 0).addCommas(this.option.digits) + 'ms', 'style="text-align:right;"');
		td(output, (o[2]/o[0] || 0).addCommas(this.option.digits) + 'ms', 'style="text-align:right;"');
		td(output, ((o[2]/o[0] || 0)-(o[1]/o[0] || 0)).addCommas(this.option.digits) + 'ms', 'style="text-align:right;"');
		tr(list, output.join(''));
	}
	list.push('</tbody></table>');
	$('#golem-dashboard-Debug').html(list.join(''));
	$('#golem-dashboard-Debug thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	$('#golem-dashboard-Debug input').change(function() {
		var name = $(this).attr('name');
		Debug.temp[name][3] = !Debug.temp[name][3];
	});
	$('#golem-profile-update').click(function(){Debug._notify('data');});
	$('#golem-profile-reset').click(function(){Debug.temp={};Debug._notify('data');});
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Global:true, History, Page:true, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Global **********
* Purely here for global options - save having too many system panels
*/
var Global = new Worker('Global');
Global.data = Global.runtime = Global.temp = null;
Global.option = {}; // Left in for config options

Global.settings = {
	system:true,
	unsortable:true,
	no_disable:true,
	taint:true
};

// Use .push() to add our own panel groups
Global.display = [];
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Dashboard, History:true, Page, Queue, Resources, Land,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime, warn,
	makeImage
*/
/********** Worker.History **********
* History of anything we want.
* Dashboard is exp, income and bank.
*
* History.set('key', value); - sets the current hour's value
* History.set([hour, 'key'], value); - sets the specified hour's value
* History.add('key', value); - adds to the current hour's value (use negative value to subtract)
* History.add([hour, 'key'], value); - adds to the specified hour's value (use negative value to subtract)
*
* History.get('key') - gets current hour's value
* History.get([hour, 'key', 'maths', 'change', recent_hours]) - 'key' is the only non-optional. Must be in this order. Hour = start hour. Recent_hours is 1-168 and the number of hours to get.
* History.get('key.change') - gets change between this and last value (use for most entries to get relative rather than absolute values)
* History.get('key.average') - gets standard deviated mean average of values (use .change for average of changes etc) - http://en.wikipedia.org/wiki/Arithmetic_mean
* History.get('key.geometric') - gets geometric average of values (use .change for average of changes etc) - http://en.wikipedia.org/wiki/Geometric_mean
* History.get('key.harmonic') - gets harmonic average of values (use .change for average of changes etc) - http://en.wikipedia.org/wiki/Harmonic_mean
* History.get('key.mode') - gets the most common value (use .change again if needed)
* History.get('key.median') - gets the center value if all values sorted (use .change again etc)
* History.get('key.total') - gets total of all values added together
* History.get('key.max') - gets highest value (use .change for highest change in values)
* History.get('key.min') - gets lowest value
*/
var History = new Worker('History');
History.option = History.runtime = History.temp = null;

History.settings = {
	system:true,
	taint:true
};

History.dashboard = function() {
	var list = [];
	list.push('<table cellspacing="0" cellpadding="0" class="golem-graph"><thead><tr><th></th><th colspan="73"><span style="float:left;">&lArr; Older</span>72 Hour History<span style="float:right;">Newer &rArr;</span><th></th></th></tr></thead><tbody>');
	list.push(this.makeGraph(['land', 'income'], 'Income', {prefix:'$', goal:{'Average Income':this.get('land.mean') + this.get('income.mean')}}));
	list.push(this.makeGraph('bank', 'Bank', {prefix:'$', goal:Land.runtime.best ? {'Next Land':Land.runtime.cost} : null})); // <-- probably not the best way to do this, but is there a function to get options like there is for data?
	list.push(this.makeGraph('exp', 'Experience', {goal:{'Next Level':Player.get('maxexp')}}));
	list.push(this.makeGraph('favor points', 'Favor Points',{min:0}));
	list.push(this.makeGraph('exp.change', 'Exp Gain', {min:0, goal:{'Average':this.get('exp.average.change'), 'Standard Deviation':this.get('exp.stddev.change')}} )); // , 'Harmonic Average':this.get('exp.harmonic.change') ,'Median Average':this.get('exp.median.change') ,'Mean Average':this.get('exp.mean.change')
	list.push('</tbody></table>');
	$('#golem-dashboard-History').html(list.join(''));
};

History.update = function(event) {
	var i, hour = Math.floor(Date.now() / 3600000) - 168;
	for (i in this.data) {
		if (i < hour) {
			this._set(['data',i]);
		}
	}
};

History.set = function(what, value, type) {
	var x = isArray(what) ? what.slice(0) : isString(what) ? what.split('.') : [];
	if (x.length && !(x[0] in this._datatypes)) {
		if (typeof x[0] !== 'number' && !/^\d+$/i.test(x[0])) {
			x.unshift(Math.floor(Date.now() / 3600000));
		}
		x.unshift('data');
	}
	return this._set(x, value, type);
};

History.add = function(what, value, type) {
	var x = isArray(what) ? what.slice(0) : isString(what) ? what.split('.') : [];
	if (x.length && !(x[0] in this._datatypes)) {
		if (typeof x[0] !== 'number' && !/^\d+$/i.test(x[0])) {
			x.unshift(Math.floor(Date.now() / 3600000));
		}
		x.unshift('data');
	}
	return this._add(x, value, type);
};

History.math = {
	stddev: function(list) {
		var i, l, listsum = 0, mean = this.mean(list);
		for (i = 0, l = list.length; i < l; i++) {
			listsum += Math.pow(list[i] - mean, 2);
		}
		listsum /= list.length;
		return Math.sqrt(listsum);
	},
	average: function(list) {
		var i, l, mean = this.mean(list), stddev = this.stddev(list);
		for (i = 0, l = list.length; i < l; i++) {
			if (Math.abs(list[i] - mean) > stddev * 2) { // The difference between the mean and the entry needs to be in there.
				delete list[i];
			}
		}
		return sum(list) / list.length;
	},
	mean: function(list) {
		return sum(list) / list.length;
	},
	harmonic: function(list) {
		var i, l, num = [];
		for (i = 0, l = list.length; i < l; i++) {
			if (list[i]) {
				num.push(1/list[i]);
			}
		}
		return num.length / sum(num);
	},
	geometric: function(list) {
		var i, l, num = 1;
		for (i = 0, l = list.length; i < l; i++) {
			num *= list[i] || 1;
		}
		return Math.pow(num, 1 / list.length);
	},
	median: function(list) {
		list.sort(function(a,b){return a-b;});
		if (list.length % 2) {
			return (list[Math.floor(list.length / 2)] + list[Math.ceil(list.length / 2)]) / 2;
		}
		return list[Math.floor(list.length / 2)];
	},
	mode: function(list) {
		var i = list.length, j = 0, count = 0, num = {}, max = 0;
		while (i--) {
			num[list[i]] = (num[list[i]] || 0) + 1;
		}
		for (i in num) {
			max = Math.max(max, num[i]);
		}
		for (i in num) {
			if (num[i] >= max) {
				j += i;
				count++;
			}
		}
		return j / count;
	},
	max: function(list) {
		list.sort(function(a,b){return b-a;});
		return list[0];
	},
	min: function(list) {
		list.sort(function(a,b){return a-b;});
		return list[0];
	}
};

History.get = function(what) {
	this._unflush();
	var i, j, value, last, list = [], data = this.data, x = isArray(what) ? what : isString(what) ? what.split('.') : [], hour, past, change = false;
	if (x.length && (isNumber(x[0]) || !x[0].regex(/\D/gi))) {
		hour = x.shift();
	} else {
		hour = Math.floor(Date.now() / 3600000);
	}
	if (x.length && (isNumber(x[x.length-1]) || !x[x.length-1].regex(/\D/gi))) {
		past = Math.range(1, parseInt(x.pop(), 10), 168);
	} else {
		past = 168;
	}
	if (x.length && x[x.length-1] === 'change') {
		x.pop();
		change = true;
	}
	if (!x.length) {
		return data;
	}
	if (x.length === 1) { // We want a single hourly value only
		past = change ? 1 : 0;
	}
	for (i=hour-past; i<=hour; i++) {
		if (data[i]) {
			last = value;
			value = null;
			for (j in data[i]) {
				if ((j === x[0] || j.indexOf(x[0] + '+') === 0) && isNumber(data[i][j])) {
					value = (value || 0) + data[i][j];
				}
			}
			if (x.length > 1 && isNumber(value)) {
				if (!change) {
					list.push(value);
				} else if (isNumber(last)) {
					list.push(value - last);
					if (isNaN(list[list.length - 1])) {
						log(LOG_WARN, 'NaN: '+value+' - '+last);
					}
				}
			}
		}
	}
	if (x.length === 1) {
		return change ? value - last : value;
	}
	if (History.math[x[1]]) {
		return History.math[x[1]](list);
	}
	throw('Wanting to get unknown History type ' + x[1] + ' on ' + x[0]);
};

History.getTypes = function(what) {
	var i, list = [], types = {}, data = this.data, x = what + '+';
	for (i in data) {
		if (i.indexOf(x) === 0) {
			types[i] = true;
		}
	}
	for (i in types) {
		list.push(i);
	}
	return list;
};

History.makeGraph = function(type, title, options) {
	var i, j, count, min = isNumber(options.min) ? options.min : Number.POSITIVE_INFINITY, max = isNumber(options.max) ? options.max : Number.NEGATIVE_INFINITY, max_s, min_s, goal_s = [], list = [], bars = [], output = [], value = {}, goalbars = '', divide = 1, suffix = '', hour = Math.floor(Date.now() / 3600000), numbers, prefix = options.prefix || '', goal;
	if (isNumber(options.goal)) {
		goal = [options.goal];
	} else if (!isArray(options.goal) && !isObject(options.goal)) {
		goal = null;
	} else {
		goal = options.goal;
	}
	if (goal && length(goal)) {
		for (i in goal) {
			if (goal.hasOwnProperty(i)) {
				min = Math.min(min, goal[i]);
				max = Math.max(max, goal[i]);
			}
		}
	}
	if (isString(type)) {
		type = [type];
	}
	for (i=hour-72; i<=hour; i++) {
		value[i] = [0];
		if (this.data[i]) {
			for (j in type) {
				if (type.hasOwnProperty(j)) {
					value[i][j] = this.get(i + '.' + type[j]);
				}
			}
			if ((j = sum(value[i]))) {
				min = Math.min(min, j);
				max = Math.max(max, j);
			}
		}
	}
	if (max >= 1000000000) {
		divide = 1000000000;
		suffix = 'b';
	} else if (max >= 1000000) {
		divide = 1000000;
		suffix = 'm';
	} else if (max >= 1000) {
		divide = 1000;
		suffix = 'k';
	}
	max = Math.ceil(max / divide) * divide;
	max_s = prefix + (max / divide).addCommas() + suffix;
	min = Math.floor(min / divide) * divide;
	min_s = prefix + (min / divide).addCommas() + suffix;
	if (goal && length(goal)) {
		for (i in goal) {
			if (goal.hasOwnProperty(i)) {
				bars.push('<div style="bottom:' + Math.max(Math.floor((goal[i] - min) / (max - min) * 100), 0) + 'px;"></div>');
				goal_s.push('<div' + (typeof i !== 'number' ? ' title="'+i+'"' : '') + ' style="bottom:' + Math.range(2, Math.ceil((goal[i] - min) / (max - min) * 100)-2, 92) + 'px;">' + prefix + (goal[i] / divide).addCommas(1) + suffix + '</div>');
			}
		}
		goalbars = '<div class="goal">' + bars.reverse().join('') + '</div>';
		goal_s.reverse();
	}
	th(list, '<div>' + max_s + '</div><div>' + title + '</div><div>' + min_s + '</div>');
	for (i=hour-72; i<=hour; i++) {
		bars = [];
		output = [];
		numbers = [];
		title = (hour - i) + ' hour' + ((hour - i)===1 ? '' : 's') +' ago';
		count = 0;
		for (j in value[i]) {
			if (value[i].hasOwnProperty(j)) {
				bars.push('<div style="height:' + Math.max(Math.ceil(100 * (value[i][j] - (!count ? min : 0)) / (max - min)), 0) + 'px;"></div>');
				count++;
				if (value[i][j]) {
					numbers.push((value[i][j] ? prefix + value[i][j].addCommas() : ''));
				}
			}
		}
		output.push('<div class="bars">' + bars.reverse().join('') + '</div>' + goalbars);
		numbers.reverse();
		title = title + (numbers.length ? ', ' : '') + numbers.join(' + ') + (numbers.length > 1 ? ' = ' + prefix + sum(value[i]).addCommas() : '');
		td(list, output.join(''), 'title="' + title + '"');
	}
	th(list, goal_s.join(''));
	return '<tr>' + list.join('') + '</tr>';
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$:true, Worker, Army, Main:true, History, Page:true, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP:true, APPID:true, APPNAME:true, userID:true, imagepath:true, isRelease, version, revision, Workers, PREFIX:true, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	unsafeWindow, log, warn, error, chrome
*/
/********** Worker.Main **********
* Initial kickstart of Golem.
*/
var Main = new Worker('Main');
Main.data = Main.option = Main.runtime = Main.temp = null;

Main.settings = {
	system:true,
	taint:true // Doesn't store any data, but still cleans it up lol
};

Main._apps_ = {};
Main._retry_ = 0;
Main._jQuery_ = false; // Only set if we're loading it

/**
 * Use this function to add more applications
 * @param {string} app The pathname of the app under facebook.com
 * @param {string} appid The facebook app id
 * @param {string} appname The human readable app name
 * @param {?RegExp=} alt An alternative domain for the app (make sure you include the protocol for security)
 * @param {?Function=} fn A function to call before _setup() when the app is recognised
 */
Main.add = function(app, appid, appname, alt, fn) {
	this._apps_[app] = [appid, appname, alt, fn];
};

Main.page = function() {
	try {
		var newpath = $('#app_content_'+APPID+' img:eq(0)').attr('src').pathpart();
		if (newpath) {
			imagepath = newpath;
		}
	} catch(e) {}
};

Main.update = function(event, events) { // Using events with multiple returns because any of them are before normal running and are to stop Golem...
	var i, old_revision, head, a, b, tmp;
	if (events.findEvent(null,null,'kickstart')) {
		old_revision = parseInt(localStorage['golem.' + APP + '.revision'] || 1061, 10); // Added code to support Revision checking in 1062;
		if (old_revision > revision) {
			if (!confirm('GAME-GOLEM WARNING!!!' + "\n\n" +
				'You have reverted to an earlier version of GameGolem!' + "\n\n" +
				'This may result in errors or other unexpected actions!' + "\n\n" +
				'Are you sure you want to use this earlier version?' + "\n" +
				'(selecting "Cancel" will prevent Golem from running and preserve your current data)')) {
				return true;
			}
			log(LOG_INFO, 'GameGolem: Reverting from r' + old_revision + ' to r' + revision);
		} else if (old_revision < revision) {
			log(LOG_INFO, 'GameGolem: Updating ' + APPNAME + ' from r' + old_revision + ' to r' + revision);
		}
		tmp = $('#rightCol');
		if (!tmp.length) {
			log(LOG_INFO, 'GameGolem: Unable to find DOM parent, using <body> instead...');
			tmp = $('body');
		}
		tmp.prepend('<div id="golem" style="visibility:hidden;"></div>'); // Set the theme from Theme.update('init')
		for (i in Workers) {
			Workers[i]._setup(old_revision);
		}
		for (i in Workers) {
			Workers[i]._init(old_revision);
		}
		for (i in Workers) {
			Workers[i]._update('init', 'run');
		}
		if (old_revision !== revision) {
			localStorage['golem.' + APP + '.revision'] = revision;
		}
		$('#golem').css({'visibility':''});
	}
	if (events.findEvent(null,'startup')) {
		// Let's get jQuery running
		if (!$ || !$.support || !$.ui) {
			if (!this._jQuery_) {
				head = document.getElementsByTagName('head')[0] || document.documentElement;
				a = document.createElement('script');
				b = document.createElement('script');
				a.type = b.type = 'text/javascript';
				a.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
				b.src = 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.12/jquery-ui.min.js';
				head.appendChild(a);
				head.appendChild(b);
				log(LOG_INFO, 'GameGolem: Loading jQuery & jQueryUI');
				this._jQuery_ = true;
			}
			if (!(unsafeWindow || window).jQuery || !(unsafeWindow || window).jQuery.support || !(unsafeWindow || window).jQuery.ui) {
				this._remind(0.1, 'startup');
				return true;
			}
			$ = (unsafeWindow || window).jQuery.noConflict(true);
		}
		// Stop us running twice if via Bookmarklet etc
		if ($('#golem').length) {
			log(LOG_INFO, 'GameGolem: Already installed!');
			return true;
		}
		// Identify Application
		if (!APP) {
			if (empty(this._apps_)) {
				log(LOG_INFO, 'GameGolem: No applications known...');
			}
			for (i in this._apps_) {
				if ((isFacebook = (window.location.pathname.indexOf(i) === 1)) || (isRegExp(this._apps_[i][2]) && this._apps_[i][2].test(window.location))) {
					APP = i;
					APPID = this._apps_[i][0];
					APPNAME = this._apps_[i][1];
					PREFIX = 'golem'+APPID+'_';
					if (isFacebook) {
						APPID_ = 'app' + APPID + '_';
					} else {
						APPID_ = '';
					}
					if (isFunction(this._apps_[APP][3])) {
						this._apps_[APP][3]();
					}
					log(LOG_INFO, 'GameGolem: Starting '+APPNAME);
					break;
				}
			}
			if (typeof APP === 'undefined') {
				log(LOG_INFO, 'GameGolem: Unknown application...');
				return true;
			}
		}
		// Once we hit this point we have our APP and can start things rolling
		try {
			//userID = (unsafeWindow || window).presence && parseInt((unsafeWindow || window).presence.user); //$('script').text().regex(/user:(\d+),/i);
			if (!userID || !isNumber(userID)) {
				userID = $('script').text().regex(/user:(\d+),/i);
			}
			if (!imagepath) {
				imagepath = $('#app_content_'+APPID+' img:eq(0)').attr('src').pathpart(); // #'+APPID_+'app_body_container
			}
		} catch(e) {
			if (Main._retry_++ < 5) {// Try 5 times before we give up...
				log(LOG_INFO, 'GameGolem: Unable to start properly (' + Main._retry_ + '/5)...');
				this._remind(1, 'startup');
				return true;
			}
		}
		if (!userID || !imagepath || !isNumber(userID)) {
			log(LOG_INFO, 'ERROR: Bad Page Load!!!');
			window.setTimeout(Page.reload, 5000); // Force reload without retrying
			return true;
		}
		// jQuery selector extensions
		$.expr[':'].css = function(obj, index, meta, stack) { // $('div:css(width=740)')
			var args = meta[3].regex(/([\w-]+)\s*([<>=]+)\s*(\d+)/), value = parseFloat($(obj).css(args[0]));
			switch(args[1]) {
				case '<':	return value < args[2];
				case '<=':	return value <= args[2];
				case '>':	return value > args[2];
				case '>=':	return value >= args[2];
				case '=':
				case '==':	return value === args[2];
				case '!=':	return value !== args[2];
				default:
					log(LOG_ERROR, 'Bad jQuery selector: $:css(' + args[0] + ' ' + args[1] + ' ' + args[2] + ')');
					return false;
			}
		};
		$.expr[':'].golem = function(obj, index, meta, stack) { // $('input:golem(worker,id)') - selects correct id
			var args = meta[3].toLowerCase().split(',');
			return $(obj).attr('id') === PREFIX + args[0].trim().replace(/[^0-9a-z]/g,'-') + '_' + args[1].trim();
		};
		$.expr[':'].regex = function(obj, index, meta, stack) { // $('div:regex(^\stest\s$)') - selects if the text() matches this
			var ac = arguments.callee, rx = ac['_'+meta[3]]; // Cache the regex - it's quite expensive to construct
			if (!rx) {
				rx = ac['_'+meta[3]] = new RegExp(meta[3],'i');
			}
			return rx.test($(obj).text());
		};
		// jQuery extra functions
		$.fn.autoSize = function() {
			function autoSize(e) {
				var p = (e = e.target || e), s;
				if ($(e).is(':visible')) {
					if (e.oldValueLength !== e.value.length) {
						while (p && !p.scrollTop) {p = p.parentNode;}
						if (p) {s = p.scrollTop;}
						e.style.height = '0px';
						e.style.height = Math.min(parseInt(e.style.maxHeight, 10) || 9999, Math.max(e.scrollHeight, 13)) + 'px';
						if (p) {p.scrollTop = s;}
						e.oldValueLength = e.value.length;
					}
				} else {
					window.setTimeout(function(){autoSize(e);}, 50);
				}
				return true;
			}
			this.filter('textarea').each(function(){
				$(this).css({'resize':'none','overflow-y':'hidden'}).unbind('.autoSize').bind('keyup.autoSize keydown.autoSize change.autoSize', autoSize);
				autoSize(this);
			});
			return this;
		};
		$.fn.selected = function() {
			return $(this).filter(function(){return this.selected;});
		};
		// Now we're rolling
		if (browser === 'chrome' && chrome && chrome.extension && chrome.extension.getURL) {
			$('head').append('<link href="' + chrome.extension.getURL('golem.css') + '" rel="stylesheet" type="text/css">');
		} else {
			$('head').append('<link href="http://rycochet.net/themes/default.css" rel="stylesheet" type="text/css">');
		}
		this._remind(0.1, 'kickstart'); // Give a (tiny) delay for CSS files to finish loading etc
	}
//	return true;
};

if (!Main.loaded) { // Prevent double-start
	log(LOG_INFO, 'GameGolem: Loading...');
	Main._loaded = true;// Otherwise .update() will never fire - no init needed for us as we're the one that calls it
	Main._update('startup');
}

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$:true, Worker, Army, Menu:true, History, Page:true, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP:true, APPID:true, APPNAME:true, userID:true, imagepath:true, isRelease, version, revision, Workers, PREFIX:true, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	unsafeWindow, log, warn, error, chrome
*/
/********** Worker.Menu **********
* Handles menu creation and selection for Config
*/
var Menu = new Worker('Menu');
Menu.data = Menu.runtime = Menu.option = Menu.temp = null;

Menu.settings = {
	system:true,
	taint:true
};

Menu.init = function() {
	Config._init(); // We patch into the output of Config.init so it must finish first
	$('<span class="ui-icon golem-menu-icon ui-icon-' + Theme.get('Menu_icon', 'gear') + '"></span>')
		.click(function(event) {
			var i, j, k, keys, hr = false, html = '', $this = $(this.wrappedJSObject || this), worker = Worker.find($this.closest('div').attr('name')), name = worker ? worker.name : '';
			if (Config.get(['temp','menu']) !== name) {
				Config.set(['temp','menu'], name);
				for (i in Workers) {
					if (Workers[i].menu) {
						hr = true;
						Workers[i]._unflush();
						keys = Workers[i].menu(worker) || [];
						for (j=0; j<keys.length; j++) {
							k = keys[j].regex(/([^:]*):?(.*)/);
							if (k[0] === '---') {
								hr = true;
							} else if (k[1]) {
								if (hr) {
									html += html ? '<hr>' : '';
									hr = false;
								}
								switch (k[1].charAt(0)) {
									case '!':	k[1] = '<img src="' + getImage('warning') + '">' + k[1].substr(1);	break;
									case '+':	k[1] = '<img src="' + getImage('tick') + '">' + k[1].substr(1);	break;
									case '-':	k[1] = '<img src="' + getImage('cross') + '">' + k[1].substr(1);	break;
									case '=':	k[1] = '<img src="' + getImage('dot') + '">' + k[1].substr(1);	break;
									default:	break;
								}
								html += '<div name="' + i + '.' + name + '.' + k[0] + '">' + k[1] + '</div>';
							}
						}
					}
				}
				$('#golem-menu').html(html || 'no&nbsp;options');
				$('#golem-menu').css({
					position:Config.get(['option','fixed']) ? 'fixed' : 'absolute',
					top:$this.offset().top + $this.height(),
					left:Math.min($this.offset().left, $('body').width() - $('#golem-menu').outerWidth(true) - 4)
				}).show();
			} else {// Need to stop it going up to the config panel, but still close the menu if needed
				Config.set(['temp','menu']);
				$('#golem-menu').hide();
			}
//			Worker.flush();
			event.stopPropagation();
			return false;
		})
		.appendTo('#golem_config_frame > h3:first,#golem_config > div > h3 > a');
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page:true, Queue, Resources, Global,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	log, warn, error
*/
/********** Worker.Page() **********
* All navigation including reloading
*/
var Page = new Worker('Page');

Page.settings = {
	system:true,
	keep:true,
	taint:true
};

Page.option = {
	timeout:15,
	reload:5,
	nochat:false,
	refresh:250
};

Page.temp = {
	loading:false,
	last:'', // Last url we tried to load
	when:null,
	retry:0, // Number of times we tried before hitting option.reload
	checked:false, // Finished checking for new pages
	count:0,
	enabled:false, // Set to true in .work(true) - otherwise Page.to() should throw an error
	page:'' // Old Page.page
};

Page.lastclick = null;

Page.runtime = {
	delay:0, // Delay used for bad page load - reset in Page.clear(), otherwise double to a max of 5 minutes
	timers:{}, // Tickers being displayed
	stale:{}
};

Page.pageNames = {}; //id:{url:'...', image:'filename.jpg', selector:'jquery selector'}

Page.pageCheck = []; // List of selectors that *must* match for a valid page load

Global.display.push({
	title:'Page Loading',
	group:[
		{
			id:['Page','option','timeout'],
			label:'Retry after',
			select:[10, 15, 30, 60],
			after:'seconds'
		},{
			id:['Page','option','reload'],
			label:'Reload after',
			select:[3, 5, 7, 9, 11, 13, 15],
			after:'tries'
		},{
			id:['Page','option','nochat'],
			label:'Remove Facebook Chat',
			checkbox:true,
			help:'This does not log you out of chat, only hides it from display and attempts to stop it loading - you can still be online in other facebook windows'
		},{
			id:['Page','option','refresh'],
			label:'Refresh After',
			select:{0:'Never', 50:'50 Pages', 100:'100 Pages', 150:'150 Pages', 200:'200 Pages', 250:'250 Pages', 500:'500 Pages'}
		}
	]
});

// We want this to run on the Global context
Global._overload(null, 'work', function(state) {
	var i, l, list, found = null;
	if (!Page.temp.checked) {
		for (i in Workers) {
			if (isString(Workers[i].pages)) {
				list = Workers[i].pages.split(' ');
				for (l=0; l<list.length; l++) {
					if (list[l] !== '*' && list[l] !== 'facebook' && Page.pageNames[list[l]] && !Page.pageNames[list[l]].skip && !Page.data[list[l]] && list[l].indexOf('_active') === -1) {
						found = list[l];
						break;
					}
				}
			}
			if (found) {
				break;
			}
		}
		if (found) {
			if (!state) {
				return QUEUE_CONTINUE;
			}
			Page.to(found);
			Page._set(['data', found], Date.now()); // Even if it's broken, we need to think we've been there!
			return QUEUE_CONTINUE;
		}
	//	arguments.callee = new Function();// Only check when first loading, once we're running we never work() again :-P
		Page.set(['temp','checked'], true);
	}
	if (Page.option.refresh && Page.temp.count >= Page.option.refresh) {
		if (state) {
			if (!$('#reload_link').length) {
				$('body').append('<a id="reload_link" href="http://www.cloutman.com/reload.php">reload</a>');
			}
			Page.click('#reload_link');
		}
		return QUEUE_CONTINUE;
	}
	return this._parent();
});

Page.init = function() {
	this._trigger('#'+APPID_+'app_body_container, #'+APPID_+'globalContainer', 'page_change');
	this._trigger('.generic_dialog_popup', 'facebook');
	if (this.option.nochat) {
		$('#fbDockChat').hide();
	}
	$('.golem-link').live('click', function(event){
		if (!Page.to($(this).attr('href'), null, false)) {
			return false;
		}
	});
	this._revive(1, 'timers');// update() once every second to update any timers
};

Page.update = function(event, events) {
	// Can use init as no system workers (which can come before us) care what page we are on
	var i, list, now = Date.now(), time;
	if (events.findEvent(null,'reminder','timers')) {
		for (i in this.runtime.timers) {
			time = (this.runtime.timers[i] - now) / 1000;
			if (time <= -604800) { // Delete old timers 1 week after "now?"
				this.set(['runtime','timers',i]);
			} else {
				$('#'+i).text(time > 0 ? makeTimer(time) : 'now?')
			}
		}
	}
	if (events.findEvent(null,'reminder','retry')) {
		this.retry();
	}
	if (events.findEvent(null,'init') || events.findEvent(null,'trigger','page_change')) {
		list = this.pageCheck;
//		log('Page change noticed...');
		this._forget('retry');
		this.set(['temp','loading'], false);
		for (i=0; i<list.length; i++) {
			if (!$(list[i]).length) {
				log(LOG_WARN, 'Bad page warning: Unabled to find '+list[i]);
				this.retry();
				return;
			}
		}
		// NOTE: Need a better function to identify pages, this lot is bad for CPU
		this.temp.page = '';
		$('img', $('#'+APPID_+'app_body')).each(function(i,el){
			var i, filename = $(el).attr('src').filepart();
			for (i in Page.pageNames) {
				if (Page.pageNames[i].image && filename === Page.pageNames[i].image) {
					Page.temp.page = i;
//					log(LOG_DEBUG, 'Page:' + Page.temp.page);
					return;
				}
			}
		});
		if (this.temp.page === '') {
			for (i in this.pageNames) {
				if (this.pageNames[i].selector && $(this.pageNames[i].selector).length) {
					this.temp.page = i;
//					log(LOG_DEBUG, 'Page:' + this.temp.page);
				}
			}
		}
		if (this.temp.page !== '') {
			this.set(['data',this.temp.page], Date.now());
			this.set(['runtime', 'stale', this.temp.page]);
		}
//		log(LOG_WARN, 'Page.update: ' + (this.temp.page || 'Unknown page') + ' recognised');
		list = {};
		for (i in Workers) {
			if (Workers[i].pages
			 && Workers[i].pages.indexOf
			 && (Workers[i].pages.indexOf('*') >= 0 || (this.temp.page !== '' && Workers[i].pages.indexOf(this.temp.page) >= 0))
			 && Workers[i]._page(this.temp.page, false)) {
				list[i] = true;
			}
		}
		for (i in list) {
			Workers[i]._page(this.temp.page, true);
		}
	}
	if (events.findEvent(null,'trigger','facebook')) { // Need to act as if it's a page change
		this._forget('retry');
		this.set(['temp', 'loading'], false);
		for (i in Workers) {
			if (Workers[i].page && Workers[i].pages && Workers[i].pages.indexOf('facebook') >= 0) {
				Workers[i]._page('facebook', false);
			}
		}
	}
	return true;
};

Page.makeURL = function(url, args) {
	var abs = 'apps.facebook.com/' + APP + '/';
	if (url in this.pageNames) {
		url = this.pageNames[url].url;
	} else {
		if (url.indexOf(abs) !== -1) {// Absolute url within app
			url = url.substr(abs.length);
		}
	}
	if (isString(args) && args.length) {
		url += (/^\?/.test(args) ? '' : '?') + args;
	} else if (isObject(args)) {
		url += '?' + decodeURIComponent($.param(args));
	}
	return url;
};

Page.makeLink = function(url, args, content) {
	var page = this.makeURL(url, args);
	return '<a href="' + window.location.protocol + '//apps.facebook.com/' + APP + '/' + page + '" onclick="' + (APPID_==='' ? '' : 'a'+APPID+'_') + 'ajaxLinkSend(&#039;globalContainer&#039;,&#039;' + page + '&#039;);return false;' + '">' + content + '</a>';
};

/*
Page.to('index', ['args' | {arg1:val, arg2:val},] [true|false]
*/
Page.to = function(url, args, force) { // Force = true/false (allows to reload the same page again)
	if (!this.temp.enabled) {
		log(LOG_ERROR, 'BAD_FUNCTION_USE in Page.to('+JSON.shallow(arguments,2)+'): Not allowed to use Page.to() outside .work(true)');
		return true;
	}
	var page = this.makeURL(url, args);
//	if (Queue.option.pause) {
//		log(LOG_ERROR, 'Trying to load page when paused...');
//		return true;
//	}
	if (!page || (!force && page === (this.temp.last || this.temp.page))) {
		return true;
	}
	if (page !== (this.temp.last || this.temp.page)) {
		this.clear();
		this.set(['temp','last'], page);
		this.set(['temp','when'], Date.now());
		this.set(['temp','loading'], true);
		log('Navigating to ' + page);
	} else if (force) {
		window.location.href = 'javascript:void((function(){})())';// Force it to change
	}
	window.location.href = /^https?:/i.test(page) ? page : 'javascript:void(' + (APPID_==='' ? '' : 'a'+APPID+'_') + 'ajaxLinkSend("globalContainer","' + page + '"))';
	this._remind(this.option.timeout, 'retry');
	this.set(['temp','count'], this.get(['temp','count'], 0) + 1);
	return false;
};

Page.retry = function() {
	if (this.temp.reload || ++this.temp.retry >= this.option.reload) {
		this.reload();
	} else if (this.temp.last) {
		log(LOG_WARN, 'Page load timeout, retry '+this.temp.retry+'...');
		this.temp.enabled = true;
		this.to(this.temp.last, null, true);// Force
		this.temp.enabled = false;
	} else if (this.lastclick) {
		log(LOG_WARN, 'Page click timeout, retry '+this.temp.retry+'...');
		this.temp.enabled = true;
		this.click(this.lastclick);
		this.temp.enabled = false;
	} else {
		// Probably a bad initial page load...
		// Reload the page - but use an incrimental delay - every time we double it to a maximum of 5 minutes
		var delay = this.set(['runtime','delay'], Math.max((this.get(['runtime','delay'], 0) * 2) || this.get(['option','timeout'], 10), 300));
		this.set(['temp','reload'], true);
		this.set(['temp','loading'], true);
		this._remind(delay,'retry',{worker:this, type:'init'});// Fake it to force a re-check
		$('body').append('<div style="position:fixed;width:100%;top:50%;text-align:center;"><span style="font-size:36px;color:red;padding:0 4px 2px 4px;margin:-18px auto;background:white;border:1px solid red;border-radius:4px;">ERROR: Reloading in ' + Page.addTimer('reload',delay * 1000, true) + '</span></div>');
//		log(LOG_ERROR, 'Unexpected retry event.');
	}
};
		
Page.reload = function() {
	log('Page.reload()');
	window.location.replace(window.location.href);
};

Page.clearFBpost = function(obj) {
	var i, output = [];
	for (i=0; i<obj.length; i++) {
		if (obj[i].name.indexOf('fb_') !== 0) {
			output.push(obj[i]);
		}
	}
	if (!output.bqh && $('input[name=bqh]').length) {
		output.push({name:'bqh', value:$('input[name=bqh]').first().val()});
	}
	return output;
};

Page.click = function(el) {
	if (!this.temp.enabled) {
		log(LOG_ERROR, 'BAD_FUNCTION_USE in Page.click('+JSON.shallow(arguments,2)+'): Not allowed to use Page.click() outside .work(true)');
		return true;
	}
	if (!$(el).length) {
		log(LOG_ERROR, 'Page.click: Unable to find element - '+el);
		return false;
	}
	var e, element = $(el).get(0);
	if (this.lastclick !== el) {
		this.clear();
	}
	this.set(['runtime', 'delay'], 0);
	this.lastclick = el; // Causes circular reference when watching...
	this.set(['temp','when'], Date.now());
	this.set(['temp','loading'], true);
	e = document.createEvent("MouseEvents");
	e.initEvent("click", true, true);
	(element.wrappedJSObject ? element.wrappedJSObject : element).dispatchEvent(e);
	this._remind(this.option.timeout, 'retry');
	this.set(['temp','count'], this.get(['temp','count'], 0) + 1);
	return true;
};

Page.clear = function() {
	this.lastclick = null;
	this.set(['temp','last'], null);
	this.set(['temp','when'], null);
	this.set(['temp','retry'], 0);
	this.set(['temp','reload'], 0);
	this.set(['temp','loading'], false);
	this.set(['runtime','delay'], 0);
};

Page.addTimer = function(id, time, relative) {
	if (relative) {
		time = Date.now() + time;
	}
	this.set(['runtime','timers','golem_timer_'+id], time);
	return '<span id="golem_timer_'+id+'">' + makeTimer((time - Date.now()) / 1000) + '</span>';
};

Page.delTimer = function(id) {
	this.set(['runtime','timers','golem_timer_'+id]);
};

/**
 * Set a value in one of our _datatypes
 * @param {string} page The page we need to visit
 * @param {number} age How long is it allowed to be stale before we need to visit it again (in seconds), use -1 for "now"
 * @param {boolean} go Automatically call Page.to(page)
 * @return {boolean} True if we don't need to visit the page, false if we do
 */
Page.stale = function(page, age, go) {
	if (age && (page in this.pageNames)) {
		var now = Date.now();
		if (this.data[page] < now - (age * 1000)) {
			if (go && !this.to(page)) {
				this.set(['data',page], now);
			}
			return false;
		}
	}
	return true;
};

/**
 * Mark a page as stale, hinting to relevant workers that it needs a visit.
 * @param {string} page The page to mark as stale
 * @param {number} when Optional point when the page became stale.
 */
Page.setStale = function(page, when) {
	var now = Date.now(),
		seen = this.get(['data',page], 0, 'number'),
		want = this.get(['runtime','stale',page], 0, 'number');

	// don't let this be negative (pre 1970) or future (past "now")
	if (!isNumber(when) || when < 0 || when > now || want > now) {
		when = now;
	}

	// maintain the later date if ours is older
	if (seen >= when && seen >= want) {
		this.set(['runtime','stale',page]);
	} else if (want < when || want > now) {
		this.set(['runtime','stale',page], Math.round(when));
	}
};

/**
 * Test if a page is considered stale.
 * @param {string} page The page to check for staleness
 * @param {number} [when] Optional check against a specific time.
 * @return {boolean} True if the page is considered stale.
 */
Page.isStale = function(page, when) {
	var seen = this.get(['data',page], 0, 'number'),
		want = this.get(['runtime','stale',page], 0, 'number');

	if (isNumber(when) && want < when) {
		want = when;
	}

	// never seen or older than our stale mark
	return !seen || seen < want;
};
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue:true, Resources, Window,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, window, browser,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Queue() **********
* Keeps track of the worker queue
*/
var Queue = new Worker('Queue');
Queue.data = Queue.runtime = null;

// worker.work() return values for stateful - ie, only let other things interrupt when it's "safe"
var QUEUE_FINISH	= 0;// Finished everything, let something else work
var QUEUE_NO_ACTION	= QUEUE_FINISH;// Finished everything, let something else work
var QUEUE_CONTINUE	= 1;// Not finished at all, don't interrupt
var QUEUE_RELEASE	= 2;// Not quite finished, but safe to interrupt 
var QUEUE_INTERRUPT_OK	= QUEUE_RELEASE;// Not quite finished, but safe to interrupt 
// worker.work() can also return true/false for "continue"/"finish" - which means they can be interrupted at any time

Queue.settings = {
	system:true,
	keep:true,
	taint:true
};

// NOTE: ALL THIS CRAP MUST MOVE, Queue is a *SYSTEM* worker, so it must know nothing about CA workers or data
Queue.temp = {
	current:null
};

Queue.option = {
	queue: ['Global', 'Debug', 'Resources', 'Generals', 'Income', 'LevelUp', 'Elite', 'Quest', 'Monster', 'Battle', 'Guild', 'Festival', 'Heal', 'Land', 'Town', 'Bank', 'Alchemy', 'Blessing', 'Gift', 'Upgrade', 'Potions', 'Army', 'Idle', 'FP'], // Must match worker names exactly - even by case
	delay: 5,
	clickdelay: 5,
	pause: false
};

Queue.temp = {
	sleep:false // If we're currently sleeping, no workers can run...
};

Global.display.push({
	title:'Running',
	group:[
		{
			id:['Queue','option','delay'],
			label:'Delay Between Events',
			number:true,
			after:'secs',
			min:1,
			max:30
		},{
			id:['Queue','option','clickdelay'],
			label:'Delay After Mouse Click',
			number:true,
			after:'secs',
			min:1,
			max:60,
			help:'This should be a multiple of Event Delay'
		}
	]
});

Queue.init = function(old_revision) {
	Config._init(); // Make sure we're running after the display is created...
	var i, $btn, worker;
	// BEGIN: Moving stats into Resources
	if (old_revision <= 1095) {
		if (this.option.energy) {
			Resources.set(['option','reserve','energy'], this.option.energy);
			this.set(['option','energy']);
			this.set(['option','start_energy']);
		}
		if (this.option.stamina) {
			Resources.set(['option','reserve','stamina'], this.option.stamina);
			this.set(['option','stamina']);
			this.set(['option','start_stamina']);
		}
		this.set(['runtime','quest']);
		this.set(['runtime','general']);
		this.set(['runtime','action']);
		this.set(['runtime','stamina']);
		this.set(['runtime','energy']);
		this.set(['runtime','force']);
		this.set(['runtime','burn']);
		this.set(['runtime','big']);
		this.set(['runtime','basehit']);
		this.set(['runtime','levelup']);
	}
	// END
	this.option.queue = this.option.queue.unique();
	for (i in Workers) {
		if (Workers[i].work && Workers[i].display) {
			this._watch(Workers[i], 'option._disabled');// Keep an eye out for them going disabled
			if (!this.option.queue.find(i)) {// Add any new workers that have a display (ie, sortable)
				log('Adding '+i+' to Queue');
				this.option.queue[Workers[i].settings.unsortable ? 'unshift' : 'push'](i);
			}
		}
	}
	for (i=0; i<this.option.queue.length; i++) {// Then put them in saved order
		worker = Workers[this.option.queue[i]];
		if (worker && worker.display) {
			$('#golem_config').append($('#'+worker.id));
		}
	}
	$(document).bind('click keypress', function(event){
		if (!event.target || !$(event.target).parents().is('#golem_config_frame,#golem-dashboard')) {
			Queue.set(['temp','sleep'], true);
			Queue._remind(Queue.get(['option','clickdelay'], 5), 'click');
		}
	});
	Config.addButton({
		id:'golem_pause',
		image:this.option.pause ? 'play' : 'pause',
		className:this.option.pause ? 'red' : 'green',
		prepend:true,
		title:'Pause',
		click:function() {
			var pause = Queue.toggle(['option','pause'], true);
			log(LOG_INFO, 'State: ' + (pause ? 'paused' : 'running'));
			$(this).toggleClass('red green').attr('src', getImage(pause ? 'play' : 'pause'));
			if (!pause) {
				$('#golem_step').hide();
			} else if (Config.get(['option','debug'], false)) {
				$('#golem_step').show();
			}
			Queue.set(['temp','current']);
		}
	});
	Config.addButton({
		id:'golem_step',
		image:'step',
		className:'green',
		after:'golem_pause',
		hide:!this.option.pause || !Config.get(['option','debug'], false),
		click:function() {
			$(this).toggleClass('red green');
			Queue._update({type:'step'}, 'run'); // A single shot
			$(this).toggleClass('red green');
		}
	});
	// Running the queue every second, options within it give more delay
	this._watch('Page', 'temp.loading');
	this._watch('Session', 'temp.active');
	this._watch(this, 'option.pause');
	this._watch(this, 'option.delay');
	this._watch(this, 'temp.current');
	this._watch(this, 'temp.sleep');
	Title.alias('pause', 'Queue:option.pause:(Pause) ');
	Title.alias('worker', 'Queue:temp.current::None');
	this._notify('temp.current');
};

Queue.update = function(event, events) {
	var i, worker, result, next, release = false, tmp1, tmp2;
	if (events.findEvent(null, 'watch', 'option._disabled') || events.findEvent(this, 'watch', 'temp.current') || events.findEvent(this, 'init')) { // A worker getting disabled / enabled
		this.updateDisplay();
	}
	if (events.getEvent(this, 'watch', 'option.delay')) {
		this._forget('run'); // Re-started later
	}
	if (this.temp.sleep
	 || events.findEvent(null, 'watch')
	 || events.findEvent(this, 'init')) { // loading a page, pausing, resuming after a mouse-click, or init
		if (this._get(['option','pause']) || Page._get(['temp','loading']) || !Session._get(['temp','active']) || this._timer('click')) {
			this.temp.sleep = true;
		} else {
			this.temp.sleep = false;
		}
	}
	if (this.temp.sleep) {
		if (events.findEvent(this,'reminder')) { // Only delete the run timer if it's been triggered when we're "busy"
			this._forget('run');
		}
	} else if (!this._timer('run')) {
		this._revive(this.option.delay, 'run');
	}
	if ((!this.temp.sleep && events.findEvent(this,'reminder')) || events.findEvent(this,'step')) { // Will fire on the "run" and "click" reminders if we're not sleeping, also on "step"
		for (i in Workers) { // Run any workers that don't have a display, can never get focus!!
			if (Workers[i].work && !Workers[i].display && !Workers[i]._get(['option', '_disabled'], false) && !Workers[i]._get(['option', '_sleep'], false)) {
//				log(LOG_DEBUG, Workers[i].name + '.work(false);');
				Workers[i]._unflush();
				Workers[i]._work(false);
			}
		}
		for (i=0; i<this.option.queue.length; i++) {
			worker = Workers[this.option.queue[i]];
			if (!worker || !worker.work || !worker.display || worker._get(['option', '_disabled'], false) || worker._get(['option', '_sleep'], false)) {
				if (worker && this.temp.current === worker.name) {
					this.set(['temp','current']);
				}
				continue;
			}
//			log(LOG_DEBUG, worker.name + '.work(' + (this.temp.current === worker.name) + ');');
			if (this.temp.current === worker.name) {
				worker._unflush();
				Page.temp.enabled = true;
				result = worker._work(true);
				Page.temp.enabled = false;
				if (result === QUEUE_RELEASE) {
					release = true;
				} else if (!result) {// false or QUEUE_FINISH
					this.set(['temp','current']);
				}
			} else {
				result = worker._work(false);
			}
			if (!worker.settings.stateful && typeof result === 'number') {// QUEUE_* are all numbers
				worker.settings.stateful = true;
			}
			if (!next && result) {
				next = worker; // the worker who wants to take over
			}
		}
		worker = Worker.find(this.temp.current);
		if (next !== worker && (!worker || !worker.settings.stateful || next.settings.important || release)) {// Something wants to interrupt...
			log(LOG_INFO, 'Trigger ' + next.name);
			this.set(['temp','current'], next.name);
			this.updateDisplay();
		}
//		log(LOG_DEBUG, 'End Queue');
	}
	return true;
};

Queue.menu = function(worker, key) {
	if (worker) {
		if (!key) {
			if (worker.work && !worker.settings.no_disable) {
				return ['enable:' + (worker.get(['option','_disabled'], false) ? '-Disabled' : '+Enabled')];
			}
		} else if (key === 'enable') {
			worker.set(['option','_disabled'], worker.option._disabled ? undefined : true);
		}
	}
};

Queue.updateDisplay = function() {
	var i, disabled, tmp1 = Theme._get('Queue_disabled', 'ui-state-disabled'), tmp2 = Theme._get('Queue_active', 'ui-state-highlight');
	for (i in Workers) {
		if (Workers[i].display) {
			disabled = Workers[i]._get(['option','_disabled'], false);
			if (disabled && i === this.temp.current) {
				this.set(['temp','current'], null);
			}
			$('#'+Workers[i].id+' > h3')
				.toggleClass(tmp1, disabled)
				.toggleClass(tmp2, i === this.temp.current);
		}
	}
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources:true,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Resources **********
* Store and report Resources

Workers can add a type of Resources that they supply - Player would supply Energy and Stamina when parsing etc
Workers request buckets of Resourcess during init() - each bucket gets a display in the normal Resources config panel.

Items can be added as a type - *however* - they should be added with an amount and not as a spendable type by only calling Resources.add(type,amount)
Convention for unspendable Resourcess is to prefix the name with an underscore, ie. "_someitemimage.jpg" (needs to be unique)

Data can be stored for types by using Resourec.set([type, key], value); etc - this makes it "safer" for workers to discuss needs ;-)
Data can be stored at multiple levels deep - simply add extra keys - [type, key1, key2]

Resources stores the buckets as well as an overflow bucket - the overflow is used during level up

Buckets may be either -
"Shared" buckets are like now - first-come, first-served from a single source
- or -
"Exclusive" buckets are filled by a drip system, forcing workers to share Resourcess

The Shared bucket has a priority of 0

When there is a combination of Shared and Exclusive, the relative priority of the buckets are used - total of all priorities / number of buckets.
Priority is displayed as Disabled, -4, -3, -2, -1, 0, +1, +2, +3, +4, +5

When a worker is disabled (worker.get(['option', '_disabled'], false)) then it's bucket is completely ignored and Resourcess are shared to other buckets.

Buckets are filled in priority order, in cases of same priority, alphabetical order is used
*/

var Resources = new Worker('Resources');
Resources.temp = null;

Resources.settings = {
	system:true,
	unsortable:true,
	no_disable:true
};

Resources.data = {// type:{data} - managed by any access...
};

Resources.option = {
	types:{},
	reserve:{},
	buckets:{}
};

Resources.runtime = {
	types:{},// {'Energy':true}
	buckets:{}
};

//Resources.display = 'Discovering Resources...';

Resources.display = function() {
	var type, group, worker, display = [];
	if (!length(this.runtime.types)) {
		return 'No Resources to be Used...';
	}
	display.push({title:'IMPORTANT', label:'Only the Reserve option is currently active...'});
	for (type in this.option.types) {
		group = [];
		for (worker in this.runtime.buckets) {
			if (type in this.runtime.buckets[worker]) {
				group.push({
					id:'buckets.'+worker+'.'+type,
					label:'...<b>'+worker+'</b> priority',
					select:{10:'+5',9:'+4',8:'+3',7:'+2',6:'+1',5:'0',4:'-1',3:'-2',2:'-3',1:'-4',0:'Disabled'}
				});
			}
		}
		if (group.length) {
			display.push({
				title:type,
				group:[
					{
						id:'reserve.'+type,
						label:'Reserve',
						number:true,
						min:0,
						max:500,
						step:10
					},{
						id:'types.'+type,
						label:type+' Use',
						select:{0:'None',1:'Shared',2:'Exclusive'}
					},{
						group:group,
						require:'types.'+type+'==2'
					}
				]
			});
		}
	}
	return display;
};

Resources.init = function() {
	this._watch(this, 'option');
};

Resources.update = function(event) {
	if (event.type === 'watch') {
		var worker, type, total = 0;
		for (type in this.option.types) {
			for (worker in this.runtime.buckets) {
				if (type in this.runtime.buckets[worker]) {
					if (this.option.types[type] === 2) {// Exclusive
						total += this.runtime.buckets[worker][type];
					} else {
						this.runtime.buckets[worker][type] = 0;
					}
				}
			}
			if (this.option.types[type] === 2 && Math.ceil(total) < Math.floor(this.runtime.types[type])) {// We've got an excess for Exclusive, so share
				total = this.runtime.types[type] - total;
				this.runtime.types[type] -= total;
				this.add(type, total);
			}
		}
	}
};

/***** Resources.add() *****
type = name of Resources
amount = amount to add
absolute = is an absolute amount, not relative
1a. If amount isn't set then add a type of Resources that can be spent
1b. Update the display with the new type
1c. Don't do anything else ;-)
2. Changing the amount:
2a. If absolute then get the relative amount and work from there
3. Save the new amount
NOTE: we can add() items etc here, by never calling with just the item name - so it won't ever be "spent"
*/
Resources.add = function(type, amount, absolute) {
	if (isUndefined(amount)) {// Setting up that we use this type
		this.set(['runtime','types',type], this.runtime.types[type] || 0);
		this.set(['option','types',type], this.option.types[type] || 1);
		this.set(['option','reserve',type], this.option.reserve[type] || 0);
	} else {// Telling of any changes to the amount
		var total = 0, worker;
		if (absolute) {
			amount -= this.runtime.types[type];
		}
		if (amount) {
			// Store the new value
			this.set(['runtime','types',type], this.runtime.types[type] + amount);
			// Now fill any pots...
			amount -= Math.max(0, this.runtime.types[type] - parseInt(this.option.reserve[type]));
			if (amount > 0 && this.option.types[type] === 2) {
				for (worker in this.option.buckets) {
					if (type in this.option.buckets[worker]) {
						total += this.option.buckets[worker][type];
					}
				}
				amount /= total;
				for (worker in this.option.buckets) {
					if (type in this.option.buckets[worker]) {
						this.set(['runtime','buckets',worker,type], this.runtime.buckets[worker][type] + amount * this.option.buckets[worker][type]);
					}
				}
			}		
		}
	}
};

/***** Resources.use() *****
Register to use a type of Resources that can be spent
Actually use a type of Resources (must register with no amount first)
type = name of Resources
amount = amount to use
use = are we using it, or just checking if we can?
*/
Resources.use = function(type, amount, use) {
	if (Worker.stack.length) {
		var worker = Worker.stack[0];
		if (isUndefined(amount)) {
			this.set(['runtime','buckets',worker,type], this.runtime.buckets[worker] && this.runtime.buckets[worker][type] || 0);
			this.set(['option','buckets',worker,type], this.option.buckets[worker] && this.option.buckets[worker][type] || 5);
		} else if (!amount) {
			return true;
		} else if (this.option.types[type] === 1 && this.runtime.types[type] >= amount) {// Shared
			if (use) {
				this.set(['runtime','types',type], this.runtime.types[type] - amount);
			}
			return true;
		} else if (this.option.types[type] === 2 && this.runtime.buckets[worker][type] >= amount) {// Exlusive
			if (use) {
				this.set(['runtime','types',type], this.runtime.types[type] - amount);
				this.set(['runtime','buckets',worker,type], this.runtime.buckets[worker][type] - amount);
			}
			return true;
		}
	}
	return false;
};

/***** Resources.has() *****
Check if we've got a certain number of a Resources in total - not on a per-worker basis
Use this to check on "non-spending" resources
*/
Resources.has = function(type, amount) {
	return isUndefined(amount) ? (this.runtime.types[type] || 0) : (this.runtime.types[type] || 0) >= amount;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global console, isString, isArray, isNumber, isUndefined, Workers, Worker, Settings, $ */

var Scripting = new Worker('Script'); // The one and only time we're using the wrong name - BAD!!!
Scripting.data = Scripting.temp = Scripting.runtime = null;

Scripting.settings = {
	system:true,
	advanced:true,
	taint:true
};

Scripting.option = {
	path:'Player.data',
	script:'', // Script shown in Dashboard
	worker:'Player',
	type:'data'
};

Scripting.dashboard = function() {
	var i, path = this.option.worker+'.'+this.option.type, html = '', list = [];
	html += '<input id="golem_script_run" type="button" value="Run">';
	html += ' Using: <select id="golem_script_worker">';
	for (i=1; i<Settings.temp.paths.length; i++) {
		html += '<option value="' + Settings.temp.paths[i] + '"' + (Settings.temp.paths[i] === path ? ' selected' : '') + '>' + Settings.temp.paths[i] + '</option>';
	}
	html += '</select>';
	html += ' Result: <input id="golem_script_result" type="text" value="" disabled>';
	html += '<input id="golem_script_clear" style="float:right;" type="button" value="Clear">';
	html += '<div class="ui-helper-clearfix"><textarea id="golem_script_edit" placeholder="Enter code here" style="width:98%;">' + (Scripting.option.script || '') + '</textarea></div>';
	html += '<div class="ui-helper-clearfix"><h3><a>Variables</a></h3><pre id="golem_script_data">-</pre></div>';
	html += '<div class="ui-helper-clearfix"><h3><a>Compiled code</a></h3><pre id="golem_script_source">-</pre></div>';
	$('#golem-dashboard-Script').html(html);
	$('#golem_script_edit').autoSize();
	$('#golem_script_source').parent().accordion({
		collapsible: true,
		autoHeight: false,
		clearStyle: true,
		animated: 'blind',
		active: this.get(['option','_config','source'], false) || 0,
		change: function(event, ui){
			Scripting.set(['option','_config','source'], ui.newHeader.length ? undefined : true, null, true); // Only set when *hiding* panel
		}
	});
	$('#golem_script_data').parent().accordion({
		collapsible: true,
		autoHeight: false,
		clearStyle: true,
		animated: 'blind',
		active: this.get(['option','_config','data'], false) || 0,
		change: function(event, ui){
			Scripting.set(['option','_config','data'], ui.newHeader.length ? undefined : true, null, true); // Only set when *hiding* panel
		}
	});
	$('#golem_script_worker').change(function(){Scripting.set(['option','path'], $(this).val());});
	$('#golem_script_run').click(function(){
		Scripting.set(['option','script'], $('#golem_script_edit').val());
		var path = Scripting.option.path.regex(/([^.]*)\.(.*)/), script = new Script(Scripting.option.script, {
			'default':Workers[path[0]].get(path[1], {})
		});
		Scripting.set(['option','worker'], path[0]);
		Scripting.set(['option','type'], path[1]);
		$('#golem_script_result').val(script.run());
		$('#golem_script_data').text(JSON.stringify(script.data, null, '   '));
		$('#golem_script_source').text(JSON.stringify(script.script, null, '   '));
	});
	$('#golem_script_clear').click(function(){$('#golem_script_edit,#golem_script_source,#golem_script_result').val('');});
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Session **********
* Deals with multiple Tabs/Windows being open at the same time...
*/
var Session = new Worker('Session');
Session.runtime = null; // Don't save anything except global stuff
Session._rootpath = false; // Override save path so we don't get limited to per-user

Session.settings = {
	system:true,
	keep:true,// We automatically load when needed
	taint:true
};

Global.display.push({
//	advanced:true,
	title:'Multiple Tabs / Windows',
	group:[
		{
			id:['Session','option','timeout'],
			label:'Forget After',
			select:{5000:'5 Seconds', 10000:'10 Seconds', 15000:'15 Seconds', 20000:'20 Seconds', 25000:'25 Seconds', 30000:'30 Seconds'},
			help:'When you have multiple tabs open this is the length of time after closing all others that the Enabled/Disabled warning will remain.'
		}
	]
});

Session.option = {
	timeout:15000 // How long to give a tab to update itself before deleting it (ms)
};

Session.data = { // Shared between all windows
	_active:null, // Currently active session
	_sessions:{}, // List of available sessions
	_timestamps:{} // List of all last-saved timestamps from all workers
};

Session.temp = {
	active:false, // Are we the active tab (able to do anything)?
	warning:null, // If clicking the Disabled button when not able to go Enabled
	_id:null
};

Session.setup = function() {
	if (Global.get(['option','session'], false)) {
		this.set(['option','timeout'], Global.get(['option','session','timeout'], this.option.timeout));
		Global.set(['option','session']);
	}
	var now = Date.now();
	try {
		if (!(Session.temp._id = sessionStorage['golem.'+APP])) {
			sessionStorage['golem.'+APP] = Session.temp._id = '#' + now;
		}
	} catch(e) {// sessionStorage not available
		Session.temp._id = '#' + now;
	}
};

/***** Session.init() *****
3. Add ourselves to this.data._sessions with the _active time
4. If no active worker (in the last 2 seconds) then make ourselves active
4a. Set this.temp.active, this.data._active, and immediately call this._save()
4b/5. Add the "Enabled/Disabled" button, hidden if necessary (hiding other elements if we're disabled)
6. Add a click handler for the Enable/Disable button
6a. Button only works when either active, or no active at all.
6b. If active, make inactive, update this.temp.active, this.data._active and hide other elements
6c. If inactive , make active, update this.temp.active, this.data._active and show other elements (if necessary)
7. Add a repeating reminder for every 1 second
*/
Session.init = function() {
	Config._init(); // Make sure Config has loaded first
	var now = Date.now();
	this.set(['data','_sessions',this.temp._id], now);
	$('#golem_info').append('<div id="golem_session" class="golem-info golem-theme-button green" style="display:none;padding:4px;">Enabled</div>');
	if (!this.data._active || typeof this.data._sessions[this.data._active] === 'undefined' || this.data._sessions[this.data._active] < now - this.option.timeout || this.data._active === this.temp._id) {
		this._set(['temp','active'], true);
		this._set(['data','_active'], this.temp._id);
		this._save('data');// Force it to save immediately - reduce the length of time it's waiting
	} else {
		$('#golem_session').html('<b>Disabled</b>').toggleClass('red green').show();
	}
	$('#golem_session').click(function(event){
		Session._unflush();
		if (Session.temp.active) {
			$(this).html('<b>Disabled</b>').toggleClass('red green');
			Session._set(['data','_active'], null);
			Session._set(['temp','active'], false);
		} else if (!Session.data._active || typeof Session.data._sessions[Session.data._active] === 'undefined' || Session.data._sessions[Session.data._active] < Date.now() - option.timeout) {
			$(this).html('Enabled').toggleClass('red green');
			Queue.set(['temp','current']);
			Session._set(['data','_active'], Session.temp._id);
			Session._set(['temp','active'], true);
		} else {// Not able to go active
			Queue.set(['temp','current']);
			$(this).html('<b>Disabled</b><br><span>Another instance running!</span>');
			if (!Session.temp.warning) {
				(function(){
					if ($('#golem_session span').length) {
						if ($('#golem_session span').css('color').indexOf('255') === -1) {
							$('#golem_session span').animate({'color':'red'},200,arguments.callee);
						} else {
							$('#golem_session span').animate({'color':'black'},200,arguments.callee);
						}
					}
				})();
			}
			window.clearTimeout(Session.temp.warning);
			Session.temp.warning = window.setTimeout(function(){if(!Session.temp.active){$('#golem_session').html('<b>Disabled</b>');}Session.temp.warning=null;}, 3000);
		}
		Session._save('data');
	});
	$(window).unload(function(){Session._update('unload', 'run');});
	this._revive(1); // Call us *every* 1 second - not ideal with loads of Session, but good enough for half a dozen or more
	Title.alias('disable', 'Session:temp.active::(Disabled) ');
};

/***** Session.update() *****
1. Update the timestamps in data._timestamps[type][worker]
2. Replace the relevant datatype with the updated (saved) version if it's newer
*/
Session.updateTimestamps = function() {
	var i, j, _old, _new, _ts;
	for (i in Workers) {
		if (i !== this.name) {
			for (j in Workers[i]._datatypes) {
				if (Workers[i]._datatypes[j]) {
					this.data._timestamps[j] = this.data._timestamps[j] || {};
					_ts = this.data._timestamps[j][i] || 0;
					if (Workers[i]._timestamps[j] === undefined) {
						Workers[i]._timestamps[j] = _ts;
					} else if (_ts > Workers[i]._timestamps[j]) {
//						log(LOG_DEBUG, 'Need to replace '+i+'.'+j+' with newer data');
						_old = Workers[i][j];
						Workers[i]._load(j);
						_new = Workers[i][j];
						Workers[i][j] = _old;
						Workers[i]._replace(j, _new);
						Workers[i]._timestamps[j] = _ts;
					}
					this.data._timestamps[j][i] = Workers[i]._timestamps[j];
				}
			}
		}
	}
};

/***** Session.update() *****
1. We don't care about any data, only about the regular reminder we've set, so return if not the reminder
2. Update data._sessions[id] to Date.now() so we're not removed
3. If no other open instances then make ourselves active (if not already) and remove the "Enabled/Disabled" button
4. If there are other open instances then show the "Enabled/Disabled" button
*/
Session.update = function(event, events) {
	var i, l, now = Date.now(), unload;
	if (events.findEvent(this,'reminder') || (unload = events.findEvent(this,'unload'))) {
		this._load('data');
		if (unload) {
			Queue._forget('run'); // Make sure we don't do anything else
			for (i in Workers) { // Make sure anything that needs saving is saved
				for (l in Workers[i]._taint) {
					if (Workers[i]._taint[l]) {
						Workers[i]._save(l);
					}
				}
				for (l in Workers[i]._reminders) {
					if (/^i/.test(l)) {
						window.clearInterval(Workers[i]._reminders[l]);
					} else if (/^t/.test(l)) {
						window.clearTimeout(Workers[i]._reminders[l]);
					}
				}
			}
			this.data._sessions[this.temp._id] = 0;
			if (this.data._active === this.temp._id) {
				this.data._active = null;
			}
			this.temp.active = false;
		} else {
			this.data._sessions[this.temp._id] = now;
		}
		now -= this.option.timeout;
		for(i in this.data._sessions) {
			if (this.data._sessions[i] < now) {
				this.data._sessions[i] = undefined;
			}
		}
		l = length(this.data._sessions);
		if (l === 1) {
			if (!this.temp.active) {
				this.updateTimestamps();
				$('#golem_session').stop().css('color','black').html('Enabled').addClass('green').removeClass('red');
				this.data._active = this.temp._id;
				this.set(['temp','active'], true);
			}
			$('#golem_session').hide();
		} else if (l > 1) {
			this.updateTimestamps();
			$('#golem_session').show();
		}
		this._taint.data = true;
		this._save('data');
	}
	return true;
};
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources, Settings:true,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH, APPNAME,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime, makeImage,
	GM_listValues, GM_deleteValue, localStorage
*/
/********** Worker.Settings **********
* Save and Load settings by name - never does anything to CA beyond Page.reload()
*/
var Settings = new Worker('Settings');
Settings._rootpath = false; // Override save path so we don't get limited to per-user
Settings.option = Settings.runtime = null;

Settings.settings = {
	system:true,
	unsortable:true,
	advanced:true,
	no_disable:true,
	taint:true
};

Settings.temp = {
	worker:null,
	edit:null,
	paths:['-']
};

Settings.init = function() {
	var i, j;
	for (i in Workers) {
		for (j in Workers[i]._datatypes) {
			this.temp.paths.push(i + '.' + j);
		}
	}
	this.temp.paths.sort();
	if (this.data['- default -']) {
		this.data = this.data['- default -'];
	}
};

Settings.menu = function(worker, key) {
	var i, keys = [];
	if (worker) {
		if (!key) {
			if (Config.option.advanced) {
				for (i in worker._datatypes) {
					keys.push(i+':' + (worker.name === this.temp.worker && i === this.temp.edit ? '=' : '') + 'Edit&nbsp;"' + worker.name + '.' + i + '"');
				}
				keys.push('---');
			}
			keys.push('backup:Backup&nbsp;Options');
			keys.push('restore:Restore&nbsp;Options');
			return keys;
		} else if (key) {
			if (key === 'backup') {
				if (confirm("BACKUP WARNING!!!\n\nAbout to replace '+worker.name+' backup options.\n\nAre you sure?")) {
					this.set(['data', worker.name], $.extend(true, {}, worker.option));
				}
			} else if (key === 'restore') {
				if (confirm("RESTORE WARNING!!!\n\nAbout to restore '+worker.name+' options.\n\nAre you sure?")) {
					worker._replace('option', $.extend(true, {}, this.data[worker.name]));
				}
			} else if (this.temp.worker === worker.name && this.temp.edit === key) {
				this.temp.worker = this.temp.edit = null;
				this._notify('data');// Force dashboard update
			} else {
				this.temp.worker = worker.name;
				this.temp.edit = key;
				this._notify('data');// Force dashboard update
				Dashboard.set(['option','active'], this.name);
			}
		}
	} else {
		if (!key) {
			keys.push('backup:Backup&nbsp;Options');
			keys.push('restore:Restore&nbsp;Options');
			if (Config.option.advanced) {
				keys.push('---');
				keys.push('reset:!Reset&nbsp;Golem');
			}
			return keys;
		} else {
			if (key === 'backup') {
				if (confirm("BACKUP WARNING!!!\n\nAbout to replace backup options for all workers.\n\nAre you sure?")) {
					for (i in Workers) {
						this.set(['data',i], $.extend(true, {}, Workers[i].option));
					}
				}
			} else if (key === 'restore') {
				if (confirm("RESTORE WARNING!!!\n\nAbout to restore options for all workers.\n\nAre you sure?")) {
					for (i in Workers) {
						if (i in this.data) {
							Workers[i]._replace('option', $.extend(true, {}, this.data[i]));
						}
					}
				}
			} else if (key === 'reset') {
				if (confirm("IMPORTANT WARNING!!!\n\nAbout to delete all data for Golem on "+APPNAME+".\n\nAre you sure?")) {
					if (confirm("VERY IMPORTANT WARNING!!!\n\nThis will clear everything, reload the page, and make Golem act like it is the first time it has ever been used on "+APPNAME+".\n\nAre you REALLY sure??")) {
						// Well, they've had two chances...
//						log(LOG_INFO, 'Reset: '+localStorage.length+' keys total');
						for (i=0; i < localStorage.length; i++) {
							while (i < localStorage.length && localStorage[i].indexOf('golem.' + APP + '.') === 0) {
//								log(LOG_INFO, 'Reset: deleting key "'+localStorage[i]+'"');
								delete localStorage[localStorage[i]];
							}
						}
						Queue._forget('run'); // Just to be safe(ish)...
						window.location = window.location.href;
					}
				}
			}
		}
	}
};

Settings.dashboard = function() {
	var i, j, o, x, y, z, total, rawtot, path = this.temp.worker+'.'+this.temp.edit, html = '', storage = [];
	html = '<select id="golem_settings_path">';
	for (i=0; i<this.temp.paths.length; i++) {
		html += '<option value="' + this.temp.paths[i] + '"' + (this.temp.paths[i] === path ? ' selected' : '') + '>' + this.temp.paths[i] + '</option>';
	}
	html += '</select>';
	html += '<input id="golem_settings_refresh" type="button" value="Refresh">';
	if (this.temp.worker && this.temp.edit === 'data') {
		Workers[this.temp.worker]._unflush();
	}
	if (!this.temp.worker) {
		total = rawtot = 0;
		o = [];
		for (i in Workers) {
		    o.push(i);
		}
		o.sort();
		for (i = 0; i < o.length; i++) {
			for (j in Workers[o[i]]._storage) {
				if (Workers[o[i]]._storage[j]) {
					x = Workers[o[i]]._storage[j] || 0;
					y = Workers[o[i]]._rawsize[j] || x;
					z = Workers[o[i]]._numvars[j] || 0;
					total += x;
					rawtot += y;
					storage.push('<tr>');
					storage.push('<th>' + o[i] + '.' + j + '</th>');
					storage.push('<td style="text-align:right;">' + x.addCommas() + ' bytes</td>');
					storage.push('<td style="text-align:right;">' + y.addCommas() + ' bytes</td>');
					storage.push('<td style="text-align:right;">' + (x !== y ? (x * 100 / y).SI() + '%' : '&nbsp;') + '</td>');
					storage.push('<td style="text-align:right;">' + (z ? z + ' key' + plural(z) : '&nbsp;') + '</td>');
					storage.push('</tr>');
				}
			}
		}
		html += ' No worker specified (total ' + total.addCommas();
		if (total !== rawtot) {
			html += '/' + rawtot.addCommas();
		}
		html += ' bytes';
		if (total !== rawtot) {
			html += ', ' + (total * 100 / rawtot).SI() + '%';
		}
		html += ')<br><table>' + storage.join('') + '</table>';
	} else if (!this.temp.edit) {
		html += ' No ' + this.temp.worker + ' element specified.';
	} else if (typeof Workers[this.temp.worker][this.temp.edit] === 'undefined') {
		html += ' The element is undefined.';
	} else if (Workers[this.temp.worker][this.temp.edit] === null) {
		html += ' The element is null.';
	} else if (typeof Workers[this.temp.worker][this.temp.edit] !== 'object') {
		html += ' The element is scalar.';
	} else {
		i = length(Workers[this.temp.worker][this.temp.edit]);
		html += ' The element contains ' + i + ' element' + plural(i);
		if (Workers[this.temp.worker]._storage[this.temp.edit]) {
			html += ' (' + (Workers[this.temp.worker]._storage[this.temp.edit]).addCommas() + ' bytes)';
		}
		html += '.';
	}
	if (this.temp.worker && this.temp.edit) {
		if (Config.option.advanced) {
			html += '<input style="float:right;" id="golem_settings_save" type="button" value="Save">';
		}
		html += '<div style="position:relative;"><textarea id="golem_settings_edit" style="position:absolute;width:98%;top:0;left:0;right:0;">' + JSON.stringify(Workers[this.temp.worker][this.temp.edit], null, '   ') + '</textarea></div>';
	}
	$('#golem-dashboard-Settings').html(html);
	$('#golem_settings_refresh').click(function(){Settings.dashboard();});
	$('#golem_settings_save').click(function(){
		var data;
		try {
			data = JSON.parse($('#golem_settings_edit').val());
		} catch(e) {
			alert("ERROR!!!\n\nBadly formed JSON data.\n\nPlease check the data and try again!");
			return;
		}
		if (confirm("WARNING!!!\n\nReplacing internal data can be dangrous, only do this if you know exactly what you are doing.\n\nAre you sure you wish to replace "+Settings.temp.worker+'.'+Settings.temp.edit+"?")) {
			// Need to copy data over and then trigger any notifications
			Workers[Settings.temp.worker]._replace(Settings.temp.edit, data);
		}
	});
	$('#golem_settings_path').change(function(){
		var path = $(this).val().regex(/([^.]*)\.?(.*)/);
		if (path[0] in Workers) {
			Settings.temp.worker = path[0];
			Settings.temp.edit = path[1];
		} else {
			Settings.temp.worker = Settings.temp.edit = null;
		}
		Settings.dashboard();
	});
	$('#golem_settings_edit').autoSize();
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Title **********
* Changes the window title to user defined data.
* String may contain {stamina} or {Player:stamina} using the worker name (default Player)
*/
var Title = new Worker('Title');
Title.data = null;

Title.settings = {
	system:true,
	taint:true
};

Title.option = {
	enabled:false,
	title:"CA: {pause}{disable}{worker} | {energy}e | {stamina}s | {exp_needed}xp by {LevelUp:time}"
};

Title.temp = {
	old:null, // Old title, in case we ever have to change back
	alias:{} // name:'worker:path.to.data[:txt if true[:txt if false]]' - fill via Title.alias()
};

Global.display.push({
	title:'Window Title',
	group:[
		{
			id:['Title','option','enabled'],
			label:'Change Window Title',
			checkbox:true
		},{
			id:['Title','option','title'],
			text:true,
			size:30
		},{
			info:'{myname}<br>{energy} / {maxenergy}<br>{health} / {maxhealth}<br>{stamina} / {maxstamina}<br>{level}<br>{pause} - "(Paused) " when paused<br>{LevelUp:time} - Next level time<br>{worker} - Current worker<br>{bsi} / {lsi} / {csi}'
		}
	]
});

/***** Title.update() *****
* 1. Split option.title into sections containing at most one bit of text and one {value}
* 2. Output the plain text first
* 3. Split the {value} in case it's really {worker:value}
* 4. Output worker.get(value)
* 5. Watch worker for changes
*/
Title.update = function(event) {
	if (this.option.enabled && this.option.title) {
		var i, tmp, what, worker, value, output = '', parts = this.option.title.match(/([^}]+\}?)/g);// split into "text {option}"
		if (parts) {
			for (i=0; i<parts.length; i++) {
				tmp = parts[i].regex(/([^{]*)\{?([^}]*)\}?/);// now split to "text" "option"
				output += tmp[0];
				if (tmp[1]) {// We have an {option}
					what = (this.temp.alias[tmp[1]] || tmp[1]).split(':');// if option is "worker:value" then deal with it here
					worker = Worker.find(what.shift());
					if (worker) {
						this._watch(worker, what[0]); // Doesn't matter how often we add, it's only there once...
						value = worker.get(what[0], '');
						if (what[1] && value === true) {
							value = what[1];
						} else if (what[2] && !value) {
							value = what[2];
						}
						output += isNumber(value) ? value.addCommas() : isString(value) ? value : '';
					} else {
						log(LOG_WARN, 'Bad worker specified = "' + tmp[1] + '"');
					}
				}
			}
		}
		if (!this.temp.old) {
			this.set(['temp','old'], document.title);
		}
		if (!document.title || output !== document.title) {
			document.title = output;
		}
	} else if (this.temp.old) {
		document.title = this.temp.old;
		this.set(['temp','old'], null);
	}
};

/***** Title.alias() *****
* Pass a name and a string in the format "Worker:path.to.data[:txt if true[:txt if false]]"
*/
Title.alias = function(name,str) {
	this.set(['temp','alias',name], str);
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$:true, Worker, Army, Theme:true, History, Page:true, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP:true, APPID:true, APPNAME:true, userID:true, imagepath:true, isRelease, version, revision, Workers, PREFIX:true, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	unsafeWindow, log, warn, error, chrome
*/
/********** Worker.Theme **********
* Stores Theme-specific settings as well as allowing to change the theme.
*/
var Theme = new Worker('Theme');
Theme.runtime = Theme.temp = null;

Theme.settings = {
	system:true,
	taint:true
};

Theme.option = {
	theme: 'default',
	themes: { // Put in here so we can update it manually
		'default':{
			'Menu_icon':'gear',
			'Queue_disabled':'ui-state-disabled red',
			'Queue_active':'ui-priority-primary green'
		},
		'test':{}
	}
};

Theme.data = {}; // This is a copy of the current theme from Theme.option, doesn't exist until after .setup

Global.display.push({
	title:'Theming',
	group:[
		function() {
			var i, list = [], options = [];
			for (i in Theme.option.themes) {
				list.push(i);
			}
			for (i in Theme.option.themes['default']) {
				options.push({
					debug:true,
					id:['Theme','option','themes',Theme.option.theme,i],
					label:i,
					text:true
				});
			}
			options.unshift({
				id:['Theme','option','theme'],
				label:'Current Theme',
				select:list
			});
			return options;
		}
	]
});

Theme.setup = function() {
	this._replace('data', this.option.themes[this.option.theme]); // Needs to be here for anything wanting the theme in init()
};

Theme.update = function(event, events) {
	if (events.findEvent(null,'option') || events.findEvent(null,'init')) {
		var i, list = [];
		for (i in this.option.themes) {
			if (i !== this.option.theme) {
				list.push(i);
			}
		}
		this._replace('data', this.option.themes[this.option.theme]);
		$('#golem').removeClass(list.join(' ')).addClass('golem-theme golem-theme-' + this.option.theme);
		Config.makePanel(this);
	}
};
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease:true, version, revision, Workers, PREFIX, window, browser, GM_xmlhttpRequest,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Update **********
* Checks if there's an update to the script, and lets the user update if there is.
*/
var Update = new Worker('Update');
Update.data = Update.option = null;

Update.settings = {
	system:true
};

Update.runtime = {
	installed:0,// Date this version was first seen
	current:'',// What is our current version
	lastcheck:0,// Date.now() = time since last check
	version:0,// Last ones we saw in a check
	revision:0,
	force:false// Have we clicked a button, or is it an automatic check
};

Update.temp = {
	version:0,
	revision:0,
	check:'',// Url to check for new versions
	url_1:'',// Url to download release
	url_2:''// Url to download revision
};

/***** Update.init() *****
1a. Add a "Update Now" button to the button bar at the top of Config
1b. If running a beta version then add a "beta" button - which makes us pretend to be a beta version before running the update check.
2. On clicking the button set Update.runtime.force to true - so we can work() immediately...
*/
Update.init = function() {
	this.set(['temp','version'], version);
	this.set(['temp','revision'], revision);
	this.set(['runtime','version'], this.runtime.version || version);
	this.set(['runtime','revision'], this.runtime.revision || revision);
	switch(browser) {
		case 'chrome':
			Update.temp.check = 'http://game-golem.googlecode.com/svn/trunk/chrome/_version.js';
			Update.temp.url_1 = 'http://game-golem.googlecode.com/svn/trunk/chrome/GameGolem.crx'; // Beta
			Update.temp.url_2 = 'http://game-golem.googlecode.com/svn/trunk/chrome/GameGolem.release.crx'; // Release
			break;
		default: // No easy way to check if we're Greasemonkey now as it behaves just like a bookmarklet
			Update.temp.check = 'http://game-golem.googlecode.com/svn/trunk/greasemonkey/_version.js';
			Update.temp.url_1 = 'http://game-golem.googlecode.com/svn/trunk/greasemonkey/GameGolem.user.js'; // Beta
			Update.temp.url_2 = 'http://game-golem.googlecode.com/svn/trunk/greasemonkey/GameGolem.release.user.js'; // Release
			break;
	}
	// Add an update button for everyone
	Config.addButton({
		id:'golem_icon_update',
		image:'update',
		title:'Check for Update',
		click:function(){
			$(this).addClass('red');
			Update.checkVersion(true);
		}
	});
	if (isRelease) { // Add an advanced "beta" button for official release versions
		Config.addButton({
			id:'golem_icon_beta',
			image:'beta',
			title:'Check for Beta Versions',
			advanced:true,
			click:function(){
				isRelease = false;// Isn't persistant, so nothing visible to the user except the beta release
				$(this).addClass('red');
				Update.checkVersion(true);
			}
		});
	}
	// Add a changelog advanced button
	Config.addButton({
		image:'log',
		advanced:true,
		className:'blue',
		title:'Changelog',
		click:function(){
			window.open('http://code.google.com/p/game-golem/source/list', '_blank'); 
		}
	});
	// Add a wiki button
	Config.addButton({
		image:'wiki',
		className:'blue',
		title:'GameGolem wiki',
		click:function(){
			window.open('http://code.google.com/p/game-golem/wiki/castle_age', '_blank'); 
		}
	});
	$('head').bind('DOMNodeInserted', function(event){
		if (event.target.nodeName === 'META' && $(event.target).attr('name') === 'golem-version') {
			tmp = $(event.target).attr('content').regex(/(\d+\.\d+)\.(\d+)/);
			if (tmp) {
				Update._remind(21600, 'check');// 6 hours
				Update.set(['runtime','lastcheck'], Date.now());
				Update.set(['runtime','version'], tmp[0]);
				Update.set(['runtime','revision'], tmp[1]);
				if (Update.get(['runtime','force']) && Update.get(['temp','version'], version) >= tmp[0] && (isRelease || Update.get(['temp','revision'], revision) >= tmp[1])) {
					$('<div class="golem-button golem-info red" style="passing:4px;">No Update Found</div>').animate({'z-index':0}, {duration:5000,complete:function(){$(this).remove();} }).appendTo('#golem_info');
				}
				Update.set(['runtime','force'], false);
				$('#golem_icon_update,#golem_icon_beta').removeClass('red');
			}
			event.stopImmediatePropagation();
			$('script.golem-script-version').remove();
			$(event.target).remove();
			return false;
		}
	});
	if (this.runtime.current !== (version + '.' + revision)) {
		this.set(['runtime','installed'], Date.now());
		this.set(['runtime','current'], version + '.' + revision);
	}
};

Update.checkVersion = function(force) {
	Update.set('runtime.lastcheck', Date.now() - 21600000 + 60000);// Don't check again for 1 minute - will get reset if we get a reply
	Update.set('runtime.force', force);
	window.setTimeout(function(){
		var s = document.createElement('script');
		s.setAttribute('type', 'text/javascript');
		s.className = 'golem-script-version';
		s.src = Update.temp.check + '?random=' + Date.now();
		document.getElementsByTagName('head')[0].appendChild(s);
	}, 100);
};

/***** Update.update() *****
1a. If it's more than 6 hours since our last check, then ask for the latest version file from the server
1b. In case of bad connection, say it's 6 hours - 1 minutes since we last checked
2. Check if there's a version response on the page
3a. If there's a response then parse it and clear it - remember the new numbers
3b. Display a notification if there's a new version
4. Set a reminder if there isn't
*/
Update.update = function(event) {
	if (event.type === 'reminder') {
		this.checkVersion(false);
	}
	if (event.type === 'init' || event.type === 'reminder') {
		var now = Date.now(), age = (now - this.runtime.installed) / 1000, time = (now - this.runtime.lastcheck) / 1000;
		if (age <= 21600) {time += 3600;}		// Every hour for 6 hours
		else if (age <= 64800) {time += 7200;}	// Every 2 hours for another 12 hours (18 total)
		else if (age <= 129600) {time += 10800;}// Every 3 hours for another 18 hours (36 total)
		else if (age <= 216000) {time += 14400;}// Every 4 hours for another 24 hours (60 total)
		else {time += 21600;}					// Every 6 hours normally
		this._remind(Math.max(0, time), 'check');
	}
	if (this.runtime.version > this.temp.version || (!isRelease && this.runtime.revision > this.temp.revision)) {
		log(LOG_INFO, 'New version available: ' + this.runtime.version + '.' + this.runtime.revision + ', currently on ' + this.runtime.current);
		if (this.runtime.version > this.temp.version) {
			$('#golem_info').append('<div class="golem-button golem-info green" title="' + this.runtime.version + '.' + this.runtime.revision + ' released, currently on ' + version + '.' + revision + '" style="passing:4px;"><a href="' + this.temp.url_1 + '?' + Date.now() + '">New Version Available</a></div>');
		}
		if (!isRelease && this.runtime.revision > this.temp.revision) {
			$('#golem_info').append('<div class="golem-button golem-info green" title="' + this.runtime.version + '.' + this.runtime.revision + ' released, currently on ' + version + '.' + revision + '" style="passing:4px;"><a href="' + this.temp.url_2 + '?' + Date.now() + '">New Beta Available</a></div>');
		}
		this.set(['temp','version'], this.runtime.version);
		this.set(['temp','revision'], this.runtime.revision);
	}
};

// Add "Castle Age" to known applications
Main.add('castle_age', '46755028429', 'Castle Age', /^http:\/\/web3.castleagegame.com\/castle_ws\/index.php/i, function() {
	if (!isFacebook) {
		userID = $('#main_bntp img').attr('src').regex(/graph.facebook.com\/(\d+)\/picture/i);
		imagepath = 'http://image4.castleagegame.com/graphics/';
		var fn = function(){
			var left = Math.max(0, Math.floor(($('body').width() - 1030) / 2));
			$('#rightCol').css({'padding-left':(left + 781) + 'px'});
			$('center').css({'text-align':'left', 'padding-left':left+'px'});
		};
		$('body').prepend('<div id="rightCol" style="position:absolute;left:0;top:2px;width:244px;height:0;"></div>');
		fn();
		Main._resize(fn);
	}
});
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Alchemy **********
* Get all ingredients and recipes
*/
var Alchemy = new Worker('Alchemy');
Alchemy.temp = null;

Alchemy.settings = {
	taint:true
};

Alchemy.defaults['castle_age'] = {
	pages:'keep_alchemy keep_stats'
};

Alchemy.data = {
	ingredients:{},
	summons:{},
	recipe:{}
};

Alchemy.option = {
	perform:false,
	hearts:false,
	summon:false
};

Alchemy.runtime = {
	best:null,
	wait:0
};

Alchemy.display = [
	{
		id:'hearts',
		label:'Use Battle Hearts',
		checkbox:true
	},{
		id:'summon',
		label:'Use Summon Ingredients',
		checkbox:true
	}
];

Alchemy.page = function(page, change) {
	var now = Date.now(), self = this, i, tmp,
		ipurge = {}, rpurge = {}, spurge = {};

	if (page === 'keep_alchemy') {
		tmp = $('div.ingredientUnit');

		if (!tmp.length) {
			log(LOG_WARN, "Can't find any alchemy ingredients...");
			//Page.to('keep_alchemy', false); // Force reload
			//return false;
		} else {
			for (i in this.data.ingredients) {
				if (this.data.ingredients[i] !== 0) {
					ipurge[i] = true;
				}
			}
		}

		// ingredients list
		tmp.each(function(a, el) {
			var icon = ($('img', el).attr('src') || '').filepart();
			var c = ($(el).text() || '').regex(/\bx\s*(\d+)\b/im);
			ipurge[icon] = false;
			if (isNumber(c)) {
				self.set(['ingredients', icon], c);
			} else {
				log(LOG_WARN, 'Bad count ' + c + ' on ' + icon);
			}
		});

		tmp = $('div.alchemyQuestBack,div.alchemyRecipeBack,div.alchemyRecipeBackMonster');

		if (!tmp.length) {
			log(LOG_WARN, "Can't find any alchemy recipes...");
			//Page.to('keep_alchemy', false); // Force reload
			//return false;
		} else {
			for (i in this.data.recipe) {
				rpurge[i] = true;
			}
			for (i in this.data.summons) {
				spurge[i] = true;
			}
		}

		// recipe list
		tmp.each(function(a, el) {
			var name = ($('div.recipeTitle', el).text() || '').replace('RECIPES:','').replace(/\s+/gm, ' ').trim(),
				recipe = {}, i;
			if ((i = name.search(/\s*\(/m)) >= 0) {
				name = name.substr(0, i);
			}
			if ($(el).hasClass('alchemyQuestBack')) {
				recipe.type = 'Quest';
			} else if ($(el).hasClass('alchemyRecipeBack')) {
				recipe.type = 'Recipe';
			} else if ($(el).hasClass('alchemyRecipeBackMonster')) {
				recipe.type = 'Summons';
			}
			recipe.ingredients = {};
			$('div.recipeImgContainer', el).parent().each(function(b, el2) {
				var icon = ($('img', el2).attr('src') || '').filepart();
				var c = ($(el2).text() || '').regex(/\bx\s*(\d+)\b/im) || 1;
				recipe.ingredients[icon] = c;
				// Make sure we know an ingredient exists
				if (!(icon in self.data.ingredients)) {
					self.set(['ingredients', icon], 0);
					ipurge[icon] = false;
				}
				if (recipe.type === 'Summons') {
					spurge[icon] = false;
					self.set(['summons', icon], true);
				}
			});
			rpurge[name] = false;
			self.set(['recipe', name], recipe);
		});
	} else if (page === 'keep_stats') {
		// Only when it's our own keep and not someone elses
		if ($('.keep_attribute_section').length) {
			// some ingredients are units
			tmp = $('.statUnit', $('.statsT2 .statsTTitle:regex(^\\s*UNITS\\s*$")').parent());
			for (i=0; i<tmp.length; i++) {
				el = tmp[i];
				var b = $('a img[src]', el);
				var i = ($(b).attr('src') || '').filepart();
				var n = ($(b).attr('title') || $(b).attr('alt') || '').trim();
				var c = ($(el).text() || '').regex(/\bX\s*(\d+)\b/im);
				n = Town.qualify(n, i);
				if (i in this.data.ingredients) {
					if (isNumber(c)) {
						this.set(['ingredients', i], c);
					}
				}
			}

			// some ingredients are items
			tmp = $('.statUnit', $('.statsT2 .statsTTitle:regex(^\\s*ITEMS\\s*$)').parent());
			for (i=0; i<tmp.length; i++) {
				el = tmp[i];
				var b = $('a img[src]', el);
				var i = ($(b).attr('src') || '').filepart();
				var n = ($(b).attr('title') || $(b).attr('alt') || '').trim();
				var c = ($(el).text() || '').regex(/\bX\s*(\d+)\b/im);
				n = Town.qualify(n, i);
				if (i in this.data.ingredients) {
					if (isNumber(c)) {
						this.set(['ingredients', i], c);
					}
				}
			}

			tmp = $('.statUnit', $('.statsT2 .statsTTitle:regex(^\\s*ALCHEMY INGREDIENTS\\s*$)').parent());
			for (i=0; i<tmp.length; i++) {
				el = tmp[i];
				var b = $('a img[src]', el);
				var i = ($(b).attr('src') || '').filepart();
				var c = $(el).text().regex(/\bX\s*(\d+)\b/i);
				if (i) {
					this.set(['ingredients', i], c || 1);
				} else {
					Page.setStale('keep_alchemy', now);
				}
			}
		}
	}

	// purge (zero) any ingredients we didn't encounter.
	// Note: we need to leave placeholders for all known ingredients so keep
	// parsing knows which unit/item overlaps to watch.
	for (i in ipurge) {
		if (ipurge[i] && this.data.ingredients[i] !== 0) {
			log(LOG_WARN, 'Zero ingredient ' + i + ' [' + (this.data.ingredients[i] || 0) + ']');
			this.set(['data', 'ingredients', i], 0);
		}
	}

	// purge any recipes we didn't encounter.
	for (i in rpurge) {
		if (rpurge[i]) {
			log(LOG_DEBUG, 'Delete recipe ' + i);
			this.set(['recipe', i]);
		}
	}

	// purge any summons we didn't encounter.
	for (i in spurge) {
		if (spurge[i]) {
			log(LOG_DEBUG, 'Delete summon ' + i);
			this.set(['summons', i]);
		}
	}

	return false;
};

Alchemy.update = function(event) {
	var now = Date.now(), best = null, recipe = this.data.recipe, r, i, s;

	if (recipe) {
		for (r in recipe) {
			if (recipe[r].type === 'Recipe') {
				best = r;
				for (i in recipe[r].ingredients) {
					if ((!this.option.hearts && i === 'raid_hearts.gif') || (!this.option.summon && this.data.summons[i]) || recipe[r].ingredients[i] > this.data.ingredients[i]) {
						best = null;
						break;
					}
				}
				if (best) {break;}
			}
		}
	}

	s = undefined;
	if (!best) {
		s = 'Nothing to do.';
	} else {
		s = (this.option._disabled ? 'Would perform ' : 'Perform ') + best;
	}
	Dashboard.status(this, s);

	this.set('runtime.best', best);

	this.set('option._sleep', (this.runtime.wait || 0) > now || !best || Page.isStale('keep_alchemy'));
};

Alchemy.work = function(state) {
	var now = Date.now();

	if (!this.runtime.best && !Page.isStale('keep_alchemy')) {
		return QUEUE_FINISH;
	} else if (!state || !Page.to('keep_alchemy')) {
		return QUEUE_CONTINUE;
	} else {
		log(LOG_INFO, 'Perform - ' + this.runtime.best);
		if (!Page.click($('input[type="image"]', $('div.recipeTitle:contains("' + this.runtime.best + '")').next()))) {
			log(LOG_WARN, "Can't find the recipe - waiting a minute");
			this.set('runtime.wait', now + 60000);
			this._remind(60, 'wait');
		}
	}

	return QUEUE_RELEASE;
};
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page:true, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker Army Extension **********
* This fills in your army information by overloading Worker.Army()
* We are only allowed to replace Army.work() and Army.page() - all other Army functions should only be overloaded if really needed
* This is the CA version
*/
Army.defaults.castle_age = {
	temp:null,

	pages:'keep_stats army_viewarmy',

	// Careful not to hit any *real* army options
	option:{
		invite:false,
		recheck:0,
		auto:true,
		general:true
	},

	runtime:{
		count:-1, // How many people have we actively seen
		page:0, // Next page we want to look at 
		extra:1, // How many non-real army members are there (you are one of them)
		oldest:0, // Timestamp of when we last saw the oldest member
		check:false
	},
	
	display:[
		//Disabled until Army works correctly
		//{
		//	id:'invite',
		//	label:'Auto-Join New Armies',
		//	checkbox:true
		//},
		{
			id:'general',
			label:'Use Idle General',
			checkbox:true
		},{
			title:'Members',
			group:[
				{
					id:'auto',
					label:'Automatically Check',
					checkbox:true
				},{
					id:'recheck',
					label:'Manually Check',
					select:{
						0:'Never',
						86400000:'Daily',
						259200000:'3 Days',
						604800000:'Weekly',
						1209600000:'2 Weekly',
						2419200000:'4 Weekly'
					}
				}
			]
		}
	]
};

Army._overload('castle_age', 'init', function() {
	this.runtime.extra = Math.max(1, this.runtime.extra);
	this._watch(Player, 'data.armymax');
//	if (this.runtime.oldest && this.option.recheck) {
//		this._remind(Math.min(1, Date.now() - this.runtime.oldest + this.option.recheck) / 1000, 'recheck');
//	}
	this._parent();
});

Army._overload('castle_age', 'menu', function(worker, key) {
	if (worker === this) {
		if (!key) {
			return ['fill:Check&nbsp;Army&nbsp;Now'];
		} else if (key === 'fill') {
			this.set(['runtime','page'], 1);
			this.set(['runtime','check'], true);
		}
	}
});

Army._overload('castle_age', 'page', function(page, change) {
	if (change && page === 'keep_stats' && !$('.keep_attribute_section').length) { // Not our own keep
		var uid = $('.linkwhite a').attr('href').regex(/=(\d+)$/);
//		log('Not our keep, uid: '+uid);
		if (uid && Army.get(['Army', uid], false)) {
			$('.linkwhite').append(' ' + Page.makeLink('army_viewarmy', {action:'delete', player_id:uid}, 'Remove Member [x]'));
		}
	} else if (!change && page === 'army_viewarmy') {
		var i, uid, who, which, start, now = Date.now(), count = 0, tmp, level, parent, spans;
		$tmp = $('table.layout table[width=740] div').first().children();
		which = $tmp.eq(1).html().regex(/\<div[^>]*\>(\d+)\<\/div\>/);
		start = $tmp.eq(2).text().regex(/Displaying: (\d+) - \d+/);
		tmp = $('td > a[href*="keep.php?casuser="]');
		for (i=0; i<tmp.length; i++) {
			try {
				this._transaction(); // BEGIN TRANSACTION
				uid = $(tmp[i]).attr('href').regex(/casuser=(\d*)$/i);
				parent = $(tmp[i]).closest('td').next()
				who = $(parent).find('a').eq(-1).text();
				spans = $(parent).find('span[style]');
				level = $(spans).eq(1).text().regex(/(\d+) Commander/i);
				assert(isNumber(uid) && uid !== userID, 'Bad uid: '+uid);
				this.set(['Army',uid,'member'], true);
				assert(this.set(['Army',uid,'name'], $(spans).eq(0).text().replace(/^ *"|"$/g,''), 'string') !== false, 'Bad name: '+uid);
				if (isFacebook) {
					assert(this.set(['Army',uid,'fbname'], who, 'string') !== false, 'Bad fbname: '+uid);
				} else { // Gave up trying to fight this thing - thanks non-standard fb:name node type that breaks jQuery...
					assert(this.set(['Army',uid,'fbname'], $(parent).find('a.fb_link').text() || 'Facebook User', 'string') !== false, 'Bad fbname: '+uid);
				}
				this.set(['Army',uid,'friend'], who !== 'Facebook User');
				if (!this.get(['Army',uid,'changed']) || this.get(['Army',uid,'level']) !== level) {
					this.set(['Army',uid,'changed'], now);
					this.set(['Army',uid,'level'], level);
				}
				this.set(['Army',uid,'seen'], now);
				this.set(['Army',uid,'page'], which);
				this.set(['Army',uid,'id'], start + i);
				this._transaction(true); // COMMIT TRANSACTION
//				log('Adding: ' + JSON.stringify(this.get(['Army',uid])));
			} catch(e) {
				this._transaction(false); // ROLLBACK TRANSACTION on any error
				log(e, e.name + ' in ' + this.name + '.page(' + page + ', ' + change + '): ' + e.message);
			}
		}
		if (!i) {
			this._set(['runtime','page'], 0);// No real members on this page so stop looking.
			this._set(['runtime','check'], false);
		}
		tmp = $('img[src*="bonus_member.jpg"]').closest('tr');
		if (tmp.length) {
			this.set(['runtime','extra'], 1 + tmp.text().trim(true).regex(/Extra member x(\d+)/i));
//			log(LOG_DEBUG, 'Extra Army Members Found: '+Army.runtime.extra);
		}
		for (i in this.data.Army) {
			if (this.data.Army[i].member) {
				if (this.get(['Army',i,'page']) === which && this.get(['Army',i,'seen']) !== now) {
					this.set(['Army',i,'member']); // Forget this one, not found on the correct page
				} else {
					count++;// Lets count this one instead
				}
			}
		}
		this._set(['runtime','count'], count);
		if (this.runtime.page) {
			if (which !== this.runtime.page || (!this.runtime.check && Player.get('armymax',0) === (this.runtime.count + this.runtime.extra))) {
				this._set(['runtime','page'], 0);
				this._set(['runtime','check'], false);
			} else {
				this._set(['runtime','page'], which + 1);
			}
		}
	}
	return this._parent() || true;
});

Army._overload('castle_age', 'update', function(event) {
	this._parent();
	if (event.type !== 'data' && (!this.runtime.page || (this.option.recheck && !this.runtime.oldest))) {
		var i, page = this.runtime.page, army = this.get('Army'), s, now = Date.now(), then = now - this.option.recheck, oldest = this.runtime.oldest;
		if (!page && this.option.auto && Player.get('armymax',0) !== (this.runtime.count + this.runtime.extra)) {
			log(LOG_WARN, 'Army size ('+Player.get('armymax',0)+') does not match cache ('+(this.runtime.count + this.runtime.extra)+'), checking from page 1');
			page = 1;
		}
		if (!page && this.option.recheck) {
			for (i in army) {
				s = this.get(['Army',i,'seen']);
				oldest = Math.min(oldest || Number.MAX_VALUE, s);
				if (!page && s < then) {
					page = Math.min(page || Number.MAX_VALUE, this.get(['Army',i,'page']));
					then = s;
				}
			}
			this._set(['runtime','oldest'], oldest);
		}
		this._set(['runtime','page'], page);
//		log(LOG_WARN, 'update('+JSON.shallow(event,1)+'): Army.runtime = '+JSON.stringify(this.runtime));
	}
	this._set(['option','_sleep'], !this.runtime.page);
});

Army._overload('castle_age', 'work', function(state) {
	if (this.runtime.page) {
		if (state && (!this.option.general || Generals.to(Idle.get('option.general','any')))) {
			Page.to('army_viewarmy', {page:this.runtime.page});
		}
		return true;
	}
	return this._parent();
});

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page:true, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime
*/
/********** Worker.Bank **********
* Auto-banking
*/
var Bank = new Worker('Bank');
Bank.data = null;

Bank.settings = {
	taint:true
};

Bank.defaults['castle_age'] = {};

Bank.option = {
	general:true,
	auto:true,
	above:10000,
	hand:0,
	keep:10000
};

Bank.temp = {
	force:false
};

Bank.display = [
	{
		id:'general',
		label:'Use Best General',
		checkbox:true
	},{
		id:'auto',
		label:'Bank Automatically',
		checkbox:true
	},{
		id:'above',
		label:'Bank Above',
		text:true
	},{
		id:'hand',
		label:'Keep in Cash',
		text:true
	},{
		id:'keep',
		label:'Keep in Bank',
		text:true
	}
];

Bank.setup = function() {
	// BEGIN: Use global "Show Status" instead of custom option
	if ('status' in this.option) {
		this.set(['option','_hide_status'], !this.option.status);
		this.set(['option','status']);
	}
	// END
};

Bank.init = function() {
	this._watch('Player', 'data.cash');// We want other things too, but they all change in relation to this
};

Bank.work = function(state) {
	if (state) {
		this.stash();
	}
	return QUEUE_CONTINUE;
};

Bank.update = function(event) {
	Dashboard.status(this, Config.makeImage('gold') + '$' + Player.get('worth', 0).addCommas() + ' (' + Config.makeImage('gold') + '$' + Bank.worth().addCommas() + ' available)');
	this.set('option._sleep', !(this.temp.force || (this.option.auto && Player.get('cash', 0) >= Math.max(10, this.option.above, this.option.hand))));
};

// Return true when finished
Bank.stash = function(amount) {
	var cash = Player.get('cash', 0);
	amount = (isNumber(amount) ? Math.min(cash, amount) : cash) - this.option.hand;
	if (!amount || amount <= 10) {
		return true;
	}
	if ((this.option.general && !Generals.to('bank')) || !Page.to('keep_stats')) {
		return false;
	}
	$('input[name="stash_gold"]').val(amount);
	Page.click('input[value="Stash"]');
	this.set(['temp','force'], false);
	return true;
};

// Return true when finished
Bank.retrieve = function(amount) {
	Worker.find(Queue.get('temp.current')).settings.bank = true;
	amount -= Player.get('cash', 0);
	if (amount <= 0 || (Player.get('bank', 0) - this.option.keep) < amount) {
		return true; // Got to deal with being poor exactly the same as having it in hand...
	}
	if (!Page.to('keep_stats')) {
		return false;
	}
	$('input[name="get_gold"]').val(amount.toString());
	Page.click('input[value="Retrieve"]');
	return false;
};

Bank.worth = function(amount) { // Anything withdrawing should check this first!
	var worth = Player.get('worth', 0) - this.option.keep;
	if (typeof amount === 'number') {
		return (amount <= worth);
	}
	return worth;
};

Bank.menu = function(worker, key) {
	if (worker === this) {
		if (!key && !this.option._disabled) {
			return ['bank:Bank&nbsp;Now'];
		} else if (key === 'bank') {
			this.set(['temp','force'], true);
		}
	}
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle:true, Generals, LevelUp, Monster, Player,
	APP, APPID, warn, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser, console,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	getImage
*/
/********** Worker.Battle **********
* Battling other players (NOT raid or Arena)
*/
var Battle = new Worker('Battle');

Battle.settings = {
	taint:true
};

Battle.temp = null;

Battle.defaults['castle_age'] = {
	pages:'battle_rank battle_battle battle_war'
};

Battle.data = {
	user: {},
	rank: {},
	points: {},
	battle: {},
	war: {}
};

Battle.option = {
	general:true,
	general_choice:'any',
	points:'Invade',
	monster:true,
//	arena:false,
	losses:5,
	type:'Invade',
	bp:'Always',
	limit:0,
	chain:0,
	army:1.1,
	level:1.1,
	preferonly:'Sometimes',
	prefer:[],
	between:0,
	risk:false,
	stamina_reserve:0,
	cache:100
};

Battle.runtime = {
	attacking:null,
	points:false,
	chain:0 // Number of times current target chained
};

Battle.symbol = { // Demi-Power symbols
	1:getImage('symbol_1'),
	2:getImage('symbol_2'),
	3:getImage('symbol_3'),
	4:getImage('symbol_4'),
	5:getImage('symbol_5')
};
Battle.demi = {
	1:'Ambrosia',
	2:'Malekus',
	3:'Corvintheus',
	4:'Aurora',
	5:'Azeron'
};

Battle.display = [
	{
		id:'general',
		label:'Use Best General',
		checkbox:true
	},{
		advanced:true,
		id:'general_choice',
		label:'Use General',
		require:'!general',
		select:'generals'
	},{
		id:'stamina_reserve',
		label:'Stamina Reserve',
		select:'stamina',
		help:'Keep this much stamina in reserve for other workers.'
	},{
		id:'type',
		label:'Battle Type',
		select:['Invade', 'Duel', 'War'],
		help:'War needs level 100+, and is similar to Duel - though also uses 10 stamina'
	},{
		id:'points',
		label:'Get Demi-Points Type',
		select:['Never', 'Invade', 'Duel'],
		help:'This will make you attack specifically to get Demi-Points every day. War (above) will not earn Demi-Points, but otherwise you will gain them through normal battle - just not necessarily all ten a day'
	},{
		id:'losses',
		label:'Attack Until',
		select:['Ignore',1,2,3,4,5,6,7,8,9,10],
		after:'Losses'
	},{
//		advanced:true,
//		id:'arena',
//		label:'Fight in Arena First',
//		checkbox:true,
//		help:'Only if the Arena is enabled!'
//	},{
		advanced:true,
		id:'monster',
		label:'Fight Monsters First',
		checkbox:true
	},{
		id:'bp',
		label:'Get Battle Points<br>(Clears Cache)',
		select:['Always', 'Never', 'Don\'t Care']
	},{
		advanced:true,
		id:'limit',
		before:'<center>Target Ranks</center>',
		require:'bp=="Always"',
		select:'limit_list',
		after: '<center>and above</center>',
		help:'When Get Battle Points is Always, only fights targets at selected rank and above yours.'
	},{
		advanced:true,
		id:'cache',
		label:'Limit Cache Length',
		select:[100,200,300,400,500]
	},{
		advanced:true,
		id:'between',
		label:'Time Between Attacks<br>(On same target)',
		select:{
			0:'none',
			300000:'5 mins',
			900000:'15 mins',
			1800000:'30 mins',
			3600000:'1 hour',
			7200000:'2 hours',
			21600000:'6 hours',
			43200000:'12 hours',
			86400000:'24 hours'
		},
		help:'Stop yourself from being as noticed, but may result in fewer attacks and slower advancement'
	},{
		advanced:true,
		id:'chain',
		label:'Chain after wins',
		select:[1,2,3,4,5,6,7,8,9,10],
		help:'How many times to chain before stopping'
	},{
		advanced:true,
		id:'risk',
		label:'Risk Death',
		checkbox:true,
		help:'The lowest health you can attack with is 10, but you can lose up to 12 health in an attack, so are you going to risk it???'
	},{
		id:'army',
		require:'type=="Invade"',
		label:'Target Army Ratio<br>(Only needed for Invade)',
		select:['Any', 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
		help:'Smaller number for smaller target army. Reduce this number if you\'re losing in Invade'
	},{
		id:'level',
		require:'type!="Invade"',
		label:'Target Level Ratio<br>(Mainly used for Duel)',
		select:['Any', 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
		help:'Smaller number for lower target level. Reduce this number if you\'re losing a lot'
	},{
		advanced:true,
		title:'Preferred Targets',
		group:[
			{
				id:'preferonly',
				label:'Fight Preferred',
				select:['Never', 'Sometimes', 'Only', 'Until Dead']
			},{
				id:'prefer',
				multiple:'userid'
			}
		]
	}
];

Battle.setup = function() {
	Resources.use('Stamina');
};

/***** Battle.init() *****
1. Watch Arena and Monster for changes so we can update our target if needed
*/
Battle.init = function() {
	var i, list, rank, data = this.data.user, mode = this.option.type === 'War' ? 'war' : 'battle';
//	this._watch(Arena);
	this._watch(Monster, 'runtime.attack');
	this._watch(this, 'option.prefer');
	if (typeof this.option.points === 'boolean') {
		this.set(['option','points'], this.option.points ? (this.option.type === 'War' ? 'Duel' : this.option.type) : 'Never');
		$(':golem(Battle,points)').val(this.option.points);
	}
/* Old fix for users stored directly in .data - breaks data.battle.rank
	for (i in data) {
		if (!/[^\d]/.test(i) && data[i].rank) {
			this.set(['data','user',i,'battle','rank'], data[i].rank);
			this.set(['data','user',i,'battle','win'], data[i].win);
			this.set(['data','user',i,'battle','loss'], data[i].loss);
			this.set(['data','user',i,'war','rank'], data[i].war);
			delete data[i].rank;
			delete data[i].win;
			delete data[i].loss;
		}
	}
	if (this.data.rank) {
		this.data.battle.rank = this.data.rank;
		delete this.data.rank;
	}
*/
//	this.option.arena = false;// ARENA!!!!!!
	// make a custom Config type of for rank, based on number so it carries forward on level ups
	list = {};
	if (this.get(['data',mode,'rank'])) {
		rank = Player.get(mode, 0);
		for (i in this.data[mode].rank){
			list[i - rank] = '(' + (i - rank) + ') ' + this.data[mode].rank[i].name;
		}
	} else {
		list[0] = '(0) Newbie';
	}
	Config.set('limit_list', list);

	// map old "(#) rank" string into the number
	i = this.get('option.limit');
	if (isString(i) && (i = i.regex(/\((-?\d+)\)/))) {
		this.set(['option','limit'], i);
	}

	// BEGIN: fix up "under level 4" generals
	if (this.option.general_choice === 'under level 4') {
		this.set(['option','general_choice'], 'under max level');
	}
	// END

	$('.Battle-prefer-on').live('click', function(event) {
		Battle._unflush();
		var uid = $(this).attr('name');
		var prefs = Battle.get('option.prefer');
		if (uid && prefs.find(uid)) {
			prefs.remove(uid);
			Battle._taint['option'] = true;
			Battle._notify('option.prefer');
		}
		$(this).removeClass('Battle-prefer-on');
		$(this).attr('title', 'Click to remove from preferred list.');
		$(this).attr('src', getImage('star_off'));
		$(this).addClass('Battle-prefer-off');
	});

	$('.Battle-prefer-off').live('click', function(event) {
		Battle._unflush();
		var uid = $(this).attr('name');
		var prefs = Battle.get('option.prefer');
		if (uid && !prefs.find(uid)) {
			prefs.push(uid);
			Battle._taint['option'] = true;
			Battle._notify('option.prefer');
		}
		$(this).removeClass('Battle-prefer-off');
		$(this).attr('title', 'Click to add to preferred list.');
		$(this).attr('src', getImage('star_on'));
		$(this).addClass('Battle-prefer-on');
	});
};

/***** Battle.page() *****
1. On the Battle Rank page parse out our current Rank and Battle Points
2. On the Battle page
2a. Check if we've just attacked someone and parse out the results
2b. Parse the current Demi-Points
2c. Check every possible target and if they're eligable then add them to the target list
*/
Battle.page = function(page, change) {
	var i, data, uid, info, $list, $el, tmp, rank, rank2, mode = this.option.type === 'War' ? 'war' : 'battle';
	if (page === 'battle_rank') {
		data = {0:{name:'Newbie',points:0}};
		$('tr[height="23"]').each(function(i,el) {
			var info = $(el).text().regex(/Rank (\d+) - (.*)\s*(\d+)/i);
			data[info[0]] = {name:info[1], points:info[2]};
		});
		this.set(['data','battle','rank'], data);
		this.set(['data','battle','bp'], $('span:contains("Battle Points.")', 'div:contains("You are a Rank")').text().replace(/,/g, '').regex(/with (\d+) Battle Points/i));
	} else if (page === 'battle_war') {
		data = {0:{name:'Newbie',points:0}};
		$('tr[height="23"]').each(function(i,el){
			var info = $(el).text().regex(/Rank (\d+) - (.*)\s*(\d+)/i);
			data[info[0]] = {name:info[1], points:info[2]};
		});
		this.set(['data','war','bp'], $('span:contains("War Points.")', 'div:contains("You are a Rank")').text().replace(/,/g, '').regex(/with (\d+) War Points/i));
		this.set(['data','war','rank'], data);
	} else if (page === 'battle_battle') {
		data = this.data.user;
		if ((uid = this.get(['runtime','attacking']))) {
			tmp = $('div.results').text();
			if ($('img[src*="battle_victory"]').length) {
				if (Player.get('general') === 'Zin'
						&& Generals.get(['data','Zin','charge'],1e99) < Date.now()) {
					Generals.set(['data','Zin','charge'],Date.now() + 82800000);
				}
				if (mode === 'battle') {
					this.set(['data',mode,'bp'], $('span.result_body:contains(" Points.")').text().replace(/,/g, '').regex(/total of (\d+) Battle Points/i));
				}
				this.set(['data','user',uid,mode,'win'], this.get(['data','user',uid,mode,'win'], 0) + 1);
				this.set(['data','user',uid,'last'], Date.now());
				History.add('battle+win',1);
				if (this.option.chain && this.runtime.chain <= this.option.chain) {
					this.set(['runtime','chain'], this.runtime.chain + 1);
				} else { 
					this.set(['runtime','attacking'], null);
					this.set(['runtime','chain'], 0);
				}
			} else if (tmp.match(/You cannot battle someone in your army/i)
					 || tmp.match(/This trainee is too weak. Challenge someone closer to your level/i)
					 || tmp.match(/They are too high level for you to attack right now/i)
					 || tmp.match(/Their army is far greater than yours! Build up your army first before attacking this player!/i)) {
//				log(LOG_DEBUG, 'data[this.runtime.attacking].last ' + data[this.runtime.attacking].last+ ' Date.now() '+ Date.now()) + ' test ' + (data[this.runtime.attacking].last + 300000 < Date.now());
				this.set(['data','user',uid]);
				this.set(['runtime','attacking'], null);
				this.set(['runtime','chain'], 0);
			} else if (tmp.match(/Your opponent is dead or too weak/i)) {
				this.set(['data','user',uid,'hide'], this.get(['data','user',uid,'hide'], 0) + 1);
				this.set(['data','user',uid,'dead'], Date.now());
				this.set(['runtime','attacking'], null);
				this.set(['runtime','chain'], 0);
//			} else if (!$('div.results').text().match(new RegExp(data[uid].name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")+"( fought with:|'s Army of (\d+) fought with|'s Defense)",'i'))) {
//			} else if (!$('div.results').text().match(data[uid].name)) {
//				uid = null; // Don't remove target as we've hit someone else...
//				log(LOG_WARN, 'wrong ID');
			} else if ($('img[src*="battle_defeat"]').length) {
				if (Player.get('general') === 'Zin'
						&& Generals.get(['data','Zin','charge'],1e99) < Date.now()) {
					Generals.set(['data','Zin','charge'],Date.now() + 82800000);
				}
				this.set(['runtime','attacking'], null);
				this.set(['runtime','chain'], 0);
				this.set(['data','user',uid,mode,'loss'], this.get(['data','user',uid,mode,'loss'], 0) + 1);
				this.set(['data','user',uid,'last'], Date.now());
				History.add('battle+loss',-1);
			}
		}
		this.set(['data','points'], $('#'+APPID_+'app_body table.layout table div div:contains("Once a day you can")').text().replace(/[^0-9\/]/g ,'').regex(/(\d+)\/10(\d+)\/10(\d+)\/10(\d+)\/10(\d+)\/10/), isArray);
		rank = {
			battle: Player.get('battle',0),
			war: Player.get('war',0)
		}
		$list = $('#'+APPID_+'app_body table.layout table table tr:even');
		for (i=0; i<$list.length; i++) {
			$el = $list[i];
			uid = $('img[uid!=""]', $el).attr('uid');
			info = $('td.bluelink', $el).text().replace(/[ \t\n]+/g, ' ');
			rank2 = {
				battle: info.regex(/Battle:[^(]+\(Rank (\d+)\)/i),
				war: info.regex(/War:[^(]+\(Rank (\d+)\)/i)
			}
			if (uid && info && ((Battle.option.bp === 'Always' && rank2[mode] - rank[mode] >= this.option.limit) || (Battle.option.bp === 'Never' && rank[mode]- rank2[mode] >= 5) || Battle.option.bp === "Don't Care")) {
				this.set(['data','user',uid,'name'], $('a', $el).text().trim());
				this.set(['data','user',uid,'level'], info.regex(/\(Level (\d+)\)/i));
				this.set(['data','user',uid,'battle','rank'], rank2.battle);
				this.set(['data','user',uid,'war','rank'], rank2.war);
				this.set(['data','user',uid,'army'], $('td.bluelink', $el).next().text().regex(/(\d+)/));
				this.set(['data','user',uid,'align'], $('img[src*="graphics/symbol_"]', $el).attr('src').regex(/symbol_(\d)/i));
			}
		}
	}
	return false;
};

/***** Battle.update() *****
1. Delete targets who are now too high or too low in rank
2. If our target cache is longer than the user-set limit then prune it
2a. Add every target to an array
2b. Sort the array using weighted values - we want to keep people we win against etc
2c. While the list is too long, delete the extra entries
3. Check if we need to get Battle Points (points.length will be 0 if we don't)
4. Choose our next target
4a. If we don't want points and we want to fight in the arena, then skip
4b. If we don't want points and we want to fight monsters, then skip
4c. Loop through all preferred targets, and add them 10 times
4d. If we need to, now loop through all in target cache and add 1-5 times (more times for higher rank)
4e. Choose a random entry from our list (targets with more entries have more chance of being picked)
5. Update the Status line
*/
Battle.update = function(event) {
	var i, j, data = this.data.user, list = [], points = false, status = [], army = Player.get('army',0), level = Player.get('level'), mode = this.option.type === 'War' ? 'war' : 'battle', rank = Player.get(mode,0), count = 0, skip, limit, enabled = !this.get(['option', '_disabled'], false), tmp;
	tmp = this.get(['data',mode], {});
	status.push('Rank ' + rank + ' ' + this.get([tmp,'rank',rank,'name'], 'unknown', 'string') + ' with ' + this.get([tmp,'bp'], 0, 'number').addCommas() + ' Battle Points, Targets: ' + length(data) + ' / ' + this.option.cache);
	if (event.type === 'watch' && event.id === 'option.prefer') {
		this.dashboard();
		return;
	}
	if (this.option.points !== 'Never') {
		tmp = this.get(['data','points'],[]);
		status.push('Demi Points Earned Today: '
		+ '<img class="golem-image" src="' + this.symbol[1] +'" alt=" " title="'+this.demi[1]+'"> ' + this.get([tmp,0], 0) + '/10 '
		+ '<img class="golem-image" src="' + this.symbol[2] +'" alt=" " title="'+this.demi[2]+'"> ' + this.get([tmp,1], 0) + '/10 '
		+ '<img class="golem-image" src="' + this.symbol[3] +'" alt=" " title="'+this.demi[3]+'"> ' + this.get([tmp,2], 0) + '/10 '
		+ '<img class="golem-image" src="' + this.symbol[4] +'" alt=" " title="'+this.demi[4]+'"> ' + this.get([tmp,3], 0) + '/10 '
		+ '<img class="golem-image" src="' + this.symbol[5] +'" alt=" " title="'+this.demi[5]+'"> ' + this.get([tmp,4], 0) + '/10');
	}
	// First make check our target list doesn't need reducing
	limit = this.get(['option','limit'], -4, isNumber);
	for (i in data) { // Forget low or high rank - no points or too many points
		tmp = this.get([data,i,mode,'rank'],0);
		if ((this.option.bp === 'Always' && tmp - rank < limit) || (this.option.bp === 'Never' && rank - tmp <= 5)) { // unknown rank never deleted
			this.set(['data','user',i]); // Would be nicer to just ignore "bad" targets until they're naturally pruned...
		}
	}
	if (length(data) > this.option.cache) { // Need to prune our target cache
//		log('Pruning target cache');
		list = [];
		for (i in data) {
			list.push(i);
		}
		list.sort(function(a,b) {
			var weight = 0, aa = data[a], bb = data[b];
			if (((aa.win || 0) - (aa.loss || 0)) < ((bb.win || 0) - (bb.loss || 0))) {
				weight += 10;
			} else if (((aa.win || 0) - (aa.loss || 0)) > ((bb.win || 0) - (bb.loss || 0))) {
				weight -= 10;
			}
			if (Battle.option.bp === 'Always') {
				weight += ((bb.rank || 0) - (aa.rank || 0)) / 2;
			}
			if (Battle.option.bp === 'Never') {
				weight += ((aa.rank || 0) - (bb.rank || 0)) / 2;
			}
			weight += Math.range(-1, (bb.hide || 0) - (aa.hide || 0), 1);
			weight += Math.range(-10, (((aa.army || 0) - (bb.army || 0)) / 10), 10);
			weight += Math.range(-10, (((aa.level || 0) - (bb.level || 0)) / 10), 10);
			return weight;
		});
		while (list.length > this.option.cache) {
			this.set(['data','user',list.pop()]);
		}
	}
	// Check if we need Demi-points
//	log(LOG_WARN, 'Queue Logic = ' + enabled);
	points = this.set(['runtime','points'], this.option.points !== 'Never' && sum(this.get(['data','points'], [0])) < 50 && enabled);
	// Second choose our next target
/*	if (!points.length && this.option.arena && Arena.option.enabled && Arena.runtime.attacking) {
		this.runtime.attacking = null;
		status.push('Battling in the Arena');
	} else*/
	if (!points && (this.option.monster || LevelUp.runtime.big) && Monster.get('runtime.attack',false)) {
		this.set(['runtime','attacking'], null);
		status.push('Attacking Monsters');
	} else {
		if (!this.runtime.attacking || !data[this.runtime.attacking]
		|| (this.option.army !== 'Any' && (data[this.runtime.attacking].army / army) * (data[this.runtime.attacking].level / level) > this.option.army)
		|| (this.option.level !== 'Any' && (data[this.runtime.attacking].level / level) > this.option.level)
		|| (this.option.type === 'War' && data[this.runtime.attacking].last && data[this.runtime.attacking].last + 300000 < Date.now())) {
			this.set(['runtime','attacking'], null);
		}
//		log(LOG_DEBUG, 'data[this.runtime.attacking].last ' + data[this.runtime.attacking].last+ ' Date.now() '+ Date.now()) + ' test ' + (data[this.runtime.attacking].last + 300000 < Date.now());
		skip = {};
		list = [];
		for(j=0; j<this.option.prefer.length; j++) {
			i = this.option.prefer[j];
			if (!/\D/g.test(i)) {
				if (this.option.preferonly === 'Never') {
					skip[i] = true;
					continue;
				}
				data[i] = data[i] || {};
				if ((data[i].dead && data[i].dead + 300000 >= Date.now()) // If they're dead ignore them for 1hp = 5 mins
				|| (data[i].last && data[i].last + this.option.between >= Date.now()) // If we're spacing our attacks
				|| (typeof this.option.losses === 'number' && (data[i][mode].loss || 0) - (data[i][mode].win || 0) >= this.option.losses) // Don't attack someone who wins more often
				|| (points && data[i].align && this.data.points[data[i].align - 1] >= 10)) {
					continue;
				}
				list.push(i,i,i,i,i,i,i,i,i,i); // If on the list then they're worth at least 10 ;-)
				count++;
			}
		}
		if (this.option.preferonly === 'Never' || this.option.preferonly === 'Sometimes' || (this.option.preferonly === 'Only' && !this.option.prefer.length) || (this.option.preferonly === 'Until Dead' && !list.length)) {
			for (i in data) {
				if (skip[i] // If filtered out in preferred list
				|| (data[i].dead && data[i].dead + 1800000 >= Date.now()) // If they're dead ignore them for 3m * 10hp = 30 mins
				|| (data[i].last && data[i].last + this.option.between >= Date.now()) // If we're spacing our attacks
				|| (typeof this.option.losses === 'number' && (data[i][mode].loss || 0) - (data[i][mode].win || 0) >= this.option.losses) // Don't attack someone who wins more often
				|| (this.option.army !== 'Any' && ((data[i].army || 0) / army) * (data[i].level || 0) / level > this.option.army && this.option.type === 'Invade')
				|| (this.option.level !== 'Any' && ((data[i].level || 0) / level) > this.option.level && this.option.type !== 'Invade')
				|| (points && (!data[i].align || this.data.points[data[i].align - 1] >= 10))) {
					continue;
				}
				if (Battle.option.bp === 'Always') {
					for (j=Math.range(1,(data[i][mode].rank || 0)-rank+1,5); j>0; j--) { // more than 1 time if it's more than 1 difference
						list.push(i);
					}
				} else {
					list.push(i);
				}
				count++;
			}
		}
		if (!this.runtime.attacking && list.length) {
			this.set(['runtime','attacking'], list[Math.floor(Math.random() * list.length)]);
		}
		if (this.runtime.attacking) {
			i = this.runtime.attacking;
			if (isString(data[i].name) && data[i].name.trim() !== '') {
				j = data[i].name.html_escape();
			} else {
				j = '<i>id:</i> ' + i;
			}
			status.push('Next Target: <img class="golem-image" src="' + this.symbol[data[i].align] +'" alt=" " title="'+this.demi[data[i].align]+'"> ' + j + ' (Level ' + data[i].level + (data[i][mode].rank && this.data[mode].rank[data[i][mode].rank] ? ' ' + this.data[mode].rank[data[i][mode].rank].name : '') + ' with ' + data[i].army + ' army)' + (count ? ', ' + count + ' valid target' + plural(count) : ''));
		} else {
			this.set(['runtime','attacking'], null);
			status.push('No valid targets found.');
			this._remind(60); // No targets, so check again in 1 minute...
		}
	}
	Dashboard.status(this, status.join('<br>'));
};

/***** Battle.work() *****
1. If we don't have a target, not enough health, or not enough stamina, return false
2. Otherwise
2a. Ask to work
2b. Get the correct General
2c. Go to the right page
3. Select our target
3a. Replace the first target on the page with the target we want to attack
3b. If we can't find any targets to replace / attack then force a reload
3c. Click the Invade / Dual attack button
*/
Battle.work = function(state) {
	var useable_stamina = LevelUp.runtime.force.stamina ? LevelUp.runtime.stamina : LevelUp.runtime.stamina - this.option.stamina_reserve;
	if (!this.runtime.attacking || Player.get('health',0) < (this.option.risk ? 10 : 13) 
			|| useable_stamina < (!this.runtime.points && this.option.type === 'War' ? 10 : 1)
			|| LevelUp.runtime.big) {
//		log(LOG_WARN, 'Not attacking because: ' + (this.runtime.attacking ? '' : 'No Target, ') + 'Health: ' + Player.get('health',0) + ' (must be >=10), Burn Stamina: ' + useable_stamina + ' (must be >=1)');
		return QUEUE_FINISH;
	}
	if (!state || !Generals.to(Generals.runtime.zin || (this.option.general ? (this.runtime.points ? this.option.points : this.option.type) : this.option.general_choice)) || !Page.to('battle_battle')) {
		return QUEUE_CONTINUE;
	}
	/*jslint onevar:false*/
	var $symbol_rows = $('#'+APPID_+'app_body table.layout table table tr:even').has('img[src*="graphics/symbol_'+this.data.user[this.runtime.attacking].align+'"]');
	var $form = $('form input[alt="' + (this.runtime.points ? this.option.points : this.option.type) + '"]', $symbol_rows).first().parents('form');
	/*jslint onevar:true*/
	if (!$form.length) {
		log(LOG_WARN, 'Unable to find ' + (this.runtime.points ? this.option.points : this.option.type) + ' button, forcing reload');
		Page.to('index');
	} else {
		log(LOG_INFO, (this.runtime.points ? this.option.points : this.option.type) + ' ' + this.data.user[this.runtime.attacking].name + ' (' + this.runtime.attacking + ')');
		$('input[name="target_id"]', $form).attr('value', this.runtime.attacking);
		Page.click($('input[type="image"]', $form));
	}
	return QUEUE_RELEASE;
};

Battle.rank = function(name) {
	var i, mode = this.get(['data',this.option.type === 'War' ? 'war' : 'battle','rank'],{});
	for (i in mode) {
		if (this.get([mode,i,'name']) === name) {
			return parseInt(i, 10);
		}
	}
	return 0;
};

Battle.order = [];
Battle.dashboard = function(sort, rev) {
	var i, o, points = [0, 0, 0, 0, 0, 0], list = [], output = [], sorttype = ['align', 'name', 'level', 'rank', 'army', '*pref', 'win', 'loss', 'hide'], data = this.data.user, army = Player.get('army',0), level = Player.get('level',0), mode = this.option.type === 'War' ? 'war' : 'battle';
	for (i in data) {
		points[data[i].align]++;
	}
	var prefs = {};
	for (i = 0; i < this.option.prefer.length; i++) {
		prefs[this.option.prefer[i]] = 1;
	}
	var pref_img_on = '<img class="Battle-prefer-on" src="' + getImage('star_on') + '" title="Click to remove from preferred list." name="';
	var pref_img_off = '<img class="Battle-prefer-off" src="' + getImage('star_off') + '" title="Click to add to preferred list." name="';
	var pref_img_end = '">';
	if (typeof sort === 'undefined') {
		this.order = [];
		for (i in data) {
			this.order.push(i);
		}
	}
	if (typeof sort === 'undefined') {
		sort = (this.runtime.sort || 1);
	}
	if (typeof rev === 'undefined'){
		rev = (this.runtime.rev || false);
	}
	this.runtime.sort = sort;
	this.runtime.rev = rev;
	if (typeof sorttype[sort] === 'string') {
		var str = '';
		this.order.sort(function(a,b) {
			var aa, bb;
			if (sorttype[sort] === '*pref') {
				aa = prefs[a] || 0;
				bb = prefs[b] || 0;
				str += '\n' + a + ' = ' + aa;
				str += ', ' + b + ' = ' + bb;
			} else {
				aa = data[a][mode][sorttype[sort]] || data[a][sorttype[sort]] || 0;
				bb = data[b][mode][sorttype[sort]] || data[b][sorttype[sort]] || 0;
			}
			if (typeof aa === 'string' || typeof bb === 'string') {
				return (rev ? (''+bb).localeCompare(aa) : (''+aa).localeCompare(bb));
			}
			return (rev ? aa - bb : bb - aa);
		});
	}
	list.push('<div style="text-align:center;"><strong>Rank:</strong> ' + (this.data[mode].rank && this.data[mode].rank[Player.get(mode,0)] ? this.data[mode].rank[Player.get(mode,0)].name : 'unknown') + ' (' + Player.get(mode,0) + '), <strong>Targets:</strong> ' + length(data) + ' / ' + this.option.cache + ', <strong>By Alignment:</strong>');
	for (i=1; i<6; i++ ) {
		list.push(' <img class="golem-image" src="' + this.symbol[i] +'" alt="'+this.demi[i]+'" title="'+this.demi[i]+'"> ' + points[i]);
	}
	list.push('</div><hr>');
	th(output, 'Align');
	th(output, 'Name');
	th(output, 'Level');
	th(output, 'Rank');
	th(output, 'Army');
	th(output, 'Pref');
	th(output, 'Wins');
	th(output, 'Losses');
	th(output, 'Hides');
	list.push('<table cellspacing="0" style="width:100%"><thead><tr>' + output.join('') + '</tr></thead><tbody>');
	for (o=0; o<this.order.length; o++) {
		data = this.data.user[this.order[o]];
		output = [];
		td(output, isNumber(data.align) ? '<img class="golem-image" src="' + this.symbol[data.align] + '" alt="' + this.demi[data.align] + '">' : '', isNumber(data.align) ? 'title="' + this.demi[data.align] + '"' : null);
		th(output, data.name.html_escape(), 'title="'+this.order[o]+'"');
		td(output, (this.option.level !== 'Any' && (data.level / level) > this.option.level) ? '<i>'+data.level+'</i>' : data.level);
		td(output, this.get(['data',mode,'rank',data[mode].rank,'name'], '', 'string'));
		td(output, (this.option.army !== 'Any' && (data.army / army * data.level / level) > this.option.army) ? '<i>'+data.army+'</i>' : data.army);
		td(output, (prefs[this.order[o]] ? pref_img_on : pref_img_off) + this.order[o] + pref_img_end);
		td(output, data[mode].win || '');
		td(output, data[mode].loss || '');
		td(output, data.hide || '');
		tr(list, output.join(''));
	}
	list.push('</tbody></table>');
	$('#golem-dashboard-Battle').html(list.join(''));
	$('#golem-dashboard-Battle tbody tr td:nth-child(2)').css('text-align', 'left');
	if (typeof sort !== 'undefined') {
		$('#golem-dashboard-Battle thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	}
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page:true, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime
*/
/********** Worker.Blessing **********
* Automatically receive blessings
*/
var Blessing = new Worker('Blessing');
Blessing.temp = null;

Blessing.settings = {
	taint:true
};

Blessing.defaults['castle_age'] = {
	pages:'oracle_demipower'
};

Blessing.option = {
	which:'Stamina'
};

Blessing.runtime = {
	upgrade:false,
	when:0
};

Blessing.which = ['None', 'Energy', 'Attack', 'Defense', 'Health', 'Stamina'];
Blessing.display = [
    {
		id:'upgrade',
		label:'Use Upgrade Rules',
		checkbox:true,
		help:'This will spend your blessing on the next stat point that your Upgrade worker wishes to use. If Upgrade doesn\'t want to spend anything, then fall back to Which below'
	},{
		id:'which',
		label:'Which',
		select:Blessing.which
    }
];

Blessing.init = function() {
	var when = this.get(['runtime','when'], 0);
	if (when) {
		this._remind((when - Date.now()) / 1000, 'blessing');
	}
	this._watch(Upgrade, 'runtime.next');
};

Blessing.page = function(page, change) {
	var result = $('div.results'), time, when;
	if (result.length) {
		time = result.text().regex(/Please come back in: (\d+) hours and (\d+) minutes/i);
		if (time && time.length) {
			this.set(['runtime','when'], Date.now() + (((time[0] * 60) + time[1] + 1) * 60000));
		} else if (result.text().match(/You have paid tribute to/i)) {
			this.set(['runtime','when'], Date.now() + 86460000); // 24 hours and 1 minute
		}
		if ((when = this.get(['runtime','when'],0))) {
			this._remind((when - Date.now()) / 1000, 'blessing');
		}
	}
//app46755028429_symbol_displaysymbols1
//You have 28279 Demi Points!
/*
	this.set(['data','energy'], $('#'+APPID_+'symbol_displaysymbols1').text().trim(true).regex(/You have (\d+) Demi Points/i), 'number');
	this.set(['data','attack'], $('#'+APPID_+'symbol_displaysymbols2').text().trim(true).regex(/You have (\d+) Demi Points/i), 'number');
	this.set(['data','defense'], $('#'+APPID_+'symbol_displaysymbols3').text().trim(true).regex(/You have (\d+) Demi Points/i), 'number');
	this.set(['data','health'], $('#'+APPID_+'symbol_displaysymbols4').text().trim(true).regex(/You have (\d+) Demi Points/i), 'number');
	this.set(['data','stamina'], $('#'+APPID_+'symbol_displaysymbols5').text().trim(true).regex(/You have (\d+) Demi Points/i), 'number');
*/
	return false;
};

Blessing.update = function(event){
	var d, demi, which = this.option.which;
	if (this.option.upgrade) {
		which = Upgrade.get(['runtime','next'], which, 'string'); // use type to force it to fallback
	}
	if (which && which !== 'None') {
		which = which.ucfirst();
		d = new Date(this.runtime.when);
		switch(this.option.which.toLowerCase()) {
			case 'energy':
				demi = Config.makeImage('symbol-1') + ' Ambrosia (' + which + ')';
				break;
			case 'attack':
				demi = Config.makeImage('symbol-2') + ' Malekus (' + which + ')';
				break;
			case 'defense':
				demi = Config.makeImage('symbol-3') + ' Corvintheus (' + which + ')';
				break;
			case 'health':
				demi = Config.makeImage('symbol-4') + ' Aurora (' + which + ')';
				break;
			case 'stamina':
				demi = Config.makeImage('symbol-5') + ' Azeron (' + which + ')';
				break;
			default:
				demi = 'Unknown';
				break;
		}
		Dashboard.status(this, '<span title="Next Blessing">' + 'Next Blessing performed on ' + d.format('l g:i a') + ' to ' + demi + ' </span>');
		this.set(['option','_sleep'], Date.now() < this.runtime.when);
	} else {
		Dashboard.status(this);
		this.set(['option','_sleep'], true);
	}
};

Blessing.work = function(state) {
	if (!state || !Page.to('oracle_demipower')) {
		return QUEUE_CONTINUE;
	}
	var which = this.option.which;
	if (this.option.upgrade) {
		which = Upgrade.get(['runtime','next'], which, 'string'); // use type to force it to fallback
	}
	Page.click('#'+APPID_+'symbols_form_'+this.which.indexOf(which.ucfirst())+' input.imgButton');
	return QUEUE_RELEASE;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page:true, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Elite() **********
* Build your elite army
*/
var Elite = new Worker('Elite');
Elite.data = Elite.temp = null;

Elite.settings = {
	taint:true
};

Elite.defaults['castle_age'] = {
	pages:'* keep_eliteguard army_viewarmy'
};

Elite.option = {
	every:12,
	friends:true,
	armyperpage:25 // Read only, but if they change it and I don't notice...
};

Elite.runtime = {
	waitelite:0,
	nextelite:0
};

Elite.display = [
	{
		id:'friends',
		label:'Facebook Friends Only',
		checkbox:true
	},{
		id:'every',
		label:'Check Every',
		select:[1, 2, 3, 6, 12, 24],
		after:'hours',
		help:'Although people can leave your Elite Guard after 24 hours, after 12 hours you can re-confirm them'
	}
];

Elite.menu = function(worker, key) {
	if (worker === this) {
		if (!key) {
			return ['fill:Fill&nbsp;Elite&nbsp;Guard&nbsp;Now'];
		} else if (key === 'fill') {
			this.set('runtime.waitelite', 0);
		}
	}
};

Elite.page = function(page, change) {
	if (page === 'keep_eliteguard') {
		var i, txt, uid, el = $('span.result_body'), now = Date.now();
		uid = $('#'+APPID_+'app_body a[href*="facebook.com/profile.php?id="]').attr('href').regex(/id=(\d+)$/i);
		for (i=0; i<el.length; i++) {
			txt = $(el[i]).text().trim(true);
//			if (txt.match(/Elite Guard, and they have joined/i)) {
			if (txt.match(/You've joined /i)) {
				log(LOG_INFO, 'Added ' + Army.get(['Army', uid, 'name'], uid) + ' to Elite Guard');
				Army.set(['Elite',uid, 'elite'], now + 86400000); // 24 hours
			} else if (txt.match(/'s Elite Guard is FULL!/i)) {
				log(LOG_INFO, Army.get(['Army', uid, 'name'], uid) + '\'s Elite Guard is full');
				Army.set(['Elite',uid, 'full'], now + 1800000); // half hour
			} else if (txt.match(/Sorry: You must be in Facebook User's Army to join their Elite Guard!/i)) {
				log(LOG_INFO, Army.get(['Army', uid, 'name'], uid) + ' is not in your army so can\'t join your Elite Guard');
				Army.set(['Army',uid,'member']);
			} else if (txt.match(/YOUR Elite Guard is FULL!/i)) {
				log(LOG_INFO, 'Elite guard full, wait '+Elite.option.every+' hours');
				this.set(['runtime','waitelite'], now);
			} else { //something weird - move on
				log(LOG_INFO, Army.get(['Army', uid, 'name'], uid) + 'couldn\'t join for some reason');
				Army.set(['Elite',uid, 'full'], now + 1800000); // half hour
			}
			if (this.runtime.nextelite === uid) {
				this.set(['runtime','nextelite']);
			}
		}
	} else {
		if ($('input[src*="elite_guard_add"]').length) {
			this.set(['runtime','waitelite'], 0);
		}
	}
	return false;
};

Elite.update = function(event, events) {
	var i, list, check, next = 0, now = Date.now();
	list = Army.get('Elite');// Try to keep the same guards
	for (i in list) {
		check = list[i].elite || list[i].full || 0;
		if (check < now) {
			Army.set(['Elite',i,'elite']);// Delete the old timers if they exist...
			Army.set(['Elite',i,'full']);// Delete the old timers if they exist...
			if (Army.get(['Army',i,'member'], false)) {
				if (Army.get(['Elite',i,'prefer'], false)) {// Prefer takes precidence
					next = i;
					break;
				}
				if (!next && (!this.option.friends || Army.get(['Army',i,'friend'], false))) { // Only facebook friends unless we say otherwise
					next = i;// Earlier in our army rather than later
				}
			}
		}
	}
	if (!next) {
		list = Army.get('Army');// Otherwise lets just get anyone in the army
		for(i in list) {
			if (!Army.get(['Elite',i]) && Army.get(['Army',i,'member']) && (!this.option.friends || Army.get(['Army',i,'friend']))) {// Only try to add a non-member who's not already added
				next = i;
				break;
			}
		}
	}
	this.set(['runtime','nextelite'], parseInt(next, 10)); // Make sure we're using a numeric uid
	check = ((this.runtime.waitelite + (this.option.every * 3600000)) - now) / 1000;
	if (next && this.runtime.waitelite) {
		this._remind(check, 'recheck');
	}
	this.set(['option','_sleep'], !next || (this.runtime.waitelite + (this.option.every * 3600000)) > now);
	Dashboard.status(this, 'Elite Guard: Check' + (check <= 0 ? 'ing now' : ' in ' + Page.addTimer('elite', check * 1000, true)) + (next ? ', Next: '+Army.get(['Army', next, 'name']) : ''));
	return true;
};

Elite.work = function(state) {
	if (state) {
//		log(LOG_LOG, 'Add ' + Army.get(['Army', this.runtime.nextelite, 'name'], this.runtime.nextelite) + ' to Elite Guard');
		Page.to('keep_eliteguard', {twt:'jneg' , jneg:true, user:this.runtime.nextelite});
	}
	return true;
};

Elite.army = function(action, uid) {
	switch(action) {
	case 'title':
		return 'Elite';
	case 'show':
		return (Army.get(['Elite',uid])
			? (Army.get(['Elite',uid,'prefer'])
				? '<span class="ui-icon golem-icon golem-icon-star-on" style="display:inline-block;"></span>'
				: '<span class="ui-icon golem-icon golem-icon-star-off" style="display:inline-block;"></span>')
			 + (Army.get(['Elite',uid,'elite'])
				? '<span class="ui-icon ui-icon-check" title="Member until: ' + makeTime(Army.get(['Elite',uid,'elite'])) + '" style="display:inline-block;"></span>'
				: '<span class="ui-icon" style="display:inline-block;"></span>')
			 + (Army.get(['Elite',uid,'full'])
				? '<span class="ui-icon ui-icon-clock" title="Full until: ' + makeTime(Army.get(['Elite',uid,'full'])) + '" style="display:inline-block;"></span>'
				: '<span class="ui-icon" style="display:inline-block;"></span>')
			: (Army.get(['Army',uid,'member'])
				? '<span class="ui-icon golem-icon golem-icon-star-off" style="display:inline-block;"></span>'
				: '<span class="ui-icon" style="display:inline-block;"></span>')
			 + '<span class="ui-icon" style="display:inline-block;"></span><span class="ui-icon" style="display:inline-block;"></span>'
			);
	case 'sort':
		var now = Date.now();
		if (!Army.get(['Elite',uid]) && !Army.get(['Army',uid,'member'])) {
			return 0;
		}
		return ((Army.get(['Elite',uid,'prefer'])
				? now
				: 0)
			+ (Army.get(['Elite',uid,'elite'])
				? now - parseInt(Army.get(['Elite',uid,'elite']), 10)
				: 0)
			+ (Army.get(['Elite',uid,'full'])
				? now - parseInt(Army.get(['Elite',uid,'full']), 10)
				: 0));
	case 'click':
		if (uid && Army.get(['Army',uid,'member'])) {
			Army.toggle(['Elite',uid,'prefer'])
		}
	}
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals:true, Idle, LevelUp, Player, Town,
	APP, APPID, warn, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser, console,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	bestObjValue,
*/
/********** Worker.Generals **********
* Updates the list of Generals
* Finds best General for other classes
* *** Need to take into account army size and real stats for attack and defense
*/
var Generals = new Worker('Generals');
Generals.temp = null;

Generals.settings = {
	unsortable:true,
	taint:true
};

Generals.defaults['castle_age'] = {
	pages:'* heroes_generals heroes_heroes keep_stats'
};

Generals.option = {
	zin:false
};

Generals.display = [
	{
		id:'zin',
		label:'Automatically use Zin',
		checkbox:true
	}
];

Generals.runtime = {
	multipliers: {}, // Attack multipliers list for Orc King and Barbarus type generals
	force: false,
	armymax:1 // Don't force someone with a small army to buy a whole load of extra items...
};

Generals.init = function(old_revision) {
	if (!Player.get('attack') || !Player.get('defense')) { // Only need them the first time...
		this._watch(Player, 'data.attack');
		this._watch(Player, 'data.defense');
	}
	this._watch(Player, 'data.army');
	this._watch(Player, 'data.armymax');
	this._watch(Town, 'runtime.invade');
	this._watch(Town, 'runtime.duel');
	this._watch(Town, 'runtime.war');
	this._watch(Town, 'data'); // item counts

	// last recalc revision is behind the current, fire a reminder
	if (this.get('runtime.revision', 0, 'number') < revision) {
		this._remind(1, 'revision');
	} else if (this.get('runtime.force')) {
		this._remind(1, 'force');
	}
};

Generals.page = function(page, change) {
	var now = Date.now(), self = this, i, j, seen = {}, el, el2, tmp, name, item, icon;

	if (($('div.results').text() || '').match(/has gained a level!/i)) {
		if ((name = Player.get('general'))) { // Our stats have changed but we don't care - they'll update as soon as we see the Generals page again...
			this.add(['data',name,'level'], 1);
			if (page !== (j = 'heroes_generals')) {
				Page.setStale(j, now);
			}
		}
	}

	if (page === 'heroes_generals') {
		tmp = $('.generalSmallContainer2');
		for (i=0; i<tmp.length; i++) {
			el = tmp[i];
			try {
				this._transaction(); // BEGIN TRANSACTION
				name = $('.general_name_div3_padding', el).text().trim();
				assert(name && name.indexOf('\t') === -1 && name.length < 30, 'Bad general name - found tab character');
				seen[name] = true;
				assert(this.set(['data',name,'id'], parseInt($('input[name=item]', el).val()), 'number') !== false, 'Bad general id: '+name);
				assert(this.set(['data',name,'type'], parseInt($('input[name=itype]', el).val()), 'number') !== false, 'Bad general type: '+name);
				assert(this.set(['data',name,'img'], $('.imgButton', el).attr('src').filepart(), 'string'), 'Bad general image: '+name);
				assert(this.set(['data',name,'att'], $('.generals_indv_stats_padding div:eq(0)', el).text().regex(/(\d+)/), 'number') !== false, 'Bad general attack: '+name);
				assert(this.set(['data',name,'def'], $('.generals_indv_stats_padding div:eq(1)', el).text().regex(/(\d+)/), 'number') !== false, 'Bad general defense: '+name);
				this.set(['data',name,'progress'], j = parseInt($('.generals_indv_stats', el).next().children().eq(0).children().eq(0).children().eq(1).attr('style').regex(/width:(\d+\.?\d*)%/i), 10));
				// If we just maxed level, remove the priority
				if ((j || 0) >= 100) {
					this.set(['data',name,'priority']);
				}
				this.set(['data',name,'skills'], $(el).children(':last').html().replace(/\<[^>]*\>|\s+/gm,' ').trim());
				j = parseInt($('.generals_indv_stats', el).next().next().text().regex(/(\d*\.*\d+)% Charged!/im), 10);
				if (j) {
					this.set(['data',name,'charge'], Date.now() + Math.floor(3600000 * ((1-j/100) * this.data[name].skills.regex(/(\d*) Hour Cooldown/im))));
					//log(LOG_WARN, name + ' ' + makeTime(this.data[name].charge, 'g:i a'));
				}
				this.set(['data',name,'level'], parseInt($(el).text().regex(/Level (\d+)/im), 10));
				this.set(['data',name,'own'], 1);
				this._transaction(true); // COMMIT TRANSACTION
			} catch(e) {
				this._transaction(false); // ROLLBACK TRANSACTION on any error
				log(e, e.name + ' in ' + this.name + '.page(' + change + '): ' + e.message);
			}
		}

		// parse general equipment, including those not yet owned
		name = $('div.general_name_div3').first().text().trim();
		if (this.get(['data',name])) {
			tmp = $('div[style*="model_items.jpg"] img[title]');
			for (i=0; i<tmp.length; i++) {
				el = tmp[i];
				item = $(el).attr('title');
				icon = ($(el).attr('src') || '').filepart();
				if (isString(item)) {
					item = item.replace('[not owned]', ' ').replace(/\<^>]*\>|\s+/gim, ' ').trim();
					if ((j = item.match(/^\s*([^:]*\w)\s*:\s*(.*\w)\s*$/i))) {
						item = Town.qualify(j[1], icon);
						Resources.set(['_'+item,'generals'], Math.max(1, Resources.get(['_'+item,'generals'], 0, 'number')));
						this.set(['data',name,'equip',item], j[2]);
					}
				}
			}
			i = ($('div.general_pic_div3 a img[title]').first().attr('title') || '').trim();
			if (i && (j = i.regex(/\bmax\.? (\d+)\b/im))) {
				this.set(['data', name, 'stats', 'cap'], j);
			}
			this.set(['data',name,'seen'], now);
		}

		// purge generals we didn't see
		for (i in this.data) {
			if (!seen[i]) {
				this.set(['data',i]);
			}
		}
	} else if (page === 'heroes_heroes') {
		// parse upkeep
		if ((tmp = $('.mContTMainBack div:contains("Total Upkeep")')).length) {
			j = ($('b.negative', tmp).text() || '').replace(/,/gm, '');
			if (isNumber(i = j.regex(/^\s*-?\$(\d+)\s*$/m))) {
				Player.set('upkeep', i);
			}
		}

		// parse purchasable heroes
		tmp = $('.hero_buy_row');
		for (j = 0; j < tmp.length; j++) {
			el = tmp[j];
			el2 = $('.hero_buy_image img', el);
			name = ($(el2).attr('title') || '').trim();
			if (name) {
				try {
					self._transaction(); // BEGIN TRANSACTION
					icon = ($(el2).attr('src') || '').filepart();
					info = $('.hero_buy_info', el);
					stats = $('.hero_select_stats', el);
					costs = $('.hero_buy_costs', el);
					i = $('form', costs).attr('id') || '';
					if (isNumber(i = i.regex(/^app\d+_item(?:buy|sell)_(\d+)$/i))) {
						self.set(['data',name,'id'], i);
					}

					if (icon) {
						self.set(['data',name,'img'], icon);
					}

					// only use these atk/def values if we don't know this general
					if (!self.data[name]) {
						i = $('div:contains("Attack")', stats).text() || '';
						if (isNumber(i = i.regex(/\b(\d+)\s*Attack\b/im))) {
							self.set(['data',name,'att'], i);
						}

						i = $('div:contains("Defense")', stats).text() || '';
						if (isNumber(i = i.regex(/\b(\d+)\s*Defense\b/im))) {
							self.set(['data',name,'def'], i);
						}
					}

					i = $(costs).text() || '';
					if ((i = i.regex(/\bRecruited:\s*(\w+)\b/im))) {
						self.set(['data',name,'own'], i.toLowerCase() === 'yes' ? 1 : 0);
					}

					i = $('.gold', costs).text() || '';
					if (isNumber(i = i.replace(/,/gm, '').regex(/\$(\d+)\b/im))) {
						self.set(['data',name,'cost'], i);
					}

					i = $('div:contains("Upkeep") .negative', info).text() || '';
					if (isNumber(i = i.replace(/,/gm, '').regex(/\$(\d+)\b/im))) {
						self.set(['data',name,'upkeep'], i);
					}
					self._transaction(true); // COMMIT TRANSACTION
				} catch (e2) {
					self._transaction(false); // ROLLBACK TRANSACTION on any error
					log(e2, e2.name + ' in ' + self.name + '.page(' + page + ', ' + change + '): ' + e2.message);
				}
			}
		}
	} else if (page === 'keep_stats') {
		// Only when it's our own keep and not someone elses
		if ($('.keep_attribute_section').length) {
			tmp = $('.statsT2 .statsTTitle:contains("HEROES")').not(function(a) {
				return !$(this).text().regex(/^\s*HEROES\s*$/im);
			});
			tmp = $('.statUnit', $(tmp).parent());
			for (i=0; i<tmp.length; i++) {
				el = $('a img[src]', tmp[i]);
				name = ($(el).attr('title') || $(el).attr('alt') || '').trim();

				// new general(s), trigger page visits
				if (name && !this.get(['data',name])) {
					Page.setStale('heroes_heroes', now);
					Page.setStale('heroes_generals', now);
					break;
				}
			}
		}
	}
	return false;
};

Generals.resource = function() {
	Generals.runtime.zin = false;
	if (Generals.option.zin && Generals.get(['data','Zin','charge'],1e99) < Date.now()) {
		Generals.runtime.zin = 'Zin';
		LevelUp.runtime.force.stamina = true;
		return 'stamina';
	}
	return false;
};

Generals.update = function(event, events) {
	var data = this.data, i, j, k, o, p, pa, priority_list = [], list = [],
		pattack, pdefense, maxstamina, maxenergy, stamina, energy,
		army, armymax, gen_att, gen_def, war_att, war_def,
		invade = Town.get('runtime.invade'),
		duel = Town.get('runtime.duel'),
		war = Town.get('runtime.war'),
		attack, attack_bonus, att_when_att = 0, current_att,
		defend, defense_bonus, def_when_att = 0, current_def,
		monster_att = 0, monster_multiplier = 1,
		listpush = function(list,i){list.push(i);},
		skillcombo, calcStats = false, all_stats, bests;

	if (events.findEvent(this, 'init') || events.findEvent(this, 'data')) {
		bests = true;

		k = 0;
		for (i in data) {
			list.push(i);
			p = data[i];
			if ((isNumber(j = p.progress) ? j : 100) < 100) { // Take all existing priorities and change them to rank starting from 1 and keeping existing order.
				priority_list.push([i, p.priority]);
			}
			if (!p.stats) { // Force an update if stats not yet calculated
				this.set(['runtime','force'], true);
			}
			k += p.own || 0;
			if (p.skills) {
				var x, y, num = 0, cap = 0, item, str = null;
				if ((x = p.skills.regex(/\bevery (\d+) ([\w\s']*\w)/im))) {
					num = x[0];
					str = x[1];
				} else if ((x = p.skills.regex(/\bevery ([\w\s']*\w)/im))) {
					num = 1;
					str = x;
				}
				if (p.stats && p.stats.cap) {
					cap = Math.max(cap, p.stats.cap);
				}
				if ((x = p.skills.regex(/\bmax\.? (\d+)/i))) {
					cap = Math.max(cap, x);
				}
				if (str) {
					for (x = str.split(' '); x.length > 0; x.pop()) {
						str = x.join(' ');
						if ((y = str.regex(/^(.+)s$/i))) {
							if (Town.get(['data', y])) {
								item = y;
								break;
							}
						}
						if (Town.get(['data', str])) {
							item = str;
							break;
						}
					}
				}
				if (num && item) {
					Resources.set(['data', '_' + item, 'generals'], num * cap);
//					log(LOG_WARN, 'Save ' + (num * cap) + ' x ' + item + ' for General ' + i);
				}
			}
		}

		// need this since we now store unpurchased heroes also
		this.set('runtime.heroes', k);

		if ((i = priority_list.length)) {
			priority_list.sort(function(a,b) {
				return (a[1] - b[1]);
			});
			this.set(['runtime','max_priority'], i);
			while (i--) {
				this.set(['data',priority_list[i][0],'priority'], parseInt(i, 10)+1);
			}
		}
		// "any" MUST remain lower case - all real generals are capitalised so this provides the first and most obvious difference
		Config.set('generals', ['any','under max level'].concat(list.sort())); 
	}
	
	// busy stuff, so watch how often it runs
	// revision increases force a run via an event

	if ((invade && duel && war
	&& (this.runtime.force
		|| events.findEvent(null, 'data')
		|| events.findEvent(Town)
		|| events.findEvent(Player)))
	|| events.findEvent(this, 'reminder', 'revision')) {
		bests = true;
		this.set(['runtime','force'], false);

		pattack = Player.get('attack', 1, 'number');
		pdefense = Player.get('defense', 1, 'number');
		maxstamina = Player.get('maxstamina', 1, 'number');
		maxenergy = Player.get('maxenergy', 1, 'number');
		maxhealth = Player.get('maxhealth', 100, 'number');
		stamina = Player.get('stamina', 1, 'number');
		energy = Player.get('energy', 1, 'number');
		health = Player.get('health', 0, 'number');
		armymax = Player.get('armymax', 1, 'number');

		if (events.findEvent(Player) && pattack > 1 && pdefense > 1) {
			// Only need them the first time...
			this._unwatch(Player, 'data.attack');
			this._unwatch(Player, 'data.defense');
		}

		for (i in data) {
			p = data[i];

			this.set(['data',i,'invade']);
			this.set(['data',i,'duel']);
			this.set(['data',i,'war']);
			this.set(['data',i,'monster']);
			this.set(['data',i,'potential']);
			this.set(['data',i,'stats','stamina']);
			this.set(['data',i,'stats','energy']);

			// update the weapon bonus list
			s = '';
			if ((o = p.equip)) {
				for (j in o) {
					if (Town.get(['data',j,'own'], 0, 'number') > 0) {
						if (s !== '') { s += '; '; }
						s += j + ': ' + o[j];
					}
				}
			}
			if (s) {
				this.set(['data',i,'weaponbonus'], s);
			} else {
				this.set(['data',i,'weaponbonus']);
			}

			skillcombo = ';' + (p.skills || '') + ';' + s + ';';

			// .att
			// .def
			// .own
			// .cost
			// .upkeep
			// .stats
			//   .att (effective attack if different from att)
			//   .def (effective defense if different from def)
			//   .att_when_att
			//   .def_when_att
			//   .invade
			//     .att
			//     .def
			//     .raid
			//   .duel
			//     .att
			//     .def
			//     .raid
			//   .war
			//     .att
			//     .def
			//   .monster
			//     .att
			//     .def
			//   .cost
			//   .cash

			all_stats = sum(skillcombo.regex(/\bAll Stats by ([-+]?\d*\.?\d+)\b/gi)) || 0;

			k = {};
			if ((o = skillcombo.regex(/\bEvery (\d+) ([^;]*?\w)(?:\s*Increase|\s*Decrease)?(?:\s+Player)? (Attack|Defense) by ([-+]?\d*\.?\d+)/i))) {
				k['p'+o[2].toLowerCase()] = Math.floor(o[3] * Math.floor(Town.get(['data',o[1],'own'], 0, 'number') / (o[0] || 1)));
			} else if ((o = skillcombo.regex(/\bEvery ([^;]*?\w)(?:\s*Increase|\s*Decrease)?(?:\s+Player)? (Attack|Defense) by ([-+]?\d*\.?\d+)/i))) {
				k['p'+o[1].toLowerCase()] = Math.floor(o[2] * Town.get(['data',o[0],'own'], 0, 'number'));
			}

			j = Math.floor(sum(skillcombo.regex(/([-+]?\d*\.?\d+) Player Attack\b|\bPlayer Attack by ([-+]\d+)\b|\bConvert ([-+]?\d*\.?\d+) Attack\b/gi))
			  + sum(skillcombo.regex(/([-+]?\d*\.?\d+) Player Attack for every Hero Owned|/gi)) * ((this.runtime.heroes || 0) - 1)
			  + all_stats + (k.pattack || 0));
			this.set(['data',i,'stats','patt'], j ? j : undefined);

			j = Math.floor(sum(skillcombo.regex(/([-+]?\d*\.?\d+) Player Defense|Player Defense by ([-+]?\d*\.?\d+)/gi))
			  + (sum(skillcombo.regex(/\bPlayer Defense by ([-+]?\d*\.?\d+) for every 3 Health\b/gi)) * maxhealth / 3)
			  + sum(skillcombo.regex(/([-+]?\d*\.?\d+) Player Defense for every Hero Owned/gi)) * ((this.runtime.heroes || 0) - 1)
			  + all_stats + (k.pdefense || 0));
			this.set(['data',i,'stats','pdef'], j ? j : undefined);

			j = Math.floor(sum(skillcombo.regex(/([-+]?\d*\.?\d+) [Aa]ttack [Tt]o [A-Z]/g))
			  + sum(skillcombo.regex(/([-+]?\d*\.?\d+) Attack when[^;]*equipped\b/gi)));
			this.set(['data',i,'stats','att'], j ? j : undefined);

			j = Math.floor(sum(skillcombo.regex(/([-+]?\d*\.?\d+) Defense to\b/gi))
			  + sum(skillcombo.regex(/([-+]?\d*\.?\d+) Defense when[^;]*equipped\b/gi)));
			this.set(['data',i,'stats','def'], j ? j : undefined);

			j = ((p.att || 0)
			  + ((p.stats && p.stats.att) || 0)
			  + ((p.def || 0)
			  + ((p.stats && p.stats.def) || 0)) * 0.7).round(1);
			this.set(['data',i,'tot_att'], j ? j : undefined);
			this.set(['data',i,'stats','tot_att']);

			j = (((p.att || 0)
			  + ((p.stats && p.stats.att) || 0)) * 0.7
			  + (p.def || 0)
			  + ((p.stats && p.stats.def) || 0)).round(1);
			this.set(['data',i,'tot_def'], j ? j : undefined);
			this.set(['data',i,'stats','tot_def']);

			j = sum(skillcombo.regex(/([-+]?\d+) Monster attack\b/gi));
			this.set(['data',i,'stats','matt'], j ? j : undefined);

			j = sum(skillcombo.regex(/\bPlayer Attack when Defending by ([-+]?\d+)\b|([-+]?\d+) Attack when attacked\b/gi));
			this.set(['data',i,'stats','patt_when_att'], j ? j : undefined);

			j = sum(skillcombo.regex(/\bPlayer Defense when Defending by ([-+]?\d+)\b|([-+]?\d+) Defense when attacked\b/gi));
			this.set(['data',i,'stats','pdef_when_att'], j ? j : undefined);

			army = Math.min(armymax + nmax(0, skillcombo.regex(/\b(\d+) Army members?/gi)), nmax(0, skillcombo.regex(/\bArmy Limit to (\d+)\b/gi)) || 501);

			gen_att = getAttDef(data, listpush, 'att', 1 + Math.floor((army - 1) / 5));
			gen_def = getAttDef(data, listpush, 'def', 1 + Math.floor((army - 1) / 5));

			war_att = getAttDef(data, listpush, 'att', 6);
			war_def = getAttDef(data, listpush, 'def', 6);

			monster_multiplier = 1.1 + sum(skillcombo.regex(/([-+]?\d+)% Critical\b/gi))/100;

			// invade calcs

			j = Math.floor((invade.attack || 0) + gen_att +
			  + ((p.att || 0) + ((p.stats && p.stats.att) || 0)
			  + (((p.stats && p.stats.patt) || 0)
			  + pattack) * army)
			  + ((p.def || 0) + ((p.stats && p.stats.def) || 0)
			  + (((p.stats && p.stats.pdef) || 0)
			  + pdefense) * army) * 0.7);
			this.set(['data',i,'stats','invade','att'], j ? j : undefined);

			j = Math.floor((invade.defend || 0) + gen_def +
			  + ((p.att || 0) + ((p.stats && p.stats.att) || 0)
			  + ((((p.stats && p.stats.patt) || 0)
			  + ((p.stats && p.stats.patt_when_att) || 0))
			  + pattack) * army) * 0.7
			  + ((p.def || 0) + ((p.stats && p.stats.def) || 0)
			  + ((((p.stats && p.stats.pdef) || 0)
			  + ((p.stats && p.stats.pdef_when_att) || 0))
			  + pdefense) * army));
			this.set(['data',i,'stats','invade','def'], j ? j : undefined);

			// duel calcs

			j = Math.floor((duel.attack || 0) +
			  + ((p.att || 0) + ((p.stats && p.stats.att) || 0)
			  + ((p.stats && p.stats.patt) || 0)
			  + pattack)
			  + ((p.def || 0) + ((p.stats && p.stats.def) || 0)
			  + ((p.stats && p.stats.pdef) || 0)
			  + pdefense) * 0.7);
			this.set(['data',i,'stats','duel','att'], j ? j : undefined);

			j = Math.floor((duel.defend || 0) +
			  + ((p.att || 0) + ((p.stats && p.stats.att) || 0)
			  + ((p.stats && p.stats.patt) || 0)
			  + ((p.stats && p.stats.patt_when_att) || 0)
			  + pattack) * 0.7
			  + ((p.def || 0) + ((p.stats && p.stats.def) || 0)
			  + ((p.stats && p.stats.pdef) || 0)
			  + ((p.stats && p.stats.pdef_when_att) || 0)
			  + pdefense));
			this.set(['data',i,'stats','duel','def'], j ? j : undefined);

			// war calcs

			j = Math.floor((duel.attack || 0) + war_att
			  + (((p.stats && p.stats.patt) || 0)
			  + pattack)
			  + (((p.stats && p.stats.pdef) || 0)
			  + pdefense) * 0.7);
			this.set(['data',i,'stats','war','att'], j ? j : undefined);

			j = Math.floor((duel.defend || 0) + war_def
			  + (((p.stats && p.stats.patt) || 0)
			  + ((p.stats && p.stats.patt_when_att) || 0)
			  + pattack) * 0.7
			  + (((p.stats && p.stats.pdef) || 0)
			  + ((p.stats && p.stats.pdef_when_att) || 0)
			  + pdefense));
			this.set(['data',i,'stats','war','def'], j ? j : undefined);

			// monster calcs

			// not quite right, gear defense not counted on monster attack
			j = Math.floor(((duel.attack || 0) +
			  + (p.att || 0) + ((p.stats && p.stats.att) || 0)
			  + ((p.stats && p.stats.patt) || 0)
			  + pattack
			  + ((p.stats && p.stats.matt) || 0))
			  * monster_multiplier);
			this.set(['data',i,'stats','monster','att'], j ? j : undefined);

			// not quite right, gear attack not counted on monster defense
			j = Math.floor((duel.defend || 0) +
			  + ((p.stats && p.stats.def) || p.att || 0)
			  + ((p.stats && p.stats.pdef) || 0)
			  + pdefense
			  + ((p.stats && p.stats.mdef) || 0));
			this.set(['data',i,'stats','monster','def'], j ? j : undefined);

			j = nmax(0, skillcombo.regex(/Increase Power Attacks by (\d+)/gi));
			this.set(['runtime','multipliers',i], j ? j : undefined);

			j = sum(skillcombo.regex(/\bMax Energy by ([-+]?\d+)\b|([-+]?\d+) Max Energy\b/gi))
			  - (sum(skillcombo.regex(/\bTransfer (\d+)% Max Energy to\b/gi)) * Player.get('maxenergy') / 100).round(0)
			  + (sum(skillcombo.regex(/\bTransfer (\d+)% Max Stamina to Max Energy/gi)) * Player.get('maxstamina') / 100*2).round(0)
			  + all_stats;
			this.set(['data',i,'stats','maxenergy'], j ? j : undefined);

			j = sum(skillcombo.regex(/\bMax Stamina by ([-+]?\d+)|([-+]?\d+) Max Stamina/gi))
			  - (sum(skillcombo.regex(/Transfer (\d+)% Max Stamina to\b/gi)) * maxstamina / 100).round(0)
			  + (sum(skillcombo.regex(/Transfer (\d+)% Max Energy to Max Stamina/gi)) * maxenergy / 200).round(0)
			  + all_stats;
			this.set(['data',i,'stats','maxstamina'], j ? j : undefined);

			j = all_stats;
			this.set(['data',i,'stats','maxhealth'], j ? j : undefined);

			j = skillcombo.regex(/Bank Fee/gi) ? 100 : 0;
			this.set(['data',i,'stats','bank'], j ? j : undefined);

			j = nmax(0, skillcombo.regex(/\bBonus \$?(\d+) Gold\b/gi));
			this.set(['data',i,'stats','cash'], j ? j : undefined);

			j = nmax(0, skillcombo.regex(/\bDecreases? Soldier Cost by (\d+)%/gi));
			this.set(['data',i,'stats','cost'], j ? j : undefined);

			j = skillcombo.regex(/Extra Demi Points/gi) ? 5 : 0;
			this.set(['data',i,'stats','demi'], j ? j : undefined);

			j = nmax(0, skillcombo.regex(/\bIncrease Income by (\d+)\b/gi));
			this.set(['data',i,'stats','income'], j ? j : undefined);

			j = nmax(0, skillcombo.regex(/\bInfluence (\d+)% Faster\b/gi));
			this.set(['data',i,'stats','influence'], j ? j : undefined);

			j = nmax(0, skillcombo.regex(/Chance ([-+]?\d+)% Drops|\bitems from quests by (\d+)%/gi));
			this.set(['data',i,'stats','item'], j ? j : undefined);

			this.set(['runtime','armymax'], Math.max(army, this.runtime.armymax));
		}

		this.set('runtime.revision', revision);
	}

	if (bests || !this.runtime.best) {
		bests = {};
		list = {};

		for (i in this.data) {
			p = this.data[i];
			if (p.stats && p.own) {
				for (j in p.stats) {
					if (isNumber(p.stats[j])) {
						if ((bests[j] || -1e99) < p.stats[j]) {
							bests[j] = p.stats[j];
							list[j] = i;
						}
					} else if (isObject(p.stats[j])) {
						for (k in p.stats[j]) {
							if (isNumber(p.stats[j][k])) {
								o = j + '-' + k;
								if ((bests[o] || -1e99) < p.stats[j][k]) {
									bests[o] = p.stats[j][k];
									list[o] = i;
								}
							}
						}
					}
				}
				if (isNumber(p[j = 'priority'])) {
					if ((bests[j] || 1e99) > p[j]) {
						bests[j] = p[j];
						list[j] = i;
					}
				}
			}
		}

		this.set(['runtime','best']);
		for (i in bests) {
			this.set(['runtime','best',i], list[i]);
		}
	}

	return true;
};

Generals.to = function(name) {
	this._unflush();
	if (name) {
		name = this.best(name);
	}
	if (!name || Player.get('general') === name || name.toLowerCase() === 'any') {
		return true;
	}
	if (!this.data[name]) {
		log(LOG_WARN, 'General "'+name+'" requested but not found!');
		return true; // Not found, so fake it
	}
	if (!this.test(name)) {
		log(LOG_INFO, 'General rejected due to energy or stamina loss: ' + Player.get('general') + ' to ' + name);
		return true;
	}
	log(LOG_WARN, 'General change: ' + Player.get('general') + ' to ' + name);
	var id = this.get(['data',name,'id']), type = this.get(['data',name,'type']);
	Page.to('heroes_generals', isNumber(id) && isNumber(type) ? {item:id, itype:type} : null, true);
	return false;
};

Generals.test = function(name) {
	Generals._unflush();
	var next = isObject(name) ? name : Generals.data[name];
	if (name === 'any') {
		return true;
	} else if (!name || !next) {
		return false;
	} else {
		return (Player.get('maxstamina') + ((next.stats && next.stats.stamina) || 0) >= Player.get('stamina') && Player.get('maxenergy') + ((next.stats && next.stats.energy) || 0) >= Player.get('energy'));
	}
};

Generals.best = function(type) {
	var best = 'any', i;

	if (type && isString(type)) {

		if (this.get(['data',type,'own'])) {
			best = type;
		}

		if ((!best || best === 'any') && (i = this.get(['runtime','best',type]))) {
			if (this.get(['data',i,'own'])) {
				best = i;
			}
		}

		if (!best || best === 'any') {
			switch (type.toLowerCase().replace('_', '-')) {
			case 'stamina':
				i = this.get(['runtime','best','maxstamina']);
				break;
			case 'energy':
				i = this.get(['runtime','best','maxenergy']);
				break;
			case 'health':
				i = this.get(['runtime','best','maxhealth']);
				break;
			case 'raid-duel':
			case 'duel':
			case 'duel-attack':
				i = this.get(['runtime','best','duel-att']);
				break;
			case 'defend':
			case 'duel-defend':
				i = this.get(['runtime','best','duel-def']);
				break;
			case 'raid-invade':
			case 'invade':
			case 'invade-attack':
				i = this.get(['runtime','best','invade-att']);
				break;
			case 'invade-defend':
				i = this.get(['runtime','best','invade-def']);
				break;
			case 'war':
			case 'war-attack':
				i = this.get(['runtime','best','war-att']);
				break;
			case 'war-defend':
				i = this.get(['runtime','best','war-def']);
				break;
			case 'monster':
			case 'monster-attack':
				i = this.get(['runtime','best','monster-att']);
				break;
			case 'monster-defend':
			case 'dispell':
				i = this.get(['runtime','best','monster-def']);
				break;
			case 'under max level':
				i = this.get(['runtime','best','priority']);
				break;
			default:
				i = null;
				break;
			}

			if (i && this.get(['data',i,'own'])) {
				best = i;
			}
		}
	}

	return best;
};

Generals.order = [];
Generals.dashboard = function(sort, rev) {
	var self = this, i, j, o, p, data, output = [], list = [], iatt = 0, idef = 0, datt = 0, ddef = 0, matt = 0, mdef = 0,
		sorttype = [
			'img',
			'name',
			'level',
			'priority',
			'stats.invade.att',
			'stats.invade.def',
			'stats.duel.att',
			'stats.duel.def',
			'stats.monster.att',
			'stats.monster.def'
		];

	if (typeof sort === 'undefined') {
		this.order = [];
		for (i in this.data) {
			this.order.push(i);
		}
	}
	if (typeof sort === 'undefined') {
		sort = this.runtime.sort || 1;
	}
	if (typeof rev === 'undefined'){
		rev = this.runtime.rev || false;
	}
	this.set('runtime.sort', sort);
	this.set('runtime.rev', rev);
	if (typeof sort !== 'undefined') {
		this.order.sort(function(a,b) {
			var aa, bb, type, x;
			if (sort === 1) {
				aa = a;
				bb = b;
			} else if (sort === 3) {
				aa = self.get(['data',a,'priority'], self.get(['data',a,'charge'], 1e9, 'number'), 'number');
				bb = self.get(['data',b,'priority'], self.get(['data',b,'charge'], 1e9, 'number'), 'number');
			} else if ((i = sorttype[sort])) {
				aa = self.get(['data',a].concat(i.split('.')), 0, 'number');
				bb = self.get(['data',b].concat(i.split('.')), 0, 'number');
			}
			if (typeof aa === 'string' || typeof bb === 'string') {
				return (rev ? (''+bb).localeCompare(aa) : (''+aa).localeCompare(bb));
			}
			return (rev ? aa - bb : bb - aa);
		});
	}

	for (i in this.data) {
		p = this.get(['data',i,'stats']) || {};
		iatt = Math.max(iatt, this.get([p,'invade','att'], 1, 'number'));
		idef = Math.max(idef, this.get([p,'invade','def'], 1, 'number'));
		datt = Math.max(datt, this.get([p,'duel','att'], 1, 'number'));
		ddef = Math.max(ddef, this.get([p,'duel','def'], 1, 'number'));
		matt = Math.max(matt, this.get([p,'monster','att'], 1, 'number'));
		mdef = Math.max(mdef, this.get([p,'monster','def'], 1, 'number'));
	}

	th(output, '');
	th(output, 'General');
	th(output, 'Level');
	th(output, 'Rank /<br>Timer');
	th(output, 'Invade<br>Attack');
	th(output, 'Invade<br>Defend');
	th(output, 'Duel<br>Attack');
	th(output, 'Duel<br>Defend');
	th(output, 'Monster<br>Attack');
	th(output, 'Fortify<br>Dispel');

	list.push('<table cellspacing="0" style="width:100%"><thead><tr>' + output.join('') + '</tr></thead><tbody>');

	for (o=0; o<this.order.length; o++) {
		i = this.order[o];
		p = this.get(['data',i]) || {};
		output = [];
		j = this.get([p, 'weaponbonus']);
		td(output, '<a class="golem-link" href="generals.php?item=' + p.id + '&itype=' + p.type + '"><img src="' + imagepath + p.img + '" style="width:25px;height:25px;" title="Skills: ' + this.get([p,'skills'], 'none') + (j ? '; Weapon Bonus: ' + j : '') + '"></a>');
		td(output, i);
		td(output, '<div'+(isNumber(p.progress) ? ' title="'+p.progress+'%"' : '')+'>'+p.level+'</div><div style="background-color: #9ba5b1; height: 2px; width=100%;"><div style="background-color: #1b3541; float: left; height: 2px; width: '+(p.progress || 0)+'%;"></div></div>');
		td(output, p.priority ? ((p.priority !== 1 ? '<a class="golem-moveup" name='+p.priority+'>&uarr;</a> ' : '&nbsp;&nbsp; ') + p.priority + (p.priority !== this.runtime.max_priority ? ' <a class="golem-movedown" name='+p.priority+'>&darr;</a>' : ' &nbsp;&nbsp;'))
				: !this.get([p,'charge'],0)
				? '&nbsp;&nbsp; '
				: (this.get([p,'charge'],0) <= Date.now()
				? 'Now'
				: makeTime(this.get([p,'charge'],0), 'g:i a')));
		td(output, (j = this.get([p,'stats','invade','att'],0,'number')).addCommas(), (iatt === j ? 'style="font-weight:bold;"' : ''));
		td(output, (j = this.get([p,'stats','invade','def'],0,'number')).addCommas(), (idef === j ? 'style="font-weight:bold;"' : ''));
		td(output, (j = this.get([p,'stats','duel','att'],0,'number')).addCommas(), (datt === j ? 'style="font-weight:bold;"' : ''));
		td(output, (j = this.get([p,'stats','duel','def'],0,'number')).addCommas(), (ddef === j ? 'style="font-weight:bold;"' : ''));
		td(output, (j = this.get([p,'stats','monster','att'],0,'number')).addCommas(), (matt === j ? 'style="font-weight:bold;"' : ''));
		td(output, (j = this.get([p,'stats','monster','def'],0,'number')).addCommas(), (mdef === j ? 'style="font-weight:bold;"' : ''));
 		tr(list, output.join(''));
	}

	list.push('</tbody></table>');

	$('a.golem-moveup').live('click', function(event){
		var i, gdown, gup, x = parseInt($(this).attr('name'), 10);
		Generals._unflush();
		for(i in Generals.data){
			if (Generals.data[i].priority === x){
				gup = i;
			}
			if (Generals.data[i].priority === (x-1)){
				gdown = i;
			}
		}
		if (gdown && gup) {
			log('Priority: Swapping '+gup+' with '+gdown);
			Generals.set(['data',gdown,'priority'], Generals.data[gdown].priority + 1);
			Generals.set(['data',gup,'priority'], Generals.data[gup].priority - 1);
		}
//		Generals.dashboard(sort,rev);
		return false;
	});
	$('a.golem-movedown').live('click', function(event){
		var i, gdown, gup, x = parseInt($(this).attr('name'), 10);
		Generals._unflush();
		for(i in Generals.data){
			if (Generals.data[i].priority === x){
				gdown = i;
			}
			if (Generals.data[i].priority === (x+1)) {
				gup = i;
			}
		}
		if (gdown && gup) {
			log('Priority: Swapping '+gup+' with '+gdown);
			Generals.set(['data',gdown,'priority'], Generals.data[gdown].priority + 1);
			Generals.set(['data',gup,'priority'], Generals.data[gup].priority - 1);
		}
//		Generals.dashboard(sort,rev);
		return false;
	});
	$('#golem-dashboard-Generals').html(list.join(''));
	$('#golem-dashboard-Generals tbody tr td:nth-child(2)').css('text-align', 'left');
	if (typeof sort !== 'undefined') {
		$('#golem-dashboard-Generals thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	}
};

// vi: ts=4
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Gift() **********
* Auto accept gifts and return if needed
* *** Needs to talk to Alchemy to work out what's being made
* If we've got a rogue gift - http://apps.facebook.com/castle_age/army.php?act=acpt&uid=all
*/
var Gift = new Worker('Gift');
Gift.temp = null;

Gift.defaults['castle_age'] = {
	pages:'* facebook index army_invite army_gifts gift_accept'
};

Gift.data = {
	received: [],
	todo: {},
	gifts: {}
};

Gift.option = {
	type:'None'
};

Gift.runtime = {
	work:false,
	gift_waiting:false,
	gift_delay:0,
	gift_sent:0,
	sent_id:null,
	gift:{
		sender_id:null,
		sender_ca_name:null,
		sender_fb_name:null,
		name:null,
		id:null
	}
};

Gift.display = [
	{
		label:'Work in progress...'
	},{
		id:'type',
		label:'Return Gifts',
		select:['None', 'Random', 'Same as Received']
	}
];

Gift.init = function() {
	delete this.data.uid;
	delete this.data.lastgift;
	if (length(this.data.gifts)) {
		var i, gift_ids = [], random_gift_id;
		for (i in this.data.gifts) {
			gift_ids.push(i);
		}
		for (i in this.data.todo) {
			if (!(/\D/g).test(i)) {	// If we have an old entry
				random_gift_id = Math.floor(Math.random() * gift_ids.length);
				if (!this.data.todo[gift_ids[random_gift_id]]) {
					this.data.todo[gift_ids[random_gift_id]] = [];
				}
				this.data.todo[gift_ids[random_gift_id]].push(i);
				delete this.data.todo[i];
			}
		}
	}
};

Gift.page = function(page, change) {
/*
	if (change) {
		if (change === 'facebook') {
			log(LOG_DEBUG, 'Facebook popup parsed...');
		}
		return false;
	}
*/
	var i, j, id, $tmp, gifts = this.data.gifts, todo = this.data.todo, received = this.data.received;
	if (page === 'index') {
		// We need to get the image of the gift from the index page.
//		log(LOG_DEBUG, 'Checking for a waiting gift and getting the id of the gift.');
		if ($('span.result_body').text().indexOf('has sent you a gift') >= 0) {
			this.runtime.gift.sender_ca_name = $('span.result_body').text().regex(/[\t\n]*(.+) has sent you a gift/i);
			this.runtime.gift.name = $('span.result_body').text().regex(/has sent you a gift:\s+(.+)!/i);
			this.runtime.gift.id = $('span.result_body img').attr('src').filepart();
			log(LOG_WARN, this.runtime.gift.sender_ca_name + ' has a ' + this.runtime.gift.name + ' waiting for you. (' + this.runtime.gift.id + ')');
			this.runtime.gift_waiting = true;
//			return true;
		} else if ($('span.result_body').text().indexOf('warrior wants to join your Army') >= 0) {
			this.runtime.gift.sender_ca_name = 'A Warrior';
			this.runtime.gift.name = 'Random Soldier';
			this.runtime.gift.id = 'random_soldier';
			log(LOG_WARN, this.runtime.gift.sender_ca_name + ' has a ' + this.runtime.gift.name + ' waiting for you.');
			this.runtime.gift_waiting = true;
//			return true;
		} else {
//			log(LOG_WARN, 'No more waiting gifts. Did we miss the gift accepted page?');
			this.runtime.gift_waiting = false;
			this.runtime.gift = {}; // reset our runtime gift tracker
		}
	} else if (page === 'army_invite') {
		// Accepted gift first
//		log(LOG_WARN, 'Checking for accepted gift.');
		if (this.runtime.gift.sender_id) { // if we have already determined the ID of the sender
			if ($('div.game').text().indexOf('accepted the gift') >= 0 || $('div.game').text().indexOf('have been awarded the gift') >= 0) { // and we have just accepted a gift
				log('Accepted ' + this.runtime.gift.name + ' from ' + this.runtime.gift.sender_ca_name + '(id:' + this.runtime.gift.sender_id + ')');
				received.push(this.runtime.gift); // add the gift to our list of received gifts.  We will use this to clear facebook notifications and possibly return gifts
				this.runtime.work = true;	// We need to clear our facebook notifications and/or return gifts
				this.runtime.gift = {}; // reset our runtime gift tracker
			}
		}
		// Check for gifts
//		log(LOG_WARN, 'Checking for waiting gifts and getting the id of the sender if we already have the sender\'s name.');
		if ($('div.messages').text().indexOf('a gift') >= 0) { // This will trigger if there are gifts waiting
			this.runtime.gift_waiting = true;
			if (!this.runtime.gift.id) { // Do we have the info from the index page yet?
//				log(LOG_WARN, 'Sender Name: ' + $('div.messages img[title*="' + this.runtime.gift.sender_ca_name + '"]').first().attr('title'));
				if (($tmp = $('div.messages img[uid]').first()).length) {
					this.runtime.gift.sender_id = $tmp.attr('uid'); // get the ID of the gift sender. (The sender listed on the index page should always be the first sender listed on the army page.)
					this.runtime.gift.sender_fb_name = $tmp.attr('title');
				} else if (($tmp = $('div.messages a.fb_link').first()).length) { // web3
					this.runtime.gift.sender_id = $tmp.attr('href').regex(/id=(\d+)$/i);
					this.runtime.gift.sender_fb_name = $tmp.text();
				} else {
					log("Can't find the gift sender's ID: " + this.runtime.gift.sender_id);
				}
			}
		} else {
//			log('No more waiting gifts. Did we miss the gift accepted page?');
			this.runtime.gift_waiting = false;
			this.runtime.gift = {}; // reset our runtime gift tracker
		}
	
	} else if (page === 'gift_accept'){
		// Check for sent
//		log('Checking for sent gifts.');
		if (this.runtime.sent_id && $('div#'+APPID_+'results_main_wrapper').text().indexOf('You have sent') >= 0) {
			log(gifts[this.runtime.sent_id].name+' sent.');
			for (j=todo[this.runtime.sent_id].length-1; j >= Math.max(todo[this.runtime.sent_id].length - 30, 0); j--) {	// Remove the IDs from the list because we have sent them
				todo[this.runtime.sent_id].pop();
			}
			if (!todo[this.runtime.sent_id].length) {
				delete todo[this.runtime.sent_id];
			}
			this.runtime.sent_id = null;
			if (!todo.length) {
				this.runtime.work = false;
			}
		}
		
	} else if (page === 'army_gifts') { // Parse for the current available gifts
//		log('Parsing gifts.');
		gifts = this.data.gifts = {};
		// Gifts start at 1
		for (i=1, $tmp=[0]; $tmp.length; i++) {
			$tmp = $('#'+APPID_+'gift'+i);
			if ($tmp.length) {
				id = $('img', $tmp).attr('src').filepart();
				gifts[id] = {slot:i, name: $tmp.text().trim().replace('!','')};
//				log('Adding: '+gifts[id].name+' ('+id+') to slot '+i);
			}
		}
	} else {
		if ($('div.result').text().indexOf('have exceed') !== -1){
			log('We have run out of gifts to send.  Waiting one hour to retry.');
			this.runtime.gift_delay = Date.now() + 3600000;	// Wait an hour and try to send again.
		}
	}
	return false;
};

Gift.update = function(event) {
	this.runtime.work = length(this.data.todo) > 0 || length(this.data.received) > 0;
};

Gift.work = function(state) {
	if (!this.runtime.gift_waiting && (!this.runtime.work || this.runtime.gift_delay > Date.now())) {
		if (state && !Page.to('index')) {	// Force us to another page before giving up focus - hopefully fix reload issues
			return QUEUE_CONTINUE;
		}
		return QUEUE_FINISH;
	}
	if (!state) {                
		if (this.runtime.gift_waiting || this.runtime.work) {	// We need to get our waiting gift or return gifts.
			return QUEUE_CONTINUE;
		}
		return QUEUE_FINISH;
	}
	if (!Generals.to(Idle.option.general)){
		return QUEUE_CONTINUE;
	}
	if(this.runtime.gift_waiting && !this.runtime.gift.id) {	// We have a gift waiting, but we don't know the id.
		if (!Page.to('index')) {	// Get the gift id from the index page.
			return QUEUE_CONTINUE;
		}
	}
	if(this.runtime.gift.id && !this.runtime.gift.sender_id) {	// We have a gift id, but no sender id.
		if (!Page.to('army_invite')) {	// Get the sender id from the army_invite page.
			return QUEUE_CONTINUE;
		}
	}
	if (this.runtime.gift.sender_id) { // We have the sender id so we can receive the gift.
		if (!Page.to('army_invite')) {
			return QUEUE_CONTINUE;
		}
//		log('Accepting ' + this.runtime.gift.name + ' from ' + this.runtime.gift.sender_ca_name + '(id:' + this.runtime.gift.sender_id + ')');
		if (!Page.to('army_invite', {act:'acpt', rqtp:'gift', uid:this.runtime.gift.sender_id}) || this.runtime.gift.sender_id.length > 0) {	// Shortcut to accept gifts without going through Facebook's confirmation page
			return QUEUE_CONTINUE;
		}
	}
	
	var i, j, k, todo = this.data.todo, received = this.data.received, gift_ids = [], random_gift_id, temptype;

	if (!received.length && (!length(todo) || (this.runtime.gift_delay > Date.now()))) {
		this.runtime.work = false;
		Page.to('keep_alchemy');
		return QUEUE_INTERRUPT_OK;
	}
	
	// We have received gifts so we need to figure out what to send back.
	if (received.length) {
		Page.to('army_gifts');
		// Fill out our todo list with gifts to send, or not.
		for (i = received.length - 1; i >= 0; i--){
			temptype = this.option.type;
			if (typeof this.data.gifts[received[i].id] === 'undefined' && this.option.type !== 'None') {
				log(received[i].id+' was not found in our sendable gift list.');
				temptype = 'Random';
			}
			switch(temptype) {
				case 'Random':
					if (length(this.data.gifts)) {
						gift_ids = [];
						for (j in this.data.gifts) {
							gift_ids.push(j);
						}
						random_gift_id = Math.floor(Math.random() * gift_ids.length);
						log('Will randomly send a ' + this.data.gifts[gift_ids[random_gift_id]].name + ' to ' + received[i].sender_ca_name);
						if (!todo[gift_ids[random_gift_id]]) {
							todo[gift_ids[random_gift_id]] = [];
						}
						todo[gift_ids[random_gift_id]].push(received[i].sender_id);
					}
					this.runtime.work = true;
					break;
				case 'Same as Received':
					log('Will return a ' + received[i].name + ' to ' + received[i].sender_ca_name);
					if (!todo[received[i].id]) {
						todo[received[i].id] = [];
					}
					todo[received[i].id].push(received[i].sender_id);
					this.runtime.work = true;
					break;
				case 'None':// deliberate fallthrough
				default:
					this.runtime.work = false;	// Since we aren't returning gifts, we don't need to do any more work.
					break;
			}
			received.pop();
		}
		
		// Clear the facebook notifications and empty the received list.
/*		for (i in received) {
			// Go to the facebook page and click the "ignore" button for this entry
			
			// Then delete the entry from the received list.
			received.shift();
		}*/
		
	}
	
	if (this.runtime.gift_sent > Date.now()) {	// We have sent gift(s) and are waiting for the fb popup
//		log('Waiting for FB popup.');
		if ($('div.dialog_buttons input[name="sendit"]').length){
			this.runtime.gift_sent = null;
			Page.click('div.dialog_buttons input[name="sendit"]');
		} else if ($('span:contains("Out of requests")').text().indexOf('Out of requests') >= 0) {
			log('We have run out of gifts to send.  Waiting one hour to retry.');
			this.runtime.gift_delay = Date.now() + 3600000;	// Wait an hour and try to send again.
			Page.click('div.dialog_buttons input[name="ok"]');
		}
		return QUEUE_CONTINUE;
	} else if (this.runtime.gift_sent) {
		this.runtime.gift_sent = null;
	}
	if ($('div.dialog_buttons input[name="skip_ci_btn"]').length) {     // Eventually skip additional requests dialog
		Page.click('div.dialog_buttons input[name="skip_ci_btn"]');
		return QUEUE_CONTINUE;
	}
	
	// Give some gifts back
	if (length(todo) && (!this.runtime.gift_delay || (this.runtime.gift_delay < Date.now()))) {
		for (i in todo) {
			if (typeof this.data.gifts[i] === 'undefined'){	// The gift we want to send has been removed from the game
				for (j in this.data.gifts){
					if (this.data.gifts[j].slot === 1){
						if (typeof todo[j] === 'undefined'){
							todo[j] = todo[i];
						} else {
							todo[j] = todo[j].concat(todo[i]);
						}
						delete todo[i];
						break;
					}
				}
				continue;
			}
//			if (!Page.to('army_gifts', {app_friends:'c', giftSelection:this.data.gifts[i].slot}, true)) {	// forcing the page to load to fix issues with gifting getting interrupted while waiting for the popup confirmation dialog box which then causes the script to never find the popup.  Should also speed up gifting.
// Need to deal with the fb requests some other way - possibly an extra parse() option...
			if (!Page.to('army_gifts', {app_friends:'c', giftSelection:this.data.gifts[i].slot})) {
				return QUEUE_CONTINUE;
			}
			if (typeof this.data.gifts[i] === 'undefined') {  // Unknown gift in todo list
				gift_ids = [];
				for (j in this.data.gifts) {
					gift_ids.push(j);
				}
				random_gift_id = Math.floor(Math.random() * gift_ids.length);
				log(LOG_WARN, 'Unavaliable gift ('+i+') found in todo list. Will randomly send a ' + this.data.gifts[gift_ids[random_gift_id]].name + ' instead.');
				if (!todo[gift_ids[random_gift_id]]) {
					todo[gift_ids[random_gift_id]] = [];
				}
				for (j in todo[i]) {
					todo[gift_ids[random_gift_id]].push(todo[i][j]);
				}
				delete todo[i];
				return QUEUE_CONTINUE;
			}
			if ($('div[style*="giftpage_select"] div a[href*="giftSelection='+this.data.gifts[i].slot+'"]').length) {
				if ($('img[src*="gift_invite_castle_on"]').length){
					if ($('.unselected_list').children().length) {
						log('Sending out ' + this.data.gifts[i].name);
						k = 0;
						for (j=todo[i].length-1; j>=0; j--) {
							if (k< 10) {	// Need to limit to 10 at a time
								if (!$('.unselected_list input[value=\'' + todo[i][j] + '\']').length){
//									log('User '+todo[i][j]+' wasn\'t in the CA friend list.');
									continue;
								}
								Page.click('.unselected_list input[value="' + todo[i][j] + '"]');
								k++;
							}
						}
						if (k === 0) {
							delete todo[i];
							return QUEUE_CONTINUE;
						}
						this.runtime.sent_id = i;
						this.runtime.gift_sent = Date.now() + (60000);	// wait max 60 seconds for the popup.
						Page.click('input[name="send"]');
						return QUEUE_CONTINUE;
					} else {
						return QUEUE_CONTINUE;
					}
				} else if ($('div.tabBtn img.imgButton[src*="gift_invite_castle_off"]').length) {
					Page.click('div.tabBtn img.imgButton[src*="gift_invite_castle_off"]');
					return QUEUE_CONTINUE;
				} else {
					return QUEUE_CONTINUE;
				}
			} else if ($('div[style*="giftpage_select"]').length) {
				Page.click('a[href*="giftSelection='+this.data.gifts[i].slot+'"]:parent');
				return QUEUE_CONTINUE;
			} else {
				return QUEUE_CONTINUE;
			}
		}
	}
	
	return QUEUE_FINISH;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Heal **********
* Auto-Heal above a stamina level
* *** Needs to check if we have enough money (cash and bank)
*/
var Heal = new Worker('Heal');
Heal.data = Heal.temp = null;

Heal.settings = {
	taint:true
};

Heal.defaults['castle_age'] = {};

Heal.option = {
	stamina: 0,
	health: 0
};

Heal.display = [
	{
		id:'stamina',
		label:'Heal Above',
		after:'stamina',
		select:'stamina'
	},{
		id:'health',
		label:'...And Below',
		after:'health',
		select:'health'
	}
];

Heal.init = function() {
	this._watch(Player, 'data.health');
	this._watch(Player, 'data.maxhealth');
	this._watch(Player, 'data.stamina');
};

Heal.update = function(event) {
	var health = Player.get('health', -1);
	this.set(['option','_sleep'], health >= Player.get('maxhealth') || Player.get('stamina') < this.option.stamina || health >= this.option.health);
};

Heal.work = function(state) {
	if (!state || this.me()) {
		return true;
	}
	return false;
};

Heal.me = function() {
	if (!Page.to('keep_stats')) {
		return true;
	}
	if ($('input[value="Heal Wounds"]').length) {
		log(LOG_INFO, 'Healing...');
		Page.click('input[value="Heal Wounds"]');
	} else {
		log(LOG_WARN, 'Unable to heal!');
//		this.set(['option','_disabled'], true);
	}
	return false;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Idle **********
* Set the idle general
* Keep focus for disabling other workers
*/
var Idle = new Worker('Idle');
Idle.temp = Idle.data = null;

Idle.defaults['castle_age'] = {};

Idle.settings ={
	after:['LevelUp'],
	taint:true
};

Idle.option = {
	general:'any',
	index:86400000,
	generals:604800000,
	alchemy:86400000,
	quests:0,
	town:0,
	keep:0,
//	arena:0,
	battle:900000,
	guild:0,
	festival:0,
	monsters:3600000
//	collect:0
};

Idle.when = {
	0:		'Never',
	60000:		'Every Minute',
	900000:		'Quarter Hour',
	1800000:	'Half Hour',
	3600000:	'Every Hour',
	7200000:	'2 Hours',
	21600000:	'6 Hours',
	43200000:	'12 Hours',
	86400000:	'Daily',
	604800000:	'Weekly',
	1209600000:	'2 Weeks',
	2592000000:	'Monthly'
};

Idle.display = [
	{
		label:'<strong>NOTE:</strong> This worker will <strong>not</strong> release control!<br>Use this for disabling workers you do not use.'
	},{
		id:'general',
		label:'Idle General',
		select:'generals'
	},{
		title:'Check Pages',
		group:[
			{
				id:'index',
				label:'Home Page',
				select:Idle.when
			},{
				id:'generals',
				label:'Generals',
				select:Idle.when
			},{
				id:'alchemy',
				label:'Alchemy',
				select:Idle.when
			},{
				id:'quests',
				label:'Quests',
				select:Idle.when
			},{
				id:'town',
				label:'Town',
				select:Idle.when
			},{
				id:'keep',
				label:'Keep',
				select:Idle.when
		//	},{
		//		id:'arena',
		//		label:'Arena',
		//		select:Idle.when
			},{
				id:'battle',
				label:'Battle',
				select:Idle.when
			},{
				id:'monsters',
				label:'Monsters',
				select:Idle.when
			},{
				id:'guild',
				label:'Guild',
				select:Idle.when
			},{
				id:'festival',
				label:'Festival',
				select:Idle.when
		//	},{
		//		id:'collect',
		//		label:'Apprentice Reward',
		//		select:Idle.when
			}
		]
	}
];

Idle.pages = {
	index:['index'],
	generals:['heroes_heroes', 'heroes_generals'],
	alchemy:['keep_alchemy'],
	quests:[
		'quests_quest1',
		'quests_quest2',
		'quests_quest3',
		'quests_quest4',
		'quests_quest5',
		'quests_quest6',
		'quests_quest7',
		'quests_quest8',
		'quests_quest9',
		'quests_quest10',
		'quests_quest11',
		'quests_quest12',
		'quests_quest13',
		'quests_quest14',
		'quests_quest15',
		'quests_demiquests',
		'quests_atlantis'
	],
	town:['town_soldiers', 'town_blacksmith', 'town_magic', 'town_land'],
	keep:['keep_stats'],
//	arena:['battle_arena'],
	battle:['battle_battle'],
	guild:['battle_guild'],
	festival:['festival_guild'],
	monsters:['monster_monster_list', 'battle_raid', 'festival_monster_list']
//	collect:['apprentice_collect']
};

Idle.init = function() {
	// BEGIN: fix up "under level 4" generals
	if (this.option.general === 'under level 4') {
		this.set('option.general', 'under max level');
	}
	// END
};

Idle.work = function(state) {
	var now = Date.now(), i, j, p;

	if (!state) {
		return true;
	}

	// handle the generals tour first, to avoid thrashing with the Idle general
	if (this.option[i = 'generals'] && (p = Generals.get('data'))) {
		for (j in p) {
			if (p[j] && p[j].own && (p[j].seen || 0) + this.option[i] <= now) {
				if (Generals.to(j) === null) {
					// if we can't change the general now due to stats or error
					// just add an hour to the last seen time and try later
					Generals.set(['data',j,seen], Math.range((p[j].seen || 0), now + 3600000 - this.option[i], now));
				}
				return true;
			}
		}
	}

	if (!Generals.to(this.option.general)) {
		return true;
	}

	for (i in this.pages) {
		if (this.option[i]) {
			for (p=0; p<this.pages[i].length; p++) {
				if (Page.isStale(this.pages[i][p], now - this.option[i]) && (!Page.to(this.pages[i][p]))) {
					return true;
				}
			}
		}
	}

	return true;
};
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Bank, Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime
*/
/********** Worker.Income **********
* Auto-general for Income, also optional bank
* User selectable safety margin - at default 5 sec trigger it can take up to 14 seconds (+ netlag) to change
*/
var Income = new Worker('Income');
Income.data = Income.runtime = null;

Income.settings = {
	important:true,
	taint:true
};

Income.defaults['castle_age'] = {};

Income.option = {
	general:true,
	bank:true,
	margin:45
};

Income.temp = {
	income:false,
	bank:false
};

Income.display = [
	{
		id:'general',
		label:'Use Best General',
		checkbox:true
	},{
		id:'bank',
		label:'Automatically Bank',
		checkbox:true
	},{
		advanced:true,
		id:'margin',
		label:'Safety Margin',
		select:[15,30,45,60],
		suffix:'seconds'
	}
];

Income.init = function(event) {
	this._watch(Player, 'data.cash_time');
};

Income.update = function(event) {
	var income = Player.get('income', 0), when = Player.get('cash_timer', 9999) - this.option.margin;
	if (when > 0) {
		this._remind(when, 'income');
	}
	if ((this.set(['temp','income'], when <= 0))) {
		this.set(['temp','bank'], true);
	}
	Dashboard.status(this, Config.makeImage('gold') + '$' + (income + History.get('income.average.24')).round(0).addCommas() + ' per hour (' + Config.makeImage('gold') + '$' + income.addCommas() + ' from land, ' + ((Player.get('upkeep', 0) / Player.get('maxincome', 1)) * 100).round(2) + '% upkeep)');
	this.set(['option','_sleep'], !(this.option.general && this.temp.income) && !(this.option.bank && this.temp.bank));
};

Income.work = function(state) {
	if (state) {
		if (this.temp.income) {
			if (Generals.to('income')) {
				log(LOG_INFO, 'Waiting for Income... (' + Player.get('cash_timer') + ' seconds)');
			}
		} else if (this.temp.bank) {
			if (!Bank.stash()) {
				log(LOG_INFO, 'Banking Income...');
			} else {
				this.set(['temp','bank'], false);
			}
		}
	}
	return QUEUE_CONTINUE;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Bank, Battle, Generals, LevelUp, Player,
	APP, APPID, warn, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser, console,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Land **********
* Auto-buys property
*/
var Land = new Worker('Land');
Land.temp = null;

Land.settings = {
	taint: true
};

Land.defaults['castle_age'] = {
	pages:'town_land keep_stats'
};

Land.option = {
	enabled:true,
//	wait:48,
	onlyten:false,
	sell:false,
	land_exp:false,
	style:0
};

Land.runtime = {
	lastlevel:0,
	best:null,
	buy:0,
	cost:0,
	snooze:0
};

Land.display = [
	{
		id:'enabled',
		label:'Auto-Buy Land',
		checkbox:true
	},{
		id:'save_ahead',
		label:'Save for future Land',
		checkbox:true
	},{
		advanced:true,
		id:'sell',
		label:'Sell Extra Land',
		checkbox:true,
		help:'You can sell land above your Max at full price.'
	},{
		exploit:true,
		id:'land_exp',
		label:'Sell Extra Land 10 at a time',
		checkbox:true,
		help:'If you have extra lands, this will sell 10x.  The extra sold lands will be repurchased at a lower cost.'
	},{
		id:'style',
		label:'ROI Style',
		select:{0:'Percent', 1:'Daily'},
		help:'This changes the display when visiting the LanD page.'
	}
/*
	},{
		id:'wait',
		label:'Maximum Wait Time',
		select:[0, 24, 36, 48],
		suffix:'hours',
		help:'There has been a lot of testing in this code, it is the fastest way to increase your income despite appearances!'
	},{
		advanced:true,
		id:'onlyten',
		label:'Only buy 10x<br>NOTE: This is slower!!!',
		checkbox:true,
		help:'The standard method is guaranteed to be the most efficient.  Choosing this option will slow down your income.'
	}
*/
];

Land.setup = function(old_revision) {
	// BEGIN one time pre-r959 fix for bad land name "name"
	if (old_revision < 959) {
		if (this.data && this.data.name) {
			delete this.data.name;
		}
	}
	// END
	// BEGIN Remove old internal revision storage
	if (old_revision <= 1110) {
		this.set(['runtime','revision']);
	}
	// END
	Resources.use('Gold');
};

Land.init = function() {
	for (var i in this.data) {
		if (!this.data[i].id || !this.data[i].cost || isNumber(this.data[i].buy) || isNumber(this.data[i].sell)) {
			// force an initial visit if anything important is missing
			Page.set('town_land', 0);
			break;
		}
	}

	this._watch(Player, 'data.level');		// watch for level ups
	this._watch(Player, 'data.worth');		// watch for bank increases
	this._watch(Bank, 'option.keep');		// Watch for changing available amount
	this._watch(Page, 'data.town_land');	// watch for land triggers
};

Land.page = function(page, change) {
	var i, tmp, name, txt, modify = false;

	if (page === 'town_land') {
		$('div[style*="town_land_bar."],div[style*="town_land_bar_special."]').each(function(a, el) {
			if ((name = $('div img[alt]', el).attr('alt').trim())) {
				if (!change) {
					try {
						var txt = $(el).text().replace(/[,\s]+/g, '');
						Land._transaction(); // BEGIN TRANSACTION
						assert(Land.set(['data',name,'max'], txt.regex(/yourlevel:(\d+)/i), 'number'), 'Bad maximum: '+name);
						assert(Land.set(['data',name,'income'], txt.regex(/Income:\$(\d+)/), 'number'), 'Bad income: '+name);
						assert(Land.set(['data',name,'cost'], txt.regex(/Income:\$\d+\$(\d+)/), 'number'), 'Bad cost: '+name);
						assert(Land.set(['data',name,'own'], $('span:contains("Owned:")', el).text().replace(/[,\s]+/g, '').regex(/Owned:(\d+)/i), 'number'), 'Bad own count: '+name);
//						Land.set(['data',name,'id']);
						Land.set(['data',name,'buy']);
						if ((tmp = $('form[id*="prop_"]', el)).length) {
							Land.set(['data',name,'id'], tmp.attr('id').regex(/prop_(\d+)/i), 'number');
							$('select[name="amount"] option', tmp).each(function(b, el) {
								Land.push(['data',name,'buy'], parseFloat($(el).val()), 'number')
							});
						}
						Land.set(['data',name,'sell']);
						if ((tmp = $('form[id*="propsell_"]', el)).length) {
							Land.set(['data',name,'id'], tmp.attr('id').regex(/propsell_(\d+)/i), 'number');
							$('select[name="amount"] option', tmp).each(function(b, el) {
								Land.push(['data',name,'sell'], parseFloat($(el).val()), 'number')
							})
						}
						Land._transaction(true); // COMMIT TRANSACTION
					} catch(e) {
						Land._transaction(false); // ROLLBACK TRANSACTION on any error
						log(e, e.name + ' in ' + this.name + '.page(' + page + ', ' + change + '): ' + e.message);
					}
				} else if (Land.data[name]) {
					$('strong:first', el).after(' (<span title="Return On Investment - higher is better"><strong>ROI</strong>: ' + ((Land.data[name].income * 100 * (Land.option.style ? 24 : 1)) / Land.data[name].cost).round(3) + '%' + (Land.option.style ? ' / Day' : '') + '</span>)');
				}
			}
			modify = true;
		});
	} else if (page === 'keep_stats') {
		// Only when it's our own keep and not someone elses
		if ($('.keep_attribute_section').length) {
			$('.statsTTitle:contains("LAND") + .statsTMain .statUnit').each(function(a, el) {
				var tmp = $('a img[src]', el), name = ($(tmp).attr('alt') || '').trim(), i = $(el).text().regex(/\bX\s*(\d+)\b/i);
				if (!Land.data[name]) {
					Page.set(['data','town_land'], 0);
				} else if (Land.data[name].own !== i) {
					Land.set(['data', name, 'own'], i);
				}
			});
		}
	}

	return modify;
};

Land.update = function(event, events) {
	var i, j, k, worth = Bank.worth(), income = Player.get('income', 0) + History.get('income.mean'), level = Player.get('level', 0), best, i_cost, b_cost, buy = 0, cost_increase, time_limit;
	
	if (event.type === 'option' && this.option.land_exp) {
		this.set(['option','sell'], true);
	}
	
	k = 0;
	if (this.option.save_ahead && this.option.enabled) {
		for (i in this.data) {
			if ((this.data[i].max || 0) > 0 && (this.data[i].own || 0) >= this.data[i].max) {
				j = Math.min(10, Math.max(0, this.data[i].max + 10 - this.data[i].own));
				k += j * (this.data[i].cost || 0);
			}
		}
	}
	this.set(['runtime', 'save_amount'], k);

	// don't sell into future buffer if save ahead is enabled
	k = this.option.save_ahead && !this.option.land_exp ? 10 : 0;
	for (i in this.data) {
		if (this.option.sell && this.data[i].sell.length && (this.data[i].max || 0) > 0 && (this.data[i].own || 0) > this.data[i].max + k) {
			best = i;
			buy = this.data[i].max + k - this.data[i].own;// Negative number means sell
			if (this.option.land_exp) {
				buy = -this.data[i].sell[this.data[i].sell.length - 1];
			}
			break;
		}

		if ((income || 0) > 0 && this.data[i].buy && this.data[i].buy.length) {
			b_cost = best ? (this.data[best].cost || 0) : 1e99;
			i_cost = (this.data[i].cost || 0);
			if (!best || ((b_cost / income) + (i_cost / (income + this.data[best].income))) > ((i_cost / income) + (b_cost / (income + this.data[i].income)))) {
				best = i;
			}
		}
	}

	this.set(['runtime','best'], null);
	this.set(['runtime','buy'], 0);
	this.set(['runtime','cost'], 0);

	if (best) {
		if (!buy) {
			//	This calculates the perfect time to switch the amounts to buy.
			//	If the added income from a smaller purchase will pay for the increase in price before you can afford to buy again, buy small.
			//	In other words, make the smallest purchase where the time to make the purchase is larger than the time to payoff the increased cost with the extra income.
			//	It's different for each land because each land has a different "time to payoff the increased cost".
			
			cost_increase = this.data[best].cost / (10 + this.data[best].own);		// Increased cost per purchased land.  (Calculated from the current price and the quantity owned, knowing that the price increases by 10% of the original price per purchase.)
			time_limit = cost_increase / this.data[best].income;		// How long it will take to payoff the increased cost with only the extra income from the purchase.  (This is constant per property no matter how many are owned.)
			time_limit = time_limit * 1.5;		// fudge factor to take into account that most of the time we won't be buying the same property twice in a row, so we will have a bit more time to recoup the extra costs.
//			if (this.option.onlyten || (this.data[best].cost * 10) <= worth) {}			// If we can afford 10, buy 10.  (Or if people want to only buy 10.)
			if ((this.data[best].cost * 10) <= worth) {			// If we can afford 10, buy 10.
				buy = Math.min(this.data[best].max - this.data[best].own, 10);
			} else if (this.data[best].cost / income > time_limit){		// If it will take longer to save for 1 land than it will take to payoff the increased cost, buy 1.
				buy = 1;
			} else if (this.data[best].cost * 5 / income > time_limit){	// If it will take longer to save for 5 lands than it will take to payoff the increased cost, buy 5.
				buy = Math.min(this.data[best].max - this.data[best].own, 5);
			} else {																	// Otherwise buy 10 because that's the max.
				buy = Math.min(this.data[best].max - this.data[best].own, 10);
			}
		}

		k = buy * this.data[best].cost; // May be negative if we're making money by selling
		if ((buy > 0 && this.option.enabled) || (buy < 0 && this.option.sell)) {
			this.set(['runtime','best'], best);
			this.set(['runtime','buy'], buy);
			this.set(['runtime','cost'], k);
		}
	}

	if (best && buy) {
		Dashboard.status(this, (buy > 0 ? (this.runtime.buy ? 'Buying ' : 'Want to buy ') : (this.runtime.buy ? 'Selling ' : 'Want to sell ')) + Math.abs(buy) + 'x ' + best + ' for $' + Math.abs(k).SI() + ' (Available Cash: $' + worth.SI() + ')');
	} else if (this.option.save_ahead && this.runtime.save_amount) {
		if (worth >= this.runtime.save_amount) {
			Dashboard.status(this, 'Saved $' + this.runtime.save_amount.SI() + ' for future land.');
		} else {
			Dashboard.status(this, 'Saved $' + worth.SI() + ' of $' + this.runtime.save_amount.SI() + ' for future land.');
		}
	} else {
		Dashboard.status(this, 'Nothing to do.');
	}

	this.set(['option','_sleep'],
		level === this.runtime.lastlevel
		&& (Page.get('town_land') || 0) > 0
		&& (!this.runtime.best
			|| !this.runtime.buy
			|| worth < this.runtime.cost
			|| this.runtime.snooze > Date.now()));
};

Land.work = function(state) {
	var o, q;
	if (!state) {
		return QUEUE_CONTINUE;
	} else if (this.runtime.cost > 0 && !Bank.retrieve(this.runtime.cost)) {
		return QUEUE_CONTINUE;
	} else if (!Page.to('town_land')) {
		return QUEUE_CONTINUE;
	} else {
		this.set('runtime.lastlevel', Player.get('level'));
		if (this.runtime.buy < 0) {
			if (!(o = $('form#app'+APPID+'_propsell_'+this.data[this.runtime.best].id)).length) {
				log(LOG_WARN, 'Can\'t find Land sell form for',
				  this.runtime.best,
				  'id[' + this.data[this.runtime.best].id + ']');
				this.set('runtime.snooze', Date.now() + 60000);
				this._remind(60.1, 'sell_land');
				return QUEUE_RELEASE;
			} else {
				q = this.data[this.runtime.best].sell.lower(Math.abs(this.runtime.buy));
				log(LOG_INFO, 'Selling ' + q + '/' + Math.abs(this.runtime.buy) + ' x ' + this.runtime.best + ' for $' + Math.abs(this.runtime.cost).SI());
				$('select[name="amount"]', o).val(q);
				Page.click($('input[name="Sell"]', o));
				return QUEUE_CONTINUE;
			}
		} else if (this.runtime.buy > 0) {
			if (!(o = $('form#app'+APPID+'_prop_'+this.data[this.runtime.best].id)).length) {
				log(LOG_WARN, 'Can\'t find Land buy form for ' + this.runtime.best + ' id[' + this.data[this.runtime.best].id + ']');
				this.set('runtime.snooze', Date.now() + 60000);
				this._remind(60.1, 'buy_land');
				return QUEUE_RELEASE;
			} else {
				q = this.data[this.runtime.best].buy.higher(this.runtime.buy);
				log(LOG_INFO, 'Buying ' + q + '/' + this.runtime.buy + ' x ' + this.runtime.best + ' for $' + Math.abs(this.runtime.cost).SI());
				$('select[name="amount"]', o).val(q);
				Page.click($('input[name="Buy"]', o));
				return QUEUE_CONTINUE;
			}
		}
	}

	return QUEUE_RELEASE;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Bank, Battle, Generals, Heal, Income, LevelUp:true, Monster, Player, Quest,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	calc_rolling_weighted_average
*/
/********** Worker.LevelUp **********
* Will give us a quicker level-up, optionally changing the general to gain extra stats
* 1. Switches generals to specified general
* 2. Changes the best Quest to the one that will get the most exp (rinse and repeat until no energy left) - and set Queue.burn.energy to max available
* 3. Will call Heal.me() function if current health is under 10 and there is any stamina available (So Battle/Arena/Monster can automatically use up the stamina.)
*/

var LevelUp = new Worker('LevelUp');
LevelUp.data = LevelUp.temp = null;

LevelUp.settings = {
	before:['Idle','Battle','Monster','Quest']
};

LevelUp.defaults['castle_age'] = {
	pages:'*'
};

LevelUp.option = {
	income:true,
	bank:true,
	general:'any',
	general_choice:'any',
	order:'stamina',
	algorithm:'Per Action',
	override:false
};

LevelUp.runtime = {
	heal_me:false,// we're active and want healing...
	last_energy:'quest',
	last_stamina:'attack',
	exp:0,
	exp_possible:0,
	avg_exp_per_energy:1.4,
	avg_exp_per_stamina:2.4,
	quests:[], // quests[energy] = [experience, [quest1, quest2, quest3]]
// Old Queue.runtime stuff
	quest: null, // Use for name of quest if over-riding quest
	general: false, // If necessary to specify a multiple general for attack
	action: false, // Level up action
	stamina:0, //How much stamina can be used by workers
	energy:0, //How much energy can be used by workers
	// Force is TRUE when energy/stamina is at max or needed to burn to level up,
	// used to tell workers to do anything necessary to use energy/stamina
	force: {
		energy:false,
		stamina:false
	}
};

LevelUp.display = [
	{
		title:'Important!',
		label:'This will spend Energy and Stamina to force you to level up quicker.'
	},{
		id:'general',
		label:'Best General',
		select:['any', 'Energy', 'Stamina', 'Manual'],
		help:'Select which type of general to use when leveling up.'
	},{
		advanced:true,
		id:'general_choice',
		label:'Use General',
		require:'general=="Manual"',
		select:'generals'
	},{
		id:'order',
		label:'Spend first ',
		select:['Energy','Stamina'],
		help:'Select which resource you want to spend first when leveling up.'
	},{
		id:'algorithm',
		label:'Estimation Method',
		select:['Per Action', 'Per Hour', 'Manual'],
		help:"'Per Hour' uses your gain per hour. 'Per Action' uses your gain per action."
	},{
		id:'manual_exp_per_stamina',
		label:'Exp per stamina',
		require:'algorithm=="Manual"',
		text:true,
		help:'Experience per stamina point. Defaults to Per Action if 0 or blank.'
	},{
		id:'manual_exp_per_energy',
		label:'Exp per energy',
		require:'algorithm=="Manual"',
		text:true,
		help:'Experience per energy point. Defaults to Per Action if 0 or blank.'
	},{
		id:'override',
		label:'Override Monster<br>Avoid Lost-cause Option',
		checkbox:true,
		help:'Overrides Avoid Lost-cause Monster setting allowing LevelUp to burn stamina on behind monsters.'
	}
];

LevelUp.init = function() {
	// BEGIN: fix up "under level 4" generals
	if (this.option.general_choice === 'under level 4') {
		this.set('option.general_choice', 'under max level');
	}
	// END
	this._watch(Player, 'data.health');
	this._watch(Player, 'data.exp');
	this._watch(Player, 'data.energy');
	this._watch(Player, 'data.stamina');
	this._watch(Resources, 'option.reserve');
	this._watch(Quest, 'runtime.best');
	this._watch(this, 'runtime.force.energy');
	this._watch(this, 'runtime.force.stamina');
	this.runtime.exp = this.runtime.exp || Player.get('exp', 0); // Make sure we have a default...
};

LevelUp.page = function(page, change) {
	if (change) {

//		$('#'+APPID_+'st_2_5 strong').attr('title', Player.get('exp') + '/' + Player.get('maxexp') + ' at ' + this.get('exp_average').round(1).addCommas() + ' per hour').html(Player.get('exp_needed').addCommas() + '<span style="font-weight:normal;"><span style="color:rgb(25,123,48);" name="' + this.get('level_timer') + '"> ' + this.get('time') + '</span></span>');
		$('#'+APPID_+'st_2_5 strong').html('<span title="' + Player.get('exp', 0) + '/' + Player.get('maxexp', 1) + ' at ' + this.get('exp_average').round(1).addCommas() + ' per hour">' + Player.get('exp_needed', 0).addCommas() + '</span> <span style="font-weight:normal;color:rgb(25,123,48);" title="' + this.get('timer') + '">' + this.get('time') + '</span>');
	} else {
		$('.result_body').each(function(i,el){
			if (!$('img[src$="battle_victory.gif"]', el).length) {
				return;
			}
			var txt = $(el).text().replace(/,|\t/g, ''), x;
			x = txt.regex(/([+-]\d+) Experience/i);
			if (x) { History.add('exp+battle', x); }
			x = (txt.regex(/\+\$(\d+)/i) || 0) - (txt.regex(/\-\$(\d+)/i) || 0);
			if (x) { History.add('income+battle', x); }
			x = txt.regex(/([+-]\d+) Battle Points/i);
			if (x) { History.add('bp+battle', x); }
			x = txt.regex(/([+-]\d+) Stamina/i);
			if (x) { History.add('stamina+battle', x); }
			x = txt.regex(/([+-]\d+) Energy/i);
			if (x) { History.add('energy+battle', x); }
		});
	}
	return true;
};

LevelUp.update = function(event, events) {
	var i, energy = Player.get('energy',0), stamina = Player.get('stamina',0), exp = Player.get('exp',0);
	if (events.findEvent(this, 'watch', 'runtime.force.energy') && this.get(['runtime','force','energy'])) {
		log(LOG_INFO, 'Forcing energy burn...');
	}
	if (events.findEvent(this, 'watch', 'runtime.force.stamina') && this.get(['runtime','force','stamina'])) {
		log(LOG_INFO, 'Forcing stamina burn...');
	}
	if (this.option._disabled) {
		this.set(['runtime','running'], false);
		this.set(['runtime','quest'], null);
		this.set(['runtime','force','energy'], false);
		this.set(['runtime','force','stamina'], false);
	} else if (events.findEvent('Player')) {
		// Check if stamina/energy is maxed and should be forced
		this.set(['runtime','force','energy'], energy >= Player.get('maxenergy',0));
		this.set(['runtime','force','stamina'], stamina >= Player.get('maxstamina',0));
		// Preserve independence of queue system worker by putting exception code into CA workers
		for (i in Workers) {
			if ((worker = Workers[i]) && isFunction(worker.resource) && !worker.get(['option', '_disabled'], false) && (stat = worker.resource())) { // && !worker.get(['option', '_sleep'], false)
				if (stat === 'energy') {
					this.set(['runtime','force','energy'], true);
				} else if (stat === 'stamina') {
					this.set(['runtime','force','stamina'], true);
				}
			}
		}
	}
	if (events.findEvent('Player') || !length(this.runtime.quests)) {
		if (exp > this.runtime.exp && $('span.result_body:contains("xperience")').length) {
			// Experience has increased...
			if (this.runtime.stamina > stamina) {
				this.set(['runtime','last_stamina'], (Page.temp.page === 'keep_monster_active' || Page.temp.page === 'monster_battle_monster') ? 'attack' : 'battle');
				calc_rolling_weighted_average(this.runtime, 'exp', exp - this.runtime.exp, 'stamina', this.runtime.stamina - stamina);
			}
			if (this.runtime.energy > energy) {
				this.set(['runtime','last_energy'], (Page.temp.page === 'keep_monster_active' || Page.temp.page === 'monster_battle_monster') ? 'defend' : 'quest');
				// Only need average for monster defense. Quest average is known.
				if (this.runtime.last_energy === 'defend') {
					calc_rolling_weighted_average(this.runtime, 'exp', exp - this.runtime.exp, 'energy', this.runtime.energy - energy);
				}
			}
		}
	}
	this.set(['runtime','energy'], Math.max(0, energy - (this.runtime.force.energy ? 0 : Resources.get(['option','reserve','Energy'], 0))));
	this.set(['runtime','stamina'], Math.max(0, stamina - (this.runtime.force.stamina ? 0 : Resources.get(['option','reserve','Stamina'], 0))));
	this.set(['runtime','exp'], exp);
	this.set(['runtime','heal_me'], !this.option._disabled && this.runtime.stamina && this.runtime.force.stamina && Player.get('health') < 13);
	//log(LOG_DEBUG, 'next action ' + LevelUp.findAction('best', energy, stamina, Player.get('exp_needed')).exp + ' big ' + LevelUp.findAction('big', energy, stamina, Player.get('exp_needed')).exp);
	if (this.runtime.running) {
		Dashboard.status(this, '<span title="Exp Possible: ' + this.get('exp_possible') + ', per Hour: ' + this.get('exp_average').round(1).addCommas() + ', per Energy: ' + this.get('exp_per_energy').round(2) + ', per Stamina: ' + this.get('exp_per_stamina').round(2) + '">LevelUp Running Now!</span>');
	} else {
		Dashboard.status(this, '<span title="Exp Possible: ' + this.get('exp_possible') + ', per Energy: ' + this.get('exp_per_energy').round(2) + ', per Stamina: ' + this.get('exp_per_stamina').round(2) + '">' + this.get('time') + ' after ' +
			Page.addTimer('levelup', this.get('level_time')) + ' (' + Config.makeImage('exp') + this.get('exp_average').round(1).addCommas() + ' per hour) (refills: ' +
			makeTimer((this.get('refill_energy') - Date.now()) / 1000) + ' per energy, ' +
			makeTimer((this.get('refill_stamina') - Date.now()) / 1000) + ' per stamina)</span>');
	}
	this.set(['option','_sleep'], !this.runtime.running || !this.runtime.heal_me);
	return true;
};

LevelUp.work = function(state) {
	Generals.set('runtime.disabled', false);
	if (!state || Heal.me()) {
		return QUEUE_CONTINUE;
	}
/*
	if (this.runtime.action && this.runtime.action.big) {
		Generals.set('runtime.disabled', false);
		if (Generals.to(this.option.general)) {
			//log('Disabling Generals because next action will level.');
			Generals.set('runtime.disabled', true);	// Lock the General again so we can level up.
		} else {
			return QUEUE_CONTINUE;	// Try to change generals again
		}
	}
*/
	return QUEUE_FINISH;
};

LevelUp.get = function(what,def) {
	switch(what) {
	case 'timer':		return makeTimer(this.get('level_timer'));
	case 'time':		return (new Date(this.get('level_time'))).format('D g:i a');
	case 'level_timer':	return Math.floor((this.get('level_time') - Date.now()) / 1000);
	case 'level_time':	return Date.now() + Math.floor(3600000 * ((Player.get('exp_needed', 0) - this.get('exp_possible')) / (this.get('exp_average') || 10)));
	case 'refill_energy':	return Date.now() + Math.floor(3600000 * ((Math.min(Player.get('maxenergy',0),2000) * this.get('exp_per_energy')) / (this.get('exp_average') || 10)));
	case 'refill_stamina':	return Date.now() + Math.floor(3600000 * ((Math.min(Player.get('maxstamina',0),1000) * this.get('exp_per_stamina')) / (this.get('exp_average') || 10)));
	case 'exp_average':
		if (this.option.algorithm === 'Per Hour') {
			return History.get('exp.average.change');
		}
		return (12 * (this.get('exp_per_stamina') + this.get('exp_per_energy'))).round(1);
	case 'exp_possible':
		return (Player.get('stamina', 0)*this.get('exp_per_stamina')
				+ Player.get('energy', 0) * this.get('exp_per_energy')).round(1);
	case 'exp_per_stamina':
		if (this.option.algorithm === 'Manual' && this.option.manual_exp_per_stamina) {
			return this.option.manual_exp_per_stamina.round(1);
		}
		return this.runtime.avg_exp_per_stamina.round(1);
	case 'exp_per_energy':
		if (this.option.algorithm === 'Manual' && this.option.manual_exp_per_energy) {
			return this.option.manual_exp_per_energy.round(1);
		}
		return ((this.runtime.defending || !Quest.get('runtime.best',false))
				? this.runtime.avg_exp_per_energy
				: (Quest.get(['id', Quest.get('runtime.best'), 'exp']) || 0) /
					(Quest.get(['id', Quest.get('runtime.best'), 'energy']) || 1)).round(1);
	default: return this._get.apply(this, arguments);
	}
};

LevelUp.findAction = function(mode, energy, stamina, exp) {
	var options =[], i, check, quests, monsters, big, multiples, general = false, basehit, max, raid = false, defendAction, monsterAction, energyAction, staminaAction, questAction, stat = null, value = null, nothing = {stamina:0,energy:0,exp:0};
	defendAction = monsterAction = staminaAction = energyAction = questAction = 0;
	switch(mode) {
	case 'best':
		// Find the biggest exp quest or stamina return to push unusable exp into next level
		big = this.findAction('big',energy,stamina,0);
		if (this.option.order === 'Energy') {
			check = this.findAction('energy',energy-big.energy,0,exp);
			//log(LOG_WARN, ' levelup quest ' + energy + ' ' + exp);
			//log(LOG_WARN, 'this.runtime.last_energy ' + this.runtime.last_energy + ' checkexp ' + check.exp +' quest ' + check.quest);
			// Do energy first if defending a monster or doing the best quest, but not little 'use energy' quests
			if (check.exp && (check.quest === Quest.runtime.best || !check.quest)) {
				log(LOG_WARN, 'Doing regular quest ' + Quest.runtime.best);
				return check;
			}
		}
		check = this.findAction('attack',0,stamina - big.stamina,exp);
		if (check.exp) {
			log(LOG_WARN, 'Doing stamina attack');
			log(LOG_DEBUG, 'basehit0 ' + check.basehit);
			return check;
		}
		check = this.findAction('quest',energy - big.energy,0,exp);
		if (check.exp) {
			log(LOG_WARN, 'Doing little quest ' + check.quest);
			return check;
		}
		log(LOG_WARN, 'Doing big action to save exp');
		return (big.exp ? big : nothing);
	case 'big':
		// Should enable to look for other options than last stamina, energy?
		energyAction = this.findAction('energy',energy,stamina,0);
/*		check = this.findAction('energy',energyAction.energy - 1,stamina,0);
		if (energy - check.energy * energy ratio * 1.25 < exp) {
			energyAction = check;
		}
*/		staminaAction = this.findAction('attack',energy,stamina,0);
		if (energyAction.exp > staminaAction.exp) {
			log(LOG_WARN, 'Big action is energy. Exp use:' + energyAction.exp + '/' + exp);
			energyAction.big = true;
			return energyAction;
		} else if (staminaAction.exp) {
			//log(LOG_WARN, 'big stamina ' + staminaAction.exp + staminaAction.general);
			log(LOG_WARN, 'Big action is stamina. Exp use:' + staminaAction.exp + '/' + exp);
			staminaAction.big = true;
			return staminaAction;
		} else {
			log(LOG_WARN, 'Big action not found');
			return nothing;
		}
	case 'energy':
		//log(LOG_WARN, 'monster runtime defending ' + Monster.get('runtime.defending'));
		if ((Monster.get('runtime.defending')
			&& (Quest.option.monster === 'Wait for'
				|| Quest.option.monster === 'When able'
				|| Queue.option.queue.indexOf('Monster')
					< Queue.option.queue.indexOf('Quest')))
		|| (!exp && Monster.get('runtime.big',false))) {
			defendAction = this.findAction('defend',energy,0,exp);
			if (defendAction.exp) {
				log(LOG_WARN, 'Energy use defend');
				return defendAction;
			}
		}
		questAction = this.findAction('quest',energy,0,exp);
		log(LOG_WARN, 'Energy use quest' + (exp ? 'Normal' : 'Big') + ' QUEST ' + ' Energy use: ' + questAction.energy +'/' + energy + ' Exp use: ' + questAction.exp + '/' + exp + 'Quest ' + questAction.quest);
		return questAction;
	case 'quest':
		quests = Quest.get('id');
		if (Quest.runtime.best && quests[Quest.runtime.best].energy <= energy && quests[Quest.runtime.best].exp < exp) {
			i = Quest.runtime.best;
		} else {
			i = bestObjValue(quests, function(q) {
				return ((q.energy <= energy && (!exp || (q.exp < exp)))
						? q.exp / (exp ? q.energy : 1) : null);
			});
		}
		if (i) {
			log(LOG_WARN, (exp ? 'Normal' : 'Big') + ' QUEST ' + ' Energy use: ' + questAction.energy +'/' + energy + ' Exp use: ' + questAction.exp + '/' + exp + 'Quest ' + questAction.quest);
			return {
				energy : quests[i].energy,
				stamina : 0,
				exp : quests[i].exp,
				quest : i
			};
		} else {
			log(LOG_WARN, 'No appropriate quest found');
			return nothing;
		}
	case 'defend':
		stat = 'energy';
		value = energy;
		// Deliberate fall-through
	case 'attack':
		stat = stat || 'stamina';
		value = value || stamina;
		if (Monster.get(['option', '_disabled'], false)){
				return nothing;
		}
		options = Monster.get('runtime.values.'+mode);
		if (mode === 'defend' && !exp) {
			options = options.concat(Monster.get('runtime.big',[])).unique();
		} else if (mode === 'attack') { // Add 1 so it waits until it has a multiple of remaining stamina before doing the big quest.
			options = options.concat([1]).unique();
		}
		// Use 6 as a safe exp/stamina and 2.8 for exp/energy multiple
		max = Math.min((exp ? (exp / ((stat === 'energy') ? 2.8 : 6)) : value), value);
		monsterAction = basehit = options.lower(max);
		multiples = Generals.get('runtime.multipliers');
		for (i in multiples) {
			check = options.map(function(s){ return s * multiples[i]; } ).lower(max);
			if (check > monsterAction) {
				monsterAction = check;
				basehit = check / multiples[i];
				general = i;
			}
		}
		if (monsterAction < 0 && mode === 'attack' && !Battle.get(['option', '_disabled'], false) && Battle.runtime.attacking) {
			monsterAction = [(Battle.option.type === 'War' ? 10 : 1)].lower(max);
		}
		log(LOG_WARN, (exp ? 'Normal' : 'Big') + ' mode: ' + mode + ' ' + stat + ' use: ' + monsterAction +'/' + ((stat === 'stamina') ? stamina : energy) + ' Exp use: ' + monsterAction * this.get('exp_per_' + stat) + '/' + exp + ' Basehit ' + basehit + ' options ' + options + ' General ' + general);
		if (monsterAction > 0 ) {
			return {
				stamina : (stat === 'stamina') ? monsterAction : 0,
				energy : (stat === 'energy') ? monsterAction : 0,
				exp : monsterAction * this.get('exp_per_' + stat),
				general : general,
				basehit : basehit
			};
		}
		break;
	case 'battle':
		// Need to fill in later
	}
	return nothing;
};

LevelUp.resource = function() {
	var mode, stat, action;
	if (LevelUp.get('exp_possible') > Player.get('exp_needed')) {
		action = LevelUp.set(['runtime','action'], LevelUp.findAction('best', Player.get('energy'), Player.get('stamina'), Player.get('exp_needed')));
		if (action.exp) {
			Monster._remind(0,'levelup');
			this.set(['runtime','levelup'], true);
			mode = (action.energy ? 'defend' : 'attack');
			stat = (action.energy ? 'energy' : 'stamina');
			this.set(['runtime',stat], action[stat]);
			this.set(['runtime','quest'], action.quest || null);
			this.set(['runtime','basehit'], (action.basehit < Monster.get('option.attack_min')) ? action.basehit : false);
			log(LOG_DEBUG, 'basehit1 ' + this.runtime.basehit);
			this.set(['runtime','big'], action.big);
			if (action.big) {
				this.set(['runtime','basehit'], action.basehit);
				log(LOG_DEBUG, 'basehit2 ' + this.runtime.basehit);
				this.set(['runtime','general'], action.general || (LevelUp.option.general === 'any'
						? false
						: LevelUp.option.general === 'Manual'
						? LevelUp.option.general_choice
						: LevelUp.option.general ));
			} else if (action.basehit === action[stat] && !Monster.get('option.best_'+mode) && Monster.get('option.general_' + mode) in Generals.get('runtime.multipliers')) {
				log(LOG_WARN, 'Overriding manual general that multiplies attack/defense');
				this.set(['runtime','general'], action.stamina ? 'monster_attack' : 'monster_defend');
			}
			this.set(['runtime','force','stamina'], action.stamina !== 0);
			this.set(['runtime','force','energy'], action.energy !== 0);
			log(LOG_WARN, 'Leveling up: force burn ' + (this.runtime.stamina ? 'stamina' : 'energy') + ' ' + (this.runtime.stamina || this.runtime.energy) + ' basehit ' + this.runtime.basehit);
			//log(LOG_WARN, 'Level up general ' + this.runtime.general + ' base ' + this.runtime.basehit + ' action[stat] ' + action[stat] + ' best ' + !Monster.get('option.best_'+mode) + ' muly ' + (Monster.get('option.general_' + mode) in Generals.get('runtime.multipliers')));
			LevelUp.set(['runtime','running'], true);
			return stat;
		}
	}
};/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	calc_rolling_weighted_average, bestObjValue
*/
/********** Worker.Monster **********
 * Automates Monster
 */
/*
 * Attack Buttons:
 *  5: seamonster_power.gif
 * 10: serpent_10stam_attack.gif
 */
var Monster = new Worker('Monster');
Monster.temp = null;

Monster.defaults['castle_age'] = {
	pages:'monster_monster_list keep_monster_active monster_battle_monster battle_raid festival_monster_list festival_battle_monster monster_dead monster_remove_list'
};

Monster.option = {
	best_attack:true,
	best_defend:true,
	best_raid:true,
	general_defend:'any',
	general_attack:'any',
	general_raid:'any',
	defend: 80,
	//	quest_over: 90,
	min_to_attack: 20,
	defend_active:false,
	use_tactics:false,
	choice: 'Any',
	stop: 'Never',
	own: true,
	hide:false,
	armyratio: 'Any',
	levelratio: 'Any',
	force1: true,
	raid: 'Invade x5',
	assist: true,
	attack_max: 5,
	attack_min: 5,
	defend_max: 10,
	defend_min: 10,
//	monster_check:'Hourly',
	check_interval:3600000,
	avoid_lost_cause:false,
	lost_cause_hours:5,
	rescue:false,
	risk:false,
    points:false,
	remove:false
};

Monster.runtime = {
	check:false, // id of monster to check if needed, otherwise false
	attack:false, // id of monster if we have an attack target, otherwise false
	defend:false, // id of monster if we have a defend target, otherwise false
	secondary: false, // Is there a target for mage or rogue that is full or not in cycle?  Used to tell quest to wait if don't quest when fortifying is on.
	multiplier : {defend:1,attack:1}, // General multiplier like Orc King or Barbarus
	values : {defend:[],attack:[]}, // Attack/defend values available for levelup
	big : [], // Defend big values available for levelup
	energy: 0, // How much can be used for next attack
	stamina: 0, // How much can be used for next attack
	used:{stamina:0,energy:0}, // How much was used in last attack
	button: {attack: {pick:1, query:[]},  // Query - the jquery query for buttons, pick - which button to use
			defend: {pick:1, query:[]},
			count:1}, // How many attack/defend buttons can the player access?
	health:10, // minimum health to attack,
	mode: null, // Used by update to tell work if defending or attacking
	stat: null, // Used by update to tell work if using energy or stamina
	message: null, // Message to display on dash and log when removing or reviewing or collecting monsters
	
	levelupdefending : false, // Used to preserve the runtime.defending value even when in force.stamina mode
	page : null, // What page (battle or monster) the check page should go to
	monsters : {}, // Used for storing running weighted averages for monsters
	defending: false,	// hint for other workers as to whether we are potentially using energy to defend
	banthus : [], // Possible attack values for :ban condition crits
	banthusNow : false  // Set true when ready to use a Banthus crit
};

Monster.display = [
	{
		advanced:true,
		id:'remove',
		label:'Delete completed monsters',
		checkbox:true,
		help:'Check to have script remove completed monsters with rewards collected from the monster list.'
	},{
		title:'Attack',
		group:[
			{
				id:'best_attack',
				label:'Use Best General',
				checkbox:true
			},{
				advanced:true,
				id:'general_attack',
				label:'Attack General',
				require:'!best_attack',
				select:'generals'
			},{
				advanced:true,
				id:'hide',
				label:'Use Raids and Monsters to Hide',
				checkbox:true,
				require:'stop!="Priority List"',
				help:'Fighting Raids keeps your health down. Fight Monsters with remaining stamina.'
			},{
				advanced:true,
				id:'points',
				label:'Get Demi Points First',
				checkbox:true,
				help:'Use Battle to get Demi Points prior to attacking Monsters.'
			},{
				id:'min_to_attack',
				label:'Attack Over',
				text:1,
				help:'Attack if defense is over this value. Range of 0% to 100%.',
				after:'%'
			},{
				id:'use_tactics',
				label:'Use tactics',
				checkbox:true,
				help:'Use tactics to improve damage when it\'s available (may lower exp ratio)'
			},{
				id:'choice',
				label:'Attack',
				select:['Any', 'Strongest', 'Weakest', 'Shortest ETD', 'Longest ETD', 'Spread', 'Max Damage', 'Min Damage','ETD Maintain','Goal Maintain'],
				help:'Any selects a random monster.' +
					'\nStrongest and Weakest pick by monster health.' +
					'\nShortest and Longest ETD pick by estimated time the monster will die.' +
					'\nMin and Max Damage pick by your relative damage percent done to a monster.' +
					'\nETD Maintain picks based on the longest monster expiry time.' +
					'\nGoal Maintain picks by highest proportional damage needed to complete your damage goal in the time left on a monster.'
			},{
				id:'stop',
				label:'Stop',
				select:['Never', 'Achievement', '2X Achievement', 'Priority List', 'Continuous'],
				help:'Select when to stop attacking a target.'
			},{
				id:'priority',
				label:'Priority List',
				require:'stop==="Priority List"',
				textarea:true,
				help:'Prioritized list of which monsters to attack'
			},{
				advanced:true,
				id:'own',
				label:'Never stop on Your Monsters',
				require:'stop!=="Priority List"',
				checkbox:true,
				help:'Never stop attacking your own summoned monsters (Ignores Stop option).'
			},{
				advanced:true,
				id:'rescue',
				require:'stop!=="Priority List"',
				label:'Rescue failing monsters',
				checkbox:true,
				help:'Attempts to rescue failing monsters even if damage is at or above Stop Optionby continuing to attack. Can be used in coordination with Lost-cause monsters setting to give up if monster is too far gone to be rescued.'
			},{
				advanced:true,
				id:'avoid_lost_cause',
				label:'Avoid Lost-cause Monsters',
				require:'stop!=="Priority List"',
				checkbox:true,
				help:'Do not attack monsters that are a lost cause, i.e. the ETD is longer than the time remaining.'
			},{
				advanced:true,
				id:'lost_cause_hours',
				label:'Lost-cause if ETD is',
				require:'avoid_lost_cause',
				after:'hours after timer',
				text:true,
				help:'# of Hours Monster must be behind before preventing attacks.'
			},{
				id:'attack_min',
				label:'Min Stamina Cost',
				select:[1,5,10,20,50,100,200],
				help:'Select the minimum stamina for a single attack'
			},{
				id:'attack_max',
				label:'Max Stamina Cost',
				select:[1,5,10,20,50,100,200],
				help:'Select the maximum stamina for a single attack'
			}
		]
	},{
		title:'Defend',
		group:[
			{
				id:'defend_active',
				label:'Defend Active',
				checkbox:true,
				help:'Must be checked to defend.'
			},{
		//		id:'defend_group',
				require:'defend_active',
				group:[
					{
						id:'best_defend',
						label:'Use Best General',
						checkbox:true
					},{
						advanced:true,
						id:'general_defend',
						require:'!best_defend',
						label:'Defend General',
						select:'generals'
					},{
						id:'defend',
						label:'Defend Below',
						text:30,
						help:'Defend if defense is under this value. Range of 0% to 100%.',
						after:'%'
					},{
						id:'defend_min',
						label:'Min Energy Cost',
						select:[10,20,40,100,200],
						help:'Select the minimum energy for a single energy action'
					},{
						id:'defend_max',
						label:'Max Energy Cost',
						select:[10,20,40,100,200],
						help:'Select the maximum energy for a single energy action'
					}
				]
			}
		]
	},{
		title:'Raids',
		group:[
			{
				id:'best_raid',
				label:'Use Best General',
				checkbox:true
			},{
				advanced:true,
				id:'general_raid',
				label:'Raid General',
				require:'!best_raid',
				select:'generals'
			},{
				id:'raid',
				label:'Raid',
				select:['Invade', 'Invade x5', 'Duel', 'Duel x5']
			},{
				advanced:true,
				id:'risk',
				label:'Risk Death',
				checkbox:true,
				help:'The lowest health you can raid with is 10, but you can lose up to 12 health in a raid, so are you going to risk it???'
			},{
				id:'armyratio',
				require:'raid!="Duel" && raid!="Duel x5"',
				label:'Target Army Ratio',
				select:['Any', 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
				help:'Smaller number for smaller target army. Reduce this number if you\'re losing in Invade'
			},{
				id:'levelratio',
				require:'raid!="Invade" && raid!="Invade x5"',
				label:'Target Level Ratio',
				select:['Any', 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
				help:'Smaller number for lower target level. Reduce this number if you\'re losing a lot'
			},{
				id:'force1',
				label:'Force +1',
				checkbox:true,
				help:'Force the first player in the list to aid.'
			}
		]
	},{
		title:'Siege Assist Options',
		group:[
			{
				id:'assist',
				label:'Assist with Sieges',
				help:'Spend stamina to assist with sieges.',
				checkbox:true
			},{
				id:'assist_links',
				label:'Use Assist Links in Dashboard',
				checkbox:true
			},{
				advanced:true,
				id:'check_interval',//monster_check
				label:'Monster Review',
				select:{
					900000:'15 Minutes',
					1800000:'30 Minutes',
					3600000:'Hourly',
					7200000:'2 Hours',
					21600000:'6 Hours',
					43200000:'12 Hours',
					86400000:'Daily',
					604800000:'Weekly'},
				help:'Sets how often to check Monster Stats.'
			}
		]
	}
];

Monster.types = {
	// Quest unlocks
	kull: {
		name:'Kull, the Orc Captain',
		list:'orc_captain_list.jpg',
		image:'orc_captain_large.jpg',
		dead:'orc_captain_dead.jpg',
		achievement:1000, // total guess
		timer:259200, // 72 hours
		mpool:4,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[1]
	},
	minotaur: {
		name:'Karn, The Minotaur',
		list:'monster_minotaur_list.jpg',
		image:'monster_minotaur.jpg',
		dead:'monster_minotaur_dead.jpg',
		achievement:10000, // total guess
		timer:432000, // 120 hours
		mpool:4,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[1,6]
	},
	// Raids
	raid_easy: {
		name:'The Deathrune Siege',
		list:'deathrune_list1.jpg',
		image:'raid_title_raid_a1.jpg',
		image2:'raid_title_raid_a2.jpg',
		dead:'raid_1_large_victory.jpg',
		achievement:100,
		timer:216000, // 60 hours
		timer2:302400, // 84 hours
		raid:true
	},

	raid: {
		name:'The Deathrune Siege',
		list:'deathrune_list2.jpg',
		image:'raid_title_raid_b1.jpg',
		image2:'raid_title_raid_b2.jpg',
		dead:'raid_1_large_victory.jpg',
		achievement:100,
		timer:319920, // 88 hours, 52 minutes
		timer2:519960, // 144 hours, 26 minutes
		raid:true
	},
	// Epic Boss
	colossus: {
		name:'Colossus of Terra',
		list:'stone_giant_list.jpg',
		image:'stone_giant_large.jpg',
		dead:'stone_giant_dead.jpg',
		achievement:20000,
		timer:259200, // 72 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[1,5],
		festival_timer: 345600, // 96 hours
		festival: 'stonegiant'
	},
	gildamesh: {
		name:'Gildamesh, the Orc King',
		list:'orc_boss_list.jpg',
		image:'orc_boss.jpg',
		dead:'orc_boss_dead.jpg',
		achievement:15000,
		timer:259200, // 72 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[1,5],
		festival_timer: 345600, // 96 hours
		festival: 'orcking'
	},
	keira: {
		name:'Keira the Dread Knight',
		list:'boss_keira_list.jpg',
		image:'boss_keira.jpg',
		dead:'boss_keira_dead.jpg',
		achievement:30000,
		timer:172800, // 48 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[1,5]
	},
	lotus: {
		name:'Lotus Ravenmoore',
		list:'boss_lotus_list.jpg',
		image:'boss_lotus.jpg',
		dead:'boss_lotus_big_dead.jpg',
		achievement:500000,
		timer:172800, // 48 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[1,5]
	},
	mephistopheles: {
		name:'Mephistopheles',
		list:'boss_mephistopheles_list.jpg',
		image:'boss_mephistopheles_large.jpg',
		dead:'boss_mephistopheles_dead.jpg',
		achievement:100000,
		timer:172800, // 48 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[1,5],
		festival_timer: 320400, // 89 hours
		festival: 'mephistopheles'
	},
	skaar: {
		name:'Skaar Deathrune',
		list:'death_list.jpg',
		image:'death_large.jpg',
		dead:'death_dead.jpg',
		achievement:1000000,
		timer:345000, // 95 hours, 50 minutes
		mpool:1,
		attack_button:'input[name="Attack Dragon"][src*="attack"]',
		attack:[1,5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="dispel"]',
		defend:[10,10,20,40,100],
		defense_img:'shield_img',
		festival_timer: 432000, // 120 hours
		festival: 'skaar_boss'
	},
	sylvanus: {
		name:'Sylvana the Sorceress Queen',
		list:'boss_sylvanus_list.jpg',
		image:'boss_sylvanus_large.jpg',
		dead:'boss_sylvanus_dead.jpg',
		achievement:50000,
		timer:172800, // 48 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"]',
		attack:[1,5],
		festival_timer: 259200, // 72 hours
		festival: 'sylvanus'
	},
	ambrosia: {
		name:'Ambrosia',
		list:'boss_ambrosia_list.jpg',
		image:'boss_ambrosia_large.jpg',
		dead:'boss_ambrosia_dead.jpg',
		achievement:1000000,
		timer:604800, // 168 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"]',
		attack:[5,10,20,50] // Needs details
//		festival_timer: 259200, // 72 hours
//		festival: 'ambrosia'
	},


	// Epic Team
	dragon_emerald: {
		name:'Emerald Dragon',
		list:'dragon_list_green.jpg',
		image:'dragon_monster_green.jpg',
		dead:'dead_dragon_image_green.jpg',
		achievement:100000,
		timer:259200, // 72 hours
		mpool:2,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[5,10],
		festival: 'dragon_green'
	},
	dragon_frost: {
		name:'Frost Dragon',
		list:'dragon_list_blue.jpg',
		image:'dragon_monster_blue.jpg',
		dead:'dead_dragon_image_blue.jpg',
		achievement:100000,
		timer:259200, // 72 hours
		mpool:2,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[5,10],
		festival_timer: 345600, // 96 hours
		festival: 'dragon_blue'
	},
	dragon_gold: {
		name:'Gold Dragon',
		list:'dragon_list_yellow.jpg',
		image:'dragon_monster_gold.jpg',
		dead:'dead_dragon_image_gold.jpg',
		achievement:100000,
		timer:259200, // 72 hours
		mpool:2,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[5,10],
		festival_timer: 345600, // 96 hours
		festival: 'dragon_yellow'
	},
	dragon_red: {
		name:'Ancient Red Dragon',
		list:'dragon_list_red.jpg',
		image:'dragon_monster_red.jpg',
		image2:'dragon_monster.jpg',
		dead:'dead_dragon_image_red.jpg',
		achievement:100000,
		timer:259200, // 72 hours
		mpool:2,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[5,10],
		festival_timer: 345600, // 96 hours
		festival: 'dragon_red'
	},
	serpent_amethyst: { 
		name:'Amethyst Sea Serpent',
		list:'seamonster_list_purple.jpg',
		image:'seamonster_purple.jpg',
		dead:'seamonster_dead.jpg',
		title:'monster_header_amyserpent.jpg',
		achievement:250000,
		timer:259200, // 72 hours
		mpool:2,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[10,20],
		defend_button:'input[name="Defend against Monster"]',
		defend:[10],
		festival_timer: 345600, // 96 hours
		festival: 'seamonster_purple'
	},
	serpent_ancient: { 
		name:'Ancient Sea Serpent',
		list:'seamonster_list_red.jpg',
		image:'seamonster_red.jpg',
		dead:'seamonster_dead.jpg',
		title:'monster_header_ancientserpent.jpg',
		achievement:250000,
		timer:259200, // 72 hours
		mpool:2,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[10,20],
		defend_button:'input[name="Defend against Monster"]',
		defend:[10],
		festival_timer: 345600, // 96 hours
		festival: 'seamonster_red'
	},
	serpent_emerald: { 
		name:'Emerald Sea Serpent',
		list:'seamonster_list_green.jpg',
		image:'seamonster_green.jpg',
		dead:'seamonster_dead.jpg',
		title:'seamonster_title_emerald.jpg',
		achievement:250000,
		timer:259200, // 72 hours
		mpool:2,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[10,20],
		defend_button:'input[name="Defend against Monster"]',
		defend:[10],
		festival_timer: 345600, // 96 hours
		festival: 'seamonster_green'
	},
	serpent_sapphire: {
		name:'Sapphire Sea Serpent',
		list:'seamonster_list_blue.jpg',
		image:'seamonster_blue.jpg',
		dead:'seamonster_dead.jpg',
		title:'seamonster_title_sapphire.jpg',
		achievement:250000,
		timer:259200, // 72 hours
		mpool:2,
		attack_button:'input[name="Attack Dragon"]',
		siege:false,
		attack:[10,20],
		defend_button:'input[name="Defend against Monster"]',
		defend:[10],
		festival_timer: 345600, // 96 hours
		festival: 'seamonster_blue'
	},
	// Epic World
	cronus: {
		name:'Cronus, The World Hydra',
		list:'hydra_head.jpg',
		image:'hydra_large.jpg',
		dead:'hydra_dead.jpg',
		achievement:500000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"]',
		attack:[10,20,50,100,200],
		festival_timer: 691200, // 192 hours
		festival: 'hydra'
	},
	legion: {
		name:'Battle of the Dark Legion',
		list:'castle_siege_list.jpg',
		image:'castle_siege_large.jpg',
		dead:'castle_siege_dead.jpg',
		achievement:1000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="attack"]',
		attack:[1,5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="fortify"]',
		defend:[10,10,20,40,100],
		orcs:true
	},
	genesis: {
		name:'Genesis, The Earth Elemental',
		list:'earth_element_list.jpg',
		image:'earth_element_large.jpg',
		dead:'earth_element_dead.jpg',
		achievement:1000000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="attack"]',
		attack:[1,5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="fortify"]',
		defend:[10,10,20,40,100],
		festival_timer: 691200, // 192 hours
		festival: 'earth_element'
	},
	ragnarok: {
		name:'Ragnarok, The Ice Elemental',
		list:'water_list.jpg',
		image:'water_large.jpg',
		dead:'water_dead.jpg',
		achievement:1000000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="attack"]',
		attack:[1,5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="dispel"]',
		defend:[10,10,20,40,100],
		defense_img:'shield_img',
		festival_timer: 691200, // 192 hours
		festival: 'water_element'
	},
	gehenna: {
		name:'Gehenna',
		list:'nm_gehenna_list.jpg',
		image:'nm_gehenna_large.jpg',
		dead:'nm_gehenna_dead.jpg',
		achievement:1000000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100],
		festival_timer: 691200, // 192 hours
		festival: 'fire_element'
	},
	valhalla: {
		name:'Valhalla, The Air Elemental',
		list:'monster_valhalla_list.jpg',
		image:'monster_valhalla.jpg',
		dead:'monster_valhalla_dead.jpg',
		achievement:1000000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[10,20,50,100,200],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[20,40,100,200],
		festival_timer: 691200, // 192 hours
		festival: 'air_element'
	},
	bahamut: {
		name:'Bahamut, the Volcanic Dragon',
		list:'nm_volcanic_list.jpg',
		image:'nm_volcanic_large.jpg',
		dead:'nm_volcanic_dead.jpg',
		achievement:2000000, // Guesswork
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100],
		festival_timer: 691200, // 192 hours
		festival: 'volcanic_new'
	},
	alpha_bahamut: {
		name:'Alpha Bahamut, the Volcanic Dragon',
		list:'nm_volcanic_list_2.jpg',
		image:'nm_volcanic_large_2.jpg',
		dead:'nm_volcanic_dead_2.jpg',
		achievement:6000000, // Guesswork
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100]
	},
	azriel: {
		name:'Azriel, the Angel of Wrath',
		list:'nm_azriel_list.jpg',
		image:'nm_azriel_large2.jpg',
		dead:'nm_azriel_dead.jpg',
		achievement:6000000, // ~0.5%, 2X = ~1%
		timer:604800, // 168 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100],
		festival_timer: 691200, // 192 hours
		festival: 'boss_azriel'
	},
	red_plains: {
		name:'War of the Red Plains',
		list:'nm_war_list.jpg',
		image:'nm_war_large.jpg',
		dead:'nm_war_dead.jpg',
		achievement:2500,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		tactics_button:'input[name="Attack Dragon"][src*="tactics"]',
		tactics:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100],
		orcs:true
	},
	corvintheus: {
		name:'Corvintheus',
		list:'corv_list.jpg',
		image:'boss_corv.jpg',
		dead:'boss_corv_dead.jpg',
		achievement:5000000,
		timer:604800, // 168 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100]
	},
	agamemnon: {
		name:'Agamemnon the Overseer',
		list:'boss_agamemnon_list.jpg',
		image:'boss_agamemnon_large.jpg',
		dead:'boss_agamemnon_dead.jpg',  // guess
		achievement:5000000,
		timer:604800, // 168 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[10,20,50,100,200],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[20,40,100,200],
		festival_timer: 691200, // 192 hours
		festival : 'agamemnon'
	},
	jahanna: {
		name:'Jahanna, Priestess of Aurora',
		list:'boss_jahanna_list.jpg',
		image:'boss_jahanna_large.jpg',
		dead:'boss_jahanna_dead.jpg',
		achievement:5000000,
		timer:604800, // 168 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[10,20,50,100,200],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[20,40,100,200]
	},
	aurora: {
		name:'Aurora',
		list:'boss_aurora_list.jpg',
		image:'boss_aurora_large.jpg',
		dead:'boss_aurora_dead.jpg',
		achievement:5000000,
		timer:604800, // 168 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[10,20,50,100,200],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[20,40,100,200]
	},
	rebellion: {
		name:'Aurelius, Lion\'s Rebellion',
		list:'nm_aurelius_list.jpg',
		image:'nm_aurelius_large.jpg',
		dead:'nm_aurelius_large_dead.jpg',
		achievement:1000,
		timer:604800, // 168 hours
		mpool:1,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		tactics_button:'input[name="Attack Dragon"][src*="tactics"]',
		tactics:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100],
		orcs:true
	},
	alpha_meph: {
		name:'Alpha Mephistopheles',
		list:'nm_alpha_mephistopheles_list.jpg',
		image:'nm_mephistopheles2_large.jpg',
		dead:'nm_mephistopheles2_dead.jpg',
		achievement:6000000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100],
		festival_timer: 691200, // 192 hours
		festival: 'alpha_mephistopheles',
		festival_mpool: 1
	},
	giant_kromash: {
		name:'Kromash',
		list:'monster_kromash_list.jpg',
		image:'monster_kromash_large.jpg',
		dead:'monster_kromash_dead.jpg',
		achievement:6000000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100]
	},
	giant_glacius: {
		name:'Glacius',
		list:'monster_glacius_list.jpg',
		image:'monster_glacius_large.jpg',
		dead:'monster_glacius_dead.jpg',
		achievement:6000000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100]
	},
	giant_shardros: {
		name:'Shardros',
		list:'monster_shardros_list.jpg',
		image:'monster_shardros_large.jpg',
		dead:'monster_shardros_dead.jpg',
		achievement:6000000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100]
	},
	giant_magmos: {
		name:'Magmos',
		list:'monster_magmos_list.jpg',
		image:'monster_magmos_large.jpg',
		dead:'monster_magmos_dead.jpg',
		achievement:6000000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="stab"],input[name="Attack Dragon"][src*="bolt"],input[name="Attack Dragon"][src*="smite"],input[name="Attack Dragon"][src*="bash"]',
		attack:[5,10,20,50],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40,100]
	},
	typhonus: {
		name:'Typhonus, the Chimera',
		list:'monster_chimera_list.jpg',
		image:'monster_chimera_large.jpg',
		dead:'monster_chimera_dead.jpg',
		achievement:6000000,
		timer:604800, // 168 hours
		mpool:3,
		attack_button:'input[name="Attack Dragon"][src*="smite"]',
		attack:[5,10,20],
		defend_button:'input[name="Attack Dragon"][src*="heal"]',
		defend:[10,20,40]
	}
};

Monster.health_img = ['img[src$="nm_red.jpg"]', 'img[src$="monster_health_background.jpg"]'];
Monster.shield_img = ['img[src$="bar_dispel.gif"]'];
Monster.defense_img = ['img[src$="nm_green.jpg"]', 'img[src$="seamonster_ship_health.jpg"]'];
Monster.secondary_img = 'img[src$="nm_stun_bar.gif"]';
Monster.class_img = ['div[style*="nm_bottom"] img[src$="nm_class_warrior.jpg"]',
				'div[style*="nm_bottom"] img[src$="nm_class_cleric.jpg"]',
				'div[style*="nm_bottom"] img[src$="nm_class_rogue.jpg"]',
				'div[style*="nm_bottom"] img[src$="nm_class_mage.jpg"]',
				'div[style*="nm_bottom"] img[src$="nm_class_ranger.jpg"]',
				'div[style*="nm_bottom"] img[src$="nm_class_warlock.jpg"]'];
Monster.class_name = ['Warrior', 'Cleric', 'Rogue', 'Mage', 'Ranger', 'Warlock'];
Monster.secondary_off = 'img[src$="nm_s_off_cripple.gif"],img[src$="nm_s_off_deflect.gif"]';
Monster.secondary_on = 'input[name="Attack Dragon"][src*="cripple"],input[name="Attack Dragon"][src*="deflect"]';
Monster.warrior = 'input[name="Attack Dragon"][src*="strengthen"]';
Monster.raid_buttons = {
	'Invade':	'input[src$="raid_attack_button.gif"]:first',
	'Invade x5':'input[src$="raid_attack_button3.gif"]:first',
	'Duel':		'input[src$="raid_attack_button2.gif"]:first',
	'Duel x5':	'input[src$="raid_attack_button4.gif"]:first'};
Monster.name_re = null;
Monster.name2_re = /^\s*(.*\S)\s*'s\b/im; // secondary player/monster name match regexp

Monster.setup = function() {
	Resources.use('Energy');
	Resources.use('Stamina');
};

Monster.init = function() {
	var i, str;

	// BEGIN: fix up "under level 4" generals
	if (this.option.general_attack === 'under level 4') {
		this.set('option.general_attack', 'under max level');
	}
	if (this.option.general_defend === 'under level 4') {
		this.set('option.general_defend', 'under max level');
	}
	if (this.option.general_raid === 'under level 4') {
		this.set('option.general_raid', 'under max level');
	}
	// END

	this._watch(Player, 'data.health');
	this._watch(LevelUp, 'runtime');
	this._revive(60);
	this.runtime.limit = 0;
	if (isNumber(this.runtime.multiplier)) {
		delete this.runtime.multiplier;
		this.runtime.multiplier = {defend:1,attack:1}; // General multiplier like Orc King or Barbarus
	}
	delete this.runtime.record;

	// generate a complete primary player/monster name match regexp
	str = '';
	for (i in this.types) {
		if (this.types[i].name) {
			if (str !== '') {
				str += '|';
			}
			str += this.types[i].name.regexp_escape();
		}
	}
	this.name_re = new RegExp("^\\s*(.*\\S)\\s*'s\\s+(?:" + str + ')\\s*$', 'im');
};

Monster.page = function(page, change) {
	var i, uid, name, type, tmp, list, el, mid, type_label, $health, $defense, $dispel, $secondary, dead = false, monster, timer, ATTACKHISTORY = 20, data = this.data, types = this.types, now = Date.now(), ensta = ['energy','stamina'], x, festival, parent = $('#'+APPID_+'app_body'), $children;
	if (['keep_monster_active', 'monster_battle_monster', 'festival_battle_monster'].indexOf(page)>=0) { // In a monster or raid
		festival = (page === 'festival_battle_monster');
		uid = $('img[linked][size="square"]').attr('uid') || $('img[width="52"][height="52"]').attr('src').regex(/facebook\.com\/(\d+)\/picture/i);
		//log(LOG_WARN, 'Parsing for Monster type');
		for (i in types) {
			if (types[i].dead && $('img[src$="'+types[i].dead+'"]', parent).length 
					&& (!types[i].title || $('div[style*="'+types[i].title+'"]').length 
						|| $('div[style*="'+types[i].image+'"]', parent).length)) {
//			if (types[i].dead && $('img[src$="'+types[i].dead+'"]', parent).length) {
				//log(LOG_WARN, 'Found a dead '+i);
				type_label = i;
				timer = (festival ? types[i].festival_timer : 0) || types[i].timer;
				dead = true;
				break;
			} else if (types[i].image && $('img[src$="'+types[i].image+'"],div[style*="'+types[i].image+'"]', parent).length) {
				//log(LOG_WARN, 'Parsing '+i);
				type_label = i;
				timer = (festival ? types[i].festival_timer : 0) || types[i].timer;
				break;
			} else if (types[i].image2 && $('img[src$="'+types[i].image2+'"],div[style*="'+types[i].image2+'"]', parent).length) {
				//log(LOG_WARN, 'Parsing second stage '+i);
				type_label = i;
				timer = (festival ? types[i].festival_timer : 0) || types[i].timer2 || types[i].timer;
				break;
			}
		}
		if (!uid || !type_label) {
			log(LOG_WARN, 'Unable to identify monster' + (!uid ? ' owner' : '') + (!type_label ? ' type' : ''));
			return false;
		}
		mid = uid+'_' + (page === 'festival_battle_monster' ? 'f' : (types[i].mpool || 4));
		if (this.runtime.check === mid) {
			this.set(['runtime','check'], false);
		}
		//log(LOG_WARN, 'MID '+ mid);
		this.set(['data',mid,'type'], type_label);
		this.set(['data',mid,'button_fail'], 0);
		this.set(['data',mid,'last'], now);
		type = types[type_label];
		monster = data[mid];
		this.set(['data',mid,'page'], page === 'festival_battle_monster' ? 'festival' : 'keep');
		this.set(['data',mid,'name'], $('a[href="keep.php?casuser=' + uid + '"]').first().text());
//		this.set(['data',mid,'name'], $('img[linked][size="square"]').parent().parent().parent().text().replace('\'s summoned','').replace(' Summoned','').replace(/Monster Code: \w+:\d/,'').trim());
		if (dead) {
			// Will this catch Raid format rewards?
			if ($('input[src*="collect_reward_button"]').length) {
				this.set(['data',mid,'state'], 'reward');
			} else if ($('td.dragonContainer table table a[href^="http://apps.facebook.com/castle_age/keep.php?casuser=' + userID + '"]').length) {
				if (!this.get(['data',mid,'dead'])) {
					History.add(type_label,1);
					this.set(['data',mid,'dead'], true);
				}
				this.set(['data',mid,'state'], 'complete');
				this.set(['data',mid,'remove'], true);
			} else {
				this.set(['data',mid,'state'], null);
			}
			return false;
		}
		this.runtime.monsters[type_label] = this.runtime.monsters[type_label] || {};
		if ($('span.result_body').text().match(/for your help in summoning|You have already assisted on this objective|You don't have enough stamina assist in summoning/i)) {
			if ($('span.result_body').text().match(/for your help in summoning/i)) {
				this.set(['data',mid,'assist'], now);
			}
			this.set(['data',mid,'state'], this.get(['data',mid,'state'], 'assist', 'string'));
		} else {
			for (i in ensta) {
				if (this.get(['runtime','used',ensta[i]])) {
					if ($('span[class="positive"]').length && $('span[class="positive"]').prevAll('span').text().replace(/[^0-9\/]/g,'')) {
						calc_rolling_weighted_average(this.runtime.monsters[type_label]
								,'damage',Number($('span[class="positive"]').prevAll('span').text().replace(/[^0-9\/]/g,''))
								,ensta[i],this.runtime.used[ensta[i]],10);
						//log(LOG_WARN, 'Damage per ' + ensta[i] + ' = ' + this.runtime.monsters[type_label]['avg_damage_per_' + ensta[i]]);
						if (Player.get('general') === 'Banthus Archfiend' 
								&& Generals.get(['data','Banthus Archfiend','charge'],1e99) < Date.now()) {
							Generals.set(['data','Banthus Archfiend','charge'],Date.now() + 4320000);
						}
						if (Player.get('general') === 'Zin'
								&& Generals.get(['data','Zin','charge'],1e99) < Date.now()) {
							Generals.set(['data','Zin','charge'],Date.now() + 82800000);
						}
					}
					this.set(['runtime','used',ensta[i]], 0);
					break;
				}
			}
		}
		if ($('img[src$="battle_victory"]').length) {
			History.add('raid+win',1);
		} else if ($('img[src$="battle_defeat"]').length) {
			History.add('raid+loss',-1);
		}
		// Check if variable number of button monster
		if (!type.raid && this.get(['data',mid,'state']) === 'engage' && type.attack.length > 2) {
			this.set(['runtime','button','count'], $(type.attack_button).length);
		}
		// Need to also parse what our class is for Bahamut.  (Can probably just look for the strengthen button to find warrior class.)
		for (i in this.class_img){
			if ($(this.class_img[i]).length){
				this.set(['data',mid,'mclass'], i);
				break;
				//log(LOG_WARN, 'Monster class : '+Monster['class_name'][i]);
			}
		}
		if ($(this.warrior).length) {
			this.set(['data',mid,'warrior'], true);
		}
		if ($(this.secondary_off).length) {
			this.set(['data',mid,'secondary'], 100);
		} else if ($(this.secondary_on).length) {
			this.set(['data',mid,'secondary'], 0.01); // Prevent from defaulting to false
			$secondary = $(this.secondary_img);
			if ($secondary.length) {
				this.set(['data',mid,'secondary'], 100 * $secondary.width() / $secondary.parent().width());
				log(LOG_WARN, this.class_name[this.get(['data',mid,'mclass'])] + ' phase. Bar at ' + this.get(['data',mid,'secondary']) + '%');
			}
		}
		// If we have some other class but no cleric button, then we can't heal.
		if ((this.get(['data',mid,'secondary']) || this.get(['data',mid,'warrior'])) && !$(type.defend_button).length) {
			this.set(['data',mid,'no_heal'], true);
		}
		for (i in this.health_img){
			if ($(this.health_img[i]).length){
				$health = $(this.health_img[i]).parent();
				this.set(['data',mid,'health'], $health.length ? (100 * $health.width() / $health.parent().width()) : 0);
				break;
			}
		}
		if (!type.defense_img || type.defense_img === 'shield_img') {
			// If we know this monster should have a shield image and don't find it, assume 0
			if (type.defense_img === 'shield_img') {
				this.set(['data',mid,'defense'], 100);
			}
			for (i in this.shield_img){
				if ($(this.shield_img[i]).length){
					$dispel = $(this.shield_img[i]).parent();
					this.set(['data',mid,'defense'], 100 * (1 - ($dispel.width() / ($dispel.next().length ? $dispel.width() + $dispel.next().width() : $dispel.parent().width()))));
					break;
				}
			}
		}
		if (!type.defense_img || type.defense_img === 'defense_img') {
			// If we know this monster should have a defense image and don't find it, 
			for (i in this.defense_img){
				if ($(this.defense_img[i]).length){
					$defense = $(this.defense_img[i]).parent();
					this.set(['data',mid,'defense'], $defense.width() / ($defense.next().length ? $defense.width() + $defense.next().width() : $defense.parent().width()) * 100);
					if ($defense.parent().width() < $defense.parent().parent().width()){
						this.set(['data',mid,'strength'], 100 * $defense.parent().width() / $defense.parent().parent().width());
					} else {
						this.set(['data',mid,'strength'], 100);
					}
					this.set(['data',mid,'defense'], this.get(['data',mid,'defense'], 0) * this.get(['data',mid,'strength'], 100) / 100);
					break;
				}
			}
		}
		this.set(['data',mid,'timer'], $('#'+APPID_+'monsterTicker').text().parseTimer());
		this.set(['data',mid,'finish'], now + (this.get(['data',mid,'timer']) * 1000));
		this.set(['data',mid,'damage','siege'], 0);
		this.set(['data',mid,'damage','others'], 0);
		if (!dead &&$('input[name*="help with"]').length && $('input[name*="help with"]').attr('title')) {
			//log(LOG_WARN, 'Current Siege Phase is: '+ this.data[mid].phase);
			this.set(['data',mid,'phase'], $('input[name*="help with"]').attr('title').regex(/ (.*)/i));
			//log(LOG_WARN, 'Assisted on '+this.get(['data',mid,'phase'])+'.');
		}
		$('img[src*="siege_small"]').each(function(i,el){
			var /*siege = $(el).parent().next().next().next().children().eq(0).text(),*/ dmg = $(el).parent().next().next().next().children().eq(1).text().replace(/\D/g,'').regex(/(\d+)/);
			//log(LOG_WARN, 'Monster Siege',siege + ' did ' + dmg.addCommas() + ' amount of damage.');
			Monster.add(['data',mid,'damage','siege'], dmg / (types[type_label].orcs ? 1000 : 1));
		});
//		$('td.dragonContainer table table a[href^="http://apps.facebook.com/castle_age/keep.php?casuser="]').each(function(i,el){
		$('img[src*="team_attack_icon"]').closest('tr').each(function(i,el){
			var user = $('a', el).attr('href').regex(/user=(\d+)/i), tmp, dmg, fort;
			tmp = $('td', el).last().text().replace(/[^0-9\/]/g,'');
			dmg = tmp.regex(/(\d+)/);
			fort = tmp.regex(/\/(\d+)/);
			if (user === userID){
				Monster.set(['data',mid,'damage','user','manual'], dmg - Monster.get(['data',mid,'damage','user','script'], 0));
				Monster.set(['data',mid,'defend','manual'], fort - Monster.get(['data',mid,'defend','script'], 0));
				Monster.set(['data',mid,'stamina','manual'], Math.round(Monster.get(['data',mid,'damage','user','manual'], 0) / Monster.get(['runtime','monsters',type_label,'avg_damage_per_stamina'], 1)));
			} else {
				Monster.add(['data',mid,'damage','others'], dmg);
			}
		});
		// If we're doing our first attack then add them without having to visit list
		if (this.get(['data',mid,'state']) === 'assist' && sum(this.get(['data',mid,'damage','user'], 0))) {
			this.set(['data',mid,'state'], 'engage');
		}
		if (!type.raid && $(type.attack_button).length && sum(this.get(['data',mid,'damage','user'], 0))) {
			this.set(['data',mid,'state'], this.get(['data',mid,'state'], 'engage', 'string'));
		}
		this.set(['data',mid,'dps'], sum(this.get(['data',mid,'damage'], 0)) / (timer - this.get(['data',mid,'timer'])));
		if (types[type_label].raid) {
			this.set(['data',mid,'total'], sum(this.get(['data',mid,'damage'])) + $('div[style*="monster_health_back.jpg"] div:nth-child(2)').text().regex(/(\d+)/));
		} else {
			this.set(['data',mid,'total'], Math.ceil(100 * sum(this.get(['data',mid,'damage'])) / (this.get(['data',mid,'health']) === 100 ? 0.1 : (100 - this.get(['data',mid,'health'])))));
		}
		this.set(['data',mid,'eta'], now + (Math.floor((this.get(['data',mid,'total']) - sum(this.get(['data',mid,'damage']))) / this.get(['data',mid,'dps'])) * 1000));
//		this.runtime.used.stamina = 0;
//		this.runtime.used.energy = 0;
	} else if (page === 'monster_dead') {
		if (Queue.temp.current === 'Monster' && this.runtime.mid) { // Only if we went here ourselves...
			log(LOG_WARN, 'Deleting ' + data[this.runtime.mid].name + "'s " + data[this.runtime.mid].type);
//			this.set(['data',this.runtime.mid]);
			this.set(['data',this.runtime.mid,'remove'], true);
		} else {
			log(LOG_WARN, 'Unknown monster (timed out)');
		}
		this.set(['runtime','check'], false);
// Still need to do battle_raid
	} else if (page === 'festival_monster_list') { // Check monster / raid list
		for (mid in data) {
			if (data[mid].page === 'festival' && (data[mid].state !== 'assist' || data[mid].finish < now)) {
				data[mid].state = null;
			}
		}
		list = $('div[style*="festival_monster_list_middle.jpg"]')
		for (i=0; i<list.length; i++) {
			el = list[i];
			$children = $(el).children('div');
			try {
				this._transaction(); // BEGIN TRANSACTION
				assert(uid = $children.eq(3).find('a').attr('href').regex(/casuser=(\d+)/i), 'Unknown UserID');
				tmp = $children.eq(1).find('div').eq(0).attr('style').regex(/graphics\/([^.]*\....)/i);
				assert(type = findInObject(types, tmp, 'list'), 'Unknown monster type: '+tmp+ ' for ' + uid);
				assert(name = $children.eq(2).children().eq(0).text().replace(/'s$/i, ''), 'Unknown User Name');
//				log(LOG_WARN, 'Adding monster - uid: '+uid+', name: '+name+', image: "'+type+'"');
				mid = uid + '_f';
				this.set(['data',mid,'type'], type);
				this.set(['data',mid,'name'], name);
				this.set(['data',mid,'page'], 'festival');
				switch($children.eq(3).find('img').attr('src').filepart().regex(/(\w+)\.(gif|jpg)/)[0]) {
				case 'festival_monster_engagebtn':
					this.set(['data',mid,'state'], 'engage');
					break;
				case 'festival_monster_collectbtn':
					this.set(['data',mid,'state'], 'reward');
					break;
				case 'festival_monster_viewbtn':
					this.set(['data',mid,'state'], 'complete');
					break;
				default:
					this.set(['data',mid,'state'], 'unknown');
					break; // Should probably delete, but keep it on the list...
				}
				this._transaction(true); // COMMIT TRANSACTION
			} catch(e) {
				this._transaction(false); // ROLLBACK TRANSACTION on any error
				log(e, e.name + ' in ' + this.name + '.page(' + page + ', ' + change + '): ' + e.message);
			}
		}
	} else if (page === 'monster_monster_list') { // Check monster / raid list
		for (mid in data) {
			if (!types[data[mid].type].raid && data[mid].page !== 'festival'
					&& (data[mid].state !== 'assist' || data[mid].finish < now)) {
				data[mid].state = null;
			}
		}
		list = $('div[style*="monsterlist_container.gif"]')
		for (i=0; i<list.length; i++) {
			el = list[i];
			$children = $(el).children('div');
			try {
				this._transaction(); // BEGIN TRANSACTION
				assert(uid = $children.eq(2).find('input[name="casuser"]').attr('value'), 'Unknown UserID');
				tmp = $children.eq(0).find('img').eq(0).attr('src').regex(/graphics\/([^.]*\....)/i);
				assert(type = findInObject(types, tmp, 'list'), 'Unknown monster type: '+tmp);
				assert(name = $children.eq(1).children().eq(0).text().replace(/'s$/i, ''), 'Unknown User Name');
//				log(LOG_WARN, 'Adding monster - uid: '+uid+', name: '+name+', image: "'+type+'"');
				mid = uid + '_' + (types[type].mpool || 4);
				this.set(['data',mid,'type'], type);
				this.set(['data',mid,'name'], name);
				switch($children.eq(2).find('input[type="image"]').attr('src').regex(/(\w+)\.(gif|jpg)/)[0]) {
				case 'monsterlist_button_engage':
					this.set(['data',mid,'state'], 'engage');
					break;
				case 'monster_button_collect':
					// Can't tell if complete or reward, so set to complete, and will find reward when next visited
					this.set(['data',mid,'state'], 'complete');
					break;
				default:
					this.set(['data',mid,'state'], 'unknown');
					break; // Should probably delete, but keep it on the list...
				}
				this._transaction(true); // COMMIT TRANSACTION
			} catch(e) {
				this._transaction(false); // ROLLBACK TRANSACTION on any error
				log(e, e.name + ' in ' + this.name + '.page(' + page + ', ' + change + '): ' + e.message);
			}
		}
	} else if (page === 'monster_remove_list') { // Check monster / raid list
		for (mid in data) {
			if (!types[data[mid].type].raid && data[mid].page !== 'festival'
					&& (data[mid].state !== 'assist' || data[mid].finish < now)) {
				data[mid].state = null;
			}
		}
		$('#app'+APPID+'_app_body div.imgButton').each(function(a,el) {
			var link = $('a', el).attr('href'), mid;
			if (link && link.regex(/casuser=([0-9]+)/i)) {
				mid = link.regex(/casuser=([0-9]+)/i)+'_'+link.regex(/mpool=([0-9])/i);
				log(LOG_WARN, 'MID '+ mid);
				switch($('img', el).attr('src').regex(/dragon_list_btn_([0-9])/)) {
				case 2:
					Monster.set(['data',mid,'state'], 'reward');
					break;
				case 3:
					Monster.set(['data',mid,'state'], 'engage');
					break;
				case 4:
					Monster.set(['data',mid,'state'], 'complete');
					Monster.set(['data',mid,'remove'], true);
					break;
				default:
					Monster.set(['data',mid,'state'], 'unknown');
					break; // Should probably delete, but keep it on the list...
				}
			}
		});
	}
	return false;
};

Monster.resource = function() {
	if (Monster.runtime.banthus.length && Generals.get(['data','Banthus Archfiend','charge'],1e99) < Date.now()) {
		Monster.set(['runtime','banthusNow'], true);
		LevelUp.set(['runtime','basehit'], Monster.runtime.banthus.lower(LevelUp.get(['runtime','stamina'], 0)));
		LevelUp.set(['runtime','general'], 'Banthus Archfiend');
		return 'stamina';
	}
	Monster.set(['runtime','banthusNow'], false);
	return false;
};

Monster.update = function(event) {
	if (event.type === 'runtime' && event.worker.name !== 'LevelUp') {
		return;
	}
	var i, j, mid, uid, type, stat_req, req_stamina, req_health, req_energy, messages = [], fullname = {}, list = {}, listSortFunc, matched_mids = [], min, max, limit, filter, ensta = ['energy','stamina'], defatt = ['defend','attack'], button_count, monster, damage, target, now = Date.now(), waiting_ok;
	this.runtime.mode = this.runtime.stat = this.runtime.check = this.runtime.message = this.runtime.mid = null;
	this.runtime.big = this.runtime.values.attack = this.runtime.values.defend = [];
	limit = this.runtime.limit;
	if(!LevelUp.runtime.running && limit === 100){
		limit = 0;
	}
	list.defend = [];
	list.attack = [];
	// Flush stateless monsters
	for (mid in this.data) {
		if (!this.data[mid].state) {
			log(LOG_LOG, 'Deleted monster MID ' + mid + ' because state is ' + this.data[mid].state);
			delete this.data[mid];
		}
	}
	// Check for unviewed monsters
	for (mid in this.data) {
		if (!this.data[mid].last && !this.data[mid].ignore && this.data[mid].state === 'engage') {
			this.check(mid, 'Checking new monster ', 'casuser','');
			this.runtime.defending = true;
			this.data[mid].last = now; // Force it to only check once
			return;
		}
	}
	// Some generals use more stamina, but only in certain circumstances...
	defatt.forEach( function(mode) {
		Monster.runtime.multiplier[mode] = (Generals.get([LevelUp.runtime.general || (Generals.best(Monster.option['best_' + mode] ? ('monster_' + mode) : Monster.option['general_' + mode])), 'skills'], '').regex(/Increase Power Attacks by (\d+)/i) || 1);
		//log(LOG_WARN, 'mult ' + mode + ' X ' + Monster.runtime.multiplier[mode]);
	});
	waiting_ok = !this.option.hide && !LevelUp.runtime.force.stamina;
	if (this.option.stop === 'Priority List') {
		var condition, searchterm, attack_found = false, defend_found = false, attack_overach = false, defend_overach = false, o, suborder, p, defense_kind, button, order = [];
		this.runtime.banthus = [];
		if (this.option.priority) {
			order = this.option.priority.toLowerCase().replace(/ *[\n,]+ */g,',').replace(/[, ]*\|[, ]*/g,'|').split(',');
		}
		order.push('your ','\'s'); // Catch all at end in case no other match
		for (o=0; o<order.length; o++) {
			order[o] = order[o].trim();
			if (!order[o]) {
				continue;
			}
			if (order[o] === 'levelup') {
				if ((LevelUp.runtime.force.stamina && !list.attack.length) 
						|| (LevelUp.runtime.force.energy && !list.defend.length)) {
					matched_mids = [];
					continue;
				} else {
					break;
				}
			}
			suborder = order[o].split('|');
			for (p=0; p<suborder.length; p++) {
				suborder[p] = suborder[p].trim();
				if (!suborder[p]) {
					continue;
				}
				searchterm = suborder[p].match(new RegExp("^[^:]+")).toString().trim();
				condition = suborder[p].replace(new RegExp("^[^:]+"), '').toString().trim();
				//log(LOG_WARN, 'Priority order ' + searchterm +' condition ' + condition + ' o ' + o + ' p ' + p);
				for (mid in this.data) {
					monster = this.data[mid];
					type = this.types[monster.type];
					//If this monster does not match, skip to next one
					// Or if this monster is dead, skip to next one
					if (	matched_mids.indexOf(mid)>=0
							||((monster.name === 'You' ? 'Your' : monster.name + '\'s')
								+ ' ' + type.name).toLowerCase().indexOf(searchterm) < 0
							|| monster.ignore) {
						continue;
					}
					matched_mids.push(mid);
					monster.ac = /:ac\b/.test(condition);
					if (monster.state !== 'engage') {
						continue;
					}
					//Monster is a match so we set the conditions
					monster.max = this.conditions('max',condition);
					monster.ach = this.conditions('ach',condition) || type.achievement;
					// check for min/max stamina/energy overrides
					if ((i = this.conditions('smin',condition)) && isNumber(i) && !isNaN(i)) {
						monster.smin = i;
					} else if (monster.smin) {
						delete monster.smin;
					}
					if ((i = this.conditions('smax',condition)) && isNumber(i) && !isNaN(i)) {
						monster.smax = i;
					} else if (monster.smax) {
						delete monster.smax;
					}
					if ((i = this.conditions('emin',condition)) && isNumber(i) && !isNaN(i)) {
						monster.emin = i;
					} else if (monster.emin) {
						delete monster.emin;
					}
					if ((i = this.conditions('emax',condition)) && isNumber(i) && !isNaN(i)) {
						monster.emax = i;
					} else if (monster.emax) {
						delete monster.emax;
					}

					// check for pa ach/max overrides
					if ((i = this.conditions('achpa',condition)) && isNumber(i) && !isNaN(i)) {
						monster.achpa = i;
						if (isNumber(j = this.runtime.monsters[monster.type].avg_damage_per_stamina) && !isNaN(j)) {
							monster.ach = Math.ceil(i * 5 * j);
						}
					} else if (monster.achpa) {
						delete monster.achpa;
					}
					if ((i = this.conditions('maxpa',condition)) && isNumber(i) && !isNaN(i)) {
						monster.maxpa = i;
						if (isNumber(j = this.runtime.monsters[monster.type].avg_damage_per_stamina) && !isNaN(j)) {
							monster.max = Math.ceil(i * 5 * j);
						}
					} else if (monster.maxpa) {
						delete monster.maxpa;
					}

					monster.attack_min = this.conditions('a%',condition) || this.option.min_to_attack;
					if (isNumber(monster.ach) && !isNaN(monster.ach) && (!isNumber(monster.max) || isNaN(monster.max))) {
						monster.max = monster.ach;
					}
					if (isNumber(monster.max) && !isNaN(monster.max) && (!isNumber(monster.ach) || isNaN(monster.ach))) {
						monster.ach = monster.max;
					}
					if (isNumber(monster.max) && !isNaN(monster.max)) {
						monster.ach=Math.min(monster.ach, monster.max);
					}
					if (type.defend) {
						monster.defend_max = Math.min(this.conditions('f%',condition) || this.option.defend, (monster.strength || 100) - 1);
					}
					damage = 0;
					if (monster.damage && monster.damage.user) {
						damage += sum(monster.damage.user);
					}
					if (monster.defend) {
						damage += sum(monster.defend);
					}
					target = monster.max || monster.ach || 0;
					if(!type.raid){
						button_count = ((type.attack.length > 2) ? this.runtime.button.count : type.attack.length);
					}
					req_stamina = type.raid ? (this.option.raid.search('x5') === -1 ? 1	: 5)
							: Math.min(type.attack[Math.min(button_count, monster.smax || type.attack.length)-1], Math.max(type.attack[0], LevelUp.runtime.basehit || monster.smin || this.option.attack_min)) * this.runtime.multiplier.attack;
					req_health = type.raid ? (this.option.risk ? 13 : 10) : 10;
// Don't want to die when attacking a raid
					//log(LOG_WARN, 'monster name ' + type.name + ' basehit ' + LevelUp.runtime.basehit +' min ' + type.attack[Math.min(button_count, monster.smax || type.attack.length)-1]);
					if ((monster.defense || 100) >= monster.attack_min) {
// Set up this.values.attack for use in levelup calcs
						if (type.raid) {
							this.runtime.values.attack = this.runtime.values.attack.concat((this.option.raid.search('x5') < 0) ? 1 : 5).unique();
// If it's a defense monster, never hit for 1 damage.  Otherwise, 1 damage is ok.
						} else {
							if (damage < this.conditions('ban',condition)) {
								this.runtime.banthus = this.runtime.banthus.concat(type.attack).unique();
							}
							if (type.defend && type.attack.indexOf(1) > -1) {
								this.runtime.values.attack = this.runtime.values.attack.concat(type.attack.slice(1,this.runtime.button.count)).unique();
							} else {
								this.runtime.values.attack = this.runtime.values.attack.concat(type.attack.slice(0,this.runtime.button.count)).unique();
							}
						}
						if ((attack_found === false || attack_found === o)
								&& (waiting_ok || (Player.get('health', 0) >= req_health
								&& LevelUp.runtime.stamina >= req_stamina))
								&& (!this.runtime.banthusNow	
									|| damage < this.conditions('ban',condition))
								&& (!LevelUp.runtime.basehit
									|| type.attack.indexOf(LevelUp.runtime.basehit)>= 0)) {
							button = type.attack_button;
							if (this.option.use_tactics && type.tactics) {
								button = type.tactics_button;
							}
							if (damage < monster.ach
									|| (this.runtime.banthusNow	
										&& damage < this.conditions('ban',condition))
									|| (LevelUp.runtime.basehit
										&& type.attack.indexOf(LevelUp.runtime.basehit)>= 0)) {
								attack_found = o;
								if (attack_found && attack_overach) {
									list.attack = [[mid, damage / sum(monster.damage), button, damage, target]];
									attack_overach = false;
								} else {
									list.attack.push([mid, damage / sum(monster.damage), button, damage, target]);
								}
								//log(LOG_WARN, 'ATTACK monster ' + monster.name + ' ' + type.name);
							} else if ((monster.max === false || damage < monster.max)
									&& !attack_found 
									&& (attack_overach === false || attack_overach === o)) {
								list.attack.push([mid, damage / sum(monster.damage), button, damage, target]);
								attack_overach = o;
							}
						}
					}
					// Possible defend target?
					if (!monster.no_heal && type.defend && this.option.defend_active
							&& (/:big\b/.test(condition)
								|| ((monster.defense || 100) < monster.defend_max))) {
						this.runtime.big = this.runtime.big.concat(type.defend.slice(0,this.runtime.button.count)).unique();
					}
					if (this.option.defend_active && (defend_found === false || defend_found === o)) {
						defense_kind = false;
						if (typeof monster.secondary !== 'undefined' && monster.secondary < 100) {
							//log(LOG_WARN, 'Secondary target found (' + monster.secondary + '%)');
							defense_kind = Monster.secondary_on;
						} else if (monster.warrior && (monster.strength || 100) < 100 && monster.defense < monster.strength - 1) {
							defense_kind = Monster.warrior;
						} else if (!monster.no_heal 
								&& ((/:big\b/.test(condition) && LevelUp.runtime.big)
									|| (monster.defense || 100) < monster.defend_max)) {
							defense_kind = type.defend_button;
						}
						if (defense_kind) {
							this.runtime.values.defend = this.runtime.values.defend.concat(type.defend.slice(0,this.runtime.button.count)).unique();
							//log(LOG_WARN, 'defend ok' + damage + ' ' + LevelUp.runtime.basehit+ ' ' + type.defend.indexOf(LevelUp.runtime.basehit));
							if (!LevelUp.runtime.basehit 
									|| type.defend.indexOf(LevelUp.runtime.basehit)>= 0) {
								if (damage < monster.ach
										|| (/:sec\b/.test(condition)
											&& defense_kind === Monster.secondary_on)) {
									//log(LOG_WARN, 'DEFEND monster ' + monster.name + ' ' + type.name);
									defend_found = o;
								} else if ((monster.max === false || damage < monster.max)
										&& !defend_found && (defend_overach === false  || defend_overach === o)) {
									defend_overach = o;
								} else {
									continue;
								}
								if (defend_found && defend_overach) {
									list.defend = [[mid, damage / sum(monster.damage), defense_kind, damage, target]];
									defend_overach = false;
								} else {
									list.defend.push([mid, damage / sum(monster.damage), defense_kind, damage, target]);
								}
							}
						}
					}
				}
			}
		}
		matched_mids = [];
	} else {
		// Make lists of the possible attack and defend targets
		for (mid in this.data) {
			monster = this.data[mid];
			type = this.types[monster.type];
                        if(!type.raid){
                                button_count = ((type.attack.length > 2) ? this.runtime.button.count : type.attack.length);
                        }
			req_stamina = type.raid ? (this.option.raid.search('x5') === -1 ? 1	: 5)
					: Math.min(type.attack[Math.min(button_count,type.attack.length)-1], Math.max(type.attack[0], LevelUp.runtime.basehit || monster.smin || this.option.attack_min)) * this.runtime.multiplier.attack;
			req_health = type.raid ? (this.option.risk ? 13 : 10) : 10; // Don't want to die when attacking a raid
			monster.ach = (this.option.stop === 'Achievement') ? type.achievement : (this.option.stop === '2X Achievement') ? type.achievement : (this.option.stop === 'Continuous') ? type.achievement :0;
			monster.max = (this.option.stop === 'Achievement') ? type.achievement : (this.option.stop === '2X Achievement') ? type.achievement*2 : (this.option.stop === 'Continuous') ? type.achievement*this.runtime.limit :0;
			if (	!monster.ignore
					&& monster.state === 'engage'
					&& monster.finish > Date.now()	) {
				uid = mid.replace(/_.+/,'');
				/*jslint eqeqeq:false*/
				if (uid == userID && this.option.own) {
				/*jslint eqeqeq:true*/
					// add own monster
				} else if (this.option.avoid_lost_cause
						&& (monster.eta - monster.finish)/3600000
							> this.option.lost_cause_hours && (!LevelUp.option.override || !LevelUp.runtime.running) && !monster.override) {
					continue;  // Avoid lost cause monster
				} else if (this.option.rescue
						&& (monster.eta
							>= monster.finish - this.option.check_interval)) {
					// Add monster to rescue
				} else if (this.option.stop === 'Achievement'
						&& sum(monster.damage && monster.damage.user) + sum(monster.defend)
							> (type.achievement || 0)) {
					continue; // Don't add monster over achievement
				} else if (this.option.stop === '2X Achievement'
						&& sum(monster.damage && monster.damage.user) + sum(monster.defend)
							> type.achievement * 2) {
					continue; // Don't add monster over 2X  achievement
				} else if (this.option.stop === 'Continuous'
						&& sum(monster.damage && monster.damage.user) + sum(monster.defend)
							> type.achievement * limit) {
					continue; // Don't add monster over 2X  achievement
				}
				damage = 0;
				if (monster.damage && monster.damage.user) {
					damage += sum(monster.damage.user);
				}
				if (monster.defend) {
					damage += sum(monster.defend);
				}
				/*jslint eqeqeq:false*/
				if ((uid == userID && this.option.own) || this.option.stop === 'Never') {
				/*jslint eqeqeq:true*/
					target = 1e99;
				} else if (this.option.stop === 'Achievement') {
					target = type.achievement || 0;
				} else if (this.option.stop === '2X Achievement') {
					target = (type.achievement || 0) * 2;
				} else if (this.option.stop === 'Continuous') {
					target = (type.achievement || 0) * limit;
				} else {
					target = 0;
				}
				// Possible attack target?
				if ((waiting_ok || (Player.get('health', 0) >= req_health && LevelUp.runtime.stamina >= req_stamina))
				 && (isNumber(monster.defense) ? monster.defense : 100) >= Math.max(this.option.min_to_attack,0.1)) {
// Set up this.values.attack for use in levelup calcs
					if (type.raid) {
						this.runtime.values.attack = this.runtime.values.attack.concat((this.option.raid.search('x5') < 0) ? 1 : 5).unique();
// If it's a defense monster, never hit for 1 damage.  Otherwise, 1 damage is ok.
					} else if (type.defend && type.attack.indexOf(1) > -1) {
						this.runtime.values.attack = this.runtime.values.attack.concat(type.attack.slice(1,this.runtime.button.count)).unique();
					} else {
						this.runtime.values.attack = this.runtime.values.attack.concat(type.attack.slice(0,this.runtime.button.count)).unique();
					}
					if (this.option.use_tactics && type.tactics) {
						list.attack.push([mid, (sum(monster.damage && monster.damage.user) + sum(monster.defend)) / sum(monster.damage), type.tactics_button, damage, target]);
					} else {
						list.attack.push([mid, (sum(monster.damage && monster.damage.user) + sum(monster.defend)) / sum(monster.damage), type.attack_button, damage, target]);
					}
				}
				// Possible defend target?
				if (this.option.defend_active) {
					if(type.defend) {
						this.runtime.values.defend = this.runtime.values.defend.concat(type.defend.slice(0,this.runtime.button.count)).unique();
					}
					if ((monster.secondary || 100) < 100) {
						list.defend.push([mid, (sum(monster.damage && monster.damage.user) + sum(monster.defend)) / sum(monster.damage), Monster.secondary_on, damage, target]);
					} else if (monster.warrior && (monster.strength || 100) < 100){
						list.defend.push([mid, (sum(monster.damage && monster.damage.user) + sum(monster.defend)) / sum(monster.damage), Monster.warrior, damage, target]);
					} else if ((monster.defense || 100) < Math.min(this.option.defend, (monster.strength -1 || 100))
                                                && !monster.no_heal) {
						list.defend.push([mid, (sum(monster.damage && monster.damage.user) + sum(monster.defend)) / sum(monster.damage), type.defend_button, damage, target]);
					}
				}
			}
		}
	}
	this.runtime.defending = list.defend && list.defend.length > 0;
	// If using the priority list and levelup settings, the script may oscillate between having something to defend when in level up, and then forgetting it when it goes to attack something because it doesn't pass levelup in the priority list and tries to quest, and then finds it again.  The following preserves the runtime.defending value even when in force.stamina mode
	if (LevelUp.runtime.force.stamina) {
		this.runtime.defending = this.runtime.levelupdefending;
	} else {
		this.runtime.levelupdefending = this.runtime.defending;
	}
	
	listSortFunc = function(a,b){
		var monster_a = Monster.data[a[0]], monster_b = Monster.data[b[0]], late_a, late_b, time_a, time_b, goal_a, goal_b;
		switch(Monster.option.choice) {
		case 'Any':
			return (Math.random()-0.5);
		case 'Strongest':
			return monster_b.health - monster_a.health;
		case 'Weakest':
			return monster_a.health - monster_b.health;
		case 'Shortest ETD':
			return monster_a.eta - monster_b.eta;
		case 'Longest ETD':
			return monster_b.eta - monster_a.eta;
		case 'Spread':
			return sum(monster_a.stamina) - sum(monster_b.stamina);
		case 'Max Damage':
			return b[1] - a[1];
		case 'Min Damage':
			return a[1] - b[1];
		case 'ETD Maintain':
			late_a = monster_a.eta - monster_a.finish;
			late_b = monster_b.eta - monster_b.finish;
			// this is what used to happen before r655
			//return late_a < late_b ? 1 : (late_a > late_b ? -1 : 0);
			// this should capture the same intent,
			// but continue provide sorting after monsters are caught up
			return late_b - late_a;
		case 'Goal Maintain':
			time_a = Math.max(1, now - Math.min(monster_a.eta || monster_a.finish, monster_a.finish));
			time_b = Math.max(1, now - Math.min(monster_b.eta || monster_b.finish, monster_b.finish));
			// aim a little before the end so we aren't caught short
			time_a = Math.max((time_a + now) / 2, time_a - 14400000); // 4 hours

			time_b = Math.max((time_b + now) / 2, time_b - 14400000);
			goal_a = Math.max(1, a[4] - a[3]);
			goal_b = Math.max(1, b[4] - b[3]);
			return (goal_b / time_b) - (goal_a / time_a);
		}
	};
	for (i in list) {
		// Find best target
		//log(LOG_WARN, 'list ' + i + ' is ' + length(list[i]));
		if (list[i].length) {
			if (list[i].length > 1) {
				list[i].sort(listSortFunc);
			}
			this.runtime[i] = mid = list[i][0][0];
			this.runtime.button[i].query = list[i][0][2];
			uid = mid.replace(/_.+/,'');
			type = this.types[this.data[mid].type];
			fullname[i] = (uid === userID ? 'your ': (this.data[mid].name + '\'s ')) + type.name;
		} else {
			this.runtime[i] = false;
		}
	}
	// Make the * dash messages for current attack and defend targets
	for (i in ensta) {
		if (this.runtime[defatt[i]]) {
			monster = this.data[this.runtime[defatt[i]]];
			type = this.types[monster.type];
			// Calculate what button for att/def and how much energy/stamina cost
			if (ensta[i] === 'stamina' && type.raid) {
				this.runtime[ensta[i]] = this.option.raid.search('x5') < 0 ? 1 : 5;
			} else {
				button_count = ((type.attack.length > 2) ? this.runtime.button.count : type[defatt[i]].length);
				min = Math.min(type[defatt[i]][Math.min(button_count,type[defatt[i]].length)-1], Math.max(type[defatt[i]][0], LevelUp.runtime.basehit || this.option[defatt[i] + '_min']));
				max = Math.min(type[defatt[i]][Math.min(button_count,type[defatt[i]].length)-1], LevelUp.runtime.basehit || this.option[defatt[i] + '_max'], LevelUp.runtime[ensta[i]] / this.runtime.multiplier[defatt[i]]);
				damage = sum(monster.damage && monster.damage.user) + sum(monster.defend);
				limit = (LevelUp.runtime.big ? max : damage < (monster.ach || damage)
						? monster.ach : damage < (monster.max || damage)
						? monster.max : max);
				max = Math.min(max,(limit - damage)/(this.runtime.monsters[monster.type]['avg_damage_per_'+ensta[i]] || 1)/this.runtime.multiplier[defatt[i]]);
				//log(LOG_WARN, 'monster damage ' + damage + ' average damage ' + (this.runtime.monsters[monster.type]['avg_damage_per_'+ensta[i]] || 1).round(0) + ' limit ' + limit + ' max ' + ensta[i] + ' ' + max.round(1));
				filter = function(e) { return (e >= min && e <= max); };
				this.runtime.button[defatt[i]].pick = bestObjValue(type[defatt[i]], function(e) { return e; }, filter) || type[defatt[i]].indexOf(min);
				//log(LOG_WARN, ' ad ' + defatt[i] + ' min ' + min + ' max ' + max+ ' pick ' + this.runtime.button[defatt[i]].pick);
				//log(LOG_WARN, 'min detail '+ defatt[i] + ' # buttons   ' + Math.min(this.runtime.button.count,type[defatt[i]].length) +' button val ' +type[defatt[i]][Math.min(this.runtime.button.count,type[defatt[i]].length)-1] + ' max of type[0] ' + type[defatt[i]][0] + ' queue or option ' + (LevelUp.runtime.basehit || this.option[defatt[i] + '_min']));
				//log(LOG_WARN, 'max detail '+ defatt[i] + ' physical max ' + type[defatt[i]][Math.min(this.runtime.button.count,type[defatt[i]].length)-1] + ' basehit||option ' + (LevelUp.runtime.basehit || this.option[defatt[i]]) + ' stamina avail ' + (LevelUp.runtime[ensta[i]] / this.runtime.multiplier[defatt[i]]));
				this.runtime[ensta[i]] = type[defatt[i]][this.runtime.button[defatt[i]].pick] * this.runtime.multiplier[defatt[i]];
			}
			this.runtime.health = type.raid ? 13 : 10; // Don't want to die when attacking a raid
			req_health = (defatt[i] === 'attack' ? Math.max(0, this.runtime.health - Player.get('health', 0)) : 0);
			stat_req = Math.max(0, (this.runtime[ensta[i]] || 0) - LevelUp.runtime[ensta[i]]);
			if (stat_req || req_health) {
				messages.push('Waiting for ' + (stat_req ? Config.makeImage(ensta[i]) + stat_req : '')
				+ (stat_req && req_health ? ' &amp; ' : '') + (req_health ? Config.makeImage('health') + req_health : '')
				+ ' to ' + defatt[i] + ' ' + fullname[defatt[i]]
				+ ' (' + Config.makeImage(ensta[i]) + (this.runtime[ensta[i]] || 0) + '+' + (stat_req && req_health ? ', ' : '') + (req_health ? Config.makeImage('health') + req_health : '') + ')');
			} else {
				messages.push(defatt[i] + ' ' + fullname[defatt[i]] + ' (' + Config.makeImage(ensta[i])
						+ (this.runtime[ensta[i]] || 0) + '+)');
				this.runtime.mode = this.runtime.mode || defatt[i];
				this.runtime.stat = this.runtime.stat || ensta[i];
			}
		}
	}
	if (this.runtime.mode === 'attack' && Battle.runtime.points && this.option.points && Battle.runtime.attacking) {
		this.runtime.mode = this.runtime.stat = null;
	}
	// Nothing to attack, so look for monsters we haven't reviewed for a while.
	//log(LOG_WARN, 'attack ' + this.runtime.attack + ' stat_req ' + stat_req + ' health ' + req_health);
	if ((!this.runtime.defend || LevelUp.runtime.energy < this.runtime.energy)
			&& (!this.runtime.attack || stat_req || req_health)) { // stat_req is last calculated in loop above, so ok
		for (mid in this.data) {
			monster = this.data[mid];
			if (!monster.ignore) {
				uid = mid.replace(/_.+/,'');
				type = this.types[monster.type];
				if (monster.state === 'reward' && monster.ac) {
					this.check(mid, 'Collecting Reward from ', 'casuser','&action=collectReward');
				} else if (monster.remove && this.option.remove && parseFloat(uid) !== userID
						&& monster.page !== 'festival') {
					//log(LOG_WARN, 'remove ' + mid + ' userid ' + userID + ' uid ' + uid + ' now ' + (uid === userID) + ' new ' + (parseFloat(uid) === userID));
					this.check(mid, 'Removing ', 'remove_list','');
				} else if (monster.last < Date.now() - this.option.check_interval * (monster.remove ? 5 : 1)) {
					this.check(mid, 'Reviewing ', 'casuser','');
				}
				if (this.runtime.message) {
					return;
				}
			}
		}
	}
	Dashboard.status(this, messages.length ? messages.join('<br>') : 'Nothing to do.');
	if(!Queue.option.pause){
		if(LevelUp.runtime.running){
			this.runtime.limit = 100;
		} else if (!this.runtime.attack){
			this.runtime.limit = (limit > 30)? 1: (limit + 1|0);
		}
	} else {
		this.runtime.limit = 0;
	}
	this._notify('data');// Temporary fix for Dashboard updating
};

Monster.work = function(state) {
	var i, j, target_info = [], battle_list, list = [], mid, uid, type, btn = null, b, mode = this.runtime.mode, stat = this.runtime.stat, monster, title;
	if (!this.runtime.check && !mode) {
		return QUEUE_NO_ACTION;
	}
	if (!state) {
		return QUEUE_CONTINUE;
	}
	if (this.runtime.check) {
		log(LOG_WARN, this.runtime.message);
		Page.to(this.runtime.page, this.runtime.check);
		this.runtime.check = this.runtime.limit = this.runtime.message = this.runtime.dead = false;
		return QUEUE_RELEASE;
	}
	if (mode === 'defend' && LevelUp.get('runtime.quest')) {
		return QUEUE_NO_ACTION;
	}	
	uid = this.runtime[mode].regex(/^(\d+)/);
	monster = this.data[this.runtime[mode]];
	type = this.types[monster.type];
//	if (this.runtime[stat] > LevelUp.runtime[stat] || (LevelUp.runtime.basehit && this.runtime[stat] !== LevelUp.runtime.basehit * this.runtime.multiplier[mode])) {
//		log(LOG_WARN, 'Check for ' + stat + ' burn to catch up ' + this.runtime[stat] + ' burn ' + LevelUp.runtime[stat]);
//		this._remind(0, 'levelup');
//		return QUEUE_RELEASE;
//	}
	if (!Generals.to(Generals.runtime.zin || LevelUp.runtime.general || (this.option['best_'+mode] 
			? (type.raid
				? ((this.option.raid.search('Invade') === -1) ? 'raid-duel' : 'raid-invade')
				: 'monster_' + mode)
			: this.option['general_'+mode]))) {
		return QUEUE_CONTINUE;
	}
	if (type.raid) { // Raid has different buttons
		btn = $(Monster.raid_buttons[this.option.raid]);
	} else {
		//Primary method of finding button.
		log(LOG_WARN, 'Try to ' + mode + ' ' + monster.name + '\'s ' + type.name + ' for ' + this.runtime[stat] + ' ' + stat);
		if (!$(this.runtime.button[mode].query).length || this.runtime.button[mode].pick >= $(this.runtime.button[mode].query).length) {
//			log(LOG_WARN, 'Unable to find '  + mode + ' button for ' + monster.name + '\'s ' + type.name + ' (' + this.runtime.button[mode].query + ')');
		} else {
//			log(LOG_WARN, ' query ' + $(this.runtime.button[mode].query).length + ' ' + this.runtime.button[mode].pick);
			btn = $(this.runtime.button[mode].query).eq(this.runtime.button[mode].pick);
			this.runtime.used[stat] = this.runtime[stat];
		}
		if (!btn || !btn.length){
			monster.button_fail = (monster.button_fail || 0) + 1;
			if (monster.button_fail > 10){
				log(LOG_LOG, 'Ignoring Monster ' + monster.name + '\'s ' + type.name + ': Unable to locate ' + (this.runtime.button[mode].pick || 'unknown') + ' ' + mode + ' button ' + monster.button_fail + ' times!');
				monster.ignore = true;
				monster.button_fail = 0;
			}
		}
	}
	if (!btn || !btn.length 
	 || ['keep_monster_active', 'monster_battle_monster', 'festival_battle_monster'].indexOf(Page.temp.page) < 0
	 || (!$('div[style*="dragon_title_owner"] img[linked][uid="'+uid+'"]').length
		&& !$('div[style*="nm_top"] img[linked][uid="'+uid+'"]').length
		&& !$('img[linked][size="square"][uid="'+uid+'"]').length
		&& !$('img[width="52"][height="52"][src*="/'+uid+'/"]').length)) {
		//log(LOG_WARN, 'Reloading page. Button = ' + btn.attr('name'));
		//log(LOG_WARN, 'Reloading page. Page.temp.page = '+ Page.temp.page);
		//log(LOG_WARN, 'Reloading page. Monster Owner UID is ' + $('div[style*="dragon_title_owner"] img[linked]').attr('uid') + ' Expecting UID : ' + uid);
		this.check(this.runtime[mode],'','casuser','');
		Page.to(this.runtime.page,this.runtime.check);
		this.runtime.check = null;
		return QUEUE_CONTINUE; // Reload if we can't find the button or we're on the wrong page
	}
	if (type.raid) {
		battle_list = Battle.get('user');
		if (this.option.force1) { // Grab a list of valid targets from the Battle Worker to substitute into the Raid buttons for +1 raid attacks.
			for (i in battle_list) {
				list.push(i);
			}
			$('input[name*="target_id"]').val((list[Math.floor(Math.random() * (list.length))] || 0)); // Changing the ID for the button we're gonna push.
		}
		target_info = $('div[id*="raid_atk_lst0"] div div').text().regex(/Lvl\s*(\d+).*Army: (\d+)/);
		if ((this.option.armyratio !== 'Any' && ((target_info[1]/Player.get('army')) > this.option.armyratio) && this.option.raid.indexOf('Invade') >= 0) || (this.option.levelratio !== 'Any' && ((target_info[0]/Player.get('level')) > this.option.levelratio) && this.option.raid.indexOf('Invade') === -1)){ // Check our target (first player in Raid list) against our criteria - always get this target even with +1
			log(LOG_LOG, 'No valid Raid target!');
			Page.to('battle_raid', ''); // Force a page reload to change the targets
			return QUEUE_CONTINUE;
		}
	}
	Page.click(btn);
	return QUEUE_RELEASE;
};

Monster.check = function(mid, message, prefix, suffix) {
	var uid, type, monster, mpool, mmid;
	monster = this.data[mid];
	this.runtime.mid = mid;
	uid = mid.replace(/_.+/,'');
	type = this.types[monster.type];
	if (message) {
		this.runtime.message = message + (monster.name ? (monster.name === 'You' ? 'your' : monster.name.html_escape() + '\'s') : '') + ' ' + type.name;
		Dashboard.status(this, this.runtime.message);
	}
	this.runtime.page = type.raid ? 'battle_raid' 
			: monster.page === 'festival' ? 'festival_battle_monster' 
			: 'monster_battle_monster';
	if (monster.page === 'festival') {
		mpool = type.festival_mpool || type.mpool;
		if (type.festival) {
			mmid = '&mid=' + type.festival;
			if (prefix.indexOf('remove_list') >= 0) {
				mmid += '&remove_monsterKey=' + type.festival;
			}
		}
	} else {
		mpool = type.mpool;
	}
	this.runtime.check = prefix + '=' + uid
			+ ((monster.phase && this.option.assist
				&& !LevelUp.runtime.levelup
				&& (monster.state === 'engage' || monster.state === 'assist'))
					? '&action=doObjective' : '')
			+ (mpool ? '&mpool=' + mpool : '')
			+ (mmid ? mmid : '')
			+ suffix;
};


Monster.order = null;
Monster.dashboard = function(sort, rev) {
	var i, j, o, type, monster, args, list = [], output = [], sorttype = [null, 'name', 'health', 'defense', null, 'timer', 'eta'], state = {
		engage:0,
		assist:1,
		reward:2,
		complete:3
	}, blank, image_url, color, mid, uid, title, v, vv, tt, cc;
	if (typeof sort === 'undefined') {
		this.order = [];
		for (mid in this.data) {
			this.order.push(mid);
		}
	}
	if (typeof sort === 'undefined') {
		sort = (this.runtime.sort || 1);
	}
	if (typeof rev === 'undefined'){
		rev = (this.runtime.rev || false);
	}
	this.runtime.sort = sort;
	this.runtime.rev = rev;
	this.order.sort(function(a,b) {
		var aa, bb, data = Monster.data;
		if (state[data[a].state] > state[data[b].state]) {
			return 1;
		}
		if (state[data[a].state] < state[data[b].state]) {
			return -1;
		}
		if (typeof sorttype[sort] === 'string') {
			aa = data[a][sorttype[sort]];
			bb = data[b][sorttype[sort]];
		} else if (sort === 4) { // damage
//			aa = data[a].damage ? data[a].damage[userID] : 0;
//			bb = data[b].damage ? data[b].damage[userID] : 0;
			if (data[a].damage && data[a].damage.user) {
				aa = sum(data[a].damage.user) / sum(data[a].damage);
			}
			if (data[b].damage && data[b].damage.user) {
				bb = sum(data[b].damage.user) / sum(data[b].damage);
			}
		}
		if (typeof aa === 'undefined') {
			return 1;
		} else if (typeof bb === 'undefined') {
			return -1;
		}
		if (typeof aa === 'string' || typeof bb === 'string') {
			return (rev ? (''+bb).localeCompare(aa) : (''+aa).localeCompare(bb));
		}
		return (rev ? (aa || 0) - (bb || 0) : (bb || 0) - (aa || 0));
	});
	if (this.option.stop === 'Continuous'){
		th(output, '<center>Continuous=' + this.runtime.limit + '</center>', 'title="Stop Multiplier"');
	} else {
		th(output, '');
	}
	th(output, 'User');
	th(output, 'Health', 'title="(estimated)"');
	th(output, 'Defense', 'title="Composite of Fortification or Dispel (0%...100%)."');
//	th(output, 'Shield');
	th(output, 'Activity');
	th(output, 'Time Left');
	th(output, 'Kill In (ETD)', 'title="(estimated)"');
//	th(output, '');
//	th(output, '');
	list.push('<table cellspacing="0" style="width:100%"><thead><tr>' + output.join('') + '</tr></thead><tbody>');
	for (o=0; o<this.order.length; o++) {
		mid = this.order[o];
		uid = mid.replace(/_.+/,'');
		monster = this.data[mid];
		festival = monster.page === 'festival';
		type = this.types[monster.type];
		if (!type) {
			continue;
		}
		output = [];
		blank = !((monster.state === 'engage' || monster.state === 'assist') && monster.total);
		// http://apps.facebook.com/castle_age/battle_monster.php?user=00000&mpool=3
		// http://apps.facebook.com/castle_age/battle_monster.php?twt2=earth_1&user=00000&action=doObjective&mpool=3&lka=00000&ref=nf
		// http://apps.facebook.com/castle_age/raid.php?user=00000
		// http://apps.facebook.com/castle_age/raid.php?twt2=deathrune_adv&user=00000&action=doObjective&lka=00000&ref=nf
		args = '?casuser=' + uid + (type.mpool ? '&mpool=' + (monster.page === 'festival' && type.festival_mpool? type.festival_mpool  : type.mpool) : '') + (monster.page === 'festival' ? ('&mid=' + type.festival) : '');
		if (this.option.assist_links && (monster.state === 'engage' || monster.state === 'assist') && type.siege !== false ) {
			args += '&action=doObjective';
		}
		// link icon
		tt = type.name;
		if (isNumber(v = monster.ach || type.achievement)) {
		    tt += ' | Achievement: ';
			if (isNumber(monster.achpa)) {
				tt += monster.achpa + ' PA' + plural(monster.achpa) + ' (~' + v.SI() + ')';
			} else {
				tt += v.addCommas();
			}
		}
		if (isNumber(v = monster.max)) {
		    tt += ' | Max: ';
			if (isNumber(monster.maxpa)) {
				tt += monster.maxpa + ' PA' + plural(monster.maxpa) + ' (~' + v.SI() + ')';
			} else {
				tt += v.addCommas();
			}
		}
		td(output, Page.makeLink(type.raid ? 'raid.php' : monster.page === 'festival' ? 'festival_battle_monster.php' : 'battle_monster.php', args, '<img src="' + imagepath + type.list + '" style="width:72px;height:20px; position: relative; left: -8px; opacity:.7;" alt="' + type.name + '"><strong class="overlay"' + (monster.page === 'festival' ? ' style="color:#ffff00;"' : '') + '>' + monster.state + '</strong>'), 'title="' + tt + '"');
		image_url = imagepath + type.list;
		//log(LOG_WARN, image_url);

		// user
		if (isString(monster.name)) {
			vv = monster.name.html_escape();
		} else {
			vv = '{id:' + uid + '}';
		}
		th(output, '<a class="golem-monster-ignore" name="'+mid+'" title="Toggle Active/Inactive"'+(monster.ignore ? ' style="text-decoration: line-through;"' : '')+'>' + vv + '</a>');

		// health
		td(output,
			blank
				? ''
				: monster.health === 100
					? '100%'
					: monster.health.round(1) + '%',
			blank
				? ''
				: 'title="' + (monster.total - sum(monster.damage)).addCommas() + '"');

		// defense
		vv = tt = cc = '';
		if (!blank && isNumber(monster.defense)) {
			vv = monster.defense.round(1) + '%';
			if (isNumber(monster.strength)) {
				tt = 'Max: ' + monster.strength.round(1) + '% | ';
			}
			tt += 'Attack Bonus: ' + (monster.defense - 50).round(1) + '%';
			if (this.option.defend_active && this.option.defend > monster.defense) {
				cc = 'green';
			} else if (this.option.min_to_attack >= monster.defense) {
				cc = 'blue';
			}
		}
		if (cc !== '') {
			vv = '<span style="color:' + cc + ';">' + vv + '</span>';
		}
		if (tt !== '') {
			tt = 'title="' + tt + '"';
		}
		td(output, vv, tt);

		var activity = sum(monster.damage && monster.damage.user) + sum(monster.defend);
		if (monster.ach > 0 || monster.max > 0) {
			if (monster.max > 0 && activity >= monster.max) {
				color = 'red';
			} else if (monster.ach > 0 && activity >= monster.ach) {
				color = 'orange';
			} else {
				color = 'green';
			}
		} else {
			color = 'black';
		}

		// activity
		td(output,
			(blank || monster.state !== 'engage' || (typeof monster.damage === undefined || typeof monster.damage.user === 'undefined'))
				? ''
				: '<span style="color: ' + color + ';">' + activity.addCommas() + '</span>',
			blank
				? ''
				: 'title="' + ( sum(monster.damage && monster.damage.user) / monster.total * 100).round(2) + '% from ' + (sum(monster.stamina)/5 || 'an unknown number of') + ' PAs"');

		// time left
		td(output,
			blank
				? ''
				: monster.timer
					? Page.addTimer('monster_'+mid+'_finish', monster.finish)
					: '?');

		// etd
		td(output,
			blank
				? ''
				: Page.addTimer('monster_'+mid+'_eta', monster.health === 100 ? monster.finish : monster.eta));
		th(output, '<a class="golem-monster-delete" name="'+mid+'" title="Delete this Monster from the dashboard">[x]</a>');
		th(output, '<a class="golem-monster-override" name="'+mid+'" title="Override Lost Cause setting for this monster">'+(monster.override ? '[O]' : '[]')+'</a>');
                tr(list, output.join(''));
	}
	list.push('</tbody></table>');
	$('#golem-dashboard-Monster').html(list.join(''));
	$('a.golem-monster-delete').live('click', function(event){
		Monster.set(['data',$(this).attr('name')]);
		return false;
	});
	$('a.golem-monster-ignore').live('click', function(event){
		var x = $(this).attr('name');
		Monster.set(['data',x,'ignore'], !Monster.get(['data',x,'ignore'], false));
		return false;
	});
	$('a.golem-monster-override').live('click', function(event){
		var x = $(this).attr('name');
		Monster.set(['data',x,'override'], !Monster.get(['data',x,'override'], false));
		return false;
	});
	if (typeof sort !== 'undefined') {
		$('#golem-dashboard-Monster thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	}
};

Monster.conditions = function (type, conditions) {
	if (!conditions || conditions.toLowerCase().indexOf(':' + type) < 0) {
		return false;
	}
	var value = conditions.substring(conditions.indexOf(':' + type) + type.length + 1).replace(new RegExp(":.+"), ''), first, second;
	if (/k$/i.test(value) || /m$/i.test(value)) {
		first = /\d+k/i.test(value);
		second = /\d+m/i.test(value);
		value = parseFloat(value, 10) * 1000 * (first + second * 1000);
	}
	return parseInt(value, 10);
};
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime
*/
/********** Worker.News **********
* Aggregate the news feed
*/
var News = new Worker('News');
News.data = News.temp = null;

News.settings = {
	taint:true
};

News.defaults['castle_age'] = {
	pages:'index'
};

News.runtime = {
	last:0
};

News.page = function(page, change) {
	if (change) {
		var xp = 0, bp = 0, wp = 0, win = 0, lose = 0, deaths = 0, cash = 0, i, j, list = [], user = {}, sort = [], last_time = this.get(['runtime','last'], 0), killed = false;
		this.set(['runtime','last'], Date.now());
		$('#'+APPID_+'battleUpdateBox .alertsContainer .alert_content').each(function(i,el) {
			var uid, txt = $(el).text().replace(/,/g, ''), title = $(el).prev().text(), days = title.regex(/(\d+) days/i), hours = title.regex(/(\d+) hours/i), minutes = title.regex(/(\d+) minutes/i), seconds = title.regex(/(\d+) seconds/i), time, my_xp = 0, my_bp = 0, my_wp = 0, my_cash = 0, result;
			time = Date.now() - ((((((((days || 0) * 24) + (hours || 0)) * 60) + (minutes || 59)) * 60) + (seconds || 59)) * 1000);
			if (txt.regex(/You were killed/i)) {
				killed = true;
				deaths++;
			} else {
				uid = $('a:eq(0)', el).attr('href').regex(/user=(\d+)/i);
				user[uid] = user[uid] || {name:$('a:eq(0)', el).text(), win:0, lose:0, deaths:0};
				result = null;
				if (txt.regex(/Victory!/i)) {
					win++;
					user[uid].lose++;
					my_xp = txt.regex(/(\d+) experience/i);
					my_bp = txt.regex(/(\d+) Battle Points!/i);
					my_wp = txt.regex(/(\d+) War Points!/i);
					my_cash = txt.regex(/\$(\d+)/i);
					result = 'win';
				} else {
					lose++;
					user[uid].win++;
					my_xp = 0 - txt.regex(/(\d+) experience/i);
					my_bp = 0 - txt.regex(/(\d+) Battle Points!/i);
					my_wp = 0 - txt.regex(/(\d+) War Points!/i);
					my_cash = 0 - txt.regex(/\$(\d+)/i);
					result = 'loss';
				}
				if (killed) {
					user[uid].deaths++;
					killed = false;
				}
				if (time > last_time) {
//					log('Add to History (+battle): exp = '+my_xp+', bp = '+my_bp+', wp = '+my_wp+', income = '+my_cash);
					time = Math.floor(time / 3600000);
					History.add([time, 'exp+battle'], my_xp);
					History.add([time, 'bp+battle'], my_bp);
					History.add([time, 'wp+battle'], my_wp);
					History.add([time, 'income+battle'], my_cash);
					switch (result) {
						case 'win':
							History.add([time, 'battle+win'], 1);
							break;
						case 'loss':
							History.add([time, 'battle+loss'], -1);
							break;
					}
				}
				xp += my_xp;
				bp += my_bp;
				wp += my_wp;
				cash += my_cash;
				
			}
		});
		if (win || lose) {
			list.push('You were challenged <strong>' + (win + lose) + '</strong> times, winning <strong>' + win + '</strong> and losing <strong>' + lose + '</strong>.');
			list.push('You ' + (xp >= 0 ? 'gained <span class="positive">' : 'lost <span class="negative">') + Math.abs(xp).addCommas() + '</span> experience points.');
			list.push('You ' + (cash >= 0 ? 'gained <span class="positive">' : 'lost <span class="negative">') + '<b class="gold">$' + Math.abs(cash).addCommas() + '</b></span>.');
			list.push('You ' + (bp >= 0 ? 'gained <span class="positive">' : 'lost <span class="negative">') + Math.abs(bp).addCommas() + '</span> Battle Points.');
			list.push('You ' + (wp >= 0 ? 'gained <span class="positive">' : 'lost <span class="negative">') + Math.abs(wp).addCommas() + '</span> War Points.');
			if (deaths) {
				list.push('You died ' + (deaths>1 ? deaths+' times' : 'once') + '!');
			}
			list.push('');
			for (i in user) {
				sort.push(i);
			}
			sort.sort(function(a,b){return (user[b].win + (user[b].lose / 100)) - (user[a].win + (user[a].lose / 100));});
			for (j=0; j<sort.length; j++) {
				i = sort[j];
				list.push(Page.makeLink('keep.php', {casuser:i}, user[i].name) + ' <a target="_blank" href="http://www.facebook.com/profile.php?id=' + i + '"><img style="margin:0 0 -4px 0;border:0;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGFBMVEVFYp97j7pgeKzs7/VthbX///87WZn////b2o/BAAAACHRSTlP/////////AN6DvVkAAABDSURBVHjalM9BCgAgCERRzUbvf+OsNmoR9BeCbyFIViJjDbGDpgI0ARL4nmGuL8AqgPgJka8bAajvAB90g+Pb0hBgACBrBdAiqJK7AAAAAElFTkSuQmCC"></a> ' + (user[i].win ? 'beat you <span class="negative">' + user[i].win + '</span> time' + plural(user[i].win) : '') + (user[i].lose ? (user[i].win ? (user[i].deaths ? ', ' : ' and ') : '') + 'was beaten <span class="positive">' + user[i].lose + '</span> time' + plural(user[i].lose) : '') + (user[i].deaths ? (user[i].win || user[i].lose ? ' and ' : '') + 'killed you <span class="negative">' + user[i].deaths + '</span> time' + plural(user[i].deaths) : '') + '.');
			}
			$('#'+APPID_+'battleUpdateBox .alertsContainer').prepend('<div style="padding: 0pt 0pt 10px;"><div class="alert_title">Summary:</div><div class="alert_content">' + list.join('<br>') + '</div></div>');
		}
	}
	return true;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Global:true, History, Page:true, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Page for Castle Age **********
* Add defaults to Page for "Castle Age"
* This is the only safe place to change Page.setup, and is deliberately left open for it!
*/

Page.defaults.castle_age = {
	setup:function() {
		this.pageCheck = ['#'+APPID_+'globalContainer', '#'+APPID_+'globalcss', '#'+APPID_+'main_bntp', '#'+APPID_+'main_sts_container', '#'+APPID_+'app_body_container', '#'+APPID_+'nvbar', '#'+APPID_+'current_pg_url', '#'+APPID_+'current_pg_info'];
		// '#app_content_'+APPID, 
		this.pageNames = {
//			facebook:			- not real, but used in worker.pages for worker.page('facebook') on fb popup dialogs
			index:				{url:'index.php', selector:'#'+APPID_+'indexNewFeaturesBox'},
			quests_quest:			{url:'quests.php', image:'tab_quest_on.gif'}, // If we ever get this then it means a new land...
			quests_quest1:			{url:'quests.php?land=1', image:'land_fire_sel.gif'},
			quests_quest2:			{url:'quests.php?land=2', image:'land_earth_sel.gif'},
			quests_quest3:			{url:'quests.php?land=3', image:'land_mist_sel.gif'},
			quests_quest4:			{url:'quests.php?land=4', image:'land_water_sel.gif'},
			quests_quest5:			{url:'quests.php?land=5', image:'land_demon_realm_sel.gif'},
			quests_quest6:			{url:'quests.php?land=6', image:'land_undead_realm_sel.gif'},
			quests_quest7:			{url:'quests.php?land=7', image:'tab_underworld_big.gif'},
			quests_quest8:			{url:'quests.php?land=8', image:'tab_heaven_big2.gif'},
			quests_quest9:			{url:'quests.php?land=9', image:'tab_ivory_big.gif'},
			quests_quest10:			{url:'quests.php?land=10', image:'tab_earth2_big.gif'},
			quests_quest11:			{url:'quests.php?land=11', image:'tab_water2_big.gif'},
			quests_quest12:			{url:'quests.php?land=12', image:'tab_mist2_big.gif'},
			quests_quest13:			{url:'quests.php?land=13', image:'tab_mist3_big.gif'},
			quests_quest14:			{url:'quests.php?land=14', image:'tab_fire2_big.gif'},
			quests_quest15:			{url:'quests.php?land=15', image:'tab_pangaea_big.gif'},
			quests_demiquests:		{url:'symbolquests.php', image:'demi_quest_on.gif'},
			quests_atlantis:		{url:'monster_quests.php', image:'tab_atlantis_on.gif'},
			battle_battle:			{url:'battle.php', image:'battle_on.gif'},
			battle_training:		{url:'battle_train.php', image:'training_grounds_on_new.gif'},
			battle_rank:			{url:'battlerank.php', image:'tab_battle_rank_on.gif'},
			battle_war:			{url:'war_rank.php', image:'tab_war_on.gif'},
			battle_raid:			{url:'raid.php', image:'tab_raid_on.gif'},
			battle_arena:			{url:'arena.php', image:'arena3_featurebuttonv2.jpg'},

			battle_arena_battle:		{url:'arena_battle.php', selector:'#'+APPID_+'arena_battle_banner_section', skip:true},
			festival_guild:			{url:'festival_battle_home.php', selector:'div[style*="festival_arena_home_background.jpg"]'},
			festival_guild_battle:		{url:'festival_guild_battle.php', selector:'#'+APPID_+'guild_battle_section', skip:true},
			battle_guild:			{url:'guild_current_battles.php', selector:'div[style*="guild_current_battles_title.gif"]'},
			battle_guild_battle:		{url:'guild_battle.php', selector:'#'+APPID_+'guild_battle_banner_section', skip:true},
			battle_war_council:		{url:'war_council.php', image:'war_select_banner.jpg'},
			monster_monster_list:		{url:'player_monster_list.php', image:'monster_button_yourmonster_on.jpg'},
			monster_remove_list:		{url:'player_monster_list.php', image:'mp_current_monsters.gif'},
			monster_battle_monster:		{url:'battle_monster.php', selector:'div[style*="monster_header"],div[style*="boss_header"]'},
			keep_monster_active:		{url:'raid.php', image:'dragon_view_more.gif'},
			festival_monster_list:		{url:'festival_tower.php?tab=monster',  selector:'div[style*="festival_monster_list_middle.jpg"]'},
			festival_battle_monster:	{url:'festival_battle_monster.php', image:'festival_monstertag_list.gif'},
			monster_dead:			{url:'battle_monster.php', selector:'div[style*="no_monster_back.jpg"]'},
			monster_summon:			{url:'monster_summon_list.php', image:'tab_summon_monster_on.gif'},
			monster_class:			{url:'view_class_progress.php', selector:'#'+APPID_+'choose_class_header'},
			heroes_heroes:			{url:'mercenary.php', image:'tab_heroes_on.gif'},
			heroes_generals:		{url:'generals.php', image:'tab_generals_on.gif'},
			town_soldiers:			{url:'soldiers.php', image:'tab_soldiers_on.gif'},
			town_blacksmith:		{url:'item.php', image:'tab_black_smith_on.gif'},
			town_magic:			{url:'magic.php', image:'tab_magic_on.gif'},
			town_land:			{url:'land.php', image:'tab_land_on.gif'},
			oracle_oracle:			{url:'oracle.php', image:'oracle_on.gif'},
			oracle_demipower:		{url:'symbols.php', image:'demi_on.gif'},
			oracle_treasurealpha:		{url:'treasure_chest.php', image:'tab_treasure_alpha_on.gif'},
//			oracle_treasurevanguard:	{url:'treasure_chest.php?treasure_set=alpha', image:'tab_treasure_vanguard_on.gif'},
//			oracle_treasureonslaught:	{url:'treasure_chest.php?treasure_set=onslaught', image:'tab_treasure_onslaught_on.gif'},
			keep_stats:			{url:'keep.php', image:'tab_stats_on.gif'},
			keep_eliteguard:		{url:'party.php', image:'tab_elite_guard_on.gif'},
			keep_achievements:		{url:'achievements.php', image:'tab_achievements_on.gif'},
			keep_alchemy:			{url:'alchemy.php', image:'tab_alchemy_on.gif'},
			army_invite:			{url:'army.php', image:'invite_on.gif'},
			army_gifts:			{url:'gift.php', selector:'#'+APPID_+'giftContainer'},
			army_viewarmy:			{url:'army_member.php', image:'view_army_on.gif'},
			army_sentinvites:		{url:'army_reqs.php', image:'sent_invites_on.gif'},
			army_newsfeed:			{url:'army_news_feed.php', selector:'#'+APPID_+'army_feed_header'},
			gift_accept:			{url:'gift_accept.php', selector:'div[style*="gift_background.jpg"]'}
//			apprentice_collect:		{url:'apprentice.php?collect=true', image:'ma_view_progress2.gif'}
		}
	}
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources, Window,
	Bank, Battle, Generals, LevelUp, Player:true, Title,
	APP, APPID, log, debug, script_started, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	makeImage
*/
/********** Worker.Player **********
* Gets all current stats we can see
*/
var Player = new Worker('Player');
Player.option = Player.runtime = Player.temp = null;

Player.settings = {
	keep:true,
	taint:true
};

Player.defaults['castle_age'] = {
	pages:'*'
};

Player.setup = function() {
	Resources.add('Energy');
	Resources.add('Stamina');
	Resources.add('Gold');
};

Player.init = function() {
	this._trigger('#'+APPID_+'gold_current_value', 'cash');
	this._trigger('#'+APPID_+'energy_current_value', 'energy');
	this._trigger('#'+APPID_+'stamina_current_value', 'stamina');
	this._trigger('#'+APPID_+'health_current_value', 'health');
	this._trigger('#'+APPID_+'gold_time_value', 'cash_timer');
	Title.alias('energy', 'Player:data.energy');
	Title.alias('maxenergy', 'Player:data.maxenergy');
	Title.alias('health', 'Player:data.health');
	Title.alias('maxhealth', 'Player:data.maxhealth');
	Title.alias('stamina', 'Player:data.stamina');
	Title.alias('maxstamina', 'Player:data.maxstamina');
	Title.alias('myname', 'Player:data.myname');
	Title.alias('level', 'Player:data.level');
	Title.alias('exp_needed', 'Player:exp_needed');
	Title.alias('bsi', 'Player:bsi');
	Title.alias('lsi', 'Player:lsi');
	Title.alias('csi', 'Player:csi');
	// function gold_increase_ticker(ticks_left, stat_current, tick_time, increase_value, first_call)
	this.set('cash_time', script_started + ($('*').html().regex(/gold_increase_ticker\((\d+),/) * 1000));
};

Player.page = function(page, change) {
	var i, data = this.data, keep, stats, tmp, $tmp, artifacts = {};
	if (change) {
		if (page === 'keep_stats' && ($tmp = $('.keep_healer_section').first()).length) {
			tmp = '<table style="width:100%;"><thead><tr><td colspan="2" style="font-weight:bold;text-align:center;">Player Stats</td></tr></thead><tbody>' +
			'<tr title="Battle Strength Index: Attack + defense / level. This is a gauge of your strength in PvP relative to others of the same level. Often seems to be regarded as the length of your CA [censored] given the importance many people regard it with."><td>BSI:</td><td>' + this.get('bsi') + '</td></tr>' +
			'<tr title="Leveling Speed Index: 2X Stamina + energy / level. This is a gauge of how quickly you will level relative to others of the same level."><td>LSI:</td><td>' + this.get('lsi') + '</td></tr>' +
			'<tr title="Guild Battle Strength Index: Attack + defense + health - 100 / level. Health is no longer a waste with Guild battles."><td>GBSI:</td><td>' + this.get('gbsi') + '</td></tr>' +
			'<tr title="Skill Point Aquistion Efficiency Quotent: BSI + LSI + (Health -100) / level. This a overall gauge of your efficiency in playing Castle Age."><td>SPAEQ:</td><td>' + this.get('spaeq') + '</td></tr>' +
			'<tr title="Monster Hunting Build Effective Quotent: Attack + 2X Stamina / level. This is a gauge of how effective a monter hunter you are relative to others of the same level."><td>MHBEQ:</td><td>' + this.get('mhbeq') + '</td></tr>' +
			'<tr title="Attack + 0.7 * Defense"><td>Attack:</td><td>' + (data.attack + (0.7 * data.defense)).round(2) + '</td></tr>' +
			'<tr title="Defense + 0.7 * Attack"><td>Defense:</td><td>' + (data.defense + (0.7 * data.attack)).round(2) + '</td></tr>' +
			'<tr title="A label given to your build type."><td>Build:</td><td>' + this.get('build') + '</td></tr>' +
			'<tr title="A rough label given to the best way for you to level up."><td>Role:</td><td>' + this.get('role') + '</td></tr>' +
			'</tbody></table>';
			$tmp.append('<div style="margin:-238px 18px 2px 21px;height:213px;border:1px solid #8b5928;padding:10px;color:black;background-color:#b2804f;font-size:10px;">' + tmp + '</div>');
		}
	} else {
		if ($('#'+APPID_+'energy_current_value').length) {
			this.set('energy', $('#'+APPID_+'energy_current_value').text().regex(/(\d+)/) || 0);
			Resources.add('Energy', data.energy, true);
		}
		if ($('#'+APPID_+'stamina_current_value').length) {
			this.set('stamina', $('#'+APPID_+'stamina_current_value').text().regex(/(\d+)/) || 0);
			Resources.add('Stamina', data.stamina, true);
		}
		if ($('#'+APPID_+'health_current_value').length) {
			this.set('health', $('#'+APPID_+'health_current_value').text().regex(/(\d+)/) || 0);
		}
		if ($('#'+APPID_+'st_2_5 strong:not([title])').length) {
			tmp = $('#'+APPID_+'st_2_5').text().regex(/(\d+)\s*\/\s*(\d+)/);
			if (tmp) {
				this.set('exp', tmp[0]);
				this.set('maxexp', tmp[1]);
			}
		}
		this.set('cash', $('#'+APPID_+'gold_current_value').text().replace(/\D/g, '').regex(/(\d+)/));
		this.set('level', $('#'+APPID_+'st_5').text().regex(/Level: (\d+)!/i));
		this.set('armymax', $('a[href*="army.php"]', '#'+APPID_+'main_bntp').text().regex(/(\d+)/));
		this.set('army', Math.min(data.armymax, 501)); // XXX Need to check what max army is!
		this.set('upgrade', $('a[href*="keep.php"]', '#'+APPID_+'main_bntp').text().regex(/(\d+)/) || 0);
		this.set('general', $('div.general_name_div3').first().text().trim());
		this.set('imagepath', $('#'+APPID_+'globalContainer img:eq(0)').attr('src').pathpart());
		if (page === 'keep_stats') {
			keep = $('.keep_attribute_section').first(); // Only when it's our own keep and not someone elses
			if (keep.length) {
				this.set('myname', $('div.keep_stat_title_inc > span', keep).text().regex(/"(.*)"/));
				tmp = $('td.statsTMainback img[src*="rank_medals"]');
				if (tmp.length) {
					this.set('battle',tmp.attr('src').filepart().regex(/(\d+)/));
				}
				tmp = $('td.statsTMainback img[src*="rank_medals_war"]');
				if (tmp.length) {
					this.set('war', tmp.attr('src').filepart().regex(/(\d+)/));
				}
				stats = $('div.attribute_stat_container', keep);
				this.set('maxenergy', $(stats).eq(0).text().regex(/(\d+)/));
				this.set('maxstamina', $(stats).eq(1).text().regex(/(\d+)/));
				this.set('attack', $(stats).eq(2).text().regex(/(\d+)/));
				this.set('defense', $(stats).eq(3).text().regex(/(\d+)/));
				this.set('maxhealth', $(stats).eq(4).text().regex(/(\d+)/));
				this.set('bank', parseInt($('td.statsTMainback b.money').text().replace(/\D/g,''), 10));
				stats = $('.statsTB table table:contains("Total Income")').text().replace(/[^0-9$]/g,'').regex(/(\d+)\$(\d+)\$(\d+)/);
				this.set('maxincome', stats[0]);
				this.set('upkeep', stats[1]);
				this.set('income', stats[2]);
				Resources.add('Gold', data.bank + data.cash, true);

				// remember artifacts - useful for quest requirements
				$tmp = $('.statsTTitle:contains("ARTIFACTS") + div div div a img');
				if ($tmp.length) {
					$tmp.each(function(i,el){
						if ((tmp = ($(el).attr('title') || $(el).attr('alt') || '').trim())) {
							artifacts[tmp] = $(el).attr('src').filepart();
						}
					});
					this.set(['data','artifact'], artifacts);
				}
			}
		} else if (page === 'town_land') {
			$tmp = $('.layout div[style*="town_header_land."]');
			if ($tmp.length && ($tmp = $('div div:contains("Land Income:")', $tmp)).length) {
				var o = {};
				$('div', $tmp.last().parent()).each(function(a, el) {
					if (!o[a]) o[a] = {};
					o[a].label = ($(el).text() || '').trim();
				});
				$('div', $tmp.last().parent().next()).each(function(a, el) {
					if (!o[a]) o[a] = {};
					o[a].value = ($(el).text() || '').trim();
				});
				//log(LOG_WARN, 'Land.income: ' + JSON.shallow(o, 2));
				for (i in o) {
					if (o[i].label && o[i].value) {
						if (o[i].label.match(/Land Income:/i)) {
							if (isNumber(tmp = o[i].value.replace(/\D/g, '').regex(/(\d+)/))) {
								this.set('maxincome', tmp);
							}
						} else if (o[i].label.match(/Upkeep:/i)) {
							if (isNumber(tmp = o[i].value.replace(/\D/g, '').regex(/(\d+)/))) {
								this.set('upkeep', tmp);
							}
						} else if (o[i].label.match(/Income per Hour:/i)) {
							if (isNumber(tmp = o[i].value.replace(/\D/g, '').regex(/(\d+)/))) {
								this.set('income', tmp);
							}
						}
					}
				}
			}
		}
		$('span.result_body').each(function(i,el){
			var txt = $(el).text().replace(/,|\s+|\n/g, '');
			History.add('income', sum(txt.regex(/Gain.*\$(\d+).*Cost|stealsGold:\+\$(\d+)|Youreceived\$(\d+)|Yougained\$(\d+)/i)));
			if (txt.regex(/incomepaymentof\$(\d+)gold/i)){
				History.set('land', sum(txt.regex(/incomepaymentof\$(\d+)gold|backinthemine:Extra(\d+)Gold|Yousuccessfullysold.*for$(\d+)/i)));
			}
		});
		this.set('worth', this.get('cash', 0) + this.get('bank', 0));
		$('#'+APPID_+'gold_current_value').attr('title', 'Cash in Bank: $' + this.get('bank', 0).addCommas());
	}
	return true;
};

Player.update = function(event) {
	if (event.type === 'data' || event.type === 'init') {
		var i, j, types = ['stamina', 'energy', 'health'], list, step;
		for (j=0; j<types.length; j++) {
			list = [];
			step = Divisor(this.data['max'+types[j]]);
			for (i=0; i<=this.data['max'+types[j]]; i+=step) {
				list.push(i);
			}
			if (types[j] === 'stamina') {
				step = this.data['max' + types[j]] || 10;
				for (i in { 1:1, 5:1, 10:1, 20:1, 50:1 }) {
					if (step >= i) {
						list.push(parseInt(i));
					}
				}
			} else if (types[j] === 'energy') {
				step = this.data['max' + types[j]] || 15;
				for (i in { 10:1, 20:1, 40:1, 100:1 }) {
					if (step >= i) {
						list.push(parseInt(i));
					}
				}
			} else if (types[j] === 'health') {
				step = this.data['max' + types[j]] || 100;
				for (i in { 1:1, 9:1, 10:1, 11:1, 12:1, 13:1 }) {
					if (step >= i) {
						list.push(parseInt(i));
					}
				}
			}
			Config.set(types[j], list.sort(function(a,b){return a-b;}).unique());
		}
		History.set('bank', this.data.bank);
		History.set('exp', this.data.exp);
	} else if (event.type === 'trigger') {
		if (event.id === 'cash_timer') {
			this.set(['data', 'cash_time'], (Math.floor(Date.now() / 1000) + $('#'+APPID_+'gold_time_value').text().parseTimer()) * 1000);
		} else {
			this.set(['data', event.id], $(event.selector).text().replace(/\D/g, '').regex(/(\d+)/));
			switch (event.id) {
				case 'energy':	Resources.add('Energy', this.data[event.id], true);	break;
				case 'stamina':	Resources.add('Stamina', this.data[event.id], true);	break;
				case 'cash':	Resources.add('Gold', this.data[event.id], true);	break;
			}
		}
	}
	Dashboard.status(this);
};

Player.get = function(what, def) {
	var i, data = this.data;
	switch(what) {
		case 'cash_timer':		return (data.cash_time - Date.now()) / 1000;
		case 'energy_timer':	return $('#'+APPID_+'energy_time_value').text().parseTimer();
		case 'health_timer':	return $('#'+APPID_+'health_time_value').text().parseTimer();
		case 'stamina_timer':	return $('#'+APPID_+'stamina_time_value').text().parseTimer();
		case 'exp_needed':		return data.maxexp - data.exp;
		case 'bank':			return (data.bank - Bank.option.keep > 0) ? data.bank - Bank.option.keep : 0;
		case 'bsi':				return ((data.attack + data.defense) / data.level).round(2);
		case 'lsi':				return (((data.maxstamina * 2) + data.maxenergy) / data.level).round(2);
		case 'gbsi':			return ((data.attack + data.defense + data.maxhealth - 100) / data.level).round(2);
		case 'spaeq':			return ((data.attack + data.defense + (data.maxstamina * 2) + data.maxenergy + data.maxhealth - 100) / this.get('level')).round(2);
		case 'mhbeq':			return ((data.attack + (data.maxstamina * 2)) / data.level).round(2);
		case 'csi':				return ((data.attack + data.defense + (data.maxstamina * 2) + data.maxenergy + data.maxhealth - 100) / data.level).round(2);
		case 'build':			i = (data.attack / data.defense);
								return (i >= 10 ? 'Destroyer' : i >= 2 ? 'Aggressor' : i >= 1.1 ? 'Offensive' : i <= 0.9 ? 'Defensive' : i <= 0.5 ? 'Paladin' : i <= 0.1 ? 'Wall' : 'Balanced');
		case 'role':			i = (this.get('lsi') / this.get('bsi'));
								return (i >= 4 ? 'Leveller' : i >= 1.6 ? 'Hunter' : i >= 1.3 ? 'Hunter Hybrid' : i >= 0.75 ? 'Balanced Hybrid' : i >= 0.6 ? 'Strong Hybrid' : i >= 0.25 ? 'PvPer' : 'Pure PvPer');
		default: return this._get.apply(this, arguments);
	}
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime
*/
/********** Worker.Potions **********
* Automatically drinks potions
*/
var Potions = new Worker('Potions');
Potions.temp = null;

Potions.settings = {
	taint:true
};

Potions.defaults['castle_age'] = {
	pages:'*'
};

Potions.data = {
	Energy:0,
	Stamina:0
};

Potions.option = {
	Energy:35,
	Stamina:35
};

Potions.runtime = {
	type:null,
	amount:0
};

Potions.display = function(){
	var i, opts = [];
	for (i in this.option) {
		if (i.charAt(0) !== '_') {
			opts.push({
				id:i,
				label:'Maximum '+i+' Potions',
				select:{0:0,5:5,10:10,15:15,20:20,25:25,30:30,35:35,39:39,infinite:'&infin;'},
				help:'Will use them when you have to many, if you collect more than 40 they will be lost anyway'
			});
		}
	}
	return opts;
};

Potions.setup = function() {
	this.set(['option','energy']); // Remove old data
	this.set(['option','stamina']); // Remove old data
};

Potions.init = function() {
	$('a.golem-potion-drink').live('click', function(event) {
		if (/Do/.test($(this).text())) {
			Potions.set(['runtime','type'], null);
			Potions.set(['runtime','amount'], 0);
		} else {
			Potions.set(['runtime','type'], $(this).attr('name'));
			Potions.set(['runtime','amount'], 1);
		}
	});
	this._watch(Player, 'data.energy');
	this._watch(Player, 'data.maxenergy');
	this._watch(Player, 'data.stamina');
	this._watch(Player, 'data.maxstamina');
	this._watch(LevelUp, 'runtime.running');
};

Potions.page = function(page, change) {
	// No need to parse out Income potions as about to visit the Keep anyway...
	var potions = $('.result_body:contains("You have acquired the Energy Potion!")');
	if (potions.length) {
		Potions.set(['data','Energy'], Potions.data['Energy'] + potions.length);
	}
	if (page === 'keep_stats' && $('.keep_attribute_section').length) {// Only our own keep
		potions = {};
		$('.statsTTitle:contains("CONSUMABLES") + div > div').each(function(i,el){
			var info = $(el).text().replace(/\s+/g, ' ').trim().regex(/(\w+) Potion x (\d+)/i);
			if (info && info[0]) {
				potions[info[0]] = info[1];
				// Default only newly discovered potion types to 35
				if (isUndefined(Potions.option[info[0]]) || isNull(Potions.option[info[0]])) {
					Potions.set(['option',info[0]], Potions.option[info[0]] || 35);
				}
			}
		});
		this._replace(['data'], potions);
	}
	return false;
};

Potions.update = function(event) {
	var i, l, txt = [], levelup = LevelUp.get('runtime.running');
	for (i in this.data) {
		if (this.data[i]) {
			l = i.toLowerCase();
			txt.push(Config.makeImage('potion-'+l) + this.data[i] + '/' + this.option[i] + (this.option._disabled ? '' : ' <a class="golem-potion-drink" name="'+i+'" title="Drink one of this potion">' + (this.runtime.type === i ? '[Don\'t Drink]' : '[Drink]') + '</a>'));
		}
		if (!levelup && isNumber(this.option[i]) && this.data[i] > this.option[i] && Player.get(l, 0) + 10 < Player.get('max' + l, 0)) {
			this.set(['runtime','type'], i);
			this.set(['runtime','amount'], 1);
		}
	}
	if (!this.option._disabled && this.runtime.type && this.runtime.amount){
		txt.push('Drinking ' + this.runtime.amount + 'x ' + this.runtime.type + ' potion');
	}
	Dashboard.status(this, txt.join(', '));
	this.set(['option','_sleep'], !this.runtime.type || !this.runtime.amount);
};

Potions.work = function(state) {
	if (state && this.runtime.type && this.runtime.amount && Page.to('keep_stats')) {
		log(LOG_WARN, 'Wanting to drink a ' + this.runtime.type + ' potion');
		Page.click('.statUnit:contains("' + this.runtime.type + '") form .imgButton input');
		this.set(['runtime','type'], null);
		this.set(['runtime','amount'], 0);
	}
	return QUEUE_CONTINUE;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Alchemy, Bank, Battle, Generals, LevelUp, Monster, Player, Town,
	APP, APPID, warn, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser, console,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime
*/
/********** Worker.Quest **********
* Completes quests with a choice of general
*/
// Should also look for quests_quest but that should never be used unless there's a new area
var Quest = new Worker('Quest');

Quest.settings = {
	taint:true
};

Quest.defaults['castle_age'] = {
	pages:'quests_quest1 quests_quest2 quests_quest3 quests_quest4 quests_quest5 quests_quest6 quests_quest7 quests_quest8 quests_quest9 quests_quest10 quests_quest11 quests_quest12 quests_quest13 quests_quest14 quests_demiquests quests_atlantis'
};

Quest.option = {
	general:true,
	general_choice:'any',
	what:'Influence',
	ignorecomplete:true,
	unique:true,
	monster:'When able',
	bank:true,
	energy_reserve:0
};

Quest.runtime = {
	best:null,
	energy:0
};

Quest.data = {
	id: {}
};

Quest.temp = {
	order: []
};

Quest.land = [
	'Land of Fire',
	'Land of Earth',
	'Land of Mist',
	'Land of Water',
	'Demon Realm',
	'Undead Realm',
	'Underworld',
	'Kingdom of Heaven',
	'Ivory City',
	'Earth II',
	'Water II',
	'Mist II',
	'Mist III',
	'Fire II',
	'Pangaea'
];
Quest.area = {quest:'Quests', demiquest:'Demi Quests', atlantis:'Atlantis'};
Quest.current = null;
Quest.display = [
	{
		id:'general',
		label:'Use Best General',
		checkbox:true
	},{
		advanced:true,
		id:'general_choice',
		label:'Use General',
		require:'!general',
		select:'generals'
	},{
		id:'energy_reserve',
		label:'Energy Reserve',
		select:'energy',
		help:'Keep this much energy in reserve for other workers.'
	},{
		id:'what',
		label:'Quest for',
		select:'quest_reward',
		help:'Cartigan will try to collect all items needed to summon Cartigan (via Alchemy), then cascades to Advancement.' +
		  ' Vampire Lord will try to collect 24 (for Calista), then cascades to Advancement.' +
		  ' Subquests (quick general levelling) will only run subquests under 100% influence, then cascades to Advancement.' +
		  ' Advancement will run viable quests to unlock all areas, then cascades to Influence.' +
		  ' Influence will run all viable influence gaining quests, then cascade to Experience.' +
		  ' Inf+Exp will run the best viable experience quests under 100% influence, then cascade to Experience.' +
		  ' Inf+Cash will run the best viable cash quests under 100% influence, then cascade to Cash.' +
		  ' Experience runs only the best experience quests.' +
		  ' Cash runs only the best cash quests.'
	},{
		advanced:true,
		id:'ignorecomplete',
		label:'Only do incomplete quests',
		checkbox:true,
		help:'Will only do quests that aren\'t at 100% influence',
		require:'what=="Cartigan" || what=="Vampire Lord"'
	},{
		id:'unique',
		label:'Get Unique Items First',
		checkbox:true
	},{
		id:'monster',
		label:'Fortify',
		select: ['Never','When able','Wait for']
	},{
		id:'bank',
		label:'Automatically Bank',
		checkbox:true
	}
];

Quest.setup = function() {
	Resources.use('Energy');
};

Quest.init = function(old_revision) {
	var i, x;
	// BEGIN: No longer needed per-worker revision watching
	if (old_revision <= 1131) {
		this.set(['runtime','revision']);
	}
	// END
	// BEGIN: fix up "under level 4" generals
	if (old_revision <= 1100 && this.get(['option','general_choice']) === 'under level 4') {
		this.set('option.general_choice', 'under max level');
	}
	// END
	// BEGIN: one time pre-r845 fix for erroneous values in m_c, m_d, reps, eff
	if (old_revision < 845) {
		for (i in this.data) {
			if (this.data[i].reps) {
				x = this.wiki_reps(this.data[i], true);
				if (this.data[i].reps < Math.round(x * 0.8) || this.data[i].reps > Math.round(x * 1.2)) {
					log(LOG_WARN, 'Quest.init: deleting metrics for: ' + i);
					this.set(['data',i,'m_c']);
					this.set(['data',i,'m_d']);
					this.set(['data',i,'reps']);
					this.set(['data',i,'eff']);
				}
			}
		}
	}
	// END
	// BEGIN: one time pre-r850 fix to map data by id instead of name
	if (old_revision < 850) {
		this.set(['runtime','best'], null);
		this.set(['runtime','energy'], 0);
		this.set(['runtime','quest']);
		if (!('id' in this.data) && ('Pursuing Orcs' in this.data)) {
			for (i in this.data) {
				if (i !== 'id') {
					if ('id' in this.data[i]) {
						this.set(['data','id',this.data[i].id], this.data[i]);
						this.set(['data',i,'id']);
					}
					this.set(['data',i]);
				}
			}
		}
	}
	// END
	this._watch(this, 'runtime.best');
	this._watch(Player, 'data.exp');
	this._watch(LevelUp, 'runtime.energy');
	this._watch(LevelUp, 'runtime.quest');
};

Quest.page = function(page, change) {
	var data = this.data, last_main = 0, area = null, land = null, i, j, m_c, m_d, m_l, m_i, reps, purge = {}, quests, el, id, name, level, influence, reward, energy, exp, tmp, type, units, item, icon, c;
	if (page === 'quests_quest') {
		return false; // This is if we're looking at a page we don't have access to yet...
	} else if (page === 'quests_demiquests') {
		area = 'demiquest';
	} else if (page === 'quests_atlantis') {
		area = 'atlantis';
	} else {
		area = 'quest';
		land = page.regex(/quests_quest(\d+)/i) - 1;
	}
	for (i in data.id) {
		if (data.id[i].area === area && (area !== 'quest' || data.id[i].land === land)) {
			purge[i] = true;
		}
	}
	if ($('div.quests_background,div.quests_background_sub').length !== $('div.quests_background .quest_progress,div.quests_background_sub .quest_sub_progress').length) {
		Page.to(page, '');// Force a page reload as we're pretty sure it's a bad page load!
		return false;
	}
	quests = $('div.quests_background,div.quests_background_sub,div.quests_background_special');
	for (i=0; i<quests.length; i++) {
		el = quests[i];
		try {
			tmp = $('input[name="quest"]', el);
			if (!tmp.length || !tmp.val()) {
				continue;
			}
			assert(id = parseInt(tmp.val() || '0'), 'Bad quest id: '+tmp.val());
			this._transaction(); // BEGIN TRANSACTION
			delete purge[id]; // We've found it, and further errors shouldn't delete it
			name = undefined;
			type = undefined;
			level = undefined;
			influence = undefined;
			energy = undefined;
			exp = undefined;
			reward = undefined;
			if ($(el).hasClass('quests_background_sub')) { // Subquest
				name = $('.quest_sub_title', el).text().trim();
				assert((tmp = $('.qd_2_sub', el).text().replace(/\s+/gm, ' ').replace(/,/g, '').replace(/mil\b/gi, '000000')), 'Unknown rewards');
				exp = tmp.regex(/\b(\d+)\s*Exp\b/im);
				reward = tmp.regex(/\$\s*(\d+)\s*-\s*\$\s*(\d+)\b/im);
				energy = $('.quest_req_sub', el).text().regex(/\b(\d+)\s*Energy\b/im);
				tmp = $('.quest_sub_progress', el).text();
				level = tmp.regex(/\bLEVEL:?\s*(\d+)\b/im);
				influence = tmp.regex(/\bINFLUENCE:?\s*(\d+)%/im);
				type = 2;
			} else {
				name = $('.qd_1 b', el).text().trim();
				assert((tmp = $('.qd_2', el).text().replace(/\s+/gm, ' ').replace(/,/g, '').replace(/mil\b/gi, '000000')), 'Unknown rewards');
				exp = tmp.regex(/\b(\d+)\s*Exp\b/im);
				reward = tmp.regex(/\$\s*(\d+)\s*-\s*\$\s*(\d+)\b/im);
				energy = $('.quest_req', el).text().regex(/\b(\d+)\s*Energy\b/im);
				if ($(el).hasClass('quests_background')) { // Main quest
					last_main = id;
					tmp = $('.quest_progress', el).text();
					level = tmp.regex(/\bLEVEL:?\s*(\d+)\b/im);
					influence = tmp.regex(/\bINFLUENCE:?\s*(\d+)%/im);
					type = 1;
				} else { // Special / boss Quest
					type = 3;
				}
			}
			assert(name && name.indexOf('\t') === -1, 'Bad quest name - found tab character');
			this.set(['data','id',id,'button_fail'], 0);
			assert(this.set(['data','id',id,'name'], name, 'string'), 'Bad quest name: '+name);
			assert(this.set(['data','id',id,'area'], area, 'string'), 'Bad area name: '+area);
			assert(this.set(['data','id',id,'type'], type, 'number'), 'Unknown quest type: '+name);
			assert(this.set(['data','id',id,'exp'], exp, 'number'), 'Unknown exp reward');
			assert(this.set(['data','id',id,'reward'], (reward[0] + reward[1]) / 2), 'Bad money reward');
			this.set(['data','id',id,'energy'], energy);
			this.set(['data','id',id,'land'], isNumber(land) ? land : undefined);
			this.set(['data','id',id,'main'], type === 2 && last_main ? last_main : undefined);
			if (isNumber(influence)) {
				m_l = this.get(['data','id',id,'level'], 0, 'number'); // last influence value
				m_i = this.get(['data','id',id,'influence'], 0, 'number'); // last influence value
				this.set(['data','id',id,'level'], level || 0);
				this.set(['data','id',id,'influence'], influence);
				m_c = this.get(['data','id',id,'m_c'], 0, 'number'); // percentage count metric
				m_d = this.get(['data','id',id,'m_d'], 0, 'number'); // percentage delta metric
				reps = this.get(['data','id',id,'reps'], 0, 'number'); // average reps needed per level
				if (m_l === (level || 0) && m_i < influence && influence < 100) {
					m_d += influence - m_i;
					m_c++;
				}
				if (m_c && m_d) {
					this.set(['data','id',id,'m_c'], m_c);
					this.set(['data','id',id,'m_d'], m_d);
					reps = Math.ceil(m_c * 100 / m_d);
				}
				if (reps) {
					this.set(['data','id',id,'reps'], reps);
					this.set(['data','id',id,'eff'], energy * reps);
				}
			}
			if (type !== 2) { // That's everything for subquests
				this.set(['data','id',id,'unique'], type === 3 ? true : undefined); // Special / boss quests create unique items
				tmp = $('.qd_1 img', el).last();
				if (tmp.length && (item = tmp.attr('title'))) {
					item = item.trim(true);
					icon = (tmp.attr('src') || '').filepart();
					this.set(['data','id',id,'item'], Town.qualify(item, icon));
					this.set(['data','id',id,'itemimg'], icon);
				}
				units = $('.quest_req >div >div >div', el);
				for (j=0; j<units.length; j++) {
					item = ($('img', units[j]).attr('title') || '').trim(true);
					icon = ($('img', units[j]).attr('src') || '').filepart();
					c = ($(units[j]).text() || '').regex(/\bx\s*(\d+)\b/im);
					this.set(['data','id',id,'units',Town.qualify(item, icon)], c);
				}
				tmp = $('.quest_act_gen img', el).attr('title');
				this.set(['data','id',id,'general'], tmp || undefined);
			}
			this._transaction(true); // COMMIT TRANSACTION
		} catch(e) {
			this._transaction(false); // ROLLBACK TRANSACTION on any error
			log(e, e.name + ' in ' + this.name + '.page(' + page + ', ' + change + '): ' + e.message);
		}
	}
	for (i in purge) {
		log(LOG_WARN, 'Deleting ' + i + '(' + (this.land[data.id[i].land] || data.id[i].area) + ')');
		this.set(['data','id',i]); // Delete unseen quests...
	}
	return false;
};

  // watch specific Generals if doing an alchemy quest giving a general
  // watch specific Town if doing an alchemy quest giving an item/unit
  // watch Generals if we passed up a preferred quest due to a missing req.
  // watch Town if we passed up a preferred quest due to a missing req.

Quest.update = function(event, events) {
	var i, unit, own, need, noCanDo = false, best = null, best_cartigan = null, best_vampire = null, best_subquest = null, best_advancement = null, best_influence = null, best_experience = null, best_land = 0, has_cartigan = false, has_vampire = false, list = [], items = {}, data = this.data, maxenergy = Player.get('maxenergy',999), eff, best_adv_eff = 1e10, best_inf_eff = 1e10, cmp, oi, ob;
	if (events.findEvent(this, 'watch', 'runtime.best')) {// Only change the display when we change what to do
		if ((best = this.runtime.best)) {
			log(LOG_LOG, 'Wanting to perform - ' + data.id[best].name + ' in ' + (isNumber(data.id[best].land) ? this.land[data.id[best].land] : this.area[data.id[best].area]) + ' (energy: ' + data.id[best].energy + ', experience: ' + data.id[best].exp + ', gold: $' + data.id[best].reward.SI() + ')');
			Dashboard.status(this, (isNumber(data.id[best].land) ? this.land[data.id[best].land] : this.area[data.id[best].area]) + ': ' + data.id[best].name + ' (' + Config.makeImage('energy') + data.id[best].energy + ' = ' + Config.makeImage('exp') + data.id[best].exp + ' + ' + Config.makeImage('gold') + '$' + data.id[best].reward.SI() + (data.id[best].item ? Town.get([data.id[best].item,'img'], null) ? ' + <img style="width:16px;height:16px;margin-bottom:-4px;" src="' + imagepath + Town.get([data.id[best].item, 'img']) + '" title="' + data.id[best].item + '">' : ' + ' + data.id[best].item : '') + (isNumber(data.id[best].influence) && data.id[best].influence < 100 ? (' @ ' + Config.makeImage('percent','Influence') + data.id[best].influence + '%') : '') + ')');
		} else {
			Dashboard.status(this, '<i>Nothing to do</i>');
		}
		best = null;
	}
	if (events.findEvent(Town) || events.findEvent(this, 'data') || events.findEvent(this, 'option')) {
		// First let's update the Quest dropdown list(s)...
		if (event.type === 'init' || event.type === 'data') {
			for (i in data.id) {
				if (data.id[i].item && data.id[i].type !== 3) {
					list.push(data.id[i].item);
				}
				for (unit in data.id[i].units) {
					items[unit] = Math.max(items[unit] || 0, data.id[i].units[unit]);
				}
			}
			Config.set('quest_reward', ['Nothing', 'Cartigan', 'Vampire Lord', 'Subquests', 'Advancement', 'Influence', 'Inf+Exp', 'Experience', 'Inf+Cash', 'Cash'].concat(list.unique().sort()));
			for (unit in items) {
				if (Resources.get(['data','_'+unit,'quest'], -1) !== items[unit]) {
					Resources.set(['data','_'+unit,'quest'], items[unit]);
				}
			}
		}
		// Now choose the next quest...
		if (this.option.unique) {// Boss monster quests first - to unlock the next area
			for (i in data.id) {
				if (data.id[i].energy > maxenergy) {// Skip quests we can't afford
					continue;
				}
				if (data.id[i].type === 3 && !Alchemy.get(['ingredients', data.id[i].itemimg], 0, 'number') && (!best || data.id[i].energy < data.id[best].energy)) {
					best = i;
				}
			}
		}
		if (!best && this.option.what !== 'Nothing') {
			if (this.option.what !== 'Vampire Lord' || Town.get(['Vampire Lord', 'own'], 0, 'number') >= 24) {
				has_vampire = true; // Stop trying once we've got the required number of Vampire Lords
			}
			if (this.option.what !== 'Cartigan' || Generals.get(['data','Cartigan','own'], 0, 'number') || (Alchemy.get(['ingredients', 'eq_underworld_sword.jpg'], 0, 'number') >= 3 && Alchemy.get(['ingredients', 'eq_underworld_amulet.jpg'], 0, 'number') >= 3 && Alchemy.get(['ingredients', 'eq_underworld_gauntlet.jpg'], 0, 'number') >= 3)) {
				// Sword of the Faithless x3 - The Long Path, Burning Gates
				// Crystal of Lament x3 - Fiery Awakening
				// Soul Eater x3 - Fire and Brimstone, Deathrune Castle
				has_cartigan = true; // Stop trying once we've got the general or the ingredients
			}
	//		log(LOG_WARN, 'option = ' + this.option.what);
	//		best = (this.runtime.best && data.id[this.runtime.best] && (data.id[this.runtime.best].influence < 100) ? this.runtime.best : null);
			for (i in data.id) {
				// Skip quests we can't afford or can't equip the general for
				oi = data.id[i];
				if (oi.energy > maxenergy 
						|| !Generals.test(oi.general || 'any')
						|| (LevelUp.runtime.general && oi.general)) {
					continue;
				}
				if (oi.units) {
					own = 0;
					need = 0;
					noCanDo = false;
					for (unit in oi.units) {
						need = oi.units[unit];
						if (!Player.get(['artifact', i]) || need !== 1) {
							own = Town.get([unit, 'own'], 0, 'number');
							if (need > own) {	// Need more than we own, skip this quest.
								noCanDo = true;	// set flag
								break;	// no need to check more prerequisites.
							}
						}
					}
					if (noCanDo) {
						continue;	// Skip to the next quest in the list
					}
				}
				eff = oi.eff || (oi.energy * this.wiki_reps(oi));
				if (0 < (oi.influence || 0) && (oi.influence || 0) < 100) {
					eff = Math.ceil(eff * (100 - oi.influence) / 100);
				}
				switch(this.option.what) { // Automatically fallback on type - but without changing option
					case 'Vampire Lord': // Main quests or last subquest (can't check) in Undead Realm
						ob = data.id[best_vampire];
						// order: inf<100, <energy, >exp, >cash (vampire)
						if (!has_vampire && isNumber(oi.land) &&
						  oi.land === 5 && oi.type === 1 &&
						  (!this.option.ignorecomplete || (isNumber(oi.influence) && oi.influence < 100)) &&
						  (!best_vampire ||
						  (cmp = (isNumber(oi.influence) && oi.influence < 100 ? 1 : 0) - (isNumber(ob.influence) && ob.influence < 100 ? 1 : 0)) > 0 ||
						  (!cmp && (cmp = oi.energy - ob.energy) < 0) ||
						  (!cmp && (cmp = (oi.exp / oi.energy) - (ob.exp / ob.energy)) > 0) ||
						  (!cmp && (cmp = (oi.reward / oi.energy) - (ob.reward / ob.energy)) > 0))) {
							best_vampire = i;
						}// Deliberate fallthrough
					case 'Cartigan': // Random Encounters in various Underworld Quests
						ob = data.id[best_cartigan];
						// order: inf<100, <energy, >exp, >cash (cartigan)
						if (!has_cartigan && isNumber(oi.land) && data.id[i].land === 6 &&
						  (!this.option.ignorecomplete || (isNumber(oi.influence) && oi.influence < 100)) &&
						  (((data.id[oi.main || i].name === 'The Long Path' || data.id[oi.main || i].name === 'Burning Gates') && Alchemy.get(['ingredients', 'eq_underworld_sword.jpg'], 0, 'number') < 3) ||
						  ((data.id[oi.main || i].name === 'Fiery Awakening') && Alchemy.get(['ingredients', 'eq_underworld_amulet.jpg'], 0, 'number') < 3) ||
						  ((data.id[oi.main || i].name === 'Fire and Brimstone' || data.id[oi.main || i].name === 'Deathrune Castle') && Alchemy.get(['ingredients', 'eq_underworld_gauntlet.jpg'], 0, 'number') < 3)) &&
						  (!best_cartigan ||
						  (cmp = (isNumber(oi.influence) && oi.influence < 100 ? 1 : 0) - (isNumber(ob.influence) && ob.influence < 100 ? 1 : 0)) > 0 ||
						  (!cmp && (cmp = oi.energy - ob.energy) < 0) ||
						  (!cmp && (cmp = (oi.exp / oi.energy) - (ob.exp / ob.energy)) > 0) ||
						  (!cmp && (cmp = (oi.reward / oi.energy) - (ob.reward / ob.energy)) > 0))) {
							best_cartigan = i;
						}// Deliberate fallthrough
					case 'Subquests': // Find the cheapest energy cost *sub*quest with influence under 100%
						ob = data.id[best_subquest];
						// order: <energy, >exp, >cash (subquests)
						if (oi.type === 2 && isNumber(oi.influence) && oi.influence < 100 &&
						  (!best_subquest ||
						  (cmp = oi.energy - ob.energy) < 0 ||
						  (!cmp && (cmp = (oi.exp / oi.energy) - (ob.exp / ob.energy)) > 0) ||
						  (!cmp && (cmp = (oi.reward / oi.energy) - (ob.reward / ob.energy)) > 0))) {
							best_subquest = i;
						}// Deliberate fallthrough
					case 'Advancement': // Complete all required main / boss quests in an area to unlock the next one (type === 2 means subquest)
						if (isNumber(oi.land) && oi.land > best_land) { // No need to revisit old lands - leave them to Influence
							best_land = oi.land;
							best_advancement = null;
							best_adv_eff = 1e10;
						}
						ob = data.id[best_advancement];
						// order: <effort, >exp, >cash, <energy (advancement)
						if (oi.type !== 2 && isNumber(oi.land) &&
						  //oi.level === 1 &&  // Need to check if necessary to do boss to unlock next land without requiring orb
						  oi.land >= best_land &&
						  ((isNumber(oi.influence) && Generals.test(oi.general) && oi.level <= 1 && oi.influence < 100) || (oi.type === 3 && !Alchemy.get(['ingredients', oi.itemimg], 0, 'number'))) &&
						  (!best_advancement ||
						  (cmp = eff - best_adv_eff) < 0 ||
						  (!cmp && (cmp = (oi.exp / oi.energy) - (ob.exp / ob.energy)) > 0) ||
						  (!cmp && (cmp = (oi.reward / oi.energy) - (ob.reward / ob.energy)) > 0) ||
						  (!cmp && (cmp = oi.energy - ob.energy) < 0))) {
							best_land = Math.max(best_land, oi.land);
							best_advancement = i;
							best_adv_eff = eff;
						}// Deliberate fallthrough
					case 'Influence': // Find the cheapest energy cost quest with influence under 100%
						ob = data.id[best_influence];
						// order: <effort, >exp, >cash, <energy (influence)
						if (isNumber(oi.influence) &&
						  (!oi.general || Generals.test(oi.general)) &&
						  oi.influence < 100 &&
						  (!best_influence ||
						  (cmp = eff - best_inf_eff) < 0 ||
						  (!cmp && (cmp = (oi.exp / oi.energy) - (ob.exp / ob.energy)) > 0) ||
						  (!cmp && (cmp = (oi.reward / oi.energy) - (ob.reward / ob.energy)) > 0) ||
						  (!cmp && (cmp = oi.energy - ob.energy) < 0))) {
							best_influence = i;
							best_inf_eff = eff;
						}// Deliberate fallthrough
					case 'Experience': // Find the best exp per energy quest
						ob = data.id[best_experience];
						// order: >exp, inf<100, >cash, <energy (experience)
						if (!best_experience ||
						  (cmp = (oi.exp / oi.energy) - (ob.exp / ob.energy)) > 0 ||
						  (!cmp && (cmp = (isNumber(oi.influence) && oi.influence < 100 ? 1 : 0) - (isNumber(ob.influence) && ob.influence < 100 ? 1 : 0)) > 0) ||
						  (!cmp && (cmp = (oi.reward / oi.energy) - (ob.reward / ob.energy)) > 0) ||
						  (!cmp && (cmp = oi.energy - ob.energy) < 0)) {
							best_experience = i;
						}
						break;
					case 'Inf+Exp': // Find the best exp per energy quest, favouring quests needing influence
						ob = data.id[best_experience];
						// order: inf<100, >exp, >cash, <energy (inf+exp)
						if (!best_experience ||
						  (cmp = (isNumber(oi.influence) && oi.influence < 100 ? 1 : 0) - (isNumber(ob.influence) && ob.influence < 100 ? 1 : 0)) > 0 ||
						  (!cmp && (cmp = (oi.exp / oi.energy) - (ob.exp / ob.energy)) > 0) ||
						  (!cmp && (cmp = (oi.reward / oi.energy) - (ob.reward / ob.energy)) > 0) ||
						  (!cmp && (cmp = oi.energy - ob.energy) < 0)) {
							best_experience = i;
						}
						break;
					case 'Inf+Cash': // Find the best (average) cash per energy quest, favouring quests needing influence
						ob = data.id[best];
						// order: inf<100, >cash, >exp, <energy (inf+cash)
						if (!best ||
						  (cmp = (isNumber(oi.influence) && oi.influence < 100 ? 1 : 0) - (isNumber(ob.influence) && ob.influence < 100 ? 1 : 0)) > 0 ||
						  (!cmp && (cmp = (oi.reward / oi.energy) - (ob.reward / ob.energy)) > 0) ||
						  (!cmp && (cmp = (oi.exp / oi.energy) - (ob.exp / ob.energy)) > 0) ||
						  (!cmp && (cmp = oi.energy - ob.energy) < 0)) {
							best = i;
						}
						break;
					case 'Cash': // Find the best (average) cash per energy quest
						ob = data.id[best];
						// order: >cash, inf<100, >exp, <energy (cash)
						if (!best ||
						  (cmp = (oi.reward / oi.energy) - (ob.reward / ob.energy)) > 0 ||
						  (!cmp && (cmp = (isNumber(oi.influence) && oi.influence < 100 ? 1 : 0) - (isNumber(ob.influence) && ob.influence < 100 ? 1 : 0)) > 0) ||
						  (!cmp && (cmp = (oi.exp / oi.energy) - (ob.exp / ob.energy)) > 0) ||
						  (!cmp && (cmp = oi.energy - ob.energy) < 0)) {
							best = i;
						}
						break;
					default: // For everything else, there's (cheap energy) items...
						ob = data.id[best];
						// order: <energy, inf<100, >exp, >cash (item)
						if (oi.item === this.option.what &&
						  (!best ||
						  (cmp = oi.energy - ob.energy) < 0 ||
						  (!cmp && (cmp = (isNumber(oi.influence) && oi.influence < 100 ? 1 : 0) - (isNumber(ob.influence) && ob.influence < 100 ? 1 : 0)) > 0) ||
						  (!cmp && (cmp = (oi.exp / oi.energy) - (ob.exp / ob.energy)) > 0) ||
						  (!cmp && (cmp = (oi.reward / oi.energy) - (ob.reward / ob.energy)) > 0))) {
							best = i;
						}
						break;
				}
			}
			switch(this.option.what) { // Automatically fallback on type - but without changing option
				case 'Vampire Lord':best = best_vampire || best_advancement || best_influence || best_experience;break;
				case 'Cartigan':	best = best_cartigan || best_advancement || best_influence || best_experience;break;
				case 'Subquests':	best = best_subquest || best_advancement || best_influence || best_experience;break;
				case 'Advancement':	best = best_advancement || best_influence || best_experience;break;
				case 'Influence':	best = best_influence || best_experience;break;
				case 'Inf+Exp':		best = best_experience;break;
				case 'Experience':	best = best_experience;break;
				default:break;
			}
		}
		this.set(['runtime','best'], best);
		this.set(['runtime','energy'], best ? data.id[best].energy : 0);
	}
	best = LevelUp.get(['runtime','quest'], this.runtime.best, 'string'); // Only override if it has an actual quest for us
	this.set(['option','_sleep'], !best
		|| this.data.id[best].energy > (LevelUp.runtime.force.energy ? LevelUp.runtime.energy : LevelUp.runtime.energy - this.option.energy_reserve)
		|| (!LevelUp.runtime.levelup
			&& ((this.option.monster === 'When able' && Monster.get('runtime.defending'))
				|| (this.option.monster === 'Wait for' && (Monster.get('runtime.defending') || !LevelUp.runtime.force.energy)))));
	return true;
};

Quest.work = function(state) {
	var mid, general = 'any', best = LevelUp.get(['runtime','quest'], this.runtime.best, 'string'), useable_energy = LevelUp.runtime.force.energy ? LevelUp.runtime.energy : LevelUp.runtime.energy - this.option.energy_reserve, quest, button;
	if (state && this.data.id[best].energy > useable_energy && this.option.bank) {
		if (!Bank.stash()) {
			return QUEUE_CONTINUE;
		}
		return QUEUE_FINISH;
	}
//	If holding for fortify, then don't quest if we have a secondary or defend target possible, unless we're forcing energy.
//	if ((LevelUp.runtime.levelup && !LevelUp.runtime.quest)
//	|| (!LevelUp.runtime.levelup 
//		&& ((this.option.monster === 'When able' && Monster.get('runtime.defending')) 
//			|| (this.option.monster === 'Wait for' && (Monster.get('runtime.defending') || !LevelUp.runtime.force.energy))))) {
//		return QUEUE_FINISH;
//	}
	if (!state) {
		return QUEUE_CONTINUE;
	}
	quest = this.data.id[best]
	if (this.option.general) {
		if (quest.general && isNumber(quest.influence) && quest.influence < 100) {
			general = quest.general;
		} else {
			general = Generals.best('under max level');
			switch(this.option.what) {
				case 'Vampire Lord':
				case 'Cartigan':
					if (quest.general) {
						general = quest.general;
					} else {
						if (general === 'any' && isNumber(quest.influence) && quest.influence < 100) {
							general = Generals.best('influence');
						}
						if (general === 'any') {
							general = Generals.best('item');
						}
					}
					break;
				case 'Subquests':
				case 'Advancement':
				case 'Influence':
				case 'Inf+Exp':
				case 'Experience':
				case 'Inf+Cash':
				case 'Cash':
					if (isNumber(quest.influence) && quest.influence < 100) {
						if (quest.general) {
							general = quest.general;
						} else if (general === 'any') {
							general = Generals.best('influence');
						}
					}
					break;
				default:
					if (isNumber(quest.influence) && quest.influence < 100) {
						if (quest.general) {
							general = quest.general;
						} else if (general === 'any') {
							general = Generals.best('influence');
						}
					}
					if (general === 'any') {
						general = Generals.best('item');
					}
					break;
			}
			if (general === 'any') {
				general = 'cash';
			}
		}
	} else {
		general = this.option.general_choice;
	}
	if (!Generals.to(LevelUp.runtime.general || general)) {
		return QUEUE_CONTINUE;
	}
	button = $('input[name="quest"][value="' + best + '"]').siblings('.imgButton').children('input[type="image"]');
	log(LOG_WARN, 'Performing - ' + quest.name + ' (energy: ' + quest.energy + ')');
	//log(LOG_WARN,'Quest ' + quest.name + ' general ' + quest.general + ' test ' + !Generals.test(quest.general || 'any') + ' this.data || '+ (quest.general || 'any') + ' queue ' + (LevelUp.runtime.general && quest.general));
	if (!button || !button.length) { // Can't find the quest, so either a bad page load, or bad data - delete the quest and reload, which should force it to update ok...
		this.add(['data','id',best,'button_fail'], 1);
		if (quest.button_fail > 5){
			log(LOG_WARN, 'Can\'t find button for ' + quest.name + ', so deleting and re-visiting page...');
			this.set(['data','id',best]);
			this.set(['runtime','best'], null);
			Page.reload();
			return QUEUE_RELEASE;
		} else {
			switch(quest.area) {
			case 'quest':
				Page.to('quests_quest' + (quest.land + 1),null,true);
				return QUEUE_CONTINUE;
			case 'demiquest':
				Page.to('quests_demiquests',null,true);
				return QUEUE_CONTINUE;
			case 'atlantis':
				Page.to('quests_atlantis',null,true);
				return QUEUE_CONTINUE;
			default:
				log(LOG_LOG, 'Can\'t get to quest area!');
				return QUEUE_FINISH;
			}
		}
	}
	Page.click(button);
	LevelUp.set(['runtime','quest'], null);
	if (quest.type === 3) {// Just completed a boss quest
		if (!Alchemy.get(['ingredients', quest.itemimg], 0, 'number')) {// Add one as we've just gained it...
			Alchemy.set(['ingredients', quest.itemimg], 1);
		}
		// This won't work since we just clicked the quest above.
		if (this.option.what === 'Advancement' && Page.pageNames['quests_quest' + (quest.land + 2)]) {// If we just completed a boss quest, check for a new quest land.
			Page.to('quests_quest' + (quest.land + 2));// Go visit the next land as we've just unlocked it...
		}
	}
	return QUEUE_RELEASE;
};

Quest.dashboard = function(sort, rev) {
	var self = this, i, j, k, o, r, quest, list = [], output = [], vv, tt, cc, span, v, eff;
	if (typeof sort === 'undefined') {
		this.temp.order = [];
		for (i in this.data.id) {
			this.temp.order.push(i);
		}
	}
	if (typeof sort === 'undefined') {
		sort = (this.runtime.sort || 1);
	}
	if (typeof rev === 'undefined'){
		rev = (this.runtime.rev || false);
	}
	this.runtime.sort = sort;
	this.runtime.rev = rev;
	function getValue(q){
		var r, n, o = self.data.id[q];
		switch(sort) {
			case 0:	// general
				return o.general || 'zzz';
			case 1: // name
				return o.name || 'zzz';
			case 2: // area
				return isNumber(o.land) && typeof self.land[o.land] !== 'undefined' ? self.land[o.land] : self.area[o.area];
			case 3: // level
				return (isNumber(o.level) ? o.level : -1) * 100 + (o.influence || 0);
			case 4: // energy
				return o.energy;
			case 5: // effort
				return o.eff || (o.energy * self.wiki_reps(o));
			case 6: // exp
				return o.exp / o.energy;
			case 7: // reward
				return o.reward / o.energy;
			case 8: // item
				return o.item || 'zzz';
		}
		return 0; // unknown
	}
	this.temp.order.sort(function(a,b) {
		var aa = getValue(a), bb = getValue(b);
		if (isString(aa) || isString(bb)) {
			return (rev ? (''+bb).localeCompare(aa) : (''+aa).localeCompare(bb));
		}
		return (rev ? (aa || 0) - (bb || 0) : (bb || 0) - (aa || 0));
	});
	th(output, 'General');
	th(output, 'Name');
	th(output, 'Area');
	th(output, 'Level');
	th(output, 'Energy');
	th(output, 'Effort', 'title="Energy required per influence level."');
	th(output, '@&nbsp;Exp');
	th(output, '@&nbsp;Reward');
	th(output, 'Item');
	list.push('<table cellspacing="0" style="width:100%"><thead><tr>' + output.join('') + '</tr></thead><tbody>');
	for (o=0; o<this.temp.order.length; o++) {
		i = this.temp.order[o];
		quest = this.data.id[i];
		output = [];

		// general
		td(output, Generals.get([quest.general]) ? '<img style="width:25px;height:25px;" src="' + imagepath + Generals.get([quest.general, 'img']) + '" alt="' + quest.general + '" title="' + quest.general + '">' : '');

		// name
		vv = quest.name;
		span = cc = '';
		tt = 'id: ' + i;
		if (quest.main) {
			tt += ' | main:';
			if (this.data.id[quest.main] && this.data.id[quest.main].name) {
				tt += ' ' + this.data.id[quest.main].name;
			}
			tt += ' (id: ' + quest.main + ')';
		}
		if (this.runtime.best === i) {
			vv = '<b>' + vv + '</b>';
			cc = 'green';
		}
		if (tt !== '') {
			tt = 'title="' + tt + '"';
		}
		if (cc !== '') {
			span += ' style="color:' + cc + '"';
		}
		if (span !== '') {
			vv = '<span' + span + '>' + vv + '</span>';
		}
		th(output, vv, tt);

		// area
		td(output, isNumber(quest.land) ? this.land[quest.land].replace(' ','&nbsp;') : this.area[quest.area].replace(' ','&nbsp;'));

		// level
		span = vv = tt = cc = '';
		if (isNumber(v = quest.level)) {
			vv = v + '&nbsp;(' + quest.influence + '%)';
			if (v >= 4 && quest.influence >= 100) {
				cc = 'red';
			} else if (this.cost(i)) {
				cc = 'blue';
				if (tt !== '') {
					tt += '; ';
				}
				tt += this.temp.desc;
			} else if (isNumber(quest.influence) && quest.influence < 100) {
				cc = 'green';
			}
		} else if (this.cost(i)) {
			vv = '<i>n/a</i>';
			cc = 'blue';
			if (tt !== '') {
				tt += '; ';
			}
			tt += this.temp.desc;
		}
		if (tt !== '') {
			tt = 'title="' + tt + '"';
		}
		if (cc !== '') {
			span += ' style="color:' + cc + '"';
		}
		if (span !== '') {
			vv = '<span' + span + '>' + vv + '</span>';
		}
		td(output, vv, tt);

		// energy
		td(output, quest.energy);

		// effort
		vv = tt = cc = span = '';
		if (!isNumber(quest.level)) {
			vv = '<i>' + quest.energy + '</i>';
		} else {
			r = 'reps_' + (isNumber(quest.land) ? (quest.land + 1) : quest.area);
			j = quest.name.toLowerCase();
			vv = quest.eff || (quest.energy * this.wiki_reps(quest));
			tt = 'effort ' + vv;
			if (0 < quest.influence && quest.influence < 100) {
				v = Math.round(vv * (100 - quest.influence) / 100);
				tt += ' (' + v + ')';
			}
			if ((v = quest.reps)) {
				if (tt !== '') {
					tt += ', ';
				}
				tt += 'reps ' + v;
				if (quest.m_d && quest.m_c) {
					var v1 = 100 * quest.m_c / quest.m_d;
					var v2 = 2 / quest.m_c;
					var lo = Math.ceil(v1 - v2);
					var hi = Math.ceil(v1 + v2);
					if (lo < hi) {
						tt += ' [' + lo + ',' + hi + ']';
					}
					v = this.wiki_reps(quest, true);
					if (!v || Math.ceil(lo) > v || Math.ceil(hi) < v) {
						tt += ' wiki[' + (v || '?') + ']';
						if (lo + 1 >= hi) {
							cc = 'purple';
						}
					} else if (lo + 1 >= hi) {
						cc = 'green';
					}
				}
			} else if ((v = this.wiki_reps(quest, true))) {
				if (tt !== '') {
					tt += ', ';
				}
				tt += 'wiki reps ' + v;
			} else {
				if (tt !== '') {
					tt += ', ';
				}
				tt += 'assuming reps 16';
				cc = 'blue';
			}
			if (quest.m_d || quest.m_c) {
				vv = '<b>' + vv + '</b>';
				if (tt !== '') {
					tt += ', ';
				}
				tt += 'effort metrics ' + (quest.m_d || '?') + '/' + (quest.m_c || '?');
			}
			if (tt !== '') {
				tt = 'title="' + tt + '"';
			}
		}
		if (cc !== '') {
			span += ' style="color:' + cc + '"';
		}
		if (span !== '') {
			vv = '<span' + span + '>' + vv + '</span>';
		}
		td(output, vv, tt);

		// exp
		td(output, (quest.exp / quest.energy).round(2), 'title="' + quest.exp + ' total, ' + (quest.exp / quest.energy * 12).round(2) + ' per hour"');

		// reward
		td(output, '$' + (quest.reward / quest.energy).addCommas(0), 'title="$' + quest.reward.addCommas() + ' total, $' + (quest.reward / quest.energy * 12).addCommas(0) + ' per hour"');

		// item
		td(output, quest.itemimg ? '<img style="width:25px;height:25px;" src="' + imagepath + quest.itemimg + '" alt="' + quest.item + '" title="' + quest.item + '">' : '');

		tr(list, output.join(''), 'style="height:25px;"');
	}
	list.push('</tbody></table>');
	$('#golem-dashboard-Quest').html(list.join(''));
	$('#golem-dashboard-Quest tbody tr td:nth-child(2)').css('text-align', 'left');
	if (typeof sort !== 'undefined') {
		$('#golem-dashboard-Quest thead th:eq('+sort+')').attr('name',(rev ? 'reverse' : 'sort')).append('&nbsp;' + (rev ? '&uarr;' : '&darr;'));
	}
};

Quest.cost = function(id) {
	/*jslint onevar:false*/
	var quest = this.get('data.id');
	var gens = Generals.get('data');
	var town = Town.get('data');
	var artifact = Player.get('data.artifact');
	var c, i, j, k, n, cost, upkeep, desc, ccount, ucount;
	/*jslint onevar:true*/

	this.temp.cost = 1e99;
	this.temp.upkeep = 1e99;
	this.temp.desc = '(n/a)';

	cost = ccount = 0;
	upkeep = ucount = 0;
	desc = '';

	if (id && quest[id]) {
		if ((i = quest[id].general)) {
			if (!gens || !gens[i] || !gens[i].own) {
				cost += 1e99;
				if (desc !== '') {
					desc += '; ';
				}
				desc += '(n/a)';
			}
		}

		if (quest[id].units) {
			for (i in quest[id].units) {
				n = quest[id].units[i];
				c = j = 0;
				k = 1e99;
				if (town && town[i]) {
					c = town[i].own || 0;
					if (town[i].buy && town[i].buy.length) {
						j = town[i].upkeep || 0;
						k = town[i].cost || 0;
					}
				} else if (artifact && artifact[i]) {
					c = 1;
					j = k = 0;
				}
				if (c < n) {
					cost += (n - c) * k;
					upkeep += (n - c) * j;
					if (desc !== '') {
						desc += '; ';
					}
					desc += (n - c) + '/' + n + ' ' + i;
					if (k >= 1e99) {
						desc += ' (n/a)';
						ccount++;
					} else if (k) {
						desc += ' $' + ((n - c) * k).SI();
						ccount++;
					}
					if (j) {
						desc += ' (upkeep $' + ((n - c) * j).SI() + ')';
						ucount++;
					}
				}
			}
		}

		if (ccount > 1 && cost) {
			desc += '; total ';
			if (cost < 1e99) {
				desc += '$' + cost.SI();
			} else {
				desc += '(n/a)';
			}
		}

		if (ucount > 1 && upkeep) {
			desc += '; upkeep $' + upkeep.SI();
		}

		this.temp.cost = cost;
		this.temp.upkeep = upkeep;
		this.temp.desc = desc;
	}

	return this.temp.cost;
};

Quest.wiki_reps = function(quest, pure) {
	var reps = 0, rdata;
	if (isObject(quest)) {
		if (!isNumber(quest.level)) {
			reps = 1;
		} else if ((rdata = this.rdata[(quest.name || '').toLowerCase()])) {
			reps = rdata['reps_' + quest.area[0] + ((quest.land || 0) + 1).toString()] || 0;
		}
	}
	return pure ? reps : reps || 16;
};

Quest.rts = 1302453435;	// Sun Apr 10 16:37:15 2011 UTC
Quest.rdata =			// #419
{
	'a demonic transformation':			{ 'reps_q4':  40 },
	'a forest in peril':				{ 'reps_d4':   9 },
	'a kidnapped princess':				{ 'reps_d1':  10 },
	'a new dawn':					{ 'reps_q12':  7 },
	'a surprise from terra':			{ 'reps_q12': 12 },
	'across the sea':				{ 'reps_q11':  8 },
	'aid corvintheus':				{ 'reps_d3':   9 },
	'aid the angels':				{ 'reps_q9':  17 },
	'approach the prayer chamber':			{ 'reps_d1':  12 },
	'approach the tree of life':			{ 'reps_d4':  12 },
	'ascent to the skies':				{ 'reps_q8':  14 },
	'attack from above':				{ 'reps_q9':  17 },
	'attack undead guardians':			{ 'reps_q6':  24 },
	'aurelius':					{ 'reps_q11': 11 },
	'aurelius outpost':				{ 'reps_q11':  9 },
	'avoid detection':				{ 'reps_q12':  0 },
	'avoid ensnarements':				{ 'reps_q3':  34 },
	'avoid fungal poison':				{ 'reps_q12':  0 },
	'avoid poison':					{ 'reps_q12':  0 },
	'avoid shades':					{ 'reps_q12':  0 },
	'avoid the guards':				{ 'reps_q8':   0 },
	'avoid the patrols':				{ 'reps_q9':  17 },
	'banish the horde':				{ 'reps_q9':  17 },
	'battle a wraith':				{ 'reps_q2':  16 },
	'battle earth and fire demons':			{ 'reps_q4':  16 },
	'battle gang of bandits':			{ 'reps_q1':  10 },
	'battle orc captain':				{ 'reps_q3':  15 },
	'battle the black dragon':			{ 'reps_q4':  14 },
	'battle the ent':				{ 'reps_d4':  12 },
	'battling the demons':				{ 'reps_q9':  17 },
	'being followed':				{ 'reps_q7':  15 },
	'blood wing king of the dragons':		{ 'reps_d2':  20 },
	'breach prison':				{ 'reps_q12':  0 },
	'breach the barrier':				{ 'reps_q8':  14 },
	'breach the keep entrance':			{ 'reps_d3':  12 },
	'breaching the gates':				{ 'reps_q7':  15 },
	'break aurelius guard':				{ 'reps_q11':  0 },
	'break evil seal':				{ 'reps_q7':  17 },
	'break the lichs spell':			{ 'reps_d3':  12 },
	'break the line':				{ 'reps_q10':  0 },
	'breaking through the guard':			{ 'reps_q9':  17 },
	'bridge of elim':				{ 'reps_q8':  11 },
	'bridge of fire':				{ 'reps_q14':   11 },
	'burning gates':				{ 'reps_q7':   0 },
	'burning of karth':				{ 'reps_q14':  15 },
	'call of arms':					{ 'reps_q6':  25 },
	'calm before the storm':			{ 'reps_q13':  0 },
	'cast aura of night':				{ 'reps_q5':  32 },
	'cast blizzard':				{ 'reps_q10':  0 },
	'cast fire aura':				{ 'reps_q6':  24 },
	'cast holy light':				{ 'reps_q6':  24 },
	'cast holy light spell':			{ 'reps_q5':  24 },
	'cast holy shield':				{ 'reps_d3':  12 },
	'cast meteor':					{ 'reps_q5':  32 },
  	'cast poison shield':				{ 'reps_q13':  0 },
	'cast regrowth':				{ 'reps_q13':  0 },
	'castle of the black lion':			{ 'reps_d5':  13 },
	'castle of the damn':				{ 'reps_d3':  21 },
	'channel excalibur':				{ 'reps_q8':   0 },
	'channel runestones':				{ 'reps_q12':  0 },
	'charge ahead':					{ 'reps_q10':  0 },
	'charge the castle':				{ 'reps_q7':  15 },
	'chasm of fire':				{ 'reps_q10': 10 },
	'city of clouds':				{ 'reps_q8':  11 },
	'clear haze':					{ 'reps_q13':  0 },
	'clear the rocks':				{ 'reps_q11':  0 },
	'climb castle cliffs':				{ 'reps_q11':  0 },
	'climb the mountain':				{ 'reps_q8':   0 },
	'close the black portal':			{ 'reps_d1':  12 },
	'collect artifact shards':			{ 'reps_q13':  0 },
	'collect astral souls':				{ 'reps_q12':  0 },
	'collect runestones':				{ 'reps_q12':  0 },
	'confront the black lion':			{ 'reps_d5':  12 },
	'confront the rebels':				{ 'reps_q10': 10 },
	'consult aurora':				{ 'reps_d4':  12 },
	'corruption of nature':				{ 'reps_d4':  20 },
	'cover tracks':					{ 'reps_q7':  19 },
	'create artifact relic':			{ 'reps_q13':  0 },
	'create wall':					{ 'reps_q12':  0 },
	'cross lava river':				{ 'reps_q7':  20 },
	'cross the bridge':				{ 'reps_q8':   0, 'reps_q10':  0 },
	'cross the falls':				{ 'reps_q13':  0 },
	'cross the moat':				{ 'reps_q11':  0 },
	'crossing the chasm':				{ 'reps_q2':  13, 'reps_q8':   0 },
	'crossing the white plains':			{ 'reps_q14':  10 },
	'cure infested soldiers':			{ 'reps_q6':  25 },
	'dark chasm':					{ 'reps_q15':  0 },
	'dark heart of the woods':			{ 'reps_q12':  9 },
	'deal final blow to bloodwing':			{ 'reps_d2':  12 },
	'death of a forest':				{ 'reps_q13':  0 },
	'deathrune castle':				{ 'reps_q7':  12 },
	'decipher the clues':				{ 'reps_q9':  17 },
	'defeat and heal feral animals':		{ 'reps_d4':  12 },
	'defeat angelic sentinels':			{ 'reps_q8':  14 },
	'defeat astral wolves':				{ 'reps_q12':  0 },
	'defeat bear form':				{ 'reps_q11':  0 },
	'defeat bloodwing':				{ 'reps_d2':  12 },
	'defeat chimerus':				{ 'reps_d1':  12 },
	'defeat darien woesteel':			{ 'reps_d5':   9 },
	'defeat demonic guards':			{ 'reps_q7':  17 },
	'defeat fire elementals':			{ 'reps_q10':  0 },
	'defeat frost minions':				{ 'reps_q3':  40 },
	'defeat guardian':				{ 'reps_q12':  0 },
	'defeat guards':				{ 'reps_q12':  0 },
	'defeat lion defenders':			{ 'reps_q11':  0 },
	'defeat lothar':				{ 'reps_q12':  0 },
	'defeat orc patrol':				{ 'reps_q8':   0 },
	'defeat rebels':				{ 'reps_q10':  0 },
	'defeat rock elementals':			{ 'reps_q13':  0 },
	'defeat snow giants':				{ 'reps_q3':  24 },
	'defeat spirits':				{ 'reps_q12':  0 },
	'defeat the bandit leader':			{ 'reps_q1':   6 },
	'defeat the banshees':				{ 'reps_q5':  25 },
	'defeat the black lion army':			{ 'reps_d5':  12 },
	'defeat the demonic guards':			{ 'reps_d1':  12 },
	'defeat the demons':				{ 'reps_q9':  17 },
	'defeat the kobolds':				{ 'reps_q10':  0 },
	'defeat the patrols':				{ 'reps_q9':  17 },
	'defeat the seraphims':				{ 'reps_q8':   0 },
	'defeat tiger form':				{ 'reps_q11':  0 },
	'defeat treants':				{ 'reps_q12':  0 },
	'defeat wolverines':				{ 'reps_q13':  0 },
	'defend the village':				{ 'reps_d3':  12 },
	'desert temple':				{ 'reps_q11': 12 },
	'destroy black oozes':				{ 'reps_q11':  0 },
	'destroy fire dragon':				{ 'reps_q4':  10 },
	'destroy fire elemental':			{ 'reps_q4':  16 },
	'destroy horde of ghouls & trolls':		{ 'reps_q4':   9 },
	'destroy mushrooms':				{ 'reps_q13':  0 },
	'destroy scourge':				{ 'reps_q13':  0 },
	'destroy spores':				{ 'reps_q12':  0 },
	'destroy the black gate':			{ 'reps_d1':  12 },
	'destroy the black portal':			{ 'reps_d1':  12 },
	'destroy the bolted door':			{ 'reps_d3':  12 },
	'destroy undead crypt':				{ 'reps_q1':   5 },
	'destruction abound':				{ 'reps_q8':  11 },
	'determine cause of corruption':		{ 'reps_d5':  12 },
	'dig up star metal':				{ 'reps_d3':  12 },
	'disarm townspeople':				{ 'reps_q11':  0 },
	'discover cause of corruption':			{ 'reps_d4':  12 },
	'dismantle orc patrol':				{ 'reps_q3':  32 },
	'dispatch corrupted soldiers':			{ 'reps_q13':  0 },
	'dispatch lothar':				{ 'reps_q12':  0 },
	'dispatch more cultist guards':			{ 'reps_d1':  12 },
	'distract the demons':				{ 'reps_q9':  17 },
	'dragon slayer':				{ 'reps_d2':  14 },
	'druidic prophecy':				{ 'reps_q11':  9 },
	"duel cefka's knight champion":			{ 'reps_q4':  10 },
	'duel with guards':				{ 'reps_q12':  0 },
	'dwarven stronghold':				{ 'reps_q10': 10 },
	'eastern corridor':				{ 'reps_q11':  0 },
	'elekin the dragon slayer':			{ 'reps_d2':  10 },
	'end of the road':				{ 'reps_q9':  17 },
	'energy rift':					{ 'reps_q14':  11 },
	'enlist captain morgan':			{ 'reps_q11':  0 },
	'entrance denied':				{ 'reps_q12': 12 },
	'entrance to terra':				{ 'reps_q1':   9 },
	'equip soldiers':				{ 'reps_q6':  25 },
	'eerie silence':				{ 'reps_q15':  0 },
	'eradicate spores':				{ 'reps_q13':  0 },
	'escape from trakan':				{ 'reps_q12':  7 },
	'escape trakan':				{ 'reps_q12':  0 },
	'escape woods':					{ 'reps_q12':  0 },
	'escaping the chaos':				{ 'reps_q9':  17 },
	'escaping the stronghold':			{ 'reps_q9':  10 },
	'explore dead forests':				{ 'reps_q12':  0 },
	'explore merchant plaza':			{ 'reps_q11':  0 },
	'explore mist expanse':				{ 'reps_q12':  0 },
	'explore mist ruins':				{ 'reps_q12':  0 },
	'explore the temple':				{ 'reps_q11':  0 },
	'extinguish desert basilisks':			{ 'reps_q11':  0 },
	'extinguish the fires':				{ 'reps_q8':   0 },
	'falls of jiraya':				{ 'reps_q1':  10 },
	'family ties':					{ 'reps_d5':  11 },
	'felthias fields':				{ 'reps_q12': 14 },
	'fend off demons':				{ 'reps_q7':  20 },
	'fiery awakening':				{ 'reps_q7':  12 },
	"fight cefka's shadow guard":			{ 'reps_q4':  10 },
	'fight demonic worshippers':			{ 'reps_q5':  24 },
	'fight dragon welps':				{ 'reps_q4':  10 },
	'fight ghoul army':				{ 'reps_q1':   5 },
	'fight gildamesh':				{ 'reps_q3':  32 },
	'fight ice beast':				{ 'reps_q3':  40 },
	'fight infested soldiers':			{ 'reps_q6':  25 },
	'fight off demons':				{ 'reps_q5':  21 },
	'fight off zombie infestation':			{ 'reps_d3':  12 },
	'fight snow king':				{ 'reps_q3':  24 },
	'fight the half-giant sephor':			{ 'reps_q4':   9 },
	'fight treants':				{ 'reps_q2':  27 },
	'fight undead zombies':				{ 'reps_q2':  16 },
	'fight water demon lord':			{ 'reps_q2':  31 },
	'fight water demons':				{ 'reps_q2':  30 },
	'fight water spirits':				{ 'reps_q2':  40 },
	'find a way across':				{ 'reps_q13':  0 },
	'find answers':					{ 'reps_q12':  0 },
	'find escape route':				{ 'reps_q12':  0 },
	'find evidence of dragon attack':		{ 'reps_d2':   8 },
	'find hidden path':				{ 'reps_d2':  10 },
	'find nezeals keep':				{ 'reps_d3':  12 },
	'find prison key':				{ 'reps_q12':  0 },
	'find rock worms weakness':			{ 'reps_d2':  10 },
	'find shelter from haze':			{ 'reps_q13':  0 },
	'find source of the attacks':			{ 'reps_d3':  12 },
	'find survivors':				{ 'reps_q8':  14 },
	'find the dark elves':				{ 'reps_d1':  12 },
	'find the demonic army':			{ 'reps_d1':  12 },
	'find the druids':				{ 'reps_d4':  12 },
	'find the entrance':				{ 'reps_q8':   0 },
	'find the exit':				{ 'reps_q9':  17 },
	'find the safest path':				{ 'reps_q10': 14 },
	'find the source of corruption':		{ 'reps_d4':  12 },
	'find the woman? father':			{ 'reps_d5':  12 },
	'find troll weakness':				{ 'reps_q2':  10 },
	'find your way out':				{ 'reps_q7':  15 },
	'fire and brimstone':				{ 'reps_q7':  12 },
	'forest of ash':				{ 'reps_d4':  11 },
	'freeing arielle':				{ 'reps_q12': 10 },
	'furest hellblade':				{ 'reps_d3':  17 },
	'gain access':					{ 'reps_q10':  0 },
	'gain entry':					{ 'reps_q11':  0 },
	'gates to the undead':				{ 'reps_q6':  17 },
	'gateway':					{ 'reps_q8':  11 },
	'gather earth essence':				{ 'reps_q13':  0 },
	'gather life dust':				{ 'reps_q13':  0 },
	'gather nature essence':			{ 'reps_q13':  0 },
	'gather samples':				{ 'reps_q13':  0 },
	'gather supplies':				{ 'reps_q12':  0, 'reps_q13':  0 },
	'get information from the druid':		{ 'reps_d4':  12 },
	'get water for the druid':			{ 'reps_d4':  12 },
	'grim outlook':					{ 'reps_q9':  17 },
	'guard against attack':				{ 'reps_d5':  12 },
	'hakkal woods':					{ 'reps_q13':  0 },
	'heal arielle':					{ 'reps_q12':  0 },
	'heal wounds':					{ 'reps_q7':  20 },
	'heat the villagers':				{ 'reps_q1':   5 },
	'holy fire':					{ 'reps_d4':  11 },
	'hunt for food':				{ 'reps_q13':  0 },
	'iapetian gateway':				{ 'reps_q15': 0 },
	'impending battle':				{ 'reps_q10': 10 },
	'infiltrate trakan':				{ 'reps_q12':  0 },
	'inspire soldiers':				{ 'reps_q12':  0 },
	'interrogate the prisoners':			{ 'reps_q9':  17 },
	'investigate temple':				{ 'reps_q13':  0 },
	'investigate the gateway':			{ 'reps_q8':   0 },
	'ironfist dwarves':				{ 'reps_q10': 10 },
	'join up with artanis':				{ 'reps_d1':  12 },
	'judgement stronghold':				{ 'reps_q8':  11 },
	'juliean desert':				{ 'reps_q11': 12 },
	'karth':					{ 'reps_q14':  14 },
	'kelp forest':					{ 'reps_a1':  20 },
	'kill diseased treants':			{ 'reps_q13':  0 },
	'kill gildamesh':				{ 'reps_q3':  34 },
	'kill shades':					{ 'reps_q12':  0 },
	'kill slimes':					{ 'reps_q13':  0 },
	'kill vampire bats':				{ 'reps_d3':  10 },
	'koralan coast town':				{ 'reps_q11': 14 },
	'koralan townspeople':				{ 'reps_q11': 10 },
	'learn about death knights':			{ 'reps_d5':  12 },
	'learn aurelius intentions':			{ 'reps_q11':  0 },
	'learn counterspell':				{ 'reps_d1':  12 },
	'learn holy fire':				{ 'reps_d4':  12 },
	'lonely journey':				{ 'reps_q15':  0 },
	'look for clues':				{ 'reps_q8':  14 },
	'lothar the ranger':				{ 'reps_q12':  9 },
	'make camp':					{ 'reps_q13':  0 },
	'marauders!':					{ 'reps_d5':   9 },
	'march into the undead lands':			{ 'reps_q6':  24 },
	'march to the unholy war':			{ 'reps_q6':  25 },
	'mausoleum of triste':				{ 'reps_q3':  17 },
	'misty hills of boralis':			{ 'reps_q3':  20 },
	'mount aretop':					{ 'reps_d2':  25 },
	'nightfall':					{ 'reps_q12':  9 },
	'nightmare':					{ 'reps_q6':  20 },
	'nighttime infiltration':			{ 'reps_q14':  13 },
	'outmaneuver lothar':				{ 'reps_q12':  0 },
	'outpost entrance':				{ 'reps_q11': 12 },
	'path to heaven':				{ 'reps_q8':  11 },
	'persuade terra':				{ 'reps_q12':  0 },
	'pick up the orc trail':			{ 'reps_q1':   6 },
	'plan the attack':				{ 'reps_d5':  12 },
	'portal of atlantis':				{ 'reps_a1':  20 },
	'power of excalibur':				{ 'reps_q8':  11 },
	'prepare for ambush':				{ 'reps_q1':   6 },
	'prepare for battle':				{ 'reps_d2':  12, 'reps_q5':  21 },
	'prepare for dark':				{ 'reps_q13':  0 },
	'prepare for the trials':			{ 'reps_q9':  17 },
	'prepare tactics':				{ 'reps_q10':  0 },
	'prepare troops':				{ 'reps_q10':  0 },
	'prevent dragon? escape':			{ 'reps_d2':  12 },
	'protect temple from raiders':			{ 'reps_q2':  40 },
	'purge forest of evil':				{ 'reps_q2':  27 },
	'pursuing orcs':				{ 'reps_q1':  13 },
	'put out the fires':				{ 'reps_d2':   8 },
	'question dark elf prisoners':			{ 'reps_d1':  12 },
	'question the druidic wolf':			{ 'reps_d4':  12 },
	'question townspeople':				{ 'reps_q11': 17 },
	'question vulcan':				{ 'reps_q8':   0 },
	'ready defenses':				{ 'reps_q12':  0 },
	'ready soldiers':				{ 'reps_q12':  0 },
	'ready the horses':				{ 'reps_q1':   6 },
	'reason with guards':				{ 'reps_q12':  0 },
	'recover the key':				{ 'reps_q9':  17 },
	'recruit allies':				{ 'reps_q10':  0 },
	'recruit elekin to join you':			{ 'reps_d2':   9 },
	'recruit furest to join you':			{ 'reps_d3':  12 },
	'repair bridge':				{ 'reps_q13':  0 },
	'repel gargoyle raid':				{ 'reps_q4':  14 },
	'request council':				{ 'reps_q10':  0 },
	'request entrance':				{ 'reps_q12':  0 },
	'rescue survivors':				{ 'reps_q8':  14 },
	'resist the lost souls':			{ 'reps_q5':  25 },
	'retrieve dragon slayer':			{ 'reps_d2':  10 },
	'retrieve the jeweled heart':			{ 'reps_d5':  12 },
	'ride to aretop':				{ 'reps_d2':  12 },
	'ride towards the palace':			{ 'reps_q9':  17 },
	'river of lava':				{ 'reps_q10': 10 },
	'river of light':				{ 'reps_q1':  10, 'reps_q14':  13 },
	'save dying creatures':				{ 'reps_q12':  0 },
	'save lost souls':				{ 'reps_q5':  24 },
	'save stranded soldiers':			{ 'reps_q10':  0 },
	'seek out elekin':				{ 'reps_d2':   9 },
	'seek out furest hellblade':			{ 'reps_d3':  12 },
	'seek out jeweled heart':			{ 'reps_d5':  12 },
	'shield of the stars':				{ 'reps_d3':  20 },
	'siege on the capital':				{ 'reps_q14':  10 },
	'signs of the scourge':				{ 'reps_q13':  0 },
	'slaughter orcs':				{ 'reps_q3':  15 },
	'slay cave bats':				{ 'reps_d2':  10 },
	'slay the black dragons':			{ 'reps_q5':  32 },
	'slay the guardian':				{ 'reps_q9':  17 },
	'slay the sea serpent':				{ 'reps_d5':  12 },
	'sneak attack on dragon':			{ 'reps_d2':  12 },
	'sneak into the city':				{ 'reps_q8':  14 },
	'sneak up on orcs':				{ 'reps_q1':   7 },
	'soldiers of the black lion':			{ 'reps_d5':  10 },
	'spire of death':				{ 'reps_q5':  20 },
	'sporeguard forest':				{ 'reps_q12': 10 },
	'sporeguard revisited':				{ 'reps_q13':  0 },
	'spring surprise attack':			{ 'reps_d5':  12 },
	'stall for time':				{ 'reps_q12':  0 },
	'stop the wolf from channeling':		{ 'reps_d4':  12 },
	'storm the castle':				{ 'reps_d5':  12 },
	'storm the ivory palace':			{ 'reps_q9':  17 },
	'sulfurous springs':				{ 'reps_q11': 10 },
	'summon legendary defenders':			{ 'reps_q6':  25 },
	'surround rebels':				{ 'reps_q10':  0 },
	'survey area':					{ 'reps_q13':  0 },
	'survey battlefield':				{ 'reps_q10':  0 },
	'survey the surroundings':			{ 'reps_q8':  14 },
	'survive the storm':				{ 'reps_q11':  0 },
	'survive troll ambush':				{ 'reps_q2':  10 },
	'surviving the onslaught':			{ 'reps_q9':  17 },
	'taubourne falls':				{ 'reps_q13':  0 },
	'tenvir summit':				{ 'reps_q13':  0 },
	'tezzari village':				{ 'reps_q12': 12 },
	'the belly of the demon':			{ 'reps_q5':  16 },
	'the betrayed lands':				{ 'reps_q4':  16 },
	'the black portal':				{ 'reps_d1':  15 },
	'the cave of wonder':				{ 'reps_q3':  20 },
	'the citadel':					{ 'reps_q15':  0 },
	'the crystal caverns':				{ 'reps_d2':  11 },
	'the darkening skies':				{ 'reps_q9':  17 },
	'the dead forests':				{ 'reps_q12': 11 },
	'the deep':					{ 'reps_a1':  20 },
	'the elven sorceress':				{ 'reps_d1':  11 },
	'the fallen druids':				{ 'reps_d4':  12 },
	'the final march':				{ 'reps_q15':  0 },
	'the final stretch':				{ 'reps_q9':  17 },
	'the forbidden forest':				{ 'reps_q2':  20 },
	'the forbidden ritual':				{ 'reps_q5':  20 },
	'the gateway':					{ 'reps_q12': 10 },
	'the green haze':				{ 'reps_q13':  0 },
	'the hidden lair':				{ 'reps_d1':  13 },
	'the hollowing moon':				{ 'reps_q6':  17 },
	'the infestation of winterguard':		{ 'reps_d3':  10 },
	'the invasion':					{ 'reps_q8':  11 },
	'the keep of corelan':				{ 'reps_q3':  17 },
	'the keep of isles':				{ 'reps_q4':  16 },
	'the kingdom of alarean':			{ 'reps_d5':  15 },
	'the last gateway':				{ 'reps_q9':  17 },
	"the lich ne'zeal":				{ 'reps_d3':  13 },
	"the lich's keep":				{ 'reps_d3':  15 },
	'the life altar':				{ 'reps_q13':  0 },
	'the life temple':				{ 'reps_q13':  0 },
	'the living gates':				{ 'reps_q5':  20 },
	'the long path':				{ 'reps_q7':  12 },
	'the outlook':					{ 'reps_q15':  0 },
	'the peaks of draneth':				{ 'reps_d5':  21 },
	'the poison source':				{ 'reps_q11':  0 },
	'the rebellion':				{ 'reps_q10': 10 },
	'the redeemer':					{ 'reps_q15': 0 },
	'the return home':				{ 'reps_q8':  11 },
	'the return of the dragon':			{ 'reps_d2':   9 },
	'the ride south':				{ 'reps_q8':   0 },
	'the river of blood':				{ 'reps_q5':  20 },
	'the scourge':					{ 'reps_q12':  8 },
	'the sea temple':				{ 'reps_a1':  20 },
	'the search for clues':				{ 'reps_d1':  12 },
	'the second temple of water':			{ 'reps_q4':  25 },
	'the smouldering pit':				{ 'reps_q4':  40 },
	'the source of darkness':			{ 'reps_d1':  20 },
	'the source of magic':				{ 'reps_d4':  15 },
	'the southern entrance':			{ 'reps_q12':  9 },
	'the stairs of terra':				{ 'reps_q2':  10 },
	'the stone lake':				{ 'reps_q1':  12 },
	'the sunken city':				{ 'reps_d5':  17 },
	'the tree of life':				{ 'reps_d4':  21 },
	'the vanguard of destruction':			{ 'reps_d1':  21 },
	'the water temple':				{ 'reps_q2':  17 },
	'til morning comes':				{ 'reps_q12': 11 },
	'towards rodinia':				{ 'reps_q15':  0 },
	'track down soldiers':				{ 'reps_d5':  12 },
	'track lothar':					{ 'reps_q12':  0 },
	'track sylvana':				{ 'reps_d1':  12 },
	'train with ambrosia':				{ 'reps_d1':  12 },
	'train with aurora':				{ 'reps_d4':  12 },
	'trakan prison':				{ 'reps_q12':  9 },
	'trakan sky bridge':				{ 'reps_q12': 11 },
	'trakan village':				{ 'reps_q12':  7 },
	'transport to iapetus':				{ 'reps_q15':  0 },
	'travel to the tree of life':			{ 'reps_d4':  12 },
	'travel to winterguard':			{ 'reps_d3':  12 },
	'triste':					{ 'reps_q3':  20 },
	'undead crusade':				{ 'reps_q6':  17 },
	'underground path':				{ 'reps_q12':  8 },
	'underwater ruins':				{ 'reps_a1':  20 },
	'unholy war':					{ 'reps_q6':  20 },
	'unlikely alliance':				{ 'reps_q14':  10 },
	'unlock altar':					{ 'reps_q13':  0 },
	'use artifact relic':				{ 'reps_q13':  0 },
	'use battering ram':				{ 'reps_q11':  0 },
	'vengeance':					{ 'reps_d2':  17 },
	'vesuv bridge':					{ 'reps_q10': 10 },
	'vesuv lookout':				{ 'reps_q2':  17 },
	'visit the blacksmith':				{ 'reps_q1':  24 },
	'vulcans secret':				{ 'reps_q8':  11 },
	'watch the skies':				{ 'reps_d3':  12 }
};
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Bank, Battle, Generals, LevelUp, Player, Quest, Land,
	APP, APPID, warn, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser, console,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime
*/
/********** Worker.Town **********
* Sorts and auto-buys all town units (not property)
*/
var Town = new Worker('Town');
Town.temp = null;

Town.settings = {
	taint:true
};

Town.defaults['castle_age'] = {
	pages:'town_soldiers town_blacksmith town_magic keep_stats'
};

Town.option = {
	general:true,
	quest_buy:true,
	number:'None',
	maxcost:'$0',
	units:'Best for Both',
	sell:false,
	upkeep:20
};

Town.runtime = {
	best_buy:null,
	best_sell:null,
	buy:0,
	sell:0,
	cost:0
};

Town.display = [
{
	id:'general',
	label:'Use Best General',
	checkbox:true
},{
	id:'quest_buy',
	label:'Buy Quest Items',
	checkbox:true
},{
	id:'generals_buy',
	label:'Buy Generals Items',
	checkbox:true
},{
	id:'number',
	label:'Buy Number',
	select:['None', 'Minimum', 'Army', 'Army+', 'Max Army'],
	help:'Minimum will only buy items need for quests if enabled.'
		+ ' Army will buy up to your army size (modified by some generals).'
		+ ' Army+ is like Army on purchases and Max Army on sales.'
		+ ' Max Army will buy up to 541 regardless of army size.'
},{
	id:'sell',
	require:'number!="None" && number!="Minimum"',
	label:'Sell Surplus',
	checkbox:true,
	help:'Only keep the best items for selected sets.'
},{
	advanced:true,
	id:'units',
	require:'number!="None"',
	label:'Set Type',
	select:['Best Offense', 'Best Defense', 'Best for Both'],
	help:'Select type of sets to keep. Best for Both will keep a Best Offense and a Best Defense set.'
},{
	advanced:true,
	id:'maxcost',
	require:'number!="None"',
	label:'Maximum Item Cost',
	select:['$0','$10k','$100k','$1m','$10m','$100m','$1b','$10b','$100b','$1t','$10t','$100t','INCR'],
	help:'Will buy best item based on Set Type with single item cost below selected value. INCR will start at $10k and work towards max buying at each level (WARNING, not cost effective!)'
},{
	advanced:true,
	require:'number!="None"',
	id:'upkeep',
	label:'Max Upkeep',
	number:true,
	min:0,
	max:100,
	after:'%',
	help:'Enter maximum Total Upkeep in % of Total Income'
}
];

/*
Town.blacksmith = {
	Weapon: /axe|blade|bow|cleaver|cudgel|dagger|edge|grinder|halberd|lance|mace|morningstar|rod|saber|scepter|spear|staff|stave|sword |sword$|talon|trident|wand|^Avenger$|Celestas Devotion|Crystal Rod|Daedalus|Deliverance|Dragonbane|Excalibur|Holy Avenger|Incarnation|Ironhart's Might|Judgement|Justice|Lightbringer|Oathkeeper|Onslaught|Punisher|Soulforge/i,
	Shield:	/aegis|buckler|shield|tome|Defender|Dragon Scale|Frost Tear Dagger|Harmony|Sword of Redemption|Terra's Guard|The Dreadnought|Purgatory|Zenarean Crest/i,
	Helmet:	/cowl|crown|helm|horns|mask|veil|Virtue of Fortitude/i,
	Gloves:	/gauntlet|glove|hand|bracer|fist|Slayer's Embrace|Soul Crusher|Soul Eater|Virtue of Temperance/i,
	Armor:	/armor|belt|chainmail|cloak|epaulets|gear|garb|pauldrons|plate|raiments|robe|tunic|vestment|Faerie Wings/i,
	Amulet:	/amulet|bauble|charm|crystal|eye|flask|insignia|jewel|lantern|memento|necklace|orb|pendant|shard|signet|soul|talisman|trinket|Heart of Elos|Mark of the Empire|Paladin's Oath|Poseidons Horn| Ring|Ring of|Ruby Ore|Terra's Heart|Thawing Star|Transcendence/i
};
*/

  // I know, I know, really verbose, but don't gripe unless it doesn't match
  // better than the short list above.  This is based on a generated list that
  // ensures the list has no outstanding mismatches or conflicts given all
  // known items as of a given date.

  // as of Tue Apr 12 11:25:28 2011 UTC
Town.blacksmith = {
      // Feral Staff is a multi-pass match:
      //   shield.11{Feral Staff}, weapon.5{Staff}
      // Frost Tear Dagger is a multi-pass match:
      //   shield.17{Frost Tear Dagger}, weapon.6{Dagger}
      // Ice Dagger is a multi-pass match:
      //   shield.10{Ice Dagger}, weapon.6{Dagger}
      // Sword of Redemption is a multi-pass match:
      //   shield.19{Sword of Redemption}, weapon.5{Sword}
    Weapon: new RegExp('(' +
      '\\baxe\\b' +				// 13
      '|\\bblades?\\b' +		// 27+1
      '|\\bbow\\b' +			// 8
      '|\\bclaw\\b' +			// 1
      '|\\bcleaver\\b' +		// 1
      '|\\bcudgel\\b' +			// 1
      '|\\bdagger\\b' +			// 8 (mismatches 2)
      '|\\bedge\\b' +			// 1
      '|\\bgreatsword\\b' +		// 2
      '|\\bgrinder\\b' +		// 1
      '|\\bhalberd\\b' +		// 1
      '|\\bhammer\\b' +			// 1
      '|\\bhellblade\\b' +		// 1
      '|\\bkatara\\b' +			// 1
      '|\\bkingblade\\b' +		// 1
      '|\\blance\\b' +			// 2
      '|\\blongsword\\b' +		// 1
      '|\\bmace\\b' +			// 6
      '|\\bmorningstar\\b' +	// 1
      '|\\bpike\\b' +			// 1
      '|\\brapier\\b' +			// 1
      '|\\brod\\b' +			// 2
      '|\\bsaber\\b' +			// 4
      '|\\bscepter\\b' +		// 1
      '|\\bshortsword\\b' +		// 1
      '|\\bspear\\b' +			// 3
      '|\\bstaff\\b' +			// 9 (mismatches 1)
      '|\\bstaves\\b' +			// 1
      '|\\bsword\\b' +			// 17 (mismatches 1)
      '|\\btalon\\b' +			// 1
      '|\\btrident\\b' +		// 2
      '|\\bwand\\b' +			// 3
      '|^Arachnid Slayer$' +
      '|^Atonement$' +
      '|^Avenger$' +
      '|^Bloodblade$' +
      '|^Bonecrusher$' +
      '|^Celestas Devotion$' +
      '|^Daedalus$' +
      '|^Death Dealer$' +
      '|^Deathbellow$' +
      '|^Deliverance$' +
      '|^Draganblade$' +
      '|^Dragonbane$' +
      '|^Excalibur$' +
      '|^Exsanguinator$' +
      '|^Heart of the Woods$' +
      '|^Holy Avenger$' +
      '|^Incarnation$' +
      '|^Inoculator$' +
      "|^Ironhart's Might$" +
      '|^Judgement$' +
      '|^Justice$' +
      '|^Lifebane$' +
      '|^Lightbringer$' +
      '|^Lion Fang$' +
      '|^Moonclaw$' +
      '|^Oathkeeper$' +
      "|^Oberon's Might$" +
      '|^Onslaught$' +
      '|^Path of the Tower$' +
      '|^Punisher$' +
      '|^Righteousness$' +
      '|^Scytheblade$' +
      '|^Soul Siphon$' +
      '|^Soulforge$' +
      '|^Stormcrusher$' +
      '|^Syrens Call$' +
      '|^The Disemboweler$' +
      '|^The Galvanizer$' +
      '|^The Reckoning$' +
      '|^Virtue of Justice$' +
      ')', 'i'),
    Shield: new RegExp('(' +
      '\\baegis\\b' +			// 4
      '|\\bbuckler\\b' +		// 1
      '|\\bdeathshield\\b' +	// 1
      '|\\bdefender\\b' +		// 5
      '|\\bprotector\\b' +		// 1
      '|\\bshield\\b' +			// 22
      '|\\btome\\b' +			// 4
      '|^Absolution$' +
      '|^Crest of the Griffin$' +
      '|^Dragon Scale$' +
      '|^Feral Staff$' +
      '|^Frost Tear Dagger$' +
      '|^Harmony$' +
      '|^Heart of the Pride$' +
      '|^Hour Glass$' +
      '|^Ice Dagger$' +
      '|^Illvasan Crest$' +
 	  '|^Impenetrable Ice$' +
      '|^Purgatory$' +
      '|^Serenes Arrow$' +
      '|^Sword of Redemption$' +
      "|^Terra's Guard$" +
      '|^The Dreadnought$' +
      '|^Zenarean Crest$' +
      ')', 'i'),
    Armor: new RegExp('(' +
      '\\barmguard\\b' +		// 1
      '|\\barmor\\b' +			// 22
      '|\\bbattlegarb\\b' +		// 1
      '|\\bbattlegear\\b' +		// 4
      '|\\bbelt\\b' +			// 1
      '|\\bcarapace\\b' +		// 1
      '|\\bchainmail\\b' +		// 2
      '|\\bcloak\\b' +			// 7
      '|\\bepaulets\\b' +		// 1
      '|\\bgarb\\b' +			// 1
      '|\\bpauldrons\\b' +		// 1
      '|\\bplate\\b' +			// 32
      '|\\bplatemail\\b' +		// 2
      '|\\braiments\\b' +		// 5
      '|\\brobes?\\b' +			// 3+7
      '|\\btunic\\b' +			// 1
      '|\\bvestment\\b' +		// 1
      '|^Braving the Storm$' +
      '|^Castle Rampart$' +
      '|^Death Ward$' +
      '|^Deathrune Hellplate$' +
      '|^Faerie Wings$' +
      '|^Innocence$' +
      '|^Plated Earth$' +
      ')', 'i'),
    Helmet: new RegExp('(' +
      '\\bcowl\\b' +			// 1
      '|\\bcrown\\b' +			// 13
      '|\\bdoomhelm\\b' +		// 1
      '|\\bhelm\\b' +			// 38
      '|\\bhelmet\\b' +			// 2
      '|\\bhorns\\b' +			// 1
      '|\\bmane\\b' +			// 1
      '|\\bmask\\b' +			// 2
      '|\\btiara\\b' +			// 1
      '|\\bveil\\b' +			// 1
      '|^Virtue of Fortitude$' +
      ')', 'i'),
    Amulet: new RegExp('(' +
      '\\bamulet\\b' +			// 18
      '|\\bband\\b' +			// 2
      '|\\bbauble\\b' +			// 1
      '|\\bcharm\\b' +			// 2
      '|\\bcross\\b' +			// 1
      '|\\bearrings\\b' +		// 1
      '|\\beye\\b' +			// 3
      '|\\bflask\\b' +			// 1
      '|\\bheirloom\\b' +		// 1
      '|\\binsignia\\b' +		// 3
      '|\\bjewel\\b' +			// 3
      '|\\blantern\\b' +		// 1
      '|\\blocket\\b' +			// 2
      '|\\bmark\\b' +			// 1
      '|\\bmedallion\\b' +		// 1
      '|\\bmemento\\b' +		// 1
      '|\\bnecklace\\b' +		// 4
      '|\\bpendant\\b' +		// 11
      '|\\brelic\\b' +			// 1
      '|\\bring\\b' +			// 8
      '|\\bruby\\b' +			// 1
      '|\\bseal\\b' +			// 4
      '|\\bshard\\b' +			// 6
      '|\\bsignet\\b' +			// 8
      '|\\bsunstone\\b' +		// 1
      '|\\btalisman\\b' +		// 1
      '|\\btrinket\\b' +		// 2
      '|^Air Orb$' +
      '|^Blue Lotus Petal$' +
      '|^Crystal of Lament$' +
      '|^Dragon Ashes$' +
      '|^Earth Orb$' +
      '|^Force of Nature$' +
      '|^Gold Bar$' +
      '|^Heart of Elos$' +
      '|^Ice Orb$' +
      "|^Keira's Soul$" +
      '|^Lava Orb$' +
      '|^Magic Mushrooms$' +
      "|^Paladin's Oath$" +
      '|^Poseidons Horn$' +
      '|^Shadowmoon$' +
      '|^Silver Bar$' +
      '|^Soul Catcher$' +
      '|^Temptations Lure$' +
      "|^Terra's Heart$" +
      '|^Thawing Star$' +
      '|^Tooth of Gehenna$' +
      '|^Transcendence$' +
      '|^Tribal Crest$' +
      '|^Vincents Soul$' +
      ')', 'i'),
    Gloves: new RegExp('(' +
      '\\bbracer\\b' +			// 1
      '|\\bfists?\\b' +			// 1+1
      '|\\bgauntlets?\\b' +		// 10+4
      '|\\bgloves?\\b' +		// 2+2
      '|\\bhandguards\\b' +		// 1
      '|\\bhands?\\b' +			// 5+3
      '|^Natures Reach$' +
      '|^Poisons Touch$' +
      "|^Slayer's Embrace$" +
      '|^Soul Crusher$' +
      '|^Soul Eater$' +
      '|^Stormbinder$' +
      '|^Stormbringer$' +
      '|^Tempered Steel$' +
      '|^Virtue of Temperance$' +
      ')', 'i')
};

Town.setup = function() {
	Resources.use('Gold');
};

Town.init = function() {
	var now = Date.now(), i;

	this._watch(Player, 'data.worth');			// cash available
	this._watch(Player, 'data.army');			// current army size
	this._watch(Player, 'data.armymax');		// capped army size (player)
	this._watch(Generals, 'runtime.armymax');	// capped army size (generals)
	this._watch(Generals, 'data');				// general stats
	this._watch(Land, 'option.save_ahead');		// land reservation flag
	this._watch(Land, 'runtime.save_amount');	// land reservation amount
	this._watch(Page, 'data.town_soldiers');	// page freshness
	this._watch(Page, 'data.town_blacksmith');	// page freshness
	this._watch(Page, 'data.town_magic');		// page freshness
	this.set('runtime.cost_incr', 4);

	// map old local stale page variables to Page values
	if (!isUndefined(i = this.runtime.soldiers)) {
		if (isNumber(i) && i) {
			Page.setStale('town_soldiers', now);
		}
		this.set('runtime.soldiers');
	}
	if (!isUndefined(i = this.runtime.blacksmith)) {
		if (isNumber(i) && i) {
			Page.setStale('town_blacksmith', now);
		}
		this.set('runtime.blacksmith');
	}
	if (!isUndefined(i = this.runtime.magic)) {
		if (isNumber(i) && i) {
			Page.setStale('town_magic', now);
		}
		this.set('runtime.magic');
	}
};

  // .layout td >div:contains("Owned Items:")
  // .layout td >div div[style*="town_unit_bar."]
  // .layout td >div div[style*="town_unit_bar_owned."]
Town.page = function(page, change) {
	var i, el, tmp, img, filename, name, count, now = Date.now(), self = this, modify = false, tmp;
	if (page === 'keep_stats') {
		// Only when it's our own keep and not someone elses
		if ($('.keep_attribute_section').length) {
			tmp = $('.statUnit', $('.statsT2 .statsTTitle:regex(^\\s*UNITS\\s*$)').parent());
			for (i=0; i<tmp.length; i++) {
				el = tmp[i];
				img = $('a img[src]', el);
				filename = ($(img).attr('src') || '').filepart();
				name = this.qualify(($(img).attr('title') || $(img).attr('alt') || '').trim(), filename);
				count = $(el).text().regex(/\bX\s*(\d+)\b/im);
				if (!this.data[name]) {
					//log(LOG_WARN, 'missing unit: ' + name + ' (' + filename + ')');
					Page.setStale('town_soldiers', now);
					break;
				} else if (isNumber(count)) {
					this.set(['data', name, 'own'], count);
				}
			}

			tmp = $('.statsT2 .statsTTitle:regex(^\\s*ITEMS\\s*$)');
			tmp = $('.statUnit', $('.statsT2 .statsTTitle:regex(^\\s*ITEMS\\s*$)').parent());
			for (i=0; i<tmp.length; i++) {
				el = tmp[i];
				img = $('a img[src]', el);
				filename = ($(img).attr('src') || '').filepart();
				name = this.qualify(($(img).attr('title') || $(img).attr('alt') || '').trim(), filename); // names aren't unique for items
				count = $(el).text().regex(/\bX\s*(\d+)\b/im);
				if (!this.data[name] || this.data[name].img !== filename) {
					//log(LOG_WARN, 'missing item: ' + name + ' (' + i + ')' + (this.data[name] ? ' img[' + this.data[name].img + ']' : ''));
					Page.setStale('town_blacksmith', now);
					Page.setStale('town_magic', now);
					break;
				} else if (isNumber(count)) {
					this.set(['data', name, 'own'], count);
				}
			}
		}
	} else if (change && page === 'town_blacksmith') {
		$('div[style*="town_unit_bar."],div[style*="town_unit_bar_owned."]').each(function(i,el) {
			var name = ($('div img[alt]', el).attr('alt') || '').trim(),
				icon = ($('div img[src]', el).attr('src') || '').filepart();
			name = self.qualify(name, icon);
			if (self.data[name] && self.data[name].type) {
				$('div strong:first', el).parent().append('<br>'+self.data[name].type);
			}
		});
	} else if (!change && (page === 'town_soldiers' || page === 'town_blacksmith' || page === 'town_magic')) {
		var unit = this.data, purge = {}, changes = 0, i, j, cost_adj = 1;
		for (i in unit) {
			if (unit[i].page === page.substr(5)) {
				purge[i] = true;
			}
		}
		// undo cost reduction general values on the magic page
		if (page === 'town_magic' && (i = Generals.get(Player.get('general')))) {
			if (i.stats && isNumber(j = i.stats.cost)) {
				cost_adj = 100 / (100 - j);
			}
		}
		$('div[style*="town_unit_bar."],div[style*="town_unit_bar_owned."]').each(function(a,el) {
			try {
				var i, j, type, match, maxlen = 0,
					name = ($('div img[alt]', el).attr('alt') || '').trim(),
					icon = ($('div img[src]', el).attr('src') || '').filepart(),
					cost = parseInt(($('div strong.gold', el).text() || '').replace(/\D/g, '') || 0, 10),
					own = ($('div div:contains("Owned:")', el).text() || '').regex(/\bOwned:\s*(\d+)\b/i) || 0,
					atk = ($('div div div:contains("Attack")', el).text() || '').regex(/\b(\d+)\s+Attack\b/) || 0,
					def = ($('div div div:contains("Defense")', el).text() || '').regex(/\b(\d+)\s+Defense\b/i) || 0,
					upkeep = parseInt(($('div div:contains("Upkeep:") span.negative', el).text() || '').replace(/\D/g, '') || 0, 10);
				self._transaction(); // BEGIN TRANSACTION
				name = self.qualify(name, icon);
				delete purge[name];
				self.set(['data',name,'page'], page.substr(5));
				self.set(['data',name,'img'], icon);
				self.set(['data',name,'own'], own);
				Resources.add('_'+name, own, true);
				self.set(['data',name,'att'], atk);
				self.set(['data',name,'def'], def);
				self.set(['data',name,'tot_att'], atk + (0.7 * def));
				self.set(['data',name,'tot_def'], def + (0.7 * atk));
				self.set(['data',name,'cost'], cost ? Math.round(cost_adj * cost) : undefined);
				self.set(['data',name,'upkeep'], upkeep ? upkeep : undefined);
//				self.set(['data',name,'id'], null);
				self.set(['data',name,'buy']);
				if ((tmp = $('form[id*="itemBuy_"]', el)).length) {
					self.set(['data',name,'id'], tmp.attr('id').regex(/itemBuy_(\d+)/i), 'number');
					$('select[name="amount"] option', tmp).each(function(b, el) {
						self.push(['data',name,'buy'], parseInt($(el).val(), 10), 'number')
					});
				}
				self.set(['data',name,'sell']);
				if ((tmp = $('form[id*="itemSell_"]', el)).length) {
					self.set(['data',name,'id'], tmp.attr('id').regex(/itemSell_(\d+)/i), 'number');
					$('select[name="amount"] option', tmp).each(function(b, el) {
						self.push(['data',name,'sell'], parseInt($(el).val(), 10), 'number')
					});
				}
				if (page === 'town_blacksmith') {
					for (i in self.blacksmith) {
						if ((match = name.match(self.blacksmith[i]))) {
							if (match[1].length > maxlen) {
								type = i;
								maxlen = match[1].length;
							}
						}
					}
					self.set(['data',name,'type'], type);
				}
				self._transaction(true); // COMMIT TRANSACTION
				changes++; // this must come after the transaction
			} catch(e) {
				self._transaction(false); // ROLLBACK TRANSACTION on any error
				log(e, e.name + ' in ' + this.name + '.page(' + page + ', ' + change + '): ' + e.message);
			}
		});

		// if nothing at all changed above, something went wrong on the page download
		if (changes) {
			for (i in purge) {
				if (purge[i]) {
					log(LOG_WARN, 'Purge: ' + i);
					this.set(['data',i]);
					changes++;
				}
			}
		}

		// trigger the item type caption pass
		if (page === 'town_blacksmith') {
		    modify = true;
		}
	}

	return modify;
};

Town.getInvade = function(army, suffix) {
	var att = 0, def = 0, data = this.get('data');
	if (!suffix) { suffix = ''; }
	att += getAttDef(data, function(list,i,units){if (units[i].page==='soldiers'){list.push(i);}}, 'att', army, 'invade', suffix);
	def += getAttDef(data, null, 'def', army, 'invade', suffix);
	att += getAttDef(data, function(list,i,units){if (units[i].type && units[i].type !== 'Weapon'){list.push(i);}}, 'att', army, 'invade', suffix);
	def += getAttDef(data, null, 'def', army, 'invade', suffix);
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Weapon'){list.push(i);}}, 'att', army, 'invade', suffix);
	def += getAttDef(data, null, 'def', army, 'invade', suffix);
	att += getAttDef(data, function(list,i,units){if (units[i].page === 'magic'){list.push(i);}}, 'att', army, 'invade', suffix);
	def += getAttDef(data, null, 'def', army, 'invade', suffix);
	return {attack:att, defend:def};
};

Town.getDuel = function() {
	var att = 0, def = 0, data = this.get('data');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Weapon'){list.push(i);}}, 'att', 1, 'duel');
	def += getAttDef(data, null, 'def', 1, 'duel');
	att += getAttDef(data, function(list,i,units){if (units[i].page === 'magic'){list.push(i);}}, 'att', 1, 'duel');
	def += getAttDef(data, null, 'def', 1, 'duel');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Shield'){list.push(i);}}, 'att', 1, 'duel');
	def += getAttDef(data, null, 'def', 1, 'duel');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Helmet'){list.push(i);}}, 'att', 1, 'duel');
	def += getAttDef(data, null, 'def', 1, 'duel');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Gloves'){list.push(i);}}, 'att', 1, 'duel');
	def += getAttDef(data, null, 'def', 1, 'duel');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Armor'){list.push(i);}}, 'att', 1, 'duel');
	def += getAttDef(data, null, 'def', 1, 'duel');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Amulet'){list.push(i);}}, 'att', 1, 'duel');
	def += getAttDef(data, null, 'def', 1, 'duel');
	return {attack:att, defend:def};
};

Town.getWar = function() {
	var att = 0, def = 0, data = this.get('data');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Weapon'){list.push(i);}}, 'att', -7, 'war');
	def += getAttDef(data, null, 'def', -7, 'war');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Shield'){list.push(i);}}, 'att', -7, 'war');
	def += getAttDef(data, null, 'def', -7, 'war');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Armor'){list.push(i);}}, 'att', -7, 'war');
	def += getAttDef(data, null, 'def', -7, 'war');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Helmet'){list.push(i);}}, 'att', -7, 'war');
	def += getAttDef(data, null, 'def', -7, 'war');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Amulet'){list.push(i);}}, 'att', -7, 'war');
	def += getAttDef(data, null, 'def', -7, 'war');
	att += getAttDef(data, function(list,i,units){if (units[i].type === 'Gloves'){list.push(i);}}, 'att', -7, 'war');
	def += getAttDef(data, null, 'def', -7, 'war');
	att += getAttDef(data, function(list,i,units){if (units[i].page === 'magic'){list.push(i);}}, 'att', -7, 'war');
	def += getAttDef(data, null, 'def', -7, 'war');
	return {attack:att, defend:def};
};

Town.update = function(event, events) {
	var now = Date.now(), i, j, k, p, u, need, want, have, best_buy = null, buy_pref = 0, best_sell = null, sell_pref = 0, best_quest = false, buy = 0, sell = 0, cost, upkeep,
		data = this.data,
		maxincome = Player.get('maxincome', 1, 'number'), // used as a divisor
		upkeep = Player.get('upkeep', 0, 'number'),
		// largest possible army, including bonus generals
		armymax = Math.max(541, Generals.get('runtime.armymax', 1, 'number')),
		// our army size, capped at the largest possible army size above
		army = Math.min(armymax, Math.max(Generals.get('runtime.army', 1, 'number'), Player.get('armymax', 1, 'number'))),
		max_buy = 0, max_sell = 0, resource, fixed_cost, max_cost, keep,
		land_buffer = (Land.get('option.save_ahead') && Land.get('runtime.save_amount', 0, 'number')) || 0,
		incr = this.runtime.cost_incr || 4,
		info_str, buy_str = '', sell_str = '', net_cost = 0, net_upkeep = 0;

	fixed_cost = ({
	    '$0':   0,
		'$10k': 1e4,
		'$100k':1e5,
		'$1m':  1e6,
		'$10m': 1e7,
		'$100m':1e8,
		'$1b':  1e9,
		'$10b': 1e10,
		'$100b':1e11,
		'$1t':  1e12,
		'$10t': 1e13,
		'$100t':1e14,
		'INCR': Math.pow(10,incr)
	})[this.option.maxcost] || 0;

	switch (this.option.number) {
		case 'Army':
			max_buy = max_sell = army;
			break;
		case 'Army+':
			max_buy = army;
			max_sell = armymax;
			break;
		case 'Max Army':
			max_buy = max_sell = armymax;
			break;
		default:
			max_buy = 0;
			max_sell = army;
			break;
	}

	// These three fill in all the data we need for buying / sellings items
	this.set(['runtime','invade'], this.getInvade(max_buy));
	this.set(['runtime','duel'], this.getDuel());
	this.set(['runtime','war'], this.getWar());

	// Set up a keep set for future army sizes
	keep = {};
	if (army < max_sell) {
		this.getInvade(max_sell, max_sell.toString());
		i = 'invade' + max_sell + '_att';
		j = 'invade' + max_sell + '_def';
		for (u in data) {
			if ((p = Resources.get(['data','_'+u]))) {
				need = 0;
				if (this.option.units !== 'Best Defense') {
					need = Math.max(need, Math.min(max_sell, Math.max(p[i] || 0, p.duel_att || 0, p.war_att || 0)));
				}
				if (this.option.units !== 'Best Offense') {
					need = Math.max(need, Math.min(max_sell, Math.max(p[j] || 0, p.duel_def || 0, p.war_def || 0)));
				}
				if ((keep[u] || 0) < need && data[u].sell && data[u].sell.length) {
					keep[u] = need;
				}
				Resources.set(['data','_'+u,i]);
				Resources.set(['data','_'+u,j]);
			}
		}
	}

	// For all items / units
	// 1. parse through the list of buyable items of each type
	// 2. find the one with Resources.get(_item.invade_att) the highest (that's the number needed to hit 541 items in total)
	// 3. buy enough to get there
	// 4. profit (or something)...
	for (u in data) {
		p = Resources.get(['data','_'+u]) || {};
		want = 0;
		if (p.quest) {
			if (this.option.quest_buy) {
				want = Math.max(want, p.quest);
			}
			// add quest counts to the keep set
			if ((keep[u] || 0) < p.quest) {
				keep[u] = p.quest;
			}
		}
		if (isNumber(p.generals)) {
			if (this.option.generals_buy) {
				want = Math.max(want, p.generals);
			}
			// add general item counts to the keep set
			if ((keep[u] || 0) < (p.generals || 1e99)) {
				// Don't sell them unless we know for sure that the general can't use them all
				keep[u] = p.generals || 1e99;
			}
		}
		have = data[u].own || 0;
		need = 0;
		if (this.option.units !== 'Best Defense') {
			need = Math.range(need, Math.max(p.invade_att || 0, p.duel_att || 0, p.war_att || 0), max_buy);
		}
		if (this.option.units !== 'Best Offense') {
			need = Math.range(need, Math.max(p.invade_def || 0, p.duel_def || 0, p.war_def || 0), max_buy);
		}
		if (want > have) {// If we're buying for a quest item then we're only going to buy that item first - though possibly more than specifically needed
			max_cost = 1e99; // arbitrarily high value
			need = want;
		} else {
			max_cost = fixed_cost;
		}

//			log(LOG_WARN, 'Item: '+u+', need: '+need+', want: '+want);
		if (need > have) { // Want to buy more                                
			if (!best_quest && data[u].buy && data[u].buy.length) {
				if (data[u].cost <= max_cost && this.option.upkeep >= (((Player.get('upkeep') + ((data[u].upkeep || 0) * (i = data[u].buy.lower(need - have)))) / Player.get('maxincome')) * 100) && i > 1 && (!best_buy || need > buy)) {
//						log(LOG_WARN, 'Buy: '+need);
					best_buy = u;
					buy = have + i; // this.buy() takes an absolute value
					buy_pref = Math.max(need, want);
					if (want && want > have) {// If we're buying for a quest item then we're only going to buy that item first - though possibly more than specifically needed
						best_quest = true;
					}
				}
			}
		} else if (max_buy && this.option.sell && Math.max(need,want) < have && data[u].sell && data[u].sell.length) {// Want to sell off surplus (but never quest stuff)
			need = data[u].sell.lower(have - (i = Math.max(need,want,keep[u] || 0)));
			if (need > 0 && (!best_sell || data[u].cost > data[best_sell].cost)) {
//				log(LOG_WARN, 'Sell: '+need);
				best_sell = u;
				sell = need;
				sell_pref = i;
			}
		}
	}

	if (best_sell) {// Sell before we buy
		best_buy = null;
		buy = 0;
		upkeep = sell * (data[best_sell].upkeep || 0);
		Dashboard.status(this, (this.option._disabled ? 'Would sell ' : 'Selling ') + sell + ' &times; ' + best_sell + ' for ' + Config.makeImage('gold') + '$' + (sell * data[best_sell].cost / 2).SI() + (upkeep ? ' (Upkeep: -$' + upkeep.SI() + ')': '') + (sell_pref < data[best_sell].own ? ' [' + data[best_sell].own + '/' + sell_pref + ']': ''));
	} else if (best_buy){
		best_sell = null;
		sell = 0;
		cost = (buy - data[best_buy].own) * data[best_buy].cost;
		upkeep = (buy - data[best_buy].own) * (data[best_buy].upkeep || 0);
		if (land_buffer && !Bank.worth(land_buffer)) {
			Dashboard.status(this, '<i>Deferring to Land</i>');
		} else if (Bank.worth(cost + land_buffer)) {
			Dashboard.status(this, (this.option._disabled ? 'Would buy ' : 'Buying ') + (buy - data[best_buy].own) + ' &times; ' + best_buy + ' for ' + Config.makeImage('gold') + '$' + cost.SI() + (upkeep ? ' (Upkeep: $' + upkeep.SI() + ')' : '') + (buy_pref > data[best_buy].own ? ' [' + data[best_buy].own + '/' + buy_pref + ']' : ''));
		} else {
			Dashboard.status(this, 'Waiting for ' + Config.makeImage('gold') + '$' + (cost + land_buffer - Bank.worth()).SI() + ' to buy ' + (buy - data[best_buy].own) + ' &times; ' + best_buy + ' for ' + Config.makeImage('gold') + '$' + cost.SI());
		}
	} else {
		if (this.option.maxcost === 'INCR'){
			this.set(['runtime','cost_incr'], incr === 14 ? 4 : incr + 1);
			this.set(['runtime','check'], now + 3600000);
		} else {
			this.set(['runtime','cost_incr'], null);
			this.set(['runtime','check'], null);
		}
		Dashboard.status(this);
	}
	this.set(['runtime','best_buy'], best_buy);
	this.set(['runtime','buy'], best_buy ? data[best_buy].buy.lower(buy - data[best_buy].own) : 0);
	this.set(['runtime','best_sell'], best_sell);
	this.set(['runtime','sell'], sell);
	this.set(['runtime','cost'], best_buy ? this.runtime.buy * data[best_buy].cost : 0);

	this.set(['option','_sleep'],
	  !this.runtime.best_sell &&
	  !(this.runtime.best_buy && Bank.worth(this.runtime.cost + land_buffer)) &&
	  !Page.isStale('town_soldiers') &&
	  !Page.isStale('town_blacksmith') &&
	  !Page.isStale('town_magic'));

	return true;
};

Town.work = function(state) {
	var i;
	if (state) {
		if (this.runtime.best_sell){
			this.sell(this.runtime.best_sell, this.runtime.sell);
		} else if (this.runtime.best_buy && Bank.worth(this.runtime.cost - ((Land.get('option.save_ahead', false) && Land.get('runtime.save_amount', 0)) || 0))){
			this.buy(this.runtime.best_buy, this.runtime.buy);
		} else if (!Page.data[i = 'town_soldiers'] || !Page.data[i = 'town_blacksmith'] || !Page.data[i = 'town_magic']) {
			Page.to(i);
		} else if (!Page.stale('town_soldiers', this.get('runtime.soldiers', 0), true)) {
			this.set('runtime.soldiers', 86400);
		} else if (!Page.stale('town_blacksmith', this.get('runtime.blacksmith', 0), true)) {
			this.set('runtime.blacksmith', 86400);
		} else if (!Page.stale('town_magic', this.get('runtime.magic', 0), true)) {
			this.set('runtime.magic', 86400);
		}
	}
	return QUEUE_CONTINUE;
};

Town.buy = function(item, number) { // number is absolute including already owned
	this._unflush();
	if (!this.data[item] || !this.data[item].id || !this.data[item].buy || !this.data[item].buy.length || !Bank.worth(this.runtime.cost)) {
		return true; // We (pretend?) we own them
	}
	if (!Generals.to(this.option.general ? 'cost' : 'any') || !Bank.retrieve(this.runtime.cost) || !Page.to('town_'+this.data[item].page)) {
		return false;
	}
	var qty = this.data[item].buy.lower(number);
	var $form = $('form#'+APPID_+'itemBuy_' + this.data[item].id);
	if ($form.length) {
		log(LOG_WARN, 'Buying ' + qty + ' x ' + item + ' for $' + (qty * Town.data[item].cost).addCommas());
		$('select[name="amount"]', $form).val(qty);
		Page.click($('input[name="Buy"]', $form));
	}
	this.set(['runtime','cost_incr'], 4);
	return false;
};

Town.sell = function(item, number) { // number is absolute including already owned
	this._unflush();
	if (!this.data[item] || !this.data[item].id || !this.data[item].sell || !this.data[item].sell.length) {
		return true;
	}
	if (!Page.to('town_'+this.data[item].page)) {
		return false;
	}
	var qty = this.data[item].sell.lower(number);
	var $form = $('form#'+APPID_+'itemSell_' + this.data[item].id);
	if ($form.length) {
		log(LOG_WARN, 'Selling ' + qty + ' x ' + item + ' for $' + (qty * Town.data[item].cost / 2).addCommas());
		$('select[name="amount"]', $form).val(qty);
		Page.click($('input[name="Sell"]', $form));
	}
	this.set(['runtime','cost_incr'], 4);
	return false;
};

format_unit_str = function(name) {
    var i, j, k, n, m, p, s, str;

	if (name && ((p = Town.get(['data',name])) || (p = Generals.get(['data',name])))) {
		str = name;

		j = p.att || 0;
		k = p.def || 0;

		s = '';
		if ((m = (p.stats && p.stats.att) || 0) > 0) {
			s += j + '+' + m;
		} else if (m < 0) {
			s += j + m;
		} else {
			s += j;
		}
		j += m;

		s += '/';
		if ((n = (p.stats && p.stats.def) || 0) > 0) {
			s += k + '+' + n;
		} else if (n < 0) {
			s += k + n;
		} else {
			s += k;
		}
		k += n;

		if (m || n) {
			s = '<span style="color:green;" title="' + s + '">';
		} else {
			s = '';
		}

		str += ' (' + s + j + '/' + k + (s ? '</span>' : '') + ')';

		if ((n = p.cost)) {
			str += ' <span style="color:blue;">$' + n.SI() + '</span>';
		}

		if ((n = p.upkeep)) {
			str += ' <span style="color:red;">$' + n.SI() + '/hr</span>';
		}
	} else {
		log(LOG_WARN, '# format_unit_str(' + name + ') not found!');
    }

    return str;
};

var makeTownDash = function(list, unitfunc, x, type, name, count) { // Find total att(ack) or def(ense) value from a list of objects (with .att and .def)
	var units = [], output = [], i, o, p,
		order = {
			Weapon:1,
			Shield:2,
			Helmet:3,
			Armor:4,
			Amulet:5,
			Gloves:6,
			Magic:7
		};

	if (name) {
		output.push('<div><h3><a>' + name + '</a></h3><div>');
	}

	for (i in list) {
		unitfunc(units, i, list);
	}

	if ((o = list[units[0]])) {
		if (type === 'duel' && o.type) {
			units.sort(function(a,b) {
				return order[list[a].type] - order[list[b].type]
					|| (list[a].upkeep || 0) - (list[b].upkeep || 0)
					|| (list[a].cost || 0) - (list[b].cost || 0);
			});
		} else {
			units.sort(function(a,b) {
				return (list[b]['tot_'+x] - list[a]['tot_'+x])
					|| (list[a].upkeep || 0) - (list[b].upkeep || 0)
					|| (list[a].cost || 0) - (list[b].cost || 0);
			});
		}
	}
	for (i=0; i<(count ? count : units.length); i++) {
		p = list[units[i]];
		if ((o && o.skills) || (p.use && p.use[type+'_'+x])) {
			output.push('<div style="height:25px;margin:1px;">');
			output.push('<img src="' + imagepath + p.img + '"');
			output.push(' style="width:25px;height:25px;float:left;margin-right:4px;">');
			output.push(' ');
			if (p.use) {
				output.push(p.use[type+'_'+x]+' &times; ');
			}
			output.push(format_unit_str(units[i]));
			output.push('</div>');
		}
	}

	if (name) {
		output.push('</div></div>');
	}

	return output.join('');
};

Town.dashboard = function() {
	var lset = [], rset = [], generals = Generals.get(), best, tmp,
		fn_own = function(list, i, units) {
			if (units[i].own) {
				list.push(i);
			}
		},
		fn_page_soldiers = function(list, i, units) {
			if (units[i].page === 'soldiers') {
				list.push(i);
			}
		},
		fn_page_blacksmith = function(list, i, units) {
			if (units[i].page === 'blacksmith') {
				list.push(i);
			}
		},
		fn_page_magic = function(list, i, units) {
			if (units[i].page === 'magic') {
				list.push(i);
			}
		},
		fn_type_weapon = function(list, i, units) {
			if (units[i].type === 'Weapon') {
				list.push(i);
			}
		},
		fn_type_not_weapon = function(list, i, units) {
			if (units[i].page === 'blacksmith' && units[i].type !== 'Weapon') {
				list.push(i);
			}
		},
		fn_type_shield = function(list, i, units) {
			if (units[i].type === 'Shield') {
				list.push(i);
			}
		},
		fn_type_armor = function(list, i, units) {
			if (units[i].type === 'Armor') {
				list.push(i);
			}
		},
		fn_type_helmet = function(list, i, units) {
			if (units[i].type === 'Helmet') {
				list.push(i);
			}
		},
		fn_type_amulet = function(list, i, units) {
			if (units[i].type === 'Amulet') {
				list.push(i);
			}
		},
		fn_type_gloves = function(list, i, units) {
			if (units[i].type === 'Gloves') {
				list.push(i);
			}
		};

	// invade

	// prepare a short list of items being used
	tmp = {};
	for (i in this.data) {
		if (this.data[i].use && this.data[i].use.invade_att) {
			tmp[i] = this.data[i];
		}
	}

	lset.push('<div><h3><a>Invade - Attack</a></h3><div>');
	lset.push(makeTownDash(generals, fn_own, 'att', 'invade', 'Heroes'));
	lset.push(makeTownDash(tmp, fn_page_soldiers, 'att', 'invade', 'Soldiers'));
	lset.push(makeTownDash(tmp, fn_type_weapon, 'att', 'invade', 'Weapons'));
	lset.push(makeTownDash(tmp, fn_type_not_weapon, 'att', 'invade', 'Equipment'));
	lset.push(makeTownDash(tmp, fn_page_magic, 'att', 'invade', 'Magic'));
	lset.push('</div></div>');

	// prepare a short list of items being used
	tmp = {};
	for (i in this.data) {
		if (this.data[i].use && this.data[i].use.invade_def) {
			tmp[i] = this.data[i];
		}
	}

	rset.push('<div><h3><a>Invade - Defend</a></h3><div>');
	rset.push(makeTownDash(generals, fn_own, 'def', 'invade', 'Heroes'));
	rset.push(makeTownDash(tmp, fn_page_soldiers, 'def', 'invade', 'Soldiers'));
	rset.push(makeTownDash(tmp, fn_type_weapon, 'def', 'invade', 'Weapons'));
	rset.push(makeTownDash(tmp, fn_type_not_weapon, 'def', 'invade', 'Equipment'));
	rset.push(makeTownDash(tmp, fn_page_magic, 'def', 'invade', 'Magic'));
	rset.push('</div></div>');
	
	// duel

	// prepare a short list of items being used
	tmp = {};
	for (i in this.data) {
		if (this.data[i].use && this.data[i].use.duel_att) {
			tmp[i] = this.data[i];
		}
	}

	lset.push('<div><h3><a>Duel - Attack</a></h3><div>');
	if ((best = Generals.best('duel')) !== 'any') {
		lset.push('<div style="height:25px;margin:1px;">');
		lset.push('<img src="' + imagepath + generals[best].img + '"');
		lset.push(' style="width:25px;height:25px;float:left;margin-right:4px;">');
		lset.push(format_unit_str(best));
		lset.push('</div>');
	}
	lset.push(makeTownDash(tmp, fn_page_blacksmith, 'att', 'duel'));
	lset.push(makeTownDash(tmp, fn_page_magic, 'att', 'duel'));
	lset.push('</div></div>');
	
	// prepare a short list of items being used
	tmp = {};
	for (i in this.data) {
		if (this.data[i].use && this.data[i].use.duel_def) {
			tmp[i] = this.data[i];
		}
	}

	rset.push('<div><h3><a>Duel - Defend</a></h3><div>');
	if ((best = Generals.best('defend')) !== 'any') {
		rset.push('<div style="height:25px;margin:1px;">');
		rset.push('<img src="' + imagepath + generals[best].img + '"');
		rset.push(' style="width:25px;height:25px;float:left;margin-right:4px;">');
		rset.push(format_unit_str(best));
		rset.push('</div>');
	}
	rset.push(makeTownDash(tmp, fn_page_blacksmith, 'def', 'duel'));
	rset.push(makeTownDash(tmp, fn_page_magic, 'def', 'duel'));
	rset.push('</div></div>');

	// war

	// prepare a short list of items being used
	tmp = {};
	for (i in this.data) {
		if (this.data[i].use && this.data[i].use.war_att) {
			tmp[i] = this.data[i];
			}
	}

	lset.push('<div><h3><a>War - Attack</a></h3><div>');
	lset.push(makeTownDash(generals, fn_own, 'att', 'war', 'Heroes', 6));
	lset.push(makeTownDash(tmp, fn_type_weapon, 'att', 'war', 'Weapons'));
	lset.push(makeTownDash(tmp, fn_type_shield, 'att', 'war', 'Shield'));
	lset.push(makeTownDash(tmp, fn_type_armor, 'att', 'war', 'Armor'));
	lset.push(makeTownDash(tmp, fn_type_helmet, 'att', 'war', 'Helmet'));
	lset.push(makeTownDash(tmp, fn_type_amulet, 'att', 'war', 'Amulet'));
	lset.push(makeTownDash(tmp, fn_type_gloves, 'att', 'war', 'Gloves'));
	lset.push(makeTownDash(tmp, fn_page_magic, 'att', 'war', 'Magic'));
	lset.push('</div></div>');

	// prepare a short list of items being used
	tmp = {};
	for (i in this.data) {
		if (this.data[i].use && this.data[i].use.war_def) {
			tmp[i] = this.data[i];
		}
	}

	rset.push('<div><h3><a>War - Defend</a></h3><div>');
	rset.push(makeTownDash(generals, fn_own, 'def', 'war', 'Heroes', 6));
	rset.push(makeTownDash(tmp, fn_type_weapon, 'def', 'war', 'Weapons'));
	rset.push(makeTownDash(tmp, fn_type_shield, 'def', 'war', 'Shield'));
	rset.push(makeTownDash(tmp, fn_type_armor, 'def', 'war', 'Armor'));
	rset.push(makeTownDash(tmp, fn_type_helmet, 'def', 'war', 'Helmet'));
	rset.push(makeTownDash(tmp, fn_type_amulet, 'def', 'war', 'Amulet'));
	rset.push(makeTownDash(tmp, fn_type_gloves, 'def', 'war', 'Gloves'));
	rset.push(makeTownDash(tmp, fn_page_magic, 'def', 'war', 'Magic'));
	rset.push('</div></div>');
	
	// div wrappers

	lset.unshift('<div style="float:left;width:50%;">');
	lset.push('</div>');

	rset.unshift('<div style="float:right;width:50%;">');
	rset.push('</div>');

	$('#golem-dashboard-Town').html(lset.join('') + rset.join(''));
	$('#golem-dashboard-Town h3').parent().accordion({
		collapsible: true,
		autoHeight: false,
		active: false,
		clearStyle: true,
		animated: 'blind',
		header: '> h3'
	});

};

Town.qualify = function(name, icon) {
	var p;

	if (isString(name)) {
		// if name already has a qualifier, peel it off
		if ((p = name.search(/\s*\(/m)) >= 0) {
			name = name.substr(0, p).trim();
		}

		// if an icon is provided, use it to further qualify the name
		if (isString(icon)) {
			if (isObject(p = this.dup_map[name]) && (icon in p)) {
				name = p[icon];
			}
		}
	}

	return name;
};

Town.dup_map = {
	'Earth Shard': { // Alchemy
		'gift_earth_1.jpg':	'Earth Shard (1)',
		'gift_earth_2.jpg':	'Earth Shard (2)',
		'gift_earth_3.jpg':	'Earth Shard (3)',
		'gift_earth_4.jpg':	'Earth Shard (4)'
	},
	'Elven Crown': { // Helmet
		'gift_aeris_complete.jpg':	'Elven Crown (Aeris)',
		'eq_sylvanus_crown.jpg':	'Elven Crown (Sylvanas)'
	},
	'Green Emerald Shard': { // Alchemy
		'mystery_armor_emerald_1.jpg': 'Green Emerald Shard (1)',
		'mystery_armor_emerald_2.jpg': 'Green Emerald Shard (2)'
	},
	'Maelstrom': { // Magic
		'magic_maelstrom.jpg':		'Maelstrom (Marina)',
		'eq_valhalla_spell.jpg':	'Maelstrom (Valhalla)'
	}
};
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime
*/
/********** Worker.Upgrade **********
* Spends upgrade points
*/
var Upgrade = new Worker('Upgrade');
Upgrade.temp = null;

Upgrade.settings = {
	taint:true
};

Upgrade.defaults['castle_age'] = {
	pages:'keep_stats'
};

Upgrade.option = {
	script:'',
	cycle:true
};

Upgrade.runtime = {
	next:null
};

Upgrade.display = [
	{
		id:'cycle',
		label:'Update "Next" Every Cycle',
		checkbox:true,
		help:'If this is checked then every time a point is spent it will run the Upgrade Script and recalculate what to do. If not, then it will calculate it once, and only recalculate when there is nothing else to spend. In either case, any changes to the script will force it to recalculate immediately.'
	},{
		title:'Upgrade Script',
		id:'script',
		textarea:true
	},{
		title:'Help',
		group:{
			info:'The stats will be set in the order they are first set (use if() blocks to enforce order if it\'s important - you can easily have a "dump" stat at the end by this method).<br>' +
			'Stats: <pre>stamina\nenergy\nattack\ndefense\nhealth</pre>' +
			'Useful Functions: <pre>value = min(1,2,3);\nvalue = max(1,2,3);\nif (value1 === value2) {\n   do something\n}</pre>'
		}
	},{
		title:'Examples',
		group:[
			{
				title:'Simple Offensive',
				group:{info:'<pre>attack = level * 5;\n' +
					'defense = attack / 2;\n' +
					'stamina = level;\n' +
					'energy = level / 2;\n' +
					'health++;</pre>'
				}
			},{
				title:'Complex with fallback',
				group:{info:'<pre>attack = level * 5;\n' +
					'defense = level * 2.5;\n' +
					'if (health < level) {\n' +
					'   health = level;\n' +
					'} else if (stamina < level) {\n' +
					'   stamina = level;\n' +
					'} else if (energy < level) {\n' +
					'   energy = level;\n' +
					'} else {\n' +
					'   health++;\n' +
					'}</pre>'
				}
			}
		]
	}
];

Upgrade.script = null;

Upgrade.init = function() {
	this._watch(this, 'option.script');
	this._watch(Player, 'data.upgrade');
	this._watch(Player, 'data.maxstamina');
	this._watch(Player, 'data.maxenergy');
	this._watch(Player, 'data.maxhealth');
	this._watch(Player, 'data.attack');
	this._watch(Player, 'data.defense');
};

Upgrade.update = function(event, events) {
	if (events.findEvent(this,'calc') || events.findEvent(this,'watch','option.script') || (this.option.cycle && events.findEvent(Player,'watch'))) {
		this.script = new Script(this.option.script, {
			'map':{
				stamina:'Player.data.maxstamina',
				energy:'Player.data.maxenergy',
				health:'Player.data.maxhealth'
			},
			'default':Player.data,
			'data':'Upgrade.data' // So we can manually view it easily
		});
		this.script.run(true);
	}
	var i, j, points = Player.get('upgrade'), next = null, real = {'stamina':'maxstamina', 'energy':'maxenergy', 'health':'maxhealth'}, need = {
		'energy':1,
		'stamina':2,
		'attack':1,
		'defense':1,
		'health':1
	};
	for (i in this.data) {
		if (need[i] && (j = Player.get(['data',real[i] || i],0)) < this.data[i]) {
			Dashboard.status(this, 'Next point: ' + Config.makeImage(i) + ' ' + i.ucfirst() + ' (' + j + ' / ' + this.data[i] + ')');
			next = i;
			break;
		}
	}
	if (!next) {
		this._update('calc');
	}
	this.set(['runtime','next'], next);
	this.set('option._sleep', !this.runtime.next || points < need[this.runtime.next]);
	return true;
};

Upgrade.work = function(state) {
	var args = ({energy:'energy_max', stamina:'stamina_max', attack:'attack', defense:'defense', health:'health_max'})[this.runtime.next];
	if (state) {
		Page.to('keep_stats', {upgrade:args}, true);
	}
	return QUEUE_RELEASE;
};

Upgrade.menu = function(worker, key) {
	if (worker === this) {
		if (!key) {
			return ['calc:Recalculate&nbsp;Points&nbsp;Now'];
		} else if (key === 'calc') {
			this._update('calc');
		}
	}
};
/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page, Queue, Resources,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime
*/
/********** Worker.FP **********
* Automatically buys FP refills
*/
var FP = new Worker('FP');
FP.temp = null;

FP.settings = {
	advanced:true,
	taint:true
};

FP.defaults['castle_age'] = {
	pages:'index oracle_oracle'
};

FP.option = {
	type:'stamina',
	general_choice:'any',
	xp:2800,
	times:0,
	fps:100,
	stat:10
};

FP.display = [
	{
		title:'Important!',
		label:'If Times per Level > 0, this will SPEND FAVOR POINTS!  Use with care.  No guarantee of any kind given.  No refunds.'
	},{
		id:'times',
		label:'Times per level ',
		text:true,
		help:'Never refill more than this many times per level.'
	},{
		id:'general',
		label:'Use General',
//		require:'general=="Manual"',
		select:'generals'
	},{
		id:'type',
		label:'Refill ',
		select:['energy','stamina'],
		help:'Select which resource you want to refill.'
	},{
		id:'xp',
		label:'Refill ',
		text:true,
		help:'Refill when more than this much xp needed to level up.'
	},{
		id:'stat',
		label:'When stat under ',
		text:true,
		help:'Refill when stamina/energy under this number'
	},{
		id:'fps',
		label:'Amount of FPs to keep always',
		text:true,
		help:'Only do a refill if you will have over this amount of FP after refill'
	}
];

FP.runtime = {
	points:0
};

FP.init = function() {
	// BEGIN: fix up "under level 4" generals
	if (this.option.general=== 'under level 4') {
	        this.set('option.general', 'under max level');
	}
	// END
};

FP.page = function(page, change) {
	// No need to parse out Income potions as about to visit the Keep anyway...
	$('.oracleItemSmallBoxGeneral:contains("You have : ")').each(function(i,el){
		FP.set(['runtime','points'], $(el).text().regex(/You have : (\d+) points/i));
	});
	$('.title_action:contains("favor points")').each(function(i,el){
		FP.set(['runtime','points'], $(el).text().regex(/You have (\d+) favor points/i));
	});
	History.set('favor points',this.runtime.points);
	return false;
};

FP.notReady = function() {
	return (Player.get(this.option.type,0) >= this.option.stat 
			|| Player.get('exp_needed', 0) < this.option.xp 
			|| (this.data[Player.get('level',0)] || 0) >= this.option.times 
			|| this.runtime.points < this.option.fps + 10 
			|| LevelUp.get('runtime.running'));
};

FP.update = function(event) {
	Dashboard.status(this, 'You have ' + Config.makeImage('favor') + this.runtime.points + ' favor points.');
	this.set(['option','_sleep'], FP.notReady());
//	log(LOG_WARN, 'a '+(Player.get(this.option.type,0) >= this.option.stat));
//	log(LOG_WARN, 'b '+(Player.get('exp_needed', 0) < this.option.xp));
//	log(LOG_WARN, 'c '+((this.data[Player.get('level',0)] || 0) >= this.option.times));
//	log(LOG_WARN, 'd '+(this.runtime.points < this.option.fps + 10));
};

FP.work = function(state) {
	if (FP.notReady()) {
		return QUEUE_NO_ACTION;
	}
	if (state && Generals.to(this.option.general) && Page.to('oracle_oracle')) {
		Page.click('#'+APPID_+'favorBuy_' + (this.option.type === 'energy' ? '5' : '6') + ' input[name="favor submit"]');
		//this.set(['data', Player.get('level',0).toString()], (parseInt(this.data[Player.get('level',0).toString()] || 0, 10)) + 1); 
		log(LOG_WARN, 'Clicking on ' + this.option.type + ' refill ' + Player.get('level',0));
	}
	return QUEUE_CONTINUE;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page:true, Queue, Resources, Global,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, sortObject, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	log, warn, error
*//********** Worker.Guild() **********
* Build your guild army
* Auto-attack Guild targets
*/
var Guild = new Worker('Guild');

Guild.settings = {
	taint:true
};

Guild.defaults['castle_age'] = {
	pages:'battle_guild battle_guild_battle'
};

Guild.option = {
	general:true,
	general_choice:'any',
	start:false,
	collect:true,
	tokens:'min',
	safety:60000,
	ignore:'',
	limit:'',
	cleric:false,
	suppress:false
};

Guild.runtime = {
	tokens:10,
	status:'none',// none, wait, start, fight, collect
	start:0,
	finish:0,
	rank:0,
	points:0,
	burn:false,
	last:null, // name of last target, .data[last] then we've lost so skip them
	stunned:false
};

Guild.temp = {
	status:{
		none:'Unknown',
		wait:'Waiting for Next Battle',
		start:'Entering Battle',
		fight:'In Battle',
		collect:'Collecting Reward'
	}
};

Guild.display = [
	{
		id:'general',
 		label:'Use Best General',
		checkbox:true
	},{
		advanced:true,
		id:'general_choice',
		label:'Use General',
		require:'!general',
		select:'generals'
	},{
		id:'start',
 		label:'Automatically Start',
		checkbox:true
	},{
		id:'delay',
		label:'Start Delay',
		require:'start',
		select:{0:'None',60000:'1 Minute',120000:'2 Minutes',180000:'3 Minutes',240000:'4 Minutes',300000:'5 Minutes'}
	},{
		id:'collect',
 		label:'Collect Rewards',
		checkbox:true
	},{
		id:'tokens',
		label:'Use Tokens',
		select:{min:'Immediately', healthy:'Save if Stunned', max:'Save Up'}
	},{
		id:'safety',
		label:'Safety Margin',
		require:'tokens!="min"',
		select:{30000:'30 Seconds',45000:'45 Seconds',60000:'60 Seconds',90000:'90 Seconds'}
	},{
		id:'order',
		label:'Attack',
		select:{health:'Lowest Health', level:'Lowest Level', maxhealth:'Lowest Max Health', activity:'Lowest Activity', health2:'Highest Health', level2:'Highest Level', maxhealth2:'Highest Max Health', activity2:'Highest Activity', levelactive:'Lowest Level with Activity', levelactive2:'Highest Level with Activity'}
	},{
		advanced:true,
		id:'limit',
		label:'Relative Level',
		text:true,
		help:'Positive values are levels above your own, negative are below. Leave blank for no limit'
	},{
		id:'cleric',
 		label:'Attack Clerics First',
		checkbox:true,
		help:'This will attack any *active* clerics first, which might help prevent the enemy from healing up again...'
	},{
		id:'defeat',
 		label:'Avoid Defeat',
		checkbox:true,
		help:'This will prevent you attacking a target that you have already lost to'
	},{
		advanced:true,
		id:'suppress',
		label:'Suppress Actives',
		checkbox:true,
		help:'Continue to fight stunned active targets with remaining health.'
	},{
		advanced:true,
		id:'ignore',
		label:'Ignore Targets',
		text:true,
		help:'Ignore any targets with names containing these tags - use | to separate multiple tags'
	}
];

Guild.init = function() {
	var now = Date.now();

	// BEGIN: fix up "under level 4" generals
	if (this.option.general_choice === 'under level 4') {
		this.set('option.general_choice', 'under max level');
	}
	// END

	this._remind(180, 'tokens');// Gain more tokens every 5 minutes
	if (this.runtime.start && this.runtime.start > now) {
		this._remind((this.runtime.start - now) / 1000, 'start');
	}
	if (this.runtime.finish && this.runtime.finish > now) {
		this._remind((this.runtime.finish - now) / 1000, 'finish');
	}
	if (this.runtime.status === 'fight' && this.runtime.finish - this.option.safety > now) {
		this._remind((this.runtime.finish - this.option.safety - now) / 1000, 'fight');
	}
	this._trigger('#'+APPID_+'guild_token_current_value', 'tokens'); //fix
};

Guild.page = function(page, change) {
	var now = Date.now(), tmp, i;
	switch (page) {
		case 'battle_guild':
			if ($('input[src*="dragon_list_btn_2.jpg"]').length) {//fix
				this.set(['runtime','status'], 'collect');
				this._forget('finish');
				this.set(['runtime','start'], 1800000 + now);
				this._remind(1800, 'start');
			} else if ($('input[src*="dragon_list_btn_3.jpg"]').length) {
				if (this.runtime.status !== 'fight' && this.runtime.status !== 'start') {
					this.set(['runtime','status'], 'start');
				}
			} else {
				this._forget('finish');
				this.set(['runtime','start'], 1800000 + now);
				this._remind(1800, 'start');
				this.set(['runtime','status'], 'wait');
			}
			break;
		case 'battle_guild_battle':
			this.set(['runtime','tokens'], ($('#'+APPID_+'guild_token_current_value').text() || '10').regex(/(\d+)/));//fix
			this._remind(($('#'+APPID_+'guild_token_time_value').text() || '5:00').parseTimer(), 'tokens');//fix
			i = $('#'+APPID_+'monsterTicker').text().parseTimer();
			if ($('input[src*="collect_reward_button2.jpg"]').length) {
				this.set(['runtime','status'], 'collect');
			} else if (i === 9999) {
				this._forget('finish');
				this.set(['runtime','start'], 1800000 + now);
				this._remind(1800, 'start');
				this.set(['runtime','status'], 'wait');
			} else {
				this.set(['runtime','status'], 'fight');
				this.set(['runtime','finish'], (i * 1000) + now);
				this._remind(i, 'finish');
			}
			tmp = $('#'+APPID_+'results_main_wrapper');
			if (tmp.length) {
				i = tmp.text().regex(/\+(\d+) \w+ Activity Points/i);
				if (isNumber(i)) {
					History.add('guild', i);
					History.add('guild_count', 1);
					this._notify('data');// Force dashboard update
				}
			}
			if ($('img[src*="battle_defeat"]').length && this.runtime.last) {//fix
				this.set(['data',this.runtime.last], true);
			}
			this.set(['runtime','stunned'], !!$('#'+APPID_+'guild_battle_banner_section:contains("Status: Stunned")').length);//fix
			break;
	}
};

Guild.update = function(event) {
	var now = Date.now();
	if (event.type === 'reminder') {
		if (event.id === 'tokens') {
			this.set(['runtime','tokens'], Math.min(10, this.runtime.tokens + 1));
			if (this.runtime.tokens < 10) {
				this._remind(180, 'tokens');
			}
		} else if (event.id === 'start') {
			this.set(['runtime','status'], 'start');
		} else if (event.id === 'finish') {
			this.set(['runtime','status'], 'collect');
		}
	}
	if (event.type === 'trigger' && event.id === 'tokens') {
		if ($('#'+APPID_+'guild_token_current_value').length) {//fix
			this.set(['runtime','tokens'], $('#'+APPID_+'guild_token_current_value').text().regex(/(\d+)/) || 0);//fix
		}
	}
	if (this.runtime.status === 'fight' && this.runtime.finish - this.option.safety > now) {
		this._remind((this.runtime.finish - this.option.safety - now) / 1000, 'fight');
	}
	if (!this.runtime.tokens) {
		this.set(['runtime','burn'], false);
	} else if (this.runtime.tokens >= 10 || (this.runtime.finish || 0) - this.option.safety <= now) {
		this.set(['runtime','burn'], true);
	}
	this.set(['option','_sleep'],
		   !(this.runtime.status === 'wait' && this.runtime.start <= now) // Should be handled by an event
		&& !(this.runtime.status === 'start' && Player.get('stamina',0) >= 20 && this.option.start)
		&& !(this.runtime.status === 'fight' && this.runtime.tokens
			&& (!this.option.delay || this.runtime.finish - 3600000  >= now - this.option.delay)
				&& (this.option.tokens === 'min'
					|| (this.option.tokens === 'healthy' && (!this.runtime.stunned || this.runtime.burn))
					|| (this.option.tokens === 'max' && this.runtime.burn)))
		&& !(this.runtime.status === 'collect' && this.option.collect));
	Dashboard.status(this, 'Status: ' + this.temp.status[this.runtime.status] + (this.runtime.status === 'wait' ? ' (' + Page.addTimer('guild_start', this.runtime.start) + ')' : '') + (this.runtime.status === 'fight' ? ' (' + Page.addTimer('guild_start', this.runtime.finish) + ')' : '') + ', Tokens: ' + Config.makeImage('guild', 'Guild Stamina') + ' ' + this.runtime.tokens + ' / 10');
};

Guild.work = function(state) {
	if (state) {
		if (this.runtime.status === 'wait') {
			if (!Page.to('battle_guild')) {
				return QUEUE_FINISH;
			}
		} else if (this.runtime.status !== 'fight' || Generals.to(this.option.general ? 'duel' : this.option.general_choice)) {
			if (Page.temp.page !== 'battle_guild_battle') {
				if (Page.temp.page !== 'battle_guild') {
					Page.to('battle_guild');
				} else if (!Page.click('input[src*="dragon_list_btn"]')) {
					this.set('runtime.status', 'wait');
					return QUEUE_FINISH;
				}
			} else {
				if (this.runtime.status === 'collect') {
					if (!$('input[src*="collect_reward_button2.jpg"]').length) {
						Page.to('battle_guild');
					} else {
						log('Collecting Reward');
						Page.click('input[src*="collect_reward_button2.jpg"]');
					}
				} else if (this.runtime.status === 'fight' || this.runtime.status === 'start') {
					if ($('input[src*="guild_enter_battle_button.gif"]').length) {
						log('Entering Battle');
						Page.click('input[src*="guild_enter_battle_button.gif"]');
						this.set(['data'], {}); // Forget old "lose" list
						return QUEUE_CONTINUE;
					}
					var best = null, besttarget, besthealth, ignore = this.option.ignore && this.option.ignore.length ? this.option.ignore.split('|') : [];
					$('#'+APPID_+'enemy_guild_member_list_1 > div, #'+APPID_+'enemy_guild_member_list_2 > div, #'+APPID_+'enemy_guild_member_list_3 > div, #'+APPID_+'enemy_guild_member_list_4 > div').each(function(i,el){
					
						var test = false, cleric = false, i = ignore.length, targetla = 0.0, besttargetla = 0.0, $el = $(el), txt = $el.text().trim().replace(/\s+/g,' '), target = txt.regex(/^(.*) Level: (\d+) Class: ([^ ]+) Health: (\d+)\/(\d+) Status: ([^ ]+) \w+ Activity Points: (\d+)/i);
						// target = [0:name, 1:level, 2:class, 3:health, 4:maxhealth, 5:status, 6:activity]
						if (!target 
								|| (Guild.option.defeat && Guild.data && Guild.data[target[0]])
								|| (isNumber(Guild.option.limit) 
									&& target[1] > Player.get('level',0) + Guild.option.limit)) {
							return;
						}
						while (i--) {
							if (target[0].indexOf(ignore[i]) >= 0) {
								return;
							}
						}
						if (besttarget) {
							switch(Guild.option.order) {
								case 'level':		test = target[1] < besttarget[1];	break;
								case 'health':		test = target[3] < besttarget[3];	break;
								case 'maxhealth':	test = target[4] < besttarget[4];	break;
								case 'activity':	test = target[6] < besttarget[6];	break;
								case 'level2':		test = target[1] > besttarget[1];	break;
								case 'health2':		test = target[3] > besttarget[3];	break;
								case 'maxhealth2':	test = target[4] > besttarget[4];	break;
								case 'activity2':	test = target[6] > besttarget[6];	break;
								case 'levelactive':
									besttargetla = besttarget[1];
									if (besttarget[6]) {
										besttargetla = -1.0/besttargetla;
									}
									targetla = target[1];
									if (target[6]) {
										targetla = -1.0/targetla;
									}
									test = targetla < besttargetla;
									break;
								case 'levelactive2':
									besttargetla = besttarget[1];
									if (!besttarget[6]) {
										besttargetla = -1.0/besttargetla;
									}
									targetla = target[1];
									if (!target[6]) {
										targetla = -1.0/targetla;
									}
									test = targetla > besttargetla;
									break;
							}
						}
						if (Guild.option.cleric) {
							cleric = target[2] === 'Cleric' && target[6] && (!best || besttarget[2] !== 'Cleric');
						}
						if ((target[3] && (!best || cleric)) || ((target[3] >= 200 || (Guild.option.suppress && target[3] && target[6])) && ((besttarget[3] < 200 && !(Guild.option.suppress && besttarget[3] && besttarget[6])) || test))) {
							best = el;
							besttarget = target;
						}
					});
					if (best) {
						this.set(['runtime','last'], besttarget[0]);
						log('Attacking '+besttarget[0]+' with '+besttarget[3]+' health');
						if ($('input[src*="monster_duel_button.gif"]', best).length) {
							Page.click($('input[src*="monster_duel_button.gif"]', best));
						} else {
							log(LOG_INFO, 'But couldn\'t find button, so backing out.');
							Page.to('battle_guild');
						}
					} else {
						this.set(['runtime','last'], null);
					}
				}
			}
		}
	}
	return QUEUE_CONTINUE;
};

/*jslint browser:true, laxbreak:true, forin:true, sub:true, onevar:true, undef:true, eqeqeq:true, regexp:false */
/*global
	$, Worker, Army, Config, Dashboard, History, Page:true, Queue, Resources, Global,
	Battle, Generals, LevelUp, Player,
	APP, APPID, log, debug, userID, imagepath, isRelease, version, revision, Workers, PREFIX, Images, window, browser,
	QUEUE_CONTINUE, QUEUE_RELEASE, QUEUE_FINISH,
	makeTimer, Divisor, length, sum, findInObject, objectIndex, getAttDef, tr, th, td, isArray, isObject, isFunction, isNumber, isString, isWorker, plural, makeTime,
	log, warn, error
*//********** Worker.Festival() **********
* Build your festival army
* Auto-attack Festival targets
*/
var Festival = new Worker('Festival');

Festival.settings = {
	taint:true
};

Festival.defaults['castle_age'] = {
	pages:'festival_guild festival_guild_battle'
};

Festival.option = {
	general:true,
	general_choice:'any',
	start:false,
	collect:true,
	tokens:'min',
	safety:60000,
	ignore:'',
	limit:'',
	cleric:false,
	suppress:false
};

Festival.runtime = {
	tokens:10,
	status:'start',// wait, start, fight, collect
	start:0,
	finish:0,
	rank:0,
	points:0,
	burn:false,
	last:null, // name of last target, .data[last] then we've lost so skip them
	stunned:false
};

Festival.temp = {
	status:{
		none:'Unknown',
		wait:'Waiting for Next Battle',
		start:'Entering Battle',
		fight:'In Battle',
		collect:'Collecting Reward'
	}
};

Festival.display = [
	{
		id:'general',
 		label:'Use Best General',
		checkbox:true
	},{
		advanced:true,
		id:'general_choice',
		label:'Use General',
		require:'!general',
		select:'generals'
	},{
		id:'start',
 		label:'Automatically Start',
		checkbox:true
	},{
		id:'delay',
		label:'Start Delay',
		require:'start',
		select:{0:'None',60000:'1 Minute',120000:'2 Minutes',180000:'3 Minutes',240000:'4 Minutes',300000:'5 Minutes'}
	},{
		id:'collect',
 		label:'Collect Rewards',
		checkbox:true
	},{
		id:'tokens',
		label:'Use Tokens',
		select:{min:'Immediately', healthy:'Save if Stunned', max:'Save Up'}
	},{
		id:'safety',
		label:'Safety Margin',
		require:'tokens!="min"',
		select:{30000:'30 Seconds',45000:'45 Seconds',60000:'60 Seconds',90000:'90 Seconds'}
	},{
		id:'order',
		label:'Attack',
		select:{health:'Lowest Health', level:'Lowest Level', maxhealth:'Lowest Max Health', activity:'Lowest Activity', health2:'Highest Health', level2:'Highest Level', maxhealth2:'Highest Max Health', activity2:'Highest Activity', levelactive:'Lowest Level with Activity', levelactive2:'Highest Level with Activity'}
	},{
		advanced:true,
		id:'limit',
		label:'Relative Level',
		text:true,
		help:'Positive values are levels above your own, negative are below. Leave blank for no limit'
	},{
		id:'cleric',
 		label:'Attack Clerics First',
		checkbox:true,
		help:'This will attack any *active* clerics first, which might help prevent the enemy from healing up again...'
	},{
		id:'defeat',
 		label:'Avoid Defeat',
		checkbox:true,
		help:'This will prevent you attacking a target that you have already lost to'
	},{
		advanced:true,
		id:'suppress',
		label:'Suppress Actives',
		checkbox:true,
		help:'Continue to fight stunned active targets with remaining health.'
	},{
		advanced:true,
		id:'ignore',
		label:'Ignore Targets',
		text:true,
		help:'Ignore any targets with names containing these tags - use | to separate multiple tags'
	}
];

Festival.init = function() {
	var now = Date.now();

	// BEGIN: fix up "under level 4" generals
	if (this.option.general_choice === 'under level 4') {
		this.set('option.general_choice', 'under max level');
	}
	// END

	this._remind(300, 'tokens');// Gain more tokens every 5 minutes
	if (this.runtime.start && this.runtime.start > now) {
		this._remind((this.runtime.start - now) / 1000, 'start');
	}
	if (this.runtime.finish && this.runtime.finish > now) {
		this._remind((this.runtime.finish - now) / 1000, 'finish');
	}
	if (this.runtime.status === 'fight' && this.runtime.finish - this.option.safety > now) {
		this._remind((this.runtime.finish - this.option.safety - now) / 1000, 'fight');
	}
	this._trigger('#'+APPID_+'guild_token_current_value', 'tokens'); //fix
};

Festival.page = function(page, change) {
	var now = Date.now(), tmp, i;
	switch (page) {
		case 'festival_guild':
			tmp = $('#'+APPID_+'current_battle_info').text();
			if (tmp.indexOf('BATTLE NOW!') > -1) {
				if (this.runtime.status !== 'fight' && this.runtime.status !== 'start') {
					this.set(['runtime','status'], 'start');
				}
			} else {
				this.set(['runtime','status'], tmp.indexOf('COLLECT') > -1 ? 'collect' : 'wait');
				this._forget('finish');
				i = tmp.indexOf('HOURS') > -1 ? tmp.regex(/(\d+) HOURS/i) * 3600 
						: tmp.indexOf('MINS') > -1 ? tmp.regex(/(\d+) MINS/i) * 60 : 300;
				this._forget('finish');
				this.set(['runtime','start'], i*1000 + now);
				this._remind(i , 'start');
			}
			break;
		case 'festival_guild_battle':
			this.set(['runtime','tokens'], ($('#'+APPID_+'guild_token_current_value').text() || '10').regex(/(\d+)/));//fix
			this._remind(($('#'+APPID_+'guild_token_time_value').text() || '5:00').parseTimer(), 'tokens');//fix
			i = $('#'+APPID_+'monsterTicker').text().parseTimer();
			if ($('input[src*="arena3_collectbutton.gif"]').length) {
				this.set(['runtime','status'], 'collect');
			} else if (i === 9999) {
				this.set(['runtime','status'], 'wait');
				this.set(['runtime','start'], 3600000 + now);
				this._remind(3600 , 'start');
			} else {
				this.set(['runtime','status'], 'fight');
				this.set(['runtime','finish'], (i * 1000) + now);
				this._remind(i, 'finish');
			}
			tmp = $('#'+APPID_+'results_main_wrapper');
			if (tmp.length) {
				i = tmp.text().regex(/\+(\d+) \w+ Activity Points/i);
				if (isNumber(i)) {
					History.add('festival', i);
					History.add('festival_count', 1);
					this._notify('data');// Force dashboard update
				}
			}
			if ($('img[src*="battle_defeat"]').length && this.runtime.last) {//fix
				this.set(['data',this.runtime.last], true);
			}
			this.set(['runtime','stunned'], !!$('#'+APPID_+'guild_battle_banner_section:contains("Status: Stunned")').length);//fix
			break;
	}
	return false;
};

Festival.update = function(event) {
	var now = Date.now();
	if (event.type === 'reminder') {
		if (event.id === 'tokens') {
			this.set(['runtime','tokens'], Math.min(10, this.runtime.tokens + 1));
			if (this.runtime.tokens < 10) {
				this._remind(300, 'tokens');
			}
		} else if (event.id === 'start') {
			this.set(['runtime','status'], 'start');
		} else if (event.id === 'finish') {
			this.set(['runtime','status'], 'collect');
		}
	}
	if (event.type === 'trigger' && event.id === 'tokens') {
		if ($('#'+APPID_+'guild_token_current_value').length) {//fix
			this.set(['runtime','tokens'], $('#'+APPID_+'guild_token_current_value').text().regex(/(\d+)/) || 0);
		}
	}
	if (this.runtime.status === 'fight' && this.runtime.finish - this.option.safety > now) {
		this._remind((this.runtime.finish - this.option.safety - now) / 1000, 'fight');
	}
	if (!this.runtime.tokens) {
		this.set(['runtime','burn'], false);
	} else if (this.runtime.tokens >= 10 || (this.runtime.finish || 0) - this.option.safety <= now) {
		this.set(['runtime','burn'], true);
	}
	this.set(['option','_sleep'],
		   !(this.runtime.status === 'wait' && this.runtime.start <= now) // Should be handled by an event
		&& !(this.runtime.status === 'start' && Player.get('stamina',0) >= 20 && this.option.start)
		&& !(this.runtime.status === 'fight' && this.runtime.tokens
			&& (!this.option.delay || this.runtime.finish - 3600000 >= now - this.option.delay)
			&& (this.option.tokens === 'min'
			|| (this.option.tokens === 'healthy' && (!this.runtime.stunned || this.runtime.burn))
			|| (this.option.tokens === 'max' && this.runtime.burn)))
		&& !(this.runtime.status === 'collect' && this.option.collect));
	Dashboard.status(this, 'Status: ' + this.temp.status[this.runtime.status] + (this.runtime.status === 'wait' ? ' (' + Page.addTimer('festival_start', this.runtime.start) + ')' : '') + (this.runtime.status === 'fight' ? ' (' + Page.addTimer('festival_start', this.runtime.finish) + ')' : '') + ', Tokens: ' + Config.makeImage('arena', 'Festival Tokens') + ' ' + this.runtime.tokens + ' / 10');
};

Festival.work = function(state) {
	if (state) {
		if (this.runtime.status === 'wait') {
			if (!Page.to('festival_guild')) {
				return QUEUE_FINISH;
			}
		} else if (this.runtime.status !== 'fight' || Generals.to(this.option.general ? 'duel' : this.option.general_choice)) {
			if (Page.temp.page !== 'festival_guild_battle') {
				if (Page.temp.page !== 'festival_guild') {
					Page.to('festival_guild');
				} else {
					Page.click('img.imgButton[src*="festival_arena_enter.jpg"]');
				}
			} else {
				if (this.runtime.status === 'collect') {
					if (!$('input[src*="arena3_collectbutton.gif"]').length) {//fix
						Page.to('festival_guild');
					} else {
						log('Collecting Reward');
						Page.click('input[src*="arena3_collectbutton.gif"]');//fix
					}
				} else if (this.runtime.status === 'start') {
					if ($('input[src*="guild_enter_battle_button.gif"]').length) {
						log('Entering Battle');
						Page.click('input[src*="guild_enter_battle_button.gif"]');
					}
					this.set(['data'], {}); // Forget old "lose" list
				} else if (this.runtime.status === 'fight') {
					if ($('input[src*="guild_enter_battle_button.gif"]').length) {
						log('Entering Battle');
						Page.click('input[src*="guild_enter_battle_button.gif"]');
					}
					var best = null, besttarget, besthealth, ignore = this.option.ignore && this.option.ignore.length ? this.option.ignore.split('|') : [];
					$('#'+APPID_+'enemy_guild_member_list_1 > div, #'+APPID_+'enemy_guild_member_list_2 > div, #'+APPID_+'enemy_guild_member_list_3 > div, #'+APPID_+'enemy_guild_member_list_4 > div').each(function(i,el){
					
						var test = false, cleric = false, i = ignore.length, targetla = 0.0, besttargetla = 0.0, $el = $(el), txt = $el.text().trim().replace(/\s+/g,' '), target = txt.regex(/^(.*) Level: (\d+) Class: ([^ ]+) Health: (\d+)\/(\d+) Status: ([^ ]+) \w+ Activity Points: (\d+)/i);
						// target = [0:name, 1:level, 2:class, 3:health, 4:maxhealth, 5:status, 6:activity]
						if (!target 
								|| (Festival.option.defeat && Festival.data 
									&& Festival.data[target[0]])
								|| (isNumber(Festival.option.limit) 
									&& target[1] > Player.get('level',0) + Festival.option.limit)) {
							return;
						}
						while (i--) {
							if (target[0].indexOf(ignore[i]) >= 0) {
								return;
							}
						}
						if (besttarget) {
							switch(Festival.option.order) {
								case 'level':		test = target[1] < besttarget[1];	break;
								case 'health':		test = target[3] < besttarget[3];	break;
								case 'maxhealth':	test = target[4] < besttarget[4];	break;
								case 'activity':	test = target[6] < besttarget[6];	break;
								case 'level2':		test = target[1] > besttarget[1];	break;
								case 'health2':		test = target[3] > besttarget[3];	break;
								case 'maxhealth2':	test = target[4] > besttarget[4];	break;
								case 'activity2':	test = target[6] > besttarget[6];	break;
								case 'levelactive':
									besttargetla = besttarget[1];
									if (besttarget[6]) {
										besttargetla = -1.0/besttargetla;
									}
									targetla = target[1];
									if (target[6]) {
										targetla = -1.0/targetla;
									}
									test = targetla < besttargetla;
									break;
								case 'levelactive2':
									besttargetla = besttarget[1];
									if (!besttarget[6]) {
										besttargetla = -1.0/besttargetla;
									}
									targetla = target[1];
									if (!target[6]) {
										targetla = -1.0/targetla;
									}
									test = targetla > besttargetla;
									break;
							}
						}
						if (Festival.option.cleric) {
							cleric = target[2] === 'Cleric' && target[6] && (!best || besttarget[2] !== 'Cleric');
						}
						//log('cname ' + target[0] + ' cleric ' + cleric + ' test ' + test + ' bh ' + (best ? besttarget[3] : 'none') + ' candidate healt ' + target[3]);
						if ((target[3] && (!best || cleric)) || ((target[3] >= 200 || (Festival.option.suppress && target[3] && target[6])) && ((besttarget[3] < 200 && !(Festival.option.suppress && besttarget[3] && besttarget[6])) || test))) {
							best = el;
							besttarget = target;
						}
					});
					if (best) {
						this.set(['runtime','last'], besttarget[0]);
						log('Attacking '+besttarget[0]+' with '+besttarget[3]+' health');
						if ($('input[src*="monster_duel_button.gif"]', best).length) {
							Page.click($('input[src*="monster_duel_button.gif"]', best));
						} else {
							log(LOG_INFO, 'But couldn\'t find button, so backing out.');
							Page.to('festival_guild');
						}
					} else {
						this.set(['runtime','last'], null);
					}
				}
			}
		}
	}
	return QUEUE_CONTINUE;
};
}(jQuery.noConflict(true)));