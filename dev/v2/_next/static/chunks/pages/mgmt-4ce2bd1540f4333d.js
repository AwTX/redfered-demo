(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{6808:function(e,t,r){var n,o,s;void 0!==(o="function"==typeof(n=s=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function s(t,r,s){if("undefined"!=typeof document){"number"==typeof(s=e({path:"/"},o.defaults,s)).expires&&(s.expires=new Date(new Date*1+864e5*s.expires)),s.expires=s.expires?s.expires.toUTCString():"";try{var a=JSON.stringify(r);/^[\{\[]/.test(a)&&(r=a)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var l in s)s[l]&&(i+="; "+l,!0!==s[l]&&(i+="="+s[l].split(";")[0]));return document.cookie=t+"="+r+i}}function a(e,r){if("undefined"!=typeof document){for(var o={},s=document.cookie?document.cookie.split("; "):[],a=0;a<s.length;a++){var i=s[a].split("="),l=i.slice(1).join("=");r||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var c=t(i[0]);if(l=(n.read||n)(l,c)||t(l),r)try{l=JSON.parse(l)}catch(e){}if(o[c]=l,e===c)break}catch(e){}}return e?o[e]:o}}return o.set=s,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,r){s(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}(function(){})})?n.call(t,r,t,e):n)&&(e.exports=o),e.exports=s()},7666:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mgmt",function(){return r(6431)}])},6451:function(e,t,r){"use strict";r.d(t,{EE:function(){return d},JT:function(){return g},NM:function(){return u},P3:function(){return i},Sq:function(){return s},dV:function(){return l},fo:function(){return a},gk:function(){return o},tb:function(){return c}});var n=r(6567);async function o(e){let t=await fetch(n.T5+"/invitationcode?code="+e),r=await t.json();return r}async function s(e){let t=await fetch(n.T5+"/pool_users",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await t.json(),o=r.users;return o}async function a(e,t){let r=await fetch(n.T5+"/contract?contractId="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.contract}async function i(e,t){let r=await fetch(n.T5+"/user_contracts?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.contracts}async function l(e,t){let r=await fetch(n.T5+"/img_url?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.img_url}async function c(e){let t=await fetch(n.T5+"/api-key",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await t.json();return r.hmac_base64encoded}async function d(e,t,r,o){let s=await fetch(n.T5+"/add_new_contract_item",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({partyA:e,partyB:t,text:r})}),a=await s.json();return a}async function u(e,t,r,o){let s=await fetch(n.T5+"/update_sign",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({contractId:e,user:t,sign:r})}),a=await s.json();return a}async function g(e,t,r,o){let s=await fetch(n.T5+"/update_contract_text",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({contractId:e,text:t,user:r})}),a=await s.json();return a}},6567:function(e,t,r){"use strict";r.d(t,{Mr:function(){return s},Rf:function(){return o},T5:function(){return n}});let n="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_0xawMsGty",s="7b30d5nqk0gech4bec45dchalf"},6431:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),o=r(7294),s=r(1664),a=r.n(s),i=r(6808),l=r.n(i),c=r(6451),d=r(1163);function u(e){let{isVisible:t,text:r}=e;return t?(0,n.jsxs)("div",{id:"toast-success",class:"flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",role:"alert",children:[(0,n.jsxs)("div",{class:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200",children:[(0,n.jsx)("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})}),(0,n.jsx)("span",{class:"sr-only",children:"Check icon"})]}),(0,n.jsx)("div",{class:"ms-3 text-sm font-normal",children:r})]}):null}var g=r(6567);function h(e){let{plugin_code:t,isVisible:r}=e;return r?(0,n.jsx)("div",{id:"course-modal",tabindex:"-1",class:"overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",children:(0,n.jsx)("div",{class:"relative p-4 w-full max-w-lg max-h-full",children:(0,n.jsxs)("div",{class:"relative bg-white rounded-lg shadow dark:bg-gray-800",children:[(0,n.jsxs)("div",{class:"flex items-center justify-between p-4 md:p-5",children:[(0,n.jsx)("h3",{class:"text-lg text-gray-500 dark:text-gray-400",children:"Code"}),(0,n.jsxs)("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-white","data-modal-toggle":"course-modal",children:[(0,n.jsx)("svg",{class:"w-3 h-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:(0,n.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),(0,n.jsx)("span",{class:"sr-only",children:"Close modal"})]})]}),(0,n.jsxs)("div",{class:"px-4 pb-4 md:px-5 md:pb-5",children:[(0,n.jsx)("label",{for:"course-url",class:"text-sm font-medium text-gray-900 dark:text-white mb-2 block",children:"Copy this code into your plugin"}),(0,n.jsxs)("div",{class:"relative mb-4",children:[(0,n.jsx)("text",{id:"course-url",type:"text",class:"col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",value:t,readonly:!0}),(0,n.jsxs)("button",{"data-copy-to-clipboard-target":"course-url","data-tooltip-target":"tooltip-course-url",class:"absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center",children:[(0,n.jsx)("span",{id:"default-icon-course-url",children:(0,n.jsx)("svg",{class:"w-3.5 h-3.5",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 20",children:(0,n.jsx)("path",{d:"M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"})})}),(0,n.jsx)("span",{id:"success-icon-course-url",class:"hidden inline-flex items-center",children:(0,n.jsx)("svg",{class:"w-3.5 h-3.5 text-blue-700 dark:text-blue-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:(0,n.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),(0,n.jsxs)("div",{id:"tooltip-course-url",role:"tooltip",class:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700",children:[(0,n.jsx)("span",{id:"default-tooltip-message-course-url",children:"Copy to clipboard"}),(0,n.jsx)("span",{id:"success-tooltip-message-course-url",class:"hidden",children:"Copied!"}),(0,n.jsx)("div",{class:"tooltip-arrow","data-popper-arrow":!0})]})]}),(0,n.jsx)("button",{type:"button","data-modal-hide":"course-modal",class:"py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Close"})]})]})})}):(0,n.jsx)("div",{})}function x(e){let{user:t,access_token:r}=e,[s,a]=(0,o.useState)(!1),[i,l]=(0,o.useState)(!1),[d,u]=(0,o.useState)(!1),[x,f]=(0,o.useState)(null),[p,y]=(0,o.useState)(null),b=(0,o.useRef)(null);async function m(){if(0!=b.current.files.length){var e=b.current.files[0].name,n=b.current.files[0],o=new FileReader;o.onload=function(){var n={};n.filename=e,n.user=t;var s=o.result.split(";base64,")[1];n.imageAsBase64String=s,n.metadata={"Content-Type":"image/png"};var a=new XMLHttpRequest;a.open("POST",g.T5+"/img",!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Authorization","Bearer "+r),a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){var e=JSON.parse(a.responseText);"Success"==e.result?f(e.img_url):console.log("failed to upload")}},a.send(JSON.stringify(n))},o.readAsDataURL(n)}}return(0,o.useEffect)(()=>{(async function(){if(null==t)return;let e=await (0,c.tb)(id_token);y(e)})()},[d]),(0,o.useEffect)(()=>{(async function(){if(null!=t&&null==x){let e=await (0,c.dV)(t,r);f(e)}})()},[t]),(0,o.useEffect)(()=>{console.log("useEffect on imageSrc")},[x]),(0,n.jsxs)("div",{style:{padding:"10px"},children:[(0,n.jsx)("img",{id:"avatarButton",type:"button","data-dropdown-toggle":"userDropdown","data-dropdown-placement":"bottom-start",className:"flex items-center w-full max-w-xs rounded-full cursor-pointer border-2 border-blue-200 p-2 shadow-lg transition hover:duration-350 hover:scale-125 ",style:{maxWidth:"128px",maxHeight:"128px"},src:x,onClick:()=>{a(e=>!e)},alt:"User dropdown"}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,n.jsxs)("div",{id:"userDropdown",className:s?"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600":"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",children:[(0,n.jsx)("div",{className:"px-4 py-3 text-sm text-gray-900 dark:text-white",children:(0,n.jsx)("div",{children:t})}),(0,n.jsx)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"avatarButton",children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:()=>{l(e=>!e)},className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer",children:"Change logo"})})}),(0,n.jsx)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"avatarButton",children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:()=>{u(e=>!e)},className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer",children:"Get Plugin Code"})})}),(0,n.jsx)("div",{className:"py-1",children:(0,n.jsx)("a",{href:"https://repubblica.com",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Sign out"})})]}),(0,n.jsx)("div",{className:s&i?"flex items-center justify-center w-full":"flex items-center justify-center w-full hidden",children:(0,n.jsxs)("div",{id:"div-MyLogo",className:"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 flex flex-col space-y-4",children:[(0,n.jsx)("input",{className:"text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"upload_file",type:"file",ref:b}),(0,n.jsx)("button",{type:"button",className:"bg-purple-600 text-white hover:bg-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center",onClick:m,children:"Upload logo"})]})}),(0,n.jsx)("div",{children:(0,n.jsx)(h,{plugin_code:p,isVisible:d})})]})]})}function f(){return null==document?(console.log("document null"),!0):null==document.getElementById("contractTextId")?(console.log('document.getElementById("contractTextId") null'),!0):null==document.getElementById("contractTextId").value&&(console.log('document.getElementById("contractTextId").value null'),!0)}function p(){let e=(0,d.useRouter)(),t=e.query.user,r=l().get("accessToken"),s=l().get("idToken"),[i,g]=(0,o.useState)([]),[h,p]=(0,o.useState)(0),[y,b]=(0,o.useState)([]),[m,w]=(0,o.useState)(""),[v,j]=(0,o.useState)(!0),[k,C]=(0,o.useState)(0),[T,N]=(0,o.useState)([]),[S,I]=(0,o.useState)(!1),[_,E]=(0,o.useState)(""),[B,R]=(0,o.useState)("YourContracts"),[A,D]=(0,o.useState)(!1);async function O(e){if(e.preventDefault(),f())return;let n=document.getElementById("contractTextId").value,o=y[h].contractId,s=await (0,c.JT)(o,n,t,r);"Success"==s.result&&(y[h].contract.text=n,b(y),E("Invite successfully forwarded"),I(!0),setTimeout(async()=>{I(!1)},700)),console.log("[API Response] /update_contract_text returned: ",s)}async function P(e){if(e.preventDefault(),f())return;let n=document.getElementById("contractTextId").value;console.log("[DEBUG] selectedRowInvite: ",k),console.log("[DEBUG] invitationsTable[selectedRowInvite]: ",T[k]);let o=T[k],s=await (0,c.EE)(t,o,n,r);console.log("[API Response] POST /call_api_add_new_contract_item ",s),"Success"==s.result?E("Invite successfully forwarded"):E("Something went wrong, so sorry.."),console.log("_contracts =",y);let a=await (0,c.fo)(s.contractId,r);y.push(a),console.log("_contracts =",y),console.log("invitationsTable =",T);let i=T.filter(e=>e!==T[k]);console.log("_invitationsTable =",i),N(i)}function z(e){let{cacheText:t,isReadOnly:r}=e;return(0,n.jsx)("textArea",{autofocus:!0,style:{width:"80%",height:"80%"},id:"contractTextId",className:"input-field",readOnly:r,children:t})}async function U(e,t,n){console.log("Updating user sign on contract with index ",t),console.log("contracts[index] = ",y[t]),console.log("contracts_[index] = ",y[t]),y[t].signs[n].sign=e.target.checked;let o=y[t].contractId,s=await (0,c.NM)(o,n,e.target.checked,r);console.log("[API Response] POST /update_sign ",s),"Success"==s.result?(j(!v),b(y),E("Contract signed!")):E("Something went wrong, so sorry.."),I(!0),setTimeout(async()=>{I(!1)},1e3)}(0,o.useEffect)(()=>{console.log("[useEffect] invitationsTable: ",T)},[T]),(0,o.useEffect)(()=>{if(console.log("[useEffect(contracts, poolUsers)]"),0==y.length){N(i.filter(e=>e!==t));return}if(void 0!==t){let e,r;console.log("contracts = ",y),w(y[h].contract.text);let n=(e=y.map(e=>e.partyA),r=y.map(e=>e.partyB),i.filter(t=>!e.includes(t)).filter(e=>!r.includes(e))),o=n.filter(e=>e!==t);console.log("__invitationsTable = ",o),N(o)}else console.log("user is undefined!")},[y,i]),(0,o.useEffect)(()=>{(async function(){if(void 0!==t){let e=await (0,c.P3)(t,r);console.log("contracts = ",e),b(e);let n=await (0,c.Sq)(r);console.log("poolusers = ",n),g(n)}else console.log("user is undefined!")})()},[t]);let G=e=>{p(e),w(y[e].contract.text)},M=e=>{C(e)};function H(e){let r=e.partyA!==t?e.partyA:e.partyB;return console.log("Partner is: ",r),r}function q(e){let{selectedRow:r,contracts:o,anySignChanged:s}=e;return(0,n.jsxs)("table",{id:"ID_YourContractsTable",className:"border-separate border-spacing-2 border border-slate-500",style:{width:"100%",height:"80%",overflowX:"auto",overflowY:"auto"},children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"border border-violet-600",children:[(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner sign"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Your sign"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Preview"})]})}),(0,n.jsx)("tbody",{children:o.map((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"cursor-pointer ".concat(r===s?"border border-gray-400 px-4 py-2 text-center bg-blue-200":"border border-gray-400 px-4 py-2 text-center"),onClick:()=>G(s),children:H(e)}),(0,n.jsx)("td",{className:"flex border border-gray-400 px-4 py-2",style:{height:"100%",justifyContent:"center"},children:(0,n.jsx)("label",{className:"relative inline-flex items-center",style:{justifyContent:"center"},children:(0,n.jsx)("img",{src:function(e,t){let r=H(e[t]),n=e[t].signs[r].sign;return(console.log("isChecked? ",n),!0==n)?"./checked.svg":"./Cross_red_circle.svg"}(o,s),alt:"checked",style:{width:"44px",height:"44px"}})})}),(0,n.jsx)("td",{className:"border border-gray-400 px-4 py-2 text-center",children:(0,n.jsx)("label",{className:"relative inline-flex items-center cursor-pointer",children:(0,n.jsx)("input",{type:"checkbox",checked:function(e,r){let n=e[r].signs[t].sign;return console.log("isCheckedByUser? ",n),n}(o,s),className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600",onChange:e=>U(e,s,t)})})},o[s].contractId),(0,n.jsx)("td",{className:"border border-gray-400 px-4 py-2",children:(0,n.jsx)(a(),{href:{pathname:"/Redfered",query:{id:o[r].contractId}},passHref:!0,children:(0,n.jsx)("a",{className:"relative flex items-center",style:{justifyContent:"center"},children:(0,n.jsx)("img",{src:"./text.svg",alt:"Clickable Icon",style:{width:"25px",height:"25px",cursor:"pointer"}})})})})]},s))})]})}function J(e){let{selectedRowInvite:t,invitationsTable:r}=e;return(0,n.jsxs)("table",{id:"ID_InviteTable",className:"border border-purple-400",style:{width:"100%",height:"80%",overflowX:"auto",overflowY:"auto"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{className:"border border-violet-600",children:(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner"})})}),(0,n.jsx)("tbody",{children:r.map((e,r)=>(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"cursor-pointer ".concat(t===r?"border border-gray-400 px-4 py-2 text-center bg-blue-200":"border border-gray-400 px-4 py-2 text-center"),onClick:()=>M(r),children:e})},r))})]})}return(0,n.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"column",height:"100%",width:"100%",alignItems:"center"},children:[(0,n.jsx)("div",{style:{position:"relative",display:"flex",flex:1,flexGrow:1,width:"40%",height:"15%",justifyContent:"center",alignItems:"center",borderBottom:"3px solid #8a00ff"},children:(0,n.jsx)("img",{src:"./Redfered-7-9-2024.png",style:{height:"90%"}})}),(0,n.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"row",padding:"4",width:"100%",justifyContent:"space-between"},children:[(0,n.jsx)(x,{user:t,id_token:s}),(0,n.jsx)(u,{isVisible:S,text:_})]}),(0,n.jsxs)("div",{class:"inline-flex rounded-md shadow-sm",role:"group",children:[(0,n.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",onClick:()=>R("YourContracts"),children:"Your Contracts"}),(0,n.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",onClick:()=>R("Invite"),children:"Send invitation"})]}),(0,n.jsx)(function(e){let{selectedRow:t,contracts:r,isVisible:s,cacheText:a,anySignChanged:i}=e;if(!s)return null;let[l,c]=(0,o.useState)(!0);return(0,n.jsxs)("div",{className:"divide-x divide-dashed",style:{position:"relative",display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",height:"70%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)("div",{style:{flex:1,overflowX:"auto",overflowY:"auto",width:"100%",height:"80%",alignItems:"center"},children:(0,n.jsx)(q,{selectedRow:t,contracts:r,anySignChanged:i})}),(0,n.jsxs)("div",{style:{display:"flex",flex:1,flexDirection:"row",width:"80%",height:"80%"},children:[(0,n.jsxs)("form",{onSubmit:O,className:"space-y-4",style:{display:"flex",flex:1,flexDirection:"column",width:"80%",height:"100%",alignItems:"center"},children:[(0,n.jsx)(z,{id:"textfieldid",cacheText:a,isReadOnly:l,style:{flex:1}}),(0,n.jsx)("button",{type:"submit",disabled:l,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Save"})]}),(0,n.jsx)("button",{className:"flex focus:outline-none focus:shadow-outline",onClick:()=>{c(!l)},children:(0,n.jsx)("img",{src:"./edit.svg",alt:"Clickable Icon",style:{width:"25px",height:"25px",cursor:"pointer"}})})]})]})},{selectedRow:h,contracts:y,isVisible:"YourContracts"==B,cacheText:m,anySignChanged:v}),(0,n.jsx)(function(e){let{selectedRowInvite:t,invitationsTable:r,isVisible:o}=e;return o?(0,n.jsxs)("div",{style:{position:"relative",display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",height:"70%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)("div",{style:{flex:1,overflowX:"auto",overflowY:"auto",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(J,{selectedRowInvite:t,invitationsTable:r})}),(0,n.jsx)("div",{style:{display:"flex",flex:1,flexDirection:"row",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("form",{onSubmit:P,className:"space-y-4",style:{display:"flex",flex:1,flexDirection:"column",width:"80%",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)(z,{id:"invite-text-id",style:{flex:1}}),(0,n.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Save"})]})})]}):null},{selectedRowInvite:k,invitationsTable:T,isVisible:"Invite"==B})]})}}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=7666)}),_N_E=e.O()}]);