if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const o=e=>n(e,c),l={module:{uri:c},exports:r,require:o};s[c]=Promise.all(t.map((e=>l[e]||o(e)))).then((e=>(i(...e),r)))}}define(["./workbox-7bf00c7c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"setapp"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/set-game-web/css/app.caec69cc.css",revision:null},{url:"/set-game-web/fonts/Jost-Medium.71d078ff.ttf",revision:null},{url:"/set-game-web/index.html",revision:"6d2d6e6ad35ec942d3288fdfe3061adc"},{url:"/set-game-web/js/app.d1cd52e7.js",revision:null},{url:"/set-game-web/js/chunk-vendors.de977c2f.js",revision:null},{url:"/set-game-web/manifest.json",revision:"9620434d10311f37f59234e8e2406d25"},{url:"/set-game-web/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{}),e.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|ico)/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/.*\.(?:js|css|html)/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET"),e.registerRoute(/^\/index\.html$/,new e.CacheFirst({cacheName:"html-cache",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/your-api-url\/.*/,new e.NetworkFirst({cacheName:"api-cache",networkTimeoutSeconds:10,plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
