!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=97)}([function(e,t,n){var r=n(2).Symbol;e.exports=r},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(15),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r={},i=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),o=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,u=[],c=n(8);function f(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=r[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(m(i.parts[a],t))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(m(i.parts[a],t));r[i.id]={id:i.id,refs:1,parts:s}}}}function l(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function d(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),p(t,e.attrs),d(e,t),t}function p(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function m(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var u=s++;n=a||(a=h(t)),r=g.bind(null,n,u,!1),i=g.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",p(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=c(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=l(e,t);return f(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var a=n[o];(s=r[a.id]).refs--,i.push(s)}e&&f(l(e,t),t);for(o=0;o<i.length;o++){var s;if(0===(s=i[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function g(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWindowSize=function(){var e=window,t=e.innerHeight,n=e.innerWidth,i=document.documentElement,o=i.offsetWidth,a=i.offsetHeight,s=n>o&&o>0?o:n;return{height:t>a&&a>0?a:t,innerHeight:t,innerWidth:n,offsetHeight:a,offsetWidth:o,pixelRatio:(0,r.getPixelRatio)(),width:s}},t.bindResizeEvents=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=t?(0,o.default)(e,t):e;(i.default.tablet||i.default.mobile)&&window.addEventListener("orientationchange",n);return window.addEventListener("resize",n),n},t.unBindResizeEvents=function(e){(i.default.tablet||i.default.mobile)&&window.removeEventListener("orientationchange",e);window.removeEventListener("resize",e)};var r=n(20),i=a(n(19)),o=a(n(17));function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Math.pow(10,t);return n=Math.ceil(n<=0?1:n),Math.round(e*n)/n}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var r=n(0),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var i=a.call(e);return r&&(t?e[s]=n:delete e[s]),i}},function(e,t,n){var r=n(0),i=n(11),o=n(10),a="[object Null]",s="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?s:a:u&&u in Object(e)?i(e):o(e)}},function(e,t,n){var r=n(12),i=n(9),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||i(e)&&r(e)==o}},function(e,t,n){var r=n(3),i=n(13),o=NaN,a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||c.test(e)?f(e.slice(2),n?2:8):s.test(e)?o:+e}},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(1))},function(e,t,n){var r=n(2);e.exports=function(){return r.Date.now()}},function(e,t,n){var r=n(3),i=n(16),o=n(14),a="Expected a function",s=Math.max,u=Math.min;e.exports=function(e,t,n){var c,f,l,d,v,h,p=0,m=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError(a);function w(t){var n=c,r=f;return c=f=void 0,p=t,d=e.apply(r,n)}function y(e){var n=e-h;return void 0===h||n>=t||n<0||b&&e-p>=l}function x(){var e=i();if(y(e))return _(e);v=setTimeout(x,function(e){var n=t-(e-h);return b?u(n,l-(e-p)):n}(e))}function _(e){return v=void 0,g&&c?w(e):(c=f=void 0,d)}function k(){var e=i(),n=y(e);if(c=arguments,f=this,h=e,n){if(void 0===v)return function(e){return p=e,v=setTimeout(x,t),m?w(e):d}(h);if(b)return v=setTimeout(x,t),w(h)}return void 0===v&&(v=setTimeout(x,t)),d}return t=o(t)||0,r(n)&&(m=!!n.leading,l=(b="maxWait"in n)?s(o(n.maxWait)||0,t):l,g="trailing"in n?!!n.trailing:g),k.cancel=function(){void 0!==v&&clearTimeout(v),p=0,c=h=f=v=void 0},k.flush=function(){return void 0===v?d:_(i())},k}},function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},function(e,t,n){
/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */
!function(t,r,i){void 0!==e&&e.exports?e.exports=i():n(18)("bowser",i)}(0,0,function(){var e=!0;function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}var i,o=n(/(ipod|iphone|ipad)/i).toLowerCase(),a=!/like android/i.test(t)&&/android/i.test(t),s=/nexus\s*[0-6]\s*/i.test(t),u=!s&&/nexus\s*[0-9]+/i.test(t),c=/CrOS/.test(t),f=/silk/i.test(t),l=/sailfish/i.test(t),d=/tizen/i.test(t),v=/(web|hpw)os/i.test(t),h=/windows phone/i.test(t),p=(/SamsungBrowser/i.test(t),!h&&/windows/i.test(t)),m=!o&&!f&&/macintosh/i.test(t),b=!a&&!l&&!d&&!v&&/linux/i.test(t),g=r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),w=n(/version\/(\d+(\.\d+)?)/i),y=/tablet/i.test(t)&&!/tablet pc/i.test(t),x=!y&&/[^-]mobi/i.test(t),_=/xbox/i.test(t);/opera/i.test(t)?i={name:"Opera",opera:e,version:w||n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(t)?i={name:"Opera",opera:e,version:n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||w}:/SamsungBrowser/i.test(t)?i={name:"Samsung Internet for Android",samsungBrowser:e,version:w||n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(t)?i={name:"Opera Coast",coast:e,version:w||n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?i={name:"Yandex Browser",yandexbrowser:e,version:w||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(t)?i={name:"UC Browser",ucbrowser:e,version:n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(t)?i={name:"Maxthon",maxthon:e,version:n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(t)?i={name:"Epiphany",epiphany:e,version:n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(t)?i={name:"Puffin",puffin:e,version:n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(t)?i={name:"Sleipnir",sleipnir:e,version:n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(t)?i={name:"K-Meleon",kMeleon:e,version:n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:h?(i={name:"Windows Phone",osname:"Windows Phone",windowsphone:e},g?(i.msedge=e,i.version=g):(i.msie=e,i.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?i={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:c?i={name:"Chrome",osname:"Chrome OS",chromeos:e,chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(t)?i={name:"Microsoft Edge",msedge:e,version:g}:/vivaldi/i.test(t)?i={name:"Vivaldi",vivaldi:e,version:n(/vivaldi\/(\d+(\.\d+)?)/i)||w}:l?i={name:"Sailfish",osname:"Sailfish OS",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?i={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(t)?(i={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(i.firefoxos=e,i.osname="Firefox OS")):f?i={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(t)?i={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(t)?i={name:"SlimerJS",slimer:e,version:n(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?i={name:"BlackBerry",osname:"BlackBerry OS",blackberry:e,version:w||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:v?(i={name:"WebOS",osname:"WebOS",webos:e,version:w||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(i.touchpad=e)):/bada/i.test(t)?i={name:"Bada",osname:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:d?i={name:"Tizen",osname:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||w}:/qupzilla/i.test(t)?i={name:"QupZilla",qupzilla:e,version:n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||w}:/chromium/i.test(t)?i={name:"Chromium",chromium:e,version:n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||w}:/chrome|crios|crmo/i.test(t)?i={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:a?i={name:"Android",version:w}:/safari|applewebkit/i.test(t)?(i={name:"Safari",safari:e},w&&(i.version=w)):o?(i={name:"iphone"==o?"iPhone":"ipad"==o?"iPad":"iPod"},w&&(i.version=w)):i=/googlebot/i.test(t)?{name:"Googlebot",googlebot:e,version:n(/googlebot\/(\d+(\.\d+))/i)||w}:{name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!i.msedge&&/(apple)?webkit/i.test(t)?(/(apple)?webkit\/537\.36/i.test(t)?(i.name=i.name||"Blink",i.blink=e):(i.name=i.name||"Webkit",i.webkit=e),!i.version&&w&&(i.version=w)):!i.opera&&/gecko\//i.test(t)&&(i.name=i.name||"Gecko",i.gecko=e,i.version=i.version||n(/gecko\/(\d+(\.\d+)?)/i)),i.windowsphone||!a&&!i.silk?!i.windowsphone&&o?(i[o]=e,i.ios=e,i.osname="iOS"):m?(i.mac=e,i.osname="macOS"):_?(i.xbox=e,i.osname="Xbox"):p?(i.windows=e,i.osname="Windows"):b&&(i.linux=e,i.osname="Linux"):(i.android=e,i.osname="Android");var k="";i.windows?k=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)):i.windowsphone?k=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):i.mac?k=(k=n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g,"."):o?k=(k=n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):a?k=n(/android[ \/-](\d+(\.\d+)*)/i):i.webos?k=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):i.blackberry?k=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):i.bada?k=n(/bada\/(\d+(\.\d+)*)/i):i.tizen&&(k=n(/tizen[\/\s](\d+(\.\d+)*)/i)),k&&(i.osversion=k);var T=!i.windows&&k.split(".")[0];return y||u||"ipad"==o||a&&(3==T||T>=4&&!x)||i.silk?i.tablet=e:(x||"iphone"==o||"ipod"==o||a||s||i.blackberry||i.webos||i.bada)&&(i.mobile=e),i.msedge||i.msie&&i.version>=10||i.yandexbrowser&&i.version>=15||i.vivaldi&&i.version>=1||i.chrome&&i.version>=20||i.samsungBrowser&&i.version>=4||i.firefox&&i.version>=20||i.safari&&i.version>=6||i.opera&&i.version>=10||i.ios&&i.osversion&&i.osversion.split(".")[0]>=6||i.blackberry&&i.version>=10.1||i.chromium&&i.version>=20?i.a=e:i.msie&&i.version<10||i.chrome&&i.version<20||i.firefox&&i.version<20||i.safari&&i.version<6||i.opera&&i.version<10||i.ios&&i.osversion&&i.osversion.split(".")[0]<6||i.chromium&&i.version<20?i.c=e:i.x=e,i}var n=t("undefined"!=typeof navigator&&navigator.userAgent||"");function r(e){return e.split(".").length}function i(e,t){var n,r=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n++)r.push(t(e[n]));return r}function o(e){for(var t=Math.max(r(e[0]),r(e[1])),n=i(e,function(e){var n=t-r(e);return i((e+=new Array(n+1).join(".0")).split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});--t>=0;){if(n[0][t]>n[1][t])return 1;if(n[0][t]!==n[1][t])return-1;if(0===t)return 0}}function a(e,r,i){var a=n;"string"==typeof r&&(i=r,r=void 0),void 0===r&&(r=!1),i&&(a=t(i));var s=""+a.version;for(var u in e)if(e.hasOwnProperty(u)&&a[u]){if("string"!=typeof e[u])throw new Error("Browser version in the minVersion map should be a string: "+u+": "+String(e));return o([s,e[u]])<0}return r}return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if("string"==typeof r&&r in n)return!0}return!1},n.isUnsupportedBrowser=a,n.compareVersions=o,n.check=function(e,t,n){return!a(e,t,n)},n._detect=t,n.detect=t,n})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPixelRatio=c;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(7));var i=96,o=37.5;function a(e){return window.matchMedia&&(window.matchMedia("only screen and (min-resolution: "+Math.floor(i*e)+"dpi), only screen and (min-resolution: "+e+"dppx), only screen and (min-resolution: "+(0,r.default)(o*e)+"dpcm)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: "+e+"), only screen and (-o-min-device-pixel-ratio: "+e+"/1), only screen and (min--moz-device-pixel-ratio: "+e+"), only screen and (min-device-pixel-ratio: "+e+")").matches)||window.devicePixelRatio&&window.devicePixelRatio>e}var s=1.3,u=2;function c(){var e=1;return a(u)?e=u:a(s)&&(e=s),e}var f=c();t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(6);var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.canvas,r=void 0===n?null:n,i=t.container,o=void 0===i?document.body:i,a=t.hasResize,s=void 0===a||a,u=t.resizeListener,c=void 0===u?null:u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=r||e.createCanvas(o),this._vars={canvas:r},this.settings={hasResize:s,resizeListener:c},this._setup(),this}return r(e,null,[{key:"createCanvas",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,t=document.createElement("canvas");return e.appendChild(t),t}}]),r(e,[{key:"_setup",value:function(){var e=this;if(!this._vars.canvas)throw Error("Canvas._setup() - Trying to set up canvas with no canvas available.");var t=this.settings,n=t.hasResize,r=t.resizeListener;if(n||r){var o=function(t){return e.resize(t)};(0,i.bindResizeEvents)(o),this._vars.resizeListener=o}this.resize()}},{key:"resize",value:function(e){var t=this._vars.canvas;if(!t)throw Error("Canvas.resize() - Trying to resize canvas with no canvas available.");var n=(0,i.getWindowSize)();t.width=n.innerWidth,t.height=n.innerHeight;var r=this.settings.resizeListener;return r&&r(e,this),n}},{key:"getContext",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2d",t=arguments[1],n=this._vars.canvas;if(!n)throw Error("Canvas.getContext() - Trying to get context with no canvas available.");return n.getContext(e,t)}},{key:"destroy",value:function(){var e=this._vars,t=e.canvas,n=e.resizeListener;t.parentNode.removeChild(t),this._vars.canvas=null,n&&((0,i.unBindResizeEvents)(n),this._vars.resizeListener=null)}},{key:"element",get:function(){var e=this._vars.canvas;if(!e)throw Error("Canvas.element - Trying to get canvas element with no canvas available.");return e}},{key:"width",get:function(){var e=this._vars.canvas;if(!e)throw Error("Canvas.width - Trying to get width with no canvas available.");return e.width},set:function(e){var t=this._vars.canvas;if(!t)throw Error("Canvas.width - Trying to set width with no canvas available.");return t.width=e}},{key:"height",get:function(){var e=this._vars.canvas;if(!e)throw Error("Canvas.height - Trying to get height with no canvas available.");return e.height},set:function(e){var t=this._vars.canvas;if(!t)throw Error("Canvas.height - Trying to set height with no canvas available.");return t.height=e}},{key:"resizeListener",set:function(e){if(!this._vars.canvas)throw Error("Canvas.height - Trying to set height with no canvas available.");this._vars.resizeListener=e,this.resize()}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){var n=t.title,r=t.desc,i=t.container,o=void 0===i?document.body:i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elements={title:document.createElement("h1"),desc:document.createElement("p")},this._values={title:n,desc:r},this._container=o,this.update()}return r(e,[{key:"update",value:function(){var e=this._elements,t=e.title,n=e.desc,r=this._values,i=r.title,o=r.desc;i?this._container.appendChild(t):t.parentNode&&t.parentNode.removeChild(t),t.textContent=i||"",o?this._container.appendChild(n):n.parentNode&&n.parentNode.removeChild(n),n.textContent=o||""}},{key:"title",set:function(e){this._values.title=e,this.update()}},{key:"desc",set:function(e){this._values.desc=e,this.update()}}]),e}();t.default=i},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],f=!1,l=-1;function d(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&v())}function v(){if(!f){var e=s(d);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||f||s(v)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){(function(t){(function(){var n,r,i,o,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,n(23))},function(e,t,n){(function(t){for(var r=n(24),i="undefined"==typeof window?t:window,o=["moz","webkit"],a="AnimationFrame",s=i["request"+a],u=i["cancel"+a]||i["cancelRequest"+a],c=0;!s&&c<o.length;c++)s=i[o[c]+"Request"+a],u=i[o[c]+"Cancel"+a]||i[o[c]+"CancelRequest"+a];if(!s||!u){var f=0,l=0,d=[];s=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-f));f=n+t,setTimeout(function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(f)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return d.push({handle:++l,callback:e,cancelled:!1}),l},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(i,e)},e.exports.cancel=function(){u.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=s,e.cancelAnimationFrame=u}}).call(this,n(1))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){return e&&e.__esModule?e:{default:e}}(n(25));var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._props={}}return r(e,[{key:"start",value:function(e){this.stop(),this.isAnimating=!0,this._props.frame=0,this._props.lastTime=void 0,"function"==typeof e&&(this._props.tick=e),this._tick()}},{key:"_tick",value:function(){var e=this,t=this._props,n=t.lastTime,r=t.tick,o=t.frame;this._props.request=(0,i.default)(function(){return e._tick()});var a=0,s=Date.now();n&&(a=s-n),this._props.lastTime=s,r&&r(o,a),this._props.frame++}},{key:"stop",value:function(){this.isAnimating=!1,i.default.cancel(this._props.request)}}]),e}();t.default=o},function(e,t,n){(e.exports=n(5)(!1)).push([e.i,"html, body {\n  overflow: hidden;\n  margin: 0;\n  color: white;\n  font-family: sans-serif;\n  font-weight: 300;\n  background: #333; }\n\ncanvas {\n  width: 100vw;\n  height: 100vh; }\n\nh1,\np {\n  margin: 0;\n  overflow: hidden;\n  position: absolute;\n  right: 0.5em;\n  left: 0.5em;\n  font-size: 1em;\n  line-height: 1.25em;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  white-space: nowrap;\n  pointer-events: none; }\n\nh1 {\n  bottom: 0.5em;\n  font-weight: 700; }\n\np {\n  bottom: 1.75em;\n  font-weight: 100; }\n\nhtml, body {\n  background: #081c28;\n  background-image: radial-gradient(#19587d, #081c28); }\n",""])},function(e,t,n){var r=n(27);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return(e-t)*((arguments.length>4&&void 0!==arguments[4]?arguments[4]:1)-r)/(n-t)+r}},,,,,,,function(e,t,n){var r;!function(){"use strict";var i=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6,a=1/6,s=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20;function c(e){var t;t="function"==typeof e?e:e?function(){var e=0,t=0,n=0,r=1,i=function(){var e=4022871197;return function(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)}}();e=i(" "),t=i(" "),n=i(" ");for(var o=0;o<arguments.length;o++)(e-=i(arguments[o]))<0&&(e+=1),(t-=i(arguments[o]))<0&&(t+=1),(n-=i(arguments[o]))<0&&(n+=1);return i=null,function(){var i=2091639*e+2.3283064365386963e-10*r;return e=t,t=n,n=i-(r=0|i)}}(e):Math.random,this.p=f(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var n=0;n<512;n++)this.perm[n]=this.p[255&n],this.permMod12[n]=this.perm[n]%12}function f(e){var t,n=new Uint8Array(256);for(t=0;t<256;t++)n[t]=t;for(t=0;t<255;t++){var r=t+~~(e()*(256-t)),i=n[t];n[t]=n[r],n[r]=i}return n}c.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(e,t){var n,r,a=this.permMod12,s=this.perm,u=this.grad3,c=0,f=0,l=0,d=(e+t)*i,v=Math.floor(e+d),h=Math.floor(t+d),p=(v+h)*o,m=e-(v-p),b=t-(h-p);m>b?(n=1,r=0):(n=0,r=1);var g=m-n+o,w=b-r+o,y=m-1+2*o,x=b-1+2*o,_=255&v,k=255&h,T=.5-m*m-b*b;if(T>=0){var M=3*a[_+s[k]];c=(T*=T)*T*(u[M]*m+u[M+1]*b)}var S=.5-g*g-w*w;if(S>=0){var O=3*a[_+n+s[k+r]];f=(S*=S)*S*(u[O]*g+u[O+1]*w)}var j=.5-y*y-x*x;if(j>=0){var C=3*a[_+1+s[k+1]];l=(j*=j)*j*(u[C]*y+u[C+1]*x)}return 70*(c+f+l)},noise3D:function(e,t,n){var r,i,o,s,u,c,f,l,d,v,h=this.permMod12,p=this.perm,m=this.grad3,b=(e+t+n)*(1/3),g=Math.floor(e+b),w=Math.floor(t+b),y=Math.floor(n+b),x=(g+w+y)*a,_=e-(g-x),k=t-(w-x),T=n-(y-x);_>=k?k>=T?(u=1,c=0,f=0,l=1,d=1,v=0):_>=T?(u=1,c=0,f=0,l=1,d=0,v=1):(u=0,c=0,f=1,l=1,d=0,v=1):k<T?(u=0,c=0,f=1,l=0,d=1,v=1):_<T?(u=0,c=1,f=0,l=0,d=1,v=1):(u=0,c=1,f=0,l=1,d=1,v=0);var M=_-u+a,S=k-c+a,O=T-f+a,j=_-l+2*a,C=k-d+2*a,E=T-v+2*a,z=_-1+.5,A=k-1+.5,L=T-1+.5,P=255&g,R=255&w,B=255&y,N=.6-_*_-k*k-T*T;if(N<0)r=0;else{var U=3*h[P+p[R+p[B]]];r=(N*=N)*N*(m[U]*_+m[U+1]*k+m[U+2]*T)}var D=.6-M*M-S*S-O*O;if(D<0)i=0;else{var q=3*h[P+u+p[R+c+p[B+f]]];i=(D*=D)*D*(m[q]*M+m[q+1]*S+m[q+2]*O)}var W=.6-j*j-C*C-E*E;if(W<0)o=0;else{var I=3*h[P+l+p[R+d+p[B+v]]];o=(W*=W)*W*(m[I]*j+m[I+1]*C+m[I+2]*E)}var F=.6-z*z-A*A-L*L;if(F<0)s=0;else{var $=3*h[P+1+p[R+1+p[B+1]]];s=(F*=F)*F*(m[$]*z+m[$+1]*A+m[$+2]*L)}return 32*(r+i+o+s)},noise4D:function(e,t,n,r){var i,o,a,c,f,l,d,v,h,p,m,b,g,w,y,x,_,k=this.perm,T=this.grad4,M=(e+t+n+r)*s,S=Math.floor(e+M),O=Math.floor(t+M),j=Math.floor(n+M),C=Math.floor(r+M),E=(S+O+j+C)*u,z=e-(S-E),A=t-(O-E),L=n-(j-E),P=r-(C-E),R=0,B=0,N=0,U=0;z>A?R++:B++,z>L?R++:N++,z>P?R++:U++,A>L?B++:N++,A>P?B++:U++,L>P?N++:U++;var D=z-(l=R>=3?1:0)+u,q=A-(d=B>=3?1:0)+u,W=L-(v=N>=3?1:0)+u,I=P-(h=U>=3?1:0)+u,F=z-(p=R>=2?1:0)+2*u,$=A-(m=B>=2?1:0)+2*u,H=L-(b=N>=2?1:0)+2*u,J=P-(g=U>=2?1:0)+2*u,X=z-(w=R>=1?1:0)+3*u,G=A-(y=B>=1?1:0)+3*u,V=L-(x=N>=1?1:0)+3*u,K=P-(_=U>=1?1:0)+3*u,Q=z-1+4*u,Y=A-1+4*u,Z=L-1+4*u,ee=P-1+4*u,te=255&S,ne=255&O,re=255&j,ie=255&C,oe=.6-z*z-A*A-L*L-P*P;if(oe<0)i=0;else{var ae=k[te+k[ne+k[re+k[ie]]]]%32*4;i=(oe*=oe)*oe*(T[ae]*z+T[ae+1]*A+T[ae+2]*L+T[ae+3]*P)}var se=.6-D*D-q*q-W*W-I*I;if(se<0)o=0;else{var ue=k[te+l+k[ne+d+k[re+v+k[ie+h]]]]%32*4;o=(se*=se)*se*(T[ue]*D+T[ue+1]*q+T[ue+2]*W+T[ue+3]*I)}var ce=.6-F*F-$*$-H*H-J*J;if(ce<0)a=0;else{var fe=k[te+p+k[ne+m+k[re+b+k[ie+g]]]]%32*4;a=(ce*=ce)*ce*(T[fe]*F+T[fe+1]*$+T[fe+2]*H+T[fe+3]*J)}var le=.6-X*X-G*G-V*V-K*K;if(le<0)c=0;else{var de=k[te+w+k[ne+y+k[re+x+k[ie+_]]]]%32*4;c=(le*=le)*le*(T[de]*X+T[de+1]*G+T[de+2]*V+T[de+3]*K)}var ve=.6-Q*Q-Y*Y-Z*Z-ee*ee;if(ve<0)f=0;else{var he=k[te+1+k[ne+1+k[re+1+k[ie+1]]]]%32*4;f=(ve*=ve)*ve*(T[he]*Q+T[he+1]*Y+T[he+2]*Z+T[he+3]*ee)}return 27*(i+o+a+c+f)}},c._buildPermutationTable=f,void 0===(r=function(){return c}.call(t,n,t,e))||(e.exports=r),t.SimplexNoise=c,e.exports=c}()},,,function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/noise.wbTKJDC.png"},function(e,t,n){var r=n(39);(e.exports=n(5)(!1)).push([e.i,"html,\nbody {\n  background: #CEDAE8 fixed;\n  background-repeat: no-repeat;\n  background-image: radial-gradient(#eef, rgba(206, 218, 232, 0) 50%), linear-gradient(-45deg, #121117, #CEDAE8 80%);\n  background-size: 300% 300%, 100% 100%;\n  background-position: left -150vw bottom -150vh, center center; }\n\nbody::after {\n  content: '';\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: url("+r(n(93))+");\n  pointer-events: none; }\n",""])},function(e,t,n){var r=n(94);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=c(n(26)),o=c(n(21)),a=c(n(22)),s=c(n(36)),u=c(n(29));function c(e){return e&&e.__esModule?e:{default:e}}n(28),n(95),new a.default({title:"Holiday feels and acid flashbacks",desc:"Fractal ice"});var f=new o.default,l=f.getContext(),d=new s.default,v=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.canvas,o=n.context,a=n.init,s=n.canSplit,u=void 0===s||s,c=n.color,f=void 0===c?{r:236,g:248,b:255}:c,l=n.lifespan,d=void 0===l?1/0:l,v=n.offset,h=void 0===v?{x:{value:Math.round(1e3*Math.random()),offset:0},y:{value:Math.round(1e3*Math.random()),offset:0}}:v;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._vars={age:0,animator:new i.default,canSplit:u,canvas:r,children:[],color:f,context:o,increment:.0025,init:a,length:50,lifespan:d,minSpeed:0,offset:h,position:[]},this._vars.animator.start(function(){"function"==typeof a&&a(),t.update()})}return r(e,[{key:"_move",value:function(){var e=this._vars,t=e.age,n=e.canvas,r=e.increment,i=e.length,o=e.lifespan,a=e.minSpeed,s=e.offset,c=e.speed,f=e.position,l=s.x,v=s.y,h={x:(0,u.default)(d.noise2D(l.value,l.offset),-1,1,0,n.width),y:(0,u.default)(d.noise2D(v.value,v.offset),-1,1,0,n.height)},p=f[f.length-2],m=p?Math.abs(h.x-p.x)+Math.abs(h.y-p.y):0;m&&m<a&&(this._vars.isStopping=!0),(t>o||this._vars.isStopping&&m>c)&&this._stop(),f.push(h),i<f.length&&f.shift(),this._vars.speed=m,this._vars.age++,this._vars.offset={x:{value:l.value+r,offset:l.offset},y:{value:v.value+r,offset:v.offset}}}},{key:"_draw",value:function(){var e=this._vars,t=e.color,n=e.context,r=e.position,i=e.length;r.forEach(function(e,o){var a=e.x,s=e.y;if(0!==o){var u=r[o-1],c=o/i;n.beginPath(),n.moveTo(u.x,u.y),n.strokeStyle="rgba("+t.r+", "+t.g+", "+t.b+", "+c+")",n.lineTo(a,s),n.stroke()}})}},{key:"_stop",value:function(){this._vars.animator.stop(),this._vars.isStopped=!0}},{key:"_split",value:function(){var t=this._vars,n=t.age,r=t.canvas,i=t.context,o=t.children,a=t.offset;o.push(new e({canvas:r,context:i,canSplit:!1,lifespan:50,offset:{x:{value:a.x.value,offset:a.x.offset+.001*n},y:{value:a.y.value,offset:a.y.offset-.001*n}}}))}},{key:"update",value:function(){this._vars.isStopped||this._move(),this._vars.canSplit&&!this._vars.isStopped&&Math.round(Math.random())&&this._split(),this._draw()}}]),e}();l.lineJoin="round",window.comet=new v({canvas:f,context:l,init:function(){return l.clearRect(0,0,f.width,f.height)}})},function(e,t,n){e.exports=n(96)}]);