(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9344:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t(4192)}])},4192:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return ProfilePage}});var a=t(5893),n=t(7262),o=t(8593),s=t(7294),i=t(9830),r=t.n(i),c=t(6808),d=t.n(c);function FormField(e){let{label:l,value:t}=e;return(0,a.jsx)("div",{className:"w-3/4",children:(0,a.jsx)("div",{className:"mb-2 block",children:(0,a.jsx)(o.Z,{id:l,label:l,variant:"filled",value:t,className:"my-2"})})})}function ProfileForm(){let[e,l]=(0,s.useState)({"custom:VATnumber":"","custom:location":"","custom:typeOfCompany":"",name:"",email:""});return(0,s.useEffect)(()=>{let e=d().get("idToken"),t=function(e){if(void 0===e)return console.log("token undefined"),null;let[l,t,a]=e.split("."),decodeBase64Url=e=>{let l=e.replace(/-/g,"+").replace(/_/g,"/");return atob(l)},parseJSON=e=>{try{return JSON.parse(e)}catch(e){return console.error("Invalid JSON:",e),null}},n=parseJSON(decodeBase64Url(l)),o=parseJSON(decodeBase64Url(t));return{header:n,payload:o,signature:a}}(e);if(null===t){console.log("decodedToken null");return}if(void 0===t.payload){console.log("decodedToken undefined");return}l(t.payload)},[]),(0,a.jsx)("form",{className:"my-4 flex w-5/6 justify-between bg-white rounded-lg",children:(0,a.jsxs)("div",{className:"flex-col w-full h-full justify-between",children:[void 0===e?null:(0,a.jsxs)("div",{className:"mx-4 flex w-full justify-between",children:[(0,a.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,a.jsx)(FormField,{label:"Nome societ\xe0/Freelance",value:e.name}),(0,a.jsx)(FormField,{label:"Email",value:e.email}),(0,a.jsx)(FormField,{label:"Location",value:e["custom:location"]})]}),(0,a.jsxs)("div",{className:"mx-4 flex-col w-full",children:[(0,a.jsx)(FormField,{label:"Ragione sociale",value:e["custom:typeOfCompany"]}),(0,a.jsx)(FormField,{label:"Partita IVA",value:e["custom:VATnumber"]}),(0,a.jsx)(FormField,{label:"Password"})]})]}),(0,a.jsx)("div",{className:"flex my-8 mx-4 justify-end",children:(0,a.jsx)("button",{type:"submit",className:"text-white bg-[#16DBCC] focus:ring-4 focus:outline-none font-medium rounded-full px-5 py-2.5 text-center ".concat(r().className," text-[20px]"),children:"Salva"})})]})})}var u=t(7459),m=t(6837),f=t(5697),p=t.n(f),x=t(9676),b=t(44),h=t(323),j=t(4597),g=t(9417),v=t(7152),y=t(1002),w=t(5450),N=t(9007),P=t(892);let F=(0,j.ZP)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function StandardImageList(e){let{data:l}=e;return(console.log(l),console.log("data type: ",typeof l),void 0===l||0===l.length)?(0,a.jsx)("div",{}):(0,a.jsx)(w.Z,{sx:{width:500,height:450},cols:3,rowHeight:200,children:l.map(e=>(0,a.jsx)(N.Z,{children:(0,a.jsx)("img",{srcSet:"".concat(e,"?w=164&h=164&fit=crop&auto=format&dpr=2 2x"),src:"".concat(e,"?w=164&h=164&fit=crop&auto=format"),alt:e,loading:"lazy"})},e))})}function InputFileUpload(){let e=d().get("accessToken"),[l,t]=(0,s.useState)([]);return(0,s.useEffect)(async()=>{let l=await (0,P.dV)(e);console.log("[img_url] =",[l]),t([l])},[]),(0,a.jsxs)("div",{children:[(0,a.jsx)(StandardImageList,{data:l}),(0,a.jsxs)(g.Z,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:(0,a.jsx)(v.Z,{}),children:["Upload files",(0,a.jsx)(F,{type:"file",onChange:l=>{console.log(l.target.files);let a=l.target.files[0];!function(l){if(void 0==l){console.log("Error: file undefined");return}if(!(l instanceof File)&!(l instanceof Blob)){console.log("Error: file must be of type File or Blob");return}let a=new FileReader;a.onload=function(){let n={};n.filename=l.name;let o=a.result,s=o.split(";base64,")[1];n.imageAsBase64String=s,n.metadata={"Content-Type":"image/png"};let i=new XMLHttpRequest;i.open("POST",y.T5+"/img",!0),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Authorization","Bearer "+e),i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE&&200===i.status){let e=JSON.parse(i.responseText);"Success"==e.result?(console.log("Uploaded"),t([e.img_url])):console.log("failed to upload")}},i.send(JSON.stringify(n))},a.readAsDataURL(l)}(a)},multiple:!0})]})]})}function Profile(){return(0,a.jsxs)("div",{className:"my-4 mx-4 flex w-3/4",children:[(0,a.jsx)("div",{className:"my-4 bg-white w-1/6",children:(0,a.jsx)(n.Z,{className:"flex"})}),(0,a.jsx)(ProfileForm,{})]})}function CustomTabPanel(e){let{children:l,value:t,index:n,...o}=e;return(0,a.jsx)("div",{role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n),...o,children:t===n&&(0,a.jsx)(h.Z,{sx:{p:3},children:l})})}function a11yProps(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function BasicTabs(){let[e,l]=s.useState(0);return(0,a.jsxs)(h.Z,{sx:{width:"100%"},children:[(0,a.jsx)(h.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,a.jsxs)(x.Z,{value:e,onChange:(e,t)=>{l(t)},"aria-label":"basic tabs example",children:[(0,a.jsx)(b.Z,{label:"Profilo",...a11yProps(0),className:"".concat(r().className)}),(0,a.jsx)(b.Z,{label:"Logo",...a11yProps(1),className:"".concat(r().className)})]})}),(0,a.jsx)(CustomTabPanel,{value:e,index:0,children:(0,a.jsx)(Profile,{})}),(0,a.jsx)(CustomTabPanel,{value:e,index:1,children:(0,a.jsx)(InputFileUpload,{})})]})}function ProfilePage(){return(0,a.jsx)(u.default,{component:(0,a.jsx)(BasicTabs,{}),selected:m.g.Accounts})}CustomTabPanel.propTypes={children:p().node,index:p().number.isRequired,value:p().number.isRequired}}},function(e){e.O(0,[741,79,668,459,774,888,179],function(){return e(e.s=9344)}),_N_E=e.O()}]);