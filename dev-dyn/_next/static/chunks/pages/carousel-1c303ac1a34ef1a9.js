(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{13759:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/carousel",function(){return n(32317)}])},56567:function(e,t,n){"use strict";n.d(t,{Mr:function(){return a},Rf:function(){return o},T5:function(){return r}});let r="https://8e6qzakf76.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_sToL9mhkX",a="1ouvfh02b3103m27lvv53ha13q"},79080:function(e,t,n){"use strict";n.d(t,{$J:function(){return i},Dd:function(){return u},EG:function(){return c},ac:function(){return o},i9:function(){return f},oT:function(){return s},r0:function(){return a},xc:function(){return l}});var r=n(56567);async function o(e){let t=await fetch(r.T5+"/invitationcode?code="+e),n=await t.json();return n}async function a(e){let t=await fetch(r.T5+"/?user="+e),n=await t.json();return n.filenames}async function s(){let e=await fetch(r.T5+"/poolusers"),t=await e.json();return t.users}async function i(e){let t=await fetch(r.T5+"/mylogo?user="+e),n=await t.json();return n.imageUrl}async function c(e){let t=await fetch(r.T5+"/contracts?user="+e),n=await t.json();return n}async function u(e,t,n){let o=await fetch(r.T5+"/showincarousel?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),a=await o.json();return a}async function l(e,t,n){let o=await fetch(r.T5+"/sendrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),a=await o.json();return a}async function f(e,t,n){let o=await fetch(r.T5+"/acceptrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),a=await o.json();return a}},32317:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(85893),o=n(67294),a=n(79080),s=n(11163);function i(){var[e,t]=(0,o.useState)(null);let n=(0,s.useRouter)();console.log(n.asPath);let i=n.asPath.split("?user=")[1];return console.log(i),(0,o.useEffect)(()=>{(async function(){if(null==e){let e=await (0,a.r0)(i);t(e)}})(),console.log("images=",e)},[e]),(0,r.jsx)("div",{className:"absolute bg-[url(../public/bg-carousel.png)] bg-no-repeat bg-center bg-cover w-screen h-screen mx-auto flex flex-shrink-0 justify-center items-center",children:(0,r.jsx)("div",{className:"flex flex-shrink-0 w-4/5 space-x-8 overflow-scroll no-scrollbar",children:(0,r.jsx)(function(e){let{images:t}=e;var[n,a]=(0,o.useState)(null);return(0,o.useEffect)(()=>{var e=[];null!==t&&(e=t.map((e,t)=>(0,r.jsx)("div",{className:"flex-shrink-0 w-96 relative",children:(0,r.jsx)("div",{className:"h-full flex items-center justify-center",children:(0,r.jsx)("img",{src:e,alt:"Image ".concat(t),layout:"fill",objectfit:"contain"})})},t))),a(e)},[t]),console.log("arr=",n),n},{images:e})})})}},11163:function(e,t,n){e.exports=n(96885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=13759)}),_N_E=e.O()}]);