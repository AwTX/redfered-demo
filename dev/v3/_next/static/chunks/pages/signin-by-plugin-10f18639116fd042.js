(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{4871:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin-by-plugin",function(){return t(1643)}])},1002:function(e,n,t){"use strict";t.d(n,{Mr:function(){return r},Rf:function(){return o},T5:function(){return s}});let s="https://bs1a7ie37i.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_AfZKtqHom",r="1bshmkjde5rb1011amu8d0996i"},1643:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return LoginPage}});var s=t(5893),o=t(7294),r=t(1002),l=t(988),a=t(1163);function LoginPage(){let e=(0,a.useRouter)(),[n,t]=(0,o.useState)(""),[u,c]=(0,o.useState)(""),[i,d]=(0,o.useState)(""),[f,g]=(0,o.useState)(""),[p,h]=(0,o.useState)(""),[m,w]=(0,o.useState)(""),[x,b]=(0,o.useState)(!1),y={UserPoolId:r.Rf,ClientId:r.Mr},k=new l.AM(y);async function getAccessToken(e,n){let t=new l.sD({Username:e,Password:n}),s=new l.ws({Username:e,Pool:k});s.authenticateUser(t,{onSuccess:e=>{let n=e.getIdToken().payload,t=n["cognito:username"],s=e.getAccessToken().getJwtToken(),o=e.getRefreshToken().token;console.log("Username:",t),console.log("Here is your Access Token: ",s),console.log("Here is your Refresh Token: ",o),c(t),h(s),w(o)},onFailure:e=>{console.log("Error retrieving access token:",e)}})}return(0,o.useEffect)(()=>{if(null==u||void 0==u){console.log("Inside useEffect with userName null or undefined. Returning");return}if(""==p){console.log("Inside useEffect with access_token null or undefined. Returning");return}if(""==m){console.log("Inside useEffect with rerfresh_token null or undefined. Returning");return}let{query:n}=e,{referrer:t}=n;if(null==t){console.log("Inside useEffect with referrer null or undefined. Returning");return}(function(e,n,t,s){let o=e.split("wp-admin/options-general.php?page=settings_api_test")[0],r="".concat(o,"index.php?rest_route=/redfered-plugin-api/token"),l=new XMLHttpRequest;l.open("POST",r,!0),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?console.log("POST request: success"):console.error("POST request: fail (status=",l.status))};var a=JSON.stringify({access_token:n,refresh_token:t,username:s});l.send(a)})(t,p,m,u),function(e){console.log("Called 'redirectBack' function!");let n=e.split("wp-admin/options-general.php?page=settings_api_test")[0],t="".concat(n),s=new XMLHttpRequest;s.open("GET",t,!0),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?(console.log("Succesfully redirected back"),window.location.href=t):console.error("Error redirecting back. xhr.status = ",s.status))},s.send()}(t)},[p,m,u]),(0,o.useEffect)(()=>{let{query:n}=e,{referrer:t}=n;null==t?console.log("referrer = null"):console.log("referrer = ",t)},[e.query.referrer]),(0,o.useEffect)(()=>{(async function(){!0==x&&await getAccessToken(n,i)})()},[x]),(0,s.jsx)("div",{className:"h-screen flex items-center justify-center",children:(0,s.jsxs)("div",{className:"max-w-md rounded shadow-md",children:[(0,s.jsx)("h1",{className:"text-gray-700 text-2xl font-bold mb-4",children:"Login"}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=new l.sD({Username:n,Password:i}),s=new l.ws({Username:n,Pool:k});s.authenticateUser(t,{onSuccess:()=>{console.log("Login successful");try{b(!0)}catch(e){console.log("Error:",e)}},onFailure:e=>{g(e.message||"An error occurred during login")}})},className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{htmlFor:"username",className:"text-gray-700 font-bold mb-2",children:"Company name"}),(0,s.jsx)("input",{type:"text",id:"username",value:n,onChange:e=>t(e.target.value),className:"input-field"})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{htmlFor:"password",className:"text-gray-700 font-bold mb-2",children:"Password"}),(0,s.jsx)("input",{type:"password",id:"password",value:i,onChange:e=>d(e.target.value),className:"input-field"})]}),(0,s.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Log In"}),(0,s.jsx)("label",{className:"text-gray-700 font-bold mb-2",children:f&&(0,s.jsx)("p",{children:f})})]})]})})}},6249:function(){}},function(e){e.O(0,[764,569,774,888,179],function(){return e(e.s=4871)}),_N_E=e.O()}]);