"use strict";(self["webpackChunksetapp"]=self["webpackChunksetapp"]||[]).push([[504],{4046:function(e,t,n){n.d(t,{Am:function(){return L},FA:function(){return k},I9:function(){return M},Im:function(){return x},Ku:function(){return H},T9:function(){return g},Tj:function(){return v},Uj:function(){return c},XA:function(){return m},ZQ:function(){return _},bD:function(){return N},c1:function(){return w},cY:function(){return y},eX:function(){return O},g:function(){return R},hp:function(){return U},jZ:function(){return b},lT:function(){return S},lV:function(){return E},sr:function(){return I},tD:function(){return j},u:function(){return u},zW:function(){return T}});n(4114),n(8992),n(3949),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,a=o?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new s;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return o.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/set-game-web/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},v=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},m=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function b(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function w(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function I(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function E(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function S(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function T(){try{return"object"===typeof indexedDB}catch(e){return!1}}function O(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=C,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?P(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new R(r,s,n);return a}}function P(e,t){return e.replace(A,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(D(n)&&D(o)){if(!N(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function D(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function M(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){const n=new F(e,t);return n.subscribe.bind(n)}class F{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=V(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=$),void 0===r.error&&(r.error=$),void 0===r.complete&&(r.complete=$);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function V(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function $(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){n.d(t,{C4:function(){return S},EW:function(){return Ne},Gc:function(){return me},IG:function(){return Te},Kh:function(){return ge},Pr:function(){return Ae},R1:function(){return ke},X2:function(){return u},bl:function(){return T},fE:function(){return Ie},g8:function(){return be},hV:function(){return Fe},hZ:function(){return M},i9:function(){return Re},ju:function(){return Ee},lJ:function(){return Oe},qA:function(){return j},u4:function(){return L},ux:function(){return Se},wB:function(){return je},yC:function(){return s}});n(4114),n(9678),n(7145),n(1658),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(3949),n(1454),n(7550);var r=n(4232);let i,o;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function a(){return i}const c=new WeakSet;class u{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,O(this),g(this);const e=o,t=I;o=this,I=!0;try{return this.fn()}finally{0,m(this),o=e,I=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)b(e);this.deps=this.depsTail=void 0,O(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y(this)&&this.run()}get dirty(){return y(this)}}let l,h,d=0;function f(e,t=!1){if(e.flags|=8,t)return e.next=h,void(h=e);e.next=l,l=e}function p(){d++}function v(){if(--d>0)return;if(h){let e=h;h=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(l){let n=l;l=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function g(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function m(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),b(r),w(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function y(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(_(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function _(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===C)return;e.globalVersion=C;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!y(e))return void(e.flags&=-3);const n=o,i=I;o=e,I=!0;try{g(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e._value=n,t.version++)}catch(s){throw t.version++,s}finally{o=n,I=i,m(e),e.flags&=-3}}function b(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)b(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function w(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let I=!0;const E=[];function S(){E.push(I),I=!1}function T(){const e=E.pop();I=void 0===e||e}function O(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=o;o=void 0;try{t()}finally{o=e}}}let C=0;class R{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class k{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!o||!I||o===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==o)t=this.activeLink=new R(o,this),o.deps?(t.prevDep=o.depsTail,o.depsTail.nextDep=t,o.depsTail=t):o.deps=o.depsTail=t,P(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=o.depsTail,t.nextDep=void 0,o.depsTail.nextDep=t,o.depsTail=t,o.deps===t&&(o.deps=e)}return t}trigger(e){this.version++,C++,this.notify(e)}notify(e){p();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{v()}}}function P(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)P(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const A=new WeakMap,x=Symbol(""),N=Symbol(""),D=Symbol("");function L(e,t,n){if(I&&o){let t=A.get(e);t||A.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new k),r.map=t,r.key=n),r.track()}}function M(e,t,n,i,o,s){const a=A.get(e);if(!a)return void C++;const c=e=>{e&&e.trigger()};if(p(),"clear"===t)a.forEach(c);else{const o=(0,r.cy)(e),s=o&&(0,r.yI)(n);if(o&&"length"===n){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n===D||!(0,r.Bm)(n)&&n>=e)&&c(t)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),s&&c(a.get(D)),t){case"add":o?s&&c(a.get("length")):(c(a.get(x)),(0,r.CE)(e)&&c(a.get(N)));break;case"delete":o||(c(a.get(x)),(0,r.CE)(e)&&c(a.get(N)));break;case"set":(0,r.CE)(e)&&c(a.get(x));break}}v()}function U(e){const t=Se(e);return t===e?t:(L(t,"iterate",D),Ie(e)?t:t.map(Oe))}function j(e){return L(e=Se(e),"iterate",D),e}const F={__proto__:null,[Symbol.iterator](){return V(this,Symbol.iterator,Oe)},concat(...e){return U(this).concat(...e.map((e=>(0,r.cy)(e)?U(e):e)))},entries(){return V(this,"entries",(e=>(e[1]=Oe(e[1]),e)))},every(e,t){return H(this,"every",e,t,void 0,arguments)},filter(e,t){return H(this,"filter",e,t,(e=>e.map(Oe)),arguments)},find(e,t){return H(this,"find",e,t,Oe,arguments)},findIndex(e,t){return H(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return H(this,"findLast",e,t,Oe,arguments)},findLastIndex(e,t){return H(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return H(this,"forEach",e,t,void 0,arguments)},includes(...e){return B(this,"includes",e)},indexOf(...e){return B(this,"indexOf",e)},join(e){return U(this).join(e)},lastIndexOf(...e){return B(this,"lastIndexOf",e)},map(e,t){return H(this,"map",e,t,void 0,arguments)},pop(){return z(this,"pop")},push(...e){return z(this,"push",e)},reduce(e,...t){return W(this,"reduce",e,t)},reduceRight(e,...t){return W(this,"reduceRight",e,t)},shift(){return z(this,"shift")},some(e,t){return H(this,"some",e,t,void 0,arguments)},splice(...e){return z(this,"splice",e)},toReversed(){return U(this).toReversed()},toSorted(e){return U(this).toSorted(e)},toSpliced(...e){return U(this).toSpliced(...e)},unshift(...e){return z(this,"unshift",e)},values(){return V(this,"values",Oe)}};function V(e,t,n){const r=j(e),i=r[t]();return r===e||Ie(e)||(i._next=i.next,i.next=()=>{const e=i._next();return e.value&&(e.value=n(e.value)),e}),i}const $=Array.prototype;function H(e,t,n,r,i,o){const s=j(e),a=s!==e&&!Ie(e),c=s[t];if(c!==$[t]){const t=c.apply(e,o);return a?Oe(t):t}let u=n;s!==e&&(a?u=function(t,r){return n.call(this,Oe(t),r,e)}:n.length>2&&(u=function(t,r){return n.call(this,t,r,e)}));const l=c.call(s,u,r);return a&&i?i(l):l}function W(e,t,n,r){const i=j(e);let o=n;return i!==e&&(Ie(e)?n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}):o=function(t,r,i){return n.call(this,t,Oe(r),i,e)}),i[t](o,...r)}function B(e,t,n){const r=Se(e);L(r,"iterate",D);const i=r[t](...n);return-1!==i&&!1!==i||!Ee(n[0])?i:(n[0]=Se(n[0]),r[t](...n))}function z(e,t,n=[]){S(),p();const r=Se(e)[t].apply(e,n);return v(),T(),r}const K=(0,r.pD)("__proto__,__v_isRef,__isVue"),G=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm));function Z(e){(0,r.Bm)(e)||(e=String(e));const t=Se(this);return L(t,"has",e),t.hasOwnProperty(e)}class q{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const i=this._isReadonly,o=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return o;if("__v_raw"===t)return n===(i?o?fe:de:o?he:le).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=(0,r.cy)(e);if(!i){let e;if(s&&(e=F[t]))return e;if("hasOwnProperty"===t)return Z}const a=Reflect.get(e,t,Re(e)?e:n);return((0,r.Bm)(t)?G.has(t):K(t))?a:(i||L(e,"get",t),o?a:Re(a)?s&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?ye(a):ge(a):a)}}class J extends q{constructor(e=!1){super(!1,e)}set(e,t,n,i){let o=e[t];if(!this._isShallow){const t=we(o);if(Ie(n)||we(n)||(o=Se(o),n=Se(n)),!(0,r.cy)(e)&&Re(o)&&!Re(n))return!t&&(o.value=n,!0)}const s=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,Re(e)?e:i);return e===Se(i)&&(s?(0,r.$H)(n,o)&&M(e,"set",t,n,o):M(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&M(e,"delete",t,void 0,i),o}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&G.has(t)||L(e,"has",t),n}ownKeys(e){return L(e,"iterate",(0,r.cy)(e)?"length":x),Reflect.ownKeys(e)}}class X extends q{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Y=new J,Q=new X,ee=new J(!0),te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function re(e,t,n){return function(...i){const o=this["__v_raw"],s=Se(o),a=(0,r.CE)(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),h=n?te:t?Ce:Oe;return!t&&L(s,"iterate",u?N:x),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function oe(e,t){const n={get(n){const i=this["__v_raw"],o=Se(i),s=Se(n);e||((0,r.$H)(n,s)&&L(o,"get",n),L(o,"get",s));const{has:a}=ne(o),c=t?te:e?Ce:Oe;return a.call(o,n)?c(i.get(n)):a.call(o,s)?c(i.get(s)):void(i!==o&&i.get(n))},get size(){const t=this["__v_raw"];return!e&&L(Se(t),"iterate",x),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],i=Se(n),o=Se(t);return e||((0,r.$H)(t,o)&&L(i,"has",t),L(i,"has",o)),t===o?n.has(t):n.has(t)||n.has(o)},forEach(n,r){const i=this,o=i["__v_raw"],s=Se(o),a=t?te:e?Ce:Oe;return!e&&L(s,"iterate",x),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}};(0,r.X$)(n,e?{add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear")}:{add(e){t||Ie(e)||we(e)||(e=Se(e));const n=Se(this),r=ne(n),i=r.has.call(n,e);return i||(n.add(e),M(n,"add",e,e)),this},set(e,n){t||Ie(n)||we(n)||(n=Se(n));const i=Se(this),{has:o,get:s}=ne(i);let a=o.call(i,e);a||(e=Se(e),a=o.call(i,e));const c=s.call(i,e);return i.set(e,n),a?(0,r.$H)(n,c)&&M(i,"set",e,n,c):M(i,"add",e,n),this},delete(e){const t=Se(this),{has:n,get:r}=ne(t);let i=n.call(t,e);i||(e=Se(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&M(t,"delete",e,void 0,o),s},clear(){const e=Se(this),t=0!==e.size,n=void 0,r=e.clear();return t&&M(e,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=re(r,e,t)})),n}function se(e,t){const n=oe(e,t);return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,o)}const ae={get:se(!1,!1)},ce={get:se(!1,!0)},ue={get:se(!0,!1)};const le=new WeakMap,he=new WeakMap,de=new WeakMap,fe=new WeakMap;function pe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ve(e){return e["__v_skip"]||!Object.isExtensible(e)?0:pe((0,r.Zf)(e))}function ge(e){return we(e)?e:_e(e,!1,Y,ae,le)}function me(e){return _e(e,!1,ee,ce,he)}function ye(e){return _e(e,!0,Q,ue,de)}function _e(e,t,n,i,o){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=ve(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function be(e){return we(e)?be(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function we(e){return!(!e||!e["__v_isReadonly"])}function Ie(e){return!(!e||!e["__v_isShallow"])}function Ee(e){return!!e&&!!e["__v_raw"]}function Se(e){const t=e&&e["__v_raw"];return t?Se(t):e}function Te(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Oe=e=>(0,r.Gv)(e)?ge(e):e,Ce=e=>(0,r.Gv)(e)?ye(e):e;function Re(e){return!!e&&!0===e["__v_isRef"]}function ke(e){return Re(e)?e.value:e}const Pe={get:(e,t,n)=>"__v_raw"===t?e:ke(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ae(e){return be(e)?e:new Proxy(e,Pe)}class xe{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new k(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=C-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||o===this))return f(this,!0),!0}get value(){const e=this.dep.track();return _(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ne(e,t,n=!1){let i,o;(0,r.Tn)(e)?i=e:(i=e.get,o=e.set);const s=new xe(i,o,n);return s}const De={},Le=new WeakMap;let Me;function Ue(e,t=!1,n=Me){if(n){let t=Le.get(n);t||Le.set(n,t=[]),t.push(e)}else 0}function je(e,t,n=r.MZ){const{immediate:i,deep:o,once:s,scheduler:c,augmentJob:l,call:h}=n,d=e=>o?e:Ie(e)||!1===o||0===o?Fe(e,1):Fe(e);let f,p,v,g,m=!1,y=!1;if(Re(e)?(p=()=>e.value,m=Ie(e)):be(e)?(p=()=>d(e),m=!0):(0,r.cy)(e)?(y=!0,m=e.some((e=>be(e)||Ie(e))),p=()=>e.map((e=>Re(e)?e.value:be(e)?d(e):(0,r.Tn)(e)?h?h(e,2):e():void 0))):p=(0,r.Tn)(e)?t?h?()=>h(e,2):e:()=>{if(v){S();try{v()}finally{T()}}const t=Me;Me=f;try{return h?h(e,3,[g]):e(g)}finally{Me=t}}:r.tE,t&&o){const e=p,t=!0===o?1/0:o;p=()=>Fe(e(),t)}const _=a(),b=()=>{f.stop(),_&&_.active&&(0,r.TF)(_.effects,f)};if(s&&t){const e=t;t=(...t)=>{e(...t),b()}}let w=y?new Array(e.length).fill(De):De;const I=e=>{if(1&f.flags&&(f.dirty||e))if(t){const e=f.run();if(o||m||(y?e.some(((e,t)=>(0,r.$H)(e,w[t]))):(0,r.$H)(e,w))){v&&v();const n=Me;Me=f;try{const n=[e,w===De?void 0:y&&w[0]===De?[]:w,g];h?h(t,3,n):t(...n),w=e}finally{Me=n}}}else f.run()};return l&&l(I),f=new u(p),f.scheduler=c?()=>c(I,!1):I,g=e=>Ue(e,!1,f),v=f.onStop=()=>{const e=Le.get(f);if(e){if(h)h(e,4);else for(const t of e)t();Le.delete(f)}},t?i?I(!0):w=f.run():c?c(I.bind(null,!0),!0):f.run(),b.pause=f.pause.bind(f),b.resume=f.resume.bind(f),b.stop=b,b}function Fe(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,Re(e))Fe(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)Fe(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{Fe(e,t,n)}));else if((0,r.Qd)(e)){for(const r in e)Fe(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Fe(e[r],t,n)}return e}},6768:function(e,t,n){n.d(t,{$u:function(){return ie},CE:function(){return Gt},Df:function(){return $},FK:function(){return Mt},Gy:function(){return L},K9:function(){return ut},Lk:function(){return Qt},MZ:function(){return V},OW:function(){return F},Q3:function(){return sn},QP:function(){return U},Wv:function(){return Zt},bF:function(){return en},bo:function(){return k},dY:function(){return g},eW:function(){return on},g2:function(){return de},nI:function(){return gn},pI:function(){return ge},qL:function(){return s},uX:function(){return Ht}});n(4114),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(4520),n(3949),n(1454),n(8872),n(7550);var r=n(144),i=n(4232);function o(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function s(e,t,n,r){if((0,i.Tn)(e)){const s=o(e,t,n,r);return s&&(0,i.yL)(s)&&s.catch((e=>{a(e,t,n)})),s}if((0,i.cy)(e)){const i=[];for(let o=0;o<e.length;o++)i.push(s(e[o],t,n,r));return i}}function a(e,t,n,s=!0){const a=t?t.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||i.MZ;if(t){let i=t.parent;const s=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,a))return;i=i.parent}if(u)return(0,r.C4)(),o(u,null,10,[e,s,a]),void(0,r.bl)()}c(e,n,a,s,l)}function c(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const u=[];let l=-1;const h=[];let d=null,f=0;const p=Promise.resolve();let v=null;function g(e){const t=v||p;return e?t.then(this?e.bind(this):e):t}function m(e){let t=l+1,n=u.length;while(t<n){const r=t+n>>>1,i=u[r],o=E(i);o<e||o===e&&2&i.flags?t=r+1:n=r}return t}function y(e){if(!(1&e.flags)){const t=E(e),n=u[u.length-1];!n||!(2&e.flags)&&t>=E(n)?u.push(e):u.splice(m(t),0,e),e.flags|=1,_()}}function _(){v||(v=p.then(S))}function b(e){(0,i.cy)(e)?h.push(...e):d&&-1===e.id?d.splice(f+1,0,e):1&e.flags||(h.push(e),e.flags|=1),_()}function w(e,t,n=l+1){for(0;n<u.length;n++){const t=u[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,u.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function I(e){if(h.length){const e=[...new Set(h)].sort(((e,t)=>E(e)-E(t)));if(h.length=0,d)return void d.push(...e);for(d=e,f=0;f<d.length;f++){const e=d[f];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}d=null,f=0}}const E=e=>null==e.id?2&e.flags?-1:1/0:e.id;function S(e){i.tE;try{for(l=0;l<u.length;l++){const e=u[l];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),o(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;l<u.length;l++){const e=u[l];e&&(e.flags&=-2)}l=-1,u.length=0,I(e),v=null,(u.length||h.length)&&S(e)}}let T=null,O=null;function C(e){const t=T;return T=e,O=e&&e.type.__scopeId||null,t}function R(e,t=T,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&zt(-1);const i=C(t);let o;try{o=e(...n)}finally{C(i),r._d&&zt(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function k(e,t){if(null===T)return e;const n=An(T),o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,a,c,u=i.MZ]=t[s];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,r.hV)(a),o.push({dir:e,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function P(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const u=o[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),s(l,n,8,[e.el,u,e,t]),(0,r.bl)())}}const A=Symbol("_vte"),x=e=>e.__isTeleport;const N=Symbol("_leaveCb"),D=Symbol("_enterCb");function L(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ne((()=>{e.isMounted=!0})),oe((()=>{e.isUnmounting=!0})),e}const M=[Function,Array],U={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:M,onEnter:M,onAfterEnter:M,onEnterCancelled:M,onBeforeLeave:M,onLeave:M,onAfterLeave:M,onLeaveCancelled:M,onBeforeAppear:M,onAppear:M,onAfterAppear:M,onAppearCancelled:M};function j(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function F(e,t,n,r,o){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:v,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:_,onAfterAppear:b,onAppearCancelled:w}=t,I=String(e.key),E=j(n,e),S=(e,t)=>{e&&s(e,r,9,t)},T=(e,t)=>{const n=t[1];S(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},O={mode:c,persisted:u,beforeEnter(t){let r=l;if(!n.isMounted){if(!a)return;r=y||l}t[N]&&t[N](!0);const i=E[I];i&&Jt(e,i)&&i.el[N]&&i.el[N](),S(r,[t])},enter(e){let t=h,r=d,i=f;if(!n.isMounted){if(!a)return;t=_||h,r=b||d,i=w||f}let o=!1;const s=e[D]=t=>{o||(o=!0,S(t?i:r,[e]),O.delayedLeave&&O.delayedLeave(),e[D]=void 0)};t?T(t,[e,s]):s()},leave(t,r){const i=String(e.key);if(t[D]&&t[D](!0),n.isUnmounting)return r();S(p,[t]);let o=!1;const s=t[N]=n=>{o||(o=!0,r(),S(n?m:g,[t]),t[N]=void 0,E[i]===e&&delete E[i])};E[i]=e,v?T(v,[t,s]):s()},clone(e){const i=F(e,t,n,r,o);return o&&o(i),i}};return O}function V(e,t){6&e.shapeFlag&&e.component?(e.transition=t,V(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Mt?(128&s.patchFlag&&i++,r=r.concat($(s.children,t,a))):(t||s.type!==jt)&&r.push(null!=a?rn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function H(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function W(e,t,n,s,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>W(e,t&&((0,i.cy)(t)?t[r]:t),n,s,a)));if(B(s)&&!a)return void(512&s.shapeFlag&&s.type.__asyncResolved&&s.component.subTree.component&&W(e,t,n,s.component.subTree));const c=4&s.shapeFlag?An(s.component):s.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState,v=(0,r.ux)(p),g=p===i.MZ?()=>!1:e=>(0,i.$3)(v,e);if(null!=d&&d!==h&&((0,i.Kg)(d)?(f[d]=null,g(d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))o(h,l,12,[u,f]);else{const t=(0,i.Kg)(h),o=(0,r.i9)(h);if(t||o){const r=()=>{if(e.f){const n=t?g(h)?p[h]:f[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],g(h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,g(h)&&(p[h]=u)):o&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,ct(r,n)):r()}else 0}}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const B=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const z=e=>e.type.__isKeepAlive;RegExp,RegExp;function K(e,t){return(0,i.cy)(e)?e.some((e=>K(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&(e.lastIndex=0,e.test(t))}function G(e,t){q(e,"a",t)}function Z(e,t){q(e,"da",t)}function q(e,t,n=vn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Q(t,r,n),n){let e=n.parent;while(e&&e.parent)z(e.parent.vnode)&&J(r,t,n,e),e=e.parent}}function J(e,t,n,r){const o=Q(t,e,r,!0);se((()=>{(0,i.TF)(r[t],o)}),n)}function X(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Y(e){return 128&e.shapeFlag?e.ssContent:e}function Q(e,t,n=vn,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{(0,r.C4)();const o=_n(n),a=s(t,n,e,i);return o(),(0,r.bl)(),a});return i?o.unshift(a):o.push(a),a}}const ee=e=>(t,n=vn)=>{Sn&&"sp"!==e||Q(e,((...e)=>t(...e)),n)},te=ee("bm"),ne=ee("m"),re=ee("bu"),ie=ee("u"),oe=ee("bum"),se=ee("um"),ae=ee("sp"),ce=ee("rtg"),ue=ee("rtc");function le(e,t=vn){Q("ec",e,t)}const he="components";function de(e,t){return pe(he,e,!0,t)||e}const fe=Symbol.for("v-ndc");function pe(e,t,n=!0,r=!1){const o=T||vn;if(o){const n=o.type;if(e===he){const e=xn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const s=ve(o[e]||n[e],t)||ve(o.appContext[e],t);return!s&&r?n:s}}function ve(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}function ge(e,t,n,o){let s;const a=n&&n[o],c=(0,i.cy)(e);if(c||(0,i.Kg)(e)){const n=c&&(0,r.g8)(e);let i=!1;n&&(i=!(0,r.fE)(e),e=(0,r.qA)(e)),s=new Array(e.length);for(let o=0,c=e.length;o<c;o++)s[o]=t(i?(0,r.lJ)(e[o]):e[o],o,void 0,a&&a[o])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,a&&a[r])}}else s=[];return n&&(n[o]=s),s}const me=e=>e?wn(e)?An(e):me(e.parent):null,ye=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>me(e.parent),$root:e=>me(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ce(e),$forceUpdate:e=>e.f||(e.f=()=>{y(e.update)}),$nextTick:e=>e.n||(e.n=g.bind(e.proxy)),$watch:e=>It.bind(e)}),_e=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),be={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(_e(o,t))return c[t]=1,o[t];if(s!==i.MZ&&(0,i.$3)(s,t))return c[t]=2,s[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Ie&&(c[t]=0)}}const d=ye[t];let f,p;return d?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return _e(o,t)?(o[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||_e(t,a)||(c=s[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(ye,a)||(0,i.$3)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function we(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ie=!0;function Ee(e){const t=Ce(e),n=e.proxy,o=e.ctx;Ie=!1,t.beforeCreate&&Te(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:v,updated:g,activated:m,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:I,render:E,renderTracked:S,renderTriggered:T,errorCaptured:O,serverPrefetch:C,expose:R,inheritAttrs:k,components:P,directives:A,filters:x}=t,N=null;if(h&&Se(h,o,N),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ie=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const s=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=Dn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Oe(u[r],o,n,r);if(l){const e=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{$e(t,e[t])}))}function D(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Te(d,e,"c"),D(te,f),D(ne,p),D(re,v),D(ie,g),D(G,m),D(Z,y),D(le,O),D(ue,S),D(ce,T),D(oe,b),D(se,I),D(ae,C),(0,i.cy)(R))if(R.length){const t=e.exposed||(e.exposed={});R.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.tE&&(e.render=E),null!=k&&(e.inheritAttrs=k),P&&(e.components=P),A&&(e.directives=A),C&&H(e)}function Se(e,t,n=i.tE){(0,i.cy)(e)&&(e=xe(e));for(const o in e){const n=e[o];let s;s=(0,i.Gv)(n)?"default"in n?He(n.from||o,n.default,!0):He(n.from||o):He(n),(0,r.i9)(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Te(e,t,n){s((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Oe(e,t,n,r){let o=r.includes(".")?Et(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&bt(o,n)}else if((0,i.Tn)(e))bt(o,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>Oe(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&bt(o,r,e)}else 0}function Ce(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let u;return c?u=c:o.length||n||r?(u={},o.length&&o.forEach((e=>Re(u,e,a,!0))),Re(u,t,a)):u=t,(0,i.Gv)(t)&&s.set(t,u),u}function Re(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Re(e,o,n,!0),i&&i.forEach((t=>Re(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=ke[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const ke={data:Pe,props:Le,emits:Le,methods:De,computed:De,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:De,directives:De,watch:Me,provide:Pe,inject:Ae};function Pe(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function Ae(e,t){return De(xe(e),xe(t))}function xe(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function De(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function Le(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),we(e),we(null!=t?t:{})):t}function Me(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=Ne(e[r],t[r]);return n}function Ue(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let je=0;function Fe(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const o=Ue(),a=new WeakSet,c=[];let u=!1;const l=o.app={_uid:je++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Ln,get config(){return o.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,i.Tn)(e.install)?(a.add(e),e.install(l,...t)):(0,i.Tn)(e)&&(a.add(e),e(l,...t))),l},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),l},component(e,t){return t?(o.components[e]=t,l):o.components[e]},directive(e,t){return t?(o.directives[e]=t,l):o.directives[e]},mount(i,s,a){if(!u){0;const c=l._ceVNode||en(n,r);return c.appContext=o,!0===a?a="svg":!1===a&&(a=void 0),s&&t?t(c,i):e(c,i,a),u=!0,l._container=i,i.__vue_app__=l,An(c.component)}},onUnmount(e){c.push(e)},unmount(){u&&(s(c,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return o.provides[e]=t,l},runWithContext(e){const t=Ve;Ve=l;try{return e()}finally{Ve=t}}};return l}}let Ve=null;function $e(e,t){if(vn){let n=vn.provides;const r=vn.parent&&vn.parent.provides;r===n&&(n=vn.provides=Object.create(r)),n[e]=t}else 0}function He(e,t,n=!1){const r=vn||T;if(r||Ve){const o=Ve?Ve._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const We={},Be=()=>Object.create(We),ze=e=>Object.getPrototypeOf(e)===We;function Ke(e,t,n,i=!1){const o={},s=Be();e.propsDefaults=Object.create(null),Ze(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:(0,r.Gc)(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Ge(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.ux)(s),[l]=e.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;Ze(e,t,s,a)&&(h=!0);for(const o in u)t&&((0,i.$3)(t,o)||(r=(0,i.Tg)(o))!==o&&(0,i.$3)(t,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=qe(l,u,o,void 0,e,!0)):delete s[o]);if(a!==u)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Ct(e.emitsOptions,o))continue;const c=t[o];if(l)if((0,i.$3)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const t=(0,i.PT)(o);s[t]=qe(l,u,t,c,e,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function Ze(e,t,n,o){const[s,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const l=t[r];let h;s&&(0,i.$3)(s,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:Ct(e.emitsOptions,r)||r in o&&l===o[r]||(o[r]=l,u=!0)}if(a){const t=(0,r.ux)(n),o=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=qe(s,t,c,o[c],e,!(0,i.$3)(o,c))}}return u}function qe(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=o;if(n in i)r=i[n];else{const s=_n(o);r=i[n]=e.call(null,t),s()}}else r=e;o.ce&&o.ce._setProp(n,r)}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const Je=new WeakMap;function Xe(e,t,n=!1){const r=n?Je:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!(0,i.Tn)(e)){const r=e=>{u=!0;const[n,r]=Xe(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(s))for(let h=0;h<s.length;h++){0;const e=(0,i.PT)(s[h]);Ye(e)&&(a[e]=i.MZ)}else if(s){0;for(const e in s){const t=(0,i.PT)(e);if(Ye(t)){const n=s[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),o=r.type;let u=!1,l=!0;if((0,i.cy)(o))for(let e=0;e<o.length;++e){const t=o[e],n=(0,i.Tn)(t)&&t.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(o)&&"Boolean"===o.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(t)}}}const l=[a,c];return(0,i.Gv)(e)&&r.set(e,l),l}function Ye(e){return"$"!==e[0]&&!(0,i.SU)(e)}const Qe=e=>"_"===e[0]||"$stable"===e,et=e=>(0,i.cy)(e)?e.map(an):[an(e)],tt=(e,t,n)=>{if(t._n)return t;const r=R(((...e)=>et(t(...e))),n);return r._c=!1,r},nt=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Qe(o))continue;const n=e[o];if((0,i.Tn)(n))t[o]=tt(o,n,r);else if(null!=n){0;const e=et(n);t[o]=()=>e}}},rt=(e,t)=>{const n=et(t);e.slots.default=()=>n},it=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},ot=(e,t,n)=>{const r=e.slots=Be();if(32&e.vnode.shapeFlag){const e=t._;e?(it(r,t,n),n&&(0,i.yQ)(r,"_",e,!0)):nt(t,r)}else t&&rt(e,t)},st=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:it(o,t,n):(s=!t.$stable,nt(t,o)),a=t}else t&&(rt(e,t),a={default:1});if(s)for(const i in o)Qe(i)||null!=a[i]||delete o[i]};function at(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ct=Lt;function ut(e){return lt(e)}function lt(e,t){at();const n=(0,i.We)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:v=i.tE,insertStaticContent:g}=e,m=(e,t,n,r=null,i=null,o=null,s=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Jt(e,t)&&(r=Q(e),Z(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Ut:_(e,t,n,r);break;case jt:b(e,t,n,r);break;case Ft:null==e&&E(t,n,r,s);break;case Mt:L(e,t,n,r,i,o,s,a,c);break;default:1&h?O(e,t,n,r,i,o,s,a,c):6&h?M(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,o,s,a,c,ne)}null!=l&&i&&W(l,e&&e.ref,o,t||e,!t)},_=(e,t,n,r)=>{if(null==e)o(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?o(t.el=l(t.children||""),n,r):t.el=e.el},E=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},O=(e,t,n,r,i,o,s,a,c)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?C(t,n,r,i,o,s,a,c):x(e,t,i,o,s,a,c)},C=(e,t,n,r,s,u,l,h)=>{let f,p;const{props:v,shapeFlag:g,transition:m,dirs:y}=e;if(f=e.el=c(e.type,u,v&&v.is,v),8&g?d(f,e.children):16&g&&k(e.children,f,null,r,s,ht(e,u),l,h),y&&P(e,null,r,"created"),R(f,e,e.scopeId,l,r),v){for(const e in v)"value"===e||(0,i.SU)(e)||a(f,e,null,v[e],u,r);"value"in v&&a(f,"value",null,v.value,u),(p=v.onVnodeBeforeMount)&&hn(p,r,e)}y&&P(e,null,r,"beforeMount");const _=ft(s,m);_&&m.beforeEnter(f),o(f,t,n),((p=v&&v.onVnodeMounted)||_||y)&&ct((()=>{p&&hn(p,r,e),_&&m.enter(f),y&&P(e,null,r,"mounted")}),s)},R=(e,t,n,r,i)=>{if(n&&v(e,n),r)for(let o=0;o<r.length;o++)v(e,r[o]);if(i){let n=i.subTree;if(t===n||Dt(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},k=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?cn(e[u]):an(e[u]);m(null,c,t,n,r,i,o,s,a)}},x=(e,t,n,r,o,s,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.MZ,v=t.props||i.MZ;let g;if(n&&dt(n,!1),(g=v.onVnodeBeforeUpdate)&&hn(g,n,t,e),f&&P(t,e,n,"beforeUpdate"),n&&dt(n,!0),(p.innerHTML&&null==v.innerHTML||p.textContent&&null==v.textContent)&&d(u,""),h?N(e.dynamicChildren,h,u,n,r,ht(t,o),s):c||$(e,t,u,null,n,r,ht(t,o),s,!1),l>0){if(16&l)D(u,p,v,n,o);else if(2&l&&p.class!==v.class&&a(u,"class",null,v.class,o),4&l&&a(u,"style",p.style,v.style,o),8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=p[r],s=v[r];s===i&&"value"!==r||a(u,r,i,s,o,n)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||D(u,p,v,n,o);((g=v.onVnodeUpdated)||f)&&ct((()=>{g&&hn(g,n,t,e),f&&P(t,e,n,"updated")}),r)},N=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Mt||!Jt(c,u)||70&c.shapeFlag)?f(c.el):n;m(c,u,l,null,r,i,o,s,!0)}},D=(e,t,n,r,o)=>{if(t!==n){if(t!==i.MZ)for(const s in t)(0,i.SU)(s)||s in n||a(e,s,t[s],null,o,r);for(const s in n){if((0,i.SU)(s))continue;const c=n[s],u=t[s];c!==u&&"value"!==s&&a(e,s,u,c,o,r)}"value"in n&&a(e,"value",t.value,n.value,o)}},L=(e,t,n,r,i,s,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:v}=t;v&&(c=c?c.concat(v):v),null==e?(o(h,n,r),o(d,n,r),k(t.children||[],n,d,i,s,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&pt(e,t,!0)):$(e,t,n,d,i,s,a,c,l)},M=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):U(t,n,r,i,o,s,c):j(e,t,c)},U=(e,t,n,r,i,o,s)=>{const a=e.component=pn(e,r,i);if(z(e)&&(a.ctx.renderer=ne),Tn(a,!1,s),a.asyncDep){if(i&&i.registerDep(a,F,s),!e.el){const e=a.subTree=en(jt);b(null,e,t,n)}}else F(a,e,t,n,i,o,s)},j=(e,t,n)=>{const r=t.component=e.component;if(At(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},F=(e,t,n,o,s,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:o,vnode:l}=e;{const n=gt(e);if(n)return t&&(t.el=l.el,V(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let h,d=t;0,dt(e,!1),t?(t.el=l.el,V(e,t,c)):t=l,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&hn(h,o,t,l),dt(e,!0);const p=Rt(e);0;const v=e.subTree;e.subTree=p,m(v,p,f(v.el),Q(v),e,s,a),t.el=p.el,null===d&&Nt(e,p.el),r&&ct(r,s),(h=t.props&&t.props.onVnodeUpdated)&&ct((()=>hn(h,o,t,l)),s)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d,root:f,type:p}=e,v=B(t);if(dt(e,!1),l&&(0,i.DY)(l),!v&&(r=u&&u.onVnodeBeforeMount)&&hn(r,d,t),dt(e,!0),c&&ie){const t=()=>{e.subTree=Rt(e),ie(c,e.subTree,e,s,null)};v&&p.__asyncHydrate?p.__asyncHydrate(c,e,t):t()}else{f.ce&&f.ce._injectChildStyle(p);const r=e.subTree=Rt(e);0,m(null,r,n,o,e,s,a),t.el=r.el}if(h&&ct(h,s),!v&&(r=u&&u.onVnodeMounted)){const e=t;ct((()=>hn(r,d,e)),s)}(256&t.shapeFlag||d&&B(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&ct(e.a,s),e.isMounted=!0,t=n=o=null}};e.scope.on();const l=e.effect=new r.X2(u);e.scope.off();const h=e.update=l.run.bind(l),d=e.job=l.runIfDirty.bind(l);d.i=e,d.id=e.uid,l.scheduler=()=>y(d),dt(e,!0),h()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Ge(e,t.props,i,n),st(e,t.children,n),(0,r.C4)(),w(e),(0,r.bl)()},$=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void K(u,h,n,r,i,o,s,a,c);if(256&f)return void H(u,h,n,r,i,o,s,a,c)}8&p?(16&l&&Y(u,i,o),h!==u&&d(n,h)):16&l?16&p?K(u,h,n,r,i,o,s,a,c):Y(u,i,o,!0):(8&l&&d(n,""),16&p&&k(h,n,r,i,o,s,a,c))},H=(e,t,n,r,o,s,a,c,u)=>{e=e||i.Oj,t=t||i.Oj;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?cn(t[f]):an(t[f]);m(e[f],r,n,null,o,s,a,c,u)}l>h?Y(e,o,s,!0,!1,d):k(t,n,r,o,s,a,c,u,d)},K=(e,t,n,r,o,s,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?cn(t[l]):an(t[l]);if(!Jt(r,i))break;m(r,i,n,null,o,s,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?cn(t[f]):an(t[f]);if(!Jt(r,i))break;m(r,i,n,null,o,s,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)m(null,t[l]=u?cn(t[l]):an(t[l]),n,i,o,s,a,c,u),l++}}else if(l>f)while(l<=d)Z(e[l],o,s,!0),l++;else{const p=l,v=l,g=new Map;for(l=v;l<=f;l++){const e=t[l]=u?cn(t[l]):an(t[l]);null!=e.key&&g.set(e.key,l)}let y,_=0;const b=f-v+1;let w=!1,I=0;const E=new Array(b);for(l=0;l<b;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(_>=b){Z(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=v;y<=f;y++)if(0===E[y-v]&&Jt(r,t[y])){i=y;break}void 0===i?Z(r,o,s,!0):(E[i-v]=l+1,i>=I?I=i:w=!0,m(r,t[i],n,null,o,s,a,c,u),_++)}const S=w?vt(E):i.Oj;for(y=S.length-1,l=b-1;l>=0;l--){const e=v+l,i=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?m(null,i,n,d,o,s,a,c,u):w&&(y<0||l!==S[y]?G(i,n,d,2):y--)}}},G=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void G(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ne);if(a===Mt){o(s,t,n);for(let e=0;e<u.length;e++)G(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===Ft)return void S(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),o(s,t,n),ct((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),u=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,t,n)},Z=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d,cacheIndex:f}=e;if(-2===h&&(i=!1),null!=a&&W(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&l)return void t.ctx.deactivate(e);const p=1&l&&d,v=!B(e);let g;if(v&&(g=s&&s.onVnodeBeforeUnmount)&&hn(g,t,e),6&l)X(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);p&&P(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,ne,r):u&&!u.hasOnce&&(o!==Mt||h>0&&64&h)?Y(u,t,n,!1,!0):(o===Mt&&384&h||!i&&16&l)&&Y(c,t,n),r&&q(e)}(v&&(g=s&&s.onVnodeUnmounted)||p)&&ct((()=>{g&&hn(g,t,e),p&&P(e,null,t,"unmounted")}),n)},q=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Mt)return void J(n,r);if(t===Ft)return void T(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},J=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},X=(e,t,n)=>{const{bum:r,scope:o,job:s,subTree:a,um:c,m:u,a:l}=e;mt(u),mt(l),r&&(0,i.DY)(r),o.stop(),s&&(s.flags|=8,Z(a,e,t,n)),c&&ct(c,t),ct((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)Z(e[s],t,n,r,i)},Q=e=>{if(6&e.shapeFlag)return Q(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[A];return n?p(n):t};let ee=!1;const te=(e,t,n)=>{null==e?t._vnode&&Z(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ee||(ee=!0,w(),I(),ee=!1)},ne={p:m,um:Z,m:G,r:q,mt:U,mc:k,pc:$,pbc:N,n:Q,o:e};let re,ie;return t&&([re,ie]=t(ne)),{render:te,hydrate:re,createApp:Fe(te,re)}}function ht({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function dt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ft(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pt(e,t,n=!1){const r=e.children,o=t.children;if((0,i.cy)(r)&&(0,i.cy)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=cn(o[i]),t.el=e.el),n||-2===t.patchFlag||pt(e,t)),t.type===Ut&&(t.el=e.el)}}function vt(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}function gt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gt(t)}function mt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const yt=Symbol.for("v-scx"),_t=()=>{{const e=He(yt);return e}};function bt(e,t,n){return wt(e,t,n)}function wt(e,t,n=i.MZ){const{immediate:o,deep:a,flush:c,once:u}=n;const l=(0,i.X$)({},n);const h=t&&o||!t&&"post"!==c;let d;if(Sn)if("sync"===c){const e=_t();d=e.__watcherHandles||(e.__watcherHandles=[])}else if(!h){const e=()=>{};return e.stop=i.tE,e.resume=i.tE,e.pause=i.tE,e}const f=vn;l.call=(e,t,n)=>s(e,f,t,n);let p=!1;"post"===c?l.scheduler=e=>{ct(e,f&&f.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(e,t)=>{t?e():y(e)}),l.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const v=(0,r.wB)(e,t,l);return Sn&&(d?d.push(v):h&&v()),v}function It(e,t,n){const r=this.proxy,o=(0,i.Kg)(e)?e.includes(".")?Et(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.Tn)(t)?s=t:(s=t.handler,n=t);const a=_n(this),c=wt(o,s.bind(r),n);return a(),c}function Et(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const St=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,i.PT)(t)}Modifiers`]||e[`${(0,i.Tg)(t)}Modifiers`];function Tt(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let o=n;const a=t.startsWith("update:"),c=a&&St(r,t.slice(7));let u;c&&(c.trim&&(o=n.map((e=>(0,i.Kg)(e)?e.trim():e))),c.number&&(o=n.map(i.bB)));let l=r[u=(0,i.rU)(t)]||r[u=(0,i.rU)((0,i.PT)(t))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(t))]),l&&s(l,e,6,o);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,s(h,e,6,o)}}function Ot(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=Ot(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.cy)(s)?s.forEach((e=>a[e]=null)):(0,i.X$)(a,s),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function Ct(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}function Rt(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:c,attrs:u,emit:l,render:h,renderCache:d,props:f,data:p,setupState:v,ctx:g,inheritAttrs:m}=e,y=C(e);let _,b;try{if(4&n.shapeFlag){const e=o||r,t=e;_=an(h.call(t,e,d,f,v,p,g)),b=u}else{const e=t;0,_=an(e.length>1?e(f,{attrs:u,slots:c,emit:l}):e(f,null)),b=t.props?u:kt(u)}}catch(I){Vt.length=0,a(I,e,1),_=en(jt)}let w=_;if(b&&!1!==m){const e=Object.keys(b),{shapeFlag:t}=w;e.length&&7&t&&(s&&e.some(i.CP)&&(b=Pt(b,s)),w=rn(w,b,!1,!0))}return n.dirs&&(w=rn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&V(w,n.transition),_=w,C(y),_}const kt=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Pt=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function At(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||xt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?xt(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Ct(u,n))return!0}}return!1}function xt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!Ct(n,o))return!0}return!1}function Nt({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const Dt=e=>e.__isSuspense;function Lt(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):b(e)}const Mt=Symbol.for("v-fgt"),Ut=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Ft=Symbol.for("v-stc"),Vt=[];let $t=null;function Ht(e=!1){Vt.push($t=e?null:[])}function Wt(){Vt.pop(),$t=Vt[Vt.length-1]||null}let Bt=1;function zt(e,t=!1){Bt+=e,e<0&&$t&&t&&($t.hasOnce=!0)}function Kt(e){return e.dynamicChildren=Bt>0?$t||i.Oj:null,Wt(),Bt>0&&$t&&$t.push(e),e}function Gt(e,t,n,r,i,o){return Kt(Qt(e,t,n,r,i,o,!0))}function Zt(e,t,n,r,i){return Kt(en(e,t,n,r,i,!0))}function qt(e){return!!e&&!0===e.__v_isVNode}function Jt(e,t){return e.type===t.type&&e.key===t.key}const Xt=({key:e})=>null!=e?e:null,Yt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:T,r:e,k:t,f:!!n}:e:null);function Qt(e,t=null,n=null,r=0,o=null,s=(e===Mt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xt(t),ref:t&&Yt(t),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:T};return c?(un(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),Bt>0&&!a&&$t&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&$t.push(u),u}const en=tn;function tn(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==fe||(e=jt),qt(e)){const r=rn(e,t,!0);return n&&un(r,n),Bt>0&&!a&&$t&&(6&r.shapeFlag?$t[$t.indexOf(e)]=r:$t.push(r)),r.patchFlag=-2,r}if(Nn(e)&&(e=e.__vccOpts),t){t=nn(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:Dt(e)?128:x(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return Qt(e,t,n,o,s,c,a,!0)}function nn(e){return e?(0,r.ju)(e)||ze(e)?(0,i.X$)({},e):e:null}function rn(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:a,children:c,transition:u}=e,l=t?ln(o||{},t):o,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Xt(l),ref:t&&t.ref?n&&s?(0,i.cy)(s)?s.concat(Yt(t)):[s,Yt(t)]:Yt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&V(h,u.clone(h)),h}function on(e=" ",t=0){return en(Ut,null,e,t)}function sn(e="",t=!1){return t?(Ht(),Zt(jt,null,e)):en(jt,null,e)}function an(e){return null==e||"boolean"===typeof e?en(jt):(0,i.cy)(e)?en(Mt,null,e.slice()):qt(e)?cn(e):en(Ut,null,String(e))}function cn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:rn(e)}function un(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),un(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||ze(t)?3===r&&T&&(1===T.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=T}}else(0,i.Tn)(t)?(t={default:t,_ctx:T},n=32):(t=String(t),64&r?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function ln(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.cy)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function hn(e,t,n,r=null){s(e,t,7,[n,r])}const dn=Ue();let fn=0;function pn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||dn,a={uid:fn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xe(o,s),emitsOptions:Ot(o,s),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:o.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Tt.bind(null,a),e.ce&&e.ce(a),a}let vn=null;const gn=()=>vn||T;let mn,yn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};mn=t("__VUE_INSTANCE_SETTERS__",(e=>vn=e)),yn=t("__VUE_SSR_SETTERS__",(e=>Sn=e))}const _n=e=>{const t=vn;return mn(e),e.scope.on(),()=>{e.scope.off(),mn(t)}},bn=()=>{vn&&vn.scope.off(),mn(null)};function wn(e){return 4&e.vnode.shapeFlag}let In,En,Sn=!1;function Tn(e,t=!1,n=!1){t&&yn(t);const{props:r,children:i}=e.vnode,o=wn(e);Ke(e,r,o,t),ot(e,i,n);const s=o?On(e,t):void 0;return t&&yn(!1),s}function On(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,be);const{setup:s}=n;if(s){(0,r.C4)();const n=e.setupContext=s.length>1?Pn(e):null,c=_n(e),u=o(s,e,0,[e.props,n]),l=(0,i.yL)(u);if((0,r.bl)(),c(),!l&&!e.sp||B(e)||H(e),l){if(u.then(bn,bn),t)return u.then((n=>{Cn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=u}else Cn(e,u,t)}else Rn(e,t)}function Cn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Rn(e,n)}function Rn(e,t,n){const o=e.type;if(!e.render){if(!t&&In&&!o.render){const t=o.template||Ce(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:s},r),a);o.render=In(t,c)}}e.render=o.render||i.tE,En&&En(e)}{const t=_n(e);(0,r.C4)();try{Ee(e)}finally{(0,r.bl)(),t()}}}const kn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Pn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,kn),slots:e.slots,emit:e.emit,expose:t}}function An(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in ye?ye[n](e):void 0},has(e,t){return t in e||t in ye}})):e.proxy}function xn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Nn(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const Dn=(e,t)=>{const n=(0,r.EW)(e,t,Sn);return n};const Ln="3.5.13"},5130:function(e,t,n){n.d(t,{D$:function(){return J},Ef:function(){return ee},Jo:function(){return G}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(3949),n(1454),n(7550);var r=n(6768),i=n(4232);n(144);
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let o;const s="undefined"!==typeof window&&window.trustedTypes;if(s)try{o=s.createPolicy("vue",{createHTML:e=>e})}catch(re){}const a=o?e=>o.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?l.createElementNS(c,e):"mathml"===t?l.createElementNS(u,e):n?l.createElement(e,{is:n}):l.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>l.createTextNode(e),createComment:e=>l.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>l.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const i=h.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},f=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function v(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const g=Symbol("_vod"),m=Symbol("_vsh");const y=Symbol("");const _=/(^|;)\s*display\s*:/;function b(e,t,n){const r=e.style,o=(0,i.Kg)(n);let s=!1;if(n&&!o){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&I(r,t,"")}else for(const e in t)null==n[e]&&I(r,e,"");for(const e in n)"display"===e&&(s=!0),I(r,e,n[e])}else if(o){if(t!==n){const e=r[y];e&&(n+=";"+e),r.cssText=n,s=_.test(n)}}else t&&e.removeAttribute("style");g in e&&(e[g]=s?r.display:"",e[m]&&(r.display="none"))}const w=/\s*!important$/;function I(e,t,n){if((0,i.cy)(n))n.forEach((n=>I(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=T(e,t);w.test(n)?e.setProperty((0,i.Tg)(r),n.replace(w,""),"important"):e[r]=n}}const E=["Webkit","Moz","ms"],S={};function T(e,t){const n=S[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return S[t]=r;r=(0,i.ZH)(r);for(let i=0;i<E.length;i++){const n=E[i]+r;if(n in e)return S[t]=n}return t}const O="http://www.w3.org/1999/xlink";function C(e,t,n,r,o,s=(0,i.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(O,t.slice(6,t.length)):e.setAttributeNS(O,t,n):null==n||s&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,s?"":(0,i.Bm)(n)?String(n):n)}function R(e,t,n,r,o){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const s=e.tagName;if("value"===t&&"PROGRESS"!==s&&!s.includes("-")){const r="OPTION"===s?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(re){0}c&&e.removeAttribute(o||t)}function k(e,t,n,r){e.addEventListener(t,n,r)}function P(e,t,n,r){e.removeEventListener(t,n,r)}const A=Symbol("_vei");function x(e,t,n,r,i=null){const o=e[A]||(e[A]={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=D(t);if(r){const s=o[t]=j(r,i);k(e,n,s,a)}else s&&(P(e,n,s,a),o[t]=void 0)}}const N=/(?:Once|Passive|Capture)$/;function D(e){let t;if(N.test(e)){let n;t={};while(n=e.match(N))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let L=0;const M=Promise.resolve(),U=()=>L||(M.then((()=>L=0)),L=Date.now());function j(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(F(e,n.value),t,5,[e])};return n.value=e,n.attached=U(),n}function F(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const V=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$=(e,t,n,r,o,s)=>{const a="svg"===o;"class"===t?v(e,r,a):"style"===t?b(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||x(e,t,n,r,s):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):H(e,t,r,a))?(R(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||C(e,t,r,a,s,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,i.Kg)(r)?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),C(e,t,r,a)):R(e,(0,i.PT)(t),r,s,t)};function H(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&V(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!V(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const W=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function B(e){e.target.composing=!0}function z(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const K=Symbol("_assign"),G={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e[K]=W(o);const s=r||o.props&&"number"===o.props.type;k(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),s&&(r=(0,i.bB)(r)),e[K](r)})),n&&k(e,"change",(()=>{e.value=e.value.trim()})),t||(k(e,"compositionstart",B),k(e,"compositionend",z),k(e,"change",z))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:s}},a){if(e[K]=W(a),e.composing)return;const c=!s&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),u=null==t?"":t;if(c!==u){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(o&&e.value.trim()===u)return}e.value=u}}};const Z=["ctrl","shift","alt","meta"],q={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Z.some((n=>e[`${n}Key`]&&!t.includes(n)))},J=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=q[t[e]];if(r&&r(n,t))return}return e(n,...r)})},X=(0,i.X$)({patchProp:$},d);let Y;function Q(){return Y||(Y=(0,r.K9)(X))}const ee=(...e)=>{const t=Q().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=ne(e);if(!r)return;const o=t._component;(0,i.Tn)(o)||o.render||o.template||(o.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const s=n(r,!1,te(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function te(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ne(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){n.d(t,{$3:function(){return f},$H:function(){return U},BH:function(){return z},BX:function(){return ne},Bm:function(){return w},C4:function(){return X},CE:function(){return v},CP:function(){return u},DY:function(){return j},Gv:function(){return I},J$:function(){return Q},Kg:function(){return b},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return o},PT:function(){return x},Qd:function(){return C},Ro:function(){return $},SU:function(){return k},TF:function(){return h},Tg:function(){return D},Tn:function(){return _},Tr:function(){return K},We:function(){return W},X$:function(){return l},Y2:function(){return ee},ZH:function(){return L},Zf:function(){return O},bB:function(){return V},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return s},u3:function(){return re},vM:function(){return g},v_:function(){return oe},yI:function(){return R},yL:function(){return E},yQ:function(){return F}});n(4114),n(8992),n(4520),n(3949),n(1454),n(8872);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}const i={},o=[],s=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,v=e=>"[object Map]"===T(e),g=e=>"[object Set]"===T(e),m=e=>"[object Date]"===T(e),y=e=>"[object RegExp]"===T(e),_=e=>"function"===typeof e,b=e=>"string"===typeof e,w=e=>"symbol"===typeof e,I=e=>null!==e&&"object"===typeof e,E=e=>(I(e)||_(e))&&_(e.then)&&_(e.catch),S=Object.prototype.toString,T=e=>S.call(e),O=e=>T(e).slice(8,-1),C=e=>"[object Object]"===T(e),R=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,k=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},A=/-(\w)/g,x=P((e=>e.replace(A,((e,t)=>t?t.toUpperCase():"")))),N=/\B([A-Z])/g,D=P((e=>e.replace(N,"-$1").toLowerCase())),L=P((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=P((e=>{const t=e?`on${L(e)}`:"";return t})),U=(e,t)=>!Object.is(e,t),j=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},F=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},V=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let H;const W=()=>H||(H="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const B="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",z=r(B);function K(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?J(r):K(r);if(i)for(const e in i)t[e]=i[e]}return t}if(b(e)||I(e))return e}const G=/;(?![^(]*\))/g,Z=/:([^]+)/,q=/\/\*[^]*?\*\//g;function J(e){const t={};return e.replace(q,"").split(G).forEach((e=>{if(e){const n=e.split(Z);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(b(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(I(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Q=r(Y);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=w(e),r=w(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=I(e),r=I(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>!(!e||!0!==e["__v_isRef"]),oe=e=>b(e)?e:null==e?"":p(e)||I(e)&&(e.toString===S||!_(e.toString))?ie(e)?oe(e.value):JSON.stringify(e,se,2):String(e),se=(e,t)=>ie(t)?se(e,t.value):v(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:w(t)?ae(t):!I(t)||p(t)||C(t)?t:String(t),ae=(e,t="")=>{var n;return w(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},4458:function(e,t,n){n.d(t,{k:function(){return o}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function o(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var o=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(e,o,n),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return s(o,e)}))):(a(e,o,n),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return s(o,e)})))}))}function s(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return s(t,e)}))}function c(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(e,t,n)})).catch((function(e){return s(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return s(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},1241:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9306:function(e,t,n){var r=n(4901),i=n(6823),o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not a function")}},3506:function(e,t,n){var r=n(3925),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o("Can't set "+i(e)+" as a prototype")}},7080:function(e,t,n){var r=n(4402).has;e.exports=function(e){return r(e),e}},6469:function(e,t,n){var r=n(8227),i=n(2360),o=n(4913).f,s=r("unscopables"),a=Array.prototype;void 0===a[s]&&o(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},679:function(e,t,n){var r=n(1625),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},8551:function(e,t,n){var r=n(34),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not an object")}},5370:function(e,t,n){var r=n(6198);e.exports=function(e,t,n){var i=0,o=arguments.length>2?n:r(t),s=new e(o);while(o>i)s[i]=t[i++];return s}},9617:function(e,t,n){var r=n(5397),i=n(5610),o=n(6198),s=function(e){return function(t,n,s){var a=r(t),c=o(a);if(0===c)return!e&&-1;var u,l=i(s,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},4527:function(e,t,n){var r=n(3724),i=n(4376),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw new o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7628:function(e,t,n){var r=n(6198);e.exports=function(e,t){for(var n=r(e),i=new t(n),o=0;o<n;o++)i[o]=e[n-o-1];return i}},6319:function(e,t,n){var r=n(8551),i=n(9539);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(s){i(e,"throw",s)}}},2195:function(e,t,n){var r=n(9504),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},6955:function(e,t,n){var r=n(2140),i=n(4901),o=n(2195),s=n(8227),a=s("toStringTag"),c=Object,u="Arguments"===o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?o(t):"Object"===(r=o(t))&&i(t.callee)?"Arguments":r}},7740:function(e,t,n){var r=n(9297),i=n(5031),o=n(7347),s=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},2211:function(e,t,n){var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},2529:function(e){e.exports=function(e,t){return{value:e,done:t}}},6699:function(e,t,n){var r=n(3724),i=n(4913),o=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},4659:function(e,t,n){var r=n(3724),i=n(4913),o=n(6980);e.exports=function(e,t,n){r?i.f(e,t,o(0,n)):e[t]=n}},2106:function(e,t,n){var r=n(283),i=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},6840:function(e,t,n){var r=n(4901),i=n(4913),o=n(283),s=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},6279:function(e,t,n){var r=n(6840);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},9433:function(e,t,n){var r=n(4576),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(e,t,n){var r=n(4576),i=n(34),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2839:function(e,t,n){var r=n(4576),i=r.navigator,o=i&&i.userAgent;e.exports=o?String(o):""},9519:function(e,t,n){var r,i,o=n(4576),s=n(2839),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},6193:function(e,t,n){var r=n(9504),i=Error,o=r("".replace),s=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},6518:function(e,t,n){var r=n(4576),i=n(7347).f,o=n(6699),s=n(6840),a=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,h,d,f,p,v=e.target,g=e.global,m=e.stat;if(l=g?r:m?r[v]||a(v,{}):r[v]&&r[v].prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:v+(m?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},6080:function(e,t,n){var r=n(7476),i=n(9306),o=n(616),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){var r=n(3724),i=n(9297),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(e,t,n){var r=n(9504),i=n(9306);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(o){}}},7476:function(e,t,n){var r=n(2195),i=n(9504);e.exports=function(e){if("Function"===r(e))return i(e)}},9504:function(e,t,n){var r=n(616),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},4124:function(e,t,n){var r=n(4576);e.exports=function(e,t){var n=r[e],i=n&&n.prototype;return i&&i[t]}},7751:function(e,t,n){var r=n(4576),i=n(4901),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},1767:function(e){e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},851:function(e,t,n){var r=n(6955),i=n(5966),o=n(4117),s=n(6269),a=n(8227),c=a("iterator");e.exports=function(e){if(!o(e))return i(e,c)||i(e,"@@iterator")||s[r(e)]}},81:function(e,t,n){var r=n(9565),i=n(9306),o=n(8551),s=n(6823),a=n(851),c=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(i(n))return o(r(n,e));throw new c(s(e)+" is not iterable")}},5966:function(e,t,n){var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3789:function(e,t,n){var r=n(9306),i=n(8551),o=n(9565),s=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,d=function(e,t){this.set=e,this.size=h(t,0),this.has=r(e.has),this.keys=r(e.keys)};d.prototype={getIterator:function(){return a(i(o(this.keys,this.set)))},includes:function(e){return o(this.has,this.set,e)}},e.exports=function(e){i(e);var t=+e.size;if(t!==t)throw new l(c);var n=s(t);if(n<0)throw new u(c);return new d(e,n)}},4576:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),i=n(8981),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},421:function(e){e.exports={}},397:function(e,t,n){var r=n(7751);e.exports=r("document","documentElement")},5917:function(e,t,n){var r=n(3724),i=n(9039),o=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),i=n(9039),o=n(2195),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===o(e)?a(e,""):s(e)}:s},3167:function(e,t,n){var r=n(4901),i=n(34),o=n(2967);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},3706:function(e,t,n){var r=n(9504),i=n(4901),o=n(7629),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},1181:function(e,t,n){var r,i,o,s=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",v=a.TypeError,g=a.WeakMap,m=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new v("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var _=h.state||(h.state=new g);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw new v(p);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},o=function(e){return _.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(l(e,b))throw new v(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},o=function(e){return l(e,b)}}e.exports={set:r,get:i,has:o,enforce:m,getterFor:y}},4209:function(e,t,n){var r=n(8227),i=n(6269),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},4376:function(e,t,n){var r=n(2195);e.exports=Array.isArray||function(e){return"Array"===r(e)}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){var r=n(9039),i=n(4901),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),i=n(4901),o=n(1625),s=n(7040),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},507:function(e,t,n){var r=n(9565);e.exports=function(e,t,n){var i,o,s=n?e:e.iterator,a=e.next;while(!(i=r(a,s)).done)if(o=t(i.value),void 0!==o)return o}},2652:function(e,t,n){var r=n(6080),i=n(9565),o=n(8551),s=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),d=n(9539),f=TypeError,p=function(e,t){this.stopped=e,this.result=t},v=p.prototype;e.exports=function(e,t,n){var g,m,y,_,b,w,I,E=n&&n.that,S=!(!n||!n.AS_ENTRIES),T=!(!n||!n.IS_RECORD),O=!(!n||!n.IS_ITERATOR),C=!(!n||!n.INTERRUPTED),R=r(t,E),k=function(e){return g&&d(g,"normal",e),new p(!0,e)},P=function(e){return S?(o(e),C?R(e[0],e[1],k):R(e[0],e[1])):C?R(e,k):R(e)};if(T)g=e.iterator;else if(O)g=e;else{if(m=h(e),!m)throw new f(s(e)+" is not iterable");if(a(m)){for(y=0,_=c(e);_>y;y++)if(b=P(e[y]),b&&u(v,b))return b;return new p(!1)}g=l(e,m)}w=T?e.next:g.next;while(!(I=i(w,g)).done){try{b=P(I.value)}catch(A){d(g,"throw",A)}if("object"==typeof b&&b&&u(v,b))return b}return new p(!1)}},9539:function(e,t,n){var r=n(9565),i=n(8551),o=n(5966);e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},9462:function(e,t,n){var r=n(9565),i=n(2360),o=n(6699),s=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),d=n(9539),f=a("toStringTag"),p="IteratorHelper",v="WrapForValidIterator",g=c.set,m=function(e){var t=c.getterFor(e?v:p);return s(i(l),{next:function(){var n=t(this);if(e)return n.nextHandler();try{var r=n.done?void 0:n.nextHandler();return h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=t(this),i=n.iterator;if(n.done=!0,e){var o=u(i,"return");return o?r(o,i):h(void 0,!0)}if(n.inner)try{d(n.inner.iterator,"normal")}catch(s){return d(i,"throw",s)}return i&&d(i,"normal"),h(void 0,!0)}})},y=m(!0),_=m(!1);o(_,f,"Iterator Helper"),e.exports=function(e,t){var n=function(n,r){r?(r.iterator=n.iterator,r.next=n.next):r=n,r.type=t?v:p,r.nextHandler=e,r.counter=0,r.done=!1,g(this,r)};return n.prototype=t?y:_,n}},713:function(e,t,n){var r=n(9565),i=n(9306),o=n(8551),s=n(1767),a=n(9462),c=n(6319),u=a((function(){var e=this.iterator,t=o(r(this.next,e)),n=this.done=!!t.done;if(!n)return c(e,this.mapper,[t.value,this.counter++],!0)}));e.exports=function(e){return o(this),i(e),new u(s(this),{mapper:e})}},7657:function(e,t,n){var r,i,o,s=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),d=n(8227),f=n(6395),p=d("iterator"),v=!1;[].keys&&(o=[].keys(),"next"in o?(i=l(l(o)),i!==Object.prototype&&(r=i)):v=!0);var g=!c(r)||s((function(){var e={};return r[p].call(e)!==e}));g?r={}:f&&(r=u(r)),a(r[p])||h(r,p,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:v}},6269:function(e){e.exports={}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),i=n(9039),o=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,v=r("".slice),g=r("".replace),m=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===v(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return s(r,"source")||(r.source=m(_,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return o(this)&&d(this).source||u(this)}),"toString")},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},2360:function(e,t,n){var r,i=n(8551),o=n(6801),s=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",d="<",f="prototype",p="script",v=l("IE_PROTO"),g=function(){},m=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(m("")),e.close();var t=e.parentWindow.Object;return e=null,t},_=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(m("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var e=s.length;while(e--)delete b[f][s[e]];return b()};a[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[v]=e):n=b(),void 0===t?n:o.f(n,t)}},6801:function(e,t,n){var r=n(3724),i=n(8686),o=n(4913),s=n(8551),a=n(5397),c=n(1072);t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)o.f(e,n=i[l++],r[n]);return e}},4913:function(e,t,n){var r=n(3724),i=n(5917),o=n(8686),s=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),i=n(9565),o=n(8773),s=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),i=n(8727),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){var r=n(9297),i=n(4901),o=n(8981),s=n(6119),a=n(2211),c=s("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=o(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),i=n(9297),o=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},1072:function(e,t,n){var r=n(1828),i=n(8727);e.exports=Object.keys||function(e){return r(e,i)}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){var r=n(6706),i=n(34),o=n(7750),s=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return o(n),s(r),i(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){var r=n(9565),i=n(4901),o=n(34),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw new s("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),i=n(9504),o=n(8480),s=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},7979:function(e,t,n){var r=n(8551);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},7750:function(e,t,n){var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},9286:function(e,t,n){var r=n(4402),i=n(8469),o=r.Set,s=r.add;e.exports=function(e){var t=new o;return i(e,(function(e){s(t,e)})),t}},3440:function(e,t,n){var r=n(7080),i=n(4402),o=n(9286),s=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;e.exports=function(e){var t=r(this),n=a(e),i=o(t);return s(t)<=n.size?c(t,(function(e){n.includes(e)&&h(i,e)})):u(n.getIterator(),(function(e){l(t,e)&&h(i,e)})),i}},4402:function(e,t,n){var r=n(9504),i=Set.prototype;e.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(e,t,n){var r=n(7080),i=n(4402),o=n(5170),s=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;e.exports=function(e){var t=r(this),n=s(e),i=new u;return o(t)>n.size?c(n.getIterator(),(function(e){h(t,e)&&l(i,e)})):a(t,(function(e){n.includes(e)&&l(i,e)})),i}},4449:function(e,t,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(8469),c=n(507),u=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(o(t)<=n.size)return!1!==a(t,(function(e){if(n.includes(e))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(e){if(i(t,e))return u(l,"normal",!1)}))}},3838:function(e,t,n){var r=n(7080),i=n(5170),o=n(8469),s=n(3789);e.exports=function(e){var t=r(this),n=s(e);return!(i(t)>n.size)&&!1!==o(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(o(t)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(e){if(!i(t,e))return c(u,"normal",!1)}))}},8469:function(e,t,n){var r=n(9504),i=n(507),o=n(4402),s=o.Set,a=o.proto,c=r(a.forEach),u=r(a.keys),l=u(new s).next;e.exports=function(e,t,n){return n?i({iterator:u(e),next:l},t):c(e,t)}},4916:function(e,t,n){var r=n(7751),i=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](i(0));try{return(new t)[e](i(-1)),!1}catch(n){return!0}}catch(o){return!1}}},5170:function(e,t,n){var r=n(6706),i=n(4402);e.exports=r(i.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){var r=n(7080),i=n(4402),o=n(9286),s=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;e.exports=function(e){var t=r(this),n=s(e).getIterator(),i=o(t);return a(n,(function(e){u(t,e)?l(i,e):c(i,e)})),i}},4204:function(e,t,n){var r=n(7080),i=n(4402).add,o=n(9286),s=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=s(e).getIterator(),c=o(t);return a(n,(function(e){i(c,e)})),c}},6119:function(e,t,n){var r=n(5745),i=n(3392),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},7629:function(e,t,n){var r=n(6395),i=n(4576),o=n(9433),s="__core-js_shared__",a=e.exports=i[s]||o(s,{});(a.versions||(a.versions=[])).push({version:"3.39.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},4495:function(e,t,n){var r=n(9519),i=n(9039),o=n(4576),s=o.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){var r=n(1291),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5397:function(e,t,n){var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){var r=n(9565),i=n(34),o=n(757),s=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2140:function(e,t,n){var r=n(8227),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},655:function(e,t,n){var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){var r=n(4576),i=n(4901),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},8227:function(e,t,n){var r=n(4576),i=n(5745),o=n(9297),s=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return o(l,e)||(l[e]=a&&o(u,e)?u[e]:h("Symbol."+e)),l[e]}},4114:function(e,t,n){var r=n(6518),i=n(8981),o=n(6198),s=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},9678:function(e,t,n){var r=n(6518),i=n(7628),o=n(5397),s=n(6469),a=Array;r({target:"Array",proto:!0},{toReversed:function(){return i(o(this),a)}}),s("toReversed")},7145:function(e,t,n){var r=n(6518),i=n(9504),o=n(9306),s=n(5397),a=n(5370),c=n(4124),u=n(6469),l=Array,h=i(c("Array","sort"));r({target:"Array",proto:!0},{toSorted:function(e){void 0!==e&&o(e);var t=s(this),n=a(l,t);return h(n,e)}}),u("toSorted")},1658:function(e,t,n){var r=n(6518),i=n(6469),o=n(6837),s=n(6198),a=n(5610),c=n(5397),u=n(1291),l=Array,h=Math.max,d=Math.min;r({target:"Array",proto:!0},{toSpliced:function(e,t){var n,r,i,f,p=c(this),v=s(p),g=a(e,v),m=arguments.length,y=0;for(0===m?n=r=0:1===m?(n=0,r=v-g):(n=m-2,r=d(h(u(t),0),v-g)),i=o(v+n-r),f=l(i);y<g;y++)f[y]=p[y];for(;y<g+n;y++)f[y]=arguments[y-g+2];for(;y<i;y++)f[y]=p[y+r-n];return f}}),i("toSpliced")},8111:function(e,t,n){var r=n(6518),i=n(4576),o=n(679),s=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),d=n(9297),f=n(8227),p=n(7657).IteratorPrototype,v=n(3724),g=n(6395),m="constructor",y="Iterator",_=f("toStringTag"),b=TypeError,w=i[y],I=g||!a(w)||w.prototype!==p||!h((function(){w({})})),E=function(){if(o(this,p),c(this)===p)throw new b("Abstract class Iterator not directly constructable")},S=function(e,t){v?u(p,e,{configurable:!0,get:function(){return t},set:function(t){if(s(this),this===p)throw new b("You can't redefine this property");d(this,e)?this[e]=t:l(this,e,t)}}):p[e]=t};d(p,_)||S(_,y),!I&&d(p,m)&&p[m]!==Object||S(m,E),E.prototype=p,r({global:!0,constructor:!0,forced:I},{Iterator:E})},1148:function(e,t,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{every:function(e){s(this),o(e);var t=a(this),n=0;return!i(t,(function(t,r){if(!e(t,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},2489:function(e,t,n){var r=n(6518),i=n(9565),o=n(9306),s=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=c((function(){var e,t,n,r=this.iterator,o=this.predicate,a=this.next;while(1){if(e=s(i(a,r)),t=this.done=!!e.done,t)return;if(n=e.value,u(r,o,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:l},{filter:function(e){return s(this),o(e),new h(a(this),{predicate:e})}})},116:function(e,t,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{find:function(e){s(this),o(e);var t=a(this),n=0;return i(t,(function(t,r){if(e(t,n++))return r(t)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},7588:function(e,t,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{forEach:function(e){s(this),o(e);var t=a(this),n=0;i(t,(function(t){e(t,n++)}),{IS_RECORD:!0})}})},1701:function(e,t,n){var r=n(6518),i=n(713),o=n(6395);r({target:"Iterator",proto:!0,real:!0,forced:o},{map:i})},8237:function(e,t,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767),c=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(e){s(this),o(e);var t=a(this),n=arguments.length<2,r=n?void 0:arguments[1],u=0;if(i(t,(function(t){n?(n=!1,r=t):r=e(r,t,u),u++}),{IS_RECORD:!0}),n)throw new c("Reduce of empty iterator with no initial value");return r}})},3579:function(e,t,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{some:function(e){s(this),o(e);var t=a(this),n=0;return i(t,(function(t,r){if(e(t,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},9479:function(e,t,n){var r=n(4576),i=n(3724),o=n(2106),s=n(7979),a=n(9039),c=r.RegExp,u=c.prototype,l=i&&a((function(){var e=!0;try{c(".","d")}catch(l){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in e&&(o.hasIndices="d"),o)i(s,o[s]);var a=Object.getOwnPropertyDescriptor(u,"flags").get.call(t);return a!==r||n!==r}));l&&o(u,"flags",{configurable:!0,get:s})},7642:function(e,t,n){var r=n(6518),i=n(3440),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("difference")},{difference:i})},8004:function(e,t,n){var r=n(6518),i=n(9039),o=n(8750),s=n(4916),a=!s("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:o})},3853:function(e,t,n){var r=n(6518),i=n(4449),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isDisjointFrom")},{isDisjointFrom:i})},5876:function(e,t,n){var r=n(6518),i=n(3838),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSubsetOf")},{isSubsetOf:i})},2475:function(e,t,n){var r=n(6518),i=n(8527),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSupersetOf")},{isSupersetOf:i})},5024:function(e,t,n){var r=n(6518),i=n(3650),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("symmetricDifference")},{symmetricDifference:i})},1698:function(e,t,n){var r=n(6518),i=n(4204),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("union")},{union:i})},8992:function(e,t,n){n(8111)},3215:function(e,t,n){n(1148)},4520:function(e,t,n){n(2489)},2577:function(e,t,n){n(116)},3949:function(e,t,n){n(7588)},1454:function(e,t,n){n(1701)},8872:function(e,t,n){n(8237)},7550:function(e,t,n){n(3579)},4979:function(e,t,n){var r=n(6518),i=n(4576),o=n(7751),s=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),d=n(5002),f=n(6193),p=n(3724),v=n(6395),g="DOMException",m=o("Error"),y=o(g),_=function(){u(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=new m(t);return i.name=g,a(r,"stack",s(1,f(i.stack,1))),l(r,this,_),r},b=_.prototype=y.prototype,w="stack"in new m(g),I="stack"in new y(1,2),E=y&&p&&Object.getOwnPropertyDescriptor(i,g),S=!!E&&!(E.writable&&E.configurable),T=w&&!S&&!I;r({global:!0,constructor:!0,forced:v||T},{DOMException:T?_:y});var O=o(g),C=O.prototype;if(C.constructor!==O)for(var R in v||a(C,"constructor",s(1,O)),d)if(c(d,R)){var k=d[R],P=k.s;c(O,P)||a(O,P,s(6,k.c))}},4603:function(e,t,n){var r=n(6840),i=n(9504),o=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),s(t,1);var i,a=o(e),c=o(n),f=0,p=0,v=!1,g=r.length;while(f<g)i=r[f++],v||i.key===a?(v=!0,l(this,i.key)):p++;while(p<g)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){var r=n(6840),i=n(9504),o=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);s(t,1);var i=o(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){var r=n(3724),i=n(9504),o=n(2106),s=URLSearchParams.prototype,a=i(s.forEach);r&&!("size"in s)&&o(s,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){n.d(t,{MF:function(){return _e},j6:function(){return pe},xZ:function(){return ve},om:function(){return fe},Sx:function(){return we},Wp:function(){return be},KO:function(){return Ie}});n(4114),n(8992),n(4520),n(1454),n(8872),n(7550);var r=n(852),i=n(1363),o=n(4046);n(4979);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,v=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(I(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),v.set(t,e),t}function m(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&m(e),s(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),v.set(t,e)),t}const E=e=>v.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=I(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(I(s.result),e.oldVersion,e.newVersion,I(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],C=new Map;function R(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!T.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return C.set(t,o),o}_((e=>({...e,get:(t,n,r)=>R(t,n)||e.get(t,n,r),has:(t,n)=>!!R(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(P(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function P(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const A="@firebase/app",x="0.10.17",N=new i.Vy("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",j="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",$="@firebase/database",H="@firebase/data-connect",W="@firebase/database-compat",B="@firebase/functions",z="@firebase/functions-compat",K="@firebase/installations",G="@firebase/installations-compat",Z="@firebase/messaging",q="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Q="@firebase/remote-config-compat",ee="@firebase/storage",te="@firebase/storage-compat",ne="@firebase/firestore",re="@firebase/vertexai",ie="@firebase/firestore-compat",oe="firebase",se="11.1.0",ae="[DEFAULT]",ce={[A]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[j]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[$]:"fire-rtdb",[H]:"fire-data-connect",[W]:"fire-rtdb-compat",[B]:"fire-fn",[z]:"fire-fn-compat",[K]:"fire-iid",[G]:"fire-iid-compat",[Z]:"fire-fcm",[q]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Q]:"fire-rc-compat",[ee]:"fire-gcs",[te]:"fire-gcs-compat",[ne]:"fire-fst",[ie]:"fire-fst-compat",[re]:"fire-vertex","fire-js":"fire-js",[oe]:"fire-js-all"},ue=new Map,le=new Map,he=new Map;function de(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fe(e){const t=e.name;if(he.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;he.set(t,e);for(const n of ue.values())de(n,e);for(const n of le.values())de(n,e);return!0}function pe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ve(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},me=new o.FA("app","Firebase",ge);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e=se;function be(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:ae,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw me.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw me.create("no-options");const a=ue.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(i,a.config))return a;throw me.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of he.values())c.addComponent(r);const u=new ye(n,i,c);return ue.set(s,u),u}function we(e=ae){const t=ue.get(e);if(!t&&e===ae&&(0,o.T9)())return be();if(!t)throw me.create("no-app",{appName:e});return t}function Ie(e,t,n){var i;let o=null!==(i=ce[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}fe(new r.uA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ee="firebase-heartbeat-database",Se=1,Te="firebase-heartbeat-store";let Oe=null;function Ce(){return Oe||(Oe=S(Ee,Se,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Te)}catch(n){console.warn(n)}}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),Oe}async function Re(e){try{const t=await Ce(),n=t.transaction(Te),r=await n.objectStore(Te).get(Pe(e));return await n.done,r}catch(t){if(t instanceof o.g)N.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});N.warn(e.message)}}}async function ke(e,t){try{const n=await Ce(),r=n.transaction(Te,"readwrite"),i=r.objectStore(Te);await i.put(t,Pe(e)),await r.done}catch(n){if(n instanceof o.g)N.warn(n.message);else{const e=me.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(e.message)}}}function Pe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1024,xe=2592e6;class Ne{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Me(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=De();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=xe})),this._storage.overwrite(this._heartbeatsCache)}catch(n){N.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=De(),{heartbeatsToSend:n,unsentEntries:r}=Le(this._heartbeatsCache.heartbeats),i=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return N.warn(t),""}}}function De(){const e=new Date;return e.toISOString().substring(0,10)}function Le(e,t=Ae){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ue(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ue(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Re(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ue(e){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){fe(new r.uA("platform-logger",(e=>new k(e)),"PRIVATE")),fe(new r.uA("heartbeat",(e=>new Ne(e)),"PRIVATE")),Ie(A,x,e),Ie(A,x,"esm2017"),Ie("fire-js","")}je("")},852:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return i}});n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(1454);var r=n(4046);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){n.d(t,{$b:function(){return i},Vy:function(){return u}});n(4114),n(8992),n(4520),n(1454);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},6400:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",o="11.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,o,"app")},3869:function(e,t,n){n.d(t,{HF:function(){return Tt},eJ:function(){return jt},xI:function(){return Xr},hg:function(){return Ht},x9:function(){return Ft},df:function(){return $n}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550),n(4603),n(7566),n(8721);var r=n(3405),i=n(4046),o=n(1363);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new i.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function d(e,...t){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw _(e,...t)}function v(e,...t){return _(e,...t)}function g(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n}),o=new i.FA("auth","Firebase",r);return o.create(t,{appName:e.name})}function m(e){return g(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&p(e,"argument-error"),g(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function b(e,t,...n){if(!e)throw _(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function I(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,I(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){I(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},x=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,r,o={}){return L(e,o,(async()=>{let o={},s={};r&&("GET"===t?s=r:o={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},o);return(0,i.c1)()||(u.referrerPolicy="no-referrer"),P.fetch()(U(e,e.config.apiHost,n,a),u)}))}async function L(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},A),t);try{const t=new F(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw V(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw V(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);p(e,a)}}catch(o){if(o instanceof i.g)throw o;p(e,"network-request-failed",{message:String(o)})}}async function M(e,t,n,r,i={}){const o=await D(e,t,n,r,i);return"mfaPendingCredential"in o&&p(e,"multi-factor-auth-required",{_serverResponse:o}),o}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?k(e.config,i):`${e.config.apiScheme}://${i}`}function j(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(v(this.auth,"network-request-failed"))),x.get())}))}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=v(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return void 0!==e&&void 0!==e.enterprise}class H{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return j(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return D(e,"GET","/v2/recaptchaConfig",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),o=q(r);b(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:K(Z(o.auth_time)),issuedAtTime:K(Z(o.iat)),expirationTime:K(Z(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Z(e){return 1e3*Number(e)}function q(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function J(e){const t=q(e);return b(t,"internal-error"),b("undefined"!==typeof t.exp,"internal-error"),b("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&Y(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const n=e.auth,r=await e.getIdToken(),i=await X(e,z(n,{idToken:r}));b(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ie(o.providerUserInfo):[],a=re(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ee(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ne(e){const t=(0,i.Ku)(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ie(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await L(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,s=U(e,r,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function se(e,t){return D(e,"POST","/v2/accounts:revokeToken",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b("undefined"!==typeof e.idToken,"internal-error"),b("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):J(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){b(0!==e.length,"internal-error");const t=J(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ae;return n&&(b("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(b("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){b("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ee(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return G(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(m(this.auth));const e=await this.getIdToken();return await X(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,m=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:I,stsTokenManager:E}=t;b(y&&E,e,"internal-error");const S=ae.fromJSON(this.name,E);b("string"===typeof y,e,"internal-error"),ce(l,e.name),ce(h,e.name),b("boolean"===typeof _,e,"internal-error"),b("boolean"===typeof w,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(v,e.name),ce(g,e.name),ce(m,e.name);const T=new ue({uid:y,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:m});return I&&Array.isArray(I)&&(T.providerData=I.map((e=>Object.assign({},e)))),v&&(T._redirectEventId=v),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await te(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];b(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?ie(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),s=new ae;s.updateFromIdToken(n);const a=new ue({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ee(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function he(e){I(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(I(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class ve{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ve(he(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||he(fe);const o=pe(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=ue._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new ve(i,e,n)):new ve(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Ee(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||_e(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ye(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _e(e=(0,i.ZQ)()){return/crios\//i.test(e)}function be(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function we(e=(0,i.ZQ)()){return/android/i.test(e)}function Ie(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Ee(e=(0,i.ZQ)()){return/webos/i.test(e)}function Se(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Te(e=(0,i.ZQ)()){var t;return Se(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Oe(){return(0,i.lT)()&&10===document.documentMode}function Ce(e=(0,i.ZQ)()){return Se(e)||we(e)||Ee(e)||Ie(e)||/windows phone/i.test(e)||be(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.ZQ)());break;case"Worker":n=`${ge((0,i.ZQ)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t={}){return D(e,"GET","/v2/passwordPolicy",N(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=6;class xe{constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:Ae,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.beforeStateQueue=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ve.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await z(this,{idToken:e}),n=await ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null===s||void 0===s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(m(this));const t=e?(0,i.Ku)(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(m(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(m(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(he(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pe(this),t=new xe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await se(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await ve.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(s,this,"internal-error"),s.then((()=>{o||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{o=!0,i()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Re(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function De(e){return(0,i.Ku)(e)}class Le{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ue(e){Me=e}function je(e){return Me.loadJS(e)}function Fe(){return Me.recaptchaEnterpriseScript}function Ve(){return Me.gapiScript}function $e(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(){this.enterprise=new We}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class We{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Be="recaptcha-enterprise",ze="NO_RECAPTCHA";class Ke{constructor(e){this.type=Be,this.auth=De(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{W(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new H(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;$(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(ze)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const e=new He;return e.execute("siteKey",{action:"verify"})}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&$(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Fe();0!==t.length&&(t+=n),je(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Ge(e,t,n,r=!1,i=!1){const o=new Ke(e);let s;if(i)s=ze;else try{s=await o.verify(n)}catch(c){s=await o.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ze(e,t,n,r,i){var o,s;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ge(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Ge(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}if("PHONE_PROVIDER"===i){if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("PHONE_PROVIDER")){const i=await Ge(e,t,n);return r(e,i).catch((async i=>{var o;if("AUDIT"===(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Ge(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)}))}{const i=await Ge(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}async function qe(e){const t=De(e),n=await W(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new H(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){const e=new Ke(t);e.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const o=n.initialize({options:t});return o}function Xe(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(he);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ye(e,t,n){const r=De(e);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Qe(t),{host:s,port:a}=et(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nt()}function Qe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function et(e){const t=Qe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:tt(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:tt(t)}}}function tt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function nt(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t){return D(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function at(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends rt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ct(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ct(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ze(e,t,"signInWithPassword",ot,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return st(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ze(e,n,"signUpPassword",it,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return at(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="http://localhost";class ht extends rt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new ht(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ut(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ut(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ut(e,t)}buildRequest(){const e={requestUri:lt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function ft(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function pt(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const vt={["USER_NOT_FOUND"]:"user-not-found"};async function gt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),vt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends rt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new mt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new mt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ft(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return pt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return gt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new mt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _t(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],o=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return o||r||n||t||e}class bt{constructor(e){var t,n,r,o,s,a;const c=(0,i.I9)((0,i.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=yt(null!==(r=c["mode"])&&void 0!==r?r:null);b(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=_t(e);try{return new bt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(){this.providerId=wt.PROVIDER_ID}static credential(e,t){return ct._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=bt.parseLink(t);return b(n,"argument-error"),ct._fromEmailAndCode(e,n.code,n.tenantId)}}wt.PROVIDER_ID="password",wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends It{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends Et{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch(t){return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com",St.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends Et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ht._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Tt.credential(t,n)}catch(r){return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com",Tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot extends Et{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch(t){return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com",Ot.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends Et{constructor(){super("twitter.com")}static credential(e,t){return ht._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ct.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rt(e,t){return M(e,"POST","/v1/accounts:signUp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.TWITTER_SIGN_IN_METHOD="twitter.com",Ct.PROVIDER_ID="twitter.com";class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ue._fromIdTokenResponse(e,n,r),o=Pt(n),s=new kt({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Pt(n);return new kt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Pt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,At.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new At(e,t,n,r)}}function xt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw At._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){const r=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dt(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(m(i));const o="reauthenticate";try{const r=await X(e,xt(i,o,t,e),n);b(r.idToken,i,"internal-error");const s=q(r.idToken);b(s,i,"internal-error");const{sub:a}=s;return b(e.uid===a,i,"user-mismatch"),kt._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(m(e));const i="signIn",o=await xt(e,i,t),s=await kt._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(s.user),s}async function Mt(e,t){return Lt(De(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ut(e){const t=De(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function jt(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(m(e));const i=De(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},s=Ze(i,o,"signUpPassword",Rt,"EMAIL_PASSWORD_PROVIDER"),a=await s.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Ut(e),t})),c=await kt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Ft(e,t,n){return(0,r.xZ)(e.app)?Promise.reject(m(e)):Mt((0,i.Ku)(e),wt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Ut(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function $t(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}function Ht(e,t,n,r){return(0,i.Ku)(e).onAuthStateChanged(t,n,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function Bt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}function zt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function Kt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const Gt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gt,"1"),this.storage.removeItem(Gt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=1e3,Jt=10;class Xt extends Zt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Oe()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Jt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),qt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xt.type="LOCAL";const Yt=Xt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Zt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qt.type="SESSION";const en=Qt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new nn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await tn(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.receivers=[];class on{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=rn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function an(e){sn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return"undefined"!==typeof sn()["WorkerGlobalScope"]&&"function"===typeof sn()["importScripts"]}async function un(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ln(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function hn(){return cn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="firebaseLocalStorageDb",fn=1,pn="firebaseLocalStorage",vn="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function mn(e,t){return e.transaction([pn],t?"readwrite":"readonly").objectStore(pn)}function yn(){const e=indexedDB.deleteDatabase(dn);return new gn(e).toPromise()}function _n(){const e=indexedDB.open(dn,fn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(pn,{keyPath:vn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(pn)?t(n):(n.close(),await yn(),t(await _n()))}))}))}async function bn(e,t,n){const r=mn(e,!0).put({[vn]:t,value:n});return new gn(r).toPromise()}async function wn(e,t){const n=mn(e,!1).get(t),r=await new gn(n).toPromise();return void 0===r?null:r.value}function In(e,t){const n=mn(e,!0).delete(t);return new gn(n).toPromise()}const En=800,Sn=3;class Tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await _n()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Sn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nn._getInstance(hn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await un(),!this.activeServiceWorker)return;this.sender=new on(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ln()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _n();return await bn(e,Gt,"1"),await In(e,Gt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>bn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>wn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>In(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=mn(e,!1).getAll();return new gn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),En)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tn.type="LOCAL";const On=Tn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function Rn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}function kn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e("rcb"),new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn="recaptcha";async function An(e,t,n){var r;if(!e._getRecaptchaConfig())try{await qe(e)}catch(i){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){b("enroll"===t.type,e,"internal-error");const r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},o=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===ze){b((null===n||void 0===n?void 0:n.type)===Pn,e,"argument-error");const r=await xn(e,t,n);return Wt(e,r)}return Wt(e,t)},s=Ze(e,r,"mfaSmsEnrollment",o,"PHONE_PROVIDER"),a=await s.catch((e=>Promise.reject(e)));return a.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const o=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;b(o,e,"missing-multi-factor-info");const s={mfaPendingCredential:t.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===ze){b((null===n||void 0===n?void 0:n.type)===Pn,e,"argument-error");const r=await xn(e,t,n);return Cn(e,r)}return Cn(e,t)},c=Ze(e,s,"mfaSmsSignIn",a,"PHONE_PROVIDER"),u=await c.catch((e=>Promise.reject(e)));return u.phoneResponseInfo.sessionInfo}}{const t={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},r=async(e,t)=>{if(t.captchaResponse===ze){b((null===n||void 0===n?void 0:n.type)===Pn,e,"argument-error");const r=await xn(e,t,n);return dt(e,r)}return dt(e,t)},o=Ze(e,t,"sendVerificationCode",r,"PHONE_PROVIDER"),s=await o.catch((e=>Promise.reject(e)));return s.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function xn(e,t,n){b(n.type===Pn,e,"argument-error");const r=await n.verify();b("string"===typeof r,e,"argument-error");const i=Object.assign({},t);if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,o=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:o}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.providerId=Nn.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return An(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return mt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Nn.credentialFromTaggedObject(t)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?mt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dn(e,t){return t?he(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn.PROVIDER_ID="phone",Nn.PHONE_SIGN_IN_METHOD="phone";class Ln extends rt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ut(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ut(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ut(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mn(e){return Lt(e.auth,new Ln(e),e.bypassAuthState)}function Un(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Dt(n,new Ln(e),e.bypassAuthState)}async function jn(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Nt(n,new Ln(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mn;case"linkViaPopup":case"linkViaRedirect":return jn;case"reauthViaPopup":case"reauthViaRedirect":return Un;default:p(this.auth,"internal-error")}}resolve(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new R(2e3,1e4);async function $n(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(v(e,"operation-not-supported-in-this-environment"));const i=De(e);y(e,t,It);const o=Dn(i,n),s=new Hn(i,"signInViaPopup",t,o);return s.executeNotNull()}class Hn extends Fn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){I(1===this.filter.length,"Popup operations only handle one event");const e=rn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(v(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Vn.get())};e()}}Hn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wn="pendingRedirect",Bn=new Map;class zn extends Fn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Bn.get(this.auth._key());if(!e){try{const t=await Kn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Bn.set(this.auth._key(),e)}return this.bypassAuthState||Bn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Kn(e,t){const n=qn(t),r=Zn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Gn(e,t){Bn.set(e._key(),t)}function Zn(e){return he(e._redirectPersistence)}function qn(e){return pe(Wn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(m(e));const i=De(e),o=Dn(i,t),s=new zn(i,o,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xn=6e5;class Yn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!tr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!er(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(v(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qn(e))}saveEventToCache(e){this.cachedEventUids.add(Qn(e)),this.lastProcessedEventTime=Date.now()}}function Qn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function er({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function tr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return er(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ir=/^https?/;async function or(e){if(e.config.emulator)return;const{authorizedDomains:t}=await nr(e);for(const r of t)try{if(sr(r))return}catch(n){}p(e,"unauthorized-domain")}function sr(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ir.test(n))return!1;if(rr.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new R(3e4,6e4);function cr(){const e=sn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ur(e){return new Promise(((t,n)=>{var r,i,o;function s(){cr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{cr(),n(v(e,"network-request-failed"))},timeout:ar.get()})}if(null===(i=null===(r=sn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=sn().gapi)||void 0===o?void 0:o.load)){const t=$e("iframefcb");return sn()[t]=()=>{gapi.load?s():n(v(e,"network-request-failed"))},je(`${Ve()}?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw lr=null,e}))}let lr=null;function hr(e){return lr=lr||ur(e),lr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new R(5e3,15e3),fr="__/auth/iframe",pr="emulator/auth/iframe",vr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mr(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?k(t,pr):`https://${e.config.authDomain}/${fr}`,o={apiKey:t.apiKey,appName:e.name,v:r.MF},s=gr.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,i.Am)(o).slice(1)}`}async function yr(e){const t=await hr(e),n=sn().gapi;return b(n,e,"internal-error"),t.open({where:document.body,url:mr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=v(e,"network-request-failed"),o=sn().setTimeout((()=>{r(i)}),dr.get());function s(){sn().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},br=500,wr=600,Ir="_blank",Er="http://localhost";class Sr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Tr(e,t,n,r=br,o=wr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},_r),{width:r.toString(),height:o.toString(),top:s,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(c=_e(l)?Ir:n),me(l)&&(t=t||Er,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Te(l)&&"_self"!==c)return Or(t||"",c),new Sr(null);const d=window.open(t||"",c,h);b(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Sr(d)}function Or(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="__/auth/handler",Rr="emulator/auth/handler",kr=encodeURIComponent("fac");async function Pr(e,t,n,o,s,a){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:r.MF,eventId:s};if(t instanceof It){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Et){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${kr}=${encodeURIComponent(l)}`:"";return`${Ar(e)}?${(0,i.Am)(u).slice(1)}${h}`}function Ar({config:e}){return e.emulator?k(e,Rr):`https://${e.authDomain}/${Cr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="webStorageSupport";class Nr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=en,this._completeRedirectFn=Jn,this._overrideRedirectResult=Gn}async _openPopup(e,t,n,r){var i;I(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Pr(e,t,n,E(),r);return Tr(e,o,rn())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Pr(e,t,n,E(),r);return an(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(I(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await yr(e),n=new Yn(e);return t.register("authEvent",(t=>{b(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(xr,{type:xr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[xr];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=or(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ye()||Se()}}const Dr=Nr;class Lr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class Mr extends Lr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Mr(e)}_finalizeEnroll(e,t,n){return Bt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Rn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ur{constructor(){}static assertion(e){return Mr._fromCredential(e)}}Ur.FACTOR_ID="phone";class jr{static assertionForEnrollment(e,t){return Fr._fromSecret(e,t)}static assertionForSignIn(e,t){return Fr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;b("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await zt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Vr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}jr.FACTOR_ID="totp";class Fr extends Lr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Fr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Fr(t,e)}async _finalizeEnroll(e,t,n){return b("undefined"!==typeof this.secret,e,"argument-error"),Kt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){b(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return kn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Vr{constructor(e,t,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Vr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return($r(e)||$r(t))&&(r=!0),r&&($r(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),$r(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function $r(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Hr="@firebase/auth",Wr="1.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kr(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;b(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Re(e)},u=new Ne(r,i,o,c);return Xe(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new Br(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Hr,Wr,zr(e)),(0,r.KO)(Hr,Wr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=300,Zr=(0,i.XA)("authIdTokenMaxAge")||Gr;let qr=null;const Jr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Zr)return;const i=null===n||void 0===n?void 0:n.token;qr!==i&&(qr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Xr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Je(e,{popupRedirectResolver:Dr,persistence:[On,Yt,en]}),o=(0,i.XA)("authTokenSyncURL");if(o&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(o,location.origin);if(location.origin===e.origin){const t=Jr(e.toString());$t(n,t,(()=>t(n.currentUser))),Vt(n,(e=>t(e)))}}const s=(0,i.Tj)("auth");return s&&Ye(n,`http://${s}`),n}function Yr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Ue({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=v("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Yr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Kr("Browser")}}]);
//# sourceMappingURL=chunk-vendors.de977c2f.js.map