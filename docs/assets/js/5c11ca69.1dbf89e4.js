"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[18471],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},42026:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>d,default:()=>y,frontMatter:()=>s,metadata:()=>f,toc:()=>k});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&c(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&c(t,n,e[n]);return t};const s={id:"value",title:"VALUE",hide_title:!0},d=void 0,f={unversionedId:"functions/text/value",id:"functions/text/value",title:"VALUE",description:"VALUE",source:"@site/streamsheets/functions/text/value.md",sourceDirName:"functions/text",slug:"/functions/text/value",permalink:"/documentation-staging/streamsheets/next/functions/text/value",draft:!1,tags:[],version:"current",frontMatter:{id:"value",title:"VALUE",hide_title:!0},sidebar:"someSidebar",previous:{title:"UPPER",permalink:"/documentation-staging/streamsheets/next/functions/text/upper"},next:{title:"MONGO.AGGREGATE",permalink:"/documentation-staging/streamsheets/next/functions/timeseries/mongoaggregate"}},g={},k=[],b={toc:k};function y(t){var e,n=t,{components:a}=n,c=((t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&u.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=m(m({},b),c),l(e,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",null,"VALUE"),(0,r.kt)("p",null,"Converts a textual number representation to a number."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=VALUE(Text, Locale)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"A string representing a number value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Locale"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),'An optional locale code. Currently only "en" and "de" are supported.  ',(0,r.kt)("br",null),(0,r.kt)("br",null),'Default value: "Application Locale"')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("p",null,"A number or #VALUE! if given Text cannot be converted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,'=VALUE("22.45")'))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"22.45"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,'=VALUE("22,45", "de")'))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"22,45"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,'=VALUE("hello", "de")'))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"#VALUE!"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))))))}y.isMDXComponent=!0}}]);