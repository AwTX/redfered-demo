(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{6605:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/invitationcode",function(){return n(8142)}])},6451:function(e,t,n){"use strict";n.d(t,{EE:function(){return u},JT:function(){return d},P3:function(){return a},Sq:function(){return i},dV:function(){return c},fo:function(){return s},gk:function(){return r}});var o=n(6567);async function r(e){let t=await fetch(o.T5+"/invitationcode?code="+e),n=await t.json();return n}async function i(e){let t=await fetch(o.T5+"/pool_users",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),n=await t.json(),r=n.users;return r}async function s(e,t){let n=await fetch(o.T5+"/contract?contractId="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),r=await n.json();return r.contract}async function a(e,t){let n=await fetch(o.T5+"/user_contracts?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),r=await n.json();return r.contracts}async function c(e,t){let n=await fetch(o.T5+"/img_url?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),r=await n.json();return r.img_url}async function u(e,t,n,r){let i=await fetch(o.T5+"/add_new_contract_item",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r},body:JSON.stringify({partyA:e,partyB:t,text:n})}),s=await i.json();return s}async function d(e,t,n,r){let i=await fetch(o.T5+"/update_contract_text",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r},body:JSON.stringify({contractId:e,text:t,user:n})}),s=await i.json();return s}},6567:function(e,t,n){"use strict";n.d(t,{Mr:function(){return i},Rf:function(){return r},T5:function(){return o}});let o="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod",r="eu-west-1_0xawMsGty",i="7b30d5nqk0gech4bec45dchalf"},8142:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var o=n(5893),r=n(1163),i=n(7294),s=n(6451);function a(){let e=(0,r.useRouter)(),[t,n]=(0,i.useState)(null),a=async n=>{var o;n.preventDefault();let r=document.getElementById("uncorrect"),i=document.getElementById("correct");function a(){i.classList.contains("hidden")||i.classList.add("hidden"),r.classList.remove("hidden"),setTimeout(async()=>{r.classList.add("hidden")},2e3)}try{if(o=await (0,s.gk)(t),console.log("res:",o),"Success"!==o.result){a();return}}catch(e){console.log("Error:",e),a();return}r.classList.contains("hidden")||r.classList.add("hidden"),i.classList.remove("hidden"),setTimeout(async()=>{i.classList.add("hidden")},2e3),e.push("/signup")};return(0,o.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen w-screen flex items-center justify-center",children:(0,o.jsxs)("div",{className:"max-w-md p-8 rounded shadow-md",children:[(0,o.jsx)("h2",{className:"text-white text-2xl font-bold mb-4",children:"Enter Invitation Code"}),(0,o.jsxs)("form",{onSubmit:a,className:"space-y-4",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("label",{htmlFor:"invitationCode",className:"text-white font-bold mb-2",children:"Invitation Code:"}),(0,o.jsx)("input",{type:"text",id:"invitationCode",value:t,onChange:e=>n(e.target.value),className:"input-field"})]}),(0,o.jsxs)("div",{className:"relative flex items-center",children:[(0,o.jsx)("button",{type:"submit",className:"relative flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Verify"}),(0,o.jsx)("img",{id:"correct",className:"relative flex mx-4 h-8 w-8 hidden",src:"./checked.svg"},"correct"),(0,o.jsx)("img",{id:"uncorrect",className:"relative flex mx-4 h-8 w-8 hidden",src:"./Cross_red_circle.svg"},"uncorrect")]})]})]})})}},1163:function(e,t,n){e.exports=n(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6605)}),_N_E=e.O()}]);