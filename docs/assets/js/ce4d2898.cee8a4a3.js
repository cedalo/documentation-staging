"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[49751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&c(e,n,t[n]);return e};const d={id:"appindex",title:"App",sidebar_label:"Overview"},h=void 0,m={unversionedId:"guides/app/appindex",id:"guides/app/appindex",title:"App",description:"A Streamsheet app is the container for up to 6 sheets. Streamsheet apps run on a server. Hence, once you start them, they keep running until they are stopped or the server",source:"@site/streamsheets/guides/app/index.md",sourceDirName:"guides/app",slug:"/guides/app/",permalink:"/documentation-staging/streamsheets/next/guides/app/",draft:!1,tags:[],version:"current",frontMatter:{id:"appindex",title:"App",sidebar_label:"Overview"},sidebar:"someSidebar",previous:{title:"Guides",permalink:"/documentation-staging/streamsheets/next/guides/"},next:{title:"App Files",permalink:"/documentation-staging/streamsheets/next/guides/app/appfiles"}},g={},f=[{value:"App Settings",id:"app-settings",level:2},{value:"Favorite",id:"favorite",level:2}],v={toc:f};function b(e){var t,a=e,{components:c}=a,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},v),d),i(t,s({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A Streamsheet app is the container for up to 6 sheets. Streamsheet apps run on a server. Hence, once you start them, they keep running until they are stopped or the server\nis shut down. Starting an app means, that the sheets within an app are recalculated based on different available rules (e.g driven by message arrival or based on a time interval)\nThat means you can close your web browser and the App is still running. It can be accessed over your\nnetwork or even the web at any time from any device. The sheets contain the application logic defined by\nspreadsheet function and connections to external data sources."),(0,r.kt)("p",null,"In this section the app wide settings are explained. The sheet logic is described in the ",(0,r.kt)("a",u({parentName:"p"},{href:"/documentation-staging/streamsheets/next/guides/sheets/"}),"Sheets")," category."),(0,r.kt)("h2",u({},{id:"app-settings"}),"App Settings"),(0,r.kt)("p",null,"Behind the three-point icon, app settings & menus are hidden.\nThese control content that is not sheet-related, but application-related content."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Settings",src:n(68066).Z,width:"343",height:"312"})),(0,r.kt)("p",null,"The following sections describe the settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/documentation-staging/streamsheets/next/guides/app/appfiles"}),"App Files to view export files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/documentation-staging/streamsheets/next/guides/app/appsettings"}),"App Settings to e.g. assign a name, description and image to an App")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/documentation-staging/streamsheets/next/guides/app/names"}),"Create or modify sheet names to label a sheet range")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/documentation-staging/streamsheets/next/guides/app/shapes"}),"Shape list displaying an overview of used shapes and charts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/documentation-staging/streamsheets/next/guides/app/server"}),"Server Settings to configure an app as a server"))),(0,r.kt)("h2",u({},{id:"favorite"}),"Favorite"),(0,r.kt)("p",null,'It is possible to set an App as a "Favorite". To achieve that, click on the heart icon on top of the toolbar.\nFavorites are added to the start page and are easily identified in the Apps page via the "Favorite Icon". You can also sort the\napps list by the favorite attribute.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fav",src:n(39892).Z,width:"1275",height:"157"})))}b.isMDXComponent=!0},39892:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Favorite-f3323cfcff181b08bbf6fc1e0bc129f7.png"},68066:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Settings-e652ad6cc6c2c0a415a07cbb59bd7354.png"}}]);