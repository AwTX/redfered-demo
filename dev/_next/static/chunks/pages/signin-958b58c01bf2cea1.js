(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{87752:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return t(37232)}])},56567:function(e,s,t){"use strict";t.d(s,{Mr:function(){return a},Rf:function(){return o},T5:function(){return n}});let n="https://2h40z97w8a.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_4gv5hW1YQ",a="1hrh02mtf2vo99rs4lfr8hk8qf"},37232:function(e,s,t){"use strict";t.r(s);var n=t(85893),o=t(67294),a=t(56567),l=t(77167),r=t(11163);s.default=()=>{let e=(0,r.useRouter)(),[s,t]=(0,o.useState)(""),[c,u]=(0,o.useState)(""),[i,d]=(0,o.useState)(""),[f,m]=(0,o.useState)(""),[h,w]=(0,o.useState)(!1),g={UserPoolId:a.Rf,ClientId:a.Mr},p=new l.AM(g);async function x(e,s){let t=new l.sD({Username:e,Password:s}),n=new l.ws({Username:e,Pool:p});n.authenticateUser(t,{onSuccess:e=>{let s=e.getAccessToken().getJwtToken();console.log("token, authentication -->",s);let t=e.getUserAttributes(),n=t.find(e=>"cognito:username"===e.getName()),o=n?n.getValue():null;console.log("Username:",o),m(s)},onFailure:e=>{console.log("Error retrieving access token:",e)}})}return(0,o.useEffect)(()=>{""!==f&&e.push("/companysettings?user=".concat(s,"&access_token=").concat(f))},[f]),(0,o.useEffect)(()=>{(async function(){!0==h&&await x(s,c)})()},[h]),(0,n.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen flex items-center justify-center",children:(0,n.jsxs)("div",{className:"max-w-md rounded shadow-md",children:[(0,n.jsx)("h1",{className:"text-white text-2xl font-bold mb-4",children:"Login"}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=new l.sD({Username:s,Password:c}),n=new l.ws({Username:s,Pool:p});n.authenticateUser(t,{onSuccess:()=>{console.log("Login successful");try{w(!0)}catch(e){console.log("Error:",e)}},onFailure:e=>{d(e.message||"An error occurred during login")}})},className:"space-y-4",children:[(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"username",className:"text-white font-bold mb-2",children:"Company name"}),(0,n.jsx)("input",{type:"text",id:"username",value:s,onChange:e=>t(e.target.value),className:"input-field"})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"password",className:"text-white font-bold mb-2",children:"Password"}),(0,n.jsx)("input",{type:"password",id:"password",value:c,onChange:e=>u(e.target.value),className:"input-field"})]}),(0,n.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Log In"}),i&&(0,n.jsx)("p",{children:i})]})]})})}},56249:function(){}},function(e){e.O(0,[764,569,774,888,179],function(){return e(e.s=87752)}),_N_E=e.O()}]);