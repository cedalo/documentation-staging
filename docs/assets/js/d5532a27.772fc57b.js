"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[65455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(n),b=a,f=s["".concat(p,".").concat(b)]||s[b]||c[b]||o;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},23224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>k,frontMatter:()=>s,metadata:()=>f,toc:()=>d});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&m(e,n,t[n]);return e};const s={id:"bintofloat",title:"BIN.TO.FLOAT",hide_title:!0},b=void 0,f={unversionedId:"functions/engineering/bintofloat",id:"functions/engineering/bintofloat",title:"BIN.TO.FLOAT",description:"BIN.TO.FLOAT",source:"@site/streamsheets/functions/engineering/bintofloat.md",sourceDirName:"functions/engineering",slug:"/functions/engineering/bintofloat",permalink:"/documentation-staging/streamsheets/next/functions/engineering/bintofloat",draft:!1,tags:[],version:"current",frontMatter:{id:"bintofloat",title:"BIN.TO.FLOAT",hide_title:!0},sidebar:"someSidebar",previous:{title:"BIN.TO.DEC",permalink:"/documentation-staging/streamsheets/next/functions/engineering/bintodec"},next:{title:"BIN.TO.HEX",permalink:"/documentation-staging/streamsheets/next/functions/engineering/bintohex"}},g={},d=[],y={toc:d};function k(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),m),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",null,"BIN.TO.FLOAT"),(0,r.kt)("p",null,"Converts a binary number to a floating point number. Floating point numbers are represented as a 32bit-IEEE-754 number."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=BIN.TO.FLOAT(Number)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The binary number to convert.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Number or Error"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The floating point number or a #NUM! ",(0,r.kt)("a",c({parentName:"td"},{href:"../../other/errorcodes"}),"error")," if given number is not a valid binary number.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,'=BIN.TO.FLOAT("01000000010010010000111111011011")'))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"3.1415927410125732421875"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"converts binary number 01000000010010010000111111011011 to floating point number")))))}k.isMDXComponent=!0}}]);