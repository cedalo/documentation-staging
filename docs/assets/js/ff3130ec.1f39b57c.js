"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[92372],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),f=u(n),c=a,d=f["".concat(p,".").concat(c)]||f[c]||m[c]||l;return n?r.createElement(d,o(o({ref:e},s),{},{components:n})):r.createElement(d,o({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15538:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>f,metadata:()=>d,toc:()=>k});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&s(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&s(t,n,e[n]);return t};const f={id:"offset",title:"OFFSET",hide_title:!0},c=void 0,d={unversionedId:"functions/lookup/offset",id:"functions/lookup/offset",title:"OFFSET",description:"OFFSET",source:"@site/streamsheets/functions/lookup/offset.md",sourceDirName:"functions/lookup",slug:"/functions/lookup/offset",permalink:"/documentation-staging/streamsheets/next/functions/lookup/offset",draft:!1,tags:[],version:"current",frontMatter:{id:"offset",title:"OFFSET",hide_title:!0},sidebar:"someSidebar",previous:{title:"MATCH",permalink:"/documentation-staging/streamsheets/next/functions/lookup/match"},next:{title:"ROW",permalink:"/documentation-staging/streamsheets/next/functions/lookup/row"}},g={},k=[],b={toc:k};function h(t){var e,n=t,{components:a}=n,s=((t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&u.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=m(m({},b),s),l(e,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",null,"OFFSET"),(0,r.kt)("p",null,"Returns a cell range that is defined by specified number of rows and columns from an initial range."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=OFFSET(Range, RowOffset, ColumnOffset, ","[","Height","]",", ","[","Width","]",")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Range"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Range"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"A cell or cell range which defines the base of returned cell range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RowOffset"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Row offset from top left position of Range, might be positive or negative.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ColumnOffset"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Column offset from top left position of Range, might be positive or negative.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Height (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number of rows for result range. Height must be greater than zero. If not given the height of specified base cell range is used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Width (optional)"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number of columns for result range. Width must be greater than zero. If not given the width of specified base cell range is used.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"If height and width define a cell: Value of cell   If height and width define a cell range: #VALUE")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=OFFSET(A2, 2, 1, 1, 1)"))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"6"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"B4 has an offset of 2 rows and 1 column from A1. The cell value is 6.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=SUM(OFFSET(A2, 1, 1, 2, 1))"))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"10"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"B3 has an offset of 1 row and 1 column from A1. The SUM of the range defined through height and width is 10.")))))}h.isMDXComponent=!0}}]);