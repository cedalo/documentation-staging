"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[51070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>f,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&m(e,n,t[n]);return e};const s={id:"year",title:"YEAR",hide_title:!0},d=void 0,f={unversionedId:"functions/date/year",id:"functions/date/year",title:"YEAR",description:"YEAR",source:"@site/streamsheets/functions/date/year.md",sourceDirName:"functions/date",slug:"/functions/date/year",permalink:"/documentation-staging/streamsheets/next/functions/date/year",draft:!1,tags:[],version:"current",frontMatter:{id:"year",title:"YEAR",hide_title:!0},sidebar:"someSidebar",previous:{title:"WEEKDAY",permalink:"/documentation-staging/streamsheets/next/functions/date/weekday"},next:{title:"BIN.TO.DEC",permalink:"/documentation-staging/streamsheets/next/functions/engineering/bintodec"}},k={},b=[],y={toc:b};function g(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),m),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",null,"YEAR"),(0,r.kt)("p",null,"Returns the year of the date value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=YEAR(DateValue, ","[","Round","]",")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"DateValue"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A serial number consists out of two numbers. The number to the left of the decimal define the days since 01.01.1900. The number to the right of the decimal define the fraction of the day.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Round (optional)"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Defines, if value should be rounded. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default value: TRUE")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Year evaluated from date value.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=YEAR(43238)"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"2018"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The given date value represents the 18th of May, 2018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=YEAR(39447.99999422, true)"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"2008"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Rounded to 2008")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=YEAR(39447.99999422, false)"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"2007"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Same input value as before but no rounding applied")))))}g.isMDXComponent=!0}}]);