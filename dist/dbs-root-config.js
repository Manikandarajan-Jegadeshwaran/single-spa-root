System.register(["single-spa"],(function(e,t){var r={};return{setters:[function(e){r.registerApplication=e.registerApplication,r.start=e.start}],execute:function(){e((()=>{var e={722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{t.R=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,s=n.length;o!==t&&s>=0;)"/"===n[--s]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var a=n.slice(0,s+1);return r.protocol+"//"+r.host+a};Number.isInteger},645:e=>{"use strict";e.exports=r}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var s=n[t]={exports:{}};return e[t](s,s.exports,o),s.exports}o.y=t,o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var s={};return(0,o(722).s)(1),(()=>{"use strict";o.r(s);var e=o(645);(0,e.registerApplication)({name:"@single-spa/welcome",app:function(){return System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js")},activeWhen:["/"]}),(0,e.start)({urlRerouteOnly:!0})})(),s})())}}}));
//# sourceMappingURL=dbs-root-config.js.map