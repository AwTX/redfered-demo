(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{7613:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirmsignup",function(){return t(9889)}])},6567:function(e,n,t){"use strict";t.d(n,{Mr:function(){return i},Rf:function(){return s},T5:function(){return o}});let o="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod",s="eu-west-1_0xawMsGty",i="7b30d5nqk0gech4bec45dchalf"},9889:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var o=t(5893),s=t(6567),i=t(631),r=t(1163),c=t(7294);function l(){let[e,n]=(0,c.useState)(""),t=(0,r.useRouter)();console.log(t.asPath);let l=t.asPath.split("?username=")[1],a=async n=>{n.preventDefault(),console.log("confirmationCode=",e),console.log("username=",l);try{var o={ClientId:s.Mr,ConfirmationCode:e,Username:l,ForceAliasCreation:!0};new i.i({region:"eu-west-1"}).confirmSignUp(o,function(e,n){e?console.log(e,e.stack):(console.log(n),t.push("/signin"))})}catch(e){console.log("Error:",e)}};return(0,o.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen w-screen flex items-center justify-center",children:(0,o.jsxs)("div",{className:"max-w-md p-8 rounded shadow-md",children:[(0,o.jsx)("h2",{className:"text-white text-2xl font-bold mb-4",children:"Enter Confirmation Code"}),(0,o.jsxs)("form",{onSubmit:a,className:"space-y-4",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("label",{htmlFor:"confirmationCode",className:"text-white font-bold mb-2",children:"Confirmation Code:"}),(0,o.jsx)("input",{type:"text",id:"confirmationCode",value:e,onChange:e=>n(e.target.value),className:"input-field"})]}),(0,o.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Verify"})]})]})})}}},function(e){e.O(0,[93,690,631,774,888,179],function(){return e(e.s=7613)}),_N_E=e.O()}]);