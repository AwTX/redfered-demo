(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{66605:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/invitationcode",function(){return s(68142)}])},68142:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var n=s(85893),i=s(11163),c=s(67294);function d(){let e=(0,i.useRouter)(),[t,s]=(0,c.useState)(null),d=async s=>{s.preventDefault();let n=document.getElementById("uncorrect"),i=document.getElementById("correct");try{"abc"===t?(n.classList.contains("hidden")||n.classList.add("hidden"),i.classList.remove("hidden"),setTimeout(async()=>{i.classList.add("hidden")},2e3),e.push("/signup")):(i.classList.contains("hidden")||i.classList.add("hidden"),n.classList.remove("hidden"),setTimeout(async()=>{n.classList.add("hidden")},2e3))}catch(e){console.log("Error:",e)}};return(0,n.jsx)("div",{className:"bg-gray-200 h-screen flex items-center justify-center",children:(0,n.jsxs)("div",{className:"max-w-md bg-white p-8 rounded shadow-md",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Enter Invitation Code"}),(0,n.jsxs)("form",{onSubmit:d,className:"space-y-4",children:[(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"invitationCode",className:"text-gray-700 font-bold mb-2",children:"Invitation Code:"}),(0,n.jsx)("input",{type:"text",id:"invitationCode",value:t,onChange:e=>s(e.target.value),className:"input-field"})]}),(0,n.jsxs)("div",{className:"relative flex items-center",children:[(0,n.jsx)("button",{type:"submit",className:"relative flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Verify"}),(0,n.jsx)("img",{id:"correct",className:"relative flex mx-4 h-8 w-8 hidden",src:"./checked.svg"},"correct"),(0,n.jsx)("img",{id:"uncorrect",className:"relative flex mx-4 h-8 w-8 hidden",src:"./Cross_red_circle.svg"},"uncorrect")]})]})]})})}},11163:function(e,t,s){e.exports=s(96885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=66605)}),_N_E=e.O()}]);