(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6616)}])},56567:function(e,t,n){"use strict";n.d(t,{Mr:function(){return i},Rf:function(){return r},T5:function(){return s}});let s="https://xfti2bdouj.execute-api.eu-west-1.amazonaws.com/prod/",r="eu-west-1_zznGU2MW5",i="mn2faoqs91l03i7sqtv7o7hpq"},37753:function(e,t,n){"use strict";n.d(t,{$J:function(){return c},Dd:function(){return u},EG:function(){return o},ac:function(){return r},i9:function(){return f},oT:function(){return a},r0:function(){return i},xc:function(){return l}});var s=n(56567);async function r(e){let t=await fetch(s.T5+"invitationcode?code="+e),n=await t.json();return n}async function i(e){let t=await fetch(s.T5+"?user="+e),n=await t.json();return n.filenames}async function a(){let e=await fetch(s.T5+"poolusers"),t=await e.json();return t.users}async function c(e){let t=await fetch(s.T5+"mylogo?user="+e),n=await t.json();return n.imageUrl}async function o(e){let t=await fetch(s.T5+"contracts?user="+e),n=await t.json();return n}async function u(e,t,n){let r=await fetch(s.T5+"showincarousel?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),i=await r.json();return i}async function l(e,t,n){let r=await fetch(s.T5+"sendrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),i=await r.json();return i}async function f(e,t,n){let r=await fetch(s.T5+"acceptrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),i=await r.json();return i}},32317:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(85893),r=n(67294),i=n(37753),a=n(11163);function c(){var[e,t]=(0,r.useState)(null);let n=(0,a.useRouter)();console.log(n.asPath);let c=n.asPath.split("?user=")[1];return console.log(c),(0,r.useEffect)(()=>{(async function(){if(null==e){let e=await (0,i.r0)(c);t(e)}})(),console.log("images=",e)},[e]),(0,s.jsx)("div",{className:"my-40 flex items-center space-x-4 overflow-x-auto",children:(0,s.jsx)("div",{className:"flex flex-shrink-0 h-48 space-x-8 scrollbar-hide",children:(0,s.jsx)(function(e){let{images:t}=e;var[n,i]=(0,r.useState)(null);return(0,r.useEffect)(()=>{var e=[];null!==t&&(e=t.map((e,t)=>(0,s.jsx)("div",{className:"flex-shrink-0 w-96 h-48 relative",children:(0,s.jsx)("div",{className:"h-full flex items-center justify-center",children:(0,s.jsx)("img",{src:e,alt:"Image ".concat(t),layout:"fill",objectFit:"contain"})})},t))),i(e)},[t]),console.log("arr=",n),n},{images:e})})})}},6616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(85893),r=n(67294),i=n(9008),a=n.n(i),c=n(41664),o=n.n(c);n(32317);var u=n(37753),l=n(11163);function f(){let[e,t]=(0,r.useState)("");return(0,r.useEffect)(()=>{let e=async()=>{let e=await (0,u.oT)(),n=e.map((e,t)=>(0,s.jsx)("div",{children:(0,s.jsx)(o(),{href:{pathname:"/carousel",query:"user=".concat(e)},className:"text-xl hover:underline",children:e},e)}));t(n)};e()},[]),e}function d(){let e=(0,l.useRouter)();async function t(){e.push("/signin")}async function n(){e.push("/invitationcode")}return(0,s.jsxs)("div",{className:"absolute my-0 h-screen w-screen bg-green-400",children:[(0,s.jsxs)("div",{className:"fixed top-0 right-0 m-4 flex space-x-2",children:[(0,s.jsx)("button",{type:"button",className:"text-white bg-ciano-500 hover:bg-ciano-800 focus:outline-none focus:ring-4 focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2",onClick:t,children:"Sign-in"}),(0,s.jsx)("button",{type:"button",className:"text-white bg-ciano-500 hover:bg-ciano-800 focus:outline-none focus:ring-4 focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2",onClick:n,children:"Sign-up"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"Redfered"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"text-center py-20",children:[(0,s.jsx)("h1",{className:"py-20 text-7xl font-bold text-white-500",children:" Welcome to Redfered demo! "}),(0,s.jsx)("p",{className:"py-8 italic font-bold text-xl text-black-900",children:" carousels: "}),(0,s.jsx)(f,{})]})]}),(0,s.jsx)("footer",{className:"dark:bg-gray-900",children:(0,s.jsxs)("div",{className:"relative my-40",children:[(0,s.jsx)("hr",{className:"my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),(0,s.jsxs)("div",{className:"flex justify-center space-x-3",children:[(0,s.jsx)("span",{children:"Powered by "}),(0,s.jsxs)("div",{className:"flex justify-center space-x-1",children:[(0,s.jsx)("img",{className:"flex",src:"./graftholders-small-logo.svg"}),(0,s.jsx)(o(),{className:"flex",href:"https://graftholders.com",children:" Graftholders "})]})]})]})})]})}},9008:function(e,t,n){e.exports=n(42636)}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);