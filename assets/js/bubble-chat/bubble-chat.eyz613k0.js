/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='bubble-chat']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,n,e,o){"use strict";function i(t,n,e,o,i,c,r){let f=e.t+(o||j),l=e[f];if(l||(l=e[f=e.t+j]),l){let o=n.n;if(n.e)if(1===e.encapsulation)o=i.shadowRoot;else for(;i=n.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=t.i.get(o)||{};if(!c[f]){r=l.content.cloneNode(!0);const e=o.querySelectorAll("[data-styles]");n.c(o,r,e.length&&e[e.length-1].nextSibling||o.r),c[f]=!0,t.i.set(o,c)}}}function c(t){return{f:t[0],l:t[1],s:!!t[2],u:!!t[3],a:!!t[4]}}function r(t,n){if(E(n)){if(t===Boolean||3===t)return"false"!==n&&(""===n||!!n);if(t===Number||4===t)return parseFloat(n)}return n}function f(t,n,e,o){const i=t.p.get(n);i&&((o=i["s-ld"]||i.$activeLoading)&&((e=o.indexOf(n))>-1&&o.splice(e,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.p.delete(n))}function l(t,n,e){let o,i=null,c=!1,r=!1;for(var f=arguments.length;f-- >2;)S.push(arguments[f]);for(;S.length>0;)if((e=S.pop())&&void 0!==e.pop)for(f=e.length;f--;)S.push(e[f]);else"boolean"==typeof e&&(e=null),(r="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(r=!1)),r&&c?i[i.length-1].d+=e:null===i?i=[r?{d:e}:e]:i.push(r?{d:e}:e),c=r;if(null!=n){if(n.className&&(n.class=n.className),"object"==typeof n.class){for(f in n.class)n.class[f]&&S.push(f);n.class=S.join(" "),S.length=0}null!=n.v&&(o=n.v)}return"function"==typeof t?t(Object.assign({},n,{m:i})):{b:t,y:i,d:void 0,w:n,M:o,g:void 0,k:!1}}function s(t,n){t.C.has(n)||(t.C.set(n,!0),t.j?t.queue.write(()=>u(t,n)):t.queue.tick(()=>u(t,n)))}function u(t,n,e,o,i,c){if(t.C.delete(n),!t.W.has(n)){if(o=t.x.get(n),e=!o){if((i=t.p.get(n))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{u(t,n)}),void(i.$onRender=i["s-rc"]);o=function r(t,n,e,o,i,c,f){try{(function l(t,n,e,o,i,c,r){for(r in t.O.set(o,e),t.N.has(e)||t.N.set(e,{}),(c=Object.assign({color:{type:String}},n.properties)).mode={type:String},c)p(t,c[r],e,o,r,i)})(t,i=t.S(n).A,n,o=new i,e),function s(t,n,e){if(n){const o=t.O.get(e);n.forEach(n=>{e[n.method]={emit:e=>{t.T(o,n.name,{bubbles:n.bubbles,composed:n.composed,cancelable:n.cancelable,detail:e})}}})}}(t,i.events,o)}catch(e){o={},t.L(e,7,n,!0)}return t.x.set(n,o),o}(t,n,t.q.get(n))}c&&c.then?c.then(()=>a(t,n,o,e)):a(t,n,o,e)}}function a(t,n,e,o){(function i(t,n,e,o,c){try{const i=n.A.host;let r;if(o.render||o.hostData||i||r){t.R=!0;const i=o.render&&o.render();let r;t.R=!1;const f=t.B.get(e)||{};f.g=e;const s=l(null,r,i);t.B.set(e,t.render(f,s,c,n.A.encapsulation))}t.D(t,t.P,n,o.mode,e),e["s-rn"]=!0,e.$onRender&&(e["s-rc"]=e.$onRender),e["s-rc"]&&(e["s-rc"].forEach(t=>t()),e["s-rc"]=null)}catch(n){t.R=!1,t.L(n,8,e,!0)}})(t,t.S(n),n,e,!o);try{o?n["s-init"]():w(t.B.get(n))}catch(e){t.L(e,6,n,!0)}}function p(t,n,e,o,i,c,f,l){if(n.type||n.state){const s=t.N.get(e);n.state||(!n.attr||void 0!==s[i]&&""!==s[i]||(f=c&&c.F)&&E(l=f[n.attr])&&(s[i]=r(n.type,l)),e.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=e[i]),delete e[i])),o.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=o[i]),n.watchCallbacks&&(s[T+i]=n.watchCallbacks.slice()),m(o,i,function s(n){return(n=t.N.get(t.O.get(this)))&&n[i]},function u(e,o){(o=t.O.get(this))&&(n.state||n.mutable)&&d(t,o,i,e)})}else n.elementRef&&v(o,i,e)}function d(t,n,e,o,i,c,r){(i=t.N.get(n))||t.N.set(n,i={});const f=i[e];if(o!==f&&(i[e]=o,c=t.x.get(n))){if(r=i[T+e])for(let t=0;t<r.length;t++)try{c[r[t]].call(c,o,f,e)}catch(t){}!t.R&&n["s-rn"]&&s(t,n)}}function v(t,n,e){Object.defineProperty(t,n,{configurable:!0,value:e})}function m(t,n,e,o){Object.defineProperty(t,n,{configurable:!0,get:e,set:o})}function b(t,n,e,o,i,c,r,f,l){if("class"!==e||c)if("style"===e){for(f in o=o||W,i=i||W,o)i[f]||(n.style[f]="");for(f in i)i[f]!==o[f]&&(n.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in n)if("list"!==e&&"type"!==e&&!c&&(e in n||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.S(n);o&&o.H&&o.H[e]?h(n,e,i):"ref"!==e&&(h(n,e,null==i?"":i),null!=i&&!1!==i||n.removeAttribute(e))}else null!=i?function s(t,n,e){const o=n!==(n=n.replace(/^xlink\:?/,"")),i=L[n];!i||e&&"false"!==e?"function"!=typeof e&&(i&&(e=""),o?t.setAttributeNS(q,N(n),e):t.setAttribute(n,e)):o?t.removeAttributeNS(q,N(n)):t.removeAttribute(n)}(n,e,i):!c||null!=i&&!1!==i||n.removeAttribute(e);else e=N(e)in n?N(e.substring(2)):N(e[2])+e.substring(3),i?i!==o&&t.P.I(n,e,i):t.P.U(n,e);else if(o!==i){const t=null==o||""===o?x:o.trim().split(/\s+/),e=null==i||""===i?x:i.trim().split(/\s+/);let c=null==n.className||""===n.className?x:n.className.trim().split(/\s+/);for(f=0,l=t.length;f<l;f++)-1===e.indexOf(t[f])&&(c=c.filter(n=>n!==t[f]));for(f=0,l=e.length;f<l;f++)-1===t.indexOf(e[f])&&(c=[...c,e[f]]);n.className=c.join(" ")}}function h(t,n,e){try{t[n]=e}catch(t){}}function y(t,n,e,o,i){const c=11===e.g.nodeType&&e.g.host?e.g.host:e.g,r=n&&n.w||W,f=e.w||W;for(i in r)f&&null!=f[i]||null==r[i]||b(t,c,i,r[i],void 0,o,e.k);for(i in f)i in r&&f[i]===("value"===i||"checked"===i?c[i]:r[i])||b(t,c,i,r[i],f[i],o,e.k)}function w(t,n){t&&(t.w&&t.w.ref&&t.w.ref(n?null:t.g),t.y&&t.y.forEach(t=>{w(t,n)}))}function M(t,n,e,o,i){const c=t.z(n);let r,f,l,s;if(i&&1===c){(f=t.Q(n,C))&&(l=f.split("."))[0]===o&&((s={}).b=t.Z(s.g=n),e.y||(e.y=[]),e.y[l[1]]=s,e=s,i=""!==l[2]);for(let c=0;c<n.childNodes.length;c++)M(t,n.childNodes[c],e,o,i)}else 3===c&&(r=n.previousSibling)&&8===t.z(r)&&"s"===(l=t.G(r).split("."))[0]&&l[1]===o&&((s={d:t.G(n)}).g=n,e.y||(e.y=[]),e.y[l[2]]=s)}function $(t,n,e,o,i){return e["s-cr"]||t.Q(e,k)||function c(t,n){return t&&1===n.encapsulation}(t.e,n)||t.c(e,e["s-cr"]=t.J(""),t.K(e)[0]),t.e||1!==n.encapsulation||(e.shadowRoot=e),o={V:e["s-id"],F:{}},n.H&&Object.keys(n.H).forEach(c=>{(i=n.H[c].X)&&(o.F[i]=t.Q(e,i))}),o}function g(t,n,e,o){return function(){const i=arguments;return function c(t,n,e){return new Promise(o=>{let i=n[e];i||(i=t.Y.querySelector(e)),i||(i=n[e]=t._(e),t.tt(t.Y,i)),i.componentOnReady(o)})}(t,n,e).then(t=>t[o].apply(t,i))}}const k="data-ssrv",C="data-ssrc",j="$",W={},x=[],O={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},E=t=>null!=t,N=t=>t.toLowerCase(),A=()=>{},S=[],T="wc-",L={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},q="http://www.w3.org/1999/xlink";let R=!1;(function B(n,e,o,u,a,p){const b={html:{}},h={},C=o[n]=o[n]||{},W=function x(t,n,e){t.nt||(t.nt=((t,n,e,o)=>t.addEventListener(n,e,o)),t.et=((t,n,e,o)=>t.removeEventListener(n,e,o)));const o=new WeakMap,i={ot:e.documentElement,n:e.head,Y:e.body,it:!1,z:t=>t.nodeType,_:t=>e.createElement(t),ct:(t,n)=>e.createElementNS(t,n),rt:t=>e.createTextNode(t),J:t=>e.createComment(t),c:(t,n,e)=>t.insertBefore(n,e),ft:t=>t.remove(),tt:(t,n)=>t.appendChild(n),K:t=>t.childNodes,o:t=>t.parentNode,lt:t=>t.nextSibling,Z:t=>N(t.tagName),G:t=>t.textContent,st:(t,n)=>t.textContent=n,Q:(t,n)=>t.getAttribute(n),ut:(t,n,e)=>t.setAttribute(n,e),at:(t,n,e,o)=>t.setAttributeNS(n,e,o),pt:(t,n)=>t.removeAttribute(n),dt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.vt(t):"body"===o?i.Y:"document"===o?e:"window"===o?n:t,I:(n,e,c,r,f,l,s,u)=>{const a=e;let p=n,d=o.get(n);if(d&&d[a]&&d[a](),"string"==typeof l?p=i.dt(n,l):"object"==typeof l?p=l:(u=e.split(":")).length>1&&(p=i.dt(n,u[0]),e=u[1]),!p)return;let v=c;(u=e.split(".")).length>1&&(e=u[0],v=(t=>{t.keyCode===O[u[1]]&&c(t)})),s=i.it?{capture:!!r,passive:!!f}:!!r,t.nt(p,e,v,s),d||o.set(n,d={}),d[a]=(()=>{p&&t.et(p,e,v,s),d[a]=null})},U:(t,n)=>{const e=o.get(t);e&&(n?e[n]&&e[n]():Object.keys(e).forEach(t=>{e[t]&&e[t]()}))},mt:(t,e,o)=>t&&t.dispatchEvent(new n.CustomEvent(e,o))};try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.it=!0}))}catch(t){}return i.vt=((t,n)=>(n=i.o(t))&&11===i.z(n)?n.host:n),i}(C,o,u);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=o,e.location=o.location,e.document=u,e.resourcesUrl=e.publicPath=a,e.emit=((t,n,o)=>W.mt(t,e.eventNameFn?e.eventNameFn(n):n,o)),C.h=l,C.Context=e;const S=o.$definedCmps=o.$definedCmps||{};let T=0;const L={P:W,bt:function q(t,n){if(!S[t.t]){S[t.t]=!0,function e(t,n,o,i){o.connectedCallback=function(){(function e(t,n,o){t.W.delete(o),t.ht.has(o)||(t.ht.set(o,!0),o["s-id"]||(o["s-id"]=t.yt()),function i(t,n,e){for(e=n;e=t.P.vt(e);)if(t.wt(e)){t.Mt.has(n)||(t.p.set(n,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(n));break}}(t,o),t.queue.tick(()=>t.$t(n,o,$(t.P,n,o))))})(t,n,this)},o.attributeChangedCallback=function(t,e,o){(function i(t,n,e,o,c,f,l){if(t&&o!==c)for(f in t)if((l=t[f]).X&&N(l.X)===N(e)){n[f]=r(l.gt,c);break}})(n.H,this,t,e,o)},o.disconnectedCallback=function(){(function n(t,e,o){!t.kt&&function i(t,n){for(;n;){if(!t.o(n))return 9!==t.z(n);n=t.o(n)}}(t.P,e)&&(t.W.set(e,!0),f(t,e),w(t.B.get(e),!0),t.P.U(e),t.Ct.delete(e),[t.p,t.jt,t.q].forEach(t=>t.delete(e)))})(t,this)},o["s-init"]=function(){(function n(t,e,o,i,c){if(!t.Mt.has(e)&&t.x.get(e)&&!t.W.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){delete e["s-ld"],t.Mt.set(e,!0);try{w(t.B.get(e)),(c=t.jt.get(e))&&(c.forEach(t=>t(e)),t.jt.delete(e))}catch(n){t.L(n,4,e)}e.classList.add(o),f(t,e)}})(t,this,i)},o.forceUpdate=function(){s(t,this)},function c(t,n,e){n&&Object.keys(n).forEach(o=>{const i=n[o].Wt;1===i||2===i?m(e,o,function n(){return(t.N.get(this)||{})[o]},function n(e){d(t,this,o,e)}):6===i&&v(e,o,A)})}(t,n.H,o)}(L,t,n.prototype,p);{const e=[];for(const n in t.H)t.H[n].X&&e.push(t.H[n].X);n.observedAttributes=e}o.customElements.define(t.t,n)}},T:e.emit,S:t=>b[W.Z(t)],xt:t=>e[t],isClient:!0,wt:t=>!(!S[W.Z(t)]&&!L.S(t)),yt:()=>n+T++,L:(t,n,e)=>void 0,Ot:t=>(function n(t,e,o){return{create:g(t,e,o,"create"),componentOnReady:g(t,e,o,"componentOnReady")}})(W,h,t),queue:e.queue=function B(n,e,o,i){function c(t){for(;t=u.shift();)t();o=!1}function r(t,e){for(t=l(),c();e=a.shift();)e(t);for(;(e=p.shift())&&l()-t<40;)e(t);(i=a.length>0||p.length>0)&&n.raf(f)}function f(t,e){for(c();e=a.shift();)e();for(t=4+l();(e=p.shift())&&l()<t;)e();(i=a.length>0||p.length>0)&&n.raf(r)}const l=()=>e.performance.now(),s=Promise.resolve(),u=[],a=[],p=[];return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:t=>{u.push(t),o||(o=!0,s.then(c))},read:t=>{a.push(t),i||(i=!0,n.raf(r))},write:t=>{p.push(t),i||(i=!0,n.raf(r))}}}(C,o),$t:function D(t,n){if(n.mode||(n.mode=W.Q(n,"mode")||e.mode),$(L.P,t,n),t.A)s(L,n);else{const e="string"==typeof t.Et?t.Et:t.Et[n.mode],o=a+e+(function o(t,n){return 2===n.encapsulation||1===n.encapsulation&&!t}(W.e,t)?".sc":"")+".js";import(o).then(e=>{try{t.A=e[(t=>N(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,n,e){const o=e.style;if(o){const i=e.is+(e.styleMode||j);if(!n[i]){const e=t._("template");n[i]=e,e.innerHTML=`<style>${o}</style>`,t.tt(t.n,e)}}}(W,t,t.A)}catch(n){t.A=class{}}s(L,n)}).catch(t=>void 0)}},p:new WeakMap,i:new WeakMap,ht:new WeakMap,Ct:new WeakMap,Mt:new WeakMap,O:new WeakMap,q:new WeakMap,x:new WeakMap,W:new WeakMap,C:new WeakMap,jt:new WeakMap,Nt:new WeakMap,B:new WeakMap,N:new WeakMap};L.render=function P(t,n){function e(o,i,r,f,l,p,d,v,m){if(!u&&"slot"===o.b){if(Object.keys(s).length&&(a&&n.ut(i,a+"-slot",""),v=E(d=o.w&&o.w.name)?s[d]:s.At,E(v))){for(t.kt=!0,f=0;f<v.length;f++)p=v[f],n.ft(p),n.tt(i,p),8!==p.nodeType&&(m=!0);!m&&o.y&&c(i,[],o.y),t.kt=!1}return null}if(E(o.d))o.g=n.rt(o.d);else{l=o.g=R||"svg"===o.b?n.ct("http://www.w3.org/2000/svg",o.b):n._(o.b),R="svg"===o.b||"foreignObject"!==o.b&&R,y(t,null,o,R),E(a)&&l.St!==a&&n.ut(l,l.St=a,"");const i=o.y;if(i)for(f=0;f<i.length;++f)(p=e(i[f],l))&&n.tt(l,p);"svg"===o.b&&(R=!1)}return o.g}function o(t,o,i,c,r,f,l,s){const u=t["s-cr"]||t.$defaultHolder;for(f=u&&n.o(u)||t;c<=r;++c)(s=i[c])&&(l=E(s.d)?n.rt(s.d):e(s,t))&&(s.g=l,n.c(f,l,o))}function i(t,e,o){for(;e<=o;++e)E(t[e])&&n.ft(t[e].g)}function c(t,c,s){let u,a,p,d,v=0,m=0,b=c.length-1,h=c[0],y=c[b],w=s.length-1,M=s[0],$=s[w];for(;v<=b&&m<=w;)null==h?h=c[++v]:null==y?y=c[--b]:null==M?M=s[++m]:null==$?$=s[--w]:r(h,M)?(l(h,M),h=c[++v],M=s[++m]):r(y,$)?(l(y,$),y=c[--b],$=s[--w]):r(h,$)?(l(h,$),n.c(t,h.g,n.lt(y.g)),h=c[++v],$=s[--w]):r(y,M)?(l(y,M),n.c(t,y.g,h.g),y=c[--b],M=s[++m]):(E(u)||(u=f(c,v,b)),a=u[M.M],E(a)?((p=c[a]).b!==M.b?d=e(M,t):(l(p,M),c[a]=void 0,d=p.g),M=s[++m]):(d=e(M,t),M=s[++m]),d&&n.c(h.g&&h.g.parentNode||t,d,h.g));v>b?o(t,null==s[w+1]?null:s[w+1].g,s,m,w):m>w&&i(c,v,b)}function r(t,n){return t.b===n.b&&t.M===n.M}function f(t,n,e){const o={};let i,c,r;for(i=n;i<=e;++i)null!=(r=t[i])&&void 0!==(c=r.M)&&(o.Tt=i);return o}function l(e,r,f){const l=r.g=e.g,s=e.y,u=r.y;R=r.g&&E(n.vt(r.g))&&void 0!==r.g.ownerSVGElement,R="svg"===r.b||"foreignObject"!==r.b&&R,E(r.d)?(f=l["s-cr"]||l.$defaultHolder)?n.st(n.o(f),r.d):e.d!==r.d&&n.st(l,r.d):("slot"!==r.b&&y(t,e,r,R),E(s)&&E(u)?c(l,s,u):E(u)?(E(e.d)&&n.st(l,""),o(l,null,u,0,u.length-1)):E(s)&&i(s,0,s.length-1)),R&&"svg"===r.b&&(R=!1)}let s,u,a;return function t(e,o,i,c,r){return function f(t,n,e,o,i,c,r){if(o=n&&t.o(n))for(i=t.K(o),c=0;c<i.length;c++)o=i[c],1===t.z(o)&&E(r=t.Q(o,"slot"))?e[r]?e[r].push(o):e[r]=[o]:e.At?e.At.push(o):e.At=[o]}(n,e.g["s-cr"],s={}),a="scoped"===c||"shadow"===c&&!n.e?"data-"+n.Z(e.g):null,i||a&&n.ut(e.g,a+"-host",""),l(e,o),o}}(L,W);const F=W.ot;F["s-ld"]=[],F["s-rn"]=!0,F["s-init"]=(()=>{L.Mt.set(F,C.loaded=L.j=!0),W.mt(o,"appload",{detail:{namespace:n}})}),function H(t,n,e){const o=e.querySelectorAll(`[${k}]`),i=o.length;let c,r,f,l,s,u;if(i>0)for(t.Mt.set(e,!0),l=0;l<i;l++)for(c=o[l],r=n.Q(c,k),(f={}).b=n.Z(f.g=c),t.B.set(c,f),s=0,u=c.childNodes.length;s<u;s++)M(n,c.childNodes[s],f,r,!0)}(L,W,F),L.D=i,(C.components||[]).map(t=>(function n(t,e,o,i){const r={t:t[0],H:{color:{X:"color"}}};r.Et=t[1];const f=t[3];if(f)for(o=0;o<f.length;o++)i=f[o],r.H[i[0]]={Wt:i[1],Lt:!!i[2],X:"string"==typeof i[3]?i[3]:i[3]?i[0]:0,gt:i[4]};return r.encapsulation=t[4],t[5]&&(r.qt=t[5].map(c)),e[r.t]=r})(t,b)).forEach(t=>L.bt(t,class extends HTMLElement{})),function I(t,n){n.componentOnReady=((n,e)=>{if(t.S(n)&&!t.Mt.has(n)){const o=t.jt.get(n)||[];o.push(e),t.jt.set(n,o)}else e(n)}),n.$r&&n.$r.forEach(t=>n.componentOnReady(t[0],t[1])),n.$r=null}(L,C),C.initialized=!0})(o,e,t,n,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"BubbleChat","hydrated");