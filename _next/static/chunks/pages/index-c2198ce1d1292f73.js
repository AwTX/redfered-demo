(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6616)}])},37753:function(e,t,n){"use strict";async function s(e){let t=await fetch("https://scrug69id9.execute-api.eu-west-1.amazonaws.com/prod/invitationCode?code="+e),n=await t.json();return n}async function a(e){let t=await fetch("https://scrug69id9.execute-api.eu-west-1.amazonaws.com/prod/?user="+e),n=await t.json();return n.filenames}async function r(){let e=await fetch("https://scrug69id9.execute-api.eu-west-1.amazonaws.com/prod/poolusers"),t=await e.json();return t.users}async function c(e){let t=await fetch("https://scrug69id9.execute-api.eu-west-1.amazonaws.com/prod/mylogo?user="+e),n=await t.json();return n.imageUrl}async function i(e){let t=await fetch("https://scrug69id9.execute-api.eu-west-1.amazonaws.com/prod/contracts?user="+e),n=await t.json();return n}async function o(e,t,n){let s=await fetch("https://scrug69id9.execute-api.eu-west-1.amazonaws.com/prod/showincarousel?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),a=await s.json();return a}async function u(e,t,n){let s=await fetch("https://scrug69id9.execute-api.eu-west-1.amazonaws.com/prod/sendrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),a=await s.json();return a}async function l(e,t,n){let s=await fetch("https://scrug69id9.execute-api.eu-west-1.amazonaws.com/prod/acceptrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),a=await s.json();return a}n.d(t,{$J:function(){return c},Dd:function(){return o},EG:function(){return i},ac:function(){return s},i9:function(){return l},oT:function(){return r},r0:function(){return a},xc:function(){return u}})},32317:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var s=n(85893),a=n(67294),r=n(37753),c=n(11163);function i(){var[e,t]=(0,a.useState)(null);let n=(0,c.useRouter)();console.log(n.asPath);let i=n.asPath.split("?user=")[1];return console.log(i),(0,a.useEffect)(()=>{(async function(){if(null==e){let e=await (0,r.r0)(i);t(e)}})(),console.log("images=",e)},[e]),(0,s.jsx)("div",{className:"my-40 flex items-center space-x-4 overflow-x-auto",children:(0,s.jsx)("div",{className:"flex flex-shrink-0 h-48 space-x-8 scrollbar-hide",children:(0,s.jsx)(function(e){let{images:t}=e;var[n,r]=(0,a.useState)(null);return(0,a.useEffect)(()=>{var e=[];null!==t&&(e=t.map((e,t)=>(0,s.jsx)("div",{className:"flex-shrink-0 w-96 h-48 relative",children:(0,s.jsx)("div",{className:"h-full flex items-center justify-center",children:(0,s.jsx)("img",{src:e,alt:"Image ".concat(t),layout:"fill",objectFit:"contain"})})},t))),r(e)},[t]),console.log("arr=",n),n},{images:e})})})}},6616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var s=n(85893),a=n(67294),r=n(9008),c=n.n(r),i=n(41664),o=n.n(i);n(32317);var u=n(37753),l=n(11163);function d(){let[e,t]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=async()=>{let e=await (0,u.oT)(),n=e.map((e,t)=>(0,s.jsx)("div",{children:(0,s.jsx)(o(),{href:{pathname:"/carousel",query:"user=".concat(e)},className:"text-xl hover:underline",children:e},e)}));t(n)};e()},[]),e}function f(){let e=(0,l.useRouter)();async function t(){e.push("/signin")}async function n(){e.push("/invitationcode")}return(0,s.jsxs)("div",{className:"absolute my-0 h-screen w-screen bg-green-400",children:[(0,s.jsxs)("div",{className:"fixed top-0 right-0 m-4 flex space-x-2",children:[(0,s.jsx)("button",{type:"button",className:"text-white bg-ciano-500 hover:bg-ciano-800 focus:outline-none focus:ring-4 focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2",onClick:t,children:"Sign-in"}),(0,s.jsx)("button",{type:"button",className:"text-white bg-ciano-500 hover:bg-ciano-800 focus:outline-none focus:ring-4 focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2",onClick:n,children:"Sign-up"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:"Redfered"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"text-center py-20",children:[(0,s.jsx)("h1",{className:"py-20 text-7xl font-bold text-white-500",children:" Welcome to Redfered demo! "}),(0,s.jsx)("p",{className:"py-8 italic font-bold text-xl text-black-900",children:" carousels: "}),(0,s.jsx)(d,{})]})]}),(0,s.jsx)("footer",{className:"dark:bg-gray-900",children:(0,s.jsxs)("div",{className:"relative my-40",children:[(0,s.jsx)("hr",{className:"my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),(0,s.jsxs)("div",{className:"flex justify-center space-x-3",children:[(0,s.jsx)("span",{children:"Powered by "}),(0,s.jsxs)("div",{className:"flex justify-center space-x-1",children:[(0,s.jsx)("img",{className:"flex",src:"./graftholders-small-logo.svg"}),(0,s.jsx)(o(),{className:"flex",href:"https://graftholders.com",children:" Graftholders "})]})]})]})})]})}},9008:function(e,t,n){e.exports=n(42636)}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);