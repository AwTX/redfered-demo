(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{6808:function(e,t,r){var n,o,s;void 0!==(o="function"==typeof(n=s=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function s(t,r,s){if("undefined"!=typeof document){"number"==typeof(s=e({path:"/"},o.defaults,s)).expires&&(s.expires=new Date(new Date*1+864e5*s.expires)),s.expires=s.expires?s.expires.toUTCString():"";try{var i=JSON.stringify(r);/^[\{\[]/.test(i)&&(r=i)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var l in s)s[l]&&(a+="; "+l,!0!==s[l]&&(a+="="+s[l].split(";")[0]));return document.cookie=t+"="+r+a}}function i(e,r){if("undefined"!=typeof document){for(var o={},s=document.cookie?document.cookie.split("; "):[],i=0;i<s.length;i++){var a=s[i].split("="),l=a.slice(1).join("=");r||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var c=t(a[0]);if(l=(n.read||n)(l,c)||t(l),r)try{l=JSON.parse(l)}catch(e){}if(o[c]=l,e===c)break}catch(e){}}return e?o[e]:o}}return o.set=s,o.get=function(e){return i(e,!1)},o.getJSON=function(e){return i(e,!0)},o.remove=function(t,r){s(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}(function(){})})?n.call(t,r,t,e):n)&&(e.exports=o),e.exports=s()},7666:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mgmt",function(){return r(2539)}])},6451:function(e,t,r){"use strict";r.d(t,{EE:function(){return c},JT:function(){return u},NM:function(){return d},P3:function(){return a},Sq:function(){return s},dV:function(){return l},fo:function(){return i},gk:function(){return o}});var n=r(6567);async function o(e){let t=await fetch(n.T5+"/invitationcode?code="+e),r=await t.json();return r}async function s(e){let t=await fetch(n.T5+"/pool_users",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await t.json(),o=r.users;return o}async function i(e,t){let r=await fetch(n.T5+"/contract?contractId="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.contract}async function a(e,t){let r=await fetch(n.T5+"/user_contracts?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.contracts}async function l(e,t){let r=await fetch(n.T5+"/img_url?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.img_url}async function c(e,t,r,o){let s=await fetch(n.T5+"/add_new_contract_item",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({partyA:e,partyB:t,text:r})}),i=await s.json();return i}async function d(e,t,r,o){let s=await fetch(n.T5+"/update_sign",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({contractId:e,user:t,sign:r})}),i=await s.json();return i}async function u(e,t,r,o){let s=await fetch(n.T5+"/update_contract_text",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({contractId:e,text:t,user:r})}),i=await s.json();return i}},6567:function(e,t,r){"use strict";r.d(t,{Mr:function(){return s},Rf:function(){return o},T5:function(){return n}});let n="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_0xawMsGty",s="7b30d5nqk0gech4bec45dchalf"},2539:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(5893),o=r(7294),s=r(1664),i=r.n(s),a=r(6808),l=r.n(a),c=r(6451),d=r(1163);function u(e){let{isVisible:t,text:r}=e;return t?(0,n.jsxs)("div",{id:"toast-success",class:"flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",role:"alert",children:[(0,n.jsxs)("div",{class:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200",children:[(0,n.jsx)("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})}),(0,n.jsx)("span",{class:"sr-only",children:"Check icon"})]}),(0,n.jsx)("div",{class:"ms-3 text-sm font-normal",children:r})]}):null}var f=r(6567);function g(e){let{user:t,access_token:r}=e,[s,i]=(0,o.useState)(!1),[a,l]=(0,o.useState)(!1),[d,u]=(0,o.useState)(null),g=(0,o.useRef)(null);async function h(){if(0!=g.current.files.length){var e=g.current.files[0].name,n=g.current.files[0],o=new FileReader;o.onload=function(){var n={};n.filename=e,n.user=t;var s=o.result.split(";base64,")[1];n.imageAsBase64String=s,n.metadata={"Content-Type":"image/png"};var i=new XMLHttpRequest;i.open("POST",f.T5+"/img",!0),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Authorization","Bearer "+r),i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE&&200===i.status){var e=JSON.parse(i.responseText);"Success"==e.result?u(e.img_url):console.log("failed to upload")}},i.send(JSON.stringify(n))},o.readAsDataURL(n)}}return(0,o.useEffect)(()=>{(async function(){if(null!=t&&null==d){let e=await (0,c.dV)(t,r);u(e)}})()},[t]),(0,o.useEffect)(()=>{console.log("useEffect on imageSrc")},[d]),(0,n.jsxs)("div",{style:{padding:"10px"},children:[(0,n.jsx)("img",{id:"avatarButton",type:"button","data-dropdown-toggle":"userDropdown","data-dropdown-placement":"bottom-start",className:"flex items-center w-full max-w-xs rounded-full cursor-pointer border-2 border-blue-200 p-2 shadow-lg",style:{maxWidth:"128px",maxHeight:"128px"},src:d,onClick:()=>{i(e=>!e)},alt:"User dropdown"}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,n.jsxs)("div",{id:"userDropdown",className:s?"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600":"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",children:[(0,n.jsx)("div",{className:"px-4 py-3 text-sm text-gray-900 dark:text-white",children:(0,n.jsx)("div",{children:t})}),(0,n.jsx)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"avatarButton",children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:()=>{l(e=>!e)},className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer",children:"Change logo"})})}),(0,n.jsx)("div",{className:"py-1",children:(0,n.jsx)("a",{href:"https://repubblica.com",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Sign out"})})]}),(0,n.jsx)("div",{className:s&a?"flex items-center justify-center w-full":"flex items-center justify-center w-full hidden",children:(0,n.jsxs)("div",{id:"div-MyLogo",className:"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 flex flex-col space-y-4",children:[(0,n.jsx)("input",{className:"text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"upload_file",type:"file",ref:g}),(0,n.jsx)("button",{type:"button",className:"bg-purple-600 text-white hover:bg-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center",onClick:h,children:"Upload logo"})]})})]})]})}function h(){return null==document?(console.log("document null"),!0):null==document.getElementById("contractTextId")?(console.log('document.getElementById("contractTextId") null'),!0):null==document.getElementById("contractTextId").value&&(console.log('document.getElementById("contractTextId").value null'),!0)}function x(){let e=(0,d.useRouter)(),t=e.query.user,r=l().get("accessToken"),[s,a]=(0,o.useState)([]),[f,x]=(0,o.useState)(0),[p,y]=(0,o.useState)([]),[b,m]=(0,o.useState)(""),[w,v]=(0,o.useState)(!0),[j,k]=(0,o.useState)(0),[C,T]=(0,o.useState)([]),[I,N]=(0,o.useState)(!1),[S,_]=(0,o.useState)(""),[E,B]=(0,o.useState)("YourContracts");async function R(e){if(e.preventDefault(),h())return;let n=document.getElementById("contractTextId").value,o=p[f].contractId,s=await (0,c.JT)(o,n,t,r);"Success"==s.result&&(p[f].contract.text=n,y(p),_("Invite successfully forwarded"),N(!0),setTimeout(async()=>{N(!1)},700)),console.log("[API Response] /update_contract_text returned: ",s)}async function D(e){if(e.preventDefault(),h())return;let n=document.getElementById("contractTextId").value;console.log("[DEBUG] selectedRowInvite: ",j),console.log("[DEBUG] invitationsTable[selectedRowInvite]: ",C[j]);let o=C[j],s=await (0,c.EE)(t,o,n,r);console.log("[API Response] POST /call_api_add_new_contract_item ",s),"Success"==s.result?_("Invite successfully forwarded"):_("Something went wrong, so sorry.."),console.log("_contracts =",p);let i=await (0,c.fo)(s.contractId,r);p.push(i),console.log("_contracts =",p),console.log("invitationsTable =",C);let a=C.filter(e=>e!==C[j]);console.log("_invitationsTable =",a),T(a)}function A(e){let{cacheText:t,isReadOnly:r}=e;return(0,n.jsx)("textArea",{autofocus:!0,style:{width:"80%",height:"80%"},id:"contractTextId",className:"input-field",readOnly:r,children:t})}async function O(e,t,n){console.log("Updating user sign on contract with index ",t),console.log("contracts[index] = ",p[t]),console.log("contracts_[index] = ",p[t]),p[t].signs[n].sign=e.target.checked;let o=p[t].contractId,s=await (0,c.NM)(o,n,e.target.checked,r);console.log("[API Response] POST /update_sign ",s),"Success"==s.result?(v(!w),y(p),_("Contract signed!")):_("Something went wrong, so sorry.."),N(!0),setTimeout(async()=>{N(!1)},1e3)}(0,o.useEffect)(()=>{console.log("[useEffect] invitationsTable: ",C)},[C]),(0,o.useEffect)(()=>{if(console.log("[useEffect(contracts, poolUsers)]"),0==p.length){T(s.filter(e=>e!==t));return}if(void 0!==t){let e,r;console.log("contracts = ",p),m(p[f].contract.text);let n=(e=p.map(e=>e.partyA),r=p.map(e=>e.partyB),s.filter(t=>!e.includes(t)).filter(e=>!r.includes(e))),o=n.filter(e=>e!==t);console.log("__invitationsTable = ",o),T(o)}else console.log("user is undefined!")},[p,s]),(0,o.useEffect)(()=>{(async function(){if(void 0!==t){let e=await (0,c.P3)(t,r);console.log("contracts = ",e),y(e);let n=await (0,c.Sq)(r);console.log("poolusers = ",n),a(n)}else console.log("user is undefined!")})()},[t]);let P=e=>{x(e),m(p[e].contract.text)},z=e=>{k(e)};function U(e){let r=e.partyA!==t?e.partyA:e.partyB;return console.log("Partner is: ",r),r}function q(e){let{selectedRow:r,contracts:o,anySignChanged:s}=e;return(0,n.jsxs)("table",{id:"ID_YourContractsTable",className:"border border-purple-400",style:{width:"80%",height:"80%",overflowX:"auto",overflowY:"auto"},children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"border border-violet-600",children:[(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner sign"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Your sign"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Preview"})]})}),(0,n.jsx)("tbody",{children:o.map((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"cursor-pointer ".concat(r===s?"border border-gray-400 px-4 py-2 text-center bg-blue-200":"border border-gray-400 px-4 py-2 text-center"),onClick:()=>P(s),children:U(e)}),(0,n.jsx)("td",{className:"flex border border-gray-400 px-4 py-2",style:{height:"100%",justifyContent:"center"},children:(0,n.jsx)("label",{className:"relative inline-flex items-center",style:{justifyContent:"center"},children:(0,n.jsx)("img",{src:function(e,t){let r=U(e[t]),n=e[t].signs[r].sign;return(console.log("isChecked? ",n),!0==n)?"./checked.svg":"./Cross_red_circle.svg"}(o,s),alt:"checked",style:{width:"44px",height:"44px"}})})}),(0,n.jsx)("td",{className:"border border-gray-400 px-4 py-2 text-center",children:(0,n.jsx)("label",{className:"relative inline-flex items-center cursor-pointer",children:(0,n.jsx)("input",{type:"checkbox",checked:function(e,r){let n=e[r].signs[t].sign;return console.log("isCheckedByUser? ",n),n}(o,s),className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600",onChange:e=>O(e,s,t)})})},o[s].contractId),(0,n.jsx)("td",{className:"border border-gray-400 px-4 py-2",children:(0,n.jsx)(i(),{href:{pathname:"/Redfered",query:{id:o[r].contractId}},passHref:!0,children:(0,n.jsx)("a",{className:"relative flex items-center",style:{justifyContent:"center"},children:(0,n.jsx)("img",{src:"https://cdn4.iconfinder.com/data/icons/various-32x32-outline/32/share-512.png",alt:"Clickable Icon",style:{width:"25px",height:"25px",cursor:"pointer"}})})})})]},s))})]})}function G(e){let{selectedRowInvite:t,invitationsTable:r}=e;return(0,n.jsxs)("table",{id:"ID_InviteTable",className:"border border-purple-400",style:{width:"100%",height:"80%",overflowX:"auto",overflowY:"auto"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{className:"border border-violet-600",children:(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner"})})}),(0,n.jsx)("tbody",{children:r.map((e,r)=>(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"cursor-pointer ".concat(t===r?"border border-gray-400 px-4 py-2 text-center bg-blue-200":"border border-gray-400 px-4 py-2 text-center"),onClick:()=>z(r),children:e})},r))})]})}return(0,n.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"column",height:"100%",width:"100%",alignItems:"center"},children:[(0,n.jsx)("div",{style:{position:"relative",display:"flex",flex:1,flexGrow:1,width:"40%",height:"15%",justifyContent:"center",alignItems:"center",borderBottom:"3px solid #8a00ff"},children:(0,n.jsx)("img",{src:"./Redfered-7-9-2024.png",style:{height:"90%"}})}),(0,n.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"row",padding:"4",width:"100%",justifyContent:"space-between"},children:[(0,n.jsx)(g,{user:t,access_token:r}),(0,n.jsx)(u,{isVisible:I,text:S})]}),(0,n.jsxs)("div",{class:"inline-flex rounded-md shadow-sm",role:"group",children:[(0,n.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",onClick:()=>B("YourContracts"),children:"Your Contracts"}),(0,n.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",onClick:()=>B("Invite"),children:"Send invitation"})]}),(0,n.jsx)(function(e){let{selectedRow:t,contracts:r,isVisible:s,cacheText:i,anySignChanged:a}=e;if(!s)return null;let[l,c]=(0,o.useState)(!0);return(0,n.jsxs)("div",{style:{position:"relative",display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",height:"70%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)("div",{style:{flex:1,overflowX:"auto",overflowY:"auto",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(q,{selectedRow:t,contracts:r,anySignChanged:a})}),(0,n.jsxs)("div",{style:{display:"flex",flex:1,flexDirection:"row",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:()=>{c(!l)},children:"Save"}),(0,n.jsxs)("form",{onSubmit:R,className:"space-y-4",style:{display:"flex",flex:1,flexDirection:"column",width:"80%",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)(A,{id:"textfieldid",cacheText:i,isReadOnly:l,style:{flex:1}}),(0,n.jsx)("button",{type:"submit",disabled:l,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Save"})]})]})]})},{selectedRow:f,contracts:p,isVisible:"YourContracts"==E,cacheText:b,anySignChanged:w}),(0,n.jsx)(function(e){let{selectedRowInvite:t,invitationsTable:r,isVisible:o}=e;return o?(0,n.jsxs)("div",{style:{position:"relative",display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",height:"70%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)("div",{style:{flex:1,overflowX:"auto",overflowY:"auto",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(G,{selectedRowInvite:t,invitationsTable:r})}),(0,n.jsx)("div",{style:{display:"flex",flex:1,flexDirection:"row",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("form",{onSubmit:D,className:"space-y-4",style:{display:"flex",flex:1,flexDirection:"column",width:"80%",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)(A,{id:"invite-text-id",style:{flex:1}}),(0,n.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",style:{width:"10%",height:"10%"},children:"Save"})]})})]}):null},{selectedRowInvite:j,invitationsTable:C,isVisible:"Invite"==E})]})}}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=7666)}),_N_E=e.O()}]);