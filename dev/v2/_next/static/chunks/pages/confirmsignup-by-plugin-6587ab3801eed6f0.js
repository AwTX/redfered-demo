(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{3098:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirmsignup-by-plugin",function(){return o(3586)}])},6567:function(e,n,o){"use strict";o.d(n,{Mr:function(){return i},Rf:function(){return s},T5:function(){return t}});let t="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod",s="eu-west-1_0xawMsGty",i="7b30d5nqk0gech4bec45dchalf"},3586:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return l}});var t=o(5893),s=o(6567),i=o(631),r=o(1163),c=o(7294);function l(){let[e,n]=(0,c.useState)(""),o=(0,r.useRouter)();console.log(o.asPath);let{username:l,referrer:u}=o.query;console.log("Username:",l),console.log("Referrer:",u);let a=async n=>{n.preventDefault(),console.log("confirmationCode=",e),console.log("username=",l);try{var t={ClientId:s.Mr,ConfirmationCode:e,Username:l,ForceAliasCreation:!0};new i.i({region:"eu-west-1"}).confirmSignUp(t,function(e,n){e?console.log(e,e.stack):(console.log(n),o.push("/signin"))})}catch(e){console.log("Error:",e)}};return(0,t.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen w-screen flex items-center justify-center",children:(0,t.jsxs)("div",{className:"max-w-md p-8 rounded shadow-md",children:[(0,t.jsx)("h2",{className:"text-white text-2xl font-bold mb-4",children:"Enter Confirmation Code"}),(0,t.jsxs)("form",{onSubmit:a,className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"confirmationCode",className:"text-white font-bold mb-2",children:"Confirmation Code:"}),(0,t.jsx)("input",{type:"text",id:"confirmationCode",value:e,onChange:e=>n(e.target.value),className:"input-field"})]}),(0,t.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Verify"})]})]})})}}},function(e){e.O(0,[93,690,631,774,888,179],function(){return e(e.s=3098)}),_N_E=e.O()}]);