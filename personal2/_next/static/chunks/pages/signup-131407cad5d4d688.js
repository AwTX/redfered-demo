(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{98588:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(6539)}])},56567:function(e,t,n){"use strict";n.d(t,{Mr:function(){return u},Rf:function(){return o},T5:function(){return r}});let r="https://8e6qzakf76.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_sToL9mhkX",u="1ouvfh02b3103m27lvv53ha13q"},28530:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return r}});class n{disable(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}getStore(){}run(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}exit(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}enterWith(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}}function r(){return globalThis.AsyncLocalStorage?new globalThis.AsyncLocalStorage:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},25182:function(e,t,n){"use strict";function r(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return r}}),n(38754),n(67294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return p},useSearchParams:function(){return m},usePathname:function(){return h},ServerInsertedHTMLContext:function(){return i.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return i.useServerInsertedHTML},useRouter:function(){return b},useParams:function(){return g},useSelectedLayoutSegments:function(){return v},useSelectedLayoutSegment:function(){return y},redirect:function(){return s.redirect},notFound:function(){return c.notFound}});let r=n(67294),o=n(24224),u=n(78463),a=n(25182),l=n(72526),i=n(43014),s=n(48781),c=n(78147),d=Symbol("internal for urlsearchparams readonly");function f(){return Error("ReadonlyURLSearchParams cannot be modified")}class p{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw f()}delete(){throw f()}set(){throw f()}sort(){throw f()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function m(){(0,a.clientHookInServerComponentError)("useSearchParams");let e=(0,r.useContext)(u.SearchParamsContext),t=(0,r.useMemo)(()=>e?new p(e):null,[e]);return t}function h(){return(0,a.clientHookInServerComponentError)("usePathname"),(0,r.useContext)(u.PathnameContext)}function b(){(0,a.clientHookInServerComponentError)("useRouter");let e=(0,r.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function g(){(0,a.clientHookInServerComponentError)("useParams");let e=(0,r.useContext)(o.GlobalLayoutRouterContext);return e?function e(t,n){void 0===n&&(n={});let r=t[1];for(let t of Object.values(r)){let r=t[0],o=Array.isArray(r),u=o?r[1]:r;!u||u.startsWith("__PAGE__")||(o&&(n[r[0]]=r[1]),n=e(t,n))}return n}(e.tree):null}function v(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,r.useContext)(o.LayoutRouterContext);return function e(t,n,r,o){let u;if(void 0===r&&(r=!0),void 0===o&&(o=[]),r)u=t[1][n];else{var a;let e=t[1];u=null!=(a=e.children)?a:Object.values(e)[0]}if(!u)return o;let i=u[0],s=(0,l.getSegmentValue)(i);return!s||s.startsWith("__PAGE__")?o:(o.push(s),e(u,n,!1,o))}(t,e)}function y(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=v(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},78147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{notFound:function(){return r},isNotFoundError:function(){return o}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function o(e){return(null==e?void 0:e.digest)===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48781:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return l},redirect:function(){return i},isRedirectError:function(){return s},getURLFromRedirectError:function(){return c},getRedirectTypeFromError:function(){return d}});let u=n(34505),a="NEXT_REDIRECT";function l(e,t){let n=Error(a);n.digest=a+";"+t+";"+e;let r=u.requestAsyncStorage.getStore();return r&&(n.mutableCookies=r.mutableCookies),n}function i(e,t){throw void 0===t&&(t="replace"),l(e,t)}function s(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,n,r]=e.digest.split(";",3);return t===a&&("replace"===n||"push"===n)&&"string"==typeof r}function c(e){return s(e)?e.digest.split(";",3)[2]:null}function d(e){if(!s(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=r||(r={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},34505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let r=n(28530),o=(0,r.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},72526:function(e,t){"use strict";function n(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ServerInsertedHTMLContext:function(){return u},useServerInsertedHTML:function(){return a}});let r=n(61757),o=r._(n(67294)),u=o.default.createContext(null);function a(e){let t=(0,o.useContext)(u);t&&t(e)}},99889:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(85893),o=n(56567),u=n(40631);n(77167);var a=n(11163),l=n(67294);function i(){let[e,t]=(0,l.useState)(""),n=(0,a.useRouter)();console.log(n.asPath);let i=n.asPath.split("?username=")[1],s=async t=>{t.preventDefault(),console.log("confirmationCode=",e),console.log("username=",i);try{var r={ClientId:o.Mr,ConfirmationCode:e,Username:i,ForceAliasCreation:!0};new u.i({region:"eu-west-1"}).confirmSignUp(r,function(e,t){e?console.log(e,e.stack):(console.log(t),n.push("/signin"))})}catch(e){console.log("Error:",e)}};return(0,r.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen w-screen flex items-center justify-center",children:(0,r.jsxs)("div",{className:"max-w-md p-8 rounded shadow-md",children:[(0,r.jsx)("h2",{className:"text-white text-2xl font-bold mb-4",children:"Enter Confirmation Code"}),(0,r.jsxs)("form",{onSubmit:s,className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"confirmationCode",className:"text-white font-bold mb-2",children:"Confirmation Code:"}),(0,r.jsx)("input",{type:"text",id:"confirmationCode",value:e,onChange:e=>t(e.target.value),className:"input-field"})]}),(0,r.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Verify"})]})]})})}},6539:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(67294),u=n(56567),a=n(77167);n(99889),n(39332);var l=n(11163);t.default=()=>{let e=(0,l.useRouter)(),[t,n]=(0,o.useState)(""),[i,s]=(0,o.useState)(""),[c,d]=(0,o.useState)(""),[f,p]=(0,o.useState)(""),[m,h]=(0,o.useState)(""),[b,g]=(0,o.useState)(""),[v,y]=(0,o.useState)(!1),_=async n=>{n.preventDefault();let r=new a.AM({UserPoolId:u.Rf,ClientId:u.Mr}),o=[new a.KC({Name:"name",Value:t}),new a.KC({Name:"email",Value:i}),new a.KC({Name:"custom:location",Value:f}),new a.KC({Name:"custom:VATnumber",Value:m}),new a.KC({Name:"custom:typeOfCompany",Value:b})];r.signUp(t,c,o,null,(n,r)=>{n?console.log("Error signing up:",n):(console.log("Sign up successful:",r),e.push("/confirmsignup?username=".concat(t)))})};return(0,r.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen w-screen flex items-center justify-center",children:(0,r.jsxs)("div",{className:"relative max-w-md p-8 rounded shadow-md",children:[(0,r.jsx)("h1",{className:"text-white text-2xl font-bold mb-4",children:"Sign Up"}),(0,r.jsxs)("form",{onSubmit:_,className:"space-y-4",children:[(0,r.jsx)("input",{type:"text",placeholder:"Company name",value:t,onChange:e=>n(e.target.value),className:"input-field"}),(0,r.jsx)("input",{type:"email",placeholder:"Email",value:i,onChange:e=>s(e.target.value),className:"input-field"}),(0,r.jsx)("input",{type:"password",placeholder:"Password",value:c,onChange:e=>d(e.target.value),className:"input-field"}),(0,r.jsx)("input",{type:"text",placeholder:"Location",value:f,onChange:e=>p(e.target.value),className:"input-field"}),(0,r.jsx)("input",{type:"text",placeholder:"VAT number",value:m,onChange:e=>h(e.target.value),className:"input-field"}),(0,r.jsx)("input",{type:"text",placeholder:"Type of company (ex: Inc.)",value:b,onChange:e=>g(e.target.value),className:"input-field"}),(0,r.jsx)("button",{type:"submit",className:"relative flex bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Sign Up"})]})]})})}},39332:function(e,t,n){n(31414)},56249:function(){}},function(e){e.O(0,[93,764,569,631,774,888,179],function(){return e(e.s=98588)}),_N_E=e.O()}]);