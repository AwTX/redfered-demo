(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9344:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t(9483)}])},9483:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return ProfilePage}});var s=t(5893),n=t(7294),r=t(6485),a=t.n(r),CopyToClipboard=function(e){let{text:l}=e,[t,r]=(0,n.useState)(!1),handleCopyClick=async()=>{try{await a()(l),r(!0)}catch(e){console.error("Failed to copy text to clipboard",e)}};return(0,s.jsx)("div",{children:(0,s.jsxs)("button",{onClick:handleCopyClick,class:"absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center",children:[(0,s.jsx)("span",{id:"default-icon-course-url",children:(0,s.jsx)("svg",{class:"w-3.5 h-3.5",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 20",children:(0,s.jsx)("path",{d:"M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"})})}),(0,s.jsx)("span",{id:"success-icon-course-url",class:"hidden inline-flex items-center",children:(0,s.jsx)("svg",{class:"w-3.5 h-3.5 text-blue-700 dark:text-blue-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:(0,s.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]})})};function PluginCode(e){let{plugin_code:l,clicked:t}=e;return null==l||""==l?null:(console.log("Here is the plugin_code: ",l),(0,n.useEffect)(()=>{console.log("refreshing due to new plugin_code")},[l,t]),(0,s.jsx)("div",{id:"course-modal",class:"\n            ".concat(!0==t?"z-10 w-full align-items-center border-blue-500 overflow-y-auto overflow-x-hidden justify-center items-center h-[calc(100%-1rem)]":"z-10 w-full align-items-center border-blue-500 overflow-y-auto overflow-x-hidden justify-center items-center h-[calc(100%-1rem)] hidden","\n      "),children:(0,s.jsx)("div",{class:"relative p-4 w-full max-h-full",children:(0,s.jsxs)("div",{class:"relative bg-white rounded-lg shadow dark:bg-gray-800",children:[(0,s.jsx)("div",{class:"flex items-center justify-between p-4 md:p-5",children:(0,s.jsx)("h3",{class:"text-lg text-gray-500 dark:text-gray-400",children:"Redfered API Secret"})}),(0,s.jsx)("div",{class:"px-4 pb-4 md:px-5 md:pb-5",children:(0,s.jsxs)("div",{class:"relative mb-4",children:[(0,s.jsx)("label",{id:"course-url",class:"col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",children:"****************************************************************"}),(0,s.jsx)(CopyToClipboard,{text:l})]})})]})})}))}var o=t(6808),i=t.n(o),c=t(9499),d=t(9830),u=t.n(d),f=t(892);function FormField(e){let{label:l,type:t,value:n}=e;return(0,s.jsx)("div",{className:"w-3/4",children:(0,s.jsx)("div",{className:"mb-2 block",children:(0,s.jsx)(c.Z,{id:l,label:l,type:t,variant:"filled",value:n,className:"my-2"})})})}function ProfileForm(){let[e,l]=(0,n.useState)({"custom:VATnumber":"","custom:location":"","custom:typeOfCompany":"",name:"",email:""});return(0,n.useEffect)(()=>{(async function(){let e=i().get("idToken"),t=i().get("accessToken");l(function(e){let[l,t,s]=e.split("."),decodeBase64Url=e=>{let l=e.replace(/-/g,"+").replace(/_/g,"/");return atob(l)},parseJSON=e=>{try{return JSON.parse(e)}catch(e){return console.error("Invalid JSON:",e),null}},n=parseJSON(decodeBase64Url(l)),r=parseJSON(decodeBase64Url(t));return{header:n,payload:r,signature:s}}(e).payload);let s=await (0,f.$g)(t);setAPISecret(s)})()},[]),(0,s.jsx)("div",{children:(0,s.jsx)("form",{className:"my-4 flex w-5/6 justify-between bg-white rounded-lg",children:(0,s.jsxs)("div",{className:"flex-col w-full h-full justify-between",children:[(0,s.jsxs)("div",{className:"mx-4 flex w-full justify-between",children:[(0,s.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,s.jsx)(FormField,{type:"text",label:"Nome societ\xe0/Freelance",value:e.name}),(0,s.jsx)(FormField,{type:"text",label:"Email",value:e.email}),(0,s.jsx)(FormField,{type:"text",label:"Location",value:e["custom:location"]})]}),(0,s.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,s.jsx)(FormField,{type:"text",label:"Ragione sociale",value:e["custom:typeOfCompany"]}),(0,s.jsx)(FormField,{type:"text",label:"Partita IVA",value:e["custom:VATnumber"]})]})]}),(0,s.jsx)("div",{className:"flex my-8 mx-4 justify-end",children:(0,s.jsx)("button",{type:"submit",className:"text-white bg-[#16DBCC] focus:ring-4 focus:outline-none font-medium rounded-full px-5 py-2.5 text-center ".concat(u().className," text-[20px]"),children:"Salva"})})]})})})}var x=t(6738),m=t(9417),h=t(1797),p=t(4597),g=t(6837),y=t(1002);let b=(0,p.ZP)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function ProfilePic(){let e=i().get("accessToken"),[l,t]=(0,n.useState)("");return(0,n.useEffect)(()=>{(async function(){if(""===l){let l=await (0,f.dV)(e);null!==l&&""!==l&&(console.log("myImage = ",l),t(l))}})()},[]),(0,s.jsxs)("div",{className:"flex-col",children:[(0,s.jsx)("img",{src:l,className:"rounded-full"}),(0,s.jsx)(m.Z,{component:"label",role:void 0,variant:"contained",tabIndex:-1,size:"small",startIcon:(0,s.jsx)(h.Z,{}),color:"success",children:(0,s.jsx)(b,{type:"file",onChange:l=>{console.log(l.target.files);let s=l.target.files[0];!function(l){if(void 0==l){console.log("Error: file undefined");return}if(!(l instanceof File)&!(l instanceof Blob)){console.log("Error: file must be of type File or Blob");return}let s=new FileReader;s.onload=function(){let n={};n.filename=l.name;let r=s.result,a=r.split(";base64,")[1];n.imageAsBase64String=a,n.metadata={"Content-Type":"image/png"};let o=new XMLHttpRequest;o.open("POST",y.T5+"/img",!0),o.setRequestHeader("Content-Type","application/json"),o.setRequestHeader("Authorization","Bearer "+e),o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE&&200===o.status){let e=JSON.parse(o.responseText);"Success"==e.result?(console.log("Uploaded"),void 0!==t&&t([e.img_url])):console.log("failed to upload")}},o.send(JSON.stringify(n))},s.readAsDataURL(l)}(s)},multiple:!0})})]})}function ProfilePage(){return(0,s.jsx)(x.default,{component:function(){let[e,l]=(0,n.useState)("");return(0,n.useEffect)(()=>{(async function(){let e=i().get("accessToken"),t=await (0,f.$g)(e);l(t)})()},[]),(0,s.jsxs)("div",{className:"my-4 mx-4 flex-col w-3/4",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"my-4 bg-white w-1/4",children:(0,s.jsx)(ProfilePic,{})}),(0,s.jsx)("div",{className:"my-4 bg-white w-3/4",children:(0,s.jsx)(ProfileForm,{})})]}),(0,s.jsx)("div",{className:"my-4 mx-4 bg-white",children:(0,s.jsx)(PluginCode,{plugin_code:e,clicked:!0})})]})}(),selected:g.g.Accounts})}}},function(e){e.O(0,[741,876,416,738,774,888,179],function(){return e(e.s=9344)}),_N_E=e.O()}]);