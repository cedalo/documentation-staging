"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[70083],{83166:(t,e,n)=>{var a=n(64836);e.Z=void 0;var r=a(n(64938)),l=n(85893),o=(0,r.default)((0,l.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");e.Z=o},79400:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>k,default:()=>b,frontMatter:()=>c,metadata:()=>N,toc:()=>h});var a=n(3905),r=n(49044),l=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&m(t,n,e[n]);if(p)for(var n of p(e))s.call(e,n)&&m(t,n,e[n]);return t};const c={id:"opcuawrite",title:"OPCUA.WRITE",hide_title:!0},k=void 0,N={unversionedId:"functions/connection/opcuawrite",id:"functions/connection/opcuawrite",title:"OPCUA.WRITE",description:"OPCUA.WRITE",source:"@site/streamsheets/functions/connection/opcuawrite.md",sourceDirName:"functions/connection",slug:"/functions/connection/opcuawrite",permalink:"/documentation-staging/streamsheets/next/functions/connection/opcuawrite",draft:!1,tags:[],version:"current",frontMatter:{id:"opcuawrite",title:"OPCUA.WRITE",hide_title:!0},sidebar:"someSidebar",previous:{title:"OPCUA.VARIABLES",permalink:"/documentation-staging/streamsheets/next/functions/connection/opcuavariables"},next:{title:"TIMESCALE.CREATE_TABLE",permalink:"/documentation-staging/streamsheets/next/functions/connection/timescalecreate_table"}},g={},h=[],f={toc:h};function b(t){var e,n=t,{components:l}=n,m=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=d(d({},f),m),o(e,i({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",null,"OPCUA.WRITE"),(0,a.kt)(r.Z,{mdxType:"PremiumFeature"}),(0,a.kt)("p",null,"Sends a write request of a value to an OPC UA Server. The Server will respond, if the write was successful or not. Click here for a more detailed tutorial on opcua functions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("p",null,"=OPCUA.WRITE(Connection, Node, ValueJSON, Target)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Connection"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Connection"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Connection to use for reading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Node"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Path of the node to write to or node id.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ValueJSON"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"JSON"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),'JSON with a "value" and a "dataType" field containing the value to write and the data type of the value.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Target"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Target"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),'INBOX(), OUTBOX("MsgID") or a cell range where the result will be placed. Make sure the cell range is big enough or not everything is displayed.')))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return")),(0,a.kt)("p",null,"The function OPCUA.WRITE always returns a unique random request ID, which can be used with requestinfo to check the state of the request, if no ",(0,a.kt)("a",d({parentName:"p"},{href:"../../other/errorcodes"}),"error"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null})),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"A"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"B"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"1")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"13")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"2")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"dataType"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"UInt32")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Formula"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,"=OPCUA.WRITE(","|","OPCUAProducer,\u201dns=1;s=S1GXQxFYZP.rkN-uZ8aI.example.param1\u201d, JSON(A1:B2), INBOX())"))),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TRUE"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Writes 13 as data type UInt32 into the given node id.")))))}b.isMDXComponent=!0},49044:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294),r=n(39082),l=n(62659),o=n(83166);function i({inline:t}){return a.createElement(r.Z,{sx:{margin:t?"0px 5px":"5px",height:t?"22px":void 0,color:"#ffffff",backgroundColor:l.Z[500]},size:"small",icon:a.createElement(o.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}}}]);