(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9344:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return l(4192)}])},4192:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return ProfilePage}});var a=l(5893),s=l(7262),n=l(8593),o=l(7294),i=l(9830),r=l.n(i),c=l(6808),d=l.n(c);function FormField(e){let{label:t,_type:l,value:s}=e;return(0,a.jsx)("div",{className:"w-3/4",children:(0,a.jsx)("div",{className:"mb-2 block",children:(0,a.jsx)(n.Z,{id:t,label:t,variant:"filled",value:s,className:"my-2"})})})}function ProfileForm(){let[e,t]=(0,o.useState)({"custom:VATnumber":"","custom:location":"","custom:typeOfCompany":"",name:"",email:""});return(0,o.useEffect)(()=>{let e=d().get("idToken");t(function(e){let[t,l,a]=e.split("."),decodeBase64Url=e=>{let t=e.replace(/-/g,"+").replace(/_/g,"/");return atob(t)},parseJSON=e=>{try{return JSON.parse(e)}catch(e){return console.error("Invalid JSON:",e),null}},s=parseJSON(decodeBase64Url(t)),n=parseJSON(decodeBase64Url(l));return{header:s,payload:n,signature:a}}(e).payload)},[]),(0,a.jsx)("form",{className:"my-4 flex w-5/6 justify-between bg-white rounded-lg",children:(0,a.jsxs)("div",{className:"flex-col w-full h-full justify-between",children:[(0,a.jsxs)("div",{className:"mx-4 flex w-full justify-between",children:[(0,a.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,a.jsx)(FormField,{type:"text",label:"Nome societ\xe0/Freelance",value:e.name}),(0,a.jsx)(FormField,{type:"text",label:"Email",value:e.email}),(0,a.jsx)(FormField,{type:"text",label:"Location",value:e["custom:location"]})]}),(0,a.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,a.jsx)(FormField,{type:"text",label:"Ragione sociale",value:e["custom:typeOfCompany"]}),(0,a.jsx)(FormField,{type:"text",label:"Partita IVA",value:e["custom:VATnumber"]}),(0,a.jsx)(FormField,{type:"password",label:"Password"})]})]}),(0,a.jsx)("div",{className:"flex my-8 mx-4 justify-end",children:(0,a.jsx)("button",{type:"submit",className:"text-white bg-[#16DBCC] focus:ring-4 focus:outline-none font-medium rounded-full px-5 py-2.5 text-center ".concat(r().className," text-[20px]"),children:"Salva"})})]})})}var u=l(7459),m=l(6837),x=l(5697),p=l.n(x),f=l(9676),h=l(44),b=l(323),j=l(4597),y=l(9417),g=l(7152),w=l(1002),v=l(5450),N=l(9007);let P=(0,j.ZP)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function InputFileUpload(){let e=d().get("accessToken"),[t,l]=(0,o.useState)([]);return(0,a.jsxs)("div",{children:[(0,a.jsx)(function(e){let{data:t}=e;return void 0==t||t==[]?(0,a.jsx)("div",{}):(0,a.jsx)(v.Z,{sx:{width:500,height:450},cols:3,rowHeight:200,children:t.map(e=>(0,a.jsx)(N.Z,{children:(0,a.jsx)("img",{srcSet:"".concat(e,"?w=164&h=164&fit=crop&auto=format&dpr=2 2x"),src:"".concat(e,"?w=164&h=164&fit=crop&auto=format"),alt:e,loading:"lazy"})},e))})},{data:t}),(0,a.jsxs)(y.Z,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:(0,a.jsx)(g.Z,{}),children:["Upload files",(0,a.jsx)(P,{type:"file",onChange:t=>{console.log(t.target.files);let a=t.target.files[0];!function(t){let a=new FileReader;a.onload=function(){let s={};s.filename=t.name;let n=a.result,o=n.split(";base64,")[1];s.imageAsBase64String=o,s.metadata={"Content-Type":"image/png"};let i=new XMLHttpRequest;i.open("POST",w.T5+"/img",!0),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Authorization","Bearer "+e),i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE&&200===i.status){let e=JSON.parse(i.responseText);"Success"==e.result?(console.log("Uploaded"),l([e.img_url])):console.log("failed to upload")}},i.send(JSON.stringify(s))},a.readAsDataURL(t)}(a)},multiple:!0})]})]})}function Profile(){return(0,a.jsxs)("div",{className:"my-4 mx-4 flex w-3/4",children:[(0,a.jsx)("div",{className:"my-4 bg-white w-1/6",children:(0,a.jsx)(s.Z,{className:"flex"})}),(0,a.jsx)(ProfileForm,{})]})}function CustomTabPanel(e){let{children:t,value:l,index:s,...n}=e;return(0,a.jsx)("div",{role:"tabpanel",hidden:l!==s,id:"simple-tabpanel-".concat(s),"aria-labelledby":"simple-tab-".concat(s),...n,children:l===s&&(0,a.jsx)(b.Z,{sx:{p:3},children:t})})}function a11yProps(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function BasicTabs(){let[e,t]=o.useState(0);return(0,a.jsxs)(b.Z,{sx:{width:"100%"},children:[(0,a.jsx)(b.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,a.jsxs)(f.Z,{value:e,onChange:(e,l)=>{t(l)},"aria-label":"basic tabs example",children:[(0,a.jsx)(h.Z,{label:"Profilo",...a11yProps(0),className:"".concat(r().className)}),(0,a.jsx)(h.Z,{label:"Logo",...a11yProps(1),className:"".concat(r().className)})]})}),(0,a.jsx)(CustomTabPanel,{value:e,index:0,children:(0,a.jsx)(Profile,{})}),(0,a.jsx)(CustomTabPanel,{value:e,index:1,children:(0,a.jsx)(InputFileUpload,{})})]})}function ProfilePage(){return(0,a.jsx)(u.default,{component:(0,a.jsx)(BasicTabs,{}),selected:m.g.Accounts})}CustomTabPanel.propTypes={children:p().node,index:p().number.isRequired,value:p().number.isRequired}}},function(e){e.O(0,[741,79,668,459,774,888,179],function(){return e(e.s=9344)}),_N_E=e.O()}]);