"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[21896],{83166:(t,e,a)=>{var n=a(64836);e.Z=void 0;var l=n(a(64938)),r=a(85893),i=(0,l.default)((0,r.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");e.Z=i},53924:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>N,default:()=>f,frontMatter:()=>k,metadata:()=>c,toc:()=>h});var n=a(3905),l=a(49044),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&u(t,a,e[a]);if(p)for(var a of p(e))m.call(e,a)&&u(t,a,e[a]);return t};const k={id:"timescaleupdate",title:"TIMESCALE.UPDATE",hide_title:!0},N=void 0,c={unversionedId:"functions/databases/timescaleupdate",id:"version-3.0/functions/databases/timescaleupdate",title:"TIMESCALE.UPDATE",description:"TIMESCALE.UPDATE",source:"@site/streamsheets_versioned_docs/version-3.0/functions/databases/timescaleupdate.md",sourceDirName:"functions/databases",slug:"/functions/databases/timescaleupdate",permalink:"/documentation-staging/streamsheets/functions/databases/timescaleupdate",draft:!1,tags:[],version:"3.0",frontMatter:{id:"timescaleupdate",title:"TIMESCALE.UPDATE",hide_title:!0},sidebar:"someSidebar",previous:{title:"TIMESCALE.SHOW_TABLES",permalink:"/documentation-staging/streamsheets/functions/databases/timescaleshow_tables"},next:{title:"PROTOBUF.DECODE",permalink:"/documentation-staging/streamsheets/functions/dataformats/protobufdecode"}},g={},h=[],b={toc:h};function f(t){var e,a=t,{components:r}=a,u=((t,e)=>{var a={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=d(d({},b),u),i(e,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",null,"TIMESCALE.UPDATE"),(0,n.kt)(l.Z,{mdxType:"PremiumFeature"}),(0,n.kt)("p",null,"Performs an UPDATE query on your timescale database.  "),(0,n.kt)("admonition",d({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"}," As of right now, the timescale functions work with the internal timescaledb. Leave the Connection parameter empty and the connection is automatically set up. We are working on allowing further timescale connections. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=TIMESCALE.UPDATE(Connection, UpdateJSON)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Connection"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Connection"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Connection to use for querying. Leave this parameter empty. The internal timescaledb is automatically connected.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"UpdateJSON"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"JSON"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Defines a query using a JSON cell range, which contains all clauses to build the UPDATE query.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"TRUE, if successful.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"A"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"B"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"update"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"update")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"set"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"SensorA"=42, "SensorB"=23')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"where"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"SensorC" > 250')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"update"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"update")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"6"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"set"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"7"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"SensorA"=42')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"8"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"SensorB"=23')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"9"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"where"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"SensorC" > 250')))),(0,n.kt)("p",null,'These are two ways to enter the update syntax. Either use one long string for the "set" command or divide the command in multiple rows.'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Formula"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=TIMESCALE.UPDATE(, JSON(A1:B3))"))),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"TRUE"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Assuming passed JSON looks like ",(0,n.kt)("inlineCode",{parentName:"td"},"{ update: 'tableName', set: '\"SensorA\"=42', where: '\"SensorB\">50' }")," this will update column SensorA at all rows in which column SensorB has a value greater 50")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=TIMESCALE.UPDATE(, JSON(A5:B9))"))),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"TRUE"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Assuming passed JSON looks like ",(0,n.kt)("inlineCode",{parentName:"td"},"{ update: 'tableName', set: '\"SensorA\"=42', where: '\"SensorB\">50' }")," this will update column SensorA at all rows in which column SensorB has a value greater 50")))),(0,n.kt)("p",null,"For more examples see our ",(0,n.kt)("a",d({parentName:"p"},{href:"../../guides/connections/timescale"}),"timescale tutorial"),"."))}f.isMDXComponent=!0},49044:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),l=a(39082),r=a(62659),i=a(83166);function o({inline:t}){return n.createElement(l.Z,{sx:{margin:t?"0px 5px":"5px 5px 15px 5px",height:t?"22px":void 0,color:"#ffffff",backgroundColor:r.Z[500]},size:"small",icon:n.createElement(i.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}}}]);