(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9344:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t(7242)}])},7242:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return ProfilePage}});var s=t(5893),a=t(6808),n=t.n(a),c=t(9499),i=t(7294),o=t(9830),r=t.n(o);function FormField(e){let{label:l,_type:t,value:a}=e;return(0,s.jsx)("div",{className:"w-3/4",children:(0,s.jsx)("div",{className:"mb-2 block",children:(0,s.jsx)(c.Z,{id:l,label:l,variant:"filled",value:a,className:"my-2"})})})}function ProfileForm(){let[e,l]=(0,i.useState)({"custom:VATnumber":"","custom:location":"","custom:typeOfCompany":"",name:"",email:""});return(0,i.useEffect)(()=>{let e=n().get("idToken");l(function(e){let[l,t,s]=e.split("."),decodeBase64Url=e=>{let l=e.replace(/-/g,"+").replace(/_/g,"/");return atob(l)},parseJSON=e=>{try{return JSON.parse(e)}catch(e){return console.error("Invalid JSON:",e),null}},a=parseJSON(decodeBase64Url(l)),n=parseJSON(decodeBase64Url(t));return{header:a,payload:n,signature:s}}(e).payload)},[]),(0,s.jsx)("form",{className:"my-4 flex w-5/6 justify-between bg-white rounded-lg",children:(0,s.jsxs)("div",{className:"flex-col w-full h-full justify-between",children:[(0,s.jsxs)("div",{className:"mx-4 flex w-full justify-between",children:[(0,s.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,s.jsx)(FormField,{type:"text",label:"Nome societ\xe0/Freelance",value:e.name}),(0,s.jsx)(FormField,{type:"text",label:"Email",value:e.email}),(0,s.jsx)(FormField,{type:"text",label:"Location",value:e["custom:location"]})]}),(0,s.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,s.jsx)(FormField,{type:"text",label:"Ragione sociale",value:e["custom:typeOfCompany"]}),(0,s.jsx)(FormField,{type:"text",label:"Partita IVA",value:e["custom:VATnumber"]}),(0,s.jsx)(FormField,{type:"password",label:"Password"})]})]}),(0,s.jsx)("div",{className:"flex my-8 mx-4 justify-end",children:(0,s.jsx)("button",{type:"submit",className:"text-white bg-[#16DBCC] focus:ring-4 focus:outline-none font-medium rounded-full px-5 py-2.5 text-center ".concat(r().className," text-[20px]"),children:"Salva"})})]})})}var u=t(6738),m=t(6837),d=t(892);function ProfilePic(){let e=n().get("accessToken"),[l,t]=(0,i.useState)("");return(0,i.useEffect)(()=>{(async function(){if(""===l){let l=await (0,d.dV)(e);null!==l&&""!==l&&(console.log("myImage = ",l),t(l))}})()},[]),(0,s.jsx)("img",{src:l,className:"rounded-full"})}function ProfilePage(){return(0,s.jsx)(u.default,{component:(0,s.jsxs)("div",{className:"my-4 mx-4 flex w-3/4",children:[(0,s.jsx)("div",{className:"my-4 bg-white w-1/4",children:(0,s.jsx)(ProfilePic,{})}),(0,s.jsx)("div",{className:"my-4 bg-white w-3/4",children:(0,s.jsx)(ProfileForm,{})})]}),selected:m.g.Accounts})}}},function(e){e.O(0,[741,236,499,738,774,888,179],function(){return e(e.s=9344)}),_N_E=e.O()}]);