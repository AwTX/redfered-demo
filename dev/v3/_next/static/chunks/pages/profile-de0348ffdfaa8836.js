(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9344:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return l(1489)}])},1489:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return T}});var s=l(5893),n=l(4848),a=l(6221),i=l(4881),o=l.n(i);function c(e){let{label:t,type:l}=e;return(0,s.jsxs)("div",{className:"w-3/4",children:[(0,s.jsx)("div",{className:"mb-2 block",children:(0,s.jsx)(a.__,{className:"".concat(o().className," text-[16px]"),htmlFor:"nome",value:t})}),(0,s.jsx)(a.oi,{id:t,type:l,required:!0})]})}function r(){return(0,s.jsx)("form",{className:"my-4 flex w-5/6 justify-between bg-white rounded-lg",children:(0,s.jsxs)("div",{className:"flex-col w-full h-full justify-between",children:[(0,s.jsxs)("div",{className:"mx-4 flex w-full justify-between",children:[(0,s.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,s.jsx)(c,{type:"text",label:"Nome societ\xe0/Freelance"}),(0,s.jsx)(c,{type:"text",label:"Email"}),(0,s.jsx)(c,{type:"text",label:"Indirizzo"}),(0,s.jsx)(c,{type:"text",label:"CodicePostale"})]}),(0,s.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,s.jsx)(c,{type:"text",label:"Ragione sociale"}),(0,s.jsx)(c,{type:"text",label:"Paese"}),(0,s.jsx)(c,{type:"text",label:"Citt\xe0"}),(0,s.jsx)(c,{type:"password",label:"Password"})]})]}),(0,s.jsx)("div",{className:"flex my-8 mx-4 justify-end",children:(0,s.jsx)("button",{type:"submit",className:"text-white bg-[#16DBCC] focus:ring-4 focus:outline-none font-medium rounded-full px-5 py-2.5 text-center ".concat(o().className," text-[20px]"),children:"Salva"})})]})})}var d=l(2846),u=l(6689),x=l(7294),f=l(5697),m=l.n(f),p=l(9128),j=l(44),b=l(323),h=l(4597),g=l(9417),w=l(7152),y=l(6567),N=l(6808),v=l.n(N);let _=(0,h.ZP)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function C(){let e=v().get("accessToken");return(0,s.jsxs)(g.Z,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:(0,s.jsx)(w.Z,{}),children:["Upload files",(0,s.jsx)(_,{type:"file",onChange:t=>{console.log(t.target.files);let l=t.target.files[0];!function(t){console.log("type of argument is: ",typeof t),console.log("argument is instance of File: ",t instanceof File),console.log("argument is instance of Blob: ",t instanceof Blob);let l=new FileReader;l.onload=function(){let s={};s.filename=t.name;let n=l.result,a=n.split(";base64,")[1];s.imageAsBase64String=a,s.metadata={"Content-Type":"image/png"};let i=new XMLHttpRequest;i.open("POST",y.T5+"/img",!0),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Authorization","Bearer "+e),i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE&&200===i.status){let e=JSON.parse(i.responseText);"Success"==e.result?console.log("Uploaded"):console.log("failed to upload")}},i.send(JSON.stringify(s))},l.readAsDataURL(t)}(l)},multiple:!0})]})}function Z(){return(0,s.jsxs)("div",{className:"my-4 mx-4 flex w-3/4",children:[(0,s.jsx)("div",{className:"my-4 bg-white w-1/6",children:(0,s.jsx)(n.Z,{className:"flex"})}),(0,s.jsx)(r,{})]})}function P(e){let{children:t,value:l,index:n,...a}=e;return(0,s.jsx)("div",{role:"tabpanel",hidden:l!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n),...a,children:l===n&&(0,s.jsx)(b.Z,{sx:{p:3},children:t})})}function R(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function S(){let[e,t]=x.useState(0);return(0,s.jsxs)(b.Z,{sx:{width:"100%"},children:[(0,s.jsx)(b.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,s.jsxs)(p.Z,{value:e,onChange:(e,l)=>{t(l)},"aria-label":"basic tabs example",children:[(0,s.jsx)(j.Z,{label:"Profilo",...R(0),className:"".concat(o().className)}),(0,s.jsx)(j.Z,{label:"Logo",...R(1),className:"".concat(o().className)})]})}),(0,s.jsx)(P,{value:e,index:0,children:(0,s.jsx)(Z,{})}),(0,s.jsx)(P,{value:e,index:1,children:(0,s.jsx)(C,{})})]})}function T(){return(0,s.jsx)(d.default,{component:(0,s.jsx)(S,{}),selected:u.g.Accounts})}P.propTypes={children:m().node,index:m().number.isRequired,value:m().number.isRequired}}},function(e){e.O(0,[445,556,922,532,902,267,846,774,888,179],function(){return e(e.s=9344)}),_N_E=e.O()}]);