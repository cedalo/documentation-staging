"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[28853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>h,frontMatter:()=>m,metadata:()=>d,toc:()=>g});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e};const m={id:"rest-api-overview",title:"REST APIs",sidebar_label:"REST API Overview"},f=void 0,d={unversionedId:"api/rest-api-overview",id:"api/rest-api-overview",title:"REST APIs",description:"The Platform REST API provides endpoints to return status data and allows active management",source:"@site/mosquitto/api/rest-api-overview.md",sourceDirName:"api",slug:"/api/rest-api-overview",permalink:"/documentation-staging/mosquitto/next/api/rest-api-overview",draft:!1,tags:[],version:"current",frontMatter:{id:"rest-api-overview",title:"REST APIs",sidebar_label:"REST API Overview"},sidebar:"someSidebar",previous:{title:"Topic Tree",permalink:"/documentation-staging/mosquitto/next/api/mqttapis/topic-tree"},next:{title:"Access Control",permalink:"/documentation-staging/mosquitto/next/api/restapis/restapi-access-control"}},v={},g=[{value:"Authenticate with API Token",id:"authenticate-with-api-token",level:2},{value:"Available APIs",id:"available-apis",level:2}],b={toc:g};function h(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},b),c),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The Platform REST API provides endpoints to return status data and allows active management\nof the Cedalo MQTT Platform. Mosquitto administrators can use the REST API to perform\nautomated actions, which would normally be administered via the Cedalo Platform UI."),(0,a.kt)("h2",u({},{id:"authenticate-with-api-token"}),"Authenticate with API Token"),(0,a.kt)("p",null,"Authenticating is achieved using API Tokens. These must be created via the Cedalo Platform UI. For a detailed explanation on\nhow to create and manage API Tokens ",(0,a.kt)("a",u({parentName:"p"},{href:"../security/platform-access/api-tokens"}),"see here"),"."),(0,a.kt)("p",null,"Add the created token to API requests as a bearer token for authentication."),(0,a.kt)("h2",u({},{id:"available-apis"}),"Available APIs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/documentation-staging/mosquitto/next/api/restapis/restapi-access-control"}),"Access Control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/documentation-staging/mosquitto/next/api/restapis/restapi-brokers"}),"Brokers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/documentation-staging/mosquitto/next/api/restapis/restapi-client-control"}),"Client Control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/documentation-staging/mosquitto/next/api/restapis/restapi-client-inspect"}),"Client Inspection")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/documentation-staging/mosquitto/next/api/restapis/restapi-clusters"}),"Clusters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/documentation-staging/mosquitto/next/api/restapis/restapi-projects"}),"Projects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/documentation-staging/mosquitto/next/api/restapis/restapi-streams"}),"Streams")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/documentation-staging/mosquitto/next/api/restapis/restapi-tokens"}),"Tokens")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/documentation-staging/mosquitto/next/api/restapis/restapi-topic-tree"}),"Topic Tree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/documentation-staging/mosquitto/next/api/restapis/restapi-users"}),"Users"))))}h.isMDXComponent=!0}}]);