"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[68076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,d=m["".concat(i,".").concat(g)]||m[g]||c[g]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>b,frontMatter:()=>m,metadata:()=>d,toc:()=>y});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&s(e,n,t[n]);return e};const m={id:"valuecopy",title:"VALUE.COPY",hide_title:!0},g=void 0,d={unversionedId:"functions/streamsheet/valuecopy",id:"functions/streamsheet/valuecopy",title:"VALUE.COPY",description:"VALUE.COPY",source:"@site/streamsheets/functions/streamsheet/valuecopy.md",sourceDirName:"functions/streamsheet",slug:"/functions/streamsheet/valuecopy",permalink:"/documentation-staging/streamsheets/next/functions/streamsheet/valuecopy",draft:!1,tags:[],version:"current",frontMatter:{id:"valuecopy",title:"VALUE.COPY",hide_title:!0},sidebar:"someSidebar",previous:{title:"TRIGGERSTEP",permalink:"/documentation-staging/streamsheets/next/functions/streamsheet/triggerstep"},next:{title:"VALUE.DETECTCHANGE",permalink:"/documentation-staging/streamsheets/next/functions/streamsheet/valuedetectchange"}},f={},y=[],k={toc:y};function b(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},k),s),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",null,"VALUE.COPY"),(0,r.kt)("p",null,"Copies the values from the given source range to the target range. Beware that only the values are copied and not formulas. If the target range is a multiple of the source range, the target range is filled repeatedly with the source values."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("p",null,"=VALUE.COPY(SourceRange, TargetRange)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"SourceRange"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Range"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Source Range to retrieve data from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"TargetRange"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Range"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Target Range to copy values to. If Range smaller or bigger as Source Range values will be added accordingly (less input or multiple input).")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Boolean or Error"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"TRUE, if successful.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"| |A|B|\n||---|---|---|\n|",(0,r.kt)("strong",{parentName:"p"},"1"),"| | |\n|",(0,r.kt)("strong",{parentName:"p"},"2"),"|Element1a|Element2a|\n|",(0,r.kt)("strong",{parentName:"p"},"3"),"| | |\n|",(0,r.kt)("strong",{parentName:"p"},"4"),"|Element1a|Element2a|"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Formula"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("pre",null,(0,r.kt)("code",null,"=VALUE.COPY(A2:B2,A4:B4)"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"TRUE"),(0,r.kt)("td",c({parentName:"tr"},{align:null}))))),(0,r.kt)("admonition",c({},{type:"warning"}),(0,r.kt)("p",{parentName:"admonition"}," Only the values will be moved. Formulas will be removed. ")))}b.isMDXComponent=!0}}]);