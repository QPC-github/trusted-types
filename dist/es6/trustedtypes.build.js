(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
const aa="onabort onactivate onactivateinvisible onafterprint onafterupdate onanimationcancel onanimationend onanimationiteration onanimationstart onariarequest onauxclick onbeforeactivate onbeforecopy onbeforecut onbeforedeactivate onbeforeeditfocus onbeforepaste onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough oncellchange onchange onclick onclose oncommand oncontextmenu oncontrolselect oncopy oncuechange oncut ondataavailable ondatasetchanged ondatasetcomplete ondblclick ondeactivate ondrag ondragdrop ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onerrorupdate onexit onfilterchange onfinish onfocus onfocusin onfocusout onformdata onfullscreenchange onfullscreenerror ongotpointercapture onhelp oninput oninvalid onkeydown onkeypress onkeyup onlayoutcomplete onload onloadeddata onloadedmetadata onloadend onloadstart onlosecapture onlostpointercapture onmediacomplete onmediaerror onmessage onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onmove onmoveend onmovestart onmozfullscreenchange onmozfullscreenerror onmscontentzoom onmsgesturechange onmsgesturedoubletap onmsgestureend onmsgesturehold onmsgesturestart onmsgesturetap onmsgotpointercapture onmsinertiastart onmslostpointercapture onmsmanipulationstatechanged onmspointercancel onmspointerdown onmspointerenter onmspointerleave onmspointermove onmspointerout onmspointerover onmspointerup onoffline ononline onoutofsync onoverscroll onpaste onpause onplay onplaying onpointercancel onpointerdown onpointerenter onpointerleave onpointermove onpointerout onpointerover onpointerrawupdate onpointerup onprogress onpropertychange onratechange onreadystatechange onrepeat onreset onresize onresizeend onresizestart onresume onreverse onrowdelete onrowenter onrowexit onrowinserted onscroll onscrollend onsearch onseek onseeked onseeking onselect onselectionchange onselectstart onshow onstalled onstart onstop onstorage onsubmit onsuspend onsynchrestored ontimeerror ontimeupdate ontoggle ontrackchange ontransitioncancel ontransitionend ontransitionrun ontransitionstart onunload onurlflip onvolumechange onwaiting onwebkitanimationend onwebkitanimationiteration onwebkitanimationstart onwebkitfullscreenchange onwebkitfullscreenerror onwebkittransitionend onwheel".split(" ");
function ba(){if("undefined"!==typeof window){const a=[];for(const b in HTMLElement.prototype)"on"===b.slice(0,2)&&a.push(b);return a}return aa};const ca="undefined"!==typeof window,da=()=>{throw new TypeError("undefined conversion");},ea=()=>null,ma=String.prototype.toLowerCase,na=String.prototype.toUpperCase;function oa(){throw new TypeError("Illegal constructor");}function h(){throw new TypeError("Illegal constructor");}
const {trustedTypes:r,B:pa}=function(){function a(d){let g=T.get(d);void 0===g&&(g=t(null),T.set(d,g));return g}function b(d){const g=fa(d);if(null==g||fa(g)!==ha)throw Error();for(const n of U(g))C(d,n,{value:d[n]});return d}function c(d){if(!ia(d)||!ia(d.raw)||1!==d.length)throw new TypeError("Invalid input");d=Aa(d);if(this===w){var g=Ba.call(null,"template");g.innerHTML=d;d=g.innerHTML}g=v(new this(G,"fromLiteral"));a(g).v=d;return g}function e(d,g){v(d.prototype);delete d.name;C(d,"fromLiteral",
{value:c.bind(d)});C(d,"name",{value:g})}function f(d){return g=>g instanceof d&&T.has(g)}function k(d,g){function n(z,V){const Ca=g[V]||("default"==d?ea:da),Da=v(new z(G,d));return v({[V](x,...M){x=Ca(""+x,...M);if(void 0===x||null===x){if("default"==d)return x;x=""}x=""+x;M=v(t(Da));a(M).v=x;return M}}[V])}const l=t(oa.prototype);for(const z of U(N))l[z]=n(N[z],z);C(l,"name",{value:d,writable:!1,configurable:!1,enumerable:!0});return v(l)}function m(d,g,n,l="",z=""){d=na.apply(String(d));(l=z?z:
l)||(l="http://www.w3.org/1999/xhtml");if(l=H.apply(u,[l])?u[l]:null){if(H.apply(l,[d])&&l[d]&&H.apply(l[d][g],[n])&&l[d][g][n])return l[d][g][n];if(H.apply(l,["*"])&&H.apply(l["*"][g],[n])&&l["*"][g][n])return l["*"][g][n]}}function p(){return I}const q=Object.assign,t=Object.create,C=Object.defineProperty,v=Object.freeze,U=Object.getOwnPropertyNames,fa=Object.getPrototypeOf,ha=Object.prototype,ia=Object.isFrozen,Aa=String.raw,H=ha.hasOwnProperty,Ba=document?document.createElement.bind(document):
null,Ea=Array.prototype.forEach,Fa=Array.prototype.push,G=Symbol(),T=b(new WeakMap),J=b([]),O=b([]);let ja=!0,I=null,P=!1;class Q{constructor(d,g){if(d!==G)throw Error("cannot call the constructor");C(this,"policyName",{value:g,enumerable:!0})}toString(){return a(this).v}toJSON(){return a(this).v}valueOf(){return a(this).v}}class A extends Q{}e(A,"TrustedScriptURL");class w extends Q{}e(w,"TrustedHTML");class y extends Q{}e(y,"TrustedScript");v(Q.prototype);const ka=v(t(new w(G,"")));a(ka).v="";const la=
v(t(new y(G,"")));a(la).v="";const u={["http://www.w3.org/1999/xhtml"]:{EMBED:{attributes:{src:A.name}},IFRAME:{attributes:{srcdoc:w.name}},OBJECT:{attributes:{data:A.name,codebase:A.name}},SCRIPT:{attributes:{src:A.name,text:y.name},properties:{innerText:y.name,textContent:y.name,text:y.name}},"*":{attributes:{},properties:{innerHTML:w.name,outerHTML:w.name}}},["http://www.w3.org/2000/svg"]:{"*":{attributes:{},properties:{}}}};var F={codebase:"codeBase",formaction:"formAction"};!ca||"srcdoc"in HTMLIFrameElement.prototype||
delete u["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;for(const d of Object.keys(u["http://www.w3.org/1999/xhtml"])){u["http://www.w3.org/1999/xhtml"][d].properties||(u["http://www.w3.org/1999/xhtml"][d].properties={});for(const g of Object.keys(u["http://www.w3.org/1999/xhtml"][d].attributes))u["http://www.w3.org/1999/xhtml"][d].properties[F[g]?F[g]:g]=u["http://www.w3.org/1999/xhtml"][d].attributes[g]}for(const d of ba())u["http://www.w3.org/1999/xhtml"]["*"].attributes[d]="TrustedScript",
u["http://www.w3.org/2000/svg"]["*"].attributes[d]="TrustedScript";const N={createHTML:w,createScriptURL:A,createScript:y},Ga=N.hasOwnProperty;F=t(h.prototype);q(F,{createPolicy:function(d,g){if(!d.match(/^[-#a-zA-Z0-9=_/@.%]+$/g))throw new TypeError("Policy "+d+" contains invalid characters.");if(P&&-1===O.indexOf(d)&&-1===O.indexOf("*"))throw new TypeError("Policy "+d+" disallowed.");if("default"===d&&I)throw new TypeError("Policy "+d+" already exists.");if(P&&!ja&&-1!==J.indexOf(d))throw new TypeError("Policy "+
d+" exists.");J.push(d);const n=t(null);if(g&&"object"===typeof g)for(const l of U(g))Ga.call(N,l)&&(n[l]=g[l]);else console.warn("trustedTypes.createPolicy "+d+" was given an empty policy");v(n);g=k(d,n);"default"===d&&(I=g);return g},isHTML:f(w),isScriptURL:f(A),isScript:f(y),getAttributeType:function(d,g,n="",l=""){return m(d,"attributes",ma.apply(String(g)),n,l)||null},getPropertyType:function(d,g,n=""){return m(d,"properties",String(g),n)||null},s:function(d=""){if(!d)try{d=document.documentElement.namespaceURI}catch(g){d=
"http://www.w3.org/1999/xhtml"}return(d=u[d])?JSON.parse(JSON.stringify(d)):{}},emptyHTML:ka,emptyScript:la,defaultPolicy:I,TrustedHTML:w,TrustedScriptURL:A,TrustedScript:y});C(F,"defaultPolicy",{get:p,set:()=>{}});return{trustedTypes:v(F),B:function(d,g){P=!0;O.length=0;Ea.call(d,n=>{Fa.call(O,""+n)});ja=g;J.length=0},D:function(){P=!1},F:p,G:function(){I=null;J.splice(J.indexOf("default"),1)}}}();if("undefined"!==typeof window&&(window.TrustedTypes&&"undefined"===typeof window.trustedTypes&&(window.trustedTypes=Object.freeze(window.TrustedTypes)),"undefined"===typeof window.trustedTypes)){var B=Object.create(h.prototype);Object.assign(B,{isHTML:r.isHTML,isScriptURL:r.isScriptURL,isScript:r.isScript,createPolicy:r.createPolicy,getAttributeType:r.getAttributeType,getPropertyType:r.getPropertyType,getTypeMapping:r.s,emptyHTML:r.emptyHTML,emptyScript:r.emptyScript,_isPolyfill_:!0});Object.defineProperty(B,
"defaultPolicy",Object.getOwnPropertyDescriptor(r,"defaultPolicy")||{});window.trustedTypes=Object.freeze(B);window.TrustedHTML=r.TrustedHTML;window.TrustedScriptURL=r.TrustedScriptURL;window.TrustedScript=r.TrustedScript;window.TrustedTypePolicy=oa;window.TrustedTypePolicyFactory=h};function qa(a){const b=/\s+/;return a.trim().split(/\s*;\s*/).map(c=>c.split(b)).reduce(function(c,e){e[0]&&(c[e[0]]=e.slice(1).map(f=>f).sort());return c},{})}
function ra(a){const b=qa(a),c="require-trusted-types-for"in b&&b["require-trusted-types-for"].includes("'script'");let e=["*"],f=!0;"trusted-types"in b&&(e=b["trusted-types"].filter(k=>"'"!==k.charAt(0)),f=b["trusted-types"].includes("'allow-duplicates'"),1==b["trusted-types"].length&&"'none'"==b["trusted-types"][0]&&(e=[]));return new sa(!0,c,e,f,a)}class sa{constructor(a,b,c,e,f=null){this.h=a;this.g=b;this.j=c;this.i=e;this.l=f}};const D=Object.defineProperty;function ta(a,b,c){D(a,b,{value:c})};const E=Reflect.apply,ua=Object.getOwnPropertyNames,K=Object.getOwnPropertyDescriptor,va=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty,wa=String.prototype.slice;let xa;const R=r.s("http://www.w3.org/1999/xhtml"),S={TrustedHTML:r.TrustedHTML,TrustedScript:r.TrustedScript,TrustedScriptURL:r.TrustedScriptURL};for(const a of Object.keys(R)){const b=R[a].properties;for(const [c,e]of Object.entries(b))b[c]=S[e]}
const W={TrustedHTML:r.isHTML,TrustedScriptURL:r.isScriptURL,TrustedScript:r.isScript},ya={TrustedHTML:"createHTML",TrustedScriptURL:"createScriptURL",TrustedScript:"createScript"};function za(a){const b=a.g;a=["Element","HTMLElement","Document","Node","document"];return!!b&&"object"===typeof b&&a.every(c=>c in b)}function X(a,b,c){a=a.g[c];return!!a&&b instanceof a}
function Ha(a,b,c,e){let f=b,k,m;var p=va(a.g.Node.prototype);do(m=(k=K(f,c))?k.set:null)||(f=va(f)||p);while(!m&&f!==p&&f);if(m instanceof Function){p=Ia(b,c);if(a.i[p])throw Error(`TrustedTypesEnforcer: Double installation detected: ${p} ${c}`);var q=function(t){a.j.call(a,this,c,e,m,0,[t])};f===b?D(b,c,{set:q}):D(b,c,{set:q,get:k.get,configurable:!0});a.i[p]=m}else a.h.h&&console.warn("No setter for property "+c+" on object"+b)}
function Y(a,b,c,e,f){Z(a,b,c,function(k,...m){return a.j.call(a,this,c,e,k,f,m)})}function Ja(a){Z(a,a.g.Element.prototype,"setAttribute",function(b,...c){return a.u.bind(a,this,b).apply(a,c)});Z(a,a.g.Element.prototype,"setAttributeNS",function(b,...c){return a.C.bind(a,this,b).apply(a,c)})}
function Ka(a){["appendChild","insertBefore","replaceChild"].forEach(b=>{Z(a,a.g.Node.prototype,b,function(c,...e){return a.m.bind(a,this,!1,c).apply(a,e)})});a.l&&Z(a,a.l,"insertAdjacentText",function(b,...c){return a.A.bind(a,this,b).apply(a,c)});["after","before","replaceWith"].forEach(b=>{b in a.g.Element.prototype&&Z(a,a.g.Element.prototype,b,function(c,...e){return a.m.bind(a,this,!0,c).apply(a,e)})});["append","prepend"].forEach(b=>{b in a.g.Element.prototype&&Z(a,a.g.Element.prototype,b,function(c,
...e){return a.m.bind(a,this,!1,c).apply(a,e)})})}function La(a){for(const b of ua(R))for(const c of ua(R[b].properties)){const e="*"==b?"HTMLElement":a.o(a.g.document.createElement(b).constructor);null!=e&&a.g[e]&&Ha(a,a.g[e].prototype,c,R[b].properties[c])}}
function Ma(a){pa(a.h.j,a.h.i);if(a.h.g||a.h.h)"ShadowRoot"in a.g&&Ha(a,a.g.ShadowRoot.prototype,"innerHTML",r.TrustedHTML),xa=function(b){return b.createRange?0==b.createRange().createContextualFragment({toString:()=>"<div></div>"}).childNodes.length:!1}(a.g.document),a.g.Range&&Y(a,a.g.Range.prototype,"createContextualFragment",r.TrustedHTML,0),a.l&&Y(a,a.l,"insertAdjacentHTML",r.TrustedHTML,1),K(a.g.Document.prototype,"write")?Y(a,a.g.Document.prototype,"write",r.TrustedHTML,0):a.g.HTMLDocument&&
K(a.g.HTMLDocument.prototype,"write")&&Y(a,a.g.HTMLDocument.prototype,"write",r.TrustedHTML,0),"DOMParser"in a.g&&Y(a,a.g.DOMParser.prototype,"parseFromString",r.TrustedHTML,0),a.g.hasOwnProperty("setInterval")&&Y(a,a.g,"setInterval",r.TrustedScript,0),a.g.hasOwnProperty("setTimeout")&&Y(a,a.g,"setTimeout",r.TrustedScript,0),Ja(a),Ka(a),La(a)}
function Z(a,b,c,e){var f=K(b,c);const k=f?f.value:null;if(!(k instanceof Function))throw new TypeError("Property "+c+" on object"+b+" is not a function");f=Ia(b,c);if(a.i[f])throw Error(`TrustedTypesEnforcer: Double installation detected: ${f} ${c}`);ta(b,c,function(...m){return e.bind(this,k).apply(this,m)});a.i[f]=k}function Na(a,b,c=""){const e=r.defaultPolicy;return e&&W.hasOwnProperty(a)?e[ya[a]](b,a,c):null}
function Oa(a,b,c,e,f){const k=a.o(b.constructor)||""+b,m=`Failed to set ${c} on ${k}: `+`This property requires ${e.name}.`;a.h.h&&console.warn(m,c,b,e,f);const p=a.g.SecurityPolicyViolationEvent||null;if("function"===typeof p){var q="";if(e===r.TrustedScriptURL){q=a.g;e="function"==typeof q.URL?q.URL.prototype.constructor:null;try{var t=new e(f,q.document.baseURI||void 0)}catch(C){t=null}if(q=t||"")q=q.href}f=E(wa,f,[0,40]);c=new p("securitypolicyviolation",{bubbles:!0,blockedURI:q,disposition:a.h.g?
"enforce":"report",documentURI:a.g.document.location.href,effectiveDirective:"require-trusted-types-for",originalPolicy:a.h.l,statusCode:0,violatedDirective:"require-trusted-types-for",sample:`${k}.${c} ${f}`});X(a,b,"Node")&&b.isConnected?b.dispatchEvent(c):a.g.document.dispatchEvent(c)}if(a.h.g)throw new TypeError(m);}function Ia(a,b){return""+(a.constructor.name?a.constructor.name:a.constructor)+"-"+b}
class Pa{constructor(a){this.h=a;this.i={};this.g="undefined"!==typeof window?window:null;if(!za(this))throw Error("The polyfill expects a global `window` object or emulated `window-like` object passed to the enforcer as second argument");this.l=(b=>E(L,b.Element.prototype,["insertAdjacentHTML"])?b.Element.prototype:b.HTMLElement.prototype)(this.g);this.o=this.g.document.createElement("div").constructor.name?b=>b.name:b=>(""+b).match(/^\[object (\S+)\]$/)[1]}u(a,b,...c){if(null!==a.constructor&&X(this,
a,"Element")){var e=(c[0]=String(c[0])).toLowerCase();if((e=r.getAttributeType(a.tagName,e,a.namespaceURI))&&E(L,S,[e]))return this.j(a,"setAttribute",S[e],b,1,c)}return E(b,a,c)}C(a,b,...c){if(null!==a.constructor&&X(this,a,"Element")){var e=c[0]?String(c[0]):null;c[0]=e;const f=(c[1]=String(c[1])).toLowerCase();if((e=r.getAttributeType(a.tagName,f,a.namespaceURI,e))&&E(L,S,[e]))return this.j(a,"setAttributeNS",S[e],b,2,c)}return E(b,a,c)}m(a,b,c,...e){if(X(this,b?a.parentNode:a,"HTMLScriptElement")&&
0<e.length)for(b=0;b<e.length;b++){let f=e[b];if(X(this,f,"Node")&&f.nodeType!==this.g.Node.TEXT_NODE)continue;if(X(this,f,"Node")&&f.nodeType==this.g.Node.TEXT_NODE)f=f.textContent;else if(r.isScript(f)){e[b]=this.g.document.createTextNode(""+f);continue}const k=Na("TrustedScript",""+f,"HTMLScriptElement text");null===k||void 0===k?Oa(this,a,c.name,r.TrustedScript,f):f=k;e[b]=this.g.document.createTextNode(""+f)}return E(c,a,e)}A(a,b,...c){const e=["beforebegin","afterend"];if(X(this,a,"Element")&&
X(this,a.parentElement,"HTMLScriptElement")&&1<c.length&&e.includes(c[0])&&!r.isScript(c[1])){c[1]=""+c[1];b=Na("TrustedScript",c[1],"HTMLScriptElement text");null===b||void 0===b?Oa(this,a,"insertAdjacentText",r.TrustedScript,c[1]):c[1]=b;b=this.g.document.createTextNode(""+c[1]);const f=this.i[Ia(this.g.Node.prototype,"insertBefore")];switch(c[0]){case e[0]:E(f,a.parentElement,[b,a]);break;case e[1]:E(f,a.parentElement,[b,a.nextSibling])}}else E(b,a,c)}j(a,b,c,e,f,k){const m=k[f];var p=c.name;if(W.hasOwnProperty(p)&&
W[p](m))return xa&&"createContextualFragment"==b&&(k[f]=k[f].toString()),E(e,a,k);if(c===r.TrustedScript){var q="setAttribute"==b||"setAttributeNS"===b||"on"===E(wa,b,[0,2]);if(("setInterval"===b||"setTimeout"===b||q)&&"function"===typeof m||q&&null===m)return E(e,a,k)}k[f]=""+m;q=this.o(a?a.constructor:window.constructor);["innerHTML","setAttribute","setAttributeNS"].includes(b)&&(q="Element");p=Na(p,m,q+" "+b);null===p||void 0===p?Oa(this,a,b,c,m):k[f]=p;return E(e,a,k)}};function Qa(){try{var a;if(!(a=document.currentScript)){const c=document.getElementsByTagName("script");a=c[c.length-1]}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.csp)return a.dataset.csp;const b=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(b)return b.content.trim()}catch(b){}return null}var Ra;
a:{for(const a of["trustedTypes","TrustedTypes"])if(window[a]&&!window[a]._isPolyfill_){Ra=!1;break a}Ra=!0}if(Ra){const a=Qa(),b=a?ra(a):new sa(!1,!1,[],!0);Ma(new Pa(b))};}).call(this);

//# sourceMappingURL=trustedtypes.build.js.map
