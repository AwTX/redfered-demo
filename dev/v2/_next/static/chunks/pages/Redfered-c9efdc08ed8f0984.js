(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{6808:function(t,e,n){var r,o,i;void 0!==(o="function"==typeof(r=i=function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(e,n,i){if("undefined"!=typeof document){"number"==typeof(i=t({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(new Date*1+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(t){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var s in i)i[s]&&(c+="; "+s,!0!==i[s]&&(c+="="+i[s].split(";")[0]));return document.cookie=e+"="+n+c}}function a(t,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),s=c.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var u=e(c[0]);if(s=(r.read||r)(s,u)||e(s),n)try{s=JSON.parse(s)}catch(t){}if(o[u]=s,t===u)break}catch(t){}}return t?o[t]:o}}return o.set=i,o.get=function(t){return a(t,!1)},o.getJSON=function(t){return a(t,!0)},o.remove=function(e,n){i(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}(function(){})})?r.call(e,n,e,t):r)&&(t.exports=o),t.exports=i()},5386:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Redfered",function(){return n(6523)}])},6451:function(t,e,n){"use strict";n.d(e,{EE:function(){return f},JT:function(){return l},NM:function(){return d},P3:function(){return c},Sq:function(){return i},dV:function(){return s},fo:function(){return a},gk:function(){return o},tb:function(){return u}});var r=n(6567);async function o(t){let e=await fetch(r.T5+"/invitationcode?code="+t),n=await e.json();return n}async function i(t){let e=await fetch(r.T5+"/pool_users",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),n=await e.json(),o=n.users;return o}async function a(t,e){let n=await fetch(r.T5+"/contract?contractId="+t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),o=await n.json();return o.contract}async function c(t,e){let n=await fetch(r.T5+"/user_contracts?user="+t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),o=await n.json();return o.contracts}async function s(t,e){let n=await fetch(r.T5+"/img_url?user="+t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),o=await n.json();return o.img_url}async function u(t){let e=await fetch(r.T5+"/api-key",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),n=await e.json();return n.hmac_b64encoded}async function f(t,e,n,o){let i=await fetch(r.T5+"/add_new_contract_item",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({partyA:t,partyB:e,text:n})}),a=await i.json();return a}async function d(t,e,n,o){let i=await fetch(r.T5+"/update_sign",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({contractId:t,user:e,sign:n})}),a=await i.json();return a}async function l(t,e,n,o){let i=await fetch(r.T5+"/update_contract_text",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify({contractId:t,text:e,user:n})}),a=await i.json();return a}},6567:function(t,e,n){"use strict";n.d(e,{Mr:function(){return i},Rf:function(){return o},T5:function(){return r}});let r="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_0xawMsGty",i="7b30d5nqk0gech4bec45dchalf"},6523:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(5893),o=n(7294),i=n(1163),a=n(6808),c=n.n(a),s=n(6451);function u(){let t=(0,i.useRouter)(),e=t.query.id,[n,a]=(0,o.useState)(""),[u,f]=(0,o.useState)(null),[d,l]=(0,o.useState)(null),p=c().get("accessToken");return(0,o.useEffect)(()=>{(async function(){if(void 0!==e){let t=await (0,s.fo)(e,p),n=t.contract.text;a(n);let r=await (0,s.dV)(t.partyA,p);f(r);let o=await (0,s.dV)(t.partyB,p);l(o)}else console.log("contractId is undefined!")})()},[e]),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"center",alignItems:"center"},children:[(0,r.jsx)("div",{style:{display:"flex",flex:1,flexGrow:1,width:"40%",height:"25%",justifyContent:"center",alignItems:"center",borderBottom:"3px solid #8a00ff"},children:(0,r.jsx)("img",{src:"./Redfered-7-9-2024.png",style:{height:"90%"}})}),(0,r.jsxs)("div",{style:{display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",justifyContent:"center",alignItems:"center",gap:"40px"},children:[(0,r.jsx)("img",{src:u,style:{width:"256px",height:"256px"}}),(0,r.jsx)(t=>{let{text:e}=t;return(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"left",lineHeight:3,width:"75%",height:"75%"},children:e})},{text:n}),(0,r.jsx)("img",{src:d,style:{width:"256px",height:"256px"}})]})]})}},1163:function(t,e,n){t.exports=n(6885)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=5386)}),_N_E=t.O()}]);