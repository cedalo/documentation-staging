"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[2174],{83166:(e,t,n)=>{var a=n(64836);t.Z=void 0;var i=a(n(64938)),o=n(85893),r=(0,i.default)((0,o.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");t.Z=r},13328:(e,t,n)=>{var a=n(64836);t.Z=void 0;var i=a(n(64938)),o=n(85893),r=(0,i.default)((0,o.jsx)("path",{d:"m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"}),"NewReleases");t.Z=r},91259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>w,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var a=n(3905),i=n(78901),o=n(49044),r=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))c.call(t,n)&&k(e,n,t[n]);return e};const u={id:"mc-tokens",title:"Tokens",sidebar_label:"Tokens"},h=void 0,g={unversionedId:"management-center/overview/administration/mc-tokens",id:"version-2.8/management-center/overview/administration/mc-tokens",title:"Tokens",description:"Application tokens enable accessing Management Center features through the Rest APIs.",source:"@site/mosquitto_versioned_docs/version-2.8/management-center/overview/administration/tokens.md",sourceDirName:"management-center/overview/administration",slug:"/management-center/overview/administration/mc-tokens",permalink:"/documentation-staging/mosquitto/management-center/overview/administration/mc-tokens",draft:!1,tags:[],version:"2.8",frontMatter:{id:"mc-tokens",title:"Tokens",sidebar_label:"Tokens"},sidebar:"someSidebar",previous:{title:"Settings",permalink:"/documentation-staging/mosquitto/management-center/overview/administration/mc-settings"},next:{title:"Users",permalink:"/documentation-staging/mosquitto/management-center/overview/administration/mc-users"}},v={},f=[{value:"Application Tokens Overview",id:"application-tokens-overview",level:2},{value:"Create Application Token",id:"create-application-token",level:2},{value:"Revoke an Application Token",id:"revoke-an-application-token",level:2}],b={toc:f};function w(e){var t,r=e,{components:k}=r,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(t=d(d({},b),u),s(t,l({components:k,mdxType:"MDXLayout"}))),(0,a.kt)("span",null),(0,a.kt)(i.Z,{version:"2.5",mdxType:"SinceVersion"}),(0,a.kt)(o.Z,{mdxType:"PremiumFeature"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Application tokens enable accessing Management Center features through the Rest APIs.\nTo get a deeper understanding of Application Topics have a look at our ",(0,a.kt)("a",d({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/guides/mc-guide-tokens"}),"Application Tokens Guide")),(0,a.kt)("h2",d({},{id:"application-tokens-overview"}),"Application Tokens Overview"),(0,a.kt)("p",null,"The Tokens Overview lists all existing valid tokens. Following a table with a set of tokens:"),(0,a.kt)("img",{className:"docimagemb",src:n(75111).Z,width:"100%"}),(0,a.kt)("p",null,"The fields (columns) of this table represent all the information that Management Center stores about an application\ntoken, namely:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name")," - The name of the token. Must be unique. Used for a human-readable identifier to a token ",(0,a.kt)("em",{parentName:"li"},"(max 30 characters)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Role")," - Role provided by the token (a role that the one using the token gets)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Requested by")," - Name of the person who created this token"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Issue Date")," - Date and time when the token was created"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Valid Until")," - Date and time when token will expire"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Last Used")," - Date and time when the token was last used"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hash")," - Hash of the token. Used to identify the token when issuing requests to Application Tokens REST API"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Status"),' - Status of the token, e. i. "Valid" or "Invalid"')),(0,a.kt)("h2",d({},{id:"create-application-token"}),"Create Application Token"),(0,a.kt)("p",null,'To create a new application token, "New Token" Button in the top left to open the following dialog:'),(0,a.kt)("img",{className:"docimagemb",src:n(81561).Z,width:"70%"}),(0,a.kt)("p",null,"There you can specify the parameters required for the token generation, namely,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token Name")," (30 characters long at max)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Role")," used for the access to the APIs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Valid Until")," defining the expiry date")),(0,a.kt)("p",null,'After filling in the form and clicking "Create", the token will be generated and shown:'),(0,a.kt)("img",{className:"docimagemb",src:n(59124).Z,width:"70%"}),(0,a.kt)("p",null,"At this stage, please copy the token using the copy button and keep it in a safe place as it will not be stored in the\nManagement Center. You can close the dialog afterward by clicking anywhere outside of it."),(0,a.kt)("admonition",d({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Don't forget to copy the token after creating it, as you will never see it again.")),(0,a.kt)("p",null,"If everything worked correctly, the new connection should appear on the overview page."),(0,a.kt)("h2",d({},{id:"revoke-an-application-token"}),"Revoke an Application Token"),(0,a.kt)("p",null,"To remove an application token, navigate to the Application Tokens view using the right menu bar. Find the entry with\nthe token that you want to remove inside the presented table and click on the trash bin icon on the right."))}w.isMDXComponent=!0},49044:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),i=n(39082),o=n(62659),r=n(83166);function s({inline:e}){return a.createElement(i.Z,{sx:{margin:e?"0px 5px":"5px",height:e?"22px":void 0,color:"#ffffff",backgroundColor:o.Z[500]},size:"small",icon:a.createElement(r.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}},78901:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(39082),o=n(13328);function r({version:e}){return e?a.createElement(i.Z,{sx:{margin:"5px"},color:"info",size:"small",icon:a.createElement(o.Z,{size:"small"}),label:`${e}`}):a.createElement(a.Fragment,null)}},59124:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tokencreatesuccess-04d08bc2ed5552169ffb9bbee2f9d90f.png"},81561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tokennew-87fd61e55b442d223488e3d58ab0cb0f.png"},75111:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tokens-fa166c8d89e662373b1670030379b4a1.png"}}]);