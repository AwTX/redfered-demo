"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{6567:function(e,t,s){s.d(t,{Mr:function(){return a},Rf:function(){return n},T5:function(){return r}});let r="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod/",n="eu-west-1_0xawMsGty",a="7b30d5nqk0gech4bec45dchalf"},7753:function(e,t,s){s.d(t,{$J:function(){return o},Dd:function(){return d},EG:function(){return c},Xh:function(){return h},i9:function(){return i},oT:function(){return a},py:function(){return u},r0:function(){return n},xc:function(){return l}});var r=s(6567);async function n(e){let t=await fetch(r.T5+"/?user="+e),s=await t.json(),n=JSON.parse(s.body);return n.filenames}async function a(){let e=await fetch(r.T5+"/poolusers"),t=await e.json();console.log("[API] users json",t);let s=JSON.parse(t.body);return console.log("[API] users body",s),s.users}async function o(e){let t=await fetch(r.T5+"/mylogo?user="+e),s=await t.json(),n=JSON.parse(s.body);return n.imageUrl}async function c(e){let t=await fetch(r.T5+"/contracts?user="+e),s=await t.json();console.log("api_getContracts() returned:",s);let n=JSON.parse(s.body);return console.log("api_getContracts() body:",n),n}async function d(e,t,s){let n=await fetch(r.T5+"/showincarousel?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(t)}),a=await n.json(),o=JSON.parse(a.body);return o}async function l(e,t,s){let n=await fetch(r.T5+"/sendrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(t)}),a=await n.json(),o=JSON.parse(a.body);return o}async function i(e,t,s){let n=await fetch(r.T5+"/acceptrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(t)}),a=await n.json(),o=JSON.parse(a.body);return o}async function u(e,t){let s=await fetch(r.T5+"/update_contractText?user="+e,{method:"POST",mode:"cors",body:JSON.stringify(t)}),n=await s.json(),a=JSON.parse(n.body);return a}async function h(e,t){let s=await fetch(r.T5+"/send_contractText?user="+e,{method:"POST",mode:"cors",body:JSON.stringify(t)}),n=await s.json(),a=JSON.parse(n.body);return a}},6246:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});var r=s(5893),n=s(7753),a=s(7294);function o(e){let{currentUser:t}=e;var[s,o]=(0,a.useState)("");async function c(){let e=document.getElementById("redCross1"),s=document.getElementById("greenTick1");var r,a=document.getElementById("ul-sendRequests"),c=[];for(let e=0;e<a.children.length;e++){var d=a.children[e].children[0].children[0];d.checked&&c.push(d.id)}try{r=await (0,n.xc)(t,{destinations:c}),console.log("[API] send requests result: ",r)}catch(t){console.log("Failed to send requests"),s.classList.contains("hidden")||s.classList.add("hidden"),e.classList.remove("hidden"),setTimeout(async()=>{e.classList.add("hidden")},2e3);return}if("Success"!==r.result)return;console.log("Successfully sent requests"),e.classList.contains("hidden")||e.classList.add("hidden"),s.classList.remove("hidden"),setTimeout(async()=>{s.classList.add("hidden")},2e3);let l=await (0,n.EG)(t);o(l)}async function d(){let e=document.getElementById("redCross3"),s=document.getElementById("greenTick3");var r,a=[],c=document.getElementById("ul-showInCarousel");for(let e=0;e<c.children.length;e++){var d=c.children[e].children[0].children[0],l=d.checked?1:0;let t=d.id,s={};s[t]=l,a.push(s)}try{r=await (0,n.Dd)(t,{data:a})}catch(t){s.classList.contains("hidden")||s.classList.add("hidden"),e.classList.remove("hidden"),setTimeout(async()=>{e.classList.add("hidden")},2e3);return}if("Success"!==r.result)return;e.classList.contains("hidden")||e.classList.add("hidden"),s.classList.remove("hidden"),setTimeout(async()=>{s.classList.add("hidden")},2e3);let i=await (0,n.EG)(t);o(i)}async function l(){let e=document.getElementById("redCross4"),s=document.getElementById("greenTick4");var r,a=document.getElementById("ul-incomeRequests"),c=[];for(let e=0;e<a.children.length;e++){var d=a.children[e].children[0].children[0],l=d.checked?1:0;let t=d.id,s={};s[t]=l,c.push(s)}try{r=await (0,n.i9)(t,{data:c})}catch(t){s.classList.contains("hidden")||s.classList.add("hidden"),e.classList.remove("hidden"),setTimeout(async()=>{e.classList.add("hidden")},2e3);return}if("Success"!==r.result)return;e.classList.contains("hidden")||e.classList.add("hidden"),s.classList.remove("hidden"),setTimeout(async()=>{s.classList.add("hidden")},2e3);let i=await (0,n.EG)(t);o(i)}return(0,a.useEffect)(()=>{!async function(){if(void 0!==t){let e=await (0,n.EG)(t);o(e)}}()},[t]),(0,r.jsxs)("div",{id:"checkboxid",className:"bg-transparent relative flex mx-auto space-x-20",children:[(0,r.jsxs)("div",{id:"div-sendRequests",className:"z-10 rounded-lg shadow w-60 bg-white border-4 border-orange-400",children:[(0,r.jsx)("h1",{className:"text-md text-center font-bold text-black",children:"Send request"}),(0,r.jsx)("p",{className:"text-sm text-center text-black px-2 pt-3 overflow-x-auto",children:"Ask companies for authorization to be referenced"}),(0,r.jsx)("ul",{id:"ul-sendRequests",className:"h-64 w-128 px-3 pb-3 pt-6 overflow-y-auto text-sm text-white text-white","aria-labelledby":"dropdownSearchButton",children:(0,r.jsx)(function(e){let{currentUser:t,contracts:s}=e;console.log("Reloading LI_sendRequests...");let[o,c]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=async()=>{let e=await (0,n.oT)();if(null==t||""==s|null==s)return;let a=Object.keys(s.incomeRequests),o=Object.keys(s.outcomeRequests),d=e.filter(e=>e!==t),l=d.filter(e=>!o.includes(e)),i=l.filter(e=>!a.includes(e)),u=i.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600",children:[(0,r.jsx)("input",{id:e,type:"checkbox",defaultChecked:!1,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),(0,r.jsx)("label",{className:"w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300",children:e})]})},e));c(u)};e()},[s]),o},{currentUser:t,contracts:s})}),(0,r.jsx)("button",{onClick:c,className:"relative flex items-center w-full p-3 text-sm font-medium text-white border-t border-gray-200 border-gray-600 bg-orange-600 text-gray-500 hover:bg-orange-400",children:"Send"}),(0,r.jsxs)("div",{className:"absolute py-5 w-60",children:[(0,r.jsx)("img",{id:"greenTick1",className:"flex mx-auto h-8 w-8 hidden",src:"./checked.svg"}),(0,r.jsx)("img",{id:"redCross1",className:"flex mx-auto h-8 w-8 hidden",src:"./Cross_red_circle.svg"})]})]}),(0,r.jsxs)("div",{id:"div-sentRequests",className:"z-10 rounded-lg shadow w-60 bg-white border-4 border-orange-400",children:[(0,r.jsx)("h1",{className:"text-md text-center font-bold text-black",children:"Sent requests"}),(0,r.jsx)("p",{className:"text-sm text-center text-black px-2 pt-3 overflow-x-auto",children:"Here the list of forwarded requests. Waiting for authorization!"}),(0,r.jsx)("ul",{id:"ul-sentRequests",className:"h-64 w-128 px-3 pb-3 pt-6 overflow-y-auto text-sm text-white text-white","aria-labelledby":"dropdownSearchButton",children:(0,r.jsx)(function(e){let{currentUser:t,contracts:s}=e;console.log("Reloading LI_sentRequests...");let[n,o]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=async()=>{if(console.log("3. currentUser=",t),null==t)return;if(""==s|null==s){console.log("contracts=",s);return}console.log("Entries = ",Object.entries(s.outcomeRequests));let e=Object.entries(s.outcomeRequests).filter(e=>{let[t,s]=e;return 0==s.accepted}).map(e=>{let[t,s]=e;return t});console.log("sentItems=",e),console.log(e);let n=e.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)("div",{className:"flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600",children:(0,r.jsx)("label",{className:"w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300",children:e})})},e));o(n)};e()},[s]),n},{currentUser:t,contracts:s})})]}),(0,r.jsxs)("div",{id:"div-acceptedByRequests",className:"z-10 rounded-lg shadow w-60 bg-white border-4 border-orange-400",children:[(0,r.jsx)("h1",{className:"text-md text-center font-bold text-black",children:"Accepted-by requests"}),(0,r.jsx)("p",{className:"text-sm text-center text-black px-2 pt-3 overflow-x-auto",children:"Select the authorized logos to show in your carousel"}),(0,r.jsx)("ul",{id:"ul-showInCarousel",className:"h-64 w-128 px-3 pb-3 pt-6 overflow-y-auto text-sm text-white text-white","aria-labelledby":"dropdownSearchButton",children:(0,r.jsx)(function(e){let{currentUser:t,contracts:s}=e;console.log("Reloading LI_acceptedByRequests...");let[n,o]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=async()=>{if(null==t||""==s|null==s)return;let e=Object.entries(s.outcomeRequests).filter(e=>{let[t,s]=e;return s.accepted}).map(e=>{let[t,s]=e;return{[t]:s}}),n=e.map((e,t)=>{let s=Object.keys(e)[0],n=e[s].showInCarousel;return(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600",children:[(0,r.jsx)("input",{id:s,type:"checkbox",defaultChecked:n,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),(0,r.jsx)("label",{className:"w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300",children:s})]})},s)});o(n)};e()},[s]),n},{currentUser:t,contracts:s})}),(0,r.jsx)("button",{onClick:d,className:"flex items-center w-full p-3 text-sm font-medium text-white border-t border-gray-200 border-gray-600 bg-orange-600 text-gray-500 hover:bg-orange-400",children:"Save"}),(0,r.jsxs)("div",{className:"absolute py-5 w-60",children:[(0,r.jsx)("img",{id:"greenTick3",className:"flex mx-auto h-8 w-8 hidden",src:"./checked.svg"}),(0,r.jsx)("img",{id:"redCross3",className:"flex mx-auto h-8 w-8 hidden",src:"./Cross_red_circle.svg"})]})]}),(0,r.jsxs)("div",{id:"div-incomeRequests",className:"z-10 rounded-lg shadow w-60 bg-white border-4 border-orange-400",children:[(0,r.jsx)("h1",{className:"text-md text-center font-bold text-black",children:"Incoming requests"}),(0,r.jsx)("p",{className:"text-sm text-center text-black px-2 pt-3 overflow-x-auto",children:"Grant authorization to these companies to use your logo"}),(0,r.jsx)("ul",{id:"ul-incomeRequests",className:"h-64 w-128 px-3 pb-3 pt-6 overflow-y-auto text-sm text-white text-white","aria-labelledby":"dropdownSearchButton",children:(0,r.jsx)(function(e){let{currentUser:t,contracts:s}=e;console.log("Reloading LI_incomeRequests...");let[n,o]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=async()=>{if(null==t||""==s|null==s||0===Object.keys(s.incomeRequests).length)return;let e=Object.keys(s.incomeRequests),n=e.map((e,t)=>{let n=s.incomeRequests[e].accepted;return(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600",children:[(0,r.jsx)("input",{id:e,type:"checkbox",defaultChecked:n,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),(0,r.jsx)("label",{className:"w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300",children:e})]})},e)});o(n)};e()},[s]),n},{currentUser:t,contracts:s})}),(0,r.jsx)("button",{onClick:l,className:"flex items-center w-full p-3 text-sm font-medium text-white border-t border-gray-200 border-orange-600 bg-orange-600 text-gray-500 hover:bg-orange-400",children:"Save"}),(0,r.jsxs)("div",{className:"absolute py-5 w-60",children:[(0,r.jsx)("img",{id:"greenTick4",className:"flex mx-auto h-8 w-8 hidden",src:"./checked.svg"}),(0,r.jsx)("img",{id:"redCross4",className:"flex mx-auto h-8 w-8 hidden",src:"./Cross_red_circle.svg"})]})]})]})}}}]);