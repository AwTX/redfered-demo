(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6616)}])},56567:function(e,t,n){"use strict";n.d(t,{Mr:function(){return c},Rf:function(){return r},T5:function(){return s}});let s="https://e129bp3r31.execute-api.eu-west-1.amazonaws.com/prod",r="eu-west-1_0xawMsGty",c="7b30d5nqk0gech4bec45dchalf"},37753:function(e,t,n){"use strict";n.d(t,{$J:function(){return a},Dd:function(){return l},EG:function(){return o},ac:function(){return r},i9:function(){return f},oT:function(){return i},r0:function(){return c},xc:function(){return u}});var s=n(56567);async function r(e){let t=await fetch(s.T5+"/invitationcode?code="+e),n=await t.json();return n}async function c(e){let t=await fetch(s.T5+"/?user="+e),n=await t.json();return n.filenames}async function i(){let e=await fetch(s.T5+"/poolusers"),t=await e.json();return t.users}async function a(e){let t=await fetch(s.T5+"/mylogo?user="+e),n=await t.json();return n.imageUrl}async function o(e){let t=await fetch(s.T5+"/contracts?user="+e),n=await t.json();return n}async function l(e,t,n){let r=await fetch(s.T5+"/showincarousel?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),c=await r.json();return c}async function u(e,t,n){let r=await fetch(s.T5+"/sendrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),c=await r.json();return c}async function f(e,t,n){let r=await fetch(s.T5+"/acceptrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),c=await r.json();return c}},32317:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var s=n(85893),r=n(67294),c=n(37753),i=n(11163);function a(){var[e,t]=(0,r.useState)(null);let n=(0,i.useRouter)();console.log(n.asPath);let a=n.asPath.split("?user=")[1];return console.log(a),(0,r.useEffect)(()=>{(async function(){if(null==e){let e=await (0,c.r0)(a);t(e)}})(),console.log("images=",e)},[e]),(0,s.jsx)("div",{className:"absolute bg-[url(../public/bg-carousel.png)] bg-no-repeat bg-center bg-cover w-screen h-screen mx-auto flex flex-shrink-0 justify-center items-center",children:(0,s.jsx)("div",{className:"flex flex-shrink-0 w-4/5 space-x-8 overflow-scroll no-scrollbar",children:(0,s.jsx)(function(e){let{images:t}=e;var[n,c]=(0,r.useState)(null);return(0,r.useEffect)(()=>{var e=[];null!==t&&(e=t.map((e,t)=>(0,s.jsx)("div",{className:"flex-shrink-0 w-96 relative",children:(0,s.jsx)("div",{className:"h-full flex items-center justify-center",children:(0,s.jsx)("img",{src:e,alt:"Image ".concat(t),layout:"fill",objectfit:"contain"})})},t))),c(e)},[t]),console.log("arr=",n),n},{images:e})})})}},6616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(85893),r=n(67294),c=n(9008),i=n.n(c),a=n(41664),o=n.n(a);n(32317);var l=n(37753),u=n(11163);function f(){let[e,t]=(0,r.useState)("");return(0,r.useEffect)(()=>{let e=async()=>{let e=await (0,l.oT)(),n=e.map((e,t)=>(0,s.jsx)("div",{children:(0,s.jsx)(o(),{href:{pathname:"/carousel",query:"user=".concat(e)},className:"text-white text-xl hover:underline",children:e},e)}));t(n)};e()},[]),e}function d(){let e=(0,u.useRouter)();async function t(){e.push("/signin")}async function n(){e.push("/invitationcode")}return(0,s.jsxs)("div",{className:"absolute my-0 h-screen w-screen bg-[url(./../public/bg-black-orange.png)]",children:[(0,s.jsxs)("div",{className:"fixed top-0 right-0 m-4 flex space-x-2",children:[(0,s.jsx)("button",{type:"button",className:"text-white bg-ciano-500 hover:bg-ciano-800 focus:outline-none focus:ring-4 focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2",onClick:t,children:"Sign-in"}),(0,s.jsx)("button",{type:"button",className:"text-white bg-ciano-500 hover:bg-ciano-800 focus:outline-none focus:ring-4 focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2",onClick:n,children:"Sign-up"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:"Redfered"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"text-center py-20",children:[(0,s.jsx)("h1",{className:"py-20 text-7xl font-bold text-white",children:" Welcome to Redfered demo! "}),(0,s.jsx)("p",{className:"py-8 italic font-bold text-xl text-white",children:" carousels: "}),(0,s.jsx)(f,{})]})]}),(0,s.jsx)("footer",{className:"dark:bg-gray-900",children:(0,s.jsxs)("div",{className:"relative my-40",children:[(0,s.jsx)("hr",{className:"my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),(0,s.jsxs)("div",{className:"flex justify-center space-x-3",children:[(0,s.jsx)("span",{className:"text-white",children:"Powered by "}),(0,s.jsxs)("div",{className:"flex justify-center space-x-1",children:[(0,s.jsx)("img",{className:"flex",src:"./graftholders-small-logo.svg"}),(0,s.jsx)(o(),{className:"flex text-white",href:"https://graftholders.com",children:" Graftholders "})]})]})]})})]})}},9008:function(e,t,n){e.exports=n(42636)}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);