"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[1483],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83999:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>f,toc:()=>h});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&p(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&p(t,n,e[n]);return t};const c={id:"inboxdata",title:"INBOXDATA",hide_title:!0},d=void 0,f={unversionedId:"functions/streamsheet/inboxdata",id:"functions/streamsheet/inboxdata",title:"INBOXDATA",description:"INBOXDATA",source:"@site/streamsheets/functions/streamsheet/inboxdata.md",sourceDirName:"functions/streamsheet",slug:"/functions/streamsheet/inboxdata",permalink:"/documentation-staging/streamsheets/next/functions/streamsheet/inboxdata",draft:!1,tags:[],version:"current",frontMatter:{id:"inboxdata",title:"INBOXDATA",hide_title:!0},sidebar:"someSidebar",previous:{title:"INBOX",permalink:"/documentation-staging/streamsheets/next/functions/streamsheet/inbox"},next:{title:"INBOXMETADATA",permalink:"/documentation-staging/streamsheets/next/functions/streamsheet/inboxmetadata"}},g={},h=[],k={toc:h};function b(t){var e,n=t,{components:a}=n,p=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&u.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=m(m({},k),p),l(e,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",null,"INBOXDATA"),(0,r.kt)("p",null,"Creates a JSON key from the given values or range to retrieve data from within a message. This function is normally used in the READ function. INBOXDATA retrieves values from the Data section of a message."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=INBOXDATA(Streamsheet, Message, ValuesOrRange)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Streamsheet"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Sheet"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Define the Streamsheet to retrieve inbox data from.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Options:")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Message"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Message to retrieve data from. If left empty, the current message in the inbox is used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ValuesOrRange"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"A list of values or a range of cells describing the path to the element path within a JSON structure.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"A string key to provide a path within a message.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,'=INBOXDATA(,, "Customer", "Name")'))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"[P1][]","[Customer][Name]"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns an identifier that can be used in other Streamsheet functions like READ. As Streamsheet and Message are left empty, the current Streamsheet and inbox Message is used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=INBOXDATA(,, B1:B2)"))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"[P1][]","[Customer][Name]"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),'Here the values within the cell range B1:B2 ("Customer", "Name") will be used to concatenate the JSON path.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,'=READ(INBOXDATA(,, "Customer", "Name"), C7, "String")'))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The READ function return the last part of the JSON Path. The value of the Message at the given Path will be pushed into cell C7.")))))}b.isMDXComponent=!0}}]);