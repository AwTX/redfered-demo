(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{13759:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/carousel",function(){return n(32317)}])},56567:function(e,t,n){"use strict";n.d(t,{Mr:function(){return o},Rf:function(){return s},T5:function(){return r}});let r="https://e129bp3r31.execute-api.eu-west-1.amazonaws.com/prod",s="eu-west-1_0xawMsGty",o="7b30d5nqk0gech4bec45dchalf"},37753:function(e,t,n){"use strict";n.d(t,{Dd:function(){return i},EG:function(){return c},ac:function(){return s},i9:function(){return l},oT:function(){return a},r0:function(){return o},xc:function(){return u}});var r=n(56567);async function s(e){let t=await fetch(r.T5+"/invitationcode?code="+e),n=await t.json();return n}async function o(e){let t=await fetch(r.T5+"/?user="+e),n=await t.json();return n.filenames}async function a(){let e=await fetch(r.T5+"/poolusers"),t=await e.json();return t.users}async function c(e){let t=await fetch(r.T5+"/contracts?user="+e),n=await t.json();return n.contracts}async function i(e,t,n){let s=await fetch(r.T5+"/showincarousel?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),o=await s.json();return o}async function u(e,t,n){let s=await fetch(r.T5+"/sendrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),o=await s.json();return o}async function l(e,t,n){let s=await fetch(r.T5+"/acceptrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),o=await s.json();return o}},32317:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(85893),s=n(67294),o=n(37753),a=n(11163);function c(){var[e,t]=(0,s.useState)(null);let n=(0,a.useRouter)();console.log(n.asPath);let c=n.asPath.split("?user=")[1];return console.log(c),(0,s.useEffect)(()=>{(async function(){if(null==e){let e=await (0,o.r0)(c);t(e)}})(),console.log("images=",e)},[e]),(0,r.jsx)("div",{className:"absolute bg-[url(../public/bg-carousel.png)] bg-no-repeat bg-center bg-cover w-screen h-screen mx-auto flex flex-shrink-0 justify-center items-center",children:(0,r.jsx)("div",{className:"flex flex-shrink-0 w-4/5 space-x-8 overflow-scroll no-scrollbar",children:(0,r.jsx)(function(e){let{images:t}=e;var[n,o]=(0,s.useState)(null);return(0,s.useEffect)(()=>{var e=[];null!==t&&(e=t.map((e,t)=>(0,r.jsx)("div",{className:"flex-shrink-0 w-96 relative",children:(0,r.jsx)("div",{className:"h-full flex items-center justify-center",children:(0,r.jsx)("img",{src:e,alt:"Image ".concat(t),layout:"fill",objectfit:"contain"})})},t))),o(e)},[t]),console.log("arr=",n),n},{images:e})})})}},11163:function(e,t,n){e.exports=n(96885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=13759)}),_N_E=e.O()}]);