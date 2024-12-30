(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{8652:function(e,t,s){"use strict";s.d(t,{Z:function(){return ContractCard}});var a=s(5893),l=s(7294),n=s(9830),c=s.n(n),r=s(6653),i=s(4054),o=s(3841),d=s(4338),x=s(9417),m=s(7141),u=s(5365),h=s(6808),j=s.n(h),f=s(2949),p=s(892);function ContractCard(e){let{contract:t,refresh:s,close:n}=e,h=j().get("accessToken"),y=j().get("username"),[N,g]=(0,l.useState)(t.contract.text),[v,b]=(0,l.useState)(!1),[w,C]=(0,l.useState)(""),send=async()=>{let e;console.log("saving draft: ",N),e=void 0==t.contractId?await (0,p.EE)(y,t.partyB,N,h):await (0,p.JT)(t.contractId,N,y,h);let a="Success"==e.result?"success":"error";C(a),b(!0),t.contract.text=N,setTimeout(()=>{b(!1)},1500),"Success"==e.result&&s()};return(0,a.jsxs)("div",{className:"w-1/2 h-3/4 mx-auto my-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200",children:[(0,a.jsx)("h2",{className:"mx-4 px-2 my-4 text-lg font-semibold text-gray-800",children:"Contratto Tra le parti"}),(0,a.jsx)("div",{id:"default-sidebar",className:"flex w-full px-3 py-4 bg-white",children:(0,a.jsxs)("ul",{className:"w-full mx-4 my-4 space-y-2 font-medium",children:[(0,a.jsx)("li",{className:"w-full",children:(0,a.jsxs)("div",{className:"flex w-full justify-between",children:[(0,a.jsx)("span",{className:"flex ".concat(c().className," text-[16px]"),children:"Nome richiedente"}),(0,a.jsx)("span",{className:"flex ".concat(c().className," text-[16px]"),children:t.partyA})]})}),(0,a.jsx)("hr",{class:"h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"}),(0,a.jsx)("li",{className:"w-full",children:(0,a.jsxs)("div",{className:"flex w-full justify-between",children:[(0,a.jsx)("span",{className:"flex ".concat(c().className," text-[16px]"),children:"Nome proprietario logo"}),(0,a.jsx)("span",{className:"flex ".concat(c().className," text-[16px]"),children:t.partyB})]})}),void 0==t.contractId?null:(0,a.jsx)("hr",{class:"h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"}),void 0==t.contractId?null:(0,a.jsx)("li",{className:"w-full",children:(0,a.jsxs)("div",{className:"flex w-full justify-between",children:[(0,a.jsx)("span",{className:"flex ".concat(c().className," text-[16px]"),children:"Esito richiedente"}),t.signs[t.partyA].sign?(0,a.jsx)("span",{className:"flex ".concat(c().className," text-[16px] text-green-500"),children:"Accepted"}):(0,a.jsx)("span",{className:"flex ".concat(c().className," text-[16px] text-red-500"),children:"Refused"})]})}),void 0==t.contractId?null:(0,a.jsx)("hr",{class:"h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"}),void 0==t.contractId?null:(0,a.jsx)("li",{className:"w-full",children:(0,a.jsxs)("div",{className:"flex w-full justify-between",children:[(0,a.jsx)("span",{className:"flex ".concat(c().className," text-[16px]"),children:"Esito proprietario"}),t.signs[t.partyB].sign?(0,a.jsx)("span",{className:"flex ".concat(c().className," text-[16px] text-green-500"),children:"Accepted"}):(0,a.jsx)("span",{className:"flex ".concat(c().className," text-[16px] text-red-500"),children:"Refused"})]})})]})}),(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsxs)(i.Z,{className:"w-full h-full",children:[(0,a.jsx)(o.Z,{htmlFor:"component-outlined",children:"Contratto"}),N==t.contract.text?null:(0,a.jsx)(r.Z,{color:"warning",badgeContent:" ",variant:"dot",className:"absolute -top-0 start-0"}),(0,a.jsx)(d.Z,{id:"component-outlined",defaultValue:N,multiline:!0,rows:10,label:"Name",className:"w-full",onChange:e=>g(e.target.value)})]}),(0,a.jsxs)("div",{className:"mt-4 flex justify-evenly",children:[(0,a.jsx)(x.Z,{className:"bg-color-[#00FF00]",variant:"outlined",startIcon:(0,a.jsx)(m.Z,{}),onClick:n,children:"Discard"}),(0,a.jsx)(x.Z,{className:"bg-color-[#00FF00]",disabled:N==t.contract.text,onClick:send,variant:"outlined",endIcon:(0,a.jsx)(u.Z,{}),children:"Send"})]}),(0,a.jsx)("div",{className:"flex my-auto mx-auto",children:v?(0,a.jsx)(f.Z,{severity:w}):null})]})]})}},41:function(e,t,s){"use strict";s.d(t,{Z:function(){return ContractModal}});var a=s(5893),l=s(7294),n=s(4453),c=s(8652),r=s(1797);function ContractModal(e){let{contract:t,refresh:s}=e,[i,o]=l.useState(!1),handleClose=()=>o(!1);return(0,a.jsxs)("div",{className:"flex w-full",children:[(0,a.jsx)(r.Z,{type:"button",className:"mx-auto cursor-pointer",onClick:()=>o(!0)}),(0,a.jsx)(n.Z,{open:i,onClose:handleClose,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"flex",children:(0,a.jsx)(c.Z,{contract:t,refresh:s,className:"mx-auto my-auto",close:handleClose})})]})}},3478:function(e,t,s){"use strict";s.d(t,{e:function(){return ContractsTable}});var a=s(5893),l=s(7294),n=s(41),c=s(675),r=s(9199);let i=r.mM.create({header:{fontSize:10,color:"gray",textAlign:"center",marginTop:10},title:{fontSize:24,textAlign:"center",marginTop:30,marginBottom:20,fontWeight:"bold"},divider:{borderBottom:"1px solid #ccc",marginVertical:10},sectionTitle:{fontSize:14,fontWeight:"bold",marginTop:20},sectionContent:{fontSize:12,marginBottom:20},bodyText:{fontSize:12,lineHeight:1.5,marginBottom:20},footer:{fontSize:10,textAlign:"center",position:"absolute",bottom:10,left:0,right:0}});function ContractPdf(e){let{contract:t}=e;return(0,a.jsx)(r.BB,{children:(0,a.jsxs)(r.T3,{size:"A4",style:{padding:40},children:[(0,a.jsx)(r.xv,{style:i.header,children:"~ Created with Redfered ~"}),(0,a.jsx)(r.xv,{style:i.title,children:"Contract Agreement"}),(0,a.jsx)(r.xv,{style:i.divider}),(0,a.jsx)(r.xv,{style:i.sectionTitle,children:"Party A:"}),(0,a.jsx)(r.xv,{style:i.sectionContent,children:t.partyA}),(0,a.jsx)(r.xv,{style:i.sectionTitle,children:"Party B:"}),(0,a.jsx)(r.xv,{style:i.sectionContent,children:t.partyB}),(0,a.jsx)(r.xv,{style:i.divider}),(0,a.jsx)(r.xv,{style:i.bodyText,children:t.contract.text}),(0,a.jsx)(r.xv,{render:e=>{let{pageNumber:t,totalPages:s}=e;return"Page ".concat(t," of ").concat(s)},style:i.footer})]})})}var o=s(4453),d=s(2249);function PdfModal(e){let{contract:t}=e,[s,n]=l.useState(!1);return(0,a.jsxs)("div",{children:[(0,a.jsx)(d.Z,{onClick:()=>n(!0)}),(0,a.jsx)(o.Z,{open:s,onClose:()=>n(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsx)(r.Z$,{className:"w-4/5 h-4/5",children:(0,a.jsx)(ContractPdf,{contract:t,className:"w-full h-full"})})})]})}var x=s(7141),m=s(2026),u=s(5537),h=s(6808),j=s.n(h),f=s(2949),p=s(892);function ContractsTableRow(e){let{item:t,refresh:s}=e,r=j().get("accessToken"),i=j().get("username"),o=new Date(1e3*t.signs[t.partyA].ts),d=t.partyA==i?t.partyB:t.partyA,[h,y]=(0,l.useState)(!1),[N,g]=(0,l.useState)(""),deleteItem=async()=>{let e=await (0,p.Vm)(t.contractId,r),a="Success"==e.result?"success":"error";g(a),"Success"==e.result&&s(),y(!0),setTimeout(()=>{y(!1)},1500)};return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"px-4 py-2 text-center",children:d}),(0,a.jsx)("td",{className:"px-4 py-2 text-center",children:t.partyA}),(0,a.jsx)("td",{className:"px-4 py-2",children:(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(c.Z,{value:t.signs[t.partyA].sign})})}),(0,a.jsx)("td",{className:"px-4 py-2",children:(0,a.jsx)("div",{className:"flex justify-center",children:t.signs[t.partyB].sign?(0,a.jsx)(m.Z,{}):(0,a.jsx)(u.Z,{})})}),(0,a.jsx)("td",{className:"px-4 py-2 text-center",children:o.toUTCString()}),(0,a.jsx)("td",{className:"px-4 py-2",children:(0,a.jsx)(n.Z,{contract:t,refresh:s})}),(0,a.jsx)("td",{className:"px-4 py-2",children:(0,a.jsx)("div",{className:"flex justify-center cursor-pointer",children:(0,a.jsx)(PdfModal,{contract:t})})}),(0,a.jsx)("td",{className:"px-4 py-2",children:(0,a.jsx)("div",{className:"flex justify-center cursor-pointer",children:(0,a.jsx)(x.Z,{type:"button",color:"error",onClick:deleteItem})})}),(0,a.jsx)("div",{className:"flex mx-auto",children:h?(0,a.jsx)(f.Z,{severity:N}):null})]})}let y="px-4 py-2 text-center";function ContractsTable(e){let{data:t,refresh:s}=e;if(null!==t)return(0,a.jsx)("div",{className:"my-4 mx-4 h-1/2 bg-white rounded-lg",children:(0,a.jsxs)("table",{className:"table-auto",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:y,children:"Partner"}),(0,a.jsx)("th",{className:y,children:"Inviata da"}),(0,a.jsx)("th",{className:y,children:"La mia firma"}),(0,a.jsx)("th",{className:y,children:"Firma del partner"}),(0,a.jsx)("th",{className:y,children:"Ultimo aggiornamento"}),(0,a.jsx)("th",{className:y,children:"Modifica"}),(0,a.jsx)("th",{className:y,children:"Scarica"}),(0,a.jsx)("th",{className:y,children:"Elimina"})]})}),(0,a.jsx)("tbody",{children:void 0==t?null:t.map(e=>(0,a.jsx)(ContractsTableRow,{item:e,refresh:s}))})]})})}},2949:function(e,t,s){"use strict";s.d(t,{Z:function(){return SimpleAlert}});var a=s(5893),l=s(3612),n=s(2026);function SimpleAlert(e){let{severity:t}=e;return(console.log("severity =",t),"error"!==t&"success"!==t)?null:(0,a.jsx)(l.Z,{icon:(0,a.jsx)(n.Z,{fontSize:"inherit"}),severity:t,className:"fixed top-0 mx-auto",children:"success"==t?"Contratto salvato!":"Error"})}},2480:function(){}}]);