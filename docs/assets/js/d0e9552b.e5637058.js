"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[91962],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5e4:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>g});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&c(e,r,t[r]);return e};const m={id:"cryptohmac",title:"CRYPTO.HMAC",sidebar_label:"CRYPTO.HMAC"},d=void 0,h={unversionedId:"functionss/crypto/cryptohmac",id:"version-2.5/functionss/crypto/cryptohmac",title:"CRYPTO.HMAC",description:"Creates an hash based authentication code (HMAC) for given text and secret. The used hash algorithm can be optionally specified. For a list of supported hash algorithms please refer to Hash Algorithms. The used hash algorithms are from the OpenSSL Library. See their docs for more details.",source:"@site/streamsheets_versioned_docs/version-2.5/functionss/crypto/cryptohmac.md",sourceDirName:"functionss/crypto",slug:"/functionss/crypto/cryptohmac",permalink:"/documentation-staging/streamsheets/2.5/functionss/crypto/cryptohmac",draft:!1,tags:[],version:"2.5",frontMatter:{id:"cryptohmac",title:"CRYPTO.HMAC",sidebar_label:"CRYPTO.HMAC"}},f={},g=[],y={toc:g};function b(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},y),c),o(t,l({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Creates an hash based authentication code (HMAC) for given text and secret. The used hash algorithm can be optionally specified. For a list of supported hash algorithms please refer to ",(0,a.kt)("a",u({parentName:"p"},{href:"../../other#hash-algorithms"}),"Hash Algorithms"),". The used hash algorithms are from the OpenSSL Library. See their ",(0,a.kt)("a",u({parentName:"p"},{href:"https://www.openssl.org/docs/"}),"docs")," for more details."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("p",null,"=CRYPTO.HMAC(Text, Secret, ","[","Algorithm","]",")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"A text to create hash value for.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Secret"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"A text used as key to generate the cryptographic HMAC hash.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Algorithm (optional)"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),'The hash algorithm to use. Defaults to "sha256"')))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return")),(0,a.kt)("p",null,"The hmac value or an ",(0,a.kt)("a",u({parentName:"p"},{href:"../../other#error-codes"}),"Error Code")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Formula"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,"${formula}"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a28f6aee6a27565bf1b868da1947c35147039fe6482b35d3b8fdeb9592e42e99"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),'By default "sha256" is used.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("pre",null,(0,a.kt)("code",null,"${formula}"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"9ffaf5da07c95deaa000729cd65fefea"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),'Same text and secret as before but creates an hmac using "md5" algorithm.')))))}b.isMDXComponent=!0}}]);