"use strict";(self.webpackChunkstreamsheets=self.webpackChunkstreamsheets||[]).push([[35661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var o=n(3905),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&p(e,n,t[n]);return e};const u={id:"mc-topics",title:"Topic Tree",sidebar_label:"Topic Tree"},d=void 0,f={unversionedId:"management-center/overview/inspection/mc-topics",id:"version-2.6/management-center/overview/inspection/mc-topics",title:"Topic Tree",description:"The topic tree displays all topics, that have been used by clients. The topic tree is deducted from the topic",source:"@site/mosquitto_versioned_docs/version-2.6/management-center/overview/inspection/topics.md",sourceDirName:"management-center/overview/inspection",slug:"/management-center/overview/inspection/mc-topics",permalink:"/documentation-staging/mosquitto/management-center/overview/inspection/mc-topics",draft:!1,tags:[],version:"2.6",frontMatter:{id:"mc-topics",title:"Topic Tree",sidebar_label:"Topic Tree"},sidebar:"someSidebar",previous:{title:"Clients",permalink:"/documentation-staging/mosquitto/management-center/overview/inspection/mc-clientinspection"},next:{title:"Configuration",permalink:"/documentation-staging/mosquitto/management-center/overview/configuration/"}},h={},b=[],y={toc:b};function g(e){var t,r=e,{components:p}=r,u=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&l.call(e,o)&&(n[o]=e[o]);return n})(r,["components"]);return(0,o.kt)("wrapper",(t=m(m({},y),u),i(t,a({components:p,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"The topic tree displays all topics, that have been used by clients. The topic tree is deducted from the topic\nhierarchy or path, that is used within ",(0,o.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/MQTT/mqtt-glossary#topic"}),"Topics"),"."),(0,o.kt)("p",null,"The topics are collected during message transfer. For the system topic, the tree should look like in the following\npicture, if you open the tree like shown below. To open the tree parts click on the arrows on the left."),(0,o.kt)("admonition",m({},{type:"info"}),(0,o.kt)("p",{parentName:"admonition"},"The topic tree has to be activated to collect topics on the ",(0,o.kt)("a",m({parentName:"p"},{href:"/documentation-staging/mosquitto/management-center/overview/administration/mc-settings"}),"Settings Page"),". Please be\naware that collecting topics allocates resources and\ncan lead to performance or memory issues.")),(0,o.kt)("img",{className:"docimagemb",src:n(30676).Z,width:"100%"}),(0,o.kt)("p",null,"Within the tree you can also view the last payload for a topic. The number of subtopics is shown, if a parent element is selected.\nThe number of messages for a single topic or for all subtopics are displayed in the last column."),(0,o.kt)("p",null,"If you click on a topic, additional infos are shown on a separate\ntable at the right part of the screen. You can also observe that the topic payloads are visualized while\na topic is selected. If you leave the page or select another topic, the payload content will not be available for\nthis screen anymore."),(0,o.kt)("img",{className:"docimagemb",src:n(85112).Z,width:"100%"}),(0,o.kt)("admonition",m({},{type:"info"}),(0,o.kt)("p",{parentName:"admonition"},"The Clear Cache Button is only available, you have Topic Tree REST API enabled.")),(0,o.kt)("p",null,"The Clear Cache Button allows you to delete the topics, that have been collected so far for the topic tree inspection.\nThis will free memory used for the topic tree."))}g.isMDXComponent=!0},30676:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/topictree-5cd135dbe0ec161b84444633eac8bfc6.png"},85112:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/topictreedetail-9a1ca28d7882992193cb9483809a9426.png"}}]);