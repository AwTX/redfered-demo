(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{56567:function(e,t,s){"use strict";s.d(t,{Mr:function(){return a},Rf:function(){return n},T5:function(){return r}});let r="https://vzacz2o3q3.execute-api.eu-west-1.amazonaws.com/prod",n="eu-west-1_DMkAMMdXe",a="1cornrbhtanr2ad24q70s0bce1"},37753:function(e,t,s){"use strict";s.d(t,{$J:function(){return o},Dd:function(){return d},EG:function(){return l},ac:function(){return n},i9:function(){return u},oT:function(){return c},r0:function(){return a},xc:function(){return i}});var r=s(56567);async function n(e){let t=await fetch(r.T5+"/invitationcode?code="+e),s=await t.json();return s}async function a(e){let t=await fetch(r.T5+"/?user="+e),s=await t.json();return s.filenames}async function c(){let e=await fetch(r.T5+"/poolusers"),t=await e.json();return t.users}async function o(e){let t=await fetch(r.T5+"/mylogo?user="+e),s=await t.json();return s.imageUrl}async function l(e){let t=await fetch(r.T5+"/contracts?user="+e),s=await t.json();return s}async function d(e,t,s){let n=await fetch(r.T5+"/showincarousel?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(t)}),a=await n.json();return a}async function i(e,t,s){let n=await fetch(r.T5+"/sendrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(t)}),a=await n.json();return a}async function u(e,t,s){let n=await fetch(r.T5+"/acceptrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(t)}),a=await n.json();return a}},66246:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var r=s(85893),n=s(37753),a=s(67294);function c(e){let{currentUser:t}=e;var[s,c]=(0,a.useState)("");async function o(){let e=document.getElementById("redCross1"),s=document.getElementById("greenTick1");var r,a=document.getElementById("ul-sendRequests"),o=[];for(let e=0;e<a.children.length;e++){var l=a.children[e].children[0].children[0];l.checked,o.push(l.id)}console.log("sending requests to: ",o);try{r=await (0,n.xc)(t,{destinations:o})}catch(t){s.classList.contains("hidden")||s.classList.add("hidden"),e.classList.remove("hidden"),setTimeout(async()=>{e.classList.add("hidden")},2e3);return}if("Success"!==r.result)return;e.classList.contains("hidden")||e.classList.add("hidden"),s.classList.remove("hidden"),setTimeout(async()=>{s.classList.add("hidden")},2e3);let d=await (0,n.EG)(t);c(d)}async function l(){let e=document.getElementById("redCross3"),s=document.getElementById("greenTick3");var r,a=[],o=document.getElementById("ul-showInCarousel");for(let e=0;e<o.children.length;e++){var l=o.children[e].children[0].children[0],d=l.checked?1:0;let t=l.id;console.log("company=",t);let s={};s[t]=d,a.push(s)}let i={data:a};console.log("set showInCarousel=",i);try{r=await (0,n.Dd)(t,i)}catch(t){s.classList.contains("hidden")||s.classList.add("hidden"),e.classList.remove("hidden"),setTimeout(async()=>{e.classList.add("hidden")},2e3);return}if("Success"!==r.result)return;e.classList.contains("hidden")||e.classList.add("hidden"),s.classList.remove("hidden"),setTimeout(async()=>{s.classList.add("hidden")},2e3);let u=await (0,n.EG)(t);c(u)}async function d(){let e=document.getElementById("redCross4"),s=document.getElementById("greenTick4");var r,a=document.getElementById("ul-incomeRequests"),o=[];for(let e=0;e<a.children.length;e++){var l=a.children[e].children[0].children[0],d=l.checked?1:0;let t=l.id,s={};s[t]=d,o.push(s)}let i={data:o};console.log("accepting incoming requests: ",i);try{r=await (0,n.i9)(t,i)}catch(t){s.classList.contains("hidden")||s.classList.add("hidden"),e.classList.remove("hidden"),setTimeout(async()=>{e.classList.add("hidden")},2e3);return}if("Success"!==r.result)return;e.classList.contains("hidden")||e.classList.add("hidden"),s.classList.remove("hidden"),setTimeout(async()=>{s.classList.add("hidden")},2e3);let u=await (0,n.EG)(t);c(u)}return(0,a.useEffect)(()=>{!async function(){if(void 0!==t){console.log(""===s),console.log(void 0!==t),console.log(t);let e=await (0,n.EG)(t);c(e)}}()},[t]),(0,r.jsxs)("div",{id:"checkboxid",className:"relative flex mx-auto space-x-20",children:[(0,r.jsxs)("div",{id:"div-sendRequests",className:"z-10 rounded-lg shadow w-60 bg-white border border-gray-600",children:[(0,r.jsx)("h1",{className:"text-md text-center font-bold text-black-500",children:"Send request"}),(0,r.jsx)("p",{className:"text-sm text-center text-gray-700 px-2 pt-3 overflow-x-auto",children:"Ask companies for authorization to be referenced"}),(0,r.jsx)("ul",{id:"ul-sendRequests",className:"h-64 w-128 px-3 pb-3 pt-6 overflow-y-auto text-sm text-gray-700 text-gray-200","aria-labelledby":"dropdownSearchButton",children:(0,r.jsx)(function(e){let{currentUser:t,contracts:s}=e,[c,o]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=async()=>{let e=await (0,n.oT)();if(console.log("2. currentUser=",t),null==t)return;if(""==s|null==s){console.log("contracts=",s);return}let a=Object.keys(s.incomeRequests),c=Object.keys(s.outcomeRequests),l=e.filter(e=>e!==t),d=l.filter(e=>!c.includes(e)),i=d.filter(e=>!a.includes(e)),u=i.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600",children:[(0,r.jsx)("input",{id:e,type:"checkbox",defaultChecked:!1,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),(0,r.jsx)("label",{className:"w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300",children:e})]})},e));o(u)};e()},[s]),c},{currentUser:t,contracts:s})}),(0,r.jsx)("button",{onClick:o,className:"relative flex items-center w-full p-3 text-sm font-medium text-white border-t border-gray-200 rounded-b-lg border-gray-600 bg-blue-400 text-gray-500 hover:bg-blue-600",children:"Send"}),(0,r.jsxs)("div",{className:"absolute py-5 w-60",children:[(0,r.jsx)("img",{id:"greenTick1",className:"flex mx-auto h-8 w-8 hidden",src:"./checked.svg"}),(0,r.jsx)("img",{id:"redCross1",className:"flex mx-auto h-8 w-8 hidden",src:"./Cross_red_circle.svg"})]})]}),(0,r.jsxs)("div",{id:"div-sentRequests",className:"z-10 rounded-lg shadow w-60 bg-white border border-gray-600",children:[(0,r.jsx)("h1",{className:"text-md text-center font-bold text-black-500",children:"Sent requests"}),(0,r.jsx)("p",{className:"text-sm text-center text-gray-700 px-2 pt-3 overflow-x-auto",children:"Here the list of forwarded requests. Waiting for authorization!"}),(0,r.jsx)("ul",{id:"ul-sentRequests",className:"h-64 w-128 px-3 pb-3 pt-6 overflow-y-auto text-sm text-gray-700 text-gray-200","aria-labelledby":"dropdownSearchButton",children:(0,r.jsx)(function(e){let{currentUser:t,contracts:s}=e,[n,c]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=async()=>{if(console.log("3. currentUser=",t),null==t)return;if(""==s|null==s){console.log("contracts=",s);return}let e=Object.entries(s.outcomeRequests).filter(e=>{let[t,s]=e;return!1===s.accepted}).map(e=>{let[t,s]=e;return t});console.log("sentItems=",e),console.log(e);let n=e.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)("div",{className:"flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600",children:(0,r.jsx)("label",{className:"w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300",children:e})})},e));c(n)};e()},[s]),n},{currentUser:t,contracts:s})})]}),(0,r.jsxs)("div",{id:"div-acceptedByRequests",className:"z-10 rounded-lg shadow w-60 bg-white border border-gray-600",children:[(0,r.jsx)("h1",{className:"text-md text-center font-bold text-black-500",children:"Accepted-by requests"}),(0,r.jsx)("p",{className:"text-sm text-center text-gray-700 px-2 pt-3 overflow-x-auto",children:"Select the authorized logos to show in your carousel"}),(0,r.jsx)("ul",{id:"ul-showInCarousel",className:"h-64 w-128 px-3 pb-3 pt-6 overflow-y-auto text-sm text-gray-700 text-gray-200","aria-labelledby":"dropdownSearchButton",children:(0,r.jsx)(function(e){let{currentUser:t,contracts:s}=e,[n,c]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=async()=>{if(console.log("1. currentUser=",t),null==t)return;if(""==s|null==s){console.log("contracts=",s);return}let e=Object.entries(s.outcomeRequests).filter(e=>{let[t,s]=e;return s.accepted}).map(e=>{let[t,s]=e;return{[t]:s}});console.log("acceptedItems=",e),console.log(e);let n=e.map((e,t)=>{console.log("resource=",e),console.log("index=",t);let s=Object.keys(e)[0],n=e[s].showInCarousel;return console.log("key=",s),console.log("showincarousel=",n),(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600",children:[(0,r.jsx)("input",{id:s,type:"checkbox",defaultChecked:n,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),(0,r.jsx)("label",{className:"w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300",children:s})]})},s)});c(n)};e()},[s]),n},{currentUser:t,contracts:s})}),(0,r.jsx)("button",{onClick:l,className:"flex items-center w-full p-3 text-sm font-medium text-white border-t border-gray-200 rounded-b-lg border-gray-600 bg-blue-400 text-gray-500 hover:bg-blue-600",children:"Save"}),(0,r.jsxs)("div",{className:"absolute py-5 w-60",children:[(0,r.jsx)("img",{id:"greenTick3",className:"flex mx-auto h-8 w-8 hidden",src:"./checked.svg"}),(0,r.jsx)("img",{id:"redCross3",className:"flex mx-auto h-8 w-8 hidden",src:"./Cross_red_circle.svg"})]})]}),(0,r.jsxs)("div",{id:"div-incomeRequests",className:"z-10 rounded-lg shadow w-60 bg-white border border-gray-600",children:[(0,r.jsx)("h1",{className:"text-md text-center font-bold text-black-500",children:"Incoming requests"}),(0,r.jsx)("p",{className:"text-sm text-center text-gray-700 px-2 pt-3 overflow-x-auto",children:"Grant authorization to these companies to use your logo"}),(0,r.jsx)("ul",{id:"ul-incomeRequests",className:"h-64 w-128 px-3 pb-3 pt-6 overflow-y-auto text-sm text-gray-700 text-gray-200","aria-labelledby":"dropdownSearchButton",children:(0,r.jsx)(function(e){let{currentUser:t,contracts:s}=e,[n,c]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=async()=>{if(console.log("4. currentUser=",t),null==t)return;if(""==s|null==s){console.log("contracts=",s);return}if(0===Object.keys(s.incomeRequests).length)return;let e=Object.keys(s.incomeRequests),n=e.map((e,t)=>{let n=s.incomeRequests[e].accepted;return(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600",children:[(0,r.jsx)("input",{id:e,type:"checkbox",defaultChecked:n,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),(0,r.jsx)("label",{className:"w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300",children:e})]})},e)});c(n)};e()},[s]),n},{currentUser:t,contracts:s})}),(0,r.jsx)("button",{onClick:d,className:"flex items-center w-full p-3 text-sm font-medium text-white border-t border-gray-200 rounded-b-lg border-gray-600 bg-blue-400 text-blue-500 hover:bg-blue-600",children:"Save"}),(0,r.jsxs)("div",{className:"absolute py-5 w-60",children:[(0,r.jsx)("img",{id:"greenTick4",className:"flex mx-auto h-8 w-8 hidden",src:"./checked.svg"}),(0,r.jsx)("img",{id:"redCross4",className:"flex mx-auto h-8 w-8 hidden",src:"./Cross_red_circle.svg"})]})]})]})}s(98690)},28022:function(){}}]);