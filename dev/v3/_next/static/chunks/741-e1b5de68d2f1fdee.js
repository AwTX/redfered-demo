(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[741],{6808:function(e,t,n){var r,o,u;void 0!==(o="function"==typeof(r=u=function(){function extend(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function decode(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function init(e){function api(){}function set(t,n,r){if("undefined"!=typeof document){"number"==typeof(r=extend({path:"/"},api.defaults,r)).expires&&(r.expires=new Date(new Date*1+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var o=JSON.stringify(n);/^[\{\[]/.test(o)&&(n=o)}catch(e){}n=e.write?e.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var l in r)r[l]&&(u+="; "+l,!0!==r[l]&&(u+="="+r[l].split(";")[0]));return document.cookie=t+"="+n+u}}function get(t,n){if("undefined"!=typeof document){for(var r={},o=document.cookie?document.cookie.split("; "):[],u=0;u<o.length;u++){var l=o[u].split("="),i=l.slice(1).join("=");n||'"'!==i.charAt(0)||(i=i.slice(1,-1));try{var a=decode(l[0]);if(i=(e.read||e)(i,a)||decode(i),n)try{i=JSON.parse(i)}catch(e){}if(r[a]=i,t===a)break}catch(e){}}return t?r[t]:r}}return api.set=set,api.get=function(e){return get(e,!1)},api.getJSON=function(e){return get(e,!0)},api.remove=function(e,t){set(e,"",extend(t,{expires:-1}))},api.defaults={},api.withConverter=init,api}(function(){})})?r.call(t,n,t,e):r)&&(e.exports=o),e.exports=u()},7498:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return f},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",u="navigate",l="restore",i="server-patch",a="prefetch",f="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(260),o=r._(n(7294)),u=n(4450),l=n(2227),i=n(4364),a=n(109),f=n(3607),c=n(1823),s=n(9031),d=n(920),p=n(30),v=n(7192),y=n(7498),g=new Set;function prefetch(e,t,n,r,o,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(g.has(u))return;g.add(u)}let i=u?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(i).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let h=o.default.forwardRef(function(e,t){let n,r;let{href:i,as:g,children:h,prefetch:_=null,passHref:b,replace:m,shallow:C,scroll:O,locale:E,onClick:R,onMouseEnter:I,onTouchStart:P,legacyBehavior:x=!1,...T}=e;n=h,x&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let j=o.default.useContext(c.RouterContext),k=o.default.useContext(s.AppRouterContext),S=null!=j?j:k,A=!j,M=!1!==_,N=null===_?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:U,as:L}=o.default.useMemo(()=>{if(!j){let e=formatStringOrUrl(i);return{href:e,as:g?formatStringOrUrl(g):e}}let[e,t]=(0,u.resolveHref)(j,i,!0);return{href:e,as:g?(0,u.resolveHref)(j,g):t||e}},[j,i,g]),w=o.default.useRef(U),D=o.default.useRef(L);x&&(r=o.default.Children.only(n));let F=x?r&&"object"==typeof r&&r.ref:t,[K,H,B]=(0,d.useIntersection)({rootMargin:"200px"}),J=o.default.useCallback(e=>{(D.current!==L||w.current!==U)&&(B(),D.current=L,w.current=U),K(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[L,F,U,B,K]);o.default.useEffect(()=>{S&&H&&M&&prefetch(S,U,L,{locale:E},{kind:N},A)},[L,U,H,E,M,null==j?void 0:j.locale,S,A,N]);let V={ref:J,onClick(e){x||"function"!=typeof R||R(e),x&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,u,i,a,f,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==a||a;"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:i,locale:f,scroll:e}):t[u?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,S,U,L,m,C,O,E,A,M)},onMouseEnter(e){x||"function"!=typeof I||I(e),x&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(M||!A)&&prefetch(S,U,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:N},A)},onTouchStart(e){x||"function"!=typeof P||P(e),x&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(M||!A)&&prefetch(S,U,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:N},A)}};if((0,a.isAbsoluteUrl)(L))V.href=L;else if(!x||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==j?void 0:j.locale,t=(null==j?void 0:j.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==j?void 0:j.locales,null==j?void 0:j.domainLocales);V.href=t||(0,v.addBasePath)((0,f.addLocale)(L,e,null==j?void 0:j.defaultLocale))}return x?o.default.cloneElement(r,V):o.default.createElement("a",{...T,...V},n)}),_=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),o=n(3436),u="function"==typeof IntersectionObserver,l=new Map,i=[];function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:a}=e,f=a||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(u){if(f||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},i.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[f,n,t,c,d.current]);let v=(0,r.useCallback)(()=>{s(!1)},[]);return[p,c,v]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9830:function(e){e.exports={style:{fontFamily:"'__Inter_2e78a3', '__Inter_Fallback_2e78a3'",fontWeight:600,fontStyle:"normal"},className:"__className_2e78a3"}},1664:function(e,t,n){e.exports=n(5170)}}]);