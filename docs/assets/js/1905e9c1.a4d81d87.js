"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[96772],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>y,frontMatter:()=>m,metadata:()=>k,toc:()=>g});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&c(e,r,t[r]);return e};const m={id:"clearcells",title:"CLEARCELLS",hide_title:!0},d=void 0,k={unversionedId:"functions/streamsheet/clearcells",id:"functions/streamsheet/clearcells",title:"CLEARCELLS",description:"CLEARCELLS",source:"@site/streamsheets/functions/streamsheet/clearcells.md",sourceDirName:"functions/streamsheet",slug:"/functions/streamsheet/clearcells",permalink:"/documentation-staging/streamsheets/next/functions/streamsheet/clearcells",draft:!1,tags:[],version:"current",frontMatter:{id:"clearcells",title:"CLEARCELLS",hide_title:!0},sidebar:"someSidebar",previous:{title:"CELL.DELETE",permalink:"/documentation-staging/streamsheets/next/functions/streamsheet/celldelete"},next:{title:"COLOR.CONVERT",permalink:"/documentation-staging/streamsheets/next/functions/streamsheet/colorconvert"}},f={},g=[],b={toc:g};function y(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},b),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",null,"CLEARCELLS"),(0,n.kt)("p",null,"Removes value, formula or format of cells in specified range."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=CLEARCELLS(Range, ","[","Type","]",")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Range"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Range"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Range of cells to clear.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Type (optional)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"ClearCellType"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Number to specify what to clear. Note: a combination of type numbers is supported too.",(0,n.kt)("br",null),(0,n.kt)("br",null),"Options:",(0,n.kt)("br",null),"1: Clear cell value",(0,n.kt)("br",null),"2: Clear cell formula",(0,n.kt)("br",null),"3: Clear cell formula and value ",(0,n.kt)("br",null),(0,n.kt)("br",null),"Default value: 1")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Boolean or Error"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"TRUE on success or an ",(0,n.kt)("a",s({parentName:"td"},{href:"../../other/errorcodes"}),"error")," code otherwise.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Formula"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=CLEARCELLS(A1:B2)"))),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"TRUE"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Clears the value of each cell in range A1:B1.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=CLEARCELLS(A1:B2, 1)"))),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"TRUE"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Same as before.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=CLEARCELLS(A1:B2, 3)"))),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"TRUE"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Clears value and formula of each cell in range A1:B1.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,"=CLEARCELLS(A1:B2, 7)"))),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"TRUE"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Deletes all cells in range A1:B1.")))))}y.isMDXComponent=!0}}]);