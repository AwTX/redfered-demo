(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{6605:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/invitationcode",function(){return n(8142)}])},6451:function(t,e,n){"use strict";n.d(e,{EE:function(){return d},JT:function(){return h},NM:function(){return l},P3:function(){return s},Sq:function(){return i},dV:function(){return c},fo:function(){return a},gk:function(){return r},tb:function(){return u}});var o=n(6567);async function r(t){let e=await fetch(o.T5+"/invitationcode?code="+t),n=await e.json();return n}async function i(t){let e=await fetch(o.T5+"/pool_users",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),n=await e.json(),r=n.users;return r}async function a(t,e){let n=await fetch(o.T5+"/contract?contractId="+t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await n.json();return r.contract}async function s(t,e){let n=await fetch(o.T5+"/user_contracts?user="+t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await n.json();return r.contracts}async function c(t,e){let n=await fetch(o.T5+"/img_url?user="+t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),r=await n.json();return r.img_url}async function u(t){let e=await fetch(o.T5+"/api-key",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),n=await e.json();return n.hmac_b64encoded}async function d(t,e,n,r){let i=await fetch(o.T5+"/add_new_contract_item",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r},body:JSON.stringify({partyA:t,partyB:e,text:n})}),a=await i.json();return a}async function l(t,e,n,r){let i=await fetch(o.T5+"/update_sign",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r},body:JSON.stringify({contractId:t,user:e,sign:n})}),a=await i.json();return a}async function h(t,e,n,r){let i=await fetch(o.T5+"/update_contract_text",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r},body:JSON.stringify({contractId:t,text:e,user:n})}),a=await i.json();return a}},6567:function(t,e,n){"use strict";n.d(e,{Mr:function(){return i},Rf:function(){return r},T5:function(){return o}});let o="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod",r="eu-west-1_0xawMsGty",i="7b30d5nqk0gech4bec45dchalf"},8142:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var o=n(5893),r=n(1163),i=n(7294),a=n(6451);function s(){let t=(0,r.useRouter)(),[e,n]=(0,i.useState)(null),s=async n=>{var o;n.preventDefault();let r=document.getElementById("uncorrect"),i=document.getElementById("correct");function s(){i.classList.contains("hidden")||i.classList.add("hidden"),r.classList.remove("hidden"),setTimeout(async()=>{r.classList.add("hidden")},2e3)}try{if(o=await (0,a.gk)(e),console.log("res:",o),"Success"!==o.result){s();return}}catch(t){console.log("Error:",t),s();return}r.classList.contains("hidden")||r.classList.add("hidden"),i.classList.remove("hidden"),setTimeout(async()=>{i.classList.add("hidden")},2e3),t.push("/signup")};return(0,o.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen w-screen flex items-center justify-center",children:(0,o.jsxs)("div",{className:"max-w-md p-8 rounded shadow-md",children:[(0,o.jsx)("h2",{className:"text-white text-2xl font-bold mb-4",children:"Enter Invitation Code"}),(0,o.jsxs)("form",{onSubmit:s,className:"space-y-4",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("label",{htmlFor:"invitationCode",className:"text-white font-bold mb-2",children:"Invitation Code:"}),(0,o.jsx)("input",{type:"text",id:"invitationCode",value:e,onChange:t=>n(t.target.value),className:"input-field"})]}),(0,o.jsxs)("div",{className:"relative flex items-center",children:[(0,o.jsx)("button",{type:"submit",className:"relative flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Verify"}),(0,o.jsx)("img",{id:"correct",className:"relative flex mx-4 h-8 w-8 hidden",src:"./checked.svg"},"correct"),(0,o.jsx)("img",{id:"uncorrect",className:"relative flex mx-4 h-8 w-8 hidden",src:"./Cross_red_circle.svg"},"uncorrect")]})]})]})})}},1163:function(t,e,n){t.exports=n(6885)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=6605)}),_N_E=t.O()}]);