(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{87167:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin-by-plugin",function(){return s(49813)}])},56567:function(e,n,s){"use strict";s.d(n,{Mr:function(){return r},Rf:function(){return o},T5:function(){return t}});let t="https://e129bp3r31.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_0xawMsGty",r="7b30d5nqk0gech4bec45dchalf"},49813:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var t=s(85893),o=s(67294),r=s(56567),l=s(77167),u=s(11163);function c(){let e=(0,u.useRouter)(),[n,s]=(0,o.useState)(""),[c,a]=(0,o.useState)(""),[i,f]=(0,o.useState)(""),[d,g]=(0,o.useState)(""),[h,p]=(0,o.useState)(""),[m,w]=(0,o.useState)(""),[x,b]=(0,o.useState)(!1),k={UserPoolId:r.Rf,ClientId:r.Mr},y=new l.AM(k);async function N(e,n){let s=new l.sD({Username:e,Password:n}),t=new l.ws({Username:e,Pool:y});t.authenticateUser(s,{onSuccess:e=>{let n=e.getIdToken().payload,s=n["cognito:username"],t=e.getAccessToken().getJwtToken(),o=e.getRefreshToken().token;console.log("Username:",s),console.log("Here is your Access Token: ",t),console.log("Here is your Refresh Token: ",o),a(s),p(t),w(o)},onFailure:e=>{console.log("Error retrieving access token:",e)}})}return(0,o.useEffect)(()=>{if(null==c||void 0==c){console.log("Inside useEffect with userName null or undefined. Returning");return}if(""==h){console.log("Inside useEffect with access_token null or undefined. Returning");return}if(""==m){console.log("Inside useEffect with rerfresh_token null or undefined. Returning");return}let{query:n}=e,{referrer:s}=n;if(null==s){console.log("Inside useEffect with referrer null or undefined. Returning");return}(function(e,n,s,t){let o=e.split("wp-admin/options-general.php?page=settings_api_test")[0],r="".concat(o,"wp-json/redfered-plugin-api/token"),l=new XMLHttpRequest;l.open("POST",r,!0),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?console.log("POST request: success"):console.error("POST request: fail (status=",l.status))};var u=JSON.stringify({access_token:n,refresh_token:s,username:t});l.send(u)})(s,h,m,c),redirectBackWithToken(s)},[h,m,c]),(0,o.useEffect)(()=>{let{query:n}=e,{referrer:s}=n;null==s?console.log("referrer = null"):console.log("referrer = ",s)},[e.query.referrer]),(0,o.useEffect)(()=>{(async function(){!0==x&&await N(n,i)})()},[x]),(0,t.jsx)("div",{className:"bg-[url(./../public/bg.png)] h-screen flex items-center justify-center",children:(0,t.jsxs)("div",{className:"max-w-md rounded shadow-md",children:[(0,t.jsx)("h1",{className:"text-white text-2xl font-bold mb-4",children:"Login"}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault();let s=new l.sD({Username:n,Password:i}),t=new l.ws({Username:n,Pool:y});t.authenticateUser(s,{onSuccess:()=>{console.log("Login successful");try{b(!0)}catch(e){console.log("Error:",e)}},onFailure:e=>{g(e.message||"An error occurred during login")}})},className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"username",className:"text-white font-bold mb-2",children:"Company name"}),(0,t.jsx)("input",{type:"text",id:"username",value:n,onChange:e=>s(e.target.value),className:"input-field"})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"password",className:"text-white font-bold mb-2",children:"Password"}),(0,t.jsx)("input",{type:"password",id:"password",value:i,onChange:e=>f(e.target.value),className:"input-field"})]}),(0,t.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Log In"}),d&&(0,t.jsx)("p",{children:d})]})]})})}},56249:function(){}},function(e){e.O(0,[764,569,774,888,179],function(){return e(e.s=87167)}),_N_E=e.O()}]);