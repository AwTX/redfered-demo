(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[976],{7490:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup-by-plugin",function(){return t(7189)}])},6567:function(e,n,t){"use strict";t.d(n,{Mr:function(){return l},Rf:function(){return u},T5:function(){return a}});let a="https://bs1a7ie37i.execute-api.eu-west-1.amazonaws.com/prod",u="eu-west-1_AfZKtqHom",l="1bshmkjde5rb1011amu8d0996i"},7189:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var a=t(5893),u=t(7294),l=t(6567),s=t(7167),r=t(1163);function o(){let e=(0,r.useRouter)(),[n,t]=(0,u.useState)(""),[o,i]=(0,u.useState)(""),[c,p]=(0,u.useState)(""),[m,d]=(0,u.useState)(""),[f,g]=(0,u.useState)(""),[h,x]=(0,u.useState)(""),[y,b]=(0,u.useState)("");(0,u.useEffect)(()=>{let{query:n}=e,{referrer:t}=n;null==t?console.log("referrer = null"):console.log("referrer = ",t)},[e.query.referrer]);let w=async t=>{t.preventDefault();let a=new s.AM({UserPoolId:l.Rf,ClientId:l.Mr}),u=[new s.KC({Name:"name",Value:n}),new s.KC({Name:"email",Value:o}),new s.KC({Name:"custom:location",Value:m}),new s.KC({Name:"custom:VATnumber",Value:f}),new s.KC({Name:"custom:typeOfCompany",Value:h})];a.signUp(n,c,u,null,(t,a)=>{t?(console.log("Error signing up:",t),b(t.message||"An error occurred during signup")):(console.log("Sign up successful:",a),e.push("/confirmsignup-by-plugin?username=".concat(n,"&referrer=").concat(e.query.referrer)))})};return(0,a.jsx)("div",{className:"h-screen w-screen flex items-center justify-center",children:(0,a.jsxs)("div",{className:"relative max-w-md p-8 rounded shadow-md",children:[(0,a.jsx)("h1",{className:"text-gray-700 text-2xl font-bold mb-4",children:"Sign Up"}),(0,a.jsxs)("form",{onSubmit:w,className:"space-y-4",children:[(0,a.jsx)("input",{type:"text",placeholder:"Company name",value:n,onChange:e=>t(e.target.value),className:"input-field"}),(0,a.jsx)("input",{type:"email",placeholder:"Email",value:o,onChange:e=>i(e.target.value),className:"input-field"}),(0,a.jsx)("input",{type:"password",placeholder:"Password",value:c,onChange:e=>p(e.target.value),className:"input-field"}),(0,a.jsx)("input",{type:"text",placeholder:"Location",value:m,onChange:e=>d(e.target.value),className:"input-field"}),(0,a.jsx)("input",{type:"text",placeholder:"VAT number",value:f,onChange:e=>g(e.target.value),className:"input-field"}),(0,a.jsx)("input",{type:"text",placeholder:"Type of company (ex: Inc.)",value:h,onChange:e=>x(e.target.value),className:"input-field"}),(0,a.jsx)("button",{type:"submit",className:"relative flex bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Sign Up"}),(0,a.jsx)("label",{className:"text-gray-700 font-bold mb-2",children:y&&(0,a.jsx)("p",{children:y})})]})]})})}},6249:function(){}},function(e){e.O(0,[764,569,774,888,179],function(){return e(e.s=7490)}),_N_E=e.O()}]);