"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[61556],{83166:(e,t,n)=>{var a=n(64836);t.Z=void 0;var r=a(n(64938)),o=n(85893),i=(0,r.default)((0,o.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");t.Z=i},40941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>f,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var a=n(3905),r=n(49044),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&m(e,n,t[n]);return e};const d={id:"websocketconnect",title:"WEBSOCKET.CONNECT",hide_title:!0},k=void 0,h={unversionedId:"functions/connection/websocketconnect",id:"version-3.0/functions/connection/websocketconnect",title:"WEBSOCKET.CONNECT",description:"WEBSOCKET.CONNECT",source:"@site/streamsheets_versioned_docs/version-3.0/functions/connection/websocketconnect.md",sourceDirName:"functions/connection",slug:"/functions/connection/websocketconnect",permalink:"/documentation-staging/streamsheets/functions/connection/websocketconnect",draft:!1,tags:[],version:"3.0",frontMatter:{id:"websocketconnect",title:"WEBSOCKET.CONNECT",hide_title:!0},sidebar:"someSidebar",previous:{title:"TIMESCALE.UPDATE",permalink:"/documentation-staging/streamsheets/functions/connection/timescaleupdate"},next:{title:"WEBSOCKET.LISTEN",permalink:"/documentation-staging/streamsheets/functions/connection/websocketlisten"}},N={},g=[],b={toc:g};function f(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},b),m),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h1",null,"WEBSOCKET.CONNECT"),(0,a.kt)(r.Z,{mdxType:"PremiumFeature"}),(0,a.kt)("p",null,"The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user(client) and the server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply. "),(0,a.kt)("p",null,"This functions opens a WebSocket Connection using the given URL. Whenever WEBSOCKET.CONNECT is evaluated a new connection is created if: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the connection is not currently active or "),(0,a.kt)("li",{parentName:"ol"},"the connection arguments (URL and/or Options) changed. ")),(0,a.kt)("p",null,"If the connection is active and the arguments are unchanged since the last evaluation the active connection is returned and no new connection is created. "),(0,a.kt)("p",null,"The recommended way to open a WebSocket connection (and keep it open) is to place the WEBSOCKET.CONNECT function in a Streamsheet running with the calculation mode ",(0,a.kt)("strong",{parentName:"p"},'"On Time"')," and an interval of e.g. 5 seconds. This way the connection is verified every 5 seconds and recreated if necessary."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("p",null,"=WEBSOCKET.CONNECT(URL, ","[","Options","]",")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"URL"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Producer to use for publishing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Options (optional)"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"JSON"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),'JSON with connection options. Common options include "auth": "username:password" and "headers": { "HeaderName": "HeaderValue"}.')))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"WebSocket Connection, if no ",(0,a.kt)("a",u({parentName:"td"},{href:"../../other/errorcodes"}),"error"),".")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Formula"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,'=WEBSOCKET.CONNECT("ws://',(0,a.kt)("a",u({parentName:"td"},{href:"http://www.example.org%22"}),'www.example.org"'),',, INBOX("S2"))'))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"WebSocket Connection"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),'Incoming WebSocket messages are placed in the Inbox of the Streamsheet "S2"')))))}f.isMDXComponent=!0},49044:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(39082),o=n(62659),i=n(83166);function l({inline:e}){return a.createElement(r.Z,{sx:{margin:e?"0px 5px":"5px 5px 15px 5px",height:e?"22px":void 0,color:"#ffffff",backgroundColor:o.Z[500]},size:"small",icon:a.createElement(i.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}}}]);