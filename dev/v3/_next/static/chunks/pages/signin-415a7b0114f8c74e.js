(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{7752:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return t(8793)}])},1002:function(e,r,t){"use strict";t.d(r,{Mr:function(){return n},Rf:function(){return a},T5:function(){return s}});let s="https://bs1a7ie37i.execute-api.eu-west-1.amazonaws.com/prod",a="eu-west-1_AfZKtqHom",n="1bshmkjde5rb1011amu8d0996i"},8793:function(e,r,t){"use strict";t.r(r);var s=t(5893),a=t(7294),n=t(7167),o=t(1163),c=t(1002),i=t(6808),l=t.n(i);r.default=()=>{let e=(0,o.useRouter)(),[r,t]=(0,a.useState)(""),[i,d]=(0,a.useState)(""),[u,m]=(0,a.useState)(""),[g,f]=(0,a.useState)(""),[x,h]=(0,a.useState)(""),[b,p]=(0,a.useState)(!1),y={UserPoolId:c.Rf,ClientId:c.Mr},k=new n.AM(y);async function getAccessToken(e,r){let t=new n.sD({Username:e,Password:r}),s=new n.ws({Username:e,Pool:k});s.authenticateUser(t,{onSuccess:e=>{let r=e.getAccessToken().getJwtToken(),t=e.getIdToken().getJwtToken();console.log("access token, authentics token, authenticaation -->",r),console.log("id token, authentication -->",t),f(r),h(t)},onFailure:e=>{console.log("Error retrieving access token:",e)}})}return(0,a.useEffect)(()=>{if(""==g||null==g||void 0==g||""==x||null==x||void 0==x||""==r||null==r||void 0==r)return;console.log("loginName: ",r),console.log("accesstToken: ",g),console.log("idToken: ",x),l().set("accessToken",g,{secure:!0,sameSite:"strict"}),l().set("idToken",x,{secure:!0,sameSite:"strict"});let t=function(e){let r=e.split(".");if(3!==r.length)return;let t=r[1],s=atob(t.replace(/-/g,"+").replace(/_/g,"/"));return JSON.parse(s)}(x);l().set("username",t.name,{secure:!0,sameSite:"strict"}),console.log("payload: ",t),e.push("/dashboard")},[g,x,r]),(0,a.useEffect)(()=>{(async function(){!0==b&&await getAccessToken(r,i)})()},[b]),(0,s.jsx)("div",{className:"absolute my-0 h-screen w-screen bg-[url(./../public/Login.svg)] bg-center bg-cover",children:(0,s.jsx)("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:(0,s.jsx)("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:(0,s.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[(0,s.jsx)("img",{className:"mx-auto",src:"./top.svg",alt:"logo"}),(0,s.jsx)("h1",{className:"text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Entra nel tuo account"}),(0,s.jsxs)("form",{className:"space-y-4 md:space-y-6",onSubmit:e=>{e.preventDefault();let t=new n.sD({Username:r,Password:i}),s=new n.ws({Username:r,Pool:k});s.authenticateUser(t,{onSuccess:()=>{console.log("Login successful");try{p(!0)}catch(e){console.log("Error:",e)}},onFailure:e=>{m(e.message||"An error occurred during login")}})},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{for:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Email"}),(0,s.jsx)("input",{type:"email",name:"email",id:"email",value:r,className:"bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",onChange:e=>t(e.target.value),required:""})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{for:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),(0,s.jsx)("input",{type:"password",name:"password",id:"password",value:i,placeholder:"••••••••",onChange:e=>d(e.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-start",children:[(0,s.jsx)("div",{className:"flex items-center h-5",children:(0,s.jsx)("input",{id:"remember","aria-describedby":"remember",type:"checkbox",className:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800",required:""})}),(0,s.jsx)("div",{className:"ml-3 text-sm",children:(0,s.jsx)("label",{for:"remember",className:"text-gray-500 dark:text-gray-300",children:"Ricordami"})})]}),(0,s.jsx)("a",{href:"#",className:"text-sm font-medium text-primary-600 hover:underline dark:text-primary-500",children:"Dimenticato la Password?"})]}),(0,s.jsx)("button",{type:"submit",className:"w-full text-white bg-[#16DBCC] focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center",children:"Continua"}),(0,s.jsxs)("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Non hai un account? ",(0,s.jsx)("a",{href:"#",className:"font-medium text-primary-600 hover:underline dark:text-primary-500",children:"Registrati"})]})]})]})})})})}},6249:function(){}},function(e){e.O(0,[764,569,774,888,179],function(){return e(e.s=7752)}),_N_E=e.O()}]);