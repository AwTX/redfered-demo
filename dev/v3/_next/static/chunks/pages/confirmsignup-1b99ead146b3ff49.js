(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{7613:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirmsignup",function(){return t(9889)}])},6567:function(e,n,t){"use strict";t.d(n,{Mr:function(){return i},Rf:function(){return s},T5:function(){return o}});let o="https://bs1a7ie37i.execute-api.eu-west-1.amazonaws.com/prod",s="eu-west-1_AfZKtqHom",i="1bshmkjde5rb1011amu8d0996i"},9889:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var o=t(5893),s=t(6567),i=t(631),r=t(1163),a=t(7294);function c(){let[e,n]=(0,a.useState)(""),t=(0,r.useRouter)();console.log(t.asPath);let c=t.asPath.split("?username=")[1],l=async n=>{n.preventDefault(),console.log("confirmationCode=",e),console.log("username=",c);try{var t={ClientId:s.Mr,ConfirmationCode:e,Username:c,ForceAliasCreation:!0};new i.i({region:"eu-west-1"}).confirmSignUp(t,function(e,n){e?console.log(e,e.stack):console.log(n)})}catch(e){console.log("Error:",e)}};return(0,o.jsx)("div",{className:"h-screen w-screen flex items-center justify-center",children:(0,o.jsxs)("div",{className:"max-w-md p-8 rounded shadow-md",children:[(0,o.jsx)("h2",{className:"text-gray-700 text-2xl font-bold mb-4",children:"Enter Confirmation Code"}),(0,o.jsxs)("form",{onSubmit:l,className:"space-y-4",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("label",{htmlFor:"confirmationCode",className:"text-gray-700 font-bold mb-2",children:"Confirmation Code:"}),(0,o.jsx)("input",{type:"text",id:"confirmationCode",value:e,onChange:e=>n(e.target.value),className:"input-field"})]}),(0,o.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Verify"})]})]})})}}},function(e){e.O(0,[93,764,806,774,888,179],function(){return e(e.s=7613)}),_N_E=e.O()}]);