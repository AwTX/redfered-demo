(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{6485:function(e){function makeError(){return new DOMException("The request is not allowed","NotAllowedError")}async function copyClipboardApi(e){if(!navigator.clipboard)throw makeError();return navigator.clipboard.writeText(e)}async function copyExecCommand(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let r=window.getSelection(),n=window.document.createRange();r.removeAllRanges(),n.selectNode(t),r.addRange(n);let o=!1;try{o=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(t)}if(!o)throw makeError()}async function clipboardCopy(e){try{await copyClipboardApi(e)}catch(t){try{await copyExecCommand(e)}catch(e){throw e||t||makeError()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=clipboardCopy},7666:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mgmt",function(){return r(5707)}])},892:function(e,t,r){"use strict";r.d(t,{$g:function(){return call_api_get_api_secret},EE:function(){return call_api_add_new_contract_item},JT:function(){return call_api_update_contract_text},KJ:function(){return call_api_is_first_login},NM:function(){return call_api_update_sign},P3:function(){return call_api_get_user_contracts},Sq:function(){return call_api_pool_users},dV:function(){return call_api_get_img_url},fo:function(){return call_api_get_contract},gk:function(){return call_api_submitInvitationCode}});var n=r(1002);async function call_api_submitInvitationCode(e){let t=await fetch(n.T5+"/invitationcode?code="+e),r=await t.json();return r}async function call_api_pool_users(e){let t=await fetch(n.T5+"/pool_users",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await t.json(),o=r.users;return o}async function call_api_get_contract(e,t){let r=await fetch(n.T5+"/contract?contractId="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.contract}async function call_api_get_user_contracts(e,t){let r=await fetch(n.T5+"/user_contracts",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.contracts}async function call_api_get_img_url(e,t){let r=await fetch(n.T5+"/img_url",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await r.json();return o.img_url}async function call_api_is_first_login(e){let t=await fetch(n.T5+"/is_first_login",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await t.json();return r.is_first_login}async function call_api_get_api_secret(e){let t=await fetch(n.T5+"/apisecret",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await t.json();return r.API_SECRET}async function call_api_add_new_contract_item(e,t,r,o){let a=await fetch(n.T5+"/add_new_contract_item",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({partyA:e,partyB:t,text:r})}),l=await a.json();return l}async function call_api_update_sign(e,t,r,o){let a=await fetch(n.T5+"/update_sign",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({contractId:e,sign:r})}),l=await a.json();return l}async function call_api_update_contract_text(e,t,r,o){let a=await fetch(n.T5+"/update_contract_text",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({contractId:e,text:t})}),l=await a.json();return l}},1002:function(e,t,r){"use strict";r.d(t,{Mr:function(){return a},Rf:function(){return o},T5:function(){return n}});let n="https://bs1a7ie37i.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_AfZKtqHom",a="1bshmkjde5rb1011amu8d0996i"},5707:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ContractsPage}});var n=r(5893),o=r(7294),a=r(1664),l=r.n(a),i=r(6808),s=r.n(i),c=r(892),d=r(1163);function ToastSuccess(e){let{isVisible:t,text:r}=e;return t?(0,n.jsxs)("div",{id:"toast-success",class:"flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",role:"alert",children:[(0,n.jsxs)("div",{class:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200",children:[(0,n.jsx)("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})}),(0,n.jsx)("span",{class:"sr-only",children:"Check icon"})]}),(0,n.jsx)("div",{class:"ms-3 text-sm font-normal",children:r})]}):null}var u=r(1002),g=r(6485),h=r.n(g),CopyToClipboard=e=>{let{text:t}=e,[r,a]=(0,o.useState)(!1),handleCopyClick=async()=>{try{await h()(t),a(!0)}catch(e){console.error("Failed to copy text to clipboard",e)}};return(0,n.jsx)("div",{children:(0,n.jsxs)("button",{onClick:handleCopyClick,class:"absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center",children:[(0,n.jsx)("span",{id:"default-icon-course-url",children:(0,n.jsx)("svg",{class:"w-3.5 h-3.5",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 20",children:(0,n.jsx)("path",{d:"M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"})})}),(0,n.jsx)("span",{id:"success-icon-course-url",class:"hidden inline-flex items-center",children:(0,n.jsx)("svg",{class:"w-3.5 h-3.5 text-blue-700 dark:text-blue-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:(0,n.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]})})};function PluginCode(e){let{plugin_code:t,clicked:r}=e;return null==t||""==t?null:(console.log("Here is the plugin_code: ",t),(0,o.useEffect)(()=>{console.log("refreshing due to new plugin_code")},[t,r]),(0,n.jsx)("div",{id:"course-modal",class:"\n            ".concat(!0==r?"z-10 w-full align-items-center border-blue-500 overflow-y-auto overflow-x-hidden justify-center items-center h-[calc(100%-1rem)]":"z-10 w-full align-items-center border-blue-500 overflow-y-auto overflow-x-hidden justify-center items-center h-[calc(100%-1rem)] hidden","\n      "),children:(0,n.jsx)("div",{class:"relative p-4 w-full max-h-full",children:(0,n.jsxs)("div",{class:"relative bg-white rounded-lg shadow dark:bg-gray-800",children:[(0,n.jsx)("div",{class:"flex items-center justify-between p-4 md:p-5",children:(0,n.jsx)("h3",{class:"text-lg text-gray-500 dark:text-gray-400",children:"Redfered API Secret"})}),(0,n.jsxs)("div",{class:"px-4 pb-4 md:px-5 md:pb-5",children:[(0,n.jsx)("label",{for:"course-url",class:"text-sm font-medium text-gray-900 dark:text-white mb-2 block",children:"Important: Back up this secret in a secure location. You will not be able to recover it later."}),(0,n.jsxs)("div",{class:"relative mb-4",children:[(0,n.jsx)("label",{id:"course-url",class:"col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",children:"****************************************************************"}),(0,n.jsx)(CopyToClipboard,{text:t})]})]})]})})}))}var f=r(7167);function Avatar(e){let{user:t,access_token:r,id_token:a,first_login:l}=e,[i,s]=(0,o.useState)(!1),[g,h]=(0,o.useState)(!1),[x,p]=(0,o.useState)(!1),[y,m]=(0,o.useState)(null),[b,w]=(0,o.useState)(null),v=(0,o.useRef)(null),j=(0,d.useRouter)();async function upload_image(){if(0!=v.current.files.length){var e=v.current.files[0].name,n=v.current.files[0],o=new FileReader;o.onload=function(){var n={};n.filename=e,n.user=t;var a=o.result.split(";base64,")[1];n.imageAsBase64String=a,n.metadata={"Content-Type":"image/png"};var l=new XMLHttpRequest;l.open("POST",u.T5+"/img",!0),l.setRequestHeader("Content-Type","application/json"),l.setRequestHeader("Authorization","Bearer "+r),l.onreadystatechange=function(){if(l.readyState===XMLHttpRequest.DONE&&200===l.status){var e=JSON.parse(l.responseText);"Success"==e.result?m(e.img_url):console.log("failed to upload")}},l.send(JSON.stringify(n))},o.readAsDataURL(n)}}async function signOut(){console.log("Inside sign out");let e={UserPoolId:u.Rf,ClientId:u.Mr},r=new f.AM(e);new f.ws({Username:t,Pool:r}),j.push("/signin")}return(0,o.useEffect)(()=>{(async function(){if(null!=t&&null!=a&&x){let e=await (0,c.$g)(r);console.log("Here is the API SECRET: ",e),w(e)}})()},[x]),(0,o.useEffect)(()=>{(async function(){if(null!=t&&null==y){let e=await (0,c.dV)(t,r);null!=e&&""!=e&&(console.log("myImage = ",e),m(e))}})()},[t]),(0,o.useEffect)(()=>{console.log("useEffect on imageSrc")},[y]),(0,n.jsxs)("div",{style:{padding:"10px"},children:[(0,n.jsx)("img",{id:"avatarButton",type:"button","data-dropdown-toggle":"userDropdown","data-dropdown-placement":"bottom-start",className:"flex items-center w-full max-w-xs rounded-full cursor-pointer border-2 border-blue-200 p-2 shadow-lg transition hover:duration-350 hover:scale-125 ",style:{maxWidth:"128px",maxHeight:"128px"},src:null==y?"./your-logo-here-placeholder-symbol-vector-25817794.png":y,onClick:()=>{s(e=>!e)},alt:"User dropdown"}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,n.jsxs)("div",{id:"userDropdown",className:i?"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600":"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",children:[(0,n.jsx)("div",{className:"px-4 py-3 text-sm text-gray-900 dark:text-white",children:(0,n.jsx)("div",{children:t})}),(0,n.jsx)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"avatarButton",children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:()=>{h(e=>!e)},className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer",children:"Change logo"})})}),l?null:(0,n.jsx)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"avatarButton",children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:()=>{p(e=>!e),console.log("showPluginCode is ",x)},className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer",children:"Get API Secret"})})}),(0,n.jsx)("div",{className:"py-1",children:(0,n.jsx)("button",{onClick:signOut,className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Sign out"})})]}),(0,n.jsx)("div",{className:i&g?"flex items-center justify-center w-full":"flex items-center justify-center w-full hidden",children:(0,n.jsxs)("div",{id:"div-MyLogo",className:"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 flex flex-col space-y-4",children:[(0,n.jsx)("input",{className:"text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"upload_file",type:"file",ref:v}),(0,n.jsx)("button",{type:"button",className:"bg-purple-600 text-white hover:bg-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center",onClick:upload_image,children:"Upload logo"})]})}),(0,n.jsx)("div",{style:{position:"relative",display:"flex",flexDirection:"column",height:"100%",width:"100%",alignItems:"left"},children:(0,n.jsx)(PluginCode,{plugin_code:b,clicked:x})})]})]})}function documentIsNull(){return null==document?(console.log("document null"),!0):null==document.getElementById("contractTextId")?(console.log('document.getElementById("contractTextId") null'),!0):null==document.getElementById("contractTextId").value&&(console.log('document.getElementById("contractTextId").value null'),!0)}function ContractsPage(){let e=(0,d.useRouter)(),t=e.query.user,r=s().get("accessToken"),a=s().get("idToken"),[i,u]=(0,o.useState)([]),[g,h]=(0,o.useState)(0),[f,x]=(0,o.useState)([]),[p,y]=(0,o.useState)(""),[m,b]=(0,o.useState)(!0),[w,v]=(0,o.useState)(0),[j,_]=(0,o.useState)([]),[k,C]=(0,o.useState)(!1),[T,I]=(0,o.useState)(""),[S,N]=(0,o.useState)("YourContracts"),[E,A]=(0,o.useState)(!1),[R,P]=(0,o.useState)(!1);async function handleSubmit(e){if(e.preventDefault(),documentIsNull())return;let n=document.getElementById("contractTextId").value,o=f[g].contractId,a=await (0,c.JT)(o,n,t,r);"Success"==a.result&&(f[g].contract.text=n,x(f),I("Invite successfully forwarded"),C(!0),setTimeout(async()=>{C(!1)},700)),console.log("[API Response] /update_contract_text returned: ",a)}async function handleInvite(e){if(e.preventDefault(),documentIsNull())return;let n=document.getElementById("contractTextId").value;console.log("[DEBUG] selectedRowInvite: ",w),console.log("[DEBUG] invitationsTable[selectedRowInvite]: ",j[w]);let o=j[w],a=await (0,c.EE)(t,o,n,r);console.log("[API Response] POST /call_api_add_new_contract_item ",a),"Success"==a.result?I("Invite successfully forwarded"):I("Something went wrong, so sorry.."),console.log("_contracts =",f);let l=await (0,c.fo)(a.contractId,r);f.push(l),console.log("_contracts =",f),console.log("invitationsTable =",j);let i=j.filter(e=>e!==j[w]);console.log("_invitationsTable =",i),_(i)}function TextField(e){let{cacheText:t,isReadOnly:r}=e;return(0,n.jsx)("textArea",{autofocus:!0,style:{width:"80%",height:"80%"},id:"contractTextId",className:"input-field",readOnly:r,children:t})}async function update_sign(e,t,n){console.log("Updating user sign on contract with index ",t),console.log("contracts[index] = ",f[t]),console.log("contracts_[index] = ",f[t]),f[t].signs[n].sign=e.target.checked;let o=f[t].contractId,a=await (0,c.NM)(o,n,e.target.checked,r);console.log("[API Response] POST /update_sign ",a),"Success"==a.result?(b(!m),x(f),I("Contract signed!")):I("Something went wrong, so sorry.."),C(!0),setTimeout(async()=>{C(!1)},1e3)}(0,o.useEffect)(()=>{console.log("[useEffect] invitationsTable: ",j)},[j]),(0,o.useEffect)(()=>{if(console.log("[useEffect(contracts, poolUsers)]"),0==f.length){_(i.filter(e=>e!==t));return}if(void 0!==t){let e,r;console.log("contracts = ",f),y(f[g].contract.text);let n=(e=f.map(e=>e.partyA),r=f.map(e=>e.partyB),i.filter(t=>!e.includes(t)).filter(e=>!r.includes(e))),o=n.filter(e=>e!==t);console.log("__invitationsTable = ",o),_(o)}else console.log("user is undefined!")},[f,i]),(0,o.useEffect)(()=>{(async function(){if(void 0!==t){let e=await (0,c.P3)(t,r);console.log("contracts = ",e),x(e);let n=await (0,c.KJ)(r);P(n),console.log("Was it the first login? ",n);let o=await (0,c.Sq)(r);console.log("poolusers = ",o),u(o)}else console.log("user is undefined!")})()},[t]);let handleRowClick=e=>{h(e),y(f[e].contract.text)},handleRowInviteClick=e=>{v(e)};function getPartnerName(e){let r=e.partyA!==t?e.partyA:e.partyB;return console.log("Partner is: ",r),r}function YourContractsTable(e){let{selectedRow:r,contracts:o,anySignChanged:a}=e;return(0,n.jsxs)("table",{id:"ID_YourContractsTable",className:"border-separate border-spacing-2 border border-slate-500",style:{width:"100%",height:"80%",overflowX:"auto",overflowY:"auto"},children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"border border-violet-600",children:[(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner sign"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Your sign"}),(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Preview"})]})}),(0,n.jsx)("tbody",{children:o.map((e,a)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"cursor-pointer ".concat(r===a?"border border-gray-400 px-4 py-2 text-center bg-blue-200":"border border-gray-400 px-4 py-2 text-center"),onClick:()=>handleRowClick(a),children:getPartnerName(e)}),(0,n.jsx)("td",{className:"flex border border-gray-400 px-4 py-2",style:{height:"100%",justifyContent:"center"},children:(0,n.jsx)("label",{className:"relative inline-flex items-center",style:{justifyContent:"center"},children:(0,n.jsx)("img",{src:function(e,t){let r=getPartnerName(e[t]),n=e[t].signs[r].sign;return(console.log("isChecked? ",n),!0==n)?"./checked.svg":"./Cross_red_circle.svg"}(o,a),alt:"checked",style:{width:"44px",height:"44px"}})})}),(0,n.jsx)("td",{className:"border border-gray-400 px-4 py-2 text-center",children:(0,n.jsx)("label",{className:"relative inline-flex items-center cursor-pointer",children:(0,n.jsx)("input",{type:"checkbox",checked:function(e,r){let n=e[r].signs[t].sign;return console.log("isCheckedByUser? ",n),n}(o,a),className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600",onChange:e=>update_sign(e,a,t)})})},o[a].contractId),(0,n.jsx)("td",{className:"border border-gray-400 px-4 py-2",children:(0,n.jsx)(l(),{href:{pathname:"/Redfered",query:{id:o[r].contractId}},passHref:!0,children:(0,n.jsx)("a",{className:"relative flex items-center",style:{justifyContent:"center"},children:(0,n.jsx)("img",{src:"./text.svg",alt:"Clickable Icon",style:{width:"25px",height:"25px",cursor:"pointer"}})})})})]},a))})]})}function InviteTable(e){let{selectedRowInvite:t,invitationsTable:r}=e;return(0,n.jsxs)("table",{id:"ID_InviteTable",className:"border border-purple-400",style:{width:"100%",height:"80%",overflowX:"auto",overflowY:"auto"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{className:"border border-violet-600",children:(0,n.jsx)("th",{className:"border border-gray-400 px-4 py-2",children:"Partner"})})}),(0,n.jsx)("tbody",{children:r.map((e,r)=>(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"cursor-pointer ".concat(t===r?"border border-gray-400 px-4 py-2 text-center bg-blue-200":"border border-gray-400 px-4 py-2 text-center"),onClick:()=>handleRowInviteClick(r),children:e})},r))})]})}return(0,n.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"column",height:"100%",width:"100%",alignItems:"center"},children:[(0,n.jsx)("div",{style:{position:"relative",display:"flex",flex:1,flexGrow:1,width:"40%",height:"15%",justifyContent:"center",alignItems:"center",borderBottom:"3px solid #8a00ff"},children:(0,n.jsx)("img",{src:"./Redfered-7-9-2024.png",style:{height:"90%"}})}),(0,n.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"row",padding:"4",width:"100%",justifyContent:"space-between"},children:[(0,n.jsx)(Avatar,{user:t,access_token:r,id_token:a,first_login:R}),(0,n.jsx)(ToastSuccess,{isVisible:k,text:T})]}),(0,n.jsxs)("div",{class:"inline-flex rounded-md shadow-sm",role:"group",children:[(0,n.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",onClick:()=>N("YourContracts"),children:"Your Contracts"}),(0,n.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",onClick:()=>N("Invite"),children:"Send invitation"})]}),(0,n.jsx)(function(e){let{selectedRow:t,contracts:r,isVisible:a,cacheText:l,anySignChanged:i}=e;if(!a)return null;let[s,c]=(0,o.useState)(!0);return(0,n.jsxs)("div",{className:"divide-x divide-dashed",style:{position:"relative",display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",height:"70%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)("div",{style:{flex:1,overflowX:"auto",overflowY:"auto",width:"100%",height:"80%",alignItems:"center"},children:(0,n.jsx)(YourContractsTable,{selectedRow:t,contracts:r,anySignChanged:i})}),(0,n.jsxs)("div",{style:{display:"flex",flex:1,flexDirection:"row",width:"80%",height:"80%"},children:[(0,n.jsxs)("form",{onSubmit:handleSubmit,className:"space-y-4",style:{display:"flex",flex:1,flexDirection:"column",width:"80%",height:"100%",alignItems:"center"},children:[(0,n.jsx)(TextField,{id:"textfieldid",cacheText:l,isReadOnly:s,style:{flex:1}}),(0,n.jsx)("button",{type:"submit",disabled:s,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Save"})]}),(0,n.jsx)("button",{className:"flex focus:outline-none focus:shadow-outline",onClick:()=>{c(!s)},children:(0,n.jsx)("img",{src:"./edit.svg",alt:"Clickable Icon",style:{width:"25px",height:"25px",cursor:"pointer"}})})]})]})},{selectedRow:g,contracts:f,isVisible:"YourContracts"==S,cacheText:p,anySignChanged:m}),(0,n.jsx)(function(e){let{selectedRowInvite:t,invitationsTable:r,isVisible:o}=e;return o?(0,n.jsxs)("div",{style:{position:"relative",display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",height:"70%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)("div",{style:{flex:1,overflowX:"auto",overflowY:"auto",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(InviteTable,{selectedRowInvite:t,invitationsTable:r})}),(0,n.jsx)("div",{style:{display:"flex",flex:1,flexDirection:"row",padding:"20px",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("form",{onSubmit:handleInvite,className:"space-y-4",style:{display:"flex",flex:1,flexDirection:"column",width:"80%",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)(TextField,{id:"invite-text-id",style:{flex:1}}),(0,n.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Save"})]})})]}):null},{selectedRowInvite:w,invitationsTable:j,isVisible:"Invite"==S})]})}},6249:function(){}},function(e){e.O(0,[690,167,664,774,888,179],function(){return e(e.s=7666)}),_N_E=e.O()}]);