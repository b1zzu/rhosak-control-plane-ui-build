(self.webpackChunkmk_ui_frontend=self.webpackChunkmk_ui_frontend||[]).push([[71],{6610:(e,o,t)=>{"use strict";function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}t.d(o,{Z:()=>n})},5991:(e,o,t)=>{"use strict";function n(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}t.d(o,{Z:()=>i})},26071:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>L});var n=t(6610),i=t(5991),a=[],r=a.forEach,s=a.slice;function u(e){return r.call(s.call(arguments,1),(function(o){if(o)for(var t in o)void 0===e[t]&&(e[t]=o[t])})),e}var c=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,l=function(e,o,t){var n=t||{};n.path=n.path||"/";var i=e+"="+encodeURIComponent(o);if(n.maxAge>0){var a=n.maxAge-0;if(isNaN(a))throw new Error("maxAge should be a Number");i+="; Max-Age="+Math.floor(a)}if(n.domain){if(!c.test(n.domain))throw new TypeError("option domain is invalid");i+="; Domain="+n.domain}if(n.path){if(!c.test(n.path))throw new TypeError("option path is invalid");i+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");i+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i},p=function(e,o,t,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};t&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+60*t*1e3)),n&&(i.domain=n),document.cookie=l(e,encodeURIComponent(o),i)},d=function(e){for(var o=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var i=t[n];" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(o))return i.substring(o.length,i.length)}return null},g={name:"cookie",lookup:function(e){var o;if(e.lookupCookie&&"undefined"!=typeof document){var t=d(e.lookupCookie);t&&(o=t)}return o},cacheUserLanguage:function(e,o){o.lookupCookie&&"undefined"!=typeof document&&p(o.lookupCookie,e,o.cookieMinutes,o.cookieDomain,o.cookieOptions)}},f={name:"querystring",lookup:function(e){var o;if("undefined"!=typeof window)for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var i=t[n].indexOf("=");if(i>0)t[n].substring(0,i)===e.lookupQuerystring&&(o=t[n].substring(i+1))}return o}},h=null,m=function(){if(null!==h)return h;try{h="undefined"!==window&&null!==window.localStorage;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(e){h=!1}return h},v={name:"localStorage",lookup:function(e){var o;if(e.lookupLocalStorage&&m()){var t=window.localStorage.getItem(e.lookupLocalStorage);t&&(o=t)}return o},cacheUserLanguage:function(e,o){o.lookupLocalStorage&&m()&&window.localStorage.setItem(o.lookupLocalStorage,e)}},k=null,w=function(){if(null!==k)return k;try{k="undefined"!==window&&null!==window.sessionStorage;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(e){k=!1}return k},S={name:"sessionStorage",lookup:function(e){var o;if(e.lookupSessionStorage&&w()){var t=window.sessionStorage.getItem(e.lookupSessionStorage);t&&(o=t)}return o},cacheUserLanguage:function(e,o){o.lookupSessionStorage&&w()&&window.sessionStorage.setItem(o.lookupSessionStorage,e)}},y={name:"navigator",lookup:function(e){var o=[];if("undefined"!=typeof navigator){if(navigator.languages)for(var t=0;t<navigator.languages.length;t++)o.push(navigator.languages[t]);navigator.userLanguage&&o.push(navigator.userLanguage),navigator.language&&o.push(navigator.language)}return o.length>0?o:void 0}},x={name:"htmlTag",lookup:function(e){var o,t=e.htmlTag||("undefined"!=typeof document?document.documentElement:null);return t&&"function"==typeof t.getAttribute&&(o=t.getAttribute("lang")),o}},b={name:"path",lookup:function(e){var o;if("undefined"!=typeof window){var t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(t instanceof Array)if("number"==typeof e.lookupFromPathIndex){if("string"!=typeof t[e.lookupFromPathIndex])return;o=t[e.lookupFromPathIndex].replace("/","")}else o=t[0].replace("/","")}return o}},I={name:"subdomain",lookup:function(e){var o;if("undefined"!=typeof window){var t=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);t instanceof Array&&(o="number"==typeof e.lookupFromSubdomainIndex?t[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):t[0].replace("http://","").replace("https://","").replace(".",""))}return o}};var C=function(){function e(o){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,n.Z)(this,e),this.type="languageDetector",this.detectors={},this.init(o,t)}return(0,i.Z)(e,[{key:"init",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=u(o,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=t,this.addDetector(g),this.addDetector(f),this.addDetector(v),this.addDetector(S),this.addDetector(y),this.addDetector(x),this.addDetector(b),this.addDetector(I)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var o=this;e||(e=this.options.order);var t=[];return e.forEach((function(e){if(o.detectors[e]){var n=o.detectors[e].lookup(o.options);n&&"string"==typeof n&&(n=[n]),n&&(t=t.concat(n))}})),this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}},{key:"cacheUserLanguage",value:function(e,o){var t=this;o||(o=this.options.caches),o&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||o.forEach((function(o){t.detectors[o]&&t.detectors[o].cacheUserLanguage(e,t.options)})))}}]),e}();C.type="languageDetector";const L=C}}]);
//# sourceMappingURL=71.ef3ae824899e0fd58958.js.map