(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9344:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return l(5968)}])},5968:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return ProfilePage}});var s=l(5893),n=l(6808),a=l.n(n),o=l(7294),i=l(6485),r=l.n(i),CopyToClipboard=e=>{let{text:t}=e,[l,n]=(0,o.useState)(!1),handleCopyClick=async()=>{try{await r()(t),n(!0)}catch(e){console.error("Failed to copy text to clipboard",e)}};return(0,s.jsx)("div",{children:(0,s.jsxs)("button",{onClick:handleCopyClick,class:"absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center",children:[(0,s.jsx)("span",{id:"default-icon-course-url",children:(0,s.jsx)("svg",{class:"w-3.5 h-3.5",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 20",children:(0,s.jsx)("path",{d:"M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"})})}),(0,s.jsx)("span",{id:"success-icon-course-url",class:"hidden inline-flex items-center",children:(0,s.jsx)("svg",{class:"w-3.5 h-3.5 text-blue-700 dark:text-blue-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:(0,s.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]})})},c=l(9499),d=l(9830),u=l.n(d),f=l(892),m=l(3946),x=l(7058),p=l(3841),h=l(4722),g=l(2186),j=l(8883);function FormField(e){let{label:t,type:l,value:n}=e;return(0,s.jsx)("div",{className:"w-3/4",children:(0,s.jsx)("div",{className:"mb-2 block",children:(0,s.jsx)(c.Z,{id:t,label:t,type:l,variant:"filled",value:n,className:"my-2"})})})}function ProfileForm(){let[e,t]=(0,o.useState)(""),[l,n]=(0,o.useState)(!1),[i,r]=(0,o.useState)({"custom:VATnumber":"","custom:location":"","custom:typeOfCompany":"",name:"",email:""});return(0,o.useEffect)(()=>{(async function(){let e=a().get("idToken"),l=a().get("accessToken");r(function(e){let[t,l,s]=e.split("."),decodeBase64Url=e=>{let t=e.replace(/-/g,"+").replace(/_/g,"/");return atob(t)},parseJSON=e=>{try{return JSON.parse(e)}catch(e){return console.error("Invalid JSON:",e),null}},n=parseJSON(decodeBase64Url(t)),a=parseJSON(decodeBase64Url(l));return{header:n,payload:a,signature:s}}(e).payload);let s=await (0,f.$g)(l);t(s)})()},[]),(0,s.jsx)("form",{className:"my-4 flex w-5/6 justify-between bg-white rounded-lg",children:(0,s.jsxs)("div",{className:"flex-col w-full h-full justify-between",children:[(0,s.jsxs)("div",{className:"mx-4 flex w-full justify-between",children:[(0,s.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,s.jsx)(FormField,{type:"text",label:"Nome societ\xe0/Freelance",value:i.name}),(0,s.jsx)(FormField,{type:"text",label:"Email",value:i.email}),(0,s.jsx)(FormField,{type:"text",label:"Location",value:i["custom:location"]})]}),(0,s.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,s.jsx)(FormField,{type:"text",label:"Ragione sociale",value:i["custom:typeOfCompany"]}),(0,s.jsx)(FormField,{type:"text",label:"Partita IVA",value:i["custom:VATnumber"]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(p.Z,{htmlFor:"outlined-adornment-password",children:"API Secret"}),(0,s.jsx)(x.Z,{id:"outlined-adornment-password",type:l?"text":"password",endAdornment:(0,s.jsxs)(h.Z,{position:"end",children:[(0,s.jsx)(m.Z,{"aria-label":l?"hide the secret":"display the secret",onClick:()=>n(e=>!e),onMouseDown:e=>{e.preventDefault()},onMouseUp:e=>{e.preventDefault()},edge:"end",children:l?(0,s.jsx)(j.Z,{}):(0,s.jsx)(g.Z,{})}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(CopyToClipboard,{children:e})})]}),label:"API Secret",autoFocus:!1,value:e})]})]})]}),(0,s.jsx)("div",{className:"flex my-8 mx-4 justify-end",children:(0,s.jsx)("button",{type:"submit",className:"text-white bg-[#16DBCC] focus:ring-4 focus:outline-none font-medium rounded-full px-5 py-2.5 text-center ".concat(u().className," text-[20px]"),children:"Salva"})})]})})}var y=l(6738),w=l(9417),v=l(1797),b=l(4597),N=l(6837),C=l(1002);let F=(0,b.ZP)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function ProfilePic(){let e=a().get("accessToken"),[t,l]=(0,o.useState)("");return(0,o.useEffect)(()=>{(async function(){if(""===t){let t=await (0,f.dV)(e);null!==t&&""!==t&&(console.log("myImage = ",t),l(t))}})()},[]),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("img",{src:t,className:"rounded-full"}),(0,s.jsx)(w.Z,{startIcon:(0,s.jsx)(v.Z,{}),children:(0,s.jsx)(F,{type:"file",onChange:t=>{console.log(t.target.files);let s=t.target.files[0];!function(t){if(void 0==t){console.log("Error: file undefined");return}if(!(t instanceof File)&!(t instanceof Blob)){console.log("Error: file must be of type File or Blob");return}let s=new FileReader;s.onload=function(){let n={};n.filename=t.name;let a=s.result,o=a.split(";base64,")[1];n.imageAsBase64String=o,n.metadata={"Content-Type":"image/png"};let i=new XMLHttpRequest;i.open("POST",C.T5+"/img",!0),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Authorization","Bearer "+e),i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE&&200===i.status){let e=JSON.parse(i.responseText);"Success"==e.result?(console.log("Uploaded"),void 0!==l&&l([e.img_url])):console.log("failed to upload")}},i.send(JSON.stringify(n))},s.readAsDataURL(t)}(s)},multiple:!0})})]})}function ProfilePage(){return(0,s.jsx)(y.default,{component:(0,s.jsxs)("div",{className:"my-4 mx-4 flex w-3/4",children:[(0,s.jsx)("div",{className:"my-4 bg-white w-1/4",children:(0,s.jsx)(ProfilePic,{})}),(0,s.jsx)("div",{className:"my-4 bg-white w-3/4",children:(0,s.jsx)(ProfileForm,{})})]}),selected:N.g.Accounts})}}},function(e){e.O(0,[741,682,799,738,774,888,179],function(){return e(e.s=9344)}),_N_E=e.O()}]);