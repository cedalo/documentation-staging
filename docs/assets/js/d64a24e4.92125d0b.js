"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[77183],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(k,o(o({ref:e},c),{},{components:r})):n.createElement(k,o({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42446:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>f,contentTitle:()=>d,default:()=>h,frontMatter:()=>m,metadata:()=>k,toc:()=>g});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&c(t,r,e[r]);if(i)for(var r of i(e))u.call(e,r)&&c(t,r,e[r]);return t};const m={id:"search",title:"SEARCH",hide_title:!0},d=void 0,k={unversionedId:"functions/text/search",id:"functions/text/search",title:"SEARCH",description:"SEARCH",source:"@site/streamsheets/functions/text/search.md",sourceDirName:"functions/text",slug:"/functions/text/search",permalink:"/documentation-staging/streamsheets/next/functions/text/search",draft:!1,tags:[],version:"current",frontMatter:{id:"search",title:"SEARCH",hide_title:!0},sidebar:"someSidebar",previous:{title:"RIGHT",permalink:"/documentation-staging/streamsheets/next/functions/text/right"},next:{title:"SPLIT",permalink:"/documentation-staging/streamsheets/next/functions/text/split"}},f={},g=[],b={toc:g};function h(t){var e,r=t,{components:a}=r,c=((t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=s(s({},b),c),l(e,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",null,"SEARCH"),(0,n.kt)("p",null,"Return the index of the search text within the text. The search starts at index."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("p",null,"=SEARCH(TextToSearch, Text, ","[","StartAt","]",")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"TextToSearch"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Text to search for. ",(0,n.kt)("strong",{parentName:"td"},"Note:")," wildcards like * or ? are supported.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Text to search inside.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"StartAt (optional)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Character index to start search at.  ",(0,n.kt)("br",null),(0,n.kt)("br",null),"Default value: 1")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Number or #VALUE"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Position, where the text is found, otherwise #VALUE.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Formula"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,'=SEARCH("me", "Search me now")'))),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"8"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("pre",null,(0,n.kt)("code",null,'=SEARCH("a*c", "abc")'))),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))))))}h.isMDXComponent=!0}}]);