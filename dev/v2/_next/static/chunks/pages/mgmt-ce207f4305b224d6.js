(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{6808:function(e,t,r){var n,s,o;void 0!==(s="function"==typeof(n=o=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function s(){}function o(t,r,o){if("undefined"!=typeof document){"number"==typeof(o=e({path:"/"},s.defaults,o)).expires&&(o.expires=new Date(new Date*1+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var a=JSON.stringify(r);/^[\{\[]/.test(a)&&(r=a)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var l in o)o[l]&&(i+="; "+l,!0!==o[l]&&(i+="="+o[l].split(";")[0]));return document.cookie=t+"="+r+i}}function a(e,r){if("undefined"!=typeof document){for(var s={},o=document.cookie?document.cookie.split("; "):[],a=0;a<o.length;a++){var i=o[a].split("="),l=i.slice(1).join("=");r||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var d=t(i[0]);if(l=(n.read||n)(l,d)||t(l),r)try{l=JSON.parse(l)}catch(e){}if(s[d]=l,e===d)break}catch(e){}}return e?s[e]:s}}return s.set=o,s.get=function(e){return a(e,!1)},s.getJSON=function(e){return a(e,!0)},s.remove=function(t,r){o(t,"",e(r,{expires:-1}))},s.defaults={},s.withConverter=r,s}(function(){})})?n.call(t,r,t,e):n)&&(e.exports=s),e.exports=o()},7666:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mgmt",function(){return r(3273)}])},6451:function(e,t,r){"use strict";r.d(t,{EE:function(){return d},JT:function(){return u},NM:function(){return c},P3:function(){return i},Sq:function(){return o},dV:function(){return l},fo:function(){return a},gk:function(){return s}});var n=r(6567);async function s(e){let t=await fetch(n.T5+"/invitationcode?code="+e),r=await t.json();return r}async function o(e){let t=await fetch(n.T5+"/pool_users",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await t.json(),s=r.users;return s}async function a(e,t){let r=await fetch(n.T5+"/contract?contractId="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),s=await r.json();return s.contract}async function i(e,t){let r=await fetch(n.T5+"/user_contracts?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),s=await r.json();return s.contracts}async function l(e,t){let r=await fetch(n.T5+"/img_url?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),s=await r.json();return s.img_url}async function d(e,t,r,s){let o=await fetch(n.T5+"/add_new_contract_item",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify({partyA:e,partyB:t,text:r})}),a=await o.json();return a}async function c(e,t,r,s){let o=await fetch(n.T5+"/update_sign",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify({contractId:e,user:t,sign:r})}),a=await o.json();return a}async function u(e,t,r,s){let o=await fetch(n.T5+"/update_contract_text",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify({contractId:e,text:t,user:r})}),a=await o.json();return a}},6567:function(e,t,r){"use strict";r.d(t,{Mr:function(){return o},Rf:function(){return s},T5:function(){return n}});let n="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod",s="eu-west-1_0xawMsGty",o="7b30d5nqk0gech4bec45dchalf"},3273:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n={};r.r(n);var s=r(5893),o=r(7294),a=r(1664),i=r.n(a),l=r(6808),d=r.n(l),c=r(6451),u=r(1163);function h(e){let{isVisible:t,text:r}=e;return t?(0,s.jsxs)("div",{id:"toast-success",class:"flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",role:"alert",children:[(0,s.jsxs)("div",{class:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200",children:[(0,s.jsx)("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})}),(0,s.jsx)("span",{class:"sr-only",children:"Check icon"})]}),(0,s.jsx)("div",{class:"ms-3 text-sm font-normal",children:r})]}):null}var g=r(6567);function x(e){let{user:t,access_token:r}=e,[n,a]=(0,o.useState)(!1),[i,l]=(0,o.useState)(!1),[d,u]=(0,o.useState)(null),h=(0,o.useRef)(null);async function x(){if(0!=h.current.files.length){var e=h.current.files[0].name,n=h.current.files[0],s=new FileReader;s.onload=function(){var n={};n.filename=e,n.user=t;var o=s.result.split(";base64,")[1];n.imageAsBase64String=o,n.metadata={"Content-Type":"image/png"};var a=new XMLHttpRequest;a.open("POST",g.T5+"/img",!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Authorization","Bearer "+r),a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){var e=JSON.parse(a.responseText);"Success"==e.result?u(e.img_url):console.log("failed to upload")}},a.send(JSON.stringify(n))},s.readAsDataURL(n)}}return(0,o.useEffect)(()=>{(async function(){if(null!=t&&null==d){let e=await (0,c.dV)(t,r);u(e)}})()},[t]),(0,o.useEffect)(()=>{console.log("useEffect on imageSrc")},[d]),(0,s.jsxs)("div",{style:{padding:"10px"},children:[(0,s.jsx)("img",{id:"avatarButton",type:"button","data-dropdown-toggle":"userDropdown","data-dropdown-placement":"bottom-start",className:"flex items-center w-full max-w-xs rounded-full cursor-pointer border-2 border-blue-200 p-2 shadow-lg transition hover:duration-350 hover:scale-125 ",style:{maxWidth:"128px",maxHeight:"128px"},src:d,onClick:()=>{a(e=>!e)},alt:"User dropdown"}),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,s.jsxs)("div",{id:"userDropdown",className:n?"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600":"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",children:[(0,s.jsx)("div",{className:"px-4 py-3 text-sm text-gray-900 dark:text-white",children:(0,s.jsx)("div",{children:t})}),(0,s.jsx)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"avatarButton",children:(0,s.jsx)("li",{children:(0,s.jsx)("a",{onClick:()=>{l(e=>!e)},className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer",children:"Change logo"})})}),(0,s.jsx)("div",{className:"py-1",children:(0,s.jsx)("a",{href:"https://repubblica.com",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Sign out"})})]}),(0,s.jsx)("div",{className:n&i?"flex items-center justify-center w-full":"flex items-center justify-center w-full hidden",children:(0,s.jsxs)("div",{id:"div-MyLogo",className:"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 flex flex-col space-y-4",children:[(0,s.jsx)("input",{className:"text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"upload_file",type:"file",ref:h}),(0,s.jsx)("button",{type:"button",className:"bg-purple-600 text-white hover:bg-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center",onClick:x,children:"Upload logo"})]})})]})]})}function p(){return(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{class:"w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600",children:[(0,s.jsxs)("div",{class:"flex items-center justify-between px-3 py-2 border-b dark:border-gray-600",children:[(0,s.jsxs)("div",{class:"flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600",children:[(0,s.jsxs)("div",{class:"flex items-center space-x-1 rtl:space-x-reverse sm:pe-4",children:[(0,s.jsxs)("button",{type:"button",class:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,s.jsx)("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 12 20",children:(0,s.jsx)("path",{stroke:"currentColor","stroke-linejoin":"round","stroke-width":"2",d:"M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"})}),(0,s.jsx)("span",{class:"sr-only",children:"Attach file"})]}),(0,s.jsxs)("button",{type:"button",class:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,s.jsx)("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:(0,s.jsx)("path",{d:"M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"})}),(0,s.jsx)("span",{class:"sr-only",children:"Embed map"})]}),(0,s.jsxs)("button",{type:"button",class:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,s.jsxs)("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:[(0,s.jsx)("path",{d:"M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"}),(0,s.jsx)("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"})]}),(0,s.jsx)("span",{class:"sr-only",children:"Upload image"})]}),(0,s.jsxs)("button",{type:"button",class:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,s.jsxs)("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:[(0,s.jsx)("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"}),(0,s.jsx)("path",{d:"M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z"})]}),(0,s.jsx)("span",{class:"sr-only",children:"Format code"})]}),(0,s.jsxs)("button",{type:"button",class:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,s.jsx)("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"})}),(0,s.jsx)("span",{class:"sr-only",children:"Add emoji"})]})]}),(0,s.jsxs)("div",{class:"flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4",children:[(0,s.jsxs)("button",{type:"button",class:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,s.jsx)("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 21 18",children:(0,s.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"})}),(0,s.jsx)("span",{class:"sr-only",children:"Add list"})]}),(0,s.jsxs)("button",{type:"button",class:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,s.jsx)("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"})}),(0,s.jsx)("span",{class:"sr-only",children:"Settings"})]}),(0,s.jsxs)("button",{type:"button",class:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,s.jsxs)("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:[(0,s.jsx)("path",{d:"M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z"}),(0,s.jsx)("path",{d:"M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z"})]}),(0,s.jsx)("span",{class:"sr-only",children:"Timeline"})]}),(0,s.jsxs)("button",{type:"button",class:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,s.jsxs)("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:[(0,s.jsx)("path",{d:"M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"}),(0,s.jsx)("path",{d:"M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"})]}),(0,s.jsx)("span",{class:"sr-only",children:"Download"})]})]})]}),(0,s.jsxs)("button",{type:"button","data-tooltip-target":"tooltip-fullscreen",class:"p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,s.jsx)("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 19 19",children:(0,s.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"})}),(0,s.jsx)("span",{class:"sr-only",children:"Full screen"})]}),(0,s.jsxs)("div",{id:"tooltip-fullscreen",role:"tooltip",class:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700",children:["Show full screen",(0,s.jsx)("div",{class:"tooltip-arrow","data-popper-arrow":!0})]})]}),(0,s.jsxs)("div",{class:"px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800",children:[(0,s.jsx)("label",{for:"editor",class:"sr-only",children:"Publish post"}),(0,s.jsx)("textarea",{id:"editor",rows:"8",class:"block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400",placeholder:"Write an article...",required:!0})]})]}),(0,s.jsx)("button",{type:"submit",class:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800",children:"Publish post"})]})}function f(){let e=(0,u.useRouter)(),t=e.query.user,r=d().get("accessToken"),[a,l]=(0,o.useState)([]),[g,f]=(0,o.useState)(0),[y,v]=(0,o.useState)([]),[b,w]=(0,o.useState)(""),[m,j]=(0,o.useState)(!0),[k,C]=(0,o.useState)(0),[T,N]=(0,o.useState)([]),[S,I]=(0,o.useState)(!1),[A,_]=(0,o.useState)(""),[B,M]=(0,o.useState)("YourContracts");async function E(e){if(e.preventDefault(),null==document?(console.log("document null"),!0):null==document.getElementById("contractTextId")?(console.log('document.getElementById("contractTextId") null'),!0):null==document.getElementById("contractTextId").value&&(console.log('document.getElementById("contractTextId").value null'),!0))return;let n=document.getElementById("contractTextId").value;console.log("[DEBUG] selectedRowInvite: ",k),console.log("[DEBUG] invitationsTable[selectedRowInvite]: ",T[k]);let s=T[k],o=await (0,c.EE)(t,s,n,r);console.log("[API Response] POST /call_api_add_new_contract_item ",o),"Success"==o.result?_("Invite successfully forwarded"):_("Something went wrong, so sorry.."),console.log("_contracts =",y);let a=await (0,c.fo)(o.contractId,r);y.push(a),console.log("_contracts =",y),console.log("invitationsTable =",T);let i=T.filter(e=>e!==T[k]);console.log("_invitationsTable =",i),N(i)}function Z(e){let{cacheText:t,isReadOnly:r}=e;return(0,s.jsx)("textArea",{autofocus:!0,style:{width:"80%",height:"80%"},id:"contractTextId",className:"input-field caret-pink-500",readOnly:r,children:t})}async function R(e,t,n){console.log("Updating user sign on contract with index ",t),console.log("contracts[index] = ",y[t]),console.log("contracts_[index] = ",y[t]),y[t].signs[n].sign=e.target.checked;let s=y[t].contractId,o=await (0,c.NM)(s,n,e.target.checked,r);console.log("[API Response] POST /update_sign ",o),"Success"==o.result?(j(!m),v(y),_("Contract signed!")):_("Something went wrong, so sorry.."),I(!0),setTimeout(async()=>{I(!1)},1e3)}(0,o.useEffect)(()=>{console.log("[useEffect] invitationsTable: ",T)},[T]),(0,o.useEffect)(()=>{if(console.log("[useEffect(contracts, poolUsers)]"),0==y.length){N(a.filter(e=>e!==t));return}if(void 0!==t){let e,r;console.log("contracts = ",y),w(y[g].contract.text);let n=(e=y.map(e=>e.partyA),r=y.map(e=>e.partyB),a.filter(t=>!e.includes(t)).filter(e=>!r.includes(e))),s=n.filter(e=>e!==t);console.log("__invitationsTable = ",s),N(s)}else console.log("user is undefined!")},[y,a]),(0,o.useEffect)(()=>{(async function(){if(void 0!==t){let e=await (0,c.P3)(t,r);console.log("contracts = ",e),v(e);let n=await (0,c.Sq)(r);console.log("poolusers = ",n),l(n)}else console.log("user is undefined!")})()},[t]);let D=e=>{f(e),w(y[e].contract.text)},V=e=>{C(e)};function H(e){let r=e.partyA!==t?e.partyA:e.partyB;return console.log("Partner is: ",r),r}function P(e){let{selectedRow:r,contracts:n,anySignChanged:o}=e;return(0,s.jsxs)("table",{id:"ID_YourContractsTable",className:"border-separate border-spacing-2 border border-slate-500",style:{width:"100%",height:"80%",overflowX:"auto",overflowY:"auto"},children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border border-violet-600",children:[(0,s.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner"}),(0,s.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner sign"}),(0,s.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Your sign"}),(0,s.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Preview"})]})}),(0,s.jsx)("tbody",{children:n.map((e,o)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"cursor-pointer ".concat(r===o?"border border-gray-400 px-4 py-2 text-center bg-blue-200":"border border-gray-400 px-4 py-2 text-center"),onClick:()=>D(o),children:H(e)}),(0,s.jsx)("td",{className:"flex border border-gray-400 px-4 py-2",style:{height:"100%",justifyContent:"center"},children:(0,s.jsx)("label",{className:"relative inline-flex items-center",style:{justifyContent:"center"},children:(0,s.jsx)("img",{src:function(e,t){let r=H(e[t]),n=e[t].signs[r].sign;return(console.log("isChecked? ",n),!0==n)?"./checked.svg":"./Cross_red_circle.svg"}(n,o),alt:"checked",style:{width:"44px",height:"44px"}})})}),(0,s.jsx)("td",{className:"border border-gray-400 px-4 py-2 text-center",children:(0,s.jsx)("label",{className:"relative inline-flex items-center cursor-pointer",children:(0,s.jsx)("input",{type:"checkbox",checked:function(e,r){let n=e[r].signs[t].sign;return console.log("isCheckedByUser? ",n),n}(n,o),className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600",onChange:e=>R(e,o,t)})})},n[o].contractId),(0,s.jsx)("td",{className:"border border-gray-400 px-4 py-2",children:(0,s.jsx)(i(),{href:{pathname:"/Redfered",query:{id:n[r].contractId}},passHref:!0,children:(0,s.jsx)("a",{className:"relative flex items-center",style:{justifyContent:"center"},children:(0,s.jsx)("img",{src:"./text.svg",alt:"Clickable Icon",style:{width:"25px",height:"25px",cursor:"pointer"}})})})})]},o))})]})}function O(e){let{selectedRowInvite:t,invitationsTable:r}=e;return(0,s.jsxs)("table",{id:"ID_InviteTable",className:"border border-purple-400",style:{width:"100%",height:"80%",overflowX:"auto",overflowY:"auto"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{className:"border border-violet-600",children:(0,s.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner"})})}),(0,s.jsx)("tbody",{children:r.map((e,r)=>(0,s.jsx)("tr",{children:(0,s.jsx)("td",{className:"cursor-pointer ".concat(t===r?"border border-gray-400 px-4 py-2 text-center bg-blue-200":"border border-gray-400 px-4 py-2 text-center"),onClick:()=>V(r),children:e})},r))})]})}return(0,s.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"column",height:"100%",width:"100%",alignItems:"center"},children:[(0,s.jsx)("div",{style:{position:"relative",display:"flex",flex:1,flexGrow:1,width:"40%",height:"15%",justifyContent:"center",alignItems:"center",borderBottom:"3px solid #8a00ff"},children:(0,s.jsx)("img",{src:"./Redfered-7-9-2024.png",style:{height:"90%"}})}),(0,s.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"row",padding:"4",width:"100%",justifyContent:"space-between"},children:[(0,s.jsx)(x,{user:t,access_token:r}),(0,s.jsx)(h,{isVisible:S,text:A})]}),(0,s.jsx)(n.default,{}),(0,s.jsxs)("div",{class:"inline-flex rounded-md shadow-sm",role:"group",children:[(0,s.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",onClick:()=>M("YourContracts"),children:"Your Contracts"}),(0,s.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",onClick:()=>M("Invite"),children:"Send invitation"})]}),(0,s.jsx)(function(e){let{selectedRow:t,contracts:r,isVisible:n,cacheText:a,anySignChanged:i}=e;if(!n)return null;let[l,d]=(0,o.useState)(!0);return(0,s.jsxs)("div",{className:"divide-x divide-dashed",style:{position:"relative",display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",height:"70%",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)("div",{style:{flex:1,overflowX:"auto",overflowY:"auto",width:"100%",height:"80%",alignItems:"center"},children:(0,s.jsx)(P,{selectedRow:t,contracts:r,anySignChanged:i})}),(0,s.jsx)("div",{style:{display:"flex",flex:1,flexDirection:"row",width:"80%",height:"80%"},children:(0,s.jsx)(p,{})})]})},{selectedRow:g,contracts:y,isVisible:"YourContracts"==B,cacheText:b,anySignChanged:m}),(0,s.jsx)(function(e){let{selectedRowInvite:t,invitationsTable:r,isVisible:n}=e;return n?(0,s.jsxs)("div",{style:{position:"relative",display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",height:"70%",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)("div",{style:{flex:1,overflowX:"auto",overflowY:"auto",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)(O,{selectedRowInvite:t,invitationsTable:r})}),(0,s.jsx)("div",{style:{display:"flex",flex:1,flexDirection:"row",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:(0,s.jsxs)("form",{onSubmit:E,className:"space-y-4",style:{display:"flex",flex:1,flexDirection:"column",width:"80%",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)(Z,{id:"invite-text-id",style:{flex:1}}),(0,s.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Save"})]})})]}):null},{selectedRowInvite:k,invitationsTable:T,isVisible:"Invite"==B})]})}}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=7666)}),_N_E=e.O()}]);