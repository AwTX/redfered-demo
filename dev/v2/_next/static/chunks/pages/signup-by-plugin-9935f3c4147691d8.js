(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[976],{7490:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup-by-plugin",function(){return n(7189)}])},7189:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(5893),l=n(7294),u=n(6567),s=n(7167);n(9889),n(9332);var r=n(1163);function o(){let e=(0,r.useRouter)(),[t,n]=(0,l.useState)(""),[o,i]=(0,l.useState)(""),[c,p]=(0,l.useState)(""),[m,d]=(0,l.useState)(""),[f,g]=(0,l.useState)(""),[h,x]=(0,l.useState)(""),[N,b]=(0,l.useState)(!1),[w,v]=(0,l.useState)("");useEffect(()=>{let{query:t}=e,{referrer:n}=t;null==n?console.log("referrer = null"):console.log("referrer = ",n)},[e.query.referrer]);let y=async n=>{n.preventDefault();let a=new s.AM({UserPoolId:u.Rf,ClientId:u.Mr}),l=[new s.KC({Name:"name",Value:t}),new s.KC({Name:"email",Value:o}),new s.KC({Name:"custom:location",Value:m}),new s.KC({Name:"custom:VATnumber",Value:f}),new s.KC({Name:"custom:typeOfCompany",Value:h})];a.signUp(t,c,l,null,(n,a)=>{n?(console.log("Error signing up:",n),v(n.message||"An error occurred during signup")):(console.log("Sign up successful:",a),e.push("/confirmsignup?username=".concat(t)))})};return(0,a.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen w-screen flex items-center justify-center",children:(0,a.jsxs)("div",{className:"relative max-w-md p-8 rounded shadow-md",children:[(0,a.jsx)("h1",{className:"text-white text-2xl font-bold mb-4",children:"Sign Up"}),(0,a.jsxs)("form",{onSubmit:y,className:"space-y-4",children:[(0,a.jsx)("input",{type:"text",placeholder:"Company name",value:t,onChange:e=>n(e.target.value),className:"input-field"}),(0,a.jsx)("input",{type:"email",placeholder:"Email",value:o,onChange:e=>i(e.target.value),className:"input-field"}),(0,a.jsx)("input",{type:"password",placeholder:"Password",value:c,onChange:e=>p(e.target.value),className:"input-field"}),(0,a.jsx)("input",{type:"text",placeholder:"Location",value:m,onChange:e=>d(e.target.value),className:"input-field"}),(0,a.jsx)("input",{type:"text",placeholder:"VAT number",value:f,onChange:e=>g(e.target.value),className:"input-field"}),(0,a.jsx)("input",{type:"text",placeholder:"Type of company (ex: Inc.)",value:h,onChange:e=>x(e.target.value),className:"input-field"}),(0,a.jsx)("button",{type:"submit",className:"relative flex bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Sign Up"}),(0,a.jsx)("label",{className:"text-white font-bold mb-2",children:w&&(0,a.jsx)("p",{children:w})})]})]})})}}},function(e){e.O(0,[93,690,167,631,65,774,888,179],function(){return e(e.s=7490)}),_N_E=e.O()}]);