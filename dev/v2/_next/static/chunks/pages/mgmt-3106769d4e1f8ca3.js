(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{6485:function(e){function t(){return new DOMException("The request is not allowed","NotAllowedError")}async function r(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}async function n(e){let r=document.createElement("span");r.textContent=e,r.style.whiteSpace="pre",r.style.webkitUserSelect="auto",r.style.userSelect="all",document.body.appendChild(r);let n=window.getSelection(),o=window.document.createRange();n.removeAllRanges(),o.selectNode(r),n.addRange(o);let s=!1;try{s=window.document.execCommand("copy")}finally{n.removeAllRanges(),window.document.body.removeChild(r)}if(!s)throw t()}async function o(e){try{await r(e)}catch(r){try{await n(e)}catch(e){throw e||r||t()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=o},7666:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mgmt",function(){return r(810)}])},6451:function(e,t,r){"use strict";r.d(t,{$g:function(){return d},EE:function(){return u},JT:function(){return g},KJ:function(){return c},NM:function(){return h},P3:function(){return l},Sq:function(){return s},dV:function(){return i},fo:function(){return a},gk:function(){return o}});var n=r(6567);async function o(e){let t=await fetch(n.T5+"/invitationcode?code="+e),r=await t.json();return r}async function s(e){let t=await fetch(n.T5+"/pool_users",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await t.json(),o=r.users;return o}async function a(e,t){let r=await fetch(n.T5+"/contract?contractId="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.contract}async function l(e,t){let r=await fetch(n.T5+"/user_contracts?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.contracts}async function i(e,t){let r=await fetch(n.T5+"/img_url?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.img_url}async function c(e){let t=await fetch(n.T5+"/is_first_login",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await t.json();return r.is_first_login}async function d(e){let t=await fetch(n.T5+"/apisecret",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await t.json();return r.API_SECRET}async function u(e,t,r,o){let s=await fetch(n.T5+"/add_new_contract_item",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({partyA:e,partyB:t,text:r})}),a=await s.json();return a}async function h(e,t,r,o){let s=await fetch(n.T5+"/update_sign",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({contractId:e,user:t,sign:r})}),a=await s.json();return a}async function g(e,t,r,o){let s=await fetch(n.T5+"/update_contract_text",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({contractId:e,text:t,user:r})}),a=await s.json();return a}},6567:function(e,t,r){"use strict";r.d(t,{Mr:function(){return s},Rf:function(){return o},T5:function(){return n}});let n="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_0xawMsGty",s="7b30d5nqk0gech4bec45dchalf"},810:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(5893),o=r(7294),s=r(1664),a=r.n(s),l=r(6808),i=r.n(l),c=r(6451),d=r(1163);function u(e){let{isVisible:t,text:r}=e;return t?(0,n.jsxs)("div",{id:"toast-success",class:"flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",role:"alert",children:[(0,n.jsxs)("div",{class:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200",children:[(0,n.jsx)("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})}),(0,n.jsx)("span",{class:"sr-only",children:"Check icon"})]}),(0,n.jsx)("div",{class:"ms-3 text-sm font-normal",children:r})]}):null}var h=r(6567),g=r(6485),f=r.n(g),x=e=>{let{text:t}=e,[r,s]=(0,o.useState)(!1),a=async()=>{try{await f()(t),s(!0)}catch(e){console.error("Failed to copy text to clipboard",e)}};return(0,n.jsx)("div",{children:(0,n.jsxs)("button",{onClick:a,class:"absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center",children:[(0,n.jsx)("span",{id:"default-icon-course-url",children:(0,n.jsx)("svg",{class:"w-3.5 h-3.5",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 20",children:(0,n.jsx)("path",{d:"M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"})})}),(0,n.jsx)("span",{id:"success-icon-course-url",class:"hidden inline-flex items-center",children:(0,n.jsx)("svg",{class:"w-3.5 h-3.5 text-blue-700 dark:text-blue-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:(0,n.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]})})};function y(e){let{plugin_code:t,clicked:r}=e;return null==t||""==t?null:(console.log("Here is the plugin_code: ",t),(0,o.useEffect)(()=>{console.log("refreshing due to new plugin_code")},[t,r]),(0,n.jsx)("div",{id:"course-modal",class:"\n            ".concat(!0==r?"z-10 w-full align-items-center border-blue-500 overflow-y-auto overflow-x-hidden justify-center items-center h-[calc(100%-1rem)]":"z-10 w-full align-items-center border-blue-500 overflow-y-auto overflow-x-hidden justify-center items-center h-[calc(100%-1rem)] hidden","\n      "),children:(0,n.jsx)("div",{class:"relative p-4 w-full max-h-full",children:(0,n.jsxs)("div",{class:"relative bg-white rounded-lg shadow dark:bg-gray-800",children:[(0,n.jsx)("div",{class:"flex items-center justify-between p-4 md:p-5",children:(0,n.jsx)("h3",{class:"text-lg text-gray-500 dark:text-gray-400",children:"Redfered API Secret"})}),(0,n.jsxs)("div",{class:"px-4 pb-4 md:px-5 md:pb-5",children:[(0,n.jsx)("label",{for:"course-url",class:"text-sm font-medium text-gray-900 dark:text-white mb-2 block",children:"Important: Back up this secret in a secure location. You will not be able to recover it later."}),(0,n.jsxs)("div",{class:"relative mb-4",children:[(0,n.jsx)("label",{id:"course-url",class:"col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",children:"****************************************************************"}),(0,n.jsx)(x,{text:t})]})]})]})})}))}var p=r(7167);function b(e){let{user:t,access_token:r,id_token:s,first_login:a}=e,[l,i]=(0,o.useState)(!1),[u,g]=(0,o.useState)(!1),[f,x]=(0,o.useState)(!1),[b,m]=(0,o.useState)(null),[w,v]=(0,o.useState)(null),j=(0,o.useRef)(null),k=(0,d.useRouter)();async function T(){if(0!=j.current.files.length){var e=j.current.files[0].name,n=j.current.files[0],o=new FileReader;o.onload=function(){var n={};n.filename=e,n.user=t;var s=o.result.split(";base64,")[1];n.imageAsBase64String=s,n.metadata={"Content-Type":"image/png"};var a=new XMLHttpRequest;a.open("POST",h.T5+"/img",!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Authorization","Bearer "+r),a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){var e=JSON.parse(a.responseText);"Success"==e.result?m(e.img_url):console.log("failed to upload")}},a.send(JSON.stringify(n))},o.readAsDataURL(n)}}async function C(){console.log("Inside sign out");let e={UserPoolId:h.Rf,ClientId:h.Mr},r=new p.AM(e);new p.ws({Username:t,Pool:r}),k.push("/signin")}return(0,o.useEffect)(()=>{(async function(){if(null!=t&&null!=s&&f){let e=await (0,c.$g)(s);console.log("Here is the API SECRET: ",e),v(e)}})()},[f]),(0,o.useEffect)(()=>{(async function(){if(null!=t&&null==b){let e=await (0,c.dV)(t,r);null!=e&&""!=e&&(console.log("myImage = ",e),m(e))}})()},[t]),(0,o.useEffect)(()=>{console.log("useEffect on imageSrc")},[b]),(0,n.jsxs)("div",{style:{padding:"10px"},children:[(0,n.jsx)("img",{id:"avatarButton",type:"button","data-dropdown-toggle":"userDropdown","data-dropdown-placement":"bottom-start",className:"flex items-center w-full max-w-xs rounded-full cursor-pointer border-2 border-blue-200 p-2 shadow-lg transition hover:duration-350 hover:scale-125 ",style:{maxWidth:"128px",maxHeight:"128px"},src:null==b?"./your-logo-here-placeholder-symbol-vector-25817794.png":b,onClick:()=>{i(e=>!e)},alt:"User dropdown"}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,n.jsxs)("div",{id:"userDropdown",className:l?"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600":"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",children:[(0,n.jsx)("div",{className:"px-4 py-3 text-sm text-gray-900 dark:text-white",children:(0,n.jsx)("div",{children:t})}),(0,n.jsx)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"avatarButton",children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:()=>{g(e=>!e)},className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer",children:"Change logo"})})}),a?null:(0,n.jsx)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"avatarButton",children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:()=>{x(e=>!e),console.log("showPluginCode is ",f)},className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer",children:"Get API Secret"})})}),(0,n.jsx)("div",{className:"py-1",children:(0,n.jsx)("button",{onClick:C,className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Sign out"})})]}),(0,n.jsx)("div",{className:l&u?"flex items-center justify-center w-full":"flex items-center justify-center w-full hidden",children:(0,n.jsxs)("div",{id:"div-MyLogo",className:"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 flex flex-col space-y-4",children:[(0,n.jsx)("input",{className:"text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"upload_file",type:"file",ref:j}),(0,n.jsx)("button",{type:"button",className:"bg-purple-600 text-white hover:bg-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center",onClick:T,children:"Upload logo"})]})}),(0,n.jsx)("div",{style:{position:"relative",display:"flex",flexDirection:"column",height:"100%",width:"100%",alignItems:"left"},children:(0,n.jsx)(y,{plugin_code:w,clicked:f})})]})]})}function m(){return null==document?(console.log("document null"),!0):null==document.getElementById("contractTextId")?(console.log('document.getElementById("contractTextId") null'),!0):null==document.getElementById("contractTextId").value&&(console.log('document.getElementById("contractTextId").value null'),!0)}function w(){let e=(0,d.useRouter)(),t=e.query.user,r=i().get("accessToken"),s=i().get("idToken"),[l,h]=(0,o.useState)([]),[g,f]=(0,o.useState)(0),[x,y]=(0,o.useState)([]),[p,w]=(0,o.useState)(""),[v,j]=(0,o.useState)(!0),[k,T]=(0,o.useState)(0),[C,S]=(0,o.useState)([]),[I,_]=(0,o.useState)(!1),[N,E]=(0,o.useState)(""),[B,A]=(0,o.useState)("YourContracts"),[R,P]=(0,o.useState)(!1),[D,z]=(0,o.useState)(!1);async function O(e){if(e.preventDefault(),m())return;let n=document.getElementById("contractTextId").value,o=x[g].contractId,s=await (0,c.JT)(o,n,t,r);"Success"==s.result&&(x[g].contract.text=n,y(x),E("Invite successfully forwarded"),_(!0),setTimeout(async()=>{_(!1)},700)),console.log("[API Response] /update_contract_text returned: ",s)}async function G(e){if(e.preventDefault(),m())return;let n=document.getElementById("contractTextId").value;console.log("[DEBUG] selectedRowInvite: ",k),console.log("[DEBUG] invitationsTable[selectedRowInvite]: ",C[k]);let o=C[k],s=await (0,c.EE)(t,o,n,r);console.log("[API Response] POST /call_api_add_new_contract_item ",s),"Success"==s.result?E("Invite successfully forwarded"):E("Something went wrong, so sorry.."),console.log("_contracts =",x);let a=await (0,c.fo)(s.contractId,r);x.push(a),console.log("_contracts =",x),console.log("invitationsTable =",C);let l=C.filter(e=>e!==C[k]);console.log("_invitationsTable =",l),S(l)}function H(e){let{cacheText:t,isReadOnly:r}=e;return(0,n.jsx)("textArea",{autofocus:!0,style:{width:"80%",height:"80%"},id:"contractTextId",className:"input-field",readOnly:r,children:t})}async function M(e,t,n){console.log("Updating user sign on contract with index ",t),console.log("contracts[index] = ",x[t]),console.log("contracts_[index] = ",x[t]),x[t].signs[n].sign=e.target.checked;let o=x[t].contractId,s=await (0,c.NM)(o,n,e.target.checked,r);console.log("[API Response] POST /update_sign ",s),"Success"==s.result?(j(!v),y(x),E("Contract signed!")):E("Something went wrong, so sorry.."),_(!0),setTimeout(async()=>{_(!1)},1e3)}(0,o.useEffect)(()=>{console.log("[useEffect] invitationsTable: ",C)},[C]),(0,o.useEffect)(()=>{if(console.log("[useEffect(contracts, poolUsers)]"),0==x.length){S(l.filter(e=>e!==t));return}if(void 0!==t){let e,r;console.log("contracts = ",x),w(x[g].contract.text);let n=(e=x.map(e=>e.partyA),r=x.map(e=>e.partyB),l.filter(t=>!e.includes(t)).filter(e=>!r.includes(e))),o=n.filter(e=>e!==t);console.log("__invitationsTable = ",o),S(o)}else console.log("user is undefined!")},[x,l]),(0,o.useEffect)(()=>{(async function(){if(void 0!==t){let e=await (0,c.P3)(t,r);console.log("contracts = ",e),y(e);let n=await (0,c.KJ)(s);z(n),console.log("Was it the first login? ",n);let o=await (0,c.Sq)(s);console.log("poolusers = ",o),h(o)}else console.log("user is undefined!")})()},[t]);let q=e=>{f(e),w(x[e].contract.text)},U=e=>{T(e)};function Y(e){let r=e.partyA!==t?e.partyA:e.partyB;return console.log("Partner is: ",r),r}function J(e){let{selectedRow:r,contracts:o,anySignChanged:s}=e;return(0,n.jsxs)("table",{id:"ID_YourContractsTable",className:"border-separate border-spacing-2 border border-slate-500",style:{width:"100%",height:"80%",overflowX:"auto",overflowY:"auto"},children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"border border-violet-600",children:[(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner sign"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Your sign"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Preview"})]})}),(0,n.jsx)("tbody",{children:o.map((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"cursor-pointer ".concat(r===s?"border border-gray-400 px-4 py-2 text-center bg-blue-200":"border border-gray-400 px-4 py-2 text-center"),onClick:()=>q(s),children:Y(e)}),(0,n.jsx)("td",{className:"flex border border-gray-400 px-4 py-2",style:{height:"100%",justifyContent:"center"},children:(0,n.jsx)("label",{className:"relative inline-flex items-center",style:{justifyContent:"center"},children:(0,n.jsx)("img",{src:function(e,t){let r=Y(e[t]),n=e[t].signs[r].sign;return(console.log("isChecked? ",n),!0==n)?"./checked.svg":"./Cross_red_circle.svg"}(o,s),alt:"checked",style:{width:"44px",height:"44px"}})})}),(0,n.jsx)("td",{className:"border border-gray-400 px-4 py-2 text-center",children:(0,n.jsx)("label",{className:"relative inline-flex items-center cursor-pointer",children:(0,n.jsx)("input",{type:"checkbox",checked:function(e,r){let n=e[r].signs[t].sign;return console.log("isCheckedByUser? ",n),n}(o,s),className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600",onChange:e=>M(e,s,t)})})},o[s].contractId),(0,n.jsx)("td",{className:"border border-gray-400 px-4 py-2",children:(0,n.jsx)(a(),{href:{pathname:"/Redfered",query:{id:o[r].contractId}},passHref:!0,children:(0,n.jsx)("a",{className:"relative flex items-center",style:{justifyContent:"center"},children:(0,n.jsx)("img",{src:"./text.svg",alt:"Clickable Icon",style:{width:"25px",height:"25px",cursor:"pointer"}})})})})]},s))})]})}function X(e){let{selectedRowInvite:t,invitationsTable:r}=e;return(0,n.jsxs)("table",{id:"ID_InviteTable",className:"border border-purple-400",style:{width:"100%",height:"80%",overflowX:"auto",overflowY:"auto"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{className:"border border-violet-600",children:(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner"})})}),(0,n.jsx)("tbody",{children:r.map((e,r)=>(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"cursor-pointer ".concat(t===r?"border border-gray-400 px-4 py-2 text-center bg-blue-200":"border border-gray-400 px-4 py-2 text-center"),onClick:()=>U(r),children:e})},r))})]})}return(0,n.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"column",height:"100%",width:"100%",alignItems:"center"},children:[(0,n.jsx)("div",{style:{position:"relative",display:"flex",flex:1,flexGrow:1,width:"40%",height:"15%",justifyContent:"center",alignItems:"center",borderBottom:"3px solid #8a00ff"},children:(0,n.jsx)("img",{src:"./Redfered-7-9-2024.png",style:{height:"90%"}})}),(0,n.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"row",padding:"4",width:"100%",justifyContent:"space-between"},children:[(0,n.jsx)(b,{user:t,access_token:r,id_token:s,first_login:D}),(0,n.jsx)(u,{isVisible:I,text:N})]}),(0,n.jsxs)("div",{class:"inline-flex rounded-md shadow-sm",role:"group",children:[(0,n.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",onClick:()=>A("YourContracts"),children:"Your Contracts"}),(0,n.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",onClick:()=>A("Invite"),children:"Send invitation"})]}),(0,n.jsx)(function(e){let{selectedRow:t,contracts:r,isVisible:s,cacheText:a,anySignChanged:l}=e;if(!s)return null;let[i,c]=(0,o.useState)(!0);return(0,n.jsxs)("div",{className:"divide-x divide-dashed",style:{position:"relative",display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",height:"70%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)("div",{style:{flex:1,overflowX:"auto",overflowY:"auto",width:"100%",height:"80%",alignItems:"center"},children:(0,n.jsx)(J,{selectedRow:t,contracts:r,anySignChanged:l})}),(0,n.jsxs)("div",{style:{display:"flex",flex:1,flexDirection:"row",width:"80%",height:"80%"},children:[(0,n.jsxs)("form",{onSubmit:O,className:"space-y-4",style:{display:"flex",flex:1,flexDirection:"column",width:"80%",height:"100%",alignItems:"center"},children:[(0,n.jsx)(H,{id:"textfieldid",cacheText:a,isReadOnly:i,style:{flex:1}}),(0,n.jsx)("button",{type:"submit",disabled:i,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Save"})]}),(0,n.jsx)("button",{className:"flex focus:outline-none focus:shadow-outline",onClick:()=>{c(!i)},children:(0,n.jsx)("img",{src:"./edit.svg",alt:"Clickable Icon",style:{width:"25px",height:"25px",cursor:"pointer"}})})]})]})},{selectedRow:g,contracts:x,isVisible:"YourContracts"==B,cacheText:p,anySignChanged:v}),(0,n.jsx)(function(e){let{selectedRowInvite:t,invitationsTable:r,isVisible:o}=e;return o?(0,n.jsxs)("div",{style:{position:"relative",display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",height:"70%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)("div",{style:{flex:1,overflowX:"auto",overflowY:"auto",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(X,{selectedRowInvite:t,invitationsTable:r})}),(0,n.jsx)("div",{style:{display:"flex",flex:1,flexDirection:"row",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("form",{onSubmit:G,className:"space-y-4",style:{display:"flex",flex:1,flexDirection:"column",width:"80%",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)(H,{id:"invite-text-id",style:{flex:1}}),(0,n.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Save"})]})})]}):null},{selectedRowInvite:k,invitationsTable:C,isVisible:"Invite"==B})]})}},6249:function(){}},function(e){e.O(0,[690,167,664,774,888,179],function(){return e(e.s=7666)}),_N_E=e.O()}]);