"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[42045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(n),m=o,d=g["".concat(u,".").concat(m)]||g[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>g,metadata:()=>d,toc:()=>h});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&c(e,n,t[n]);return e};const g={id:"mc-groups",title:"Groups",sidebar_label:"Groups"},m=void 0,d={unversionedId:"management-center/overview/configuration/mc-groups",id:"version-2.7/management-center/overview/configuration/mc-groups",title:"Groups",description:"This section describes how to manage groups. Groups serve as a hub to gather multiple clients and roles. The more",source:"@site/mosquitto_versioned_docs/version-2.7/management-center/overview/configuration/groups.md",sourceDirName:"management-center/overview/configuration",slug:"/management-center/overview/configuration/mc-groups",permalink:"/documentation-staging/mosquitto/2.7/management-center/overview/configuration/mc-groups",draft:!1,tags:[],version:"2.7",frontMatter:{id:"mc-groups",title:"Groups",sidebar_label:"Groups"},sidebar:"someSidebar",previous:{title:"Clusters",permalink:"/documentation-staging/mosquitto/2.7/management-center/overview/configuration/mc-clusters"},next:{title:"Roles",permalink:"/documentation-staging/mosquitto/2.7/management-center/overview/configuration/mc-roles"}},f={},h=[{value:"Groups Overview",id:"groups-overview",level:2},{value:"Assign clients and roles",id:"assign-clients-and-roles",level:3},{value:"Delete a group",id:"delete-a-group",level:3},{value:"Create groups",id:"create-groups",level:2},{value:"Edit groups",id:"edit-groups",level:2},{value:"Anonymous Group",id:"anonymous-group",level:2}],y={toc:h};function v(e){var t,o=e,{components:c}=o,g=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(o,["components"]);return(0,r.kt)("wrapper",(t=p(p({},y),g),a(t,i({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This section describes how to manage groups. Groups serve as a hub to gather multiple clients and roles. The more\nclients are added to your broker the harder it gets to administer them. Groups can help you structure and quickly adjust\nyour current setup."),(0,r.kt)("p",null,"Groups are part of the ",(0,r.kt)("a",p({parentName:"p"},{href:"/documentation-staging/mosquitto/2.7/MQTT/mqtt-glossary#Dynamic-Security"}),"dynamic security")," of Mosquitto.\nSee ",(0,r.kt)("a",p({parentName:"p"},{href:"/documentation-staging/mosquitto/2.7/broker/Mosquitto%20Manual/broker-dynamic-security"}),"here")," for\na detailed description of the concepts of dynamic security."),(0,r.kt)("admonition",p({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"The dynamic security feature is available since version 2.0 of Eclipse Mosquitto. If you are still using version 1.6,\nsee ",(0,r.kt)("a",p({parentName:"p"},{href:"https://mosquitto.org/documentation/migrating-to-2-0/"}),"this guide")," on how to migrate.")),(0,r.kt)("h2",p({},{id:"groups-overview"}),"Groups Overview"),(0,r.kt)("p",null,"The group table lists all groups showing their name, text name and description. In addition, you can view and\nassign one or more clients to the group and view and assign the role(s) of a group."),(0,r.kt)("p",null,"Following a sample group table listing some sample groups:"),(0,r.kt)("img",{className:"docimagemb",src:n(94708).Z,width:"100%"}),(0,r.kt)("p",null,"Below the table you can select how many groups are displayed on one page of the table. Clicking on the arrow button\nwill show the next or previous set of groups, if there are more groups defined than visible on one page."),(0,r.kt)("h3",p({},{id:"assign-clients-and-roles"}),"Assign clients and roles"),(0,r.kt)("p",null,"You are able to edit roles and clients within a group. In the group table you are able to set one or multiple roles\nor clients to a group. Open the dropdown box and select from the list."),(0,r.kt)("h3",p({},{id:"delete-a-group"}),"Delete a group"),(0,r.kt)("p",null,'You can delete a group from the list by clicking on the "Trash bin" icon and confirming this action.'),(0,r.kt)("h2",p({},{id:"create-groups"}),"Create groups"),(0,r.kt)("p",null,'Create a group by clicking the "New Group" Button in the bottom right corner. Set a name and description to remind yourself, why\nyou added this particular group.'),(0,r.kt)("img",{className:"docimagemb",src:n(54064).Z,width:"70%"}),(0,r.kt)("p",null,"The following properties can be defined:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": Enter a unique name for the group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Text Name"),": Enter an optional text name for the group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": Enter an optional description for the group to give hints to the general use of the group")),(0,r.kt)("h2",p({},{id:"edit-groups"}),"Edit groups"),(0,r.kt)("p",null,'You can always edit the group and change the properties again by clicking on the group in the group table and clicking\non "Edit" in the upcoming page.'),(0,r.kt)("img",{className:"docimagemb",src:n(24069).Z,width:"70%"}),(0,r.kt)("h2",p({},{id:"anonymous-group"}),"Anonymous Group"),(0,r.kt)("p",null,'In the top right section of the page you can assign the "Anonymous Group". This selection allows you to set a group,\nwhich will automatically be assigned to unauthenticated clients. This way you can fine tune, what unauthenticated\nclients are allowed to do. Make sure, that unauthenticated access is permitted in the configuration to use this.'))}v.isMDXComponent=!0},24069:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/groupedit-f0c82e1a380274911e18525213e251e1.png"},54064:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/groupnew-d8045663e9f066e13395e0fd9560806f.png"},94708:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/groups-a4787111a604ff71e20d08a944a8dc28.png"}}]);