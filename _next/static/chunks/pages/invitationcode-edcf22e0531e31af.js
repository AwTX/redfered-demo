(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{66605:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/invitationcode",function(){return n(68142)}])},56567:function(e,t,n){"use strict";n.d(t,{Mr:function(){return r},Rf:function(){return i},T5:function(){return s}});let s="https://2h40z97w8a.execute-api.eu-west-1.amazonaws.com/prod",i="eu-west-1_4gv5hW1YQ",r="1hrh02mtf2vo99rs4lfr8hk8qf"},37753:function(e,t,n){"use strict";n.d(t,{$J:function(){return o},Dd:function(){return u},EG:function(){return c},ac:function(){return i},i9:function(){return l},oT:function(){return a},r0:function(){return r},xc:function(){return d}});var s=n(56567);async function i(e){let t=await fetch(s.T5+"/invitationcode?code="+e),n=await t.json();return n}async function r(e){let t=await fetch(s.T5+"/?user="+e),n=await t.json();return n.filenames}async function a(){let e=await fetch(s.T5+"/poolusers"),t=await e.json();return t.users}async function o(e){let t=await fetch(s.T5+"/mylogo?user="+e),n=await t.json();return n.imageUrl}async function c(e){let t=await fetch(s.T5+"/contracts?user="+e),n=await t.json();return n}async function u(e,t,n){let i=await fetch(s.T5+"/showincarousel?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),r=await i.json();return r}async function d(e,t,n){let i=await fetch(s.T5+"/sendrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),r=await i.json();return r}async function l(e,t,n){let i=await fetch(s.T5+"/acceptrequests?user="+e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(t)}),r=await i.json();return r}},68142:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n(85893),i=n(11163),r=n(67294),a=n(37753);function o(){let e=(0,i.useRouter)(),[t,n]=(0,r.useState)(null),o=async n=>{var s;n.preventDefault();let i=document.getElementById("uncorrect"),r=document.getElementById("correct");function o(){r.classList.contains("hidden")||r.classList.add("hidden"),i.classList.remove("hidden"),setTimeout(async()=>{i.classList.add("hidden")},2e3)}try{if(s=await (0,a.ac)(t),console.log("res:",s),"Success"!==s.result){o();return}}catch(e){console.log("Error:",e),o();return}i.classList.contains("hidden")||i.classList.add("hidden"),r.classList.remove("hidden"),setTimeout(async()=>{r.classList.add("hidden")},2e3),e.push("/signup")};return(0,s.jsx)("div",{className:"bg-gray-200 h-screen flex items-center justify-center",children:(0,s.jsxs)("div",{className:"max-w-md bg-white p-8 rounded shadow-md",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Enter Invitation Code"}),(0,s.jsxs)("form",{onSubmit:o,className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{htmlFor:"invitationCode",className:"text-gray-700 font-bold mb-2",children:"Invitation Code:"}),(0,s.jsx)("input",{type:"text",id:"invitationCode",value:t,onChange:e=>n(e.target.value),className:"input-field"})]}),(0,s.jsxs)("div",{className:"relative flex items-center",children:[(0,s.jsx)("button",{type:"submit",className:"relative flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Verify"}),(0,s.jsx)("img",{id:"correct",className:"relative flex mx-4 h-8 w-8 hidden",src:"./checked.svg"},"correct"),(0,s.jsx)("img",{id:"uncorrect",className:"relative flex mx-4 h-8 w-8 hidden",src:"./Cross_red_circle.svg"},"uncorrect")]})]})]})})}},11163:function(e,t,n){e.exports=n(96885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=66605)}),_N_E=e.O()}]);