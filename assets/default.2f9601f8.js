import{_ as p}from"./index.403375ac.js";var d=function(e,a){var i=p({},e);return Object.keys(a).forEach(function(r){var t=i[r];if(t)t.type||t.default?t.default=a[r]:t.def?t.def(a[r]):i[r]={type:t,default:a[r]};else throw new Error("not have ".concat(r," prop"))}),i};const w=d;var u=function(e){return setTimeout(e,16)},c=function(e){return clearTimeout(e)};typeof window<"u"&&"requestAnimationFrame"in window&&(u=function(e){return window.requestAnimationFrame(e)},c=function(e){return window.cancelAnimationFrame(e)});var o=0,f=new Map;function s(n){f.delete(n)}function l(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;o+=1;var a=o;function i(r){if(r===0)s(a),n();else{var t=u(function(){i(r-1)});f.set(a,t)}}return i(e),a}l.cancel=function(n){var e=f.get(n);return s(e),c(e)};export{w as i,l as w};
