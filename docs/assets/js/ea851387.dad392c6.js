"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[36547],{83166:(t,e,a)=>{var n=a(64836);e.Z=void 0;var r=n(a(64938)),l=a(85893),i=(0,r.default)((0,l.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");e.Z=i},74099:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>f,contentTitle:()=>k,default:()=>N,frontMatter:()=>d,metadata:()=>b,toc:()=>h});var n=a(3905),r=a(49044),l=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&u(t,a,e[a]);if(s)for(var a of s(e))m.call(e,a)&&u(t,a,e[a]);return t};const d={id:"timescaledrop_table",title:"TIMESCALE.DROP_TABLE",hide_title:!0},k=void 0,b={unversionedId:"functions/databases/timescaledrop_table",id:"version-3.0/functions/databases/timescaledrop_table",title:"TIMESCALE.DROP_TABLE",description:"TIMESCALE.DROP_TABLE",source:"@site/streamsheets_versioned_docs/version-3.0/functions/databases/timescaledrop_table.md",sourceDirName:"functions/databases",slug:"/functions/databases/timescaledrop_table",permalink:"/documentation-staging/streamsheets/functions/databases/timescaledrop_table",draft:!1,tags:[],version:"3.0",frontMatter:{id:"timescaledrop_table",title:"TIMESCALE.DROP_TABLE",hide_title:!0},sidebar:"someSidebar",previous:{title:"TIMESCALE.CREATE_TABLE",permalink:"/documentation-staging/streamsheets/functions/databases/timescalecreate_table"},next:{title:"TIMESCALE.EXPORT",permalink:"/documentation-staging/streamsheets/functions/databases/timescaleexport"}},f={},h=[],g={toc:h};function N(t){var e,a=t,{components:l}=a,u=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&s)for(var n of s(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=c(c({},g),u),i(e,o({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",null,"TIMESCALE.DROP_TABLE"),(0,n.kt)(r.Z,{mdxType:"PremiumFeature"}),(0,n.kt)("p",null,"Drops a table from the timescaledb.  "),(0,n.kt)("admonition",c({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"As of right now, the timescale functions work with the internal timescaledb. Leave the Connection parameter empty and the connection is automatically set up. We are working on allowing further timescale connections. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=TIMESCALE.DROP_TABLE(Connection, TableName)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Connection"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Connection"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Connection to use for querying. Leave this parameter empty. The internal timescaledb is automatically connected.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"TableName"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Defines which table to drop.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"TRUE, if successful.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Formula"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,'=TIMESCALE.DROP_TABLE(, "Table1",)'))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"TRUE"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),'Drops the table "Table1".')))),(0,n.kt)("p",null,"For more examples see our ",(0,n.kt)("a",c({parentName:"p"},{href:"../../guides/connections/timescale"}),"timescale tutorial"),"."))}N.isMDXComponent=!0},49044:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(39082),l=a(62659),i=a(83166);function o({inline:t}){return n.createElement(r.Z,{sx:{margin:t?"0px 5px":"5px",height:t?"22px":void 0,color:"#ffffff",backgroundColor:l.Z[500]},size:"small",icon:n.createElement(i.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}}}]);