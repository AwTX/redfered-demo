(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{7613:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirmsignup",function(){return t(9889)}])},9889:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var o=t(5893),s=t(1163),i=t(7294);function l(){let[e,n]=(0,i.useState)(""),t=(0,s.useRouter)();console.log(t.asPath);let l=t.asPath.split("?username=")[1],c=async n=>{n.preventDefault(),console.log("confirmationCode=",e),console.log("username=",l);try{t.push("/signin")}catch(e){console.log("Error:",e)}};return(0,o.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen w-screen flex items-center justify-center",children:(0,o.jsxs)("div",{className:"max-w-md p-8 rounded shadow-md",children:[(0,o.jsx)("h2",{className:"text-white text-2xl font-bold mb-4",children:"Enter Confirmation Code"}),(0,o.jsxs)("form",{onSubmit:c,className:"space-y-4",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("label",{htmlFor:"confirmationCode",className:"text-white font-bold mb-2",children:"Confirmation Code:"}),(0,o.jsx)("input",{type:"text",id:"confirmationCode",value:e,onChange:e=>n(e.target.value),className:"input-field"})]}),(0,o.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Verify"})]})]})})}},1163:function(e,n,t){e.exports=t(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7613)}),_N_E=e.O()}]);