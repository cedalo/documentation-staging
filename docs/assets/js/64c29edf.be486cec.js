"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[80927],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=u(n),f=a,b=s["".concat(p,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(b,l(l({ref:e},c),{},{components:n})):r.createElement(b,l({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},24745:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>f,default:()=>y,frontMatter:()=>s,metadata:()=>b,toc:()=>d});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&c(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&c(t,n,e[n]);return t};const s={id:"floattobin",title:"FLOAT.TO.BIN",hide_title:!0},f=void 0,b={unversionedId:"functions/engineering/floattobin",id:"functions/engineering/floattobin",title:"FLOAT.TO.BIN",description:"FLOAT.TO.BIN",source:"@site/streamsheets/functions/engineering/floattobin.md",sourceDirName:"functions/engineering",slug:"/functions/engineering/floattobin",permalink:"/documentation-staging/streamsheets/next/functions/engineering/floattobin",draft:!1,tags:[],version:"current",frontMatter:{id:"floattobin",title:"FLOAT.TO.BIN",hide_title:!0},sidebar:"someSidebar",previous:{title:"DEC.TO.OCT",permalink:"/documentation-staging/streamsheets/next/functions/engineering/dectooct"},next:{title:"FLOAT.TO.HEX",permalink:"/documentation-staging/streamsheets/next/functions/engineering/floattohex"}},g={},d=[],k={toc:d};function y(t){var e,n=t,{components:a}=n,c=((t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&u.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=m(m({},k),c),o(e,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",null,"FLOAT.TO.BIN"),(0,r.kt)("p",null,"Converts a floating point number to binary. Floating point numbers are represented as a 32bit-IEEE-754 number."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=FLOAT.TO.BIN(Number)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The floating point number to convert.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number or Error"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The binary number or a #NUM! ",(0,r.kt)("a",m({parentName:"td"},{href:"../../other/errorcodes"}),"error")," if given number is not a valid floating point number.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=FLOAT.TO.BIN(2.567)"))),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"01000000001001000100100110111010"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"converts floating point 2.567 to binary")))))}y.isMDXComponent=!0}}]);