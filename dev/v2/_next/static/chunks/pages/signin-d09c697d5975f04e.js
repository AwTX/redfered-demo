(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{7752:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n(7232)}])},6567:function(e,s,n){"use strict";n.d(s,{Mr:function(){return c},Rf:function(){return o},T5:function(){return t}});let t="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_0xawMsGty",c="7b30d5nqk0gech4bec45dchalf"},7232:function(e,s,n){"use strict";n.r(s);var t=n(5893),o=n(7294),c=n(7167),a=n(1163),l=n(6567),r=n(6808),u=n.n(r);s.default=()=>{let e=(0,a.useRouter)(),[s,n]=(0,o.useState)(""),[r,i]=(0,o.useState)(""),[d,f]=(0,o.useState)(""),[h,m]=(0,o.useState)(""),[w,g]=(0,o.useState)(!1),x={UserPoolId:l.Rf,ClientId:l.Mr},p=new c.AM(x);async function b(e,s){let n=new c.sD({Username:e,Password:s}),t=new c.ws({Username:e,Pool:p});t.authenticateUser(n,{onSuccess:e=>{let s=e.getAccessToken().getJwtToken();e.getRefreshToken(),console.log("access token, authentication -->",s),console.log("refresh token, authentication -->",s),m(s)},onFailure:e=>{console.log("Error retrieving access token:",e)}})}return(0,o.useEffect)(()=>{""!=h&&null!=h&&void 0!=h&&""!=s&&null!=s&&void 0!=s&&(console.log("loginName: ",s),console.log("accesstToken: ",h),u().set("accessToken",h,{secure:!0,sameSite:"strict"}),e.push("/mgmt?user=".concat(s)))},[h,s]),(0,o.useEffect)(()=>{(async function(){!0==w&&await b(s,r)})()},[w]),(0,t.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen flex items-center justify-center",children:(0,t.jsxs)("div",{className:"max-w-md rounded shadow-md",children:[(0,t.jsx)("h1",{className:"text-white text-2xl font-bold mb-4",children:"Login"}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault();let n=new c.sD({Username:s,Password:r}),t=new c.ws({Username:s,Pool:p});t.authenticateUser(n,{onSuccess:()=>{console.log("Login successful");try{g(!0)}catch(e){console.log("Error:",e)}},onFailure:e=>{f(e.message||"An error occurred during login")}})},className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"username",className:"text-white font-bold mb-2",children:"Company name"}),(0,t.jsx)("input",{type:"text",id:"username",value:s,onChange:e=>n(e.target.value),className:"input-field"})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"password",className:"text-white font-bold mb-2",children:"Password"}),(0,t.jsx)("input",{type:"password",id:"password",value:r,onChange:e=>i(e.target.value),className:"input-field"})]}),(0,t.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Log In"}),d&&(0,t.jsx)("p",{children:d})]})]})})}},6249:function(){}},function(e){e.O(0,[690,167,774,888,179],function(){return e(e.s=7752)}),_N_E=e.O()}]);