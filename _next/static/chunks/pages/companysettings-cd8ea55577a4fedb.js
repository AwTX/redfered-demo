(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[241],{15873:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/companysettings",function(){return n(46594)}])},32317:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var s=n(85893),l=n(67294),a=n(37753),o=n(11163);function i(){var[e,t]=(0,l.useState)(null);let n=(0,o.useRouter)();console.log(n.asPath);let i=n.asPath.split("?user=")[1];return console.log(i),(0,l.useEffect)(()=>{(async function(){if(null==e){let e=await (0,a.r0)(i);t(e)}})(),console.log("images=",e)},[e]),(0,s.jsx)("div",{className:"my-40 flex items-center space-x-4 overflow-x-auto",children:(0,s.jsx)("div",{className:"flex flex-shrink-0 h-48 space-x-8 scrollbar-hide",children:(0,s.jsx)(function(e){let{images:t}=e;var[n,a]=(0,l.useState)(null);return(0,l.useEffect)(()=>{var e=[];null!==t&&(e=t.map((e,t)=>(0,s.jsx)("div",{className:"flex-shrink-0 w-96 h-48 relative",children:(0,s.jsx)("div",{className:"h-full flex items-center justify-center",children:(0,s.jsx)("img",{src:e,alt:"Image ".concat(t),layout:"fill",objectFit:"contain"})})},t))),a(e)},[t]),console.log("arr=",n),n},{images:e})})})}},46594:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var s=n(85893);n(32317);var l=n(56567),a=n(41664),o=n.n(a),i=n(37753),r=n(66246),c=n(67294),d=n(11163);function u(){let e=(0,d.useRouter)();console.log("router.asPath=",e.asPath);let t=e.query.user,n=e.query.access_token;console.log("CompanySettings: user=",t),console.log("CompanySettings: accessToken=",n);let a=(0,c.useRef)(null);(0,c.useRef)(null);let[u,f]=(0,c.useState)(null);async function m(){if(0!=a.current.files.length){var e=a.current.files[0].name,s=a.current.files[0],o=new FileReader;o.onload=function(){var s={};s.filename=e,s.user=t;var a=o.result.split(";base64,")[1];s.imageAsBase64String=a,s.metadata={"Content-Type":"image/png"};var i=new XMLHttpRequest;i.open("POST",l.T5+"/",!0),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Authorization","Bearer "+n),i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE&&200===i.status){var e=JSON.parse(i.responseText);"Success"==e.result?f(e.imageUrl):console.log("failed to upload"),console.log(e)}},i.send(JSON.stringify(s))},o.readAsDataURL(s)}}async function g(){var e=document.getElementById("div-CheckboxList"),t=document.getElementById("div-MyLogoPage"),n=document.getElementById("id-btn-Contracts");document.getElementById("id-btn-MyLogo").classList.remove("text-white"),e.classList.add("hidden"),n.classList.add("text-white"),e.classList.remove("hidden"),t.classList.add("hidden"),console.log("Contracts")}async function x(){var e=document.getElementById("div-CheckboxList"),t=document.getElementById("div-MyLogoPage"),n=document.getElementById("id-btn-Contracts"),s=document.getElementById("id-btn-MyLogo");n.classList.remove("text-white"),s.classList.add("text-white"),e.classList.add("hidden"),t.classList.remove("hidden"),console.log("Logo")}return(0,c.useEffect)(()=>{(async function(){if(null==u){let e=await (0,i.$J)(t,n);f(e)}})()},[t]),(0,c.useEffect)(()=>{console.log("useEffect on imageSrc")},[u]),(0,s.jsxs)("div",{className:"absolute my-0 h-screen w-screen bg-gray-200",children:[(0,s.jsx)(function(e){let{user:t}=e;var[n,l]=(0,c.useState)("");return(0,c.useEffect)(()=>{let e=(0,s.jsxs)("div",{className:"flex justify-center mt-4",children:[(0,s.jsx)(o(),{id:"id-Link-Home",href:{pathname:"/"},className:"mx-6 text-xl font-bold hover:underline",children:"Home"},"Link-Home"),(0,s.jsx)("button",{id:"id-btn-Contracts",onClick:g,className:"mx-6 text-xl font-bold hover:underline text-white",children:"Contracts"}),(0,s.jsx)("button",{id:"id-btn-MyLogo",onClick:x,className:"mx-6 text-xl font-bold hover:underline",children:"My logo"}),(0,s.jsx)(o(),{id:"id-Link-Carousel",href:{pathname:"/carousel",query:"user=".concat(t)},className:"mx-6 text-xl font-bold hover:underline",children:"My Carousel"},"Link-Carousel")]});l(e)},[t]),n},{user:t}),(0,s.jsxs)("div",{id:"div-MyLogoPage",className:"flex space-x-8 m-20 hidden",children:[(0,s.jsxs)("div",{id:"div-MyLogo",className:"flex flex-col space-y-4",children:[(0,s.jsx)("input",{className:"text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"upload_file",type:"file",ref:a}),(0,s.jsx)("button",{type:"button",className:"text-black bg-purple-300 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center",onClick:m,children:"Upload image"})]}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{id:"uploadedImage",src:u,alt:"Preview",className:"max-w-full max-h-full hover:ring-white-900"})})]}),(0,s.jsx)("div",{id:"div-CheckboxList",className:"static container flex mx-auto py-40",children:(0,s.jsx)(r.default,{currentUser:t})})]})}}},function(e){e.O(0,[586,764,690,424,908,774,888,179],function(){return e(e.s=15873)}),_N_E=e.O()}]);