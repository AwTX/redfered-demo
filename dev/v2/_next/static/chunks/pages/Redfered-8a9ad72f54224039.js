(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{6808:function(e,t,n){var r,o,i;void 0!==(o="function"==typeof(r=i=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(new Date*1+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(n);/^[\{\[]/.test(c)&&(n=c)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var a in i)i[a]&&(s+="; "+a,!0!==i[a]&&(s+="="+i[a].split(";")[0]));return document.cookie=t+"="+n+s}}function c(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var s=i[c].split("="),a=s.slice(1).join("=");n||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var u=t(s[0]);if(a=(r.read||r)(a,u)||t(a),n)try{a=JSON.parse(a)}catch(e){}if(o[u]=a,e===u)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return c(e,!1)},o.getJSON=function(e){return c(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}(function(){})})?r.call(t,n,t,e):r)&&(e.exports=o),e.exports=i()},5386:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Redfered",function(){return n(6523)}])},6451:function(e,t,n){"use strict";n.d(t,{P3:function(){return s},Sq:function(){return i},dV:function(){return a},fo:function(){return c},gk:function(){return o}});var r=n(6567);async function o(e){let t=await fetch(r.T5+"/invitationcode?code="+e),n=await t.json();return n}async function i(e){let t=await fetch(r.T5+"/pool_users",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}),n=await t.json();console.log("[API RESPONSE] /pool_users ",n);let o=JSON.parse(n.users);return o}async function c(e,t){let n=await fetch(r.T5+"/contract?contractId="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await n.json(),i=JSON.parse(o.body);return i.contract}async function s(e,t){let n=await fetch(r.T5+"/user_contracts?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await n.json();return o.contracts}async function a(e,t){let n=await fetch(r.T5+"/img_url?user="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}),o=await n.json();return o.contracts}},6567:function(e,t,n){"use strict";n.d(t,{Mr:function(){return i},Rf:function(){return o},T5:function(){return r}});let r="https://890qn036x6.execute-api.eu-west-1.amazonaws.com/prod",o="eu-west-1_0xawMsGty",i="7b30d5nqk0gech4bec45dchalf"},6523:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),o=n(7294),i=n(1163),c=n(6808),s=n.n(c),a=n(6451);function u(){let e=(0,i.useRouter)(),t=e.query.contractId,[n,c]=(0,o.useState)(""),[u,f]=(0,o.useState)(null),[l,d]=(0,o.useState)(null),p=s().get("accessToken");return(0,o.useEffect)(()=>{(async function(){if(void 0!==user){let e=await (0,a.fo)(t,p),n=e.contract.text;c(n);let r=await (0,a.dV)(e.partyA,p);f(r);let o=await (0,a.dV)(e.partyA,p);d(o)}else console.log("user is undefined!")})()},[t]),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"center",alignItems:"center"},children:[(0,r.jsx)("div",{style:{display:"flex",flex:1,flexGrow:1,width:"40%",height:"25%",justifyContent:"center",alignItems:"center",borderBottom:"3px solid #8a00ff"},children:(0,r.jsx)("img",{src:"./Redfered-7-9-2024.png",style:{height:"90%"}})}),(0,r.jsxs)("div",{style:{display:"flex",flex:2,flexGrow:4,flexDirection:"row",width:"75%",justifyContent:"center",alignItems:"center",gap:"40px"},children:[(0,r.jsx)("img",{src:u}),(0,r.jsx)(e=>{let{text:t}=e;return(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",lineHeight:3,width:"75%",height:"75%"},children:t})},{text:n}),(0,r.jsx)("img",{src:l})]})]})}},1163:function(e,t,n){e.exports=n(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5386)}),_N_E=e.O()}]);