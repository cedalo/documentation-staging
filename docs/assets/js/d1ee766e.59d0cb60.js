"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[27939],{83166:(t,e,a)=>{var n=a(64836);e.Z=void 0;var r=n(a(64938)),l=a(85893),o=(0,r.default)((0,l.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"}),"GppGood");e.Z=o},44325:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>N,default:()=>b,frontMatter:()=>k,metadata:()=>g,toc:()=>h});var n=a(3905),r=a(49044),l=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&s(t,a,e[a]);if(p)for(var a of p(e))m.call(e,a)&&s(t,a,e[a]);return t};const k={id:"openweatheronecall",title:"OPENWEATHER.ONECALL",hide_title:!0},N=void 0,g={unversionedId:"functions/integrations/openweatheronecall",id:"functions/integrations/openweatheronecall",title:"OPENWEATHER.ONECALL",description:"OPENWEATHER.ONECALL",source:"@site/streamsheets/functions/integrations/openweatheronecall.md",sourceDirName:"functions/integrations",slug:"/functions/integrations/openweatheronecall",permalink:"/documentation-staging/streamsheets/next/functions/integrations/openweatheronecall",draft:!1,tags:[],version:"current",frontMatter:{id:"openweatheronecall",title:"OPENWEATHER.ONECALL",hide_title:!0},sidebar:"someSidebar",previous:{title:"OPENWEATHER.GEO.REVERSE",permalink:"/documentation-staging/streamsheets/next/functions/integrations/openweathergeoreverse"},next:{title:"SLACK.CHANNEL.LIST",permalink:"/documentation-staging/streamsheets/next/functions/integrations/slackchannellist"}},c={},h=[],f={toc:h};function b(t){var e,a=t,{components:l}=a,s=((t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=d(d({},f),s),o(e,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",null,"OPENWEATHER.ONECALL"),(0,n.kt)(r.Z,{mdxType:"PremiumFeature"}),(0,n.kt)("p",null,"Request weather data, current and forecast, for specified location. Please refer to ",(0,n.kt)("a",d({parentName:"p"},{href:"https://openweathermap.org/api/one-call-api"}),"one call API")," for more information about available options (as of 2021-05-17)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=OPENWEATHER.ONECALL(Lat, Lon, ","[","Options","]",", ","[","ResponseTarget","]",")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Lat"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Latitude value of geographical coordinates")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Lon"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Longitude value of geographical coordinates")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Options (optional)"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"JSON"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"JSON containing parameters like exclude, units or lang")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ResponseTarget (optional)"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Target"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Specify inbox, outbox, cell or cell-range to write any response to")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Boolean,Result,Error"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Request result if no target is specified or TRUE. In case of an error the corresponding ",(0,n.kt)("a",d({parentName:"td"},{href:"../../other/errorcodes"}),"error-code")," is returned.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"A"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"B"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"lat"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"50.38")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"lon"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"6.57")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"exclude"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"hourly, minutely")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"units"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"imperial")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Formula"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=OPENWEATHER.ONECALL(B1,B2)"))),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Request weather data for specified geographical coordinates")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=OPENWEATHER.ONECALL(B1,B2, JSON(A3:B4))"))),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Same but exclude hourly and minutely forecast and additionally set measurement units to imperial")))))}b.isMDXComponent=!0},49044:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(39082),l=a(62659),o=a(83166);function i({inline:t}){return n.createElement(r.Z,{sx:{margin:t?"0px 5px":"5px 5px 15px 5px",height:t?"22px":void 0,color:"#ffffff",backgroundColor:l.Z[500]},size:"small",icon:n.createElement(o.Z,{style:{color:"white"},size:"small"}),label:"Premium"})}}}]);