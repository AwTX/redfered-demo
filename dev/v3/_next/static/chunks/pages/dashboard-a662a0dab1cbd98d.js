(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{1075:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return s(3933)}])},3933:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Dashboard}});var n=s(5893),r=s(3478),a=s(41),l=s(6808),c=s.n(l);function NewRequestsTableRow(e){let{item:t,refresh:s}=e,r={partyA:c().get("username"),partyB:"".concat(t),contract:{text:"",ts:0},signs:{me:{sign:!0,ts:0},itemStr:{sign:!1,ts:0}}};return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-4 py-2 text-center",children:t}),(0,n.jsx)("td",{className:"px-4 py-2",children:(0,n.jsx)(a.Z,{contract:r,refresh:s})})]})}let o="px-4 py-2 text-center";function NewRequestsTable(e){let{data:t,refresh:s}=e;if(null!==t)return(0,n.jsx)("div",{className:"my-4 mx-4 h-1/2 bg-white rounded-lg",children:(0,n.jsxs)("table",{className:"table-auto",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:o,children:"User"}),(0,n.jsx)("th",{className:o,children:"Documento"})]})}),(0,n.jsx)("tbody",{children:void 0==t?null:t.map(e=>(0,n.jsx)(NewRequestsTableRow,{item:e,refresh:s}))})]})})}var i=s(6738),u=s(6837),h=s(892),d=s(7294);function Dashboard(){let[e,t]=(0,d.useState)(null),[s,a]=(0,d.useState)(null),[l,o]=(0,d.useState)(0),f=c().get("accessToken");(0,d.useEffect)(()=>{!async function(){let e=await (0,h.P3)(f);console.log("contracts = ",e),t(e);let s=await (0,h.Sq)(f);console.log("users = ",s);let n=function(e,t){let s=c().get("username"),n=function(e){let t=[];if(0===e.length)return t;let s=c().get("username");return console.log("me: ",s),console.log("contracts is instance of Array? ",e instanceof Array),console.log("contracts type is? ",typeof e),console.log("Extracting partners from: ",e),e.forEach(e=>{let n=e.partyA!==s;n?t.push(e.partyA):t.push(e.partyB)}),t}(t);console.log("Contract exists for: ",n);let r=e.filter(e=>!n.includes(e)&e!==s);return console.log("Contract does not exist for: ",r),r}(s,e);a(n)}()},[l]);let setDataForChild=()=>{o(l+1)};return(0,n.jsx)(i.default,{component:(0,n.jsxs)("div",{className:"flex-col",children:[(0,n.jsx)("h3",{className:"w-full my-4 mx-4",children:"Le mie richieste"}),(0,n.jsx)(r.e,{data:e,refresh:setDataForChild}),(0,n.jsx)("hr",{class:"h-px my-8 bg-blue-200 border-0 dark:bg-gray-200"}),(0,n.jsx)("h3",{className:"w-full my-4 mx-4",children:"Invia una nuova richiesta"}),(0,n.jsx)(NewRequestsTable,{data:s,refresh:setDataForChild})]}),selected:u.g.Dashboard})}}},function(e){e.O(0,[439,111,191,208,764,741,682,662,738,53,774,888,179],function(){return e(e.s=1075)}),_N_E=e.O()}]);