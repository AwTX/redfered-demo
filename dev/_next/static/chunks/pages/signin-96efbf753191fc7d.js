(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{87752:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n(37232)}])},56567:function(e,s,n){"use strict";n.d(s,{Mr:function(){return a},Rf:function(){return o},T5:function(){return t}});let t="https://2h40z97w8a.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_4gv5hW1YQ",a="1hrh02mtf2vo99rs4lfr8hk8qf"},37232:function(e,s,n){"use strict";n.r(s);var t=n(85893),o=n(67294),a=n(56567),c=n(77167),r=n(11163);s.default=()=>{var e;let s=(0,r.useRouter)(),[n,l]=(0,o.useState)(""),[u,i]=(0,o.useState)(""),[d,f]=(0,o.useState)(""),[h,m]=(0,o.useState)(""),[w,g]=(0,o.useState)(!1),p={UserPoolId:a.Rf,ClientId:a.Mr},x=new c.AM(p);async function b(s,n){let t=new c.sD({Username:s,Password:n}),o=new c.ws({Username:s,Pool:x});o.authenticateUser(t,{onSuccess:s=>{let n=s.getAccessToken().getJwtToken();console.log("token, authentication -->",n);let t=s.getIdToken().payload;console.log("3 Username:",e=t["cognito:username"]),m(n)},onFailure:e=>{console.log("Error retrieving access token:",e)}})}return(0,o.useEffect)(()=>{""!==h&&s.push("/companysettings?user=".concat(e,"&access_token=").concat(h))},[h]),(0,o.useEffect)(()=>{(async function(){!0==w&&await b(n,u)})()},[w]),(0,t.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen flex items-center justify-center",children:(0,t.jsxs)("div",{className:"max-w-md rounded shadow-md",children:[(0,t.jsx)("h1",{className:"text-white text-2xl font-bold mb-4",children:"Login"}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault();let s=new c.sD({Username:n,Password:u}),t=new c.ws({Username:n,Pool:x});t.authenticateUser(s,{onSuccess:()=>{console.log("Login successful");try{g(!0)}catch(e){console.log("Error:",e)}},onFailure:e=>{f(e.message||"An error occurred during login")}})},className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"username",className:"text-white font-bold mb-2",children:"Company name"}),(0,t.jsx)("input",{type:"text",id:"username",value:n,onChange:e=>l(e.target.value),className:"input-field"})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"password",className:"text-white font-bold mb-2",children:"Password"}),(0,t.jsx)("input",{type:"password",id:"password",value:u,onChange:e=>i(e.target.value),className:"input-field"})]}),(0,t.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Log In"}),d&&(0,t.jsx)("p",{children:d})]})]})})}},56249:function(){}},function(e){e.O(0,[764,569,774,888,179],function(){return e(e.s=87752)}),_N_E=e.O()}]);